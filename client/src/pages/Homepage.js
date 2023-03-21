import React from "react";
import "./Homepage.css";
import Food from "../images/Food.png";
import backgroundimg from "../images/background.png";
import Card from "react-bootstrap/Card";
import Reviving from "../images/Reviving.png"
import Redefine from "../images/Redefine.png"
import Reuse from "../images/Reuse.png"
import Recycle from "../images/Recycle.png"
import Home from "../images/Home.png"
import CreateRecipe from './create-recipe.js'

export const Homepage = () => {
  return (
    <>
      <section class="banner blog-banner">
        <div class="container">
          <div class="blog-banner-main">
            <div class="blog-banner-right">
              <img src={Home} style={{width: "60%"}} />
            </div>
            <div
              className="blog-banner-left aos-init aos-animate"
              data-aos="na"
              data-aos-id="fill-svg"
            >
              <p>
                Don't let food go to waste, let's create a sustainable taste
              </p>
              <h1 class="banner-title">
                Bite-Sized Solution <br></br> to Food Waste
              </h1>
              <span class="b-path-anim-2 hidden lg:block">
                <svg
                  class="path-anim drawsvg-initialized"
                  data-aos-parent="blog-banner-left"
                  width="363"
                  height="23"
                  viewBox="0 0 363 23"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  preserveAspectRatio="xMinYMin"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="#F36D45"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M51 6.88273C128 3.21606 290.6 -2.51727 325 3.88273C282.667 0.382715 158.6 -1.01731 1 21.3827C98.1667 16.0494 306.3 7.88269 361.5 17.8827"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div className="box-size" style={{ width: "22%", margin: "10px", border: "2px solid black" }}>
            <div className="round-box">
              <img src={Reuse} alt="" style={{ width: "80%", margin: "30px"}}  />
              <h3>Reuse</h3>
              <h5>Don't throw away your leftovers, turn them into a new mean!</h5>
            </div>
        </div>
        <div style={{ width: "22%", margin: "10px", border: "2px solid black" }}>
        <div className="round-box">
              <img src={Recycle} alt="" style={{ width: "75%", margin: "30px"}}  />
              <h3>Recycle</h3>
              <h5>Select a box containing the number of bottles required.</h5>
            </div>
        </div>
        <div style={{ width: "22%", margin: "10px", border: "2px solid black" }}>
        <div className="round-box">
              <img src={Redefine} alt="" style={{ width: "55%", marginLeft: "70px", marginTop: "20px"}} />
              <h3>Redefining Wastes</h3>
              <h5>Select a box containing the number of bottles required.</h5>
            </div>
        </div>
        <div style={{ width: "22%", margin: "10px", border: "2px solid black" }} >
        <div className="round-box">
              <img src={Reviving} alt="" style={{ width: "65%", marginLeft: "70px", marginTop: "36px"}} />
              <h3>Reviving Food</h3>
              <h5>Select a box containing the number of bottles required.</h5>
            </div>
        </div>
      </div>

      <CreateRecipe />


      <footer style={{width:"100%"}}>
        <div class="footer-row2">
            <div class="footer-row2-left">© 2023 SecondBite - All Rights Reserved.</div>
            <div class="footer-row2-right"><a href="/ComingSoon.html" target="_blank">Terms & Conditions </a> <span>|</span> <a href="/ComingSoon.html" target="_blank">Privacy
                    Policy</a> </div>
        </div>
    </footer>
    </>
  );
};
