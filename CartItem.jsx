import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./cartSlice";

function CartItem() {
const cartItems = useSelector((state) => state.cart);
const dispatch = useDispatch();

const totalPrice = cartItems.reduce(
(total, item) => total + item.price * item.quantity,
0
);

const totalItems = cartItems.reduce(
(total, item) => total + item.quantity,
0
);

const increaseQuantity = (item) => {
dispatch(
updateQuantity({
id: item.id,
quantity: item.quantity + 1,
})
);
};

const decreaseQuantity = (item) => {
if (item.quantity > 1) {
dispatch(
updateQuantity({
id: item.id,
quantity: item.quantity - 1,
})
);
}
};

const continueShopping = () => {
document
.getElementById("products")
.scrollIntoView({ behavior: "smooth" });
};

return ( <div className="cart-page"> <h1>Shopping Cart</h1>

```
  {cartItems.length === 0 ? (
    <div className="empty-cart">
      <h2>Your cart is empty</h2>
      <p>Add some beautiful plants to your cart.</p>

      <button onClick={continueShopping}>
        Continue Shopping
      </button>
    </div>
  ) : (
    <>
      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          {item.image && (
            <img
              src={item.image}
              alt={item.name}
              className="cart-item-image"
            />
          )}

          <div className="cart-item-details">
            <h3>{item.name}</h3>

            <p>Price: ${item.price}</p>

            <div className="quantity-controls">
              <button onClick={() => decreaseQuantity(item)}>
                −
              </button>

              <span>{item.quantity}</span>

              <button onClick={() => increaseQuantity(item)}>
                +
              </button>
            </div>

            <p>
              Item Total: $
              {(item.price * item.quantity).toFixed(2)}
            </p>

            <button
              className="remove-button"
              onClick={() => dispatch(removeItem(item.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <h3>Total Items: {totalItems}</h3>

        <h2>
          Total: ${totalPrice.toFixed(2)}
        </h2>

        <button onClick={continueShopping}>
          Continue Shopping
        </button>
      </div>
    </>
  )}
</div>
```

);
}

export default CartItem;
