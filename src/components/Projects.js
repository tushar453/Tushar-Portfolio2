import React from "react";
import { NavLink } from "react-router-dom";
import Introi from "../components/assests/nit.jpeg";
// import Intr from "../components/assests/project.jpeg";
import "./Projects.css";
import resume from "./assests/Tushar-Resume.pdf";

import Heart from "./assests/png1.png"

const Projects = () => {
  return (
    <>
    <div className="projects">
      <div className="left-side">
      <span>MY AWESOME</span>
      <br/>
      <span>PROJECTS</span>
      <br/>
      <span><p>Checkout My Awesome Projects and Resume</p></span>
   <a href={resume} download><button className="btn buttonss">Resume</button></a>

      </div>
      <div className="right-side"></div>
      <div className="right-card">
        <span>
          react-weather-app
        </span>

        <span>details</span>
        <button>wwedew</button>
      </div>
      </div> 




    
    </>
  );
};

export default Projects;
