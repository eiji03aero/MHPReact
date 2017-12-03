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

  var color = colors[0];
  return React.createElement(
    'div',
    { className: 'color-list u-flex--item-table' },
    React.createElement(_color.Color, { colorInfo: color,
      starLimit: starLimit,
      onRate: function onRate() {
        return _onRate();
      },
      onRemove: function onRemove() {
        return _onRemove();
      } })
  );
  // return (
  //   <div className="color-list u-flex--item-table">
  //     { colors.map((color, i) => {
  //         <Color key={i}
  //           colorInfo={color}
  //           starLimit={starLimit}
  //           onRate={() => onRate()}
  //           onRemove={() => onRemove()} />
  //       })
  //     }
  //   </div>
  // )
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

})
//# sourceMappingURL=0.e6aa84d57879055649a4.hot-update.js.map