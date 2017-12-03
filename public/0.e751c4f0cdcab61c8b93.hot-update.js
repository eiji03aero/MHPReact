webpackHotUpdate(0,{

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _colorOrganizerHeader = __webpack_require__(138);

var _colorList = __webpack_require__(140);

__webpack_require__(145);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorOrganizer = function (_React$Component) {
  _inherits(ColorOrganizer, _React$Component);

  function ColorOrganizer(props) {
    _classCallCheck(this, ColorOrganizer);

    var _this = _possibleConstructorReturn(this, (ColorOrganizer.__proto__ || Object.getPrototypeOf(ColorOrganizer)).call(this, props));

    _this.state = {
      colors: [{
        color: { backgroundColor: '#004080' },
        title: "favorite blue",
        starSelected: 3,
        id: "2345"
      }, {
        color: { backgroundColor: '#eee' },
        title: "geeky grey",
        starSelected: 5,
        id: "2347"
      }, {
        color: { backgroundColor: '#0096ce' },
        title: "great blue",
        starSelected: 5,
        id: "2348"
      }],
      starLimit: 5
    };
    _this.onRate = _this.onRate.bind(_this);
    _this.onRemove = _this.onRemove.bind(_this);
    return _this;
  }

  _createClass(ColorOrganizer, [{
    key: 'onRate',
    value: function onRate(num, id) {
      var colors = this.state.colors;

      var newColors = colors.map(function (color) {
        if (color.id === id) {
          color.starSelected = num;
        }
      });
    }
  }, {
    key: 'onRemove',
    value: function onRemove(id) {
      var msg = 'you tried to remove but you cant!! id: ' + id;
      window.alert(msg);
    }
  }, {
    key: 'render',
    value: function render() {
      var onRate = this.onRate,
          onRemove = this.onRemove;
      var _state = this.state,
          colors = _state.colors,
          starLimit = _state.starLimit;


      return React.createElement(
        'div',
        { className: 'color-organizer-container' },
        React.createElement(_colorOrganizerHeader.ColorOrganizerHeader, null),
        React.createElement(_colorList.ColorList, { colors: colors,
          starLimit: starLimit,
          onRate: onRate,
          onRemove: onRemove })
      );
    }
  }]);

  return ColorOrganizer;
}(React.Component);

exports.default = ColorOrganizer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

})
//# sourceMappingURL=0.e751c4f0cdcab61c8b93.hot-update.js.map