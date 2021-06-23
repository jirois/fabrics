import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import LoadingBox from "../components/loading/LoadingBox";
import MessageBox from "../components/messagebox/MessageBox";
import Product from "../components/product/Product";
import Hero from "../components/hero/Hero";
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
      <Hero />
      <section id="fabric" className=" fabrics section">
        <div class="title">
          <h2>fabrics</h2>
        </div>
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
      <section id="services" className=" services section">
        <div class="title">
          <h2>services</h2>
        </div>
      </section>
      <section id="experience" className="experiences section">
        <div class="title">
          <h2>Customers Experiences</h2>
        </div>
      </section>
      <section id="about" className=" about section">
        <div class="title">
          <h2>about us</h2>
        </div>
      </section>
    </>
  );
}

export default HomeScreen;
