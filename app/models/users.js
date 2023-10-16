const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Users = sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER, // Assuming userId is an integer
        primaryKey: true, // Specify this field as the primary key
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true,
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true,
    },
    isDeleted: {
        type: Sequelize.INTEGER,
    },
});

module.exports = Users;
