import "../css/empdashboard.css";

import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const EmpDashboard=()=>{


const navigate=useNavigate();
    return(
        <>
        <div id="empdashboard">
            <div id="empLeftMenu">

                <Link to="displaytask" style={{listStyle:'none', color:'white', textDecoration:'none'}}>Display Task</Link>
                <br />
                <br />
                <Link to="changepassword" style={{listStyle:'none', color:'white', textDecoration:'none'}}>Change Password</Link>
                <br />
                <br />
                <br />
                <br />
                <Link to="/"  
                style={{listStyle:'none', color:'white', textDecoration:'none'}}
                 onClick={()=>{navigate("/login")}}>Logout</Link>
                        
                

            </div>
            <div id="empRightData" >
            <Outlet/>
            </div>
        </div>
       
        </>
    )
}
export default EmpDashboard;