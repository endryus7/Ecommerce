import Product from "./Product";

// Só recebe "products" e desenha um <Product> pra cada um.
const ProductsList = ({ products }) => {
  return (
    <div className="product_list">
      {products.map((product) => (
        // ajuda a saber qual item mudou/saiu sem re-renderizar tudo.
        // {...product} espalha { id, image, name, price... }
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsList;