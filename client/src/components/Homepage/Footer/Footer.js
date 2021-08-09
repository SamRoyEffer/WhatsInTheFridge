import React from "react";
import "./Footer.scss"

export default function Footer() {

  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">

          {/* Column 1*/}
          <div className="col">
            <h4>About Us</h4>
            <ul className="list-unstyled">
              <li>Developers</li>
            </ul>
          </div>


          {/* Column 3*/}
          <div className="col">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>Email</li>
              <li>Phone</li>
              <li>Social</li>
            </ul>
          </div>

          {/* Column 2*/}
          <div className="col">
            <h4>Services</h4>
            <ul className="list-unstyled">
              <li>API</li>
              <li><a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
              <li><a href="http://www.freepik.com">Designed by Kjpargeter / Freepik</a></li>
              <li><a href='https://www.freepik.com/photos/background'>Background photo created by rawpixel.com - www.freepik.com</a></li>
            </ul>
          </div>
          
        </div>
        
        {/* Footer Copyright */}
        <div className="footer-copyright">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} Recipe App | All Rights Reserved | Terms Of Service | Privacy
          </p>
        </div>

      </div>
    </div>
  )
}