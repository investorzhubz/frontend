import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './adminmenu.css'
import { FaCreditCard } from 'react-icons/fa';
import { FaCloud } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaRobot } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';
import { FaShare } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import { FaCube } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa'
import ChoosePay from '../choose pay/ChoosePay';
import { useAuthContext } from '../../hooks/useAuthContext';
import axios from 'axios';

function AdminMenu({closeMenu}) {
    const [showDepo,setShowDepo]=useState(false)
    const [showWith,setShowWith]=useState(false)
    const [dropdown,setDropdown]=useState(false)
    const [showPayment,setShowPayment]=useState(false)
    const [data,setData]=useState(null)
    const [plan,setPlan]=useState("No Plan")
    const {user}=useAuthContext()
    const togglDropdown=()=>{
        setDropdown(!dropdown)
    }
    const handleCloseMenu=()=>{
        closeMenu()

    }
     const handletransactions=(type)=>{
    if (type==='deposit'){
      setShowWith(false)
      setShowDepo(true)
      
    }
    else if(type==='withdraw'){
      setShowDepo(false)
      setShowWith(true)
    }
  }

  useEffect(()=>{
    axios
  .get(`${process.env.REACT_APP_BACKEND_URL}/user`, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  })
  .then((response) => {
    setData(response.data);
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/plans/${response.data.plan.planId}`).then(response=>{
        setPlan(response.data.title)

    }).catch(error=>[
        console.log(error)
    ])
    console.log(data);
  })
  .catch((error) => {
    console.log('Error');
  });

},[user.token])
  return (
     
    <div className="overalladmenu">
      
        
       {
        data&&(
            <div className="admenuitems slideInLeft">
           
            <div className='topadmenu' onClick={handleCloseMenu}>
            <FaTimes size={20}style={{color:'#000', alignItems:'flex-start'}}/>
            </div>
            <div className="admenuuser">
             
                <p>{data.username}</p>
                <div>
                <span>{plan}</span>
                </div>
            </div>
           
       <div className="aditem">
       <Link to='/welcome-bonus'>
        <div className='admenuitem'>
        <FaCloud />
        <p>Cashout Welcome Bonus</p>
        </div>
        

        </Link>
       </div>
       <div className="aditem">
       <Link to='/'>
            <div className="admenuitem">
                <FaHome/>
            <p>Home</p>
            </div>

        </Link>
       </div>
        <div className="aditem">
        <Link to='/clickbot'>
          <div className="admenuitem">
          <FaRobot />
            <p>Bot Sales</p>
          </div>
        </Link>
        </div>
        <div className="aditem">
        <>
            <div className="admenuitem" onClick={()=>{
                setShowPayment(!showPayment)

            }}>
                <FaWallet />
            <p>Payment</p>
            <FaAngleDown/>
             
            </div>
            
        </>
       {
        showPayment&&(
            <div className="addropdown  zoomIn">
            <p onClick={()=>{
                handletransactions('deposit')
            }}>Deposit</p>
            <p onClick={()=>{
                handletransactions('withdraw')
            }}>Withdraw</p>
        </div>
        )
       }

        </div>
       
        <div className="aditem">
        <Link to='/coming-soon'>
            <div className="admenuitem">
                <FaShoppingBag/>
            <p>Products</p>

            </div>
            
        </Link>

        </div>
        <div className="aditem">
        <Link to='/referrals'>
            <div className="admenuitem">
                <FaLink/>
            <p>Referrals</p>

            </div>
            
        </Link>

        </div>
        {/* <div className="comingsoon">
            <p>Comming soon</p>
        </div> */}
        <div className="aditem">
        <Link to='/coming-soon'>
            <div className="admenuitem">
                <FaBookmark/>
            <p>Pay For Client</p>

            </div>
            
        </Link>

        </div>
        <div className="aditem">
        <Link to='/contact'>
            <div className="admenuitem">
                <FaCube/>
            <p>Free Spin</p>

            </div>
            
        </Link>

        </div>
        <div className="aditem">
        <Link to='/coming-soon'>
            <div className="admenuitem">
                <FaTiktok/>
            <p>Watch Titok</p>

            </div>
            
        </Link>

        </div>
        <div className="aditem">
        <Link to='/ccoming-soon'>
            <div className="admenuitem">
                <FaYoutube/>
            <p>Watch Youtube</p>

            </div>
            
        </Link>

        </div>
        <div>
        {
          showDepo&&(
          <div className='dashpayment'>
              <ChoosePay link1='/deposit'/>
            {/* // <ChoosePay link1='/deposit' link2='/deposit1' /> */}
          </div>
          )
        }
       </div>
       <div  >
       {
          showWith&&(
           <div className='dashpayment'>
             <ChoosePay link1='/withdraw' link2='/withdraw1' />
           </div>
          )
        }
       </div>

    </div>
        )
       }
    </div>
  )
}

export default AdminMenu
