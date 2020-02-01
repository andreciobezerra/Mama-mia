import React from 'react'
import api from '../../api'
import './menu.css'
import Section from '../section/Section'
import { useFetch } from '../../useHooks'

const Menu = (props) => {
  let section = props.match.params.section
  let funct = ((section === undefined) ? api.loadMenu : api.loadFilteredMenu)
  let data = useFetch(funct,section )  
  let menu = ((myData) => {
    let menuByCategories = myData.reduce((categorie, item) => {
    categorie[item.type] = categorie[item.type] || []
    categorie[item.type].push({ id: item.id, name: item.name, price: item.price })
    return categorie
    }, {})

    return Object.keys(menuByCategories).map((key) => ({ type: key, items: menuByCategories[key] }))
  })(data)

  return (
    <div className='menu'>
      {menu.map(menuSection => <Section key={menuSection.type} title={menuSection.type} items={menuSection.items} />)}
    </div>
  )
}

export default Menu