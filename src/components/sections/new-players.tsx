import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Handshake, Rocket } from "lucide-react";


const players = [
    {
        icon: <Rocket className="h-10 w-10 text-primary" />,
        name: "iBuyers (e.g., Opendoor)",
        description: "Companies that use algorithms to make instant cash offers on homes, offering speed and convenience."
    },
    {
        icon: <Building className="h-10 w-10 text-primary" />,
        name: "Discount Brokerages",
        description: "Offer lower commission rates by leveraging technology and salaried agents, like Redfin."
    },
    {
        icon: <Handshake className="h-10 w-10 text-primary" />,
        name: "FSBO Platforms",
        description: "Websites that provide tools for homeowners to list and sell their properties without an agent."
    }
]

export default function NewPlayersSection() {
    return (
        <div className="bg-secondary rounded-lg p-8 h-full flex flex-col">
            <div className="text-center space-y-4">
                 <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    The Changing Landscape
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-primary-foreground">New Players in the Game</h2>
                <p className="text-muted-foreground text-lg md:text-xl/relaxed">
                   The traditional real estate model is being challenged by new, tech-driven alternatives.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 flex-1">
                {players.map((player) => (
                    <Card key={player.name} className="text-center bg-card/80 border-border/50 shadow-lg hover:border-primary transition-colors duration-300 flex flex-col">
                        <CardHeader className="items-center pt-8">
                            {player.icon}
                            <CardTitle className="mt-4 text-xl">{player.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-base text-muted-foreground">{player.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
