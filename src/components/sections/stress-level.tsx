import { HeartPulse, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StressLevelSection() {
  return (
    <Card className="bg-slate-50 border-slate-200 text-slate-800 h-full flex flex-col shadow-lg rounded-xl">
       <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
            <HeartPulse className="h-8 w-8 text-accent" />
            <CardTitle className="text-xl font-bold text-slate-900">The Stress of Buying</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-1">
        <div className="text-7xl font-black text-accent">45%</div>
        <p className="mt-2 text-base text-slate-600">
          of Americans find the home-buying process to be the most stressful event in modern life.
        </p>
         <div className="mt-auto pt-6 flex items-start space-x-3">
            <TrendingUp className="h-10 w-10 text-primary mt-1 flex-shrink-0" />
            <div>
                <h4 className="font-semibold text-lg text-slate-900">Emotional Buffer</h4>
                <p className="text-slate-600">A good agent acts as a buffer, managing the emotional highs and lows and keeping the transaction on track, reducing client stress.</p>
            </div>
        </div>
      </CardContent>
    </Card>
  )
}
