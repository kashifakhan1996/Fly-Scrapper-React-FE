import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; // Adjust if deployed

export const getFlightData = (origin, destination, days = 7) => {
  return axios.get(`${BASE_URL}/flights`, {
    params: { origin, destination, days },
  });
};

export const getInsights = (origin, destination, days = 7) => {
  return axios.get(`${BASE_URL}/insights`, {
    params: { origin, destination, days },
  });
};
