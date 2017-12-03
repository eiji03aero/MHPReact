webpackHotUpdate(0,{

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, PropTypes) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarRating = undefined;

__webpack_require__(143);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var StarRating = exports.StarRating = function StarRating(_ref) {
  var id = _ref.id,
      starLimit = _ref.starLimit,
      starSelected = _ref.starSelected,
      onRate = _ref.onRate;
  return React.createElement(
    "div",
    { className: "star-rating-container" },
    React.createElement(
      "div",
      { className: "star-rating" },
      [].concat(_toConsumableArray(new Array(starLimit))).map(function (star, i) {
        var starIdx = i + 1;
        var starClass = starIdx <= starSelected ? "star selected" : "star";
        return React.createElement("div", { className: starClass,
          key: i,
          onClick: function onClick() {
            return onRate(starIdx, id);
          } });
      })
    ),
    React.createElement(
      "p",
      { className: "_fs-20" },
      starSelected,
      " / ",
      starLimit
    )
  );
};

StarRating.propTypes = {
  id: PropTypes.string.isRequired,
  starLimit: PropTypes.number.isRequired,
  starSelected: PropTypes.number.isRequired,
  onRate: PropTypes.func.isRequired
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(5)))

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(33, function() {
			var newContent = __webpack_require__(33);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".star-rating {\n  display: flex;\n  justify-content: center; }\n\n.star {\n  cursor: pointer;\n  height: 30px;\n  width: 30px;\n  margin: 2px;\n  background-color: grey;\n  clip-path: polygon(50% 0%, 64% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0% 38%, 37% 38%); }\n  .star.selected {\n    background-color: red; }\n", ""]);

// exports


/***/ })

})
//# sourceMappingURL=0.a1ed1a8ed2adac2d751e.hot-update.js.map