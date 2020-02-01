import React from 'react'
import Card from '../card/Card'
import { Link } from 'react-router-dom'
import './home.css'
import api from '../../api'
import {useFetch} from './../../useHooks'

const Home = () => {
  let sections = useFetch(api.loadCategories)  
  
  return (
    <div className='cards'>
      {sections.map(section => {
        return (
          <Link className='link cards' key={section.title} to={`/menu/${section.title.toLowerCase()}`}>
            <Card section={section} />
          </Link>
        )
      })
      }
    </div>
  )
}

export default Home