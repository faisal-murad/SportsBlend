import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 

const Signup = () => {
  const navigate = useNavigate("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState(""); // Add an error message state

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // if (!isStrongPassword(password)) {
    //   alert("Password must be strong (at least 8 characters: uppercase, letters & numbers).");
    //   return; // Exit the function if password is not strong
    // }

    const response = await axios.post("http://localhost:3025/api/user/register", {
      email,
      password,
    });

    if (response.status === 201) {
      // Simulate a successful signup with a delay
      setTimeout(() => {
        setSuccessMessage(`Signup successful! ${name}, you can now login`);
        setName("");
        setEmail("");
        setPassword("");
      }, 1000);
      navigate('/Home');
    } else {
      setSuccessMessage("Failed to register user");
    }
  } catch (err) {
    console.error(err);
    setSuccessMessage("Failed to register user");
  }
};


 
// Helper function to validate strong password format
// const isStrongPassword = (password) => {
//     const strongPasswordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
//     return strongPasswordPattern.test(password);
//   };
  

  return (
    <div className="root">
      <div className="containerleft">
        <h2 className="heading">Create Account!</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <button type="submit">Signup</button>
        </form>
        
        <p className="success-message">{successMessage}</p>
      </div>
      <div className="containerright">
        <div className="content">
          <h2 className="heading">Welcome Back!</h2>
          <p className="subheading">
            To continue with us, please login with your personal information
          </p>
          <button type="submit">
            <Link className="linkButton" to="/login">
              Login
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
