const adminModel = require("../model/admin.model")
const md5 = require('md5')
const authManager = require('../utility/auth')
const utils = require('../utility/utils');

exports.createAdmin = (req, res, next) => {
    try {
        const admin = new adminModel({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password)
        })

        admin.save()
            .then(() => {
                console.log("Admin created succesfully");
            })
            .catch((err) => {
                utils.createCustomError(500, "Internal Server Error")
            })
        return res.status(200).json({
            "code": 200,
            "message": "Admin Created Successfully"
        })
    } catch (error) {
        next(error)
    }
}

exports.deletAdmin = (req, res, next) => {
    try {
        adminModel.deleteOne({ email: req.body.email })
            .then(() => {
                console.log("Admin is deleted successfully")
            })
            .catch((err) => {
                utils.createCustomError(500, "Internal Server Error")
            })
        return res.status(200).json({
            "code": 200,
            "message": "Admin deleted successfully"
        })
    } catch (error) {
        next(error)
    }
}

exports.adminLogin = (req, res, next) => {
    try {
        let admin;
    adminModel.findOne({
        $and: [
            { email: req.body.email },
            { password: md5(req.body.password) }
        ]
    })
        .then((result) => {
            if (result) {
                const payload = {
                    adminId: result._id,
                    role: "admin",
                    iat: (new Date).getTime()
                }
                const token = authManager.createJWT(payload)
                console.log(token)
                res.status(200).json({
                    "code": 200,
                    "message": "Admin is login successfully",
                    "token": token
                })
            } else {
                utils.createCustomError(401, "Invalid Username/Password");
            }
            console.log("Admin LogIn Successfully")
        })
        .catch((error) => {
            next(error);
        })
    return res;
    } 
    catch (error) {
        next(error)
    }
    
}