import React, { useEffect } from "react";
import "./Skils.css";

const Skils = () => {
  useEffect(() => {
    let number = document.getElementById("number");
    let number1 = document.getElementById("number1");
    let counter = 0;
    setInterval(() => {
      if (counter == 55) {
        clearInterval();
      } else {
        counter += 1;
        number.innerHTML = counter + "%";
      }
    }, 25);
    let count = 0;
    setInterval(() => {
      if (count == 80) {
        clearInterval();
      } else {
        count += 1;
        number1.innerHTML = count + "%";
      }
    }, 25);
  });

  return (
    <div className="containerer">
     <div className="skills-content" ><h1>Skills</h1></div     >
      <div className="skillls">
 
        
        <div className="skills">
          <div className="outerer">
            <div className="innerer">
              <div id="number"></div>
            </div>
          </div>
          <h4>Backend</h4>

          <svg  className="svgssss"
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

        <div className="skills">
          <div className="outerer">
            <div className="innerer">
              <div id="number1"></div>
            </div>
          </div>
            <h4>Frontend</h4>
          <svg className="svgssss"
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
            <circle className="second-circle"  cx="80" cy="80" r="70" stroke-linecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Skils;
