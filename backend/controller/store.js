const Store = require('../model/store');

// Get all stores
async function getAllStores(req, res) {
    try {
        const dbStores = await Store.find({});
        return res.json(dbStores);
    } catch (error) {
        return res.status(500).json({ error: "Error retrieving stores" });
    }
}

async function updateStoreById(req, res) {
    try {
        const store = await Store.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!store) {
            return res.status(404).json({ error: "Store Not Found" });
        }
        return res.json({ status: "success", updatedStore: store });
    } catch (error) {
        return res.status(500).json({ error: "Error updating store" });
    }
}

module.exports = {
    getAllStores,
    updateStoreById,
};
