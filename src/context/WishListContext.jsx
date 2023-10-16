import { createContext, useContext, useEffect, useReducer } from "react";
import { wishlistReducer } from "../reducer/WishListReducer.jsx";

const Wishlist = createContext();

const WishlistContext = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, { wishlist: [] });

  useEffect(() => {
    const oldWishlist = localStorage.getItem("bnwish");
    if (oldWishlist) {
      dispatch({ type: "SET_WISHLIST", payload: JSON.parse(oldWishlist) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bnwish", JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  return (
    <Wishlist.Provider value={{ state, dispatch }}>
      {children}
    </Wishlist.Provider>
  );
};

export const useWishlist = () => {
  return useContext(Wishlist);
};

export default WishlistContext;