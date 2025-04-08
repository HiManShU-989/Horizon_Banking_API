"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/module-details-from-path";
exports.ids = ["vendor-chunks/module-details-from-path"];
exports.modules = {

/***/ "(instrument)/./node_modules/module-details-from-path/index.js":
/*!********************************************************!*\
  !*** ./node_modules/module-details-from-path/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar path = __webpack_require__(/*! path */ \"path\")\n\nmodule.exports = function (file) {\n  var segments = file.split(path.sep)\n  var index = segments.lastIndexOf('node_modules')\n  if (index === -1) return\n  if (!segments[index + 1]) return\n  var scoped = segments[index + 1][0] === '@'\n  var name = scoped ? segments[index + 1] + '/' + segments[index + 2] : segments[index + 1]\n  var offset = scoped ? 3 : 2\n  return {\n    name: name,\n    basedir: segments.slice(0, index + offset).join(path.sep),\n    path: segments.slice(index + offset).join(path.sep)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vbm9kZV9tb2R1bGVzL21vZHVsZS1kZXRhaWxzLWZyb20tcGF0aC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWixXQUFXLG1CQUFPLENBQUMsa0JBQU07O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc21fYmFua2luZy8uL25vZGVfbW9kdWxlcy9tb2R1bGUtZGV0YWlscy1mcm9tLXBhdGgvaW5kZXguanM/YWMzNiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZmlsZSkge1xuICB2YXIgc2VnbWVudHMgPSBmaWxlLnNwbGl0KHBhdGguc2VwKVxuICB2YXIgaW5kZXggPSBzZWdtZW50cy5sYXN0SW5kZXhPZignbm9kZV9tb2R1bGVzJylcbiAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuXG4gIGlmICghc2VnbWVudHNbaW5kZXggKyAxXSkgcmV0dXJuXG4gIHZhciBzY29wZWQgPSBzZWdtZW50c1tpbmRleCArIDFdWzBdID09PSAnQCdcbiAgdmFyIG5hbWUgPSBzY29wZWQgPyBzZWdtZW50c1tpbmRleCArIDFdICsgJy8nICsgc2VnbWVudHNbaW5kZXggKyAyXSA6IHNlZ21lbnRzW2luZGV4ICsgMV1cbiAgdmFyIG9mZnNldCA9IHNjb3BlZCA/IDMgOiAyXG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBiYXNlZGlyOiBzZWdtZW50cy5zbGljZSgwLCBpbmRleCArIG9mZnNldCkuam9pbihwYXRoLnNlcCksXG4gICAgcGF0aDogc2VnbWVudHMuc2xpY2UoaW5kZXggKyBvZmZzZXQpLmpvaW4ocGF0aC5zZXApXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(instrument)/./node_modules/module-details-from-path/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/module-details-from-path/index.js":
/*!********************************************************!*\
  !*** ./node_modules/module-details-from-path/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar path = __webpack_require__(/*! path */ \"path\")\n\nmodule.exports = function (file) {\n  var segments = file.split(path.sep)\n  var index = segments.lastIndexOf('node_modules')\n  if (index === -1) return\n  if (!segments[index + 1]) return\n  var scoped = segments[index + 1][0] === '@'\n  var name = scoped ? segments[index + 1] + '/' + segments[index + 2] : segments[index + 1]\n  var offset = scoped ? 3 : 2\n  return {\n    name: name,\n    basedir: segments.slice(0, index + offset).join(path.sep),\n    path: segments.slice(index + offset).join(path.sep)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbW9kdWxlLWRldGFpbHMtZnJvbS1wYXRoL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaLFdBQVcsbUJBQU8sQ0FBQyxrQkFBTTs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzbV9iYW5raW5nLy4vbm9kZV9tb2R1bGVzL21vZHVsZS1kZXRhaWxzLWZyb20tcGF0aC9pbmRleC5qcz8zMTdlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmaWxlKSB7XG4gIHZhciBzZWdtZW50cyA9IGZpbGUuc3BsaXQocGF0aC5zZXApXG4gIHZhciBpbmRleCA9IHNlZ21lbnRzLmxhc3RJbmRleE9mKCdub2RlX21vZHVsZXMnKVxuICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm5cbiAgaWYgKCFzZWdtZW50c1tpbmRleCArIDFdKSByZXR1cm5cbiAgdmFyIHNjb3BlZCA9IHNlZ21lbnRzW2luZGV4ICsgMV1bMF0gPT09ICdAJ1xuICB2YXIgbmFtZSA9IHNjb3BlZCA/IHNlZ21lbnRzW2luZGV4ICsgMV0gKyAnLycgKyBzZWdtZW50c1tpbmRleCArIDJdIDogc2VnbWVudHNbaW5kZXggKyAxXVxuICB2YXIgb2Zmc2V0ID0gc2NvcGVkID8gMyA6IDJcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGJhc2VkaXI6IHNlZ21lbnRzLnNsaWNlKDAsIGluZGV4ICsgb2Zmc2V0KS5qb2luKHBhdGguc2VwKSxcbiAgICBwYXRoOiBzZWdtZW50cy5zbGljZShpbmRleCArIG9mZnNldCkuam9pbihwYXRoLnNlcClcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/module-details-from-path/index.js\n");

/***/ })

};
;