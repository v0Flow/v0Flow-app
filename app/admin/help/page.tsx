import { AdminLayout } from "@/components/admin/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Video, Mail, ExternalLink } from "lucide-react"

export default function AdminHelpPage() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
          <p className="text-muted-foreground">Resources and documentation for administrators</p>
        </div>

        <Tabs defaultValue="guides">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="guides">Admin Guides</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="videos">Video Tutorials</TabsTrigger>
            <TabsTrigger value="support">Contact Support</TabsTrigger>
          </TabsList>
          <TabsContent value="guides" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Administrator Guides</CardTitle>
                <CardDescription>Comprehensive guides for platform administration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <FileText className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle className="text-lg">User Management</CardTitle>
                        <CardDescription>Managing users, roles, and permissions</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Learn how to create, edit, and manage user accounts, assign roles, and set permissions.
                      </p>
                      <Button variant="link" className="px-0" asChild>
                        <Link href="#">
                          Read Guide
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <FileText className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle className="text-lg">Project Management</CardTitle>
                        <CardDescription>Overseeing client projects</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Learn how to monitor project progress, assign consultants, and manage deployments.
                      </p>
                      <Button variant="link" className="px-0" asChild>
                        <Link href="#">
                          Read Guide
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <FileText className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle className="text-lg">AI Assistant Configuration</CardTitle>
                        <CardDescription>Setting up and managing AI assistants</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Learn how to configure AI assistants, set up prompts, and monitor performance.
                      </p>
                      <Button variant="link" className="px-0" asChild>
                        <Link href="#">
                          Read Guide
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <FileText className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle className="text-lg">Pricing Management</CardTitle>
                        <CardDescription>Managing pricing tiers and billing</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Learn how to set up pricing tiers, manage billing, and handle payments.
                      </p>
                      <Button variant="link" className="px-0" asChild>
                        <Link href="#">
                          Read Guide
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="faq" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Common questions and answers for administrators</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I assign a consultant to a project?</AccordionTrigger>
                    <AccordionContent>
                      To assign a consultant to a project, navigate to the project details page in the admin dashboard,
                      click on "Edit Project", and select a consultant from the dropdown menu. The consultant will
                      receive a notification and the project will appear in their dashboard.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I create a new pricing tier?</AccordionTrigger>
                    <AccordionContent>
                      To create a new pricing tier, go to the "Pricing" section in the admin dashboard and click on "New
                      Pricing Tier". Fill in the details including name, description, base price, and features. Once
                      saved, the new pricing tier will be available for clients to select when creating a new project.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How do I configure a new AI assistant?</AccordionTrigger>
                    <AccordionContent>
                      To configure a new AI assistant, go to the "AI Assistants" section in the admin dashboard and
                      click on "New Assistant". Fill in the details including name, description, capabilities, and type.
                      You can also set up prompts and responses for the assistant. Once saved, the new assistant will be
                      available for use in the platform.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>How do I view system logs?</AccordionTrigger>
                    <AccordionContent>
                      System logs can be accessed from the "Settings" section in the admin dashboard. Click on the
                      "Logs" tab to view system logs, including errors, warnings, and information messages. You can
                      filter logs by date, severity, and source.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>How do I manage user roles and permissions?</AccordionTrigger>
                    <AccordionContent>
                      User roles and permissions can be managed from the "Users" section in the admin dashboard. Click
                      on a user to edit their details, including their role (admin, client, or consultant). You can also
                      set specific permissions for each user if needed.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="videos" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Video Tutorials</CardTitle>
                <CardDescription>Step-by-step video guides for administrators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Video className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle className="text-lg">Admin Dashboard Overview</CardTitle>
                        <CardDescription>5:32</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        A comprehensive overview of the admin dashboard and its features.
                      </p>
                      <Button variant="link" className="px-0" asChild>
                        <Link href="#">
                          Watch Video
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Video className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle className="text-lg">Managing Projects</CardTitle>
                        <CardDescription>7:15</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Learn how to manage projects, track progress, and handle deployments.
                      </p>
                      <Button variant="link" className="px-0" asChild>
                        <Link href="#">
                          Watch Video
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Video className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle className="text-lg">User Management</CardTitle>
                        <CardDescription>6:48</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        A guide to managing users, roles, and permissions in the platform.
                      </p>
                      <Button variant="link" className="px-0" asChild>
                        <Link href="#">
                          Watch Video
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Video className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle className="text-lg">AI Assistant Configuration</CardTitle>
                        <CardDescription>8:22</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Learn how to set up and configure AI assistants for different tasks.
                      </p>
                      <Button variant="link" className="px-0" asChild>
                        <Link href="#">
                          Watch Video
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="support" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>Get help from our support team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Mail className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle className="text-lg">Email Support</CardTitle>
                        <CardDescription>24/7 support via email</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Send an email to our support team and we'll get back to you as soon as possible.
                      </p>
                      <Button variant="link" className="px-0" asChild>
                        <Link href="mailto:admin-support@v0flow.studio">admin-support@v0flow.studio</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Video className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle className="text-lg">Video Call</CardTitle>
                        <CardDescription>Schedule a video call with support</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Schedule a video call with our support team to get help with complex issues.
                      </p>
                      <Button variant="link" className="px-0" asChild>
                        <Link href="#">
                          Schedule Call
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  )
}
