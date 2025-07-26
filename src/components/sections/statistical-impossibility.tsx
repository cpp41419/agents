import { Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: '1975', aus: 10, others: 8 },
  { name: '1985', aus: 25, others: 15 },
  { name: '1995', aus: 40, others: 5 },
  { name: '2005', aus: 60, others: 30 },
  { name: '2015', aus: 80, others: 25 },
  { name: '2025', aus: 100, others: 40 },
];

export default function StatisticalImpossibility() {
  return (
    <Card className="bg-secondary text-secondary-foreground h-full flex flex-col shadow-lg rounded-xl overflow-hidden border-accent/50">
      <CardHeader className="text-center p-8 bg-accent/10">
         <div className="mx-auto bg-accent/20 p-4 rounded-full w-fit">
            <Zap className="h-10 w-10 text-accent" />
        </div>
        <CardTitle className="text-3xl font-black tracking-tight mt-4">The 47-Year Anomaly</CardTitle>
        <p className="text-muted-foreground text-lg">Australia's Gravity-Defying Property Market vs. Global Trends</p>
      </CardHeader>
      <CardContent className="p-8 flex flex-col flex-1 items-center justify-center text-center">
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <defs>
                    <linearGradient id="colorAus" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorOthers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                    contentStyle={{ 
                        backgroundColor: 'hsl(var(--background))', 
                        borderColor: 'hsl(var(--border))',
                        color: 'hsl(var(--foreground))'
                    }} 
                    labelStyle={{ fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="aus" name="Australia" stroke="hsl(var(--accent))" fillOpacity={1} fill="url(#colorAus)" strokeWidth={3} />
                <Area type="monotone" dataKey="others" name="Other Western Nations" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorOthers)" strokeWidth={2} />
            </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
