'use server';
/**
 * @fileOverview Explains real estate terms using Genkit.
 *
 * - explainRealEstateTerm - A function that takes a real estate term as input and returns a simplified explanation.
 * - ExplainRealEstateTermInput - The input type for the explainRealEstateTerm function.
 * - ExplainRealEstateTermOutput - The return type for the explainRealEstateTerm function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainRealEstateTermInputSchema = z.object({
  term: z.string().describe('The real estate term to explain.'),
});
export type ExplainRealEstateTermInput = z.infer<typeof ExplainRealEstateTermInputSchema>;

const ExplainRealEstateTermOutputSchema = z.object({
  explanation: z.string().describe('A clear, concise explanation of the term.'),
});
export type ExplainRealEstateTermOutput = z.infer<typeof ExplainRealEstateTermOutputSchema>;

export async function explainRealEstateTerm(input: ExplainRealEstateTermInput): Promise<ExplainRealEstateTermOutput> {
  return explainRealEstateTermFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainRealEstateTermPrompt',
  input: {schema: ExplainRealEstateTermInputSchema},
  output: {schema: ExplainRealEstateTermOutputSchema},
  prompt: `You are an expert real estate terminology explainer. Your job is to explain real estate terms in a clear and concise way.

  Explain the following term:

  {{term}}`,
});

const explainRealEstateTermFlow = ai.defineFlow(
  {
    name: 'explainRealEstateTermFlow',
    inputSchema: ExplainRealEstateTermInputSchema,
    outputSchema: ExplainRealEstateTermOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
