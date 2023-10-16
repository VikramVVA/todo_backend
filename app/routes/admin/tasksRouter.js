"use strict";
const TaskController = require("../../controllers/tasksController");
const Validation = require("../../helpers/validation");
const TaskValidator = require("../../helpers/validators/taskValidator");
const ErrorHandler = require("../../helpers/errorHandler");

module.exports = (app) => {
    app.route("/tasks/list").post(
        Validation.validateRequest,
        TaskController.list
    );

    app.route("/tasks/createTask").post(
        Validation.validateRequest,
        TaskValidator.addTask,
        TaskController.createTask
    );

    app.route("/tasks/completeTask").post(
        Validation.validateRequest,
        TaskValidator.completeTask,
        TaskController.completeTask
    );

    app.route("/tasks/deleteTask").post(
        Validation.validateRequest,
        TaskValidator.deleteTask,
        TaskController.deleteTask
    );

    app.use(ErrorHandler);
};
