const middleware = require("../utility/middleware")
module.exports = app => {
    const userController = require("../controller/user.controller")

    app.post("/user", userController.createUser);

    app.post("/user/login", userController.userLogin)

    app.post("/user/postScore",
    middleware.validateToken,
    middleware.validateAsUser,
    userController.postScore)
}