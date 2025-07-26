
'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const timeToPracticeData = [
  { profession: 'Doctor', hours: 11000, fill: '#006BA2' },
  { profession: 'Nurse', hours: 4600, fill: '#006BA2' },
  { profession: 'Hairdresser', hours: 1500, fill: '#006BA2' },
  { profession: 'Real Estate Agent', hours: 75, fill: '#E3120B' },
];

const transactionValueData = [
  { name: 'Haircut', value: 50, fill: '#758D99' },
  { name: 'Medical Visit', value: 500, fill: '#758D99' },
  { name: 'Home Sale', value: 400000, fill: '#E3120B' },
];

const formatCurrency = (value: number) => {
    if (value >= 1000) return `$${(value / 1000)}k`;
    return `$${value}`;
}


export default function TrustRewardSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary text-secondary-foreground">
      <div className="container px-4 md:px-6">
        <Card className="bg-card text-card-foreground shadow-2xl border-border/50">
           <CardHeader className="text-center">
                <p className="font-semibold text-primary uppercase tracking-wider">The Value-Complexity Gap</p>
                <CardTitle className="text-4xl font-black tracking-tighter sm:text-5xl md:text-5xl">Low Training, High Stakes</CardTitle>
                <CardDescription className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl/relaxed">
                    A visual breakdown of the required training hours versus the average value of transactions handled across different professions.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8 items-center p-8">
            <div>
              <h3 className="text-2xl font-bold text-center mb-4">Time to Practice</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={timeToPracticeData} layout="vertical" margin={{ left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border)/0.5)" />
                  <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                  <YAxis type="category" dataKey="profession" width={110} stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    cursor={{fill: 'hsl(var(--muted)/0.3)'}}
                    contentStyle={{
                        background: 'hsl(var(--background))',
                        borderColor: 'hsl(var(--border))',
                    }}
                   />
                  <Bar dataKey="hours" background={{ fill: 'hsl(var(--muted)/0.2)' }}>
                     <LabelList dataKey="hours" position="right" formatter={(value: number) => `${value.toLocaleString()} hrs`} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center mb-4">Average Transaction Value</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={transactionValueData}>
                   <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border)/0.5)" />
                  <XAxis type="category" dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis
                    type="number"
                    stroke="hsl(var(--muted-foreground))"
                    tickFormatter={(value) => formatCurrency(value)}
                    domain={[0, 'dataMax + 50000']}
                  />
                   <Tooltip
                    cursor={{fill: 'hsl(var(--muted)/0.3)'}}
                    formatter={(value: number) => `$${value.toLocaleString()}`}
                    contentStyle={{
                        background: 'hsl(var(--background))',
                        borderColor: 'hsl(var(--border))',
                    }}
                   />
                  <Bar dataKey="value" background={{ fill: 'hsl(var(--muted)/0.2)' }} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
          <div className="text-center p-6 border-t border-border/50">
             <p className="text-2xl font-bold text-primary-foreground">
                75 HOURS TO HANDLE A $400K TRANSACTION
              </p>
               <p className="text-lg text-muted-foreground">...let that sink in.</p>
          </div>
        </Card>
      </div>
    </section>
  );
}
