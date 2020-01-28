import React, { useState, useEffect } from 'react'
import Card from '../card/Card'
import { Link } from 'react-router-dom'
import './home.css'
import api from '../../api'

const Home = () => {
  const [menuSections, setMenuSections] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await api.loadCategories()
        setMenuSections(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='cards'>
      {menuSections.map(section => {
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