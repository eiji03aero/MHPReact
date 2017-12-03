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
      var newColors = [].concat(_toConsumableArray(this.state.color), [newColor]);
      this.setState({ colors: newColors });
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
      var onRate = this.onRate,
          onRemove = this.onRemove;
      var _state = this.state,
          colors = _state.colors,
          starLimit = _state.starLimit,
          formIsOpen = _state.formIsOpen;


      return React.createElement(
        'div',
        { className: 'color-organizer-container' },
        React.createElement(_colorOrganizerHeader.ColorOrganizerHeader, { formIsOpen: formIsOpen,
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

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, PropTypes) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorOrganizerHeader = undefined;

var _AddColorForm = __webpack_require__(159);

__webpack_require__(139);

var ColorOrganizerHeader = exports.ColorOrganizerHeader = function ColorOrganizerHeader(_ref) {
  var formIsOpen = _ref.formIsOpen,
      _onAddColor = _ref.onAddColor;

  return React.createElement(
    'div',
    { className: 'color-organizer-header u-flex--fs' },
    React.createElement('input', { placeholder: 'search your color' }),
    React.createElement(
      'div',
      { className: 'u-optional-right' },
      React.createElement(
        'button',
        null,
        'Add Color'
      ),
      React.createElement(_AddColorForm.AddColorForm, { isFormOpen: isFormOpen,
        onAddColor: function onAddColor(title, color) {
          return _onAddColor(title, color);
        } })
    )
  );
};

ColorOrganizerHeader.propTypes = {
  formIsOpen: PropTypes.boolean.isRequired,
  onAddColor: PropTypes.func.isRequired
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(5)))

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(32, function() {
			var newContent = __webpack_require__(32);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, PropTypes) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorList = undefined;

var _color = __webpack_require__(141);

__webpack_require__(153);

var ColorList = exports.ColorList = function ColorList(_ref) {
  var colors = _ref.colors,
      starLimit = _ref.starLimit,
      _onRate = _ref.onRate,
      _onRemove = _ref.onRemove;

  var colorList = colors.map(function (color, i) {
    return React.createElement(_color.Color, { key: i,
      colorInfo: color,
      starLimit: starLimit,
      onRate: function onRate(num, id) {
        return _onRate(num, id);
      },
      onRemove: function onRemove(id) {
        return _onRemove(id);
      } });
  });

  return React.createElement(
    'div',
    { className: 'color-list u-flex--item-table' },
    colorList
  );
};

ColorList.propTypes = {
  colors: PropTypes.array.isRequired,
  starLimit: PropTypes.number.isRequired,
  onRate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(5)))

/***/ }),

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

/***/ }),

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

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(33, function() {
			var newContent = __webpack_require__(33);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(34, function() {
			var newContent = __webpack_require__(34);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(35, function() {
			var newContent = __webpack_require__(35);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".color-list {\n  margin: 2rem; }\n", ""]);

// exports


/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(152);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(152, function() {
			var newContent = __webpack_require__(152);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".add-color-form {\n  position: relative;\n  right: 0;\n  width: 500px;\n  background-color: #fff;\n  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5); }\n", ""]);

// exports


/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(156);
var bytesToUuid = __webpack_require__(158);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
var rng;

var crypto = global.crypto || global.msCrypto; // for IE 11
if (crypto && crypto.getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef
  rng = function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

module.exports = rng;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(157)))

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 158:
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddColorForm = undefined;

__webpack_require__(160);

var AddColorForm = exports.AddColorForm = function AddColorForm(_ref) {
  var formIsOpen = _ref.formIsOpen,
      onAddColor = _ref.onAddColor;

  var _title = void 0,
      _color = void 0;

  var onSubmit = function onSubmit() {
    var title = _title.val();
    var color = _color.val();
    if (color && title) {
      return onAddColor(title, color);
    }
    return;
  };
  if (!formIsOpen) return;
  return React.createElement(
    "div",
    { className: "add-color-form" },
    React.createElement(
      "p",
      null,
      "Add your new color"
    ),
    React.createElement(
      "p",
      null,
      React.createElement(
        "span",
        null,
        "Title: "
      ),
      React.createElement("input", { ref: function ref(input) {
          return _title = input;
        } })
    ),
    React.createElement(
      "p",
      null,
      React.createElement(
        "span",
        null,
        "Color: "
      ),
      React.createElement("input", { ref: function ref(input) {
          return _color = input;
        } })
    ),
    React.createElement(
      "button",
      { onClick: onSubmit },
      "Submit"
    )
  );
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(154);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(154, function() {
			var newContent = __webpack_require__(154);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".color-organizer-header {\n  padding: .5rem 2rem;\n  background-color: #fafafa; }\n", ""]);

// exports


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".star-rating {\n  display: flex;\n  justify-content: center; }\n\n.star {\n  cursor: pointer;\n  height: 30px;\n  width: 30px;\n  margin: 2px;\n  background-color: grey;\n  clip-path: polygon(50% 0%, 64% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0% 38%, 37% 38%); }\n  .star.selected {\n    background-color: red; }\n", ""]);

// exports


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".color-container {\n  width: 400px;\n  margin-bottom: 2rem;\n  box-shadow: 2px 8px 4px 0 rgba(0, 0, 0, 0.4); }\n  .color-container .color-header {\n    position: relative;\n    width: 100%;\n    height: 50px;\n    background-color: #fff;\n    text-align: center; }\n    .color-container .color-header .remove-color {\n      position: absolute;\n      top: 10px;\n      right: 10px;\n      padding: .5rem;\n      cursor: pointer; }\n      .color-container .color-header .remove-color:hover {\n        opacity: .7; }\n  .color-container .color-display {\n    width: 100%;\n    height: 200px;\n    background-color: grey; }\n  .color-container .color-description {\n    width: 100%;\n    padding: 1rem 0;\n    background-color: #fff;\n    text-align: center; }\n", ""]);

// exports


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".color-organizer-container {\n  height: 100%;\n  background-color: #f0f0f0; }\n", ""]);

// exports


/***/ })

})
//# sourceMappingURL=0.598901b64c4bd8ea2b27.hot-update.js.map