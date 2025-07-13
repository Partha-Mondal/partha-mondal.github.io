"use client"

import { cn } from "@/lib/utils";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
      <div className={cn(
        "absolute top-[-10rem] left-[-15rem] h-[25rem] w-[35rem] rounded-full bg-primary/30 blur-3xl",
        "animate-move-blob-1"
      )} />
      <div className={cn(
        "absolute bottom-[-10rem] right-[-10rem] h-[25rem] w-[30rem] rounded-full bg-accent/30 blur-3xl",
        "animate-move-blob-2"
      )} />
      <div className={cn(
        "absolute bottom-[5rem] left-[10rem] h-[20rem] w-[25rem] rounded-md bg-primary/20 blur-3xl",
        "animate-move-blob-3"
      )} />
    </div>
  )
}
