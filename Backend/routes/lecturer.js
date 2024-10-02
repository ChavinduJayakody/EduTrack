const express = require('express');
const router = express.Router();
const Lecturer = require('../models/lecturer');

// Create lecturer
router.post('/', async (req, res) => {
    const lecturer = new Lecturer(req.body);
    try {
        const savedLecturer = await lecturer.save();
        res.status(201).json(savedLecturer);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all lecturers
router.get('/', async (req, res) => {
    const lecturers = await Lecturer.find();
    res.json(lecturers);
});

// Get a single lecturer
router.get('/:id', async (req, res) => {
    const lecturer = await Lecturer.findById(req.params.id);
    res.json(lecturer);
});

// Update lecturer
router.put('/:id', async (req, res) => {
    const updatedLecturer = await Lecturer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedLecturer);
});

// Delete lecturer
router.delete('/:id', async (req, res) => {
    await Lecturer.findByIdAndDelete(req.params.id);
    res.json({ message: 'Lecturer deleted' });
});

module.exports = router;
