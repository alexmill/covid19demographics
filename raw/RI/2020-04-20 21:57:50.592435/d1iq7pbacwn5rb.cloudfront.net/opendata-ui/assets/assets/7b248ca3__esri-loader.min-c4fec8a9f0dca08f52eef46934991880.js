!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r(e.esriLoader=e.esriLoader||{})}(this,(function(e){"use strict"
var r="4.15",t="next"
function o(e){if(e.toLowerCase()===t)return t
var r=e&&e.match(/^(\d)\.(\d+)/)
return r&&{major:parseInt(r[1],10),minor:parseInt(r[2],10)}}function n(e){return void 0===e&&(e=r),"https://js.arcgis.com/"+e+"/"}function i(e){return!e||o(e)?function(e){void 0===e&&(e=r)
var i=n(e),a=o(e)
return a!==t&&3===a.major?i+(a.minor<=10?"js/":"")+"esri/css/esri.css":i+"esri/themes/light/main.css"}(e):e}function a(e,r){var t,o,n,a=i(e),d=(t=a,document.querySelector('link[href*="'+t+'"]'))
return d||(o=a,(n=document.createElement("link")).rel="stylesheet",n.href=o,function(e,r){if(r){var t=document.querySelector(r)
t.parentNode.insertBefore(e,t)}else document.head.appendChild(e)}(d=n,r)),d}var d={Promise:"undefined"!=typeof window?window.Promise:void 0},s={}
function u(e,r,t){var o,n,i,a
t&&(i=t,a=function(e){i(e.error||new Error("There was an error attempting to load "+n.src)),n.removeEventListener("error",a,!1)},(n=e).addEventListener("error",a,!1),o=a)
var d=function(){r(e),e.removeEventListener("load",d,!1),o&&e.removeEventListener("error",o,!1)}
e.addEventListener("load",d,!1)}function c(e){void 0===e&&(e={}),s=e}function f(){return document.querySelector("script[data-esri-loader]")}function l(){var e=window.require
return e&&e.on}function v(e){void 0===e&&(e={})
var r={};[s,e].forEach((function(e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])}))
var t=r.version,o=r.url||n(t)
return new d.Promise((function(e,n){var i,d,s=f()
if(s){var c=s.getAttribute("src")
c!==o?n(new Error("The ArcGIS API for JavaScript is already loaded ("+c+").")):l()?e(s):u(s,e,n)}else if(l())n(new Error("The ArcGIS API for JavaScript is already loaded."))
else{var v=r.css
v&&a(!0===v?t:v,r.insertCssBefore),r.dojoConfig&&(window.dojoConfig=r.dojoConfig),i=o,(d=document.createElement("script")).type="text/javascript",d.src=i,d.setAttribute("data-esri-loader","loading"),u(s=d,(function(){s.setAttribute("data-esri-loader","loaded"),e(s)}),n),document.body.appendChild(s)}}))}function p(e){return new d.Promise((function(r,t){var o=window.require.on("error",t)
window.require(e,(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
o.remove(),r(e)}))}))}function m(e,r){if(void 0===r&&(r={}),l())return p(e)
var t=f(),o=t&&t.getAttribute("src")
return!r.url&&o&&(r.url=o),v(r).then((function(){return p(e)}))}var w={getScript:f,isLoaded:l,loadModules:m,loadScript:v,loadCss:a,setDefaultOptions:c,utils:d}
e.getScript=f,e.isLoaded=l,e.loadModules=m,e.loadScript=v,e.loadCss=a,e.setDefaultOptions=c,e.utils=d,e.default=w,Object.defineProperty(e,"__esModule",{value:!0})}))

/*!
* AerWebCopy Engine [version 6.3.0]
* Copyright Aeroson Systems & Co.
* File mirrored from https://d1iq7pbacwn5rb.cloudfront.net/opendata-ui/assets/assets/esri-loader.min-c4fec8a9f0dca08f52eef46934991880.js
* At UTC time: 2020-04-21 01:57:51.756304
*/
