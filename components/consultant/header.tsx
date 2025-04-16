"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/lib/auth-context"

export function ConsultantHeader() {
  const { user, signOut } = useAuth()

  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <div className="flex items-center gap-4 lg:gap-6">
        <form className="hidden md:flex">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[#2dd4bf]" />
            <Input
              type="search"
              placeholder="Search projects..."
              className="w-64 rounded-lg bg-background pl-8 md:w-80 lg:w-96"
            />
          </div>
        </form>
      </div>
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                3
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-80 overflow-auto">
              <DropdownMenuItem className="cursor-pointer">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">New project assigned</p>
                  <p className="text-xs text-[#2dd4bf]">You've been assigned to the EduTrack project</p>
                  <p className="text-xs text-[#2dd4bf]">10 minutes ago</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">Client message</p>
                  <p className="text-xs text-[#2dd4bf]">New message from client regarding Mjakazi Connect</p>
                  <p className="text-xs text-[#2dd4bf]">1 hour ago</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">Consultation scheduled</p>
                  <p className="text-xs text-[#2dd4bf]">New consultation scheduled for tomorrow at 2 PM</p>
                  <p className="text-xs text-[#2dd4bf]">3 hours ago</p>
                </div>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer justify-center">
              <span className="text-sm font-medium text-primary">View all notifications</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="Avatar" />
                <AvatarFallback>{user?.email?.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()}>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
