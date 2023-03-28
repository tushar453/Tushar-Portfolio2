import "./Hero.css";
import React from "react";
import Introimg from "../components/assests/image.jpg";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";


const Hero = () => {
  
  return (
    <div className="hero">
      <div className="mask">
        <img classname="into-img" src={Introimg} alt="Introimg" />
       
      </div>
      <div className="content">
        <p>
          {" "}
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hi This Is TusharKant Sharma")

                .pauseFor(1000)
                .deleteAll()
                .typeString("I'm a  FullStack Developer.")
                .start();
            }}
          />
        </p>

        <div>
          <NavLink to="/project" className="btn">
            Projects{" "}
          </NavLink>
          <NavLink to="/contact" className="btn btn-light">
            Contact
          </NavLink>
        </div>


       
      </div>
      



    </div>
  );
};

export default Hero;
