import React from 'react'
import Card from '../card/Card'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  const menuSections = [
    { title: 'Dishes', img: 'images/dishes.jpg' },
    { title: 'Desserts', img: 'images/desserts.jpeg' },
    { title: 'Drinks', img: 'images/drinks.png' }
  ]

  return (
    <div className='cards'>
      {menuSections.map(section => {
        return (
          <Link className='link cards' key={section.title} to={`/menu/${section.title}`}>
            <Card  section={section} />
          </Link>
        )})
      }
    </div>
  )
}

export default Home