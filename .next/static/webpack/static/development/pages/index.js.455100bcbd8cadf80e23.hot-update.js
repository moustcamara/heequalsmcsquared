webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ProfileCard.js":
/*!***********************************!*\
  !*** ./components/ProfileCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-reactjs */ "./node_modules/prismic-reactjs/dist/prismic-reactjs.js");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ProfileCard = function ProfileCard(props) {
  var profileCardStyles = function profileCardStyles(profileCardImage) {
    return {
      backgroundImage: 'url(' + profileCardImage + ')',
      backgroundSize: 'cover',
      paddingTop: '100%'
    };
  };

  var profileCardText = function profileCardText() {
    return {
      color: 'white',
      fontWeight: '700',
      fontFamily: 'Montserrat',
      position: 'absolute',
      top: '40%',
      left: '50%',
      transform: 'translateX(-50%) translateY(-50%)'
    };
  };

  return __jsx("div", {
    className: "profile-card col-md-6 p-0"
  }, __jsx("style", null, "       \n            .profile-card {\n                background-color: #212121;\n                background-image: url(https://www.transparenttextures.com/patterns/asfalt-light.png);\n            } \n\n            .profile-card__title img {\n                max-width: 100%;\n            }\n          "), __jsx("div", {
    className: "profile-card__image text-center",
    style: profileCardStyles()
  }, __jsx("div", {
    className: "profile-card__text text-center mt-3",
    style: profileCardText()
  }, __jsx("h1", {
    className: "profile-card__title display-1"
  }, __jsx("img", {
    src: props.profile.profile_logo.url,
    width: "400",
    alt: prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__["RichText"].asText(props.profile.profile_title)
  })), __jsx("div", {
    className: "font-weight-light my-5"
  }, "Jersey City, New Jersey"), __jsx("div", {
    className: "font-weight-normal mt-2"
  }, "Contact for music production inquiries:"), __jsx("div", {
    className: "font-weight-light d-flex align-items-center"
  }, __jsx("span", {
    "class": "material-icons mr-2"
  }, "email"), " moust@hemc2.com"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileCard);

/***/ })

})
//# sourceMappingURL=index.js.455100bcbd8cadf80e23.hot-update.js.map