import { useState } from "react";

// Regras do carrinho isoladas da UI
export function useCart(products) {
  const [showSidebarCart, setShowSidebarCart] = useState(false);

  // Cada item: { ...produto, quantity }
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Total calculado a partir dos itens (não é estado próprio)
  const cartTotal = selectedProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  const addProductToCart = (id) => {
    const alreadyInCart = selectedProducts.find((product) => product.id === id);

    // Já está no carrinho: só aumenta a quantidade
    if (alreadyInCart) {
      updateQuantity(id, alreadyInCart.quantity + 1);
      return;
    }

    // Produto novo: adiciona com quantity 1
    const productToAdd = products.find((product) => product.id === id);
    if (!productToAdd) return;

    setSelectedProducts([...selectedProducts, { ...productToAdd, quantity: 1 }]);
  };

  const removeProductFromCart = (id) => {
    setSelectedProducts(selectedProducts.filter((product) => product.id !== id));
  };

  // Atualiza a quantidade de um item (nunca menor que 1)
  const updateQuantity = (id, quantity) => {
    const safeQuantity = Math.max(1, Number(quantity) || 1);

    setSelectedProducts(
      selectedProducts.map((product) =>
        product.id === id ? { ...product, quantity: safeQuantity } : product,
      ),
    );
  };

  return {
    showSidebarCart,
    setShowSidebarCart,
    selectedProducts,
    cartTotal,
    addProductToCart,
    removeProductFromCart,
    updateQuantity,
  };
}