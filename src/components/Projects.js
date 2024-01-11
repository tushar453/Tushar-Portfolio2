import React from "react";
import { NavLink } from "react-router-dom";
import Introi from "../components/assests/nit.jpeg";
// import Intr from "../components/assests/project.jpeg";
import "./Projects.css";
import resume from "./assests/Tushar-Resume.pdf";

import Heart from "./assests/png1.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Projects = () => {
  return (
    <>
      <section id="work" class="work-section wf-section">
        <div class="work-content-wrapper">
          <div class="hero-text-block work">Some Things I've Built</div>
          <h1 class="heading-h1 work">my work</h1>
          <p class="paragraph work">
            I am a Web Designer from Wisconsin, USA. I've been designing for
            over a decade. Throughout that time, I've worked remotely with
            exciting startups and established companies. I provide website
            design services, working with startups and established companies to
            improve performance and ease-of-use of their products.
          </p>
          <div class="project-wrapper">
            <div class="project-image"  data-aos="fade-right" data-aos-duration="6000">
              <div
                class="project-image-overlay"
                
              //   style="
              //   transform: translate3d(100%, 0px, 0px) scale3d(1, 1, 1)
              //     rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              //   transform-style: preserve-3d;
              // "
              ></div>
            </div>
            <div class="project-details-wrapper">
              <div
                class="work-type green"
              //   style="
              //   opacity: 1;
              //   transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
              //     rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              //   transform-style: preserve-3d;
              // "

              data-aos="fade" data-aos-duration="8000"
              >
                E-Market
              </div>
              <h3 data-aos="fade" data-aos-duration="8000"
                class="heading-h3"
              //   style="
              //   opacity: 1;
              //   transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
              //     rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              //   transform-style: preserve-3d;
              // "
              >
                Web Application
              </h3>
              <p
                class="paragraph project" data-aos="fade" data-aos-duration="8000"
              //   style="
              //   opacity: 1;
              //   transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
              //     rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              //   transform-style: preserve-3d;
              // "
              >
                Duis rutrum in purus a tristique. Integer id rhoncus elit.
                Praesent pellentesque libero massa, non pretium urna porttitor
                id Curabitur nec nisl ut diam porttitor placerat Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus
              </p>
              <a
                href="https://e-market-frontend-gray.vercel.app/"
                class="visit-link project w-inline-block" 
                target="_blank"
              //   style="
              //   opacity: 1;
              //   transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
              //     rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              //   transform-style: preserve-3d;
              // " 

              data-aos="fade" data-aos-duration="8000"
              >
                <div class="link-text">Visit Website</div>
                <div class="link-text fa-icon"></div>
              </a>
            </div>
          </div>
          <div class="project-wrapper two">
            <div class="project-image two"  data-aos="fade-left" data-aos-duration="6000">
              <div
                class="project-image-overlay"
              //   style="
              //   transform: translate3d(100%, 0px, 0px) scale3d(1, 1, 1)
              //     rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              //   transform-style: preserve-3d;
              // "
              ></div>
            </div>
            <div class="project-details-wrapper left">
              <div
                class="work-type green"
                data-aos="fade" data-aos-duration="8000"
              //   style="
              //   opacity: 1;
              //   transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
              //     rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              //   transform-style: preserve-3d;
              // "
              >
                Rayal Park
              </div>
              <h3
                class="heading-h3"
                data-aos="fade" data-aos-duration="8000"
              //   style="
              //   opacity: 1;
              //   transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
              //     rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              //   transform-style: preserve-3d;
              // "
              >
                Web Application
              </h3>
              <p
                class="paragraph project left"
                data-aos="fade" data-aos-duration="8000"
              //   style="
              //   opacity: 1;
              //   transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
              //     rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              //   transform-style: preserve-3d;
              // "
              >
                Sed eget ultrices tortor. Aenean non enim nulla. Vivamus vel
                pharetra sem. Etiam et viverra ex. Mauris efficitur lobortis
                condimentum. Suspendisse turpis lorem. Nullam non nunc in magna
                mattis aliquet. Praesent fringilla felis ut pretium convallis.
              </p>
              <a
                href="https://hotelbook-jet.vercel.app/"
                target="_blank"
                class="visit-link project w-inline-block"
                data-aos="fade" data-aos-duration="8000"
              //   style="
              //   opacity: 1;
              //   transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
              //     rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              //   transform-style: preserve-3d;
              // "
              >
                <div class="link-text">Visit Website</div>
                <div class="link-text fa-icon"></div>
              </a>
            </div>
          </div>
          <div class="project-wrapper">
            <div class="project-image three"  data-aos="fade-right" data-aos-duration="6000">
              <div
                class="project-image-overlay"
              //   style="
              //   transform: translate3d(100%, 0px, 0px) scale3d(1, 1, 1)
              //     rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              //   transform-style: preserve-3d;
              // "
              ></div>
            </div>
            <div class="project-details-wrapper">
              <div
                class="work-type green"
                data-aos="fade" data-aos-duration="8000"
              //   style="
              //   opacity: 1;
              //   transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
              //     rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              //   transform-style: preserve-3d;
              // "
              >
                Weather
              </div>
              <h3
                class="heading-h3"
                data-aos="fade" data-aos-duration="8000"
              //   style="
              //   opacity: 1;
              //   transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
              //     rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              //   transform-style: preserve-3d;
              // "
              >
                Web Application
              </h3>
              <p
              data-aos="fade" data-aos-duration="8000"
                class="paragraph project"
              //   style="
              //   opacity: 1;
              //   transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
              //     rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              //   transform-style: preserve-3d;
              // "
              >
                Duis rutrum in purus a tristique. Integer id rhoncus elit.
                Praesent pellentesque libero massa, non pretium urna porttitor
                id Curabitur nec nisl ut diam porttitor placerat Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus
              </p>
              <a
                href="https://nreact-weather-app-a4jo.vercel.app/"
                target="_blank"
                class="visit-link project w-inline-block"
                data-aos="fade" data-aos-duration="8000"
              //   style="
              //   opacity: 1;
              //   transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
              //     rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              //   transform-style: preserve-3d;
              // "
              >
                <div class="link-text">Visit Website</div>
                <div class="link-text fa-icon"></div>
              </a>
            </div>
          </div>
          <div class="project-wrapper two">
            <div class="project-image four" data-aos="fade-left" data-aos-duration="6000">
              <div
                class="project-image-overlay"
              //   style="
              //   transform: translate3d(100%, 0px, 0px) scale3d(1, 1, 1)
              //     rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              //   transform-style: preserve-3d;
              // "
              ></div>
            </div>
            <div class="project-details-wrapper left">
              <div
              data-aos="fade" data-aos-duration="8000"
                class="work-type green"
              //   style="
              //   opacity: 1;
              //   transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
              //     rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              //   transform-style: preserve-3d;
              // "
              >
                PortFolio
              </div>
              <h3
                class="heading-h3"
                data-aos="fade" data-aos-duration="8000"
              //   style="
              //   opacity: 1;
              //   transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
              //     rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              //   transform-style: preserve-3d;
              // "
              >
               Web Application
              </h3>
              <p
                class="paragraph project left"
                data-aos="fade" data-aos-duration="8000"
              //   style="
              //   opacity: 1;
              //   transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
              //     rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              //   transform-style: preserve-3d;
              // "
              >
                Sed eget ultrices tortor. Aenean non enim nulla. Vivamus vel
                pharetra sem. Etiam et viverra ex. Mauris efficitur lobortis
                condimentum. Suspendisse turpis lorem. Nullam non nunc in magna
                mattis aliquet. Praesent fringilla felis ut pretium convallis.
              </p>
              <a
                href="https://tushar-portfolio2.vercel.app/"
                target="_blank"
                class="visit-link project w-inline-block"
                data-aos="fade" data-aos-duration="8000"
              //   style="
              //   opacity: 1;
              //   transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
              //     rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              //   transform-style: preserve-3d;
              // "
              >
                <div class="link-text">Visit Website</div>
                <div class="link-text fa-icon"></div>
              </a>
            </div>
          </div>
          <div class="project-wrapper">
            <div class="project-image five" data-aos="fade-right" data-aos-duration="6000">
              <div
                class="project-image-overlay"
              //   style="
              //   transform: translate3d(100%, 0px, 0px) scale3d(1, 1, 1)
              //     rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              //   transform-style: preserve-3d;
              // "
              ></div>
            </div>
            <div class="project-details-wrapper">
              <div
                class="work-type green"
                data-aos="fade" data-aos-duration="8000"
              //   style="
              //   opacity: 1;
              //   transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
              //     rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              //   transform-style: preserve-3d;
              // "
              >
               College Fest Club (Abraxas)
              </div>
              <h3
              data-aos="fade" data-aos-duration="8000"
                class="heading-h3"
              //   style="
              //   opacity: 1;
              //   transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
              //     rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              //   transform-style: preserve-3d;
              // "
              >
                Web App
              </h3>
              <p
                class="paragraph project"
                data-aos="fade" data-aos-duration="8000"
              //   style="
              //   opacity: 1;
              //   transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
              //     rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              //   transform-style: preserve-3d;
              // "
              >
                Duis rutrum in purus a tristique. Integer id rhoncus elit.
                Praesent pellentesque libero massa, non pretium urna porttitor
                id Curabitur nec nisl ut diam porttitor placerat Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus
              </p>
              <a
                href="https://abraxas-2023.vercel.app/team"
                target="_blank"
                class="visit-link project w-inline-block"
                data-aos="fade" data-aos-duration="8000"
              //   style="
              //   opacity: 1;
              //   transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
              //     rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              //   transform-style: preserve-3d;
              // "
              >
                <div class="link-text">Visit Website</div>
                <div class="link-text fa-icon"></div>
              </a>
            </div>
          </div>
         
        </div>
      </section>
    </>
  );
};

export default Projects;
