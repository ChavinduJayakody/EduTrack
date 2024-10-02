// Initialize Mongoose
const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  assignment: { type: mongoose.Schema.Types.ObjectId, ref: 'Assignment', required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  grade: { type: String, required: true }
});

module.exports = mongoose.model('Result', resultSchema);