webpackHotUpdate(0,{

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var StarRating = exports.StarRating = function StarRating(_ref) {
  var starLimit = _ref.starLimit,
      starSelected = _ref.starSelected,
      onRate = _ref.onRate;

  var stars = [].concat(_toConsumableArray(new Array(starLimit))).map(function (star, i) {
    var starClass = i < starSelected - 1 ? "star selected" : "star";
    return React.createElement("div", { className: starClass });
  });

  return React.createElement(
    "div",
    { className: "star-rating-container" },
    stars
  );
};

/***/ })

})
//# sourceMappingURL=0.5fc46c1c1f48b6e03043.hot-update.js.map