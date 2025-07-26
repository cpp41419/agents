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
  BarChart,
  AreaChart,
  Area
} from 'recharts';

const techVsFeesData = [
    { year: 2000, techCost: 100, commission: 5.5 },
    { year: 2005, techCost: 80, commission: 5.3 },
    { year: 2010, techCost: 50, commission: 5.0 },
    { year: 2015, techCost: 30, commission: 4.8 },
    { year: 2020, techCost: 15, commission: 4.6 },
    { year: 2023, techCost: 10, commission: 4.5 },
];

const marketRealityData = [
  {
    year: '2000',
    'Time Spent (hrs)': 60,
    'Marketing Costs ($)': 500,
    'Admin Work (hrs)': 20,
  },
  {
    year: '2023',
    'Time Spent (hrs)': 20,
    'Marketing Costs ($)': 2500,
    'Admin Work (hrs)': 10,
  },
];


const CustomTooltipTop = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 border bg-white shadow-lg rounded-md" style={{fontSize: '7pt'}}>
        <p className="font-bold">{label}</p>
        <p style={{ color: '#006BA2' }}>{`Tech Cost Index: ${payload[0].value}`}</p>
        <p style={{ color: '#E3120B' }}>{`Avg Commission: ${payload[1].value}%`}</p>
      </div>
    );
  }
  return null;
};

const CustomTooltipBottom = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 border bg-white shadow-lg rounded-md" style={{fontSize: '7pt'}}>
        <p className="font-bold">{label}</p>
        <p style={{ color: '#006BA2' }}>{`Time Spent: ${payload[0].value} hrs`}</p>
        <p style={{ color: '#758D99' }}>{`Marketing: $${payload[1].value}`}</p>
        <p style={{ color: '#E3120B' }}>{`Admin Work: ${payload[2].value} hrs`}</p>
      </div>
    );
  }
  return null;
};


const EconomistChart = () => {
    return (
        <div style={{ fontFamily: '"Econ Sans Cnd", sans-serif', width: '332pt', height: 'auto', backgroundColor: '#F4F2EE', padding: '10px' }}>
            {/* Top Panel */}
            <div style={{height: '180pt'}}>
                 <p style={{ fontFamily: 'Econ Sans Cnd Bold', fontSize: '9.5pt', textAlign: 'center', color: 'black' }}>Technology vs Fees</p>
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={techVsFeesData} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
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
                            domain={[0, 100]}
                            tick={{ fontSize: '7.5pt', fill: '#006BA2' }}
                            width={40}
                            label={{ value: 'Tech Cost (2000=100)', angle: -90, position: 'insideLeft', fill: '#006BA2', fontSize: '7.5pt' }}
                        />
                        <YAxis 
                            yAxisId="right" 
                            orientation="right" 
                            domain={[4, 6]}
                            ticks={[4, 4.5, 5, 5.5, 6]}
                            tickFormatter={(tick) => `${tick}%`}
                            tick={{ fontSize: '7.5pt', fill: '#E3120B' }}
                            width={40}
                            label={{ value: 'Commission %', angle: 90, position: 'insideRight', fill: '#E3120B', fontSize: '7.5pt' }}
                        />
                        <Tooltip content={<CustomTooltipTop />} />
                        <Line yAxisId="left" type="monotone" dataKey="techCost" stroke="#006BA2" strokeWidth={2} dot={false} />
                        <Line yAxisId="right" type="monotone" dataKey="commission" stroke="#E3120B" strokeWidth={2} dot={false} />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>

            {/* Bottom Panel */}
            <div style={{height: '180pt', marginTop: '20px'}}>
                <p style={{ fontFamily: 'Econ Sans Cnd Bold', fontSize: '9.5pt', textAlign: 'center', color: 'black' }}>Market Reality</p>
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={marketRealityData} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis 
                            dataKey="year" 
                            tickLine={false} 
                            axisLine={false} 
                            tick={{ fontSize: '7.5pt', fill: 'rgba(0,0,0,0.75)' }}
                        />
                        <YAxis 
                            tick={{ fontSize: '7.5pt', fill: 'rgba(0,0,0,0.75)' }}
                            width={40}
                        />
                        <Tooltip content={<CustomTooltipBottom />} />
                        <Legend wrapperStyle={{fontSize: '7.5pt'}} />
                        <Bar dataKey="Time Spent (hrs)" stackId="a" fill="#006BA2" />
                        <Bar dataKey="Marketing Costs ($)" stackId="a" fill="#758D99" />
                        <Bar dataKey="Admin Work (hrs)" stackId="a" fill="#E3120B" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div style={{ fontSize: '6.5pt', color: 'rgba(0,0,0,0.75)', textAlign: 'left', marginTop: '15px', paddingLeft: '60px' }}>
                Sources: NAR; CoreLogic; The Economist calculations
            </div>
        </div>
    );
};

export default EconomistChart;