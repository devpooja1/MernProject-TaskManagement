import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateEmp from "./pages/CreateEmp";



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
    </Route>

    

    </Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;