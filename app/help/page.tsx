import { Navbar } from "@/components/navbar"
import { NavigationGuide } from "@/components/navigation-guide"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HelpPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Help & Documentation</h1>
            <p className="mt-2 text-muted-foreground">
              Learn how to use v0Flow Studio and navigate through different parts of the platform
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <NavigationGuide />

            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Common questions about using v0Flow Studio</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I upload my v0.dev ZIP file?</AccordionTrigger>
                    <AccordionContent>
                      You can upload your v0.dev ZIP file by navigating to the client dashboard and clicking on "New
                      Project". Then, follow the instructions to upload your ZIP file and provide project details.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I track my project's progress?</AccordionTrigger>
                    <AccordionContent>
                      After uploading your project, you can track its progress in the client dashboard under "My
                      Projects". Click on a specific project to view detailed status information, including database
                      schema generation, GitHub code repository status, and Vercel deployment status.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How do I book a strategy session?</AccordionTrigger>
                    <AccordionContent>
                      You can book a strategy session by clicking on "Book Strategy Session" on the homepage or by
                      navigating to the "Consultations" section in the client dashboard. From there, you can select a
                      consultant and schedule a time that works for you.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>How do I approve my project for deployment?</AccordionTrigger>
                    <AccordionContent>
                      Once your project reaches the preview stage, you can review it and approve it for final
                      deployment. Navigate to your project details page in the client dashboard, click on "Preview", and
                      then click "Approve & Finalize" if you're satisfied with the result.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>How do I access the admin dashboard?</AccordionTrigger>
                    <AccordionContent>
                      The admin dashboard is restricted to authorized personnel. If you have admin credentials, you can
                      access it by navigating to /admin or by clicking on "Admin Dashboard" in the account dropdown
                      menu.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>User Guides</CardTitle>
                <CardDescription>Detailed guides for different user roles</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="client-guide">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="client-guide">Client Guide</TabsTrigger>
                    <TabsTrigger value="consultant-guide">Consultant Guide</TabsTrigger>
                    <TabsTrigger value="admin-guide">Admin Guide</TabsTrigger>
                  </TabsList>
                  <TabsContent value="client-guide" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Client Dashboard Overview</h3>
                      <p className="text-muted-foreground">
                        The client dashboard is your central hub for managing projects, tracking progress, and
                        communicating with consultants.
                      </p>
                      <h4 className="text-md font-medium mt-4">Key Features:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-1">
                        <li>Project overview with status indicators</li>
                        <li>Detailed project pages with progress tracking</li>
                        <li>Preview functionality for reviewing your system</li>
                        <li>Communication tools for interacting with consultants</li>
                        <li>Billing and payment management</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Tracking Project Progress</h3>
                      <p className="text-muted-foreground">
                        To track your project's progress, navigate to "My Projects" in the client dashboard, then select
                        a specific project. The project detail page shows:
                      </p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-1">
                        <li>Current stage in the deployment pipeline with visual indicators</li>
                        <li>Database schema generation status</li>
                        <li>GitHub code repository status and links</li>
                        <li>Vercel deployment status and preview links</li>
                        <li>Module-specific progress for complex projects</li>
                      </ul>
                    </div>
                  </TabsContent>
                  <TabsContent value="consultant-guide" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Consultant Dashboard Overview</h3>
                      <p className="text-muted-foreground">
                        The consultant dashboard allows you to manage client projects, schedule strategy sessions, and
                        track your earnings.
                      </p>
                      <h4 className="text-md font-medium mt-4">Key Features:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-1">
                        <li>Project management tools</li>
                        <li>Client communication interface</li>
                        <li>Strategy session scheduling</li>
                        <li>Earnings tracking and reporting</li>
                        <li>AI assistant integration for project support</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Managing Projects</h3>
                      <p className="text-muted-foreground">
                        As a consultant, you can manage projects by navigating to the "Projects" section in your
                        dashboard. From there, you can:
                      </p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-1">
                        <li>View all assigned projects</li>
                        <li>Access detailed project information</li>
                        <li>Manage database schema generation</li>
                        <li>Configure GitHub and Vercel deployments</li>
                        <li>Use AI assistants for project support</li>
                      </ul>
                    </div>
                  </TabsContent>
                  <TabsContent value="admin-guide" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Admin Dashboard Overview</h3>
                      <p className="text-muted-foreground">
                        The admin dashboard provides a complete overview of all platform activities, including projects,
                        clients, consultants, and more.
                      </p>
                      <h4 className="text-md font-medium mt-4">Key Features:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-1">
                        <li>Platform-wide metrics and analytics</li>
                        <li>User management (clients and consultants)</li>
                        <li>Project oversight and management</li>
                        <li>AI assistant configuration</li>
                        <li>Pricing and billing management</li>
                        <li>Innovation program administration</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Managing Users and Projects</h3>
                      <p className="text-muted-foreground">
                        As an admin, you have full control over users and projects. You can:
                      </p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-1">
                        <li>Create, edit, and delete user accounts</li>
                        <li>Assign consultants to projects</li>
                        <li>Monitor project progress across the platform</li>
                        <li>Configure AI assistants for different tasks</li>
                        <li>Manage pricing tiers and billing</li>
                        <li>Administer innovation programs and challenges</li>
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="border-t border-border/40 py-6">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">© 2025 v0Flow Studio. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
