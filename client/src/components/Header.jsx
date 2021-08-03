import React from "react";
import "./Header.scss";

export default function Header() {
  const userCookie = "Helloe";
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
            <button type="submit" className="btn">
              Login
            </button>
            <button type="submit" className="btn">
              Home
            </button>
          </section>
        )}
      </nav>
    </main>
  );
}
