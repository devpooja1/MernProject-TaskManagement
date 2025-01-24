const express= require("express");
const route = express.Router();

const EmpController = require("../controllers/empController");


//for emp route
route.post("/createempdata", EmpController.createEmpData);

module.exports = route;