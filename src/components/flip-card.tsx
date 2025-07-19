"use client"

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from '@/lib/utils';

type FlipCardProps = {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
};

export function FlipCard({ frontContent, backContent, className }: FlipCardProps) {
  return (
    <div className={cn("flip-card", className)}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Card className="w-full h-full flex flex-col justify-center items-center p-6 shadow-lg bg-card/60 backdrop-blur-sm">
              {frontContent}
          </Card>
        </div>
        <div className="flip-card-back">
          <Card className="w-full h-full flex flex-col justify-center items-center p-6 shadow-lg bg-card/80 backdrop-blur-md">
              {backContent}
          </Card>
        </div>
      </div>
    </div>
  );
}
