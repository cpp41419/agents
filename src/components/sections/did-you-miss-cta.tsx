import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DidYouMissCta() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container">
        <Card className="bg-card/80 border-border/60">
            <div className="grid md:grid-cols-2">
                <div className="p-8 flex flex-col justify-center">
                    <CardHeader>
                        <CardTitle className="text-3xl font-black tracking-tighter">Did you miss this?</CardTitle>
                        <CardDescription className="text-lg text-muted-foreground">
                            An essential AI playbook for CEOs and executives.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="prose-invert text-base prose-p:text-muted-foreground">
                            <p>
                                "Beautiful Paradox: AI" translates complex artificial intelligence concepts into actionable strategies for leaders. Understand the collision of technology, policy, and public trust to future-proof your organization.
                            </p>
                        </div>
                        <Button size="lg" className="mt-6" asChild>
                            <Link href="https://book.rite.io" target="_blank" rel="noopener noreferrer">
                                Get The Book <ArrowRight className="ml-2" />
                            </Link>
                        </Button>
                    </CardContent>
                </div>
                <div className="p-8 flex items-center justify-center">
                    <Link href="https://book.rite.io" target="_blank" rel="noopener noreferrer" className="block w-full max-w-xs">
                        <Image 
                            src="https://book.rite.io/wp-content/uploads/2024/07/Book-Cover-1-1.png"
                            alt="Cover of the book Beautiful Paradox: AI"
                            width={400}
                            height={600}
                            className="rounded-lg shadow-2xl w-full h-auto"
                            data-ai-hint="book cover"
                        />
                    </Link>
                </div>
            </div>
        </Card>
      </div>
    </section>
  );
}
