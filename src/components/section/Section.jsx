import React from 'react'
import './section.css'

const Section = (props) => {
  return(
    <div>
      <p className='title'>{props.title}</p>
      <ul>
        {props.items.map(item => <li key={item.name}><span>{item.name}</span><span className='right'>$ {item.price}</span></li>)}    
      </ul>
    </div>
  )
}

export default Section