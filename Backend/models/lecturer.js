// Initialize Mongoose
const mongoose = require('mongoose');
const User = require('./user'); // Import the User model


// const lecturerSchema = new mongoose.Schema({
//   profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true },
//   courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
// });

// module.exports = mongoose.model('Lecturer', lecturerSchema);

//updated lecturer schema
const lecturerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  department: {
    type: String,
    required: true
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
});

// Create a composite model
module.exports = mongoose.model('Lecturer', lecturerSchema);
