import React, { useState } from 'react'
import styles from './pCustomize.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-regular-svg-icons'
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";
import Navbar from '../NavbarFooter/Navbar'
import Footer from '../NavbarFooter/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCart } from '../Redux/CartSlice';
import shirtFront from '../../assets/shirtFront.jpg'

function ProductCustomize(props) {

    const [name, setName] = useState("");
    const [num, setNum] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);


    const changeArrow1 = () => {
        const up = document.getElementById('up');
        const down = document.getElementById('down');
        setToggle1(!toggle1);
        if (toggle1 === true) {
            down.style.display = 'none';
            up.style.display = 'block';
        }
        else {
            down.style.display = 'block';
            up.style.display = 'none';

        }
    }

    const changeArrow2 = () => {
        const up2 = document.getElementById('up2');
        const down2 = document.getElementById('down2');

        setToggle2(!toggle2);
        if (toggle2 === true) {
            down2.style.display = 'none';
            up2.style.display = 'block';
        }
        else {
            down2.style.display = 'block';
            up2.style.display = 'none';

        }
    }

    const changeArrow3 = () => {
        const up3 = document.getElementById('up3');
        const down3 = document.getElementById('down3');
        setToggle3(!toggle3);
        if (toggle3 === true) {
            down3.style.display = 'none';
            up3.style.display = 'block';
        }
        else {
            down3.style.display = 'block';
            up3.style.display = 'none';

        }
    }
    const add = () => {
        setQuantity(quantity + 1);
    }

    const minus = () => {
        if (quantity !== 1) {
            setQuantity(quantity - 1);
        }
    }

    const changeText = (e) => {
        setName(e.target.value);
    }

    const changeNum = (e) => {
        setNum(e.target.value);
    }

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

    const today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = today.getDate();
    let temp = date;

    if (date + 3 > 30) {
        month = month + 1;
        date = date - 30;
        if (month > 12) {
            month = 1;
        }
    }


    const iDate = `${temp + 1}/${month}/${year}`;
    const lDate = `${date + 3}/${month}/${year}`;

    //////////////////////////////////

    const [proName, setProName] = useState("Argentina Football Shirt 2023");
    const [image, setImage] = useState(shirtFront); 
    const [price, setPrice] = useState("3000"); 
    const carts = useSelector((state) => state.carts);
    const dispatch = useDispatch();
    const navigate=useNavigate('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setProName("Argentina Football Shirt 2023"); 
   
        setImage(shirtFront); 
        setPrice("3000");
        const newCart = {
            id: carts.length + 1,
            image,
            proName,
            quantity,
            price,
        }

        setQuantity(1);
        dispatch(addCart(newCart));
        navigate('/productcustomize');
    }

    return (
        <div className='mpBG'>
            <Navbar bgcolor={colorChange} />

            <div className={styles.mainDiv} style={{ backgroundImage: `url(${props.image})` }}>
                <div className={styles.mainDivContent}>
                    <div style={{ padding: '2%' }}>
                        <FontAwesomeIcon icon={faFutbol} />
                        <h1 className={styles.Hero}>Customize<br />Your Own {props.sportTitle} Jersey!</h1>
                    </div>
                    <div className={styles.custSection}>
                        {/* Customize Card */}
                        <div className={styles.cardMainDiv}>
                            <div className={styles.cardSuperDiv}>
                                <div className={styles.card} style={{ backgroundImage: `url(${props.cardImage})` }}>
                                    <div className={styles.playerName}>
                                        <h1 style={{ userSelect: 'none' }}>{name}</h1>
                                    </div>
                                    <div className={styles.playerNum}>
                                        <h1 style={{ userSelect: 'none' }}>{num}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.shirtOptions}>
                            <div className={styles.shirtDetails}>
                                <div className={styles.shirtHeader}>
                                    <h3 className={styles.headH1} style={{ textAlign: 'start', fontSize: '2rem' }}>Argentina Football Shirt 2023</h3>
                                    <del className={styles.headDel}>PKR 6000</del> <h6 className={styles.headH} style={{ textAlign: 'start' }}>PKR 3000 </h6>
                                </div>
                                <div className={styles.nameDiv}>
                                    <h3>Customize</h3>
                                    <input type="text" placeholder='Enter your name' className={styles.inputName} onChange={changeText} />
                                    <input type="number" placeholder='Input number' className={styles.inputName} onChange={changeNum} min='1' max='99' maxlength='2' />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '50%' }}>

                                    <div className={styles.shirtSize}>
                                        <h3>Size</h3>
                                        <select>
                                            <option value="">Select Option</option>
                                            <option value="">S</option>
                                            <option value="">M</option>
                                            <option value="">L</option>
                                            <option value="">XL</option>
                                            <option value="">2XL</option>
                                        </select>
                                    </div>
                                    <div className={styles.shirtAddAndCart} >
                                         
                                        <div className={styles.shirtAdd}>
                                            <button onClick={minus}>-</button>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>

                                                <p>{quantity}</p>
                                            </div>
                                            <button onClick={add}>+</button>
                                        </div>
                                        <button className={styles.shirtAddToCart} onClick={handleSubmit} >ADD TO CART</button>
                                         </div>
                                    <div className={styles.shirtDelivery}>
                                        <h1>Approximate delivery between {iDate} - {lDate}</h1>
                                        {/* <h1>Approximate delivery between 08/09/2023 - 14/09/2023</h1> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.productDetails}>
                        <div className={styles.Details} onClick={() => changeArrow1()}>
                            <h1>Details</h1>
                            <div style={{ width: '2%', display: 'flex', alignItems: 'center' }}>
                                <AiOutlineDown id='up' /><AiOutlineUp className={styles.iconUp} id='down' style={{ display: 'none' }} />
                            </div>
                        </div>
                        {toggle1 && (
                            <div className={styles.detailsExtended}>
                                <p>
                                    - Color: Black
                                    <br />
                                    - Fabric: 100% Organic Cotton
                                    <br />
                                    - Washing: Reverse at 30 °
                                    <br />
                                    - Weight: 175 gsm
                                </p>
                            </div>)}
                        <div className={styles.Details} onClick={() => changeArrow2()}>
                            <h1>Size Guide</h1>
                            <div style={{ width: '2%', display: 'flex', alignItems: 'center' }}>
                                <AiOutlineDown id='up2' /><AiOutlineUp className={styles.iconUp} id='down2' style={{ display: 'none' }} />
                            </div>
                        </div>
                        {toggle2 && (<div className={styles.detailsExtended}>
                            <p>
                                Consult the size station, compare the measurements with your favorite T-shirt (sweatshirt, pants, etc ...).
                                Click on the button below.
                            </p>
                            <button className={styles.shirtAddToCart} style={{ height: '40px', width: '150px', margin: '10px 0%', backgroundColor: 'transparent' }}>See Guide</button>
                        </div>)}
                        <div className={styles.Details} onClick={() => changeArrow3()}>
                            <h1>Shipping</h1>
                            <div style={{ width: '2%', display: 'flex', alignItems: 'center' }}>
                                <AiOutlineDown id='up3' /><AiOutlineUp className={styles.iconUp} id='down3' style={{ display: 'none' }} />
                            </div>
                        </div>
                        {toggle3 && (<div className={styles.detailsExtended}>
                            <p>
                                Generally your order will be entrusted to the courier within 24 hours and will be delivered to you in 2/3 working days (4/5 days for islands and the EU). To track the shipment you will receive a tracking code via email. Due to current health conditions, shipments may be delayed.
                                <br /><br />
                                You can return your order within 14 days of receiving the product, free of charge and for any reason.
                            </p>
                        </div>)}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductCustomize