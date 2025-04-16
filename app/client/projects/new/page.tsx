"use client"

import type React from "react"

import { useState } from "react"
import { ClientLayout } from "@/components/client/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FilePlus, Upload, ArrowRight, Check, Info } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/lib/auth-context"

export default function NewProjectPage() {
  const [activeTab, setActiveTab] = useState("upload")
  const [file, setFile] = useState<File | null>(null)
  const [projectName, setProjectName] = useState("")
  const [description, setDescription] = useState("")
  const [requirements, setRequirements] = useState("")
  const [pricingTier, setPricingTier] = useState("standard")
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()
  const router = useRouter()
  const { user } = useAuth()

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

  const handleNextStep = () => {
    if (activeTab === "upload") {
      if (!file) {
        setError("Please select a ZIP file")
        return
      }
      if (!projectName) {
        setError("Please provide a project name")
        return
      }
      if (!description) {
        setError("Please provide a project description")
        return
      }
      setActiveTab("requirements")
    } else if (activeTab === "requirements") {
      if (!requirements) {
        setError("Please provide project requirements")
        return
      }
      setActiveTab("pricing")
    }
  }

  const handleSubmit = async () => {
    if (!file || !projectName || !description || !requirements || !pricingTier) {
      setError("Please fill in all required fields")
      return
    }

    setUploading(true)
    setError(null)

    try {
      // Upload file to Supabase Storage
      const fileName = `${Date.now()}-${file.name}`
      const { data: fileData, error: fileError } = await supabase.storage.from("v0-projects").upload(fileName, file)

      if (fileError) throw fileError

      // Create project record in database
      const { data: projectData, error: projectError } = await supabase
        .from("projects")
        .insert([
          {
            name: projectName,
            description,
            requirements,
            file_path: fileName,
            status: "uploaded",
            client_id: user?.id,
            price: getPriceForTier(pricingTier),
            payment_status: "unpaid",
          },
        ])
        .select()

      if (projectError) throw projectError

      toast({
        title: "Project created successfully",
        description: "Your project has been uploaded and is being processed.",
      })

      // Redirect to project page
      router.push(`/client/projects/${projectData[0].id}`)
    } catch (err) {
      console.error(err)
      setError("Failed to upload project. Please try again.")
      toast({
        title: "Error",
        description: "Failed to upload project. Please try again.",
        variant: "destructive",
      })
    } finally {
      setUploading(false)
    }
  }

  return (
    <ClientLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">New Project</h1>
          <p className="text-[#2dd4bf]">Upload your v0 ZIP file and provide project details</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upload">1. Upload ZIP</TabsTrigger>
            <TabsTrigger value="requirements">2. Requirements</TabsTrigger>
            <TabsTrigger value="pricing">3. Pricing & Payment</TabsTrigger>
          </TabsList>
          <TabsContent value="upload" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Upload v0 ZIP File</CardTitle>
                <CardDescription>Upload your v0.dev ZIP file to start the transformation process</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
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
                  <Label htmlFor="project-name">Project Name</Label>
                  <Input
                    id="project-name"
                    placeholder="My Awesome Project"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Project Description</Label>
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
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleNextStep}>
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="requirements" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Requirements</CardTitle>
                <CardDescription>Provide detailed requirements for your project</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="requirements">Requirements</Label>
                  <Textarea
                    id="requirements"
                    placeholder="Describe your project requirements in detail..."
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    rows={10}
                    className="resize-none"
                  />
                  <p className="text-xs text-[#2dd4bf]">
                    Include information about database needs, authentication requirements, third-party integrations,
                    etc.
                  </p>
                </div>

                {error && <div className="text-sm text-destructive">{error}</div>}
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleNextStep}>
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="pricing" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Pricing & Payment</CardTitle>
                <CardDescription>Select a pricing tier and complete your payment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <RadioGroup value={pricingTier} onValueChange={setPricingTier}>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="relative rounded-lg border p-4 cursor-pointer hover:border-primary">
                      <RadioGroupItem value="basic" id="basic" className="absolute right-4 top-4" />
                      <div className="space-y-2">
                        <h3 className="font-medium">Basic</h3>
                        <p className="text-sm text-[#2dd4bf]">Essential deployment with minimal customization</p>
                        <p className="font-bold">$499</p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-primary" />
                            <span>Database schema generation</span>
                          </li>
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-primary" />
                            <span>Supabase deployment</span>
                          </li>
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-primary" />
                            <span>GitHub code push</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="relative rounded-lg border border-primary p-4 cursor-pointer">
                      <RadioGroupItem value="standard" id="standard" className="absolute right-4 top-4" checked />
                      <div className="space-y-2">
                        <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          Popular
                        </div>
                        <h3 className="font-medium">Standard</h3>
                        <p className="text-sm text-[#2dd4bf]">Complete deployment with customization options</p>
                        <p className="font-bold">$999</p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-primary" />
                            <span>Everything in Basic</span>
                          </li>
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-primary" />
                            <span>Vercel deployment</span>
                          </li>
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-primary" />
                            <span>Custom domain setup</span>
                          </li>
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-primary" />
                            <span>Basic customizations</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="relative rounded-lg border p-4 cursor-pointer hover:border-primary">
                      <RadioGroupItem value="premium" id="premium" className="absolute right-4 top-4" />
                      <div className="space-y-2">
                        <h3 className="font-medium">Premium</h3>
                        <p className="text-sm text-[#2dd4bf]">Enterprise-grade deployment with full support</p>
                        <p className="font-bold">$1,999</p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-primary" />
                            <span>Everything in Standard</span>
                          </li>
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-primary" />
                            <span>Advanced customizations</span>
                          </li>
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-primary" />
                            <span>Consultant support</span>
                          </li>
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-primary" />
                            <span>30 days of maintenance</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </RadioGroup>

                <div className="rounded-lg border p-4 bg-muted/50">
                  <div className="flex items-start gap-4">
                    <Info className="h-5 w-5 text-[#2dd4bf] mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium">Payment Information</h4>
                      <p className="text-sm text-[#2dd4bf]">
                        You will be redirected to our payment processor after submitting your project. Your project will
                        begin processing once payment is confirmed.
                      </p>
                    </div>
                  </div>
                </div>

                {error && <div className="text-sm text-destructive">{error}</div>}
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSubmit} disabled={uploading}>
                  {uploading ? "Submitting..." : "Submit Project"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ClientLayout>
  )
}

function getPriceForTier(tier: string): number {
  const prices = {
    basic: 499,
    standard: 999,
    premium: 1999,
  }

  return prices[tier as keyof typeof prices] || 999
}
