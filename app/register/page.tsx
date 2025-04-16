"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Logo } from "@/components/logo"
import { useToast } from "@/components/ui/use-toast"

export default function RegisterPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState<"client" | "consultant">("client")
  const [loading, setLoading] = useState(false)
  const { signUp } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await signUp(email, password, role)
      toast({
        title: "Registration successful",
        description: "Please complete your profile to continue.",
      })
      router.push(role === "client" ? "/client-onboarding" : "/consultant-onboarding")
    } catch (error) {
      console.error("Registration error:", error)
      toast({
        title: "Registration failed",
        description: "Please check your information and try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center text-center">
          <Link href="/" className="mb-6 flex items-center gap-2">
            <Logo className="h-10 w-10" />
            <span className="text-2xl font-semibold">
              v0Flow
              <span className="ml-1 text-[#2dd4bf]">Studio</span>
            </span>
          </Link>
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="mt-2 text-[#2dd4bf]">Sign up to get started with v0Flow Studio</p>
        </div>
        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>Enter your information to create an account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Account Type</Label>
                <RadioGroup value={role} onValueChange={(value) => setRole(value as "client" | "consultant")}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="client" id="client" />
                    <Label htmlFor="client">Client (I need a project built)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="consultant" id="consultant" />
                    <Label htmlFor="consultant">Consultant (I want to help build projects)</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Creating account..." : "Create Account"}
              </Button>
              <p className="mt-4 text-center text-sm text-[#2dd4bf]">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
