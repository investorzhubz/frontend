import React, { useEffect, useState } from 'react'
import './profile.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { useAuthContext } from '../../hooks/useAuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Profile() {
    const {user}=useAuthContext()
    const [data,setData]=useState(null)
    const navigate=useNavigate()
    useEffect(()=>{
     if(user){
        axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/user`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((response) => {
          setData(response.data);
          console.log(data);
        })
        .catch((error) => {
          console.log('Error');
        });
     }else{
        navigate('/login')
     }

    },[user])
  return (
    <div className='overallprofile'>
       {
        data&&(
            <>
             <Navbar />
        <div className="profile">
            <h3>User Details</h3>
            <div className="profiledetail">
                <p>Username</p>
                <span>{data.username}</span>
            </div>
            <div className="profiledetail">
                <p>Email</p>
                <span>{data.email}</span>
            </div>
            <div className="profiledetail">
                <p>Phone Number</p>
                <span>+237 {data.phoneNumber}</span>
            </div>
            <div className="profiledetail">
  <p>Account Verified?</p>
  {
    data.emailVerifyAt ? (
      <span class="checkmark true">True ✔</span>
    ) : (
      <span class="checkmark false">False ✘</span>
    )
  }
</div>
<div className="profiledetail">
                <p>Welcome Bonus Status</p>
                 {
                    data.bonus===0?(
                        <span>Withdrawn</span>
                    ):(
                        <span>Unwithdrawn</span>
                    )
                 }
            </div>

        </div>
        <Footer/>
            </>
        )
       }
    </div>
  )
}

export default Profile