import { cn } from "@/lib/utils";

const AnomalyAlertBanner = ({ className }: { className?: string }) => (
    <div className={cn(
        "my-12 rounded-lg border-2 border-dashed border-red-600 bg-gradient-to-r from-red-600 to-yellow-500 p-6 text-white shadow-[0_0_20px_rgba(220,38,38,0.8)] animate-pulse",
        className
    )}>
        <div className="flex items-center justify-center gap-4 text-center">
            <div className="text-4xl">⚠️</div>
            <div>
                <h4 className="text-xl font-black uppercase tracking-wider md:text-2xl">Australian Market Anomaly Detected</h4>
                <p className="font-light text-base md:text-lg">This practice exists nowhere else on Earth</p>
            </div>
        </div>
    </div>
);

export default AnomalyAlertBanner;
