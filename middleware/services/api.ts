import axios from 'axios';
import { useUserStore } from '@/store/UserStore';

const host = process.env.EXPO_PUBLIC_API_GATEWAY?.replace(/\/$/, '');

export const api = axios.create({
  baseURL: host,
  headers: {
    'Content-Type': 'application/json',
  }
});

api.interceptors.request.use((config) => {
  const token = useUserStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});