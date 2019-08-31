webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_styles_mainStyle_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/styles/_mainStyle.scss */ "./static/styles/_mainStyle.scss");
/* harmony import */ var _static_styles_mainStyle_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_styles_mainStyle_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_styles_helperClases_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/styles/_helperClases.scss */ "./static/styles/_helperClases.scss");
/* harmony import */ var _static_styles_helperClases_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_styles_helperClases_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_styles_materialDesignInput_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/styles/_materialDesignInput.scss */ "./static/styles/_materialDesignInput.scss");
/* harmony import */ var _static_styles_materialDesignInput_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_styles_materialDesignInput_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_React_Redux_with_redux_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/React-Redux/with-redux-store */ "./components/React-Redux/with-redux-store.js");






var _jsxFileName = "C:\\xampp\\htdocs\\ovi_port_website\\app\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





 // import Head from "next/head";


 // import { createStore, applyMiddleware } from "redux";
// import UserReducer from "../components/ReactContext/UserReducer";
// import { persistStore, persistReducer } from "redux-persist";
// // import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
// import storage from "redux-persist/lib/storage/session";
// import { PersistGate } from "redux-persist/integration/react";
// import thunk from "redux-thunk";

var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp, _App);

  function MyApp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "render",
    // componentDidMount() {
    //   // Remove the server-side injected CSS.
    //   const jssStyles = document.querySelector("#jss-server-side");
    //   if (jssStyles) {
    //     jssStyles.parentNode.removeChild(jssStyles);
    //   }
    // }
    // Only uncomment this method if you have blocking data requirements for
    // every single page in your application. This disables the ability to
    // perform automatic static optimization, causing every page in your app to
    // be server-side rendered.
    //
    // static async getInitialProps(appContext) {
    //   // calls page's `getInitialProps` and fills `appProps.pageProps`
    //   const appProps = await App.getInitialProps(appContext);
    //   return { ...appProps };
    // }
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          reduxStore = _this$props.reduxStore; // const persistConfig = {
      //   key: "root",
      //   storage
      // };
      // const persistedReducer = persistReducer(persistConfig, UserReducer);
      // let store = createStore(persistedReducer, applyMiddleware(thunk));
      // let persistor = persistStore(store);

      return (//   <PersistGate loading={null} persistor={persistor}>
        __jsx(react_redux__WEBPACK_IMPORTED_MODULE_12__["Provider"], {
          store: reduxStore,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }))) //   </PersistGate>

      );
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_7___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_React_Redux_with_redux_store__WEBPACK_IMPORTED_MODULE_13__["default"])(MyApp));

/***/ })

})
//# sourceMappingURL=_app.js.572c55c578addee1a65c.hot-update.js.map