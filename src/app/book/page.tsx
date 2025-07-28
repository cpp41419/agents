
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const Quote = ({ children, citation }: { children: React.ReactNode, citation?: string }) => (
  <blockquote className="my-8 border-l-4 border-primary pl-6 text-xl italic text-gray-700">
    <p>{children}</p>
    {citation && <cite className="mt-2 block text-base not-italic text-gray-600">— {citation}</cite>}
  </blockquote>
);

const SectionHeader = ({ overline, title }: { overline: string, title: string }) => (
    <div className="text-center my-16">
        <p className="font-semibold text-primary uppercase tracking-wider">{overline}</p>
        <h2 className="text-4xl font-black tracking-tighter text-gray-900 sm:text-5xl">{title}</h2>
    </div>
)

export default function BookPage() {
  return (
    <div className="bg-white text-gray-800">
      <div className="container mx-auto max-w-4xl py-16 px-4">
        <header className="text-center mb-16">
            <p className="font-semibold text-primary uppercase tracking-wider">PRE-ORDER NOW AVAILABLE</p>
            <h1 className="text-5xl font-black tracking-tighter text-gray-900 sm:text-6xl md:text-7xl mt-2">THE BEAUTIFUL PARADOX FRAMEWORK</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">The Definitive Emerging AI Marketing Innovation Director: The Blueprint</p>
            <p className="mt-4 text-sm font-semibold text-accent">LAUNCH: MARCH 23, 2025</p>
            <Button size="lg" className="mt-6" asChild>
                <Link href="https://book.rite.io">
                    Pre-Order Now & Get The Prompt Map
                </Link>
            </Button>
        </header>

        <article className="prose prose-lg max-w-none mx-auto prose-p:text-gray-700 prose-headings:text-gray-900 prose-strong:text-gray-900">
            <Quote citation="TIRED Magazine">
                "A deep refreshingly insightful exploration of AI's role in marketing that rivals 'Sapiens' in its insight into the human-technology relationship."
            </Quote>
            
            <div className="my-16 flex justify-center">
                 <Image 
                    src="https://book.rite.io/wp-content/uploads/2024/07/Book-Cover-3-3.png"
                    alt="The AI Marketing Innovation Director Book Cover"
                    width={400}
                    height={600}
                    className="rounded-lg shadow-2xl w-full max-w-sm h-auto"
                    data-ai-hint="book cover"
                />
            </div>
            
            <p className="text-center font-semibold">Coming March 29, 2025 | Major Retailers</p>
             <div className="flex justify-center gap-4 my-4 flex-wrap">
                <Button asChild variant="outline"><Link href="#">Gumroad</Link></Button>
                <Button asChild variant="outline"><Link href="#">Apple Books</Link></Button>
                <Button asChild variant="outline"><Link href="#">Barnes & Noble</Link></Button>
                <Button asChild variant="outline"><Link href="#">Rakuten Kobo</Link></Button>
             </div>


            <SectionHeader overline="Core Concept" title="The Beautiful Paradox" />
            
            <p className="lead text-center">In the fire hose landscape of Business, AI, & marketing, we face a beautiful paradox: the more powerful our algorithms become, the more essential our human emotions and creativity are.</p>
            
            <p>
                "Maybe the most honest thing we can say about marketing AI is that it's full of contradictions. It makes marketing both more scientific and more magical. It's simultaneously overhyped and underestimated. It promises personalization at scale, which is itself a kind of contradiction." This book explores the delicate balance between cutting-edge technology and timeless human psychology, revealing how the most successful AI marketing strategies embrace both sides of this paradox.
            </p>

            <p className="text-2xl font-bold text-center my-8">
                "Technology reshapes markets, but people reshape possibilities."
            </p>
            
            <SectionHeader overline="Critical Challenges" title="Why This Book Matters Now"/>
            <p className="text-center">Marketing leaders face unprecedented challenges in the AI era. This book provides the framework to overcome them.</p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
                <Card>
                    <CardHeader><CardTitle>The AI Firehose Problem</CardTitle></CardHeader>
                    <CardContent>
                        <p>Marketing leaders are drowning in a firehose of AI developments, unable to separate genuine innovation from hype, leading to costly implementation mistakes.</p>
                        <p className="mt-4 font-bold text-primary">The solution: A strategic evaluation framework for AI tools</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle>The Integration Challenge</CardTitle></CardHeader>
                    <CardContent>
                        <p>Organizations struggle to integrate AI marketing tools with legacy systems, creating siloed data and fragmented customer experiences that undermine ROI.</p>
                        <p className="mt-4 font-bold text-primary">The solution: The Integration Blueprint methodology</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle>The Human Element Gap</CardTitle></CardHeader>
                    <CardContent>
                        <p>Most AI implementations focus solely on technology, neglecting the critical human psychology elements that determine whether customers actually engage.</p>
                        <p className="mt-4 font-bold text-primary">The solution: Emotional Algorithm Design framework</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle>The Strategy Disconnect</CardTitle></CardHeader>
                    <CardContent>
                        <p>Companies deploy AI marketing tools tactically without a strategic framework, resulting in disjointed experiences and wasted resources on technologies that don't align with goals.</p>
                         <p className="mt-4 font-bold text-primary">The solution: The Beautiful Paradox strategic model</p>
                    </CardContent>
                </Card>
            </div>
            
             <Quote citation="WIRED Magazine, Special Report: The Future of Marketing, 2025">
                "Dodson captures the essential tension of our moment: as AI grows more capable of simulating humanity, authentic human connection becomes both scarcer and more valuable. The Beautiful Paradox isn't just insightful marketing theory—it's a profound meditation on the future relationship between technology and human experience."
            </Quote>

            <SectionHeader overline="Who This Book Is For" title="Built for Leaders & Innovators" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center my-12">
                <div>
                    <h4 className="font-bold text-lg">Marketing Executives</h4>
                    <p className="text-sm">CMOs and marketing directors looking to develop a strategic framework for AI implementation.</p>
                </div>
                <div>
                    <h4 className="font-bold text-lg">Business Owners</h4>
                    <p className="text-sm">Entrepreneurs who need to understand how AI can transform their marketing without massive resources.</p>
                </div>
                <div>
                    <h4 className="font-bold text-lg">AI/Tech Enthusiasts</h4>
                    <p className="text-sm">Technology professionals seeking to understand the human side of AI marketing implementation.</p>
                </div>
                <div>
                    <h4 className="font-bold text-lg">Academics</h4>
                    <p className="text-sm">Researchers and educators interested in the intersection of AI technology and marketing psychology.</p>
                </div>
            </div>

        </article>
        
        <div className="text-center mt-24 bg-secondary text-secondary-foreground p-12 rounded-lg">
            <h2 className="text-4xl font-black tracking-tighter">Navigate the Beautiful Paradox of AI Marketing</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Pre-order now to receive the exclusive $100,000 AI Implementation Prompt Map and early access to the first three chapters.</p>
             <p className="mt-4 text-sm font-semibold text-accent">Release Date: March 23, 2025 • All Major Retailers • Instant Digital Delivery</p>
            <Button size="lg" className="mt-6" asChild>
                <Link href="https://book.rite.io">
                    Secure Your Pre-Order
                </Link>
            </Button>
        </div>

      </div>
    </div>
  );
}
