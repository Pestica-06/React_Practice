import React, { useState } from "react";

export default function Answer() {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    food: ''
  });

  function handling() {
    console.log(data); 
  }

  return (
    <div>
      <h1>FORM</h1>

      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={data.name}
        required
        autoComplete="off"
        onChange={(e) =>
          setData((prev) => {
            return { ...prev, name: e.target.value };
          })
        }
      />
      <br />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={data.email}
        required
        autoComplete="off"
        onChange={(e) =>
          setData((prev) => {
            return { ...prev, email: e.target.value };
          })
        }
      />
      <br />

      <label htmlFor="phone">Phone</label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={data.phone}
        required
        autoComplete="off"
        onChange={(e) =>
          setData((prev) => {
            return { ...prev, phone: e.target.value };
          })
        }
      />
      <br />

      <label htmlFor="food">Favorite Food</label>
      <select
        id="food"
        name="food"
        value={data.food}
        required
        onChange={(e) =>
          setData((prev) => {
            return { ...prev, food: e.target.value };
          })
        }
      >
        <option value="">Select your favorite food</option>
        <option value="Pizza">Pizza</option>
        <option value="Burger">Burger</option>
        <option value="Pasta">Pasta</option>
        <option value="Sushi">Sushi</option>
        <option value="Salad">Salad</option>
      </select>
      <br />

      <button
        onClick={(e) => {
          e.preventDefault();
          handling(); 
        }}
      >
        Submit
      </button>
    </div>
  );
}
