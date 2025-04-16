"use client"

import { useState } from "react"
import { ClientLayout } from "@/components/client/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { CreditCard, Download, Plus, Receipt, Calendar } from "lucide-react"
import Link from "next/link"

export default function BillingPage() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handlePayment = async () => {
    setLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Payment successful",
        description: "Your payment has been processed successfully.",
      })
    } catch (error) {
      toast({
        title: "Payment failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <ClientLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Billing</h1>
          <p className="text-[#2dd4bf]">Manage your payments and billing information</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Outstanding Balance</CardTitle>
              <CreditCard className="h-4 w-4 text-[#2dd4bf]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,999.00</div>
              <p className="text-xs text-[#2dd4bf]">Due on May 1, 2025</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handlePayment} disabled={loading}>
                {loading ? "Processing..." : "Pay Now"}
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Payment Methods</CardTitle>
              <CreditCard className="h-4 w-4 text-[#2dd4bf]" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-12 items-center justify-center rounded-md bg-muted">
                      <CreditCard className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">•••• •••• •••• 4242</p>
                      <p className="text-xs text-[#2dd4bf]">Expires 04/26</p>
                    </div>
                  </div>
                  <Badge>Default</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="#">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Payment Method
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Billing Information</CardTitle>
              <Receipt className="h-4 w-4 text-[#2dd4bf]" />
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p className="text-sm font-medium">Acme Inc.</p>
                <p className="text-xs text-[#2dd4bf]">John Doe</p>
                <p className="text-xs text-[#2dd4bf]">123 Main St, Suite 100</p>
                <p className="text-xs text-[#2dd4bf]">Nairobi, Kenya</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="#">Edit Billing Information</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Tabs defaultValue="invoices">
          <TabsList>
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
            <TabsTrigger value="payments">Payment History</TabsTrigger>
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
          </TabsList>
          <TabsContent value="invoices" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Invoices</CardTitle>
                <CardDescription>View and download your invoices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md border">
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead>
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className="h-12 px-4 text-left align-middle font-medium">Invoice</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Date</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Amount</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                            <th className="h-12 px-4 text-right align-middle font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-4 align-middle font-medium">INV-001</td>
                            <td className="p-4 align-middle">Apr 15, 2025</td>
                            <td className="p-4 align-middle">$1,999.00</td>
                            <td className="p-4 align-middle">
                              <Badge
                                variant="outline"
                                className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/10 hover:text-yellow-500"
                              >
                                Pending
                              </Badge>
                            </td>
                            <td className="p-4 align-middle text-right">
                              <Button variant="ghost" size="icon" asChild>
                                <Link href="#">
                                  <Download className="h-4 w-4" />
                                </Link>
                              </Button>
                            </td>
                          </tr>
                          <tr className="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-4 align-middle font-medium">INV-002</td>
                            <td className="p-4 align-middle">Mar 15, 2025</td>
                            <td className="p-4 align-middle">$999.00</td>
                            <td className="p-4 align-middle">
                              <Badge
                                variant="outline"
                                className="bg-green-500/10 text-green-500 hover:bg-green-500/10 hover:text-green-500"
                              >
                                Paid
                              </Badge>
                            </td>
                            <td className="p-4 align-middle text-right">
                              <Button variant="ghost" size="icon" asChild>
                                <Link href="#">
                                  <Download className="h-4 w-4" />
                                </Link>
                              </Button>
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
          <TabsContent value="payments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>View your payment history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md border">
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead>
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className="h-12 px-4 text-left align-middle font-medium">Transaction ID</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Date</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Amount</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Method</th>
                            <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-4 align-middle font-medium">TRX-001</td>
                            <td className="p-4 align-middle">Mar 15, 2025</td>
                            <td className="p-4 align-middle">$999.00</td>
                            <td className="p-4 align-middle">Credit Card</td>
                            <td className="p-4 align-middle">
                              <Badge
                                variant="outline"
                                className="bg-green-500/10 text-green-500 hover:bg-green-500/10 hover:text-green-500"
                              >
                                Completed
                              </Badge>
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
          <TabsContent value="subscription" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Subscription</CardTitle>
                <CardDescription>Manage your subscription</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-medium">Premium Plan</h3>
                      <p className="text-sm text-[#2dd4bf]">$1,999.00 per project</p>
                      <div className="mt-2 flex items-center gap-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>Renews on May 1, 2025</span>
                        </Badge>
                      </div>
                    </div>
                    <Button variant="outline">Change Plan</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Payment Method</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-16 items-center justify-center rounded-md bg-muted">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">•••• •••• •••• 4242</p>
                      <p className="text-xs text-[#2dd4bf]">Expires 04/26</p>
                    </div>
                    <Button variant="outline" size="sm" className="ml-auto">
                      Update
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Billing Information</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Company Name</Label>
                      <Input id="company-name" defaultValue="Acme Inc." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Contact Name</Label>
                      <Input id="contact-name" defaultValue="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" defaultValue="123 Main St, Suite 100" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" defaultValue="Nairobi" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Select defaultValue="kenya">
                        <SelectTrigger id="country">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kenya">Kenya</SelectItem>
                          <SelectItem value="uganda">Uganda</SelectItem>
                          <SelectItem value="tanzania">Tanzania</SelectItem>
                          <SelectItem value="rwanda">Rwanda</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postal-code">Postal Code</Label>
                      <Input id="postal-code" defaultValue="00100" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handlePayment} disabled={loading}>
                  {loading ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ClientLayout>
  )
}
