"use client"

import { useState } from "react"
import { ConsultantLayout } from "@/components/consultant/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Save, Database, GitBranch, Server, Bot } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"

export default function ManageProjectPage() {
  const params = useParams()
  const projectId = params.id as string
  const router = useRouter()
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("schema")
  const [saving, setSaving] = useState(false)

  // Schema tab state
  const [schema, setSchema] = useState("")

  // GitHub tab state
  const [repoName, setRepoName] = useState("")
  const [githubToken, setGithubToken] = useState("")

  // Vercel tab state
  const [vercelToken, setVercelToken] = useState("")
  const [vercelProjectName, setVercelProjectName] = useState("")

  // AI tab state
  const [aiPrompt, setAiPrompt] = useState("")
  const [aiResponse, setAiResponse] = useState("")
  const [aiProcessing, setAiProcessing] = useState(false)

  const handleSaveSchema = async () => {
    setSaving(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Schema saved",
        description: "The database schema has been saved successfully.",
      })

      // In a real app, we would update the project status
      // await updateProjectStatus(projectId, "schema_generated")
    } catch (error) {
      console.error(error)
      toast({
        title: "Error",
        description: "Failed to save schema. Please try again.",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  const handleDeployDatabase = async () => {
    setSaving(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Database deployed",
        description: "The database has been deployed successfully.",
      })

      // In a real app, we would update the project status
      // await updateProjectStatus(projectId, "database_deployed")
    } catch (error) {
      console.error(error)
      toast({
        title: "Error",
        description: "Failed to deploy database. Please try again.",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  const handlePushToGitHub = async () => {
    setSaving(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Code pushed",
        description: "The code has been pushed to GitHub successfully.",
      })

      // In a real app, we would update the project status
      // await updateProjectStatus(projectId, "github_pushed")
    } catch (error) {
      console.error(error)
      toast({
        title: "Error",
        description: "Failed to push code to GitHub. Please try again.",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  const handleDeployToVercel = async () => {
    setSaving(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Site deployed",
        description: "The site has been deployed to Vercel successfully.",
      })

      // In a real app, we would update the project status
      // await updateProjectStatus(projectId, "vercel_deployed")
    } catch (error) {
      console.error(error)
      toast({
        title: "Error",
        description: "Failed to deploy to Vercel. Please try again.",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  const handleAIAssist = async () => {
    if (!aiPrompt.trim()) return

    setAiProcessing(true)

    try {
      // Simulate AI response
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Sample AI responses based on prompt content
      let response = ""

      if (aiPrompt.toLowerCase().includes("schema")) {
        response =
          "Based on the v0 prototype, I recommend the following database schema:\n\n```sql\nCREATE TABLE users (\n  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),\n  email VARCHAR(255) NOT NULL UNIQUE,\n  password VARCHAR(255) NOT NULL,\n  name VARCHAR(255) NOT NULL,\n  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),\n  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()\n);\n\nCREATE TABLE projects (\n  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),\n  name VARCHAR(255) NOT NULL,\n  description TEXT,\n  user_id UUID REFERENCES users(id) ON DELETE CASCADE,\n  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),\n  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()\n);\n```"
      } else if (aiPrompt.toLowerCase().includes("error")) {
        response =
          "I've analyzed the Vercel deployment error and found that it's likely due to missing environment variables. Please ensure that the following environment variables are set in your Vercel project:\n\n- DATABASE_URL\n- NEXT_PUBLIC_API_URL\n- JWT_SECRET\n\nOnce these are set, the deployment should succeed."
      } else if (aiPrompt.toLowerCase().includes("optimize")) {
        response =
          "To optimize the database queries, I recommend adding the following indexes:\n\n```sql\nCREATE INDEX idx_projects_user_id ON projects(user_id);\nCREATE INDEX idx_tasks_project_id ON tasks(project_id);\n```\n\nThis will significantly improve the performance of queries that filter by user_id or project_id."
      } else {
        response =
          "I've analyzed the project and here are my recommendations:\n\n1. The current database schema looks good, but consider adding indexes for frequently queried columns.\n2. The authentication flow could be improved by implementing refresh tokens.\n3. Consider adding server-side validation to complement the client-side validation.\n4. The API endpoints follow RESTful conventions, which is good practice."
      }

      setAiResponse(response)
    } catch (error) {
      console.error(error)
      toast({
        title: "Error",
        description: "Failed to get AI assistance. Please try again.",
        variant: "destructive",
      })
    } finally {
      setAiProcessing(false)
    }
  }

  return (
    <ConsultantLayout>
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href={`/consultant/projects/${projectId}`}>
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">Manage Project</h1>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="schema">Database Schema</TabsTrigger>
            <TabsTrigger value="github">GitHub</TabsTrigger>
            <TabsTrigger value="vercel">Vercel</TabsTrigger>
            <TabsTrigger value="ai">AI Assistant</TabsTrigger>
          </TabsList>
          <TabsContent value="schema" className="mt-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Database Schema</CardTitle>
                <CardDescription>Edit and deploy the database schema for this project</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Textarea
                    value={schema}
                    onChange={(e) => setSchema(e.target.value)}
                    placeholder="-- Enter your SQL schema here
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);"
                    className="font-mono h-80"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Database Provider</label>
                  <Select defaultValue="supabase">
                    <SelectTrigger>
                      <SelectValue placeholder="Select database provider" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="supabase">Supabase</SelectItem>
                      <SelectItem value="neon">Neon</SelectItem>
                      <SelectItem value="planetscale">PlanetScale</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handleSaveSchema} disabled={saving}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Schema
                </Button>
                <Button onClick={handleDeployDatabase} disabled={saving}>
                  <Database className="mr-2 h-4 w-4" />
                  {saving ? "Deploying..." : "Deploy Database"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="github" className="mt-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>GitHub Integration</CardTitle>
                <CardDescription>Push the project code to GitHub</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Repository Name</label>
                  <Input
                    value={repoName}
                    onChange={(e) => setRepoName(e.target.value)}
                    placeholder="my-awesome-project"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">GitHub Token</label>
                  <Input
                    type="password"
                    value={githubToken}
                    onChange={(e) => setGithubToken(e.target.value)}
                    placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
                  />
                  <p className="text-xs text-muted-foreground">
                    This token will be used to create a repository and push code. It will not be stored.
                  </p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Repository Visibility</label>
                  <Select defaultValue="private">
                    <SelectTrigger>
                      <SelectValue placeholder="Select repository visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="private">Private</SelectItem>
                      <SelectItem value="public">Public</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto" onClick={handlePushToGitHub} disabled={saving}>
                  <GitBranch className="mr-2 h-4 w-4" />
                  {saving ? "Pushing..." : "Push to GitHub"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="vercel" className="mt-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Vercel Deployment</CardTitle>
                <CardDescription>Deploy the project to Vercel</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Vercel Token</label>
                  <Input
                    type="password"
                    value={vercelToken}
                    onChange={(e) => setVercelToken(e.target.value)}
                    placeholder="vercel_token_xxxxxxxxxxxx"
                  />
                  <p className="text-xs text-muted-foreground">
                    This token will be used to deploy your project to Vercel. It will not be stored.
                  </p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Project Name</label>
                  <Input
                    value={vercelProjectName}
                    onChange={(e) => setVercelProjectName(e.target.value)}
                    placeholder="my-awesome-project"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Environment Variables</label>
                  <Textarea
                    placeholder="DATABASE_URL=postgres://user:password@host:port/database
NEXT_PUBLIC_API_URL=https://api.example.com
JWT_SECRET=your_jwt_secret"
                    className="font-mono h-32"
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter environment variables in KEY=VALUE format, one per line.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto" onClick={handleDeployToVercel} disabled={saving}>
                  <Server className="mr-2 h-4 w-4" />
                  {saving ? "Deploying..." : "Deploy to Vercel"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="ai" className="mt-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>AI Assistant</CardTitle>
                <CardDescription>Get AI assistance for your project</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ask AI Assistant</label>
                  <Textarea
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    placeholder="Ask for help with schema design, error resolution, optimization, etc."
                    className="h-32"
                  />
                </div>
                <Button onClick={handleAIAssist} disabled={aiProcessing || !aiPrompt.trim()}>
                  <Bot className="mr-2 h-4 w-4" />
                  {aiProcessing ? "Processing..." : "Get AI Assistance"}
                </Button>
                {aiResponse && (
                  <div className="space-y-2 mt-4">
                    <label className="text-sm font-medium">AI Response</label>
                    <div className="rounded-md bg-muted p-4 overflow-auto max-h-80">
                      <pre className="text-sm whitespace-pre-wrap">{aiResponse}</pre>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ConsultantLayout>
  )
}
