import React, { useState } from "react";
import "../App.css"

const Card = ({ name , key,id}) => {

  return (
    <div className="child">
      {name}<br></br>
     
     {id}
    </div>
  );
};

export default Card;

//app.js(when you use this)
// import React from "react";
// import people from "./comp_4/info.json" 
// import Card from "./comp_4/info";
// import  "./App.css";
// const App = () => {
//   return (
//     <div className="parent">
//       {people.map((person) => (
//         <Card key={person.id} name={person.name} id={person.id} />
//       ))}
//     </div>
//   );
// };

// export default App;