"use server";

import { generateBlogSummary } from "@/ai/flows/generate-blog-summary";
import { z } from "zod";

const schema = z.object({
  blogPostContent: z.string().min(1, "Blog post content cannot be empty."),
});

type State = {
  summary: string | null;
  error: string | null;
};

export async function summarizeBlogPost(prevState: State, formData: FormData): Promise<State> {
  try {
    const parsed = schema.safeParse({
      blogPostContent: formData.get("blogPostContent"),
    });

    if (!parsed.success) {
      return { summary: null, error: parsed.error.errors[0].message };
    }

    const result = await generateBlogSummary({
      blogPostContent: parsed.data.blogPostContent,
    });
    
    return { summary: result.summary, error: null };
  } catch (e) {
    console.error(e);
    return { summary: null, error: "An unexpected error occurred. Please try again." };
  }
}
