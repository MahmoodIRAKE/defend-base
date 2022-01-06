import React from "react";
import { googleSignUp } from "../api/auth";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/userContextF/userContext";
const Login=()=>{
    const {setUser}=useUser();
return <div className="login">
        <Link to="/lobby" className="login-btn"  onClick={()=>googleSignUp(setUser)}>
        
        </Link>
       </div>
}
export default Login;