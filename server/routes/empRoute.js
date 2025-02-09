const express= require("express");
const route = express.Router();

const EmpController = require("../controllers/empController");


// //for emp route
route.post("/employeelogin", EmpController.emploginCheck);
route.post("/emptaskdisplay", EmpController.empTaskDisplay);
route.post("/emptasksubmit", EmpController.empTaskSubmit);
route.post("/changepassword", EmpController.passwordChange);

module.exports = route;