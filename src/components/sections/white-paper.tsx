import { Button } from "@/components/ui/button";

const ArticleSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="space-y-4">
        <h3 className="text-2xl font-bold tracking-tight text-primary">{title}</h3>
        <div className="space-y-4 text-foreground/80">{children}</div>
    </div>
);

const ArticleStat = ({ value, label }: { value: string, label: string }) => (
    <li className="flex items-baseline space-x-2">
        <span className="text-2xl font-bold text-accent">{value}</span>
        <span>{label}</span>
    </li>
);

export default function WhitePaperSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <article className="prose prose-invert mx-auto max-w-4xl space-y-12">
                    <header className="text-center space-y-4 border-b border-border pb-8">
                        <p className="text-sm font-code tracking-widest uppercase text-muted-foreground">The Real Estate Truth Tribune</p>
                        <div className="flex justify-center space-x-4 text-xs text-muted-foreground font-code">
                            <span>Vol. MMXXIV, No. 1</span>
                            <span>December 2024</span>
                            <span>Truth: Priceless</span>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">Why Everyone Hates Real Estate Agents: The Beautiful Contradiction of Australian Property</h1>
                        <h2 className="text-xl font-medium text-muted-foreground">Opinion: The Parasitic Class We Created and Why We Can't Kill It</h2>
                        <p className="max-w-3xl mx-auto text-foreground/80">
                            An evidence-based deconstruction revealing the enigma of consumer resentment versus market necessity — from justified contempt to systemic dependence.
                        </p>
                        <p className="text-sm">By <span className="font-semibold">Simon Dodson</span><br /><span className="text-xs text-muted-foreground">Digital Transformation Specialist & Founder, CPP41419.com.au</span></p>
                    </header>

                    <div className="space-y-8">
                        <div className="p-6 rounded-lg border bg-secondary">
                            <h3 className="text-xl font-bold">Executive Summary: The $8.4 Billion Question</h3>
                            <p className="mt-2 text-muted-foreground">
                                Australian real estate agents extract <strong>$8.4 billion annually</strong> from property transactions while providing services that technology rendered obsolete a decade ago. This investigation reveals how a profession built on information scarcity survives in an age of information abundance — and why their extinction might hurt more than their existence.
                            </p>
                            <h4 className="font-semibold mt-4 mb-2">Key Findings:</h4>
                            <ul className="space-y-2 list-none p-0">
                                <ArticleStat value="73%" label="of homebuyers question agent value propositions" />
                                <ArticleStat value="67%" label="find properties before contacting agents" />
                                <ArticleStat value="33%" label="of unrepresented buyers fail to complete transactions" />
                                <ArticleStat value=">$2,500" label="Agent hourly rates for actual work performed" />
                                <ArticleStat value="2 yrs max" label="Industry transformation timeline" />
                            </ul>
                        </div>

                        <ArticleSection title="Part I: The Nigerian Princes of Property">
                            <p>Real estate agents are the Nigerian princes of property transactions. They're the professional class that somehow convinced society that unlocking doors requires a university degree in bullshit and a 6% cut of your children's inheritance.</p>
                            <p><strong>But here's the thing about parasites: some of them prevent autoimmune diseases. Which might explain why we're all still alive despite our best efforts at financial suicide.</strong></p>
                            <p>According to Roy Morgan Research, they're less trusted than journalists (9%), politicians (12%), and the guy who cleans portable toilets at music festivals (presumably higher). That's not hyperbole — that's data. And data, unlike real estate agents, doesn't lie about comparable sales.</p>
                        </ArticleSection>

                        <ArticleSection title="Part II: The Mirror We Hate Looking Into">
                            <p>But here's where it gets philosophically interesting: this contempt conceals a deeper duality. What we hate isn't agents — it's the mirror they hold up to our property-obsessed culture. Real estate agents reflect the ugliest parts of our national psyche: greed commodified, shelter financialized, community reduced to comparable sales.</p>
                        </ArticleSection>

                        <ArticleSection title="Part V: The Mathematical Impossibility of Modern Real Estate">
                            <h4 className="text-lg font-semibold">Breaking Down the Numbers Agents Pray You Won't Calculate</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>10 weeks:</strong> Average property search duration</li>
                                <li><strong>20%:</strong> Agent involvement in search</li>
                                <li><strong>75%:</strong> Documentation handled by conveyancers</li>
                                <li><strong>1-2:</strong> Negotiations requiring agent expertise</li>
                                <li><strong>8-12 hours:</strong> Actual value-added time</li>
                                <li><strong>$2,500-$3,750:</strong> Commission per hour of actual work</li>
                            </ul>
                             <h4 className="text-lg font-semibold mt-4">The Self-Service Revolution</h4>
                            <p>Consumers now complete <strong>80% of the work</strong>, yet we still pay <strong>100%</strong> of traditional commissions. That's not a service model. That's a subscription scam that makes gym memberships look honest.</p>
                        </ArticleSection>

                        <ArticleSection title="Part X: The Coming Revolution">
                            <p>The traditional real estate industry has <strong>two years left. Maximum.</strong> The question isn't whether you'll be part of its transformation — it's whether you'll lead it or be roadkill.</p>
                        </ArticleSection>

                        <div className="text-center space-y-4 pt-8 border-t border-border">
                            <h3 className="text-2xl font-bold text-primary">Action: Become the Change</h3>
                            <p className="text-muted-foreground">Ready to change real estate from the inside?</p>
                            <p>At <strong>CPP41419.com.au</strong>, we don't train traditional agents. We develop property professionals for the post-disruption era.</p>
                            <div className="flex justify-center gap-4">
                                <Button size="lg">Start Your Revolution</Button>
                                <Button size="lg" variant="secondary">Read More Analysis</Button>
                            </div>
                            <p className="text-sm text-muted-foreground pt-4">Because the best way to beat a broken system is to rebuild it with better people.</p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}
