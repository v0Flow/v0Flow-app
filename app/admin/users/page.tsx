import { AdminLayout } from "@/components/admin/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Edit, Search, Trash, UserPlus } from "lucide-react"
import Link from "next/link"

export default function UsersPage() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Users</h1>
            <p className="text-[#2dd4bf]">Manage users, clients, and consultants</p>
          </div>
          <Button asChild>
            <Link href="/admin/users/new">
              <UserPlus className="mr-2 h-4 w-4" />
              Add User
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[#2dd4bf]" />
            <Input type="search" placeholder="Search users..." className="w-full rounded-lg bg-background pl-8" />
          </div>
        </div>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Users</TabsTrigger>
            <TabsTrigger value="clients">Clients</TabsTrigger>
            <TabsTrigger value="consultants">Consultants</TabsTrigger>
            <TabsTrigger value="admins">Admins</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>All Users</CardTitle>
                <CardDescription>Manage all users across the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md border">
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead>
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Email</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Role</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Joined</th>
                            <th className="h-12 px-4 text-right align-middle font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-4 align-middle">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src="/placeholder.svg" alt="Avatar" />
                                  <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <span>John Doe</span>
                              </div>
                            </td>
                            <td className="p-4 align-middle">john.doe@example.com</td>
                            <td className="p-4 align-middle">
                              <Badge variant="outline">Client</Badge>
                            </td>
                            <td className="p-4 align-middle">
                              <Badge className="bg-green-500">Active</Badge>
                            </td>
                            <td className="p-4 align-middle">Apr 10, 2025</td>
                            <td className="p-4 align-middle text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="icon" asChild>
                                  <Link href="/admin/users/1">
                                    <Edit className="h-4 w-4" />
                                  </Link>
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <Trash className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-4 align-middle">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src="/placeholder.svg" alt="Avatar" />
                                  <AvatarFallback>SJ</AvatarFallback>
                                </Avatar>
                                <span>Sarah Johnson</span>
                              </div>
                            </td>
                            <td className="p-4 align-middle">sarah.johnson@example.com</td>
                            <td className="p-4 align-middle">
                              <Badge variant="outline">Consultant</Badge>
                            </td>
                            <td className="p-4 align-middle">
                              <Badge className="bg-green-500">Active</Badge>
                            </td>
                            <td className="p-4 align-middle">Mar 15, 2025</td>
                            <td className="p-4 align-middle text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="icon" asChild>
                                  <Link href="/admin/users/2">
                                    <Edit className="h-4 w-4" />
                                  </Link>
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <Trash className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-4 align-middle">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src="/placeholder.svg" alt="Avatar" />
                                  <AvatarFallback>DO</AvatarFallback>
                                </Avatar>
                                <span>David Ochieng</span>
                              </div>
                            </td>
                            <td className="p-4 align-middle">david.ochieng@example.com</td>
                            <td className="p-4 align-middle">
                              <Badge variant="outline">Consultant</Badge>
                            </td>
                            <td className="p-4 align-middle">
                              <Badge className="bg-green-500">Active</Badge>
                            </td>
                            <td className="p-4 align-middle">Feb 28, 2025</td>
                            <td className="p-4 align-middle text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="icon" asChild>
                                  <Link href="/admin/users/3">
                                    <Edit className="h-4 w-4" />
                                  </Link>
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <Trash className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-4 align-middle">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src="/placeholder.svg" alt="Avatar" />
                                  <AvatarFallback>AD</AvatarFallback>
                                </Avatar>
                                <span>Admin Demo</span>
                              </div>
                            </td>
                            <td className="p-4 align-middle">admin@v0flow.studio</td>
                            <td className="p-4 align-middle">
                              <Badge variant="outline">Admin</Badge>
                            </td>
                            <td className="p-4 align-middle">
                              <Badge className="bg-green-500">Active</Badge>
                            </td>
                            <td className="p-4 align-middle">Jan 01, 2025</td>
                            <td className="p-4 align-middle text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="icon" asChild>
                                  <Link href="/admin/users/4">
                                    <Edit className="h-4 w-4" />
                                  </Link>
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <Trash className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="clients" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Clients</CardTitle>
                <CardDescription>Manage client accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md border">
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead>
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Company</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Email</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Projects</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                            <th className="h-12 px-4 text-right align-middle font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-4 align-middle">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src="/placeholder.svg" alt="Avatar" />
                                  <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <span>John Doe</span>
                              </div>
                            </td>
                            <td className="p-4 align-middle">Acme Inc.</td>
                            <td className="p-4 align-middle">john.doe@example.com</td>
                            <td className="p-4 align-middle">3</td>
                            <td className="p-4 align-middle">
                              <Badge className="bg-green-500">Active</Badge>
                            </td>
                            <td className="p-4 align-middle text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="icon" asChild>
                                  <Link href="/admin/users/1">
                                    <Edit className="h-4 w-4" />
                                  </Link>
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <Trash className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="consultants" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Consultants</CardTitle>
                <CardDescription>Manage consultant accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md border">
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead>
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Title</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Email</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Rate</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                            <th className="h-12 px-4 text-right align-middle font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-4 align-middle">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src="/placeholder.svg" alt="Avatar" />
                                  <AvatarFallback>SJ</AvatarFallback>
                                </Avatar>
                                <span>Sarah Johnson</span>
                              </div>
                            </td>
                            <td className="p-4 align-middle">Senior Strategy Consultant</td>
                            <td className="p-4 align-middle">sarah.johnson@example.com</td>
                            <td className="p-4 align-middle">$300/hr</td>
                            <td className="p-4 align-middle">
                              <Badge className="bg-green-500">Active</Badge>
                            </td>
                            <td className="p-4 align-middle text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="icon" asChild>
                                  <Link href="/admin/users/2">
                                    <Edit className="h-4 w-4" />
                                  </Link>
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <Trash className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-4 align-middle">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src="/placeholder.svg" alt="Avatar" />
                                  <AvatarFallback>DO</AvatarFallback>
                                </Avatar>
                                <span>David Ochieng</span>
                              </div>
                            </td>
                            <td className="p-4 align-middle">Technical Architect</td>
                            <td className="p-4 align-middle">david.ochieng@example.com</td>
                            <td className="p-4 align-middle">$280/hr</td>
                            <td className="p-4 align-middle">
                              <Badge className="bg-green-500">Active</Badge>
                            </td>
                            <td className="p-4 align-middle text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="icon" asChild>
                                  <Link href="/admin/users/3">
                                    <Edit className="h-4 w-4" />
                                  </Link>
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <Trash className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="admins" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Admins</CardTitle>
                <CardDescription>Manage admin accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md border">
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead>
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Email</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Last Login</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                            <th className="h-12 px-4 text-right align-middle font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-4 align-middle">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src="/placeholder.svg" alt="Avatar" />
                                  <AvatarFallback>AD</AvatarFallback>
                                </Avatar>
                                <span>Admin Demo</span>
                              </div>
                            </td>
                            <td className="p-4 align-middle">admin@v0flow.studio</td>
                            <td className="p-4 align-middle">Apr 16, 2025</td>
                            <td className="p-4 align-middle">
                              <Badge className="bg-green-500">Active</Badge>
                            </td>
                            <td className="p-4 align-middle text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="icon" asChild>
                                  <Link href="/admin/users/4">
                                    <Edit className="h-4 w-4" />
                                  </Link>
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <Trash className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  )
}
