const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const { authenticate, authorize } = require('./authmiddleware');

// Create student
router.post('/', async (req, res) => {
    const student = new Student(req.body);
    try {
        const savedStudent = await student.save();
        res.status(201).json(savedStudent);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all students
router.get('/',authenticate, authorize('admin', 'lecturer'), async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a single student
router.get('/:id', async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.json(student);
});

// Update student
router.put('/:id', async (req, res) => {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedStudent);
});

// Delete student
router.delete('/:id',authenticate, authorize('admin'), async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: 'Student deleted' });
});

//Search student
router.get('/', authenticate, authorize('admin', 'lecturer'), async (req, res) => {
    const { name, email } = req.query;

    let query = {};
    if (name) query.name = { $regex: name, $options: 'i' }; // Case-insensitive search
    if (email) query.email = { $regex: email, $options: 'i' };

    try {
        const students = await Student.find(query);
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//Pagination
router.get('/', authenticate, authorize('admin', 'lecturer'), async (req, res) => {
    const { page = 1, limit = 10 } = req.query;

    try {
        const students = await Student.find()
            .skip((page - 1) * limit)
            .limit(parseInt(limit));
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
