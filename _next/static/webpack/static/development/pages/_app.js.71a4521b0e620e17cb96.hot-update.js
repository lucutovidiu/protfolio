webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/React-Redux/store.js":
/*!*****************************************!*\
  !*** ./components/React-Redux/store.js ***!
  \*****************************************/
/*! exports provided: actionTypes, reducer, serverRenderClock, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverRenderClock", function() { return serverRenderClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");





var initialState = {
  loggedInUser: "",
  isAuthenticaticated: false,
  GetPortfolios: null,
  jwt: ""
};
var actionTypes = {
  AUTH_USER: "AUTH_USER",
  LOGOUT: "LOGOUT"
}; // REDUCERS

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.AUTH_USER:
      {
        var newState = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
          loggedInUser: action.payload.loggedInUser,
          isAuthenticaticated: true,
          jwt: action.payload.jwt,
          role: action.payload.role
        });

        return newState;
      }

    case actionTypes.LOGOUT:
      {
        return initState;
      }
    // case "GET_PORTFOLIOS": {
    //   // console.log(action.payload.GetPortfolios);
    //   return {
    //     // ...state,
    //     GetPortfolios: action.payload.GetPortfolios
    //   };
    // }
    // case "REMOVE_PORTFOLIOS": {
    //   console.log(state)
    //   return {
    //     ...state,
    //     GetPortfolios: state.GetPortfolios.filter(
    //       item => item.id === action.payload
    //     )
    //   };
    // }

    default:
      {
        return state;
      }
  }
}; // ACTIONS

var serverRenderClock = function serverRenderClock() {
  return {
    type: actionTypes.TICK,
    light: false,
    ts: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()
  };
};
function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"])));
}

/***/ })

})
//# sourceMappingURL=_app.js.71a4521b0e620e17cb96.hot-update.js.map