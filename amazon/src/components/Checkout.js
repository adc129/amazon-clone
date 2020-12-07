import React from 'react';
import '../css/Checkout.css'
import Subtotal from './Subtotal.js';

function Checkout(){
  return(
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/sns/email/SnS-Creative-Desktop._CB1579804990_.png"
          alt=""/>

      <div className="">
        <h2 className="checkout__title">
            Your Shopping Basket
        </h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout
