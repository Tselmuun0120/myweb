import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App4.scss";
import "swiper/swiper.scss";
import Swiper, { Navigation } from "swiper";
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

// function App4() {

//   return (
//     <div className="Main">
//       <section className="mainpage">
//         <div className="container">
//           <div className="background">
//             <img
//               className="mainpic"
//               src={require("../../assets/hw4/mainpage/mainpage.png")} />
//           </div>
//           <header>
//             <div className="submenu">
//               <div className="grids">
//                 <div className="search">
//                   <div className="location">
//                     <div className="dropdown">
//                       <button class="dropbtn">EN</button>
//                       <div class="dropdown-content">
//                         <a href="#">English</a>
//                         <a href="#">Russian</a>
//                         <a href="#">French</a>
//                       </div>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="9"
//                         height="6"
//                         viewBox="0 0 9 6"
//                         fill="none"
//                       >
//                         <path
//                           d="M8.18164 0.650391L4.68164 4.65039L8.18164 0.650391ZM1.18164 0.650391L4.68164 4.65039L1.18164 0.650391Z"
//                           stroke="white"
//                           stroke-linejoin="round" />
//                       </svg>
//                     </div>
//                   </div>
//                   <div className="searchbar">
//                     <div className="bar">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="20"
//                         height="20"
//                         viewBox="0 0 20 20"
//                         fill="none"
//                       >
//                         <path
//                           d="M19.2899 19.4336L13.8091 13.9529"
//                           stroke="white" />
//                         <circle
//                           cx="8.26207"
//                           cy="8.27281"
//                           r="7.47203"
//                           stroke="white" />
//                       </svg>
//                     </div>
//                     <div className="haih">
//                       <h1>Search</h1>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="logogobi">
//                   <img
//                     className="logo"
//                     src={require("../../assets/logo/logo.png")} />
//                 </div>
//                 <div className="sign">
//                   <div className="signin">
//                     <a href="#">Sign in</a>
//                   </div>
//                   <div className="wish">
//                     <a href="#">Wishlist</a>
//                   </div>
//                   <div className="box">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="15"
//                       height="20"
//                       viewBox="0 0 15 20"
//                       fill="none"
//                     >
//                       <path
//                         d="M0.592498 16.4279L1.69262 4.26538H13.4474C13.7462 7.69478 14.3805 14.9285 14.5272 16.4279C14.6739 17.9273 13.5289 18.7368 12.9381 18.9541H7.51898H2.22231C0.771777 18.6444 0.531379 17.1409 0.592498 16.4279Z"
//                         stroke="white"
//                         stroke-width="0.8" />
//                       <path
//                         d="M4.30273 6.38362V3.28697C4.30273 -0.450965 10.617 -0.613825 10.822 3.28697V6.38362"
//                         stroke="white"
//                         stroke-width="0.8" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </header>
//         </div>
//       </section>
//       <section className="maintext">
//         <div className="textbox">
//           <div className="free">
//             <h1>Free Shipping on Australia</h1>
//             <p>
//                             Lorem ipsum dolor sit amet, consectetur elit.
//             </p>
//           </div>
//           <div className="free">
//             <h1>14 days Free Return</h1>
//             <p>
//                   Lorem ipsum dolor sit amet, consectetur elit.
//             </p>
//           </div>
//           <div className="free">
//             <h1>Delivery in Australia</h1>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur elit.
//             </p>
//           </div>
//         </div>
//       </section>
//       <section className="imgbox">
//         <div className="container">
//           <div className="grids">
//             <div className="grid1">
//               <img src={require("../../assets/hw4/collection3/s1.png")} />
//               <div className="txt">
//                 <a> Lorem ipsum</a>
//               </div>
//             </div>
//             <div className="grid2">
//               <img src={require("../../assets/hw4/collection3/s2.png")} />
//               <div className="txt">
//                 <a> Lorem ipsum</a>
//               </div>
//             </div>
//             <div className="grid3">
//               <img src={require("../../assets/hw4/collection3/s3.png")} />
//               <div className="txt">
//                 <a> Lorem ipsum</a>
//               </div>
//             </div>
//             <div className="grid4">
//               <img src={require("../../assets/hw4/collection3/s4.png")} />
//               <div className="txt">
//                 <a> Lorem ipsum</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="insta">
//         <div className="container">
//           <div className="text">
//             <h1>@GobiOfficial</h1>
//             <p>Follow Us</p>
//           </div>
//           <div className="grid">
//             <div className="img1">
//               <img
//                 className="zurag"
//                 src={require("../../assets/hw4/instagram/insta1.png")} />
//             </div>
//             <div className="img2">
//               <img
//                 className="zurag"
//                 src={require("../../assets/hw4/instagram/insta2.png")} />
//             </div>

//             <div className="img3">
//               <img
//                 className="zurag"
//                 src={require("../../assets/hw4/instagram/insta3.png")} />
//             </div>
//             <div className="img4">
//               <img
//                 className="zurag"
//                 src={require("../../assets/hw4/instagram/insta4.png")} />
//             </div>
//             <div className="img5">
//               <img
//                 className="zurag"
//                 src={require("../../assets/hw4/instagram/insta5.png")} />
//             </div>
//             <div className="img6">
//               <img
//                 className="zurag"
//                 src={require("../../assets/hw4/instagram/insta6.png")} />
//             </div>
//             <div className="img7">
//               <img
//                 className="zurag"
//                 src={require("../../assets/hw4/instagram/insta7.png")} />
//             </div>

//             <div className="img8">
//               <img
//                 className="zurag"
//                 src={require("../../assets/hw4/instagram/insta8.png")} />
//             </div>
//             <div className="img9">
//               <img
//                 className="zurag"
//                 src={require("../../assets/hw4/instagram/insta9.png")} />
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="footer">
//         <div className="container">
//           <div className="bottom">
//             {Maindata.Bottom.data.map((list, index) => {
//               return (
//                 <div className="cmenu">
//                   <ul>
//                     <li>
//                       <a href="#">{list.item}</a>
//                     </li>
//                   </ul>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
