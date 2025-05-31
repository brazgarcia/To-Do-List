const routes = require("express").Router();
const taskController = require("../controller/TaskController");

routes.get("/home", taskController.getAll);

module.exports = routes;