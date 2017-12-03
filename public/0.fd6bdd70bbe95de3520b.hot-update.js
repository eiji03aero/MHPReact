webpackHotUpdate(0,{

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "._fs-16 {\n  font-size: 16px; }\n\n._fs-20 {\n  font-size: 20px; }\n\n._fs-36 {\n  font-size: 36px; }\n", ""]);

// exports


/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(146);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(146, function() {
			var newContent = __webpack_require__(146);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 79:
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

var _ServiceSidebar = __webpack_require__(111);

var _ServiceSidebar2 = _interopRequireDefault(_ServiceSidebar);

var _ServiceHeader = __webpack_require__(114);

var _ServiceHeader2 = _interopRequireDefault(_ServiceHeader);

var _WelcomePage = __webpack_require__(116);

var _WelcomePage2 = _interopRequireDefault(_WelcomePage);

var _CommentLists = __webpack_require__(117);

var _CommentLists2 = _interopRequireDefault(_CommentLists);

var _ImageMap = __webpack_require__(118);

var _ImageMap2 = _interopRequireDefault(_ImageMap);

var _Wiki = __webpack_require__(121);

var _Wiki2 = _interopRequireDefault(_Wiki);

var _colorOrganizer = __webpack_require__(131);

var _colorOrganizer2 = _interopRequireDefault(_colorOrganizer);

__webpack_require__(133);

__webpack_require__(134);

__webpack_require__(147);

__webpack_require__(135);

__webpack_require__(136);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

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
}(_react.Component);

exports.default = App;

/***/ })

})
//# sourceMappingURL=0.fd6bdd70bbe95de3520b.hot-update.js.map