import { ClientLayout } from "@/components/client/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProjects } from "@/lib/supabase"
import { ArrowUpRight, FileText, Clock, CheckCircle, Plus } from "lucide-react"
import Link from "next/link"

export default async function ClientDashboardPage() {
  const projects = await getProjects()

  // In a real app, we would filter by client ID
  const clientProjects = projects.slice(0, 3)

  const activeProjects = clientProjects.filter((p) => p.status !== "completed")
  const completedProjects = clientProjects.filter((p) => p.status === "completed")

  return (
    <ClientLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back to your project dashboard</p>
          </div>
          <Button asChild>
            <Link href="/client/projects/new">
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{clientProjects.length}</div>
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
              <CardTitle className="text-sm font-medium">Completed Projects</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{completedProjects.length}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="active">
          <TabsList>
            <TabsTrigger value="active">Active Projects</TabsTrigger>
            <TabsTrigger value="completed">Completed Projects</TabsTrigger>
          </TabsList>
          <TabsContent value="active" className="space-y-4">
            {activeProjects.length > 0 ? (
              activeProjects.map((project) => (
                <Card key={project.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{project.name}</CardTitle>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/client/projects/${project.id}`}>
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
                <CardFooter>
                  <Button asChild>
                    <Link href="/client/projects/new">
                      <Plus className="mr-2 h-4 w-4" />
                      Start a New Project
                    </Link>
                  </Button>
                </CardFooter>
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
                        <Link href={`/client/projects/${project.id}`}>
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
                      {project.github_url && (
                        <div className="flex items-center justify-between text-sm">
                          <span>GitHub Repository</span>
                          <a
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-primary hover:underline"
                          >
                            View Repository
                          </a>
                        </div>
                      )}
                      {project.vercel_url && (
                        <div className="flex items-center justify-between text-sm">
                          <span>Live Deployment</span>
                          <a
                            href={project.vercel_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-primary hover:underline"
                          >
                            View Site
                          </a>
                        </div>
                      )}
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
        </Tabs>
      </div>
    </ClientLayout>
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
