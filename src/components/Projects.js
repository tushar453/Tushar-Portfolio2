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
      <div class="card-1">
  <h2>Weather-App</h2>
  <p className="p">App contains real-time data</p>
  <button ><a href="https://nreact-weather-app-a4jo.vercel.app/" target="_blank">Visit</a></button>
</div>

<div class="card-1">
  <h2>Zoom Clone</h2>
  <p className="p">Peer to Peer video calling</p>
  <button><a href="https://video-app-react-2of7.vercel.app/" target="_blank">Call</a></button>
</div>

<div class="card-1">
  <h2>Card 3</h2>
  <p className="p">Subheading 3 subheading</p>
  <button>Button 3</button>
</div>
      
      </div>
     
      </div> 




    
    </>
  );
};

export default Projects;
