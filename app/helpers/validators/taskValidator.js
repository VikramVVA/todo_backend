"use strict";

const { body, header } = require("express-validator");

const addTask = [
    body("taskCreateDate")
        .exists({ checkNull: true })
        .withMessage("TaskCreateDate is required!"),
    body("taskName")
        .exists({ checkNull: true })
        .withMessage("TaskName is required!"),
    body("description").optional({ checkNull: true }),
];

const completeTask = [
    body("taskCompleteDate")
        .exists({ checkNull: true })
        .withMessage("TaskCompleteDate is required!"),
    body("id").exists({ checkNull: true }).withMessage("Task id is required!"),
];

const list = [
    body("userId")
        .exists({ checkNull: true })
        .withMessage("User Id is required!"),
];

const deleteTask = [
    // body("userId")
    //     .exists({ checkNull: true })
    //     .withMessage("userId is required!"),
    body("id").exists({ checkNull: true }).withMessage("Task id is required!"),
];

module.exports = {
    addTask: addTask,
    completeTask: completeTask,
    deleteTask: deleteTask,
    list: list,
};
