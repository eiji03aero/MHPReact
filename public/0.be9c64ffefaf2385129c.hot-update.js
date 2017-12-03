webpackHotUpdate(0,{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ".star-rating {\n  display: flex;\n  justify-content: center; }\n\n.star {\n  cursor: pointer;\n  height: 30px;\n  width: 30px;\n  margin: 2px;\n  background-color: grey;\n  clip-path: polygon(50% 0%, 64% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0% 38%, 37% 38%); }\n  .star.selected {\n    background-color: red; }\n", ""]);

// exports


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ".color-container {\n  width: 400px;\n  box-shadow: 2px 8px 4px 0 rgba(0, 0, 0, 0.4); }\n  .color-container .color-header {\n    display: relative;\n    width: 100%;\n    height: 50px;\n    text-align: center; }\n    .color-container .color-header .remove-color {\n      display: absolute;\n      right: 10px; }\n      .color-container .color-header .remove-color:hover {\n        opacity: .7; }\n  .color-container .color-display {\n    width: 100%;\n    height: 200px;\n    background-color: grey; }\n  .color-container .color-description {\n    width: 100%;\n    padding: 1rem 0;\n    background-color: #fff;\n    text-align: center; }\n", ""]);

// exports


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = undefined;

var _StarRating = __webpack_require__(146);

__webpack_require__(148);

var Color = exports.Color = function Color(_ref) {
  var colorInfo = _ref.colorInfo,
      starLimit = _ref.starLimit,
      _onRate = _ref.onRate,
      onRemove = _ref.onRemove;
  var color = color.color,
      id = color.id,
      starSelected = color.starSelected,
      title = color.title;

  return React.createElement(
    'div',
    { className: 'color-container' },
    React.createElement(
      'div',
      { className: 'color-header' },
      React.createElement(
        'p',
        { className: '_fs-36' },
        title
      ),
      React.createElement(
        'button',
        { className: 'remove-color',
          onClick: function onClick() {
            return onRemove(id);
          } },
        'X'
      )
    ),
    React.createElement('div', { className: 'color-display', style: color }),
    React.createElement(
      'div',
      { className: 'color-description' },
      React.createElement(_StarRating.StarRating, { id: id,
        starLimit: starLimit,
        starSelected: starSelected,
        onRate: function onRate() {
          return _onRate();
        } })
    )
  );
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarRating = undefined;

__webpack_require__(147);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(139);
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
		module.hot.accept(139, function() {
			var newContent = __webpack_require__(139);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(140);
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
		module.hot.accept(140, function() {
			var newContent = __webpack_require__(140);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

})
//# sourceMappingURL=0.be9c64ffefaf2385129c.hot-update.js.map