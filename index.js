"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Config = require("./app-config.json");
const configObject = Config.filter((object) => object.projectId === "todoapp");
const env = configObject[0].env;
const port = configObject[0].port;
const app = express();
const index = require("./app/routes/index");

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
    bodyParser.urlencoded({
        extended: true,
        limit: "50mb",
    })
);

index(app);
app.listen(port, (error) => {
    if (!error) console.log(env + " api started on port: " + port);
    else console.log("Error occurred, server can't start", error);
});
