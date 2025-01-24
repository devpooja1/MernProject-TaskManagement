const EmpModel = require("../models/empModel");

const createEmpData=async(req,res)=>{
    console.log(req.body);
   

    const {empname,empid,emptype,email,password}=req.body;

    try {
        const Employee = await EmpModel.create({
            empname:empname,
            empid:empid,
            emptype:emptype,
            email:email,
            password:password
        });
        if(!Employee)
        {
            res.status(400).json({msg:"Invalid Employee ID"});

        }
        if(adminLogin.password!=password)
        {
            res.status(400).json({msg:"Invalid Password"})
        }
            res.status(200).json(Employee)
    } catch (error) {
        console.log(error);
    }
}


module.exports={
    createEmpData
}