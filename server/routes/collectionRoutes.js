const express = require('express');
const router = express.Router();
const {
  createCollection,
  getAllCollections,
  getUserCollections,
} = require('../controllers/collectionController');

const authMiddleware = require('../middleware/authMiddleware');

// Protected: Submit new collection
router.post('/add', authMiddleware, createCollection); // POST /api/collection/add


// Public: View all collections (admin maybe)
router.get('/', getAllCollections);

// ✅ Protected: Get logged-in user's collections
router.get('/user', authMiddleware, getUserCollections);

module.exports = router;
