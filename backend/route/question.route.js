const middleware = require('../utility/middleware')

module.exports = app => {
    const questionController = require("../controller/question.controller")

    app.post("/question",
    middleware.validateToken,
    middleware.validateAsAdmin,
    questionController.createQuestion)

    app.get("/getQuestion",
    middleware.validateToken,
    middleware.validateAsUser, questionController.getQuestion)
}
