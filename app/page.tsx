
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function HomePage() {
  const [status, setStatus] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!selectedFile) {
      setStatus('Please select a file.')
      return
    }

    const formData = new FormData()
    formData.append('file', selectedFile)

    try {
      setStatus('Uploading...')
      const res = await fetch('https://v0flow-agent.onrender.com/upload', {
        method: 'POST',
        body: formData,
      })

      const result = await res.json()
      setStatus(result.message || 'Uploaded successfully')
    } catch (err) {
      console.error(err)
      setStatus('Upload failed')
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
            Welcome to v0Flow
          </h1>
          <p className="text-lg text-muted-foreground">
            Upload your <code>.zip</code> project from v0.dev and watch it deploy automatically.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <Label htmlFor="file">ZIP File</Label>
              <Input id="file" type="file" onChange={handleFileChange} />
            </div>
            <Button type="submit">Upload</Button>
            {status && <p className="text-sm text-muted-foreground">{status}</p>}
          </form>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/demo.gif"
            alt="Demo"
            width={500}
            height={300}
            className="rounded shadow-md"
          />
        </div>
      </div>
      <footer className="mt-12 text-sm text-muted-foreground">
        Need help? <Link href="/support" className="underline">Contact Support</Link>
      </footer>
    </main>
  )
}
