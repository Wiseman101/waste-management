// src/pages/ViewReports.jsx
import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import '../styles/list.css';

const ViewReports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await api.get('/reports');
        setReports(res.data);
      } catch (err) {
        console.error('❌ Failed to fetch reports:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="list-container">
      <h2>All Reports</h2>
      {loading ? (
        <p>Loading...</p>
      ) : reports.length > 0 ? (
        <ul className="item-list">
          {reports.map((rep) => (
            <li key={rep._id} className="item">
              <h3>{rep.title}</h3>
              <p>{rep.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reports found.</p>
      )}
    </div>
  );
};

export default ViewReports;
