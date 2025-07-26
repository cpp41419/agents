'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

const AnomalyAlertBanner = ({ className }: { className?: string }) => {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={cn(
                "relative my-12 p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-lg border-b-4 border-red-500 rounded-lg",
                className
            )}
            role="alert"
            aria-label="Australian market anomaly detected"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center">
                    <span className="text-3xl mr-4 text-red-500">⚠️</span>
                    <div>
                        <h2 className="text-2xl font-bold uppercase tracking-wider">Australian Market Anomaly Detected</h2>
                        <p className="text-gray-300">This practice exists nowhere else on Earth.</p>
                    </div>
                </div>
                <button
                    onClick={() => setVisible(false)}
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring"
                    aria-label="Dismiss"
                >
                    Dismiss
                </button>
            </div>
        </motion.div>
    );
};

export default AnomalyAlertBanner;
