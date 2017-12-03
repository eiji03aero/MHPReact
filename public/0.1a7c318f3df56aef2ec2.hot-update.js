webpackHotUpdate(0,{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _StarRating = __webpack_require__(143);

__webpack_require__(142);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Color = exports.Color = function Color(_ref) {
  var color = _ref.color,
      title = _ref.title,
      starLimit = _ref.starLimit,
      starSelected = _ref.starSelected,
      onRate = _ref.onRate;

  return _react2.default.createElement(
    'div',
    { className: 'color-container' },
    _react2.default.createElement('div', { className: 'color-top', style: color }),
    _react2.default.createElement(
      'div',
      { className: 'color-description' },
      _react2.default.createElement(
        'p',
        null,
        title
      ),
      _react2.default.createElement(_StarRating.StarRating, { starLimit: starLimit,
        starSelected: starSelected,
        onRate: onRate() })
    )
  );
};

/***/ })

})
//# sourceMappingURL=0.1a7c318f3df56aef2ec2.hot-update.js.map