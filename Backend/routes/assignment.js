const express = require('express');
const router = express.Router();
const Assignment = require('../models/assignment');

// Create assignment
router.post('/', async (req, res) => {
    const assignment = new Assignment(req.body);
    try {
        const savedAssignment = await assignment.save();
        res.status(201).json(savedAssignment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all assignments
router.get('/', async (req, res) => {
    const assignments = await Assignment.find();
    res.json(assignments);
});

// Get a single assignment
router.get('/:id', async (req, res) => {
    const assignment = await Assignment.findById(req.params.id);
    res.json(assignment);
});

// Update assignment
router.put('/:id', async (req, res) => {
    const updatedAssignment = await Assignment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedAssignment);
});

// Delete assignment
router.delete('/:id', async (req, res) => {
    await Assignment.findByIdAndDelete(req.params.id);
    res.json({ message: 'Assignment deleted' });
});

module.exports = router;
