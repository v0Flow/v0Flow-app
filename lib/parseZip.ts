// /lib/parseZip.ts
export async function parseSchemaFromZip(file: File) {
    const formData = new FormData()
    formData.append('file', file)
  
    const res = await fetch('/api/parse-zip', {
      method: 'POST',
      body: formData,
    })
  
    if (!res.ok) {
      const error = await res.json()
      throw new Error(error.error || 'ZIP parse failed')
    }
  
    const result = await res.json()
    return result  // { found: true, content } or { found: false }
  }
  