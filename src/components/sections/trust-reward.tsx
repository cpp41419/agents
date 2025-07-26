
"use client"

import { Scatter, ScatterChart, CartesianGrid, Tooltip, XAxis, YAxis, ZAxis, Legend } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

const chartData = [
    { profession: "Doctors", income: 250, trust: 87, training: 7, fill: "var(--color-doctors)" },
    { profession: "Lawyers", income: 150, trust: 34, training: 5, fill: "var(--color-lawyers)" },
    { profession: "Journalists", income: 70, trust: 9, training: 3, fill: "var(--color-journalists)" },
    { profession: "Politicians", income: 211, trust: 12, training: 0, fill: "var(--color-politicians)" },
    { profession: "Real Estate Agents", income: 180, trust: 7, training: 0.5, fill: "var(--color-agents)" },
    { profession: "Used Car Salesmen", income: 80, trust: 8, training: 0, fill: "var(--color-salesmen)" },
];

const chartConfig = {
  income: {
    label: "Median Income ($k)",
  },
  trust: {
    label: "Trust Rating (%)",
  },
  training: {
    label: "Training (Years)",
  },
  doctors: {
    label: "Doctors",
    color: "hsl(var(--chart-1))",
  },
  lawyers: {
    label: "Lawyers",
    color: "hsl(var(--chart-2))",
  },
  journalists: {
    label: "Journalists",
    color: "hsl(var(--chart-3))",
  },
  politicians: {
    label: "Politicians",
    color: "hsl(var(--chart-4))",
  },
  agents: {
    label: "Real Estate Agents",
    color: "hsl(var(--accent))",
  },
  salesmen: {
      label: "Used Car Salesmen",
      color: "hsl(var(--chart-5))",
  }
} satisfies ChartConfig

export default function TrustRewardSection() {
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
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-lg border-border/60 shadow-lg bg-card/80">
              <CardHeader>
                <CardTitle className="text-2xl">Trust, Reward & Training</CardTitle>
                <CardDescription>Trust Rating (%) vs. Median Income ($k)</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="min-h-[400px] w-full">
                  <ScatterChart
                    margin={{
                      top: 20,
                      right: 20,
                      bottom: 40,
                      left: 20,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="trust"
                      type="number"
                      name="Trust Rating"
                      unit="%"
                      label={{ value: "Public Trust Rating (%)", position: "insideBottom", offset: -25 }}
                      className="text-sm"
                    />
                    <YAxis
                      dataKey="income"
                      type="number"
                      name="Median Income"
                      unit="k"
                       label={{ value: "Median Income ($k)", angle: -90, position: "insideLeft" }}
                      className="text-sm"
                    />
                    <ZAxis dataKey="training" type="number" range={[100, 1000]} name="training" unit=" years" />
                    <Tooltip cursor={{ strokeDasharray: "3 3" }} content={<ChartTooltipContent />} />
                     <Legend content={<ChartLegendContent />} verticalAlign="bottom" height={50} />
                    {chartData.map((point) => (
                        <Scatter key={point.profession} name={point.profession} data={[point]} fill={point.fill} shape="circle" />
                    ))}
                  </ScatterChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
