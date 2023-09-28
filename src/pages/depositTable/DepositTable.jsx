import React from 'react'
import Table from '../../components/Table/Table'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { useAuthContext } from '../../hooks/useAuthContext'
import Navbar from '../../components/navbar/Navbar'
import './depositTable.css'
import Footer from '../../components/footer/Footer'
import Loading from '../../components/loading/Loading'
function DepositTable() {
  const [data,setData]=useState()
  const [error,setError]=useState()
  const [loading,setLoading]=useState(false)
  const {user}=useAuthContext()
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/transactiondeposits/`,{
      headers:{
        Authorization:`Bearer ${user.token}`
      }
    }).then(response=>{
      console.log(data)
      setData(response.data)
      setLoading(true)
    }).catch(error=>{
      

      setError(error.response.data.error)
      setLoading(true)
    })

  },[])

  return (
    <div>
      {
        loading?<div className='depositTable'>
        <Navbar/>
  
        {
           
          data ? (
            <div >
            <div className="table">
            <div className="table-header">
              <div className="header__item"><a id="name" className="filter__link" href="#">Username</a></div>
              <div className="header__item"><a id="wins" className="filter__link filter__link--number" href="#">Phone Number</a></div>
              <div className="header__item"><a id="draws" className="filter__link filter__link--number" href="#">Amount</a></div>
              <div className="header__item"><a id="losses" className="filter__link filter__link--number" href="#">Date</a></div>
              {/* <div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Total</a></div> */}
            </div>
             {
              data.map((datas)=>{
               return(
                <div className="table-content">	
                <div className="table-row">		
                  <div className="table-data">{datas.username}</div>
                  <div className="table-data">{datas.phoneNumber}</div>
                  <div className="table-data">{datas.amount} XAF</div>
                  <div className="table-data">{Date(datas.createdAt.toString()).split('GMT+0100 (West Africa Standard Time)')}</div>
               
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

export default DepositTable
