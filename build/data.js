!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("data",[],e):"object"==typeof exports?exports.data=e():t.data=e()}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=6)}([,,function(t,e){t.exports=require("prop-types")},function(t,e,r){"use strict";r.r(e),r.d(e,"itemPropType",(function(){return o})),r.d(e,"getSizes",(function(){return c})),r.d(e,"getLargestSource",(function(){return f})),r.d(e,"getRatio",(function(){return s})),r.d(e,"getLargeEnoughSource",(function(){return p})),r.d(e,"getLargestLoadedSource",(function(){return l}));var n=r(2),o=Object(n.shape)({id:Object(n.oneOfType)([n.string,n.number]),sources:Object(n.objectOf)(Object(n.shape)({src:n.string,width:n.number,height:n.number})),meta:Object(n.shape)({averageColor:n.string,caption:n.string,date:n.string,location:n.string})});function u(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var a=function(t){return+t},c=function(t){var e=t.sources;return Object.keys(e).map(a)},f=function(t){var e=t.sources,r=c(t);return e[Math.max.apply(Math,u(r))]},s=function(t){var e=f(t);return e.width/e.height},p=function(t,e){var r=t.sources,n=c(t).filter((function(t){return e<=t}));return n.length?r[Math.min.apply(Math,u(n))]:f(t)},l=function(t,e){var r=Object.keys(t.sources).filter((function(r){return e[t.sources[r].src]})).map(a);if(!r.length)return!1;var n=Math.max.apply(Math,u(r));return t.sources[n].src}},,,function(t,e,r){t.exports=r(3)}])}));
//# sourceMappingURL=data.js.map