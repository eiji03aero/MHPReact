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

__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./colorList.scss.\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var ColorList = exports.ColorList = function ColorList(_ref) {
  var colors = _ref.colors,
      starLimit = _ref.starLimit,
      _onRate = _ref.onRate,
      _onRemove = _ref.onRemove;

  return React.createElement(
    'div',
    { className: 'color-list u-flex--item-table' },
    colors.map(function (color, i) {
      React.createElement(_color.Color, { key: i,
        colorInfo: color,
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

/***/ }),

/***/ 152:
false,

/***/ 153:
false

})
//# sourceMappingURL=0.9995b9fa18d21307d569.hot-update.js.map