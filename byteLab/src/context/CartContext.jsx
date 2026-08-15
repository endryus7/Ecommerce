import { createContext, useContext } from "react";
import { useCart } from "../hooks/useCart";

// Cria o canal que vai carregar o estado do carrinho. Começa em null porque, fora de um Provider, não existe carrinho nenhum.
const CartContext = createContext(null);

// Componente que transmite o carrinho pra quem estiver dentro dele.
// Recebe "products" pois useCart precisa da lista de produtos pra saber qual produto adicionar quando addProductToCart(id) é chamado.
export const CartProvider = ({ children, products }) => {
  const cart = useCart(products);

  // Tudo que useCart devolve fica disponível pra qualquer componente descendente via useCartContext().
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

// Hook de conveniência: em vez de todo componente escrever useContext(CartContext), ele só chama useCartContext().
export const useCartContext = () => {
  const context = useContext(CartContext);

  // Se usar esse hook fora de um <CartProvider>, da erro com uma mensagem.
  if (!context) {
    throw new Error(
      "useCartContext precisa ser usado dentro de um <CartProvider>",
    );
  }

  return context;
};