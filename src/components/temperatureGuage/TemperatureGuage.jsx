import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

const TemperatureGauge = ({ temperature }) => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      
      <ReactSpeedometer
        maxValue={42}
        minValue={33}
        value={temperature}
        needleColor="blue"
        startColor="blue"
        segments={1000}
        endColor="grey"
        currentValueText={`${temperature}°C`}
        needleTransitionDuration={4000}
        needleTransition="easeElastic"
        height={200}
        width={300}
      />
    </div>
  );
};

export default TemperatureGauge;
