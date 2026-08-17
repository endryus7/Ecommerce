import { useNavigate } from "react-router-dom";
import { Banknote, ShoppingCart } from "lucide-react";
import { useCartContext } from "../../context/CartContext";
import { formatPrice } from "../../utils/formatPrice";

// Card individual de um produto
const Product = ({ id, image, name, price }) => {
  const { addProductToCart } = useCartContext();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    addProductToCart(id); // primeiro adiciona o produto ao carrinho
    navigate("/cart/checkout"); // depois manda o usuário pro checkout
  };

  return (
    <div className="product">
      <img src={image} alt={name} />
      <p className="name">{name}</p>

      {/* Rating fixo */}
      <p className="rate">&#9733;&#9733;&#9733;&#9733;&#9733;</p>

      <p className="price">
        <span>R$</span> {formatPrice(price)}
      </p>

      <div className="buttons">
        {/* rota para CheckoutPage */}
        <button onClick={handleBuyNow} className="btn_icon">
          <span>Comprar agora</span>
          <Banknote />
        </button>

        {/* adiciona ao carrinho */}
        <button
          onClick={() => addProductToCart(id)}
          className="btn_icon add_to_cart_btn"
        >
          <span>Adicionar ao carrinho</span>
          <ShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default Product;