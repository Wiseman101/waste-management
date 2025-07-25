// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import api from '../utils/api';
// import '../styles/dashboard.css';
// // import recycleGif from '../assets/animations/recycle.gif'; // Add your own or use a placeholder

// const Dashboard = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();
//   const [stats, setStats] = useState({ total: 0, pending: 0, completed: 0 });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const res = await api.get('/collection/user');
//       console.log("Dashboard data:", res.data); // ✅ This helps debug
//       setData(res.data);
//     } catch (err) {
//       console.error('❌ Failed to fetch dashboard data:', err.message);
//     }
//   };
//   fetchData();
// }, []);


//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-header">
        
//         <h2>Welcome, {user?.name} ♻️</h2>
//         <p className="subtitle">Let’s keep the community clean & green</p>
//         <button onClick={handleLogout}>Logout</button>
//       </div>

//       <div className="dashboard-cards">
//         <div className="card profile-card">
//           <h3>👤 Profile</h3>
//           <p><strong>Email:</strong> {user?.email}</p>
//           <p><strong>Role:</strong> {user?.role}</p>
//         </div>

//         <div className="card stats-card">
//           <h3>📊 Your Waste Stats</h3>
//           {loading ? (
//             <p>Loading stats...</p>
//           ) : (
//             <ul>
//               <li>Total Requests: {stats.total}</li>
//               <li>Completed: {stats.completed}</li>
//               <li>Pending: {stats.pending}</li>
//             </ul>
//           )}
//         </div>

//         <div className="card actions-card">
//           <h3>🚀 Quick Actions</h3>
//           <button onClick={() => navigate('/collection')}>Request Pickup</button>
//           <button onClick={() => navigate('/reports')}>Submit Report</button>
//           <button disabled title="Coming Soon 🧭">View Map</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../utils/api';
import '../styles/dashboard.css';
  import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [collections, setCollections] = useState([]);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);



// Inside component
const location = useLocation();


 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [collectionRes, reportRes] = await Promise.all([
          api.get('/collection/user'),
          api.get('/reports/user')
        ]);
        setCollections(collectionRes.data);
        setReports(reportRes.data);
      } catch (err) {
        console.error('❌ Failed to fetch dashboard data:', err.message);
      } finally {
        setLoading(false);
      }
    };

   if (user) fetchData();
}, [user, location]); // 👈 refetches every time route changes or user logs in


  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const goTo = (path) => navigate(path);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Welcome, {user?.name}</h2>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>

      <div className="dashboard-card">
        <h3>Profile Details</h3>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Role:</strong> {user?.role}</p>
      </div>

      <div className="dashboard-card">
        <h3>Quick Actions</h3>
        <div className="action-buttons">
          <button onClick={() => goTo('/add-collection')} className="action-btn">Add Collection</button>
          <button onClick={() => goTo('/add-report')} className="action-btn">Add Report</button>
        </div>
      </div>

      <div className="dashboard-card">
        <h3>Your Waste Collections</h3>
        {loading ? (
          <p className="loading">Loading collections...</p>
        ) : collections.length > 0 ? (
          <ul className="item-list">
            {collections.map((item) => (
              <li key={item._id} className="item">
                <h4>{item.title || 'Collection Point'}</h4>
                <p>{item.description || 'No description'}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty">No collection records available.</p>
        )}
      </div>

      <div className="dashboard-card">
        <h3>Your Reports</h3>
        {loading ? (
          <p className="loading">Loading reports...</p>
        ) : reports.length > 0 ? (
          <ul className="item-list">
            {reports.map((report) => (
              <li key={report._id} className="item">
                <h4>{report.title || 'Report'}</h4>
                <p>{report.description || 'No description'}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty">No reports available.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
