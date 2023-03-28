import "./Navbar.css"
import React , {useState} from 'react'
import { NavLink,Link } from "react-router-dom"
import {FaBars , FaTimes} from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleclick = () => setClick(!click);
    const [color, setColor] = useState(false);
    const changecolor = ()=>{
        if(window.scrollY>=1){
            setColor(true);
        }
        else{
            setColor(false);
        }
    };
    window.addEventListener("scroll",changecolor);

  return (
    <>
    <div className={color?"header header-bg": "header"}>
       <div className="logo">
<NavLink to ="/"><h1 className="name">Tushar.</h1></NavLink>
<ul className= "social-icons">
    <li>
<NavLink to="https://www.instagram.com/indoriya_tushar789/" target="_blank"><i class="fab fa-instagram"></i></NavLink>
  </li>
  <li>
  <NavLink to="https://www.linkedin.com/in/tusharkant-sharma-6751b3227/" target="_blank"><i class="fab fa-linkedin-in"></i></NavLink>
  </li>
</ul>


</div> 
<ul className={click ?"nav-menu active":"nav-menu"}>
   
      <li><NavLink to ="/">Home</NavLink></li>
      <li><NavLink to = "/project">Projects</NavLink></li>  
       <li><NavLink to = "/about">About</NavLink></li> 
      
      <li><NavLink to = "/contact">Contact</NavLink></li> 
    
</ul>
<div className="hamburger" onClick={handleclick}>
   { click ? (<FaTimes size= {20} style = {{color:"#fff"}}/>) : (<FaBars size= {20} style = {{color:"#fff"}}/>) }
</div>
    </div>
  </>
  )
}

export default Navbar