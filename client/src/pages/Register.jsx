import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api'; // ✅ Fix here
import '../styles/register.css';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'resident' });
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', form); // ✅ use `api`, not `axios`
      alert('💚Registration successful! Please login.');
      navigate('/login');
    } catch (error) {
      setErr(error.response?.data?.msg || 'Registration failed');
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      {err && <p className="error">{err}</p>}
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="Name" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        <select name="role" onChange={handleChange}>
          <option value="resident">Resident</option>
          <option value="collector">Collector</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
