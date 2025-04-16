"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

// Standard rate card from the requirements
const PRICING = {
  strategySession: 800, // 2hr @ $400/hr
  promptGeneration: 1000,
  baseHourlyRate: 200,
  consultantHourlyRate: 300,
  travelSurcharge: 50,
  addons: {
    sms: 150,
    email: 100,
    whatsapp: 200,
    mpesa: 300,
    blockchain: 400,
    pdf: 150,
    verification: 250,
  },
}

export function PricingCalculator() {
  const [estimatedHours, setEstimatedHours] = useState(20)
  const [needsStrategy, setNeedsStrategy] = useState(false)
  const [needsConsultant, setNeedsConsultant] = useState(false)
  const [inPersonConsulting, setInPersonConsulting] = useState(false)
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let calculatedTotal = estimatedHours * PRICING.baseHourlyRate

    if (needsStrategy) {
      calculatedTotal += PRICING.strategySession + PRICING.promptGeneration
    }

    if (needsConsultant) {
      calculatedTotal += estimatedHours * PRICING.consultantHourlyRate

      if (inPersonConsulting) {
        calculatedTotal += estimatedHours * PRICING.travelSurcharge
      }
    }

    selectedAddons.forEach((addon) => {
      calculatedTotal += PRICING.addons[addon as keyof typeof PRICING.addons] || 0
    })

    setTotal(calculatedTotal)
  }, [estimatedHours, needsStrategy, needsConsultant, inPersonConsulting, selectedAddons])

  const handleAddonToggle = (addon: string) => {
    setSelectedAddons((prev) => (prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]))
  }

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Calculate Your Project Cost</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Estimated Project Size</Label>
          <div className="flex items-center gap-4">
            <Slider
              value={[estimatedHours]}
              min={10}
              max={100}
              step={5}
              onValueChange={(value) => setEstimatedHours(value[0])}
              className="flex-1"
            />
            <span className="w-16 text-right font-medium">{estimatedHours} hrs</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Base development cost: ${estimatedHours * PRICING.baseHourlyRate}
          </p>
        </div>

        <div className="space-y-2">
          <Label>Services</Label>
          <div className="grid gap-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="strategy"
                checked={needsStrategy}
                onCheckedChange={(checked) => setNeedsStrategy(checked as boolean)}
              />
              <Label htmlFor="strategy" className="flex-1">
                Strategy Session (2hr) + v0 Prompt Generation
              </Label>
              <span className="text-sm font-medium">${PRICING.strategySession + PRICING.promptGeneration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="consultant"
                checked={needsConsultant}
                onCheckedChange={(checked) => setNeedsConsultant(checked as boolean)}
              />
              <Label htmlFor="consultant" className="flex-1">
                Consultant Support
              </Label>
              <span className="text-sm font-medium">${PRICING.consultantHourlyRate}/hr</span>
            </div>
            {needsConsultant && (
              <div className="flex items-center space-x-2 ml-6">
                <Checkbox
                  id="in-person"
                  checked={inPersonConsulting}
                  onCheckedChange={(checked) => setInPersonConsulting(checked as boolean)}
                />
                <Label htmlFor="in-person" className="flex-1">
                  In-person consulting
                </Label>
                <span className="text-sm font-medium">+${PRICING.travelSurcharge}/hr</span>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label>Add-ons</Label>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="sms"
                checked={selectedAddons.includes("sms")}
                onCheckedChange={() => handleAddonToggle("sms")}
              />
              <Label htmlFor="sms" className="flex-1">
                SMS Integration
              </Label>
              <span className="text-sm font-medium">${PRICING.addons.sms}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="email"
                checked={selectedAddons.includes("email")}
                onCheckedChange={() => handleAddonToggle("email")}
              />
              <Label htmlFor="email" className="flex-1">
                Email Integration
              </Label>
              <span className="text-sm font-medium">${PRICING.addons.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="whatsapp"
                checked={selectedAddons.includes("whatsapp")}
                onCheckedChange={() => handleAddonToggle("whatsapp")}
              />
              <Label htmlFor="whatsapp" className="flex-1">
                WhatsApp Integration
              </Label>
              <span className="text-sm font-medium">${PRICING.addons.whatsapp}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="mpesa"
                checked={selectedAddons.includes("mpesa")}
                onCheckedChange={() => handleAddonToggle("mpesa")}
              />
              <Label htmlFor="mpesa" className="flex-1">
                M-PESA Payments
              </Label>
              <span className="text-sm font-medium">${PRICING.addons.mpesa}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="blockchain"
                checked={selectedAddons.includes("blockchain")}
                onCheckedChange={() => handleAddonToggle("blockchain")}
              />
              <Label htmlFor="blockchain" className="flex-1">
                Blockchain Integration
              </Label>
              <span className="text-sm font-medium">${PRICING.addons.blockchain}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="pdf"
                checked={selectedAddons.includes("pdf")}
                onCheckedChange={() => handleAddonToggle("pdf")}
              />
              <Label htmlFor="pdf" className="flex-1">
                PDF / eSignature
              </Label>
              <span className="text-sm font-medium">${PRICING.addons.pdf}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="verification"
                checked={selectedAddons.includes("verification")}
                onCheckedChange={() => handleAddonToggle("verification")}
              />
              <Label htmlFor="verification" className="flex-1">
                ID / Business Verification
              </Label>
              <span className="text-sm font-medium">${PRICING.addons.verification}</span>
            </div>
          </div>
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <span className="text-lg font-medium">Estimated Total</span>
          <span className="text-2xl font-bold">${total.toLocaleString()}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" size="lg" asChild>
          <Link href="/client/projects/new">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
