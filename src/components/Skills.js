import React from "react";
import "./Skills.css";
import { FaBars, FaTimes } from "react-icons/fa";
import badge1 from "./assests/badge-1.png";
import badge2 from "./assests/badge-2.png";
import badge3 from "./assests/badge-9.svg";
import badge5 from "./assests/badge-5.webp";
import github from "./assests/github.png";
import leetcode from "./assests/LEETCODE.svg";
import ninja from './assests/ninajas.png'
const Skills = () => {
  return (
    <div class="card-container-7">
      <div class="card-7">
        <div class="card-front-7">
          <div class="content-7">
            <h5>OPEN SOURCE CONTRIBUTIONS</h5>
            <div class="content-details-7">
              <p>Username :tushar453 </p>
              <p>Total Commits(2023): 113 </p>
              <p>Total Pull Rquests:</p>
              <p>Badges</p>
              {/*  style={{ backgroundImage: `url(${})`, height:'400px'  }} */}
              <div class="badges-7">
                <div
                  class="badge-1-7"
                  style={{ backgroundImage: `url(${badge1})`, height: "120px" }}
                ></div>
                <div
                  class="badge-1-7"
                  style={{ backgroundImage: `url(${badge2})`, height: "120px" }}
                ></div>
              </div>
            </div>
            <div
              class="icons-profile-7"
              style={{ backgroundImage: `url(${github})`, height: "70px" }}
            ></div>
          </div>
        </div>
        <div class="card-back-7">
          <p>Tap To Open</p>
        </div>
      </div>




      <div class="card-7">
        <div class="card-front-7">
          <div class="content-7">
            <h5>COMPETITIVE PROGRAMMING</h5>
            <div class="content-details-7">
              <p>Username :sharmatushar </p>
              <p>Level: 5(Champion)</p>
              <p>Total Problem Solved:100</p>
              <p>Badges</p>
              {/*  style={{ backgroundImage: `url(${})`, height:'400px'  }} */}
              <div class="badges-7">
                 <div
                  class="badge-1-9"
                  style={{ backgroundImage: `url(${badge3})`, height: "100px" ,width: "100px"  }}
                ></div>
               <div
                  class="badge-1-7"
                  style={{ backgroundImage: `url(${badge5})`, height: "120px" }}
                ></div>
                
              </div>
            </div>
            <div
              class="icons-profile-7"
             
            >
              Coding ninja
            </div>
          </div>
        </div>
        <div class="card-back-7">
          <p>Tap To Open</p>
        </div>
      </div>




      
      <div class="card-7">
        <div class="card-front-7">
          <div class="content-7">
            <h5>COMPETITIVE PROGRAMMING</h5>
            <div class="content-details-7">
              <p>Username : /tushar4545/ </p>
              <p>Question Solved:150 </p>
              <p>Rank:5000</p>
              <p>Badges</p>
              {/*  style={{ backgroundImage: `url(${})`, height:'400px'  }} */}
              <div class="badges-7">
                {/* <div
                  class="badge-1-7"
                  style={{ backgroundImage: `url(${badge1})`, height: "120px" }}
                ></div>
                <div
                  class="badge-1-7"
                  style={{ backgroundImage: `url(${badge2})`, height: "120px" }}
                ></div> */}
                No Badges Yet!
              </div>
            </div>
            <div
              class="icons-profile-7"
              style={{ backgroundImage: `url(${leetcode})`, height: "70px" }}
            ></div>
          </div>
        </div>
        <div class="card-back-7">
          <p>Tap To Open</p>
        </div>
      </div>

      <div class="card-7">
        <div class="card-front-7">
          <div class="content-7">
            <h5>Participated In SIH 2022 ,2023</h5>
            <div class="content-details-7">
           <p>I Participated in <span>SMART INDIA HACATHHON</span> two times , in year 2022 & 2023 
           
           .In 2022 I went to Presidency University ,Bangalore to represent NIT Hamirpur in Semifinal Round of SIH 2022.
           In Consecutive year 2023 ,i was able to pass the college level screening for Upcoming SIH 2023

           
           
    </p>
              {/*  style={{ backgroundImage: `url(${})`, height:'400px'  }} */}
              <div class="badges-7">
                {/* <div
                  class="badge-1-7"
                  style={{ backgroundImage: `url(${badge1})`, height: "120px" }}
                ></div>
                <div
                  class="badge-1-7"
                  style={{ backgroundImage: `url(${badge2})`, height: "120px" }}
                ></div> */}

              </div>
            </div>
            <div
              class="icons-profile-7"
             
            ></div>
          </div>
        </div>
        <div class="card-back-7">
          <p>Tap To Open</p>
        </div>
      </div>


      
    </div>
  );
};

export default Skills;
