const express = require('express');
const router = express.Router();
const Shoes = require('../model/shoesProducts');

// GET route to fetch all Shoes 
router.get('/', async (req, res) => {
    try {
        const shoesItems = await Shoes.find();
        res.json(shoesItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET route to fetch a specific Shoes by ID
router.get('/:id', async (req, res) => {
    try {
        const shoesItems = await Shoes.findById(req.params.id);
        if (shoesItems) {
            res.json(shoesItems);
        } else {
            res.status(404).json({ message: 'Shoes item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;