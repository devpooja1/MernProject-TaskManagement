import { useEffect, useState } from "react";
import {message}   from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/changepassword.css"

const ChangePassword=()=>{
    const[input, setInput]=useState({});
    const [empid, setEmpid]=useState("")

    const navigate=useNavigate();

    useEffect(()=>{
        setEmpid(localStorage.getItem("empid"))
       
},[])
        
    const handelInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}))
        
    }


    const handelSubmit=async()=>{

        try {
            let api="https://mernproject-taskmanagement.onrender.com/employee/changepassword";
                const response = await axios.post(api, {empid:empid, ...input})
                 message.success("password succesfulley change!!!")
                 console.log(response.data)
                 navigate("/empdashboard")
                   
        } catch (error) {
            console.log(error)
        }

    }

    return(
        <>
        <div className="passwordChange">

        <input type="password" placeholder="old password"  name="oldpassword" onChange={handelInput} /><br />
        <input type="password" placeholder="new password" name="newpassword" onChange={handelInput} />
        <button onClick={handelSubmit}>Submit</button>
        </div>
        </>
    )
}
export default ChangePassword;