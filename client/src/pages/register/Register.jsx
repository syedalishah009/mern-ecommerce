import React, { useEffect, useState } from 'react'
import { publicRequest } from '../../requestMethods';
import './register.css'
// import { Navigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
        const res = await publicRequest.post("/auth/register",{username,email,password});
        window.location.replace("/login");
    } catch(err){}
}

  return (
    
    <div class="account-page">
    <div class="container">
        <div class="row">
            <div class="col-2">
                <img src="images/back.png" alt=""/>
            </div>

            <div class="col-2">
                <div class="form-container">
                    <div class="form-btn">
                        <span>Register</span>
                     
                    </div>
                    
                    <form action="#" >
                     <input type="text" onChange={(e)=> setUsername(e.target.value)} placeholder="Username"/>
                     <input type="email" onChange={(e)=> setEmail(e.target.value)} placeholder="Email"/>
                     <input type="password" onChange={(e)=> setPassword(e.target.value)} placeholder="Password"/>
                     <button type="submit" class="btn" onClick={handleSubmit}>Register</button>
                     
                 </form>
                </div>
            </div>
        </div>
    </div>
</div>


  )
}

export default Register