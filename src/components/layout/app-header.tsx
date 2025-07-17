import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import { Code, Menu } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "@/components/ui/button";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:px-8">
      <div className="flex items-center gap-2 md:hidden">
        <SidebarTrigger variant="ghost" size="icon" className="h-8 w-8 p-0">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </SidebarTrigger>
        <Link href="/" className="flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-semibold sr-only">Artisan Coder</span>
        </Link>
      </div>
      <div className="hidden md:flex flex-1 items-center gap-4">
        {/* You can add desktop navigation items here if needed */}
      </div>
      <div className="flex flex-1 md:flex-none items-center justify-end gap-4">
        <ThemeToggle />
      </div>
    </header>
  );
}
