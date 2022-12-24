const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    games: {
        type : Array
    }
})

module.exports = mongoose.model('User', userSchema);