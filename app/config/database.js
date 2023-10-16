const Config = require("../../app-config.json");
const configObject = Config.filter((object) => object.projectId === "todoapp");

//Get the details of the config from the configuration files
const dbName = configObject[0].db;
const dbUserName = configObject[0].db_userName;
const dbPassword = configObject[0].db_password;

const Sequelize = require("sequelize")

const sequelize = new Sequelize(dbName, dbUserName, dbPassword, {
    host: "localhost",
    dialect: "mysql",
    logging: true
});

module.exports = sequelize;