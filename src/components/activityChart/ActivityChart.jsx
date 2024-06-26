import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import './ActivityTaskChart.css';

const data = [
  { name: 'S', tasks: 2 },
  { name: 'S', tasks: 4 },
  { name: 'M', tasks: 2 },
  { name: 'T', tasks: 3 },
  { name: 'W', tasks: 2 },
  { name: 'T', tasks: 4 },
  { name: 'F', tasks: 3 },
];

const ActivityTaskChart = () => (
  <div className="activity-task-chart-container">
    <div className="chart-header">
      <div className="chart-title">
        <i className="icon">📊</i>
        <div>
          <h3>Activity Task</h3>
          <p>Details Activity</p>
        </div>
      </div>
      <div className="chart-timeframe">
        <p>This Week</p>
      </div>
    </div>
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="tasks" stroke="#8884d8" fill="#2d43a8" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default ActivityTaskChart;
