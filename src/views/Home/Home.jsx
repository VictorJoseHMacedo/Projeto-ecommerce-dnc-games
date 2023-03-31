import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import Footer from "../../components/Footer/Footer";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import Banner from "../../components/Banner/Banner";


const Home = ({ data }) => {
  console.log(data);
  return (
    <div className="home">
      <HeaderMenu />
      <Banner />
      <div className="home__products">
        {data.map((product) => (
          <ProductsCard key={product.id} data={product} />
        ))}
      </div>
      <Footer />
</div>
  );  
};

export default Home;