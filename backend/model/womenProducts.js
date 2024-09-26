const mongoose = require('mongoose');

const womenSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    colors: [{
        type: String
    }],
    image: {
        type: Map,
        of: String,
        required: true
    }
}, 
{ timestamps: true });

const Women = mongoose.model('Women', womenSchema);

module.exports = Women;
