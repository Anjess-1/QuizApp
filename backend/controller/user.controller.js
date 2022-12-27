const userModel = require("../model/user.model")
const utils = require('../utility/utils')

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
                utils.createCustomError(500, "Internal Server Error")
            }))
        return res.status(200).json({
            "code": 200,
            "message": "User Created Successfully"
        })
    } catch (error) {
        next(error)
    }

}
