webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers */ "./helpers/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_helpers__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prismic-reactjs */ "./node_modules/prismic-reactjs/dist/prismic-reactjs.js");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_ProfileCard_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ProfileCard.js */ "./components/ProfileCard.js");
/* harmony import */ var _components_TracksCard_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/TracksCard.js */ "./components/TracksCard.js");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../layouts */ "./layouts/index.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


 // We create this in just a tick






/**
* As you can see we are importing our layout here,
* and below we wrap all of the page in it.
*/



function getTime(time) {
  if (!isNaN(time)) {
    return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
  }
}

var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    _this = _super.call(this, props);
    _this.setTrack = _this.setTrack.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.state = {
      value: null,
      selectedTrack: null,
      selectedTrackName: 'default',
      selectedTrackNumber: null,
      selectedTrackFile: null,
      player: "stopped",
      currentTime: null,
      duration: null
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "setTrack",
    value: function setTrack(trackName, trackFile, trackNumber) {
      this.setState({
        selectedTrack: null,
        selectedTrackName: trackName,
        selectedTrackFile: trackFile,
        //trackFile
        selectedTrackNumber: trackNumber,
        player: "playing",
        duration: this.player.duration
      }, function () {
        console.log(this.state.selectedTrackNumber);
      });
      this.player.play();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.player.addEventListener("timeupdate", function (e) {
        _this2.setState({
          currentTime: e.target.currentTime,
          duration: e.target.duration
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.player.removeEventListener("timeupdate", function () {});
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.selectedTrackFile !== prevState.selectedTrackFile) {
        var track = this.state.selectedTrackFile; // if (track) {

        this.player.src = track;
        this.player.play();
        this.setState({
          player: "playing",
          duration: this.player.duration,
          selectedTrackNumber: 'track-1'
        }); //  }
      }

      if (this.state.player !== prevState.player) {
        if (this.state.player === "paused") {
          this.player.pause();
        } else if (this.state.player === "stopped") {
          this.player.pause();
          this.player.currentTime = 0;
          this.setState({
            selectedTrackFile: null
          });
        } else if (this.state.player === "playing" && prevState.player === "paused") {
          this.player.play();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      function handleChange(newValue) {
        setValue(newValue);
      }

      var currentTime = getTime(this.state.currentTime);
      var duration = getTime(this.state.duration);
      var tracklistData = this.props.home[0].data.body.find(function (slice) {
        return slice.slice_type == "tracklist";
      }).items;
      return __jsx(_layouts__WEBPACK_IMPORTED_MODULE_14__["default"], null, this.props.home.map(function (homepage) {
        return __jsx("div", null, __jsx("div", {
          className: "row"
        }, homepage.data.body.map(function (slice) {
          return slice.slice_type == "profile_card" && __jsx(_components_ProfileCard_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
            profile: slice.primary
          });
        }), homepage.data.body.map(function (slice) {
          return slice.slice_type == "tracklist" && __jsx(TracksCardAlt, null);
        })), __jsx("audio", {
          ref: function ref(_ref) {
            return _this3.player = _ref;
          }
        }));
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_api__WEBPACK_IMPORTED_MODULE_8__["getHomePageAPI"])({
                pageSize: 1
              }));

            case 2:
              response = _context.sent;
              return _context.abrupt("return", {
                home: response.results
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.4c78e02061cbeeb7c893.hot-update.js.map