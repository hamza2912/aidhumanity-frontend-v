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
      },
    },
  };

  return (
    <div className="px-6 py-6 shadow-sm">
      <CChart
        options={options}
        type="line"
        data={{
          labels: data.labels,
          datasets: [
            {
              label: 'Given',
              backgroundColor: 'rgba(220, 220, 220, 0.2)',
              borderColor: '#00ADE9',
              pointBackgroundColor: 'rgba(220, 220, 220, 1)',
              pointBorderColor: '#fff',
              data: data.given.map(val => val / 100),
            },
            {
              label: 'Raised',
              backgroundColor: 'rgba(151, 187, 205, 0.2)',
              borderColor: '#00c98b',
              pointBackgroundColor: 'rgba(151, 187, 205, 1)',
              pointBorderColor: '#fff',
              data: data.raised.map(val => val / 100),
            },
          ],
        }}
      />
    </div>
  );
};

export default StatsChart;
