import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter } from "@/components/ui/sidebar";
import Link from "next/link";
import { Code } from "lucide-react";
import { AppSidebarNav } from "./app-sidebar-nav";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center justify-between">
           <Link href="/" className="flex items-center gap-2">
              <Code className="h-8 w-8 text-primary" />
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <AppSidebarNav />
      </SidebarContent>
      <SidebarFooter className="flex-col items-start gap-4" />
    </Sidebar>
  );
}
