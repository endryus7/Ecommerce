import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import SidebarCart from "./components/cart/SidebarCart";

import { useCart } from "./hooks/useCart";
import { getProducts } from "./services/productService";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const {
    showSidebarCart,
    setShowSidebarCart,
    selectedProducts,
    cartTotal,
    addToCardTotal,
    addProductToCart,
    removeProductFromCart,
  } = useCart(products);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <>
      <Navbar
        setShowSidebarCart={setShowSidebarCart}
        selectedProducts={selectedProducts}
      />

      <SidebarCart
        setShowSidebarCart={setShowSidebarCart}
        showSidebarCart={showSidebarCart}
        selectedProducts={selectedProducts}
        cartTotal={cartTotal}
        removeProductFromCart={removeProductFromCart}
        addToCardTotal={addToCardTotal}
      />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                products={products}
                setShowSidebarCart={setShowSidebarCart}
                showSidebarCart={showSidebarCart}
                addProductToCart={addProductToCart}
                selectedProducts={selectedProducts}
                cartTotal={cartTotal}
                removeProductFromCart={removeProductFromCart}
                addToCardTotal={addToCardTotal}
              />
            }
          />

          <Route
            path="/products"
            element={
              <ProductsPage
                products={products}
                addProductToCart={addProductToCart}
              />
            }
          />

          <Route
            path="/cart/checkout"
            element={<div>Página de Chechout {cartTotal}</div>}
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
