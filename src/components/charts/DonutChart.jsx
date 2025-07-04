import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
const DonutChart =()=> {
    const data = {
      labels: ['On time', 'Delayed'],
      datasets: [
        {
          label: 'Flight Status',
          data: [88.2, 13.0],
          backgroundColor: ['#3b82f6', '#ef4444'],
          borderWidth: 1,
        },
      ],
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: 'white',
          },
        },
      },
    };
  
    return <div className='w-[55%] h-[300px]'><Doughnut data={data} options={options} /></div>;
  }
  export default DonutChart
