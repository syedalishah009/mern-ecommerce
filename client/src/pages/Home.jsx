import React from "react";
import Categories from "../components/categories/Categories";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Products from "../components/products/Products";



const Home = () => {
 
  return (
    <div>
      <Header/>
      <Categories/>
      <Products/>
      <Footer/>
    </div>
  );
};

export default Home;
