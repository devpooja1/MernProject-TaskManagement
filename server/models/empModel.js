const mongoose =require("mongoose");
const EmpSchema = new mongoose.Schema({
    empname:String,
    empid:String,
    emptype:String,
    email:String,
    password:String

   
})

module.exports = mongoose.model("employee", EmpSchema);