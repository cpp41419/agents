'use client';
import { useState } from 'react';
import { Line, Doughnut, Radar, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  BarElement,
  TimeScale,
} from 'chart.js';
import 'chart.js/auto'; // Using auto importer

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  BarElement,
  TimeScale
);

// Placeholder for AI calls
async function callGemini(prompt: string) {
  console.log('Calling AI with prompt:', prompt);
  // In a real scenario, this would call a server action
  // which then calls the Genkit flow.
  // For now, returning a placeholder.
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return `AI-generated response for: "${prompt.substring(0, 50)}..."`;
}

export default function AuditDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [explanation, setExplanation] = useState('Select a tactic above.');
  const [explanationLoading, setExplanationLoading] = useState(false);
  const [counsel, setCounsel] = useState('Enter your concern above.');
  const [counselLoading, setCounselLoading] = useState(false);
  const [analysis, setAnalysis] = useState('Select a model to analyze.');
  const [analysisLoading, setAnalysisLoading] = useState(false);
  const [remorseInput, setRemorseInput] = useState('');

  const changeTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  const getExplanation = async (tactic: string) => {
    setExplanationLoading(true);
    setExplanation('');
    const prompt = `Based on the provided report, explain the auction manipulation tactic "${tactic}" in a simple, concise way for a home buyer (max 50 words).`;
    const result = await callGemini(prompt);
    setExplanation(result);
    setExplanationLoading(false);
  };

  const getCounsel = async () => {
    if (!remorseInput.trim()) {
      setCounsel('Please enter your concern.');
      return;
    }
    setCounselLoading(true);
    setCounsel('');
    const prompt = `A user's buyer's remorse is: "${remorseInput}". Based on the report, explain how a competent, modern buyer's agent would have mitigated this specific risk. Be reassuring and focus on the agent's role in strategy and data analysis.`;
    const result = await callGemini(prompt);
    setCounsel(result);
    setCounselLoading(false);
  };

  const getAnalysis = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const select = document.getElementById('disruptorSelect') as HTMLSelectElement;
    const model = select.value;
    setAnalysisLoading(true);
    setAnalysis('');
    const prompt = `Based on the report's themes of trust, complexity, and consumer empowerment, briefly analyze the market viability of a "${model}" business in Australian real estate.`;
    const result = await callGemini(prompt);
    setAnalysis(result);
    setAnalysisLoading(false);
  };

  const chartTextColor = '#D1D5DB';
  const gridColor = 'rgba(75, 85, 99, 0.5)';
  const primaryColor = '#3B82F6';
  const secondaryColor = '#10B981';

  const commonChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: { legend: { labels: { color: chartTextColor } } },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: chartTextColor },
        grid: { color: gridColor },
      },
      x: { ticks: { color: chartTextColor }, grid: { color: gridColor } },
    },
  };
  
  const divergenceData = {
      labels: ['1990', '2000', '2010', '2020', '2025'],
      datasets: [
          { label: 'Home Price Index', data: [50, 100, 210, 310, 340], borderColor: primaryColor, tension: 0.1 },
          { label: 'Agent Service Value', data: [50, 50, 50, 50, 50], borderColor: secondaryColor, borderDash: [5, 5] }
      ]
  };

  const workloadData = {
    labels: ['Consumer Work', 'Agent Work'],
    datasets: [{ data: [80, 20], backgroundColor: [primaryColor, secondaryColor], borderWidth: 0 }],
  };

  const stressData = {
    labels: ['Cortisol Levels', 'Conflict', 'Decision Fatigue', 'Remorse', 'Anxiety'],
    datasets: [{ label: 'Stress Index', data: [9, 8, 8.7, 5.2, 7], backgroundColor: 'rgba(59, 130, 246, 0.2)', borderColor: primaryColor, pointBackgroundColor: primaryColor }],
  };

  const growthData = {
    labels: ["Buyer's Agents", 'Private Platforms', 'OpenAgent'],
    datasets: [{ label: 'Growth Since 2020 (%)', data: [456, 234, 312], backgroundColor: secondaryColor }],
  };


  return (
    <>
      <div className="flex border-b border-gray-700 mb-8 justify-center">
        <div className={`tab ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => changeTab('dashboard')}>Dashboard</div>
        <div className={`tab ${activeTab === 'human' ? 'active' : ''}`} onClick={() => changeTab('human')}>The Human Element</div>
        <div className={`tab ${activeTab === 'disruption' ? 'active' : ''}`} onClick={() => changeTab('disruption')}>Market Disruption</div>
        <div className={`tab ${activeTab === 'projections' ? 'active' : ''}`} onClick={() => changeTab('projections')}>2027 Projections</div>
      </div>

      <div id="dashboard" className={`tab-content ${activeTab === 'dashboard' ? 'active' : ''}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="kpi-card"><p className="text-sm text-gray-400">Annual Commissions</p><p className="text-3xl font-bold text-gray-50">$8.4 Billion</p></div>
            <div className="kpi-card"><p className="text-sm text-gray-400">Public Trust Rating</p><p className="text-3xl font-bold text-red-500">7%</p></div>
            <div className="kpi-card"><p className="text-sm text-gray-400">Unrepresented Failure Rate</p><p className="text-3xl font-bold text-yellow-500">33%</p></div>
            <div className="kpi-card"><p className="text-sm text-gray-400">Projected Transformation</p><p className="text-3xl font-bold text-emerald-500">2 Years Max</p></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-gray-800 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-gray-50 mb-4">Price vs. Value Divergence (1990-2025)</h3>
                <div className="chart-container">
                    <Line data={divergenceData} options={commonChartOptions as any} />
                </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-gray-50 mb-4">Consumer vs. Agent Workload</h3>
                <div className="chart-container">
                    <Doughnut data={workloadData} options={{ maintainAspectRatio: false, responsive: true, plugins: { legend: { position: 'bottom', labels: { color: chartTextColor } } } }} />
                </div>
            </div>
        </div>
      </div>

      <div id="human" className={`tab-content ${activeTab === 'human' ? 'active' : ''}`}>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-50 mb-4">The Auction Manipulation Playbook</h3>
                  <p className="text-sm text-gray-400 mb-4">Click a tactic to reveal an AI-generated explanation of how it works.</p>
                  <div className="space-y-3">
                      <button onClick={() => getExplanation('Vendor Bids')} className="w-full text-left bg-gray-700 p-3 rounded-md hover:bg-gray-600">Vendor Bids</button>
                      <button onClick={() => getExplanation('Underquoting')} className="w-full text-left bg-gray-700 p-3 rounded-md hover:bg-gray-600">Underquoting</button>
                      <button onClick={() => getExplanation('Phantom Bidders')} className="w-full text-left bg-gray-700 p-3 rounded-md hover:bg-gray-600">Phantom Bidders</button>
                  </div>
                  <div id="explanationOutput" className="mt-4 bg-gray-900 p-4 rounded-md min-h-[100px] flex items-center justify-center text-center text-gray-400">
                      {explanationLoading && <span id="explanationLoading">Loading...</span>}
                      {!explanationLoading && <span id="explanationText">{explanation}</span>}
                  </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-50 mb-4">Stress Metrics of Home Buying</h3>
                   <div className="chart-container">
                      <Radar data={stressData} options={{...commonChartOptions, scales: { r: { angleLines: { color: gridColor }, grid: { color: gridColor }, pointLabels: { color: chartTextColor }, ticks: { display: false } } }} as any}/>
                  </div>
              </div>
          </div>
           <div className="mt-8 bg-gray-800 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-50 mb-4 text-center">✨ AI-Powered Buyer's Remorse Counselor</h3>
              <p className="text-sm text-gray-400 mb-4 text-center">Feeling post-purchase anxiety? Describe your concern, and AI will explain how a modern buyer's agent helps mitigate that specific risk.</p>
              <textarea id="remorseInput" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., 'I think I overpaid because I got caught up in the auction hype.'" onChange={(e) => setRemorseInput(e.target.value)} value={remorseInput}></textarea>
              <button onClick={getCounsel} className="mt-2 w-full bg-emerald-500 text-white font-semibold py-2 rounded-md hover:bg-emerald-600">Get Counsel</button>
              <div id="counselOutput" className="mt-4 bg-gray-900 p-4 rounded-md min-h-[80px] flex items-center justify-center text-gray-400">
                  {counselLoading && <span id="counselLoading">Thinking...</span>}
                  {!counselLoading && <span id="counselText">{counsel}</span>}
              </div>
          </div>
      </div>

      <div id="disruption" className={`tab-content ${activeTab === 'disruption' ? 'active' : ''}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-50 mb-4">Post-Mortem: The Compass Failure</h3>
                  <p className="text-sm text-gray-400 mb-4">A case study in misunderstanding the market. Compass focused on tech for agents, not trust for consumers.</p>
                  <div className="space-y-4">
                      <div className="flex justify-between items-center bg-gray-700 p-3 rounded-md"><span className="font-semibold">Capital Raised:</span><span className="font-bold text-xl text-blue-400">$1.6B</span></div>
                      <div className="flex justify-between items-center bg-gray-700 p-3 rounded-md"><span className="font-semibold">2022 Loss:</span><span className="font-bold text-xl text-red-500">-$494M</span></div>
                      <div className="flex justify-between items-center bg-gray-700 p-3 rounded-md"><span className="font-semibold">Stock Decline:</span><span className="font-bold text-xl text-red-500">-84%</span></div>
                  </div>
              </div>
               <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-50 mb-4">The Real Disruption: Service Growth</h3>
                  <p className="text-sm text-gray-400 mb-4">While VC-backed apps faltered, growth occurred in specialized, consumer-focused services.</p>
                   <div className="chart-container h-64">
                      <Bar data={growthData} options={{...commonChartOptions, plugins: { legend: { display: false } }} as any}/>
                  </div>
              </div>
          </div>
          <div className="mt-8 bg-gray-800 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-50 mb-4 text-center">✨ AI-Powered Disruptor Deep-Dive</h3>
              <p className="text-sm text-gray-400 mb-4 text-center">Select a new real estate model, and AI will generate a brief analysis of its market viability.</p>
              <select id="disruptorSelect" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="Fixed-Fee Services">Fixed-Fee Services</option>
                  <option value="AI-Powered Valuations">AI-Powered Valuations</option>
                  <option value="Buyer's Agency Specialization">Buyer's Agency Specialization</option>
              </select>
              <button onClick={getAnalysis} className="mt-2 w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600">Analyze Model</button>
               <div id="analysisOutput" className="mt-4 bg-gray-900 p-4 rounded-md min-h-[80px] flex items-center justify-center text-gray-400">
                  {analysisLoading && <span id="analysisLoading">Analyzing...</span>}
                  {!analysisLoading && <span id="analysisText">{analysis}</span>}
              </div>
          </div>
      </div>

      <div id="projections" className={`tab-content ${activeTab === 'projections' ? 'active' : ''}`}>
           <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="font-bold text-xl text-gray-50 mb-6 text-center">Timeline to Transformation: 2025-2027</h3>
              <div className="relative w-full py-4">
                  <div className="absolute left-0 top-1/2 w-full h-1 bg-gray-700"></div>
                  <div className="relative flex justify-between">
                      <div className="text-center w-1/4"><div className="mx-auto w-5 h-5 bg-blue-500 rounded-full border-2 border-gray-900 shadow"></div><p className="mt-2 font-bold">Today (2025)</p><p className="text-sm text-gray-400">Peak Dysfunction</p></div>
                      <div className="text-center w-1/4"><div className="mx-auto w-5 h-5 bg-blue-500 rounded-full border-2 border-gray-900 shadow"></div><p className="mt-2 font-bold">2026</p><p className="text-sm text-gray-400">Commissions Fall</p></div>
                      <div className="text-center w-1/4"><div className="mx-auto w-5 h-5 bg-emerald-500 rounded-full border-2 border-gray-900 shadow"></div><p className="mt-2 font-bold">2027</p><p className="text-sm text-gray-400">New Model Dominates</p></div>
                  </div>
              </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-50 mb-4">The Agent of the Future</h3>
                  <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center"><span className="text-emerald-400 mr-2">✓</span>Transaction Architect</li>
                      <li className="flex items-center"><span className="text-emerald-400 mr-2">✓</span>Risk Mitigator</li>
                      <li className="flex items-center"><span className="text-emerald-400 mr-2">✓</span>Emotional Support System</li>
                      <li className="flex items-center"><span className="text-emerald-400 mr-2">✓</span>Data Analyst</li>
                      <li className="flex items-center"><span className="text-red-500 mr-2">✗</span>Door Opener</li>
                  </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                  <h3 className="font-bold text-lg text-gray-50 mb-2">Ready for the New Era?</h3>
                  <p className="text-sm text-gray-400 mb-4">The best way to beat a broken system is to rebuild it with better people.</p>
                  <a href="#" className="inline-block bg-blue-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-600">Start Your Revolution</a>
              </div>
          </div>
      </div>
    </>
  );
}
