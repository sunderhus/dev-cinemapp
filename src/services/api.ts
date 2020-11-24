import axios from 'axios';
const apiKey = '925eba28';

const api = axios.create({
  baseURL: `http://www.omdbapi.com?apikey=${apiKey}`,
});

export default api;
