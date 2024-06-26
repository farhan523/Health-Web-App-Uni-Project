import React, { useState } from 'react';
import './Notification.css'; // Import the CSS file for styling

const Notification = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    'Notification 1',
    'Notification 2',
    // Add more notifications here
  ];

  return (
    <div className="notification-container" 
         onMouseEnter={() => setShowNotifications(true)} 
         onMouseLeave={() => setShowNotifications(false)}>
      <div className="icon-container">
        <div className="notification-icon">
            <img src='/public/image/bell (1).png' style={{width:"1.5rem", color:"white"}} />
          <span className="notification-count">{notifications.length}</span>
        </div>
      </div>
      {showNotifications && (
        <div className="notifications-dropdown">
          {notifications.map((notification, index) => (
            <div key={index} className="notification-item">
              {notification}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notification;
