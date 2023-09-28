import React, { useState } from 'react'
import Alert from '../../components/alerts/Alert'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'


function ForgotPassword() {
    const [email,setEmail]=useState('')
    const [error,setError]=useState()
    const [msg,setMsg]=useState()
    const [btn,setBtnState]=useState('Submit')
    const [disable,setDisable]=useState(false)

      const handleSubmit=(e)=>{
        e.preventDefault()
        setDisable(true)
        setBtnState('Sending...')
        setError(false)
        setMsg(false)
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/passemail/`,{email:email},{
            headers:{
                "Content-Type":"application/json"
            }
          }).then(response=>{
            setBtnState('Submit')
            setEmail('')
            setMsg(response.data.msg)
            setDisable(false)
    
    
          }).catch(error=>{
            setBtnState('Submit')
            setError(error.response.data.error)
            setDisable(false)
          })
      }

  return (
    <div className="signup">
      <div className="signfrom">
      <div className="signav" style={{position:'relative' ,zIndex:'999'}}>
        <Navbar />
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
       <p className="form-title">Enter Your Email</p>
       <div className="input-container">
          <input placeholder="Email" type="email" onChange={(e)=>{
            setEmail(e.target.value)
          }} value={email}/>
        </div>
         <button className="submit" type="submit" disabled={disable}>
        {btn}
      </button>
   </form>
        

      
    </div>
    </div>
    
    
    </div>
  )
}

export default ForgotPassword
