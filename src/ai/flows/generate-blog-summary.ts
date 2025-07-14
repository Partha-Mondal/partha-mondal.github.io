
/**
 * @fileOverview Generates a concise summary of a blog post using AI.
 *
 * - generateBlogSummary - A function that generates the blog summary.
 * - GenerateBlogSummaryInput - The input type for the generateBlogSummary function.
 * - GenerateBlogSummaryOutput - The return type for the generateBlogSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogSummaryInputSchema = z.object({
  blogPostContent: z
    .string()
    .describe('The complete content of the blog post to be summarized.'),
});

export type GenerateBlogSummaryInput = z.infer<typeof GenerateBlogSummaryInputSchema>;

const GenerateBlogSummaryOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the blog post, suitable for display on a blog index page.'),
});

export type GenerateBlogSummaryOutput = z.infer<typeof GenerateBlogSummaryOutputSchema>;

export async function generateBlogSummary(input: GenerateBlogSummaryInput): Promise<GenerateBlogSummaryOutput> {
  return generateBlogSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBlogSummaryPrompt',
  input: {schema: GenerateBlogSummaryInputSchema},
  output: {schema: GenerateBlogSummaryOutputSchema},
  prompt: `You are an expert blog summarizer.  You will be provided with the content of a blog post, and you will generate a concise summary of the blog post. The summary should be no more than three sentences long, and should capture the main points of the blog post. The summary will be displayed on a blog index page to help users decide whether to read the full post.\n\nBlog Post Content:\n\n{{blogPostContent}}`,
});

const generateBlogSummaryFlow = ai.defineFlow(
  {
    name: 'generateBlogSummaryFlow',
    inputSchema: GenerateBlogSummaryInputSchema,
    outputSchema: GenerateBlogSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
