import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

interface CaseStudyCardProps {
  title: string
  description: string
  days: number
  tables: number
  slug: string
}

export function CaseStudyCard({ title, description, days, tables, slug }: CaseStudyCardProps) {
  return (
    <Card className="overflow-hidden border-border/50">
      <CardHeader className="p-6 pb-0">
        <div className="flex items-center gap-3">
          <Logo className="h-12 w-12" />
          <div>
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-[#2dd4bf]">{description}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex justify-between">
          <div>
            <p className="text-3xl font-bold">{days} days</p>
          </div>
          <div>
            <p className="text-3xl font-bold">{tables} tables</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full">
          <Link href={`/case-studies/${slug}`}>View Case Study</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
