const db = require('../config/connection')
const collections = require('../config/collections')


module.exports = {

    addUserInfo: (userDetails) => {
        return new Promise((resolve, reject) => {
            db.collection(collections.LIVE_COLLECTIONS).insertOne(userDetails).then((response) => {
                resolve(response)
            })
        })
    },

    getAllUsers: () => {
        return new Promise((resolve, reject) => {
            db.collection(collections.LIVE_COLLECTIONS).find().toArray().then((userData) => {
                resolve(userData)
            })
        })
    },

    getAllMentors: () => {
        return new Promise(async (resolve, reject) => {
            await db.collection(collections.LIVE_COLLECTIONS).find({ role: "Mentor" }).toArray().then((mentors) => {
                console.log("Mentors are:", mentors)
                resolve(mentors)
            }).catch((err) => {
                console.log("mentors collection error", err)
                reject(err)
            })
        })
    },

    getAllLearners: ()=>{
        return new Promise(async(resolve, reject) => {
            await db.collection(collections.LIVE_COLLECTIONS).find({$or: [{ role: "Learning" },{ role: "Building a Project" }]}).toArray().then((learners)=>{
                console.log("Learners are:", learners)
                resolve(learners)
            }).catch((err)=>{
                console.log("Listener collection error", err)
                reject(err)
            })
        })
    },

    getAllExplores: () => {
        return new Promise(async (resolve, reject) => {
            await db.collection(collections.LIVE_COLLECTIONS).find({ role: "Explore" }).toArray().then((explores) => {
                console.log("Explorers are:", explores)
                resolve(explores)
            }).catch((err) => {
                console.log("explores collection error", err);
                reject(err)
            })
        })
    },

    dropCollection: () => {
        return new Promise((resolve, reject) => {
            db.collection(collections.LIVE_COLLECTIONS).drop().then((response) => {
                resolve(response)
            })
        })
    }

}