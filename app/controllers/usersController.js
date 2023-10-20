const UsersModel = require("../models/users");
const { matchedData } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

var usersController = {
    login: async function (req, res, next) {
        try {
            const { email, password } = matchedData(req, {
                includeOptionals: false,
                onlyValidData: true,
                locations: ["body"],
            });

            const userData = await UsersModel.findOne({
                where: {
                    email: email,
                },
            });

            if (userData === null || userData === undefined) {
                res.json({
                    success: 0,
                    message: "User not found",
                }).status(200);
            } else {
                bcrypt.compare(
                    password,
                    userData.password,
                    function (err, result) {
                        if (err) {
                            return res
                                .status(500)
                                .json({ message: "Internal server error" });
                        }
                        if (!result) {
                            return res
                                .json({
                                    success: 0,
                                    message:
                                        "Entered password does not match!!",
                                })
                                .status(200);
                        } else {
                            let user = {
                                id: userData.id,
                                email: userData.email,
                                firstname: userData.firstname,
                                lastname: userData.lastname,
                            };

                            const token = jwt.sign(user, "mugiwaras", {
                                expiresIn: "8h",
                            });

                            return res
                                .json({
                                    success: 1,
                                    token: token,
                                    message: "Login successfull",
                                })
                                .status(200);
                        }
                    }
                );
            }
        } catch (error) {
            next(error);
        }
    },

    registerUser: async function (req, res, next) {
        try {
            const { email, password, firstname, lastname } = matchedData(req, {
                includeOptionals: false,
                onlyValidData: true,
                locations: ["body"],
            });

            const hashedPassword = bcrypt.hashSync(
                password,
                bcrypt.genSaltSync(10)
            );

            const newUserObject = {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: hashedPassword,
            };

            const createUser = await UsersModel.create(newUserObject);

            if (createUser) {
                res.json({
                    success: 1,
                    message: "User registered successfully",
                }).status(200);
            } else {
                res.json({
                    success: 0,
                    message: "Failed to register user",
                }).status(200);
            }
        } catch (error) {
            next(error);
        }
    },
};

module.exports = usersController;
