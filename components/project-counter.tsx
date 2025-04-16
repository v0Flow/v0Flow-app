"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCounterProps {
  projectsCount: number
  avgLaunchTime: number
  revenueSaved: number
}

export function ProjectCounter({ projectsCount, avgLaunchTime, revenueSaved }: ProjectCounterProps) {
  const [animatedProjectsCount, setAnimatedProjectsCount] = useState(0)
  const [animatedRevenueSaved, setAnimatedRevenueSaved] = useState(0)

  useEffect(() => {
    const projectsInterval = setInterval(() => {
      setAnimatedProjectsCount((prev) => {
        if (prev < projectsCount) {
          return prev + 1
        }
        clearInterval(projectsInterval)
        return prev
      })
    }, 20)

    const revenueInterval = setInterval(() => {
      setAnimatedRevenueSaved((prev) => {
        const increment = Math.ceil(revenueSaved / 100)
        if (prev < revenueSaved) {
          return Math.min(prev + increment, revenueSaved)
        }
        clearInterval(revenueInterval)
        return prev
      })
    }, 20)

    return () => {
      clearInterval(projectsInterval)
      clearInterval(revenueInterval)
    }
  }, [projectsCount, revenueSaved])

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="bg-card/50">
        <CardContent className="p-6 text-center">
          <h3 className="text-lg font-medium text-muted-foreground">Projects Built</h3>
          <p className="text-4xl font-bold mt-2">{animatedProjectsCount}</p>
        </CardContent>
      </Card>
      <Card className="bg-card/50">
        <CardContent className="p-6 text-center">
          <h3 className="text-lg font-medium text-muted-foreground">Avg Time to Launch</h3>
          <p className="text-4xl font-bold mt-2">{avgLaunchTime} days</p>
        </CardContent>
      </Card>
      <Card className="bg-card/50">
        <CardContent className="p-6 text-center">
          <h3 className="text-lg font-medium text-muted-foreground">Revenue Saved vs Custom Dev</h3>
          <p className="text-4xl font-bold mt-2">${(animatedRevenueSaved / 1000).toFixed(0)}k</p>
        </CardContent>
      </Card>
    </div>
  )
}
