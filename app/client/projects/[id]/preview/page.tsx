import { ClientLayout } from "@/components/client/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProject } from "@/lib/supabase"
import { ArrowLeft, ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react"
import { notFound } from "next/navigation"
import Link from "next/link"

interface PreviewPageProps {
  params: {
    id: string
  }
}

export default async function ProjectPreviewPage({ params }: PreviewPageProps) {
  let project

  try {
    project = await getProject(params.id)
  } catch (error) {
    notFound()
  }

  return (
    <ClientLayout>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link href={`/client/projects/${project.id}`}>
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-3xl font-bold tracking-tight">{project.name} Preview</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link href={`/client/projects/${project.id}/chat`}>
                <MessageSquare className="mr-2 h-4 w-4" />
                Request Changes
              </Link>
            </Button>
            <Button>
              <ThumbsUp className="mr-2 h-4 w-4" />
              Approve
            </Button>
          </div>
        </div>

        <Tabs defaultValue="desktop">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="desktop">Desktop</TabsTrigger>
            <TabsTrigger value="tablet">Tablet</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
          </TabsList>
          <TabsContent value="desktop" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Desktop Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full overflow-hidden rounded-lg border border-border">
                  {project.vercel_url ? (
                    <iframe src={project.vercel_url} className="h-full w-full" title="Desktop Preview" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-muted">
                      <p className="text-muted-foreground">Preview not available yet</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="tablet" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Tablet Preview</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <div className="h-[800px] w-[600px] overflow-hidden rounded-lg border border-border">
                  {project.vercel_url ? (
                    <iframe src={project.vercel_url} className="h-full w-full" title="Tablet Preview" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-muted">
                      <p className="text-muted-foreground">Preview not available yet</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="mobile" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Mobile Preview</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <div className="h-[667px] w-[375px] overflow-hidden rounded-lg border border-border">
                  {project.vercel_url ? (
                    <iframe src={project.vercel_url} className="h-full w-full" title="Mobile Preview" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-muted">
                      <p className="text-muted-foreground">Preview not available yet</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Design Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Button variant="outline" className="w-full">
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    Approve Design
                  </Button>
                  <Button variant="outline" className="w-full">
                    <ThumbsDown className="mr-2 h-4 w-4" />
                    Request Changes
                  </Button>
                </div>
                <div className="space-y-2">
                  <label htmlFor="design-feedback" className="text-sm font-medium">
                    Design Feedback
                  </label>
                  <textarea
                    id="design-feedback"
                    className="h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Provide feedback on the design..."
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Functionality Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Button variant="outline" className="w-full">
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    Approve Functionality
                  </Button>
                  <Button variant="outline" className="w-full">
                    <ThumbsDown className="mr-2 h-4 w-4" />
                    Report Issues
                  </Button>
                </div>
                <div className="space-y-2">
                  <label htmlFor="functionality-feedback" className="text-sm font-medium">
                    Functionality Feedback
                  </label>
                  <textarea
                    id="functionality-feedback"
                    className="h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Provide feedback on the functionality..."
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ClientLayout>
  )
}
