import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Rocket, FileText, Forward, TrendingUp, Search, Home, DollarSign, ArrowRight, BrainCircuit, Users, Bed, BarChart, ShieldAlert, Clock, Gauge, UserCheck, SearchX, AlertTriangle, Hourglass } from "lucide-react";
import AnomalyAlertBanner from "./anomaly-alert-banner";
import ProfessionTrustChart from "./profession-trust-chart";
import KeyMetrics from "./key-metrics";


const ArticleSection = ({ title, overline, children, hasDropCap = false }: { title: string, overline: string, children: React.ReactNode, hasDropCap?: boolean }) => (
    <div className="space-y-6">
        <p className="font-semibold text-primary uppercase tracking-wider">{overline}</p>
        <h3 className="text-3xl font-black tracking-tight text-gray-900">{title}</h3>
        <div className={`space-y-6 text-gray-700 text-lg leading-relaxed ${hasDropCap ? 'first-letter:text-7xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left' : ''}`}>
            {children}
        </div>
    </div>
);


const ArticleTable = ({ caption, headers, rows }: { caption: string, headers: string[], rows: (string|number)[][] }) => (
    <div className="my-8">
        <Table>
            <caption className="text-base text-left text-gray-600 mb-2 px-4">{caption}</caption>
            <TableHeader>
                <TableRow className="border-slate-200">
                    {headers.map((header) => (
                        <TableHead key={header} className="text-gray-800 font-bold">{header}</TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {rows.map((row, rowIndex) => (
                    <TableRow key={rowIndex} className="border-slate-200">
                        {row.map((cell, cellIndex) => (
                           <TableCell key={cellIndex} className="text-gray-800 font-medium">{cell}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
);

const PullQuote = ({children, citation}: {children: React.ReactNode, citation?: string}) => (
    <blockquote className="my-10 border-l-4 border-primary pl-6 text-xl italic font-semibold text-gray-800">
        <p>“{children}”</p>
        {citation && <cite className="mt-2 block text-base font-normal text-primary not-italic">— {citation}</cite>}
    </blockquote>
)

const ValuePropCard = ({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) => (
    <div className="bg-slate-50 rounded-xl p-6 shadow-sm border border-slate-200">
        <div className="flex items-center gap-4">
            <div className="flex-shrink-0 text-primary">{icon}</div>
            <div>
                <p className="text-3xl font-black text-slate-900">{value}</p>
                <p className="text-sm text-slate-600">{label}</p>
            </div>
        </div>
    </div>
);

const MetricCircle = ({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) => (
    <div className="flex flex-col items-center justify-center text-center p-4">
        <div className="relative flex items-center justify-center w-36 h-36 rounded-full bg-slate-200 border-4 border-slate-300 shadow-inner">
            <div className="absolute text-primary opacity-10">{icon}</div>
            <span className="relative text-4xl font-black text-slate-800">{value}</span>
        </div>
        <p className="mt-4 text-base font-semibold text-slate-700 max-w-[150px]">{label}</p>
    </div>
);


export default function WhitePaperSection() {
    return (
        <section className="w-full py-16 md:py-24 lg:py-32 bg-slate-100 text-gray-800">
            <div className="container px-4 md:px-6">
                <article className="prose-invert mx-auto max-w-4xl space-y-12">
                    <header className="text-center space-y-4 border-b border-slate-200 pb-10">
                        <p className="text-sm font-mono tracking-widest uppercase text-primary">The Real Estate Truth Tribune</p>
                        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl text-gray-900">Why Everyone Hates Real Estate Agents</h1>
                        <h2 className="text-2xl font-medium text-gray-600 leading-snug">Opinion: The Parasitic Class We Created and Why We Can't Kill It</h2>
                        <p className="max-w-3xl mx-auto text-lg text-gray-700">
                            An evidence-based deconstruction revealing the enigma of consumer resentment versus market necessity — from justified contempt to systemic dependence.
                        </p>
                        <p className="text-base pt-4">By <span className="font-semibold text-gray-900">Simon Dodson</span><br /><span className="text-sm text-gray-600">Digital Transformation Specialist & Founder, CPP41419.com.au</span></p>
                    </header>

                    <div className="space-y-16">
                        <ArticleSection overline="Executive Summary" title="The $8.4 Billion Question" hasDropCap>
                             <p>The Australian real estate sector is defined by a profound paradox: agents are widely distrusted and perceived as providing technologically obsolete services, yet they remain systemically indispensable. This report deconstructs this "beautiful contradiction," revealing how a profession built on information scarcity persists in an age of abundance, and why its eventual transformation, rather than outright extinction, is both inevitable and necessary.</p>
                            <p>The industry extracts an estimated $8.4 billion annually from property transactions, a significant financial flow that underscores the economic friction points at the heart of the market. This substantial outlay occurs despite consumer skepticism regarding the value agents provide. Many traditional agent functions have been rendered obsolete by digital tools, leading to an effective hourly rate for agents that can exceed $2,500 for actual work performed. This unsustainable model necessitates rapid digital transformation, with an estimated industry transformation timeline of 2 years maximum.</p>
                            <KeyMetrics />
                            <p>This immediate snapshot of the report's central arguments quickly establishes the financial scale of the industry, the prevailing consumer sentiment (skepticism and self-reliance), and the critical, often hidden, function agents still perform (preventing transaction failures). By presenting these contrasting data points upfront, the core paradox and the urgency of the impending transformation are immediately framed for the strategic decision-maker.</p>
                        </ArticleSection>

                        <ArticleSection overline="Part I" title="The Trust Deficit and Economic Extraction" hasDropCap>
                            <p>The profound public distrust of real estate agents is a striking feature of the Australian property landscape. Provocatively, they are often perceived as "the Nigerian princes of property transactions," a professional class that has seemingly convinced society that unlocking doors requires a "university degree in bullshit and a 6% cut of your children's inheritance." This perception is not mere hyperbole; it is supported by empirical data. Real estate agents are less trusted than journalists (9%), politicians (12%), and even the individual responsible for cleaning portable toilets at music festivals.</p>
                            <PullQuote>
                                This chart visually demonstrates the extreme disconnect between the financial rewards in the real estate profession and its public trust rating.
                            </PullQuote>
                             <ProfessionTrustChart />
                            <p>The financial mechanics fueling public resentment are clear. An average commission of $84,000 on a $1.4M Sydney home is extracted for an estimated 40-60 hours of actual work per transaction. This translates to an effective hourly rate of $1,400-$2,100. This staggering figure is juxtaposed against a minimal 0.5 years of training required and a dismal 7% public trust rating.</p>
                            <ArticleTable
                                caption="The Mathematics of Delusion: Cost vs. Perceived Value"
                                headers={['Metric', 'Value']}
                                rows={[
                                    ['Average commission on $1.4M Sydney home', '$84,000'],
                                    ['Hours of actual work per transaction', '40-60'],
                                    ['Effective hourly rate', '$1,400-$2,100'],
                                    ['Years of training required', '0.5'],
                                    ['Public trust rating', '7%']
                                ]}
                            />
                            <p>The low barrier to entry for real estate agents is a critical factor contributing to public distrust. The CPP41419 Certificate IV in Real Estate Practice is the standard entry point, typically taking 3-12 months and costing $2,000-$8,000. This relatively low investment in time and money, compared to other professions with significantly higher trust ratings fuels the perception that agents are overpaid for easily acquired skills.</p>
                            <AnomalyAlertBanner />
                        </ArticleSection>

                        <ArticleSection overline="Part II" title="The Mirror We Hate Looking Into" hasDropCap>
                            <p>The widespread contempt for real estate agents conceals a deeper duality. What is often resented is not merely the agents themselves, but the mirror they hold up to Australia's property-obsessed culture. Real estate agents reflect the ugliest parts of our national psyche: greed commodified, shelter financialized, and community reduced to comparable sales.</p>
                             <ArticleTable
                                caption="Australia's Property Psychosis: Key Indicators"
                                headers={['Metric', 'Value']}
                                rows={[
                                    ['Dinner party conversations involving property', '67%'],
                                    ['Household wealth tied to residential property', '71%'],
                                    ['First-home buyer average age (vs. 1981)', '38 (up from 25)'],
                                    ['Properties owned by investors', '31%'],
                                    ['Negative gearing tax benefits annually', '$11.7 billion'],
                                    ['Young adults living with parents', '43%']
                                ]}
                            />
                            <p>Agents capitalize on this cultural phenomenon, selling abstract concepts like "potential" and "street appeal" to individuals who have convinced themselves that debt is wealth. The public's animosity towards agents is often misdirected; it is a manifestation of frustration with the broader, dysfunctional property market itself. True transformation requires a cultural shift away from property as the primary vehicle for wealth accumulation and towards its fundamental purpose as shelter.</p>
                        </ArticleSection>
                        
                         <ArticleSection overline="Part III" title="The Value Proposition Paradox" hasDropCap>
                            <p>The Australian real estate industry faces its most significant existential crisis since the 2008 Global Financial Crisis, a crisis exacerbated by a collective delusion that "property only goes up," akin to a "national MLM scheme." This section critically examines the core argument that technology has rendered many traditional agent services obsolete, yet their commission structure remains largely unchanged.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                                <ValuePropCard icon={<TrendingUp className="h-8 w-8" />} value="340%" label="Increase in home prices since 1990" />
                                <ValuePropCard icon={<Home className="h-8 w-8" />} value="0%" label="Fundamental change in agent service delivery" />
                                <ValuePropCard icon={<Search className="h-8 w-8" />} value="156%" label="Increase in online property searches" />
                                <ValuePropCard icon={<ArrowRight className="h-8 w-8" />} value="67%" label="Buyers finding homes before contacting agents" />
                                <ValuePropCard icon={<DollarSign className="h-8 w-8" />} value="$8.4B" label="Annual commissions for automated services" />
                            </div>
                             <p>The industry is ripe for its "Uber moment." While REA Group's algorithm prices homes "more accurately than their '30 years of experience' ever could," agents continue to operate with clipboards, highlighting a severe technological lag. A core value proposition of traditional agents – their market knowledge and pricing expertise – is being systematically eroded by technology.</p>
                             <PullQuote>If algorithms can price more accurately, a significant portion of the agent's "expertise" becomes redundant.</PullQuote>
                            <p>Furthermore, agents are benefiting disproportionately from market appreciation without contributing additional value or innovation to justify the increased income. This creates a moral hazard where agents have little incentive to innovate or reduce costs, as their income automatically increases with rising property values. It transforms their role from active service providers to passive beneficiaries of market inflation.</p>
                        </ArticleSection>

                        <ArticleSection overline="Part IV" title="Case Study: Lessons from PropTech Disruption" hasDropCap>
                             <p>Compass's spectacular failure serves as a crucial cautionary tale for the PropTech sector. The company "speedran the entire tech startup playbook from 'disruption' to 'bankruptcy'," demonstrating that simply throwing vast capital and advanced technology at a complex human problem is insufficient for true market transformation.</p>
                             <ArticleTable
                                caption="Compass: A Case Study in PropTech Miscalculation"
                                headers={['Metric', 'Value']}
                                rows={[
                                    ['Total capital raised', '$1.6 billion'],
                                    ['Annual losses (2022)', '$494 million'],
                                    ['Agent retention rate (industry: 64%)', '68%'],
                                    ['Technology adoption by agents', '<30%'],
                                    ['Stock price decline from IPO', '-84%'],
                                    ['CEO compensation during losses', '$24.8 million']
                                ]}
                            />
                            <p>Compass's failure stemmed from critical misdiagnoses. They saw a "technology problem where a trust problem existed," built "tools for transactions when people needed therapy for property PTSD," and optimized for "efficiency in an industry that runs on anxiety."</p>
                            <PullQuote>You can't disrupt human nature with an app.</PullQuote>
                            <p>Despite raising $1.6 billion, Compass experienced low technology adoption by agents and a fundamental misunderstanding of the market's underlying dynamics. Technology alone cannot solve the deep-seated issues in real estate because the industry is fundamentally driven by complex human emotions, relationships, and a deep-seated "trust deficit."</p>
                        </ArticleSection>
                        
                        <ArticleSection overline="Part V" title="The Mathematical Impossibility" hasDropCap>
                             <p>The current commission structure in Australian real estate presents a perceived "mathematical impossibility" when juxtaposed against the actual value-added time contributed by agents. This section provides a granular breakdown, exposing the perceived overcharging.</p>
                             <ArticleTable
                                caption="Agent Value-Add vs. Effective Hourly Cost"
                                headers={['Metric', 'Value']}
                                rows={[
                                    ['Average property search duration', '10 weeks'],
                                    ['Agent involvement in search', '20%'],
                                    ['Documentation handled by conveyancers', '75%'],
                                    ['Negotiations requiring agent expertise', '1-2'],
                                    ['Actual value-added time', '8-12 hours'],
                                    ['Commission per hour of actual work', '$2,500-$3,750']
                                ]}
                            />
                            <p>Consumers now perform an estimated 80% of the work themselves, from finding listings to arranging finance. Yet, they still pay 100% of traditional commissions. This is provocatively framed as a "subscription scam that makes gym memberships look honest," reinforcing the idea that information abundance has empowered consumers to self-serve, further eroding the traditional agent's value proposition.</p>
                             <p>While agents are no longer primary information brokers, their value has shifted to navigating the complexity of the transaction itself. The actual value, which consumers might not recognize, lies in preventing the "33% failure rate" and managing the "45+ potential failure points." The industry's challenge is to articulate and monetize this new value proposition – from information access to risk mitigation and complexity management.</p>
                        </ArticleSection>

                        <ArticleSection overline="Part VI" title="The Digital Decimation Already Underway" hasDropCap>
                            <p>The digital transformation is not a future threat but an ongoing reality, actively "eating the industry alive." This section provides a concrete evidence of this market disruption.</p>
                             <ArticleTable
                                caption="Digital Disruption Indicators in Australian Real Estate"
                                headers={['Metric', 'Value']}
                                rows={[
                                    ['Purple Bricks failure', 'Model proved, not execution'],
                                    ['OpenAgent growth (in 3 years)', '312%'],
                                    ["Buyer's agent services increase (since 2020)", '456%'],
                                    ['Private sales platforms growth', '234%'],
                                    ['AI property valuations accuracy', 'Within 3.2%'],
                                    ['Virtual inspections buyer acceptance rate', '78%']
                                ]}
                            />
                            <p>The comparison to travel agents and taxi drivers, where the internet largely succeeded in disruption, highlights the real estate industry as the "one still standing and wondering why." Traditional agencies are metaphorically the "RadioShacks of real estate," implying their business models are obsolete despite their continued physical presence. The concept of a low-commission, tech-enabled real estate service is valid and desired by the market. The implementation was the downfall. Future players can learn from these operational mistakes while retaining the core disruptive model.</p>
                        </ArticleSection>

                        <ArticleSection overline="Part VII" title="The Necessary Evil We've Created" hasDropCap>
                            <p>An uncomfortable truth emerges: real estate is complex not because agents made it so, but because society, collectively, demanded it through layers of regulations, protections, and paperwork. Agents, in this context, are "antibodies" to a "disease" of complexity that society itself created.</p>
                             <PullQuote>
                               Every civilization builds monuments to its fears. The Egyptians built pyramids. We built property contracts.
                             </PullQuote>
                             <ArticleTable
                                caption="Complexity of an Australian Property Transaction"
                                headers={['Metric', 'Value']}
                                rows={[
                                    ['Pages of documentation', '312'],
                                    ['Different forms', '28'],
                                    ['Different professionals involved', '17'],
                                    ['Potential failure points', '45+'],
                                    ['Different pieces of legislation', '14'],
                                    ['Critical timing dependencies', '7'],
                                    ['Separate financial verifications', '5'],
                                    ['Opportunities for catastrophic loss', '∞']
                                ]}
                            />
                            <p>The stark statistic that 33% of unrepresented buyers fail to complete transactions underscores the critical role agents play in navigating this complexity. Consumers implicitly pay for "exemption from the overwhelming responsibility of comprehensive, self-directed due diligence." The perceived "parasitism" of agents is contradicted by their essential role in preventing catastrophic failure in a highly complex system. Their value is not in simple information provision but in navigating this labyrinth.</p>
                        </ArticleSection>

                        <ArticleSection overline="Part VIII" title="The Human Cost of Property Obsession" hasDropCap>
                            <p>Property transactions exact a profound psychological and emotional toll on consumers, highlighting the "therapy" agents implicitly provide.</p>
                            <div className="my-8 grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-8 justify-items-center">
                                <MetricCircle icon={<BrainCircuit size={80} />} value="340%" label="Cortisol levels above baseline" />
                                <MetricCircle icon={<Users size={80} />} value="67%" label="Increase in relationship conflict" />
                                <MetricCircle icon={<Bed size={80} />} value="4.3h" label="Average sleep during purchase" />
                                <MetricCircle icon={<BarChart size={80} />} value="8.7/10" label="Decision fatigue index" />
                                <MetricCircle icon={<ShieldAlert size={80} />} value="52%" label="Buyer's remorse incidence" />
                                <MetricCircle icon={<Clock size={80} />} value="3-6mo" label="Post-purchase anxiety duration" />
                            </div>
                             <p>Every Saturday morning, Australians gather to watch their neighbors compete for shelter like it's a reality TV show where the prize is crippling debt. This "auction theatre" highlights the intense pressure and competitive environment.</p>
                             <ArticleTable
                                caption="Auction Dynamics and Potential Manipulation Tactics"
                                headers={['Metric', 'Value']}
                                rows={[
                                    ['Vendor bids', 'Legal gaslighting'],
                                    ['Underquoting percentage', '73%'],
                                    ['Emotional manipulation index', '9.2/10'],
                                    ['Phantom bidders', 'Unmeasurable but universal'],
                                    ['Price achievement vs. private treaty', '+7-10%'],
                                    ['Post-auction regret percentage', '43%']
                                ]}
                            />
                             <p>The section concludes by reframing the commission as payment for "Midnight anxiety calls answered," and "Professional scapegoat services." This framing underscores the agent's role as an emotional and psychological buffer in a highly stressful process, a form of "therapy" that consumers implicitly purchase.</p>
                        </ArticleSection>

                        <ArticleSection overline="Part IX" title="The Defense No One Wants to Hear" hasDropCap>
                            <p>In a system this fundamentally broken, competent agents are not parasites but "antibodies." They exist because the "disease exists," and their value lies in navigating this inherent dysfunction.</p>
                            <PullQuote>There's something profound about paying people you hate to protect you from yourself.</PullQuote>
                             <ArticleTable
                                caption="Competent Agent: Core Value Proposition"
                                headers={['Metric', 'Value']}
                                rows={[
                                    ['Navigation through contract minefields', '312 pages'],
                                    ['Protection from unrepresented buyer failure rate', '33%'],
                                    ['Access to off-market properties', '23% of all sales'],
                                    ['Negotiation expertise savings', 'Average 4.7% on purchase price'],
                                    ['Emotional buffer between parties', 'Essential'],
                                    ['Coordination of transaction professionals', '17+'],
                                    ['Risk mitigation across failure points', '45+'],
                                    ['Local knowledge algorithms haven\'t scraped yet', 'Unique']
                                ]}
                            />
                            <p>There is a significant difference between the average agent (who contributes to the negative perception) and the competent agent (who provides substantial, often unquantified, value). The market struggles to differentiate and reward this competence effectively. The problem is not the existence of agents, but the quality of agents and the market's inability to transparently signal and price that quality.</p>
                        </ArticleSection>

                        <ArticleSection overline="Part X" title="The Coming Revolution" hasDropCap>
                            <p>Based on current trajectories, the real estate industry will witness unprecedented transformation. This is an inevitable evolution, not a mere possibility.</p>
                             <ArticleTable
                                caption="Real Estate Industry Transformation: 2027 Projections"
                                headers={['Metric', 'Value']}
                                rows={[
                                    ['Traditional agencies closure rate', '60%'],
                                    ['Standard commission percentage', '2-3%'],
                                    ['Mandatory technology adoption for survival', 'Yes'],
                                    ['Geographic boundaries', 'Irrelevant'],
                                    ['Agent population reduction', '75%'],
                                    ['Service quality', 'Dramatically improved']
                                ]}
                            />
                            <p>From the "ashes" of the traditional model, a new breed of agent will emerge. These agents will not be mere salespeople; they will be "transaction architects, risk mitigators, emotional support systems" for the biggest financial decision of a consumer's life. As technology automates basic tasks, value shifts to interpretation, negotiation, and emotional management. The "75% agent population reduction" implies only those who successfully re-specialize and adapt will survive.</p>
                        </ArticleSection>

                        <ArticleSection overline="Part XI" title="Evolution or Extinction: Recommendations for Stakeholders" hasDropCap>
                            <div>
                                <h4 className="text-2xl font-bold text-gray-900">For Consumers:</h4>
                                <ul className="list-none pl-0 mt-4 space-y-4">
                                    <li className="flex items-start gap-3"><Forward className="h-6 w-6 text-primary flex-shrink-0 mt-1" /><span><strong>Demand transparent, performance-based pricing:</strong> Shift away from flat percentage commissions to models that reflect actual value delivered.</span></li>
                                    <li className="flex items-start gap-3"><Forward className="h-6 w-6 text-primary flex-shrink-0 mt-1" /><span><strong>Require documented competencies:</strong> Insist on clear evidence of an agent's skills and qualifications beyond basic licensing.</span></li>
                                    <li className="flex items-start gap-3"><Forward className="h-6 w-6 text-primary flex-shrink-0 mt-1" /><span><strong>Support agents embracing change:</strong> Actively choose and promote professionals who are adopting new technologies and transparent practices.</span></li>
                                </ul>
                            </div>
                             <div className="mt-12">
                                <h4 className="text-2xl font-bold text-gray-900">For Aspiring Agents:</h4>
                                <ul className="list-none pl-0 mt-4 space-y-4">
                                    <li className="flex items-start gap-3"><Forward className="h-6 w-6 text-primary flex-shrink-0 mt-1" /><span><strong>Acknowledge the traditional model is dying:</strong> Embrace this reality as an opportunity for reinvention, not a threat.</span></li>
                                    <li className="flex items-start gap-3"><Forward className="h-6 w-6 text-primary flex-shrink-0 mt-1" /><span><strong>Develop genuine expertise beyond door-opening:</strong> Focus on becoming transaction architects, risk mitigators, and skilled negotiators.</span></li>
                                    <li className="flex items-start gap-3"><Forward className="h-6 w-6 text-primary flex-shrink-0 mt-1" /><span><strong>Build trust through transparency:</strong> Operate with integrity and openness, fostering genuine relationships with clients.</span></li>
                                </ul>
                            </div>
                        </ArticleSection>
                        
                         <ArticleSection overline="Conclusion" title="Rebuilding Trust and Value" hasDropCap>
                            <p>The widespread animosity towards real estate agents is not merely personal resentment but a profound reflection of Australia's "national sickness" – the transformation of shelter into speculation, community into commodity, and homes into investment portfolios.</p>
                            <PullQuote>We're not addicted to houses — we're addicted to the dopamine hit of paper wealth. Agents are merely monetizing this addiction.</PullQuote>
                            <p>The traditional real estate industry has two years left. Maximum. The choice for stakeholders is clear: to lead the transformation or become "roadkill" in the inevitable disruption. The future is not about eliminating agents, but about evolving their role into indispensable advisors who navigate complexity, mitigate risk, and provide essential emotional support.</p>
                             <p className="text-2xl font-bold text-center text-gray-900 pt-4">The best way to beat a broken system is to rebuild it with better people.</p>
                        </ArticleSection>

                        <div className="bg-secondary rounded-xl p-8 md:p-12 mt-12 text-center text-secondary-foreground shadow-lg border border-border/40">
                          <h3 className="text-4xl font-extrabold tracking-tight text-primary">Action: Become the Change</h3>
                          <p className="mt-4 text-xl text-muted-foreground">Ready to change real estate from the inside?</p>
                          <p className="mt-2 max-w-2xl mx-auto text-lg">At <strong className="text-primary-foreground font-semibold">CPP41419.com.au</strong>, we don't train traditional agents. We develop property professionals for the post-disruption era.</p>
                          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" className="text-lg">
                              <Rocket className="mr-2 h-5 w-5" />
                              Start Your Revolution
                            </Button>
                            <Button size="lg" variant="outline" className="bg-secondary hover:bg-muted text-lg">
                              <FileText className="mr-2 h-5 w-5" />
                              Read More Analysis
                            </Button>
                          </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}
