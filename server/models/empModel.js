const mongoose =require("mongoose");
const EmpSchema = new mongoose.Schema({
    empname:String,
    email:String,
    emptype:String,
    password:String,
    oldpassword:String

   
})

module.exports = mongoose.model("employee", EmpSchema);