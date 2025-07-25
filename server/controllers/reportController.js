// // const Report = require('../models/Report');

// // const submitReport = async (req, res) => {
// //   try {
// //     const { type, message } = req.body;
// //     const report = await Report.create({
// //       type,
// //       message,
// //       submittedBy: req.user.id
// //     });

// //     res.status(201).json(report);
// //   } catch (err) {
// //     res.status(500).json({ msg: 'Failed to submit report', error: err.message });
// //   }
// // };

// // const getReports = async (req, res) => {
// //   try {
// //     const reports = await Report.find().populate('submittedBy', 'name email');
// //     res.json(reports);
// //   } catch (err) {
// //     res.status(500).json({ msg: 'Failed to fetch reports', error: err.message });
// //   }
// // };

// // module.exports = { submitReport, getReports };
// const Report = require('../models/Report');

// // Create a new report
// const createReport = async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     const report = new Report({
//       title,
//       description,
//       user: req.user.id,
//     });
//     await report.save();
//     res.status(201).json({ msg: '✅Report submitted successfully', report });
//   } catch (err) {
//     res.status(500).json({ msg: '❌Failed to submit report', error: err.message });
//   }
// };

// // Get all reports (admin view maybe)
// const getAllReports = async (req, res) => {
//   try {
//     const reports = await Report.find().populate('user', 'name email');
//     res.status(200).json(reports);
//   } catch (err) {
//     res.status(500).json({ msg: 'Failed to fetch reports', error: err.message });
//   }
// };

// // ✅ Get reports by currently logged-in user
// const getUserReports = async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const reports = await Report.find({ user: userId });
//     res.status(200).json(reports);
//   } catch (err) {
//     res.status(500).json({ msg: 'Failed to fetch user reports', error: err.message });
//   }
// };

// module.exports = {
//   createReport,
//   getAllReports,
//   getUserReports,
// };
const Report = require('../models/Report');

const createReport = async (req, res) => {
  try {
     console.log('REQ.USER:', req.user); // ✅ Debug
    console.log('REQ.BODY:', req.body); // ✅ Debug
    
    const { title, description } = req.body;
    const newReport = new Report({
      user: req.user.id,
      title,
      description
    });
    await newReport.save();
    res.status(201).json({ msg: 'Report created successfully', report: newReport });
  } catch (err) {
    console.error('Error creating report:', err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

const getUserReports = async (req, res) => {
  try {
    const reports = await Report.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(reports);
  } catch (err) {
    console.error('Error fetching reports:', err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { createReport, getUserReports };
