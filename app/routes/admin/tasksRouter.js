"use strict";
const TaskController = require("../../controllers/tasksController");
const Validation = require("../../helpers/validation");
const TaskValidator = require("../../helpers/validators/taskValidator");
const ErrorHandler = require("../../helpers/errorHandler");
const AuthenticationHandler = require("../../helpers/authentication");

module.exports = (app) => {
    app.route("/tasks/list").post(
        // AuthenticationHandler.validateUser,
        Validation.validateRequest,
        TaskController.list
    );

    app.route("/tasks/createTask").post(
        // AuthenticationHandler.validateUser,
        Validation.validateRequest,
        TaskValidator.addTask,
        TaskController.createTask
    );

    app.route("/tasks/completeTask").post(
        // AuthenticationHandler.validateUser,
        Validation.validateRequest,
        TaskValidator.completeTask,
        TaskController.completeTask
    );

    app.route("/tasks/deleteTask").post(
        // AuthenticationHandler.validateUser,
        Validation.validateRequest,
        TaskValidator.deleteTask,
        TaskController.deleteTask
    );

    app.use(ErrorHandler);
};
