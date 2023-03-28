import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

import Contact from './Contact'
import Project from './Project'
import About from './About'


const Home = () => {
  return (
    <div>
       {<Navbar/>} 
       {<Hero/>}
      
      
        
        {<About/>}
        {<Project/>}
        {<Contact/>}
        
    </div>
  )
}

export default Home