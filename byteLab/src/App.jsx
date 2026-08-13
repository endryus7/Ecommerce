import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Exclusive from "./components/Exclusive";
import Depoimentos from "./components/Depoimentos";
import Footer from "./components/Footer";


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Header />

        <div className="page_inner_content">
          <div className="section_title">
            <h3>Produtos Selecionados</h3>
            <div className="underline"></div>
          </div>

          <div className="main_content">
            <ProductsList products={products} />
          </div>
        </div>
      </main>

      <Exclusive />
      <Depoimentos />
      <Footer />
    </>
  );
}

export default App;

