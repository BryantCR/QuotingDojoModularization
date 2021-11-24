const express = require("express");
const UserRouter = express.Router();
const {UserController} = require('./../controllers/UserController');

UserRouter
    .get("/gohome", UserController.gohome);
UserRouter
    .post( '/quotes', UserController.addquote );
module.exports = {UserRouter}