import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Collection2/Collection2.scss";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { getProductsFromCollectionHandleInit } from "../query";
import { useLazyQuery } from "@apollo/client";


export default (function SecondProductList() {
  const [
    getProductsFromCollection,
    { data: getProductByHandleData, error: getProductByHandleError },
  ] = useLazyQuery(getProductsFromCollectionHandleInit);

  const [dataCollection, setDataCollection] = useState();

  useEffect(() => {
    getProductsFromCollection({
      variables: {
        currencyCode: "CHF",
        handle: "basic",
      },
    });
  }, []);

  useEffect(() => {
    if (getProductByHandleError) {
      console.log(getProductByHandleError, "--");
    }
    if (getProductByHandleData && getProductByHandleData.collectionByHandle) {
      let tempProductEdges = JSON.parse(
        JSON.stringify(getProductByHandleData.collectionByHandle.products.edges)
      );

      if (tempProductEdges && tempProductEdges.length > 0) {
        setDataCollection(handleRecievedProductData(tempProductEdges));
      }
    }
  }, [getProductByHandleData, getProductByHandleError]);

  function handleRecievedProductData(productEdges) {
    let itemList = [];

    for (let singleProductEdge of productEdges) {
      let result = {};

      let product = singleProductEdge.node;

      console.log(product);

      // setting unique tag
      for (let singleTag of product.tags) {
        if (singleTag.includes("uniqueTag-")) {
          result.uniqueTag = singleTag;
          break;
        }
      }

      result.handle = "/products/" + product.handle;

      result.colors = [];

      result.title = product.title;

      // color parser
      for (let singleTag of product.tags) {
        if (singleTag.includes("handle_")) {
          let color = singleTag.replace("handle_", "");
          let spliceIndex = color.indexOf("+");

          color = color.slice(0, spliceIndex);
          let handle = singleTag.replace("handle_" + color + "+", "");
          handle = "/products/" + handle;
          result.colors.push({
            color: color,
            handle: handle,
          });
        }
      }

      // setting selected color
      for (let option of product.options) {
        if (option.name === "Color") {
          result.selectedColor = option.values[0];
        }
      }

      // setting price
      if (
        product.variants &&
        product.variants.edges &&
        product.variants.edges.length > 0 &&
        product.variants.edges[0].node.presentmentPrices.edges &&
        product.variants.edges[0].node.presentmentPrices.edges.length > 0
      ) {
        result.price =
          product.variants.edges[0].node.presentmentPrices.edges[0].node.price.amount;
      }

      //setting sizes

      result.size = product.options[0].values;

      // SETTING IMAGE ALT TEXT
      result.imageAltText = product.title;

      // SEETING IMAGES

      result.images =
        `${product.images.edges[0].node.originalSrc.replace(
          ".jpg",
          "_260x.jpg"
        )} 260w,` +
        `${product.images.edges[0].node.originalSrc.replace(
          ".jpg",
          "_390x.jpg"
        )} 390w,` +
        `${product.images.edges[0].node.originalSrc.replace(
          ".jpg",
          "_468x.jpg"
        )} 468w,` +
        `${product.images.edges[0].node.originalSrc.replace(
          ".jpg",
          "_560x.jpg"
        )} 560w,` +
        `${product.images.edges[0].node.originalSrc.replace(
          ".jpg",
          "_640x.jpg"
        )} 640w,` +
        `${product.images.edges[0].node.originalSrc.replace(
          ".jpg",
          "_750x.jpg"
        )} 750w,` +
        `${product.images.edges[0].node.originalSrc.replace(
          ".jpg",
          "_828x.jpg"
        )} 828w,` +
        `${product.images.edges[0].node.originalSrc.replace(
          ".jpg",
          "_1080x.jpg"
        )} 1080w,` +
        `${product.images.edges[0].node.originalSrc.replace(
          ".jpg",
          "_1280x.jpg"
        )} 1280w,`;

      itemList.push(result);
    }

    console.log(itemList);
    return itemList;
  }
  return (
    <div className="product-list-section2">
      <div className="grid-col">
        <div className="left-part">
          <div className="swiper-box2">
            <Swiper
              breakpoints={{
                // when window width is >= 640px
                320: {
                  width: 320,
                  slidesPerView: 1,
                  spaceBetween: 4,
                },
                // when window width is >= 768px
                750: {
                  width: 750,
                  slidesPerView: 4,
                  spaceBetween: 4,
                },
              }}
              navigation
              pagination={{ clickable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {dataCollection &&
                dataCollection.map((thing, index) => {
                  console.log(thing, "val ---");
                  return (
                    <SwiperSlide key={index}>
                      <div className="all">
                        <div className="img-swip">
                          <img
                            srcSet={thing.images}
                            alt={thing.imageAltText}
                          ></img>
                          <div className="wishlist-icon">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 16 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.99998 14.2348C7.7722 14.2348 7.5526 14.1523 7.38146 14.0024C6.73509 13.4372 6.11193 12.9061 5.56212 12.4376L5.55932 12.4352C3.94738 11.0615 2.55542 9.87523 1.58691 8.70665C0.504272 7.40025 0 6.16161 0 4.80846C0 3.49377 0.450805 2.28088 1.26928 1.39306C2.09753 0.49475 3.234 0 4.46972 0C5.3933 0 6.23912 0.291992 6.98363 0.867796C7.35936 1.15845 7.69994 1.51416 7.99998 1.92907C8.30015 1.51416 8.64061 1.15845 9.01646 0.867796C9.76097 0.291992 10.6068 0 11.5304 0C12.766 0 13.9026 0.49475 14.7308 1.39306C15.5493 2.28088 16 3.49377 16 4.80846C16 6.16161 15.4958 7.40025 14.4132 8.70653C13.4447 9.87523 12.0528 11.0614 10.4411 12.4349C9.89036 12.9042 9.26622 13.4361 8.61839 14.0027C8.44737 14.1523 8.22765 14.2348 7.99998 14.2348ZM4.46972 0.937254C3.49889 0.937254 2.60705 1.3247 1.95825 2.02832C1.2998 2.74255 0.937132 3.72985 0.937132 4.80846C0.937132 5.94652 1.3601 6.96434 2.30847 8.10863C3.22509 9.2147 4.58849 10.3766 6.1671 11.7219L6.17003 11.7243C6.72191 12.1947 7.34752 12.7279 7.99864 13.2972C8.65367 12.7268 9.28026 12.1927 9.83323 11.7217C11.4117 10.3763 12.775 9.2147 13.6916 8.10863C14.6399 6.96434 15.0628 5.94652 15.0628 4.80846C15.0628 3.72985 14.7002 2.74255 14.0417 2.02832C13.393 1.3247 12.5011 0.937254 11.5304 0.937254C10.8192 0.937254 10.1662 1.16333 9.5897 1.60913C9.07591 2.00659 8.718 2.50903 8.50816 2.86059C8.40025 3.04138 8.21031 3.14929 7.99998 3.14929C7.78966 3.14929 7.59972 3.04138 7.49181 2.86059C7.28209 2.50903 6.92418 2.00659 6.41027 1.60913C5.83373 1.16333 5.18078 0.937254 4.46972 0.937254Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="description">
                          <div className="first">
                            <h1>{thing.title}</h1>
                            <h4>{thing.price}</h4>

                            {thing.colors.length > 0 && (
                              <p> {thing.colors.length} colors</p>
                            )}
                          </div>
                          <div className="overlay">
                            <div className="col1">
                              <h5>Available Colors</h5>
                              <ul>
                                {thing.colors.map((val, index) => {
                                  return (
                                    <a href={val.handle}>
                                      <li>
                                        {val.color}
                                      </li>
                                    </a>
                                  );
                                })}
                              </ul>
                            </div>
                            <span>Available Sizes</span>
                            <ul>
                              <li>{thing.size}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
        <div className="right-part">
          <div className="img-box">
            <img
              src={require("../../../assets/hw4/collection2/img5.png")}
              alt="gobi"
            />
            <div className="text">
              <a>Lorem ipsum</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
