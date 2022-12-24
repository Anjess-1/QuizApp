const userModel = require("../model/user.model")

exports.createUser = (req, res) => {
    const user = new userModel({
        name: req.body.name,
        email: req.body.email
    })
    user.save()
        .then(() => {
            console.log("User created successfully")
        })
        .catch((err => {
            console.log(`Error: ${err}`);
            return res.status(500).json({
                "code": 500,
                "message": "Internal Server Error"
            })
        }))
    return res.status(200).json({
        "code": 200,
        "message": "Admin Created Successfully"
    })
}
