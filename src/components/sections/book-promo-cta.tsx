import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BookPromoCta() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="font-semibold text-primary uppercase tracking-wider">PRE-ORDER NOW AVAILABLE</p>
            <h2 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl text-primary-foreground">The Beautiful Paradox</h2>
            <p className="text-lg text-muted-foreground max-w-lg">
              The definitive guide for marketing leaders navigating the AI revolution. Pre-order now and get the $100,000 AI Implementation Prompt Map.
            </p>
            <Button size="lg" asChild>
              <Link href="/book">
                Explore The Book <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <Link href="/book" className="block w-full max-w-xs">
              <Image 
                src="https://book.rite.io/wp-content/uploads/2024/07/Book-Cover-3-3.png"
                alt="Cover of the book Beautiful Paradox: AI"
                width={400}
                height={600}
                className="rounded-lg shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
                data-ai-hint="book cover"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
