import { useCartContext } from "../context/CartContext";

// Página "/cart/checkout".
const CheckoutPage = () => {
  const { cartTotal } = useCartContext();

  return <div>Página de Checkout — Total: R$ {cartTotal}</div>;
};

export default CheckoutPage;