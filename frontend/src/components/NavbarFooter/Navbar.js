import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import styles from './navbar.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logowhite.png';
import cartImage from '../../assets/shirtFront.jpg'
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart } from '../Redux/CartSlice';

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

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const sidebarClassName = `navlink ${isSidebarOpen ? 'open' : ''}`;
  const searchClassName = `searchbar ${isSearchFocused ? 'focused' : ''}`;

  const navigate = useNavigate();
  const goToCart = () => {
    navigate('/cart');
  }

  //////////////////
 
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.carts);

  const handleDelete = (id) => {
    dispatch(deleteCart({ id: id }));
  }

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
              <Link className={styles.navlink} to="/categories">Categories</Link>
            </div>
            <div style={{ width: '100%' }}>
              <Link className={styles.navlink} to="/about">About</Link>
            </div>
            <div style={{ width: '100%' }}>
              <Link className={styles.navlink} to="/contact">Contact</Link>
            </div>
          </div>
          <div className={styles.tempSpace}>

          </div>
          <div className={styles.centerSearch} style={{ display: 'flex', alignItems: 'center' }}>
            <div className={searchClassName}>
              <input
                type="text"
                placeholder="Search..."
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
              />
              <button className={styles.btn} id='hh'>
                <FontAwesomeIcon icon={faSearch}
                  onClick={() => setIsClicked(true)} />
              </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Link className={styles.navicons} to='/cart'> <FontAwesomeIcon icon={faShoppingCart} id='cartIcon'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)} /></Link>
              <Link className={styles.navicons} to='/userAccount'> <FontAwesomeIcon icon={faUser} /></Link>
              {/* Login */}
            </div>
            <div className={styles.bars}>
              <FontAwesomeIcon icon={faBars}
                onClick={handleSidebarToggle}
                onBlur={handleSidebarBlur}
              />
            </div>
          </div>
        </div>
      </nav>
      <div className={`cartDiv ${isHovered ? 'hovered' : ''}`}>
        <div id='cartDropdown'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          {carts.map((cart, index) => (
            <tr key={index}>
          <div className='cdItem'>
              {cart.image &&(

            <img src={cart.image} alt="" />
              )}
            <div>
              <h3>{cart.proName}</h3>
              <p>{cart.quantity} x {cart.price}PKR</p>
            </div>
            <FontAwesomeIcon icon={faX} style={{cursor:'pointer'}} id='delete' onClick={()=>handleDelete(cart.id)}/>
          </div></tr>
          ))}
          <div className='totalCart'>
            <p>Total:</p>
            <h3>PKR 2000</h3>
          </div>
          <button type="" onClick={goToCart}>View Cart</button>
        </div>
      </div>
      <div className={`searchTab ${isClicked ? 'clicked' : ''}`}>
        <FontAwesomeIcon icon={faX} id='closeSearch'
          onClick={() => setIsClicked(false)} />
        <div className='divSearchBar'>
          <input
            type="text"
            placeholder="Search..."
          />
          <button type='submit' className={styles.btn} id='hh'>
            <Link to='/cart'>
              <FontAwesomeIcon icon={faSearch} style={{ color: 'black' }} />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
