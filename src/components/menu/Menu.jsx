import React from 'react'
import './menu.css'
import Section from '../section/Section'

const Menu = (props) => {
  const dishes = {
    title: 'Dishes',
    items: [
      { name: 'Pizza', price: '20.00' },
      { name: 'Lasagna', price: '25.00' },
      { name: 'Caneloni', price: '15.00' }
    ]
  }
  const desserts = {
    title: 'Desserts',
    items: [
      { name: 'Panna Cotta', price: '10.00' },
      { name: 'Tiramisù', price: '7.50' },
      { name: 'Semifreddo', price: '5.00' }
    ]
  }
  const drinks = {
    title: 'Drinks',
    items: [
      { name: 'Coca', price: '2.00' },
      { name: 'Beer', price: '2.50' },
      { name: 'Coffee', price: '1.50' }
    ]
  }

  const sections = [dishes, desserts, drinks]
  let menuSections = sections.filter(section => section.title===props.match.params.section)
  
  if( menuSections.length === 0){
    menuSections = sections
  }

  return (
    <div>
      {menuSections.map(menuSection => <Section key={menuSection.title} title={menuSection.title} items={menuSection.items} />)}
    </div>
  )
}

export default Menu