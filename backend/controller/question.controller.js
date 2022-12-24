const questionModel = require('../model/question.model');

exports.createQuestion = (req, res) => {
    const question = new questionModel({
        question: req.body.question,
        type: req.body.type,
        level: req.body.level,
        option: req.body.option,
        answer: req.body.answer,
        adminId: req.body.adminId,
        subject: req.body.subject
    })
    question.save()
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