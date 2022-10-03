import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../../redux/userRedux';
import { publicRequest } from '../../requestMethods';
import './login.css'
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

const handleSubmit = async (e)=>{
      e.preventDefault();  
    dispatch(loginStart())
    try{
        const res = await publicRequest.post("/auth/login", {username, password})
        dispatch(loginSuccess(res.data))
        window.location.replace("/");
    }catch(err){
        dispatch(loginFailure(err))
    }
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
                    <span >Login</span>
                   
     
                </div>
                <form action="">
                    <input type="text" onChange={(e)=> setUsername(e.target.value)} placeholder="Username"/>
                    <input type="password" onChange={(e)=> setPassword(e.target.value)} placeholder="Password"/>
                    <button type="submit" onClick={handleSubmit} class="btn">Login</button>
                    <a href="">Forgot Password</a>
                </form>

            </div>
        </div>
    </div>
</div>
</div>



  )
}

export default Login