import React from 'react';
import './ProgressTask.css';

const ProgressTaskTable = () => {
  const tasksData = [
    { label: 'Total Task', value: 12, color: '#4a90e2', icon: '📊' },
    { label: 'Assigned Task', value: 8, color: '#8996a6', icon: '📋' },
    { label: 'Completed Task', value: 6, color: '#9e9e9e', icon: '✅' },
  ];

  return (
    <div className="progress-task-container">
      <div className="header">
        <div className="title">
          <i className="icon">📝</i>
          <div>
            <h3>Progress Task</h3>
            <p>Details Progress</p>
          </div>
        </div>
        <button className="add-task-button">+ Add Task</button>
      </div>
      <div className="tasks">
        {tasksData.map((task, index) => (
          <div className="task-card" key={index} style={{ backgroundColor: task.color }}>
            <div className="task-icon">{task.icon}</div>
            <div className="task-details">
              <p className="task-label">{task.label}</p>
              <p className="task-value">{task.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTaskTable;
