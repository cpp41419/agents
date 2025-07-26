import { AlertTriangle, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FailureRateSection() {
  return (
    <Card className="bg-slate-50 border-slate-200 text-slate-800 h-full flex flex-col shadow-lg rounded-xl overflow-hidden">
      <div className="p-6 bg-accent/10">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-accent/20">
            <AlertTriangle className="h-8 w-8 text-accent" />
          </div>
          <CardTitle className="text-2xl font-bold text-slate-900">FSBO Failure Rate</CardTitle>
        </div>
        <div className="text-8xl font-black text-accent mt-4">22%</div>
        <p className="mt-2 text-base text-slate-600 font-medium">
          of For-Sale-By-Owner transactions fail to close, compared to just 5% with an agent.
        </p>
      </div>
      <CardContent className="flex flex-col flex-1 p-6 bg-white">
        <div className="mt-auto flex items-start space-x-4">
            <ShieldCheck className="h-10 w-10 text-primary mt-1 flex-shrink-0" />
            <div>
                <h4 className="font-semibold text-lg text-slate-900">The Agent as Gatekeeper</h4>
                <p className="text-slate-600 leading-relaxed">Agents mitigate risk by navigating complex contracts, negotiations, and closing procedures, ensuring a higher success rate.</p>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
