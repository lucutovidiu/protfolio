(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/PZL":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={defaultEasing:function(e){return e<.5?Math.pow(2*e,2)/2:1-Math.pow(2*(1-e),2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}},"7FV1":function(e,t,n){"use strict";var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n("q1tI"),u=(n("i8i4"),n("xFC4"),n("wT0s")),c=n("zPnG"),f=n("17x9"),d=n("Dy/p"),p={to:f.string.isRequired,containerId:f.string,container:f.object,activeClass:f.string,spy:f.bool,smooth:f.oneOfType([f.bool,f.string]),offset:f.number,delay:f.number,isDynamic:f.bool,onClick:f.func,duration:f.oneOfType([f.number,f.func]),absolute:f.bool,onSetActive:f.func,onSetInactive:f.func,ignoreCancelEvents:f.bool,hashSpy:f.bool},h={Scroll:function(e,t){console.warn("Helpers.Scroll is deprecated since v1.7.0");var n=t||c,f=function(t){function c(e){a(this,c);var t=i(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));return h.call(t),t.state={active:!1},t}return s(c,l.Component),r(c,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();u.isMounted(e)||u.mount(e),this.props.hashSpy&&(d.isMounted()||d.mount(n),d.mapContainer(this.props.to,e)),this.props.spy&&u.addStateHandler(this.stateHandler),u.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){u.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=o({},this.props);for(var r in p)n.hasOwnProperty(r)&&delete n[r];return n.className=t,n.onClick=this.handleClick,l.createElement(e,n)}}]),c}(),h=function(){var e=this;this.scrollTo=function(t,r){n.scrollTo(t,o({},e.state,r))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.stateHandler=function(){n.getActiveLink()!==e.props.to&&(null!==e.state&&e.state.active&&e.props.onSetInactive&&e.props.onSetInactive(),e.setState({active:!1}))},this.spyHandler=function(t){var o=e.getScrollSpyContainer();if(!d.isMounted()||d.isInitialized()){var r=e.props.to,a=null,i=0,s=0,l=0;if(o.getBoundingClientRect)l=o.getBoundingClientRect().top;if(!a||e.props.isDynamic){if(!(a=n.get(r)))return;var c=a.getBoundingClientRect();s=(i=c.top-l+t)+c.height}var f=t-e.props.offset,p=f>=Math.floor(i)&&f<Math.floor(s),h=f<Math.floor(i)||f>=Math.floor(s),m=n.getActiveLink();return h?(r===m&&n.setActiveLink(void 0),e.props.hashSpy&&d.getHash()===r&&d.changeHash(),e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive()),u.updateStates()):p&&m!==r?(n.setActiveLink(r),e.props.hashSpy&&d.changeHash(r),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(r)),u.updateStates()):void 0}}};return f.propTypes=p,f.defaultProps={offset:0},f},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var t=function(t){function n(e){a(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return s(n,l.Component),r(n,[{key:"componentDidMount",value:function(){if("undefined"===typeof window)return!1;this.registerElems(this.props.name)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.props.name!==e.name&&this.registerElems(e.name)}},{key:"componentWillUnmount",value:function(){if("undefined"===typeof window)return!1;c.unregister(this.props.name)}},{key:"registerElems",value:function(e){c.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return l.createElement(e,o({},this.props,{parentBindings:this.childBindings}))}}]),n}();return t.propTypes={name:f.string,id:f.string},t}};e.exports=h},"7wkA":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=i(n("q1tI")),a=i(n("pUFB"));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),o(t,[{key:"render",value:function(){return r.default.createElement("input",this.props,this.props.children)}}]),t}();t.default=(0,a.default)(s)},"8QoP":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("QLqi"),r=["mousedown","mousewheel","touchmove","keydown"];t.default={subscribe:function(e){return"undefined"!==typeof document&&r.forEach(function(t){return(0,o.addPassiveEventListener)(document,t,e)})}}},"Dy/p":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("QLqi");var o,r=n("xFC4"),a=(o=r)&&o.__esModule?o:{default:o};var i={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,t){this.containers[e]=t},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,t=this.getHash();t?window.setTimeout(function(){e.scrollTo(t,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,t){var n=this.scroller;if(n.get(e)&&(t||e!==n.getActiveLink())){var o=this.containers[e]||document;n.scrollTo(e,{container:o})}},getHash:function(){return a.default.getHash()},changeHash:function(e){this.isInitialized()&&a.default.getHash()!==e&&a.default.pushHash(e)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};t.default=i},NEP4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=(s(n("xFC4")),s(n("/PZL"))),a=s(n("8QoP")),i=s(n("QQPg"));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){return r.default[e.smooth]||r.default.defaultEasing},u=function(){if("undefined"!==typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame}()||function(e,t,n){window.setTimeout(e,n||1e3/60,(new Date).getTime())},c=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollTop;var n=void 0!==window.pageXOffset,o="CSS1Compat"===(document.compatMode||"");return n?window.pageYOffset:o?document.documentElement.scrollTop:document.body.scrollTop},f=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},d=function(e,t,n,o){if(t.data=t.data||{currentPositionY:0,startPositionY:0,targetPositionY:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,deltaTop:null,percent:null,delayTimeout:null},window.clearTimeout(t.data.delayTimeout),a.default.subscribe(function(){t.data.cancel=!0}),f(t),t.data.start=null,t.data.cancel=!1,t.data.startPositionY=c(t),t.data.targetPositionY=t.absolute?e:e+t.data.startPositionY,t.data.startPositionY!==t.data.targetPositionY){var r;t.data.deltaTop=Math.round(t.data.targetPositionY-t.data.startPositionY),t.data.duration=("function"===typeof(r=t.duration)?r:function(){return r})(t.data.deltaTop),t.data.duration=isNaN(parseFloat(t.data.duration))?1e3:parseFloat(t.data.duration),t.data.to=n,t.data.target=o;var s=l(t),d=function e(t,n,o){var r=n.data;if(n.ignoreCancelEvents||!r.cancel)if(r.deltaTop=Math.round(r.targetPositionY-r.startPositionY),null===r.start&&(r.start=o),r.progress=o-r.start,r.percent=r.progress>=r.duration?1:t(r.progress/r.duration),r.currentPositionY=r.startPositionY+Math.ceil(r.deltaTop*r.percent),r.containerElement&&r.containerElement!==document&&r.containerElement!==document.body?r.containerElement.scrollTop=r.currentPositionY:window.scrollTo(0,r.currentPositionY),r.percent<1){var a=e.bind(null,t,n);u.call(window,a)}else i.default.registered.end&&i.default.registered.end(r.to,r.target,r.currentPositionY);else i.default.registered.end&&i.default.registered.end(r.to,r.target,r.currentPositionY)}.bind(null,s,t);t&&t.delay>0?t.data.delayTimeout=window.setTimeout(function(){i.default.registered.begin&&i.default.registered.begin(t.data.to,t.data.target),u.call(window,d)},t.delay):(i.default.registered.begin&&i.default.registered.begin(t.data.to,t.data.target),u.call(window,d))}else i.default.registered.end&&i.default.registered.end(t.data.to,t.data.target,t.data.currentPositionY)},p=function(e){return(e=o({},e)).data=e.data||{currentPositionY:0,startPositionY:0,targetPositionY:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,deltaTop:null,percent:null,delayTimeout:null},e.absolute=!0,e};t.default={animateTopScroll:d,getAnimationType:l,scrollToTop:function(e){d(0,p(e))},scrollToBottom:function(e){e=p(e),f(e),d(function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollHeight-t.offsetHeight;var n=document.body,o=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight)}(e),e)},scrollTo:function(e,t){d(e,p(t))},scrollMore:function(e,t){t=p(t),f(t),d(c(t)+e,t)}}},PGca:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(n("q1tI")),r=a(n("pUFB"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.render=function(){return o.default.createElement("a",r.props,r.props.children)},i(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),t}();t.default=(0,r.default)(s)},QLqi:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.addPassiveEventListener=function(e,t,n){var o=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(n){}return e}();e.addEventListener(t,n,!!o&&{passive:!0})},t.removePassiveEventListener=function(e,t,n){e.removeEventListener(t,n)}},QQPg:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={registered:{},scrollEvent:{register:function(e,t){o.registered[e]=t},remove:function(e){o.registered[e]=null}}};t.default=o},RNiq:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),r=n.n(o),a=n("ds/u"),i=n("YFqc"),s=n.n(i),l=r.a.createElement,u=function(e){return l("div",{className:"lp_info_wrapper jumbotron"},l("div",{className:"container"},l("h4",{className:"lp_info_wrapper_intro"},"A little intro"),l("div",{className:"row pt-3 centerText"},l("div",{className:"col-md-6"},l("h4",null,"My Passion"),l("p",{className:"lead text-left text-justify pt-2"},"Starting since I was about 7 by that time there wasn't too many computers but the first one I've seen on TV made me fall in love with..., a few years later I've got my first computer at home and I was very very pleased. I have started programming in High School and always continued to study and programming. Then I went to the University and continued with programming and really loved learning about new technologies and frameworks. I really want to get better and better. I hope to get to a place where I can progress and get better at programming."),l("div",{className:" text-left pt-0 mt-0 mb-3"},l(s.a,{href:"/about"},l("a",{className:"badge"},"Check my story on the About Page")))),l("div",{className:"col-md-6"},l("h4",null,"My Skills"),l("p",{className:"lead text-left text-justify pt-2"},"In the High School I've started Programing in Pascal with Visual Fox Pro as a database, it a a good brake into Programing. Than in the University I've started hard into Programming starting with C and than C++, I used to use them to make daemon servers that do communication with a website or multi threading chat app, I did love then... But the most I loved Java programming language, and of course more different technoloies and frameworks. Recently from about 2 years I've started hard on web programming in which I see big potential. So at the moment I put more efort into developing skills like:"," ",l("span",{className:"font-weight-bold small"},"HTML, CSS, JAVASCRIPT/REACT, NODE/EXPRESS, MySql, MongoDB/GraphQL.")),l("div",{className:"text-left pt-0 mt-0 "},l(s.a,{href:"/about"},l("a",{className:"badge"},"Please check out a full deschiption on the About Page")))))))},c=n("oqc9"),f=(n("lMqd"),r.a.createElement),d=function(){function e(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{anchor:"",target:"_self"};return f("div",{className:"footer_card"},""!==n.anchor?f("a",{href:n.anchor,style:{textDecoration:"none"},target:n.target},f("div",{className:"title"},e),f("div",{className:"footer_card_badge"},f("i",{className:"".concat(t)}))):f(r.a.Fragment,null,f("div",{className:"title"},e),f("div",{className:"footer_card_badge"},f("i",{className:"".concat(t)}))))}return f("div",{className:"footer_wrapper"},f("div",{className:"container"},f("div",{className:"row"},f("div",{className:"col-md-4 "},f("h4",null,"What I do"),f("div",{className:"footer_what_i_do"},e("HTML5","fab fa-html5"),e("CSS3","fab fa-css3-alt"),e("BootStrap","fab fa-bootstrap"),e("React","fab fa-react"))),f("div",{className:"col-md-4"},f("h6",{className:"mt-3"},"\xa0\xa0\xa0",f("q",null,"I build secure, interactive websites using above mentioned technologies, and I enjoy doing it. And always learning more..."))),f("div",{className:"col-md-4"},f("h6",{className:"mt-3"},"Contact Me"),f("div",{className:"footer_what_i_do"},e("Email","far fa-envelope",{anchor:"/contact"}),e("LinkedIn","fab fa-linkedin",{anchor:"https://www.linkedin.com/in/ovidiu-lucut-911962174",target:"_blank"}))))))},p=(n("2JQB"),r.a.createElement);t.default=function(e){return p(a.a,{tab:"Home"},p("div",{className:"langing_page_wrapper"},p("div",{className:"langing_page_content_wrapper centerText container-fluid"},p("h1",{className:"langing_page_h1"},"Welcome To My Portfolio Website"),p("p",{className:"langing_page_p1"},"I hope you are're going to enjoy it"),p("p",{className:"langing_page_p2"},"Get Started"),p("div",{className:"langing_page_arrow_down"},p(c.Link,{activeClass:"active",to:"section1",spy:!0,smooth:!0,duration:1500},p("span",{className:"fas fa-arrow-alt-circle-down"}))))),p("div",{id:"section1",className:"clear-fix"}),p(u,null),p("div",{id:"section1",className:"clear-fix"}),p(d,null))}},Y30y:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=l(n("q1tI")),i=l(n("w2Tm")),s=l(n("17x9"));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"render",value:function(){var e=this,t=o({},this.props);return t.parentBindings&&delete t.parentBindings,a.default.createElement("div",o({},t,{ref:function(t){e.props.parentBindings.domNode=t}}),this.props.children)}}]),t}();u.propTypes={name:s.default.string,id:s.default.string},t.default=(0,i.default)(u)},"hKI/":function(e,t,n){(function(t){var n="Expected a function",o=NaN,r="[object Symbol]",a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,d=c||f||Function("return this")(),p=Object.prototype.toString,h=Math.max,m=Math.min,v=function(){return d.Date.now()};function y(e,t,o){var r,a,i,s,l,u,c=0,f=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(n);function y(t){var n=r,o=a;return r=a=void 0,c=t,s=e.apply(o,n)}function w(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=i}function _(){var e=v();if(w(e))return S(e);l=setTimeout(_,function(e){var n=t-(e-u);return d?m(n,i-(e-c)):n}(e))}function S(e){return l=void 0,p&&r?y(e):(r=a=void 0,s)}function P(){var e=v(),n=w(e);if(r=arguments,a=this,u=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(_,t),f?y(e):s}(u);if(d)return l=setTimeout(_,t),y(u)}return void 0===l&&(l=setTimeout(_,t)),s}return t=b(t)||0,g(o)&&(f=!!o.leading,i=(d="maxWait"in o)?h(b(o.maxWait)||0,t):i,p="trailing"in o?!!o.trailing:p),P.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=u=a=l=void 0},P.flush=function(){return void 0===l?s:S(v())},P}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==r}(e))return o;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=s.test(e);return n||l.test(e)?u(e.slice(2),n?2:8):i.test(e)?o:+e}e.exports=function(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(n);return g(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),y(e,t,{leading:r,maxWait:t,trailing:a})}}).call(this,n("yLpj"))},oqc9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Helpers=t.ScrollElement=t.ScrollLink=t.animateScroll=t.scrollSpy=t.Events=t.scroller=t.Element=t.Button=t.Link=void 0;var o=p(n("PGca")),r=p(n("7wkA")),a=p(n("Y30y")),i=p(n("zPnG")),s=p(n("QQPg")),l=p(n("wT0s")),u=p(n("NEP4")),c=p(n("pUFB")),f=p(n("w2Tm")),d=p(n("7FV1"));function p(e){return e&&e.__esModule?e:{default:e}}t.Link=o.default,t.Button=r.default,t.Element=a.default,t.scroller=i.default,t.Events=s.default,t.scrollSpy=l.default,t.animateScroll=u.default,t.ScrollLink=c.default,t.ScrollElement=f.default,t.Helpers=d.default,t.default={Link:o.default,Button:r.default,Element:a.default,scroller:i.default,Events:s.default,scrollSpy:l.default,animateScroll:u.default,ScrollLink:c.default,ScrollElement:f.default,Helpers:d.default}},pUFB:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=c(n("q1tI")),i=c(n("wT0s")),s=c(n("zPnG")),l=c(n("17x9")),u=c(n("Dy/p"));function c(e){return e&&e.__esModule?e:{default:e}}var f={to:l.default.string.isRequired,containerId:l.default.string,container:l.default.object,activeClass:l.default.string,spy:l.default.bool,smooth:l.default.oneOfType([l.default.bool,l.default.string]),offset:l.default.number,delay:l.default.number,isDynamic:l.default.bool,onClick:l.default.func,duration:l.default.oneOfType([l.default.number,l.default.func]),absolute:l.default.bool,onSetActive:l.default.func,onSetInactive:l.default.func,ignoreCancelEvents:l.default.bool,hashSpy:l.default.bool};t.default=function(e,t){var n=t||s.default,l=function(t){function s(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e));return c.call(t),t.state={active:!1},t}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(s,a.default.PureComponent),r(s,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e&&!t?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();i.default.isMounted(e)||i.default.mount(e),this.props.hashSpy&&(u.default.isMounted()||u.default.mount(n),u.default.mapContainer(this.props.to,e)),i.default.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){i.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=o({},this.props);for(var r in f)n.hasOwnProperty(r)&&delete n[r];return n.className=t,n.onClick=this.handleClick,a.default.createElement(e,n)}}]),s}(),c=function(){var e=this;this.scrollTo=function(t,r){n.scrollTo(t,o({},e.state,r))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.spyHandler=function(t){var o=e.getScrollSpyContainer();if(!u.default.isMounted()||u.default.isInitialized()){var r=e.props.to,a=null,i=0,s=0,l=0;if(o.getBoundingClientRect)l=o.getBoundingClientRect().top;if(!a||e.props.isDynamic){if(!(a=n.get(r)))return;var c=a.getBoundingClientRect();s=(i=c.top-l+t)+c.height}var f=t-e.props.offset,d=f>=Math.floor(i)&&f<Math.floor(s),p=f<Math.floor(i)||f>=Math.floor(s),h=n.getActiveLink();p&&(r===h&&n.setActiveLink(void 0),e.props.hashSpy&&u.default.getHash()===r&&u.default.changeHash(),e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive(r,a))),!d||h===r&&!1!==e.state.active||(n.setActiveLink(r),e.props.hashSpy&&u.default.changeHash(r),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(r,a)))}}};return l.propTypes=f,l.defaultProps={offset:0},l}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("RNiq");return{page:e.default||e}}])},w2Tm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=l(n("q1tI")),i=(l(n("i8i4")),l(n("zPnG"))),s=l(n("17x9"));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,a.default.Component),r(n,[{key:"componentDidMount",value:function(){if("undefined"===typeof window)return!1;this.registerElems(this.props.name)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.props.name!==e.name&&this.registerElems(e.name)}},{key:"componentWillUnmount",value:function(){if("undefined"===typeof window)return!1;i.default.unregister(this.props.name)}},{key:"registerElems",value:function(e){i.default.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return a.default.createElement(e,o({},this.props,{parentBindings:this.childBindings}))}}]),n}();return t.propTypes={name:s.default.string,id:s.default.string},t}},wT0s:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n("hKI/"),a=(o=r)&&o.__esModule?o:{default:o},i=n("QLqi");var s={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e){if(e){var t=function(e){return(0,a.default)(e,66)}(function(t){s.scrollHandler(e)});s.scrollSpyContainers.push(e),(0,i.addPassiveEventListener)(e,"scroll",t)}},isMounted:function(e){return-1!==s.scrollSpyContainers.indexOf(e)},currentPositionY:function(e){if(e===document){var t=void 0!==window.pageXOffset,n="CSS1Compat"===(document.compatMode||"");return t?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop}return e.scrollTop},scrollHandler:function(e){(s.scrollSpyContainers[s.scrollSpyContainers.indexOf(e)].spyCallbacks||[]).forEach(function(t){return t(s.currentPositionY(e))})},addStateHandler:function(e){s.spySetState.push(e)},addSpyHandler:function(e,t){var n=s.scrollSpyContainers[s.scrollSpyContainers.indexOf(t)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(e),e(s.currentPositionY(t))},updateStates:function(){s.spySetState.forEach(function(e){return e()})},unmount:function(e,t){s.scrollSpyContainers.forEach(function(e){return e.spyCallbacks&&e.spyCallbacks.length&&e.spyCallbacks.splice(e.spyCallbacks.indexOf(t),1)}),s.spySetState&&s.spySetState.length&&s.spySetState.splice(s.spySetState.indexOf(e),1),document.removeEventListener("scroll",s.scrollHandler)},update:function(){return s.scrollSpyContainers.forEach(function(e){return s.scrollHandler(e)})}};t.default=s},xFC4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={pushHash:function(e){if(e=e?0===e.indexOf("#")?e:"#"+e:"",history.pushState){var t=window.location;history.pushState(null,null,e?t.pathname+t.search+e:t.pathname+t.search)}else location.hash=e},getHash:function(){return window.location.hash.replace(/^#/,"")},filterElementInContainer:function(e){return function(t){return e.contains?e!=t&&e.contains(t):!!(16&e.compareDocumentPosition(t))}},scrollOffset:function(e,t){return e===document?t.getBoundingClientRect().top+(window.scrollY||window.pageYOffset):"static"!==getComputedStyle(e).position?t.offsetTop:t.getBoundingClientRect().top+e.scrollTop}}},zPnG:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=s(n("xFC4")),a=s(n("NEP4")),i=s(n("QQPg"));function s(e){return e&&e.__esModule?e:{default:e}}var l={},u=void 0;t.default={unmount:function(){l={}},register:function(e,t){l[e]=t},unregister:function(e){delete l[e]},get:function(e){return l[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return u=e},getActiveLink:function(){return u},scrollTo:function(e,t){var n=this.get(e);if(n){var s=(t=o({},t,{absolute:!1})).containerId,l=t.container,u=void 0;u=s?document.getElementById(s):l&&l.nodeType?l:document,t.absolute=!0;var c=r.default.scrollOffset(u,n)+(t.offset||0);if(!t.smooth)return i.default.registered.begin&&i.default.registered.begin(e,n),u===document?window.scrollTo(0,c):u.scrollTop=c,void(i.default.registered.end&&i.default.registered.end(e,n));a.default.animateTopScroll(c,t,e,n)}else console.warn("target Element not found")}}}},[["vlRD",1,0,2]]]);