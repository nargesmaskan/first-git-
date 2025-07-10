import React from 'react';
import { useLocation } from 'react-router-dom';
import DynamicChart from './DynamicChart';
import './chartpage.css';

const ChartPage = () => {
  const location = useLocation();
  const chartKey = location.state?.chartKey;

  return (
    <div className='chart-container'>
    <div className='chartwrapper'>
    <div className='chart' style={{ padding: '2rem' }}>
      
      {chartKey ? (
        <DynamicChart chartKey={chartKey} />
      ) : (
        <p>oops seems like there isnt a chart with this key</p>
      )}
    </div>
    </div>
    </div>
  );
};

export default ChartPage;