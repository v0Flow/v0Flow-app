import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight, LayoutDashboard, Users, FileText, Bot, CreditCard, MessageSquare } from "lucide-react"
import Link from "next/link"

export function NavigationGuide() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Navigation Guide</CardTitle>
        <CardDescription>How to access different parts of the v0Flow Studio platform</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="admin">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="admin">Admin</TabsTrigger>
            <TabsTrigger value="client">Client</TabsTrigger>
            <TabsTrigger value="consultant">Consultant</TabsTrigger>
          </TabsList>
          <TabsContent value="admin" className="space-y-4 pt-4">
            <div className="space-y-2">
              <h3 className="font-medium">Admin Dashboard</h3>
              <p className="text-sm text-[#2dd4bf]">
                The admin dashboard provides a complete overview of all platform activities, including projects,
                clients, consultants, and more.
              </p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="flex items-center gap-2 rounded-md border p-2">
                  <LayoutDashboard className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Dashboard</span>
                </div>
                <div className="flex items-center gap-2 rounded-md border p-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Projects</span>
                </div>
                <div className="flex items-center gap-2 rounded-md border p-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Users</span>
                </div>
                <div className="flex items-center gap-2 rounded-md border p-2">
                  <Bot className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">AI Assistants</span>
                </div>
                <div className="flex items-center gap-2 rounded-md border p-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Pricing</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">How to Access</h3>
              <p className="text-sm text-[#2dd4bf]">
                Admin access is restricted to authorized personnel. If you have admin credentials, you can access the
                admin dashboard at:
              </p>
              <Button asChild variant="outline" className="mt-2">
                <Link href="/admin">
                  Go to Admin Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="client" className="space-y-4 pt-4">
            <div className="space-y-2">
              <h3 className="font-medium">Client Dashboard</h3>
              <p className="text-sm text-[#2dd4bf]">
                The client dashboard allows you to track your projects, view progress, approve changes, and communicate
                with consultants.
              </p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="flex items-center gap-2 rounded-md border p-2">
                  <LayoutDashboard className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Dashboard</span>
                </div>
                <div className="flex items-center gap-2 rounded-md border p-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">My Projects</span>
                </div>
                <div className="flex items-center gap-2 rounded-md border p-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Consultations</span>
                </div>
                <div className="flex items-center gap-2 rounded-md border p-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Billing</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Project Progress Tracking</h3>
              <p className="text-sm text-[#2dd4bf]">
                To track your project's progress, navigate to "My Projects" in the client dashboard, then select a
                specific project to view its detailed status, including:
              </p>
              <ul className="list-disc list-inside text-sm text-[#2dd4bf] space-y-1 mt-1">
                <li>Current stage in the deployment pipeline</li>
                <li>Database schema generation</li>
                <li>GitHub code repository status</li>
                <li>Vercel deployment status</li>
                <li>Preview links for testing</li>
              </ul>
              <Button asChild variant="outline" className="mt-2">
                <Link href="/client">
                  Go to Client Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="consultant" className="space-y-4 pt-4">
            <div className="space-y-2">
              <h3 className="font-medium">Consultant Dashboard</h3>
              <p className="text-sm text-[#2dd4bf]">
                The consultant dashboard allows you to manage client projects, schedule strategy sessions, and track
                your earnings.
              </p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="flex items-center gap-2 rounded-md border p-2">
                  <LayoutDashboard className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Dashboard</span>
                </div>
                <div className="flex items-center gap-2 rounded-md border p-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Projects</span>
                </div>
                <div className="flex items-center gap-2 rounded-md border p-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Clients</span>
                </div>
                <div className="flex items-center gap-2 rounded-md border p-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Messages</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">How to Access</h3>
              <p className="text-sm text-[#2dd4bf]">
                If you're a registered consultant, you can access your dashboard at:
              </p>
              <Button asChild variant="outline" className="mt-2">
                <Link href="/consultant">
                  Go to Consultant Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
