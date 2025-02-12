const empModel = require("../models/empModel");
const EmpModel = require("../models/empModel");
const TaskModel = require("../models/taskModel");

const emploginCheck=async(req, res)=>{
    console.log(req.body)
    
    const {userid, password}=req.body;
    try {
        const Employee = await EmpModel.findOne({email:userid});
        if(!Employee){
            res.status(400).send({msg:"Invalid Email!!"});
        }
        if(Employee.password!=password)
        {
            res.status(400).send({msg:"Invalid Password!!!!"});
        }
        res.status(200).send(Employee);
    } catch (error) {
        console.log(error);
        
    }
}
const empTaskDisplay =async(req,res)=>{
    const {empid} = req.body;
    try {
        const Task = await TaskModel.find({empid:empid});
        res.status(200).send(Task);
        
    } catch (error) {
        console.log(error);
    }
}
const empTaskSubmit =async(req,res)=>{
    const {taskid, taskstatus} = req.body;
    try {
        const Task = await TaskModel.findByIdAndUpdate(taskid,{taskstatus:taskstatus, empreport:"submitted"});
        res.status(200).send("Task Successfully Submitted!!!!");
    } catch (error) {
        console.log(error);
    }
}

const passwordChange=async(req,res)=>{
    const {oldpassword,newpassword,empid}=req.body;
 try {
     
        const Data=await EmpModel.findById(empid);
        console.log(Data)
        const chkpass= await bcrypt.compare(oldpassword, Data.password);

        if(chkpass){
             const salt = await bcrypt.genSalt();
             const passwordHash = await bcrypt.hash(newpassword,salt);
              await EmpModel.findByIdAndUpdate(empid,{password:passwordHash})
              res.status(200).send({msg:"password updated"})
        
        }
 } catch (error) {
     res.status(400).send({ msg: "old password does not match!!!" });  
 }

}

module.exports={
    emploginCheck,
    empTaskDisplay,
    empTaskSubmit,
    passwordChange
}