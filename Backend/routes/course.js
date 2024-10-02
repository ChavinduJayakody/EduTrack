const express = require('express');
const router = express.Router();
const Course = require('../models/course');

// Create course
router.post('/', async (req, res) => {
    const course = new Course(req.body);
    try {
        const savedCourse = await course.save();
        res.status(201).json(savedCourse);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all courses
router.get('/', async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
});

// Get a single course
router.get('/:id', async (req, res) => {
    const course = await Course.findById(req.params.id);
    res.json(course);
});

// Update course
router.put('/:id', async (req, res) => {
    const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCourse);
});

// Delete course
router.delete('/:id', async (req, res) => {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: 'Course deleted' });
});

module.exports = router;
