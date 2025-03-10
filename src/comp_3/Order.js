
import React from "react";
import OrderDetails from "./OrderDetails";

export default function Form({name, setName}){

    return(
        <div>
            <label htmlFor="name"></label>
            <input type="text"
            id="name"
            name="name"
            onChange={(event)=>{
                console.log(event.target);
               setName(event.target.value)
            }}
            />
        </div>
    )
}