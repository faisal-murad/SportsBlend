import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../style.css';

const OTP = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg]=useState("");
  const Navigate = useNavigate();
 const handleSubmit=()=>{

 }

  return (
    <div className="root">
      <div className="containerleft">
        <h2 className="heading">Forget Password</h2>
        <form className="signup-form" onSubmit={handleSubmit}> 
          <input
            type="number"
            placeholder="Enter OTP"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /> <h6>Enter your OTP and change the password.</h6>
          <Link to='/changepassword'><button type="submit">Submit</button></Link>
          <p style={{color:'red', textAlign:'center'}}>{msg}</p>
        </form>
      </div>

      <div className="containerright">
        <div className="content">
          <h2 className="heading">SportsBlend</h2><br/> 
          <p className="subheading">An OTP has been sent to your email.</p>  
          <button type="submit"><Link className='linkButtons' to="/signup">Login Page</Link></button>
        </div>
      </div>
    </div>
  );
};

export default OTP;
