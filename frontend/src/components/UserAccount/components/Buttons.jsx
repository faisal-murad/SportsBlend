import React from 'react';
import '../userAcc.modules.css';
import { Button } from 'react-bootstrap';
import { FaLifeRing, FaGift, FaShoppingCart } from 'react-icons/fa'; 
// import "../App.css";
function Buttons() {
  return (
    <>
      <div className="butt-UA">
        <button size="lg" style={{ backgroundColor: "#ec6b7b" }}>
          Assistance <FaLifeRing className="button-icon-UA" />
        </button>
        <button size="lg" style={{ backgroundColor: 'rgb(85, 51, 140)' }}>
          Gift Card <FaGift className="button-icon-UA" />
        </button>
        <button size="lg" style={{ backgroundColor: 'rgb(54, 58, 67)' }}>
          Shop <FaShoppingCart className="button-icon-UA" />
        </button>
      </div>
    </>
  );
}

export default Buttons;
