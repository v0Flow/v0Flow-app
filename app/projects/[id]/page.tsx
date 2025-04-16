import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProject } from "@/lib/supabase"
import { CheckCircle, Circle, GitBranch, Database, Server, Code } from "lucide-react"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  let project

  try {
    project = await getProject(params.id)
  } catch (error) {
    notFound()
  }

  const statusSteps = [
    {
      id: "parsing",
      label: "Analyzing ZIP",
      icon: Code,
      completed: [
        "parsing",
        "schema_generated",
        "database_deployed",
        "github_pushed",
        "vercel_deployed",
        "completed",
      ].includes(project.status),
    },
    {
      id: "schema_generated",
      label: "Schema Generated",
      icon: Database,
      completed: ["schema_generated", "database_deployed", "github_pushed", "vercel_deployed", "completed"].includes(
        project.status,
      ),
    },
    {
      id: "database_deployed",
      label: "Database Deployed",
      icon: Database,
      completed: ["database_deployed", "github_pushed", "vercel_deployed", "completed"].includes(project.status),
    },
    {
      id: "github_pushed",
      label: "Code Pushed",
      icon: GitBranch,
      completed: ["github_pushed", "vercel_deployed", "completed"].includes(project.status),
    },
    {
      id: "vercel_deployed",
      label: "Site Deployed",
      icon: Server,
      completed: ["vercel_deployed", "completed"].includes(project.status),
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="container">
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold tracking-tight">{project.name}</h1>
              <Button>Approve & Finalize</Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Project Status</CardTitle>
                <CardDescription>
                  Current status:{" "}
                  <span className="font-medium text-primary">{project.status.replace("_", " ").toUpperCase()}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <div className="relative flex items-start gap-4 pb-4 after:absolute after:bottom-0 after:left-[15px] after:h-full after:w-[1px] after:bg-border">
                    {statusSteps.map((step, index) => (
                      <div key={step.id} className="relative flex flex-1 flex-col items-center gap-2 text-center">
                        <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background">
                          {step.completed ? (
                            <CheckCircle className="h-8 w-8 text-primary" />
                          ) : (
                            <Circle className="h-8 w-8 text-muted-foreground" />
                          )}
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-medium">{step.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="schema">Database Schema</TabsTrigger>
                <TabsTrigger value="deployment">Deployment</TabsTrigger>
                <TabsTrigger value="logs">Logs</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium">Description</h3>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Created At</h3>
                      <p className="text-sm text-muted-foreground">{new Date(project.created_at).toLocaleString()}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Last Updated</h3>
                      <p className="text-sm text-muted-foreground">{new Date(project.updated_at).toLocaleString()}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="schema" className="mt-4 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Database Schema</CardTitle>
                    <CardDescription>The generated SQL schema for your project</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-4 rounded-lg overflow-auto max-h-[400px] text-sm">
                      {project.schema || "Schema will be generated soon..."}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="deployment" className="mt-4 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Deployment Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium">GitHub Repository</h3>
                      <p className="text-sm text-muted-foreground">{project.github_url || "Not deployed yet"}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Vercel Deployment</h3>
                      <p className="text-sm text-muted-foreground">{project.vercel_url || "Not deployed yet"}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="logs" className="mt-4 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Build Logs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-4 rounded-lg overflow-auto max-h-[400px] text-sm">
                      Logs will appear here during the build process...
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
