import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [OTP, setOTP] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg]=useState("");
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "1234") {
      alert("You are logged in as an Administrator");
      Navigate("/adminDashboard"); // Navigate to adminDashboard
    } else {
      try{

        const response = await axios.post("http://localhost:3025/api/user/login", {
          email,
        password,
      });

      if (response.status === 200) {
        console.log("Logged in successfully!");
        Navigate("/home"); // Navigate to the user's home page
      } else {
        setMsg("Failed to login")
        console.log("Failed to login");
      }
    }
    catch(error)
    {
      setMsg("Invalid Credentials")
      console.log(error);
    }
    }
  };

  return (
    <div className="root">
      <div className="containerleft">
        <h2 className="heading">Login</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Link to='/forgotpassword'><p>Forgot Password</p></Link>
          <button type="submit">Login</button>
          <p style={{color:'red', textAlign:'center'}}>{msg}</p>
        </form>
      </div>

      <div className="containerright">
        <div className="content">
          <h2 className="heading">SportsBlend </h2><br/> 
          <p className="subheading">Enter your personal details and start your journey with us</p>
          <button type="submit"><Link className='linkButtons' to="/signup">Signup</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Login;
