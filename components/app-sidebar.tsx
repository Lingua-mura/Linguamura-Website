"use client"

import * as React from "react"
import {
  Bell,
  Bookmark,
  // Bot,
  Gem,
  House,
  MessageCircleMore,
  MessageCircleQuestion,
  Settings,
  Users,
  Wallet,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  // SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import Image from "next/image"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: House,
      isActive: true,
    },
    {
      title: "Wallet",
      url: "#",
      icon: Wallet,
    },
    {
      title: "Friends",
      url: "#",
      icon: Users,
    },
    {
      title: "Messages",
      url: "#",
      icon: MessageCircleMore,
    },
    {
      title: "Bookmarks",
      url: "#",
      icon: Bookmark,
    },
    {
      title: "Go Premium",
      url: "#",
      icon: Gem,
    },
    {
      title: "Notifications",
      url: "#",
      icon: Bell,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
    {
      title: "Help Center",
      url: "#",
      icon: MessageCircleQuestion,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open, isMobile } = useSidebar()
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="relative flex justify-center items-center border-b h-20">
        <div className="flex items-center">
          <Image
            src="/linguamura_logo.svg" // Replace with your logo path
            alt="LinguaMura Logo"
            width={40}
            height={40}
          />
          {
          open &&
          <span className="font-bold text-lg">LinguaMura</span> 
          }
        </div>
        {!isMobile &&
        <SidebarTrigger className="absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary h-6 w-6 rounded-full flex items-center justify-center bg-slate-100" />
        }
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      {/* <SidebarRail /> */}
    </Sidebar>
  )
}
