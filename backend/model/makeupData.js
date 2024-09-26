const mongoose = require('mongoose');

const makeupSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    image: [{
        type: String,
    }],
},
    { timestamps: true }
);

const Makeup = mongoose.model('Makeup', makeupSchema);

module.exports = Makeup;
