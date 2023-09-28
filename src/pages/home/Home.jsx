import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import './home.css'
import About from '../../components/about us/About'
import Plan from '../../components/plans/Plan'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Testimonials from '../../components/testimonials/Testimonials'
import WhatAFMBOT from '../../components/whatAFM-BOT/WhatAFMBOT'
import Footer from '../../components/footer/Footer'
import Loading from '../../components/loading/Loading'



function Home() {
  const [error,setError]=useState()
  const [data,setData]=useState()
  const baseUrl = process.env.REACT_APP_BACKEND_URL;
  console.log(baseUrl)
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
    <div>
      {
        data?  <div className='home'>

        <div className="landing">
        <div className="landingnav">
        <Navbar/>
        </div>
        <Hero />
        </div>
        <div className="about">
        <About/>
        </div>
        <div className="whatafm">
          <WhatAFMBOT/>
        </div>
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
            data.slice(0,12).map((index,id)=>{
              return(
                <Plan index={index} key={id}/>
              )
            })
          }
        </div>
        <Link to='/plans'><button>See All Plans</button></Link>
        </div>
        <div className="testimonial">
          <h1>Don’t take our word for it!</h1>
          <p>Read inspiring success stories from Investors Hub users who have transformed their lives through online earning. Learn from their experiences and strategies.</p>
          <Testimonials/>
        </div>
        <Footer/>
       

      
    </div>:<Loading/>
      }
    </div>
  
  )
}

export default Home
