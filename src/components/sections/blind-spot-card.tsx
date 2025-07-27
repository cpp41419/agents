// @/components/sections/blind-spot-card.tsx

interface BlindSpotCardProps {
  rank: number;
  icon: string;
  title: string;
  tactic: string;
  costImpact: string;
}

export default function BlindSpotCard({
  rank,
  icon,
  title,
  tactic,
  costImpact,
}: BlindSpotCardProps) {

  return (
    <div
      className="blind-spot-card"
      tabIndex={0}
      role="article"
      aria-label={`${title}: ${tactic}`}
    >
      <div className="rank-badge">#{rank}</div>
      <div className="card-front">
        <div className="warning-icon">{icon}</div>
        <div>
            <h3 className="card-title">{title}</h3>
            <div className="manipulation-tactic">
                <strong>The Tactic:</strong> {tactic}
            </div>
        </div>
        <div className="cost-impact">{costImpact}</div>
      </div>
    </div>
  );
}
