const middleware = require('../utility/middleware')

module.exports = app => {
    const quizControler = require("../controller/quiz.controller")

    app.post("/quiz", 
        middleware.validateToken, 
        middleware.validateAsAdmin,
        quizControler.createQuiz
    )

    app.get("/quiz/getQuizByAdminId/:adminId",
    middleware.validateToken,
    middleware.validateAsAdmin, 
    quizControler.quizByAdminId)
}