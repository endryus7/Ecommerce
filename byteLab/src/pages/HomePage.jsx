import Header from "../components/layout/Header";
import ProductsList from "../components/product/ProductsList";
import Exclusive from "../components/sections/Exclusive";
import Depoimentos from "../components/sections/Depoimentos";

const HomePage = ({ products }) => {
  return (
    <>
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

      <Exclusive />
      <Depoimentos />
    </>
  );
};

export default HomePage;
