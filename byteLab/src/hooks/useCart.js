import { useState } from "react";

export function useCart(products) {
  const [showSidebarCart, setShowSidebarCart] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCardTotal = (value) => setCartTotal(cartTotal + value);

  const addProductToCart = (id) => {
    const productToAdd = products.filter((product) => product.id === id)[0];
    if (selectedProducts.includes(productToAdd)) return;
    setSelectedProducts(selectedProducts.concat(productToAdd));
    setCartTotal(cartTotal + productToAdd.price);
  };

  const removeProductFromCart = (id) => {
    const newSelectedProducts = selectedProducts.filter(
      (product) => product.id !== id,
    );
    setSelectedProducts(newSelectedProducts);
  };

  return {
    showSidebarCart,
    setShowSidebarCart,
    selectedProducts,
    cartTotal,
    addToCardTotal,
    addProductToCart,
    removeProductFromCart,
  };
}
