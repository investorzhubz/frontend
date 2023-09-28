import React, { useState } from 'react'
import './footer.css'
import {Link} from 'react-router-dom'
import ChoosePay from '../choose pay/ChoosePay'
import FooterLogo from '../../resources/images/footerlogo.png'


function Footer() {
  const [showDepo,setShowDepo]=useState(false)
  const [showWith,setShowWith]=useState(false)
  return (
    <div>
      <footer className="footer-section">
        <div className="containers">
            <div className='footer'>
            <div className="footer__addr">
   <img src={FooterLogo} alt="footer logo" />
   <p>© 2023 Investors Hub. All Rights Reserved.</p>
    {/* <p className='footer-text'>Introducing our AI marketing bot, the ultimate tool for affiliate marketers. Our bot is designed to help you increase your revenue by identifying the best products and promotions to promote to your audience. With our AI marketing bot, you can analyze market trends, track product performance, and discover new opportunities to grow your affiliate marketing business.</p> */}
  </div>
  
  <ul className="footer__nav">
    <div className="firstfootermenu">
      <li className="nav__item">
      <h2 className="nav__title">Useful Links</h2>

      <ul className="nav__ul">
        <li>
          <Link to='/about'><a href="#">ABout Us</a></Link>
        </li>

        <li>
          <Link to='/plans'><a href="#"> Our Pricing Lists</a></Link>
        </li>
            
        <li>
          <Link to='/market-place'><a href="#">Market Place</a></Link>
        </li>
      </ul>
    </li>
    
    <li className="nav__item nav__item--extra">
      <h2 className="nav__title">User</h2>
      
      <ul className="nav__ul nav__ul--extra">
        <li>
          <a href="#" onClick={()=>{
            setShowDepo(true)
          }}>Deposit</a>
        </li>
        <li>
         <a href="#" onClick={()=>{
            setShowWith(true)
          }}>Withdraw</a>
        </li>
        
        <li>
          <Link to='/dashboard'><a href="#">Dashboard</a></Link>
        </li>
        
        {/* <li>
          <Link to='/'><a>Home</a></Link>
        </li> */}
        
      </ul>
    </li>
    
    </div>
    
  </ul>
   <div className="footer__addr">
   <h2>Contact</h2>
    
    <address>
     Phone : +237 679236391<br />
          
      <a class="footer__btn" >Email Us:investorzhubz@gmail.com</a>
    </address>
   </div>
                      
            </div>
        </div>
        <div>
        {
          showDepo&&(
            // <ChoosePay link1='/deposit' link2='/deposit1' />
            <ChoosePay link1='/deposit'/>
          )
        }
       </div>
       <div>
       {
          showWith&&(
            <ChoosePay link1='/withdraw' link2='/withdraw1' />
          )
        }
       </div>
    </footer>
    </div>
  )
}

export default Footer
