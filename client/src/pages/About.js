import React from "react";
import "./About.css"
import aboutImg from "../images/about-back.jpeg"
import about from "../images/about.jpeg"


export const About = () => {
  return (
    <>
      {/* <section class="header">
    <div class="overlay">
      <h1 style={{color:"white"}}>ABOUT US</h1>

      <button><a href=""></a></button>
    </div>

  </section> */}

  <section>
    <img src={about} alt=""  style={{width: "100%"}}/>
  </section>

  <section>
    <h3>Second Bite provide end-to-end waste management services based on the principles of circular economy. We handle waste sustainably & responsibly for Restaurants, supermarkets, Event Organizers, Consumers, NGs, Food Processing organization, Donors and many more.</h3>
  </section>

  <section>
    <h3>
    Zero Food waste refers to the goal of eliminating food waste entirely. It means that no edible food is discarded or wasted at any point in the food supply chain, from production to consumption.  The Concept is becoming increasingly important due to the significant environmental, social, and economic impacts of food waste.
The environmental impact of food waste includes the emission of greenhouse gasses, water waste, and loss of biodiversity. Socially, food waste contributes to food insecurity, as many people around the world do not have access to enough nutritious food. Economically, food waste is a significant financial loss for businesses and individuals.
Achieving zero food waste requires a multi-faceted approach that involves reducing waste at all stages of the food supply chain. This can include improving production efficiency, implementing better inventory management, optimizing distribution and transportation, educating consumers about food waste prevention, and finding innovative ways to repurpose or donate excess food.
In addition to its environmental and social benefits, zero food waste can also create economic opportunities, such as new business models that focus on repurposing food waste, composting, or converting food waste into energy.
Overall, the concept of zero food waste is an important and ambitious goal that can lead to a more sustainable, equitable, and efficient food system for all.
    </h3>
  </section>

  <section className="container" style={{backgroundColor: "black"}}>
    <img src={aboutImg} alt="" style={{width: "100%", objectFit: "cover"}} />
  </section>
    
    </>
  )
}
