import React from "react";
import { useState } from "react";
import axios from "axios";
import {message} from "antd";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
// import "../css/login.css"


const Login=()=>{
  
  const [userid, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [usertype , setUsertype] = useState("");
  const navigate=useNavigate();
  // console.log(userid,password, usertype);

  const handleSubmit=async()=>{
    if (usertype=="admin")
    {
      try {
        let api = "https://mernproject-taskmanagement.onrender.com/admin/adminlogin";
        const response = await axios.post(api, {userid:userid , password:password});
        console.log(response.data);
        if(response.status==200)
        {
          console.log(response.data);
          localStorage.setItem("adminname",response.data.username);
          localStorage.setItem("adminid",response.data.userid)
          message.success("Login Successfully!");
          navigate("/dashboard");
        }
      } catch (error) {
        message.error(error.response.data.msg);
        
      }
    }
    else 
    if(usertype=="employee")
    {
       try {     
        let api = "https://mernproject-taskmanagement.onrender.com/employee/employeelogin";
        const response= await axios.post(api, {userid:userid, password:password});
        // console.log(response.data);
        if(response.status==200)
        {
          localStorage.setItem("empname", response.data.empname);
          localStorage.setItem("empemail",response.data.email);
          localStorage.setItem("empid",response.data._id);
          message.success("Login Successfully!!");
          navigate("/EmpDashboard")
        }
       } catch (error) {
          message.error(error.response.data.msg)
       }
    }
  }
    return(
        <>
        {/* <center>
    <div  style={{marginTop:'20px', marginBottom:"40px", marginTop:"40px"}}>

      <div className="text-center">
        <img src="src\images\img1.jpg"
          style={{width: '185px'}} alt="logo" />
        <h4 className="mt-1 mb-5 pb-1" style={{color:"#098196", fontSize:"25px", fontWeight:"600"}}>We are The Team</h4>
      </div>
      
      <p style={{color:"#098196", fontSize:"25px", fontWeight:"600"}}>Please login to your account</p>

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
      <Button style={{backgroundColor:"#098196"}} onClick={handleSubmit}>Login</Button>

     

    </div>

</center> */}
        <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col xs={12} md={6} lg={4} className="mx-auto text-center p-4 shadow rounded bg-white">
          <img src="src/images/img1.jpg" alt="logo" className="mb-3" style={{ width: "150px" }} />
          <h4 style={{color:"#098196", fontSize:"20px"}}>We are The Team</h4>
          <p style={{color:"#098196",fontSize:"10px"}}>Please login to your account</p>

          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter your ID"
                value={userid}
                onChange={(e) => setUserID(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Select value={usertype} onChange={(e) => setUsertype(e.target.value)}>
                <option value="">Login as a ......</option>
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
              </Form.Select>
            </Form.Group>

            <Button style={{backgroundColor:"#098196"}} className="w-100" onClick={handleSubmit}>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>


        </>
    )
}
export default Login;