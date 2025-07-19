import AuditDashboard from '@/components/sections/audit-dashboard';
import './audit.css';

export default function AuditPage() {
  return (
    <div className="font-sans antialiased">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-black text-gray-50 tracking-tighter">
            2025 PropTech Disruption Audit
          </h1>
          <p className="text-lg md:text-xl mt-2 text-blue-400">
            An Interactive Analysis of the Australian Real Estate Industry
          </p>
          <p className="text-sm mt-1 text-gray-500">
            Last Updated: 19 July 2025, 9:50 PM AEST
          </p>
        </header>
        <AuditDashboard />
      </div>
    </div>
  );
}
