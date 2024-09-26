const express = require("express");
const { getAllStores, updateStoreById } = require('../controller/store');

const router = express.Router();

// Route to get all stores
router
    .route('/')
    .get(getAllStores);

// Route to update a store by ID
router
    .route("/:id")
    .patch(updateStoreById);

module.exports = router;
