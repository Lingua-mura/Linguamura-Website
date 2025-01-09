"use client"

import { ChevronRight, LogOutIcon, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Separator } from "./ui/separator"
import Link from "next/link"
import "./sidebar.css";

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const { open } = useSidebar()
  return (
    <SidebarGroup className="pr-0">
      <SidebarMenu className="mt-4 gap-1">
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title} className="px-2 py-3 h-auto border-0 hover:font-bold hover:text-black hover:border-r-2 hover:border-primary group-data-[collapsible=icon]:!size-10 group-data-[collapsible=icon]:!justify-center group-data-[collapsible=icon]:!size-8 [&>svg]:size-5">
                  {item.icon && <item.icon />}
                  { open &&
                    <span>{item.title}</span>
                  }
                  {
                  item.items &&
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  }
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
        <Separator orientation="horizontal" />
        <SidebarMenuItem>
          <SidebarMenuButton asChild className="px-2 py-3 h-auto hover:bg-red-100 hover:font-bold hover:text-destructive hover:border-e hover:border-destructive">
            <Link href={"#"}>
              <LogOutIcon />
              <span>Log Out</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}
