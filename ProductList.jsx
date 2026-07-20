import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";

function ProductList() {
  const dispatch = useDispatch();

  const [addedItems, setAddedItems] = useState([]);

  const plants = [
    {
      id: 1,
      name: "Aloe Vera",
      price: 10,
      category: "Indoor Plants",
      image: "/images/aloe-vera.jpg",
    },
    {
      id: 2,
      name: "Snake Plant",
      price: 15,
      category: "Indoor Plants",
      image: "/images/snake-plant.jpg",
    },
    {
      id: 3,
      name: "Peace Lily",
      price: 20,
      category: "Indoor Plants",
      image: "/images/peace-lily.jpg",
    },
    {
      id: 4,
      name: "Rose Plant",
      price: 12,
      category: "Outdoor Plants",
      image: "/images/rose-plant.jpg",
    },
    {
      id: 5,
      name: "Money Plant",
      price: 18,
      category: "Outdoor Plants",
      image: "/images/money-plant.jpg",
    },
    {
      id: 6,
      name: "Cactus",
      price: 8,
      category: "Succulents",
      image: "/images/cactus.jpg",
    },
  ];

  const categories = [
    "Indoor Plants",
    "Outdoor Plants",
    "Succulents",
  ];

  const handleAddToCart = (plant) => {
    dispatch(
      addItem({
        ...plant,
        quantity: 1,
      })
    );

    setAddedItems((previousItems) => [
      ...previousItems,
      plant.id,
    ]);
  };

  return (
    <div className="product-page">

      {/* Navbar */}
      <nav className="navbar">
        <h2>🌿 Paradise Nursery</h2>

        <div className="nav-links">
          <a href="#center">Home</a>
          <a href="#about">About Us</a>
          <a href="#products">Plants</a>
          <a href="#cart">Cart 🛒</a>
        </div>
      </nav>

      <h1>Paradise Nursery Plants</h1>

      <p>
        Explore our beautiful collection of indoor, outdoor, and succulent
        plants.
      </p>

      {/* Three Categories */}
      {categories.map((category) => (
        <section key={category} className="plant-category">
          <h2>{category}</h2>

          <div className="product-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="product-card" key={plant.id}>

                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="product-image"
                  />

                  <h3>{plant.name}</h3>

                  <p>Category: {plant.category}</p>

                  <h4>${plant.price}</h4>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedItems.includes(plant.id)}
                  >
                    {addedItems.includes(plant.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>

                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
