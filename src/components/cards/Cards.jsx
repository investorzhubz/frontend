import React from 'react'
import Card from '../card/Card'
import { cardsData } from '../Data/Data'
import './cards.css'

function Cards() {
  return (
    <div className='Cards'>

      {cardsData.map((card,id)=>{
        return(
          <div className="parentContainer">
         <Card
        title={card.title}
        color={card.color}
        value={card.value}
        barValue={card.barValue}
        png={card.png}
        series={card.series}
       />
          </div>
        )
      })}
    </div>
  )
}

export default Cards
