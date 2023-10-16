const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Tasks = sequelize.define("tasks", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    taskName: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
        required: false,
    },
    taskCreateDate: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true,
    },
    taskCompleteDate: {
        type: Sequelize.STRING,
        allowNull: true,
        required: false,
    },
    status: {
        type: Sequelize.ENUM,
        values: ["Completed", "Pending"],
    },
});

module.exports = Tasks;
