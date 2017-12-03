webpackHotUpdate(0,{

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorList = undefined;

var _color = __webpack_require__(145);

var ColorList = exports.ColorList = function ColorList(_ref) {
  var colors = _ref.colors,
      starLimit = _ref.starLimit,
      _onRate = _ref.onRate,
      _onRemove = _ref.onRemove;

  console.log(colors);
  return React.createElement(
    "div",
    { className: "color-list u-flex--item-table" },
    colors.map(function (color, i) {
      React.createElement(_color.Color, { key: i,
        color: color,
        starLimit: starLimit,
        onRate: function onRate() {
          return _onRate();
        },
        onRemove: function onRemove() {
          return _onRemove();
        } });
    })
  );
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

})
//# sourceMappingURL=0.8cb2da885ab7ac99a3f4.hot-update.js.map