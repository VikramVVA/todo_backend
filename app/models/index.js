const dbConfig  = require("../config/database");
dbConfig
  .sync()
  .then(result => {
    associate();
    console.log("Connected to database");
  })
  .catch(err => {
    console.log(err);
  });