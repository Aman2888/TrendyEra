const mongoose = require('mongoose');

const handbagsSchema = new mongoose.Schema({
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

const Handbags = mongoose.model('handbags', handbagsSchema);

module.exports = Handbags;
