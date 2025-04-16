
'use client'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export default function Home() {
  const [projectName, setProjectName] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState('')

  const handleUpload = async () => {
    if (!file || !description || !projectName) {
      alert('All fields required.')
      return
    }
    setStatus('Uploading...')

    const filename = `${Date.now()}_${file.name}`
    const { data: uploadData, error: uploadError } = await supabase.storage.from('projects').upload(filename, file)

    if (uploadError) {
      console.error(uploadError)
      setStatus('Upload failed')
      return
    }

    const zipFileUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/projects/${filename}`
    const checkpoint = {
      module: "Frontend Upload UI",
      progress: "ZIP + Description uploaded, metadata saved in Supabase",
      next_action: "Parse ZIP and analyze description"
    }

    const { data, error } = await supabase.from('projects').insert([ {
      project_name: projectName,
      description,
      zip_file_url: zipFileUrl,
      status: 'uploaded',
      checkpoint
    } ])

    if (error) {
      console.error(error)
      setStatus('Save failed')
    } else {
      setStatus('Uploaded successfully')
    }
  }

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Upload Your v0 Project</h1>
      <input type="text" placeholder="Project Name" className="border p-2 mb-4 w-full" onChange={(e) => setProjectName(e.target.value)} />
      <textarea placeholder="Project Description" className="border p-2 mb-4 w-full h-24" onChange={(e) => setDescription(e.target.value)} />
      <input type="file" accept=".zip" onChange={(e) => setFile(e.target.files[0])} className="mb-4" />
      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded">Upload</button>
      <p className="mt-4 text-sm text-gray-500">{status}</p>
    </main>
  )
}
