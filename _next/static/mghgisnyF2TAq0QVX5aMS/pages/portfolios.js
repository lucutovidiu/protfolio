(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+l58":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolios",function(){var e=r("4WGo");return{page:e.default||e}}])},"1hnV":function(e,t,r){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function s(e){try{u(n.next(e))}catch(t){i(t)}}function a(e){try{u(n.throw(e))}catch(t){i(t)}}function u(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(s,a)}u((n=n.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=n[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(a){i=[6,a],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},s=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0});var a=r("yym1"),u=r("yym1");t.ClientError=u.ClientError,r("cnSC");var c=function(){function e(e,t){this.url=e,this.options=t||{}}return e.prototype.rawRequest=function(e,t){return o(this,void 0,void 0,function(){var r,o,u,c,l,h,d,p,y;return i(this,function(i){switch(i.label){case 0:return r=this.options,o=r.headers,u=s(r,["headers"]),c=JSON.stringify({query:e,variables:t||void 0}),[4,fetch(this.url,n({method:"POST",headers:Object.assign({"Content-Type":"application/json"},o),body:c},u))];case 1:return[4,f(l=i.sent())];case 2:if(h=i.sent(),l.ok&&!h.errors&&h.data)return d=l.headers,p=l.status,[2,n({},h,{headers:d,status:p})];throw y="string"===typeof h?{error:h}:h,new a.ClientError(n({},y,{status:l.status,headers:l.headers}),{query:e,variables:t})}})})},e.prototype.request=function(e,t){return o(this,void 0,void 0,function(){var r,o,u,c,l,h,d;return i(this,function(i){switch(i.label){case 0:return r=this.options,o=r.headers,u=s(r,["headers"]),c=JSON.stringify({query:e,variables:t||void 0}),[4,fetch(this.url,n({method:"POST",headers:Object.assign({"Content-Type":"application/json"},o),body:c},u))];case 1:return[4,f(l=i.sent())];case 2:if(h=i.sent(),l.ok&&!h.errors&&h.data)return[2,h.data];throw d="string"===typeof h?{error:h}:h,new a.ClientError(n({},d,{status:l.status}),{query:e,variables:t})}})})},e.prototype.setHeaders=function(e){return this.options.headers=e,this},e.prototype.setHeader=function(e,t){var r,n=this.options.headers;return n?n[e]=t:this.options.headers=((r={})[e]=t,r),this},e}();function l(e,t,r){return o(this,void 0,void 0,function(){return i(this,function(n){return[2,new c(e).request(t,r)]})})}function f(e){return o(this,void 0,void 0,function(){var t;return i(this,function(r){return(t=e.headers.get("Content-Type"))&&t.startsWith("application/json")?[2,e.json()]:[2,e.text()]})})}t.GraphQLClient=c,t.rawRequest=function(e,t,r){return o(this,void 0,void 0,function(){return i(this,function(n){return[2,new c(e).rawRequest(t,r)]})})},t.request=l,t.default=l},"3niX":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flush=function(){var e=l.cssRules();return l.flush(),e},t.default=void 0;var n,o=r("q1tI");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),f=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=a(this,u(t).call(this,e))).prevProps={},r}var r,n,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o.Component),r=t,i=[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],r=e[1];return l.computeId(t,r)}).join(" ")}}],(n=[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){l.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&l.remove(this.prevProps),l.add(this.props),this.prevProps=this.props),null}}])&&s(r.prototype,n),i&&s(r,i),t}();t.default=f},"4WGo":function(e,t,r){"use strict";r.r(t);var n=r("doui"),o=r("MX0m"),i=r.n(o),s=r("q1tI"),a=r.n(s),u=(r("gsT+"),r("ds/u")),c=r("mLQA"),l=r("YFqc"),f=r.n(l),h=r("wrDA"),d=a.a.createElement,p=function(e){var t=e.portfolio,r=e.auth,n=e.ReRender;return d("div",{className:"portfolio_landing_page_wrapper mt-4"},d("div",{className:"portfolio_landing_page_card"},d("img",{className:"portfolio_landing_page_card_img",src:"../../static/img/portofios_img/comenzi_magazine_app.JPG"}),d("div",{className:"portfolio_landing_page_card_details"},d("div",{className:"portfolio_landing_page_card_details_title"},d("h5",{style:{margin:"-0.4rem",fontFamily:"Hand Writing",fontSize:"2.5rem"},className:""},t.title)),d("div",{className:"portfolio_landing_page_card_details_minidescription"},d("ul",null,d("li",null,d("span",{style:{fontWeight:"bold"}},"Short Description: "),t.shortDescription),d("li",null,d("span",{style:{fontWeight:"bold"}},"Tech Used: \xa0"),t.technologiesUsed))),d("div",{className:"portfolio_landing_page_card_details_moreinfobtn"},d("a",{target:"_blank",href:"/portfolio/"+t.id},d(c.a,{variant:"primary"},"More Info")),"FOUND"===r.isAuthorized.checkResult&&"admin"===r.isAuthorized.role&&d(a.a.Fragment,null,d(f.a,{href:"/portfolio/"+t.id},d(c.a,{variant:"secondary"},"Edit")),d(c.a,{onClick:function(){var e='mutation{\n          RemovePortfolio(portfolioID: "'.concat(t.id,'")\n          }'),o={Authorization:r.isAuthorized.jwt};Object(h.b)(e,o).then(function(e){e&&n(t.id)}).catch(function(e){console.log(e)})},variant:"danger"},"Delete"))))))},y=r("cv0R"),m=r("gJOP"),v=r("zrwo");var b=a.a.createElement;t.default=function(e){var t=Object(y.a)(),r=function(){var e=a.a.useState(null),t=Object(n.a)(e,2),r=t[0],o=t[1],i=a.a.useState(!1),s=Object(n.a)(i,2),u=s[0],c=s[1];return u||(c(!0),Object(h.b)("{\n      GetPortfolios{\n       id\n       title\n       shortDescription\n       technologiesUsed\n      }\n      }").then(function(e){o(Object(v.a)({},e))}).catch(function(e){console.log(e)})),{data:r}}(),o=a.a.useState(null),s=Object(n.a)(o,2),c=s[0],l=s[1];function f(e){l({GetPortfolios:c.GetPortfolios.filter(function(t){return t.id!==e})})}return a.a.useEffect(function(){null!==r&&null===c&&l(r.data)},[r]),b(u.a,{tab:"Protfolios"},b("div",{className:"jsx-3088721398 main_wrapper_port m-0 p-0"},b("div",{className:"jsx-3088721398 portfolios_title"},b("h1",{className:"jsx-3088721398"},"My Portfolios")),b("div",{className:"jsx-3088721398 portfolios_card_wrapper mb-0 p-3"},null!==c&&c.GetPortfolios.map(function(e,r){return b(p,{auth:t,key:r,portfolio:e,ReRender:f})}),null===c&&b(m.a,{animation:"border",role:"status"},b("span",{className:"jsx-3088721398 sr-only"},"Loading...")))),b(i.a,{id:"3088721398"},[".main_wrapper_port.jsx-3088721398{position:relative;min-height:100vh;background-color:#e9ecef;}",'.portfolios_title.jsx-3088721398{padding:80px 0 0 0;text-shadow:1px 2px 10px rgb(143,142,142);font-family:"Mina";text-align:center;}']))}},"4mXO":function(e,t,r){e.exports=r("7TPF")},"7TPF":function(e,t,r){r("AUvm"),e.exports=r("WEpk").Object.getOwnPropertySymbols},"8oxB":function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"===typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var u,c=[],l=!1,f=-1;function h(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&d())}function d(){if(!l){var e=a(h);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||l||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},MX0m:function(e,t,r){e.exports=r("3niX")},SevZ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r("9kyW")),o=i(r("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.styleSheet,n=void 0===r?null:r,i=t.optimizeForSpeed,s=void 0!==i&&i,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=n||new o.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t,r,i;return t=e,(r=[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),n=r.styleId,o=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var i=o.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[n]=i,this._instancesCounts[n]=1}}},{key:"remove",value:function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: ".concat(t,"."))}(r in this._instancesCounts,"styleId: `".concat(r,"` not found")),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,r){if(!r)return"jsx-".concat(t);var o=String(r),i=t+o;return e[i]||(e[i]="jsx-".concat((0,n.default)("".concat(t,"-").concat(o)))),e[i]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var o=r+n;return t[o]||(t[o]=n.replace(e,r)),t[o]}}},{key:"getIdAndRules",value:function(e){var t=this,r=e.children,n=e.dynamic,o=e.id;if(n){var i=this.computeId(o,n);return{styleId:i,rules:Array.isArray(r)?r.map(function(e){return t.computeSelector(i,e)}):[this.computeSelector(i,r)]}}return{styleId:this.computeId(o),rules:Array.isArray(r)?r:[r]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}])&&s(t.prototype,r),i&&s(t,i),e}();t.default=a},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.name,i=void 0===r?"stylesheet":r,a=t.optimizeForSpeed,u=void 0===a?n:a,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#".concat(i,"-deleted-rule____{}"),s("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,i,a;return t=e,(i=[{key:"setOptimizeForSpeed",value:function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(s(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(a){return n||console.warn("StyleSheet: illegal rule: \n\n".concat(e,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(i){n||console.warn("StyleSheet: illegal rule: \n\n".concat(t,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),r.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];s(o,"old rule at index `".concat(e,"` not found")),o.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `".concat(e,"` not found")),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,r){return r?t=t.concat(e.getSheetForTag(r).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,r){t&&s(o(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-".concat(e),""),t&&n.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return r?i.insertBefore(n,r):i.appendChild(n),n}},{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,i),a&&r(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: ".concat(t,"."))}t.default=i}).call(this,r("8oxB"))},cnSC:function(e,t){!function(e){if(!e.fetch){var t={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(t.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=function(e){return e&&DataView.prototype.isPrototypeOf(e)},o=ArrayBuffer.isView||function(e){return e&&r.indexOf(Object.prototype.toString.call(e))>-1};l.prototype.append=function(e,t){e=a(e),t=u(t);var r=this.map[e];this.map[e]=r?r+","+t:t},l.prototype.delete=function(e){delete this.map[a(e)]},l.prototype.get=function(e){return e=a(e),this.has(e)?this.map[e]:null},l.prototype.has=function(e){return this.map.hasOwnProperty(a(e))},l.prototype.set=function(e,t){this.map[a(e)]=u(t)},l.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},l.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),c(e)},l.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),c(e)},l.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),c(e)},t.iterable&&(l.prototype[Symbol.iterator]=l.prototype.entries);var i=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},y.call(m.prototype),y.call(_.prototype),_.prototype.clone=function(){return new _(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},_.error=function(){var e=new _(null,{status:0,statusText:""});return e.type="error",e};var s=[301,302,303,307,308];_.redirect=function(e,t){if(-1===s.indexOf(t))throw new RangeError("Invalid status code");return new _(null,{status:t,headers:{location:e}})},e.Headers=l,e.Request=m,e.Response=_,e.fetch=function(e,r){return new Promise(function(n,o){var i=new m(e,r),s=new XMLHttpRequest;s.onload=function(){var e={status:s.status,statusText:s.statusText,headers:b(s.getAllResponseHeaders()||"")};e.url="responseURL"in s?s.responseURL:e.headers.get("X-Request-URL");var t="response"in s?s.response:s.responseText;n(new _(t,e))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.open(i.method,i.url,!0),"include"===i.credentials?s.withCredentials=!0:"omit"===i.credentials&&(s.withCredentials=!1),"responseType"in s&&t.blob&&(s.responseType="blob"),i.headers.forEach(function(e,t){s.setRequestHeader(t,e)}),s.send("undefined"===typeof i._bodyInit?null:i._bodyInit)})},e.fetch.polyfill=!0}function a(e){if("string"!==typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function u(e){return"string"!==typeof e&&(e=String(e)),e}function c(e){var r={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t.iterable&&(r[Symbol.iterator]=function(){return r}),r}function l(e){this.map={},e instanceof l?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function f(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function h(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function d(e){var t=new FileReader,r=h(t);return t.readAsArrayBuffer(e),r}function p(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"===typeof e)this._bodyText=e;else if(t.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(t.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(t.arrayBuffer&&t.blob&&n(e))this._bodyArrayBuffer=p(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!t.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!o(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=p(e)}else this._bodyText="";this.headers.get("content-type")||("string"===typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},t.blob&&(this.blob=function(){var e=f(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(d)}),this.text=function(){var e=f(this);if(e)return e;if(this._bodyBlob)return function(e){var t=new FileReader,r=h(t);return t.readAsText(e),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},t.formData&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}function m(e,t){var r=(t=t||{}).body;if(e instanceof m){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new l(e.headers)),this.method=e.method,this.mode=e.mode,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new l(t.headers)),this.method=function(e){var t=e.toUpperCase();return i.indexOf(t)>-1?t:e}(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function v(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function b(e){var t=new l;return e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}}),t}function _(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new l(t.headers),this.url=t.url||"",this._initBody(e)}}("undefined"!==typeof self?self:this)},cv0R:function(e,t,r){"use strict";var n=r("zrwo"),o=r("doui"),i=r("q1tI"),s=r.n(i),a=r("/MKj"),u=r("wrDA");t.a=function(){var e=Object(a.d)(function(e){return e}),t=s.a.useState({isAuthorized:{checkingInProgress:!0,checkResult:"NOT_CHECKED"}}),r=Object(o.a)(t,2),i=r[0],c=r[1];return i.isAuthorized.checkingInProgress&&function(){var t=Object(n.a)({},e);""!==t.jwt?Object(u.a)(t.jwt).then(function(e){JSON.parse(e).isAuthorized.userEmail?c({isAuthorized:{checkingInProgress:!1,checkResult:"FOUND",role:t.role,jwt:t.jwt}}):c({isAuthorized:{checkingInProgress:!1,checkResult:"NOT_FOUND"}})}):c({isAuthorized:{checkingInProgress:!1,checkResult:"NOT_FOUND"}})}(),i}},doui:function(e,t,r){"use strict";var n=r("p0XB"),o=r.n(n);var i=r("XXOK"),s=r.n(i);function a(e,t){return function(e){if(o()(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=s()(e);!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.d(t,"a",function(){return a})},gJOP:function(e,t,r){"use strict";var n=r("wx14"),o=r("zLVn"),i=r("TSYQ"),s=r.n(i),a=r("q1tI"),u=r.n(a),c=r("yTlV"),l=u.a.forwardRef(function(e,t){var r=e.bsPrefix,i=e.variant,a=e.animation,l=e.size,f=e.children,h=e.as,d=void 0===h?"div":h,p=e.className,y=Object(o.a)(e,["bsPrefix","variant","animation","size","children","as","className"]),m=(r=Object(c.b)(r,"spinner"))+"-"+a;return u.a.createElement(d,Object(n.a)({ref:t},y,{className:s()(p,m,l&&m+"-"+l,i&&"text-"+i)}),f)});l.displayName="Spinner",t.a=l},mLQA:function(e,t,r){"use strict";var n=r("wx14"),o=r("zLVn"),i=r("TSYQ"),s=r.n(i),a=r("q1tI"),u=r.n(a),c=r("yTlV");var l=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(function(e){return null!=e}).reduce(function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];e.apply(this,n),t.apply(this,n)}},null)};function f(e){return!e||"#"===e.trim()}var h=u.a.forwardRef(function(e,t){var r=e.as,i=void 0===r?"a":r,s=e.disabled,a=e.onKeyDown,c=Object(o.a)(e,["as","disabled","onKeyDown"]),h=function(e){var t=c.href,r=c.onClick;(s||f(t))&&e.preventDefault(),s?e.stopPropagation():r&&r(e)};return f(c.href)&&(c.role=c.role||"button",c.href=c.href||"#"),s&&(c.tabIndex=-1,c["aria-disabled"]=!0),u.a.createElement(i,Object(n.a)({ref:t},c,{onClick:h,onKeyDown:l(function(e){" "===e.key&&(e.preventDefault(),h(e))},a)}))});h.displayName="SafeAnchor";var d=h,p=u.a.forwardRef(function(e,t){var r=e.bsPrefix,i=e.variant,a=e.size,l=e.active,f=e.className,h=e.block,p=e.type,y=e.as,m=Object(o.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),v=Object(c.b)(r,"btn"),b=s()(f,v,l&&"active",v+"-"+i,h&&v+"-block",a&&v+"-"+a);if(m.href)return u.a.createElement(d,Object(n.a)({},m,{as:y,ref:t,className:s()(b,m.disabled&&"disabled")}));t&&(m.ref=t),y||(m.type=p);var _=y||"button";return u.a.createElement(_,Object(n.a)({},m,{className:b}))});p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};t.a=p},wrDA:function(e,t,r){"use strict";r.d(t,"b",function(){return h}),r.d(t,"a",function(){return d});var n=r("9Jkg"),o=r.n(n),i=r("ln6h"),s=r.n(i),a=r("O40h"),u=r("1hnV"),c=r("zgjP"),l=r.n(c),f=new u.GraphQLClient("http://localhost:3000/api/graphql"),h=function(){var e=Object(a.a)(s.a.mark(function e(t){var r,n=arguments;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=n.length>1&&void 0!==n[1]?n[1]:null)){e.next=6;break}return f.setHeaders(r),e.abrupt("return",f.request(t));case 6:return e.abrupt("return",f.request(t));case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"/api/CheckIfAuthenticated",e.abrupt("return",l()("/api/CheckIfAuthenticated",{method:"POST",headers:{"Content-Type":"application/json"},body:o()({jwtToken:t})}).then(function(e){return e.json()}));case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},yym1:function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(r,n){var o=this,i=t.extractMessage(r)+": "+JSON.stringify({response:r,request:n});return(o=e.call(this,i)||this).response=r,o.request=n,"function"===typeof Error.captureStackTrace&&Error.captureStackTrace(o,t),o}return n(t,e),t.extractMessage=function(e){try{return e.errors[0].message}catch(t){return"GraphQL Error (Code: "+e.status+")"}},t}(Error);t.ClientError=o},zrwo:function(e,t,r){"use strict";var n=r("Jo+v"),o=r.n(n),i=r("4mXO"),s=r.n(i),a=r("pLtp"),u=r.n(a),c=r("hfKm"),l=r.n(c);function f(e,t,r){return t in e?l()(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=u()(r);"function"===typeof s.a&&(n=n.concat(s()(r).filter(function(e){return o()(r,e).enumerable}))),n.forEach(function(t){f(e,t,r[t])})}return e}r.d(t,"a",function(){return h})}},[["+l58",1,0,2]]]);