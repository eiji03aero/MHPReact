webpackHotUpdate(0,{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, PropTypes) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorList = undefined;

var _color = __webpack_require__(141);

__webpack_require__(153);

var ColorList = exports.ColorList = function ColorList(_ref) {
  var colors = _ref.colors,
      starLimit = _ref.starLimit,
      _onRate = _ref.onRate,
      _onRemove = _ref.onRemove;

  var colorList = colors.map(function (color, i) {
    return React.createElement(_color.Color, { key: i,
      colorInfo: color,
      starLimit: starLimit,
      onRate: function onRate(num, id) {
        return _onRate(num, id);
      },
      onRemove: function onRemove(id) {
        return _onRemove(id);
      } });
  });

  colors.length <= 0 ? React.createElement(
    'p',
    null,
    ' you aint got no color here!!'
  ) : React.createElement(
    'div',
    { className: 'color-list u-flex--item-table' },
    colorList
  );
};

ColorList.propTypes = {
  colors: PropTypes.array.isRequired,
  starLimit: PropTypes.number.isRequired,
  onRate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(5)))

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, PropTypes) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = undefined;

var _StarRating = __webpack_require__(142);

__webpack_require__(144);

var Color = exports.Color = function Color(_ref) {
  var colorInfo = _ref.colorInfo,
      starLimit = _ref.starLimit,
      _onRate = _ref.onRate,
      onRemove = _ref.onRemove;
  var color = colorInfo.color,
      id = colorInfo.id,
      starSelected = colorInfo.starSelected,
      title = colorInfo.title;


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
        onRate: function onRate(num, id) {
          return _onRate(num, id);
        } })
    )
  );
};

Color.propTypes = {
  colorInfo: PropTypes.object.isRequired,
  starLimit: PropTypes.number.isRequired,
  onRate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(5)))

/***/ }),

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

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
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
		module.hot.accept(34, function() {
			var newContent = __webpack_require__(34);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".color-list {\n  margin: 2rem; }\n", ""]);

// exports


/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(152);
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
		module.hot.accept(152, function() {
			var newContent = __webpack_require__(152);
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


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".color-container {\n  width: 400px;\n  margin-bottom: 2rem;\n  box-shadow: 2px 8px 4px 0 rgba(0, 0, 0, 0.4); }\n  .color-container .color-header {\n    position: relative;\n    width: 100%;\n    height: 50px;\n    background-color: #fff;\n    text-align: center; }\n    .color-container .color-header .remove-color {\n      position: absolute;\n      top: 10px;\n      right: 10px;\n      padding: .5rem;\n      cursor: pointer; }\n      .color-container .color-header .remove-color:hover {\n        opacity: .7; }\n  .color-container .color-display {\n    width: 100%;\n    height: 200px;\n    background-color: grey; }\n  .color-container .color-description {\n    width: 100%;\n    padding: 1rem 0;\n    background-color: #fff;\n    text-align: center; }\n", ""]);

// exports


/***/ })

})
//# sourceMappingURL=0.81779fe18bcd2273ef3a.hot-update.js.map