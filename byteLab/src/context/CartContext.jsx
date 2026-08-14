import { createContext, useContext } from "react";
import { useCart } from "../hooks/useCart";

const CartContext = createContext(null);

export const CartProvider = ({ children, products }) => {
  const cart = useCart(products);

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCartContext precisa ser usado dentro de um <CartProvider>",
    );
  }

  return context;
};
