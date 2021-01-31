import React from "react";
import { Maindata } from "../data4";
import "../Header/Header.scss";

export default (function Header() {
  return (
    <div className="headerMenu">
      <div className="container">
        <div className="navi">
          <div className="location">
            <div className="country">
              <div className="dropdown>">
                <button className="dropbtn">Australia</button>
              </div>
            </div>
          </div>
          <div className="logo-navi">
            <img
              className="logo"
              src={require("../../../assets/logo/logo.png")}
            />
          </div>
          <div className="icon">
            <div className="header_search">
              <form>
                <div className="sub_search">
                  <input
                    type="search"
                    placeholder="SEARCH"
                    className="search-control"
                  ></input>
                  <button className="btn btn-primary">
                    <div className="search-svg">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.63476 1.63481C2.68898 0.580584 4.09062 0 5.58149 0C7.07236 0 8.474 0.580584 9.5282 1.63481C10.5824 2.689 11.163 4.09065 11.163 5.58149C11.163 6.94454 10.6774 8.23281 9.78856 9.24938L12.8883 12.3492C13.0372 12.4981 13.0372 12.7395 12.8883 12.8884C12.8139 12.9628 12.7163 13 12.6188 13C12.5212 13 12.4236 12.9628 12.3492 12.8884L9.24938 9.78858C8.23282 10.6774 6.94454 11.163 5.58149 11.163C4.0906 11.163 2.689 10.5824 1.63478 9.52822C0.580584 8.47403 0 7.07238 0 5.58152C0 4.09065 0.580559 2.689 1.63476 1.63481ZM2.17395 8.98905C4.05289 10.868 7.11006 10.868 8.989 8.98905C10.8679 7.11014 10.8679 4.05292 8.989 2.174C8.04944 1.23445 6.81566 0.764819 5.58147 0.764819C4.34758 0.764819 3.11328 1.23467 2.17393 2.174C0.295065 4.05289 0.295065 7.11011 2.17395 8.98905Z"
                          fill="black"
                          fillOpacity="0.56"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </form>
            </div>
            <div className="account-svg">
              <a href="#">
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.89417 7.70728C8.00465 7.70728 8.96612 7.32752 9.75194 6.57825C10.5375 5.8291 10.9359 4.91248 10.9359 3.85352C10.9359 2.79492 10.5376 1.87817 9.75181 1.12878C8.96599 0.379761 8.00453 0 6.89417 0C5.78355 0 4.82221 0.379761 4.03652 1.12891C3.25083 1.87805 2.85242 2.7948 2.85242 3.85352C2.85242 4.91248 3.25083 5.82922 4.03652 6.57837C4.82247 7.32739 5.78393 7.70728 6.89417 7.70728ZM4.73195 1.79187C5.33482 1.21704 6.04203 0.937622 6.89417 0.937622C7.74617 0.937622 8.45351 1.21704 9.05651 1.79187C9.65938 2.36682 9.95255 3.04126 9.95255 3.85352C9.95255 4.66602 9.65938 5.34033 9.05651 5.91528C8.45351 6.49024 7.74617 6.76965 6.89417 6.76965C6.04229 6.76965 5.33508 6.49011 4.73195 5.91528C4.12895 5.34045 3.83578 4.66602 3.83578 3.85352C3.83578 3.04126 4.12895 2.36682 4.73195 1.79187Z"
                    fill="black"
                    fillOpacity="0.87"
                  />
                  <path
                    d="M13.9661 12.3031C13.9434 11.9913 13.8976 11.6512 13.8301 11.2921C13.762 10.9303 13.6743 10.5883 13.5693 10.2756C13.4608 9.95251 13.3134 9.63342 13.131 9.32764C12.9419 9.01025 12.7196 8.73389 12.4702 8.50647C12.2094 8.26855 11.8902 8.07727 11.5209 7.93774C11.153 7.79895 10.7452 7.72864 10.3091 7.72864C10.1378 7.72864 9.97209 7.79565 9.65216 7.99426C9.45526 8.1167 9.22494 8.2583 8.96787 8.41492C8.74805 8.54846 8.45026 8.67358 8.08245 8.78687C7.72359 8.89758 7.35924 8.95374 6.99949 8.95374C6.63999 8.95374 6.27564 8.89758 5.91653 8.78687C5.5491 8.67371 5.25118 8.54858 5.03175 8.41504C4.77711 8.25989 4.54666 8.11829 4.34682 7.99414C4.02714 7.79553 3.86148 7.72852 3.69018 7.72852C3.25387 7.72852 2.84624 7.79895 2.47843 7.93787C2.10946 8.07715 1.79004 8.26843 1.529 8.50659C1.27961 8.73413 1.05736 9.01038 0.868391 9.32764C0.686212 9.63342 0.538727 9.95239 0.430163 10.2758C0.32531 10.5884 0.237614 10.9303 0.169505 11.2921C0.101908 11.6508 0.0562028 11.991 0.0335425 12.3035C0.0112662 12.609 0 12.927 0 13.2483C0 14.0835 0.278453 14.7596 0.827551 15.2583C1.36986 15.7504 2.08731 15.9999 2.96006 15.9999H11.0399C11.9124 15.9999 12.6299 15.7504 13.1723 15.2583C13.7215 14.76 14 14.0836 14 13.2482C13.9999 12.9258 13.9885 12.6078 13.9661 12.3031ZM12.4943 14.579C12.136 14.9042 11.6602 15.0623 11.0398 15.0623H2.96006C2.33952 15.0623 1.86378 14.9042 1.50557 14.5791C1.15414 14.2601 0.983357 13.8247 0.983357 13.2483C0.983357 12.9485 0.993727 12.6525 1.01447 12.3683C1.03469 12.0895 1.07605 11.7832 1.13737 11.4578C1.19793 11.1364 1.275 10.8347 1.36666 10.5616C1.45462 10.2998 1.57457 10.0405 1.72334 9.79077C1.86532 9.55273 2.02868 9.34851 2.20894 9.18396C2.37754 9.03003 2.59007 8.90405 2.84048 8.80957C3.07208 8.72217 3.33235 8.67432 3.6149 8.66711C3.64934 8.68457 3.71066 8.7179 3.81001 8.77966C4.01216 8.90527 4.24517 9.04858 4.50275 9.20544C4.79311 9.38196 5.1672 9.54138 5.61413 9.67896C6.07105 9.81982 6.53706 9.89136 6.99962 9.89136C7.46217 9.89136 7.92831 9.81982 8.38497 9.67908C8.83229 9.54126 9.20625 9.38196 9.49699 9.2052C9.76059 9.04456 9.98707 8.9054 10.1892 8.77966C10.2886 8.71802 10.3499 8.68457 10.3843 8.66711C10.667 8.67432 10.9273 8.72217 11.159 8.80957C11.4093 8.90405 11.6218 9.03015 11.7904 9.18396C11.9707 9.34839 12.134 9.55261 12.276 9.79089C12.4249 10.0405 12.545 10.2999 12.6328 10.5615C12.7246 10.835 12.8018 11.1365 12.8622 11.4576C12.9234 11.7837 12.9649 12.0901 12.9851 12.3684C13.006 12.6515 13.0165 12.9476 13.0166 13.2483C13.0165 13.8248 12.8457 14.2601 12.4943 14.579Z"
                    fill="black"
                    fillOpacity="0.87"
                  />
                </svg>
              </a>
            </div>
            <div className="wishlist-svg">
              <a href="#">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 14C7.77222 14 7.55261 13.9188 7.38147 13.7714C6.73511 13.2156 6.11194 12.6932 5.56213 12.2324L5.55933 12.23C3.94739 10.879 2.55542 9.71231 1.58691 8.56301C0.504272 7.27817 0 6.05996 0 4.72914C0 3.43613 0.450806 2.24325 1.26929 1.37008C2.09753 0.486588 3.23401 0 4.46973 0C5.39331 0 6.23914 0.287175 6.98364 0.85348C7.35938 1.13933 7.69995 1.48918 8 1.89725C8.30017 1.48918 8.64062 1.13933 9.01648 0.85348C9.76099 0.287175 10.6068 0 11.5304 0C12.766 0 13.9026 0.486588 14.7308 1.37008C15.5493 2.24325 16 3.43613 16 4.72914C16 6.05996 15.4958 7.27817 14.4132 8.56289C13.4447 9.71231 12.0529 10.8789 10.4412 12.2298C9.89038 12.6913 9.26624 13.2145 8.61841 13.7717C8.44739 13.9188 8.22766 14 8 14ZM4.46973 0.921792C3.4989 0.921792 2.60706 1.30285 1.95825 1.99485C1.2998 2.6973 0.937134 3.66832 0.937134 4.72914C0.937134 5.84842 1.36011 6.84945 2.30847 7.97486C3.2251 9.06269 4.5885 10.2054 6.16711 11.5285L6.17004 11.5309C6.72192 11.9935 7.34753 12.5179 7.99866 13.0778C8.65369 12.5168 9.28027 11.9916 9.83325 11.5283C11.4117 10.2051 12.775 9.06269 13.6917 7.97486C14.6399 6.84945 15.0629 5.84842 15.0629 4.72914C15.0629 3.66832 14.7002 2.6973 14.0417 1.99485C13.3931 1.30285 12.5011 0.921792 11.5304 0.921792C10.8192 0.921792 10.1663 1.14414 9.58972 1.58258C9.07593 1.97348 8.71802 2.46764 8.50818 2.8134C8.40027 2.9912 8.21033 3.09733 8 3.09733C7.78967 3.09733 7.59973 2.9912 7.49182 2.8134C7.2821 2.46764 6.92419 1.97348 6.41028 1.58258C5.83374 1.14414 5.18079 0.921792 4.46973 0.921792Z"
                    fill="black"
                    fillOpacity="0.87"
                  />
                </svg>
              </a>
            </div>
            <div className="cart-svg">
              <a href="#">
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.996 14.6675L11.7726 12.0186C11.7726 12.0179 11.7727 12.0172 11.7727 12.0165C11.7727 11.9927 11.7702 11.9695 11.7666 11.9466L11.1189 4.26512C11.0651 3.62647 10.4846 3.12619 9.79734 3.12619H9.16131V2.94688C9.16131 1.32194 7.74313 0 5.99997 0C4.25684 0 2.83866 1.32194 2.83866 2.94684V3.12613H2.20267C1.51542 3.12613 0.934882 3.62641 0.881075 4.26509L0.00404588 14.6674C-0.0248521 15.0099 0.102071 15.3509 0.352196 15.6031C0.602354 15.8553 0.957142 16 1.32564 16H10.6744C11.0428 16 11.3977 15.8553 11.6478 15.6032C11.8979 15.3509 12.0248 15.0099 11.996 14.6675ZM3.84493 2.94684C3.84493 1.83916 4.8117 0.938 5.99997 0.938C7.18824 0.938 8.15501 1.83916 8.15501 2.94684V3.12613H3.84493V2.94684ZM1.88422 4.33859C1.89716 4.18472 2.03703 4.06416 2.20264 4.06416H2.83866V4.72447C2.83866 4.9835 3.06394 5.19347 3.34179 5.19347C3.61964 5.19347 3.84493 4.98347 3.84493 4.72447V4.06422H8.15505V4.72447C8.15505 4.9835 8.38033 5.19347 8.65818 5.19347C8.93603 5.19347 9.16131 4.98347 9.16131 4.72447V4.06422H9.79734C9.96295 4.06422 10.1028 4.18475 10.1158 4.33862L10.7235 11.5475H1.27646L1.88422 4.33859ZM10.9089 14.9663C10.8734 15.0021 10.7959 15.062 10.6743 15.062H1.32561C1.20405 15.062 1.12647 15.0021 1.09107 14.9663C1.05564 14.9306 0.997673 14.8539 1.00723 14.7409L1.19738 12.4854H10.8026L10.9928 14.7409C11.0023 14.8539 10.9443 14.9307 10.9089 14.9663Z"
                    fill="black"
                    fillOpacity="0.87"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="header-menu">
          {Maindata.menu.data.map((list, index) => {
            return (
              <div key={"naviMenu" + index} className={"navi-menu"}>
                <ul key={"naviKey" + index}>
                  <li key={"nakeLiKey" + index}>
                    <a href="#">{list.submenu}</a>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});