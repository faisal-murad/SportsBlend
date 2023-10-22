import React from "react";
import { Link } from "react-router-dom";
import './Sidebar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faCartArrowDown, faDashboard, faFolderOpen, faSignOut } from "@fortawesome/free-solid-svg-icons";


const Sidebar = () => {
    return (
        <div className="bar-root">
            <h2>Sports<span>_Blend</span></h2>
            <ul className="bar-menu">
                    <li>
                    <Link className="bar-link" to="/adminDashboard">
                    <FontAwesomeIcon icon={faDashboard}></FontAwesomeIcon>  Dashboard</Link>
                    </li>
                    <li>
                    <Link  className="bar-link" to="/categoryHome">
                    <FontAwesomeIcon icon={faFolderOpen}></FontAwesomeIcon>  Add_Categories</Link>
                    </li>
                    <li>
                    <Link className="bar-link" to="/productHome">
                    <FontAwesomeIcon icon={faBox}></FontAwesomeIcon>  Manage_Products</Link>
                    </li>
                    <li>
                    <Link className="bar-link" to="/">
                    <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon>  Manage_Orders</Link>
                    </li>
                    
                    <li>
                    <Link className="bar-link" to="/login">
                    <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>  Logout</Link>
                    </li>
            </ul>
        </div>
    );
};
export default Sidebar;