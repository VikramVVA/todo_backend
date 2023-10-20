"use strict";
const UserController = require("../../controllers/usersController");
const Validation = require("../../helpers/validation");
const UsersValidator = require("../../helpers/validators/usersValidator");
const ErrorHandler = require("../../helpers/errorHandler");

module.exports = (app) => {
    app.route("/users/login").post(
        Validation.validateRequest,
        UsersValidator.login,
        UserController.login
    );

    app.route("/users/register").post(
        Validation.validateRequest,
        UsersValidator.register,
        UserController.registerUser
    );

    app.use(ErrorHandler);
};
