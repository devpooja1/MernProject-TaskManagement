const AdminModel = require("../models/adminModel");


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

module.exports = {
    adminLogin
}