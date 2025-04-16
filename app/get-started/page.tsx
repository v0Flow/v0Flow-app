"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Upload, MessageSquare, Check } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"

export default function GetStartedPage() {
  const [activeTab, setActiveTab] = useState("upload")
  const router = useRouter()
  const { toast } = useToast()

  const handleGetStarted = (path: string) => {
    toast({
      title: "Getting started",
      description: "Redirecting you to the next step",
    })
    router.push(path)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="container max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight">Get Started with v0Flow Studio</h1>
            <p className="mt-2 text-muted-foreground">Choose the option that best fits your current needs</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upload">Upload v0 ZIP</TabsTrigger>
              <TabsTrigger value="strategy">Book Strategy Session</TabsTrigger>
              <TabsTrigger value="account">Create Account</TabsTrigger>
            </TabsList>
            <TabsContent value="upload" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Upload Your v0 ZIP File</CardTitle>
                  <CardDescription>
                    Already have a v0.dev prototype? Upload your ZIP file to get started immediately.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-6 bg-muted/20">
                    <div className="flex flex-col items-center text-center gap-4">
                      <Upload className="h-12 w-12 text-primary" />
                      <h3 className="text-xl font-bold">Quick Start</h3>
                      <p className="text-muted-foreground max-w-md">
                        Upload your v0.dev ZIP file and we'll automatically analyze it, generate a database schema, and
                        deploy your application.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md mt-2">
                        <div className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          <span className="text-sm">Database schema generation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          <span className="text-sm">Supabase deployment</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          <span className="text-sm">GitHub code push</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          <span className="text-sm">Vercel deployment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={() => handleGetStarted("/client/projects/new")}>
                    Upload ZIP File
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="strategy" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Book a Strategy Session</CardTitle>
                  <CardDescription>
                    Need help defining your project? Book a strategy session with one of our consultants.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-6 bg-muted/20">
                    <div className="flex flex-col items-center text-center gap-4">
                      <MessageSquare className="h-12 w-12 text-primary" />
                      <h3 className="text-xl font-bold">Guided Approach</h3>
                      <p className="text-muted-foreground max-w-md">
                        Our consultants will help you define your project requirements, create a v0 prototype, and guide
                        you through the deployment process.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md mt-2">
                        <div className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          <span className="text-sm">2-hour strategy session</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          <span className="text-sm">v0 prompt generation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          <span className="text-sm">Expert consultation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          <span className="text-sm">End-to-end support</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={() => handleGetStarted("/strategy")}>
                    Book Strategy Session
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="account" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Create an Account</CardTitle>
                  <CardDescription>
                    Sign up for a v0Flow Studio account to get started with your project.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-6 bg-muted/20">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Create Your Account</h3>
                      <p className="text-muted-foreground max-w-md">
                        Sign up for a v0Flow Studio account to access all features and manage your projects.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md mt-2">
                        <div className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          <span className="text-sm">Project dashboard</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          <span className="text-sm">Progress tracking</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          <span className="text-sm">Consultant access</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          <span className="text-sm">Billing management</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/login">Sign In</Link>
                  </Button>
                  <Button className="w-full" asChild>
                    <Link href="/register">
                      Create Account
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="border-t border-border/40 py-6">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">© 2025 v0Flow Studio. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
