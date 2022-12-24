module.exports = app => {
    const adminController = require("../controller/admin.controller")

    app.post("/admin",adminController.createAdmin );

    app.delete("/admin",adminController.deletAdmin );

    app.post("/admin/login", adminController.adminLogin)
}