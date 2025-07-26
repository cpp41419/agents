import { Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function StatisticalImpossibility() {
  return (
    <Card className="bg-secondary text-secondary-foreground h-full flex flex-col shadow-lg rounded-xl overflow-hidden border-accent/50">
      <CardHeader className="text-center p-8 bg-accent/10">
         <div className="mx-auto bg-accent/20 p-4 rounded-full w-fit">
            <Zap className="h-10 w-10 text-accent" />
        </div>
        <CardTitle className="text-3xl font-black tracking-tight mt-4">The 47-Year Anomaly</CardTitle>
        <p className="text-muted-foreground text-lg">Australia's Gravity-Defying Property Market</p>
      </CardHeader>
      <CardContent className="p-8 flex flex-col flex-1 items-center justify-center text-center">
        <div className="space-y-6">
            <div>
                <p className="text-6xl font-black text-accent tracking-tighter">47</p>
                <p className="text-lg font-medium text-muted-foreground">Years Without Major Correction</p>
            </div>
            <div>
                 <p className="text-6xl font-black text-accent tracking-tighter">0.0003%</p>
                <p className="text-lg font-medium text-muted-foreground">Statistical Probability of Continuation</p>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
