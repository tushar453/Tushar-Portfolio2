import "./Abouts.css"
import React from 'react'
import Introi from "../components/assests/nit.jpeg";

import { NavLink } from "react-router-dom"
const Abouts = () => {
  return (
    <div className="about">
    <div className="left">
   <h3>Who Am I?</h3>
   <p>Hello and welcome ! This Is Tusharkant Sharma.I am from Jaipur Rajasthan.Currently I am studying in National 
   Institute of Techonolgy , Hamirpur, Himachal Pradesh.My field of Study Is Engineering Physics.I am a MERN developer.
   I love creativity.
  

   </p>
   <NavLink to="/contact"><button className="btn">Contact</button></NavLink>
    </div>
    <div className="right">
   
       <div className="image-container">
        <div className="img-stack top">
       <img classname= "img"src={Introi} alt="Introimg" />
       </div>
       </div>
    </div>
    </div>
  )
}

export default Abouts
