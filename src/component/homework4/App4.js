import React, { useState, useEffect } from "react";
import "swiper/swiper.scss";
import Products from "./Products/Products";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Four from "./Four/Four";
import Collection from "./Collection/Collection";
import Footer from "./Footer/Footer";
import Collection2 from "./Collection2/Collection2";

const App4 = (props) => {
  return (
    <div className="All">
      <section>
        <Header />
      </section>
      <section>
        <Home />
      </section>
      <section>
        <Collection />
      </section>
      <section>
        <Collection2 />
      </section>
      <section>
        <Four />
      </section>
      <section>
        <Products />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default App4;
