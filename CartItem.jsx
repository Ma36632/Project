import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./cartSlice";

function CartItem() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>

          <input
            type="number"
            value={item.quantity}
            onChange={(e) =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: Number(e.target.value)
                })
              )
            }
          />

          <button onClick={() => dispatch(removeItem(item.id))}>
            Remove
          </button>
        </div>
      ))}

      <h2>
        Total: $
        {cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        )}
      </h2>
    </div>
  );
}

export default CartItem;
