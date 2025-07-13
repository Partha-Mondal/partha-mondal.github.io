"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  hint: string;
};

type PortfolioCardProps = {
  project: Project;
};

export function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <Card 
      className={cn(
          "h-full overflow-hidden shadow-lg transition-all duration-300 ease-in-out",
          "hover:shadow-2xl hover:shadow-primary/20 hover:scale-105",
          "bg-card/60 backdrop-blur-sm border-primary/10"
      )}
    >
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            data-ai-hint={project.hint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
        <CardDescription className="font-serif text-base mb-4 min-h-[4.5rem]">{project.description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
