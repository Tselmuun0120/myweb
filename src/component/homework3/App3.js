import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App3.scss";
import "swiper/swiper.scss";

export const Navigation = [
  { menu: "NEW" },
  { menu: "WOMEN" },
  { menu: "MEN" },
  { menu: "HOME" },
  { menu: "ACCESSORIES" },
  { menu: "OUR PRODUCTION" },
  { menu: "SALE" },
];
const App3 = () => {
  return (
    <div className="Big">
      <header>
        <div className="headertext">
          <h1>FREE SHIPPING in EU on orders over $150</h1>
        </div>
      </header>

      <section className="mainpage">
        <div className="container">
          <div className="background">
            <img
              className="mainpic"
              src={require("../../assets/mainpage/mainpic.png")}
            />
          </div>
          <div className="submenu">
            <div className="grids">
              <div className="search"></div>
              <div className="logogobi">
                <img
                  className="logo"
                  src={require("../../assets/logo/logo.png")}
                />
              </div>
              <div className="sign"></div>
            </div>
            <div className="menus">
              {Navigation.map((list, index) => {
                return (
                  <div className="cmenu">
                    <a href="#">{list.menu}</a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="maintext">
        <div className="textbox">
          <div className="free">
            <h1>Free Delivery</h1>
            <p>
              Time and time again I won the applause of the bloodthirsty
              multitude, and toward the end there were cries.
            </p>
          </div>
          <div className="free">
            <h1>30-Day Returns</h1>
            <p>
              Time and time again I won the applause of the bloodthirsty
              multitude, and toward the end there were cries.
            </p>
          </div>
          <div className="free">
            <h1>International Warranty</h1>
            <p>
              Time and time again I won the applause of the bloodthirsty
              multitude, and toward the end there were cries.
            </p>
          </div>
        </div>
      </section>
      <section className="sweaters">
        <div className="tsamtsnuud">
          <div className="tsamts">
            <img
              className="pics"
              src={require("../../assets/sweater/sweater1.png")}
            />
          </div>
          <div className="tsamts">
            <img
              className="pics"
              src={require("../../assets/sweater/sweater2.png")}
            />
          </div>
          <div className="tsamts">
            <img
              className="pics"
              src={require("../../assets/sweater/sweater3.png")}
            />
          </div>
        </div>
        <div className="tsamtsas">
          <div className="tsamts2">
            <img
              className="pics"
              src={require("../../assets/sweater/sweater4.png")}
            />
          </div>
          <div className="tsamts2">
            <img
              className="pics"
              src={require("../../assets/sweater/sweater5.png")}
            />
          </div>
        </div>
      </section>
      <section className="dresses"></section>
      <section className="instagram">
        <div className="container">
          <div className="gobi">
            <h1>@GOBICASHMERE_MN</h1>
          </div>
          <div className="pics">
            <div className="grid1">
              <div className="img1">
                <img
                  className="zurag"
                  src={require("../../assets/cashmere/cashmere2.png")}
                />
              </div>
              <div className="img2">
                <img
                  className="zurag"
                  src={require("../../assets/cashmere/cashmere1.png")}
                />
              </div>
            </div>
            <div className="grid2">
              <img
                className="zurag"
                src={require("../../assets/cashmere/cashmere3.png")}
              />
              <img
                className="zurag"
                src={require("../../assets/cashmere/cashmere3.png")}
              />
              <img
                className="zurag"
                src={require("../../assets/cashmere/cashmere3.png")}
              />
              <img
                className="zurag"
                src={require("../../assets/cashmere/cashmere3.png")}
              />

              <img
                className="barilga"
                src={require("../../assets/cashmere/cashmere2.png")}
              />
            </div>
            <div className="grid3">
              <div className="img2">
                <img
                  className="zurag"
                  src={require("../../assets/cashmere/cashmere1.png")}
                />
              </div>
              <div className="img1">
                <img
                  className="zurag"
                  src={require("../../assets/cashmere/cashmere2.png")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App3;
