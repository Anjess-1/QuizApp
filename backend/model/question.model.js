const mongoose = require('mongoose');

let questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    option: {
        type: Array
    },
    answer: {
        type: Array,
    },
    adminId: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('question', questionSchema)