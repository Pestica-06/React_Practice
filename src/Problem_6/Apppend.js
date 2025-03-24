import React, { useState } from "react";

function Problem6() {
  const [inputValue, setInputValue] = useState("");
  const [numbers, setNumbers] = useState([]); 
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAdd = () => {
    const num = parseInt(inputValue, 10);

    if (isNaN(num) || num < 0 || num > 50) {
      alert("Input must be between 0 and 50");
      setInputValue("");
      return;
    }

    setNumbers([...numbers, num]); 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Enter a number between 0 and 50</h2>
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        style={{ padding: "5px", fontSize: "16px" }}
      />
      <button
        onClick={handleAdd}
        style={{ marginLeft: "10px", padding: "5px 15px", fontSize: "16px" }}
      >
        Add
      </button>
      <p>
        <strong>You have just entered:</strong> {numbers.join(", ")}
      </p>
      <input
        type="text"
        value={numbers.join(", ")} 
        readOnly
        style={{
          width: "200px",
          textAlign: "center",
          fontSize: "16px",
          padding: "5px",
        }}
      />
    </div>
  );
}

export default Problem6;
