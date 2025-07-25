// import React, { Suspense } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';
// import Collection from './pages/Collection';
// import Reports from './pages/Reports';
// import Home from './pages/Home';
// import NotFound from './pages/NotFound';
// import PrivateRoute from './components/PrivateRoute';

// const App = () => {
//   return (
//     <Suspense fallback={<div>Loading route...</div>}>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Protected Routes */}
//         <Route
//           path="/dashboard"
//           element={
//             <PrivateRoute>
//               <Dashboard />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/collection"
//           element={
//             <PrivateRoute>
//               <Collection />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/reports"
//           element={
//             <PrivateRoute>
//               <Reports />
//             </PrivateRoute>
//           }
//         />

//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Suspense>
//   );
// };

// export default App;

// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Collection from './pages/Collection';
import Reports from './pages/ViewReports';
import AddCollection from './pages/AddCollection';
import AddReport from './pages/AddReport';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={<PrivateRoute><Dashboard /></PrivateRoute>}
      />
      <Route
        path="/collection"
        element={<PrivateRoute><Collection /></PrivateRoute>}
      />
      <Route
        path="/reports"
        element={<PrivateRoute><Reports /></PrivateRoute>}
      />
      <Route
        path="/add-collection"
        element={<PrivateRoute><AddCollection /></PrivateRoute>}
      />
      <Route
        path="/add-report"
        element={<PrivateRoute><AddReport /></PrivateRoute>}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
