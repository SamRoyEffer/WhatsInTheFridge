import React from "react";
import Body from "./Body/Body";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import "./index.scss";

export default function Homepage(props) {
  return (
    <div className="webpage">
      <Navbar {...props} />
      <Body />
      <Footer />
    </div>
  );
}
