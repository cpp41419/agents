"use client"

import { Pie, PieChart, Cell } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

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

export default function EffortDistributionSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex items-center justify-center lg:order-2">
            <Card className="w-full max-w-lg">
              <CardHeader>
                <CardTitle>Effort Distribution</CardTitle>
                <CardDescription>Who really does the work in a transaction?</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                 <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[300px]"
                  >
                    <PieChart>
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                      />
                      <Pie
                        data={chartData}
                        dataKey="effort"
                        nameKey="party"
                        innerRadius={60}
                        strokeWidth={5}
                      >
                         {chartData.map((entry) => (
                          <Cell key={`cell-${entry.party}`} fill={entry.fill} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ChartContainer>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4 lg:order-1">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">The 80/20 Problem</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Uneven Workload, Full Commission</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              With modern tools, homebuyers and sellers handle the majority of the legwork—from property searches to initial viewings. Yet, the traditional commission structure hasn't changed, leaving many to question the value they're receiving.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
