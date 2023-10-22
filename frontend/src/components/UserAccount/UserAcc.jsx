import React, { useState } from "react";
import "./userAcc.modules.css";
// import "./Nav.css";
// import Buttons from "./components/Buttons";
import Dashboard from "./components/Dashboard";
// import Footer from "./components/Footer";
import Footer from '../NavbarFooter/Footer'
import Navbar from "../NavbarFooter/Navbar";
// import Navbar from  "./components/Navbar"; 

function UserAcc () {
    const [colorChange, setColorchange] = useState("");
    const changeNavbarColor = () => {
        if (window.scrollY >= 10) {
            setColorchange(" rgb(70, 70, 70)");
        }
        else {
            setColorchange("");
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
  return (
    <div className='mpBG'>
    <Navbar bgcolor={colorChange} />

    <Dashboard />
    {/* <Buttons /> */}
    <Footer />
    </div>
    
  )

}
export default UserAcc;