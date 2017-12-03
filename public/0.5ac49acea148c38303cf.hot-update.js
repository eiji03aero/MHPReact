webpackHotUpdate(0,{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = undefined;

__webpack_require__(142);

var Color = exports.Color = function Color(_ref) {
  var color = _ref.color,
      title = _ref.title,
      starLimit = _ref.starLimit,
      starSelected = _ref.starSelected,
      onRate = _ref.onRate;

  return React.createElement(
    "div",
    { className: "color-container" },
    React.createElement("div", { className: "color-top", style: color }),
    React.createElement(
      "div",
      { className: "color-description" },
      React.createElement(
        "p",
        null,
        title
      ),
      React.createElement(StarRating, { starLimit: starLimit, starSelected: starSelected, onRate: onRate })
    )
  );
};

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

throw new Error("Module build failed: \n  .color-top {\n ^\n      Invalid CSS after \"...rgba(0,0,0, .4)\": expected expression (e.g. 1px, bold), was \".color-top {\"\n      in /Users/eijiosakabe/Documents/data/my_pg/my_project/MyHomePage/MHPReact/src/components/colorOrganizer/presentation/color/color.scss (line 5, column 3)");

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(141);
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
		module.hot.accept(141, function() {
			var newContent = __webpack_require__(141);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

})
//# sourceMappingURL=0.5ac49acea148c38303cf.hot-update.js.map