import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import './PulseRateChart.css';

const data = [
  { name: 'Mon', value: 30 },
  { name: 'Tue', value: 50 },
  { name: 'Wed', value: 40 },
  { name: 'Thu', value: 45 },
  { name: 'Fri', value: 35 },
  { name: 'Sat', value: 30 },
];

const PulseRateChart = () => (
  <div className="chart-container">
    <div className="header">
      <h2>Pulse Rate</h2>
      <span className="status">
        <span className="status-indicator"></span>
        Normal
      </span>
      <span className="bpm">72 bpm</span>
    </div>
    <div className="subheader">This Week</div>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[20, 50]} />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={3} dot={{ r: 3 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default PulseRateChart;
