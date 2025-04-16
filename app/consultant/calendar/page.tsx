"use client"

import { useState } from "react"
import { Layout } from "@/components/consultant/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, Plus, Clock } from "lucide-react"
import Link from "next/link"

export default function ConsultantCalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [view, setView] = useState("week")

  const events = [
    {
      id: "1",
      title: "EduTrack Project Kickoff",
      client: "John Doe",
      company: "Acme Inc.",
      avatar: "/placeholder.svg",
      date: new Date(new Date().setDate(new Date().getDate() + 1)),
      startTime: "10:00 AM",
      endTime: "11:00 AM",
      type: "strategy",
    },
    {
      id: "2",
      title: "HealthPulse Schema Review",
      client: "Jane Smith",
      company: "TechCorp",
      avatar: "/placeholder.svg",
      date: new Date(new Date().setDate(new Date().getDate() + 2)),
      startTime: "2:00 PM",
      endTime: "3:00 PM",
      type: "review",
    },
    {
      id: "3",
      title: "AgriConnect Deployment",
      client: "Robert Johnson",
      company: "HealthTech",
      avatar: "/placeholder.svg",
      date: new Date(new Date().setDate(new Date().getDate() + 4)),
      startTime: "1:00 PM",
      endTime: "2:30 PM",
      type: "deployment",
    },
  ]

  // Filter events for the selected date
  const selectedDateEvents = events.filter(
    (event) => date && event.date.toDateString() === date.toDateString()
  )

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
            <p className="text-[#2dd4bf]">Manage your schedule and appointments</p>
          </div>
          <div className="flex items-center gap-2">
            <Select value={view} onValueChange={setView}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="View" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="day">Day</SelectItem>
                <SelectItem value="week">Week</SelectItem>
                <SelectItem value="month">Month</SelectItem>
              </SelectContent>
            </Select>
            <Button asChild>
              <Link href="#">
                <Plus className="mr-2 h-4 w-4" />
                New Event
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-[1fr_300px]">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" onClick={() => setDate(new Date())}>
                    Today
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <h2 className="text-xl font-semibold">
                  {date ? date.toLocaleDateString("en-US", { month: "long", year: "numeric" }) : ""}
                </h2>
              </div>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>
                  {date
                    ? date.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })
                    : ""}
                </CardTitle>
                <CardDescription>
                  {selectedDateEvents.length} event{selectedDateEvents.length !== 1 ? "s" : ""}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {selectedDateEvents.length > 0 ? (
                    selectedDateEvents.map((event) => (
                      <div key={event.id} className="rounded-lg border p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">{event.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-[#2dd4bf]">
                              <Clock className="h-3 w-3" />
                              <span>
                                {event.startTime} - {event.endTime}
                              </span>
                            </div>
                          </div>
                          <Badge
                            variant="outline"
                            className={
                              event.type === "strategy"
                                ? "bg-blue-500/10 text-blue-500"
                                : event.type === "review"
                                ? "bg-amber-500/10 text-amber-500"
                                : "bg-green-500/10 text-green-500"
                            }
                          >
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </Badge>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={event.avatar || "/placeholder.svg"} alt={event.client} />
                            <AvatarFallback>{event.client.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm">{event.client}</span>
                          <span className="text-xs text-[#2dd4bf]">({event.company})</span>
                        </div>
                        <div className="mt-2 flex gap-2">
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0" asChild>\
