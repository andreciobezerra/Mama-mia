import React , {useEffect, useState} from 'react'
import Social from '../socials/Social'
import './everywhere.css'
import api from '../../api'

const Everywhere = () => {
  const [socialSection1, setSection1] = useState([]) 
  const [socialSection2, setSection2] = useState([]) 

   useEffect(()=> {
    async function fetchData(){
      let response = await api.loadSocials()
      let socialsSections = response.data
      setSection1(socialsSections.slice(0,3))
      setSection2(socialsSections.slice(3))
    }

    fetchData()
   }, [])
   
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
