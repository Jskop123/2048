!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=11)}([function(n,t,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},c=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),a=[];function i(n){for(var t=-1,e=0;e<a.length;e++)if(a[e].identifier===n){t=e;break}return t}function u(n,t){for(var e={},r=[],o=0;o<n.length;o++){var c=n[o],u=t.base?c[0]+t.base:c[0],f=e[u]||0,s="".concat(u," ").concat(f);e[u]=f+1;var l=i(s),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(a[l].references++,a[l].updater(d)):a.push({identifier:s,updater:h(d,t),references:1}),r.push(s)}return r}function f(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var a=c(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,l=(s=[],function(n,t){return s[n]=t,s.filter(Boolean).join("\n")});function d(n,t,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(t,o);else{var c=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(c,a[t]):n.appendChild(c)}}function p(n,t,e){var r=e.css,o=e.media,c=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),c&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var b=null,v=0;function h(n,t){var e,r,o;if(t.singleton){var c=v++;e=b||(b=f(t)),r=d.bind(null,e,c,!1),o=d.bind(null,e,c,!0)}else e=f(t),r=p.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var e=u(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<e.length;r++){var o=i(e[r]);a[o].references--}for(var c=u(n,t),f=0;f<e.length;f++){var s=i(e[f]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}e=c}}}},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(a=r,i=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(u," */")),c=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[e].concat(c).concat([o]).join("\n")}var a,i,u;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(o[a]=!0)}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);r&&o[u[0]]||(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),t.push(u))}},t}},function(n,t,e){(function(n,e){var r="[object Arguments]",o="[object Function]",c="[object GeneratorFunction]",a="[object Map]",i="[object Set]",u=/\w*$/,f=/^\[object .+?Constructor\]$/,s=/^(?:0|[1-9]\d*)$/,l={};l[r]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[a]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[i]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[o]=l["[object WeakMap]"]=!1;var d="object"==typeof n&&n&&n.Object===Object&&n,p="object"==typeof self&&self&&self.Object===Object&&self,b=d||p||Function("return this")(),v=t&&!t.nodeType&&t,h=v&&"object"==typeof e&&e&&!e.nodeType&&e,y=h&&h.exports===v;function g(n,t){return n.set(t[0],t[1]),n}function m(n,t){return n.add(t),n}function _(n,t,e,r){var o=-1,c=n?n.length:0;for(r&&c&&(e=n[++o]);++o<c;)e=t(e,n[o],o,n);return e}function j(n){var t=!1;if(null!=n&&"function"!=typeof n.toString)try{t=!!(n+"")}catch(n){}return t}function w(n){var t=-1,e=Array(n.size);return n.forEach((function(n,r){e[++t]=[r,n]})),e}function x(n,t){return function(e){return n(t(e))}}function F(n){var t=-1,e=Array(n.size);return n.forEach((function(n){e[++t]=n})),e}var A,O=Array.prototype,S=Function.prototype,E=Object.prototype,k=b["__core-js_shared__"],C=(A=/[^.]+$/.exec(k&&k.keys&&k.keys.IE_PROTO||""))?"Symbol(src)_1."+A:"",M=S.toString,T=E.hasOwnProperty,B=E.toString,D=RegExp("^"+M.call(T).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),L=y?b.Buffer:void 0,I=b.Symbol,P=b.Uint8Array,U=x(Object.getPrototypeOf,Object),z=Object.create,N=E.propertyIsEnumerable,R=O.splice,$=Object.getOwnPropertySymbols,q=L?L.isBuffer:void 0,H=x(Object.keys,Object),V=yn(b,"DataView"),G=yn(b,"Map"),J=yn(b,"Promise"),W=yn(b,"Set"),K=yn(b,"WeakMap"),Q=yn(Object,"create"),X=wn(V),Y=wn(G),Z=wn(J),nn=wn(W),tn=wn(K),en=I?I.prototype:void 0,rn=en?en.valueOf:void 0;function on(n){var t=-1,e=n?n.length:0;for(this.clear();++t<e;){var r=n[t];this.set(r[0],r[1])}}function cn(n){var t=-1,e=n?n.length:0;for(this.clear();++t<e;){var r=n[t];this.set(r[0],r[1])}}function an(n){var t=-1,e=n?n.length:0;for(this.clear();++t<e;){var r=n[t];this.set(r[0],r[1])}}function un(n){this.__data__=new cn(n)}function fn(n,t){var e=Fn(n)||function(n){return function(n){return function(n){return!!n&&"object"==typeof n}(n)&&An(n)}(n)&&T.call(n,"callee")&&(!N.call(n,"callee")||B.call(n)==r)}(n)?function(n,t){for(var e=-1,r=Array(n);++e<n;)r[e]=t(e);return r}(n.length,String):[],o=e.length,c=!!o;for(var a in n)!t&&!T.call(n,a)||c&&("length"==a||_n(a,o))||e.push(a);return e}function sn(n,t,e){var r=n[t];T.call(n,t)&&xn(r,e)&&(void 0!==e||t in n)||(n[t]=e)}function ln(n,t){for(var e=n.length;e--;)if(xn(n[e][0],t))return e;return-1}function dn(n,t,e,f,s,d,p){var b;if(f&&(b=d?f(n,s,d,p):f(n)),void 0!==b)return b;if(!En(n))return n;var v=Fn(n);if(v){if(b=function(n){var t=n.length,e=n.constructor(t);t&&"string"==typeof n[0]&&T.call(n,"index")&&(e.index=n.index,e.input=n.input);return e}(n),!t)return function(n,t){var e=-1,r=n.length;t||(t=Array(r));for(;++e<r;)t[e]=n[e];return t}(n,b)}else{var h=mn(n),y=h==o||h==c;if(On(n))return function(n,t){if(t)return n.slice();var e=new n.constructor(n.length);return n.copy(e),e}(n,t);if("[object Object]"==h||h==r||y&&!d){if(j(n))return d?n:{};if(b=function(n){return"function"!=typeof n.constructor||jn(n)?{}:(t=U(n),En(t)?z(t):{});var t}(y?{}:n),!t)return function(n,t){return vn(n,gn(n),t)}(n,function(n,t){return n&&vn(t,kn(t),n)}(b,n))}else{if(!l[h])return d?n:{};b=function(n,t,e,r){var o=n.constructor;switch(t){case"[object ArrayBuffer]":return bn(n);case"[object Boolean]":case"[object Date]":return new o(+n);case"[object DataView]":return function(n,t){var e=t?bn(n.buffer):n.buffer;return new n.constructor(e,n.byteOffset,n.byteLength)}(n,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(n,t){var e=t?bn(n.buffer):n.buffer;return new n.constructor(e,n.byteOffset,n.length)}(n,r);case a:return function(n,t,e){return _(t?e(w(n),!0):w(n),g,new n.constructor)}(n,r,e);case"[object Number]":case"[object String]":return new o(n);case"[object RegExp]":return function(n){var t=new n.constructor(n.source,u.exec(n));return t.lastIndex=n.lastIndex,t}(n);case i:return function(n,t,e){return _(t?e(F(n),!0):F(n),m,new n.constructor)}(n,r,e);case"[object Symbol]":return c=n,rn?Object(rn.call(c)):{}}var c}(n,h,dn,t)}}p||(p=new un);var x=p.get(n);if(x)return x;if(p.set(n,b),!v)var A=e?function(n){return function(n,t,e){var r=t(n);return Fn(n)?r:function(n,t){for(var e=-1,r=t.length,o=n.length;++e<r;)n[o+e]=t[e];return n}(r,e(n))}(n,kn,gn)}(n):kn(n);return function(n,t){for(var e=-1,r=n?n.length:0;++e<r&&!1!==t(n[e],e,n););}(A||n,(function(r,o){A&&(r=n[o=r]),sn(b,o,dn(r,t,e,f,o,n,p))})),b}function pn(n){return!(!En(n)||(t=n,C&&C in t))&&(Sn(n)||j(n)?D:f).test(wn(n));var t}function bn(n){var t=new n.constructor(n.byteLength);return new P(t).set(new P(n)),t}function vn(n,t,e,r){e||(e={});for(var o=-1,c=t.length;++o<c;){var a=t[o],i=r?r(e[a],n[a],a,e,n):void 0;sn(e,a,void 0===i?n[a]:i)}return e}function hn(n,t){var e,r,o=n.__data__;return("string"==(r=typeof(e=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e)?o["string"==typeof t?"string":"hash"]:o.map}function yn(n,t){var e=function(n,t){return null==n?void 0:n[t]}(n,t);return pn(e)?e:void 0}on.prototype.clear=function(){this.__data__=Q?Q(null):{}},on.prototype.delete=function(n){return this.has(n)&&delete this.__data__[n]},on.prototype.get=function(n){var t=this.__data__;if(Q){var e=t[n];return"__lodash_hash_undefined__"===e?void 0:e}return T.call(t,n)?t[n]:void 0},on.prototype.has=function(n){var t=this.__data__;return Q?void 0!==t[n]:T.call(t,n)},on.prototype.set=function(n,t){return this.__data__[n]=Q&&void 0===t?"__lodash_hash_undefined__":t,this},cn.prototype.clear=function(){this.__data__=[]},cn.prototype.delete=function(n){var t=this.__data__,e=ln(t,n);return!(e<0)&&(e==t.length-1?t.pop():R.call(t,e,1),!0)},cn.prototype.get=function(n){var t=this.__data__,e=ln(t,n);return e<0?void 0:t[e][1]},cn.prototype.has=function(n){return ln(this.__data__,n)>-1},cn.prototype.set=function(n,t){var e=this.__data__,r=ln(e,n);return r<0?e.push([n,t]):e[r][1]=t,this},an.prototype.clear=function(){this.__data__={hash:new on,map:new(G||cn),string:new on}},an.prototype.delete=function(n){return hn(this,n).delete(n)},an.prototype.get=function(n){return hn(this,n).get(n)},an.prototype.has=function(n){return hn(this,n).has(n)},an.prototype.set=function(n,t){return hn(this,n).set(n,t),this},un.prototype.clear=function(){this.__data__=new cn},un.prototype.delete=function(n){return this.__data__.delete(n)},un.prototype.get=function(n){return this.__data__.get(n)},un.prototype.has=function(n){return this.__data__.has(n)},un.prototype.set=function(n,t){var e=this.__data__;if(e instanceof cn){var r=e.__data__;if(!G||r.length<199)return r.push([n,t]),this;e=this.__data__=new an(r)}return e.set(n,t),this};var gn=$?x($,Object):function(){return[]},mn=function(n){return B.call(n)};function _n(n,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof n||s.test(n))&&n>-1&&n%1==0&&n<t}function jn(n){var t=n&&n.constructor;return n===("function"==typeof t&&t.prototype||E)}function wn(n){if(null!=n){try{return M.call(n)}catch(n){}try{return n+""}catch(n){}}return""}function xn(n,t){return n===t||n!=n&&t!=t}(V&&"[object DataView]"!=mn(new V(new ArrayBuffer(1)))||G&&mn(new G)!=a||J&&"[object Promise]"!=mn(J.resolve())||W&&mn(new W)!=i||K&&"[object WeakMap]"!=mn(new K))&&(mn=function(n){var t=B.call(n),e="[object Object]"==t?n.constructor:void 0,r=e?wn(e):void 0;if(r)switch(r){case X:return"[object DataView]";case Y:return a;case Z:return"[object Promise]";case nn:return i;case tn:return"[object WeakMap]"}return t});var Fn=Array.isArray;function An(n){return null!=n&&function(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=9007199254740991}(n.length)&&!Sn(n)}var On=q||function(){return!1};function Sn(n){var t=En(n)?B.call(n):"";return t==o||t==c}function En(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function kn(n){return An(n)?fn(n):function(n){if(!jn(n))return H(n);var t=[];for(var e in Object(n))T.call(n,e)&&"constructor"!=e&&t.push(e);return t}(n)}e.exports=function(n){return dn(n,!0,!0)}}).call(this,e(3),e(4)(n))},function(n,t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(n){"object"==typeof window&&(e=window)}n.exports=e},function(n,t){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},function(n,t,e){var r=e(0),o=e(6);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var c={insert:"head",singleton:!1},a=(r(o,c),o.locals?o.locals:{});n.exports=a},function(n,t,e){(t=e(1)(!1)).push([n.i,"body {\n  font-family: 'Lato', sans-serif;\n  margin: 0;\n  background-color: #FAF8EF;\n  height: 100vh;\n}\n.container {\n  width: 345px;\n  background-color: #CDC1B4;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(4, 80px);\n  margin: auto;\n  border: 5px solid #BBADA0;\n}\n\nheader {\n  width: 100%;\n  display: flex;\n}\n\n#actualScore {\n  background-color: #aaa;\n  text-align: center;\n}\n\n#actualScore h3 {\n  font-size: 16px;\n}\n\n\n#newGame {\n  background-color: #f00;\n  color: #F9F6F2;\n  margin: 1% 4%;\n  border-radius: 2px;\n  border: transparent;\n  padding: 5px 10px;\n  font-weight: 700;\n  font-size: 16px;\n  letter-spacing: .5px;\n}\n\n#newGame:hover {\n  background-color: #f44;\n  color: #F9F8F4;\n  cursor: pointer;\n}",""]),n.exports=t},function(n,t,e){var r=e(0),o=e(8);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var c={insert:"head",singleton:!1},a=(r(o,c),o.locals?o.locals:{});n.exports=a},function(n,t,e){(t=e(1)(!1)).push([n.i,".box {\n  border: 5px solid #BBADA0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2.5em;\n  font-weight: 700;\n}\n.newBox {\n  transition: .5s;\n}\n.box2 {\n  color: #776E65;\n  background-color: #EEE4DA;\n}\n.box4 {\n  color: #776E65;\n  background-color: #EDE0C8;\n}\n.box8 {\n  color: #F9F6F2;\n  background-color: #F2B179;\n}\n.box16 {\n  color: #F9F6F2;\n  background-color: #F59563;\n}\n.box32 {\n  color: #F9F6F2;\n  background-color: #F67C5F;\n}\n.box64 {\n  color: #F9F6F2;\n  background-color: #F65E3B;\n}\n.box128 {\n  color: #F9F6F2;\n  background-color: #EDCF72;\n  font-size: 2em;\n}\n.box256 {\n  color: #F9F6F2;\n  background-color: #EDCC61;\n  font-size: 2em;\n}\n.box512 {\n  color: #F9F6F2;\n  background-color: #EDC850;\n  font-size: 2em;\n}\n.box1024 {\n  color: #F9F6F2;\n  background-color: #EDC53F;\n  font-size: 1.5em;\n}\n.box2048 {\n  color: #F9F6F2;\n  background-color: #EDC22E;\n  font-size: 1.5em;\n}",""]),n.exports=t},function(n,t,e){var r=e(0),o=e(10);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var c={insert:"head",singleton:!1},a=(r(o,c),o.locals?o.locals:{});n.exports=a},function(n,t,e){(t=e(1)(!1)).push([n.i,"#modal {\n  position: fixed; \n  z-index: 1; \n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  overflow: auto; \n  width: 100%;\n  height: 100%;\n}\n\n/* Modal Content/Box */\n#modal-content {\n  background-color: #fefefe;\n  margin: 15% auto; \n  width: 30%; \n  text-align: center;\n}\n\n.open {\n  display: block;\n  transition: .5s;\n}\n.close {\n  display: none;\n}\n\n#close {\n  color: #aaa;\n  font-size: 28px;\n  font-weight: bold;\n  margin-left: 90%;\n}\n\n#close:hover,\n#close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}",""]),n.exports=t},function(n,t,e){"use strict";e.r(t);e(5),e(7),e(9);function r(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=function(n){return r(n).map((function(n){for(var t=0;t<4;t++)n[t]=0}))},c=document.querySelector("#modal"),a=function(){window.setTimeout((function(){return c.classList="open"}),500)};var i=e(2);window.addEventListener("click",(function(n){"modal"!==n.target.id&&"close"!==n.target.id||(c.classList="close")}));var u,f=[[0,0,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],s=i(f),l=function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(u=document.querySelectorAll(".box"))||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(u)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}(),d=function(n){return n.map((function(n){for(var t=0;t<4;t++){var e=n.indexOf(0);e>-1&&n.splice(e,1)}return n}))},p=function(n){return"number"==typeof n},b=0,v=function(n){return n.map((function(n){for(var t=[],e=0;e<4;e++)n[e]===n[e+1]&&0!==n[e]?(p(n[e])&&(t.push(n[e]+=n[e+1]),b+=n[e]),n.splice(n.indexOf(n[e+1]),1)):p(n[e])&&t.push(n[e]);return t}))},h=function(n){return n.map((function(n){n.reverse();for(var t=[],e=0;e<4;e++)n[e]===n[e+1]&&0!==n[e]?(p(n[e])&&(t.push(n[e]+=n[e+1]),b+=n[e]),n.splice(n.indexOf(n[e+1]),1)):p(n[e])&&t.push(n[e]);return t.reverse()}))},y=function(n){var t=n.flat(1);l.forEach((function(n,e){0!==t[e]?n.innerHTML=t[e]:n.innerHTML=""}))};y(s);var g=function(n){return n.map((function(n){for(;n.length<4;)n.push(0);return n}))},m=function(n){return n.map((function(n){for(;n.length<4;)n.unshift(0);return n}))},_=function(n){return n[0].map((function(t,e){return n.map((function(n){return n[e]}))}))},j=function(n){var t=n.map((function(n){for(;n.length<4;)n.push(0);return n}));return _(t)},w=function(n){var t=n.map((function(n){for(;n.length<4;)n.unshift(0);return n}));return _(t)},x=function(n){for(var t=[],e=0;e<4;e++)for(var r=0;r<4;r++)n[e][r]||t.push({row:e,col:r});return t},F=function(n,t,e){(function(n,t){return JSON.stringify(n)==JSON.stringify(t)})(n,t)||function(n,t){var e=Math.floor(Math.random()*n.length),r=n[e].row,o=n[e].col;t[r][o]=2,n.splice(e,1)}(e,t)},A=function(n){var t=!1;return n.forEach((function(n){for(var e=0;e<3;e++)n[e]===n[e+1]&&0!==n[e]&&(t=!0)})),t},O=function(n){var t=!0,e=!0;return n.forEach((function(n){n.includes(0)&&(t=!1)})),function(n){var t=_(n);return!(!A(n)&&!A(t))}(n)&&(e=!1),!(!t||!e)},S=function(n){n.forEach((function(n){var t=1*n.innerText;n.classList="box";for(var e=2;e<4096;e*=2)t===e&&(n.classList+=" box".concat(e))}))},E=document.querySelector("#actualScore h2"),k=document.querySelector("#modal-content h2");S(l),window.addEventListener("keydown",(function(n){if(37===n.keyCode){var t=d(s),e=v(t),r=g(e);s=r,y(r);var o=x(s);F(f,s,o),f=i(s),y(s)}if(39===n.keyCode){var c=d(s),u=h(c),p=m(u);s=p,y(p);var A=x(s);F(f,s,A),f=i(s),y(s)}if(38===n.keyCode){var C=_(s),M=d(C),T=v(M),B=j(T);s=B,y(B);var D=x(s);F(f,s,D),f=i(s),y(s)}if(40===n.keyCode){var L=_(s),I=d(L),P=h(I),U=w(P);s=U,y(U);var z=x(s);F(f,s,z),f=i(s),y(s)}O(f)&&a(),S(l),E.innerText=b,k.innerText=b})),document.querySelector("#newGame").addEventListener("click",(function(){var n=o(f);f=i(n)}));var C=document.querySelector(".container"),M=new Hammer(C);M.get("swipe").set({direction:Hammer.DIRECTION_ALL}),M.on("swipe",(function(n){if(2===n.direction){var t=d(s),e=v(t),r=g(e);s=r,y(r);var o=x(s);F(f,s,o),f=i(s),y(s)}if(4===n.direction){var c=d(s),u=h(c),p=m(u);s=p,y(p);var A=x(s);F(f,s,A),f=i(s),y(s)}if(8===n.direction){var C=_(s),M=d(C),T=v(M),B=j(T);s=B,y(B);var D=x(s);F(f,s,D),f=i(s),y(s)}if(16===n.direction){var L=_(s),I=d(L),P=h(I),U=w(P);s=U,y(U);var z=x(s);F(f,s,z),f=i(s),y(s)}O(f)&&a(),S(l),E.innerText=b,k.innerText=b}))}]);