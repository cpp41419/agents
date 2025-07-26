// @/components/sections/profession-trust-chart.tsx
'use client';

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Legend,
  Cell,
  CartesianGrid,
} from 'recharts';
import { animated, useSpring } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import type { ChartConfig } from '@/components/ui/chart';

const chartData = [
  {
    profession: 'Doctors',
    income: 250,
    trust: 87,
    training: 7,
    fill: 'var(--color-doctors)',
  },
  {
    profession: 'Lawyers',
    income: 150,
    trust: 34,
    training: 5,
    fill: 'var(--color-lawyers)',
  },
  {
    profession: 'Journalists',
    income: 70,
    trust: 9,
    training: 3,
    fill: 'var(--color-journalists)',
  },
  {
    profession: 'Politicians',
    income: 211,
    trust: 12,
    training: 0,
    fill: 'var(--color-politicians)',
  },
  {
    profession: 'Real Estate Agents',
    income: 180,
    trust: 7,
    training: 0.5,
    fill: 'var(--color-agents)',
  },
  {
    profession: 'Used Car Salesmen',
    income: 80,
    trust: 8,
    training: 0,
    fill: 'var(--color-salesmen)',
  },
];

const chartConfig = {
  income: {
    label: 'Median Income ($k)',
  },
  trust: {
    label: 'Trust Rating (%)',
  },
  training: {
    label: 'Training (Years)',
  },
  doctors: {
    label: 'Doctors',
    color: 'hsl(var(--chart-1))',
  },
  lawyers: {
    label: 'Lawyers',
    color: 'hsl(var(--chart-2))',
  },
  journalists: {
    label: 'Journalists',
    color: 'hsl(var(--chart-3))',
  },
  politicians: {
    label: 'Politicians',
    color: 'hsl(var(--chart-4))',
  },
  agents: {
    label: 'Real Estate Agents',
    color: 'hsl(var(--accent))',
  },
  salesmen: {
    label: 'Used Car Salesmen',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;

const AnimatedScatter = animated(Scatter);

export default function ProfessionTrustChart() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const spring = useSpring({
    from: { opacity: 0, transform: 'scale(0)' },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? 'scale(1)' : 'scale(0)',
    },
    config: { mass: 1, tension: 280, friction: 60 },
    delay: 200,
  });

  return (
    <div className="flex items-center justify-center my-8" ref={ref}>
      <Card className="w-full max-w-2xl border-slate-200 shadow-lg bg-slate-50 text-slate-800">
        <CardHeader>
          <CardTitle className="text-2xl">
            Trust, Reward & Training
          </CardTitle>
          <CardDescription>
            Trust Rating (%) vs. Median Income ($k) vs. Training (Years)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={chartConfig}
            className="min-h-[450px] w-full"
          >
            <ScatterChart
              margin={{
                top: 20,
                right: 20,
                bottom: 40,
                left: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200" />
              <XAxis
                dataKey="trust"
                type="number"
                name="Trust Rating"
                unit="%"
                label={{
                  value: 'Public Trust Rating (%)',
                  position: 'insideBottom',
                  offset: -25,
                  className: 'fill-slate-600'
                }}
                className="text-sm fill-slate-600"
                stroke="hsl(var(--border))"
              />
              <YAxis
                dataKey="income"
                type="number"
                name="Median Income"
                unit="k"
                label={{
                  value: 'Median Income ($k)',
                  angle: -90,
                  position: 'insideLeft',
                  className: 'fill-slate-600'
                }}
                className="text-sm fill-slate-600"
                stroke="hsl(var(--border))"
              />
              <ZAxis
                dataKey="training"
                type="number"
                range={[100, 1000]}
                name="training"
                unit=" years"
              />
              <Tooltip
                cursor={{ strokeDasharray: '3 3' }}
                content={
                  <ChartTooltipContent
                    labelKey="profession"
                    nameKey="profession"
                    formatter={(value, name, props) => {
                      const { payload } = props;
                      return (
                        <div className="space-y-1">
                            <p className="font-bold text-base">{payload.profession}</p>
                            <p>Trust: {payload.trust}%</p>
                            <p>Income: ${payload.income}k</p>
                            <p>Training: {payload.training} years</p>
                        </div>
                      )
                    }}
                  />
                }
              />
              <Legend
                content={<ChartLegendContent />}
                verticalAlign="bottom"
                height={50}
              />
              <AnimatedScatter
                data={chartData}
                fill="var(--color-primary)"
                shape="circle"
                style={spring}
              >
                {chartData.map((point) => (
                  <Cell key={point.profession} fill={point.fill} className="focus:outline-none ring-0"/>
                ))}
              </AnimatedScatter>
            </ScatterChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
