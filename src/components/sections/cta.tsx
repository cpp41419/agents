import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-12 px-4 text-center md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Ready for a Fairer Model?
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl/relaxed">
            Introducing Consumer-First Professional Plans (CPP). Pay a transparent, fair fee for expert guidance and keep your equity.
          </p>
        </div>
        
        <div className="mx-auto w-full max-w-4xl">
            <Card className="bg-secondary/50 border-border/50">
                <CardContent className="p-8 grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-left space-y-4">
                        <h3 className="text-2xl font-bold text-primary-foreground">The CPP Advantage</h3>
                        <p className="text-muted-foreground">
                            No hidden fees, no bloated commissions. Just expert advice, when you need it.
                        </p>
                        <ul className="space-y-2 text-left">
                            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Transparent Fee-for-Service</li>
                            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> You Keep Your Equity</li>
                            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Expert Negotiation & Strategy</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <div className="text-left p-4 rounded-lg bg-background/50">
                            <p className="text-sm font-semibold text-muted-foreground">Traditional Commission (2.5%)</p>
                            <div className="h-8 mt-2 w-full bg-accent/20 rounded-full">
                                <div className="h-8 w-full bg-accent rounded-full" />
                            </div>
                            <p className="text-right font-bold text-accent text-xl mt-1">$35,000</p>
                        </div>
                        <div className="text-left p-4 rounded-lg bg-background/50">
                            <p className="text-sm font-semibold text-muted-foreground">CPP Fixed-Fee Plan</p>
                             <div className="h-8 mt-2 w-full bg-primary/20 rounded-full">
                                <div className="h-8 w-[22.8%] bg-primary rounded-full" />
                            </div>
                             <p className="text-right font-bold text-primary text-xl mt-1">$8,000</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
        
        <div className="mx-auto w-full max-w-sm space-y-2">
           <Button type="submit" size="lg" className="w-full text-lg">
              Learn How to Become a Consumer-First Agent
            </Button>
        </div>
      </div>
    </section>
  )
}
