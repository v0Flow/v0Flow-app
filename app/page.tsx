
'use client'
import { useRef, useState } from "react";

import { Cpu, Clock, DollarSign, Upload, MessageSquare, CheckCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { FileUpload } from "@/components/file-upload"
import { FeatureCard } from "@/components/feature-card"
import { CaseStudyCard } from "@/components/case-study-card"
import { Button } from "@/components/ui/button"
import { PricingCalculator } from "@/components/pricing-calculator"
import { Testimonials } from "@/components/testimonials"
import { ProjectCounter } from "@/components/project-counter"
import Link from "next/link"


const fileInputRef = useRef(null);
const [uploadStatus, setUploadStatus] = useState("");

const handleUpload = async (event) => {
  event.preventDefault();
  const file = fileInputRef.current?.files?.[0];
  if (!file) {
    setUploadStatus("Please select a file.");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  setUploadStatus("Uploading...");
  try {
    const res = await fetch("https://v0flow-agent.onrender.com/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (res.ok) {
      setUploadStatus("Upload successful. Project is being processed.");
      console.log("Server response:", data);
    } else {
      setUploadStatus("Upload failed: " + data.error);
    }
  } catch (error) {
    console.error("Error uploading:", error);
    setUploadStatus("Error during upload.");
  }
};


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Build your platform
                <br />
                in just 5 days
              </h1>
              <p className="text-xl text-[#2dd4bf]">
                Transform your v0 ZIP prototypes into full-stack systems with our AI-driven deployment platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="default" className="rounded-full" asChild>
                  <Link href="/client/projects/new">
                    <Upload className="mr-2 h-5 w-5" />
                    Upload ZIP
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full" asChild>
                  <Link href="/strategy">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Book Strategy Session
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <FileUpload />
            </div>
          </div>
        </section>

        {/* Project Counter Section */}
        <section className="py-10 bg-muted/30">
          <div className="container">
            <ProjectCounter projectsCount={127} avgLaunchTime={5} revenueSaved={2450000} />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/20">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
              <p className="text-xl text-[#2dd4bf] max-w-2xl mx-auto">
                Our platform automates the entire process from prototype to production
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <FeatureCard
                icon={Cpu}
                title="AI-Powered Automation"
                description="Instantly deploy your Supabase + Vercel stack with AI-generated schema and optional testing"
              />
              <FeatureCard
                icon={Clock}
                title="5-Day Delivery"
                description="Live preview and approve your system, then instantly push your code and database live"
              />
              <FeatureCard
                icon={DollarSign}
                title="Cost-Effective Launch"
                description="Get production-ready apps in days, saving on months of developer time and expenses"
              />
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Our Process</h2>
              <p className="text-xl text-[#2dd4bf] max-w-2xl mx-auto">
                From design to deployment in 5 simple steps
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Upload className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Upload ZIP</h3>
                <p className="text-[#2dd4bf]">Upload your v0.dev ZIP file and describe your system</p>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Cpu className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">AI Processing</h3>
                <p className="text-[#2dd4bf]">Our AI analyzes your design and generates the database schema</p>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Deployment</h3>
                <p className="text-[#2dd4bf]">
                  We deploy your database, push code to GitHub, and deploy to Vercel
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Go Live</h3>
                <p className="text-[#2dd4bf]">Preview, approve, and launch your production-ready system</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Calculator */}
        <section className="py-20 bg-muted/20">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Pricing Calculator</h2>
              <p className="text-xl text-[#2dd4bf] max-w-2xl mx-auto">Get an instant quote for your project</p>
            </div>
            <PricingCalculator />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">What Our Clients Say</h2>
              <p className="text-xl text-[#2dd4bf] max-w-2xl mx-auto">
                Hear from clients and consultants who have used our platform
              </p>
            </div>
            <Testimonials />
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-20 bg-muted/20">
          <div className="container space-y-12">
            <div className="flex justify-between items-end">
              <h2 className="text-3xl font-bold tracking-tight">Latest Case Studies</h2>
              <Button variant="outline" asChild>
                <Link href="/case-studies">View All</Link>
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <CaseStudyCard
                title="Mjakazi Connect"
                description="A hiring platform for domestic workers"
                days={5}
                tables={12}
                slug="mjakazi-connect"
              />
              <CaseStudyCard
                title="EduTrack"
                description="Student progress monitoring system"
                days={4}
                tables={8}
                slug="edutrack"
              />
              <CaseStudyCard
                title="HealthPulse"
                description="Medical appointment scheduling"
                days={3}
                tables={10}
                slug="healthpulse"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <div className="rounded-xl bg-primary/10 p-8 md:p-12 lg:p-16 text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to launch your platform?</h2>
              <p className="text-xl text-[#2dd4bf] max-w-2xl mx-auto">
                Get started today and have your system live in 5 days or less
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button size="lg" variant="default" className="rounded-full" asChild>
                  <Link href="/client/projects/new">
                    <Upload className="mr-2 h-5 w-5" />
                    Upload ZIP
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full" asChild>
                  <Link href="/strategy">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Book Strategy Session
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border/40 py-6">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <p className="text-sm text-[#2dd4bf]">© 2025 v0Flow Studio. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-[#2dd4bf] hover:text-foreground">
              Terms
            </a>
            <a href="#" className="text-sm text-[#2dd4bf] hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-sm text-[#2dd4bf] hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
