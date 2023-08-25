import "./Hero.css";
import React, { useEffect } from "react";
import Introimg from "../components/assests/heroimg.jpg";
import svg from "./assests/marsh.svg";

import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";
// import Particles from "react-tsparticles";
import particlesConfig from "./particles-config";
import Particles from "./Particles";
import { Background } from "tsparticles-engine";
const Hero = () => {
  return (
    <div className="hero">
      <div className="mask"></div>
        <div className="sections">
          <div className="up">
            <img
              className="svgs"
              src={require("./assests/marsh.svg").default}
              alt="/"
            />
          </div>

          <div className="down">
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
          </div>
        </div>
     
      <Particles id="tsparticles" />
    </div>
  );
};

export default Hero;
