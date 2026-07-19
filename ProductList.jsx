import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";

function ProductList() {
  const dispatch = useDispatch();

  const plants = [
    { id: 1, name: "Aloe Vera", price: 15 },
    { id: 2, name: "Snake Plant", price: 20 },
    { id: 3, name: "Peace Lily", price: 25 }
  ];

  return (
    <div>
      <h1>Paradise Nursery Plants</h1>

      {plants.map((plant) => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button onClick={() => dispatch(addItem(plant))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
