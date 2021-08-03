import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Registration() {
  return (
    <main>
      <Header />
      <div>
        <form>
          <label>
            Full Name
            <input type="text" name="fullName" />
          </label>
          <label>
            Email
            <input type="text" name="Email" />
          </label>
          <label>
            Password
            <input type="text" name="Password" />
          </label>
          <button type="submit">Create Account</button>
        </form>
      </div>
    </main>
  );
}
