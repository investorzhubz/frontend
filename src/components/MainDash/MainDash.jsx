import './maindash.css'
import {UilMoneyStack} from '@iconscout/react-unicons'
import {UilMoneyWithdrawal} from '@iconscout/react-unicons'
import Card from '../card/Card'
import { useEffect, useState,useRef } from 'react'
import axios from 'axios'
import { useAuthContext } from '../../hooks/useAuthContext'
import {Link,useNavigate} from 'react-router-dom'
import { useErrorContext } from '../../hooks/useErrorContext'
import Loading from '../loading/Loading'
import ChoosePay from '../choose pay/ChoosePay'
import { FaPlus } from 'react-icons/fa';
function MainDash() {
  const [data,setData]=useState(null)
  const [error,setError]=useState()
  const {user}=useAuthContext()
  const [plan,setPlan]=useState()
  const [name,setName]=useState('No Active Bot')
  const [copy, setCopy]=useState('Copy')
  const [showDepo,setShowDepo]=useState(false)
  const [showWith,setShowWith]=useState(false)
  const navigate=useNavigate()
  const textRef = useRef(null);

  const handleCopy=()=>{
    const textToCopy = document.getElementById('copy').textContent; // Get the text content of the paragraph element

    // Use Clipboard API to write text to clipboard
    navigator.clipboard.writeText(textToCopy).then(() => {
      console.log('Text copied to clipboard');
      setCopy('Copied')
    }).catch(err => {
      console.error('Unable to copy text to clipboard', err);
    });
   
   


  }
  useEffect(()=>{
    const fetchData=()=>{

    
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/`,{
        headers:{
        Authorization:`Bearer ${user.token}`
        }
      }).then((response)=>{
        setData(response.data)
        console.log(data)
      }).catch(error=>{
        if(error.response.data.error==='email not verified'){
          navigate('/verify')

        }
      })

    
        
      
    }

    fetchData()
   

  },[])
  const handletransactions=(type)=>{
    if (type==='deposit'){
      setShowWith(false)
      setShowDepo(true)
      
    }
    else if(type==='withdraw'){
      setShowDepo(false)
      setShowWith(true)
    }
  }

  useEffect(()=>{
    if(data){
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/plans/${data.plan.planId}`).then(response=>{
        setPlan(response.data)
        console.log(data)
        setName(response.data.title)
      }).catch(error=>{
       
        setName('Earn 10X more with our Bot Features')
        setError(error)
      })
  
    }
  },[data])
  return (
   <div className='overalldasboard'>
      <div className="planactive">
      {plan ?(
          <div className='plansection'>
          <p>{name}</p>
          <Link to='/plans'><button>Upgrade Bot</button></Link></div>
        ):<div className='plansection'><p>{name}</p><Link to='/plans'><button>Buy Bot</button></Link></div>}

      </div>
      {
        data&&(
         <div>
           <div className="userdashboard">
            <p className='userdashboardp'>{data.username}'s dashboard</p>
  
            <Link to='/create-product'><button><FaPlus /><p>Add a Product</p></button></Link>
            
          </div>
          <div className='caution'>
          <p>Caution: </p>
          <span> Do not send your investment Information to anyone except an admin.</span>

          </div>
         </div>
        )
      }
    {
      data? <div className='maindash'>
      <p></p>
       <div className='card-render'>
       {
          data && (
            <Card index={data} handletransactions={handletransactions}/>
          )
        }
       </div>
       <div>
       <div className="refferal">
         <h2>Refferal Link</h2>
        <p>{data &&(
          <p id='copy'>{`https://affiliatedmarketingai.com/signup?referral=${data.username}`}</p>
        )}</p>
         <button onClick={handleCopy}>{copy}</button>
       </div>
       </div>
       <div>
        {
          showDepo&&(
            <ChoosePay link1='/deposit'/>
            // <ChoosePay link1='/deposit' link2='/deposit1' />
          )
        }
       </div>
       <div>
       {
          showWith&&(
            // <ChoosePay link1='/withdraw' link2='/withdraw1' />
            <ChoosePay  link2='/withdraw1' />
          )
        }
       </div>
      </div>
      
      :<Loading/>
    }
   </div>

    
  )
}

export default MainDash
