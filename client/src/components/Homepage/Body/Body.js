import React from "react";
import "./Body.scss";
import Slideshow from "./Slideshow";

export default function Body() {
  return (

    <div className="body">
      <section className="bodyDescription">

        <div className='mainImage'>
        <img className='chicken' src='https://images.pexels.com/photos/6163271/pexels-photo-6163271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940g' alt='chicken'></img>
          <h5 className='textInMainImage'>Welcome Back, Hungry! </h5>
        </div>
        
        <div>
          <h5>Make recipes with whatever you got in the fridge! </h5>
        </div>

      </section>

      <section className='slideshow'>
      <h3 className='slideshowText'>Checkout the popular Recipes below! </h3>

      <div className='slideshowImages'>
        <Slideshow />
      </div>
      </section>

    </div>
  );
}
