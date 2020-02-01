import React from 'react'
import './social.css'

const Social = (props) => {
  return (
      <img src={props.social.img} alt={props.social.title} title={props.social.title} className='img'/>
  )
}

export default Social