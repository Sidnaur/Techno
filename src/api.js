import axios from 'axios';

const api = axios.create({
  baseURL: 'https://techno-backend-1b0v.onrender.com',
  withCredentials: true,
});

export default api;