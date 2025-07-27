

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Rocket, FileText, Forward, TrendingUp, Search, Home, DollarSign, ArrowRight, BrainCircuit, Users, Bed, BarChart, ShieldAlert, Clock, Gauge, UserCheck, SearchX, AlertTriangle, Hourglass, Percent, Award, BookOpen, Clock3, MessageSquareWarning, BarChart3, UserMinus, ShieldQuestion, UserCheck2, Brain } from "lucide-react";
import AnomalyAlertBanner from "./anomaly-alert-banner";
import ProfessionTrustChart from "./profession-trust-chart";
import KeyMetrics from "./key-metrics";
import AuditDashboard from "./audit-dashboard";


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
    const listItems = [
        { icon: <DollarSign className="h-6 w-6 text-primary" />, title: 'Executive Summary', subtitle: 'The 2-Deal Paradox' },
        { icon: <UserMinus className="h-6 w-6 text-primary" />, title: 'Part I', subtitle: 'The Gatekeeper Myth Collapses' },
        { icon: <MessageSquareWarning className="h-6 w-6 text-primary" />, title: 'Part II', subtitle: 'Social Media as Firing Squad' },
        { icon: <Brain className="h-6 w-6 text-primary" />, title: 'Part III', subtitle: 'Mental Health in the Industry' },
        { icon: <Rocket className="h-6 w-6 text-primary" />, title: 'Part IV', subtitle: 'REA’s Quiet Revolution' },
        { icon: <ShieldQuestion className="h-6 w-6 text-primary" />, title: 'Part V', subtitle: 'The Commission Conundrum' },
        { icon: <BarChart3 className="h-6 w-6 text-primary" />, title: 'Part VI', subtitle: 'Oversupply & Attrition' },
        { icon: <ShieldAlert className="h-6 w-6 text-primary" />, title: 'Part VII', subtitle: 'Trust Deficit and Kickback Culture' },
        { icon: <UserCheck2 className="h-6 w-6 text-primary" />, title: 'Part VIII', subtitle: 'The Consumer-Centric Future' },
    ];

    return (
        <section className="w-full py-16 md:py-24 lg:py-32 bg-white text-gray-800">
            <div className="container px-4 md:px-6">
                <article className="prose-invert mx-auto max-w-4xl space-y-12">
                    <header className="text-center space-y-4 border-b border-slate-200 pb-10">
                        <p className="text-sm font-mono tracking-widest uppercase text-primary">The Real Estate Truth Tribune</p>
                        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl text-gray-900">The Parasitic Class We Created</h1>
                        <h2 className="text-2xl font-medium text-gray-600 leading-snug">Why Realtor Hate Is Earned (and Why REA Might Be the Only Lifeline)</h2>
                    </header>
                    
                     <div className="bg-slate-100 rounded-lg p-8 my-12 border border-slate-200">
                        <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Op-Ed: The Hook</h3>
                        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">A year ago she was writing code for a software startup. Today she’s dodging hate comments on TikTok. “Scumbag.” “Vulture.” “Leech.” All for posting a rental tip. Two deals in twelve months, no steady income, and a mental health tab no one warns you about. This isn’t about her — it’s about us. We built a system where real estate agents are over-supplied, under-trained, and blamed for decades of industry baggage. Tech stripped away their monopoly on information; buyers have CoreLogic, Domain, and REA feeding them data that used to be agent-only. And here’s the paradox: while trust in agents has cratered, platforms like REA have quietly done the opposite — building consumer-first tools, transparency layers, and data products that actually work. The hate is structural. Commission models reward turnover over trust. Lead-gen tactics feel like spam. But REA’s rise — from simple listings to predictive pricing, AI search, and buyer-seller tools — shows there’s a path forward if the industry wants it. The question is: will agents adapt, or be remembered as the middlemen we finally cut out?</p>
                    </div>

                    <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Tribune-Series: Deep Dive Contents</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {listItems.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-md shadow-sm border border-slate-200">
                                    {item.icon}
                                    <div>
                                        <p className="font-semibold text-gray-800">{item.title}</p>
                                        <p className="text-sm text-gray-600">{item.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="space-y-16">
                        <ArticleSection overline="Executive Summary" title="The 2-Deal Paradox" hasDropCap>
                             <p>The modern agent enters the field hoping to help people. One year later they’ve closed two deals, burned through savings, and inherited a profession the public openly despises. This isn’t failure; it’s a predictable outcome of an oversaturated, misaligned system.</p>
                        </ArticleSection>

                        <ArticleSection overline="Part I" title="The Gatekeeper Myth Collapses" hasDropCap>
                            <p>Technology has shattered the old information monopoly that once justified the real estate agent's role as a gatekeeper. Consumers now have direct access to real-time data on comparable sales, suburb trends, and price guides through platforms like REA Group and Domain. This transparency has led to a fundamental question from the public: "Why am I paying a 2% commission for someone to simply open a door?" The commission structure has not adapted to this new reality, creating a significant value gap and fueling widespread resentment.</p>
                        </ArticleSection>
                        
                         <ArticleSection overline="Part II" title="Social Media as Firing Squad" hasDropCap>
                            <p>In the digital age, an agent's reputation is perpetually on trial in the court of public opinion. Lead-generation tactics, such as cold DMs, generic "market updates," and cringe-worthy TikTok videos, are often perceived as spammy and intrusive. Negative experiences, amplified by social media algorithms, spread far more rapidly and widely than positive ones. This asymmetry ensures that the public's perception of the industry is continually skewed towards the negative, creating a cycle of distrust that is difficult to break.</p>
                        </ArticleSection>

                        <ArticleSection overline="Part III" title="The Mental Health Crisis Nobody Talks About" hasDropCap>
                             <p>The glamorous facade of real estate conceals a harsh reality: an estimated 80% of new agents quit within their first 24 months. The profession is characterized by constant rejection, public stigma, and extreme financial instability. There are virtually no support structures in place to address the significant mental health challenges that arise from this high-pressure environment. Mental health has become the collateral damage of a system that prioritizes transactions over the well-being of its participants.</p>
                        </ArticleSection>
                        
                        <ArticleSection overline="Part IV" title="REA’s Quiet Revolution" hasDropCap>
                            <p>While the traditional agency model has stagnated, REA Group has been quietly redefining the property marketplace. They have systematically built a suite of consumer-first tools that have shifted the balance of power, including predictive pricing models, real-time data APIs, direct buyer-seller messaging, and AI-assisted property searches. By focusing on data trust and transparency, REA has built a level of brand dominance that stands in stark contrast to the pervasive mistrust of individual agents. They have set a new standard for what consumers expect from a property transaction.</p>
                        </ArticleSection>

                        <ArticleSection overline="Part V" title="The Commission Conundrum" hasDropCap>
                            <p>The standard 2-3% commission rate has remained stubbornly in place, despite significant technology-driven efficiency gains that have reduced the agent's workload. This creates misaligned incentives where agents profit from higher property prices rather than from delivering better client outcomes. The model fails to reward efficiency, negotiation skill, or superior service, instead tying compensation directly to market inflation. This is the core of the "commission conundrum" that consumers intuitively recognize as unfair.</p>
                        </ArticleSection>
                        
                         <ArticleSection overline="Part VI" title="Oversupply & Attrition: The 80% Quit Rate" hasDropCap>
                            <p>With over 70,000 agents nationally, the Australian real estate market is heavily oversaturated. The low barrier to entry has flooded the market with participants, yet only an estimated 20% are able to earn a sustainable income. This intense competition fosters a "churn and burn" culture where the vast majority of agents fail, contributing to a cycle of poor service, desperate sales tactics, and a continuously degrading public perception of the profession as a whole.</p>
                        </ArticleSection>
                        
                        <ArticleSection overline="Part VII" title="Trust Deficit and Kickback Culture" hasDropCap>
                             <p>The trust deficit is further deepened by a pervasive "kickback culture." Undisclosed referral fees paid to mortgage brokers, conveyancers, and building inspectors create a clear conflict of interest. This practice fosters the perception—and often, the reality—that the advice an agent provides is not impartial, but rather is influenced by financial incentives. Every undisclosed kickback erodes the foundation of trust between the agent and the consumer they are meant to represent.</p>
                        </ArticleSection>

                        <ArticleSection overline="Part VIII" title="The Consumer-Centric Future" hasDropCap>
                             <p>The success of REA Group's data-first, transparent, and user-driven model provides a clear blueprint for the future of the real estate industry. The inevitable evolution is a move towards a post-agent ecosystem where technology handles the logistics and data, while human professionals provide high-level strategy, negotiation, and advisory services. The industry must either embrace this consumer-centric future or risk complete irrelevance—not because people inherently hate agents, but because the traditional model is no longer necessary.</p>
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
