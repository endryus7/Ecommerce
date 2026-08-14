import { useCartContext } from "../context/CartContext";

const CheckoutPage = () => {
  const { cartTotal } = useCartContext();

  return <div>Página de Checkout — Total: R$ {cartTotal}</div>;
};

export default CheckoutPage;
