import api from './axios';

export const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export const register = async (credentials) => {
  const response = await api.post('/auth/register', credentials);
  return response.data;
};

export const getProfile = async () => {
  const response = await api.get('/me');
  return response.data;
};