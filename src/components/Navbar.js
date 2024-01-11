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
<NavLink to="https://github.com/tushar453" target="_blank"><i class="fab fa-github"></i></NavLink>
  </li>
  <li>
  <NavLink to="https://www.linkedin.com/in/tusharkant-sharma-6751b3227/" target="_blank"><i class="fab fa-linkedin-in"></i></NavLink>
  </li>
</ul>


</div> 
<ul className={click ?"nav-menu active":"nav-menu"}>
   
      <li><NavLink to ="/"><span>01.</span> Home</NavLink></li>
      <li><NavLink to = "/project"><span>02.</span> Projects</NavLink></li>  
       <li><NavLink to = "/about"><span>03.</span> About</NavLink></li> 
      
      <li><NavLink to = "/contact"><span>04.</span> Contact</NavLink></li> 
    
</ul>
<div className="hamburger" onClick={handleclick}>
   { click ? (<FaTimes size= {20} style = {{color:"#fff"}}/>) : (<FaBars size= {20} style = {{color:"#fff"}}/>) }
</div>
    </div>
  </>
  )
}

export default Navbar