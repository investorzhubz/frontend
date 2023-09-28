import React from 'react'
import {Link} from 'react-router-dom'
import './hero.css'
import heroimg from '../../resources/images/herophone.png'
function Hero() {
  return (
    <div className='hero-section section-padding'>
        <div className='hero-text'>
          <p>MAKE MORE SALES, EARN MORE</p>
          <h1>Welcome to Investors Hub <br/>Your Gateway to Earning Online!</h1>
          <span>Investors Hub is your one-stop platform for earning money online<br/>through various tasks and activities.</span>
          <div className="hero-buttons">
          <Link to='/about'><button>More About Us</button></Link>
          </div>
        </div>      
    </div>
  )
}

export default Hero
