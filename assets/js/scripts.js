!function(){return function e(o,n,t){function u(i,c){if(!n[i]){if(!o[i]){var l="function"==typeof require&&require;if(!c&&l)return l(i,!0);if(r)return r(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var f=n[i]={exports:{}};o[i][0].call(f.exports,function(e){return u(o[i][1][e]||e)},f,f.exports,e,o,n,t)}return n[i].exports}for(var r="function"==typeof require&&require,i=0;i<t.length;i++)u(t[i]);return u}}()({1:[function(e,o,n){"use strict";e("./modules/example");var t=e("./modules/active-menu");e("./modules/hola-mundo");(0,t.activeMenu)()},{"./modules/active-menu":2,"./modules/example":3,"./modules/hola-mundo":4}],2:[function(e,o,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.activeMenu=function(){var e=document.getElementById("main-menu");e&&Array.from(e.querySelectorAll("a")).map(function(e){e.href!==location.href&&e.href!==location.href.slice(0,-1)||e.classList.add("active")})}},{}],3:[function(e,o,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.saludo=function(){console.log("Hola mundo")},n.despedida=function(){console.log("Adiós mundo")}},{}],4:[function(e,o,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.holaMundo=function(){alert("hola mundo")}},{}]},{},[1]);
//# sourceMappingURL=scripts.js.map
