const express = require('express');
const router = express.Router();
const Handbags = require('../model/handbagsProduct');

// GET route to fetch all handbagsItems 
router.get('/', async (req, res) => {
    try {
        const handbagsItems = await Handbags.find();
        res.json(handbagsItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET route to fetch a specific handbagsItems by ID
router.get('/:id', async (req, res) => {
    try {
        const handbagsItems = await Handbags.findById(req.params.id);
        if (handbagsItems) {
            res.json(handbagsItems);
        } else {
            res.status(404).json({ message: 'handbags item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;