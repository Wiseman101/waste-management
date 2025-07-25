// // import { createContext, useContext, useEffect, useState } from 'react';

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const [token, setToken] = useState(localStorage.getItem('token'));

// //   useEffect(() => {
// //     const storedUser = localStorage.getItem('user');
// //     if (storedUser && token) {
// //       setUser(JSON.parse(storedUser));
// //     }
// //   }, [token]);

// //   const login = (userData, token) => {
// //     setUser(userData);
// //     setToken(token);
// //     localStorage.setItem('user', JSON.stringify(userData));
// //     localStorage.setItem('token', token);
// //   };

// //   const logout = () => {
// //     setUser(null);
// //     setToken(null);
// //     localStorage.removeItem('user');
// //     localStorage.removeItem('token');
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, token, login, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     const storedUser = localStorage.getItem('user');
//     return storedUser ? JSON.parse(storedUser) : null;
//   });
//   const [token, setToken] = useState(() => localStorage.getItem('token'));

//   useEffect(() => {
//     if (token) {
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     } else {
//       delete axios.defaults.headers.common['Authorization'];
//     }
//   }, [token]);

//   const login = (userData, newToken) => {
//     setUser(userData);
//     setToken(newToken);
//     localStorage.setItem('user', JSON.stringify(userData));
//     localStorage.setItem('token', newToken);
//   };

//   const logout = () => {
//     setUser(null);
//     setToken(null);
//     localStorage.removeItem('user');
//     localStorage.removeItem('token');
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
