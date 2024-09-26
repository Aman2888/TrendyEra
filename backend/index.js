const express = require('express');
const { conectMongoDb } = require('./connection');

const StoreRouter = require('./routes/store');
const JewelleryRouter = require('./routes/jewellery');
const HandbagsRouter = require('./routes/handbagsProduct');
const WomenProductRouter = require('./routes/womenProducts');
const ShoesProductRouter = require('./routes/shoesProducts');
const MakeupRouter = require('./routes/makeupData');
const cartRouter = require('./routes/cart');

const Jewellery = require('./model/jewellery'); 
const jewelleryData = require('./data/jewellery');
const HandbagsProduct = require('./model/handbagsProduct'); // Import Handbags model
const HandbagsProductData = require('./data/handbagsProducts'); // Handbags data
const WomenProductProduct = require('./model/womenProducts'); // Import WomenProduct model
const WomenProductProductData = require('./data/womenProducts'); // WomenProduct data
const ShoesProductProduct = require('./model/shoesProducts'); // Import ShoesProduct model
const ShoesProductProductData = require('./data/shoesProducts'); // ShoesProduct data
const MakeupData = require('./model/makeupData'); // Import ShoesProduct model
const MakeupDataProduct = require('./data/makeupData'); // ShoesProduct data

const cors = require('cors');
const app = express();
const PORT = 8000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Use routers
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API', version: '1.0' });
});
app.use('/stores', StoreRouter);
app.use('/jewellery', JewelleryRouter);
app.use('/handbagsProducts', HandbagsRouter);
app.use('/womenProducts', WomenProductRouter);
app.use('/shoesProducts', ShoesProductRouter);
app.use('/makeupData', MakeupRouter);
app.use('/cart', cartRouter);
app.use((req, res) => {
    res.status(404).send('Not Found');
});
// Connect to MongoDB
conectMongoDb('mongodb://127.0.0.1:27017/trendyEra')
    .then(() => {
        console.log("MongoDB Connected");
        insertJewelleryData();
        insertHandbagsProductData();
        insertWomenProductData();
        insertShoesProductData();
        insertMakeupData();
    })
    .catch((error) => console.error("MongoDB connection failed:", error));

// Function to insert Jewelry data
const insertJewelleryData = async () => {
    try {
        const existingProducts = await Jewellery.countDocuments();
        if (existingProducts > 0) {
            console.log('Jewellery already exists in the database. Skipping data insertion.');
            return;
        }
        await Jewellery.insertMany(jewelleryData);
        console.log('Jewellery data inserted successfully.');
    } catch (error) {
        console.error('Error inserting jewellery data:', error);
    }
};

// Function to insert Handbags Product data
const insertHandbagsProductData = async () => {
    try {
        const existingProducts = await HandbagsProduct.countDocuments();
        if (existingProducts > 0) {
            console.log('HandbagsProduct already exist in the database. Skipping data insertion.');
            return;
        }
        await HandbagsProduct.insertMany(HandbagsProductData);
        console.log('HandbagsProduct data inserted successfully.');
    } catch (error) {
        console.error('Error inserting HandbagsProduct data:', error);
    }
};
// Function to insert Women Product data
const insertWomenProductData = async () => {
    try {
        const existingProducts = await WomenProductProduct.countDocuments();
        if (existingProducts > 0) {
            console.log('Women products already exist in the database. Skipping data insertion.');
            return;
        }
        await WomenProductProduct.insertMany(WomenProductProductData);
        console.log('Women products data inserted successfully.');
    } catch (error) {
        console.error('Error inserting women products data:', error);
    }
};
// Function to insert Shoes Product data
const insertShoesProductData = async () => {
    try {
        const existingProducts = await ShoesProductProduct.countDocuments();
        if (existingProducts > 0) {
            console.log('ShoesProduct already exist in the database. Skipping data insertion.');
            return;
        }
        await ShoesProductProduct.insertMany(ShoesProductProductData);
        console.log('ShoesProduct data inserted successfully.');
    } catch (error) {
        console.error('Error inserting ShoesProduct data:', error);
    }
};
// Function to insert Makeup Product data
const insertMakeupData = async () => {
    try {
        const existingProducts = await MakeupData.countDocuments();
        if (existingProducts > 0) {
            console.log('Makeup already exist in the database. Skipping data insertion.');
            return;
        }
        await MakeupData.insertMany(MakeupDataProduct);
        console.log('Makeup data inserted successfully.');
    } catch (error) {
        console.error('Error inserting ShoesProduct data:', error);
    }
};

// Start the server
app.listen(PORT, () => console.log(`Server started at Port: ${PORT}`));
