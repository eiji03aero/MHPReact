webpackHotUpdate(0,{

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, PropTypes) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = undefined;

var _StarRating = __webpack_require__(142);

__webpack_require__(144);

var Color = exports.Color = function Color(_ref) {
  var colorInfo = _ref.colorInfo,
      starLimit = _ref.starLimit,
      _onRate = _ref.onRate,
      onRemove = _ref.onRemove;
  var color = colorInfo.color,
      id = colorInfo.id,
      starSelected = colorInfo.starSelected,
      title = colorInfo.title;


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
      ),
      React.createElement(
        'button',
        { className: 'remove-color',
          onClick: function onClick() {
            return onRemove(id);
          } },
        'X'
      )
    ),
    React.createElement('div', { className: 'color-display', style: color }),
    React.createElement(
      'div',
      { className: 'color-description' },
      React.createElement(_StarRating.StarRating, { id: id,
        starLimit: starLimit,
        starSelected: starSelected,
        onRate: function onRate(num, id) {
          return _onRate(num, id);
        } })
    )
  );
};

Color.propTypes = {
  colorInfo: PropTypes.object.isRequired,
  starLimit: PropTypes.number.isRequired,
  onRate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(5)))

/***/ })

})
//# sourceMappingURL=0.a8cadb76a2b121bd2628.hot-update.js.map