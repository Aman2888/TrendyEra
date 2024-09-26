const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
   
    image: [{
        type: String,
    }],
},
    { timestamps: true }
);

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
