"use client"

import { Pie, PieChart, Cell } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"
import { useInView } from "react-intersection-observer"
import { animated, useSpring } from "@react-spring/web"

const chartData = [
  { party: "Consumer", effort: 80, fill: "var(--color-consumer)" },
  { party: "Agent", effort: 20, fill: "var(--color-agent)" },
]

const chartConfig = {
  effort: {
    label: "Effort",
  },
  consumer: {
    label: "Consumer",
    color: "hsl(var(--accent))",
  },
  agent: {
    label: "Agent",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

const AnimatedPie = animated(Pie);

export default function EffortDistributionSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const spring = useSpring({
        from: { endAngle: 0 },
        to: { endAngle: inView ? 360 : 0 },
        config: { duration: 1000 },
    });

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white text-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="flex items-center justify-center lg:order-2" ref={ref}>
             <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[350px]"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <AnimatedPie
                    data={chartData}
                    dataKey="effort"
                    nameKey="party"
                    innerRadius={80}
                    strokeWidth={5}
                    labelLine={false}
                    label={({
                      cx,
                      cy,
                      midAngle,
                      innerRadius,
                      outerRadius,
                      percent,
                      index,
                    }) => {
                      const RADIAN = Math.PI / 180
                      const radius = innerRadius + (outerRadius - innerRadius) * 0.5
                      const x = cx + radius * Math.cos(-midAngle * RADIAN)
                      const y = cy + radius * Math.sin(-midAngle * RADIAN)
                      return (
                        <text
                          x={x}
                          y={y}
                          fill={index === 0 ? "hsl(var(--accent-foreground))" : "hsl(var(--primary-foreground))"}
                          textAnchor={x > cx ? "start" : "end"}
                          dominantBaseline="central"
                          className="text-lg font-bold"
                        >
                          {`${(percent * 100).toFixed(0)}%`}
                        </text>
                      )
                    }}
                    {...spring}
                  >
                     {chartData.map((entry) => (
                      <Cell key={`cell-${entry.party}`} fill={entry.fill} className="focus:outline-none ring-0" />
                    ))}
                  </AnimatedPie>
                </PieChart>
              </ChartContainer>
          </div>
          <div className="space-y-4 lg:order-1">
            <p className="font-semibold text-primary uppercase tracking-wider">The 80/20 Problem</p>
            <h2 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-5xl text-gray-900">Uneven Workload, Full Commission.</h2>
            <p className="max-w-[600px] text-gray-600 text-lg md:text-xl/relaxed">
              With modern tools, homebuyers and sellers handle the majority of the legwork—from property searches to initial viewings. Yet, the traditional commission structure hasn't changed, leaving many to question the value they're receiving.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}