import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function DidYouMissCta() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container">
        <Card className="bg-card/80 border-border/60">
            <div className="grid md:grid-cols-2">
                <div className="p-8">
                    <CardHeader>
                        <CardTitle className="text-3xl font-black tracking-tighter">Did you miss this?</CardTitle>
                        <CardDescription className="text-lg text-muted-foreground">
                            A quick recap of our latest insights and what they mean for you.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="prose-invert text-base prose-p:text-muted-foreground">
                            <p>
                                The real estate industry is on the brink of a massive transformation. Our latest analysis breaks down why the traditional agent model is failing and what the future holds for consumers and professionals alike. We explore the tech, the trends, and the truths you need to know.
                            </p>
                        </div>
                        <Button size="lg" className="mt-6">
                            Read the Full Analysis <ArrowRight className="ml-2" />
                        </Button>
                    </CardContent>
                </div>
                <div className="p-8 flex items-center justify-center">
                    <Image 
                        src="https://placehold.co/600x400.png"
                        alt="Placeholder image for the CTA"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg"
                        data-ai-hint="analysis chart"
                    />
                </div>
            </div>
        </Card>
      </div>
    </section>
  );
}
