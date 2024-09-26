const mongoose = require('mongoose');

const shoesSchema = new mongoose.Schema({
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

const Shoes = mongoose.model('shoes', shoesSchema);

module.exports = Shoes;
