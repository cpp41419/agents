import { ArrowRight, Home, Megaphone, User, AlertTriangle } from "lucide-react";

const FlowCard = ({ icon, label, sublabel }: { icon: React.ReactNode, label: string, sublabel?: string }) => (
    <div className="flex flex-col items-center justify-center text-center p-6 bg-card rounded-lg shadow-lg h-full">
        <div className="text-primary mb-3">{icon}</div>
        <p className="font-bold text-lg text-card-foreground">{label}</p>
        {sublabel && <p className="text-sm text-muted-foreground mt-1">{sublabel}</p>}
    </div>
);

const Arrow = ({ label, color = "text-accent" }: { label: string, color?: string }) => (
    <div className="flex flex-col items-center justify-center text-center w-full my-4 md:my-0">
        <ArrowRight className={`h-10 w-10 ${color}`} />
        <p className={`font-mono text-sm mt-1 ${color}`}>{label}</p>
    </div>
)

export default function VendorPays() {
    return (
        <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center space-y-4">
                     <div className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
                        <AlertTriangle className="mr-2 h-5 w-5"/>
                        Global Anomaly
                    </div>
                    <h2 className="text-4xl font-black tracking-tighter sm:text-5xl text-primary-foreground">Who Pays for Marketing?</h2>
                    <p className="text-muted-foreground text-lg md:text-xl/relaxed">
                        In a practice unique to Australia, home sellers are expected to pay for all marketing costs—a burden handled by agents elsewhere in the world. This visual breaks down the money flow.
                    </p>
                </div>
                
                <div className="mt-16 space-y-16">
                    <div>
                        <h3 className="text-3xl font-bold text-center text-primary-foreground mb-8">🇦🇺 The Australian Model</h3>
                        <div className="grid grid-cols-1 md:grid-cols-5 items-stretch gap-6 text-secondary-foreground">
                            <FlowCard icon={<Home className="h-12 w-12" />} label="Home Seller" />
                            <Arrow label="Commission + Marketing Costs" />
                            <FlowCard icon={<User className="h-12 w-12" />} label="Real Estate Agent" />
                            <Arrow label="Marketing Spend" />
                            <FlowCard icon={<Megaphone className="h-12 w-12" />} label="Marketing Services" />
                        </div>
                    </div>

                    <div className="relative my-12">
                        <div aria-hidden="true" className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-dashed border-border"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-secondary px-4 text-2xl font-black text-muted-foreground">vs.</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-center text-primary-foreground mb-8">🌍 The Rest of the World Model</h3>
                         <div className="grid grid-cols-1 md:grid-cols-5 items-stretch gap-6 text-secondary-foreground">
                            <FlowCard icon={<Home className="h-12 w-12" />} label="Home Seller" />
                            <Arrow label="Commission" color="text-primary" />
                            <FlowCard 
                                icon={<User className="h-12 w-12" />} 
                                label="Real Estate Agent" 
                                sublabel="(Pays for marketing as a business expense)"
                            />
                            <Arrow label="Marketing Spend" color="text-primary"/>
                            <FlowCard icon={<Megaphone className="h-12 w-12" />} label="Marketing Services" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
