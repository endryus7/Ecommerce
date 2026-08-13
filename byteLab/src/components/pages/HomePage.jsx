import Header from "../Header";
import ProductsList from "../ProductsList";
import Exclusive from "../Exclusive";
import Depoimentos from "../Depoimentos";
import SidebarCart from "../SidebarCart";

const HomePage = ({ products, showSidebarCart, setShowSidebarCart }) => {
  return (
    <>
      <Header />
      <SidebarCart
        setShowSidebarCart={setShowSidebarCart}
        showSidebarCart={showSidebarCart}
      />

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
