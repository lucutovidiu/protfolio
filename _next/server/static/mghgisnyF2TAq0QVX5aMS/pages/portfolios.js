module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "4WGo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./static/styles/_portfolios.scss
var _portfolios = __webpack_require__("gsT+");

// EXTERNAL MODULE: ./components/BaseLayout.js + 2 modules
var BaseLayout = __webpack_require__("ds/u");

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/HelperFunctions.js
var HelperFunctions = __webpack_require__("wrDA");

// CONCATENATED MODULE: ./components/Portfolios/Portfolio_landing_page_Card.js
var __jsx = external_react_default.a.createElement;


 // import { useDispatch } from "react-redux";
// import { DELETE_PORTFOLIOS } from "../ReactContext/Actions";



const Portfolio_landing_page_Card = ({
  portfolio,
  auth,
  ReRender
}) => {
  // const dispatch = useDispatch();
  function RemovePortfolio() {
    const query = `mutation{
          RemovePortfolio(portfolioID: "${portfolio.id}")
          }`;
    const headers = {
      Authorization: auth.isAuthorized.jwt
    };
    Object(HelperFunctions["b" /* fetchGraphQL */])(query, headers).then(data => {
      data && ReRender(portfolio.id); // console.log(data);
    }).catch(err => {
      console.log(err);
    });
  }

  return __jsx("div", {
    className: "portfolio_landing_page_wrapper mt-4"
  }, __jsx("div", {
    className: "portfolio_landing_page_card"
  }, __jsx("img", {
    className: "portfolio_landing_page_card_img",
    src: "../../static/img/portofios_img/comenzi_magazine_app.JPG"
  }), __jsx("div", {
    className: "portfolio_landing_page_card_details"
  }, __jsx("div", {
    className: "portfolio_landing_page_card_details_title"
  }, __jsx("h5", {
    style: {
      margin: "-0.4rem",
      fontFamily: "Hand Writing",
      fontSize: "2.5rem"
    },
    className: ""
  }, portfolio.title)), __jsx("div", {
    className: "portfolio_landing_page_card_details_minidescription"
  }, __jsx("ul", null, __jsx("li", null, __jsx("span", {
    style: {
      fontWeight: "bold"
    }
  }, "Short Description: "), portfolio.shortDescription), __jsx("li", null, __jsx("span", {
    style: {
      fontWeight: "bold"
    }
  }, "Tech Used: \xA0"), portfolio.technologiesUsed))), __jsx("div", {
    className: "portfolio_landing_page_card_details_moreinfobtn"
  }, __jsx("a", {
    target: "_blank",
    href: "/portfolio/" + portfolio.id
  }, __jsx(external_react_bootstrap_["Button"], {
    variant: "primary"
  }, "More Info")), auth.isAuthorized.checkResult === "FOUND" && auth.isAuthorized.role === "admin" && __jsx(external_react_default.a.Fragment, null, __jsx(link_default.a, {
    href: "/portfolio/" + portfolio.id
  }, __jsx(external_react_bootstrap_["Button"], {
    variant: "secondary"
  }, "Edit")), __jsx(external_react_bootstrap_["Button"], {
    onClick: RemovePortfolio,
    variant: "danger"
  }, "Delete"))))));
};

/* harmony default export */ var Portfolios_Portfolio_landing_page_Card = (Portfolio_landing_page_Card);
// EXTERNAL MODULE: ./components/Auth/useAuth.js
var useAuth = __webpack_require__("cv0R");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js + 1 modules
var objectSpread = __webpack_require__("zrwo");

// CONCATENATED MODULE: ./components/CustomHooks.js



function useGetPortfolios() {
  const [data, setData] = external_react_default.a.useState(null);
  const [dataRequested, setDataRequested] = external_react_default.a.useState(false);

  if (!dataRequested) {
    setDataRequested(true);
    const query = `{
      GetPortfolios{
       id
       title
       shortDescription
       technologiesUsed
      }
      }`;
    Object(HelperFunctions["b" /* fetchGraphQL */])(query).then(data => {
      setData(Object(objectSpread["a" /* default */])({}, data));
    }).catch(err => {
      console.log(err);
    });
  }

  return {
    data
  };
}
// CONCATENATED MODULE: ./pages/portfolios.js

var portfolios_jsx = external_react_default.a.createElement;








function Portfolios(props) {
  const auth = Object(useAuth["a" /* default */])();
  const dataPort = useGetPortfolios();
  const [data, setData] = external_react_default.a.useState(null);
  external_react_default.a.useEffect(() => {
    if (dataPort !== null) {
      if (data === null) {
        setData(dataPort.data);
      }
    }
  }, [dataPort]);

  function ReRender(id) {
    setData({
      GetPortfolios: data.GetPortfolios.filter(item => item.id !== id)
    });
  }

  return portfolios_jsx(BaseLayout["a" /* default */], {
    tab: "Protfolios"
  }, portfolios_jsx("div", {
    className: "jsx-3088721398" + " " + "main_wrapper_port m-0 p-0"
  }, portfolios_jsx("div", {
    className: "jsx-3088721398" + " " + "portfolios_title"
  }, portfolios_jsx("h1", {
    className: "jsx-3088721398"
  }, "My Portfolios")), portfolios_jsx("div", {
    className: "jsx-3088721398" + " " + "portfolios_card_wrapper mb-0 p-3"
  }, data !== null && data.GetPortfolios.map((portfolio, id) => {
    return portfolios_jsx(Portfolios_Portfolio_landing_page_Card, {
      auth: auth,
      key: id,
      portfolio: portfolio,
      ReRender: ReRender
    });
  }), data === null && portfolios_jsx(external_react_bootstrap_["Spinner"], {
    animation: "border",
    role: "status"
  }, portfolios_jsx("span", {
    className: "jsx-3088721398" + " " + "sr-only"
  }, "Loading...")))), portfolios_jsx(style_default.a, {
    id: "3088721398"
  }, [".main_wrapper_port.jsx-3088721398{position:relative;min-height:100vh;background-color:#e9ecef;}", ".portfolios_title.jsx-3088721398{padding:80px 0 0 0;text-shadow:1px 2px 10px rgb(143,142,142);font-family:\"Mina\";text-align:center;}"]));
} // Portfolios.getInitialProps = async ({ req }) => {
//   const data = await fetchGraphQL(`{
//     GetPortfolios{
//      id
//     title
//       shortDescription
//       technologiesUsed
//     }
//     }`);
//   return { ...data };
// };


/* harmony default export */ var portfolios = __webpack_exports__["default"] = (Portfolios);

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4WGo");


/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "WvQj":
/***/ (function(module, exports) {



/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cv0R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HelperFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wrDA");





function useAuth() {
  const authSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state);
  const [state, setstate] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    isAuthorized: {
      checkingInProgress: true,
      checkResult: "NOT_CHECKED"
    }
  });

  function checkAuth() {
    const auth = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, authSelector);

    if (auth.jwt !== "") {
      Object(_HelperFunctions__WEBPACK_IMPORTED_MODULE_3__[/* checkIfisAuthorized */ "a"])(auth.jwt).then(data => {
        const {
          isAuthorized
        } = JSON.parse(data);

        if (isAuthorized.userEmail) {
          // console.log(auth);
          setstate({
            isAuthorized: {
              checkingInProgress: false,
              checkResult: "FOUND",
              role: auth.role,
              jwt: auth.jwt
            }
          });
        } else {
          setstate({
            isAuthorized: {
              checkingInProgress: false,
              checkResult: "NOT_FOUND"
            }
          });
        }
      });
    } else {
      setstate({
        isAuthorized: {
          checkingInProgress: false,
          checkResult: "NOT_FOUND"
        }
      });
    }
  }

  if (state.isAuthorized.checkingInProgress) {
    checkAuth();
  }

  return state;
}

/* harmony default export */ __webpack_exports__["a"] = (useAuth);

/***/ }),

/***/ "dAJ7":
/***/ (function(module, exports) {

module.exports = require("graphql-request");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "ds/u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./components/NavBar/NavbarMeniu.js
var __jsx = external_react_default.a.createElement;




class NavbarMeniu_NavbarMeniu extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.LogOut = this.LogOut.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.isAuthenticaticated === nextProps.isAuthenticaticated) return false;else return true;
  }

  LogOut() {
    this.props.logout();
  } // const isAuthenticaticated = useSelector(state => state.isAuthenticaticated);
  // console.log(isAuthenticaticated);


  btnRouteColor(routeName) {
    return this.props.tab === routeName || typeof this.props.tab === "undefined" ? {
      color: "#3498db"
    } : {
      color: "rgb(158, 155, 155)"
    };
  } // console.log(homeColorBtn);


  render() {
    return __jsx(external_react_default.a.Fragment, null, __jsx("li", null, __jsx(link_default.a, {
      href: "/"
    }, __jsx("a", {
      style: this.btnRouteColor("Home")
    }, "Home"))), __jsx("li", null, __jsx(link_default.a, {
      href: "/portfolios"
    }, __jsx("a", {
      style: this.btnRouteColor("Protfolios")
    }, "Protfolios"))), __jsx("li", null, __jsx(link_default.a, {
      href: "/blog"
    }, __jsx("a", {
      style: this.btnRouteColor("Blog")
    }, "Blog"))), __jsx("li", null, __jsx(link_default.a, {
      href: "/contact",
      as: "/contact"
    }, __jsx("a", {
      style: this.btnRouteColor("Contact")
    }, "Contact"))), __jsx("li", null, __jsx(link_default.a, {
      href: "/about"
    }, __jsx("a", {
      style: this.btnRouteColor("About")
    }, "About"))), __jsx("li", null, this.props.isAuthenticaticated ? __jsx("button", {
      className: "a-button btn",
      onClick: this.LogOut
    }, "Logout") : __jsx(link_default.a, {
      href: "/login"
    }, __jsx("a", {
      style: this.btnRouteColor("Login")
    }, "Login"))));
  }

}

function mapStateToProps(state) {
  return {
    isAuthenticaticated: state.isAuthenticaticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch({
      type: "LOGOUT"
    })
  };
}

/* harmony default export */ var NavBar_NavbarMeniu = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(NavbarMeniu_NavbarMeniu));
// EXTERNAL MODULE: ./static/styles/_NavBar.scss
var _NavBar = __webpack_require__("WvQj");

// CONCATENATED MODULE: ./components/NavBar/NavBar.js
var NavBar_jsx = external_react_default.a.createElement;



class NavBar_NavBar extends external_react_default.a.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false
    };
  }

  toggleMenu(e) {
    // console.log(e);
    e === "menu_btn" ? this.setState({
      openMenu: true
    }) : this.setState({
      openMenu: !this.state.openMenu
    });
  }

  render() {
    const {
      openMenu
    } = this.state; // console.log("updated");

    return NavBar_jsx("nav", {
      className: "navBar_wrapper"
    }, NavBar_jsx("ul", {
      className: "navBar_mobile_menu "
    }, NavBar_jsx("li", {
      id: "navBar_mobile_menu-btn",
      className: openMenu ? "m-fadeOut" : ""
    }, NavBar_jsx("span", {
      onClick: () => this.toggleMenu("menu_btn")
    }, "MENU ", NavBar_jsx("i", {
      className: "hand fas fa-hand-point-left"
    }))), NavBar_jsx("ul", {
      className: openMenu ? "navBar_mobile_hidden_menu" : "navBar_mobile_hidden_menu m-fadeOut"
    }, NavBar_jsx(NavBar_NavbarMeniu, {
      tab: this.props.tab
    }), NavBar_jsx("li", {
      className: "pointerCursor",
      onClick: () => this.toggleMenu("")
    }, NavBar_jsx("i", {
      className: "fas fa-long-arrow-alt-left"
    }), " Back"))), NavBar_jsx("ul", {
      className: "navBar_desktop_menu"
    }, NavBar_jsx("li", {
      className: "navBar_desktop_logo"
    }, "Ovidiu Lucut"), NavBar_jsx("span", {
      className: "navBar_items_list"
    }, NavBar_jsx(NavBar_NavbarMeniu, {
      tab: this.props.tab
    }))), NavBar_jsx("div", null));
  }

}
// CONCATENATED MODULE: ./components/BaseLayout.js
var BaseLayout_jsx = external_react_default.a.createElement;


/* harmony default export */ var BaseLayout = __webpack_exports__["a"] = (function (props) {
  // return class BaseLayout extends React.Component {
  //   static async getInitialProps(ctx) {
  //     return func ? func(ctx) : {};
  //   }
  {
    /* <Component props={this.props} /> */
  }
  return BaseLayout_jsx(external_react_default.a.Fragment, null, BaseLayout_jsx(NavBar_NavBar, {
    tab: props.tab
  }), props.children);
}); // }

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gsT+":
/***/ (function(module, exports) {



/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("qxCs"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("mJK4");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "wrDA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchGraphQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkIfisAuthorized; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dAJ7");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);



const client = new graphql_request__WEBPACK_IMPORTED_MODULE_1__["GraphQLClient"]("http://localhost:3000/api/graphql");
const fetchGraphQL = async function (query, headers = null) {
  if (headers) {
    {
      client.setHeaders(headers);
    }
    return client.request(query);
  } else {
    return client.request(query);
  }
};
const checkIfisAuthorized = async function (jwtToken) {
  const url = "/api/CheckIfAuthenticated";
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      jwtToken
    })
  }).then(data => {
    // console.log(data);
    return data.json();
  });
};

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });