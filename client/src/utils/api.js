// import axios from 'axios';
// import { useAuth } from '../context/AuthContext';

// // Create a custom hook to get the token
// const useApi = () => {
//   const { token } = useAuth();
//   const api = axios.create({
//     baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
//   });

//   api.interceptors.request.use((config) => {
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   });

//   // return api;
// };

// export default api;
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
});

// Set token for all requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
