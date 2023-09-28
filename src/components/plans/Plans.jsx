import React from 'react'
import {useState} from 'react'
import { Link,useLocation } from 'react-router-dom'
// import './login.css'
import { useLogin } from '../../hooks/useLogin'
import Navbar from '../../components/navbar/Navbar'
import './plan.css'
import { usePlanContext } from '../../hooks/usePlanContext'
import axios from 'axios'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'
import Alert from '../alerts/Alert'
function Plans(index) {
    const [number,setNumber]=useState('')
    const {plan}=usePlanContext()
    const [loading,setLoading]=useState(false)
    const {user}=useAuthContext()
    const [error,setError]=useState(null)
    const [message,setMessage]=useState(null)
    const navigate=useNavigate()
    // const location =useLocation()
    // const search=new URLSearchParams(location.search)
    // const name=search.get('name')
    // const price=search.get('price')

     const handleSubmit=(e)=>{
      
      setError(false)
      setMessage(false)
        e.preventDefault()
        setLoading(true)
       if(user){
        const obj={number:number}
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/plans/${plan.id}`,obj,{
          headers:{
              "Content-Type":'application/json',
              Authorization:`Bearer ${user.token}`
          }
        }).then(response=>{
          setLoading(false)
          setMessage(response.data.msg)
          
          navigate('/dashboard')
        }).catch(error=>{
          setLoading(false)
          setError(error.response.data.error)
          

        })
  
       }
       else{
        navigate('/login')
       }
     }
  return (
    <div>
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
       <p className="form-title">{plan.name}</p>
       <div className="amount">
        <label>Amount: </label>
          <p> {plan.price} FCFA</p>
        </div>
        <div className="input-container">
          <input placeholder="Enter Number" type="number"  onChange={(e)=>{
            setNumber(e.target.value)
          }} value={number}/>
        </div>
         {
          loading ?<button className="submit" type="submit">
            Processing....
          </button>:<button className="submit" type="submit">
           Buy Now
        </button>
         }

   </form>
        

      
    </div>
    </div>
    </div>
    </div>
  )
}

export default Plans
