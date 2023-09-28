import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
function Verify() {
 const {user,dispatch}=useAuthContext()
 const navigate=useNavigate()
   const location =useLocation()
    const search=new URLSearchParams(location.search)
    const token=search.get('token')
  
   useEffect(()=>{
    console.log(token)
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/verify/${token}`,{
        headers:{
            Authorization:`Bearer ${user.token}`
        }

    }).then(response=>{
        navigate('/dashboard')
    }).catch(error=>{
        if(error.response.data==='invalid Token'){
            dispatch({type:'LOGOUT'})
            navigate('/login')

        }else{

            navigate('/verify')
        }

})

   },[])


  return (
    <div>
      
    </div>
  )
}

export default Verify
