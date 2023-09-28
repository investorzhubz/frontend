import React from 'react'
import './referral.css'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { useAuthContext } from '../../hooks/useAuthContext'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Loading from '../../components/loading/Loading'

function Referral() {
    const [data,setData]=useState()
    const [error,setError]=useState()
    const [status,setStatus]=useState(null)
    const [loading,setLoading]=useState(false)
    const {user}=useAuthContext()

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/userreferrals/`,{
            headers:{
                Authorization:`Bearer ${user.token}`
            }
        }).then(response=>{
            setData(response.data)
            console.log(response.data)
             setStatus(response.data.bonus)
             setLoading(true)
        }).catch(error=>{
            setError(error.response.data.error)
            setLoading(true)

        })
    })
  return (
    <div>
      {
        loading ? <div className='referral'>
        <Navbar />
        
        {
           
           data ? (
             <div>
             <div className="table">
             <div className="table-header">
               <div className="header__item"><a id="name" className="filter__link" href="#">Username</a></div>
               <div className="header__item"><a id="wins" className="filter__link filter__link--number" href="#">Bonus Status</a></div>
               {/* <div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Amount</a></div> */}
               <div className="header__item"><a id="losses" className="filter__link filter__link--number" href="#">Date</a></div>
               {/* <div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Total</a></div> */}
             </div>
              {
               data.map((datas)=>{
                return(
                 <div className="table-content">	
                 <div className="table-row">		
                   <div className="table-data">{datas.username}</div>
                   <div className="table-data">{datas.bonus ?<p>Paid</p>:<p>Unpaid</p>}</div>
                   <div className="table-data">{datas.createdAt.toString().split('T')[0]}</div>
                
                 </div>
                 </div>
                )
               })
              }
             </div>
             </div>
           
   
           ):(
             <h2>{error}</h2>
           )
         }
         <div  style={{position:'relative' ,zIndex:'999'}}>
      <Footer/>
  
      </div>
         
      </div>:<Loading/>
      }
    </div>
  )
}

export default Referral
