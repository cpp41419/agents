import { HeartPulse, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StressLevelSection() {
  return (
    <Card className="bg-secondary h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Buying a Home is Stressful</CardTitle>
        <HeartPulse className="h-4 w-4 text-accent" />
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold text-accent">45%</div>
        <p className="text-xs text-muted-foreground">
          of Americans find the home-buying process to be the most stressful event in modern life.
        </p>
         <div className="mt-4 flex items-start space-x-2 pt-4">
            <TrendingUp className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
            <div>
                <h4 className="font-semibold">Emotional Buffer</h4>
                <p className="text-sm text-muted-foreground">A good agent acts as a buffer, managing the emotional highs and lows and keeping the transaction on track, reducing client stress.</p>
            </div>
        </div>
      </CardContent>
    </Card>
  )
}
