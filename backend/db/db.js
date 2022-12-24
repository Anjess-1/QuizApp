let mongoose = require('mongoose')

const server = '127.0.0.1:27017'; 
const database = 'quiz';     

class Database {
    constructor(){
        this._connect()
    }

    _connect() {
        mongoose.connect(`mongodb://${server}/${database}`)
        .then(() => {
            console.log("database is connected successfully")
        })
        .catch((err) => {
            console.error("database is NOT connected")
        })
    }
}

module.exports = new Database()
