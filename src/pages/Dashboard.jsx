import { useEffect, useState } from 'react';
import Filters from '../components/Filters.jsx';
import FlightCard from '../components/FlightCard.jsx';
import BarChart from '../components/charts/BarChart.jsx';
import DonutChart from '../components/charts/DonutChart.jsx';
import { getFlightData, getInsights } from '../services/api.js';

const Dashboard = ()=> {
  const [origin, setOrigin] = useState('SYD');
  const [destination, setDestination] = useState('MEL');
  const [days, setDays] = useState(7);

  const [flights, setFlights] = useState([]);
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [flightsRes, insightsRes] = await Promise.all([
        getFlightData(origin, destination, days),
        getInsights(origin, destination, days),
      ]);

      setFlights(flightsRes.data);
      setInsights(insightsRes.data);
    } catch (err) {
      console.error('Error fetching data:', err);
      alert('Failed to fetch data. Please check the backend or CORS.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, [origin, destination, days]);

  return (
    <div className="bg-[#0e1a2b] text-white min-h-screen px-8 py-6">
    <h1 className="text-3xl font-bold mb-6">✈️ Airline Market Demand Dashboard</h1>
    <Filters
        origin={origin}
        destination={destination}
        days={days}
        setOrigin={setOrigin}
        setDestination={setDestination}
        setDays={setDays}
      />
    {loading && <p className="text-White font-medium">Loading data...</p>}
    {insights && 
    <div className="grid grid-cols-1 md:grid-cols-2 gap-60 mb-8 mt-10">
      <BarChart insights={insights}/>
      <DonutChart insights={insights}/>
    </div>
}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
    {flights.length > 0 && flights.map(flight=><FlightCard 
    
    date={flight["Flight Date"]}
    airline={flight["Airline"]}
    flightNo={flight["Flight Number"]}
    time={flight["Departure Time"]}
    />)
      
      }
    </div>
  </div>
  );
}

export default Dashboard;
