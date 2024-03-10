
require("dotenv").config()
const mongoose = require('mongoose');
const userHelpers = require('./helpers/user_helpers.js')


mongoose.connect(process.env.MONGODB_URI)
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
