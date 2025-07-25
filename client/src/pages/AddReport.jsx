// // src/pages/AddReport.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../utils/api';
// import '../styles/form.css';

// const AddReport = () => {
//   const [form, setForm] = useState({ title: '', description: '' });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     try {
//       await api.post('/reports/add', { title, description });

//       // navigate('/dashboard');
//       navigate('/dashboard', { state: { updated: true } });

//     } catch (err) {
//       setError(err.response?.data?.msg || 'Failed to submit report');
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Add Report</h2>
//       {error && <p className="error">{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Report Title"
//           required
//           onChange={handleChange}
//         />
//         <textarea
//           name="description"
//           placeholder="Description"
//           rows="5"
//           required
//           onChange={handleChange}
//         />
//         <button type="submit">Submit Report</button>
//       </form>
//     </div>
//   );
// };

// export default AddReport;
// src/pages/AddReport.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import '../styles/form.css';

const AddReport = () => {
  const [form, setForm] = useState({ title: '', description: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await api.post('/reports/add', form); // ✅ correct object used
      navigate('/dashboard', { state: { updated: true } });
    } catch (err) {
      setError(err.response?.data?.msg || 'Failed to submit report');
    }
  };

  return (
    <div className="form-container">
      <h2>Add Report</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Report Title"
          required
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          rows="5"
          required
          onChange={handleChange}
        />
        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default AddReport;
