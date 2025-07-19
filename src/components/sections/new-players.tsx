import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Building, Handshake } from "lucide-react";

const players = [
    {
        name: "iBuyers (e.g., Opendoor)",
        description: "Companies that use algorithms to make instant cash offers on homes, offering speed and convenience.",
        icon: <Rocket className="h-8 w-8 text-primary" />,
    },
    {
        name: "Discount Brokerages",
        description: "Offer lower commission rates by leveraging technology and salaried agents, like Redfin.",
        icon: <Building className="h-8 w-8 text-primary" />,
    },
    {
        name: "FSBO Platforms",
        description: "Websites that provide tools for homeowners to list and sell their properties without an agent.",
        icon: <Handshake className="h-8 w-8 text-primary" />,
    }
];

export default function NewPlayersSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center space-y-4">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">The Changing Landscape</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">New Players in the Game</h2>
                    <p className="text-muted-foreground md:text-xl/relaxed">
                        The traditional real estate model is being challenged by new, tech-driven alternatives.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
                    {players.map((player) => (
                        <Card key={player.name} className="text-center">
                            <CardHeader className="items-center">
                                {player.icon}
                                <CardTitle className="mt-4">{player.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{player.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
