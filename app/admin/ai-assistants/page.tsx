import { AdminLayout } from "@/components/admin/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getAIAssistants } from "@/lib/supabase"
import { Bot, Plus, Edit, Trash } from "lucide-react"
import Link from "next/link"

export default async function AIAssistantsPage() {
  const assistants = await getAIAssistants()

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">AI Assistants</h1>
            <p className="text-muted-foreground">Manage your AI assistants for different tasks</p>
          </div>
          <Button asChild>
            <Link href="/admin/ai-assistants/new">
              <Plus className="mr-2 h-4 w-4" />
              New Assistant
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {assistants.map((assistant) => (
            <Card key={assistant.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>{assistant.name}</CardTitle>
                  </div>
                </div>
                <CardDescription>{assistant.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Capabilities</h3>
                  <div className="flex flex-wrap gap-2">
                    {assistant.capabilities.map((capability, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                      >
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/admin/ai-assistants/${assistant.id}`}>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Link>
                </Button>
                <Button variant="destructive" size="sm">
                  <Trash className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  )
}
