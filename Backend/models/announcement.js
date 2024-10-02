const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  author: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',  // Assuming you have a User model
    required: true
  },
  visibility: {
    type: String, // 'public', 'students', 'lecturers', etc.
    enum: ['public', 'students', 'lecturers', 'admins'],
    default: 'public'
  },
  attachments: [{
    filename: String,
    url: String
  }],
  expiresAt: {
    type: Date  // Optional expiration date
  }
}, { timestamps: true });

module.exports = mongoose.model('Announcement', announcementSchema);
