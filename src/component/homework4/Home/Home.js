import React from "react";
import "../Home/Home.scss";

export default (function Home() {
  return (
    <section className="mainpage">
      <div className="container">
        <div className="mainpic">
          <img
            className="back-img"
            src={require("../../../assets/hw4/mainpage/mainpage.png")}
          />
          <div className="shop">
            <h1>LOREM IPSUM</h1>
          </div>
        </div>
      </div>
      <div className="shipping">
        <div className="container">
          <div className="grids">
            <div className="grid">
              <h2>
                Free <strong>Shipping on Australia</strong>
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </div>
            <div className="grid">
              <h2>
                14 <strong>days Free Return</strong>
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </div>
            <div className="grid">
              <h2>
                Delivery <strong>in Australia</strong>
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
