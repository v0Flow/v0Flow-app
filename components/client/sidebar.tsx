"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FileText, Settings, HelpCircle, LogOut, CreditCard, MessageSquare } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { Logo } from "@/components/logo"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function ClientSidebar() {
  const pathname = usePathname()
  const { signOut } = useAuth()

  const menuItems = [
    {
      title: "Dashboard",
      href: "/client",
      icon: LayoutDashboard,
      isActive: pathname === "/client",
    },
    {
      title: "My Projects",
      href: "/client/projects",
      icon: FileText,
      isActive: pathname.startsWith("/client/projects"),
    },
    {
      title: "Consultations",
      href: "/client/consultations",
      icon: MessageSquare,
      isActive: pathname.startsWith("/client/consultations"),
    },
    {
      title: "Billing",
      href: "/client/billing",
      icon: CreditCard,
      isActive: pathname.startsWith("/client/billing"),
    },
    {
      title: "Settings",
      href: "/client/settings",
      icon: Settings,
      isActive: pathname.startsWith("/client/settings"),
    },
    {
      title: "Help",
      href: "/client/help",
      icon: HelpCircle,
      isActive: pathname.startsWith("/client/help"),
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/client" className="flex items-center gap-2 px-2">
          <Logo className="h-8 w-8" />
          <span className="text-xl font-semibold">
            v0Flow
            <span className="ml-1 text-muted-foreground">Studio</span>
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild isActive={item.isActive}>
                <Link href={item.href}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => signOut()}>
              <LogOut className="h-5 w-5" />
              <span>Log Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
