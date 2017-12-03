webpackHotUpdate(0,{

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _color = __webpack_require__(140);

var _color2 = _interopRequireDefault(_color);

__webpack_require__(139);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorOrganizer = function (_React$Component) {
  _inherits(ColorOrganizer, _React$Component);

  function ColorOrganizer(props) {
    _classCallCheck(this, ColorOrganizer);

    var _this = _possibleConstructorReturn(this, (ColorOrganizer.__proto__ || Object.getPrototypeOf(ColorOrganizer)).call(this, props));

    _this.onRate = _this.onRate.bind(_this);
    return _this;
  }

  _createClass(ColorOrganizer, [{
    key: 'onRate',
    value: function onRate() {
      window.alert("you rated!");
    }
  }, {
    key: 'render',
    value: function render() {
      var color = { backgroundColor: "#333" };
      var title = "sample color";
      var starLimit = 5;
      var starSelected = 3;

      return _react2.default.createElement(
        'div',
        { 'class': 'color-organizer-container' },
        _react2.default.createElement(
          'div',
          { className: 'color-organizer-header' },
          _react2.default.createElement(
            'p',
            null,
            'add form will come here'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'color-organizer-body u-flex--item-table' },
          _react2.default.createElement(_color2.default, { color: color,
            title: title,
            starLimit: starLimit,
            starSelected: starSelected,
            onRate: this.onRate() })
        )
      );
    }
  }]);

  return ColorOrganizer;
}(_react2.default.Component);

exports.default = ColorOrganizer;

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ".color-organizer-container .color-organizer-body {\n  margin: 0 2rem; }\n\n.item {\n  width: 400px;\n  height: 300px;\n  margin-bottom: 2rem;\n  background-color: blue; }\n", ""]);

// exports


/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(138);
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
		module.hot.accept(138, function() {
			var newContent = __webpack_require__(138);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = undefined;

__webpack_require__(142);

var Color = exports.Color = function Color(_ref) {
  var color = _ref.color,
      title = _ref.title,
      starLimit = _ref.starLimit,
      starSelected = _ref.starSelected,
      onRate = _ref.onRate;

  return React.createElement(
    "div",
    { className: "color-container" },
    React.createElement("div", { className: "color-top", style: color }),
    React.createElement(
      "div",
      { className: "color-description" },
      React.createElement(
        "p",
        null,
        title
      ),
      React.createElement(StarRating, { starLimit: starLimit, starSelected: starSelected, onRate: onRate })
    )
  );
};

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

throw new Error("Module build failed: \n  .color-top {\n ^\n      Invalid CSS after \"...rgba(0,0,0, .4)\": expected expression (e.g. 1px, bold), was \".color-top {\"\n      in /Users/eijiosakabe/Documents/data/my_pg/my_project/MyHomePage/MHPReact/src/components/colorOrganizer/presentation/color/color.scss (line 5, column 3)");

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

/***/ })

})
//# sourceMappingURL=0.6e3d9bb8cd1e0f51ed97.hot-update.js.map