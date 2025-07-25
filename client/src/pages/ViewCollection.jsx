// src/pages/ViewCollection.jsx
import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import '../styles/list.css';

const ViewCollection = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const res = await api.get('/collection');
        setCollections(res.data);
      } catch (err) {
        console.error('❌ Failed to fetch collections:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  return (
    <div className="list-container">
      <h2>All Waste Collections</h2>
      {loading ? (
        <p>Loading...</p>
      ) : collections.length > 0 ? (
        <ul className="item-list">
          {collections.map((col) => (
            <li key={col._id} className="item">
              <h3>{col.title}</h3>
              <p>{col.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No collections found.</p>
      )}
    </div>
  );
};

export default ViewCollection;
