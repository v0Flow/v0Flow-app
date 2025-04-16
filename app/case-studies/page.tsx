import { Navbar } from "@/components/navbar"
import { CaseStudyCard } from "@/components/case-study-card"

const caseStudies = [
  {
    title: "Mjakazi Connect",
    description: "A hiring platform for domestic workers",
    days: 5,
    tables: 12,
    slug: "mjakazi-connect",
  },
  {
    title: "EduTrack",
    description: "Student progress monitoring system",
    days: 7,
    tables: 8,
    slug: "edutrack",
  },
  {
    title: "HealthPulse",
    description: "Medical appointment scheduling",
    days: 4,
    tables: 10,
    slug: "healthpulse",
  },
  {
    title: "AgriConnect",
    description: "Marketplace for farmers and buyers",
    days: 6,
    tables: 15,
    slug: "agriconnect",
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="container space-y-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Case Studies</h1>
            <p className="mt-4 text-xl text-[#2dd4bf]">
              See how we've helped organizations transform their v0 prototypes into production-ready applications
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.slug}
                title={caseStudy.title}
                description={caseStudy.description}
                days={caseStudy.days}
                tables={caseStudy.tables}
                slug={caseStudy.slug}
              />
            ))}
          </div>
        </div>
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
