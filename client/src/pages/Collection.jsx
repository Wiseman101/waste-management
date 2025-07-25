import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';
import '../styles/collection.css';

const Collection = () => {
  const [form, setForm] = useState({
    location: '',
    wasteType: '',
    quantity: '',
    collectedBy: ''
  });
  const [msg, setMsg] = useState('');
  const [err, setErr] = useState('');
  const { user } = useAuth();
  const api = useApi();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr('');
    setMsg('');
    try {
      await api.post('/collection', form);
      setMsg('Collection recorded successfully ✅');
      setForm({ location: '', wasteType: '', quantity: '', collectedBy: '' });
    } catch (error) {
      setErr(error.response?.data?.msg || 'Failed to submit collection');
    }
  };

  return (
    <div className="form-container">
      <h2>Waste Collection</h2>
      {msg && <p className="success">{msg}</p>}
      {err && <p className="error">{err}</p>}
      <form onSubmit={handleSubmit}>
        <input name="location" placeholder="Location" required value={form.location} onChange={handleChange} />
        <input name="wasteType" placeholder="Waste Type" required value={form.wasteType} onChange={handleChange} />
        <input name="quantity" placeholder="Quantity (kg)" type="number" required value={form.quantity} onChange={handleChange} />
        <input name="collectedBy" placeholder="Collected By" value={form.collectedBy} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Collection;
