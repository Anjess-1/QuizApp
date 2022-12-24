const adminModel = require("../model/admin.model")
const md5 = require('md5')

exports.createAdmin = (req, res) => {
    const admin = new adminModel({
        name: req.body.name,
        email: req.body.email,
        password: md5(req.body.password)
    })

    admin.save()
    .then(()=>{
        console.log("Admin created succesfully");
    })
    .catch((err)=>{
        console.log(`Error: ${err}`);
        return res.status(500).json({
            "code" : 500,
            "message" : "Internal Server Error"
        })
    })
    return res.status(200).json({
        "code" : 200,
        "message" : "Admin Created Successfully"
    })
}

exports.deletAdmin = (req, res) => {
    adminModel.deleteOne({ email: req.body.email })
    .then(() => {
        console.log("Admin is deleted successfully")
    })
    .catch((err) => {
        console.log(`Error: ${err}`)
        return res.status(500).json({
            "code" :500,
            "message": "Internal Server Error"
        })
    })
    return res.status(200).json({
        "code": 200,
        "message": "Admin deleted successfully"
    })
}

exports.adminLogin = (req, res) => {
    let admin;
    adminModel.findOne({ $and: [
        { email: req.body.email },
        { password : md5(req.body.password) }
    ]})
    .then((result) => {
        admin = result;
        console.log("Admin LogIn Successfully")
    })
    .catch((err) => {
        console.log(`Error : ${err}`)
    })
    if(!admin){
        return res.status(401).json({
            "code" : 401,
            "message" : "Invalid Username/Password"
        })
    }
    return res.status(200).json({
        "code": 200,
        "message": "Admin is login successfully"
    })
}