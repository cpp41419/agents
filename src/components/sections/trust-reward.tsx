

"use client"

import { useInView } from "react-intersection-observer"
import ProfessionTrustChart from "./profession-trust-chart"


export default function TrustRewardSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary text-secondary-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="space-y-4">
            <p className="font-semibold text-primary uppercase tracking-wider">Trust vs. Reward</p>
            <h2 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-5xl text-primary-foreground">The Great Disparity.</h2>
            <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl/relaxed">
              Public perception of real estate agents is at an all-time low, yet their income potential remains remarkably high. This chart visualizes the stark contrast between professions, plotting trust against income and training time.
            </p>
          </div>
          <div className="flex items-center justify-center" ref={ref}>
            <ProfessionTrustChart />
          </div>
        </div>
      </div>
    </section>
  )
}
