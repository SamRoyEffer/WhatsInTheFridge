import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <main id="foot">
      <div className="footer">
        <section className="about-us">
          <button className="btn">About Us</button>
        </section>
        <section className="home-btn">
          <button className="btn">Home</button>
        </section>
        <section className="contact">
          <button className="btn">Contact us</button>
        </section>
      </div>
    </main>
  );
}
