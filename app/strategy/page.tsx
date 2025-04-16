"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { ArrowRight, Upload, Building } from "lucide-react"

export default function StrategyPage() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  // Form state
  const [companyName, setCompanyName] = useState("")
  const [sector, setSector] = useState("")
  const [problem, setProblem] = useState("")
  const [desiredSystem, setDesiredSystem] = useState("")
  const [competitorLink, setCompetitorLink] = useState("")
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])
  const [file, setFile] = useState<File | null>(null)
  const [consultantId, setConsultantId] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
    }
  }

  const handleAddonToggle = (addon: string) => {
    setSelectedAddons((prev) => (prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]))
  }

  const handleNextStep = () => {
    if (step === 1) {
      if (!companyName || !sector || !problem || !desiredSystem) {
        toast({
          title: "Missing information",
          description: "Please fill in all required fields",
          variant: "destructive",
        })
        return
      }
    }

    setStep((prev) => prev + 1)
  }

  const handlePrevStep = () => {
    setStep((prev) => prev - 1)
  }

  const handleSubmit = async () => {
    setLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Strategy session booked",
        description: "You will receive a confirmation email shortly",
      })

      router.push("/client/dashboard")
    } catch (error) {
      console.error(error)
      toast({
        title: "Error",
        description: "Failed to book strategy session. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="container max-w-3xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight">Book a Strategy Session</h1>
            <p className="mt-2 text-muted-foreground">
              Let our consultants help you define and build your perfect system
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  1
                </div>
                <span className={step >= 1 ? "font-medium" : "text-muted-foreground"}>Project Details</span>
              </div>
              <Separator className="flex-1 mx-4" />
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  2
                </div>
                <span className={step >= 2 ? "font-medium" : "text-muted-foreground"}>Select Consultant</span>
              </div>
              <Separator className="flex-1 mx-4" />
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  3
                </div>
                <span className={step >= 3 ? "font-medium" : "text-muted-foreground"}>Payment</span>
              </div>
            </div>
          </div>

          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
                <CardDescription>Tell us about your project and requirements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input
                      id="company-name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sector">Sector</Label>
                    <Select value={sector} onValueChange={setSector}>
                      <SelectTrigger id="sector">
                        <SelectValue placeholder="Select sector" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="health">Healthcare</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="agriculture">Agriculture</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="problem">Problem Statement</Label>
                  <Textarea
                    id="problem"
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                    placeholder="Describe the problem you're trying to solve"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="desired-system">Desired System</Label>
                  <Textarea
                    id="desired-system"
                    value={desiredSystem}
                    onChange={(e) => setDesiredSystem(e.target.value)}
                    placeholder="Describe the system you want to build"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="competitor-link">Competitor or Reference Link (Optional)</Label>
                  <Input
                    id="competitor-link"
                    value={competitorLink}
                    onChange={(e) => setCompetitorLink(e.target.value)}
                    placeholder="https://example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Logo Upload (Optional)</Label>
                  <div className="flex items-center justify-center border-2 border-dashed border-border rounded-lg p-6">
                    <label className="flex flex-col items-center gap-2 cursor-pointer">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <span className="text-sm font-medium">Upload your company logo</span>
                      <span className="text-xs text-muted-foreground">SVG, PNG or JPG (max. 2MB)</span>
                      <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                      {file && <span className="text-sm text-primary">{file.name}</span>}
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Required Add-ons</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="sms-addon"
                        checked={selectedAddons.includes("sms")}
                        onCheckedChange={() => handleAddonToggle("sms")}
                      />
                      <Label htmlFor="sms-addon">SMS Integration</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="email-addon"
                        checked={selectedAddons.includes("email")}
                        onCheckedChange={() => handleAddonToggle("email")}
                      />
                      <Label htmlFor="email-addon">Email Integration</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="whatsapp-addon"
                        checked={selectedAddons.includes("whatsapp")}
                        onCheckedChange={() => handleAddonToggle("whatsapp")}
                      />
                      <Label htmlFor="whatsapp-addon">WhatsApp Integration</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="mpesa-addon"
                        checked={selectedAddons.includes("mpesa")}
                        onCheckedChange={() => handleAddonToggle("mpesa")}
                      />
                      <Label htmlFor="mpesa-addon">M-PESA Payments</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="blockchain-addon"
                        checked={selectedAddons.includes("blockchain")}
                        onCheckedChange={() => handleAddonToggle("blockchain")}
                      />
                      <Label htmlFor="blockchain-addon">Blockchain</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="verification-addon"
                        checked={selectedAddons.includes("verification")}
                        onCheckedChange={() => handleAddonToggle("verification")}
                      />
                      <Label htmlFor="verification-addon">ID Verification</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleNextStep}>
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Select a Consultant</CardTitle>
                <CardDescription>Choose a consultant for your strategy session</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <ConsultantCard
                    id="1"
                    name="Sarah Johnson"
                    title="Senior Strategy Consultant"
                    specialties={["Digital Transformation", "NGO Solutions", "Data Strategy"]}
                    location="Remote"
                    rate={300}
                    availability="Available from May 15"
                    selected={consultantId === "1"}
                    onSelect={() => setConsultantId("1")}
                  />
                  <ConsultantCard
                    id="2"
                    name="David Ochieng"
                    title="Technical Architect"
                    specialties={["System Architecture", "Database Design", "API Development"]}
                    location="Nairobi, Kenya"
                    rate={280}
                    availability="Available next week"
                    selected={consultantId === "2"}
                    onSelect={() => setConsultantId("2")}
                  />
                  <ConsultantCard
                    id="3"
                    name="Amina Diallo"
                    title="Product Strategy Consultant"
                    specialties={["Product Strategy", "UX Research", "Market Analysis"]}
                    location="Remote"
                    rate={320}
                    availability="Limited availability"
                    selected={consultantId === "3"}
                    onSelect={() => setConsultantId("3")}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handlePrevStep}>
                  Back
                </Button>
                <Button onClick={handleNextStep} disabled={!consultantId}>
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Payment</CardTitle>
                <CardDescription>Review your order and complete payment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium mb-2">Order Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Strategy Session (2 hours)</span>
                      <span>$800</span>
                    </div>
                    <div className="flex justify-between">
                      <span>v0 Prompt Generation</span>
                      <span>$1,000</span>
                    </div>
                    {selectedAddons.map((addon) => (
                      <div key={addon} className="flex justify-between">
                        <span>{addon.charAt(0).toUpperCase() + addon.slice(1)} Integration</span>
                        <span>
                          $
                          {
                            {
                              sms: 150,
                              email: 100,
                              whatsapp: 200,
                              mpesa: 300,
                              blockchain: 400,
                              verification: 250,
                            }[addon]
                          }
                        </span>
                      </div>
                    ))}
                    <Separator />
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>
                        $
                        {1800 +
                          selectedAddons.reduce(
                            (sum, addon) =>
                              sum +
                              {
                                sms: 150,
                                email: 100,
                                whatsapp: 200,
                                mpesa: 300,
                                blockchain: 400,
                                verification: 250,
                              }[addon],
                            0,
                          )}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Payment Method</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="card" name="payment" className="h-4 w-4" defaultChecked />
                      <Label htmlFor="card">Credit/Debit Card</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="mpesa" name="payment" className="h-4 w-4" />
                      <Label htmlFor="mpesa">M-PESA</Label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" placeholder="1234 5678 9012 3456" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handlePrevStep}>
                  Back
                </Button>
                <Button onClick={handleSubmit} disabled={loading}>
                  {loading ? "Processing..." : "Complete Payment"}
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}

interface ConsultantCardProps {
  id: string
  name: string
  title: string
  specialties: string[]
  location: string
  rate: number
  availability: string
  selected: boolean
  onSelect: () => void
}

function ConsultantCard({
  id,
  name,
  title,
  specialties,
  location,
  rate,
  availability,
  selected,
  onSelect,
}: ConsultantCardProps) {
  return (
    <div
      className={`relative rounded-lg border p-4 cursor-pointer transition-all ${
        selected ? "border-primary ring-1 ring-primary" : "hover:border-primary/50"
      }`}
      onClick={onSelect}
    >
      <input
        type="radio"
        name="consultant"
        id={`consultant-${id}`}
        className="absolute right-4 top-4"
        checked={selected}
        onChange={onSelect}
      />
      <div className="flex gap-4">
        <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
          <Building className="h-8 w-8 text-muted-foreground" />
        </div>
        <div className="space-y-1">
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">{title}</p>
          <div className="flex flex-wrap gap-1 mt-1">
            {specialties.map((specialty) => (
              <span key={specialty} className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
        <div>
          <p className="text-muted-foreground">Location</p>
          <p className="font-medium">{location}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Rate</p>
          <p className="font-medium">${rate}/hr</p>
        </div>
        <div>
          <p className="text-muted-foreground">Availability</p>
          <p className="font-medium">{availability}</p>
        </div>
      </div>
    </div>
  )
}
