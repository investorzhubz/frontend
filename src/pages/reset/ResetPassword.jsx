import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Alert from '../../components/alerts/Alert'
function ResetPassword() {
  
    const location =useLocation()
    const search=new URLSearchParams(location.search)
    const token=search.get('token')
    console.log(token)
    const [password,setPassword]=useState('')
    const [password1,setPassword1]=useState('')
    const [error,setError]=useState()
    const [msg,setMsg]=useState()

    const handleSubmit=(e)=>{
        
        e.preventDefault()
        setError(false)
        setMsg(false)
        const obj={
            password:password,
            password1:password1
        }
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/reset/${token}`,obj,{
            headers:{
                "Content-Type":"application/json"
            }
        }).then(response=>{
            setPassword('')
            setPassword1('')
            setMsg(response.data.msg)
        }).catch(error=>{
            setError(error.response.data.error)
        })

    }
  return (
    <div className="signup">
      <div className="signfrom">
      <div className="signav" style={{position:'relative' ,zIndex:'999'}}>
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
        <div className='signupform' >
        <form className="form" onSubmit={handleSubmit}>
       <p className="form-title">Reset Your Password</p>
       <div className="input-container">
          <input placeholder="Password" type="password" onChange={(e)=>{
            setPassword(e.target.value)
          }} value={password}/>
        </div>
        <div className="input-container">
          <input placeholder="Confirm Password" type="password"  onChange={(e)=>{
            setPassword1(e.target.value)
          }} value={password1}/>
        </div>
         <button className="submit" type="submit">
        Submit
      </button>
    
   </form>
        

      
    </div>
    </div>
    
    
    </div>
  )
}

export default ResetPassword
