webpackHotUpdate(0,{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = undefined;

var _StarRating = __webpack_require__(143);

var _StarRating2 = _interopRequireDefault(_StarRating);

__webpack_require__(142);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      )
    )
  );
};

/***/ })

})
//# sourceMappingURL=0.db8bd2ce511ce6493195.hot-update.js.map