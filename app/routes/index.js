"use strict";
const TaskRoute = require("./admin/tasksRouter");

module.exports = (app) => {
    TaskRoute(app);
};
