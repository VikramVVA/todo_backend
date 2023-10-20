"use strict";

const { body, header } = require("express-validator");

const login = [
    body("email")
        .exists({ checkNull: true })
        .withMessage("Email id is required")
        .isEmail()
        .withMessage("Please enter a proper email id"),
    body("password")
        .exists({ checkNull: true })
        .withMessage("Password is required"),
];

const register = [
    body("email")
        .exists({ checkNull: true })
        .withMessage("Email id is required")
        .isEmail()
        .withMessage("Please enter a proper email id"),
    body("password")
        .exists({ checkNull: true })
        .withMessage("Password is required"),
    body("firstname")
        .exists({ checkNull: true })
        .withMessage("Firstname is required"),
    body("lastname")
        .exists({ checkNull: true })
        .withMessage("Lastname is required"),
];

module.exports = {
    login: login,
    register: register,
};
