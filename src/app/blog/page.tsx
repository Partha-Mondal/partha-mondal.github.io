"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { generateBlogSummary, GenerateBlogSummaryInput } from "@/ai/flows/generate-blog-summary";
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
  const [summary, setSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(formData: FormData) {
    const blogPostContent = formData.get("blogPostContent") as string;
    
    if (!blogPostContent || blogPostContent.trim().length === 0) {
      setError("Blog post content cannot be empty.");
      setSummary(null);
      return;
    }

    setPending(true);
    setError(null);
    setSummary(null);

    try {
      const input: GenerateBlogSummaryInput = { blogPostContent };
      const result = await generateBlogSummary(input);
      setSummary(result.summary);
    } catch (e) {
      console.error(e);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setPending(false);
    }
  }

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
          <form action={handleSubmit} className="space-y-6">
            <Textarea
              name="blogPostContent"
              placeholder="Paste your full blog post content here..."
              className="min-h-[250px] text-base font-serif"
              required
              disabled={pending}
            />
            <div className="flex justify-end">
               <Button type="submit" disabled={pending} className="w-full md:w-auto">
                {pending ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                Generate Summary
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {error && (
         <Card className="max-w-4xl mx-auto mt-8 border-destructive bg-destructive/10">
          <CardHeader>
            <CardTitle className="text-destructive font-headline">Error</CardTitle>
          </Header>
          <CardContent>
            <p className="font-serif text-destructive">{error}</p>
          </CardContent>
        </Card>
      )}

      {summary && (
        <Card className="max-w-4xl mx-auto mt-8 shadow-lg bg-card/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-headline text-primary">Generated Summary</CardTitle>
          </Header>
          <CardContent>
            <p className="font-serif text-lg">{summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
