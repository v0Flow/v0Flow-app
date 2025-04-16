"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, FileText, Settings, HelpCircle, LogOut, Bot, CreditCard } from "lucide-react"
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

export function AdminSidebar() {
  const pathname = usePathname()
  const { signOut } = useAuth()

  const menuItems = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      isActive: pathname === "/admin",
    },
    {
      title: "Projects",
      href: "/admin/projects",
      icon: FileText,
      isActive: pathname.startsWith("/admin/projects"),
    },
    {
      title: "Users",
      href: "/admin/users",
      icon: Users,
      isActive: pathname.startsWith("/admin/users"),
    },
    {
      title: "AI Assistants",
      href: "/admin/ai-assistants",
      icon: Bot,
      isActive: pathname.startsWith("/admin/ai-assistants"),
    },
    {
      title: "Pricing",
      href: "/admin/pricing",
      icon: CreditCard,
      isActive: pathname.startsWith("/admin/pricing"),
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: Settings,
      isActive: pathname.startsWith("/admin/settings"),
    },
    {
      title: "Help",
      href: "/admin/help",
      icon: HelpCircle,
      isActive: pathname.startsWith("/admin/help"),
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/admin" className="flex items-center gap-2 px-2">
          <Logo className="h-8 w-8" />
          <span className="text-xl font-semibold">
            v0Flow
            <span className="ml-1 text-muted-foreground">Admin</span>
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
