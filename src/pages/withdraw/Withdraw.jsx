import React from 'react'
import './withdraw.css'
import Navbar from '../../components/navbar/Navbar'
import { useAuthContext } from '../../hooks/useAuthContext'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import Alert from '../../components/alerts/Alert'
function Withdraw() {
  const [data, setData] =useState()
  const [amount, setAmount]=useState()
  const[disabled,setDisable]=useState(false)
  // const[msg,setMsg]=useState()
  const [success,setSuccess]=useState(false)
  const[error,setError]=useState()
  const navigate=useNavigate()
  const {user}=useAuthContext()
  const [btnState,setBtnState]=useState('Withdraw')
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/`,{
      headers:{
        Authorization:`Bearer ${user.token}`
      }
    }).then(response=>{
      setData(response.data.phoneNumber)
   
      
    }).catch((error)=>{
      if(error.response.data.error==='email not verified'){
        navigate('/verify')
  
      }
      setError(error.response.data.error)
  })
    
  })
   const handleSubmit=(e)=>{ 
    e.preventDefault()
    setDisable(true)
    setError(false)
    setSuccess(false)
    setBtnState('Processing...')
     axios.post(`${process.env.REACT_APP_BACKEND_URL}/withdraw`,{amount:amount},{
      headers:{
        Authorization:`Bearer ${user.token}`
      }

     }).then(response=>{
      setBtnState('Withdraw')
      setSuccess(response.data.msg)
      setDisable(false)
    
     }).catch(error=>{
      console.log("error occured")
      setBtnState('Withdraw')
       setError(error.response.data.error)
       setDisable(false)
       console.log(error)
     })
   }

  return (
    <div className='withdrawal'>
      <div style={{position:'relative' ,zIndex:'999'}}>
        <Navbar />
        {error &&( <div>
        <Alert type="error">
        <p>{error}</p>

        </Alert>
      </div>)}
      {success &&( <div>
        <Alert type="success">
        <p>{success}</p>

        </Alert>
      </div>)}
       </div>
      <div className="login-box">

      <p>Withdraw With Payment Option 1</p>
  <form>
    <div className="user-box">
    
      <input required="true"  name="Phone Number"
      type="" value={data} readOnly/>
      {/* <label className='numbers'>Phone Number</label> */}
    </div>
    <div className="user-box">
      <input required="true" name="Amount"
      type="Number" onChange={(e)=>{
        setAmount(e.target.value)
      }} value={amount}/>
      <label >Amount (XAF)</label>
    </div>
    <div className="depobtns">
      <button onClick={handleSubmit} disabled={disabled}>{btnState}</button>
      </div>
  </form>
</div>
    </div>
  )
}

export default Withdraw
