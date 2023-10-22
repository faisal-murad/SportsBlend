import React from 'react';
import './footer.css'; // You can create a CSS file for styling 
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'   

function Footer() {
  return (
    <div className="footer">
      <div className='footer-UA'>
        <h1 className='heading-UA'> Newsletter </h1>
        <span className='para-UA'>Get a 5% discount immediately</span>
        <p className='parra-UA'>Subscribe to the newsletter, and you will be rewarded with a promotional code to use on your first purchase!</p>
        <div className='center-input-UA'>
          <input type='email' className='inp-UA' placeholder='Email' />
          <button className='send-UA'>send</button>

        </div>
      </div>
      <h2 className="heading">Follow Us</h2>
      <p className="para">Always stay informed and connected to all our channels, support us and help us grow!</p>
      <ul className='icons'>
        <li><a href="https://web.facebook.com/profile.php?id=100031033301734/" target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a></li>
        <li><a href="https://www.instagram.com/rizwanbhatti63/" target="_blank" rel="noopener noreferrer"><AiFillFacebook /></a></li>
        <li><a href="https://www.linkedin.com/in/muhammad-rizwan-5a4756234/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a></li>
      </ul>
      <div className="footer-items">
        <div className="footer-row">
          <h3>Pages</h3>
          <p>Home</p>
        </div>
        <div className="footer-row">
          <h3>Account</h3>
          <p>Cart</p>
        </div>
        <div className="footer-row">
          <h3>Contacts</h3>
          <p>45678</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;