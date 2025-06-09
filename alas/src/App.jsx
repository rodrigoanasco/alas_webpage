import { useState } from 'react'

{/*This is the import for the pages that are going to be accessed via routing*/}
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './pages/Home.jsx'

import './App.css'
import AboutUs from './pages/aboutus.jsx'
import Events from './pages/Events.jsx'


function App() {

  return (
    <main className='page'> 
      {/*className is used to apply CSS styles to your HTML elements in react ("class" in regular html)*/}
      

      {/* The first thing being implemented is the navigation bar*/}
      <nav className='navbar'>
        
        {/* This is for the logo of ALAS (should return to the landing page)*/}
        <div className='logo'><Link className='home' to={"/"}>LOGO</Link></div>
        
        {/*The navigation bar format is a table*/}
        <table>
          <tr>
            <td><Link className='about_us_pg' to={"/about"}>About us</Link></td>
            <td><Link className='events_pg' to={"/Events"}>Events</Link></td>
            <td><button className='gallery_pg' onClick={() => alert('entered gallery page')}>Gallery</button></td>
            <td><button className='join_pg' onClick={() => alert('entered join page')}>Join our club!</button></td>
            <td><button className='collab_pg' onClick={() => alert('entered collab page')}>Collab with us!</button></td>
          </tr>
        </table>
      </nav>

      {/*Routing section - This will show the correct page based on the URL*/}
      <Routes>
        <Route path='/' element={<Home />}/> 
          {/*Do the same for the other pages*/}
        <Route path='/about' element={<AboutUs />}/>
        <Route path='/Events' element={<Events />}/>
      </Routes>

    </main>
  )
}

export default App
