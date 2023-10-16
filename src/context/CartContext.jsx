import { createContext, useContext, useEffect, useReducer } from 'react';
import { cartReducer } from '../reducer/CartReducer';

const Cart = createContext();

const CartContext = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, {
        cart: []
    });
    useEffect(() => {
      const oldCart = localStorage.getItem("cart");
      if (oldCart) {
          dispatch({ type: "SET_CART", payload: JSON.parse(oldCart) });
      }
  }, []);
    return (
        <Cart.Provider value={{ state, dispatch }}>
            {children}
        </Cart.Provider>
    );
};

export const CartState = () => {
    return useContext(Cart);
}

export default CartContext