import TruthsChecklist from '@/components/sections/truths-checklist';
import './truths.css';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function TruthsPage() {
  return (
    <div className="truths-page-background">
      <div className="container mx-auto py-12">
        <div className="text-center mb-8 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-200">
          <p className="text-xl font-medium text-gray-800">
            Ready to become a modern property professional?
          </p>
          <Button asChild className="mt-4" size="lg">
            <Link href="https://cpp41419.com.au" target="_blank" rel="noopener noreferrer">
              Visit CPP41419.com.au
            </Link>
          </Button>
        </div>
        <TruthsChecklist />
      </div>
    </div>
  );
}
