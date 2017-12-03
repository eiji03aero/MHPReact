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

  if (colors.length <= 0) {
    return React.createElement(
      'h1',
      { className: 'no-color' },
      ' you aint got no color here!!'
    );
  }
  return React.createElement(
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

/***/ })

})
//# sourceMappingURL=0.d516ad376d116c5c55e7.hot-update.js.map