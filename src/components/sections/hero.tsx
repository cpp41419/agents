import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-headline font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Why Does Everyone <span className="text-accent">Hate</span> Real Estate Agents?
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto">
          In a world of instant information, the traditional real estate model is facing a crisis of confidence. Let's deconstruct the value proposition.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <Link href="#data">Explore the Data</Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent hover:bg-white/10" asChild>
            <Link href="#truth-tribune">The Full Story Series</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
