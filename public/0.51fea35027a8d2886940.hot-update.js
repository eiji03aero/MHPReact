webpackHotUpdate(0,{

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarRating = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(145);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var StarRating = exports.StarRating = function StarRating(_ref) {
  var starLimit = _ref.starLimit,
      starSelected = _ref.starSelected,
      onRate = _ref.onRate;

  var stars = [].concat(_toConsumableArray(new Array(starLimit))).map(function (star, i) {
    var starClass = i < starSelected - 1 ? "star selected" : "star";
    return _react2.default.createElement('div', { className: starClass,
      key: i,
      onClick: function onClick() {
        return onRate(i + 1);
      } });
  });

  return _react2.default.createElement(
    'div',
    { className: 'star-rating-container' },
    _react2.default.createElement(
      'div',
      { className: 'star-rating' },
      stars
    ),
    _react2.default.createElement(
      'p',
      null,
      starSelected,
      ' / ',
      starLimit
    )
  );
};

/***/ })

})
//# sourceMappingURL=0.51fea35027a8d2886940.hot-update.js.map