
require("dotenv").config()
const mongoose = require('mongoose');
const userHelpers = require('./helpers/user_helpers.js')


mongoose.connect(process.env.MONGODB_URL)
    .then(() => {

        console.log("\n--- Connected to MongoDB Atlas");

        userHelpers.dropCollection().then(() => {
            console.log("--- Data deleted successfully\n");
        }).catch((error) => {
            console.log("--- Error deleting all users\n", error);
        });

    }).catch((error) => {
        console.log("\n --- Error connecting to MongoDB Atlas\n", error);
    });


setTimeout(() => {
    process.exit()
}, 5000);
