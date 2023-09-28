import './plan.css'
 import { useEffect,useState } from 'react'
 import axios from 'axios'
import {Navigate} from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import { usePlanContext } from '../../hooks/usePlanContext'
import { useNavigate } from 'react-router-dom'
import Confirmation from '../confirmation/Confirmation'
import Plans from './Plans'
import Loading from '../loading/Loading'

 
function Plan({index,id}) {
  const [redirect,setRedirects]=useState(false)
  const [data,setData]=useState(null)
  const [message,setMessage]=useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [bot,setBot]=useState()
  const [url,setUrl]=useState('')
  const {user} =useAuthContext()
  const {dispatch} =usePlanContext()
  const navigate=useNavigate()
  const handleCancel = () => {
    console.log("Action cancelled");
    setIsModalOpen(false);
  };
  const handleClick = () => {
    setIsModalOpen(true);
  };
  const handleConfirm=()=>{ 
    
    if(user){
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/`,{
        headers:{
          Authorization:`Bearer ${user.token}`
        }
      })
      .then((response)=>{
  
      setData(response.data)
    })
    }else{
      navigate('/login')

    }
    

 




}
    useEffect(()=>{
      
        if(data){
          if(data.accountBalnace>=index.price){
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/plans/${index._id}`,{number:null},{
              headers:{
                "Content-Type":'application/json',
                Authorization:`Bearer ${user.token}`
              }

            }).then(response=>{
               setMessage('Plan Bought Successfully')
               setRedirects(true)
               console.log(data.username)
            }).catch((error)=>{
              console.log(error)
            })
          }else{
            const obj={id:index._id,name:index.title,price:index.price}
            localStorage.setItem('plan',JSON.stringify(obj))
            dispatch({type:'BUYPLAN', payload:obj})
            setUrl('/choose-depo')

             

          }
        }

        
        

      
    },[data]);
  return (
    <div>
      <div className="cards">

        <div className='plans section-margin'>
           
           <div>
            <div className="wrap">
        <div className="pricing-table">
        <div className="plan">
        <h3 className="name">{index.title}</h3>
        <h4 className="price">XAF{index.price}<span>/month</span></h4>
        
        <ul className="details">
        <li><strong>{index.dailySale}</strong> Daily Sales</li>
        <li><strong>{index.dailyTurnover} FCFA</strong> Daily Gain</li>
        <li><strong>{index.monthlyIncome} FCFA</strong> Monthly Outcome</li>
        <li><strong>30 Days</strong> Duration</li>
        </ul>
        <div>
        <h5 className="order"><a href="#" onClick={()=>{
          setBot(index.title)
          handleClick()
        }}>Buy Now</a></h5>
        
        {redirect&&(
          <div>
            <Navigate to='/dashboard'/>
          </div>
        ) 
        }
        {
        url && (
          <div>
            <Navigate to={url}/>
          </div>
        )}
        </div>
        </div>
        
        
        </div>
        </div>
           </div>
        
        </div>
        <div style={{position:'relative', zIndex:'999'}}>
        <Confirmation
                       isOpen={isModalOpen}
                       onClose={handleCancel}
                       onConfirm={handleConfirm}
                       message="Are you sure you want to buy this Bot?"
                     /> 
        </div>
        </div>
        
      
    </div>
  )
}

export default Plan
