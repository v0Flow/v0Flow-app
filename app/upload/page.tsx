'use client'

import { useState } from 'react'

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [status, setStatus] = useState<string | null>(null)

  const handleUpload = async () => {
    if (!file) return setStatus("No file selected")

    const formData = new FormData()
    formData.append("file", file)

    try {
      const res = await fetch("https://v0flow-agent.onrender.com/upload", {
        method: "POST",
        body: formData,
      })

      const data = await res.json()
      setStatus(data.message || "Upload complete")
    } catch (err) {
      console.error(err)
      setStatus("Upload failed")
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Upload v0 ZIP</h1>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleUpload}>
        Upload
      </button>
      {status && <p className="mt-2 text-sm text-gray-700">{status}</p>}
    </div>
  )
}
