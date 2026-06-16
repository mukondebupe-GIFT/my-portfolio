'use server';
/**
 * @fileOverview An AI assistant to generate a concise and engaging professional summary.
 *
 * - generateProfessionalSummary - A function that generates a professional summary based on bulleted inputs.
 * - GenerateProfessionalSummaryInput - The input type for the generateProfessionalSummary function.
 * - GenerateProfessionalSummaryOutput - The return type for the generateProfessionalSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProfessionalSummaryInputSchema = z
  .object({
    bulletedInputs: z
      .string()
      .describe(
        'Bulleted inputs describing the user\'s experience and technical documentation. Each point should start with a dash (-).'
      ),
  })
  .describe('Input for generating a professional summary.');
export type GenerateProfessionalSummaryInput = z.infer<
  typeof GenerateProfessionalSummaryInputSchema
>;

const GenerateProfessionalSummaryOutputSchema = z
  .object({
    summary: z
      .string()
      .describe('A concise and engaging professional summary.'),
  })
  .describe('Output containing the generated professional summary.');
export type GenerateProfessionalSummaryOutput = z.infer<
  typeof GenerateProfessionalSummaryOutputSchema
>;

export async function generateProfessionalSummary(
  input: GenerateProfessionalSummaryInput
): Promise<GenerateProfessionalSummaryOutput> {
  return generateProfessionalSummaryFlow(input);
}

const generateProfessionalSummaryPrompt = ai.definePrompt({
  name: 'generateProfessionalSummaryPrompt',
  input: {schema: GenerateProfessionalSummaryInputSchema},
  output: {schema: GenerateProfessionalSummaryOutputSchema},
  prompt: `You are an expert AI assistant specializing in crafting professional summaries for portfolios.

Your task is to take the provided bulleted inputs about a person's experience and technical documentation and transform them into a concise, engaging, and professional summary.

The summary should highlight their key skills, experience, and value proposition, suitable for a professional portfolio or resume header.

Bulleted Inputs:
{{{bulletedInputs}}}`,
});

const generateProfessionalSummaryFlow = ai.defineFlow(
  {
    name: 'generateProfessionalSummaryFlow',
    inputSchema: GenerateProfessionalSummaryInputSchema,
    outputSchema: GenerateProfessionalSummaryOutputSchema,
  },
  async (input) => {
    const {output} = await generateProfessionalSummaryPrompt(input);
    if (!output) {
      throw new Error('Failed to generate professional summary');
    }
    return output;
  }
);
