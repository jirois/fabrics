import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import LoadingBox from "../components/loading/LoadingBox";
import MessageBox from "../components/messagebox/MessageBox";
import Product from "../components/product/Product";

function HomeScreen(props) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  console.log(products);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <section id="about" className="section">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="success" icon="check">
            {error}
          </MessageBox>
        ) : (
          <Product products={products} />
        )}
      </section>
      <section id="services" className="section">
        <div class="title">
          <h2>
            our <span>services</span>
          </h2>
        </div>
      </section>
      <section id="tours" className="section">
        <div class="title">
          <h2>
            featured <span>tours</span>
          </h2>
        </div>
      </section>
    </>
  );
}

export default HomeScreen;
