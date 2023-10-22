import React, { useEffect, useState } from 'react'
// import shirtFront from '../../assets/shirtFront.jpg'
import catImage from './soccer.jpg';
import shirtBack from '../../assets/shirtBack.jpg'
import Card from './Card'
import styles from './category.module.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFutbol } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import Navbar from '../NavbarFooter/Navbar'
import Footer from '../NavbarFooter/Footer'
import axios from 'axios';



function Category(props) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3025/api/category/displayCategory")
      .then((res) => {
        console.log("\nTHe photos or data are ", res.data, "\n");
        setPhotos(res.data);

      })
      .catch((err) => console.log(err));
  }, [])
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
      {/* <div className="navbar"></div> */}

      {/* <div className={styles.mainDiv} style={{ backgroundImage: `url(${props.image})` }}>
        <div className={styles.mainDivContent}>
          <h4 className={styles.sportTitle}>{props.sportTitle}</h4><FontAwesomeIcon icon={faFutbol}/>
          <h1 className={styles.Hero}>Customize Your Own {props.sportTitle} Jersey!</h1>
        </div>
      </div> */}

      <div className={styles.secDiv}>
        <h4 className={styles.sportTitle}>Categories</h4>
        <h1 className={styles.Hero}>Choose a Category</h1>
        {/* <p><b>Modify</b> colors, <b>add</b> numbers and names.</p> */}

        <div className={styles.cardsContainer}>
          {photos.map(({ name, photo, _id }) => (
            <div key={_id}>
              <Link to='/productPage' className='card-link'><Card name={name} cardImage={`http://localhost:3025/images/${photo}`} /*overlayImage={shirtBack}*/ /></Link>
            </div>
          ))}
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
      <Footer />
    </div>
  )
}

export default Category