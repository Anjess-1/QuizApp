
module.exports = app => {
    const userController = require("../controller/user.controller")

    app.post("/user", userController.createUser);

}