import { ConsultantLayout } from "@/components/consultant/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProjects } from "@/lib/supabase"
import { ArrowUpRight, FileText, Clock, Calendar, DollarSign } from "lucide-react"
import Link from "next/link"

export default async function ConsultantDashboardPage() {
  const projects = await getProjects()

  // In a real app, we would filter by consultant ID
  const consultantProjects = projects.slice(0, 4)

  const activeProjects = consultantProjects.filter((p) => p.status !== "completed")
  const completedProjects = consultantProjects.filter((p) => p.status === "completed")

  return (
    <ConsultantLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back to your consultant dashboard</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Assigned Projects</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{consultantProjects.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeProjects.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Consultations</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Earnings This Month</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2,450</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="active">
          <TabsList>
            <TabsTrigger value="active">Active Projects</TabsTrigger>
            <TabsTrigger value="completed">Completed Projects</TabsTrigger>
            <TabsTrigger value="calendar">Upcoming Consultations</TabsTrigger>
          </TabsList>
          <TabsContent value="active" className="space-y-4">
            {activeProjects.length > 0 ? (
              activeProjects.map((project) => (
                <Card key={project.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{project.name}</CardTitle>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/consultant/projects/${project.id}`}>
                          View Details
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progress</span>
                          <span className="font-medium">{getProgressPercentage(project.status)}%</span>
                        </div>
                        <Progress value={getProgressPercentage(project.status)} />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Status</span>
                        <span className="font-medium capitalize">{project.status.replace("_", " ")}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Created</span>
                        <span className="font-medium">{new Date(project.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>No Active Projects</CardTitle>
                  <CardDescription>You don't have any active projects at the moment.</CardDescription>
                </CardHeader>
              </Card>
            )}
          </TabsContent>
          <TabsContent value="completed" className="space-y-4">
            {completedProjects.length > 0 ? (
              completedProjects.map((project) => (
                <Card key={project.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{project.name}</CardTitle>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/consultant/projects/${project.id}`}>
                          View Details
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span>Completed On</span>
                        <span className="font-medium">{new Date(project.updated_at).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Status</span>
                        <span className="font-medium text-primary">Completed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>No Completed Projects</CardTitle>
                  <CardDescription>You don't have any completed projects yet.</CardDescription>
                </CardHeader>
              </Card>
            )}
          </TabsContent>
          <TabsContent value="calendar" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Consultations</CardTitle>
                <CardDescription>Your scheduled consultations for the next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">EduTrack Project Kickoff</p>
                      <p className="text-sm text-muted-foreground">Initial consultation with client</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">Tomorrow</p>
                      <p className="text-sm text-muted-foreground">10:00 AM - 11:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">HealthPulse Schema Review</p>
                      <p className="text-sm text-muted-foreground">Database schema review with client</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">Wed, Apr 18</p>
                      <p className="text-sm text-muted-foreground">2:00 PM - 3:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">AgriConnect Deployment</p>
                      <p className="text-sm text-muted-foreground">Final deployment and handover</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">Fri, Apr 20</p>
                      <p className="text-sm text-muted-foreground">1:00 PM - 2:30 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ConsultantLayout>
  )
}

function getProgressPercentage(status: string): number {
  const statusMap: Record<string, number> = {
    uploaded: 10,
    parsing: 20,
    schema_generated: 40,
    database_deployed: 60,
    github_pushed: 80,
    vercel_deployed: 90,
    completed: 100,
  }

  return statusMap[status] || 0
}
