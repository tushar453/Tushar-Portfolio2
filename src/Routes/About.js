import React from "react";
import Navbar from "../components/Navbar";

import Hero2 from "../components/Hero2";
import Skils from "../Skils";
import Abouts from "../components/Abouts";
const About = () => {
  return (
    <div>
    <Navbar/>
    
    {<Hero2 heading = "About Me" text = "I'm a mern developer"/>}
    <Skils/>

    <Abouts/>
    
    </div>
  );
};

export default About;
