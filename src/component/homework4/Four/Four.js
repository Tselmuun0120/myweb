import React from "react";
import "../Four/Four.scss";

export default (function Four() {
  return (
    <section className="four">
      <div className="container">
        <div className="grids">
          <div className="img1">
            <img
              className="img1"
              src={require("../../../assets/hw4/collection3/s1.png")}
            />
            <div className="link">
              <a>Lorem ipsum</a>
            </div>
          </div>
          <div className="img2">
            <img
              className="img2"
              src={require("../../../assets/hw4/collection3/s2.png")}
            />
            <div className="link">
              <a>Lorem ipsum</a>
            </div>
          </div>
          <div className="img3">
            <img
              className="img3"
              src={require("../../../assets/hw4/collection3/s3.png")}
            />
            <div className="link">
              <a>Lorem ipsum</a>
            </div>
          </div>
          <div className="img4">
            <img
              className="img4"
              src={require("../../../assets/hw4/collection3/s4.png")}
            />
            <div className="link">
              <a>Lorem ipsum</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
