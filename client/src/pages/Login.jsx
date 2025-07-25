import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useApi } from '../utils/api';
import api from '../utils/api';

import '../styles/login.css';
import { useAuth } from '../context/AuthContext';


const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [err, setErr] = useState('');
  const navigate = useNavigate();
  // const api = useApi();
  const { login } = useAuth();
  const { setUser } = useAuth();


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setErr('');
  //   try {
  //     const res = await api.post('/auth/login', form);
  //     login(res.data.user, res.data.token);
  //     navigate('/dashboard');
  //   } catch (error) {
  //     setErr(error.response?.data?.msg || 'Login failed');
  //   }
  // };
  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await api.post('/auth/login', form); // ✅ use `api`, not `axios.post`
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    setUser(res.data.user);
    alert('💚Login successful!');
    navigate('/dashboard');
  } catch (error) {
    console.log('Login Error:', error); // 👈 Add this
    setErr(error.response?.data?.msg || 'Login failed');
  }
};


  return (
    <div className="form-container">
      <h2>Login</h2>
      {err && <p className="error">{err}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />
        <button type="submit">Login</button>
        
        <p>
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
