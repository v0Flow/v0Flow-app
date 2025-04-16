'use client'

import type { ReactNode } from "react"

export function ConsultantLayout({ children }: { children: ReactNode }) {
  return (
    <div className="p-6 bg-muted min-h-screen">
      <div className="max-w-6xl mx-auto space-y-6">{children}</div>
    </div>
  )
}
