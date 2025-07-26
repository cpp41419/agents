import { Comparison } from "@/components/ui/comparison";

export default function VendorPays() {
    return (
        <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center space-y-4">
                     <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Global Anomaly</div>
                    <h2 className="text-4xl font-black tracking-tighter sm:text-5xl text-primary-foreground">Who Pays for Marketing?</h2>
                    <p className="text-muted-foreground text-lg md:text-xl/relaxed">
                        In a practice unique to Australia, home sellers are expected to pay for all marketing costs, a burden handled by agents elsewhere.
                    </p>
                </div>
                <div className="mt-12 max-w-2xl mx-auto">
                    <Comparison
                        leftLabel="🇦🇺 Australia"
                        rightLabel="🌍 Rest of World"
                        leftValue={100}
                        rightValue={0}
                        leftSublabel="Vendor Pays"
                        rightSublabel="Agent Pays"
                    />
                </div>
            </div>
        </section>
    )
}
