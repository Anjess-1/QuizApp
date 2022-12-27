const mongoose = require("mongoose");

let quizSchema = new mongoose.Schema({

    quizTitle: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: true
    },
    adminId: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: false
    },
    questions: {
        type: Array
    }
})

module.exports = mongoose.model('quiz', quizSchema)