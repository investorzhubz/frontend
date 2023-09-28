import React from 'react'
import {useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import './signup.css'
import { useAuthContext } from '../../hooks/useAuthContext'
import Alert from '../../components/alerts/Alert'
import Navbar from '../../components/navbar/Navbar'

function Signup() {
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [phoneNumber,setNumber]=useState('')
    const [password,setPassword]=useState('')
    const [error, setError] = useState('');
    const [usernameError,SetUsernameError]=useState()
   const [btn, setBtnState] = useState('Signup');
   const { dispatch } = useAuthContext();
   const location =useLocation()
    const search=new URLSearchParams(location.search)
    const  referral=search.get('referral')

    const handleSubmit=async(e)=>{
      setBtnState('Processing')
      SetUsernameError(false)
      e.preventDefault()
      
      if(username.includes(' ')){
        setBtnState('Signup')
        console.log(username)
        
        
        SetUsernameError('Spaces are not allowed for usernames')
        console.log(error)
       }else{

      
        setBtnState('Processing')
        setError(false)
          
           

            const response=await fetch(`${process.env.REACT_APP_BACKEND_URL}/register?referral=${referral}`,{
              method:'POST',
              headers:{'content-type':'application/json'},
              body:JSON.stringify({username,email,phoneNumber,password})
             }).catch(function (error) {
              console.log(error);
          });
             const json =await response.json()
             if(!response.ok){
               setBtnState("Signup")
               setError(json.error)
             }
             if(response.ok){
              setUsername('')
              setEmail('')
              setNumber('')
              setPassword('')
              setError('success')
              localStorage.setItem('user', JSON.stringify(json))
              dispatch({type:'LOGIN',payload:json})
              setBtnState('Signup')
      
             }

        
            }
      

    }

  return (
    
      <div className="signup"> 
       <div className="signav" style={{position:'relative' ,zIndex:'999'}}>
        <Navbar/>
        {error &&( <div style={{position:'fixed',width:'100%',top:`0`}}>
          
        <Alert type="error">

        <p>{error}</p>

        </Alert>
      </div>)}
      {usernameError &&( <div style={{position:'fixed',width:'100%',top:`0`}}>
          
        <Alert type="error">

        <p>{usernameError}</p>

        </Alert>
      </div>)}
       </div>
        <div className='signupform' >
          
        <form className="form">
        <div>
          <Link to='/login'>
      <p className="signup-link">
        Already Have an Account?
        <a>Login</a> 
      </p>
      </Link>
          </div>
       <p className="form-title">Sign up for an account</p>
       <div className="input-container">
          <input placeholder="Username" type="text" onChange={(e)=>{
            

            setUsername(e.target.value)

          }} value={username}/>
        </div>
        <div className="input-container">
          <input placeholder="Enter email" type="email" onChange={(e)=>{
            setEmail(e.target.value)
          }} value={email}/>
      </div>
      <div className="input-container">
          <input placeholder="Phone Number" type="tel" onChange={(e)=>{
            setNumber(e.target.value)
          }} value={phoneNumber}/>
        </div>
        <div className="input-container">
          <input placeholder="Enter password" type="password"  onChange={(e)=>{
            setPassword(e.target.value)
          }} value={password}/>
        </div>
         <button className="submit" onClick={handleSubmit}>
        {btn}
      
      </button>
      {
        usernameError&&(
          <p className='error'>{usernameError}</p>
        )
      }
   </form>
        

      
    </div>
   </div>
  )
}

export default Signup
