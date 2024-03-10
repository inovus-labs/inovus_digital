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

    getAllUsers: () =>{
        return new Promise((resolve, reject)=>{
            db.collection(collections.LIVE_COLLECTIONS).find().toArray().then((userData)=>{
                resolve(userData)
            })
        })
    },

    dropCollection: () =>{
        return new Promise((resolve, reject)=>{
            db.collection(collections.LIVE_COLLECTIONS).drop().then((response)=>{
                resolve(response)
            })
        })
    }

}