import AXIOS from 'axios';
import { getAuthToken } from '../utils/authToken';

const axios = AXIOS.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1`,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

axios.interceptors.request.use((config) => {
  const accessToken = getAuthToken();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export default axios;
