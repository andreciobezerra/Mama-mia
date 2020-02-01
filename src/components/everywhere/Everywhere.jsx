import React from 'react'
import Social from '../socials/Social'
import './everywhere.css'
import api from '../../api'
import { useFetch} from '../../useHooks'

const Everywhere = () => {
  let socials = useFetch(api.loadSocials) 
  let socialSection1 = socials.slice(0,3)
  let socialSection2 = socials.slice(3)
  
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
