import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
            Introducing Consumer-First Professional Plans (CPP)
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            The future of real estate is here. With CPP, you get expert agent guidance on a transparent, fee-for-service basis. Pay only for what you need, from contract review to full representation, and keep your equity.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
           <Button type="submit" size="lg" className="w-full">
              Learn More About CPP
            </Button>
        </div>
      </div>
    </section>
  )
}
