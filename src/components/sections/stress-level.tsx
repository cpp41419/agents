import { HeartPulse, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StressLevelSection() {
  return (
    <Card className="bg-secondary/50 border-border/30 h-full flex flex-col">
       <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
            <HeartPulse className="h-8 w-8 text-accent" />
            <CardTitle className="text-xl font-bold">The Stress of Buying</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-1">
        <div className="text-6xl font-black text-accent">45%</div>
        <p className="mt-2 text-base text-muted-foreground">
          of Americans find the home-buying process to be the most stressful event in modern life.
        </p>
         <div className="mt-auto pt-6 flex items-start space-x-3">
            <TrendingUp className="h-10 w-10 text-primary mt-1 flex-shrink-0" />
            <div>
                <h4 className="font-semibold text-lg text-primary-foreground">Emotional Buffer</h4>
                <p className="text-muted-foreground">A good agent acts as a buffer, managing the emotional highs and lows and keeping the transaction on track, reducing client stress.</p>
            </div>
        </div>
      </CardContent>
    </Card>
  )
}
