import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App3.scss";
import "swiper/swiper.scss";
// import Swiper, { Navigation } from "swiper";
import Swiper from "react-id-swiper";
import { Maindata } from "./data";

const App3 = () => {
  const [isFinish, setIsFinish] = useState(false);
  const [swiperParam, setSwiperParam] = useState();
  const getWidth = () => window.innerWidth;
  const getSlidesCount = () => {
    const rawWidth = getWidth();
    if (rawWidth < 960) {
      return 1;
    } else {
      return 4;
    }
  };
  useEffect(() => {
    const resizeListener = () => {
      setIsFinish(false);
      setSwiperParam({
        slidesPerView: getSlidesCount(),
        spaceBetween: 20,
        rebuildOnUpdate: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
      });
    };
    window.addEventListener("resize", resizeListener);
  }, []);

  useEffect(() => {
    if (swiperParam) {
      setIsFinish(true);
    }
  }, [swiperParam]);
  return (
    <div className="Big">
      <section className="mainpage">
        <div className="headertext">
          <h1>FREE SHIPPING in EU on orders over $150</h1>
        </div>
        <div className="container">
          <div className="background">
            <img
              className="mainpic"
              src={require("../../assets/mainpage/mainpic.png")}
            />
          </div>
          <header>
            <div className="submenu">
              <div className="grids">
                <div className="search">
                  <div className="location">
                    <div className="dropdown">
                      <button class="dropbtn">EN</button>
                      <div class="dropdown-content">
                        <a href="#">English</a>
                        <a href="#">Russian</a>
                        <a href="#">French</a>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="6"
                        viewBox="0 0 9 6"
                        fill="none"
                      >
                        <path
                          d="M8.18164 0.650391L4.68164 4.65039L8.18164 0.650391ZM1.18164 0.650391L4.68164 4.65039L1.18164 0.650391Z"
                          stroke="white"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="searchbar">
                    <div className="bar">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M19.2899 19.4336L13.8091 13.9529"
                          stroke="white"
                        />
                        <circle
                          cx="8.26207"
                          cy="8.27281"
                          r="7.47203"
                          stroke="white"
                        />
                      </svg>
                    </div>
                    <div className="haih">
                      <h1>Search</h1>
                    </div>
                  </div>
                </div>
                <div className="logogobi">
                  <img
                    className="logo"
                    src={require("../../assets/logo/logo.png")}
                  />
                </div>
                <div className="sign">
                  <div className="signin">
                    <a href="#">Sign in</a>
                  </div>
                  <div className="wish">
                    <a href="#">Wishlist</a>
                  </div>
                  <div className="box">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="20"
                      viewBox="0 0 15 20"
                      fill="none"
                    >
                      <path
                        d="M0.592498 16.4279L1.69262 4.26538H13.4474C13.7462 7.69478 14.3805 14.9285 14.5272 16.4279C14.6739 17.9273 13.5289 18.7368 12.9381 18.9541H7.51898H2.22231C0.771777 18.6444 0.531379 17.1409 0.592498 16.4279Z"
                        stroke="white"
                        stroke-width="0.8"
                      />
                      <path
                        d="M4.30273 6.38362V3.28697C4.30273 -0.450965 10.617 -0.613825 10.822 3.28697V6.38362"
                        stroke="white"
                        stroke-width="0.8"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="navigation">
                {Maindata.Navigation.data.map((list, index) => {
                  return (
                    <div className="cmenu">
                      <ul>
                        <li>
                          <a href="#">{list.menu}</a>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </header>
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
          <div className="tsamts1">
            <img
              className="pics"
              src={require("../../assets/sweater/sweater1.png")}
            />
            <div className="link">
              <a href="#">SWEATER</a>
            </div>
          </div>
          <div className="tsamts2">
            <img
              className="pics"
              src={require("../../assets/sweater/sweater2.png")}
            />
            <div className="link">
              <a href="#">SWEATER</a>
            </div>
          </div>
          <div className="tsamts3">
            <img
              className="pics"
              src={require("../../assets/sweater/sweater3.png")}
            />
            <div className="link">
              <a href="#">SWEATER</a>
            </div>
          </div>

          <div className="tsamts4">
            <img
              className="pics"
              src={require("../../assets/sweater/sweater4.png")}
            />
            <div className="link">
              <a href="#">SWEATER</a>
            </div>
          </div>
          <div className="tsamts5">
            <img
              className="pics"
              src={require("../../assets/sweater/sweater5.png")}
            />
            <div className="link">
              <a href="#">SWEATER</a>
            </div>
          </div>
        </div>
      </section>
      <section className="women">
        <div className="container">
          <div className="text">
            <h1>Dresses</h1>
          </div>
          {isFinish ? (
            <Swiper {...swiperParam}>
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
          ) : null}
        </div>
      </section>
      <section className="men">
        <div className="container">
          <div className="text">
            <h1>Printed Scarves</h1>
          </div>
          {isFinish ? (
            <Swiper {...swiperParam}>
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
          ) : null}
        </div>
      </section>
      <section className="instagram">
        <div className="container">
          <div className="gobi">
            <h1>@GOBICASHMERE_MN</h1>
          </div>

          <div className="grid">
            <div className="img1">
              <img
                className="zurag"
                src={require("../../assets/cashmere/img1.png")}
              />
            </div>
            <div className="img2">
              <img
                className="zurag"
                src={require("../../assets/cashmere/img3.png")}
              />
            </div>

            <div className="img3">
              <img
                className="zurag"
                src={require("../../assets/cashmere/img4.png")}
              />
            </div>
            <div className="img4">
              <img
                className="zurag"
                src={require("../../assets/cashmere/img8.png")}
              />
            </div>
            <div className="img5">
              <img
                className="zurag"
                src={require("../../assets/cashmere/img2.png")}
              />
            </div>
            <div className="img6">
              <img
                className="zurag"
                src={require("../../assets/cashmere/img5.png")}
              />
            </div>
            <div className="img7">
              <img
                className="zurag"
                src={require("../../assets/cashmere/img6.png")}
              />
            </div>

            <div className="img8">
              <img
                className="zurag"
                src={require("../../assets/cashmere/img9.png")}
              />
            </div>
            <div className="img9">
              <img
                className="zurag"
                src={require("../../assets/cashmere/img7.png")}
              />
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
          <hr></hr>
          <div className="inner">
            <div className="card">
              <div className="payment">
                <ul>
                  {Maindata.paymentIcons.data.map((list, index) => {
                    return (
                      <li>
                        <a href="#">
                          <div
                            dangerouslySetInnerHTML={{ __html: list.icon }}
                          ></div>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="copyright">
              <h1>All content Copyright © 2020 GOBI Cashmere</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App3;
