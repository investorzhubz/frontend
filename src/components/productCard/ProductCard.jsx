import React from 'react'
import {useNavigate} from 'react-router-dom'
import './productcard.css'
import { useState, useEffect, } from 'react';
import axios from 'axios';
import { useAuthContext } from '../../hooks/useAuthContext'
import Alert from '../../components/alerts/Alert'
import Confirmation from '../confirmation/Confirmation';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Loading from '../loading/Loading';

function ProductCard() {
  const { user } = useAuthContext();
  const [data, setData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [pid,setPid]=useState()
  const [error,setError]=useState()
  const [msg,setMsg]=useState()
  const navigate=useNavigate()
  const handleCancel = () => {
    console.log("Action cancelled");
    setIsModalOpen(false);
  };
  const handleConfirm = () => {
    if(!user){
      navigate('/login')

    }else{
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/buy/${pid}`,{
      headers:{
        Authorization:`Bearer ${user.token}`
      }
    
    }).then(response=>{
      setMsg(response.data.msg)
    }).catch(error=>{
      
      setError(error.response.data.error)
    })
    }
    
    setIsModalOpen(false);
  };

  const handleClick = () => {
    setIsModalOpen(true);
  };
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {
        data? <div className='market'>
        <Navbar/>
        <div style={{position:'relative' ,zIndex:'999'}}>
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
        <div className="containert text-center">
  <h1>Products</h1>
   
  </div>
  <div className="shell">
    <div className="container">
      <div className="row">
  {data ?
          data.map((datas) => {
            let base64String = '';
            try {
              base64String = btoa(
                String.fromCharCode(...new Uint8Array(datas.image.data.data))
              );
            } catch (error) {
              console.log(error);
            }
            return (
              <div   key={datas._id}  >
                
    
        <div className="col-md-3">
          <div className="wsk-cp-product">
            <div className="wsk-cp-img">
              <img src={`data:image/png;base64,${base64String}`} alt="Product" className="img-responsive" />
            </div>
            <div className="wsk-cp-text">
              <div className="category">
          assName
                <span  onClick={(e)=>{
                  setPid(datas._id)
                  handleClick()
                }}>Buy Now</span>
                
              </div>
              <div className="title-product">
                <h3>{datas.title}</h3>
              </div>
              <div className="description-prod">
                <p>{datas.description}</p>
              </div>
              <div className="card-footer">
                <div className="wcf-left"><span className="price">{datas.price} XAF</span></div>
                <div className="wcf-right"><a href="#" className="buy-btn"><i className="zmdi zmdi-shopping-basket"></i></a></div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
   
            );
          }):<p>Loading...</p>}
      </div>
      </div>
      <div  style={{position:'relative' ,zIndex:'999'}}>
      <Footer/>
  
      </div>
  </div>
  <Confirmation
                 isOpen={isModalOpen}
                 onClose={handleCancel}
                 onConfirm={handleConfirm}
                 message="Are you sure you want to buy this Product?"
               /> 
                
    
              </div> :<Loading/>
      }
    </div>
  )
}

export default ProductCard
