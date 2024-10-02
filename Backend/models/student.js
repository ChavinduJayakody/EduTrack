// Initialize Mongoose
const mongoose = require('mongoose');
const User = require('./user');

// const studentSchema = new mongoose.Schema({
//   profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true },
//   courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
// });

// module.exports = mongoose.model('Student', studentSchema);

//updated student schema
const studentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  enrollmentNumber: {
    type: String,
    required: true,
    unique: true
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
});

// Create a composite model
module.exports = mongoose.model('Student', studentSchema);