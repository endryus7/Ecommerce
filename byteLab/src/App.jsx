import { use, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import ProductsPage from "./components/pages/ProductsPage";

function App() {
  const [products, setProducts] = useState([]);
  const [showSidebarCart, setShowSidebarCart] = useState(false);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <>
      <Navbar setShowSidebarCart={setShowSidebarCart} />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                products={products}
                setShowSidebarCart={setShowSidebarCart}
                showSidebarCart={showSidebarCart}
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
