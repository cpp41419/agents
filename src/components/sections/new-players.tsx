import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Briefcase } from "lucide-react";

const testimonials = [
    {
        quote: "The biggest lie in Australian real estate is that you need to spend $15,000 on marketing. It's a construct designed to protect commissions. In reality, 90% of buyers find their home on two websites, regardless of what the agent spends.",
        source: "Ex-Franchise CEO",
        credibility: ["25+ Years Experience", "Managed 300+ Agents", "Identity Protected"],
        badge: {
            text: "Industry Verified",
            icon: <CheckCircle className="h-4 w-4" />,
            variant: "secondary"
        },
    }
];

export default function NewPlayersSection() {
    return (
        <Card className="bg-secondary text-secondary-foreground h-full flex flex-col shadow-lg rounded-xl overflow-hidden border-accent/50">
            <CardHeader className="text-center p-8">
                <Badge variant="outline" className="mx-auto w-fit text-base">Industry Whistleblower</Badge>
                <CardTitle className="text-3xl font-black tracking-tight mt-4">An Insider's Confession</CardTitle>
            </CardHeader>
            <CardContent className="p-8 flex flex-col flex-1">
                {testimonials.map((testimonial, index) => (
                    <blockquote key={index} className="flex flex-col h-full">
                        <p className="text-xl italic font-semibold text-center text-secondary-foreground/90 flex-1">
                            “{testimonial.quote}”
                        </p>
                        <footer className="mt-8 text-center">
                            <p className="font-bold text-lg text-primary">{testimonial.source}</p>
                            <div className="flex justify-center items-center gap-4 mt-2 text-sm text-muted-foreground">
                                {testimonial.credibility.map((cred, i) => (
                                   <span key={i} className="flex items-center gap-1.5">
                                       <Shield className="h-4 w-4"/>
                                       {cred}
                                   </span>
                                ))}
                            </div>
                        </footer>
                    </blockquote>
                ))}
            </CardContent>
        </Card>
    );
}
