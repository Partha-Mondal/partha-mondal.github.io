"use client";

import { usePathname } from "next/navigation";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function AppSidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {NAV_LINKS.map((item) => (
        <SidebarMenuItem key={item.href}>
          <Link href={item.href} legacyBehavior passHref>
            <SidebarMenuButton
              isActive={pathname === item.href}
              tooltip={item.label}
              className={cn(
                "bg-transparent hover:bg-primary/10",
                pathname === item.href && "bg-primary/20 text-primary"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
