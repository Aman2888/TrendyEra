const express = require('express');
const router = express.Router();
const Women = require('../model/womenProducts');

// GET route to fetch all handbagsItems 
router.get('/', async (req, res) => {
    try {
        const womenItems = await Women.find();
        res.json(womenItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET route to fetch a specific handbagsItems by ID
router.get('/:id', async (req, res) => {
    try {
        const womenItems = await Women.findById(req.params.id);
        if (womenItems) {
            res.json(womenItems);
        } else {
            res.status(404).json({ message: 'Women item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;