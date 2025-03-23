"use client";

import React, { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-4 py-5 md:px-8">
        {/* Logo */}
        <Link href="/" className="no-underline text-black">
          <div className="flex items-center">
            <Image
              src="/linguamura_logo.svg" // Replace with your logo path
              alt="LinguaMura Logo"
              width={40}
              height={40}
            />
            <span className="font-bold text-lg">LinguaMura</span>
          </div>
        </Link>
        {/* Navigation links */}
        <nav className="hidden lg:flex flex-grow items-center justify-between">
          <div className="ml-20 flex space-x-7 items-center">
            <Link href={""} className="font-semibold hover:text-primary transition-all">
              How it works
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-4 font-semibold text-black">
                Our Services
                <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[200px]">
                <DropdownMenuLabel>
                  LinguaMura Education
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  LinguaMura Health
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  LinguaMura Housing
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  LinguaMura Marketplace
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  LinguaMura Travel
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  LinguaMura Entertainment
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  LinguaMura Communities
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center">
              <div className="flex items-center mr-7">
                <Image src="/icons/intl.svg" alt="Icon" width={20} height={20} />
                <Select>
                    <SelectTrigger className="w-[100px] border-none ring-none">
                        <SelectValue placeholder="English" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                </Select>
              </div>
              <Link href={"/user/signin"} className={`${buttonVariants({ variant: "secondary", size: "lg" })} w-40 mr-2`}>
                Log in
              </Link>
              <Link href={"/user/signup"} className={buttonVariants({ variant: "primary", size: "lg" })}>
                  Sign up for free
              </Link>
          </div>
        </nav>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden flex items-center justify-center p-2 text-gray-700 hover:text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Popup */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-6"
          onClick={() => setMenuOpen(false)}
        >
          <a href="#" className="text-xl font-medium text-gray-700">
            How it works
          </a>
          <a href="#" className="text-xl font-medium text-gray-700">
            Our Services
          </a>
          <select className="text-gray-700 border rounded-md px-2 py-1 bg-transparent">
            <option>English</option>
            <option>Spanish</option>
          </select>
          <Link href="/user/signin" className="px-4 py-2 text-white bg-primary rounded-md">
            Log in
          </Link>
          <Link href="/user/signup" className="px-4 py-2 text-primary bg-secondary rounded-md">
            Sign up for free
          </Link>
        </div>
      )}
    </header>
  );
};
