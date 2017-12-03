webpackHotUpdate(0,{

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _v = __webpack_require__(155);

var _v2 = _interopRequireDefault(_v);

var _colorOrganizerHeader = __webpack_require__(138);

var _colorList = __webpack_require__(140);

__webpack_require__(145);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
      starLimit: 5,
      formIsOpen: false
    };
    _this.onAddColor = _this.onAddColor.bind(_this);
    _this.onClickForm = _this.onClickForm.bind(_this);
    _this.onRate = _this.onRate.bind(_this);
    _this.onRemove = _this.onRemove.bind(_this);
    return _this;
  }

  _createClass(ColorOrganizer, [{
    key: 'onAddColor',
    value: function onAddColor(color, title) {
      var newColor = {
        color: color,
        title: title,
        id: (0, _v2.default)()
      };
      var newColors = [].concat(_toConsumableArray(this.state.colors), [newColor]);
      this.setState({ colors: newColors });
    }
  }, {
    key: 'onClickForm',
    value: function onClickForm() {
      var current = this.state.formIsOpen;
      this.setState({ formIsOpen: !current });
    }
  }, {
    key: 'onRate',
    value: function onRate(num, id) {
      var colors = this.state.colors;

      var newColors = colors.map(function (color) {
        if (color.id === id) {
          color.starSelected = num;
        }
        return color;
      });
      this.setState({
        colors: newColors
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
      var onAddColor = this.onAddColor,
          onClickForm = this.onClickForm,
          onRate = this.onRate,
          onRemove = this.onRemove;
      var _state = this.state,
          colors = _state.colors,
          starLimit = _state.starLimit,
          formIsOpen = _state.formIsOpen;


      return React.createElement(
        'div',
        { className: 'color-organizer-container' },
        React.createElement(_colorOrganizerHeader.ColorOrganizerHeader, {
          formIsOpen: formIsOpen,
          onClickForm: onClickForm,
          onAddColor: onAddColor }),
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
//# sourceMappingURL=0.c56e74caededc5bbae1d.hot-update.js.map