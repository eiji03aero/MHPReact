webpackHotUpdate(0,{

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(156);

var _reducer = __webpack_require__(172);

var _reducer2 = _interopRequireDefault(_reducer);

var _initialState = __webpack_require__(174);

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = function logger(store) {
  return function (next) {
    return function (action) {
      var result = void 0;
      console.groupCollapsed('dispatching', action.type);
      console.log('prev state', store.getState());
      console.log('action', action);
      result = next(action);
      console.log('next state', store.getState());
      console.groupEnd();
    };
  };
};

var saver = function saver(store) {
  return function (next) {
    return function (action) {
      var result = next(action);
      localStorage['redux-storage'] = JSON.stringify(store.getState());
      return result;
    };
  };
};

var storeFactory = function storeFactory() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default;
  return (0, _redux.applyMiddleware)(logger, saver)(_redux.createStore)((0, _redux.combineReducers)({ colors: _reducer2.default }), localStorage(['redux-store']) ? JSON.parse(localStorage['redux-store']) : _initialState2.default);
};

exports.default = storeFactory;

/***/ })

})
//# sourceMappingURL=0.0618398dec2ece0ee0b7.hot-update.js.map