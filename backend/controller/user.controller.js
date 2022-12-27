const userModel = require("../model/user.model")
const utils = require('../utility/utils')
const authManager = require('../utility/auth')
const { errorHandler } = require("../utility/error.handler")

exports.createUser = (req, res, next) => {
    try {
        const user = new userModel({
            name: req.body.name,
            email: req.body.email
        })
        user.save()
            .then(() => {
                console.log("User created successfully")
            })
            .catch((err => {
                next(err)
            }))
        return res.status(200).json({
            "code": 200,
            "message": "User Created Successfully"
        })
    } catch (error) {
        next(error)
    }

}

exports.userLogin = (req, res, next) => {
    try {
        if(!req.body.email){
            utils.createCustomError(400, "Email is null");
        }
        userModel.findOne(
            {
                email: req.body.email
            })
            .then((result) => {
                let payload = {
                    userId: null,
                    role: "user",
                    iat: (new Date()).getTime()
                }
                if (result) {
                    payload['userId'] =result._id;
                }
                else{
                    const user = new userModel({
                        name: "req.body.name",
                        email: req.body.email
                    })
                    user.save()
                        .then(() => {
                            console.log("User created successfully")
                        })
                        .catch((err => {
                            next(err)
                        })) 
                    payload['userId'] =user._id;
                }
                const token = authManager.createJWT(payload)
                res.status(200).json({
                    "code": 200,
                    "message": "user login successfully",
                    "token": token
                })

            })
    } catch (error) {
        next(error);
    }
}

exports.postScore = (req, res, next) => {
    try {
        console.log(res.locals.jwtPayload.userId);
        userModel.updateOne(
            {
                _id: res.locals.jwtPayload.userId
            },
            {
                $push: {games: {
                    quizId: req.body.quizId,
                    score: req.body.score,
                    quesAttempted: req.body.quesAttempted
                }}
            }
        ).then((result) => {
            console.log(result);
            console.log("update successfully")
        })
        .catch((error) => {
            next(error)
        })
        return res.status(200).json({
            code: 200,
            message: "Update Successfull"
        })
    } catch (error) {
        next(error)
    }
}
