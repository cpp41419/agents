import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield } from "lucide-react";

const testimonial = {
    quote: "The biggest lie in Australian real estate is that you need to spend $15,000 on marketing. It's a construct designed to protect commissions. In reality, 90% of buyers find their home on two websites, regardless of what the agent spends.",
    source: "Ex-Franchise CEO",
    credibility: ["25+ Years Experience", "Managed 300+ Agents", "Identity Protected for Whistleblower Status"],
};

export default function AuthoritativeTestimonial() {
    return (
        <Card className="bg-secondary text-secondary-foreground h-full flex flex-col shadow-lg rounded-xl overflow-hidden border-border/50">
            <CardHeader className="text-center p-8">
                <Badge variant="outline" className="mx-auto w-fit text-base bg-card/80">Industry Insights</Badge>
                <CardTitle className="text-3xl font-black tracking-tight mt-4">An Insider's Confession</CardTitle>
            </CardHeader>
            <CardContent className="p-8 flex-1 flex flex-col items-center justify-center">
                <blockquote className="space-y-6 text-center">
                    <p className="text-xl italic font-semibold text-secondary-foreground/90">
                        “{testimonial.quote}”
                    </p>
                    <footer className="mt-4">
                        <p className="font-bold text-lg text-primary">{testimonial.source}</p>
                        <div className="mt-2 text-sm text-muted-foreground">
                            {testimonial.credibility.map((cred, i) => (
                                <span key={i} className="inline-flex items-center gap-1.5 mr-4">
                                    <Shield className="h-4 w-4 text-primary" />
                                    <span>{cred}</span>
                                </span>
                            ))}
                        </div>
                    </footer>
                </blockquote>
            </CardContent>
        </Card>
    );
}
