import React from "react";

// destructuring
// { name, setName } = props

// step=3 -> props declare
export default function Detail({ name, setName }) {
  return (
    <div style={{ border: "1px solid red", margin: "15px" }}>
      {/* input box for username */}
      <div>
        <label htmlFor="username">Username</label><br />
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter Username"
          onChange={(event) => {
            console.log(event.target);
            setName(event.target.value)
          }}
        />
      </div>
      <br />
      {/* input box for password */}
      <div>
        <label htmlFor="password">Password</label><br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
        />
      </div>
    </div>
  );
}