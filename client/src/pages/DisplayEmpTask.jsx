import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const DisplayEmpTask=()=>{
    
    const empid = localStorage.getItem("empid");
    const [mydata, setMydata] = useState([]);
    const [taskStatus, setTaskStatus ]= useState("");

    const loadData=async()=>{
        try {
            let api= "https://mernproject-taskmanagement.onrender.com/employee/emptaskdisplay";
        const response = await axios.post(api,{empid:empid});
        setMydata(response.data);
        console.log(response.data)
        } catch (error) {
            console.log(error);
            
        }
        
    }

    useEffect(()=>{
        loadData();
    },[]);

    const taskSubmit=async(taskid)=>{
        try {
            let api = "https://mernproject-taskmanagement.onrender.com/employee/emptasksubmit";
            const response = await axios.post(api, {taskid:taskid, taskstatus:taskStatus});
            alert(response.data);
            loadData();
        } catch (error) {
            console.log(error);
        }
    }

    let sno = 0;
    const ans = mydata.map((key)=>{
        sno++;

        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.tasktitle}</td>
                <td>{key.taskdescription}</td>
                <td>{key.completiondays}</td>
                <td>
                    <Form.Select size="sm" name="taskStatus"
                        value={taskStatus}
                        onChange={(e)=>{setTaskStatus(e.target.value)}}>
                            <option >--Select Option--</option>
                            <option value="Fully Completed">Fully completed</option>
                            <option value="Partial Completed">Partially Completed</option>
                            <option value="Not Completed">Not Completed</option>
                        </Form.Select>
                </td>
                <td>
                    {key.empreport=="submitted"?
                    (<Button disabled>Submitted</Button>):
                    (<Button onClick={()=>{taskSubmit(key._id)}}>Send</Button>)}
                </td>
            </tr>
            </>
        )
    

    })
    
    return(

        <>
        <h1>Your Task/ Assignment </h1>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>S. No.</th>
                <th>Task Title</th>
                <th>Task Description</th>
                <th>Total Days</th>
                <th>Status</th>
                <th>Report</th>
            
            </tr>
        </thead>
        <tbody>
        {ans}
        </tbody>

        </Table>
        </>
    )
}
export default DisplayEmpTask;