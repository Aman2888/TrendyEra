const mongoose = require('mongoose');

const jewellerySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: [{
        type: String,
    }],
},
    { timestamps: true }
);

const Jewellery = mongoose.model('jewellery', jewellerySchema);

module.exports = Jewellery;
