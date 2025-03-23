import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ResponsiveMenu } from "@/components/responsive-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Bell, ChevronDown, Grip, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-20 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-20 border-b border-gray shadow-sm">
          <div className="flex flex-grow items-center justify-between px-8">
            <div>
              <ResponsiveMenu />
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-4 font-semibold text-gray-600">
                  LinguaMura Learn
                  <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-[200px]">
                  <DropdownMenuLabel>
                    LinguaMura Learn
                  </DropdownMenuLabel>
                  <DropdownMenuItem>
                    LinguaMura Marketplace / Bookings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    LinguaMura Entertainment
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    LinguaMura Health
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}
            </div>
            <div className="flex space-x-4 items-center">
              <div className="flex items-center">
                <Image src="/icons/intl.svg" alt="Icon" width={15} height={15} />
                <Select>
                  <SelectTrigger className="w-[100px] border-none ring-none">
                    <SelectValue placeholder="English" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Grip />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Linguamura Learn</DropdownMenuItem>
                  <DropdownMenuItem>Linguamura Marketplace/Bookings</DropdownMenuItem>
                  <DropdownMenuItem>Linguamura Entertainment</DropdownMenuItem>
                  <DropdownMenuItem>Linguamura Health</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <MessageCircleMore />
              <div className="relative">
                <span className="h-2 w-2 rounded-full bg-destructive absolute top-0 right-0"></span>
                <Bell />
              </div>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
        <main>
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}