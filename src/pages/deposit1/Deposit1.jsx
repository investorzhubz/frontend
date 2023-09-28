import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './deposit1.css'
import axios from 'axios'
import { useAuthContext } from '../../hooks/useAuthContext'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import Alert from '../../components/alerts/Alert'

function Deposit1() {
    const {user}=useAuthContext()
    const navigate=useNavigate()
    const[msg,setMsg]=useState()
    const[error,setError]=useState(false)
    const[amount,setAmount]=useState(500)
    const[number,setNumber]=useState('')
    const[disabled,setDisable]=useState(false)
    const [btnState,setBtnState]=useState('Deposit')
    const obj={
      amount:Number(amount),
      number:number
    }
    const handledeposit=(e)=>{
      e.preventDefault()
      setBtnState('Processing...')
      setMsg(false)
      setError(false)
       setDisable(true)
         
  
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/mesombdeposit`,obj,{
        headers:{
          "Content-Type":'application/json',
          Authorization:`Bearer ${user.token}`
        }
      }).then((response)=>{
        setBtnState('Deposit')
        const res=response.data
        setMsg(response.data.msg)
        setDisable(false)
      }).catch((error)=>{
        setBtnState('Deposit')
          if(error.response.data.error==='email not verified'){
            navigate('/verify')
      
          }
  
          setError(error.response.data.error)
          setDisable(false)
      })
      setTimeout(()=>{
        setDisable(false)
      },5000)
  
    }
  
    return (
      <div className='deposit'>
         <div style={{position:'relative' ,zIndex:'999'}}>
          <Navbar/>
          {error &&( <div>
          <Alert type="error">
          <p>{error}</p>
  
          </Alert>
        </div>)}
        {msg &&( <div>
          <Alert type="success">
          <p>{msg}</p>
  
          </Alert>
        </div>)}
         </div>
        <div className="login-box">
    <p>Deposit With Payment Option 2</p>
   
    <form>
      <div className="user-box input">
        <input required="" name="Phone Number" type="tel" onChange={(e)=>{
          setNumber(e.target.value)
        }} value={number}/>
        <label>Phone Number</label>
      </div>
      <div className="user-box">
        <input required="" name="Phone Number" type="Number" onChange={(e)=>{
          setAmount(e.target.value)
        }} value={amount}/>
        <label>Amount</label>
      </div>
      
        <div className="depobtns">
        
        <button onClick={handledeposit} disabled={disabled}>{btnState}</button>
        
        </div>
    
    </form>
  </div>
      </div>
    )
}

export default Deposit1
