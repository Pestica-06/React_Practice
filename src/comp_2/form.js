
import React, { useState } from "react";
import Detail from "./Detail";

export default function Form() {
  // state declaring
  const [name, setName] = useState(null); // default value 
  const [pwd, setPwd] = useState(null); // string

  return (
    <div style={{ border: "1px solid blue", margin: "20px" }}>
      <h1>User Form</h1>
      {/* name as props */}
      {/* Step-> 2 */}
      <Detail name={name}  setName={setName} />
      {/* object literals */}
      Current User is {name}
    </div>
  );
}