const mongoose = require('mongoose');
// const url = "mongodb://127.0.0.1:27017/inovuslive";
const url = "mongodb+srv://milan-sony:hpWvfwIgWUQmIB3A@inovus-labs.lwks89q.mongodb.net/inovus_digital";

require("dotenv").config()

module.exports = {

    connect: () => {
        mongoose.connect(process.env.mongoDB_URL)
            .then(() => {
                console.log("Connected to MongoDB\n");
            }).catch((error) => {
                console.log("MongoDB not connected\n" + error);
            });
    },

    collection: (name) => {
        return mongoose.connection.db.collection(name);
    }
};