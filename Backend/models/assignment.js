// Initialize Mongoose
const mongoose = require('mongoose');

// const assignmentSchema = new mongoose.Schema({
//   course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   dueDate: { type: Date, required: true }
// });

// module.exports = mongoose.model('Assignment', assignmentSchema);



//updated assignment schema
const assignmentSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  assignedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model for lecturers
    required: true
  },
  submissionStatus: {
    type: String, // 'pending', 'submitted', 'graded'
    enum: ['pending', 'submitted', 'graded'],
    default: 'pending'
  },
  submissionURL: {
    type: String // URL for the submission
  },
  totalMarks: {
    type: Number // Maximum marks for the assignment
  }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt timestamps

module.exports = mongoose.model('Assignment', assignmentSchema);
