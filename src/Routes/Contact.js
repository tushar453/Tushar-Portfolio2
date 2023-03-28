import React from 'react'
import Navbar from '../components/Navbar'

import Hero2 from '../components/Hero2'
import Form from '../components/Form'
const Contact = () => {
  return (
    <div>
       {<Navbar/>} 
       {<Hero2 heading = "Contact" text = "Let's have chat"/>}
       <Form/>
  
    </div>
  )
}

export default Contact
