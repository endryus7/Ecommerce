import { useState } from "react";

// Recebe a lista de produtos pra achar o produto completo a partir de um id (addProductToCart só recebe o id).
export function useCart(products) {
  const [showSidebarCart, setShowSidebarCart] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  // Soma (ou subtrai, se value for negativo) um valor ao total do carrinho. Usado tanto ao adicionar/remover produto quanto ao mudar a quantidade de um item já no carrinho.
  const addToCardTotal = (value) => setCartTotal(cartTotal + value);

  const addProductToCart = (id) => {
    const productToAdd = products.filter((product) => product.id === id)[0];

    // Evita duplicar o mesmo produto no carrinho.
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

  // Tudo que é devolvido aqui é o que fica disponível através do CartContext / useCartContext() pros componentes.
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