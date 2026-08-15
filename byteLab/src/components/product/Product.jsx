import { Link } from "react-router-dom";
import { Banknote, ShoppingCart } from "lucide-react";
import { useCartContext } from "../../context/CartContext";

// Card individual de um produto. Recebe os dados do produto (id,
// image, name, price).
const Product = ({ id, image, name, price }) => {
  // addProductToCart vem do CartContext.
  const { addProductToCart } = useCartContext();

  return (
    <div className="product">
      <img src={image} alt={name} />
      <p className="name">{name}</p>

      {/* Rating (5 estrelas) */}
      <p className="rate">&#9733;&#9733;&#9733;&#9733;&#9733;</p>

      <p className="price">
        <span>R$</span> {price}
      </p>

      <div className="buttons">
        {/* Link fixo pro id */}
        <Link to="/products/123/checkout" className="btn_icon">
          <span>Comprar agora</span>
          <Banknote />
        </Link>

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