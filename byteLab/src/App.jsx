import { use, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import ProductsPage from "./components/pages/ProductsPage";

function App() {
  const [products, setProducts] = useState([]);
  const [showSidebarCart, setShowSidebarCart] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const addProductToCart = (id) => {
    const productToAdd = products.filter((product) => product.id === id)[0];
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

  return (
    <>
      <Navbar
        setShowSidebarCart={setShowSidebarCart}
        selectedProducts={selectedProducts}
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
              />
            }
          />

          <Route
            path="/products"
            element={<ProductsPage products={products} />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
