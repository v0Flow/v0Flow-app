'use client'

import { useState } from "react"
import { ConsultantLayout } from '@/components/consultant/layout'
// ... rest of your imports stay the same

export default function ConsultantCalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [view, setView] = useState("week")

  const events = [
    // ... your events remain the same
  ]

  const selectedDateEvents = events.filter(
    (event) => date && event.date.toDateString() === date.toDateString()
  )

  return (
    <ConsultantLayout>
      {/* your full content remains unchanged */}
    </ConsultantLayout>
  )
}
