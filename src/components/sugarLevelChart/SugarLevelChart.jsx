// Chart.js (using plain CSS)
import React from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './sugarLevelChart.css';

const data = [
  { name: 'Mon', uv: 50 },
  { name: 'Tue', uv: 60 },
  { name: 'Wed', uv: 55 },
  { name: 'Thu', uv: 65 },
  { name: 'Fri', uv: 60 },
  { name: 'Sat', uv: 70 },
  { name: 'Sun', uv: 50 },
];

const SugarLevelChart = () => {
  return (
    <div className="chart-container">
      <div className="status">
        <h3 className="chart-title">Sugar Level</h3>
        <span className="status-indicator">Low</span>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#ff6b6b" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SugarLevelChart;
