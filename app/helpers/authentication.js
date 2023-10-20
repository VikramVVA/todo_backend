"use strict";

const jwt = require("jsonwebtoken");
const authentication = {
    validateUser: async function (req, res, next) {
        try {
            const authToken = req.headers["auth-token"];
            if (!authToken) {
                return res.status(403).json({ message: "No token provided" });
            }

            //verify the token
            jwt.verify(authToken, "mugiwaras", (error, decoded) => {
                if (error) {
                    return res.status(401).json({ message: "Invalid token" });
                }
                req.user = decoded;
                next();
            });
        } catch (e) {
            const response = {
                success: 0,
                message: e.message,
            };
            return res.send(response);
        }
    },
};

module.exports = authentication;
