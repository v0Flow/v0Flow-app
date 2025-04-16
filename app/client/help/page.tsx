import { ClientLayout } from "@/components/client/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Video, Mail, ExternalLink } from "lucide-react"

export default function ClientHelpPage() {
  return (
    <ClientLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
          <p className="text-muted-foreground">Resources and documentation for clients</p>
        </div>

        <Tabs defaultValue="guides">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="guides">Client Guides</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="videos">Video Tutorials</TabsTrigger>
            <TabsTrigger value="support">Contact Support</TabsTrigger>
          </TabsList>
          <TabsContent value="guides" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Client Guides</CardTitle>
                <CardDescription>Comprehensive guides for using v0Flow Studio</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <FileText className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle className="text-lg">Getting Started</CardTitle>
                        <CardDescription>Your first steps with v0Flow Studio</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Learn how to upload your v0 ZIP file, describe your project, and start the deployment process.
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
                        <CardTitle className="text-lg">Tracking Progress</CardTitle>
                        <CardDescription>Monitor your project's development</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Learn how to track your project's progress, review deployments, and provide feedback.
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
                        <CardTitle className="text-lg">Working with Consultants</CardTitle>
                        <CardDescription>Collaborating with our experts</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Learn how to book strategy sessions, communicate with consultants, and get the most out of your
                        collaboration.
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
                        <CardTitle className="text-lg">Billing and Payments</CardTitle>
                        <CardDescription>Managing your payments</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Learn how to manage your billing information, make payments, and view invoices.
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
                <CardDescription>Common questions and answers for clients</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How long does it take to deploy my project?</AccordionTrigger>
                    <AccordionContent>
                      Most projects are deployed within 5 days from the time you upload your v0 ZIP file. The exact
                      timeline depends on the complexity of your project and any customizations you request. You can
                      track the progress of your project in real-time through your client dashboard.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What formats do you accept for upload?</AccordionTrigger>
                    <AccordionContent>
                      We accept ZIP files exported directly from v0.dev. These files contain all the necessary
                      components for us to build your application. If you have a different format or need help creating
                      a v0 prototype, please book a strategy session with one of our consultants.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How do I provide feedback on my project?</AccordionTrigger>
                    <AccordionContent>
                      You can provide feedback on your project through the client dashboard. Navigate to your project
                      details page, click on the "Preview" tab, and use the feedback tools to comment on specific
                      aspects of your project. You can also chat directly with your assigned consultant.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>What happens after my project is deployed?</AccordionTrigger>
                    <AccordionContent>
                      After your project is deployed, you'll receive access to the GitHub repository and Vercel
                      deployment. You can continue to make changes to your project through GitHub, or you can book
                      additional services with our consultants for ongoing support and development.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>How do I book a strategy session?</AccordionTrigger>
                    <AccordionContent>
                      You can book a strategy session by clicking on "Book Strategy Session" on the homepage or by
                      navigating to the "Consultations" section in your client dashboard. From there, you can select a
                      consultant and schedule a time that works for you. Strategy sessions are typically 2 hours long
                      and help define your project requirements and roadmap.
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
                <CardDescription>Step-by-step video guides for clients</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Video className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle className="text-lg">Uploading Your v0 ZIP File</CardTitle>
                        <CardDescription>3:45</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Learn how to export your v0 prototype and upload it to v0Flow Studio.
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
                        <CardTitle className="text-lg">Tracking Project Progress</CardTitle>
                        <CardDescription>5:12</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        A guide to monitoring your project's development stages in the client dashboard.
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
                        <CardTitle className="text-lg">Providing Feedback</CardTitle>
                        <CardDescription>4:30</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Learn how to review your project and provide effective feedback.
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
                        <CardTitle className="text-lg">Working with Consultants</CardTitle>
                        <CardDescription>6:18</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Tips for effective collaboration with our expert consultants.
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
                        <Link href="mailto:support@v0flow.studio">support@v0flow.studio</Link>
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
    </ClientLayout>
  )
}
