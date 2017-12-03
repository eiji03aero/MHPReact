webpackHotUpdate(0,{

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorList = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _color = __webpack_require__(145);

var ColorList = exports.ColorList = function ColorList(_ref) {
  var colors = _ref.colors,
      starLimit = _ref.starLimit,
      _onRate = _ref.onRate,
      _onRemove = _ref.onRemove;

  console.log(color);
  return React.createElement(
    "div",
    { className: "color-list u-flex--item-table" },
    colors.map(function (color, i) {
      React.createElement(_color.Color, _extends({ key: i
      }, color, {
        starLimit: starLimit,
        onRate: function onRate() {
          return _onRate();
        },
        onRemove: function onRemove() {
          return _onRemove();
        } }));
    })
  );
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

})
//# sourceMappingURL=0.41040c8f67098599e920.hot-update.js.map