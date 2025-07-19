import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero';
import TrustRewardSection from '@/components/sections/trust-reward';
import EffortDistributionSection from '@/components/sections/effort-distribution';
import FailureRateSection from '@/components/sections/failure-rate';
import StressLevelSection from '@/components/sections/stress-level';
import WhitePaperSection from '@/components/sections/white-paper';
import TerminologyExplainer from '@/components/sections/terminology-explainer';
import RiskMitigation from '@/components/sections/risk-mitigation';
import NewPlayersSection from '@/components/sections/new-players';
import CtaSection from '@/components/sections/cta';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustRewardSection />
        <EffortDistributionSection />
        <div className="container grid md:grid-cols-2 gap-8 py-16 lg:py-24">
          <FailureRateSection />
          <StressLevelSection />
        </div>
        <WhitePaperSection />
        <TerminologyExplainer />
        <RiskMitigation />
        <NewPlayersSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
