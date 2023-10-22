import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import styles from './navbar.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logowhite.png';

function Navbar(props) {
  const [isSearchFocused, setSearchFocused] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSearchFocus = () => {
    setSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setSearchFocused(false);
  };

  const handleSidebarBlur = () => {
    setSidebarOpen(false);
  }

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const sidebarClassName = `navlink ${isSidebarOpen ? 'open' : ''}`;
  const searchClassName = `searchbar ${isSearchFocused ? 'focused' : ''}`;

  return (
    <div className={styles.rootnav}>
      <nav className={styles.navbar} style={{ backgroundColor: props.bgcolor }}>
        <div className={styles.navitems}>
          <div className={styles.logoDiv}>
            <img className={styles.logo} src={logo} alt='logo' />
          </div>
          <div className={`centerItems ${sidebarClassName}`}>
            <div style={{ width: '100%' }}>
              <Link className={styles.navlink} to="/home">Home</Link>
            </div>
            <div style={{ width: '100%' }}>
              <Link className={styles.navlink} to="/about">About</Link>
            </div>
            <div style={{ width: '100%' }}>
              <Link className={styles.navlink} to="/product">Categories</Link>
            </div>
            <div style={{ width: '100%' }}>
              <Link className={styles.navlink} to="/contact">Contact</Link>
            </div>
          </div>
          <div className={styles.tempSpace}>

          </div>
          <div className={styles.centerSearch} style={{display:'flex',alignItems:'center'}}>
            <div className={searchClassName}>
              <input
                type="text"
                placeholder="Search..."
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
              />
              <button className={styles.btn} id='hh'>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
            <div>
              <Link className={styles.navicons}> <FontAwesomeIcon icon={faShoppingCart}/></Link>
            </div>
            <div>
              <Link className={styles.navicons}> <FontAwesomeIcon icon={faUser} /></Link>
              {/* Login */}
            </div>
            <div className={styles.bars}>
              <FontAwesomeIcon icon={faBars} onClick={handleSidebarToggle} onBlur={handleSidebarBlur} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;