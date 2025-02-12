import "../css/dashboard.css"
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Dashboard=()=>{

    const navigate=useNavigate();

    return(

        <>
        <div id="dashboard">
            <div id="adminLeftMenu">

                <Link to="createemp" style={{listStyle:'none', color:'white', textDecoration:'none'}}>Create Employee</Link>
                <br />
                <br />
                <Link to="assigntask" style={{listStyle:'none', color:'white', textDecoration:'none'}}>Assign Task</Link>
                <br />
                <br />
                <Link to="viewtask" style={{listStyle:'none', color:'white', textDecoration:'none'}}>View Task Status</Link>
                <br />
                <br />
                <Link to="/"  
                style={{listStyle:'none', color:'white', textDecoration:'none'}}
                 onClick={()=>{navigate("/login")}}>Logout</Link>
                        
                {/* <button onClick={()=>{navigate("/login")}}>Logout</button> */}

            </div>
            <div id="adminRightData" >
            <Outlet/>
            </div>
            
        </div>
        
        
        </>
    )
}

export default Dashboard;