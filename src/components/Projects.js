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
      <div className="right-side">
         <div className="right-cards">
        <span>
          react-weather-app
        </span>

        <span>detaieev ferfere ferfer ferfe fvfer</span>
        <button className="btn buttons">wwedew</button>
      </div>



      <div className="right-cards">
        <span>
          react-weather-app
        </span>

        <span>app conatainwjhbhw bwjhb hwwfbf</span>
        <button className="btn buttons">wwedew</button>
      </div>
      


      <div className="right-cards">
        <span>
          react-weather-app
        </span>

        <span>rferfve erfcerfv ferferf ferfcerf fer</span>
        <button className="btn buttons">wwedew</button>
      </div>
      
      
      </div>
     
      </div> 




    
    </>
  );
};

export default Projects;
