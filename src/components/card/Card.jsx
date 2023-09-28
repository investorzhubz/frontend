import React from 'react'
import {Link} from 'react-router-dom'
import './card.css'
function Card({index,handletransactions}) {

  const handletransacts=(type)=>{
    handletransactions(type)
  }
  return (
    
    <div className="cardblock">
      <div className="card">
    <div className="title">
    <h2>Account Balance</h2>
    <button onClick={()=>{
      handletransacts("deposit")
    }}>Top Up</button>
    </div>
    <div className="balance">
      <h3> {index.accountBalnace} XAF</h3>
    </div>
   </div>
   <div className="card">
    <div className="title">
    <h2>Deposit Transactions</h2>
    <Link to='/deposit-transaction'>
    <button>View All</button>
    </Link>
    
    </div>
    <div className="balance">
      {/* <h3>4000 XAF</h3> */}
    </div>
   </div>
   <div className="card">
    <div className="title">
    <h2>Withdrawal Transactions</h2>
      <Link to='/withdraw-transaction'>
      <button>View All</button>
      </Link>
      <button onClick={()=>{
        handletransacts("withdraw")
      }}>Withdraw</button>
    
    
    </div>
    <div className="balance">
      {/* <h3>4000 XAF</h3> */}
    </div>
   </div>
    </div>
  )
}

export default Card
