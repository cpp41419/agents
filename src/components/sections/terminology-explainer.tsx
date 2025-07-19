'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { BookText, Loader2, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { explainTermAction } from '@/app/actions';
import type { ExplainRealEstateTermOutput } from '@/ai/flows';

const formSchema = z.object({
  term: z.string().min(2, {
    message: 'Term must be at least 2 characters.',
  }),
});

export default function TerminologyExplainer() {
  const [explanation, setExplanation] = useState<ExplainRealEstateTermOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submittedTerm, setSubmittedTerm] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      term: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setExplanation(null);
    setSubmittedTerm(values.term);

    const result = await explainTermAction({ term: values.term });

    if (result.success && result.data) {
      setExplanation(result.data);
    } else {
      setError(result.message || 'An unknown error occurred.');
    }
    setIsLoading(false);
  }

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">AI-Powered Explainer</div>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-primary-foreground">Demystify Real Estate Jargon</h2>
            <p className="text-muted-foreground text-lg md:text-xl/relaxed">
                Confused by terms like "escrow" or "contingency"? Enter any real estate term below, and our AI will provide a simple, easy-to-understand explanation.
            </p>
        </div>

        <Card className="max-w-2xl mx-auto mt-12 shadow-lg border-border/60">
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl"><BookText className="text-primary h-7 w-7"/> Terminology Explainer</CardTitle>
                <CardDescription>Get clear definitions for complex terms.</CardDescription>
            </CardHeader>
            <CardContent>
                 <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                        control={form.control}
                        name="term"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-base">Real Estate Term</FormLabel>
                            <FormControl>
                                <Input className="text-base" placeholder="e.g., Amortization" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" disabled={isLoading} size="lg">
                            {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Sparkles className="mr-2 h-5 w-5" />}
                            Explain Term
                        </Button>
                    </form>
                </Form>

                {explanation && (
                    <div className="mt-8 p-6 border rounded-lg bg-background">
                        <h3 className="font-bold text-xl text-primary capitalize">{submittedTerm}</h3>
                        <p className="mt-4 text-foreground/90 text-base leading-relaxed">{explanation.explanation}</p>
                    </div>
                )}
                {error && (
                    <div className="mt-8 p-4 border rounded-lg bg-destructive/10 text-destructive">
                        <p>{error}</p>
                    </div>
                )}
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
