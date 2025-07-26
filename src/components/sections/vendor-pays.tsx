import { ArrowRight, Home, Megaphone, User } from "lucide-react";

const FlowCard = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={`flex flex-col items-center justify-center text-center p-6 bg-card rounded-lg shadow-lg ${className}`}>
        {children}
    </div>
);

export default function VendorPays() {
    return (
        <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center space-y-4">
                     <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Global Anomaly</div>
                    <h2 className="text-4xl font-black tracking-tighter sm:text-5xl text-primary-foreground">Who Pays for Marketing?</h2>
                    <p className="text-muted-foreground text-lg md:text-xl/relaxed">
                        In a practice unique to Australia, home sellers are expected to pay for all marketing costs—a burden handled by agents elsewhere in the world.
                    </p>
                </div>
                <div className="mt-12">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-primary-foreground">🇦🇺 The Australian Model</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 md:gap-8 text-secondary-foreground">
                        <FlowCard>
                            <Home className="h-12 w-12 text-primary mb-2" />
                            <p className="font-bold text-lg">Home Seller</p>
                        </FlowCard>
                        <div className="flex flex-col items-center">
                            <ArrowRight className="h-10 w-10 text-accent" />
                            <p className="font-mono text-sm text-accent mt-1">Commission</p>
                        </div>
                        <FlowCard>
                            <User className="h-12 w-12 text-primary mb-2" />
                            <p className="font-bold text-lg">Real Estate Agent</p>
                        </FlowCard>
                         <div className="flex flex-col items-center">
                            <ArrowRight className="h-10 w-10 text-accent" />
                            <p className="font-mono text-sm text-accent mt-1">Marketing Costs</p>
                        </div>
                        <FlowCard>
                             <Megaphone className="h-12 w-12 text-primary mb-2" />
                            <p className="font-bold text-lg">Marketing</p>
                        </FlowCard>
                    </div>
                     <div className="relative my-12">
                        <div aria-hidden="true" className="absolute inset-0 h-px w-full bg-border"></div>
                        <div aria-hidden="true" className="absolute inset-0 flex items-center">
                            <div className="mx-auto max-w-max">
                                <p className="px-4 text-center font-bold text-muted-foreground bg-secondary text-sm">vs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-primary-foreground">🌍 The Rest of the World</h3>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 md:gap-8 text-secondary-foreground">
                        <FlowCard>
                            <Home className="h-12 w-12 text-primary mb-2" />
                            <p className="font-bold text-lg">Home Seller</p>
                        </FlowCard>
                        <div className="flex flex-col items-center">
                            <ArrowRight className="h-10 w-10 text-primary" />
                             <p className="font-mono text-sm text-primary mt-1">Commission</p>
                        </div>
                        <FlowCard>
                            <div className="relative">
                                <User className="h-12 w-12 text-primary mb-2" />
                            </div>
                            <p className="font-bold text-lg">Real Estate Agent</p>
                             <p className="text-sm text-muted-foreground">(Pays for marketing as a business expense)</p>
                        </FlowCard>
                         <div className="flex flex-col items-center">
                            <ArrowRight className="h-10 w-10 text-primary" />
                        </div>
                        <FlowCard>
                            <Megaphone className="h-12 w-12 text-primary mb-2" />
                            <p className="font-bold text-lg">Marketing</p>
                        </FlowCard>
                    </div>
                </div>
            </div>
        </section>
    )
}
