import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, BookOpen, Users, Lightbulb, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="bg-card/50 p-6 rounded-lg border border-border/50">
        <div className="flex items-center gap-4 mb-3">
            <div className="text-primary">{icon}</div>
            <h3 className="text-xl font-bold text-primary-foreground">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
    </div>
);

export default function DidYouMissCta() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
            {/* Header */}
            <div className="text-center space-y-4">
                <p className="font-semibold text-primary uppercase tracking-wider">PRE-ORDER NOW AVAILABLE</p>
                <h2 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl text-primary-foreground">The Beautiful Paradox Framework</h2>
                <p className="text-lg text-muted-foreground">The Definitive Emerging AI Marketing Innovation Director: The Blueprint</p>
                <Button size="lg" asChild>
                    <Link href="https://book.rite.io" target="_blank" rel="noopener noreferrer">
                       Pre-Order Now & Get The Prompt Map
                    </Link>
                </Button>
            </div>

            {/* Book & Quote */}
            <div className="my-16 grid md:grid-cols-2 gap-12 items-center">
                <div className="w-full flex justify-center">
                    <Link href="https://book.rite.io" target="_blank" rel="noopener noreferrer" className="block w-full max-w-xs">
                        <Image 
                            src="https://book.rite.io/wp-content/uploads/2024/07/Book-Cover-1-1.png"
                            alt="Cover of the book Beautiful Paradox: AI"
                            width={400}
                            height={600}
                            className="rounded-lg shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
                            data-ai-hint="book cover"
                        />
                    </Link>
                </div>
                <div className="space-y-6">
                    <blockquote className="border-l-4 border-accent pl-6">
                        <p className="text-2xl italic font-serif text-primary-foreground">
                            "A deep, refreshingly insightful exploration of AI's role in marketing that rivals 'Sapiens' in its insight into the human-technology relationship."
                        </p>
                        <cite className="mt-4 block font-semibold text-muted-foreground not-italic">— TIRED Magazine</cite>
                    </blockquote>
                    <div className="space-y-2">
                        <p className="font-bold text-primary-foreground">Available March 29, 2025</p>
                        <div className="flex flex-wrap gap-4">
                            <Button variant="outline" asChild><Link href="https://gumroad.com" target="_blank">Gumroad</Link></Button>
                            <Button variant="outline" asChild><Link href="https://books.apple.com" target="_blank">Apple Books</Link></Button>
                            <Button variant="outline" asChild><Link href="https://www.barnesandnoble.com" target="_blank">Barnes & Noble</Link></Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Concept */}
            <div className="text-center my-24 space-y-4">
                <p className="font-semibold text-primary uppercase tracking-wider">Core Concept</p>
                <h3 className="text-4xl font-bold text-primary-foreground">The Beautiful Paradox</h3>
                <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                    In the fire hose landscape of Business, AI, & marketing, we face a beautiful paradox: the more powerful our algorithms become, the more essential our human emotions and creativity are. Technology reshapes markets, but people reshape possibilities.
                </p>
            </div>

            {/* Challenges */}
            <div className="space-y-12">
                <div className="text-center">
                    <h3 className="text-3xl font-bold text-primary-foreground">Why This Book Matters Now</h3>
                    <p className="text-muted-foreground mt-2">Marketing leaders face unprecedented challenges in the AI era. This book provides the framework to overcome them.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <FeatureCard
                        icon={<Lightbulb className="w-8 h-8"/>}
                        title="The AI Firehose Problem"
                        description="Leaders are drowning in AI developments, unable to separate innovation from hype. We provide a strategic evaluation framework."
                    />
                    <FeatureCard
                        icon={<TrendingUp className="w-8 h-8"/>}
                        title="The Integration Challenge"
                        description="Organizations struggle to integrate AI tools with legacy systems. Our Integration Blueprint methodology bridges the gap."
                    />
                     <FeatureCard
                        icon={<Users className="w-8 h-8"/>}
                        title="The Human Element Gap"
                        description="Implementations often neglect the human psychology that drives engagement. Learn our Emotional Algorithm Design framework."
                    />
                     <FeatureCard
                        icon={<BookOpen className="w-8 h-8"/>}
                        title="The Strategy Disconnect"
                        description="Tactical AI use without strategy leads to waste. The Beautiful Paradox is the strategic model to align your efforts."
                    />
                </div>
                <div className="text-center">
                    <blockquote className="max-w-3xl mx-auto text-xl italic text-primary-foreground/90">
                         "Dodson captures the essential tension of our moment... The Beautiful Paradox isn't just insightful marketing theory—it's a profound meditation on the future relationship between technology and human experience."
                         <cite className="mt-4 block font-semibold text-muted-foreground not-italic">— WIRED Magazine</cite>
                    </blockquote>
                </div>
            </div>

             {/* Final CTA */}
            <div className="mt-24 text-center">
                 <h3 className="text-3xl font-bold text-primary-foreground">Navigate the Beautiful Paradox of AI Marketing</h3>
                 <p className="mt-2 text-muted-foreground text-lg">Pre-order now to receive the exclusive $100,000 AI Implementation Prompt Map.</p>
                 <Button size="lg" className="mt-6" asChild>
                    <Link href="https://book.rite.io" target="_blank">
                        Pre-Order Today <ArrowRight className="ml-2"/>
                    </Link>
                 </Button>
                 <p className="text-sm mt-4 text-muted-foreground">Release Date: March 23, 2025 • All Major Retailers</p>
            </div>
        </div>
      </div>
    </section>
  );
}