import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Plans from '../../components/plans/Plan'
import Navbar from '../../components/navbar/Navbar'
import './plan.css'
import Footer from '../../components/footer/Footer'
import Loading from '../../components/loading/Loading'
function Plan() {
const [error,setError]=useState()
  const [data,setData]=useState()
  useEffect(()=>{
     
    const fetchResponse=()=>{
       axios.get(`${process.env.REACT_APP_BACKEND_URL}/plans/`).then((response)=>{
          setData(response.data)
       }).catch(error=>{
        setError(error)
        console.log(error)
       })
     
    }
         
  fetchResponse()
    
     },[])
  return (
    <div className='overallplanclass'>
      {
        data?<div className='pricing-plan'>
        <Navbar/>
      <div className='homeplansection'>
          <h1>Our Pricing Lists</h1>
          <div className="hint">
            <h4>Hints</h4>
            <p>-All plans are upgradable and renewable at expiry date</p>
            <p>-To Upgrade to a new plan, you need to deposit the full amount else your previous plan will be lost</p>
            <p>-Referral Bonuses are paid instantly immediately after your downline invests (10%)</p>
          </div>
        <div className="plans">
          { data &&
            data.map((index,id)=>{
              return(
                <Plans index={index} key={id}/>
              )
            })
          }
        </div>
    </div>
    <div  style={{position:'relative' ,zIndex:'999'}}>
    <Footer/>

    </div>
    </div>:<Loading/>
      }
    </div>
  )
}

export default Plan
