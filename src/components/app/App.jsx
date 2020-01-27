import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './app.css'
import NavBar from '../navbar/NavBar'
import Home from '../home/Home'
import Everywhere from '../everywhere/Everywhere'
import Menu from '../menu/Menu'
import About from '../about/About'

const App = () => {
  return (
    <Router>
      <div className='logo'></div>
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route exact path='/everywhere' component={Everywhere} />
      <Route exact path='/menu' component={Menu} />
      <Route path='/menu/:section' component={Menu} />
      <Route exact path='/about' component={About} />
      {/*<Route exact path='/contact' component={Contact} />*/}
    </Router>
  )
}

export default App

/* TODO 
  page of contact
  responsivity
  api
*/