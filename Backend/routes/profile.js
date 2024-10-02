const express = require('express');
const router = express.Router();
const Profile = require('../models/profile');

// Create profile
router.post('/', async (req, res) => {
    const profile = new Profile(req.body);
    try {
        const savedProfile = await profile.save();
        res.status(201).json(savedProfile);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all profiles
router.get('/', async (req, res) => {
    const profiles = await Profile.find();
    res.json(profiles);
});

// Get a single profile
router.get('/:id', async (req, res) => {
    const profile = await Profile.findById(req.params.id);
    res.json(profile);
});

// Update profile
router.put('/:id', async (req, res) => {
    const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProfile);
});

// Delete profile
router.delete('/:id', async (req, res) => {
    await Profile.findByIdAndDelete(req.params.id);
    res.json({ message: 'Profile deleted' });
});

module.exports = router;
