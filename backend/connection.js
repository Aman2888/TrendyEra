const mongoose = require('mongoose')

async function conectMongoDb(url) {
    return mongoose.connect(url)
}

module.exports={
    conectMongoDb
}