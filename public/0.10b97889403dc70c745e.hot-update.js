webpackHotUpdate(0,{

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
      _onClickForm = _ref.onClickForm,
      _onAddColor = _ref.onAddColor;

  return React.createElement(
    'div',
    { className: 'color-organizer-header u-flex--fs' },
    React.createElement('input', { placeholder: 'search your color' }),
    React.createElement(
      'div',
      { className: 'u-optional-right' },
      React.createElement('button', {
        onClickForm: function onClickForm() {
          return _onClickForm();
        } }),
      React.createElement(_AddColorForm.AddColorForm, { isFormOpen: formIsOpen,
        onAddColor: function onAddColor(title, color) {
          return _onAddColor(title, color);
        } })
    )
  );
};

ColorOrganizerHeader.propTypes = {
  formIsOpen: PropTypes.bool.isRequired,
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

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".add-color-form {\n  display: none;\n  position: absolute;\n  right: 2rem;\n  width: 300px;\n  background-color: #fff;\n  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5); }\n  .add-color-form.active {\n    display: block; }\n", ""]);

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

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".color-organizer-header {\n  padding: .5rem 2rem;\n  background-color: #fafafa; }\n", ""]);

// exports


/***/ })

})
//# sourceMappingURL=0.10b97889403dc70c745e.hot-update.js.map