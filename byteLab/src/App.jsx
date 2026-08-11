import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import { useEffect, useState } from "react";

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
    </>
  );
}

export default App;

