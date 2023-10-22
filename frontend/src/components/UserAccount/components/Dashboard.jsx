import React from 'react';
import '../userAcc.modules.css';
import {
  FaTachometerAlt, 
  FaShoppingCart, 
  FaGift, 
  FaDownload, 
  FaMapMarkerAlt, 
  FaCreditCard, 
  FaUserAlt, 
  FaSave, 
  FaSignOutAlt, 
} from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
// import "../App.css";

const Dashboard = () => {
  const iconStyle = { marginRight: '8px' };

  return (
    <>
      <div className="Outer-UA">
        <div className="Inner1-UA">
          <h1 style={{ marginLeft: "35px", marginTop: "20px" }}>My Account</h1>
          <br />
          <ul style={{ listStyle: "none" }}> 
            <li style={{ margin: "6px" }}>
              <FaShoppingCart style={iconStyle} /> Orders
            </li> 
            <li style={{ margin: "6px" }}>
              <FaUserAlt style={iconStyle} /> Accounts Details
            </li> 
            <li style={{ margin: "6px" }}>
            <Link to='/login'><FaSignOutAlt style={iconStyle} /> Logout
              </Link></li>
          </ul>
        </div>
        <div className="Inner2-UA">
          <div className="inner2-UA">
            <p style={{ paddingTop: "30px", marginLeft: "20px" }}>
              Hello <span className='font-UA'>malik152034</span> (you are not{' '}
              <span className='font-UA'>malik152034</span>? Logout)
              <br />
              <br />
              From the bulletin board of your account, you can view your own recent orders, manage your shipping and billing addresses, change the password, and account details.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
