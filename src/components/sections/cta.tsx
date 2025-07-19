import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-6 px-4 text-center md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Introducing Consumer-First Professional Plans (CPP)
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl/relaxed">
            The future of real estate is here. With CPP, you get expert agent guidance on a transparent, fee-for-service basis. Pay only for what you need, from contract review to full representation, and keep your equity.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
           <Button type="submit" size="lg" className="w-full text-lg">
              Learn More About CPP
            </Button>
        </div>
      </div>
    </section>
  )
}
