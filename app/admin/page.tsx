import { AdminLayout } from "@/components/admin/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProjects, getClients, getConsultants } from "@/lib/supabase"
import { ArrowUpRight, Users, FileText, Clock, DollarSign, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function AdminDashboardPage() {
  const [projects, clients, consultants] = await Promise.all([getProjects(), getClients(), getConsultants()])

  const completedProjects = projects.filter((p) => p.status === "completed").length
  const activeProjects = projects.filter((p) => p.status !== "completed").length

  // Calculate total revenue (in a real app, this would come from the database)
  const totalRevenue = projects.reduce((sum, project) => sum + (project.price || 0), 0)

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-[#2dd4bf]">Overview of your platform's performance</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
              <FileText className="h-4 w-4 text-[#2dd4bf]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{projects.length}</div>
              <p className="text-xs text-[#2dd4bf]">+{Math.floor(Math.random() * 10)}% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              <Clock className="h-4 w-4 text-[#2dd4bf]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeProjects}</div>
              <p className="text-xs text-[#2dd4bf]">+{Math.floor(Math.random() * 10)}% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-[#2dd4bf]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-[#2dd4bf]">+{Math.floor(Math.random() * 15)}% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-[#2dd4bf]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{clients.length + consultants.length}</div>
              <p className="text-xs text-[#2dd4bf]">+{Math.floor(Math.random() * 10)}% from last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Projects</CardTitle>
              <CardDescription>Recently created projects and their current status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projects.slice(0, 5).map((project) => (
                  <div key={project.id} className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-medium">{project.name}</p>
                      <p className="text-sm text-[#2dd4bf]">{project.description}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-sm">
                        <span className="capitalize">{project.status.replace("_", " ")}</span>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/admin/projects/${project.id}`}>
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Strategy Sessions</CardTitle>
              <CardDescription>Strategy sessions scheduled for the next 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">EduTrack Project</p>
                    <p className="text-sm text-[#2dd4bf]">With David Ochieng</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Tomorrow</p>
                    <p className="text-right text-[#2dd4bf]">10:00 AM</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">HealthPulse Project</p>
                    <p className="text-sm text-[#2dd4bf]">With Sarah Johnson</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Wed, Apr 18</p>
                    <p className="text-right text-[#2dd4bf]">2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">AgriConnect Project</p>
                    <p className="text-sm text-[#2dd4bf]">With Amina Diallo</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Fri, Apr 20</p>
                    <p className="text-right text-[#2dd4bf]">1:00 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="clients">
          <TabsList>
            <TabsTrigger value="clients">Recent Clients</TabsTrigger>
            <TabsTrigger value="consultants">Recent Consultants</TabsTrigger>
            <TabsTrigger value="ai">AI Assistants</TabsTrigger>
          </TabsList>
          <TabsContent value="clients" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Clients</CardTitle>
                <CardDescription>Recently registered clients</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {clients.slice(0, 5).map((client) => (
                    <div key={client.id} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="font-medium">{client.company_name}</p>
                        <p className="text-sm text-[#2dd4bf]">{client.contact_name}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-sm">
                          <span>{client.industry}</span>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/admin/clients/${client.id}`}>
                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="consultants" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Consultants</CardTitle>
                <CardDescription>Recently registered consultants</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {consultants.slice(0, 5).map((consultant) => (
                    <div key={consultant.id} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="font-medium">{consultant.name}</p>
                        <p className="text-sm text-[#2dd4bf]">{consultant.title}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-sm">
                          <span>{consultant.location}</span>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/admin/consultants/${consultant.id}`}>
                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="ai" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>AI Assistants Activity</CardTitle>
                <CardDescription>Recent activities from AI assistants</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                        <Bot className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">Executive Assistant</p>
                        <p className="text-sm text-[#2dd4bf]">Generated daily briefing</p>
                      </div>
                    </div>
                    <div className="text-sm text-[#2dd4bf]">10 minutes ago</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                        <Bot className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">Client Service Assistant</p>
                        <p className="text-sm text-[#2dd4bf]">Sent status update to 3 clients</p>
                      </div>
                    </div>
                    <div className="text-sm text-[#2dd4bf]">1 hour ago</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                        <Bot className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">Marketing Assistant</p>
                        <p className="text-sm text-[#2dd4bf]">Posted new case study to LinkedIn</p>
                      </div>
                    </div>
                    <div className="text-sm text-[#2dd4bf]">3 hours ago</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  )
}
