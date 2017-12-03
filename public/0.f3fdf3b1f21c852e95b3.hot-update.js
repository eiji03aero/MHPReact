webpackHotUpdate(0,{

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".add-color-form {\n  position: relative;\n  right: 0;\n  width: 500px;\n  background-color: #fff;\n  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5); }\n", ""]);

// exports


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
  var formClass = formIsOpen ? 'add-color-form active' : 'add-color-form';

  var onSubmit = function onSubmit() {
    var title = _title.val();
    var color = _color.val();
    if (color && title) {
      return onAddColor(title, color);
    }
    return;
  };
  return React.createElement(
    'div',
    { className: formClass },
    React.createElement(
      'p',
      null,
      'Add your new color'
    ),
    React.createElement(
      'p',
      null,
      React.createElement(
        'span',
        null,
        'Title: '
      ),
      React.createElement('input', { ref: function ref(input) {
          return _title = input;
        } })
    ),
    React.createElement(
      'p',
      null,
      React.createElement(
        'span',
        null,
        'Color: '
      ),
      React.createElement('input', { ref: function ref(input) {
          return _color = input;
        } })
    ),
    React.createElement(
      'button',
      { onClick: onSubmit },
      'Submit'
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

/***/ })

})
//# sourceMappingURL=0.f3fdf3b1f21c852e95b3.hot-update.js.map