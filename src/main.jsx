import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/style.css";
import "../src/assets/css/skin-color.css";
import { AuthProvider } from "./context/auth";
import CartContext from "./context/CartContext.jsx";
import WishlistContext from "./context/WishListContext.jsx";
import SearchContext from "./context/SearchContext.jsx";
import {FilterProvider} from "./context/FilterProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SearchContext>
    <AuthProvider>
      <FilterProvider>
        <CartContext>
          <WishlistContext>
            <App />
          </WishlistContext>
        </CartContext>
      </FilterProvider>
    </AuthProvider>
  </SearchContext>
);
