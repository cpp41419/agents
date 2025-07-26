'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Briefcase, ChevronDown } from "lucide-react";

const testimonial = {
    quote: "The biggest lie in Australian real estate is that you need to spend $15,000 on marketing. It's a construct designed to protect commissions. In reality, 90% of buyers find their home on two websites, regardless of what the agent spends.",
    source: "Ex-Franchise CEO",
    credibility: ["25+ Years Experience", "Managed 300+ Agents", "Identity Protected for Whistleblower Status"],
    badge: {
        text: "Industry Verified",
        icon: <CheckCircle className="h-4 w-4" />,
    },
};

export default function AuthoritativeTestimonial() {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card className="bg-secondary text-secondary-foreground h-full flex flex-col shadow-lg rounded-xl overflow-hidden border-border/50">
            <CardHeader className="text-center p-8">
                <Badge variant="outline" className="mx-auto w-fit text-base bg-card/80">Industry Insights</Badge>
                <CardTitle className="text-3xl font-black tracking-tight mt-4">An Insider's Confession</CardTitle>
            </CardHeader>
            <CardContent className="p-8 flex-1 flex flex-col">
                <div className="relative flex-1">
                    <motion.div
                        className="overflow-hidden"
                        animate={{ height: expanded ? 'auto' : 120 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <blockquote className="space-y-6">
                            <p className="text-xl italic font-semibold text-secondary-foreground/90">
                                “{testimonial.quote}”
                            </p>
                            <footer className="mt-4">
                                <p className="font-bold text-lg text-primary">{testimonial.source}</p>
                            </footer>
                        </blockquote>

                        <AnimatePresence>
                        {expanded && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="mt-6"
                            >
                                <h4 className="font-bold text-primary-foreground mb-3">Credibility</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    {testimonial.credibility.map((cred, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <Shield className="h-4 w-4 text-primary" />
                                            <span>{cred}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </motion.div>
                    {!expanded && <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-secondary to-transparent" />}
                </div>
            </CardContent>
            <CardFooter className="p-8 pt-0">
                <Button onClick={() => setExpanded(!expanded)} variant="outline" className="w-full bg-card/80 hover:bg-muted">
                    {expanded ? 'Show Less' : 'Read More & Verify'}
                    <motion.div animate={{ rotate: expanded ? 180 : 0 }} className="ml-2">
                        <ChevronDown className="h-4 w-4" />
                    </motion.div>
                </Button>
            </CardFooter>
        </Card>
    );
}
