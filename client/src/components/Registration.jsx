import React from "react";
import "./Registration.scss";
export default function Registration() {
  return (
    <main>
      <div>
        <form id="create-account">
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
          <button className="btn-create" type="submit">
            Create Account
          </button>
        </form>
      </div>
    </main>
  );
}
