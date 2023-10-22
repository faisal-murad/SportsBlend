import React, { useEffect, useState } from 'react'
import Navbar from '../NavbarFooter/Navbar';
import './home.css';
import { Link } from "react-router-dom";
import Footer from '../NavbarFooter/Footer';
import styles from '../CategoryPage/category.module.css' 
import Card from '../CategoryPage/Card.jsx'
import axios from 'axios'; 



function Home() {

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
            <div className="background-container">

                <div className='home-root'> 
                    <h1>Sports<span>Blend</span></h1>
                </div> 
            </div>

            <div className={styles.secDiv}>
                <h4 className={styles.sportTitle}>Categories</h4>
                <h1 className={styles.Hero}>Choose a Category</h1> 

                <div className={styles.cardsContainer}>
                    {photos.map(({ name, photo, _id }) => (
                        <div key={_id}>
                            <Link to='/productPage' className='card-link'><Card name={name} cardImage={`http://localhost:3025/images/${photo}`} /*overlayImage={shirtBack}*/ /></Link>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />

        </div>
    )
} 
export default Home
