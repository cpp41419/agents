'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DollarSign, UserCheck, SearchX, AlertTriangle, Gauge, Hourglass, Percent } from 'lucide-react';

const metrics = [
    { icon: <Hourglass className="h-8 w-8" />, value: '10', unit: ' wks', label: 'Avg. Property Search' },
    { icon: <Percent className="h-8 w-8" />, value: 20, unit: '%', label: 'Agent Search Involvement' },
    { icon: <UserCheck className="h-8 w-8" />, value: 75, unit: '%', label: 'Docs Handled by Conveyancers' },
    { icon: <SearchX className="h-8 w-8" />, value: 2, unit: '', label: 'Negotiations Requiring Expertise' },
    { icon: <Gauge className="h-8 w-8" />, value: 12, unit: ' hrs', label: 'Actual Value-Add Time' },
    { icon: <DollarSign className="h-8 w-8" />, value: 3750, unit: '', label: 'Commission/Hour of Real Work', isCurrency: true },
];

const AnimatedCounter = ({ to, isCurrency = false }: { to: number, isCurrency?: boolean }) => {
    // This is a simplified counter for demonstration. 
    // In a real app, you'd use a library like react-spring or framer-motion's useMotionValue for a smoother animation.
    return <span className="font-black text-4xl md:text-5xl text-slate-900">
        {isCurrency && '$'}{to.toLocaleString()}
        </span>;
};


const MetricCard = ({ metric, index }: { metric: any, index: number }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
    };

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="bg-slate-50 rounded-xl p-6 text-center shadow-lg border border-slate-200"
        >
            <div className="text-primary mx-auto mb-4 inline-block">{metric.icon}</div>
            <div className="leading-none">
                <AnimatedCounter to={parseFloat(metric.value)} isCurrency={metric.isCurrency}/>
                <span className="text-3xl md:text-4xl font-bold text-primary">{metric.unit}</span>
            </div>
            <p className="mt-2 text-sm text-slate-600 font-semibold">{metric.label}</p>
        </motion.div>
    );
};

export default function KeyMetrics() {
    return (
        <div className="my-12">
            <h4 className="text-base text-center text-gray-600 mb-4 px-4 font-semibold">Executive Summary: Key Industry Metrics</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {metrics.map((metric, index) => (
                    <MetricCard key={metric.label} metric={metric} index={index} />
                ))}
            </div>
        </div>
    );
}
