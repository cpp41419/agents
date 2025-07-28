import AuditDashboard from '@/components/sections/audit-dashboard';
import './audit.css';

export default function AuditPage() {
  return (
    <div className="exploitation-body">
      <header className="exploitation-header">
        <h1>The Real Estate Exploitation Machine</h1>
        <p className="subtitle">How the System is Designed to Extract Value While Keeping You in the Dark</p>
        <p className="description">
            The real structural pain points aren't about e-signatures or apps—they're about information asymmetry baked into every step of the transaction.
        </p>
      </header>
      <main className="container mx-auto py-8">
        <AuditDashboard />
      </main>
       <footer className="exploitation-footer">
          <h3>💡 The Bottom Line</h3>
          <p>
              The industry's core rot isn't tech—it's information asymmetry. Until consumers can see the game, they'll keep losing it.
          </p>
      </footer>
    </div>
  );
}
