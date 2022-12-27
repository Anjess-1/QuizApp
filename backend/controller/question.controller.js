const questionModel = require('../model/question.model');
const utils = require('../utility/utils')

exports.createQuestion = (req, res, next) => {
    try {
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
                next(err)
            })
        return res.status(200).json({
            "code": 200,
            "message": "Question created successfully"
        })
    } catch (error) {
        next(error)
    }

}

exports.getQuestion = (req, res, next) => {
    try {
        if (!req.query.subject) {
            questionModel.aggregate([
                {
                    $match: {
                        level: req.query.level
                    }
                },
                {
                    $sample: {
                        size: 1
                    }
                }
            ])
                .then((result) => {
                    res.status(200).json({
                        "code": 200,
                        "data": result
                    })
                })
                .catch((err) => {
                    next(err)
                })
            return res;
        }

    } catch (error) {
        next(error)
    }

}