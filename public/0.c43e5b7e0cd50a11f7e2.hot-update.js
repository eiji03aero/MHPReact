webpackHotUpdate(0,{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = undefined;

var _StarRating = __webpack_require__(143);

__webpack_require__(142);

var Color = exports.Color = function Color(_ref) {
  var color = _ref.color,
      title = _ref.title,
      starLimit = _ref.starLimit,
      starSelected = _ref.starSelected,
      onRate = _ref.onRate;
  return React.createElement(
    'div',
    { className: 'color-container' },
    React.createElement('div', { className: 'color-top', style: color }),
    React.createElement(
      'div',
      { className: 'color-description' },
      React.createElement(
        'p',
        null,
        title
      ),
      React.createElement(_StarRating.StarRating, { starLimit: starLimit,
        starSelected: starSelected,
        onRate: onRate })
    )
  );
};

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ".color-container {\n  width: 400px;\n  height: 400px;\n  box-shadow: 2px 8px 4px 0 rgba(0, 0, 0, 0.4); }\n  .color-container .color-top {\n    width: 100%;\n    height: 200px;\n    background-color: grey; }\n  .color-container .color-description {\n    width: 100%;\n    height: 200px;\n    background-color: #fff;\n    text-align: center; }\n", ""]);

// exports


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(141);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(141, function() {
			var newContent = __webpack_require__(141);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var StarRating = exports.StarRating = function StarRating(_ref) {
  var starLimit = _ref.starLimit,
      starSelected = _ref.starSelected,
      onRate = _ref.onRate;

  var stars = [].concat(_toConsumableArray(new Array(starLimit))).map(function (star, i) {
    var starClass = i < starSelected - 1 ? "star selected" : "star";
    return React.createElement("div", { className: starClass,
      onClick: onRate(i + 1) });
  });

  return React.createElement(
    "div",
    { className: "star-rating-container" },
    React.createElement(
      "div",
      { className: "star-rating" },
      stars
    ),
    React.createElement(
      "p",
      null,
      starSelected,
      " / ",
      starLimit
    )
  );
};

/***/ })

})
//# sourceMappingURL=0.c43e5b7e0cd50a11f7e2.hot-update.js.map