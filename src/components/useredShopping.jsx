import React, { useReducer } from "react";

const initialState = {
  cartItems: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, cartItems: updatedCartItems };
      } else {
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
}

function ShoppingCart() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItemToCart = (id, name, price, quantity = 1) => {
    dispatch({ type: "ADD_ITEM", payload: { id, name, price, quantity } });
  };

  const removeItemFromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  const updateItemQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {state.cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>{" "}
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <span>{item.quantity}</span>{" "}
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>{" "}
            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addItemToCart(1, "Product 1", 10)}>
        Add Product 1
      </button>
      <button onClick={() => addItemToCart(2, "Product 2", 20)}>
        Add Product 2
      </button>
    </div>
  );
}

export default ShoppingCart;
