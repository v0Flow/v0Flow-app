import { ConsultantLayout } from "@/components/consultant/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProjectWithModules } from "@/lib/supabase"
import { CheckCircle, Circle, GitBranch, Database, Server, Code, MessageSquare, ArrowRight } from "lucide-react"
import { notFound } from "next/navigation"
import Link from "next/link"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default async function ConsultantProjectPage({ params }: ProjectPageProps) {
  let project

  try {
    project = await getProjectWithModules(params.id)
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
    <ConsultantLayout>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">{project.name}</h1>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link href={`/consultant/projects/${project.id}/chat`}>
                <MessageSquare className="mr-2 h-4 w-4" />
                Chat with Client
              </Link>
            </Button>
            {project.status !== "completed" && (
              <Button asChild>
                <Link href={`/consultant/projects/${project.id}/manage`}>
                  Manage Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
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
                        <Circle className="h-8 w-8 text-[#2dd4bf]" />
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
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="schema">Database Schema</TabsTrigger>
            <TabsTrigger value="deployment">Deployment</TabsTrigger>
            <TabsTrigger value="modules">Modules</TabsTrigger>
            <TabsTrigger value="client">Client Info</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium">Description</h3>
                  <p className="text-sm text-[#2dd4bf]">{project.description}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Requirements</h3>
                  <p className="text-sm text-[#2dd4bf]">
                    {project.requirements || "No specific requirements provided."}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Created At</h3>
                  <p className="text-sm text-[#2dd4bf]">{new Date(project.created_at).toLocaleString()}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Last Updated</h3>
                  <p className="text-sm text-[#2dd4bf]">{new Date(project.updated_at).toLocaleString()}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="schema" className="mt-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Database Schema</CardTitle>
                <CardDescription>The generated SQL schema for this project</CardDescription>
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
                  {project.github_url ? (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      {project.github_url}
                    </a>
                  ) : (
                    <p className="text-sm text-[#2dd4bf]">Not deployed yet</p>
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-medium">Vercel Deployment</h3>
                  {project.vercel_url ? (
                    <a
                      href={project.vercel_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      {project.vercel_url}
                    </a>
                  ) : (
                    <p className="text-sm text-[#2dd4bf]">Not deployed yet</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="modules" className="mt-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Modules</CardTitle>
                <CardDescription>Progress of individual modules in this project</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {project.modules && project.modules.length > 0 ? (
                    project.modules.map((module) => (
                      <div key={module.id} className="border-b pb-4 last:border-0 last:pb-0">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">{module.name}</h3>
                            <p className="text-sm text-[#2dd4bf]">{module.description}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`text-sm font-medium ${getStatusColor(module.status)}`}>
                              {module.status.charAt(0).toUpperCase() + module.status.slice(1)}
                            </span>
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/consultant/projects/${project.id}/modules/${module.id}`}>Manage</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-[#2dd4bf]">No modules have been created for this project yet.</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="client" className="mt-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Client Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium">Client Name</h3>
                    <p className="text-sm text-[#2dd4bf]">John Doe</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Company</h3>
                    <p className="text-sm text-[#2dd4bf]">Acme Inc.</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Email</h3>
                    <p className="text-sm text-[#2dd4bf]">john.doe@example.com</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Phone</h3>
                    <p className="text-sm text-[#2dd4bf]">+1 (555) 123-4567</p>
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

function getStatusColor(status: string): string {
  const statusColorMap: Record<string, string> = {
    pending: "text-yellow-500",
    in_progress: "text-blue-500",
    completed: "text-green-500",
    failed: "text-red-500",
  }

  return statusColorMap[status] || "text-[#2dd4bf]"
}
