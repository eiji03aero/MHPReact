webpackHotUpdate(0,{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = undefined;

var _StarRating = __webpack_require__(143);

__webpack_require__(142);

var Color = exports.Color = function Color(_ref) {
  var color = _ref.color,
      title = _ref.title,
      starLimit = _ref.starLimit,
      starSelected = _ref.starSelected,
      onRate = _ref.onRate;

  return React.createElement(
    'div',
    { className: 'color-container' },
    React.createElement('div', { className: 'color-top', style: color }),
    React.createElement(
      'div',
      { className: 'color-description' },
      React.createElement(
        'p',
        null,
        title
      ),
      React.createElement(_StarRating.StarRating, { starLimit: starLimit,
        starSelected: starSelected,
        onRate: onRate })
    )
  );
};

/***/ })

})
//# sourceMappingURL=0.8cc66eae40389c439d04.hot-update.js.map