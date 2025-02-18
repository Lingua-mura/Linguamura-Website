"use client";

import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import Navbar from "./Navigations/Navbar";
import Sidebar from "./Navigations/Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Function to handle sidebar toggle for desktop
  const toggleDesktopSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  // Function to handle sidebar toggle for mobile
  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  // Close mobile sidebar when screen size increases
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileSidebarOpen) {
        setIsMobileSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileSidebarOpen]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop Sidebar - Hidden on Small Screens, Fixed on Larger Screens */}
      <aside
        className={`hidden md:flex h-screen ${
          isSidebarCollapsed ? "w-20" : "w-64"
        } bg-card overflow-y-scroll no-scrollbar transition-all duration-300`}
      >
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          toggleCollapse={toggleDesktopSidebar}
        />
      </aside>

      {/* Mobile Sidebar - Shown only on small screens when open */}
      {isMobileSidebarOpen && (
        <aside className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={toggleMobileSidebar}
          ></div>
          <div className="absolute top-0 left-0 h-full w-64 bg-white">
            <Sidebar
              isCollapsed={false}
              toggleCollapse={toggleMobileSidebar}
            />
          </div>
        </aside>
      )}

      {/* Main Content Area */}
      <div
        className={`flex flex-col flex-1 overflow-hidden ${
          isSidebarCollapsed ? "p-0" : "p-0"
        } transition-all duration-300`}
      >
        {/* Navbar */}
        <header className="w-full">
          <Navbar
            title="LinguaMura Entertainment"
            onSidebarToggle={toggleMobileSidebar}
          />
        </header>

        {/* Dynamic Content - Scrollable if needed */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
