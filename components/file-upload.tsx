"use client"
import { parseSchemaFromZip } from '../lib/parseZip'

import type React from "react"

import { useState } from "react"
import { FilePlus, Upload } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export function FileUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [description, setDescription] = useState("")
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && selectedFile.name.endsWith(".zip")) {
      setFile(selectedFile)
      setError(null)
    } else {
      setFile(null)
      setError("Please select a valid ZIP file")
    }
  }

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    if (!file) {
      setError("Please select a ZIP file")
      return
    }
  
    if (!description) {
      setError("Please provide a system description")
      return
    }
  
    setUploading(true)
    setError(null)
  
    try {
      const fileName = `${Date.now()}-${file.name}`
      const { data: fileData, error: fileError } = await supabase.storage.from("v0-projects").upload(fileName, file)
      if (fileError) throw fileError
  
      const schemaResult = await parseSchemaFromZip(file)
  
      const { data: projectData, error: projectError } = await supabase
        .from("projects")
        .insert([
          {
            name: file.name.replace(".zip", ""),
            description,
            file_path: fileName,
            status: "uploaded",
            schema_found: schemaResult.found,
            schema_content: schemaResult.content,
            checkpoint: { stage: "schema_checked" },
          },
        ])
        .select()
  
      if (projectError) throw projectError
  
      window.location.href = `/projects/${projectData[0].id}`
    } catch (err) {
      console.error("Upload error:", err)
      setError("Failed to upload project. Please try again.")
    } finally {
      setUploading(false)
    }
  }
  


  return (
    <Card className="w-full max-w-md">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-lg p-12 text-center">
            {file ? (
              <div className="flex flex-col items-center gap-2">
                <FilePlus className="h-10 w-10 text-primary" />
                <p className="text-sm font-medium">{file.name}</p>
                <p className="text-xs text-[#2dd4bf]">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                <Button type="button" variant="outline" size="sm" onClick={() => setFile(null)}>
                  Change file
                </Button>
              </div>
            ) : (
              <label className="flex flex-col items-center gap-2 cursor-pointer">
                <Upload className="h-10 w-10 text-[#2dd4bf]" />
                <span className="text-lg font-medium">Drag and drop or browse your v0 ZIP file</span>
                <input type="file" accept=".zip" className="hidden" onChange={handleFileChange} />
                <Button type="button" variant="outline">
                  Browse files
                </Button>
              </label>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              System Description
            </label>
            <Textarea
              id="description"
              placeholder="A platform for NGOs to register, vet, and hire domestic workers"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="resize-none"
            />
          </div>

          {error && <div className="text-sm text-destructive">{error}</div>}

          <Button type="submit" className="w-full" disabled={!file || !description || uploading}>
            {uploading ? "Uploading..." : "Upload and Process"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
