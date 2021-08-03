import React from "react";
import './Body.scss'
import Slideshow from "./Slideshow";

export default function Body() {
return (
  <div className="body">

  <section className="bodyDescription">
    <h3 className = 'body'>Landing Page</h3>
    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. </h5>
  </section>
  <section>
    <Slideshow/>
  </section>
  </div>
);

}