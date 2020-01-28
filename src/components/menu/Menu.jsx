import React, { useState, useEffect } from 'react'
import api from '../../api'
import './menu.css'
import Section from '../section/Section'

const Menu = (props) => {
  const [menu, setMenu] = useState([])
  const section = props.match.params.section
  let funct = ((section === undefined) ? api.loadMenu() : api.loadFilteredMenu(section) )
  
  useEffect(() => {
    async function fetchData() {
      try {
        let response =await funct
        let menuByCategories = response.data.reduce((categorie, item)=>{
          categorie[item.type] = categorie[item.type] || []
          categorie[item.type].push({id: item.id, name: item.name, price: item.price})
          return categorie
        },{})
        
        let menuArray = Object.keys(menuByCategories).map((key) => ({type: key, items: menuByCategories[key]}))
        
        setMenu(menuArray)

      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      {menu.map(menuSection => <Section key={menuSection.type} title={menuSection.type} items={menuSection.items} />)}
    </div>
  )
}

export default Menu