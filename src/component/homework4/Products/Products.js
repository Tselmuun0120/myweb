import React from "react";
import "../Products/Products.scss";

export default (function Products() {
  return (
    <section className="insta">
        <div className="container">
          <div className="gobi">
            <h2>@GobiOfficial</h2>
            <span>Follow Us</span>
          </div>
          <div className="grids">
            <div className="one">
              <img className="a" src={require("../../../assets/hw4/instagram/insta1.png")} />
            </div>
            <div className="two">
              <img className="a" src={require("../../../assets/hw4/instagram/insta2.png")} />
            </div>
            <div className="three">
              <img className="a" src={require("../../../assets/hw4/instagram/insta3.png")} />
            </div>
            <div className="four">
              <img className="a" src={require("../../../assets/hw4/instagram/insta4.png")} />
            </div>
            <div className="five">
              <img className="a" src={require("../../../assets/hw4/instagram/insta5.png")} />
            </div>
            <div className="six">
              <img className="a" src={require("../../../assets/hw4/instagram/insta6.png")} />
            </div>
            <div className="seven">
              <img
                className="back"
                src={require("../../../assets/hw4/instagram/insta7.png")}
              />
            </div>
            <div className="eight">
              <img className="a" src={require("../../../assets/hw4/instagram/insta8.png")} />
            </div>
            <div className="nine">
              <img className="a" src={require("../../../assets/hw4/instagram/insta9.png")} />
            </div>
          </div>
        </div>
      </section>
    )

});