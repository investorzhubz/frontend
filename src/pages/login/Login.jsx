import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import { useLogin } from '../../hooks/useLogin'
import Navbar from '../../components/navbar/Navbar'
import Alert from '../../components/alerts/Alert'
import Footer from '../../components/footer/Footer'

function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const {loading,error,login}=useLogin()
    const [btn, setBtnState] = useState('Login');

    const handleSubmit=async(e)=>{
      setBtnState('Processing...')
        e.preventDefault()
        await login(username,password)
        setBtnState('Login')

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
        
       </div>
        <div className='signupform' >
        <form className="form" onSubmit={handleSubmit}>
          <div>
          <Link to='/signup'>
      <p className="signup-link">
        Don't Have an Account?
        <a>Signup</a> 
        </p>
      </Link>
          </div>
       <p className="form-title">Log in to your account</p>
       <div className="input-container">
          <input placeholder="Username" type="text" onChange={(e)=>{
            setUsername(e.target.value)
          }} value={username}/>
        </div>
        <div className="input-container">
          <input placeholder="Enter password" type="password"  onChange={(e)=>{
            setPassword(e.target.value)
          }}/>
        </div>
         <button className="submit" type="submit">
        {btn}
      </button>
      <Link to='/forgot-password'>
      <p className="signup-link fp"><a>Forgot Password</a></p>
      </Link>
   </form>
        

      
    </div>
    </div>
    
    
    </div>
  )
}

export default Login
