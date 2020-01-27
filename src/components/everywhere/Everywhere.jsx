import React from 'react'
import Social from '../socials/Social'
import './everywhere.css'

const Everywhere = () => {
  const socialSection1 = [
    { title: 'IFood', img: 'images/ifood.png' },
    { title: 'Uber Eats', img: 'images/ubereats.jpg' },
    { title: 'Whatsapp', img: 'images/whatsapp.png' },
  ]

  const socialSection2 = [
    { title: 'Telegram', img: 'images/telegram.jpeg' },
    { title: 'Facebook', img: 'images/facebook.png' },
    { title: 'Instagram', img: 'images/instagram.jpeg' }
  ]

  return (
    <div>
      <div className='everywhere'>
        {socialSection1.map(social => <Social key={social.title} social={social} />)}
      </div>
      <div className='everywhere'>
        {socialSection2.map(social => <Social key={social.title} social={social} />)}
      </div>
    </div>
  )
}

export default Everywhere
