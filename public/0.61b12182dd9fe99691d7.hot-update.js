webpackHotUpdate(0,{

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(9);

var _superagent = __webpack_require__(16);

var _superagent2 = _interopRequireDefault(_superagent);

var _ServiceSidebar = __webpack_require__(107);

var _ServiceSidebar2 = _interopRequireDefault(_ServiceSidebar);

var _ServiceHeader = __webpack_require__(110);

var _ServiceHeader2 = _interopRequireDefault(_ServiceHeader);

var _WelcomePage = __webpack_require__(112);

var _WelcomePage2 = _interopRequireDefault(_WelcomePage);

var _CommentLists = __webpack_require__(114);

var _CommentLists2 = _interopRequireDefault(_CommentLists);

var _ImageMap = __webpack_require__(115);

var _ImageMap2 = _interopRequireDefault(_ImageMap);

var _Wiki = __webpack_require__(118);

var _Wiki2 = _interopRequireDefault(_Wiki);

var _colorOrganizer = __webpack_require__(128);

var _colorOrganizer2 = _interopRequireDefault(_colorOrganizer);

__webpack_require__(144);

__webpack_require__(145);

__webpack_require__(146);

__webpack_require__(147);

__webpack_require__(148);

var _store = __webpack_require__(155);

var _store2 = _interopRequireDefault(_store);

var _action = __webpack_require__(175);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Testing========== 


window.storeFactory = _store2.default;
window.addColor = _action.addColor;
// ==========

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        { history: _reactRouterDom.browserHistory },
        _react2.default.createElement(
          'div',
          { className: 'serviceField _flx' },
          _react2.default.createElement(
            'div',
            { className: 'serviceLeft' },
            _react2.default.createElement(_ServiceSidebar2.default, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'serviceMain u-flex--col u-flex--1' },
            _react2.default.createElement(
              'div',
              { className: 'serviceHeader' },
              _react2.default.createElement(_ServiceHeader2.default, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'serviceContent u-flex--1' },
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _WelcomePage2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/comments', component: _CommentLists2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/imagemap', component: _ImageMap2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/wiki', component: _Wiki2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/color-organizer', component: _colorOrganizer2.default })
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ })

})
//# sourceMappingURL=0.61b12182dd9fe99691d7.hot-update.js.map