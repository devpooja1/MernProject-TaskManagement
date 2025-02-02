import { useState } from "react";
import axios from "axios";
import Password from "antd/es/input/Password";


const ChangePassword=()=>{

    const [input, setInput] = useState({
        
            currentPassword: "",
            newPassword: "",
            confirmPassword: ""
        
    
    });

    const handleInput=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput(values=>({...values,[name]:value}));
    }

    const handleSubmit = async (password) => {
        const api = "http://localhost:8000/employee/changepassword";
        try {
            const response = await axios.post(api, {Password:password});
            alert(response.data.message);
            // setInput({email:"" ,oldPassword: "", newPassword: "" }); // Reset form
        } catch (error) {
            alert(error.response?.data?.message || "Error changing password");
            // console.log(error);
        }
    }

    return(
        <>
        <center>
        <h2>.....Change Your Password.....</h2>

        <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={input.email}
                    onChange={handleInput}
                    required
                />
                <br />

        <input
                    type="password"
                    name="oldPassword"
                    placeholder="Enter old password"
                    value={input.oldPassword}
                    onChange={handleInput}
                    required
                />
                <br />
                <input
                    type="password"
                    name="newPassword"
                    placeholder="Enter new password"
                    value={input.newPassword}
                    onChange={handleInput}
                    required
                />
                <br />
                <button onClick={handleSubmit} >Change Password</button>


        </center>
        </>
    )
}
export default ChangePassword;