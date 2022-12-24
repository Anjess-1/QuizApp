module.exports = app => {
    const questionController = require("../controller/question.controller")

    app.post("/question", questionController.createQuestion)
}