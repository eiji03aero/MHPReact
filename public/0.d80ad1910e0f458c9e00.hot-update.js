webpackHotUpdate(0,{

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = undefined;

var _StarRating = __webpack_require__(139);

__webpack_require__(141);

var Color = exports.Color = function Color(_ref) {
  var color = _ref.color,
      title = _ref.title,
      starLimit = _ref.starLimit,
      starSelected = _ref.starSelected,
      _onRate = _ref.onRate;

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
      )
    ),
    React.createElement('div', { className: 'color-display', style: color }),
    React.createElement(
      'div',
      { className: 'color-description' },
      React.createElement(_StarRating.StarRating, { starLimit: starLimit,
        starSelected: starSelected,
        onRate: function onRate() {
          return _onRate();
        } })
    )
  );
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

})
//# sourceMappingURL=0.d80ad1910e0f458c9e00.hot-update.js.map