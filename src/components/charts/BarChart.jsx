import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ insights }) => {
  if (!insights || insights.length === 0) {
    return <div>No insights to display</div>;
  }

  const labels = insights.map(item => item.date || item.Day); // based on your API
  const values = insights.map(item => item.totalFlights);

  const data = {
    labels,
  datasets: [
    {
      label: 'Total Flights',
      backgroundColor: '#3b82f6',
      data: values,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: 'white',
      },
    },
  },
  scales: {
    x: {
      ticks: { color: 'white' },
    },
    y: {
      ticks: { color: 'white' },
    },
  },
};

return <div ><Bar data={data} options={options} /></div>;
};

export default BarChart;
