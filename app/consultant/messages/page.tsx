"use client"

import { useState } from "react"
import { ConsultantLayout } from "@/components/consultant/layout"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Search, Send, Paperclip, MoreVertical, Phone, Video } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState("1")
  const [message, setMessage] = useState("")

  const contacts = [
    {
      id: "1",
      name: "John Doe",
      company: "Acme Inc.",
      avatar: "/placeholder.svg",
      lastMessage: "Can you provide an update on the EduTrack project?",
      time: "10:30 AM",
      unread: true,
    },
    {
      id: "2",
      name: "Jane Smith",
      company: "TechCorp",
      avatar: "/placeholder.svg",
      lastMessage: "Thanks for the schema review. I'll look at it today.",
      time: "Yesterday",
      unread: false,
    },
    {
      id: "3",
      name: "Robert Johnson",
      company: "HealthTech",
      avatar: "/placeholder.svg",
      lastMessage: "When can we schedule the next strategy session?",
      time: "Monday",
      unread: false,
    },
  ]

  const messages = [
    {
      id: "1",
      sender: "John Doe",
      content: "Hi there! I was wondering if you could provide an update on the EduTrack project?",
      time: "10:30 AM",
      isMe: false,
    },
    {
      id: "2",
      sender: "Me",
      content: "Hi John! I'm working on the database schema right now. Should be ready for review by end of day.",
      time: "10:32 AM",
      isMe: true,
    },
    {
      id: "3",
      sender: "John Doe",
      content: "That sounds great! Will you be deploying to Supabase today as well?",
      time: "10:35 AM",
      isMe: false,
    },
    {
      id: "4",
      sender: "Me",
      content: "Yes, that's the plan. I'll deploy to Supabase and then push the code to GitHub.",
      time: "10:36 AM",
      isMe: true,
    },
    {
      id: "5",
      sender: "John Doe",
      content: "Perfect! Looking forward to seeing the progress.",
      time: "10:38 AM",
      isMe: false,
    },
  ]

  const handleSendMessage = () => {
    if (!message.trim()) return
    // In a real app, this would send the message to the server
    setMessage("")
  }

  return (
    <ConsultantLayout>
      <div className="flex h-[calc(100vh-8rem)] flex-col">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
        </div>

        <div className="flex flex-1 overflow-hidden rounded-lg border">
          {/* Contacts sidebar */}
          <div className="w-80 border-r">
            <div className="p-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search messages..."
                  className="w-full rounded-lg bg-background pl-8"
                />
              </div>
            </div>
            <div className="h-[calc(100vh-12rem)] overflow-y-auto">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className={`flex cursor-pointer items-center gap-3 border-b p-4 hover:bg-muted/50 ${
                    activeChat === contact.id ? "bg-muted" : ""
                  }`}
                  onClick={() => setActiveChat(contact.id)}
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                    <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{contact.name}</h3>
                      <span className="text-xs text-muted-foreground">{contact.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{contact.lastMessage}</p>
                    <p className="text-xs text-muted-foreground">{contact.company}</p>
                  </div>
                  {contact.unread && <div className="h-2 w-2 rounded-full bg-primary"></div>}
                </div>
              ))}
            </div>
          </div>

          {/* Chat area */}
          <div className="flex flex-1 flex-col">
            {/* Chat header */}
            <div className="flex items-center justify-between border-b p-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg" alt="John Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">John Doe</h3>
                  <p className="text-xs text-muted-foreground">Acme Inc.</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Phone className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="h-5 w-5" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                    <DropdownMenuItem>View Projects</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Mute Conversation</DropdownMenuItem>
                    <DropdownMenuItem>Block Contact</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        msg.isMe ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                      <p className="mt-1 text-right text-xs opacity-70">{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message input */}
            <div className="border-t p-4">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Input
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage()
                    }
                  }}
                  className="flex-1"
                />
                <Button size="icon" onClick={handleSendMessage} disabled={!message.trim()}>
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConsultantLayout>
  )
}
