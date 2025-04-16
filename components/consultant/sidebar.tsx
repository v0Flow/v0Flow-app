"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FileText, Settings, HelpCircle, LogOut, Calendar, MessageSquare, Users } from "lucide-react"
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

export function ConsultantSidebar() {
  const pathname = usePathname()
  const { signOut } = useAuth()

  const menuItems = [
    {
      title: "Dashboard",
      href: "/consultant",
      icon: LayoutDashboard,
      isActive: pathname === "/consultant",
    },
    {
      title: "Projects",
      href: "/consultant/projects",
      icon: FileText,
      isActive: pathname.startsWith("/consultant/projects"),
    },
    {
      title: "Clients",
      href: "/consultant/clients",
      icon: Users,
      isActive: pathname.startsWith("/consultant/clients"),
    },
    {
      title: "Messages",
      href: "/consultant/messages",
      icon: MessageSquare,
      isActive: pathname.startsWith("/consultant/messages"),
    },
    {
      title: "Calendar",
      href: "/consultant/calendar",
      icon: Calendar,
      isActive: pathname.startsWith("/consultant/calendar"),
    },
    {
      title: "Settings",
      href: "/consultant/settings",
      icon: Settings,
      isActive: pathname.startsWith("/consultant/settings"),
    },
    {
      title: "Help",
      href: "/consultant/help",
      icon: HelpCircle,
      isActive: pathname.startsWith("/consultant/help"),
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/consultant" className="flex items-center gap-2 px-2">
          <Logo className="h-8 w-8" />
          <span className="text-xl font-semibold">
            v0Flow
            <span className="ml-1 text-[#2dd4bf]">Consultant</span>
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
