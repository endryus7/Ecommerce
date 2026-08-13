import Header from "../Header";
import ProductsList from "../ProductsList";
import Exclusive from "../Exclusive";
import Depoimentos from "../Depoimentos";
import SidebarCart from "../SidebarCart";

const HomePage = ({
  products,
  showSidebarCart,
  setShowSidebarCart,
  addProductToCart,
  selectedProducts,
  cartTotal,
  removeProductFromCart,
}) => {
  return (
    <>
      <Header />
      <SidebarCart
        setShowSidebarCart={setShowSidebarCart}
        showSidebarCart={showSidebarCart}
        selectedProducts={selectedProducts}
        cartTotal={cartTotal}
        removeProductFromCart={removeProductFromCart}
      />

      <div className="page_inner_content">
        <div className="section_title">
          <h3>Produtos Selecionados</h3>
          <div className="underline"></div>
        </div>

        <div className="main_content">
          <ProductsList
            products={products}
            addProductToCart={addProductToCart}
          />
        </div>
      </div>

      <Exclusive />
      <Depoimentos />
    </>
  );
};

export default HomePage;
