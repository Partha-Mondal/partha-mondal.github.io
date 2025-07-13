"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { summarizeBlogPost } from "./actions";
import { Wand2, Loader2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto">
      {pending ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Wand2 className="mr-2 h-4 w-4" />
      )}
      Generate Summary
    </Button>
  );
}

export default function BlogPage() {
  const [state, formAction] = useFormState(summarizeBlogPost, { summary: null, error: null });

  return (
    <div className="container mx-auto px-4">
      <Card className="max-w-4xl mx-auto shadow-lg bg-card/60 backdrop-blur-sm">
         <CardHeader>
          <CardTitle className="font-headline text-2xl">Blog Summary Generator</CardTitle>
          <CardDescription className="font-serif">
            Paste your blog post content below to get a concise, AI-powered summary. Perfect for sharing or creating abstracts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-6">
            <Textarea
              name="blogPostContent"
              placeholder="Paste your full blog post content here..."
              className="min-h-[250px] text-base font-serif"
              required
            />
            <div className="flex justify-end">
              <SubmitButton />
            </div>
          </form>
        </CardContent>
      </Card>

      {state.error && (
         <Card className="max-w-4xl mx-auto mt-8 border-destructive bg-destructive/10">
          <CardHeader>
            <CardTitle className="text-destructive font-headline">Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-serif text-destructive">{state.error}</p>
          </CardContent>
        </Card>
      )}

      {state.summary && (
        <Card className="max-w-4xl mx-auto mt-8 shadow-lg bg-card/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-headline text-primary">Generated Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-serif text-lg">{state.summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
