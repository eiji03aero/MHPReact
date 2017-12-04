webpackHotUpdate(0,{

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeColor = exports.rateColor = exports.addColor = undefined;

var _constants = __webpack_require__(173);

var _constants2 = _interopRequireDefault(_constants);

var _uuid = __webpack_require__(176);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addColor = exports.addColor = function addColor(title, color) {
  return {
    type: _constants2.default.ADD_COLOR,
    id: (0, _uuid.v4)(),
    title: title,
    color: color,
    timeStamp: new Date().toString()
  };
};

var rateColor = exports.rateColor = function rateColor(id, rating) {
  return {
    type: _constants2.default.RATE_COLOR,
    id: id,
    rating: rating
  };
};

var removeColor = exports.removeColor = function removeColor(id) {
  return {
    type: _constants2.default.REMOVE_COLOR,
    id: id
  };
};

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(177);
var v4 = __webpack_require__(129);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(130);
var bytesToUuid = __webpack_require__(132);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

// random #'s we need to init node and clockseq
var _seedBytes = rng();

// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
var _nodeId = [
  _seedBytes[0] | 0x01,
  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
];

// Per 4.2.2, randomize (14 bit) clockseq
var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

// Previous uuid creation time
var _lastMSecs = 0, _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};

  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  var node = options.node || _nodeId;
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

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
//# sourceMappingURL=0.90119ba15e40e5032618.hot-update.js.map