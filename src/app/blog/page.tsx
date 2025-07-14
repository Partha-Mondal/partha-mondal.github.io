"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4">
      <Card className="max-w-4xl mx-auto shadow-lg bg-card/60 backdrop-blur-sm">
         <CardHeader>
          <CardTitle className="font-headline text-2xl">Blog</CardTitle>
          <CardDescription className="font-serif">
            Welcome to my blog. More content coming soon!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="font-serif text-lg text-muted-foreground">This section is currently under construction. Check back later for articles and updates.</p>
        </CardContent>
      </Card>
    </div>
  );
}
