const express = require('express');
const router = express.Router();
const Announcement = require('../models/announcement');

// Create announcement
router.post('/', async (req, res) => {
    const announcement = new Announcement(req.body);
    try {
        const savedAnnouncement = await announcement.save();
        res.status(201).json(savedAnnouncement);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all announcements
router.get('/', async (req, res) => {
    const announcements = await Announcement.find();
    res.json(announcements);
});

// Get a single announcement
router.get('/:id', async (req, res) => {
    const announcement = await Announcement.findById(req.params.id);
    res.json(announcement);
});

// Update announcement
router.put('/:id', async (req, res) => {
    const updatedAnnouncement = await Announcement.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedAnnouncement);
});

// Delete announcement
router.delete('/:id', async (req, res) => {
    await Announcement.findByIdAndDelete(req.params.id);
    res.json({ message: 'Announcement deleted' });
});

module.exports = router;
