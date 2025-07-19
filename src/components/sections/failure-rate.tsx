import { AlertTriangle, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FailureRateSection() {
  return (
    <Card className="bg-secondary/50 border-border/30 h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
            <AlertTriangle className="h-8 w-8 text-accent" />
            <CardTitle className="text-xl font-bold">FSBO Failure Rate</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-1">
        <div className="text-6xl font-black text-accent">22%</div>
        <p className="mt-2 text-base text-muted-foreground">
          of For-Sale-By-Owner transactions fail to close, compared to just 5% with an agent.
        </p>
        <div className="mt-auto pt-6 flex items-start space-x-3">
            <ShieldCheck className="h-10 w-10 text-primary mt-1 flex-shrink-0" />
            <div>
                <h4 className="font-semibold text-lg text-primary-foreground">The Agent as Gatekeeper</h4>
                <p className="text-muted-foreground">Agents mitigate risk by navigating complex contracts, negotiations, and closing procedures, ensuring a higher success rate.</p>
            </div>
        </div>
      </CardContent>
    </Card>
  )
}
