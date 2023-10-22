import React, { useState } from 'react'
import shirtFront from '../../assets/shirtFront.jpg'
import shirtBack from '../../assets/shirtBack.jpg'
import Card from '../Card'
import styles from './plist.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import Navbar from '../NavbarFooter/Navbar'
import Footer from '../NavbarFooter/Footer' 


function ProductList(props) {
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
      <Navbar bgcolor={colorChange}/>
      {/* <div className="navbar"></div> */}

      <div className={styles.mainDiv} style={{ backgroundImage: `url(${props.image})` }}>
        <div className={styles.mainDivContent}>
          <h4 className={styles.sportTitle}>{props.sportTitle}</h4><FontAwesomeIcon icon={faFutbol}/>
          <h1 className={styles.Hero}>Customize Your Own {props.sportTitle} Jersey!</h1>
        </div>
      </div>

      <div className={styles.secDiv}>
        <h4 className={styles.sportTitle}>PRODUCTS</h4>
        <h1 className={styles.Hero}>Choose a product</h1>
        <p><b>Modify</b> colors, <b>add</b> numbers and names.</p>

        <div className={styles.cardsContainer}>
          <Link to='/ProductCustomize' className='card-link'><Card cardImage={shirtFront} overlayImage={shirtBack}/></Link>
          <Link to='/ProductCustomize' className='card-link'><Card cardImage={shirtFront} overlayImage={shirtBack}/></Link>
          <Link to='/ProductCustomize' className='card-link'><Card cardImage={shirtFront} overlayImage={shirtBack}/></Link>
          <Link to='/ProductCustomize' className='card-link'><Card cardImage={shirtFront} overlayImage={shirtBack}/></Link>
          <Link to='/ProductCustomize' className='card-link'><Card cardImage={shirtFront} overlayImage={shirtBack}/></Link>
          <Link to='/ProductCustomize' className='card-link'><Card cardImage={shirtFront} overlayImage={shirtBack}/></Link>
          </div>
      </div>
      {/* <div className='footer'>
        <div className='footercontent'>
          <h3>JerseyFusion</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi magni, dolor id eaque aliquid vel.</p>

        </div>
        <div className='footercontent'>
          <br />
          <br />
          <h1>Copyright @Faisal Murad</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi magni, dolor id eaque aliquid vel.</p>

        </div>
      </div> */}
      <Footer/>
    </div>
  )
}

export default ProductList