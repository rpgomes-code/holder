"use client";

import * as React from "react";
import { Factory } from "lucide-react";
import { NavMain as NavHolderMain } from "@/components/navbar/holder";
import { NavMain as NavStonksMain } from "@/components/navbar/stonks";
import { NavGeneral } from "@/components/navbar/general";
import { NavSecondary } from "@/components/navbar/secondary";
import { NavUser } from "@/components/navbar/user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  defaultUser,
  navHolderMain,
  navStonksMain,
  navSecondary,
  generalItems,
} from "@/constants/general/navbar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Factory className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">RPGOMES</span>
                  <span className="truncate text-xs">Factory</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/* Main navigation for the holder */}
        <NavHolderMain items={navHolderMain} />
        {/* Main navigation for the stonks */}
        <NavStonksMain items={navStonksMain} />
        {/* General navigation items 
        <NavGeneral generalItems={generalItems} />
        */}
        {/* Secondary navigation items, positioned at the bottom */}
        <NavSecondary items={navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={defaultUser} />
      </SidebarFooter>
    </Sidebar>
  );
}
