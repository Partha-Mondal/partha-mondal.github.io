import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import { Code, X } from "lucide-react";
import { AppSidebarNav } from "./app-sidebar-nav";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center justify-between">
           <Link href="/" className="flex items-center gap-2">
              <Code className="h-8 w-8 text-primary" />
          </Link>
          <div className="md:hidden">
            <SidebarTrigger variant="ghost" size="icon" className="h-8 w-8 p-0">
                <X className="h-5 w-5" />
            </SidebarTrigger>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <AppSidebarNav />
      </SidebarContent>
      <SidebarFooter className="flex-col items-start gap-4" />
    </Sidebar>
  );
}
