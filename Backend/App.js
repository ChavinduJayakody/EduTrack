// environment variables
require('dotenv').config()

// require dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');


//express app
const app = express()

// middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());  // Cross-Origin Resource Sharing
app.use(helmet());  // Secure HTTP headers
app.use(morgan('tiny'));  // Log HTTP requests

// import routes
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const studentRoutes = require('./routes/student');
const lecturerRoutes = require('./routes/lecturer');
const courseRoutes = require('./routes/course');
const assignmentRoutes = require('./routes/assignment');
const resultRoutes = require('./routes/result');
const announcementRoutes = require('./routes/announcement');

//routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/profiles', require('./routes/profile'));
app.use('/api/students', require('./routes/student'));
app.use('/api/lecturers', require('./routes/lecturer'));
app.use('/api/courses', require('./routes/course'));
app.use('/api/assignments', require('./routes/assignment'));
app.use('/api/results', require('./routes/result'));
app.use('/api/announcements', require('./routes/announcement'));


// Default Route
app.get('/', (req, res) => {
    res.send('EduTrack API is running!');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'Internal Server Error',
        error: process.env.NODE_ENV === 'production' ? null : err.message,
    });
});

// MongoDB connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('MongoDB Connection Error: ', err);
        process.exit(1);  // Exit process if MongoDB fails to connect
    }
};

// Start the server and connect to DB
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectDB();  // Initiate database connection
});