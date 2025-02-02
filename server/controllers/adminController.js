const AdminModel = require("../models/adminModel");
const transporter = require("../middleware/nodeMailer");
const RandomPass = require("../middleware/RandomPass");
const EmpModel = require("../models/empModel")
const TaskModel= require("../models/taskModel");

const adminLogin = async(req,res)=>{
    const {userid, password} = req.body;
    // console.log(userid,password);
    try{
        const Admin = await AdminModel.findOne({userid:userid});

        if(!Admin){
            res.status(400).json({msg:"Inavlid user Id"});

        }
        if(Admin.password!=password)
        {
            res.status(400).json({msg:"Invalid Password"});
        }
        res.status(200).json(Admin)
    }catch(error){
        console.log(error);

    }
}
//Emp Controller and mail code

const createEmp=async(req,res)=>{
    // console.log(req.body);
   

    const {empname,empid,emptype,email}=req.body;
    const myPass = RandomPass();

    const mailOptions = {
        from: "poojarajput2814@gmail.com", // Sender email
        to:"poojarajput020@gmail.com",                          // Recipient email
        subject:"New-Vision Company Work Detail Account",                     // Email subject
        text:`Dear ${empname} Your Account created with password : ${myPass} 
         You can login using with your Email account
        `
      };

    try {
        const info = await transporter.sendMail(mailOptions);
        const EmpData = await EmpModel.create({
            empname:empname,
            email:email,
            emptype:emptype,
            password:myPass
        })
        res.status(200).json({ success: true, message: 'Email sent', info });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, error: error.message });
    }
}

    const empDisplay=async(req, res)=>{
        try{
            const User= await EmpModel.find();
            res.status(200).send(User);

        }catch(error)
        {
            console.log(error);
        }
    }
    const assignTaskSave =async(req,res)=>{
        const {empid, tasktitle, taskdescription, completiondays}=req.body;
        try {
            const Employee = await TaskModel.create({
                tasktitle:tasktitle,
                taskdescription:taskdescription,
                completiondays:completiondays,
                empid:empid

            })
            res.status(200).send("Task Successfully Assigned!!!");
        } catch (error) {
            console.log(error);   
        }
    }

    const empReport=async(req,res)=>{
        try {
            const Task = await TaskModel.find().populate("empid");
            res.status(200).send(Task);
        } catch (error) {
            console.log(error);
        }
    }

    const taskReAssign=async(req,res)=>{
        const {taskid}=req.body;
        try {
            const Data = await TaskModel.findByIdAndUpdate(taskid, {empreport:'pending', taskstatus:'Not Completed'});
            res.send({msg:"Task successfully ReAssign!!"});
        } catch (error) {
            console.log(error);
            
        }
    }

module.exports = {
    adminLogin,
    createEmp,
    empDisplay,
    assignTaskSave,
    empReport,
    taskReAssign
}