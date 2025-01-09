"use client"

import * as React from "react";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";

export function ResponsiveMenu() {
    const { isMobile } = useSidebar();

    return (
        <>
            {
                isMobile && <SidebarTrigger className="mr-2" />
            }
        </>
    )
}