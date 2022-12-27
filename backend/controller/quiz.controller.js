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
            status: "ACTIVE",
            adminId: res.locals.jwtPayload.adminId,
            subject: req.body.subject,
        })

        quiz.save()
            .then(() => {
                console.log("Quiz created successfully")
            })
            .catch((err) => {
                next(err)
            })
        return res.status(200).json({
            "code": 200,
            "message": "Quiz created successfully",
            "quizId": quiz._id
        })
    } catch (error) {
        next(error)
    }

}

exports.quizByAdminId = (req, res, next) => {
    try {
        quizModel.find({
            adminId: res.locals.jwtPayload.adminId
        })
            .then((result) => {
                res.status(200).json({
                    "code": 200,
                    "data": result
                })
            })
            .catch((err) => {
                next(err)
            })
        return res

    } catch (error) {
        next(error)
    }

}