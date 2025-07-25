// const express = require('express');
// const router = express.Router();
// const { submitReport, getReports } = require('../controllers/reportController');
// const authMiddleware = require('../middleware/authMiddleware');

// router.post('/', authMiddleware, submitReport);
// router.get('/', authMiddleware, getReports); // Only accessible by admin in future

// module.exports = router;

const express = require('express');
const router = express.Router();
const { createReport, getUserReports } = require('../controllers/reportController');
const authMiddleware = require('../middleware/authMiddleware');

// POST /api/reports/add - Create a new report
router.post('/add', authMiddleware, createReport);     // POST /api/reports/add


// GET /api/reports/user - Get all reports for the logged-in user
router.get('/user', authMiddleware, getUserReports);

module.exports = router;
