import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App2.scss";

function App2() {
  return (
    <div className="App2">
      <section className="container">
        <div className="text">
          <h1>FREE CASHMERE GIFTS</h1>
          <p>RECEIVE A GIFT WITH YOUR PURCHASE</p>
        </div>

        <div className="box"></div>
      </section>

      <section className="container1">
          <div className="text2">
            <p>
              Quis ut amet ut minim aliqua qui proident. Exercitation esse ipsum
              officia magna fugiat esse elit sint Lorem mollit nostrud nisi
              minim. Quis tempor labore aliquip ea veniam.
            </p>
          </div>
        

        <div className="content">
          <h2>ORDER OVER $89</h2>

          <div className="box1"></div>
        </div>
      </section>

      <section className="container2">
        <div className="items">
          <h1>ORDER OVER $89</h1>
          <div className="grid">
            <div className="gridbox"></div>
            <div className="gridbox"></div>
            <div className="gridbox"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App2;