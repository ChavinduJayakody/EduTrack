// Initialize Mongoose
const mongoose = require('mongoose');

// const profileSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   name: { type: String, required: true },
//   age: { type: Number },
//   address: { type: String },
//   phoneNumber: { type: String }
// });

// module.exports = mongoose.model('Profile', profileSchema);


//updated profile schema
const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String },
  address: { type: String }
});

// Create a composite model
module.exports = mongoose.model('Profile', profileSchema);