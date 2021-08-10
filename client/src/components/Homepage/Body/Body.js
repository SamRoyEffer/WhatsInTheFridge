import React from "react";
import "./Body.scss";
import Slideshow from "./Slideshow";

export default function Body() {
  return (
    <div className="body">
      <section className="bodyDescription">
        <h3 className="body">Does Your Fridge Feel Empty?</h3>
        <h5>Welcome Back Hungry! </h5>
        <h5>Make recipes with whatever you got! </h5>
      </section>
      <section>
        <Slideshow />
      </section>
    </div>
  );
}
