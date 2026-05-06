import axios from 'axios';

const baseURL = import.meta.env.DEV
  ? 'http://localhost:3000'
  : 'https://techno-backend-1b0v.onrender.com';

const api = axios.create({
  baseURL,
});

export default api;