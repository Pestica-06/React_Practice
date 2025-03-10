import { useState } from "react";

function Example() {
  const [name, setName] = useState("Pestica");

  return (
    <div>
      <h1>Name: {name}</h1> 
      <button onClick={() => setName("React Developer")}>Change Name</button>
    </div>
  );
}

export default Example;