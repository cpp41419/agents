'use server';
/**
 * @fileOverview This file defines a Genkit flow for mitigating perceived risks in real estate transactions.
 *
 * - mitigateTransactionRisks - A function that takes user-defined risks and provides solutions from a real estate agent's perspective.
 * - MitigateTransactionRisksInput - The input type for the mitigateTransactionRisks function.
 * - MitigateTransactionRisksOutput - The return type for the mitigateTransactionRisks function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MitigateTransactionRisksInputSchema = z.object({
  perceivedRisks: z
    .string()
    .describe('The perceived risks or disadvantages of undergoing a real estate transaction, as described by the user.'),
});
export type MitigateTransactionRisksInput = z.infer<typeof MitigateTransactionRisksInputSchema>;

const MitigateTransactionRisksOutputSchema = z.object({
  agentSolutions: z
    .string()
    .describe('A detailed explanation of how a real estate agent can address and solve the user-defined risks in a real estate transaction.'),
});
export type MitigateTransactionRisksOutput = z.infer<typeof MitigateTransactionRisksOutputSchema>;

export async function mitigateTransactionRisks(
  input: MitigateTransactionRisksInput
): Promise<MitigateTransactionRisksOutput> {
  return mitigateTransactionRisksFlow(input);
}

const mitigateTransactionRisksPrompt = ai.definePrompt({
  name: 'mitigateTransactionRisksPrompt',
  input: {schema: MitigateTransactionRisksInputSchema},
  output: {schema: MitigateTransactionRisksOutputSchema},
  prompt: `You are an expert real estate consultant. A user has identified the following perceived risks or disadvantages of undergoing a real estate transaction:

  {{perceivedRisks}}

  Explain, in detail, how a real estate agent can specifically address and solve these concerns, reinforcing their value to the user. Focus on providing practical solutions and demonstrating the agent's ability to mitigate these risks.`,
});

const mitigateTransactionRisksFlow = ai.defineFlow(
  {
    name: 'mitigateTransactionRisksFlow',
    inputSchema: MitigateTransactionRisksInputSchema,
    outputSchema: MitigateTransactionRisksOutputSchema,
  },
  async input => {
    const {output} = await mitigateTransactionRisksPrompt(input);
    return output!;
  }
);
