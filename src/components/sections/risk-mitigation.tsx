'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ShieldQuestion, Loader2, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { mitigateRisksAction } from '@/app/actions';
import type { MitigateTransactionRisksOutput } from '@/ai/flows';

const formSchema = z.object({
  perceivedRisks: z.string().min(10, {
    message: 'Please describe your risks in at least 10 characters.',
  }),
});

export default function RiskMitigation() {
  const [solution, setSolution] = useState<MitigateTransactionRisksOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      perceivedRisks: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setSolution(null);

    const result = await mitigateRisksAction({ perceivedRisks: values.perceivedRisks });

    if (result.success && result.data) {
      setSolution(result.data);
    } else {
      setError(result.message || 'An unknown error occurred.');
    }
    setIsLoading(false);
  }

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-4">
            <p className="font-semibold text-primary uppercase tracking-wider">AI-Powered Risk Analysis</p>
            <h2 className="text-4xl font-black tracking-tighter sm:text-5xl text-primary-foreground">How an Agent Solves Your Problems</h2>
            <p className="text-muted-foreground text-lg md:text-xl/relaxed">
              What are your biggest fears about buying or selling a home? Tell our AI, and it will explain exactly how a qualified real estate agent can mitigate those specific risks.
            </p>
        </div>

        <Card className="max-w-2xl mx-auto mt-12 shadow-lg border-border/60 bg-card/80">
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl"><ShieldQuestion className="text-primary h-7 w-7"/> Risk Mitigation Tool</CardTitle>
                <CardDescription>Tell us your concerns, we'll provide the solutions.</CardDescription>
            </CardHeader>
            <CardContent>
                 <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                        control={form.control}
                        name="perceivedRisks"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-base">Your Perceived Risks</FormLabel>
                            <FormControl>
                                <Textarea rows={4} className="text-base" placeholder="e.g., 'I'm worried about overpaying for a house in this market, and I don't know how to handle negotiations.'" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" disabled={isLoading} size="lg">
                             {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Sparkles className="mr-2 h-5 w-5" />}
                            Mitigate My Risks
                        </Button>
                    </form>
                </Form>

                {solution && (
                    <div className="mt-8 p-6 border rounded-lg bg-background">
                        <h3 className="font-bold text-xl text-primary flex items-center gap-2"><Sparkles className="h-5 w-5" /> An Agent's Solution</h3>
                        <p className="mt-4 text-foreground/90 whitespace-pre-wrap text-base leading-relaxed">{solution.agentSolutions}</p>
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
