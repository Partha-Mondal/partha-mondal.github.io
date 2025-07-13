import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Code } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-8">
      <div className="flex items-center gap-2 md:hidden">
        <SidebarTrigger />
        <Link href="/" className="flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-semibold">Artisan Coder</span>
        </Link>
      </div>
      <div className="flex w-full items-center justify-end gap-4">
        <ThemeToggle />
      </div>
    </header>
  );
}
