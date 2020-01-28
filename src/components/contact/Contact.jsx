import React, { useState } from 'react'
import './contact.css'
import validator from '../../validator'

const Contact = () => {
  let [msg, setMsg] = useState({ name: '', email: '', text: '' })

  const handleSubmit = (event) => {
    if(validator(msg))
      alert(`Hi ${msg.name}! Your message was sent! Thank you!`)
    else
      alert(`Sorry ${msg.name}, your message couldn't be send!`)
      
    event.preventDefault()
    window.location.href = './'
  }

  return (
    <div className='contactForm'>
      <p className='titleMsg'> Send us your message!</p>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input className='entries' type='text' value={msg.name} onChange={(event) => setMsg({ ...msg, name: event.target.value })} /> 
        <label>Email</label>
        <input className='entries' type='text' value={msg.email} onChange={(event) => setMsg({ ...msg, email: event.target.value })} /> 
        <label>Your Message</label>
        <textarea className='entries' type='text' value={msg.text} onChange={(event) => setMsg({ ...msg, text: event.target.value })} /> 
        <input className='sendBtn' type="submit" value="Send Message" />
      </form>
    </div>
  )
}

export default Contact