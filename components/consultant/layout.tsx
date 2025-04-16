'use client'

import { useState } from "react"
import { ConsultantLayout } from '@/components/consultant/layout'
import { addDays, format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConsultantCalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [view, setView] = useState("week")

  const events = [
    {
      id: 1,
      title: "Strategy Call",
      date: new Date(),
      time: "10:00 AM",
    },
    {
      id: 2,
      title: "Platform Demo",
      date: addDays(new Date(), 1),
      time: "2:00 PM",
    },
  ]

  const selectedDateEvents = events.filter(
    (event) => date && event.date.toDateString() === date.toDateString()
  )

  return (
    <ConsultantLayout>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>My Calendar</CardTitle>
            <CardDescription>Click a date to view sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
            <Tabs value={view} onValueChange={setView} className="mt-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="day">Day</TabsTrigger>
                <TabsTrigger value="week">Week</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardContent>
        </Card>
        <div className="col-span-2 space-y-4">
          <h2 className="text-xl font-semibold">Sessions on {date ? format(date, 'PPP') : '...'}</h2>
          {selectedDateEvents.length > 0 ? (
            selectedDateEvents.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.time}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Click below to join or reschedule</p>
                  <Button className="mt-2">Join Session</Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-muted-foreground">No sessions on this date.</p>
          )}
        </div>
      </div>
    </ConsultantLayout>
  )
}
