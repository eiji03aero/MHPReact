webpackHotUpdate(0,{

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, PropTypes) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarRating = undefined;

__webpack_require__(143);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var StarRating = exports.StarRating = function StarRating(_ref) {
  var id = _ref.id,
      starLimit = _ref.starLimit,
      starSelected = _ref.starSelected,
      onRate = _ref.onRate;

  return React.createElement(
    "div",
    { className: "star-rating-container" },
    React.createElement(
      "div",
      { className: "star-rating" },
      [].concat(_toConsumableArray(new Array(starLimit))).map(function (star, i) {
        var starIdx = i + 1;
        var starClass = starIdx <= starSelected ? "star selected" : "star";
        return React.createElement("div", { className: starClass,
          key: i,
          onClick: function onClick() {
            return onRate(starIdx, id);
          } });
      })
    ),
    React.createElement(
      "p",
      { className: "_fs-20" },
      starSelected,
      " / ",
      starLimit
    )
  );
};

StarRating.propTypes = {
  id: PropTypes.string.isRequired,
  starLimit: PropTypes.number.isRequired,
  starSelected: PropTypes.number.isRequired,
  onRate: PropTypes.func.isRequired
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(5)))

/***/ })

})
//# sourceMappingURL=0.3edd5e7f221854d38d54.hot-update.js.map