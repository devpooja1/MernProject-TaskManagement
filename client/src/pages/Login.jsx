import React from "react";
import { useState } from "react";
import axios from "axios";
import {message} from "antd";
import { useNavigate } from "react-router-dom";


const Login=()=>{
  const navigate=useNavigate();
  const [userid, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [usertype , setUsertype] = useState("");
  console.log(userid,password, usertype);

  const handleSubmit=async()=>{
    if (usertype=="admin")
    {
      try {
        let api = "http://localhost:8000/admin/adminlogin";
        const response = await axios.post(api, {userid:userid , password:password});
        console.log(response.data);
        if(response.status==200)
        {
          message.success("Login Successfully!");
          navigate("/dashboard");
        }
      } catch (error) {
        message.error(error.response.data.msg);
        
      }
    }
    else if(usertype=='employee')
    {
       try {
        let api="http://localhost:8000/employee/employeelogin";
        const response= await axios.post(api,{userid:userid, password:password});
        console.log(response);
       } catch (error) {
            console.log(error)
       }
    }
  }
    return(
        <>
        <center>
    <div className="d-flex flex-column ms-5" style={{marginTop:'20px'}}>

      <div className="text-center">
        <img src="src\images\img1.jpg"
          style={{width: '185px'}} alt="logo" />
        <h4 className="mt-1 mb-5 pb-1">We are The Team</h4>
      </div>

      <p>Please login to your account</p>

        <input type="text" placeholder="Enter your ID" value={userid}  onChange={(e)=>{setUserID(e.target.value)}}/>
        <br/>
        <br/>
        <input type="password" placeholder="Enter your Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <br/>
        <br/>

      <select name="usertype" id="" value={usertype} onChange={(e)=>{setUsertype(e.target.value)}}>
        <option value="">Login as a ......</option>
        <option value="admin">Admin</option>
        <option value="employee">Employee</option>
      </select>
      <br/>
      <br />
      <button onClick={handleSubmit}>Login</button>

     

    </div>

</center>

        </>
    )
}
export default Login;