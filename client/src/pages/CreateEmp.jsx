import axios from 'axios';
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { message } from 'antd';


const CreateEmp=()=>{

        const [input, setInput] = useState({});

        const handleInput=(e)=>{
            let name = e.target.name;
            let value = e.target.value;
            setInput(values=>({...values,[name]:value}));
            console.log(input);
        }

        
        const handleSubmit=async(e)=>{
          e.preventDefault();
            let api = "http://localhost:8000/admin/createemp";
            try {
                const response = await axios.post(api,input);
                console.log(response.data);
                message.success("Employee successfully created!!!")
                }
                
            catch (error) {
              console.log(error);
                
            }

        }
    return(
        <>
            <center>
              <h1>Create New Employee</h1>
            <Form style={{width:"400px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Employee Name :</Form.Label>
        <Form.Control type="text" name='empname' onChange={handleInput} />
      </Form.Group>
      <br />
      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="text" name="email" onChange={handleInput} />
      </Form.Group> */}
      <br />
      <Form.Select aria-label="Default select example" name="emptype" onChange={handleInput}>
      <option>Select Designation</option>
      <option value="developer">Developer</option>
      <option value="fsd">Full Stack Developer</option>
      <option value="analyst">Data Analyst</option>
      <option value="teammanager">Team Manager</option>
      <option value="mana"> Manager</option>
    </Form.Select>
      <br />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" name="email" onChange={handleInput}  />
      </Form.Group>
        <br />
      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' onChange={handleInput}/>
      </Form.Group> */}
      <br />
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </center>
        </>
    )
}

export default CreateEmp;