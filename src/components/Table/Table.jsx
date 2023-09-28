import React from 'react'
import './table.css'
function Table({index}) {
  return (
    <div>

<div className="table-container">
	
	<div className="table">
		<div className="table-header">
			<div className="header__item"><a id="name" className="filter__link" href="#">Username</a></div>
			<div className="header__item"><a id="wins" className="filter__link filter__link--number" href="#">Phone Number</a></div>
			<div className="header__item"><a id="draws" className="filter__link filter__link--number" href="#">Amount</a></div>
			<div className="header__item"><a id="losses" className="filter__link filter__link--number" href="#">Date</a></div>
			{/* <div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Total</a></div> */}
		</div>
		<div className="table-content">	
			<div className="table-row">		
				<div className="table-data">{index.username}</div>
				<div className="table-data">{index.amount}</div>
				<div className="table-data">{index.phoneNumber}</div>
				<div className="table-data">{index.createdAt}</div>
				{/* <div class="table-data">5</div> */}
			</div>
		</div>	
	</div>
</div>
    </div>
  )
}

export default Table
