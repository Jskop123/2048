!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=11)}([function(n,t,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),c=[];function a(n){for(var t=-1,e=0;e<c.length;e++)if(c[e].identifier===n){t=e;break}return t}function u(n,t){for(var e={},r=[],o=0;o<n.length;o++){var i=n[o],u=t.base?i[0]+t.base:i[0],f=e[u]||0,s="".concat(u," ").concat(f);e[u]=f+1;var l=a(s),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(c[l].references++,c[l].updater(d)):c.push({identifier:s,updater:v(d,t),references:1}),r.push(s)}return r}function f(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var c=i(n.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var s,l=(s=[],function(n,t){return s[n]=t,s.filter(Boolean).join("\n")});function d(n,t,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),c=n.childNodes;c[t]&&n.removeChild(c[t]),c.length?n.insertBefore(i,c[t]):n.appendChild(i)}}function p(n,t,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,b=0;function v(n,t){var e,r,o;if(t.singleton){var i=b++;e=h||(h=f(t)),r=d.bind(null,e,i,!1),o=d.bind(null,e,i,!0)}else e=f(t),r=p.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var e=u(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<e.length;r++){var o=a(e[r]);c[o].references--}for(var i=u(n,t),f=0;f<e.length;f++){var s=a(e[f]);0===c[s].references&&(c[s].updater(),c.splice(s,1))}e=i}}}},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(c=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(u," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([o]).join("\n")}var c,a,u;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var a=0;a<n.length;a++){var u=[].concat(n[a]);r&&o[u[0]]||(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),t.push(u))}},t}},function(n,t,e){(function(n,e){var r="[object Arguments]",o="[object Function]",i="[object GeneratorFunction]",c="[object Map]",a="[object Set]",u=/\w*$/,f=/^\[object .+?Constructor\]$/,s=/^(?:0|[1-9]\d*)$/,l={};l[r]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[c]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[a]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[o]=l["[object WeakMap]"]=!1;var d="object"==typeof n&&n&&n.Object===Object&&n,p="object"==typeof self&&self&&self.Object===Object&&self,h=d||p||Function("return this")(),b=t&&!t.nodeType&&t,v=b&&"object"==typeof e&&e&&!e.nodeType&&e,y=v&&v.exports===b;function g(n,t){return n.set(t[0],t[1]),n}function m(n,t){return n.add(t),n}function w(n,t,e,r){var o=-1,i=n?n.length:0;for(r&&i&&(e=n[++o]);++o<i;)e=t(e,n[o],o,n);return e}function _(n){var t=!1;if(null!=n&&"function"!=typeof n.toString)try{t=!!(n+"")}catch(n){}return t}function x(n){var t=-1,e=Array(n.size);return n.forEach((function(n,r){e[++t]=[r,n]})),e}function j(n,t){return function(e){return n(t(e))}}function S(n){var t=-1,e=Array(n.size);return n.forEach((function(n){e[++t]=n})),e}var F,A=Array.prototype,O=Function.prototype,k=Object.prototype,E=h["__core-js_shared__"],C=(F=/[^.]+$/.exec(E&&E.keys&&E.keys.IE_PROTO||""))?"Symbol(src)_1."+F:"",T=O.toString,z=k.hasOwnProperty,M=k.toString,I=RegExp("^"+T.call(z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),D=y?h.Buffer:void 0,L=h.Symbol,B=h.Uint8Array,P=j(Object.getPrototypeOf,Object),U=Object.create,N=k.propertyIsEnumerable,R=A.splice,G=Object.getOwnPropertySymbols,q=D?D.isBuffer:void 0,$=j(Object.keys,Object),H=yn(h,"DataView"),V=yn(h,"Map"),J=yn(h,"Promise"),W=yn(h,"Set"),K=yn(h,"WeakMap"),Q=yn(Object,"create"),X=xn(H),Y=xn(V),Z=xn(J),nn=xn(W),tn=xn(K),en=L?L.prototype:void 0,rn=en?en.valueOf:void 0;function on(n){var t=-1,e=n?n.length:0;for(this.clear();++t<e;){var r=n[t];this.set(r[0],r[1])}}function cn(n){var t=-1,e=n?n.length:0;for(this.clear();++t<e;){var r=n[t];this.set(r[0],r[1])}}function an(n){var t=-1,e=n?n.length:0;for(this.clear();++t<e;){var r=n[t];this.set(r[0],r[1])}}function un(n){this.__data__=new cn(n)}function fn(n,t){var e=Sn(n)||function(n){return function(n){return function(n){return!!n&&"object"==typeof n}(n)&&Fn(n)}(n)&&z.call(n,"callee")&&(!N.call(n,"callee")||M.call(n)==r)}(n)?function(n,t){for(var e=-1,r=Array(n);++e<n;)r[e]=t(e);return r}(n.length,String):[],o=e.length,i=!!o;for(var c in n)!t&&!z.call(n,c)||i&&("length"==c||wn(c,o))||e.push(c);return e}function sn(n,t,e){var r=n[t];z.call(n,t)&&jn(r,e)&&(void 0!==e||t in n)||(n[t]=e)}function ln(n,t){for(var e=n.length;e--;)if(jn(n[e][0],t))return e;return-1}function dn(n,t,e,f,s,d,p){var h;if(f&&(h=d?f(n,s,d,p):f(n)),void 0!==h)return h;if(!kn(n))return n;var b=Sn(n);if(b){if(h=function(n){var t=n.length,e=n.constructor(t);t&&"string"==typeof n[0]&&z.call(n,"index")&&(e.index=n.index,e.input=n.input);return e}(n),!t)return function(n,t){var e=-1,r=n.length;t||(t=Array(r));for(;++e<r;)t[e]=n[e];return t}(n,h)}else{var v=mn(n),y=v==o||v==i;if(An(n))return function(n,t){if(t)return n.slice();var e=new n.constructor(n.length);return n.copy(e),e}(n,t);if("[object Object]"==v||v==r||y&&!d){if(_(n))return d?n:{};if(h=function(n){return"function"!=typeof n.constructor||_n(n)?{}:(t=P(n),kn(t)?U(t):{});var t}(y?{}:n),!t)return function(n,t){return bn(n,gn(n),t)}(n,function(n,t){return n&&bn(t,En(t),n)}(h,n))}else{if(!l[v])return d?n:{};h=function(n,t,e,r){var o=n.constructor;switch(t){case"[object ArrayBuffer]":return hn(n);case"[object Boolean]":case"[object Date]":return new o(+n);case"[object DataView]":return function(n,t){var e=t?hn(n.buffer):n.buffer;return new n.constructor(e,n.byteOffset,n.byteLength)}(n,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(n,t){var e=t?hn(n.buffer):n.buffer;return new n.constructor(e,n.byteOffset,n.length)}(n,r);case c:return function(n,t,e){return w(t?e(x(n),!0):x(n),g,new n.constructor)}(n,r,e);case"[object Number]":case"[object String]":return new o(n);case"[object RegExp]":return function(n){var t=new n.constructor(n.source,u.exec(n));return t.lastIndex=n.lastIndex,t}(n);case a:return function(n,t,e){return w(t?e(S(n),!0):S(n),m,new n.constructor)}(n,r,e);case"[object Symbol]":return i=n,rn?Object(rn.call(i)):{}}var i}(n,v,dn,t)}}p||(p=new un);var j=p.get(n);if(j)return j;if(p.set(n,h),!b)var F=e?function(n){return function(n,t,e){var r=t(n);return Sn(n)?r:function(n,t){for(var e=-1,r=t.length,o=n.length;++e<r;)n[o+e]=t[e];return n}(r,e(n))}(n,En,gn)}(n):En(n);return function(n,t){for(var e=-1,r=n?n.length:0;++e<r&&!1!==t(n[e],e,n););}(F||n,(function(r,o){F&&(r=n[o=r]),sn(h,o,dn(r,t,e,f,o,n,p))})),h}function pn(n){return!(!kn(n)||(t=n,C&&C in t))&&(On(n)||_(n)?I:f).test(xn(n));var t}function hn(n){var t=new n.constructor(n.byteLength);return new B(t).set(new B(n)),t}function bn(n,t,e,r){e||(e={});for(var o=-1,i=t.length;++o<i;){var c=t[o],a=r?r(e[c],n[c],c,e,n):void 0;sn(e,c,void 0===a?n[c]:a)}return e}function vn(n,t){var e,r,o=n.__data__;return("string"==(r=typeof(e=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e)?o["string"==typeof t?"string":"hash"]:o.map}function yn(n,t){var e=function(n,t){return null==n?void 0:n[t]}(n,t);return pn(e)?e:void 0}on.prototype.clear=function(){this.__data__=Q?Q(null):{}},on.prototype.delete=function(n){return this.has(n)&&delete this.__data__[n]},on.prototype.get=function(n){var t=this.__data__;if(Q){var e=t[n];return"__lodash_hash_undefined__"===e?void 0:e}return z.call(t,n)?t[n]:void 0},on.prototype.has=function(n){var t=this.__data__;return Q?void 0!==t[n]:z.call(t,n)},on.prototype.set=function(n,t){return this.__data__[n]=Q&&void 0===t?"__lodash_hash_undefined__":t,this},cn.prototype.clear=function(){this.__data__=[]},cn.prototype.delete=function(n){var t=this.__data__,e=ln(t,n);return!(e<0)&&(e==t.length-1?t.pop():R.call(t,e,1),!0)},cn.prototype.get=function(n){var t=this.__data__,e=ln(t,n);return e<0?void 0:t[e][1]},cn.prototype.has=function(n){return ln(this.__data__,n)>-1},cn.prototype.set=function(n,t){var e=this.__data__,r=ln(e,n);return r<0?e.push([n,t]):e[r][1]=t,this},an.prototype.clear=function(){this.__data__={hash:new on,map:new(V||cn),string:new on}},an.prototype.delete=function(n){return vn(this,n).delete(n)},an.prototype.get=function(n){return vn(this,n).get(n)},an.prototype.has=function(n){return vn(this,n).has(n)},an.prototype.set=function(n,t){return vn(this,n).set(n,t),this},un.prototype.clear=function(){this.__data__=new cn},un.prototype.delete=function(n){return this.__data__.delete(n)},un.prototype.get=function(n){return this.__data__.get(n)},un.prototype.has=function(n){return this.__data__.has(n)},un.prototype.set=function(n,t){var e=this.__data__;if(e instanceof cn){var r=e.__data__;if(!V||r.length<199)return r.push([n,t]),this;e=this.__data__=new an(r)}return e.set(n,t),this};var gn=G?j(G,Object):function(){return[]},mn=function(n){return M.call(n)};function wn(n,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof n||s.test(n))&&n>-1&&n%1==0&&n<t}function _n(n){var t=n&&n.constructor;return n===("function"==typeof t&&t.prototype||k)}function xn(n){if(null!=n){try{return T.call(n)}catch(n){}try{return n+""}catch(n){}}return""}function jn(n,t){return n===t||n!=n&&t!=t}(H&&"[object DataView]"!=mn(new H(new ArrayBuffer(1)))||V&&mn(new V)!=c||J&&"[object Promise]"!=mn(J.resolve())||W&&mn(new W)!=a||K&&"[object WeakMap]"!=mn(new K))&&(mn=function(n){var t=M.call(n),e="[object Object]"==t?n.constructor:void 0,r=e?xn(e):void 0;if(r)switch(r){case X:return"[object DataView]";case Y:return c;case Z:return"[object Promise]";case nn:return a;case tn:return"[object WeakMap]"}return t});var Sn=Array.isArray;function Fn(n){return null!=n&&function(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=9007199254740991}(n.length)&&!On(n)}var An=q||function(){return!1};function On(n){var t=kn(n)?M.call(n):"";return t==o||t==i}function kn(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function En(n){return Fn(n)?fn(n):function(n){if(!_n(n))return $(n);var t=[];for(var e in Object(n))z.call(n,e)&&"constructor"!=e&&t.push(e);return t}(n)}e.exports=function(n){return dn(n,!0,!0)}}).call(this,e(3),e(4)(n))},function(n,t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(n){"object"==typeof window&&(e=window)}n.exports=e},function(n,t){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},function(n,t,e){var r=e(0),o=e(6);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1},c=(r(o,i),o.locals?o.locals:{});n.exports=c},function(n,t,e){(t=e(1)(!1)).push([n.i,"body {\n  font-family: 'Lato', sans-serif;\n  margin: 0;\n  background-color: #FAF8EF;\n  height: 100vh;\n}\n@media (max-width: 500px) {\n  .container {\n    width: 100%;\n    height: 100vw;\n  }\n  .newGame {\n    margin: 0 5%;\n    padding: 5px 10px;\n    font-size: 16px;\n  }\n  #scoreTable {\n    width: 80%;\n    margin-right: 10px;\n  }\n  #bestScore {\n    flex-wrap: wrap;\n  }\n  #bestScore h3 {\n    width: 50%;\n  }\n  #readme {\n    width: 90%;\n  }  \n  footer {\n    width: 90%;\n  }\n  footer h3 {\n    font-size: .8em;\n  }\n  footer p {\n    font-size: .8em;\n    padding-bottom: 20px;\n  }\n}\n@media (min-width: 501px) and (max-width: 1025px) {\n  .container {\n    width: 40%;\n    height: 40vw;\n  }\n  .newGame {\n    margin: 0 5%;\n    padding: 0 20px;\n    font-size: 16px;\n  }\n  #scoreTable {\n    width: 26%; \n  }\n  #readme {\n    padding-top: 20%;\n    padding-bottom: 5%;\n    width: 70%;\n  }  \n  footer {\n    width: 70%;\n  }\n  footer h3 {\n    font-size: 1em;\n    padding-top: 5%;\n  }\n  footer p {\n    font-size: 1em;\n    padding-bottom: 20px;\n  }\n}\n@media (min-width: 1026px) {\n  .container {\n    width: 30%;\n    height: 30vw;\n  }\n  .newGame {\n    margin: 0 5%;\n    padding: 0 20px;\n    font-size: 16px;\n  }\n  #scoreTable {\n   width: 100%; \n  }\n  #actualScore {\n    margin-right: 5%;\n  }\n  #readme {\n    padding-top: 10%;\n    padding-bottom: 5%;\n    width: 70%;\n  }  \n  footer {\n    width: 70%;\n  }\n  footer h3 {\n    font-size: 1em;\n    padding-top: 5%;\n  }\n  footer p {\n    font-size: .8em;\n    padding-bottom: 3%;\n  }\n}\n\n.container {\n  box-sizing: border-box;\n  background-color: #CDC1B4;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n  margin: auto;\n  border: 5px solid #BBADA0;\n}\n.box {\n  font-size: 2.5em;\n  border: 5px solid #BBADA0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 700;\n}\nheader {\n  width: 100%;\n  display: flex;\n  height: 20vh;\n  justify-content: center;\n  align-items: center;\n}\n\n#actualScore {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#actualScore h3 {\n  font-size: 14px;\n}\n\n#bestScore {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#bestScore h3 {\n  font-size: 14px;\n}\n\n.newGame {\n  background-color: #f00;\n  color: #F9F6F2;\n  height: 50%;\n  border-radius: 2px;\n  border: transparent;\n  font-weight: 700;\n  letter-spacing: .5px;\n}\n\n.newGame:hover,\n.newGame:focus {\n  background-color: #f44;\n  color: #F9F8F4;\n  cursor: pointer;\n}\n\n#readme {\n  display: block;\n  margin: auto;\n}\n\n#readme h3 {\n  color: #776E65;\n}\n\nfooter {\n  border-top: 2px solid #776E65;\n  display: block;\n  margin: auto;\n}\nfooter h3 {\n  font-size: .8em;\n}",""]),n.exports=t},function(n,t,e){var r=e(0),o=e(8);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1},c=(r(o,i),o.locals?o.locals:{});n.exports=c},function(n,t,e){(t=e(1)(!1)).push([n.i,"\n.newBox {\n  transition: .5s;\n}\n.box2 {\n  color: #776E65;\n  background-color: #EEE4DA;\n}\n.box4 {\n  color: #776E65;\n  background-color: #EDE0C8;\n}\n.box8 {\n  color: #F9F6F2;\n  background-color: #F2B179;\n}\n.box16 {\n  color: #F9F6F2;\n  background-color: #F59563;\n}\n.box32 {\n  color: #F9F6F2;\n  background-color: #F67C5F;\n}\n.box64 {\n  color: #F9F6F2;\n  background-color: #F65E3B;\n}\n.box128 {\n  color: #F9F6F2;\n  background-color: #EDCF72;\n  font-size: 2em;\n}\n.box256 {\n  color: #F9F6F2;\n  background-color: #EDCC61;\n  font-size: 2em;\n}\n.box512 {\n  color: #F9F6F2;\n  background-color: #EDC850;\n  font-size: 2em;\n}\n.box1024 {\n  color: #F9F6F2;\n  background-color: #EDC53F;\n  font-size: 1.5em;\n}\n.box2048 {\n  color: #F9F6F2;\n  background-color: #EDC22E;\n  font-size: 1.5em;\n}",""]),n.exports=t},function(n,t,e){var r=e(0),o=e(10);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1},c=(r(o,i),o.locals?o.locals:{});n.exports=c},function(n,t,e){(t=e(1)(!1)).push([n.i,"#modal {\n  position: fixed; \n  z-index: 1; \n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  overflow: auto; \n  width: 100%;\n  height: 100%;\n}\n\n#modal-content {\n  background-color: #EDE0C8;\n  color: #776E65;\n  margin: 5% auto; \n  width: 50%; \n  text-align: center;\n  -webkit-box-shadow: 4px 4px 8px 8px rgba(0,0,0,0.75);\n  -moz-box-shadow: 4px 4px 8px 8px rgba(0,0,0,0.75);\n  box-shadow: 4px 4px 8px 8px rgba(0,0,0,0.75);\n}\n#modal-content img {\n  width: 30%;\n}\n.open {\n  display: block;\n  transition: .5s;\n}\n.close {\n  display: none;\n}\n#close {\n  color: #666;\n  font-size: 28px;\n  font-weight: bold;\n  margin-left: 90%;\n}\n#close:hover,\n#close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n#modal-content button {\n  margin: 5%;\n  padding: 5px 20px;\n}\n#modal-content h2 {\n  font-size: 3em;\n  color: #F7941E;\n}\n\n",""]),n.exports=t},function(n,t,e){"use strict";e.r(t);e(5),e(7),e(9);var r=function(){return[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,2,0]]},o=document.querySelector("#modal"),i=function(){window.setTimeout((function(){return o.classList="open"}),500)},c=function(n){for(var t=0;t<4;t++)for(var e=0;e<4;e++)2048===n[t][e]&&alert("you win");return!1},a=function(n){return n.map((function(n){for(var t=0;t<4;t++){var e=n.indexOf(0);e>-1&&n.splice(e,1)}return n}))},u=function(n){return"number"==typeof n},f=function(n){return n.map((function(n){for(var t=[],e=0;e<4;e++)n[e]===n[e+1]&&0!==n[e]?(u(n[e])&&(t.push(n[e]+=n[e+1]),p+=n[e]),n.splice(n.indexOf(n[e+1]),1)):u(n[e])&&t.push(n[e]);return t}))},s=function(n){return n.map((function(n){n.reverse();for(var t=[],e=0;e<4;e++)n[e]===n[e+1]&&0!==n[e]?(u(n[e])&&(t.push(n[e]+=n[e+1]),p+=n[e]),n.splice(n.indexOf(n[e+1]),1)):u(n[e])&&t.push(n[e]);return t.reverse()}))},l=function(n){return n[0].map((function(t,e){return n.map((function(n){return n[e]}))}))},d=function(n){for(var t=[],e=0;e<4;e++)for(var r=0;r<4;r++)n[e][r]||t.push({row:e,col:r});return t},p=0,h=document.querySelector("#actualScore h2"),b=document.querySelector("#modal-content h2"),v=document.querySelector("#storageScore");try{localStorage.getItem("bestScore")?v.innerText=localStorage.getItem("bestScore"):v.innerText="0"}catch(n){v.innerText="0"}var y=function(){p>=localStorage.getItem("bestScore")&&localStorage.setItem("bestScore",p),v.innerText=localStorage.getItem("bestScore"),h.innerText=p,b.innerText=p};var g=e(2);window.addEventListener("click",(function(n){"modal"!==n.target.id&&"close"!==n.target.id&&"newGame"!==n.target.className||(o.classList="close")}));var m,w=[[0,0,0,0],[0,0,2,0],[0,0,0,0],[0,0,0,0]],_=g(w),x=function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(m=document.querySelectorAll(".box"))||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(m)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}(),j=document.querySelectorAll(".newGame"),S=function(){var n=r();F(n),_=g(n),E(x),p=0,y()};j[0].addEventListener("click",S),j[1].addEventListener("click",S);var F=function(n){var t=n.flat(1);x.forEach((function(n,e){0!==t[e]?n.innerHTML=t[e]:n.innerHTML=""}))};F(_);var A=function(n,t,e){var r,o,i,c,a;(function(n,t){return JSON.stringify(n)==JSON.stringify(t)})(n,t)||(r=e,o=t,i=Math.floor(Math.random()*r.length),c=r[i].row,a=r[i].col,o[c][a]=2,r.splice(i,1))},O=function(n){var t=!1;return n.forEach((function(n){for(var e=0;e<3;e++)n[e]===n[e+1]&&0!==n[e]&&(t=!0)})),t},k=function(n){var t=!0,e=!0;return n.forEach((function(n){n.includes(0)&&(t=!1)})),function(n){var t=l(n);return!(!O(n)&&!O(t))}(n)&&(e=!1),!(!t||!e)},E=function(n){n.forEach((function(n){var t=1*n.innerText;n.classList="box";for(var e=2;e<4096;e*=2)t===e&&(n.classList+=" box".concat(e))}))},C=function(){var n=a(_),t=f(n),e=t.map((function(n){for(;n.length<4;)n.push(0);return n}));_=e,F(e);var r=d(_);A(w,_,r),w=g(_),F(_)},T=function(){var n=a(_),t=s(n),e=t.map((function(n){for(;n.length<4;)n.unshift(0);return n}));_=e,F(e);var r=d(_);A(w,_,r),w=g(_),F(_)},z=function(){var n,t=l(_),e=a(t),r=f(e),o=(n=r.map((function(n){for(;n.length<4;)n.push(0);return n})),l(n));_=o,F(o);var i=d(_);A(w,_,i),w=g(_),F(_)},M=function(){var n,t=l(_),e=a(t),r=s(e),o=(n=r.map((function(n){for(;n.length<4;)n.unshift(0);return n})),l(n));_=o,F(o);var i=d(_);A(w,_,i),w=g(_),F(_)};E(x);window.addEventListener("keydown",(function(n){37!==n.keyCode&&39!==n.keyCode&&38!==n.keyCode&&40!==n.keyCode||n.preventDefault()})),window.addEventListener("keyup",(function(n){37===n.keyCode&&C(),39===n.keyCode&&T(),38===n.keyCode&&z(),40===n.keyCode&&M(),k(w)&&i(),E(x),y(),c(w)}));var I=document.querySelector(".container"),D=new Hammer(I);D.get("swipe").set({direction:Hammer.DIRECTION_ALL}),D.on("swipe",(function(n){2===n.direction&&C(),4===n.direction&&T(),8===n.direction&&z(),16===n.direction&&M(),k(w)&&i(),E(x),y(),c(w)}))}]);