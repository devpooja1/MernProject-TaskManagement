import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateEmp from "./pages/CreateEmp";
import AssignTask from "./pages/AssignTask";
import DisplayEmpTask from "./pages/DisplayEmpTask";
import EmpDashboard from "./pages/EmpDashboard";
import EmpReport from "./pages/EmpReport";
import ChangePassword from "./pages/changePassword";


const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Login/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="dashboard" element={<Dashboard/>}>
      <Route path="createemp" element={<CreateEmp/>}/>
      <Route path="assigntask" element={<AssignTask/>}/>
      <Route path="viewtask" element={<EmpReport/>}/>
    </Route>
    <Route path="empdashboard" element={<EmpDashboard/>}>
      <Route path="displaytask" element={<DisplayEmpTask/>}/>
      <Route path="changepassword" element={<ChangePassword/>}/>
      
    </Route>
    

    </Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;