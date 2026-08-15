import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import SidebarCart from "./components/cart/SidebarCart";
import CheckoutPage from "./pages/CheckoutPage";

import { CartProvider } from "./context/CartContext";
import { getProducts } from "./services/productService";

// App busca os produtos, controla loading/erro
function App() {
  // Lista completa de produtos vinda da API (db.json).
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Texto digitado na busca do Navbar.
  const [searchTerm, setSearchTerm] = useState("");

  // Busca os produtos uma única vez, quando o App monta.
  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Filtra a lista de produtos, cria uma nova lista filtrada a cada renderização. O carrinho (CartProvider) recebe a lista completa.
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Enquanto a API não responde, mostra loading.
  if (loading) {
    return <div className="loading_state">Carregando produtos...</div>;
  }

  // Se o fetch falhar (ex: db.json fora do ar), mostra erro.
  if (error) {
    return (
      <div className="error_state">
        Não foi possível carregar os produtos. Tente novamente mais tarde.
      </div>
    );
  }

  return (
    // CartProvider: tudo que estiver dentro dele consegue chamar useCartContext() e pegar addProductToCart cartTotal etc. sem precisar receber isso por prop.
    <CartProvider products={products}>
      {/* onSearch é passado direto por prop */}
      <Navbar onSearch={setSearchTerm} />
      <SidebarCart />

      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage products={filteredProducts} />}
          />
          <Route
            path="/products"
            element={<ProductsPage products={filteredProducts} />}
          />
          <Route path="/cart/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>

      <Footer />
    </CartProvider>
  );
}

export default App;