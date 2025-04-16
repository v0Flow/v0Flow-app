import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export function Navbar() {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-8" />
          <span className="text-xl font-semibold">
            v0Flow
            <span className="ml-1 text-muted-foreground">Studio</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/case-studies" className="text-sm font-medium hover:text-primary transition-colors">
            Case Studies
          </Link>
          <Link href="/consultants" className="text-sm font-medium hover:text-primary transition-colors">
            Consultants
          </Link>
          <Link href="/help" className="text-sm font-medium hover:text-primary transition-colors">
            Help
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link href="/login">Sign In</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
