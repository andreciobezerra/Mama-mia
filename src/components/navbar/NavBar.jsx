import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

const NavBar = () =>{
  return(
    <div className='nav-bar'>
      <p><Link to='/' className='link'>Home</Link></p>
      <p><Link to='/everywhere' className='link'>Mama Mia Everywhere</Link></p>
      <p><Link to='/menu' className='link'>Our Menu</Link></p>
      <p><Link to='/about' className='link'>About Us</Link></p>
      <p><Link to='/contact' className='link'>Contact</Link></p>
    </div>
  )
}

export default NavBar