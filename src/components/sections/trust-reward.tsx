
"use client"

import { Scatter, ScatterChart, CartesianGrid, Tooltip, XAxis, YAxis, ZAxis, Legend, Cell } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"
import { useInView } from "react-intersection-observer"
import { animated, useSpring } from "@react-spring/web"

const chartData = [
    { profession: "Doctors", income: 250, trust: 87, training: 10000, category: "Medical" },
    { profession: "Lawyers", income: 150, trust: 34, training: 7000, category: "Legal" },
    { profession: "Real Estate Agents", income: 180, trust: 7, training: 500, category: "Real Estate" },
    { profession: "Journalists", income: 70, trust: 9, training: 3000, category: "Other" },
    { profession: "Politicians", income: 211, trust: 12, training: 100, category: "Other" },
    { profession: "Used Car Salesmen", income: 80, trust: 8, training: 50, category: "Other" },
];

const chartConfig = {
  income: {
    label: "Median Income ($k)",
  },
  trust: {
    label: "Trust Rating (%)",
  },
  training: {
      label: "Training (Hours)"
  },
  Medical: {
    label: "Medical",
    color: "#006BA2",
  },
  Legal: {
    label: "Legal",
    color: "#379A8B",
  },
  'Real Estate': {
    label: "Real Estate",
    color: "#E3120B",
  },
  Other: {
    label: "Other",
    color: "#758D99",
  }
} satisfies ChartConfig

const AnimatedScatter = animated(Scatter);

export default function TrustRewardSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const spring = useSpring({
        from: { opacity: 0, transform: 'scale(0)' },
        to: { opacity: inView ? 1 : 0, transform: inView ? 'scale(1)' : 'scale(0)' },
        config: { mass: 1, tension: 280, friction: 60 },
        delay: 200,
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
            
          </div>
        </div>
      </div>
    </section>
  )
}
