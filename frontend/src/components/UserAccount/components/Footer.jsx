import React from 'react';
// import "../index.css";
// import "../App.css";
import '../userAcc.modules.css'


function Footer() {
  return (
    <>
      <div className='footer-UA'>
        <h1 className='heading-UA'> Newsletter </h1>
        <span className='para-UA'>Get a 5% discount immediately</span>
        <p className='parra-UA'>Subscribe to the newsletter, and you will be rewarded with a promotional code to use on your first purchase!</p>
        <div className='center-input-UA'>
          <input type='email' className='inp-UA' placeholder='Email' />
         <button className='send-UA'>send</button>
    
        </div>
      </div>
    </>
  )
}

export default Footer;
