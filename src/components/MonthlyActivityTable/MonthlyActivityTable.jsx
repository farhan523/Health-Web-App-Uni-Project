import React from 'react';
import './MonthlyActivity.css';

const tasksData = [
  {
    week: 'Week 1',
    tasks: [
      { name: 'Sugar Level', date: '08 August 2023', status: 'Completed', progress: 100 },
      { name: 'Pulse Rate', date: '08 August 2023', status: 'Completed', progress: 80 },
    ],
  },
  {
    week: 'Week 2',
    tasks: [
      { name: 'Blood Level', date: '08 August 2023', status: 'Completed', progress: 70 },
      { name: 'Temperature', date: '08 August 2023', status: 'Partial', progress: 30 },
    ],
  },
  {
    week: 'Week 3',
    tasks: [
      { name: 'Sugar Level', date: '08 August 2023', status: 'Upcoming', progress: 0 },
      { name: 'Pulse Rate', date: '08 August 2023', status: 'Upcoming', progress: 0 },
    ],
  },
  {
    week: 'Week 4',
    tasks: [
      { name: 'Blood Test', date: '08 August 2023', status: 'Upcoming', progress: 0 },
      { name: 'BP Level', date: '08 August 2023', status: 'Upcoming', progress: 0 },
    ],
  },
];

const MonthlyActivityTable = () => {
  return (
    <div className="monthly-activity-container">
      <h2>This Month Activity</h2>
      <table className="activity-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Schedule Date</th>
            <th>Status</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {tasksData.map((weekData, weekIndex) => (
            <React.Fragment key={weekIndex}>
              <tr className="week-row">
                <td colSpan="4">{weekData.week}</td>
              </tr>
              {weekData.tasks.map((task, taskIndex) => (
                <tr key={taskIndex} className="task-row">
                  <td className="task-name">
                    <i className={`icon ${task.status === 'Completed' ? 'completed' : 'upcoming'}`}></i>
                    {task.name}
                  </td>
                  <td>{task.date}</td>
                  <td>
                    <span className={`status ${task.status.toLowerCase()}`}>{task.status}</span>
                  </td>
                  <td>
                    <div className="progress-bar-container">
                      <div
                        className="progress-bar"
                        style={{ width: `${task.progress}%` }}
                      ></div>
                    </div>
                    <span className="progress-percentage">{task.progress}%</span>
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyActivityTable;
