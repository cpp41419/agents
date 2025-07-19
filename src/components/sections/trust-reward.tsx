"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

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

export default function TrustRewardSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Trust vs. Reward</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Great Disparity</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Public perception of real estate agents is at an all-time low, yet their income potential remains remarkably high. This chart visualizes the stark contrast between the low trust placed in agents and the high financial rewards they can reap.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-lg">
              <CardHeader>
                <CardTitle>Trust vs. Reward</CardTitle>
                <CardDescription>Public trust percentage vs. Median Agent Income (2023)</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
                  <BarChart accessibilityLayer data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="category"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                      domain={[0, 100]}
                    />
                    <Tooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="dot" />}
                    />
                    <Bar dataKey="value" radius={8} />
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
