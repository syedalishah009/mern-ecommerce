import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import "./newUser.css";

export default function NewUser() {
  const [inputs, setInputs] = useState({});
  const [gender, setGender] = useState("");

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

 const handleClick = async (e)=>{
  e.preventDefault();
  try{
      const res = await userRequest.post("/auth/register",{...inputs, gender});
      window.location.replace("/users");
  } catch(err){}
 }
 
  
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" name="username" onChange={handleChange}/> 
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" name="fullName" onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" name="email" onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" name="password" onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" name="phone" onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" name="address" onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender" >
            <input type="radio" name="gender" id="male" value="male" onChange={()=> setGender('Male')}/>
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" onChange={()=> setGender('Female')}/>
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" onChange={()=> setGender('Other')}/>
            <label for="other">Other</label>
          </div>
        </div>
        
        <button className="newUserButton" onClick={handleClick}>Create</button>
      </form>
    </div>
  );
}
