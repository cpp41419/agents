import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            The Insider Advantage
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl/relaxed">
            We're not making a big launch. Just opening the door to a new way to choose — anonymous matching, transparent data, and zero guesswork.
          </p>
        </div>
        
        <div className="mx-auto w-full max-w-sm space-y-2">
           <Button type="submit" size="lg" className="w-full text-lg">
              Find My Match
            </Button>
            <p className="text-xs text-muted-foreground">The first students using it are already avoiding thousands in hidden costs. Want in?</p>
        </div>
      </div>
    </section>
  )
}
