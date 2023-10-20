"use strict";
const TaskRoute = require("./admin/tasksRouter");
const UsersRoute = require("./admin/usersRouter");

module.exports = (app) => {
    TaskRoute(app);
    UsersRoute(app);
};
