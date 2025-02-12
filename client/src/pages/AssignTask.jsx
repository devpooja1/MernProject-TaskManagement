import { useEffect, useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../css/task.css"

const AssignTask=()=>{
    const [mydata, setMydata] = useState([]);
    const [show, setShow] = useState(false);
    const [input, setInput] = useState({});
    const [empId,setEmpId] = useState("");

    //model
    const handleClose=()=>setShow(false);
    const handleShow=(empid)=>{
        setEmpId(empid);
        setShow(true);
    }
     
    const handleInput=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput(values=>({...values,[name]:value}));
        console.log(input);
    }

    const handleSubmit=async()=>{
        let api="https://mernproject-taskmanagement.onrender.com/admin/assigntask";
        try {
          const response =  await axios.post(api, {empid:empId, ...input});
          alert("Assign Task!!");
        } catch (error) {
            console.log(error)
            
        }
    }

    const loadData=async()=>{
        let api = "https://mernproject-taskmanagement.onrender.com/admin/assigntaskdisplay";
        try {
            const response = await axios.get(api);
            setMydata(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(()=>{
        loadData();
    },[]);

    const ans  = mydata.map((key)=>{
        console.log("OKKKK")
        return(
            <>
            <tr>
                <td>{key.empname}</td>
                <td>{key.email}</td>
                <td>{key.emptype}</td>
                
                {/* <td>{key.password}</td> */}
                <td>
                    <Button style={{backgroundColor:"#098196"}} onClick={()=>{handleShow(key._id)}}>Assign Task</Button>
                </td>
            </tr>
            </>
        )
    })

    return(
        <>
        <h1>Assign Task to Employee</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Emp Name</th>
                    <th>Emp Email</th>
                    <th>Emp Type</th>
                    
                </tr>
            </thead>
            <tbody>
                {ans}
            </tbody>
        </Table>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Assign Task To Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Enter Task Title :
           <input type="text" name="tasktitle" 
           value={input.tasktitle}
           onChange={handleInput} />
          <br/>
          Enter Description : 
          <br/>
          <textarea rows="4" cols="50" 
          name="taskdescription" 
          value={input.taskdescription}
          onChange={handleInput} />
         
          <br/>

          Enter Completion Days : 
          <br/>
          <input type="number" name="completiondays" 
          value={input.compdays}
          onChange={handleInput} />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" 
          onClick={handleSubmit}>
           Save!!!
          </Button>
        </Modal.Footer>
      </Modal>  

        </>
    )
}

export default AssignTask;