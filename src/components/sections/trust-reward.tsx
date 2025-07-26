"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"
import { useInView } from "react-intersection-observer"
import { animated, useSpring } from "@react-spring/web"

const chartData = [
  { category: "Public Trust", value: 15, fill: "var(--color-trust)" },
  { category: "Median Income ($k)", value: 65, fill: "var(--color-income)" },
];

const chartConfig = {
  value: {
    label: "Value",
  },
  trust: {
    label: "Public Trust (%)",
    color: "hsl(var(--accent))",
  },
  income: {
    label: "Median Income (USD)",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

const AnimatedBar = animated(Bar);

export default function TrustRewardSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const springs = useSpring({
        from: { y: 100, opacity: 0 },
        to: { y: inView ? 0 : 100, opacity: inView ? 1 : 0 },
        config: { mass: 1, tension: 280, friction: 60 },
    });

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary text-secondary-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="space-y-4">
            <p className="font-semibold text-primary uppercase tracking-wider">Trust vs. Reward</p>
            <h2 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-5xl text-primary-foreground">The Great Disparity.</h2>
            <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl/relaxed">
              Public perception of real estate agents is at an all-time low, yet their income potential remains remarkably high. This chart visualizes the stark contrast between the low trust placed in agents and the high financial rewards they can reap.
            </p>
          </div>
          <div className="flex items-center justify-center" ref={ref}>
            <Card className="w-full max-w-lg border-border/60 shadow-lg bg-card/80">
              <CardHeader>
                <CardTitle className="text-2xl">Trust vs. Reward</CardTitle>
                <CardDescription>Public trust percentage vs. Median Agent Income (2023)</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
                  <BarChart accessibilityLayer data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="category"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      className="text-sm"
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                      domain={[0, 100]}
                      className="text-sm"
                    />
                    <Tooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="dot" />}
                    />
                    <AnimatedBar dataKey="value" radius={8} style={springs} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}