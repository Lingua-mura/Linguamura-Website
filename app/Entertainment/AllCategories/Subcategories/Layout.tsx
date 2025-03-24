// "use client";

// import { useState } from "react";
// import type { ReactNode } from "react";
// import Navbar from "../../Navigations/Navbar";
// import Sidebar from "../../Navigations/Sidebar";

// export default function Layout({ children }: { children: ReactNode }) {
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* Sidebar - Hidden on Small Screens, Fixed on Larger Screens */}
//       <aside
//         className={`hidden md:flex h-screen ${
//           isSidebarCollapsed ? "w-[76px]" : "w-64"
//         } bg-card  overflow-y-scroll no-scrollbar transition-all duration-300`}
//       >
//         <Sidebar
//           isCollapsed={isSidebarCollapsed}
//           toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
//         />
//       </aside>

//       {/* Main Content Area */}
//       <div
//         className={`flex flex-col flex-1 overflow-hidden ${
//           isSidebarCollapsed ? "md:pl-0" : "md:pl-0"
//         } transition-all duration-300`}
//       >
//         {/* Navbar */}
//         <header className="w-full">
//           <Navbar title="LinguaMura Entertainment" />
//         </header>

//         {/* Dynamic Content - Scrollable if needed */}
//         <main className="flex-1 overflow-y-auto">{children}</main>
//       </div>
//     </div>
//   );
// }
