const quizModel = require('../model/quiz.model')

exports.createQuiz = (req, res) => {
    const quiz = new quizModel({
        quizTitle: req.body.quizTitle,
        link: "req.body.link",
        status: "req.body.status",
        adminId: "req.body.adminId",
        subject: req.body.subject,
        questions: req.body.questions
    })

    quiz.save()
        .then(() => {
            console.log("Question created successfully")
        })
        .catch((err) => {
            console.log(`Erroe: ${err}`)
            return res.status(500).json({
                "code": 500,
                "message": "Internal Server Error"
            })
        })
    return res.status(200).json({
        "code": 200,
        "message": "Question created successfully"
    })
}

exports.quizByAdminId = (req, res) => {
    quizModel.find({
        adminId: req.params.adminId
    })
    .then((result)=>{
        res.status(200).json({
            "code": 200,
            "data": result
        })
    })
    .catch((err) => {
        res.status(500).json({
            "code": 500,
            "message": "Internal Server Error"
        })
    })
    return

}