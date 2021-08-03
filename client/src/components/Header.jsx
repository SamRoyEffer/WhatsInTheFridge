import React from "react";

export default function Header() {
  return (
    <main>
      {userCookie ? (
        <section className="header-login">
          <button>Home</button>
          <button>Fridge</button>
          <button>Logout</button>
        </section>
      ) : (
        <section className="header-not-log">
          <button>Login</button>
          <button>Home</button>
        </section>
      )}
    </main>
  );
}
