import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App3.scss";
import "swiper/swiper.scss";
// import Swiper, { Navigation } from "swiper";
import Swiper from "react-id-swiper";
import { Maindata } from "./data";

const App3 = () => {
  const params = {
    slidesPerView: 4,
    spaceBetween: 20,
  };

  const param = {
    slidesPerView: 4,
    spaceBetween: 20,
  };
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
              {Maindata.Navigation.data.map((list, index) => {
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
      <section className="women">
        <div className="container">
          <div className="text">
            <h1>Dresses</h1>
          </div>
          <Swiper {...params}>
            {Maindata.women.data.map((list, index) => {
              return (
                <div className="images">
                  <img src={require(`../../assets/dress/${list.image}`)} />
                  <div className="descr">
                    <h1>{list.name}</h1>
                    <h3>{list.price}</h3>
                    <span>{list.color}</span>
                  </div>
                </div>
              );
            })}
          </Swiper>
        </div>
      </section>
      <section className="men">
        <div className="container">
          <div className="text">
            <h1>Printed Scarves</h1>
          </div>

          <Swiper {...param}>
            {Maindata.men.data.map((list, index) => {
              return (
                <div className="images">
                  <img src={require(`../../assets/scarf/${list.image}`)} />
                  <div className="descr">
                    <h1>{list.name}</h1>
                    <h3>{list.price}</h3>
                    <span>{list.color}</span>
                  </div>
                </div>
              );
            })}
          </Swiper>
        </div>
      </section>
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
      <section className="footer">
        <div className="container">
          <div className="grids">
            <div className="grid1">
              <h1>{Maindata.about.name}</h1>
              <ul>
                {Maindata.about.data.map((list, index) => {
                  return (
                    <li>
                      <a href={list.link}>{list.item}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="grid2">
              <h1>{Maindata.help.name}</h1>
              <ul>
                {Maindata.help.data.map((list, index) => {
                  return (
                    <li>
                      <a href={list.link}>{list.item}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="grid3">
              <h1>{Maindata.social.name}</h1>
              <ul>
                {Maindata.social.data.map((list, index) => {
                  return (
                    <li>
                      <a href={list.link}>
                        <i className={list.icon}></i>
                        {list.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="grid4">
              <div className="subs">
                <h1>Join our list</h1>
                <div className="para">
                  <p>
                    Subscribe to get special offers, free giveaways, and
                    once-in-a-lifetime deals.
                  </p>
                </div>

                <form>
                  <div class="sub">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="form-control"
                    />
                    <button className="btn btn-primary">
                      SUBSCRIBE
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="12"
                        viewBox="0 0 6 9"
                        fill="none"
                      >
                        <path
                          d="M0.602539 0.490723L4.66504 4.55322L0.602539 8.61572"
                          stroke="black"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App3;
