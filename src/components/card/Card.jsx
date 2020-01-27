import React from 'react'
import './card.css'

const Card = (props)=>{
  return(
    <div className='card-section'>
      <img src={props.section.img} alt={props.section.title} title={props.section.title} className='img-section'/>
      <p>{props.section.title}</p>
    </div>
  )
}

export default Card