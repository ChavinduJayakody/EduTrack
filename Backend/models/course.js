// Initialize Mongoose
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  lecturer: { type: mongoose.Schema.Types.ObjectId, ref: 'Lecturer' },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  assignments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Assignment' }]
});

module.exports = mongoose.model('Course', courseSchema);