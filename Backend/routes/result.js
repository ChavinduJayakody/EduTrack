const express = require('express');
const router = express.Router();
const Result = require('../models/result');

// Create result
router.post('/', async (req, res) => {
    const result = new Result(req.body);
    try {
        const savedResult = await result.save();
        res.status(201).json(savedResult);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all results
router.get('/', async (req, res) => {
    const results = await Result.find();
    res.json(results);
});

// Get a single result
router.get('/:id', async (req, res) => {
    const result = await Result.findById(req.params.id);
    res.json(result);
});

// Update result
router.put('/:id', async (req, res) => {
    const updatedResult = await Result.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedResult);
});

// Delete result
router.delete('/:id', async (req, res) => {
    await Result.findByIdAndDelete(req.params.id);
    res.json({ message: 'Result deleted' });
});

module.exports = router;
