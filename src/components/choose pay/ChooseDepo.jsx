import React from 'react'
import './choosepay.css'
import {Link}from 'react-router-dom'
function ChooseDepo() {
  return (
    <div className='choose'>
         <div class="container">
    <h1>Choose a Payment Service</h1>
    
    <div class="payment-options">
    <Link to='/buy-plan'>
    <div class="payment-option" onclick="selectPayment('credit-card')">
        {/* <img src="credit-card.png" alt="Credit Card" /> */}
        <h2>Payemnt Option 1</h2>
      </div>
    
    </Link>
      
      {/* <Link to=''> */}
      <div class="payment-option" onclick="selectPayment('paypal')">
        {/* <img src="paypal.png" alt="PayPal" /> */}
        <h2>Payemnt Option 2</h2>
        <p>Unavailable</p>
      </div>
      {/* </Link> */}
    </div>
    <div id="selected-method"></div>
  </div>
      
    </div>
  )
}

export default ChooseDepo
