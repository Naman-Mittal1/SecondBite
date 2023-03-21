import React from "react";
import "./Homepage.css";
import FoodRecycle from "../images/Foodrecycle.png"
import "./recycle.css"
import GridExample from "./GridExample";

import Home from "../images/Home.png"

export const Recycle = () => {
  return (
    <>
      <section class="banner blog-banner">
        <div class="container">
          <div class="blog-banner-main">
            <div class="blog-banner-right">
              <img src={FoodRecycle} style={{width: "100%"}} />
            </div>
            <div
              className="blog-banner-left aos-init aos-animate"
              data-aos="na"
              data-aos-id="fill-svg"
            >
              <h1 class="banner-title" style={{margin: "revert"}}>
                Why Recycle ...  <br />
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

      <div className="about-recycle">
        <p className="p-recycle" style={{width: "100%", maxWidth: "90%", margin: "auto"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nemo commodi iste corrupti modi eveniet aut eius minima numquam dolores esse assumenda repellendus quae, itaque quasi dolor facilis sunt sint harum eum. Unde accusantium recusandae quo maxime dicta ipsa, qui quam sint rerum sapiente, ducimus veritatis dolore numquam aspernatur quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolore sint esse exercitationem dolores et obcaecati vero eaque recusandae nam, corrupti eos ad non vel quidem animi deleniti architecto similique voluptatibus minima deserunt maiores ratione amet a. Dolore at consequuntur ratione accusamus, beatae rerum, praesentium, illo deserunt exercitationem maiores in.</p>
      </div>

      <section>
      <section class="banner blog-banner" style={{marginTop: "30px", padding: "0 0 20px "}}>
        <div class="container">
          <div class="blog-banner-main">
            <div className="blog-banner-left aos-init aos-animate"
              data-aos="na"
              data-aos-id="fill-svg">
              <img src={FoodRecycle} style={{width: "100%"}} />
            </div>
            <div class="blog-banner-left" 
              
            >
              <h1 class="banner-title" style={{margin: "revert"}}>
                Why Recycle ...  <br />
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

      <section class="banner blog-banner" style={{marginTop: "30px", padding: "0 0 80px"}} >
        <div class="container">
          <div class="blog-banner-main">
            <div class="blog-banner-right">
              <img src={FoodRecycle} style={{width: "100%"}} />
            </div>
            <div
              className="blog-banner-left aos-init aos-animate"
              data-aos="na"
              data-aos-id="fill-svg"
            >
              <h1 class="banner-title" style={{margin: "revert"}}>
                Why Recycle ...  <br />
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
      </section>
    </>
  );
};
