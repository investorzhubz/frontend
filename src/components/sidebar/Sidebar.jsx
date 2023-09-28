import React, { useState ,useEffect} from "react";
import "./sidebar.css";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link, Navigate } from "react-router-dom";
import axios from 'axios'
import { useAuthContext } from "../../hooks/useAuthContext";
import {useLogout} from '../../hooks/useLogout'

const Sidebar = () => {
  
  const [selected, setSelected] = useState(0);
  const [data,setData]=useState()
  const [error,setError]=useState()
  const [expanded, setExpaned] = useState(true)
  const [redirect,setRedirect]=useState(false)
  const {logout}=useLogout()

  const handleLogout=async ()=>{
    await logout()
    setRedirect(true)
    
  }

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  const {user}=useAuthContext()
  useEffect(()=>{
    const fetchData=()=>{
      if(!user){
        setError('You Must be logged in')
      }
    
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/`,{
        headers:{
        Authorization:`Bearer ${user.token}`
        }
      }).then((response)=>{
        setData(response.data)
        console.log(data)
      })
      
    }

    fetchData()
   

  },[])
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        {/* <img src={Logo} alt="logo" /> */}
        <span>
          AFM<span>-</span>Bot
        </span>
        
      </div>
      <div className="username">

          <p>{data && data.username}</p>
       
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() =>{
                setSelected(index)
               
              }}
            >
              <Link to={item.Link}><item.icon /> </Link>
              <Link to={item.Link}><span>{item.heading}</span></Link>
            </div>
          );
        })}
        {/* signoutIcon */}
        <div className="menuItem lg">
          <UilSignOutAlt />
          <span onClick={handleLogout}>Logout</span>
        </div>
      </div>
    </motion.div>
    {redirect &&(
      <Navigate to="/"/>
    )}
    </>
  );
};

export default Sidebar;