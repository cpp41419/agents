"use server";

import { explainRealEstateTerm, MitigateTransactionRisksInput, mitigateTransactionRisks, ExplainRealEstateTermInput } from "@/ai/flows";
import { z } from "zod";

const explainTermSchema = z.object({
  term: z.string().min(2, "Please enter a term to explain."),
});

export async function explainTermAction(input: ExplainRealEstateTermInput) {
  const validation = explainTermSchema.safeParse(input);
  if (!validation.success) {
    return { success: false, message: validation.error.errors[0].message };
  }
  try {
    const result = await explainRealEstateTerm(input);
    return { success: true, data: result };
  } catch (error) {
    console.error(error);
    return { success: false, message: "An error occurred. Please try again." };
  }
}


const mitigateRisksSchema = z.object({
  perceivedRisks: z.string().min(10, "Please describe your perceived risks in more detail."),
});

export async function mitigateRisksAction(input: MitigateTransactionRisksInput) {
    const validation = mitigateRisksSchema.safeParse(input);
    if (!validation.success) {
      return { success: false, message: validation.error.errors[0].message };
    }
    try {
      const result = await mitigateTransactionRisks(input);
      return { success: true, data: result };
    } catch (error) {
      console.error(error);
      return { success: false, message: "An error occurred. Please try again." };
    }
}
