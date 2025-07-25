// const Collection = require('../models/Collection');

// // Fetch all collections of logged-in user
// const getUserCollections = async (req, res) => {
//   try {
//     const collections = await Collection.find({ userId: req.user.id });
//     res.status(200).json(collections);
//   } catch (err) {
//     res.status(500).json({ msg: 'Failed to fetch collections' });
//   }
// };

// // (Optional) Create collection entry
// const createCollection = async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     const newCollection = await Collection.create({
//       userId: req.user.id,
//       title,
//       description
//     });
//     res.status(201).json(newCollection);
//   } catch (err) {
//     res.status(500).json({ msg: 'Failed to create collection' });
//   }
// };

// // (Optional) Admin view of all collections
// const getAllCollections = async (req, res) => {
//   try {
//     const all = await Collection.find().populate('userId', 'name email');
//     res.status(200).json(all);
//   } catch (err) {
//     res.status(500).json({ msg: 'Error fetching all collections' });
//   }
// };

// module.exports = {
//   getUserCollections,
//   createCollection,
//   getAllCollections
// };

const Collection = require('../models/Collection');

// ✅ Create a new collection
const createCollection = async (req, res) => {
  try {
    console.log('✅ Creating collection for:', req.user.email);
    console.log('📦 Payload:', req.body);

    const { title, description } = req.body;

    const collection = new Collection({
      title,
      description,
      userId: req.user.id, // ✅ match your schema
    });

    await collection.save();
    res.status(201).json({ msg: 'Collection recorded successfully', collection });
    alert('💚Collection added successfully!'); // Optional: Alert user
  } catch (err) {
    console.error('❌ Error creating collection:', err.message);
    res.status(500).json({ msg: 'Failed to record collection', error: err.message });
  }
};

// ✅ Get all collections (admin/global view)
const getAllCollections = async (req, res) => {
  try {
    const collections = await Collection.find().populate('userId', 'name email');
    res.status(200).json(collections);
  } catch (err) {
    console.error('❌ Error fetching all collections:', err.message);
    res.status(500).json({ msg: 'Failed to fetch collections', error: err.message });
  }
};

// ✅ Get collections by the currently logged-in user
const getUserCollections = async (req, res) => {
  try {
    const collections = await Collection.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(collections);
  } catch (err) {
    console.error('❌ Error fetching user collections:', err.message);
    res.status(500).json({ msg: 'Failed to fetch user collections', error: err.message });
  }
};

module.exports = {
  createCollection,
  getAllCollections,
  getUserCollections,
};
