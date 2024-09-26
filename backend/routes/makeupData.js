const express = require('express');
const router = express.Router();
const Makeup = require('../model/makeupData');

// GET route to fetch all Makeup items
router.get('/', async (req, res) => {
    try {
        const makeupItems = await Makeup.find();
        res.json(makeupItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET route to fetch a specific Makeup item by ID
router.get('/:id', async (req, res) => {
    try {
        const makeupItem = await Makeup.findById(req.params.id);
        if (makeupItem) {
            res.json(makeupItem);
        } else {
            res.status(404).json({ message: 'Makeup item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;