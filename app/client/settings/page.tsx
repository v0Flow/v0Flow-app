"use client"

import { useState } from "react"
import { ClientLayout } from "@/components/client/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Upload } from "lucide-react"

export default function SettingsPage() {
  const { toast } = useToast()
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    setSaving(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Settings saved",
        description: "Your settings have been saved successfully.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save settings. Please try again.",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  return (
    <ClientLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-[#2dd4bf]">Manage your account settings and preferences</p>
        </div>

        <Tabs defaultValue="profile">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>Manage your profile information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-x-4 sm:space-y-0">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg" alt="Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                      <Button variant="outline" size="sm">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload
                      </Button>
                      <Button variant="outline" size="sm">
                        Remove
                      </Button>
                    </div>
                    <p className="text-xs text-[#2dd4bf]">
                      Recommended: Square JPG, PNG, or GIF, at least 400x400 pixels.
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" defaultValue="Acme Inc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Job Title</Label>
                  <Input id="title" defaultValue="CEO" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    defaultValue="CEO of Acme Inc., a leading technology company in East Africa."
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" defaultValue="https://acme.com" />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSave} disabled={saving}>
                  {saving ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="account" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>Manage your account settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="two-factor">Enable Two-Factor Authentication</Label>
                      <p className="text-sm text-[#2dd4bf]">Add an extra layer of security to your account</p>
                    </div>
                    <Switch id="two-factor" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Language and Region</h3>
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="sw">Swahili</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="africa-nairobi">
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="africa-nairobi">Africa/Nairobi (EAT)</SelectItem>
                        <SelectItem value="africa-lagos">Africa/Lagos (WAT)</SelectItem>
                        <SelectItem value="africa-cairo">Africa/Cairo (EET)</SelectItem>
                        <SelectItem value="europe-london">Europe/London (GMT)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSave} disabled={saving}>
                  {saving ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Manage your notification preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Email Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="project-updates">Project Updates</Label>
                      <Switch id="project-updates" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="consultant-messages">Consultant Messages</Label>
                      <Switch id="consultant-messages" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="strategy-sessions">Strategy Session Reminders</Label>
                      <Switch id="strategy-sessions" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="billing-updates">Billing Updates</Label>
                      <Switch id="billing-updates" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="marketing">Marketing and Promotions</Label>
                      <Switch id="marketing" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">In-App Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="in-app-project-updates">Project Updates</Label>
                      <Switch id="in-app-project-updates" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="in-app-consultant-messages">Consultant Messages</Label>
                      <Switch id="in-app-consultant-messages" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="in-app-strategy-sessions">Strategy Session Reminders</Label>
                      <Switch id="in-app-strategy-sessions" defaultChecked />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSave} disabled={saving}>
                  {saving ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ClientLayout>
  )
}
