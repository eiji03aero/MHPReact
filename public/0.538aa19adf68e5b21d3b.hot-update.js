webpackHotUpdate(0,{

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

/***/ })

})
//# sourceMappingURL=0.538aa19adf68e5b21d3b.hot-update.js.map