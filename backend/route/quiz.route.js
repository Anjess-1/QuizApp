module.exports = app => {
    const quizControler = require("../controller/quiz.controller")

    app.post("/quiz", quizControler.createQuiz)

    app.get("/quiz/getQuizByAdminId/:adminId", quizControler.quizByAdminId)
}