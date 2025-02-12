import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import rightimg from "../images/right.jpg";
import wrongimg from "../images/wrong.jpg";
import Button from 'react-bootstrap/Button';
import { message } from "antd";
import "../css/empreport.css"

const EmpReport=()=>{
    const [mydata, setMydata] = useState([]);

    const loadData=async()=>{
        let api="https://mernproject-taskmanagement.onrender.com/admin/showreport";
        try{
            const response = await axios.get(api);
            setMydata(response.data);
            console.log(response.data);


        }catch(error)
        {
            console.log(error);

        }
    }

    useEffect(()=>{
        loadData();
    },[]);

    const reassignTask = async(taskid)=>{
        let api = "https://mernproject-taskmanagement.onrender.com/admin/taskreassign";
        try {
            const response = await axios.post(api, {taskid:taskid});
            message.success(response.data.msg);
            loadData();
        } catch (error) {
            console.log(error);
            
        }
    }
        let sno=0;
        const ans = mydata.map((key)=>{
            sno++;
            return(
                <>
                <tr>

                <td>
           
           {key.empreport=="submitted"?(
            <img src={rightimg} width="40" height="40" />
            ):(
            <img src={wrongimg} width="40" height="40"/>
            )}

            </td>

                    <td>{sno}</td>
                    <td>{key.empid.empname}</td>
                    <td>{key.empid.emptype}</td>
                    <td>{key.empid.email}</td>
                    <td>{key.tasktitle}</td>
                    <td>{key.taskdescription}</td>
                    <td>{key.completiondays}</td>
                    <td>{key.taskstatus}</td>
                    <td>
                        {key.empReport=="submitted"?(
                            <>
                            <span style={{color:"green", fontWeight:"bold"}}>{key.empreport}</span>
                            </>
                        ):(
                            <>
                            <span style={{color:"red", fontWeight:"bold"}}>{key.empreport}</span>
                            </>
                        )}
                        </td>
                        <td>
                            <Button style={{backgroundColor:"#098196" , fontSize:"10px"}} size="sm"
                  onClick={()=>{reassignTask(key._id)}}
                 >ReAssign</Button>
                        </td>
                </tr>
                </>
            )
        })
    
    return(
        <>
        <h1>Show Employee Report</h1>
        <Table striped bordered hover  style={{fontSize:'12px'}}>
            <thead>
                <tr>
                    <td>Check</td>
                    <td>S.no.</td>
                    <td>Employee Name</td>
                    <td>Designation</td>
                    <td>Email</td>
                    <td>Task Title</td>
                    <td>Task Description</td>
                    <td>Assign Days</td>
                    <td>Task Status</td>
                    <td>Report</td>

                </tr>
            </thead>
            <tbody>
                {ans}
            </tbody>
    </Table>


        
        </>
    )
}

export default EmpReport;