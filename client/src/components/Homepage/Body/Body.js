import React from "react";
import "./Body.scss";
import Slideshow from "./Slideshow";

export default function Body() {
  return (

    <div className="body">
      <section className="bodyDescription">

        <div className='mainImage'>
        <img className='chicken' src='https://images.pexels.com/photos/6163271/pexels-photo-6163271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940g' alt='chicken'></img>
          <h5 className='textInMainImage'><span>Welcome Back, Hungry!</span></h5>
        </div>

        <div className='pros'>
          <h3 className='prosElement'>Limit food waste<span>&#9989;</span></h3>
          <h3 className='prosMiddleElement'>Decrease time spent looking for food<span>&#9989;</span></h3>
          <h3 className='prosElement'>Find recipes easily<span>&#9989;</span></h3>
        </div>

       

      </section>
      <div className='bodyParagraph'>
          <h5>Do you ever just continuously open your fridge wishing food would magically appear? Well this app doesn't help with that but it does help with finding recipes with the ingredients you already have. Make recipes with whatever you got in the fridge! </h5>
        </div>
      <section className='slideshow'>
      <h3 className='slideshowText'>Checkout the Popular Recipes below! </h3>

      <div className='slideshowImages'>
        <Slideshow />
      </div>
      </section>

    </div>
  );
}
