// @/components/sections/economist-chart.tsx
'use client';

import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  ReferenceLine,
} from 'recharts';

const data = [
  { year: 2000, commission: 5.5, costs: 5, gap: 0.5 },
  { year: 2002, commission: 5.4, costs: 5.5, gap: 0.1 },
  { year: 2004, commission: 5.3, costs: 6, gap: 0.7 },
  { year: 2006, commission: 5.2, costs: 7, gap: 1.8 },
  { year: 2008, commission: 5.1, costs: 6.5, gap: 1.4 },
  { year: 2010, commission: 5.0, costs: 8, gap: 3.0 },
  { year: 2012, commission: 4.9, costs: 9, gap: 4.1 },
  { year: 2015, commission: 4.8, costs: 12, gap: 7.2 },
  { year: 2018, commission: 4.7, costs: 15, gap: 10.3 },
  { year: 2021, commission: 4.6, costs: 20, gap: 15.4 },
  { year: 2023, commission: 4.5, costs: 22, gap: 17.5 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 border bg-white shadow-lg rounded-md">
        <p className="font-bold">{label}</p>
        <p style={{ color: '#006BA2' }}>{`Official Commission: ${payload[1].value}%`}</p>
        <p style={{ color: '#E3120B' }}>{`Actual Total Cost: $${payload[2].value}k`}</p>
      </div>
    );
  }
  return null;
};


const EconomistChart = () => {
    return (
        <div style={{ fontFamily: '"Econ Sans Cnd", sans-serif', width: '332pt', height: '245pt', backgroundColor: '#F4F2EE', padding: '10px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 40 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis 
                        dataKey="year" 
                        tickLine={false} 
                        axisLine={false} 
                        tick={{ fontSize: '7.5pt', fill: 'rgba(0,0,0,0.75)' }}
                    />
                    <YAxis 
                        yAxisId="left" 
                        orientation="left" 
                        domain={[0, 8]} 
                        ticks={[0, 2, 4, 6, 8]}
                        tickFormatter={(tick) => `${tick}%`}
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: '7.5pt', fill: '#006BA2' }}
                        width={40}
                    />
                    <YAxis 
                        yAxisId="right" 
                        orientation="right" 
                        domain={[0, 25]} 
                        ticks={[0, 5, 10, 15, 20, 25]}
                        tickFormatter={(tick) => `${tick}k`}
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: '7.5pt', fill: '#E3120B' }}
                        width={40}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    
                    <Bar dataKey="gap" yAxisId="right" barSize={20} fill="rgba(0,0,0,0.1)" />
                    <Line type="monotone" dataKey="commission" yAxisId="left" stroke="#006BA2" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="costs" yAxisId="right" stroke="#E3120B" strokeWidth={2} dot={false} />
                    
                    <ReferenceLine x={2008} stroke="rgba(0,0,0,0.5)" strokeDasharray="3 3" strokeWidth={0.5}>
                         <text x={2008} y={20} fill="rgba(0,0,0,0.7)" textAnchor="middle" fontSize="6.5pt">Housing Crisis</text>
                    </ReferenceLine>
                    <ReferenceLine x={2015} stroke="rgba(0,0,0,0.5)" strokeDasharray="3 3" strokeWidth={0.5}>
                        <text x={2015} y={40} fill="rgba(0,0,0,0.7)" textAnchor="middle" fontSize="6.5pt">Digital Disruption</text>
                    </ReferenceLine>
                     <ReferenceLine x={2021} stroke="rgba(0,0,0,0.5)" strokeDasharray="3 3" strokeWidth={0.5}>
                        <text x={2021} y={60} fill="rgba(0,0,0,0.7)" textAnchor="middle" fontSize="6.5pt">Post-COVID Surge</text>
                    </ReferenceLine>
                </ComposedChart>
            </ResponsiveContainer>
            <div style={{ fontSize: '6.5pt', color: 'rgba(0,0,0,0.75)', textAlign: 'left', marginTop: '5px', paddingLeft: '60px' }}>
                Sources: NAR; CoreLogic; The Economist calculations
            </div>
        </div>
    );
};

export default EconomistChart;
