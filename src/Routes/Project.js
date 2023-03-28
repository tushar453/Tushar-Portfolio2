import React from 'react'
import Navbar from '../components/Navbar'

import Hero2 from '../components/Hero2'
import Projects from '../components/Projects'
const Project = () => {
  return (
    <div>
      {<Navbar/>} 
      {<Hero2 heading = "PROJECTS." text = "Checkout My Projects"/>}
      <Projects/>
       
    </div>
  )
}

export default Project
