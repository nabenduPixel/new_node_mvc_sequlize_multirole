
module.exports = app => {
    const UserController = require("../app/Http/Controllers/user.controller");

    var router = require("express").Router();
    
     router.post("/auth/user-registration", UserController.registration);

     app.use('/api', router);
}