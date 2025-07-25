# ♻️ Waste Management System

A full-stack MERN application built to help users manage waste collections and reports in an organized, role-based dashboard. Built for residents, collectors, and administrators to track activities, submit reports, and promote cleaner communities.

---

## 🚀 Live Demo

- **Frontend (Vercel)**: (https://waste-management-qew4.vercel.app/)
- **Backend (Render)**: (https://waste-management-posm.onrender.com/api)

---

## 📦 Features

- 🔐 User Authentication (Register, Login)
- 🔒 Protected Dashboard (JWT-based)
- 🧾 Add & View Waste Collections
- 📢 Submit Reports (complaints, observations, etc.)
- 👥 Role-based Access (Resident, Collector, Admin)
- 📱 Responsive Design
- 🌐 Deployed on Render & Vercel

##  🚀 The Pitch deck

Here is my pitch deck link created using gamma app with all the details of my project.
- ** https://gamma.app/docs/Cover-Slide-rvz1f9jmz1spery
---

## 🛠 Tech Stack

| Layer       | Technology                  |
|------------|------------------------------|
| Frontend   | React, React Router, Vite     |
| Backend    | Node.js, Express              |
| Database   | MongoDB, Mongoose             |
| Auth       | JWT, bcrypt                   |
| Deployment | Vercel (frontend), Render (backend) |
| Styling    | Plain CSS (green theme)       |

---

## 📁 Project Structure

waste-management-system/
├── client/ (React Frontend)
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── context/
│ │ ├── styles/
│ │ ├── utils/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ ├── public/
│ ├── index.html
│ ├── .env (REACT_APP_API_URL)
│ └── vite.config.js
├── server/ (Node Backend)
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── config/db.js
│ ├── .env
│ └── server.js


🧪 Sample Credentials
You can register any role on the app. Here are sample roles:

Role	Use
Resident	Submit reports, view collections
Collector	View assigned waste collections
Admin	Full access (future scope)

📌 Future Improvements
Admin panel for all reports & collections

Assign collectors to tasks

Notifications & email reports

Image uploads for waste reports

Analytics dashboard (charts/maps)
