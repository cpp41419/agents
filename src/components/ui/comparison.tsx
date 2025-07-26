"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ComparisonProps {
  leftLabel: string;
  rightLabel: string;
  leftValue: number;
  rightValue: number;
  leftSublabel?: string;
  rightSublabel?: string;
  leftColor?: string;
  rightColor?: string;
}

export function Comparison({
  leftLabel,
  rightLabel,
  leftValue,
  rightValue,
  leftSublabel,
  rightSublabel,
  leftColor = "hsl(var(--accent))",
  rightColor = "hsl(var(--primary))",
}: ComparisonProps) {
  const total = leftValue + rightValue;
  const leftPercentage = total > 0 ? (leftValue / total) * 100 : 50;
  const rightPercentage = total > 0 ? (rightValue / total) * 100 : 50;

  return (
    <div className="w-full space-y-4">
      <div className="relative w-full h-14 bg-card rounded-full overflow-hidden border-2 border-border/60 shadow-inner">
        <motion.div
          className="absolute h-full"
          style={{ backgroundColor: leftColor, width: `${leftPercentage}%` }}
          initial={{ width: '0%' }}
          animate={{ width: `${leftPercentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute h-full right-0"
          style={{ backgroundColor: rightColor, width: `${rightPercentage}%` }}
          initial={{ width: '0%' }}
          animate={{ width: `${rightPercentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
      <div className="flex justify-between text-foreground">
        <div className="text-left w-2/5">
          <p className="font-bold text-lg">{leftLabel}</p>
          {leftSublabel && <p className="text-sm text-muted-foreground">{leftSublabel}</p>}
        </div>
         <div className="text-center w-1/5 flex items-center justify-center">
            <p className="font-black text-2xl text-primary-foreground">{leftValue}%</p>
            <p className="font-black text-2xl text-muted-foreground mx-2">/</p>
            <p className="font-black text-2xl text-primary-foreground">{rightValue}%</p>
        </div>
        <div className="text-right w-2/5">
          <p className="font-bold text-lg">{rightLabel}</p>
          {rightSublabel && <p className="text-sm text-muted-foreground">{rightSublabel}</p>}
        </div>
      </div>
    </div>
  );
}
