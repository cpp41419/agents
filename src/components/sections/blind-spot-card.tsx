// @/components/sections/blind-spot-card.tsx
'use client';
import { useState, useEffect, useRef } from 'react';

interface BlindSpotCardProps {
  rank: number;
  icon: string;
  title: string;
  tactic: string;
  costImpact: string;
  backTitle: string;
  details: string[];
  realCost: string;
  index: number;
}

export default function BlindSpotCard({
  rank,
  icon,
  title,
  tactic,
  costImpact,
  backTitle,
  details,
  realCost,
  index,
}: BlindSpotCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleFlip = () => {
    if (window.innerWidth <= 768) {
      setIsFlipped(!isFlipped);
    }
  };

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`blind-spot-card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleFlip}
      tabIndex={0}
      role="button"
      aria-label={`Click to reveal manipulation tactics for ${title}`}
      style={{
        opacity: 0,
        transform: 'translateY(50px)',
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${
          index * 0.15
        }s`,
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleFlip();
          e.preventDefault();
        }
      }}
    >
      <div className="rank-badge">#{rank}</div>
      <div className="card-front">
        <div className="warning-icon">{icon}</div>
        <div className="card-title">{title}</div>
        <div className="manipulation-tactic">
          <strong>The Tactic:</strong> {tactic}
        </div>
        <div className="cost-impact">Cost: {costImpact}</div>
        <div className="click-hint">Hover to reveal tactics</div>
      </div>
      <div className="card-back">
        <div className="card-title">{backTitle}</div>
        <div className="blind-spot-details">
          <strong>What you don't know:</strong>
          <ul className="tactics-list">
            {details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
        <div className="cost-impact">Real Cost: {realCost}</div>
      </div>
    </div>
  );
}
