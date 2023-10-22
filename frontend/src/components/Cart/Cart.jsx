import React, { useState } from 'react';
// import  './Cart.css';
import styles from './cart.modules.css';
import image from '../../assets/shirtFront.jpg';
import Navbar from '../NavbarFooter/Navbar'
import Footer from '../NavbarFooter/Footer' 

function Cart() {
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
      <>
      <Navbar bgcolor={colorChange}/>
      <div className='Main-div-C'>

        <div className='Inner-C'>

          <div className='Inner1-C'>

            <div className='heading-C'>
              {/* <div>Did you get a gift card from a friend? Enter it here!</div> */}
              <div className='carts-C'>Cart</div>
              {/* <div>*Customs duties may be applied for non-EU countries</div> */}
              <span className='divider-C'></span>
            </div>

            <div className='border-C'>
              <h3>Subtotal</h3>
              <h3>Quantity</h3>
              <h3 style={{ marginRight: '70px' }}>Product</h3>
            </div>
            <span className='divider2-C'></span>

            <div className='data-C'>
              <div className='pic-C'>
                <img src={image} />
              </div>
              <div className='proDetail-C'>

                <div style={{ color: 'white', margin: '25px 10px', fontWeight: 'bold' }}> T -Shirt Active <br />
                  <div style={{ opacity: "0.5", marginTop: '10px' }}><i>click here to edit</i></div>
                  <div style={{ marginTop: '10px' }}> 29,14$</div>
                  <div style={{ opacity: "0.5", marginTop: '10px' }}><i>To remove</i></div>
                </div>
              </div>
              <div className='quantityDiv-C'>
                2
                {/*<input className='input' type ="text"/>*/}</div>
              <div className='total-C'>29,14$</div>
            </div>
            <span className='divider2-C'></span>
            <span className='divider2-C'></span>
            <br /><br />

          </div>


          <div className='Inner2-C'>
            <h1 className='in2-h-C'>Cart Total</h1>
            <span className='divider2-C'></span>
            <div className='in2-p-C'>
              <h4 style={{ marginLeft: '30px' }}>Subtotal</h4>
              <span style={{ margin: '20px 250px', fontWeight: "bolder" }}>29,14$</span>
            </div>
            <span className='divider2-C'></span>
            <div className='shipping-C'>
              <div><h4 style={{ marginLeft: '30px', color: "white", marginTop: "30px" }}>Shipping</h4></div>

              <div className='ship-C'>
                <span style={{ padding: "4px" }}>Standard shipping:14,78$</span>
                <span style={{ marginLeft: "40px" }}>Shiping in Australia</span>
                <span style={{ marginLeft: "70px" }}>change address </span>
              </div>
            </div>


            <span className='divider2-C'></span>

            <div className='grand-C'>
              <div><h3 style={{ marginLeft: '30px', color: "white", marginTop: "30px" }}>Total</h3></div>

              <div style={{ marginLeft: "190px", marginTop: "3px" }}> <h3>14,50$</h3></div>
            </div>
            <span className='divider2-C'></span>

            <div className='btn-C'>

              <button className='button-C'> PROCEED WITH ORDER</button>

            </div>

          </div>

        </div>

      </div>
      <Footer/>
    </>
  )
}

export default Cart

