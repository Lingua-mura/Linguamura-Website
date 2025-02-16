"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";

interface SidebarItem {
  icon: string;
  text: string;
  href: string;
  iconColor?: string;
}

interface SidebarProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

export default function Sidebar({ isCollapsed, toggleCollapse }: SidebarProps) {
  const sidebarItems: SidebarItem[] = [
    { icon: "lucide:home", text: "Home", href: "/" },
    { icon: "lucide:wallet", text: "Wallet", href: "/wallet" },
    { icon: "lucide:users", text: "Friends", href: "/friends" },
    { icon: "lucide:message-square", text: "Messages", href: "/messages" },
    { icon: "lucide:bookmark", text: "Bookmarks", href: "/bookmarks" },
    {
      icon: "lucide:gem",
      text: "Go Premium",
      href: "/premium",
      iconColor: "text-blue-500",
    },
    { icon: "lucide:refresh-cw", text: "Updates", href: "/updates" },
    { icon: "lucide:bell", text: "Notifications", href: "/notifications" },
    { icon: "lucide:settings", text: "Settings", href: "/settings" },
    { icon: "lucide:help-circle", text: "Help Center", href: "/help" },
  ];

  return (
    <div className="flex flex-col h-full border-r-2 border-r-[#A0EBEB]">
      {/* Logo and Collapse Icon */}
      <div className="w-full border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/linguamura_logo.svg"
              alt="Lingua"
              width={25}
              height={25}
              className="h-6"
            />
            {!isCollapsed && <h4>LinguaMura</h4>}
          </div>
          <div
            className={`absolute ${
              isCollapsed ? "left-[58px]" : "left-[237px]"
            } bg-[#A0EBEB] w-8 h-8 rounded-full flex items-center justify-center hover:scale-[1.09] transition-all duration-300 hover:backdrop-blur-3xl`}
          >
            <Icon
              icon={
                isCollapsed ? "lucide:chevron-right" : "lucide:chevron-left"
              }
              className="text-gray-600 w-5 h-5 cursor-pointer"
              onClick={toggleCollapse}
            />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-4 border-gray-200">
        <div className={`relative flex items-center ${isCollapsed ? "" : ""}`}>
          <Icon
            icon="lucide:search"
            className={`${
              isCollapsed ? "" : "absolute left-3"
            } text-gray-500 w-5 h-5 cursor-pointer`}
          />
          {!isCollapsed && (
            <input
              type="text"
              aria-label="Search"
              className="w-full p-2 pl-12 rounded-full border text-center border-gray-300"
              placeholder="search"
            />
          )}
        </div>
      </div>

      {/* Sidebar Items */}
      <div className="flex-1 overflow-y-auto">
        <ul className="space-y-1 p-2 w-full ">
          {sidebarItems.map((item) => (
            <li key={item.text}>
              <a
                href={item.href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#A0EBEB] hover:border-r-2 border-r-teal-400 transition-transform duration-300  hover:scale-[1.02] no-underline text-black"
              >
                <Icon
                  icon={item.icon}
                  className={`${item.iconColor || "text-gray-600"} w-5 h-5`}
                />
                {!isCollapsed && <span>{item.text}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Logout Section */}
      <div className="p-4 border-t border-gray-200">
        <button
          type="button"
          className="flex items-center gap-3 text-gray-600 hover:text-red-500 w-full"
        >
          <Icon icon="lucide:log-out" className="w-5 h-5" />
          {!isCollapsed && <span>Log out</span>}
        </button>
      </div>
    </div>
  );
}
