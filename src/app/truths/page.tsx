import TruthsChecklist from '@/components/sections/truths-checklist';
import './truths.css';

export default function TruthsPage() {
  return (
    <div className="truths-page-background">
      <div className="container mx-auto py-12">
        <TruthsChecklist />
      </div>
    </div>
  );
}
