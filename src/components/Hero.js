import "./Hero.css";
import React, { useEffect } from "react";
import Introimg from "../components/assests/mannn.png";
import { ReactComponent as TestSvg } from "./assests/marsh.svg";
import Introi from "../components/assests/vector5.svg";
import male from "../components/assests/male.png";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";
// import Particles from "react-tsparticles";
import particlesConfig from "./particles-config";
import Particles from "./Particles";
import { Background } from "tsparticles-engine";
import SoundButton from "./Music";
const Hero = () => {
  return (
    <div className="hero">
      <div className="mask"></div>
      <div className="sections">
        <div class="container-3">
          <div class="column-3">
            <h1>
              Hello <span>.</span>
            </h1>

            <h3>____ I'm Tushar</h3>
            <p> Fullstack Developer</p>
          </div>
          <div class="column-3 male"  style={{ backgroundImage: `url(${Introimg})`, height:'400px'  }}>
            
          </div>
          <div class="column-3 column-logo">
            <p>
              <span>As</span> a full-stack developer, I seamlessly blend
              front-end finesse with back-end robustness, crafting holistic
              digital solutions. My role is to architect, innovate, and ensure
              fluid user experiences through versatile technology stacks.
            </p>
          </div>
        </div>
      </div>
      <div className="music">
       
        <SoundButton/>
        
      </div>
      <div className="column-logo-div" style={{ backgroundImage: `url(${Introi})`, height:'150px'  }}>
      {/* <img src={Introi} alt="Your Image"/> */}
      </div>

      <Particles id="tsparticles" />
    </div>
  );
};

export default Hero;
