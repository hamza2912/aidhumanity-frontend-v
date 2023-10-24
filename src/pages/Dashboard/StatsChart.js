import React from 'react';
import { CChart } from '@coreui/react-chartjs';

const StatsChart = ({ data }) => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        intersect: false,
        position: 'nearest',
        yalign: 'center',
        caretPadding: 2,
        
      },
    },
    scales: {
      y: {
        beginAtZero: true
      }
    },
    maintainAspectRatio: false,
    elements: {
      point:{
          radius: 0
      }
    },
  };

  return (
    <div className="px-6 py-6 shadow-sm h-auto myline">
      <CChart
        options={options}
        type="line"
        data={{
          labels: data.labels,
          datasets: [
            {
              label: 'Raised',
              backgroundColor: '#00ade9',
              borderColor: '#00ade9',
              // pointBackgroundColor: '#00c98b',
              // pointBorderColor: '#fff',
              // data: data.raised.map(val => val / 100),
              data: [1,2,3,4,4,3,2,1]
            },
            {
              label: 'Given',
              backgroundColor: '#00c98b',
              borderColor: '#00c98b',
              borderDash: [10,5],
              // pointBackgroundColor: '#00c98b',
              // pointBorderColor: '#fff',
              // data: data.given.map(val => val / 100),
              data: [1.5,2.2,3.1,2.1,1,2,3,4]
            },
          ],
        }}
      />
    </div>
  );
};

export default StatsChart;
