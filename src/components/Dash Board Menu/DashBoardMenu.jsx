import React, { useState,useRef } from 'react'
import './dashboardmenu.css'
import { Link } from 'react-router-dom'
import LoggedInMenu from '../menus/LoggedInMenu'
import LogoutMenu from '../menus/LogoutMenu'
import logo from '../../resources/images/logo.png'
import {useLogout} from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'
import {FaBars,FaTimes} from 'react-icons/fa'
import { FaCaretDown } from 'react-icons/fa';
import AdminMenu from '../menus/AdminMenu'
import { FaSignOutAlt } from 'react-icons/fa';
function DashBoardMenu() {
    const [toggleMenu,setToggleMenu]=useState(false)
    const {logout}=useLogout()
    const {user}=useAuthContext()
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [showProfile,setShowProfile]=useState(false)
     const menuToggleRef = useRef(null);
     const handleLogout=()=>{
        logout()

    }
    const closeMenu=()=>{
        setIsMenuOpen(!isMenuOpen)

    }
  return (
    <div className='dasboardmenu'>
        <div className="dmlogo">
            <Link to='/'><img src={logo} alt="logo" /></Link>
        </div>
         <div>
         <div className="dmprofile" onClick={()=>{
            setShowProfile(!showProfile)
         }}>
             <p>Creators Profile</p>
             <FaCaretDown />
         </div>
         {
            showProfile&&(
                <div className="dmprofiledetails fadeIn">
                    <Link to='/profile'><p>Profile</p></Link>
                    <div classname='dmlogout'  onClick={handleLogout}>
                        <FaSignOutAlt/>
                        <span>Logout</span>

                    </div>
                    
                </div>
            )
         }
         </div>
         <div className='dmmenu'>
            {
                !isMenuOpen?(
                    <FaBars onClick={()=>{
                        setIsMenuOpen(!isMenuOpen)
                    }} style={{zIndex:999}}/>
                ):(
                    <FaBars onClick={()=>{
                        setIsMenuOpen(!isMenuOpen)
                    }} style={{zIndex:999}}/>
                )
            }

            {
                isMenuOpen&&(
                    <div className="usersidemenu">
                        <AdminMenu closeMenu={closeMenu}/>

                    </div>
                    
                )
            }
         </div>
        
        </div>
  )
}

export default DashBoardMenu