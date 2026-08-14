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

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="loading_state">Carregando produtos...</div>;
  }

  if (error) {
    return (
      <div className="error_state">
        Não foi possível carregar os produtos. Tente novamente mais tarde.
      </div>
    );
  }

  return (
    <CartProvider products={products}>
      <Navbar />
      <SidebarCart />

      <main>
        <Routes>
          <Route path="/" element={<HomePage products={products} />} />
          <Route
            path="/products"
            element={<ProductsPage products={products} />}
          />
          <Route path="/cart/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>

      <Footer />
    </CartProvider>
  );
}

export default App;
