import { AlertTriangle, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FailureRateSection() {
  return (
    <Card className="bg-secondary h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Transaction Failure Rate (FSBO)</CardTitle>
        <AlertTriangle className="h-4 w-4 text-accent" />
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold text-accent">22%</div>
        <p className="text-xs text-muted-foreground">
          of For-Sale-By-Owner transactions fail to close, compared to just 5% with an agent.
        </p>
        <div className="mt-4 flex items-start space-x-2 pt-4">
            <ShieldCheck className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
            <div>
                <h4 className="font-semibold">The Agent as Gatekeeper</h4>
                <p className="text-sm text-muted-foreground">Agents mitigate risk by navigating complex contracts, negotiations, and closing procedures, ensuring a higher success rate.</p>
            </div>
        </div>
      </CardContent>
    </Card>
  )
}
