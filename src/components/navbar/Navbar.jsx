import React, { useRef } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {useLogout} from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'
import LogoutMenu from '../menus/LogoutMenu'
import LoggedInMenu from '../menus/LoggedInMenu'
import logo from '../../resources/images/logo.png'

function Navbar() {
    const [toggleMenu,setToggleMenu]=useState(false)
    const {logout}=useLogout()
    const {user}=useAuthContext()
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const menuToggleRef = useRef(null);
    const handleLogout=()=>{
        logout()

    }
   
  return (
    <div className='navbar'>
        <div className="logo">
            <Link to='/'>
            <img src={logo} alt="logo" />
           
            </Link>
        </div>
        
        <div className="nav-links">
            {user ? <><LoggedInMenu />
            <div className='logout'><button onClick={handleLogout}>Logout</button></div>
            </> : <LogoutMenu/>}
         
        </div>
       
         {!user ?(
             <div className="auth">
                 <div className="authlogo">
                 <img src={logo} alt="logo" />
                 </div>
             <Link to='/login'><p>Log in</p></Link>
                 <Link to='/plans'><p className='signup'>Auto Sale Bots</p></Link>
                 
     
                 
             </div>
         ):(
            <div className="auth">
                 <div className="authlogo">
                 <img src={logo} alt="logo" />
                 </div>
                 
     
                 
             </div>
         )}
        <div className="mobile-menu">
            {toggleMenu ?
            <FaTimes size={27} color="#000" style={{position:'absolute' ,zIndex:'999'} }onClick={()=>setToggleMenu(false)}  className='hbmenu'/>
            :<FaBars color="#fff" size={27} style={{position:'absolute', zIndex:'999'}} onClick={()=>setToggleMenu(true)} className='hbmenu'/>
            }
            {toggleMenu ?(
                <div className='mobile-menu-container slit-in-diagonal-1'>
                    <div className="mobile-menu-links">
                    {user ? <><LoggedInMenu />
            <div className='mob-logout'><button onClick={handleLogout}>Logout</button></div>
            </> : <LogoutMenu/>}
                    </div>
                    {!user &&(
                         <div className="mob-menu-auth">
                         <Link to='/login'><p>Log in</p></Link>
                         <Link to='/plans'><p className='signup'>Auto Sale Bots</p></Link>
                         </div>

                    )}
                   
                    
                </div>

            ):(
                <div className='mobile-menu-container slit-out-vertical'>
                    <div className="mobile-menu-links">
                    {user ? <><LoggedInMenu />
            <div className='mob-logout'><button onClick={handleLogout}>Logout</button></div>
            </> : <LogoutMenu/>}
                    </div>
                    {!user &&(
                         <div className="mob-menu-auth">
                         <Link to='/login'><p>Log in</p></Link>
                         <Link to='/plans'><p className='signup'>Auto Sale Bots</p></Link>
                         </div>

                    )}
                   
                    
                </div>

            )}
            

  



            
        </div>

      
    </div>
  )
}

export default Navbar
