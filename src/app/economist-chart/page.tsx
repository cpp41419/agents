import EconomistChart from '@/components/sections/economist-chart';

export default function EconomistChartPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto p-4 md:p-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Commission vs. Actual Cost</h1>
          <p className="text-lg text-gray-600">A historical view of real estate transaction costs</p>
        </header>
        <div className="flex justify-center">
            <EconomistChart />
        </div>
      </div>
    </div>
  );
}
