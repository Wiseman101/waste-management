// src/pages/AddCollection.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import '../styles/form.css';

const AddCollection = () => {
  const [form, setForm] = useState({ title: '', description: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post('/collection/add', form);

      // navigate('/dashboard');
      navigate('/dashboard', { state: { updated: true } });

    } catch (err) {
      setError(err.response?.data?.msg || 'Failed to add collection');
    }
  };

  return (
    <div className="form-container">
      <h2>Add Waste Collection</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" required onChange={handleChange} />
        <textarea name="description" placeholder="Description" required onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddCollection;
