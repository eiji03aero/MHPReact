webpackHotUpdate(0,{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

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
      onRate: function onRate() {
        return _onRate();
      },
      onRemove: function onRemove() {
        return _onRemove();
      } });
  });
  return React.createElement(
    'div',
    { className: 'color-list u-flex--item-table' },
    colorList
  );
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

})
//# sourceMappingURL=0.fa09557fbd1d1a8bf10e.hot-update.js.map