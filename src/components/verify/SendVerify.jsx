import React from 'react'
import { useState , useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './verify.css'
import { useAuthContext } from '../../hooks/useAuthContext'
import {Link} from 'react-router-dom'


function SendVerify() {
  const [data,setData]=useState()
   const navigate=useNavigate()
  useEffect(()=>{
      
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/`,{
      headers:{
      Authorization:`Bearer ${user.token}`
      }
    }).then((response)=>{
      setData(response.data)
      console.log(data)
    }).catch(error=>{
      if(error.response.data.error==='email not verified'){
        navigate('/verify')

      }
    })
    
  },[])

  useEffect(()=>{
    if (data){
      if(data.emailVerifyAt){
        navigate('/dashboard')
  
      }
    }
  },[data])
 const {user}=useAuthContext()
 const [success,setSucces]=useState(null)
 const [number, setNumber]=useState(0)
    const handleClick=()=>{
       axios.get(`${process.env.REACT_APP_BACKEND_URL}/sendverify/`,{
        headers:{
            Authorization:`Bearer ${user.token}`
        }
       }).then(response=>{
        setSucces('A fresh Verification Link has been sent to your email')
        setNumber(number+1)

       }).catch(error=>{
        console.log(error)
       })
    }
  return (
    <div>
      <div className="box">
      <div class="card5">
  <div className="card5-content">
  <h2>Email Verification</h2>
    <p>We have send a verification link to your email, click it to verify your account</p>
    <p>Did not recieve? <span onClick={handleClick}>Click to resend</span></p>
    <p>{success &&(
       <span> <span className='number'>{number}</span> {success}</span>

    )}</p>
    <Link to='/'><span><p>Go to Home</p></span></Link>
  </div>
</div>

      </div>
    </div>
  )
}

export default SendVerify
