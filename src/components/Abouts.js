import "./Abouts.css";
import React from "react";
import Introi from "../components/assests/signature1.png";
import Intro from "../components/assests/tushar.jpeg"

import { NavLink } from "react-router-dom";
import Skills from "./Skills";
const Abouts = () => {
  return (
    <>
    <section id="feature-section" class="feature-section">
      <div class="flex-container w-container">
        <div class="feature-image-mask">
          <img
            src="https://assets-global.website-files.com/6089becf6378fd77e2fdbd6f/609fa91cfb0b5f1dcbabfd3f_67446941_468682130379550_1594753697503268402_n.jpg"
            loading="lazy"
            // width="244"
            alt="that is me"
            class="image-18"
          />
        </div>
        <div class="div-block-20">
          <img
            src={Intro}
            loading="lazy"
            style={{width:"200px"}}
            // width="152"
            alt=""
            class="image-104"
          />
          <p class="paragraph-5">
            Hi, my name is Tushar and I am a WebDeveloper . I am also experienced in visual design, motion graphics, 3D and
            animation. <br />
            <br />
            Currently I am persuing btech in enginnering physics at NIT hamirpur
             
            <br />
            <br />I have worked on projects based on MERN Technology.My projects Showcased in project section.I participated in Smart India Hacathhon , organised by Govt. of india.I did Sufficient open sourcen contribution also
            <br />
            <br />I am based out of Jaipur, Rajasthan
            <br />
            <br />
            Contact me:&nbsp;
            <a href="mailto:tksharma230@gmail.com?subject=website%20inquiry">
             tksharma230@gmail.com
            </a>
            <br />
          </p>
        </div>

       
      </div>
      <div className="sign"  style={{ backgroundImage: `url(${Introi})`, height:'40px'  }}>
         
        </div>
    </section>
    <Skills/>
    </>
  );
};

export default Abouts;
