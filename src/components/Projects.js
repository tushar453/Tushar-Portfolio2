import React from "react";
import { NavLink } from "react-router-dom";
import Introi from "../components/assests/nit.jpeg";
// import Intr from "../components/assests/project.jpeg";
import "./Projects.css";
const Projects = () => {
  return (
    <>

    <div className="project">
        {/* <h2><span>P</span>age  <span>Comm</span>ing Soon</h2>       */}
        <div className="projects"></div>
           <h1>Weather App</h1>
           <li><NavLink to="https://weather-app-eight-teal.vercel.app/" target="_blank">Click Here</NavLink></li>
    </div>
    
    </>
  );
};

export default Projects;
