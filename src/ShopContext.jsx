import { createContext, useState } from "react";
import { allProducts as initialProducts } from "./assets/Data/Data";
import PropTypes from "prop-types";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <ShopContext.Provider
      value={{ products, setProducts, cart, setCart, removeFromCart }}
    >
      {children}
    </ShopContext.Provider>
  );
};

ShopProvider.propTypes = {
  children: PropTypes,
};
