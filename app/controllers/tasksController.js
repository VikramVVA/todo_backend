const TasksModel = require("../models/tasks");
const { matchedData } = require("express-validator");

var tasksController = {
    list: async function (req, res, next) {
        try {
            const data = await TasksModel.findAll({order: [['createdAt', 'ASC']]});
            res.json({
                success: 1,
                data: data,
                recordsTotal: data !== null ? data.length : 0,
            }).status(200);
        } catch (error) {
            next(error);
        }
    },

    createTask: async function (req, res, next) {
        try {
            const { taskName, description } = matchedData(req, {
                includeOptionals: false,
                onlyValidData: true,
                locations: ["body"],
            });

            const date = new Date();
            date.setHours(date.getHours() + 5, date.getMinutes() + 30);
            // Format the date to be compatible with MySQL (YYYY-MM-DD HH:MM:SS)
            const formattedDate = date
                .toISOString()
                .slice(0, 19)
                .replace("T", " ");

            let newTask = {
                taskName: taskName,
                taskCreateDate: formattedDate,
                description: description,
                status: "Pending",
            };

            const createdTask = await TasksModel.create(newTask);

            if (createdTask) {
                res.json({
                    success: 1,
                    message: "Task created successfully",
                }).status(200);
            } else {
                res.json({
                    success: 0,
                    message: "Failed to create task",
                }).status(200);
            }
        } catch (error) {
            next(error);
        }
    },

    completeTask: async function (req, res, next) {
        try {
            const { id } = matchedData(req, {
                includeOptionals: false,
                onlyValidData: true,
                locations: ["body"],
            });

            const date = new Date();
            date.setHours(date.getHours() + 5, date.getMinutes() + 30);
            // Format the date to be compatible with MySQL (YYYY-MM-DD HH:MM:SS)
            const formattedDate = date
                .toISOString()
                .slice(0, 19)
                .replace("T", " ");

            let newTask = {
                taskCompleteDate: formattedDate,
                status: "Completed",
            };

            const completedTask = await TasksModel.update(newTask, {
                where: {
                    id: id,
                },
            });
            if (completedTask[0] === 1) {
                res.json({
                    success: 1,
                    message: "Task completed successfully",
                }).status(200);
            } else {
                res.json({
                    success: 0,
                    message: "Failed to complete task",
                }).status(200);
            }
        } catch (error) {
            next(error);
        }
    },

    deleteTask: async function (req, res, next) {
        try {
            const { id } = matchedData(req, {
                includeOptionals: false,
                onlyValidData: true,
                locations: ["body"],
            });

            const deletedTask = await TasksModel.destroy({
                where: {
                    id: id,
                },
            });
            if (deletedTask === 1) {
                res.json({
                    success: 1,
                    message: "Task deleted successfully",
                }).status(200);
            } else {
                res.json({
                    success: 0,
                    message: "Failed to deleted task",
                }).status(200);
            }
        } catch (error) {
            next(error);
        }
    },
};

module.exports = tasksController;
