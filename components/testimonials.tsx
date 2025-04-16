"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    content:
      "v0Flow Studio transformed our idea into a fully functional platform in just 4 days. The process was seamless, and the result exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CEO, HealthTech Innovations",
    avatar: "/placeholder.svg?height=100&width=100",
    type: "client",
  },
  {
    id: 2,
    content:
      "As a consultant on the platform, I've helped dozens of NGOs launch their digital solutions in record time. The AI tools make my job easier and clients happier.",
    author: "David Ochieng",
    role: "Technical Architect",
    avatar: "/placeholder.svg?height=100&width=100",
    type: "consultant",
  },
  {
    id: 3,
    content:
      "We saved over $30,000 in development costs and launched 3 months ahead of schedule. The platform is robust and our users love it.",
    author: "Amina Diallo",
    role: "Project Manager, EduConnect",
    avatar: "/placeholder.svg?height=100&width=100",
    type: "client",
  },
  {
    id: 4,
    content:
      "The strategy session helped us refine our idea, and the v0Flow team delivered exactly what we needed. Our M-PESA integration works flawlessly.",
    author: "John Mwangi",
    role: "Founder, AgriTech Solutions",
    avatar: "/placeholder.svg?height=100&width=100",
    type: "client",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="h-full">
                <CardContent className="p-6 md:p-8 flex flex-col h-full">
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-primary/40" />
                  </div>
                  <p className="text-lg mb-6 flex-1">{testimonial.content}</p>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-[#2dd4bf]">{testimonial.role}</p>
                    </div>
                    <div className="ml-auto">
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {testimonial.type === "client" ? "Client" : "Consultant"}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 gap-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={() => {
            prevTestimonial()
            setAutoplay(false)
          }}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`w-2 h-2 p-0 rounded-full ${index === activeIndex ? "bg-primary" : "bg-muted-foreground/30"}`}
            onClick={() => {
              setActiveIndex(index)
              setAutoplay(false)
            }}
          />
        ))}
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={() => {
            nextTestimonial()
            setAutoplay(false)
          }}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
