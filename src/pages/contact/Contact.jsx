import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import './contact.css'
import axios from 'axios'
import Alert from '../../components/alerts/Alert'
import { useState } from 'react'
function Contact() {
    const[firstName,setFirstname]=useState('')
    const[lastName,setLastname]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[message,setMessage]=useState('')
    const[msg,setMsg]=useState()
    const[error,setError]=useState()
    const [scroll,setScroll]=useState(0)
    const [btnState,setBtnState]=useState('Send Message')
   const handleSubmit=(e)=>{

    e.preventDefault()
    setBtnState('Sending...')
    setError(false)
    setMsg(false)
   

    const obj={
        firstName:firstName,
        lastName:lastName,
        email:email,
        phone:phone,
        messageBody:message
    }
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/contact`,obj,{
        headers:{
            "Content-Type":'application/json'
        }
    }).then(response=>{
        setBtnState('Send Message')
        setMsg(response.data.msg)

    }).catch(error=>{
        setBtnState('Send Message')
        setError(error.response.data.error)

    })
     
   }

  return (
    <div className='contact'>
        <div style={{position:'relative' ,zIndex:'999'}}>
            <Navbar/>
            {error &&( <div style={{position:'fixed',width:'100%',top:`0`}} >
        <Alert type="error">
        <p>{error}</p>

        </Alert>
      </div>)}
            
      {msg &&( <div style={{position:'fixed',width:'100%',top:`0`}}>
        <Alert type="success">
        <p>{msg}</p>

        </Alert>
      </div>)}

        </div>
      <div className="contact_us">
  <div className="responsive-container-block container">
    <form className="form-box">
      <p className="text-blk contact-head">
        Get in touch
      </p>
      <p className="text-blk contact-subhead">
      Whether you have a question, feedback, or just want to say hello, we would love to hear from you! Our team is always ready to help and eager to connect. Don't hesitate to reach out - let's start a conversation and see how we can work together to achieve your goals.
      </p>
      <div className="container-block forms-wrapper">
        <div className="responsive-container-block">
          <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt-4">
            <p className="text-blk input-title">
              First Name
            </p>
            <input type='text' className="input" id="ijowk-4" name="FirstName" onChange={(e)=>{
                setFirstname(e.target.value)
            }} value={firstName}/>
          </div>
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
            <p className="text-blk input-title">
              Last Name
            </p>
            <input type='text' className="input" id="indfi-3" name="Last Name" onChange={(e)=>{
                setLastname(e.target.value)
            }} value={lastName} />
          </div>
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
            <p className="text-blk input-title">
              Email
            </p>
            <input type='email' className="input" id="ipmgh-4" name="Email" onChange={(e)=>{
                setEmail(e.target.value)
            }} value={email}/>
          </div>
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
            <p className="text-blk input-title">
              Phone No.
            </p>
            <input className="input" id="imgis-4" name="PhoneNumber" onChange={(e)=>{
                setPhone(e.target.value)
            }} value={phone}/>
          </div>
          <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-4">
            <p className="text-blk input-title">
              Message
            </p>
            <textarea className="textinput" id="i5vyy-4" placeholder="Write your message..." onChange={(e)=>{
                setMessage(e.target.value)
            }} value={message}></textarea>
          </div>
        </div>
        <button className="submit-btn" onClick={handleSubmit}>
          {btnState}
        </button>
      </div>
    </form>
  </div>
</div>
<div style={{position:'relative' ,zIndex:'999'}}>
    <Footer/>
</div>
    </div>
  )
}

export default Contact
