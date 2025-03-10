import React, { useState } from "react";
import Form from "./Order";

export default function OrderDetails(){
    const[name,setName]=useState("john");
     return (
        <div style={{ border: "1px solid blue", margin: "20px" }}>
          <h1>Order Form</h1>
          {/* name as props */}
          {/* Step-> 2 */}
          <Form name={name}  setName={setName} />
          {/* object literals */}

        </div>
)};