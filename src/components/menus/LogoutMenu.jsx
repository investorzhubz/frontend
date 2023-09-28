import React from 'react'
import { Link } from 'react-router-dom'

function LogoutMenu() {
  return (
    <>
    <Link to='/'>
            <p>Home</p>

        </Link>
        <Link to='/plans'>
            <p>Pricing</p>
        </Link>
        <Link to='/reward-program'>
            <p>Reward Program</p>
        </Link>
        <Link to='/about'>
            <p>About</p>
        </Link>
        <Link to='/contact'>
            <p>Contact Us</p>
        </Link>
        <Link to='/market-place'><p>Market Place</p></Link></>
        
  )
}

export default LogoutMenu
