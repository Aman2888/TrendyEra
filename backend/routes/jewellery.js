const express = require('express');
const router = express.Router();
const Jewellery = require('../model/jewellery');

// GET route to fetch all jewellery items
router.get('/', async (req, res) => {
    try {
        const jewelleryItems = await Jewellery.find();
        res.json(jewelleryItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET route to fetch a specific jewellery item by ID
router.get('/:id', async (req, res) => {
    try {
        const jewelleryItem = await Jewellery.findById(req.params.id);
        if (jewelleryItem) {
            res.json(jewelleryItem);
        } else {
            res.status(404).json({ message: 'Jewellry item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;