const quizModel = require('../model/quiz.model')
const authManager = require('../utility/auth')
const utils = require('../utility/utils');

exports.createQuiz = (req, res, next) => {
    try {
        // const getTokenValue = req.headers.jwt;
        // const validateResult = authManager.validateToken(getTokenValue)
        // if (!validateResult) {
        //     utils.createCustomError(403, "jwt is invalid/expired")
        // }
        const quiz = new quizModel({
            quizTitle: req.body.quizTitle,
            link: req.body.link,
            status: "req.body.status",
            adminId: res.locals.jwtPayload.adminId,
            subject: req.body.subject,
        })

        quiz.save()
            .then(() => {
                console.log("Quiz created successfully")
            })
            .catch((err) => {
                utils.createCustomError(500, "Internal Server Error")
            })
        return res.status(200).json({
            "code": 200,
            "message": "Quiz created successfully"
        })
    } catch (error) {
        next(error)
    }

}

exports.quizByAdminId = (req, res, next) => {
    try {
        quizModel.find({
            adminId: req.params.adminId
        })
            .then((result) => {
                res.status(200).json({
                    "code": 200,
                    "data": result
                })
            })
            .catch((err) => {
                utils.createCustomError(500, "Internal Server Error")
            })
        return res

    } catch (error) {
        next(error)
    }

}