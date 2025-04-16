import { ClientLayout } from "@/components/client/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Video, MessageSquare, Plus } from "lucide-react"
import Link from "next/link"

export default function ConsultationsPage() {
  return (
    <ClientLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Consultations</h1>
            <p className="text-[#2dd4bf]">Manage your strategy sessions and consultations</p>
          </div>
          <Button asChild>
            <Link href="/strategy">
              <Plus className="mr-2 h-4 w-4" />
              Book New Session
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="upcoming">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
            <TabsTrigger value="recordings">Recordings</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Consultations</CardTitle>
                <CardDescription>Your scheduled strategy sessions and consultations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="rounded-lg border p-4">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src="/placeholder.svg" alt="Sarah Johnson" />
                          <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">EduTrack Project Kickoff</h3>
                          <p className="text-sm text-[#2dd4bf]">With Sarah Johnson</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>Tomorrow</span>
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>10:00 AM - 11:00 AM</span>
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 sm:items-end">
                        <Badge>Confirmed</Badge>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="h-8" asChild>
                            <Link href="#">
                              <Video className="mr-2 h-3 w-3" />
                              Join
                            </Link>
                          </Button>
                          <Button size="sm" variant="outline" className="h-8" asChild>
                            <Link href="#">
                              <MessageSquare className="mr-2 h-3 w-3" />
                              Message
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src="/placeholder.svg" alt="David Ochieng" />
                          <AvatarFallback>DO</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">HealthPulse Schema Review</h3>
                          <p className="text-sm text-[#2dd4bf]">With David Ochieng</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>Wed, Apr 18</span>
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>2:00 PM - 3:00 PM</span>
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 sm:items-end">
                        <Badge>Confirmed</Badge>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="h-8" asChild>
                            <Link href="#">
                              <Video className="mr-2 h-3 w-3" />
                              Join
                            </Link>
                          </Button>
                          <Button size="sm" variant="outline" className="h-8" asChild>
                            <Link href="#">
                              <MessageSquare className="mr-2 h-3 w-3" />
                              Message
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="past" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Past Consultations</CardTitle>
                <CardDescription>Your completed strategy sessions and consultations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="rounded-lg border p-4">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src="/placeholder.svg" alt="Amina Diallo" />
                          <AvatarFallback>AD</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">Initial Project Discussion</h3>
                          <p className="text-sm text-[#2dd4bf]">With Amina Diallo</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>Apr 10, 2025</span>
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>11:00 AM - 12:00 PM</span>
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 sm:items-end">
                        <Badge variant="outline">Completed</Badge>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="h-8" asChild>
                            <Link href="#">
                              <Video className="mr-2 h-3 w-3" />
                              View Recording
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="recordings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Consultation Recordings</CardTitle>
                <CardDescription>Recordings of your past consultations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="rounded-lg border p-4">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Video className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Initial Project Discussion</h3>
                          <p className="text-sm text-[#2dd4bf]">With Amina Diallo</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>Apr 10, 2025</span>
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>Duration: 58 min</span>
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="h-8" asChild>
                          <Link href="#">
                            <Video className="mr-2 h-3 w-3" />
                            Watch
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ClientLayout>
  )
}
