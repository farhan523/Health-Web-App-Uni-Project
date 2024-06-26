import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './HealthLevel.css';

const HealthLevelChart = () => {
  const percentage = 75;

  return (
    <div className="health-level-container">
      <h2>Health Level</h2>
      <div className="progressbar-container">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: '#333',
            pathColor: '#8884d8',
            trailColor: '#d6d6d6',
          })}
        />
      </div>
      <div className="status-message">
        <p><strong>Your Elder is Healthy</strong></p>
        <p>Your Elder should complete daily</p>
      </div>
    </div>
  );
};

export default HealthLevelChart;
