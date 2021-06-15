import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

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
      <section id="about" class="section">
        <div class="title">
          <h2>
            about <span>us</span>
          </h2>
        </div>
      </section>
      <section id="services" class="section">
        <div class="title">
          <h2>
            our <span>services</span>
          </h2>
        </div>
      </section>
      <section id="tours" class="section">
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
