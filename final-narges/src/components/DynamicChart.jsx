import React from 'react';
import Plot from 'react-plotly.js';
import { chartsData } from './mockchart';
import './dynamic.css';
import { useNavigate } from 'react-router-dom';
import { RollbackOutlined } from '@ant-design/icons';

const DynamicChart = ({ chartKey }) => {
  const navigate= useNavigate();

  const chart = chartsData[chartKey];

  if (!chart) {
    return <p>Oops! No magical data found for this key.</p>;
  }

  const data = Array.isArray(chart.data) ? chart.data : [chart.data];

  const layout = {
    ...chart.layout,
    paper_bgcolor: 'rgba(10, 10, 30, 0.8)', 
    plot_bgcolor: 'rgba(0, 0, 0, 0.2)',
    font: {
      family: 'Cinzel Decorative, cursive',
      color: '#e6e6fa',
    },
  };
 
  const map = () => {
    console.log("Button clicked");
    navigate('/Map');
  };
  return (
    <div style={{ width: '100%', height: '100%', padding: '10px' }}>
      <h2 style={{ color: 'red' , zIndex:'1000000'}}>{chart.layout.title.text}</h2>
      <Plot
        data={data}
        layout={layout}
        config={{ responsive: true }}
        style={{ width: '100%', height: '100%' }}
        useResizeHandler
      />
      <button
      className='mapbuttom'
       onClick={map}
     
      >
         <RollbackOutlined />
      </button>
    </div>
  );
};

export default DynamicChart;
