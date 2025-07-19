import { AlertTriangle, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FailureRateSection() {
  return (
    <Card className="bg-slate-50 border-slate-200 text-slate-800 h-full flex flex-col shadow-lg rounded-xl">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
            <AlertTriangle className="h-8 w-8 text-accent" />
            <CardTitle className="text-xl font-bold text-slate-900">FSBO Failure Rate</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-1">
        <div className="text-7xl font-black text-accent">22%</div>
        <p className="mt-2 text-base text-slate-600">
          of For-Sale-By-Owner transactions fail to close, compared to just 5% with an agent.
        </p>
        <div className="mt-auto pt-6 flex items-start space-x-3">
            <ShieldCheck className="h-10 w-10 text-primary mt-1 flex-shrink-0" />
            <div>
                <h4 className="font-semibold text-lg text-slate-900">The Agent as Gatekeeper</h4>
                <p className="text-slate-600">Agents mitigate risk by navigating complex contracts, negotiations, and closing procedures, ensuring a higher success rate.</p>
            </div>
        </div>
      </CardContent>
    </Card>
  )
}
