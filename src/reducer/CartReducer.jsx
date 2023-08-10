export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.cart.findIndex(item => item._id === action.payload._id);

      if (existingItemIndex !== -1) {
        // Book is already in the cart, increase its qty
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].qty += 1;
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { ...state, cart: updatedCart };
      } else {
        // Book is not in the cart, add it as a new item
        const updatedCart = [...state.cart, { ...action.payload, qty: 1 }];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { ...state, cart: updatedCart };
      }
    case "REMOVE_FROM_CART":
      const filteredCart = state.cart.filter(
        (item) => item._id !== action.payload._id
      );
      localStorage.setItem("cart", JSON.stringify(filteredCart));
      return { ...state, cart: filteredCart };
    case "INCREASE_CART_QTY":
      const increasedCart = state.cart.map((item) =>
        item._id === action.payload._id ? { ...item, qty: item.qty + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(increasedCart));
      return { ...state, cart: increasedCart };
    case "DECREASE_CART_QTY":
      const decreasedCart = state.cart.map((item) =>
        item._id === action.payload._id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(decreasedCart));
      return { ...state, cart: decreasedCart };
    case "EMPTY_CART":
      localStorage.removeItem("cart");
      return { ...state, cart: [] };
    case "SET_CART":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};
