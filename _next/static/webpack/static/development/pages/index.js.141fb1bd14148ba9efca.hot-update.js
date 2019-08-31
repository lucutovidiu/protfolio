webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/BaseLayout.js":
/*!**********************************!*\
  !*** ./components/BaseLayout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar/NavBar */ "./components/NavBar/NavBar.js");
var _jsxFileName = "C:\\xampp\\htdocs\\ovi_port_website\\app\\components\\BaseLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  // return class BaseLayout extends React.Component {
  //   static async getInitialProps(ctx) {
  //     return func ? func(ctx) : {};
  //   }
  {
    /* <Component props={this.props} /> */
  }
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    tab: props.tab,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), props.children);
}); // }

/***/ }),

/***/ "./components/NavBar/NavBar.js":
/*!*************************************!*\
  !*** ./components/NavBar/NavBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _NavbarMeniu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavbarMeniu */ "./components/NavBar/NavbarMeniu.js");
/* harmony import */ var _static_styles_NavBar_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/styles/_NavBar.scss */ "./static/styles/_NavBar.scss");
/* harmony import */ var _static_styles_NavBar_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_styles_NavBar_scss__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "C:\\xampp\\htdocs\\ovi_port_website\\app\\components\\NavBar\\NavBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var NavBar =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NavBar, _React$PureComponent);

  function NavBar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavBar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavBar).call(this, props));
    _this.state = {
      openMenu: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavBar, [{
    key: "toggleMenu",
    value: function toggleMenu(e) {
      // console.log(e);
      e === "menu_btn" ? this.setState({
        openMenu: true
      }) : this.setState({
        openMenu: !this.state.openMenu
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var openMenu = this.state.openMenu; // console.log("updated");

      return __jsx("nav", {
        className: "navBar_wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx("ul", {
        className: "navBar_mobile_menu ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx("li", {
        id: "navBar_mobile_menu-btn",
        className: openMenu ? "m-fadeOut" : "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("span", {
        onClick: function onClick() {
          return _this2.toggleMenu("menu_btn");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "MENU ", __jsx("i", {
        className: "hand fas fa-hand-point-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }))), __jsx("ul", {
        className: openMenu ? "navBar_mobile_hidden_menu" : "navBar_mobile_hidden_menu m-fadeOut",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx(_NavbarMeniu__WEBPACK_IMPORTED_MODULE_6__["default"], {
        tab: this.props.tab,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), __jsx("li", {
        className: "pointerCursor",
        onClick: function onClick() {
          return _this2.toggleMenu("");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-long-arrow-alt-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), " Back"))), __jsx("ul", {
        className: "navBar_desktop_menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("li", {
        className: "navBar_desktop_logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Ovidiu Lucut"), __jsx("span", {
        className: "navBar_items_list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx(_NavbarMeniu__WEBPACK_IMPORTED_MODULE_6__["default"], {
        tab: this.props.tab,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }))), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }));
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent);



/***/ }),

/***/ "./components/NavBar/NavbarMeniu.js":
/*!******************************************!*\
  !*** ./components/NavBar/NavbarMeniu.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");






var _jsxFileName = "C:\\xampp\\htdocs\\ovi_port_website\\app\\components\\NavBar\\NavbarMeniu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var NavbarMeniu =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NavbarMeniu, _React$Component);

  function NavbarMeniu(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarMeniu);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavbarMeniu).call(this, props));
    _this.LogOut = _this.LogOut.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarMeniu, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.isAuthenticaticated === nextProps.isAuthenticaticated) return false;else return true;
    }
  }, {
    key: "LogOut",
    value: function LogOut() {
      this.props.logout();
    } // const isAuthenticaticated = useSelector(state => state.isAuthenticaticated);
    // console.log(isAuthenticaticated);

  }, {
    key: "btnRouteColor",
    value: function btnRouteColor(routeName) {
      return this.props.tab === routeName || typeof this.props.tab === "undefined" ? {
        color: "#3498db"
      } : {
        color: "rgb(158, 155, 155)"
      };
    } // console.log(homeColorBtn);

  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("a", {
        style: this.btnRouteColor("Home"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Home"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/portfolios",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx("a", {
        style: this.btnRouteColor("Protfolios"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Protfolios"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/blog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("a", {
        style: this.btnRouteColor("Blog"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Blog"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        as: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("a", {
        style: this.btnRouteColor("Contact"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Contact"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("a", {
        style: this.btnRouteColor("About"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "About"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, this.props.isAuthenticaticated ? __jsx("button", {
        className: "a-button btn",
        onClick: this.LogOut,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Logout") : __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx("a", {
        style: this.btnRouteColor("Login"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Login"))));
    }
  }]);

  return NavbarMeniu;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

function mapStateToProps(state) {
  return {
    isAuthenticaticated: state.isAuthenticaticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: function logout() {
      return dispatch({
        type: "LOGOUT"
      });
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(NavbarMeniu));

/***/ })

})
//# sourceMappingURL=index.js.141fb1bd14148ba9efca.hot-update.js.map