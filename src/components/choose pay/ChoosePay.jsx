import React from 'react'
import './choosepay.css'
import {Link}from 'react-router-dom'
function ChoosePay({link1,link2}) {
  return (
    <div className='choose'>
         <div class="container">
    <h1>Choose a Payment Service</h1>
    
    <div class="payment-options">
    <Link to={link1}>
    <div class="payment-option" onclick="selectPayment('credit-card')">
        {/* <img src="credit-card.png" alt="Credit Card" /> */}
        <h2>Payment Option 1</h2>
        <p>(Deposits Only)</p>
    
      </div>
    
    </Link>
      
      <Link to={link2}>
      <div class="payment-option" onclick="selectPayment('paypal')">
        {/* <img src="paypal.png" alt="PayPal" /> */}
        <h2>Payment Option 2</h2>
        <p>(Withdrawals  Only)</p>
      
      </div>
      </Link>
    </div>
    <div id="selected-method"></div>
  </div>
      
    </div>
  )
}

export default ChoosePay
