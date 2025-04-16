import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar, Clock } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const consultants = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Strategy Consultant",
    location: "Remote",
    rate: "$300/hr",
    bio: "Seasoned professional with 8+ years of experience in digital transformation for NGOs and SMEs across East Africa.",
    availability: "Available from May 15",
    image: "https://v0.blob.com/RzqFD-1.jpg",
    specialties: ["Digital Transformation", "NGO Solutions", "Data Strategy"],
  },
  {
    id: 2,
    name: "David Ochieng",
    title: "Technical Architect",
    location: "Nairobi, Kenya",
    rate: "$280/hr",
    bio: "Expert in building scalable platforms with 10+ years of experience working with startups and established businesses.",
    availability: "Available next week",
    image: "https://v0.blob.com/RzqFD-2.jpg",
    specialties: ["System Architecture", "Database Design", "API Development"],
  },
  {
    id: 3,
    name: "Amina Diallo",
    title: "Product Strategy Consultant",
    location: "Remote",
    rate: "$320/hr",
    bio: "Product strategist with experience across West Africa, specializing in fintech and healthcare solutions.",
    availability: "Limited availability",
    image: "https://v0.blob.com/RzqFD-3.jpg",
    specialties: ["Product Strategy", "UX Research", "Market Analysis"],
  },
]

export default function ConsultantsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 text-center">
          <div className="container space-y-6">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5">
              <span className="text-sm font-medium text-primary">Join Our Team</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              We're hiring Africa's
              <br />
              top Strategy Consultants
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-[#2dd4bf]">
              Transform ideas into live platforms for NGOs, founders, and SMEs
            </p>
            <div className="flex justify-center gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-lg">Remote</span>
              </div>
              <div className="text-[#2dd4bf]">|</div>
              <div className="flex items-center gap-2">
                <span className="text-lg">$300/hr</span>
              </div>
            </div>
            <Button size="lg" variant="default" className="rounded-full">
              Apply Now
            </Button>
          </div>
        </section>

        <section className="py-20 bg-muted/20">
          <div className="container space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">Meet Our Consultants</h2>
              <p className="mt-4 text-xl text-[#2dd4bf]">
                Work with experienced professionals who understand your market
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {consultants.map((consultant) => (
                <Card key={consultant.id} className="overflow-hidden">
                  <div className="p-6 flex justify-center">
                    <Avatar className="h-40 w-40">
                      <AvatarImage src={consultant.image || "/placeholder.svg"} alt={consultant.name} />
                      <AvatarFallback className="text-4xl">{consultant.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardHeader>
                    <CardTitle>{consultant.name}</CardTitle>
                    <CardDescription>{consultant.title}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm">{consultant.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {consultant.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#2dd4bf]">
                      <MapPin className="h-4 w-4" />
                      <span>{consultant.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#2dd4bf]">
                      <Clock className="h-4 w-4" />
                      <span>{consultant.rate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#2dd4bf]">
                      <Calendar className="h-4 w-4" />
                      <span>{consultant.availability}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Book a Session</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="space-y-4 md:col-span-1">
                <h2 className="text-3xl font-bold tracking-tight">What Our Consultants Do</h2>
                <p className="text-[#2dd4bf]">
                  Our consultants provide end-to-end support for your digital transformation journey
                </p>
              </div>
              <div className="space-y-8 md:col-span-2">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Run 2-hour strategy workshops</h3>
                  <p className="text-[#2dd4bf]">
                    Collaborate with clients to understand requirements and define project scope
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Review AI-powered prototypes</h3>
                  <p className="text-[#2dd4bf]">
                    Analyze v0-generated prototypes and suggest improvements for production
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Curate in our Consultant Marketplace</h3>
                  <p className="text-[#2dd4bf]">
                    Provide ongoing support and expertise to clients through our platform
                  </p>
                </div>
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
