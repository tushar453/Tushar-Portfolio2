import React from "react";
import "./Hero.css";



import Typewriter from "typewriter-effect";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import meter1 from "../components/assests/meter1.svg";
// import meter2 from "../components/assests/meter2.svg";
// import meter3 from "../components/assests/meter3.svg";
import "./Skills.css";
const Footer = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
    <section className="skill" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h2>Skills</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.<br></br> Lorem Ipsum has been the
                  industry's standard dummy text.
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  <div className="item">
                   
                    <h5>Frontend</h5>
                  </div>
                  <div className="item">
                    
                    <h5>Backend</h5>
                  </div>
                  <div className="item">
                  <div className="skills">
        <div className="outerer">
          <div className="innerer">
            <div id="number"></div>
          </div>
        </div>
      

      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="#e91e63" />
            <stop offset="100%" stop-color="#673ab7" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
      </svg>
</div>





                    <h5>Logo Design</h5>
                  </div>
                
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
      </section>
   
    </>
  );
};

export default Footer;
