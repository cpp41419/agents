import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero';
import IntroParagraph from '@/components/sections/intro-paragraph';
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
import BookPromoCta from '@/components/sections/book-promo-cta';
import NewPlayersSection from '@/components/sections/new-players';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <IntroParagraph />
        <div id="data">
            <TrustRewardSection />
        </div>
        <EffortDistributionSection />
        <VendorPays />
        <div className="bg-white py-16 lg:py-24">
          <div className="container">
            <NewPlayersSection />
          </div>
        </div>
        <div className="py-16 lg:py-24 bg-secondary text-secondary-foreground">
             <div className="container">
                <AuditDashboard />
             </div>
        </div>
        <CtaSection />
        <div id="truth-tribune">
            <WhitePaperSection />
        </div>
        <TerminologyExplainer />
        <RiskMitigation />
        <BookPromoCta />
      </main>
      <Footer />
    </div>
  );
}
