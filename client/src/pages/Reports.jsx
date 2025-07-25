import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';
import '../styles/reports.css';

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [error, setError] = useState('');
  const api = useApi();

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await api.get('/reports');
        setReports(res.data);
      } catch (err) {
        setError(err.response?.data?.msg || 'Failed to fetch reports');
      }
    };
    fetchReports();
  }, [api]);

  return (
    <div className="page">
      <h2>Reports</h2>
      {error && <p className="error">{error}</p>}
      {reports.length > 0 ? (
        <ul>
          {reports.map((report, idx) => (
            <li key={idx}>
              📍 <strong>{report.location}</strong> — {report.wasteType} — {report.quantity}kg — 🧍 {report.collectedBy}
            </li>
          ))}
        </ul>
      ) : (
        <p>No reports found</p>
      )}
    </div>
  );
};

export default Reports;
