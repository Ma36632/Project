import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";

function ProductList() {
const dispatch = useDispatch();

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

const handleAddToCart = (plant) => {
dispatch(
addItem({
...plant,
quantity: 1,
})
);
};

return ( <div className="product-page"> <h1>Paradise Nursery Plants</h1>

```
  <p>
    Explore our beautiful collection of indoor, outdoor, and succulent
    plants.
  </p>

  <div className="product-grid">
    {plants.map((plant) => (
      <div className="product-card" key={plant.id}>
        <img
          src={plant.image}
          alt={plant.name}
          className="product-image"
        />

        <h2>{plant.name}</h2>

        <p>Category: {plant.category}</p>

        <h3>${plant.price}</h3>

        <button
          onClick={() => handleAddToCart(plant)}
        >
          Add to Cart
        </button>
      </div>
    ))}
  </div>
</div>
```

);
}

export default ProductList;
