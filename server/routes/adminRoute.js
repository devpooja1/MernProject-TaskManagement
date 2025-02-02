const express = require("express");
const route = express.Router();

const AdminController = require("../controllers/adminController");
//admin route
route.post("/adminlogin", AdminController.adminLogin);
//for emp route
route.post("/createemp", AdminController.createEmp);
// display emp on assign task page
route.get("/assigntaskdisplay", AdminController.empDisplay);
route.post("/assigntask", AdminController.assignTaskSave);
//showreport route
route.get("/showreport", AdminController.empReport);
//reassign route
route.post("/taskreassign",AdminController.taskReAssign);


module.exports= route;
