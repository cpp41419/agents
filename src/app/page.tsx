import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero';
import TrustRewardSection from '@/components/sections/trust-reward';
import EffortDistributionSection from '@/components/sections/effort-distribution';
import VendorPays from '@/components/sections/vendor-pays';
import FailureRateSection from '@/components/sections/failure-rate';
import StressLevelSection from '@/components/sections/stress-level';
import WhitePaperSection from '@/components/sections/white-paper';
import TerminologyExplainer from '@/components/sections/terminology-explainer';
import RiskMitigation from '@/components/sections/risk-mitigation';
import CtaSection from '@/components/sections/cta';
import Footer from '@/components/layout/footer';
import AuditDashboard from '@/components/sections/audit-dashboard';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustRewardSection />
        <EffortDistributionSection />
        <VendorPays />
        <div className="bg-white py-16 lg:py-24">
          <div className="container grid md:grid-cols-2 gap-8">
            <FailureRateSection />
            <StressLevelSection />
          </div>
        </div>
        <WhitePaperSection />
        <TerminologyExplainer />
        <RiskMitigation />
        <div className="py-16 lg:py-24 bg-background">
            <div className="container text-center">
               <h2 className="text-3xl md:text-5xl font-black text-primary-foreground tracking-tighter">PropTech Disruption Audit</h2>
                <p className="text-lg md:text-xl mt-2 text-muted-foreground">An Interactive Analysis of the Australian Real Estate Industry</p>
                <div className="mt-8 border rounded-xl overflow-hidden">
                    <AuditDashboard />
                </div>
                <Link href="/audit" className="inline-block mt-8 text-primary hover:underline">
                    View Full-Screen Interactive Dashboard
                </Link>
            </div>
        </div>
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
