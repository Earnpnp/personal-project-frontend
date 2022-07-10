import React, { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import axios from "../config/axios";

const CartContext = createContext();
function CartContextProvider({ children }) {
  const [cart, setCart] = useState(null);
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const resCart = await axios.get("/cart/cartId");
        setCart(resCart.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCart();
  }, [fetch]);

  return (
    <CartContext.Provider value={{ cart, setFetch }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const ctx = useContext(CartContext);
  return ctx;
};
export default CartContextProvider;
export { useCart };
