const db = require('../config/connection')
const collections = require('../config/collections')
const { ObjectId } = require('mongodb')

module.exports = {

    addUserInfo: (userDetails) => {
        return new Promise((resolve, reject) => {
            db.collection(collections.USER_COLLECTIONS).insertOne(userDetails).then((response) => {
                resolve(response)
            })
        })
    },

    getAllUsers: ()=>{
        return new Promise((resolve, reject)=>{
            db.collection(collections.USER_COLLECTIONS).find().toArray().then((userData)=>{
                resolve(userData)
            })
        })
    }
}