import React from "react";
import "./Header.scss";

export default function Header() {
  const userCookie = "";
  return (
    <main id="head">
      <nav className="header-nav">
        {userCookie ? (
          <section className="header">
            <button type="submit" className="btn">
              Home
            </button>
            <button type="submit" className="btn">
              Fridge
            </button>
            <button type="submit" className="btn">
              Logout
            </button>
          </section>
        ) : (
          <section className="header">
            <div className="homeBtn">
              <button type="submit" className="btn">
                Home
              </button>
            </div>
            <div className="loginInput">
              <input
                type="text"
                name="loginFormEmail"
                placeholder="Email"
              ></input>
              <input
                type="text"
                name="loginFormPassword"
                placeholder="Password"
              ></input>
              <button type="submit" className="btn">
                Login
              </button>
            </div>
          </section>
        )}
      </nav>
    </main>
  );
}
