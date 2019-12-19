(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/@material-ui/icons/AddAlert.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/icons/AddAlert.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), _react.default.createElement("path", {
  d: "M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"
})), 'AddAlert');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/AddCircleOutline.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/icons/AddCircleOutline.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
}), 'AddCircleOutline');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Dehaze.js":
/*!***************************************************!*\
  !*** ./node_modules/@material-ui/icons/Dehaze.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z"
}), 'Dehaze');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Edit.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Edit.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), 'Edit');

exports.default = _default;

/***/ }),

/***/ "./node_modules/autobind-decorator/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/autobind-decorator/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
 *
 * The decorator may be used on classes or methods
 * ```
 * @autobind
 * class FullBound {}
 *
 * class PartBound {
 *   @autobind
 *   method () {}
 * }
 * ```
 */


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = autobind;

function autobind() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 1) {
    return boundClass.apply(undefined, args);
  } else {
    return boundMethod.apply(undefined, args);
  }
}

/**
 * Use boundMethod to bind all methods on the target.prototype
 */
function boundClass(target) {
  // (Using reflect to get all keys including symbols)
  var keys = undefined;
  // Use Reflect if exists
  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
    keys = Reflect.ownKeys(target.prototype);
  } else {
    keys = Object.getOwnPropertyNames(target.prototype);
    // use symbols if support is provided
    if (typeof Object.getOwnPropertySymbols === 'function') {
      keys = keys.concat(Object.getOwnPropertySymbols(target.prototype));
    }
  }

  keys.forEach(function (key) {
    // Ignore special case target method
    if (key === 'constructor') {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

    // Only methods need binding
    if (typeof descriptor.value === 'function') {
      Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));
    }
  });
  return target;
}

/**
 * Return a descriptor removing the value and returning a getter
 * The getter will return a .bind version of the function
 * and memoize the result against a symbol on the instance
 */
function boundMethod(target, key, descriptor) {
  var fn = descriptor.value;

  if (typeof fn !== 'function') {
    throw new Error('@autobind decorator can only be applied to methods not: ' + typeof fn);
  }

  // In IE11 calling Object.defineProperty has a side-effect of evaluating the
  // getter for the property which is being replaced. This causes infinite
  // recursion and an "Out of stack space" error.
  var definingProperty = false;

  return {
    configurable: true,
    get: function get() {
      if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
        return fn;
      }

      var boundFn = fn.bind(this);
      definingProperty = true;
      Object.defineProperty(this, key, {
        value: boundFn,
        configurable: true,
        writable: true
      });
      definingProperty = false;
      return boundFn;
    }
  };
}
module.exports = exports['default'];


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-input-range/lib/css/index.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/react-input-range/lib/css/index.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-range__slider {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background: #3f51b5;\n  border: 1px solid #3f51b5;\n  border-radius: 100%;\n  cursor: pointer;\n  display: block;\n  height: 1rem;\n  margin-left: -0.5rem;\n  margin-top: -0.65rem;\n  outline: none;\n  position: absolute;\n  top: 50%;\n  -webkit-transition: box-shadow 0.3s ease-out, -webkit-transform 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out, -webkit-transform 0.3s ease-out;\n  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;\n  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out, -webkit-transform 0.3s ease-out;\n  width: 1rem; }\n  .input-range__slider:active {\n    -webkit-transform: scale(1.3);\n            transform: scale(1.3); }\n  .input-range__slider:focus {\n    box-shadow: 0 0 0 5px rgba(63, 81, 181, 0.2); }\n  .input-range--disabled .input-range__slider {\n    background: #cccccc;\n    border: 1px solid #cccccc;\n    box-shadow: none;\n    -webkit-transform: none;\n            transform: none; }\n\n.input-range__slider-container {\n  -webkit-transition: left 0.3s ease-out;\n  transition: left 0.3s ease-out; }\n\n.input-range__label {\n  color: #aaaaaa;\n  font-family: \"Helvetica Neue\", san-serif;\n  font-size: 0.8rem;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  white-space: nowrap; }\n\n.input-range__label--min,\n.input-range__label--max {\n  bottom: -1.4rem;\n  position: absolute; }\n\n.input-range__label--min {\n  left: 0; }\n\n.input-range__label--max {\n  right: 0; }\n\n.input-range__label--value {\n  position: absolute;\n  top: -1.8rem; }\n\n.input-range__label-container {\n  left: -50%;\n  position: relative; }\n  .input-range__label--max .input-range__label-container {\n    left: 50%; }\n\n.input-range__track {\n  background: #eeeeee;\n  border-radius: 0.3rem;\n  cursor: pointer;\n  display: block;\n  height: 0.3rem;\n  position: relative;\n  -webkit-transition: left 0.3s ease-out, width 0.3s ease-out;\n  transition: left 0.3s ease-out, width 0.3s ease-out; }\n  .input-range--disabled .input-range__track {\n    background: #eeeeee; }\n\n.input-range__track--background {\n  left: 0;\n  margin-top: -0.15rem;\n  position: absolute;\n  right: 0;\n  top: 50%; }\n\n.input-range__track--active {\n  background: #3f51b5; }\n\n.input-range {\n  height: 1rem;\n  position: relative;\n  width: 100%; }", ""]);

// exports


/***/ }),

/***/ "./node_modules/react-input-range/lib/css/index.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-input-range/lib/css/index.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader??ref--6-1!../../../postcss-loader/src??ref--6-2!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-input-range/lib/css/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/index.js":
/*!********************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inputRange = __webpack_require__(/*! ./input-range/input-range */ "./node_modules/react-input-range/lib/js/input-range/input-range.js");

var _inputRange2 = _interopRequireDefault(_inputRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore
 * @typedef {Object} ClientRect
 * @property {number} height
 * @property {number} left
 * @property {number} top
 * @property {number} width
 */

/**
 * @typedef {Object} InputRangeClassNames
 * @property {string} activeTrack
 * @property {string} disabledInputRange
 * @property {string} inputRange
 * @property {string} labelContainer
 * @property {string} maxLabel
 * @property {string} minLabel
 * @property {string} slider
 * @property {string} sliderContainer
 * @property {string} track
 * @property {string} valueLabel
 */

/**
 * @typedef {Function} LabelFormatter
 * @param {number} value
 * @param {string} type
 * @return {string}
 */

/**
 * @ignore
 * @typedef {Object} Point
 * @property {number} x
 * @property {number} y
 */

/**
 * @typedef {Object} Range
 * @property {number} min - Min value
 * @property {number} max - Max value
 */

exports.default = _inputRange2.default;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/input-range/default-class-names.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/input-range/default-class-names.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Default CSS class names
 * @ignore
 * @type {InputRangeClassNames}
 */
var DEFAULT_CLASS_NAMES = {
  activeTrack: 'input-range__track input-range__track--active',
  disabledInputRange: 'input-range input-range--disabled',
  inputRange: 'input-range',
  labelContainer: 'input-range__label-container',
  maxLabel: 'input-range__label input-range__label--max',
  minLabel: 'input-range__label input-range__label--min',
  slider: 'input-range__slider',
  sliderContainer: 'input-range__slider-container',
  track: 'input-range__track input-range__track--background',
  valueLabel: 'input-range__label input-range__label--value'
};

exports.default = DEFAULT_CLASS_NAMES;
module.exports = exports['default'];
//# sourceMappingURL=default-class-names.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/input-range/input-range.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/input-range/input-range.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/react-input-range/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autobindDecorator = __webpack_require__(/*! autobind-decorator */ "./node_modules/autobind-decorator/lib/index.js");

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _valueTransformer = __webpack_require__(/*! ./value-transformer */ "./node_modules/react-input-range/lib/js/input-range/value-transformer.js");

var valueTransformer = _interopRequireWildcard(_valueTransformer);

var _defaultClassNames = __webpack_require__(/*! ./default-class-names */ "./node_modules/react-input-range/lib/js/input-range/default-class-names.js");

var _defaultClassNames2 = _interopRequireDefault(_defaultClassNames);

var _label = __webpack_require__(/*! ./label */ "./node_modules/react-input-range/lib/js/input-range/label.js");

var _label2 = _interopRequireDefault(_label);

var _rangePropType = __webpack_require__(/*! ./range-prop-type */ "./node_modules/react-input-range/lib/js/input-range/range-prop-type.js");

var _rangePropType2 = _interopRequireDefault(_rangePropType);

var _valuePropType = __webpack_require__(/*! ./value-prop-type */ "./node_modules/react-input-range/lib/js/input-range/value-prop-type.js");

var _valuePropType2 = _interopRequireDefault(_valuePropType);

var _slider = __webpack_require__(/*! ./slider */ "./node_modules/react-input-range/lib/js/input-range/slider.js");

var _slider2 = _interopRequireDefault(_slider);

var _track = __webpack_require__(/*! ./track */ "./node_modules/react-input-range/lib/js/input-range/track.js");

var _track2 = _interopRequireDefault(_track);

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-input-range/lib/js/utils/index.js");

var _keyCodes = __webpack_require__(/*! ./key-codes */ "./node_modules/react-input-range/lib/js/input-range/key-codes.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/**
 * A React component that allows users to input numeric values within a range
 * by dragging its sliders.
 */
var InputRange = (_class = function (_React$Component) {
  _inherits(InputRange, _React$Component);

  _createClass(InputRange, null, [{
    key: 'propTypes',

    /**
     * @ignore
     * @override
     * @return {Object}
     */
    get: function get() {
      return {
        allowSameValues: _propTypes2.default.bool,
        ariaLabelledby: _propTypes2.default.string,
        ariaControls: _propTypes2.default.string,
        classNames: _propTypes2.default.objectOf(_propTypes2.default.string),
        disabled: _propTypes2.default.bool,
        draggableTrack: _propTypes2.default.bool,
        formatLabel: _propTypes2.default.func,
        maxValue: _rangePropType2.default,
        minValue: _rangePropType2.default,
        name: _propTypes2.default.string,
        onChangeStart: _propTypes2.default.func,
        onChange: _propTypes2.default.func.isRequired,
        onChangeComplete: _propTypes2.default.func,
        step: _propTypes2.default.number,
        value: _valuePropType2.default
      };
    }

    /**
     * @ignore
     * @override
     * @return {Object}
     */

  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        allowSameValues: false,
        classNames: _defaultClassNames2.default,
        disabled: false,
        maxValue: 10,
        minValue: 0,
        step: 1
      };
    }

    /**
     * @param {Object} props
     * @param {boolean} [props.allowSameValues]
     * @param {string} [props.ariaLabelledby]
     * @param {string} [props.ariaControls]
     * @param {InputRangeClassNames} [props.classNames]
     * @param {boolean} [props.disabled = false]
     * @param {Function} [props.formatLabel]
     * @param {number|Range} [props.maxValue = 10]
     * @param {number|Range} [props.minValue = 0]
     * @param {string} [props.name]
     * @param {string} props.onChange
     * @param {Function} [props.onChangeComplete]
     * @param {Function} [props.onChangeStart]
     * @param {number} [props.step = 1]
     * @param {number|Range} props.value
     */

  }]);

  function InputRange(props) {
    _classCallCheck(this, InputRange);

    /**
     * @private
     * @type {?number}
     */
    var _this = _possibleConstructorReturn(this, (InputRange.__proto__ || Object.getPrototypeOf(InputRange)).call(this, props));

    _this.startValue = null;

    /**
     * @private
     * @type {?Component}
     */
    _this.node = null;

    /**
     * @private
     * @type {?Component}
     */
    _this.trackNode = null;

    /**
     * @private
     * @type {bool}
     */
    _this.isSliderDragging = false;

    /**
     * @private
     * @type {?string}
     */
    _this.lastKeyMoved = null;
    return _this;
  }

  /**
   * @ignore
   * @override
   * @return {void}
   */


  _createClass(InputRange, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeDocumentMouseUpListener();
      this.removeDocumentTouchEndListener();
    }

    /**
     * Return the CSS class name of the component
     * @private
     * @return {string}
     */

  }, {
    key: 'getComponentClassName',
    value: function getComponentClassName() {
      if (!this.props.disabled) {
        return this.props.classNames.inputRange;
      }

      return this.props.classNames.disabledInputRange;
    }

    /**
     * Return the bounding rect of the track
     * @private
     * @return {ClientRect}
     */

  }, {
    key: 'getTrackClientRect',
    value: function getTrackClientRect() {
      return this.trackNode.getClientRect();
    }

    /**
     * Return the slider key closest to a point
     * @private
     * @param {Point} position
     * @return {string}
     */

  }, {
    key: 'getKeyByPosition',
    value: function getKeyByPosition(position) {
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var positions = valueTransformer.getPositionsFromValues(values, this.props.minValue, this.props.maxValue, this.getTrackClientRect());

      if (this.isMultiValue()) {
        var distanceToMin = (0, _utils.distanceTo)(position, positions.min);
        var distanceToMax = (0, _utils.distanceTo)(position, positions.max);

        if (distanceToMin < distanceToMax) {
          return 'min';
        }
      }

      return 'max';
    }

    /**
     * Return all the slider keys
     * @private
     * @return {string[]}
     */

  }, {
    key: 'getKeys',
    value: function getKeys() {
      if (this.isMultiValue()) {
        return ['min', 'max'];
      }

      return ['max'];
    }

    /**
     * Return true if the difference between the new and the current value is
     * greater or equal to the step amount of the component
     * @private
     * @param {Range} values
     * @return {boolean}
     */

  }, {
    key: 'hasStepDifference',
    value: function hasStepDifference(values) {
      var currentValues = valueTransformer.getValueFromProps(this.props, this.isMultiValue());

      return (0, _utils.length)(values.min, currentValues.min) >= this.props.step || (0, _utils.length)(values.max, currentValues.max) >= this.props.step;
    }

    /**
     * Return true if the component accepts a min and max value
     * @private
     * @return {boolean}
     */

  }, {
    key: 'isMultiValue',
    value: function isMultiValue() {
      return (0, _utils.isObject)(this.props.value);
    }

    /**
     * Return true if the range is within the max and min value of the component
     * @private
     * @param {Range} values
     * @return {boolean}
     */

  }, {
    key: 'isWithinRange',
    value: function isWithinRange(values) {
      if (this.isMultiValue()) {
        return values.min >= this.props.minValue && values.max <= this.props.maxValue && this.props.allowSameValues ? values.min <= values.max : values.min < values.max;
      }

      return values.max >= this.props.minValue && values.max <= this.props.maxValue;
    }

    /**
     * Return true if the new value should trigger a render
     * @private
     * @param {Range} values
     * @return {boolean}
     */

  }, {
    key: 'shouldUpdate',
    value: function shouldUpdate(values) {
      return this.isWithinRange(values) && this.hasStepDifference(values);
    }

    /**
     * Update the position of a slider
     * @private
     * @param {string} key
     * @param {Point} position
     * @return {void}
     */

  }, {
    key: 'updatePosition',
    value: function updatePosition(key, position) {
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var positions = valueTransformer.getPositionsFromValues(values, this.props.minValue, this.props.maxValue, this.getTrackClientRect());

      positions[key] = position;
      this.lastKeyMoved = key;

      this.updatePositions(positions);
    }

    /**
     * Update the positions of multiple sliders
     * @private
     * @param {Object} positions
     * @param {Point} positions.min
     * @param {Point} positions.max
     * @return {void}
     */

  }, {
    key: 'updatePositions',
    value: function updatePositions(positions) {
      var values = {
        min: valueTransformer.getValueFromPosition(positions.min, this.props.minValue, this.props.maxValue, this.getTrackClientRect()),
        max: valueTransformer.getValueFromPosition(positions.max, this.props.minValue, this.props.maxValue, this.getTrackClientRect())
      };

      var transformedValues = {
        min: valueTransformer.getStepValueFromValue(values.min, this.props.step),
        max: valueTransformer.getStepValueFromValue(values.max, this.props.step)
      };

      this.updateValues(transformedValues);
    }

    /**
     * Update the value of a slider
     * @private
     * @param {string} key
     * @param {number} value
     * @return {void}
     */

  }, {
    key: 'updateValue',
    value: function updateValue(key, value) {
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());

      values[key] = value;

      this.updateValues(values);
    }

    /**
     * Update the values of multiple sliders
     * @private
     * @param {Range|number} values
     * @return {void}
     */

  }, {
    key: 'updateValues',
    value: function updateValues(values) {
      if (!this.shouldUpdate(values)) {
        return;
      }

      this.props.onChange(this.isMultiValue() ? values : values.max);
    }

    /**
     * Increment the value of a slider by key name
     * @private
     * @param {string} key
     * @return {void}
     */

  }, {
    key: 'incrementValue',
    value: function incrementValue(key) {
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var value = values[key] + this.props.step;

      this.updateValue(key, value);
    }

    /**
     * Decrement the value of a slider by key name
     * @private
     * @param {string} key
     * @return {void}
     */

  }, {
    key: 'decrementValue',
    value: function decrementValue(key) {
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var value = values[key] - this.props.step;

      this.updateValue(key, value);
    }

    /**
     * Listen to mouseup event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentMouseUpListener',
    value: function addDocumentMouseUpListener() {
      this.removeDocumentMouseUpListener();
      this.node.ownerDocument.addEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * Listen to touchend event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentTouchEndListener',
    value: function addDocumentTouchEndListener() {
      this.removeDocumentTouchEndListener();
      this.node.ownerDocument.addEventListener('touchend', this.handleTouchEnd);
    }

    /**
     * Stop listening to mouseup event
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentMouseUpListener',
    value: function removeDocumentMouseUpListener() {
      this.node.ownerDocument.removeEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * Stop listening to touchend event
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentTouchEndListener',
    value: function removeDocumentTouchEndListener() {
      this.node.ownerDocument.removeEventListener('touchend', this.handleTouchEnd);
    }

    /**
     * Handle any "mousemove" event received by the slider
     * @private
     * @param {SyntheticEvent} event
     * @param {string} key
     * @return {void}
     */

  }, {
    key: 'handleSliderDrag',
    value: function handleSliderDrag(event, key) {
      var _this2 = this;

      if (this.props.disabled) {
        return;
      }

      var position = valueTransformer.getPositionFromEvent(event, this.getTrackClientRect());
      this.isSliderDragging = true;
      requestAnimationFrame(function () {
        return _this2.updatePosition(key, position);
      });
    }

    /**
     * Handle any "mousemove" event received by the track
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleTrackDrag',
    value: function handleTrackDrag(event, prevEvent) {
      if (this.props.disabled || !this.props.draggableTrack || this.isSliderDragging) {
        return;
      }

      var _props = this.props,
          maxValue = _props.maxValue,
          minValue = _props.minValue,
          _props$value = _props.value,
          max = _props$value.max,
          min = _props$value.min;


      var position = valueTransformer.getPositionFromEvent(event, this.getTrackClientRect());
      var value = valueTransformer.getValueFromPosition(position, minValue, maxValue, this.getTrackClientRect());
      var stepValue = valueTransformer.getStepValueFromValue(value, this.props.step);

      var prevPosition = valueTransformer.getPositionFromEvent(prevEvent, this.getTrackClientRect());
      var prevValue = valueTransformer.getValueFromPosition(prevPosition, minValue, maxValue, this.getTrackClientRect());
      var prevStepValue = valueTransformer.getStepValueFromValue(prevValue, this.props.step);

      var offset = prevStepValue - stepValue;

      var transformedValues = {
        min: min - offset,
        max: max - offset
      };

      this.updateValues(transformedValues);
    }

    /**
     * Handle any "keydown" event received by the slider
     * @private
     * @param {SyntheticEvent} event
     * @param {string} key
     * @return {void}
     */

  }, {
    key: 'handleSliderKeyDown',
    value: function handleSliderKeyDown(event, key) {
      if (this.props.disabled) {
        return;
      }

      switch (event.keyCode) {
        case _keyCodes.LEFT_ARROW:
        case _keyCodes.DOWN_ARROW:
          event.preventDefault();
          this.decrementValue(key);
          break;

        case _keyCodes.RIGHT_ARROW:
        case _keyCodes.UP_ARROW:
          event.preventDefault();
          this.incrementValue(key);
          break;

        default:
          break;
      }
    }

    /**
     * Handle any "mousedown" event received by the track
     * @private
     * @param {SyntheticEvent} event
     * @param {Point} position
     * @return {void}
     */

  }, {
    key: 'handleTrackMouseDown',
    value: function handleTrackMouseDown(event, position) {
      if (this.props.disabled) {
        return;
      }

      var _props2 = this.props,
          maxValue = _props2.maxValue,
          minValue = _props2.minValue,
          _props2$value = _props2.value,
          max = _props2$value.max,
          min = _props2$value.min;


      event.preventDefault();

      var value = valueTransformer.getValueFromPosition(position, minValue, maxValue, this.getTrackClientRect());
      var stepValue = valueTransformer.getStepValueFromValue(value, this.props.step);

      if (!this.props.draggableTrack || stepValue > max || stepValue < min) {
        this.updatePosition(this.getKeyByPosition(position), position);
      }
    }

    /**
     * Handle the start of any mouse/touch event
     * @private
     * @return {void}
     */

  }, {
    key: 'handleInteractionStart',
    value: function handleInteractionStart() {
      if (this.props.onChangeStart) {
        this.props.onChangeStart(this.props.value);
      }

      if (this.props.onChangeComplete && !(0, _utils.isDefined)(this.startValue)) {
        this.startValue = this.props.value;
      }
    }

    /**
     * Handle the end of any mouse/touch event
     * @private
     * @return {void}
     */

  }, {
    key: 'handleInteractionEnd',
    value: function handleInteractionEnd() {
      if (this.isSliderDragging) {
        this.isSliderDragging = false;
      }

      if (!this.props.onChangeComplete || !(0, _utils.isDefined)(this.startValue)) {
        return;
      }

      if (this.startValue !== this.props.value) {
        this.props.onChangeComplete(this.props.value);
      }

      this.startValue = null;
    }

    /**
     * Handle any "keydown" event received by the component
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      this.handleInteractionStart(event);
    }

    /**
     * Handle any "keyup" event received by the component
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(event) {
      this.handleInteractionEnd(event);
    }

    /**
     * Handle any "mousedown" event received by the component
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(event) {
      this.handleInteractionStart(event);
      this.addDocumentMouseUpListener();
    }

    /**
     * Handle any "mouseup" event received by the component
     * @private
     * @param {SyntheticEvent} event
     */

  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp(event) {
      this.handleInteractionEnd(event);
      this.removeDocumentMouseUpListener();
    }

    /**
     * Handle any "touchstart" event received by the component
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(event) {
      this.handleInteractionStart(event);
      this.addDocumentTouchEndListener();
    }

    /**
     * Handle any "touchend" event received by the component
     * @private
     * @param {SyntheticEvent} event
     */

  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd(event) {
      this.handleInteractionEnd(event);
      this.removeDocumentTouchEndListener();
    }

    /**
     * Return JSX of sliders
     * @private
     * @return {JSX.Element}
     */

  }, {
    key: 'renderSliders',
    value: function renderSliders() {
      var _this3 = this;

      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var percentages = valueTransformer.getPercentagesFromValues(values, this.props.minValue, this.props.maxValue);
      var keys = this.props.allowSameValues && this.lastKeyMoved === 'min' ? this.getKeys().reverse() : this.getKeys();

      return keys.map(function (key) {
        var value = values[key];
        var percentage = percentages[key];

        var _props3 = _this3.props,
            maxValue = _props3.maxValue,
            minValue = _props3.minValue;


        if (key === 'min') {
          maxValue = values.max;
        } else {
          minValue = values.min;
        }

        var slider = _react2.default.createElement(_slider2.default, {
          ariaLabelledby: _this3.props.ariaLabelledby,
          ariaControls: _this3.props.ariaControls,
          classNames: _this3.props.classNames,
          formatLabel: _this3.props.formatLabel,
          key: key,
          maxValue: maxValue,
          minValue: minValue,
          onSliderDrag: _this3.handleSliderDrag,
          onSliderKeyDown: _this3.handleSliderKeyDown,
          percentage: percentage,
          type: key,
          value: value });

        return slider;
      });
    }

    /**
     * Return JSX of hidden inputs
     * @private
     * @return {JSX.Element}
     */

  }, {
    key: 'renderHiddenInputs',
    value: function renderHiddenInputs() {
      var _this4 = this;

      if (!this.props.name) {
        return [];
      }

      var isMultiValue = this.isMultiValue();
      var values = valueTransformer.getValueFromProps(this.props, isMultiValue);

      return this.getKeys().map(function (key) {
        var value = values[key];
        var name = isMultiValue ? '' + _this4.props.name + (0, _utils.captialize)(key) : _this4.props.name;

        return _react2.default.createElement('input', { key: key, type: 'hidden', name: name, value: value });
      });
    }

    /**
     * @ignore
     * @override
     * @return {JSX.Element}
     */

  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var componentClassName = this.getComponentClassName();
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var percentages = valueTransformer.getPercentagesFromValues(values, this.props.minValue, this.props.maxValue);

      return _react2.default.createElement(
        'div',
        {
          'aria-disabled': this.props.disabled,
          ref: function ref(node) {
            _this5.node = node;
          },
          className: componentClassName,
          onKeyDown: this.handleKeyDown,
          onKeyUp: this.handleKeyUp,
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleTouchStart },
        _react2.default.createElement(
          _label2.default,
          {
            classNames: this.props.classNames,
            formatLabel: this.props.formatLabel,
            type: 'min' },
          this.props.minValue
        ),
        _react2.default.createElement(
          _track2.default,
          {
            classNames: this.props.classNames,
            draggableTrack: this.props.draggableTrack,
            ref: function ref(trackNode) {
              _this5.trackNode = trackNode;
            },
            percentages: percentages,
            onTrackDrag: this.handleTrackDrag,
            onTrackMouseDown: this.handleTrackMouseDown },
          this.renderSliders()
        ),
        _react2.default.createElement(
          _label2.default,
          {
            classNames: this.props.classNames,
            formatLabel: this.props.formatLabel,
            type: 'max' },
          this.props.maxValue
        ),
        this.renderHiddenInputs()
      );
    }
  }]);

  return InputRange;
}(_react2.default.Component), (_applyDecoratedDescriptor(_class.prototype, 'handleSliderDrag', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleSliderDrag'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTrackDrag', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTrackDrag'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleSliderKeyDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleSliderKeyDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTrackMouseDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTrackMouseDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleInteractionStart', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleInteractionStart'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleInteractionEnd', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleInteractionEnd'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleKeyDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleKeyDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleKeyUp', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleKeyUp'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseUp', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseUp'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchStart', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchStart'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchEnd', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchEnd'), _class.prototype)), _class);
exports.default = InputRange;
module.exports = exports['default'];
//# sourceMappingURL=input-range.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/input-range/key-codes.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/input-range/key-codes.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** @ignore */
var DOWN_ARROW = exports.DOWN_ARROW = 40;

/** @ignore */
var LEFT_ARROW = exports.LEFT_ARROW = 37;

/** @ignore */
var RIGHT_ARROW = exports.RIGHT_ARROW = 39;

/** @ignore */
var UP_ARROW = exports.UP_ARROW = 38;
//# sourceMappingURL=key-codes.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/input-range/label.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/input-range/label.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Label;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/react-input-range/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore
 * @param {Object} props
 * @param {InputRangeClassNames} props.classNames
 * @param {Function} props.formatLabel
 * @param {string} props.type
 */
function Label(props) {
  var labelValue = props.formatLabel ? props.formatLabel(props.children, props.type) : props.children;

  return _react2.default.createElement(
    'span',
    { className: props.classNames[props.type + 'Label'] },
    _react2.default.createElement(
      'span',
      { className: props.classNames.labelContainer },
      labelValue
    )
  );
}

/**
 * @type {Object}
 * @property {Function} children
 * @property {Function} classNames
 * @property {Function} formatLabel
 * @property {Function} type
 */
Label.propTypes = {
  children: _propTypes2.default.node.isRequired,
  classNames: _propTypes2.default.objectOf(_propTypes2.default.string).isRequired,
  formatLabel: _propTypes2.default.func,
  type: _propTypes2.default.string.isRequired
};
module.exports = exports['default'];
//# sourceMappingURL=label.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/input-range/range-prop-type.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/input-range/range-prop-type.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rangePropType;

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-input-range/lib/js/utils/index.js");

/**
 * @ignore
 * @param {Object} props - React component props
 * @return {?Error} Return Error if validation fails
 */
function rangePropType(props) {
  var maxValue = props.maxValue,
      minValue = props.minValue;


  if (!(0, _utils.isNumber)(minValue) || !(0, _utils.isNumber)(maxValue)) {
    return new Error('"minValue" and "maxValue" must be a number');
  }

  if (minValue >= maxValue) {
    return new Error('"minValue" must be smaller than "maxValue"');
  }
}
module.exports = exports['default'];
//# sourceMappingURL=range-prop-type.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/input-range/slider.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/input-range/slider.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/react-input-range/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autobindDecorator = __webpack_require__(/*! autobind-decorator */ "./node_modules/autobind-decorator/lib/index.js");

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _label = __webpack_require__(/*! ./label */ "./node_modules/react-input-range/lib/js/input-range/label.js");

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/**
 * @ignore
 */
var Slider = (_class = function (_React$Component) {
  _inherits(Slider, _React$Component);

  _createClass(Slider, null, [{
    key: 'propTypes',

    /**
     * Accepted propTypes of Slider
     * @override
     * @return {Object}
     * @property {Function} ariaLabelledby
     * @property {Function} ariaControls
     * @property {Function} className
     * @property {Function} formatLabel
     * @property {Function} maxValue
     * @property {Function} minValue
     * @property {Function} onSliderDrag
     * @property {Function} onSliderKeyDown
     * @property {Function} percentage
     * @property {Function} type
     * @property {Function} value
     */
    get: function get() {
      return {
        ariaLabelledby: _propTypes2.default.string,
        ariaControls: _propTypes2.default.string,
        classNames: _propTypes2.default.objectOf(_propTypes2.default.string).isRequired,
        formatLabel: _propTypes2.default.func,
        maxValue: _propTypes2.default.number,
        minValue: _propTypes2.default.number,
        onSliderDrag: _propTypes2.default.func.isRequired,
        onSliderKeyDown: _propTypes2.default.func.isRequired,
        percentage: _propTypes2.default.number.isRequired,
        type: _propTypes2.default.string.isRequired,
        value: _propTypes2.default.number.isRequired
      };
    }

    /**
     * @param {Object} props
     * @param {string} [props.ariaLabelledby]
     * @param {string} [props.ariaControls]
     * @param {InputRangeClassNames} props.classNames
     * @param {Function} [props.formatLabel]
     * @param {number} [props.maxValue]
     * @param {number} [props.minValue]
     * @param {Function} props.onSliderKeyDown
     * @param {Function} props.onSliderDrag
     * @param {number} props.percentage
     * @param {number} props.type
     * @param {number} props.value
     */

  }]);

  function Slider(props) {
    _classCallCheck(this, Slider);

    /**
     * @private
     * @type {?Component}
     */
    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.node = null;
    return _this;
  }

  /**
   * @ignore
   * @override
   * @return {void}
   */


  _createClass(Slider, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeDocumentMouseMoveListener();
      this.removeDocumentMouseUpListener();
      this.removeDocumentTouchEndListener();
      this.removeDocumentTouchMoveListener();
    }

    /**
     * @private
     * @return {Object}
     */

  }, {
    key: 'getStyle',
    value: function getStyle() {
      var perc = (this.props.percentage || 0) * 100;
      var style = {
        position: 'absolute',
        left: perc + '%'
      };

      return style;
    }

    /**
     * Listen to mousemove event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentMouseMoveListener',
    value: function addDocumentMouseMoveListener() {
      this.removeDocumentMouseMoveListener();
      this.node.ownerDocument.addEventListener('mousemove', this.handleMouseMove);
    }

    /**
     * Listen to mouseup event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentMouseUpListener',
    value: function addDocumentMouseUpListener() {
      this.removeDocumentMouseUpListener();
      this.node.ownerDocument.addEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * Listen to touchmove event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentTouchMoveListener',
    value: function addDocumentTouchMoveListener() {
      this.removeDocumentTouchMoveListener();
      this.node.ownerDocument.addEventListener('touchmove', this.handleTouchMove);
    }

    /**
     * Listen to touchend event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentTouchEndListener',
    value: function addDocumentTouchEndListener() {
      this.removeDocumentTouchEndListener();
      this.node.ownerDocument.addEventListener('touchend', this.handleTouchEnd);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentMouseMoveListener',
    value: function removeDocumentMouseMoveListener() {
      this.node.ownerDocument.removeEventListener('mousemove', this.handleMouseMove);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentMouseUpListener',
    value: function removeDocumentMouseUpListener() {
      this.node.ownerDocument.removeEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentTouchMoveListener',
    value: function removeDocumentTouchMoveListener() {
      this.node.ownerDocument.removeEventListener('touchmove', this.handleTouchMove);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentTouchEndListener',
    value: function removeDocumentTouchEndListener() {
      this.node.ownerDocument.removeEventListener('touchend', this.handleTouchEnd);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown() {
      this.addDocumentMouseMoveListener();
      this.addDocumentMouseUpListener();
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp() {
      this.removeDocumentMouseMoveListener();
      this.removeDocumentMouseUpListener();
    }

    /**
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {
      this.props.onSliderDrag(event, this.props.type);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart() {
      this.addDocumentTouchEndListener();
      this.addDocumentTouchMoveListener();
    }

    /**
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleTouchMove',
    value: function handleTouchMove(event) {
      this.props.onSliderDrag(event, this.props.type);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd() {
      this.removeDocumentTouchMoveListener();
      this.removeDocumentTouchEndListener();
    }

    /**
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      this.props.onSliderKeyDown(event, this.props.type);
    }

    /**
     * @override
     * @return {JSX.Element}
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = this.getStyle();

      return _react2.default.createElement(
        'span',
        {
          className: this.props.classNames.sliderContainer,
          ref: function ref(node) {
            _this2.node = node;
          },
          style: style },
        _react2.default.createElement(
          _label2.default,
          {
            classNames: this.props.classNames,
            formatLabel: this.props.formatLabel,
            type: 'value' },
          this.props.value
        ),
        _react2.default.createElement('div', {
          'aria-labelledby': this.props.ariaLabelledby,
          'aria-controls': this.props.ariaControls,
          'aria-valuemax': this.props.maxValue,
          'aria-valuemin': this.props.minValue,
          'aria-valuenow': this.props.value,
          className: this.props.classNames.slider,
          draggable: 'false',
          onKeyDown: this.handleKeyDown,
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleTouchStart,
          role: 'slider',
          tabIndex: '0' })
      );
    }
  }]);

  return Slider;
}(_react2.default.Component), (_applyDecoratedDescriptor(_class.prototype, 'handleMouseDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseUp', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseUp'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseMove', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseMove'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchStart', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchStart'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchMove', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchMove'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchEnd', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchEnd'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleKeyDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleKeyDown'), _class.prototype)), _class);
exports.default = Slider;
module.exports = exports['default'];
//# sourceMappingURL=slider.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/input-range/track.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/input-range/track.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/react-input-range/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autobindDecorator = __webpack_require__(/*! autobind-decorator */ "./node_modules/autobind-decorator/lib/index.js");

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/**
 * @ignore
 */
var Track = (_class = function (_React$Component) {
  _inherits(Track, _React$Component);

  _createClass(Track, null, [{
    key: 'propTypes',

    /**
     * @override
     * @return {Object}
     * @property {Function} children
     * @property {Function} classNames
     * @property {Boolean} draggableTrack
     * @property {Function} onTrackDrag
     * @property {Function} onTrackMouseDown
     * @property {Function} percentages
     */
    get: function get() {
      return {
        children: _propTypes2.default.node.isRequired,
        classNames: _propTypes2.default.objectOf(_propTypes2.default.string).isRequired,
        draggableTrack: _propTypes2.default.bool,
        onTrackDrag: _propTypes2.default.func,
        onTrackMouseDown: _propTypes2.default.func.isRequired,
        percentages: _propTypes2.default.objectOf(_propTypes2.default.number).isRequired
      };
    }

    /**
     * @param {Object} props
     * @param {InputRangeClassNames} props.classNames
     * @param {Boolean} props.draggableTrack
     * @param {Function} props.onTrackDrag
     * @param {Function} props.onTrackMouseDown
     * @param {number} props.percentages
     */

  }]);

  function Track(props) {
    _classCallCheck(this, Track);

    /**
     * @private
     * @type {?Component}
     */
    var _this = _possibleConstructorReturn(this, (Track.__proto__ || Object.getPrototypeOf(Track)).call(this, props));

    _this.node = null;
    _this.trackDragEvent = null;
    return _this;
  }

  /**
   * @private
   * @return {ClientRect}
   */


  _createClass(Track, [{
    key: 'getClientRect',
    value: function getClientRect() {
      return this.node.getBoundingClientRect();
    }

    /**
     * @private
     * @return {Object} CSS styles
     */

  }, {
    key: 'getActiveTrackStyle',
    value: function getActiveTrackStyle() {
      var width = (this.props.percentages.max - this.props.percentages.min) * 100 + '%';
      var left = this.props.percentages.min * 100 + '%';

      return { left: left, width: width };
    }

    /**
     * Listen to mousemove event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentMouseMoveListener',
    value: function addDocumentMouseMoveListener() {
      this.removeDocumentMouseMoveListener();
      this.node.ownerDocument.addEventListener('mousemove', this.handleMouseMove);
    }

    /**
     * Listen to mouseup event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentMouseUpListener',
    value: function addDocumentMouseUpListener() {
      this.removeDocumentMouseUpListener();
      this.node.ownerDocument.addEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentMouseMoveListener',
    value: function removeDocumentMouseMoveListener() {
      this.node.ownerDocument.removeEventListener('mousemove', this.handleMouseMove);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentMouseUpListener',
    value: function removeDocumentMouseUpListener() {
      this.node.ownerDocument.removeEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {
      if (!this.props.draggableTrack) {
        return;
      }

      if (this.trackDragEvent !== null) {
        this.props.onTrackDrag(event, this.trackDragEvent);
      }

      this.trackDragEvent = event;
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp() {
      if (!this.props.draggableTrack) {
        return;
      }

      this.removeDocumentMouseMoveListener();
      this.removeDocumentMouseUpListener();
      this.trackDragEvent = null;
    }

    /**
     * @private
     * @param {SyntheticEvent} event - User event
     */

  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(event) {
      var clientX = event.touches ? event.touches[0].clientX : event.clientX;
      var trackClientRect = this.getClientRect();
      var position = {
        x: clientX - trackClientRect.left,
        y: 0
      };

      this.props.onTrackMouseDown(event, position);

      if (this.props.draggableTrack) {
        this.addDocumentMouseMoveListener();
        this.addDocumentMouseUpListener();
      }
    }

    /**
     * @private
     * @param {SyntheticEvent} event - User event
     */

  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(event) {
      event.preventDefault();

      this.handleMouseDown(event);
    }

    /**
     * @override
     * @return {JSX.Element}
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var activeTrackStyle = this.getActiveTrackStyle();

      return _react2.default.createElement(
        'div',
        {
          className: this.props.classNames.track,
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleTouchStart,
          ref: function ref(node) {
            _this2.node = node;
          } },
        _react2.default.createElement('div', {
          style: activeTrackStyle,
          className: this.props.classNames.activeTrack }),
        this.props.children
      );
    }
  }]);

  return Track;
}(_react2.default.Component), (_applyDecoratedDescriptor(_class.prototype, 'handleMouseMove', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseMove'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseUp', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseUp'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchStart', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchStart'), _class.prototype)), _class);
exports.default = Track;
module.exports = exports['default'];
//# sourceMappingURL=track.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/input-range/value-prop-type.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/input-range/value-prop-type.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = valuePropType;

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-input-range/lib/js/utils/index.js");

/**
 * @ignore
 * @param {Object} props
 * @return {?Error} Return Error if validation fails
 */
function valuePropType(props, propName) {
  var maxValue = props.maxValue,
      minValue = props.minValue;

  var value = props[propName];

  if (!(0, _utils.isNumber)(value) && (!(0, _utils.isObject)(value) || !(0, _utils.isNumber)(value.min) || !(0, _utils.isNumber)(value.max))) {
    return new Error('"' + propName + '" must be a number or a range object');
  }

  if ((0, _utils.isNumber)(value) && (value < minValue || value > maxValue)) {
    return new Error('"' + propName + '" must be in between "minValue" and "maxValue"');
  }

  if ((0, _utils.isObject)(value) && (value.min < minValue || value.min > maxValue || value.max < minValue || value.max > maxValue)) {
    return new Error('"' + propName + '" must be in between "minValue" and "maxValue"');
  }
}
module.exports = exports['default'];
//# sourceMappingURL=value-prop-type.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/input-range/value-transformer.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/input-range/value-transformer.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getPercentageFromPosition = getPercentageFromPosition;
exports.getValueFromPosition = getValueFromPosition;
exports.getValueFromProps = getValueFromProps;
exports.getPercentageFromValue = getPercentageFromValue;
exports.getPercentagesFromValues = getPercentagesFromValues;
exports.getPositionFromValue = getPositionFromValue;
exports.getPositionsFromValues = getPositionsFromValues;
exports.getPositionFromEvent = getPositionFromEvent;
exports.getStepValueFromValue = getStepValueFromValue;

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-input-range/lib/js/utils/index.js");

/**
 * Convert a point into a percentage value
 * @ignore
 * @param {Point} position
 * @param {ClientRect} clientRect
 * @return {number} Percentage value
 */
function getPercentageFromPosition(position, clientRect) {
  var length = clientRect.width;
  var sizePerc = position.x / length;

  return sizePerc || 0;
}

/**
 * Convert a point into a model value
 * @ignore
 * @param {Point} position
 * @param {number} minValue
 * @param {number} maxValue
 * @param {ClientRect} clientRect
 * @return {number}
 */
function getValueFromPosition(position, minValue, maxValue, clientRect) {
  var sizePerc = getPercentageFromPosition(position, clientRect);
  var valueDiff = maxValue - minValue;

  return minValue + valueDiff * sizePerc;
}

/**
 * Convert props into a range value
 * @ignore
 * @param {Object} props
 * @param {boolean} isMultiValue
 * @return {Range}
 */
function getValueFromProps(props, isMultiValue) {
  if (isMultiValue) {
    return _extends({}, props.value);
  }

  return {
    min: props.minValue,
    max: props.value
  };
}

/**
 * Convert a model value into a percentage value
 * @ignore
 * @param {number} value
 * @param {number} minValue
 * @param {number} maxValue
 * @return {number}
 */
function getPercentageFromValue(value, minValue, maxValue) {
  var validValue = (0, _utils.clamp)(value, minValue, maxValue);
  var valueDiff = maxValue - minValue;
  var valuePerc = (validValue - minValue) / valueDiff;

  return valuePerc || 0;
}

/**
 * Convert model values into percentage values
 * @ignore
 * @param {Range} values
 * @param {number} minValue
 * @param {number} maxValue
 * @return {Range}
 */
function getPercentagesFromValues(values, minValue, maxValue) {
  return {
    min: getPercentageFromValue(values.min, minValue, maxValue),
    max: getPercentageFromValue(values.max, minValue, maxValue)
  };
}

/**
 * Convert a value into a point
 * @ignore
 * @param {number} value
 * @param {number} minValue
 * @param {number} maxValue
 * @param {ClientRect} clientRect
 * @return {Point} Position
 */
function getPositionFromValue(value, minValue, maxValue, clientRect) {
  var length = clientRect.width;
  var valuePerc = getPercentageFromValue(value, minValue, maxValue);
  var positionValue = valuePerc * length;

  return {
    x: positionValue,
    y: 0
  };
}

/**
 * Convert a range of values into points
 * @ignore
 * @param {Range} values
 * @param {number} minValue
 * @param {number} maxValue
 * @param {ClientRect} clientRect
 * @return {Range}
 */
function getPositionsFromValues(values, minValue, maxValue, clientRect) {
  return {
    min: getPositionFromValue(values.min, minValue, maxValue, clientRect),
    max: getPositionFromValue(values.max, minValue, maxValue, clientRect)
  };
}

/**
 * Convert an event into a point
 * @ignore
 * @param {Event} event
 * @param {ClientRect} clientRect
 * @return {Point}
 */
function getPositionFromEvent(event, clientRect) {
  var length = clientRect.width;

  var _ref = event.touches ? event.touches[0] : event,
      clientX = _ref.clientX;

  return {
    x: (0, _utils.clamp)(clientX - clientRect.left, 0, length),
    y: 0
  };
}

/**
 * Convert a value into a step value
 * @ignore
 * @param {number} value
 * @param {number} valuePerStep
 * @return {number}
 */
function getStepValueFromValue(value, valuePerStep) {
  return Math.round(value / valuePerStep) * valuePerStep;
}
//# sourceMappingURL=value-transformer.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/utils/captialize.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/utils/captialize.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = captialize;
/**
 * Captialize a string
 * @ignore
 * @param {string} string
 * @return {string}
 */
function captialize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
module.exports = exports["default"];
//# sourceMappingURL=captialize.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/utils/clamp.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/utils/clamp.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clamp;
/**
 * Clamp a value between a min and max value
 * @ignore
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
module.exports = exports["default"];
//# sourceMappingURL=clamp.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/utils/distance-to.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/utils/distance-to.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = distanceTo;
/**
 * Calculate the distance between pointA and pointB
 * @ignore
 * @param {Point} pointA
 * @param {Point} pointB
 * @return {number} Distance
 */
function distanceTo(pointA, pointB) {
  var xDiff = Math.pow(pointB.x - pointA.x, 2);
  var yDiff = Math.pow(pointB.y - pointA.y, 2);

  return Math.sqrt(xDiff + yDiff);
}
module.exports = exports["default"];
//# sourceMappingURL=distance-to.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/utils/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/utils/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _captialize = __webpack_require__(/*! ./captialize */ "./node_modules/react-input-range/lib/js/utils/captialize.js");

Object.defineProperty(exports, 'captialize', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_captialize).default;
  }
});

var _clamp = __webpack_require__(/*! ./clamp */ "./node_modules/react-input-range/lib/js/utils/clamp.js");

Object.defineProperty(exports, 'clamp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_clamp).default;
  }
});

var _distanceTo = __webpack_require__(/*! ./distance-to */ "./node_modules/react-input-range/lib/js/utils/distance-to.js");

Object.defineProperty(exports, 'distanceTo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_distanceTo).default;
  }
});

var _isDefined = __webpack_require__(/*! ./is-defined */ "./node_modules/react-input-range/lib/js/utils/is-defined.js");

Object.defineProperty(exports, 'isDefined', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isDefined).default;
  }
});

var _isNumber = __webpack_require__(/*! ./is-number */ "./node_modules/react-input-range/lib/js/utils/is-number.js");

Object.defineProperty(exports, 'isNumber', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNumber).default;
  }
});

var _isObject = __webpack_require__(/*! ./is-object */ "./node_modules/react-input-range/lib/js/utils/is-object.js");

Object.defineProperty(exports, 'isObject', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isObject).default;
  }
});

var _length = __webpack_require__(/*! ./length */ "./node_modules/react-input-range/lib/js/utils/length.js");

Object.defineProperty(exports, 'length', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_length).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/utils/is-defined.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/utils/is-defined.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDefined;
/**
 * Check if a value is defined
 * @ignore
 * @param {*} value
 * @return {boolean}
 */
function isDefined(value) {
  return value !== undefined && value !== null;
}
module.exports = exports["default"];
//# sourceMappingURL=is-defined.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/utils/is-number.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/utils/is-number.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumber;
/**
 * Check if a value is a number
 * @ignore
 * @param {*} value
 * @return {boolean}
 */
function isNumber(value) {
  return typeof value === 'number';
}
module.exports = exports['default'];
//# sourceMappingURL=is-number.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/utils/is-object.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/utils/is-object.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isObject;
/**
 * Check if a value is an object
 * @ignore
 * @param {*} value
 * @return {boolean}
 */
function isObject(value) {
  return value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
}
module.exports = exports['default'];
//# sourceMappingURL=is-object.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/utils/length.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/utils/length.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = length;
/**
 * Calculate the absolute difference between two numbers
 * @ignore
 * @param {number} numA
 * @param {number} numB
 * @return {number}
 */
function length(numA, numB) {
  return Math.abs(numA - numB);
}
module.exports = exports["default"];
//# sourceMappingURL=length.js.map

/***/ }),

/***/ "./node_modules/react-input-range/node_modules/prop-types/checkPropTypes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-input-range/node_modules/prop-types/checkPropTypes.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/react-input-range/node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/react-input-range/node_modules/prop-types/factoryWithTypeCheckers.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-input-range/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/react-input-range/node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/react-input-range/node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/react-input-range/node_modules/prop-types/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-input-range/node_modules/prop-types/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/react-input-range/node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/react-input-range/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-input-range/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-switch/dist/react-switch.dev.js":
/*!************************************************************!*\
  !*** ./node_modules/react-switch/dist/react-switch.dev.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, '__esModule', { value: true });

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/react-switch/node_modules/prop-types/index.js");

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/*
The MIT License (MIT)

Copyright (c) 2015 instructure-react

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
var uncheckedIcon = React.createElement('svg', {
  viewBox: "-2 -5 14 20",
  height: "100%",
  width: "100%",
  style: {
    position: "absolute",
    top: 0
  }
}, React.createElement('path', {
  d: "M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",
  fill: "#fff",
  fillRule: "evenodd"
}));
var checkedIcon = React.createElement('svg', {
  height: "100%",
  width: "100%",
  viewBox: "-2 -5 17 21",
  style: {
    position: "absolute",
    top: 0
  }
}, React.createElement('path', {
  d: "M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",
  fill: "#fff",
  fillRule: "evenodd"
}));

function createBackgroundColor(pos, checkedPos, uncheckedPos, offColor, onColor) {
  var relativePos = (pos - uncheckedPos) / (checkedPos - uncheckedPos);

  if (relativePos === 0) {
    return offColor;
  }

  if (relativePos === 1) {
    return onColor;
  }

  var newColor = "#";

  for (var i = 1; i < 6; i += 2) {
    var offComponent = parseInt(offColor.substr(i, 2), 16);
    var onComponent = parseInt(onColor.substr(i, 2), 16);
    var weightedValue = Math.round((1 - relativePos) * offComponent + relativePos * onComponent);
    var newComponent = weightedValue.toString(16);

    if (newComponent.length === 1) {
      newComponent = "0" + newComponent;
    }

    newColor += newComponent;
  }

  return newColor;
}

function convertShorthandColor(color) {
  if (color.length === 7) {
    return color;
  }

  var sixDigitColor = "#";

  for (var i = 1; i < 4; i += 1) {
    sixDigitColor += color[i] + color[i];
  }

  return sixDigitColor;
}

function getBackgroundColor(pos, checkedPos, uncheckedPos, offColor, onColor) {
  var sixDigitOffColor = convertShorthandColor(offColor);
  var sixDigitOnColor = convertShorthandColor(onColor);
  return createBackgroundColor(pos, checkedPos, uncheckedPos, sixDigitOffColor, sixDigitOnColor);
}

// Make sure color props are strings that start with "#" since other ways to write colors are not supported.
var hexColorPropType = function (props, propName, componentName) {
  var prop = props[propName];

  if (typeof prop !== "string" || prop[0] !== "#" || prop.length !== 4 && prop.length !== 7) {
    return new Error("Invalid prop '" + propName + "' supplied to '" + componentName + "'. '" + propName + "' has to be either a 3-digit or 6-digit hex-color string. Valid examples: '#abc', '#123456'");
  }

  return null;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var ReactSwitch =
/*@__PURE__*/
function (Component) {
  function ReactSwitch(props) {
    Component.call(this, props);
    var height = props.height;
    var width = props.width;
    var handleDiameter = props.handleDiameter;
    var checked = props.checked;
    this.$handleDiameter = handleDiameter || height - 2;
    this.$checkedPos = Math.max(width - height, width - (height + this.$handleDiameter) / 2);
    this.$uncheckedPos = Math.max(0, (height - this.$handleDiameter) / 2);
    this.state = {
      $pos: checked ? this.$checkedPos : this.$uncheckedPos
    };
    this.$lastDragAt = 0;
    this.$lastKeyUpAt = 0;
    this.$onMouseDown = this.$onMouseDown.bind(this);
    this.$onMouseMove = this.$onMouseMove.bind(this);
    this.$onMouseUp = this.$onMouseUp.bind(this);
    this.$onTouchStart = this.$onTouchStart.bind(this);
    this.$onTouchMove = this.$onTouchMove.bind(this);
    this.$onTouchEnd = this.$onTouchEnd.bind(this);
    this.$onClick = this.$onClick.bind(this);
    this.$onInputChange = this.$onInputChange.bind(this);
    this.$onKeyUp = this.$onKeyUp.bind(this);
    this.$setHasOutline = this.$setHasOutline.bind(this);
    this.$unsetHasOutline = this.$unsetHasOutline.bind(this);
    this.$getInputRef = this.$getInputRef.bind(this);
  }

  if (Component) ReactSwitch.__proto__ = Component;
  ReactSwitch.prototype = Object.create(Component && Component.prototype);
  ReactSwitch.prototype.constructor = ReactSwitch;

  ReactSwitch.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.checked === this.props.checked) {
      return;
    }

    var $pos = this.props.checked ? this.$checkedPos : this.$uncheckedPos;
    this.setState({
      $pos: $pos
    });
  };

  ReactSwitch.prototype.$onDragStart = function $onDragStart(clientX) {
    this.$inputRef.focus();
    this.setState({
      $startX: clientX,
      $hasOutline: true,
      $dragStartingTime: Date.now()
    });
  };

  ReactSwitch.prototype.$onDrag = function $onDrag(clientX) {
    var ref = this.state;
    var $startX = ref.$startX;
    var $isDragging = ref.$isDragging;
    var $pos = ref.$pos;
    var ref$1 = this.props;
    var checked = ref$1.checked;
    var startPos = checked ? this.$checkedPos : this.$uncheckedPos;
    var mousePos = startPos + clientX - $startX; // We need this check to fix a windows glitch where onDrag is triggered onMouseDown in some cases

    if (!$isDragging && clientX !== $startX) {
      this.setState({
        $isDragging: true
      });
    }

    var newPos = Math.min(this.$checkedPos, Math.max(this.$uncheckedPos, mousePos)); // Prevent unnecessary rerenders

    if (newPos !== $pos) {
      this.setState({
        $pos: newPos
      });
    }
  };

  ReactSwitch.prototype.$onDragStop = function $onDragStop(event) {
    var ref = this.state;
    var $pos = ref.$pos;
    var $isDragging = ref.$isDragging;
    var $dragStartingTime = ref.$dragStartingTime;
    var ref$1 = this.props;
    var checked = ref$1.checked;
    var halfwayCheckpoint = (this.$checkedPos + this.$uncheckedPos) / 2; // Simulate clicking the handle

    var timeSinceStart = Date.now() - $dragStartingTime;

    if (!$isDragging || timeSinceStart < 250) {
      this.$onChange(event); // Handle dragging from checked position
    } else if (checked) {
      if ($pos > halfwayCheckpoint) {
        this.setState({
          $pos: this.$checkedPos
        });
      } else {
        this.$onChange(event);
      } // Handle dragging from unchecked position

    } else if ($pos < halfwayCheckpoint) {
      this.setState({
        $pos: this.$uncheckedPos
      });
    } else {
      this.$onChange(event);
    }

    this.setState({
      $isDragging: false,
      $hasOutline: false
    });
    this.$lastDragAt = Date.now();
  };

  ReactSwitch.prototype.$onMouseDown = function $onMouseDown(event) {
    event.preventDefault(); // Ignore right click and scroll

    if (typeof event.button === "number" && event.button !== 0) {
      return;
    }

    this.$onDragStart(event.clientX);
    window.addEventListener("mousemove", this.$onMouseMove);
    window.addEventListener("mouseup", this.$onMouseUp);
  };

  ReactSwitch.prototype.$onMouseMove = function $onMouseMove(event) {
    event.preventDefault();
    this.$onDrag(event.clientX);
  };

  ReactSwitch.prototype.$onMouseUp = function $onMouseUp(event) {
    this.$onDragStop(event);
    window.removeEventListener("mousemove", this.$onMouseMove);
    window.removeEventListener("mouseup", this.$onMouseUp);
  };

  ReactSwitch.prototype.$onTouchStart = function $onTouchStart(event) {
    this.$checkedStateFromDragging = null;
    this.$onDragStart(event.touches[0].clientX);
  };

  ReactSwitch.prototype.$onTouchMove = function $onTouchMove(event) {
    this.$onDrag(event.touches[0].clientX);
  };

  ReactSwitch.prototype.$onTouchEnd = function $onTouchEnd(event) {
    event.preventDefault();
    this.$onDragStop(event);
  };

  ReactSwitch.prototype.$onInputChange = function $onInputChange(event) {
    // This condition is unfortunately needed in some browsers where the input's change event might get triggered
    // right after the dragstop event is triggered (occurs when dropping over a label element)
    if (Date.now() - this.$lastDragAt > 50) {
      this.$onChange(event); // Prevent clicking label, but not key activation from setting outline to true - yes, this is absurd

      if (Date.now() - this.$lastKeyUpAt > 50) {
        this.setState({
          $hasOutline: false
        });
      }
    }
  };

  ReactSwitch.prototype.$onKeyUp = function $onKeyUp() {
    this.$lastKeyUpAt = Date.now();
  };

  ReactSwitch.prototype.$setHasOutline = function $setHasOutline() {
    this.setState({
      $hasOutline: true
    });
  };

  ReactSwitch.prototype.$unsetHasOutline = function $unsetHasOutline() {
    this.setState({
      $hasOutline: false
    });
  };

  ReactSwitch.prototype.$getInputRef = function $getInputRef(el) {
    this.$inputRef = el;
  };

  ReactSwitch.prototype.$onClick = function $onClick(event) {
    event.preventDefault();
    this.$inputRef.focus();
    this.$onChange(event);
    this.setState({
      $hasOutline: false
    });
  };

  ReactSwitch.prototype.$onChange = function $onChange(event) {
    var ref = this.props;
    var checked = ref.checked;
    var onChange = ref.onChange;
    var id = ref.id;
    onChange(!checked, event, id);
  };

  ReactSwitch.prototype.render = function render() {
    var ref = this.props;
    var disabled = ref.disabled;
    var className = ref.className;
    var offColor = ref.offColor;
    var onColor = ref.onColor;
    var offHandleColor = ref.offHandleColor;
    var onHandleColor = ref.onHandleColor;
    var checkedIcon$$1 = ref.checkedIcon;
    var uncheckedIcon$$1 = ref.uncheckedIcon;
    var boxShadow = ref.boxShadow;
    var activeBoxShadow = ref.activeBoxShadow;
    var height = ref.height;
    var width = ref.width;
    var handleDiameter = ref.handleDiameter;
    var rest$1 = objectWithoutProperties(ref, ["disabled", "className", "offColor", "onColor", "offHandleColor", "onHandleColor", "checkedIcon", "uncheckedIcon", "boxShadow", "activeBoxShadow", "height", "width", "handleDiameter"]);
    var rest = rest$1;
    var ref$1 = this.state;
    var $pos = ref$1.$pos;
    var $isDragging = ref$1.$isDragging;
    var $hasOutline = ref$1.$hasOutline;
    var rootStyle = {
      position: "relative",
      display: "inline-block",
      textAlign: "left",
      opacity: disabled ? 0.5 : 1,
      direction: "ltr",
      borderRadius: height / 2,
      WebkitTransition: "opacity 0.25s",
      MozTransition: "opacity 0.25s",
      transition: "opacity 0.25s",
      touchAction: "none",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none"
    };
    var backgroundStyle = {
      height: height,
      width: width,
      margin: Math.max(0, (this.$handleDiameter - height) / 2),
      position: "relative",
      background: getBackgroundColor($pos, this.$checkedPos, this.$uncheckedPos, offColor, onColor),
      borderRadius: height / 2,
      cursor: disabled ? "default" : "pointer",
      WebkitTransition: $isDragging ? null : "background 0.25s",
      MozTransition: $isDragging ? null : "background 0.25s",
      transition: $isDragging ? null : "background 0.25s"
    };
    var checkedIconStyle = {
      height: height,
      width: Math.min(height * 1.5, width - (this.$handleDiameter + height) / 2 + 1),
      position: "relative",
      opacity: ($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos),
      pointerEvents: "none",
      WebkitTransition: $isDragging ? null : "opacity 0.25s",
      MozTransition: $isDragging ? null : "opacity 0.25s",
      transition: $isDragging ? null : "opacity 0.25s"
    };
    var uncheckedIconStyle = {
      height: height,
      width: Math.min(height * 1.5, width - (this.$handleDiameter + height) / 2 + 1),
      position: "absolute",
      opacity: 1 - ($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos),
      right: 0,
      top: 0,
      pointerEvents: "none",
      WebkitTransition: $isDragging ? null : "opacity 0.25s",
      MozTransition: $isDragging ? null : "opacity 0.25s",
      transition: $isDragging ? null : "opacity 0.25s"
    };
    var handleStyle = {
      height: this.$handleDiameter,
      width: this.$handleDiameter,
      background: getBackgroundColor($pos, this.$checkedPos, this.$uncheckedPos, offHandleColor, onHandleColor),
      display: "inline-block",
      cursor: disabled ? "default" : "pointer",
      borderRadius: "50%",
      position: "absolute",
      transform: "translateX(" + $pos + "px)",
      top: Math.max(0, (height - this.$handleDiameter) / 2),
      outline: 0,
      boxShadow: $hasOutline ? activeBoxShadow : boxShadow,
      border: 0,
      WebkitTransition: $isDragging ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s",
      MozTransition: $isDragging ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s",
      transition: $isDragging ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s"
    };
    var inputStyle = {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      width: 1
    };
    return React.createElement('div', {
      className: className,
      style: rootStyle
    }, React.createElement('div', {
      className: "react-switch-bg",
      style: backgroundStyle,
      onClick: disabled ? null : this.$onClick,
      onMouseDown: function (e) {
        return e.preventDefault();
      }
    }, checkedIcon$$1 && React.createElement('div', {
      style: checkedIconStyle
    }, checkedIcon$$1), uncheckedIcon$$1 && React.createElement('div', {
      style: uncheckedIconStyle
    }, uncheckedIcon$$1)), React.createElement('div', {
      className: "react-switch-handle",
      style: handleStyle,
      onClick: function (e) {
        return e.preventDefault();
      },
      onMouseDown: disabled ? null : this.$onMouseDown,
      onTouchStart: disabled ? null : this.$onTouchStart,
      onTouchMove: disabled ? null : this.$onTouchMove,
      onTouchEnd: disabled ? null : this.$onTouchEnd,
      onTouchCancel: disabled ? null : this.$unsetHasOutline
    }), React.createElement('input', _extends({}, {
      type: "checkbox",
      role: "switch",
      disabled: disabled,
      style: inputStyle
    }, rest, {
      ref: this.$getInputRef,
      onFocus: this.$setHasOutline,
      onBlur: this.$unsetHasOutline,
      onKeyUp: this.$onKeyUp,
      onChange: this.$onInputChange
    })));
  };

  return ReactSwitch;
}(React.Component);

ReactSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  offColor: hexColorPropType,
  onColor: hexColorPropType,
  offHandleColor: hexColorPropType,
  onHandleColor: hexColorPropType,
  handleDiameter: PropTypes.number,
  uncheckedIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
  checkedIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
  boxShadow: PropTypes.string,
  activeBoxShadow: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  id: PropTypes.string,
  className: PropTypes.string
};
ReactSwitch.defaultProps = {
  disabled: false,
  offColor: "#888",
  onColor: "#080",
  offHandleColor: "#fff",
  onHandleColor: "#fff",
  uncheckedIcon: uncheckedIcon,
  checkedIcon: checkedIcon,
  boxShadow: null,
  activeBoxShadow: "0 0 2px 3px #3bf",
  height: 28,
  width: 56
};

exports.default = ReactSwitch;


/***/ }),

/***/ "./node_modules/react-switch/index.js":
/*!********************************************!*\
  !*** ./node_modules/react-switch/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./dist/react-switch.dev.js */ "./node_modules/react-switch/dist/react-switch.dev.js");
}


/***/ }),

/***/ "./node_modules/react-switch/node_modules/prop-types/checkPropTypes.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-switch/node_modules/prop-types/checkPropTypes.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/react-switch/node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/react-switch/node_modules/prop-types/factoryWithTypeCheckers.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-switch/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/react-switch/node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/react-switch/node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/react-switch/node_modules/prop-types/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-switch/node_modules/prop-types/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/react-switch/node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/react-switch/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/react-switch/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL0FkZEFsZXJ0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvaWNvbnMvQWRkQ2lyY2xlT3V0bGluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL0RlaGF6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL0VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F1dG9iaW5kLWRlY29yYXRvci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LXJhbmdlL2xpYi9jc3MvaW5kZXguY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1yYW5nZS9saWIvY3NzL2luZGV4LmNzcz9mMGE0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1yYW5nZS9saWIvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LXJhbmdlL2xpYi9qcy9pbnB1dC1yYW5nZS9kZWZhdWx0LWNsYXNzLW5hbWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1yYW5nZS9saWIvanMvaW5wdXQtcmFuZ2UvaW5wdXQtcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LXJhbmdlL2xpYi9qcy9pbnB1dC1yYW5nZS9rZXktY29kZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LXJhbmdlL2xpYi9qcy9pbnB1dC1yYW5nZS9sYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtcmFuZ2UvbGliL2pzL2lucHV0LXJhbmdlL3JhbmdlLXByb3AtdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtcmFuZ2UvbGliL2pzL2lucHV0LXJhbmdlL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtcmFuZ2UvbGliL2pzL2lucHV0LXJhbmdlL3RyYWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1yYW5nZS9saWIvanMvaW5wdXQtcmFuZ2UvdmFsdWUtcHJvcC10eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1yYW5nZS9saWIvanMvaW5wdXQtcmFuZ2UvdmFsdWUtdHJhbnNmb3JtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LXJhbmdlL2xpYi9qcy91dGlscy9jYXB0aWFsaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1yYW5nZS9saWIvanMvdXRpbHMvY2xhbXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LXJhbmdlL2xpYi9qcy91dGlscy9kaXN0YW5jZS10by5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtcmFuZ2UvbGliL2pzL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1yYW5nZS9saWIvanMvdXRpbHMvaXMtZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtcmFuZ2UvbGliL2pzL3V0aWxzL2lzLW51bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtcmFuZ2UvbGliL2pzL3V0aWxzL2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtcmFuZ2UvbGliL2pzL3V0aWxzL2xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtcmFuZ2Uvbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LXJhbmdlL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1yYW5nZS9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtcmFuZ2Uvbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zd2l0Y2gvZGlzdC9yZWFjdC1zd2l0Y2guZGV2LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zd2l0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN3aXRjaC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3dpdGNoL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zd2l0Y2gvbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN3aXRjaC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4Qzs7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O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxlQUFlO0FBQzlCLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGVBQWU7QUFDOUIsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGVBQWU7QUFDOUIsZUFBZSxNQUFNO0FBQ3JCLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxlQUFlO0FBQzlCLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxlQUFlO0FBQzlCLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxVQUFVLEtBQXFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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RjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RTs7QUFFeEU7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxPQUFPOztBQUVQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDJDQUEyQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDdmdCQSxJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxtQkFBbUIsbUJBQU8sQ0FBQyx3RkFBNEI7QUFDdkQ7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7O0FBRUEsSUFBSSxJQUFxQztBQUN6Qyw2QkFBNkIsbUJBQU8sQ0FBQyxtSEFBNEI7QUFDakU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0R0FBNEc7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsY0FBYyxtQkFBTyxDQUFDLGtEQUFVO0FBQ2hDLGFBQWEsbUJBQU8sQ0FBQyw0REFBZTs7QUFFcEMsMkJBQTJCLG1CQUFPLENBQUMsbUhBQTRCO0FBQy9ELHFCQUFxQixtQkFBTyxDQUFDLCtGQUFrQjs7QUFFL0M7QUFDQTs7QUFFQSxJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDZCQUE2QjtBQUM3QixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QixPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxLQUFxQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sS0FBcUMsNEZBQTRGLFNBQU07QUFDN0k7QUFDQTs7QUFFQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnQ0FBZ0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDOWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxJQUFxQztBQUN6QyxnQkFBZ0IsbUJBQU8sQ0FBQyxrREFBVTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFPLENBQUMsaUhBQTJCO0FBQ3RELENBQUMsTUFBTSxFQUlOOzs7Ozs7Ozs7Ozs7O0FDbEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjs7QUFFQSIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZmlsbDogXCJub25lXCIsXG4gIGQ6IFwiTTAgMGgyNHYyNEgwVjB6XCJcbn0pLCBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTEwLjAxIDIxLjAxYzAgMS4xLjg5IDEuOTkgMS45OSAxLjk5czEuOTktLjg5IDEuOTktMS45OWgtMy45OHptOC44Ny00LjE5VjExYzAtMy4yNS0yLjI1LTUuOTctNS4yOS02LjY5di0uNzJDMTMuNTkgMi43MSAxMi44OCAyIDEyIDJzLTEuNTkuNzEtMS41OSAxLjU5di43MkM3LjM3IDUuMDMgNS4xMiA3Ljc1IDUuMTIgMTF2NS44MkwzIDE4Ljk0VjIwaDE4di0xLjA2bC0yLjEyLTIuMTJ6TTE2IDEzLjAxaC0zdjNoLTJ2LTNIOFYxMWgzVjhoMnYzaDN2Mi4wMXpcIlxufSkpLCAnQWRkQWxlcnQnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0xMyA3aC0ydjRIN3YyaDR2NGgydi00aDR2LTJoLTRWN3ptLTEtNUM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6XCJcbn0pLCAnQWRkQ2lyY2xlT3V0bGluZScpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KShfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTIgMTUuNXYyaDIwdi0ySDJ6bTAtNXYyaDIwdi0ySDJ6bTAtNXYyaDIwdi0ySDJ6XCJcbn0pLCAnRGVoYXplJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMyAxNy4yNVYyMWgzLjc1TDE3LjgxIDkuOTRsLTMuNzUtMy43NUwzIDE3LjI1ek0yMC43MSA3LjA0Yy4zOS0uMzkuMzktMS4wMiAwLTEuNDFsLTIuMzQtMi4zNGEuOTk1OS45OTU5IDAgMCAwLTEuNDEgMGwtMS44MyAxLjgzIDMuNzUgMy43NSAxLjgzLTEuODN6XCJcbn0pLCAnRWRpdCcpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCIvKipcbiAqIEBjb3B5cmlnaHQgMjAxNSwgQW5kcmV5IFBvcHAgPDhtYXlkYXlAZ21haWwuY29tPlxuICpcbiAqIFRoZSBkZWNvcmF0b3IgbWF5IGJlIHVzZWQgb24gY2xhc3NlcyBvciBtZXRob2RzXG4gKiBgYGBcbiAqIEBhdXRvYmluZFxuICogY2xhc3MgRnVsbEJvdW5kIHt9XG4gKlxuICogY2xhc3MgUGFydEJvdW5kIHtcbiAqICAgQGF1dG9iaW5kXG4gKiAgIG1ldGhvZCAoKSB7fVxuICogfVxuICogYGBgXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBhdXRvYmluZDtcblxuZnVuY3Rpb24gYXV0b2JpbmQoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBib3VuZENsYXNzLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJvdW5kTWV0aG9kLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH1cbn1cblxuLyoqXG4gKiBVc2UgYm91bmRNZXRob2QgdG8gYmluZCBhbGwgbWV0aG9kcyBvbiB0aGUgdGFyZ2V0LnByb3RvdHlwZVxuICovXG5mdW5jdGlvbiBib3VuZENsYXNzKHRhcmdldCkge1xuICAvLyAoVXNpbmcgcmVmbGVjdCB0byBnZXQgYWxsIGtleXMgaW5jbHVkaW5nIHN5bWJvbHMpXG4gIHZhciBrZXlzID0gdW5kZWZpbmVkO1xuICAvLyBVc2UgUmVmbGVjdCBpZiBleGlzdHNcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgUmVmbGVjdC5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gICAga2V5cyA9IFJlZmxlY3Qub3duS2V5cyh0YXJnZXQucHJvdG90eXBlKTtcbiAgfSBlbHNlIHtcbiAgICBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgLy8gdXNlIHN5bWJvbHMgaWYgc3VwcG9ydCBpcyBwcm92aWRlZFxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAga2V5cyA9IGtleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0LnByb3RvdHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgLy8gSWdub3JlIHNwZWNpYWwgY2FzZSB0YXJnZXQgbWV0aG9kXG4gICAgaWYgKGtleSA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQucHJvdG90eXBlLCBrZXkpO1xuXG4gICAgLy8gT25seSBtZXRob2RzIG5lZWQgYmluZGluZ1xuICAgIGlmICh0eXBlb2YgZGVzY3JpcHRvci52YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldC5wcm90b3R5cGUsIGtleSwgYm91bmRNZXRob2QodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIFJldHVybiBhIGRlc2NyaXB0b3IgcmVtb3ZpbmcgdGhlIHZhbHVlIGFuZCByZXR1cm5pbmcgYSBnZXR0ZXJcbiAqIFRoZSBnZXR0ZXIgd2lsbCByZXR1cm4gYSAuYmluZCB2ZXJzaW9uIG9mIHRoZSBmdW5jdGlvblxuICogYW5kIG1lbW9pemUgdGhlIHJlc3VsdCBhZ2FpbnN0IGEgc3ltYm9sIG9uIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBib3VuZE1ldGhvZCh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikge1xuICB2YXIgZm4gPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0BhdXRvYmluZCBkZWNvcmF0b3IgY2FuIG9ubHkgYmUgYXBwbGllZCB0byBtZXRob2RzIG5vdDogJyArIHR5cGVvZiBmbik7XG4gIH1cblxuICAvLyBJbiBJRTExIGNhbGxpbmcgT2JqZWN0LmRlZmluZVByb3BlcnR5IGhhcyBhIHNpZGUtZWZmZWN0IG9mIGV2YWx1YXRpbmcgdGhlXG4gIC8vIGdldHRlciBmb3IgdGhlIHByb3BlcnR5IHdoaWNoIGlzIGJlaW5nIHJlcGxhY2VkLiBUaGlzIGNhdXNlcyBpbmZpbml0ZVxuICAvLyByZWN1cnNpb24gYW5kIGFuIFwiT3V0IG9mIHN0YWNrIHNwYWNlXCIgZXJyb3IuXG4gIHZhciBkZWZpbmluZ1Byb3BlcnR5ID0gZmFsc2U7XG5cbiAgcmV0dXJuIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAoZGVmaW5pbmdQcm9wZXJ0eSB8fCB0aGlzID09PSB0YXJnZXQucHJvdG90eXBlIHx8IHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICByZXR1cm4gZm47XG4gICAgICB9XG5cbiAgICAgIHZhciBib3VuZEZuID0gZm4uYmluZCh0aGlzKTtcbiAgICAgIGRlZmluaW5nUHJvcGVydHkgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwge1xuICAgICAgICB2YWx1ZTogYm91bmRGbixcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBkZWZpbmluZ1Byb3BlcnR5ID0gZmFsc2U7XG4gICAgICByZXR1cm4gYm91bmRGbjtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW5wdXQtcmFuZ2VfX3NsaWRlciB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzNmNTFiNTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAtMC41cmVtO1xcbiAgbWFyZ2luLXRvcDogLTAuNjVyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMC4zcyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMC4zcyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0LCBib3gtc2hhZG93IDAuM3MgZWFzZS1vdXQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLW91dCwgYm94LXNoYWRvdyAwLjNzIGVhc2Utb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0O1xcbiAgd2lkdGg6IDFyZW07IH1cXG4gIC5pbnB1dC1yYW5nZV9fc2xpZGVyOmFjdGl2ZSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTsgfVxcbiAgLmlucHV0LXJhbmdlX19zbGlkZXI6Zm9jdXMge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCA1cHggcmdiYSg2MywgODEsIDE4MSwgMC4yKTsgfVxcbiAgLmlucHV0LXJhbmdlLS1kaXNhYmxlZCAuaW5wdXQtcmFuZ2VfX3NsaWRlciB7XFxuICAgIGJhY2tncm91bmQ6ICNjY2NjY2M7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTsgfVxcblxcbi5pbnB1dC1yYW5nZV9fc2xpZGVyLWNvbnRhaW5lciB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlLW91dDsgfVxcblxcbi5pbnB1dC1yYW5nZV9fbGFiZWwge1xcbiAgY29sb3I6ICNhYWFhYWE7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2FuLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcblxcbi5pbnB1dC1yYW5nZV9fbGFiZWwtLW1pbixcXG4uaW5wdXQtcmFuZ2VfX2xhYmVsLS1tYXgge1xcbiAgYm90dG9tOiAtMS40cmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlOyB9XFxuXFxuLmlucHV0LXJhbmdlX19sYWJlbC0tbWluIHtcXG4gIGxlZnQ6IDA7IH1cXG5cXG4uaW5wdXQtcmFuZ2VfX2xhYmVsLS1tYXgge1xcbiAgcmlnaHQ6IDA7IH1cXG5cXG4uaW5wdXQtcmFuZ2VfX2xhYmVsLS12YWx1ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xLjhyZW07IH1cXG5cXG4uaW5wdXQtcmFuZ2VfX2xhYmVsLWNvbnRhaW5lciB7XFxuICBsZWZ0OiAtNTAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuaW5wdXQtcmFuZ2VfX2xhYmVsLS1tYXggLmlucHV0LXJhbmdlX19sYWJlbC1jb250YWluZXIge1xcbiAgICBsZWZ0OiA1MCU7IH1cXG5cXG4uaW5wdXQtcmFuZ2VfX3RyYWNrIHtcXG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMC4zcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZS1vdXQsIHdpZHRoIDAuM3MgZWFzZS1vdXQ7XFxuICB0cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZS1vdXQsIHdpZHRoIDAuM3MgZWFzZS1vdXQ7IH1cXG4gIC5pbnB1dC1yYW5nZS0tZGlzYWJsZWQgLmlucHV0LXJhbmdlX190cmFjayB7XFxuICAgIGJhY2tncm91bmQ6ICNlZWVlZWU7IH1cXG5cXG4uaW5wdXQtcmFuZ2VfX3RyYWNrLS1iYWNrZ3JvdW5kIHtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW4tdG9wOiAtMC4xNXJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiA1MCU7IH1cXG5cXG4uaW5wdXQtcmFuZ2VfX3RyYWNrLS1hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogIzNmNTFiNTsgfVxcblxcbi5pbnB1dC1yYW5nZSB7XFxuICBoZWlnaHQ6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTsgfVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4vaW5kZXguY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4vaW5kZXguY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2lucHV0UmFuZ2UgPSByZXF1aXJlKCcuL2lucHV0LXJhbmdlL2lucHV0LXJhbmdlJyk7XG5cbnZhciBfaW5wdXRSYW5nZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnB1dFJhbmdlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBAaWdub3JlXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBDbGllbnRSZWN0XG4gKiBAcHJvcGVydHkge251bWJlcn0gaGVpZ2h0XG4gKiBAcHJvcGVydHkge251bWJlcn0gbGVmdFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHRvcFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHdpZHRoXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBJbnB1dFJhbmdlQ2xhc3NOYW1lc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IGFjdGl2ZVRyYWNrXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZGlzYWJsZWRJbnB1dFJhbmdlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gaW5wdXRSYW5nZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGxhYmVsQ29udGFpbmVyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbWF4TGFiZWxcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtaW5MYWJlbFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHNsaWRlclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHNsaWRlckNvbnRhaW5lclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHRyYWNrXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdmFsdWVMYWJlbFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge0Z1bmN0aW9ufSBMYWJlbEZvcm1hdHRlclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cbi8qKlxuICogQGlnbm9yZVxuICogQHR5cGVkZWYge09iamVjdH0gUG9pbnRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB4XG4gKiBAcHJvcGVydHkge251bWJlcn0geVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gUmFuZ2VcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBtaW4gLSBNaW4gdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBtYXggLSBNYXggdmFsdWVcbiAqL1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfaW5wdXRSYW5nZTIuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLyoqXG4gKiBEZWZhdWx0IENTUyBjbGFzcyBuYW1lc1xuICogQGlnbm9yZVxuICogQHR5cGUge0lucHV0UmFuZ2VDbGFzc05hbWVzfVxuICovXG52YXIgREVGQVVMVF9DTEFTU19OQU1FUyA9IHtcbiAgYWN0aXZlVHJhY2s6ICdpbnB1dC1yYW5nZV9fdHJhY2sgaW5wdXQtcmFuZ2VfX3RyYWNrLS1hY3RpdmUnLFxuICBkaXNhYmxlZElucHV0UmFuZ2U6ICdpbnB1dC1yYW5nZSBpbnB1dC1yYW5nZS0tZGlzYWJsZWQnLFxuICBpbnB1dFJhbmdlOiAnaW5wdXQtcmFuZ2UnLFxuICBsYWJlbENvbnRhaW5lcjogJ2lucHV0LXJhbmdlX19sYWJlbC1jb250YWluZXInLFxuICBtYXhMYWJlbDogJ2lucHV0LXJhbmdlX19sYWJlbCBpbnB1dC1yYW5nZV9fbGFiZWwtLW1heCcsXG4gIG1pbkxhYmVsOiAnaW5wdXQtcmFuZ2VfX2xhYmVsIGlucHV0LXJhbmdlX19sYWJlbC0tbWluJyxcbiAgc2xpZGVyOiAnaW5wdXQtcmFuZ2VfX3NsaWRlcicsXG4gIHNsaWRlckNvbnRhaW5lcjogJ2lucHV0LXJhbmdlX19zbGlkZXItY29udGFpbmVyJyxcbiAgdHJhY2s6ICdpbnB1dC1yYW5nZV9fdHJhY2sgaW5wdXQtcmFuZ2VfX3RyYWNrLS1iYWNrZ3JvdW5kJyxcbiAgdmFsdWVMYWJlbDogJ2lucHV0LXJhbmdlX19sYWJlbCBpbnB1dC1yYW5nZV9fbGFiZWwtLXZhbHVlJ1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gREVGQVVMVF9DTEFTU19OQU1FUztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVmYXVsdC1jbGFzcy1uYW1lcy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZGVzYywgX3ZhbHVlLCBfY2xhc3M7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfYXV0b2JpbmREZWNvcmF0b3IgPSByZXF1aXJlKCdhdXRvYmluZC1kZWNvcmF0b3InKTtcblxudmFyIF9hdXRvYmluZERlY29yYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdXRvYmluZERlY29yYXRvcik7XG5cbnZhciBfdmFsdWVUcmFuc2Zvcm1lciA9IHJlcXVpcmUoJy4vdmFsdWUtdHJhbnNmb3JtZXInKTtcblxudmFyIHZhbHVlVHJhbnNmb3JtZXIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdmFsdWVUcmFuc2Zvcm1lcik7XG5cbnZhciBfZGVmYXVsdENsYXNzTmFtZXMgPSByZXF1aXJlKCcuL2RlZmF1bHQtY2xhc3MtbmFtZXMnKTtcblxudmFyIF9kZWZhdWx0Q2xhc3NOYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZhdWx0Q2xhc3NOYW1lcyk7XG5cbnZhciBfbGFiZWwgPSByZXF1aXJlKCcuL2xhYmVsJyk7XG5cbnZhciBfbGFiZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGFiZWwpO1xuXG52YXIgX3JhbmdlUHJvcFR5cGUgPSByZXF1aXJlKCcuL3JhbmdlLXByb3AtdHlwZScpO1xuXG52YXIgX3JhbmdlUHJvcFR5cGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZ2VQcm9wVHlwZSk7XG5cbnZhciBfdmFsdWVQcm9wVHlwZSA9IHJlcXVpcmUoJy4vdmFsdWUtcHJvcC10eXBlJyk7XG5cbnZhciBfdmFsdWVQcm9wVHlwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVByb3BUeXBlKTtcblxudmFyIF9zbGlkZXIgPSByZXF1aXJlKCcuL3NsaWRlcicpO1xuXG52YXIgX3NsaWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zbGlkZXIpO1xuXG52YXIgX3RyYWNrID0gcmVxdWlyZSgnLi90cmFjaycpO1xuXG52YXIgX3RyYWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYWNrKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbnZhciBfa2V5Q29kZXMgPSByZXF1aXJlKCcuL2tleS1jb2RlcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVjb3JhdG9ycywgZGVzY3JpcHRvciwgY29udGV4dCkge1xuICB2YXIgZGVzYyA9IHt9O1xuICBPYmplY3RbJ2tlJyArICd5cyddKGRlc2NyaXB0b3IpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRlc2Nba2V5XSA9IGRlc2NyaXB0b3Jba2V5XTtcbiAgfSk7XG4gIGRlc2MuZW51bWVyYWJsZSA9ICEhZGVzYy5lbnVtZXJhYmxlO1xuICBkZXNjLmNvbmZpZ3VyYWJsZSA9ICEhZGVzYy5jb25maWd1cmFibGU7XG5cbiAgaWYgKCd2YWx1ZScgaW4gZGVzYyB8fCBkZXNjLmluaXRpYWxpemVyKSB7XG4gICAgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gIH1cblxuICBkZXNjID0gZGVjb3JhdG9ycy5zbGljZSgpLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGRlc2MsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYykgfHwgZGVzYztcbiAgfSwgZGVzYyk7XG5cbiAgaWYgKGNvbnRleHQgJiYgZGVzYy5pbml0aWFsaXplciAhPT0gdm9pZCAwKSB7XG4gICAgZGVzYy52YWx1ZSA9IGRlc2MuaW5pdGlhbGl6ZXIgPyBkZXNjLmluaXRpYWxpemVyLmNhbGwoY29udGV4dCkgOiB2b2lkIDA7XG4gICAgZGVzYy5pbml0aWFsaXplciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChkZXNjLmluaXRpYWxpemVyID09PSB2b2lkIDApIHtcbiAgICBPYmplY3RbJ2RlZmluZScgKyAnUHJvcGVydHknXSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjKTtcbiAgICBkZXNjID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkZXNjO1xufVxuXG4vKipcbiAqIEEgUmVhY3QgY29tcG9uZW50IHRoYXQgYWxsb3dzIHVzZXJzIHRvIGlucHV0IG51bWVyaWMgdmFsdWVzIHdpdGhpbiBhIHJhbmdlXG4gKiBieSBkcmFnZ2luZyBpdHMgc2xpZGVycy5cbiAqL1xudmFyIElucHV0UmFuZ2UgPSAoX2NsYXNzID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKElucHV0UmFuZ2UsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhJbnB1dFJhbmdlLCBudWxsLCBbe1xuICAgIGtleTogJ3Byb3BUeXBlcycsXG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWxsb3dTYW1lVmFsdWVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gICAgICAgIGFyaWFMYWJlbGxlZGJ5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICAgICAgYXJpYUNvbnRyb2xzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICAgICAgY2xhc3NOYW1lczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RPZihfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyksXG4gICAgICAgIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gICAgICAgIGRyYWdnYWJsZVRyYWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gICAgICAgIGZvcm1hdExhYmVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgICAgIG1heFZhbHVlOiBfcmFuZ2VQcm9wVHlwZTIuZGVmYXVsdCxcbiAgICAgICAgbWluVmFsdWU6IF9yYW5nZVByb3BUeXBlMi5kZWZhdWx0LFxuICAgICAgICBuYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICAgICAgb25DaGFuZ2VTdGFydDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgICAgICBvbkNoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIG9uQ2hhbmdlQ29tcGxldGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgICAgICAgc3RlcDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gICAgICAgIHZhbHVlOiBfdmFsdWVQcm9wVHlwZTIuZGVmYXVsdFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdkZWZhdWx0UHJvcHMnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWxsb3dTYW1lVmFsdWVzOiBmYWxzZSxcbiAgICAgICAgY2xhc3NOYW1lczogX2RlZmF1bHRDbGFzc05hbWVzMi5kZWZhdWx0LFxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIG1heFZhbHVlOiAxMCxcbiAgICAgICAgbWluVmFsdWU6IDAsXG4gICAgICAgIHN0ZXA6IDFcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbcHJvcHMuYWxsb3dTYW1lVmFsdWVzXVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMuYXJpYUxhYmVsbGVkYnldXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5hcmlhQ29udHJvbHNdXG4gICAgICogQHBhcmFtIHtJbnB1dFJhbmdlQ2xhc3NOYW1lc30gW3Byb3BzLmNsYXNzTmFtZXNdXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbcHJvcHMuZGlzYWJsZWQgPSBmYWxzZV1cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcHJvcHMuZm9ybWF0TGFiZWxdXG4gICAgICogQHBhcmFtIHtudW1iZXJ8UmFuZ2V9IFtwcm9wcy5tYXhWYWx1ZSA9IDEwXVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfFJhbmdlfSBbcHJvcHMubWluVmFsdWUgPSAwXVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMubmFtZV1cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMub25DaGFuZ2VcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcHJvcHMub25DaGFuZ2VDb21wbGV0ZV1cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcHJvcHMub25DaGFuZ2VTdGFydF1cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3Byb3BzLnN0ZXAgPSAxXVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfFJhbmdlfSBwcm9wcy52YWx1ZVxuICAgICAqL1xuXG4gIH1dKTtcblxuICBmdW5jdGlvbiBJbnB1dFJhbmdlKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElucHV0UmFuZ2UpO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7P251bWJlcn1cbiAgICAgKi9cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoSW5wdXRSYW5nZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKElucHV0UmFuZ2UpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGFydFZhbHVlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUgez9Db21wb25lbnR9XG4gICAgICovXG4gICAgX3RoaXMubm9kZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHs/Q29tcG9uZW50fVxuICAgICAqL1xuICAgIF90aGlzLnRyYWNrTm9kZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtib29sfVxuICAgICAqL1xuICAgIF90aGlzLmlzU2xpZGVyRHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUgez9zdHJpbmd9XG4gICAgICovXG4gICAgX3RoaXMubGFzdEtleU1vdmVkID0gbnVsbDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBAb3ZlcnJpZGVcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoSW5wdXRSYW5nZSwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5yZW1vdmVEb2N1bWVudE1vdXNlVXBMaXN0ZW5lcigpO1xuICAgICAgdGhpcy5yZW1vdmVEb2N1bWVudFRvdWNoRW5kTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIENTUyBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q29tcG9uZW50Q2xhc3NOYW1lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29tcG9uZW50Q2xhc3NOYW1lKCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNsYXNzTmFtZXMuaW5wdXRSYW5nZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2xhc3NOYW1lcy5kaXNhYmxlZElucHV0UmFuZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBib3VuZGluZyByZWN0IG9mIHRoZSB0cmFja1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7Q2xpZW50UmVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0VHJhY2tDbGllbnRSZWN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VHJhY2tDbGllbnRSZWN0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudHJhY2tOb2RlLmdldENsaWVudFJlY3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHNsaWRlciBrZXkgY2xvc2VzdCB0byBhIHBvaW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1BvaW50fSBwb3NpdGlvblxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0S2V5QnlQb3NpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEtleUJ5UG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgIHZhciB2YWx1ZXMgPSB2YWx1ZVRyYW5zZm9ybWVyLmdldFZhbHVlRnJvbVByb3BzKHRoaXMucHJvcHMsIHRoaXMuaXNNdWx0aVZhbHVlKCkpO1xuICAgICAgdmFyIHBvc2l0aW9ucyA9IHZhbHVlVHJhbnNmb3JtZXIuZ2V0UG9zaXRpb25zRnJvbVZhbHVlcyh2YWx1ZXMsIHRoaXMucHJvcHMubWluVmFsdWUsIHRoaXMucHJvcHMubWF4VmFsdWUsIHRoaXMuZ2V0VHJhY2tDbGllbnRSZWN0KCkpO1xuXG4gICAgICBpZiAodGhpcy5pc011bHRpVmFsdWUoKSkge1xuICAgICAgICB2YXIgZGlzdGFuY2VUb01pbiA9ICgwLCBfdXRpbHMuZGlzdGFuY2VUbykocG9zaXRpb24sIHBvc2l0aW9ucy5taW4pO1xuICAgICAgICB2YXIgZGlzdGFuY2VUb01heCA9ICgwLCBfdXRpbHMuZGlzdGFuY2VUbykocG9zaXRpb24sIHBvc2l0aW9ucy5tYXgpO1xuXG4gICAgICAgIGlmIChkaXN0YW5jZVRvTWluIDwgZGlzdGFuY2VUb01heCkge1xuICAgICAgICAgIHJldHVybiAnbWluJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gJ21heCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFsbCB0aGUgc2xpZGVyIGtleXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRLZXlzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0S2V5cygpIHtcbiAgICAgIGlmICh0aGlzLmlzTXVsdGlWYWx1ZSgpKSB7XG4gICAgICAgIHJldHVybiBbJ21pbicsICdtYXgnXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFsnbWF4J107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRydWUgaWYgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgbmV3IGFuZCB0aGUgY3VycmVudCB2YWx1ZSBpc1xuICAgICAqIGdyZWF0ZXIgb3IgZXF1YWwgdG8gdGhlIHN0ZXAgYW1vdW50IG9mIHRoZSBjb21wb25lbnRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7UmFuZ2V9IHZhbHVlc1xuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2hhc1N0ZXBEaWZmZXJlbmNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzU3RlcERpZmZlcmVuY2UodmFsdWVzKSB7XG4gICAgICB2YXIgY3VycmVudFZhbHVlcyA9IHZhbHVlVHJhbnNmb3JtZXIuZ2V0VmFsdWVGcm9tUHJvcHModGhpcy5wcm9wcywgdGhpcy5pc011bHRpVmFsdWUoKSk7XG5cbiAgICAgIHJldHVybiAoMCwgX3V0aWxzLmxlbmd0aCkodmFsdWVzLm1pbiwgY3VycmVudFZhbHVlcy5taW4pID49IHRoaXMucHJvcHMuc3RlcCB8fCAoMCwgX3V0aWxzLmxlbmd0aCkodmFsdWVzLm1heCwgY3VycmVudFZhbHVlcy5tYXgpID49IHRoaXMucHJvcHMuc3RlcDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgY29tcG9uZW50IGFjY2VwdHMgYSBtaW4gYW5kIG1heCB2YWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaXNNdWx0aVZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNNdWx0aVZhbHVlKCkge1xuICAgICAgcmV0dXJuICgwLCBfdXRpbHMuaXNPYmplY3QpKHRoaXMucHJvcHMudmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0cnVlIGlmIHRoZSByYW5nZSBpcyB3aXRoaW4gdGhlIG1heCBhbmQgbWluIHZhbHVlIG9mIHRoZSBjb21wb25lbnRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7UmFuZ2V9IHZhbHVlc1xuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2lzV2l0aGluUmFuZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1dpdGhpblJhbmdlKHZhbHVlcykge1xuICAgICAgaWYgKHRoaXMuaXNNdWx0aVZhbHVlKCkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlcy5taW4gPj0gdGhpcy5wcm9wcy5taW5WYWx1ZSAmJiB2YWx1ZXMubWF4IDw9IHRoaXMucHJvcHMubWF4VmFsdWUgJiYgdGhpcy5wcm9wcy5hbGxvd1NhbWVWYWx1ZXMgPyB2YWx1ZXMubWluIDw9IHZhbHVlcy5tYXggOiB2YWx1ZXMubWluIDwgdmFsdWVzLm1heDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlcy5tYXggPj0gdGhpcy5wcm9wcy5taW5WYWx1ZSAmJiB2YWx1ZXMubWF4IDw9IHRoaXMucHJvcHMubWF4VmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRydWUgaWYgdGhlIG5ldyB2YWx1ZSBzaG91bGQgdHJpZ2dlciBhIHJlbmRlclxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtSYW5nZX0gdmFsdWVzXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc2hvdWxkVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkVXBkYXRlKHZhbHVlcykge1xuICAgICAgcmV0dXJuIHRoaXMuaXNXaXRoaW5SYW5nZSh2YWx1ZXMpICYmIHRoaXMuaGFzU3RlcERpZmZlcmVuY2UodmFsdWVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHBvc2l0aW9uIG9mIGEgc2xpZGVyXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICogQHBhcmFtIHtQb2ludH0gcG9zaXRpb25cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVQb3NpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKGtleSwgcG9zaXRpb24pIHtcbiAgICAgIHZhciB2YWx1ZXMgPSB2YWx1ZVRyYW5zZm9ybWVyLmdldFZhbHVlRnJvbVByb3BzKHRoaXMucHJvcHMsIHRoaXMuaXNNdWx0aVZhbHVlKCkpO1xuICAgICAgdmFyIHBvc2l0aW9ucyA9IHZhbHVlVHJhbnNmb3JtZXIuZ2V0UG9zaXRpb25zRnJvbVZhbHVlcyh2YWx1ZXMsIHRoaXMucHJvcHMubWluVmFsdWUsIHRoaXMucHJvcHMubWF4VmFsdWUsIHRoaXMuZ2V0VHJhY2tDbGllbnRSZWN0KCkpO1xuXG4gICAgICBwb3NpdGlvbnNba2V5XSA9IHBvc2l0aW9uO1xuICAgICAgdGhpcy5sYXN0S2V5TW92ZWQgPSBrZXk7XG5cbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb25zKHBvc2l0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBwb3NpdGlvbnMgb2YgbXVsdGlwbGUgc2xpZGVyc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBvc2l0aW9uc1xuICAgICAqIEBwYXJhbSB7UG9pbnR9IHBvc2l0aW9ucy5taW5cbiAgICAgKiBAcGFyYW0ge1BvaW50fSBwb3NpdGlvbnMubWF4XG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlUG9zaXRpb25zJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlUG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgICAgdmFyIHZhbHVlcyA9IHtcbiAgICAgICAgbWluOiB2YWx1ZVRyYW5zZm9ybWVyLmdldFZhbHVlRnJvbVBvc2l0aW9uKHBvc2l0aW9ucy5taW4sIHRoaXMucHJvcHMubWluVmFsdWUsIHRoaXMucHJvcHMubWF4VmFsdWUsIHRoaXMuZ2V0VHJhY2tDbGllbnRSZWN0KCkpLFxuICAgICAgICBtYXg6IHZhbHVlVHJhbnNmb3JtZXIuZ2V0VmFsdWVGcm9tUG9zaXRpb24ocG9zaXRpb25zLm1heCwgdGhpcy5wcm9wcy5taW5WYWx1ZSwgdGhpcy5wcm9wcy5tYXhWYWx1ZSwgdGhpcy5nZXRUcmFja0NsaWVudFJlY3QoKSlcbiAgICAgIH07XG5cbiAgICAgIHZhciB0cmFuc2Zvcm1lZFZhbHVlcyA9IHtcbiAgICAgICAgbWluOiB2YWx1ZVRyYW5zZm9ybWVyLmdldFN0ZXBWYWx1ZUZyb21WYWx1ZSh2YWx1ZXMubWluLCB0aGlzLnByb3BzLnN0ZXApLFxuICAgICAgICBtYXg6IHZhbHVlVHJhbnNmb3JtZXIuZ2V0U3RlcFZhbHVlRnJvbVZhbHVlKHZhbHVlcy5tYXgsIHRoaXMucHJvcHMuc3RlcClcbiAgICAgIH07XG5cbiAgICAgIHRoaXMudXBkYXRlVmFsdWVzKHRyYW5zZm9ybWVkVmFsdWVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHZhbHVlIG9mIGEgc2xpZGVyXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlVmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVWYWx1ZShrZXksIHZhbHVlKSB7XG4gICAgICB2YXIgdmFsdWVzID0gdmFsdWVUcmFuc2Zvcm1lci5nZXRWYWx1ZUZyb21Qcm9wcyh0aGlzLnByb3BzLCB0aGlzLmlzTXVsdGlWYWx1ZSgpKTtcblxuICAgICAgdmFsdWVzW2tleV0gPSB2YWx1ZTtcblxuICAgICAgdGhpcy51cGRhdGVWYWx1ZXModmFsdWVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHZhbHVlcyBvZiBtdWx0aXBsZSBzbGlkZXJzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1JhbmdlfG51bWJlcn0gdmFsdWVzXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlVmFsdWVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlVmFsdWVzKHZhbHVlcykge1xuICAgICAgaWYgKCF0aGlzLnNob3VsZFVwZGF0ZSh2YWx1ZXMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLmlzTXVsdGlWYWx1ZSgpID8gdmFsdWVzIDogdmFsdWVzLm1heCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5jcmVtZW50IHRoZSB2YWx1ZSBvZiBhIHNsaWRlciBieSBrZXkgbmFtZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2luY3JlbWVudFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5jcmVtZW50VmFsdWUoa2V5KSB7XG4gICAgICB2YXIgdmFsdWVzID0gdmFsdWVUcmFuc2Zvcm1lci5nZXRWYWx1ZUZyb21Qcm9wcyh0aGlzLnByb3BzLCB0aGlzLmlzTXVsdGlWYWx1ZSgpKTtcbiAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc1trZXldICsgdGhpcy5wcm9wcy5zdGVwO1xuXG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKGtleSwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlY3JlbWVudCB0aGUgdmFsdWUgb2YgYSBzbGlkZXIgYnkga2V5IG5hbWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdkZWNyZW1lbnRWYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlY3JlbWVudFZhbHVlKGtleSkge1xuICAgICAgdmFyIHZhbHVlcyA9IHZhbHVlVHJhbnNmb3JtZXIuZ2V0VmFsdWVGcm9tUHJvcHModGhpcy5wcm9wcywgdGhpcy5pc011bHRpVmFsdWUoKSk7XG4gICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNba2V5XSAtIHRoaXMucHJvcHMuc3RlcDtcblxuICAgICAgdGhpcy51cGRhdGVWYWx1ZShrZXksIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gdG8gbW91c2V1cCBldmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYWRkRG9jdW1lbnRNb3VzZVVwTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGREb2N1bWVudE1vdXNlVXBMaXN0ZW5lcigpIHtcbiAgICAgIHRoaXMucmVtb3ZlRG9jdW1lbnRNb3VzZVVwTGlzdGVuZXIoKTtcbiAgICAgIHRoaXMubm9kZS5vd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZU1vdXNlVXApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpc3RlbiB0byB0b3VjaGVuZCBldmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYWRkRG9jdW1lbnRUb3VjaEVuZExpc3RlbmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRG9jdW1lbnRUb3VjaEVuZExpc3RlbmVyKCkge1xuICAgICAgdGhpcy5yZW1vdmVEb2N1bWVudFRvdWNoRW5kTGlzdGVuZXIoKTtcbiAgICAgIHRoaXMubm9kZS5vd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5oYW5kbGVUb3VjaEVuZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RvcCBsaXN0ZW5pbmcgdG8gbW91c2V1cCBldmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlRG9jdW1lbnRNb3VzZVVwTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVEb2N1bWVudE1vdXNlVXBMaXN0ZW5lcigpIHtcbiAgICAgIHRoaXMubm9kZS5vd25lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZU1vdXNlVXApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3AgbGlzdGVuaW5nIHRvIHRvdWNoZW5kIGV2ZW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmVEb2N1bWVudFRvdWNoRW5kTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVEb2N1bWVudFRvdWNoRW5kTGlzdGVuZXIoKSB7XG4gICAgICB0aGlzLm5vZGUub3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuaGFuZGxlVG91Y2hFbmQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBhbnkgXCJtb3VzZW1vdmVcIiBldmVudCByZWNlaXZlZCBieSB0aGUgc2xpZGVyXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVTbGlkZXJEcmFnJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlU2xpZGVyRHJhZyhldmVudCwga2V5KSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcG9zaXRpb24gPSB2YWx1ZVRyYW5zZm9ybWVyLmdldFBvc2l0aW9uRnJvbUV2ZW50KGV2ZW50LCB0aGlzLmdldFRyYWNrQ2xpZW50UmVjdCgpKTtcbiAgICAgIHRoaXMuaXNTbGlkZXJEcmFnZ2luZyA9IHRydWU7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLnVwZGF0ZVBvc2l0aW9uKGtleSwgcG9zaXRpb24pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGFueSBcIm1vdXNlbW92ZVwiIGV2ZW50IHJlY2VpdmVkIGJ5IHRoZSB0cmFja1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtTeW50aGV0aWNFdmVudH0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVUcmFja0RyYWcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUcmFja0RyYWcoZXZlbnQsIHByZXZFdmVudCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgIXRoaXMucHJvcHMuZHJhZ2dhYmxlVHJhY2sgfHwgdGhpcy5pc1NsaWRlckRyYWdnaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbWF4VmFsdWUgPSBfcHJvcHMubWF4VmFsdWUsXG4gICAgICAgICAgbWluVmFsdWUgPSBfcHJvcHMubWluVmFsdWUsXG4gICAgICAgICAgX3Byb3BzJHZhbHVlID0gX3Byb3BzLnZhbHVlLFxuICAgICAgICAgIG1heCA9IF9wcm9wcyR2YWx1ZS5tYXgsXG4gICAgICAgICAgbWluID0gX3Byb3BzJHZhbHVlLm1pbjtcblxuXG4gICAgICB2YXIgcG9zaXRpb24gPSB2YWx1ZVRyYW5zZm9ybWVyLmdldFBvc2l0aW9uRnJvbUV2ZW50KGV2ZW50LCB0aGlzLmdldFRyYWNrQ2xpZW50UmVjdCgpKTtcbiAgICAgIHZhciB2YWx1ZSA9IHZhbHVlVHJhbnNmb3JtZXIuZ2V0VmFsdWVGcm9tUG9zaXRpb24ocG9zaXRpb24sIG1pblZhbHVlLCBtYXhWYWx1ZSwgdGhpcy5nZXRUcmFja0NsaWVudFJlY3QoKSk7XG4gICAgICB2YXIgc3RlcFZhbHVlID0gdmFsdWVUcmFuc2Zvcm1lci5nZXRTdGVwVmFsdWVGcm9tVmFsdWUodmFsdWUsIHRoaXMucHJvcHMuc3RlcCk7XG5cbiAgICAgIHZhciBwcmV2UG9zaXRpb24gPSB2YWx1ZVRyYW5zZm9ybWVyLmdldFBvc2l0aW9uRnJvbUV2ZW50KHByZXZFdmVudCwgdGhpcy5nZXRUcmFja0NsaWVudFJlY3QoKSk7XG4gICAgICB2YXIgcHJldlZhbHVlID0gdmFsdWVUcmFuc2Zvcm1lci5nZXRWYWx1ZUZyb21Qb3NpdGlvbihwcmV2UG9zaXRpb24sIG1pblZhbHVlLCBtYXhWYWx1ZSwgdGhpcy5nZXRUcmFja0NsaWVudFJlY3QoKSk7XG4gICAgICB2YXIgcHJldlN0ZXBWYWx1ZSA9IHZhbHVlVHJhbnNmb3JtZXIuZ2V0U3RlcFZhbHVlRnJvbVZhbHVlKHByZXZWYWx1ZSwgdGhpcy5wcm9wcy5zdGVwKTtcblxuICAgICAgdmFyIG9mZnNldCA9IHByZXZTdGVwVmFsdWUgLSBzdGVwVmFsdWU7XG5cbiAgICAgIHZhciB0cmFuc2Zvcm1lZFZhbHVlcyA9IHtcbiAgICAgICAgbWluOiBtaW4gLSBvZmZzZXQsXG4gICAgICAgIG1heDogbWF4IC0gb2Zmc2V0XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlcyh0cmFuc2Zvcm1lZFZhbHVlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGFueSBcImtleWRvd25cIiBldmVudCByZWNlaXZlZCBieSB0aGUgc2xpZGVyXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVTbGlkZXJLZXlEb3duJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlU2xpZGVyS2V5RG93bihldmVudCwga2V5KSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIF9rZXlDb2Rlcy5MRUZUX0FSUk9XOlxuICAgICAgICBjYXNlIF9rZXlDb2Rlcy5ET1dOX0FSUk9XOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5kZWNyZW1lbnRWYWx1ZShrZXkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgX2tleUNvZGVzLlJJR0hUX0FSUk9XOlxuICAgICAgICBjYXNlIF9rZXlDb2Rlcy5VUF9BUlJPVzpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuaW5jcmVtZW50VmFsdWUoa2V5KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBhbnkgXCJtb3VzZWRvd25cIiBldmVudCByZWNlaXZlZCBieSB0aGUgdHJhY2tcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7U3ludGhldGljRXZlbnR9IGV2ZW50XG4gICAgICogQHBhcmFtIHtQb2ludH0gcG9zaXRpb25cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVUcmFja01vdXNlRG93bicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRyYWNrTW91c2VEb3duKGV2ZW50LCBwb3NpdGlvbikge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbWF4VmFsdWUgPSBfcHJvcHMyLm1heFZhbHVlLFxuICAgICAgICAgIG1pblZhbHVlID0gX3Byb3BzMi5taW5WYWx1ZSxcbiAgICAgICAgICBfcHJvcHMyJHZhbHVlID0gX3Byb3BzMi52YWx1ZSxcbiAgICAgICAgICBtYXggPSBfcHJvcHMyJHZhbHVlLm1heCxcbiAgICAgICAgICBtaW4gPSBfcHJvcHMyJHZhbHVlLm1pbjtcblxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB2YXIgdmFsdWUgPSB2YWx1ZVRyYW5zZm9ybWVyLmdldFZhbHVlRnJvbVBvc2l0aW9uKHBvc2l0aW9uLCBtaW5WYWx1ZSwgbWF4VmFsdWUsIHRoaXMuZ2V0VHJhY2tDbGllbnRSZWN0KCkpO1xuICAgICAgdmFyIHN0ZXBWYWx1ZSA9IHZhbHVlVHJhbnNmb3JtZXIuZ2V0U3RlcFZhbHVlRnJvbVZhbHVlKHZhbHVlLCB0aGlzLnByb3BzLnN0ZXApO1xuXG4gICAgICBpZiAoIXRoaXMucHJvcHMuZHJhZ2dhYmxlVHJhY2sgfHwgc3RlcFZhbHVlID4gbWF4IHx8IHN0ZXBWYWx1ZSA8IG1pbikge1xuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKHRoaXMuZ2V0S2V5QnlQb3NpdGlvbihwb3NpdGlvbiksIHBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIHN0YXJ0IG9mIGFueSBtb3VzZS90b3VjaCBldmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlSW50ZXJhY3Rpb25TdGFydCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUludGVyYWN0aW9uU3RhcnQoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZVN0YXJ0KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2VTdGFydCh0aGlzLnByb3BzLnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2VDb21wbGV0ZSAmJiAhKDAsIF91dGlscy5pc0RlZmluZWQpKHRoaXMuc3RhcnRWYWx1ZSkpIHtcbiAgICAgICAgdGhpcy5zdGFydFZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIGVuZCBvZiBhbnkgbW91c2UvdG91Y2ggZXZlbnRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZUludGVyYWN0aW9uRW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlSW50ZXJhY3Rpb25FbmQoKSB7XG4gICAgICBpZiAodGhpcy5pc1NsaWRlckRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuaXNTbGlkZXJEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMucHJvcHMub25DaGFuZ2VDb21wbGV0ZSB8fCAhKDAsIF91dGlscy5pc0RlZmluZWQpKHRoaXMuc3RhcnRWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zdGFydFZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2VDb21wbGV0ZSh0aGlzLnByb3BzLnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGFydFZhbHVlID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgYW55IFwia2V5ZG93blwiIGV2ZW50IHJlY2VpdmVkIGJ5IHRoZSBjb21wb25lbnRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7U3ludGhldGljRXZlbnR9IGV2ZW50XG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlS2V5RG93bicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICAgIHRoaXMuaGFuZGxlSW50ZXJhY3Rpb25TdGFydChldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGFueSBcImtleXVwXCIgZXZlbnQgcmVjZWl2ZWQgYnkgdGhlIGNvbXBvbmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtTeW50aGV0aWNFdmVudH0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVLZXlVcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUtleVVwKGV2ZW50KSB7XG4gICAgICB0aGlzLmhhbmRsZUludGVyYWN0aW9uRW5kKGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgYW55IFwibW91c2Vkb3duXCIgZXZlbnQgcmVjZWl2ZWQgYnkgdGhlIGNvbXBvbmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtTeW50aGV0aWNFdmVudH0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVNb3VzZURvd24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbiAgICAgIHRoaXMuaGFuZGxlSW50ZXJhY3Rpb25TdGFydChldmVudCk7XG4gICAgICB0aGlzLmFkZERvY3VtZW50TW91c2VVcExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGFueSBcIm1vdXNldXBcIiBldmVudCByZWNlaXZlZCBieSB0aGUgY29tcG9uZW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVNb3VzZVVwJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VVcChldmVudCkge1xuICAgICAgdGhpcy5oYW5kbGVJbnRlcmFjdGlvbkVuZChldmVudCk7XG4gICAgICB0aGlzLnJlbW92ZURvY3VtZW50TW91c2VVcExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGFueSBcInRvdWNoc3RhcnRcIiBldmVudCByZWNlaXZlZCBieSB0aGUgY29tcG9uZW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZVRvdWNoU3RhcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICB0aGlzLmhhbmRsZUludGVyYWN0aW9uU3RhcnQoZXZlbnQpO1xuICAgICAgdGhpcy5hZGREb2N1bWVudFRvdWNoRW5kTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgYW55IFwidG91Y2hlbmRcIiBldmVudCByZWNlaXZlZCBieSB0aGUgY29tcG9uZW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVUb3VjaEVuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKGV2ZW50KSB7XG4gICAgICB0aGlzLmhhbmRsZUludGVyYWN0aW9uRW5kKGV2ZW50KTtcbiAgICAgIHRoaXMucmVtb3ZlRG9jdW1lbnRUb3VjaEVuZExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIEpTWCBvZiBzbGlkZXJzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJuIHtKU1guRWxlbWVudH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyU2xpZGVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclNsaWRlcnMoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHZhbHVlcyA9IHZhbHVlVHJhbnNmb3JtZXIuZ2V0VmFsdWVGcm9tUHJvcHModGhpcy5wcm9wcywgdGhpcy5pc011bHRpVmFsdWUoKSk7XG4gICAgICB2YXIgcGVyY2VudGFnZXMgPSB2YWx1ZVRyYW5zZm9ybWVyLmdldFBlcmNlbnRhZ2VzRnJvbVZhbHVlcyh2YWx1ZXMsIHRoaXMucHJvcHMubWluVmFsdWUsIHRoaXMucHJvcHMubWF4VmFsdWUpO1xuICAgICAgdmFyIGtleXMgPSB0aGlzLnByb3BzLmFsbG93U2FtZVZhbHVlcyAmJiB0aGlzLmxhc3RLZXlNb3ZlZCA9PT0gJ21pbicgPyB0aGlzLmdldEtleXMoKS5yZXZlcnNlKCkgOiB0aGlzLmdldEtleXMoKTtcblxuICAgICAgcmV0dXJuIGtleXMubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzW2tleV07XG4gICAgICAgIHZhciBwZXJjZW50YWdlID0gcGVyY2VudGFnZXNba2V5XTtcblxuICAgICAgICB2YXIgX3Byb3BzMyA9IF90aGlzMy5wcm9wcyxcbiAgICAgICAgICAgIG1heFZhbHVlID0gX3Byb3BzMy5tYXhWYWx1ZSxcbiAgICAgICAgICAgIG1pblZhbHVlID0gX3Byb3BzMy5taW5WYWx1ZTtcblxuXG4gICAgICAgIGlmIChrZXkgPT09ICdtaW4nKSB7XG4gICAgICAgICAgbWF4VmFsdWUgPSB2YWx1ZXMubWF4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1pblZhbHVlID0gdmFsdWVzLm1pbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzbGlkZXIgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfc2xpZGVyMi5kZWZhdWx0LCB7XG4gICAgICAgICAgYXJpYUxhYmVsbGVkYnk6IF90aGlzMy5wcm9wcy5hcmlhTGFiZWxsZWRieSxcbiAgICAgICAgICBhcmlhQ29udHJvbHM6IF90aGlzMy5wcm9wcy5hcmlhQ29udHJvbHMsXG4gICAgICAgICAgY2xhc3NOYW1lczogX3RoaXMzLnByb3BzLmNsYXNzTmFtZXMsXG4gICAgICAgICAgZm9ybWF0TGFiZWw6IF90aGlzMy5wcm9wcy5mb3JtYXRMYWJlbCxcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICBtYXhWYWx1ZTogbWF4VmFsdWUsXG4gICAgICAgICAgbWluVmFsdWU6IG1pblZhbHVlLFxuICAgICAgICAgIG9uU2xpZGVyRHJhZzogX3RoaXMzLmhhbmRsZVNsaWRlckRyYWcsXG4gICAgICAgICAgb25TbGlkZXJLZXlEb3duOiBfdGhpczMuaGFuZGxlU2xpZGVyS2V5RG93bixcbiAgICAgICAgICBwZXJjZW50YWdlOiBwZXJjZW50YWdlLFxuICAgICAgICAgIHR5cGU6IGtleSxcbiAgICAgICAgICB2YWx1ZTogdmFsdWUgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNsaWRlcjtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBKU1ggb2YgaGlkZGVuIGlucHV0c1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7SlNYLkVsZW1lbnR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlckhpZGRlbklucHV0cycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckhpZGRlbklucHV0cygpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMucHJvcHMubmFtZSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIHZhciBpc011bHRpVmFsdWUgPSB0aGlzLmlzTXVsdGlWYWx1ZSgpO1xuICAgICAgdmFyIHZhbHVlcyA9IHZhbHVlVHJhbnNmb3JtZXIuZ2V0VmFsdWVGcm9tUHJvcHModGhpcy5wcm9wcywgaXNNdWx0aVZhbHVlKTtcblxuICAgICAgcmV0dXJuIHRoaXMuZ2V0S2V5cygpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc1trZXldO1xuICAgICAgICB2YXIgbmFtZSA9IGlzTXVsdGlWYWx1ZSA/ICcnICsgX3RoaXM0LnByb3BzLm5hbWUgKyAoMCwgX3V0aWxzLmNhcHRpYWxpemUpKGtleSkgOiBfdGhpczQucHJvcHMubmFtZTtcblxuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyBrZXk6IGtleSwgdHlwZTogJ2hpZGRlbicsIG5hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKiBAcmV0dXJuIHtKU1guRWxlbWVudH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHZhciBjb21wb25lbnRDbGFzc05hbWUgPSB0aGlzLmdldENvbXBvbmVudENsYXNzTmFtZSgpO1xuICAgICAgdmFyIHZhbHVlcyA9IHZhbHVlVHJhbnNmb3JtZXIuZ2V0VmFsdWVGcm9tUHJvcHModGhpcy5wcm9wcywgdGhpcy5pc011bHRpVmFsdWUoKSk7XG4gICAgICB2YXIgcGVyY2VudGFnZXMgPSB2YWx1ZVRyYW5zZm9ybWVyLmdldFBlcmNlbnRhZ2VzRnJvbVZhbHVlcyh2YWx1ZXMsIHRoaXMucHJvcHMubWluVmFsdWUsIHRoaXMucHJvcHMubWF4VmFsdWUpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcbiAgICAgICAgICAgIF90aGlzNS5ub2RlID0gbm9kZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNsYXNzTmFtZTogY29tcG9uZW50Q2xhc3NOYW1lLFxuICAgICAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duLFxuICAgICAgICAgIG9uS2V5VXA6IHRoaXMuaGFuZGxlS2V5VXAsXG4gICAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlTW91c2VEb3duLFxuICAgICAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0IH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9sYWJlbDIuZGVmYXVsdCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWVzOiB0aGlzLnByb3BzLmNsYXNzTmFtZXMsXG4gICAgICAgICAgICBmb3JtYXRMYWJlbDogdGhpcy5wcm9wcy5mb3JtYXRMYWJlbCxcbiAgICAgICAgICAgIHR5cGU6ICdtaW4nIH0sXG4gICAgICAgICAgdGhpcy5wcm9wcy5taW5WYWx1ZVxuICAgICAgICApLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfdHJhY2syLmRlZmF1bHQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lczogdGhpcy5wcm9wcy5jbGFzc05hbWVzLFxuICAgICAgICAgICAgZHJhZ2dhYmxlVHJhY2s6IHRoaXMucHJvcHMuZHJhZ2dhYmxlVHJhY2ssXG4gICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZih0cmFja05vZGUpIHtcbiAgICAgICAgICAgICAgX3RoaXM1LnRyYWNrTm9kZSA9IHRyYWNrTm9kZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwZXJjZW50YWdlczogcGVyY2VudGFnZXMsXG4gICAgICAgICAgICBvblRyYWNrRHJhZzogdGhpcy5oYW5kbGVUcmFja0RyYWcsXG4gICAgICAgICAgICBvblRyYWNrTW91c2VEb3duOiB0aGlzLmhhbmRsZVRyYWNrTW91c2VEb3duIH0sXG4gICAgICAgICAgdGhpcy5yZW5kZXJTbGlkZXJzKClcbiAgICAgICAgKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX2xhYmVsMi5kZWZhdWx0LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZXM6IHRoaXMucHJvcHMuY2xhc3NOYW1lcyxcbiAgICAgICAgICAgIGZvcm1hdExhYmVsOiB0aGlzLnByb3BzLmZvcm1hdExhYmVsLFxuICAgICAgICAgICAgdHlwZTogJ21heCcgfSxcbiAgICAgICAgICB0aGlzLnByb3BzLm1heFZhbHVlXG4gICAgICAgICksXG4gICAgICAgIHRoaXMucmVuZGVySGlkZGVuSW5wdXRzKClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElucHV0UmFuZ2U7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpLCAoX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlU2xpZGVyRHJhZycsIFtfYXV0b2JpbmREZWNvcmF0b3IyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVTbGlkZXJEcmFnJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVUcmFja0RyYWcnLCBbX2F1dG9iaW5kRGVjb3JhdG9yMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlVHJhY2tEcmFnJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVTbGlkZXJLZXlEb3duJywgW19hdXRvYmluZERlY29yYXRvcjIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZVNsaWRlcktleURvd24nKSwgX2NsYXNzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZVRyYWNrTW91c2VEb3duJywgW19hdXRvYmluZERlY29yYXRvcjIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZVRyYWNrTW91c2VEb3duJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVJbnRlcmFjdGlvblN0YXJ0JywgW19hdXRvYmluZERlY29yYXRvcjIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZUludGVyYWN0aW9uU3RhcnQnKSwgX2NsYXNzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZUludGVyYWN0aW9uRW5kJywgW19hdXRvYmluZERlY29yYXRvcjIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZUludGVyYWN0aW9uRW5kJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVLZXlEb3duJywgW19hdXRvYmluZERlY29yYXRvcjIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZUtleURvd24nKSwgX2NsYXNzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZUtleVVwJywgW19hdXRvYmluZERlY29yYXRvcjIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZUtleVVwJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVNb3VzZURvd24nLCBbX2F1dG9iaW5kRGVjb3JhdG9yMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlTW91c2VEb3duJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVNb3VzZVVwJywgW19hdXRvYmluZERlY29yYXRvcjIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZU1vdXNlVXAnKSwgX2NsYXNzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZVRvdWNoU3RhcnQnLCBbX2F1dG9iaW5kRGVjb3JhdG9yMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlVG91Y2hTdGFydCcpLCBfY2xhc3MucHJvdG90eXBlKSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlVG91Y2hFbmQnLCBbX2F1dG9iaW5kRGVjb3JhdG9yMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlVG91Y2hFbmQnKSwgX2NsYXNzLnByb3RvdHlwZSkpLCBfY2xhc3MpO1xuZXhwb3J0cy5kZWZhdWx0ID0gSW5wdXRSYW5nZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5wdXQtcmFuZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vKiogQGlnbm9yZSAqL1xudmFyIERPV05fQVJST1cgPSBleHBvcnRzLkRPV05fQVJST1cgPSA0MDtcblxuLyoqIEBpZ25vcmUgKi9cbnZhciBMRUZUX0FSUk9XID0gZXhwb3J0cy5MRUZUX0FSUk9XID0gMzc7XG5cbi8qKiBAaWdub3JlICovXG52YXIgUklHSFRfQVJST1cgPSBleHBvcnRzLlJJR0hUX0FSUk9XID0gMzk7XG5cbi8qKiBAaWdub3JlICovXG52YXIgVVBfQVJST1cgPSBleHBvcnRzLlVQX0FSUk9XID0gMzg7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1rZXktY29kZXMuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gTGFiZWw7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogQGlnbm9yZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge0lucHV0UmFuZ2VDbGFzc05hbWVzfSBwcm9wcy5jbGFzc05hbWVzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9wcy5mb3JtYXRMYWJlbFxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnR5cGVcbiAqL1xuZnVuY3Rpb24gTGFiZWwocHJvcHMpIHtcbiAgdmFyIGxhYmVsVmFsdWUgPSBwcm9wcy5mb3JtYXRMYWJlbCA/IHByb3BzLmZvcm1hdExhYmVsKHByb3BzLmNoaWxkcmVuLCBwcm9wcy50eXBlKSA6IHByb3BzLmNoaWxkcmVuO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnc3BhbicsXG4gICAgeyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZXNbcHJvcHMudHlwZSArICdMYWJlbCddIH0sXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICB7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lcy5sYWJlbENvbnRhaW5lciB9LFxuICAgICAgbGFiZWxWYWx1ZVxuICAgIClcbiAgKTtcbn1cblxuLyoqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2hpbGRyZW5cbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNsYXNzTmFtZXNcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGZvcm1hdExhYmVsXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSB0eXBlXG4gKi9cbkxhYmVsLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdE9mKF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nKS5pc1JlcXVpcmVkLFxuICBmb3JtYXRMYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICB0eXBlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sYWJlbC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSByYW5nZVByb3BUeXBlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBAaWdub3JlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBSZWFjdCBjb21wb25lbnQgcHJvcHNcbiAqIEByZXR1cm4gez9FcnJvcn0gUmV0dXJuIEVycm9yIGlmIHZhbGlkYXRpb24gZmFpbHNcbiAqL1xuZnVuY3Rpb24gcmFuZ2VQcm9wVHlwZShwcm9wcykge1xuICB2YXIgbWF4VmFsdWUgPSBwcm9wcy5tYXhWYWx1ZSxcbiAgICAgIG1pblZhbHVlID0gcHJvcHMubWluVmFsdWU7XG5cblxuICBpZiAoISgwLCBfdXRpbHMuaXNOdW1iZXIpKG1pblZhbHVlKSB8fCAhKDAsIF91dGlscy5pc051bWJlcikobWF4VmFsdWUpKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignXCJtaW5WYWx1ZVwiIGFuZCBcIm1heFZhbHVlXCIgbXVzdCBiZSBhIG51bWJlcicpO1xuICB9XG5cbiAgaWYgKG1pblZhbHVlID49IG1heFZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignXCJtaW5WYWx1ZVwiIG11c3QgYmUgc21hbGxlciB0aGFuIFwibWF4VmFsdWVcIicpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmdlLXByb3AtdHlwZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZGVzYywgX3ZhbHVlLCBfY2xhc3M7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfYXV0b2JpbmREZWNvcmF0b3IgPSByZXF1aXJlKCdhdXRvYmluZC1kZWNvcmF0b3InKTtcblxudmFyIF9hdXRvYmluZERlY29yYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdXRvYmluZERlY29yYXRvcik7XG5cbnZhciBfbGFiZWwgPSByZXF1aXJlKCcuL2xhYmVsJyk7XG5cbnZhciBfbGFiZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGFiZWwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVjb3JhdG9ycywgZGVzY3JpcHRvciwgY29udGV4dCkge1xuICB2YXIgZGVzYyA9IHt9O1xuICBPYmplY3RbJ2tlJyArICd5cyddKGRlc2NyaXB0b3IpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRlc2Nba2V5XSA9IGRlc2NyaXB0b3Jba2V5XTtcbiAgfSk7XG4gIGRlc2MuZW51bWVyYWJsZSA9ICEhZGVzYy5lbnVtZXJhYmxlO1xuICBkZXNjLmNvbmZpZ3VyYWJsZSA9ICEhZGVzYy5jb25maWd1cmFibGU7XG5cbiAgaWYgKCd2YWx1ZScgaW4gZGVzYyB8fCBkZXNjLmluaXRpYWxpemVyKSB7XG4gICAgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gIH1cblxuICBkZXNjID0gZGVjb3JhdG9ycy5zbGljZSgpLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGRlc2MsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYykgfHwgZGVzYztcbiAgfSwgZGVzYyk7XG5cbiAgaWYgKGNvbnRleHQgJiYgZGVzYy5pbml0aWFsaXplciAhPT0gdm9pZCAwKSB7XG4gICAgZGVzYy52YWx1ZSA9IGRlc2MuaW5pdGlhbGl6ZXIgPyBkZXNjLmluaXRpYWxpemVyLmNhbGwoY29udGV4dCkgOiB2b2lkIDA7XG4gICAgZGVzYy5pbml0aWFsaXplciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChkZXNjLmluaXRpYWxpemVyID09PSB2b2lkIDApIHtcbiAgICBPYmplY3RbJ2RlZmluZScgKyAnUHJvcGVydHknXSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjKTtcbiAgICBkZXNjID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkZXNjO1xufVxuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xudmFyIFNsaWRlciA9IChfY2xhc3MgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU2xpZGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBfY3JlYXRlQ2xhc3MoU2xpZGVyLCBudWxsLCBbe1xuICAgIGtleTogJ3Byb3BUeXBlcycsXG5cbiAgICAvKipcbiAgICAgKiBBY2NlcHRlZCBwcm9wVHlwZXMgb2YgU2xpZGVyXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGFyaWFMYWJlbGxlZGJ5XG4gICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gYXJpYUNvbnRyb2xzXG4gICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2xhc3NOYW1lXG4gICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZm9ybWF0TGFiZWxcbiAgICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBtYXhWYWx1ZVxuICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IG1pblZhbHVlXG4gICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gb25TbGlkZXJEcmFnXG4gICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gb25TbGlkZXJLZXlEb3duXG4gICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gcGVyY2VudGFnZVxuICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHR5cGVcbiAgICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSB2YWx1ZVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXJpYUxhYmVsbGVkYnk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgICAgICBhcmlhQ29udHJvbHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgICAgICBjbGFzc05hbWVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdE9mKF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nKS5pc1JlcXVpcmVkLFxuICAgICAgICBmb3JtYXRMYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgICAgICBtYXhWYWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gICAgICAgIG1pblZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgICAgICAgb25TbGlkZXJEcmFnOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgb25TbGlkZXJLZXlEb3duOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgcGVyY2VudGFnZTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgdHlwZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgdmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLmlzUmVxdWlyZWRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5hcmlhTGFiZWxsZWRieV1cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmFyaWFDb250cm9sc11cbiAgICAgKiBAcGFyYW0ge0lucHV0UmFuZ2VDbGFzc05hbWVzfSBwcm9wcy5jbGFzc05hbWVzXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW3Byb3BzLmZvcm1hdExhYmVsXVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcHJvcHMubWF4VmFsdWVdXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtwcm9wcy5taW5WYWx1ZV1cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9wcy5vblNsaWRlcktleURvd25cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9wcy5vblNsaWRlckRyYWdcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcHJvcHMucGVyY2VudGFnZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwcm9wcy50eXBlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHByb3BzLnZhbHVlXG4gICAgICovXG5cbiAgfV0pO1xuXG4gIGZ1bmN0aW9uIFNsaWRlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTbGlkZXIpO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7P0NvbXBvbmVudH1cbiAgICAgKi9cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU2xpZGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2xpZGVyKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMubm9kZSA9IG51bGw7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogQG92ZXJyaWRlXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFNsaWRlciwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5yZW1vdmVEb2N1bWVudE1vdXNlTW92ZUxpc3RlbmVyKCk7XG4gICAgICB0aGlzLnJlbW92ZURvY3VtZW50TW91c2VVcExpc3RlbmVyKCk7XG4gICAgICB0aGlzLnJlbW92ZURvY3VtZW50VG91Y2hFbmRMaXN0ZW5lcigpO1xuICAgICAgdGhpcy5yZW1vdmVEb2N1bWVudFRvdWNoTW92ZUxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldFN0eWxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3R5bGUoKSB7XG4gICAgICB2YXIgcGVyYyA9ICh0aGlzLnByb3BzLnBlcmNlbnRhZ2UgfHwgMCkgKiAxMDA7XG4gICAgICB2YXIgc3R5bGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBsZWZ0OiBwZXJjICsgJyUnXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGlzdGVuIHRvIG1vdXNlbW92ZSBldmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYWRkRG9jdW1lbnRNb3VzZU1vdmVMaXN0ZW5lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZERvY3VtZW50TW91c2VNb3ZlTGlzdGVuZXIoKSB7XG4gICAgICB0aGlzLnJlbW92ZURvY3VtZW50TW91c2VNb3ZlTGlzdGVuZXIoKTtcbiAgICAgIHRoaXMubm9kZS5vd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gdG8gbW91c2V1cCBldmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYWRkRG9jdW1lbnRNb3VzZVVwTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGREb2N1bWVudE1vdXNlVXBMaXN0ZW5lcigpIHtcbiAgICAgIHRoaXMucmVtb3ZlRG9jdW1lbnRNb3VzZVVwTGlzdGVuZXIoKTtcbiAgICAgIHRoaXMubm9kZS5vd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZU1vdXNlVXApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpc3RlbiB0byB0b3VjaG1vdmUgZXZlbnRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2FkZERvY3VtZW50VG91Y2hNb3ZlTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGREb2N1bWVudFRvdWNoTW92ZUxpc3RlbmVyKCkge1xuICAgICAgdGhpcy5yZW1vdmVEb2N1bWVudFRvdWNoTW92ZUxpc3RlbmVyKCk7XG4gICAgICB0aGlzLm5vZGUub3duZXJEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmhhbmRsZVRvdWNoTW92ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGlzdGVuIHRvIHRvdWNoZW5kIGV2ZW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdhZGREb2N1bWVudFRvdWNoRW5kTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGREb2N1bWVudFRvdWNoRW5kTGlzdGVuZXIoKSB7XG4gICAgICB0aGlzLnJlbW92ZURvY3VtZW50VG91Y2hFbmRMaXN0ZW5lcigpO1xuICAgICAgdGhpcy5ub2RlLm93bmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmhhbmRsZVRvdWNoRW5kKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZURvY3VtZW50TW91c2VNb3ZlTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVEb2N1bWVudE1vdXNlTW92ZUxpc3RlbmVyKCkge1xuICAgICAgdGhpcy5ub2RlLm93bmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlRG9jdW1lbnRNb3VzZVVwTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVEb2N1bWVudE1vdXNlVXBMaXN0ZW5lcigpIHtcbiAgICAgIHRoaXMubm9kZS5vd25lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZU1vdXNlVXApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlRG9jdW1lbnRUb3VjaE1vdmVMaXN0ZW5lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZURvY3VtZW50VG91Y2hNb3ZlTGlzdGVuZXIoKSB7XG4gICAgICB0aGlzLm5vZGUub3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmhhbmRsZVRvdWNoTW92ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmVEb2N1bWVudFRvdWNoRW5kTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVEb2N1bWVudFRvdWNoRW5kTGlzdGVuZXIoKSB7XG4gICAgICB0aGlzLm5vZGUub3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuaGFuZGxlVG91Y2hFbmQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlTW91c2VEb3duJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKCkge1xuICAgICAgdGhpcy5hZGREb2N1bWVudE1vdXNlTW92ZUxpc3RlbmVyKCk7XG4gICAgICB0aGlzLmFkZERvY3VtZW50TW91c2VVcExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVNb3VzZVVwJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VVcCgpIHtcbiAgICAgIHRoaXMucmVtb3ZlRG9jdW1lbnRNb3VzZU1vdmVMaXN0ZW5lcigpO1xuICAgICAgdGhpcy5yZW1vdmVEb2N1bWVudE1vdXNlVXBMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtTeW50aGV0aWNFdmVudH0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVNb3VzZU1vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgIHRoaXMucHJvcHMub25TbGlkZXJEcmFnKGV2ZW50LCB0aGlzLnByb3BzLnR5cGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlVG91Y2hTdGFydCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnQoKSB7XG4gICAgICB0aGlzLmFkZERvY3VtZW50VG91Y2hFbmRMaXN0ZW5lcigpO1xuICAgICAgdGhpcy5hZGREb2N1bWVudFRvdWNoTW92ZUxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZVRvdWNoTW92ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZShldmVudCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNsaWRlckRyYWcoZXZlbnQsIHRoaXMucHJvcHMudHlwZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVUb3VjaEVuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKCkge1xuICAgICAgdGhpcy5yZW1vdmVEb2N1bWVudFRvdWNoTW92ZUxpc3RlbmVyKCk7XG4gICAgICB0aGlzLnJlbW92ZURvY3VtZW50VG91Y2hFbmRMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtTeW50aGV0aWNFdmVudH0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVLZXlEb3duJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNsaWRlcktleURvd24oZXZlbnQsIHRoaXMucHJvcHMudHlwZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQHJldHVybiB7SlNYLkVsZW1lbnR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgc3R5bGUgPSB0aGlzLmdldFN0eWxlKCk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZXMuc2xpZGVyQ29udGFpbmVyLFxuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcbiAgICAgICAgICAgIF90aGlzMi5ub2RlID0gbm9kZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN0eWxlOiBzdHlsZSB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfbGFiZWwyLmRlZmF1bHQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lczogdGhpcy5wcm9wcy5jbGFzc05hbWVzLFxuICAgICAgICAgICAgZm9ybWF0TGFiZWw6IHRoaXMucHJvcHMuZm9ybWF0TGFiZWwsXG4gICAgICAgICAgICB0eXBlOiAndmFsdWUnIH0sXG4gICAgICAgICAgdGhpcy5wcm9wcy52YWx1ZVxuICAgICAgICApLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiB0aGlzLnByb3BzLmFyaWFMYWJlbGxlZGJ5LFxuICAgICAgICAgICdhcmlhLWNvbnRyb2xzJzogdGhpcy5wcm9wcy5hcmlhQ29udHJvbHMsXG4gICAgICAgICAgJ2FyaWEtdmFsdWVtYXgnOiB0aGlzLnByb3BzLm1heFZhbHVlLFxuICAgICAgICAgICdhcmlhLXZhbHVlbWluJzogdGhpcy5wcm9wcy5taW5WYWx1ZSxcbiAgICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHRoaXMucHJvcHMudmFsdWUsXG4gICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZXMuc2xpZGVyLFxuICAgICAgICAgIGRyYWdnYWJsZTogJ2ZhbHNlJyxcbiAgICAgICAgICBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93bixcbiAgICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVNb3VzZURvd24sXG4gICAgICAgICAgb25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG4gICAgICAgICAgcm9sZTogJ3NsaWRlcicsXG4gICAgICAgICAgdGFiSW5kZXg6ICcwJyB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2xpZGVyO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KSwgKF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZU1vdXNlRG93bicsIFtfYXV0b2JpbmREZWNvcmF0b3IyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVNb3VzZURvd24nKSwgX2NsYXNzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZU1vdXNlVXAnLCBbX2F1dG9iaW5kRGVjb3JhdG9yMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlTW91c2VVcCcpLCBfY2xhc3MucHJvdG90eXBlKSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlTW91c2VNb3ZlJywgW19hdXRvYmluZERlY29yYXRvcjIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZU1vdXNlTW92ZScpLCBfY2xhc3MucHJvdG90eXBlKSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlVG91Y2hTdGFydCcsIFtfYXV0b2JpbmREZWNvcmF0b3IyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVUb3VjaFN0YXJ0JyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVUb3VjaE1vdmUnLCBbX2F1dG9iaW5kRGVjb3JhdG9yMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlVG91Y2hNb3ZlJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVUb3VjaEVuZCcsIFtfYXV0b2JpbmREZWNvcmF0b3IyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVUb3VjaEVuZCcpLCBfY2xhc3MucHJvdG90eXBlKSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlS2V5RG93bicsIFtfYXV0b2JpbmREZWNvcmF0b3IyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVLZXlEb3duJyksIF9jbGFzcy5wcm90b3R5cGUpKSwgX2NsYXNzKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNsaWRlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2xpZGVyLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9kZXNjLCBfdmFsdWUsIF9jbGFzcztcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9hdXRvYmluZERlY29yYXRvciA9IHJlcXVpcmUoJ2F1dG9iaW5kLWRlY29yYXRvcicpO1xuXG52YXIgX2F1dG9iaW5kRGVjb3JhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F1dG9iaW5kRGVjb3JhdG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHksIGRlY29yYXRvcnMsIGRlc2NyaXB0b3IsIGNvbnRleHQpIHtcbiAgdmFyIGRlc2MgPSB7fTtcbiAgT2JqZWN0WydrZScgKyAneXMnXShkZXNjcmlwdG9yKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBkZXNjW2tleV0gPSBkZXNjcmlwdG9yW2tleV07XG4gIH0pO1xuICBkZXNjLmVudW1lcmFibGUgPSAhIWRlc2MuZW51bWVyYWJsZTtcbiAgZGVzYy5jb25maWd1cmFibGUgPSAhIWRlc2MuY29uZmlndXJhYmxlO1xuXG4gIGlmICgndmFsdWUnIGluIGRlc2MgfHwgZGVzYy5pbml0aWFsaXplcikge1xuICAgIGRlc2Mud3JpdGFibGUgPSB0cnVlO1xuICB9XG5cbiAgZGVzYyA9IGRlY29yYXRvcnMuc2xpY2UoKS5yZXZlcnNlKCkucmVkdWNlKGZ1bmN0aW9uIChkZXNjLCBkZWNvcmF0b3IpIHtcbiAgICByZXR1cm4gZGVjb3JhdG9yKHRhcmdldCwgcHJvcGVydHksIGRlc2MpIHx8IGRlc2M7XG4gIH0sIGRlc2MpO1xuXG4gIGlmIChjb250ZXh0ICYmIGRlc2MuaW5pdGlhbGl6ZXIgIT09IHZvaWQgMCkge1xuICAgIGRlc2MudmFsdWUgPSBkZXNjLmluaXRpYWxpemVyID8gZGVzYy5pbml0aWFsaXplci5jYWxsKGNvbnRleHQpIDogdm9pZCAwO1xuICAgIGRlc2MuaW5pdGlhbGl6ZXIgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoZGVzYy5pbml0aWFsaXplciA9PT0gdm9pZCAwKSB7XG4gICAgT2JqZWN0WydkZWZpbmUnICsgJ1Byb3BlcnR5J10odGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYyk7XG4gICAgZGVzYyA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gZGVzYztcbn1cblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbnZhciBUcmFjayA9IChfY2xhc3MgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVHJhY2ssIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhUcmFjaywgbnVsbCwgW3tcbiAgICBrZXk6ICdwcm9wVHlwZXMnLFxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNoaWxkcmVuXG4gICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2xhc3NOYW1lc1xuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZHJhZ2dhYmxlVHJhY2tcbiAgICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBvblRyYWNrRHJhZ1xuICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IG9uVHJhY2tNb3VzZURvd25cbiAgICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBwZXJjZW50YWdlc1xuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZS5pc1JlcXVpcmVkLFxuICAgICAgICBjbGFzc05hbWVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdE9mKF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nKS5pc1JlcXVpcmVkLFxuICAgICAgICBkcmFnZ2FibGVUcmFjazogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAgICAgICBvblRyYWNrRHJhZzogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgICAgICBvblRyYWNrTW91c2VEb3duOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgcGVyY2VudGFnZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0T2YoX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIpLmlzUmVxdWlyZWRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gICAgICogQHBhcmFtIHtJbnB1dFJhbmdlQ2xhc3NOYW1lc30gcHJvcHMuY2xhc3NOYW1lc1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJvcHMuZHJhZ2dhYmxlVHJhY2tcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9wcy5vblRyYWNrRHJhZ1xuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHByb3BzLm9uVHJhY2tNb3VzZURvd25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcHJvcHMucGVyY2VudGFnZXNcbiAgICAgKi9cblxuICB9XSk7XG5cbiAgZnVuY3Rpb24gVHJhY2socHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhY2spO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7P0NvbXBvbmVudH1cbiAgICAgKi9cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVHJhY2suX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUcmFjaykpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLm5vZGUgPSBudWxsO1xuICAgIF90aGlzLnRyYWNrRHJhZ0V2ZW50ID0gbnVsbDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHJldHVybiB7Q2xpZW50UmVjdH1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoVHJhY2ssIFt7XG4gICAga2V5OiAnZ2V0Q2xpZW50UmVjdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENsaWVudFJlY3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBDU1Mgc3R5bGVzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldEFjdGl2ZVRyYWNrU3R5bGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBY3RpdmVUcmFja1N0eWxlKCkge1xuICAgICAgdmFyIHdpZHRoID0gKHRoaXMucHJvcHMucGVyY2VudGFnZXMubWF4IC0gdGhpcy5wcm9wcy5wZXJjZW50YWdlcy5taW4pICogMTAwICsgJyUnO1xuICAgICAgdmFyIGxlZnQgPSB0aGlzLnByb3BzLnBlcmNlbnRhZ2VzLm1pbiAqIDEwMCArICclJztcblxuICAgICAgcmV0dXJuIHsgbGVmdDogbGVmdCwgd2lkdGg6IHdpZHRoIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGlzdGVuIHRvIG1vdXNlbW92ZSBldmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYWRkRG9jdW1lbnRNb3VzZU1vdmVMaXN0ZW5lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZERvY3VtZW50TW91c2VNb3ZlTGlzdGVuZXIoKSB7XG4gICAgICB0aGlzLnJlbW92ZURvY3VtZW50TW91c2VNb3ZlTGlzdGVuZXIoKTtcbiAgICAgIHRoaXMubm9kZS5vd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gdG8gbW91c2V1cCBldmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYWRkRG9jdW1lbnRNb3VzZVVwTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGREb2N1bWVudE1vdXNlVXBMaXN0ZW5lcigpIHtcbiAgICAgIHRoaXMucmVtb3ZlRG9jdW1lbnRNb3VzZVVwTGlzdGVuZXIoKTtcbiAgICAgIHRoaXMubm9kZS5vd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZU1vdXNlVXApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlRG9jdW1lbnRNb3VzZU1vdmVMaXN0ZW5lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZURvY3VtZW50TW91c2VNb3ZlTGlzdGVuZXIoKSB7XG4gICAgICB0aGlzLm5vZGUub3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZU1vdXNlTW92ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmVEb2N1bWVudE1vdXNlVXBMaXN0ZW5lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZURvY3VtZW50TW91c2VVcExpc3RlbmVyKCkge1xuICAgICAgdGhpcy5ub2RlLm93bmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlTW91c2VVcCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZU1vdXNlTW92ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZShldmVudCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmRyYWdnYWJsZVRyYWNrKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMudHJhY2tEcmFnRXZlbnQgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblRyYWNrRHJhZyhldmVudCwgdGhpcy50cmFja0RyYWdFdmVudCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudHJhY2tEcmFnRXZlbnQgPSBldmVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZU1vdXNlVXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZVVwKCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmRyYWdnYWJsZVRyYWNrKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZW1vdmVEb2N1bWVudE1vdXNlTW92ZUxpc3RlbmVyKCk7XG4gICAgICB0aGlzLnJlbW92ZURvY3VtZW50TW91c2VVcExpc3RlbmVyKCk7XG4gICAgICB0aGlzLnRyYWNrRHJhZ0V2ZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7U3ludGhldGljRXZlbnR9IGV2ZW50IC0gVXNlciBldmVudFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVNb3VzZURvd24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbiAgICAgIHZhciBjbGllbnRYID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFg7XG4gICAgICB2YXIgdHJhY2tDbGllbnRSZWN0ID0gdGhpcy5nZXRDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgcG9zaXRpb24gPSB7XG4gICAgICAgIHg6IGNsaWVudFggLSB0cmFja0NsaWVudFJlY3QubGVmdCxcbiAgICAgICAgeTogMFxuICAgICAgfTtcblxuICAgICAgdGhpcy5wcm9wcy5vblRyYWNrTW91c2VEb3duKGV2ZW50LCBwb3NpdGlvbik7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmRyYWdnYWJsZVRyYWNrKSB7XG4gICAgICAgIHRoaXMuYWRkRG9jdW1lbnRNb3VzZU1vdmVMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLmFkZERvY3VtZW50TW91c2VVcExpc3RlbmVyKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudCAtIFVzZXIgZXZlbnRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlVG91Y2hTdGFydCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHRoaXMuaGFuZGxlTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKiBAcmV0dXJuIHtKU1guRWxlbWVudH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBhY3RpdmVUcmFja1N0eWxlID0gdGhpcy5nZXRBY3RpdmVUcmFja1N0eWxlKCk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lcy50cmFjayxcbiAgICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVNb3VzZURvd24sXG4gICAgICAgICAgb25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYobm9kZSkge1xuICAgICAgICAgICAgX3RoaXMyLm5vZGUgPSBub2RlO1xuICAgICAgICAgIH0gfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICBzdHlsZTogYWN0aXZlVHJhY2tTdHlsZSxcbiAgICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lcy5hY3RpdmVUcmFjayB9KSxcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVHJhY2s7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpLCAoX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlTW91c2VNb3ZlJywgW19hdXRvYmluZERlY29yYXRvcjIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZU1vdXNlTW92ZScpLCBfY2xhc3MucHJvdG90eXBlKSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlTW91c2VVcCcsIFtfYXV0b2JpbmREZWNvcmF0b3IyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVNb3VzZVVwJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVNb3VzZURvd24nLCBbX2F1dG9iaW5kRGVjb3JhdG9yMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlTW91c2VEb3duJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVUb3VjaFN0YXJ0JywgW19hdXRvYmluZERlY29yYXRvcjIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZVRvdWNoU3RhcnQnKSwgX2NsYXNzLnByb3RvdHlwZSkpLCBfY2xhc3MpO1xuZXhwb3J0cy5kZWZhdWx0ID0gVHJhY2s7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYWNrLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZhbHVlUHJvcFR5cGU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICogQHJldHVybiB7P0Vycm9yfSBSZXR1cm4gRXJyb3IgaWYgdmFsaWRhdGlvbiBmYWlsc1xuICovXG5mdW5jdGlvbiB2YWx1ZVByb3BUeXBlKHByb3BzLCBwcm9wTmFtZSkge1xuICB2YXIgbWF4VmFsdWUgPSBwcm9wcy5tYXhWYWx1ZSxcbiAgICAgIG1pblZhbHVlID0gcHJvcHMubWluVmFsdWU7XG5cbiAgdmFyIHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gIGlmICghKDAsIF91dGlscy5pc051bWJlcikodmFsdWUpICYmICghKDAsIF91dGlscy5pc09iamVjdCkodmFsdWUpIHx8ICEoMCwgX3V0aWxzLmlzTnVtYmVyKSh2YWx1ZS5taW4pIHx8ICEoMCwgX3V0aWxzLmlzTnVtYmVyKSh2YWx1ZS5tYXgpKSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ1wiJyArIHByb3BOYW1lICsgJ1wiIG11c3QgYmUgYSBudW1iZXIgb3IgYSByYW5nZSBvYmplY3QnKTtcbiAgfVxuXG4gIGlmICgoMCwgX3V0aWxzLmlzTnVtYmVyKSh2YWx1ZSkgJiYgKHZhbHVlIDwgbWluVmFsdWUgfHwgdmFsdWUgPiBtYXhWYWx1ZSkpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdcIicgKyBwcm9wTmFtZSArICdcIiBtdXN0IGJlIGluIGJldHdlZW4gXCJtaW5WYWx1ZVwiIGFuZCBcIm1heFZhbHVlXCInKTtcbiAgfVxuXG4gIGlmICgoMCwgX3V0aWxzLmlzT2JqZWN0KSh2YWx1ZSkgJiYgKHZhbHVlLm1pbiA8IG1pblZhbHVlIHx8IHZhbHVlLm1pbiA+IG1heFZhbHVlIHx8IHZhbHVlLm1heCA8IG1pblZhbHVlIHx8IHZhbHVlLm1heCA+IG1heFZhbHVlKSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ1wiJyArIHByb3BOYW1lICsgJ1wiIG11c3QgYmUgaW4gYmV0d2VlbiBcIm1pblZhbHVlXCIgYW5kIFwibWF4VmFsdWVcIicpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZhbHVlLXByb3AtdHlwZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZ2V0UGVyY2VudGFnZUZyb21Qb3NpdGlvbiA9IGdldFBlcmNlbnRhZ2VGcm9tUG9zaXRpb247XG5leHBvcnRzLmdldFZhbHVlRnJvbVBvc2l0aW9uID0gZ2V0VmFsdWVGcm9tUG9zaXRpb247XG5leHBvcnRzLmdldFZhbHVlRnJvbVByb3BzID0gZ2V0VmFsdWVGcm9tUHJvcHM7XG5leHBvcnRzLmdldFBlcmNlbnRhZ2VGcm9tVmFsdWUgPSBnZXRQZXJjZW50YWdlRnJvbVZhbHVlO1xuZXhwb3J0cy5nZXRQZXJjZW50YWdlc0Zyb21WYWx1ZXMgPSBnZXRQZXJjZW50YWdlc0Zyb21WYWx1ZXM7XG5leHBvcnRzLmdldFBvc2l0aW9uRnJvbVZhbHVlID0gZ2V0UG9zaXRpb25Gcm9tVmFsdWU7XG5leHBvcnRzLmdldFBvc2l0aW9uc0Zyb21WYWx1ZXMgPSBnZXRQb3NpdGlvbnNGcm9tVmFsdWVzO1xuZXhwb3J0cy5nZXRQb3NpdGlvbkZyb21FdmVudCA9IGdldFBvc2l0aW9uRnJvbUV2ZW50O1xuZXhwb3J0cy5nZXRTdGVwVmFsdWVGcm9tVmFsdWUgPSBnZXRTdGVwVmFsdWVGcm9tVmFsdWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG4vKipcbiAqIENvbnZlcnQgYSBwb2ludCBpbnRvIGEgcGVyY2VudGFnZSB2YWx1ZVxuICogQGlnbm9yZVxuICogQHBhcmFtIHtQb2ludH0gcG9zaXRpb25cbiAqIEBwYXJhbSB7Q2xpZW50UmVjdH0gY2xpZW50UmVjdFxuICogQHJldHVybiB7bnVtYmVyfSBQZXJjZW50YWdlIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIGdldFBlcmNlbnRhZ2VGcm9tUG9zaXRpb24ocG9zaXRpb24sIGNsaWVudFJlY3QpIHtcbiAgdmFyIGxlbmd0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG4gIHZhciBzaXplUGVyYyA9IHBvc2l0aW9uLnggLyBsZW5ndGg7XG5cbiAgcmV0dXJuIHNpemVQZXJjIHx8IDA7XG59XG5cbi8qKlxuICogQ29udmVydCBhIHBvaW50IGludG8gYSBtb2RlbCB2YWx1ZVxuICogQGlnbm9yZVxuICogQHBhcmFtIHtQb2ludH0gcG9zaXRpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW5WYWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IG1heFZhbHVlXG4gKiBAcGFyYW0ge0NsaWVudFJlY3R9IGNsaWVudFJlY3RcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWVGcm9tUG9zaXRpb24ocG9zaXRpb24sIG1pblZhbHVlLCBtYXhWYWx1ZSwgY2xpZW50UmVjdCkge1xuICB2YXIgc2l6ZVBlcmMgPSBnZXRQZXJjZW50YWdlRnJvbVBvc2l0aW9uKHBvc2l0aW9uLCBjbGllbnRSZWN0KTtcbiAgdmFyIHZhbHVlRGlmZiA9IG1heFZhbHVlIC0gbWluVmFsdWU7XG5cbiAgcmV0dXJuIG1pblZhbHVlICsgdmFsdWVEaWZmICogc2l6ZVBlcmM7XG59XG5cbi8qKlxuICogQ29udmVydCBwcm9wcyBpbnRvIGEgcmFuZ2UgdmFsdWVcbiAqIEBpZ25vcmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtib29sZWFufSBpc011bHRpVmFsdWVcbiAqIEByZXR1cm4ge1JhbmdlfVxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZUZyb21Qcm9wcyhwcm9wcywgaXNNdWx0aVZhbHVlKSB7XG4gIGlmIChpc011bHRpVmFsdWUpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHByb3BzLnZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbWluOiBwcm9wcy5taW5WYWx1ZSxcbiAgICBtYXg6IHByb3BzLnZhbHVlXG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydCBhIG1vZGVsIHZhbHVlIGludG8gYSBwZXJjZW50YWdlIHZhbHVlXG4gKiBAaWdub3JlXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW5WYWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IG1heFZhbHVlXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldFBlcmNlbnRhZ2VGcm9tVmFsdWUodmFsdWUsIG1pblZhbHVlLCBtYXhWYWx1ZSkge1xuICB2YXIgdmFsaWRWYWx1ZSA9ICgwLCBfdXRpbHMuY2xhbXApKHZhbHVlLCBtaW5WYWx1ZSwgbWF4VmFsdWUpO1xuICB2YXIgdmFsdWVEaWZmID0gbWF4VmFsdWUgLSBtaW5WYWx1ZTtcbiAgdmFyIHZhbHVlUGVyYyA9ICh2YWxpZFZhbHVlIC0gbWluVmFsdWUpIC8gdmFsdWVEaWZmO1xuXG4gIHJldHVybiB2YWx1ZVBlcmMgfHwgMDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IG1vZGVsIHZhbHVlcyBpbnRvIHBlcmNlbnRhZ2UgdmFsdWVzXG4gKiBAaWdub3JlXG4gKiBAcGFyYW0ge1JhbmdlfSB2YWx1ZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW5WYWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IG1heFZhbHVlXG4gKiBAcmV0dXJuIHtSYW5nZX1cbiAqL1xuZnVuY3Rpb24gZ2V0UGVyY2VudGFnZXNGcm9tVmFsdWVzKHZhbHVlcywgbWluVmFsdWUsIG1heFZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgbWluOiBnZXRQZXJjZW50YWdlRnJvbVZhbHVlKHZhbHVlcy5taW4sIG1pblZhbHVlLCBtYXhWYWx1ZSksXG4gICAgbWF4OiBnZXRQZXJjZW50YWdlRnJvbVZhbHVlKHZhbHVlcy5tYXgsIG1pblZhbHVlLCBtYXhWYWx1ZSlcbiAgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgdmFsdWUgaW50byBhIHBvaW50XG4gKiBAaWdub3JlXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW5WYWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IG1heFZhbHVlXG4gKiBAcGFyYW0ge0NsaWVudFJlY3R9IGNsaWVudFJlY3RcbiAqIEByZXR1cm4ge1BvaW50fSBQb3NpdGlvblxuICovXG5mdW5jdGlvbiBnZXRQb3NpdGlvbkZyb21WYWx1ZSh2YWx1ZSwgbWluVmFsdWUsIG1heFZhbHVlLCBjbGllbnRSZWN0KSB7XG4gIHZhciBsZW5ndGggPSBjbGllbnRSZWN0LndpZHRoO1xuICB2YXIgdmFsdWVQZXJjID0gZ2V0UGVyY2VudGFnZUZyb21WYWx1ZSh2YWx1ZSwgbWluVmFsdWUsIG1heFZhbHVlKTtcbiAgdmFyIHBvc2l0aW9uVmFsdWUgPSB2YWx1ZVBlcmMgKiBsZW5ndGg7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBwb3NpdGlvblZhbHVlLFxuICAgIHk6IDBcbiAgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgcmFuZ2Ugb2YgdmFsdWVzIGludG8gcG9pbnRzXG4gKiBAaWdub3JlXG4gKiBAcGFyYW0ge1JhbmdlfSB2YWx1ZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW5WYWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IG1heFZhbHVlXG4gKiBAcGFyYW0ge0NsaWVudFJlY3R9IGNsaWVudFJlY3RcbiAqIEByZXR1cm4ge1JhbmdlfVxuICovXG5mdW5jdGlvbiBnZXRQb3NpdGlvbnNGcm9tVmFsdWVzKHZhbHVlcywgbWluVmFsdWUsIG1heFZhbHVlLCBjbGllbnRSZWN0KSB7XG4gIHJldHVybiB7XG4gICAgbWluOiBnZXRQb3NpdGlvbkZyb21WYWx1ZSh2YWx1ZXMubWluLCBtaW5WYWx1ZSwgbWF4VmFsdWUsIGNsaWVudFJlY3QpLFxuICAgIG1heDogZ2V0UG9zaXRpb25Gcm9tVmFsdWUodmFsdWVzLm1heCwgbWluVmFsdWUsIG1heFZhbHVlLCBjbGllbnRSZWN0KVxuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnQgYW4gZXZlbnQgaW50byBhIHBvaW50XG4gKiBAaWdub3JlXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICogQHBhcmFtIHtDbGllbnRSZWN0fSBjbGllbnRSZWN0XG4gKiBAcmV0dXJuIHtQb2ludH1cbiAqL1xuZnVuY3Rpb24gZ2V0UG9zaXRpb25Gcm9tRXZlbnQoZXZlbnQsIGNsaWVudFJlY3QpIHtcbiAgdmFyIGxlbmd0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG5cbiAgdmFyIF9yZWYgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXSA6IGV2ZW50LFxuICAgICAgY2xpZW50WCA9IF9yZWYuY2xpZW50WDtcblxuICByZXR1cm4ge1xuICAgIHg6ICgwLCBfdXRpbHMuY2xhbXApKGNsaWVudFggLSBjbGllbnRSZWN0LmxlZnQsIDAsIGxlbmd0aCksXG4gICAgeTogMFxuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSB2YWx1ZSBpbnRvIGEgc3RlcCB2YWx1ZVxuICogQGlnbm9yZVxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVQZXJTdGVwXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldFN0ZXBWYWx1ZUZyb21WYWx1ZSh2YWx1ZSwgdmFsdWVQZXJTdGVwKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlIC8gdmFsdWVQZXJTdGVwKSAqIHZhbHVlUGVyU3RlcDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZhbHVlLXRyYW5zZm9ybWVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY2FwdGlhbGl6ZTtcbi8qKlxuICogQ2FwdGlhbGl6ZSBhIHN0cmluZ1xuICogQGlnbm9yZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjYXB0aWFsaXplKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNhcHRpYWxpemUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjbGFtcDtcbi8qKlxuICogQ2xhbXAgYSB2YWx1ZSBiZXR3ZWVuIGEgbWluIGFuZCBtYXggdmFsdWVcbiAqIEBpZ25vcmVcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IG1pblxuICogQHBhcmFtIHtudW1iZXJ9IG1heFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtaW4pLCBtYXgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsYW1wLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGlzdGFuY2VUbztcbi8qKlxuICogQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHBvaW50QSBhbmQgcG9pbnRCXG4gKiBAaWdub3JlXG4gKiBAcGFyYW0ge1BvaW50fSBwb2ludEFcbiAqIEBwYXJhbSB7UG9pbnR9IHBvaW50QlxuICogQHJldHVybiB7bnVtYmVyfSBEaXN0YW5jZVxuICovXG5mdW5jdGlvbiBkaXN0YW5jZVRvKHBvaW50QSwgcG9pbnRCKSB7XG4gIHZhciB4RGlmZiA9IE1hdGgucG93KHBvaW50Qi54IC0gcG9pbnRBLngsIDIpO1xuICB2YXIgeURpZmYgPSBNYXRoLnBvdyhwb2ludEIueSAtIHBvaW50QS55LCAyKTtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHhEaWZmICsgeURpZmYpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpc3RhbmNlLXRvLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jYXB0aWFsaXplID0gcmVxdWlyZSgnLi9jYXB0aWFsaXplJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FwdGlhbGl6ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhcHRpYWxpemUpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2NsYW1wID0gcmVxdWlyZSgnLi9jbGFtcCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NsYW1wJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhbXApLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2Rpc3RhbmNlVG8gPSByZXF1aXJlKCcuL2Rpc3RhbmNlLXRvJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZGlzdGFuY2VUbycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Rpc3RhbmNlVG8pLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2lzRGVmaW5lZCA9IHJlcXVpcmUoJy4vaXMtZGVmaW5lZCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzRGVmaW5lZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzRGVmaW5lZCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfaXNOdW1iZXIgPSByZXF1aXJlKCcuL2lzLW51bWJlcicpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzTnVtYmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNOdW1iZXIpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2lzT2JqZWN0ID0gcmVxdWlyZSgnLi9pcy1vYmplY3QnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc09iamVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzT2JqZWN0KS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9sZW5ndGggPSByZXF1aXJlKCcuL2xlbmd0aCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2xlbmd0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xlbmd0aCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzRGVmaW5lZDtcbi8qKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBkZWZpbmVkXG4gKiBAaWdub3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGw7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtZGVmaW5lZC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc051bWJlcjtcbi8qKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhIG51bWJlclxuICogQGlnbm9yZVxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLW51bWJlci5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gaXNPYmplY3Q7XG4vKipcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYW4gb2JqZWN0XG4gKiBAaWdub3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpKSA9PT0gJ29iamVjdCc7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLW9iamVjdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGxlbmd0aDtcbi8qKlxuICogQ2FsY3VsYXRlIHRoZSBhYnNvbHV0ZSBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIG51bWJlcnNcbiAqIEBpZ25vcmVcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1BXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtQlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBsZW5ndGgobnVtQSwgbnVtQikge1xuICByZXR1cm4gTWF0aC5hYnMobnVtQSAtIG51bUIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxlbmd0aC5qcy5tYXAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbi8qXG5UaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuQ29weXJpZ2h0IChjKSAyMDE1IGluc3RydWN0dXJlLXJlYWN0XG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5jb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5TT0ZUV0FSRS5cbiovXG52YXIgdW5jaGVja2VkSWNvbiA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3N2ZycsIHtcbiAgdmlld0JveDogXCItMiAtNSAxNCAyMFwiLFxuICBoZWlnaHQ6IFwiMTAwJVwiLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIHN0eWxlOiB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IDBcbiAgfVxufSwgUmVhY3QuY3JlYXRlRWxlbWVudCgncGF0aCcsIHtcbiAgZDogXCJNOS45IDIuMTJMNy43OCAwIDQuOTUgMi44MjggMi4xMiAwIDAgMi4xMmwyLjgzIDIuODNMMCA3Ljc3NiAyLjEyMyA5LjkgNC45NSA3LjA3IDcuNzggOS45IDkuOSA3Ljc3NiA3LjA3MiA0Ljk1IDkuOSAyLjEyXCIsXG4gIGZpbGw6IFwiI2ZmZlwiLFxuICBmaWxsUnVsZTogXCJldmVub2RkXCJcbn0pKTtcbnZhciBjaGVja2VkSWNvbiA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3N2ZycsIHtcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICB2aWV3Qm94OiBcIi0yIC01IDE3IDIxXCIsXG4gIHN0eWxlOiB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IDBcbiAgfVxufSwgUmVhY3QuY3JlYXRlRWxlbWVudCgncGF0aCcsIHtcbiAgZDogXCJNMTEuMjY0IDBMNS4yNiA2LjAwNCAyLjEwMyAyLjg0NyAwIDQuOTVsNS4yNiA1LjI2IDguMTA4LTguMTA3TDExLjI2NCAwXCIsXG4gIGZpbGw6IFwiI2ZmZlwiLFxuICBmaWxsUnVsZTogXCJldmVub2RkXCJcbn0pKTtcblxuZnVuY3Rpb24gY3JlYXRlQmFja2dyb3VuZENvbG9yKHBvcywgY2hlY2tlZFBvcywgdW5jaGVja2VkUG9zLCBvZmZDb2xvciwgb25Db2xvcikge1xuICB2YXIgcmVsYXRpdmVQb3MgPSAocG9zIC0gdW5jaGVja2VkUG9zKSAvIChjaGVja2VkUG9zIC0gdW5jaGVja2VkUG9zKTtcblxuICBpZiAocmVsYXRpdmVQb3MgPT09IDApIHtcbiAgICByZXR1cm4gb2ZmQ29sb3I7XG4gIH1cblxuICBpZiAocmVsYXRpdmVQb3MgPT09IDEpIHtcbiAgICByZXR1cm4gb25Db2xvcjtcbiAgfVxuXG4gIHZhciBuZXdDb2xvciA9IFwiI1wiO1xuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgNjsgaSArPSAyKSB7XG4gICAgdmFyIG9mZkNvbXBvbmVudCA9IHBhcnNlSW50KG9mZkNvbG9yLnN1YnN0cihpLCAyKSwgMTYpO1xuICAgIHZhciBvbkNvbXBvbmVudCA9IHBhcnNlSW50KG9uQ29sb3Iuc3Vic3RyKGksIDIpLCAxNik7XG4gICAgdmFyIHdlaWdodGVkVmFsdWUgPSBNYXRoLnJvdW5kKCgxIC0gcmVsYXRpdmVQb3MpICogb2ZmQ29tcG9uZW50ICsgcmVsYXRpdmVQb3MgKiBvbkNvbXBvbmVudCk7XG4gICAgdmFyIG5ld0NvbXBvbmVudCA9IHdlaWdodGVkVmFsdWUudG9TdHJpbmcoMTYpO1xuXG4gICAgaWYgKG5ld0NvbXBvbmVudC5sZW5ndGggPT09IDEpIHtcbiAgICAgIG5ld0NvbXBvbmVudCA9IFwiMFwiICsgbmV3Q29tcG9uZW50O1xuICAgIH1cblxuICAgIG5ld0NvbG9yICs9IG5ld0NvbXBvbmVudDtcbiAgfVxuXG4gIHJldHVybiBuZXdDb2xvcjtcbn1cblxuZnVuY3Rpb24gY29udmVydFNob3J0aGFuZENvbG9yKGNvbG9yKSB7XG4gIGlmIChjb2xvci5sZW5ndGggPT09IDcpIHtcbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICB2YXIgc2l4RGlnaXRDb2xvciA9IFwiI1wiO1xuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgNDsgaSArPSAxKSB7XG4gICAgc2l4RGlnaXRDb2xvciArPSBjb2xvcltpXSArIGNvbG9yW2ldO1xuICB9XG5cbiAgcmV0dXJuIHNpeERpZ2l0Q29sb3I7XG59XG5cbmZ1bmN0aW9uIGdldEJhY2tncm91bmRDb2xvcihwb3MsIGNoZWNrZWRQb3MsIHVuY2hlY2tlZFBvcywgb2ZmQ29sb3IsIG9uQ29sb3IpIHtcbiAgdmFyIHNpeERpZ2l0T2ZmQ29sb3IgPSBjb252ZXJ0U2hvcnRoYW5kQ29sb3Iob2ZmQ29sb3IpO1xuICB2YXIgc2l4RGlnaXRPbkNvbG9yID0gY29udmVydFNob3J0aGFuZENvbG9yKG9uQ29sb3IpO1xuICByZXR1cm4gY3JlYXRlQmFja2dyb3VuZENvbG9yKHBvcywgY2hlY2tlZFBvcywgdW5jaGVja2VkUG9zLCBzaXhEaWdpdE9mZkNvbG9yLCBzaXhEaWdpdE9uQ29sb3IpO1xufVxuXG4vLyBNYWtlIHN1cmUgY29sb3IgcHJvcHMgYXJlIHN0cmluZ3MgdGhhdCBzdGFydCB3aXRoIFwiI1wiIHNpbmNlIG90aGVyIHdheXMgdG8gd3JpdGUgY29sb3JzIGFyZSBub3Qgc3VwcG9ydGVkLlxudmFyIGhleENvbG9yUHJvcFR5cGUgPSBmdW5jdGlvbiAocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIHZhciBwcm9wID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gIGlmICh0eXBlb2YgcHJvcCAhPT0gXCJzdHJpbmdcIiB8fCBwcm9wWzBdICE9PSBcIiNcIiB8fCBwcm9wLmxlbmd0aCAhPT0gNCAmJiBwcm9wLmxlbmd0aCAhPT0gNykge1xuICAgIHJldHVybiBuZXcgRXJyb3IoXCJJbnZhbGlkIHByb3AgJ1wiICsgcHJvcE5hbWUgKyBcIicgc3VwcGxpZWQgdG8gJ1wiICsgY29tcG9uZW50TmFtZSArIFwiJy4gJ1wiICsgcHJvcE5hbWUgKyBcIicgaGFzIHRvIGJlIGVpdGhlciBhIDMtZGlnaXQgb3IgNi1kaWdpdCBoZXgtY29sb3Igc3RyaW5nLiBWYWxpZCBleGFtcGxlczogJyNhYmMnLCAnIzEyMzQ1NidcIik7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmZ1bmN0aW9uIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwgZXhjbHVkZSkge1xuICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgZm9yICh2YXIgayBpbiBvYmopIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrKSAmJiBleGNsdWRlLmluZGV4T2YoaykgPT09IC0xKSB0YXJnZXRba10gPSBvYmpba107XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxudmFyIFJlYWN0U3dpdGNoID1cbi8qQF9fUFVSRV9fKi9cbmZ1bmN0aW9uIChDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gUmVhY3RTd2l0Y2gocHJvcHMpIHtcbiAgICBDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgdmFyIGhlaWdodCA9IHByb3BzLmhlaWdodDtcbiAgICB2YXIgd2lkdGggPSBwcm9wcy53aWR0aDtcbiAgICB2YXIgaGFuZGxlRGlhbWV0ZXIgPSBwcm9wcy5oYW5kbGVEaWFtZXRlcjtcbiAgICB2YXIgY2hlY2tlZCA9IHByb3BzLmNoZWNrZWQ7XG4gICAgdGhpcy4kaGFuZGxlRGlhbWV0ZXIgPSBoYW5kbGVEaWFtZXRlciB8fCBoZWlnaHQgLSAyO1xuICAgIHRoaXMuJGNoZWNrZWRQb3MgPSBNYXRoLm1heCh3aWR0aCAtIGhlaWdodCwgd2lkdGggLSAoaGVpZ2h0ICsgdGhpcy4kaGFuZGxlRGlhbWV0ZXIpIC8gMik7XG4gICAgdGhpcy4kdW5jaGVja2VkUG9zID0gTWF0aC5tYXgoMCwgKGhlaWdodCAtIHRoaXMuJGhhbmRsZURpYW1ldGVyKSAvIDIpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAkcG9zOiBjaGVja2VkID8gdGhpcy4kY2hlY2tlZFBvcyA6IHRoaXMuJHVuY2hlY2tlZFBvc1xuICAgIH07XG4gICAgdGhpcy4kbGFzdERyYWdBdCA9IDA7XG4gICAgdGhpcy4kbGFzdEtleVVwQXQgPSAwO1xuICAgIHRoaXMuJG9uTW91c2VEb3duID0gdGhpcy4kb25Nb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLiRvbk1vdXNlTW92ZSA9IHRoaXMuJG9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy4kb25Nb3VzZVVwID0gdGhpcy4kb25Nb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy4kb25Ub3VjaFN0YXJ0ID0gdGhpcy4kb25Ub3VjaFN0YXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy4kb25Ub3VjaE1vdmUgPSB0aGlzLiRvblRvdWNoTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuJG9uVG91Y2hFbmQgPSB0aGlzLiRvblRvdWNoRW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy4kb25DbGljayA9IHRoaXMuJG9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLiRvbklucHV0Q2hhbmdlID0gdGhpcy4kb25JbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuJG9uS2V5VXAgPSB0aGlzLiRvbktleVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy4kc2V0SGFzT3V0bGluZSA9IHRoaXMuJHNldEhhc091dGxpbmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLiR1bnNldEhhc091dGxpbmUgPSB0aGlzLiR1bnNldEhhc091dGxpbmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLiRnZXRJbnB1dFJlZiA9IHRoaXMuJGdldElucHV0UmVmLmJpbmQodGhpcyk7XG4gIH1cblxuICBpZiAoQ29tcG9uZW50KSBSZWFjdFN3aXRjaC5fX3Byb3RvX18gPSBDb21wb25lbnQ7XG4gIFJlYWN0U3dpdGNoLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29tcG9uZW50ICYmIENvbXBvbmVudC5wcm90b3R5cGUpO1xuICBSZWFjdFN3aXRjaC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBSZWFjdFN3aXRjaDtcblxuICBSZWFjdFN3aXRjaC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmIChwcmV2UHJvcHMuY2hlY2tlZCA9PT0gdGhpcy5wcm9wcy5jaGVja2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyICRwb3MgPSB0aGlzLnByb3BzLmNoZWNrZWQgPyB0aGlzLiRjaGVja2VkUG9zIDogdGhpcy4kdW5jaGVja2VkUG9zO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgJHBvczogJHBvc1xuICAgIH0pO1xuICB9O1xuXG4gIFJlYWN0U3dpdGNoLnByb3RvdHlwZS4kb25EcmFnU3RhcnQgPSBmdW5jdGlvbiAkb25EcmFnU3RhcnQoY2xpZW50WCkge1xuICAgIHRoaXMuJGlucHV0UmVmLmZvY3VzKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAkc3RhcnRYOiBjbGllbnRYLFxuICAgICAgJGhhc091dGxpbmU6IHRydWUsXG4gICAgICAkZHJhZ1N0YXJ0aW5nVGltZTogRGF0ZS5ub3coKVxuICAgIH0pO1xuICB9O1xuXG4gIFJlYWN0U3dpdGNoLnByb3RvdHlwZS4kb25EcmFnID0gZnVuY3Rpb24gJG9uRHJhZyhjbGllbnRYKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMuc3RhdGU7XG4gICAgdmFyICRzdGFydFggPSByZWYuJHN0YXJ0WDtcbiAgICB2YXIgJGlzRHJhZ2dpbmcgPSByZWYuJGlzRHJhZ2dpbmc7XG4gICAgdmFyICRwb3MgPSByZWYuJHBvcztcbiAgICB2YXIgcmVmJDEgPSB0aGlzLnByb3BzO1xuICAgIHZhciBjaGVja2VkID0gcmVmJDEuY2hlY2tlZDtcbiAgICB2YXIgc3RhcnRQb3MgPSBjaGVja2VkID8gdGhpcy4kY2hlY2tlZFBvcyA6IHRoaXMuJHVuY2hlY2tlZFBvcztcbiAgICB2YXIgbW91c2VQb3MgPSBzdGFydFBvcyArIGNsaWVudFggLSAkc3RhcnRYOyAvLyBXZSBuZWVkIHRoaXMgY2hlY2sgdG8gZml4IGEgd2luZG93cyBnbGl0Y2ggd2hlcmUgb25EcmFnIGlzIHRyaWdnZXJlZCBvbk1vdXNlRG93biBpbiBzb21lIGNhc2VzXG5cbiAgICBpZiAoISRpc0RyYWdnaW5nICYmIGNsaWVudFggIT09ICRzdGFydFgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAkaXNEcmFnZ2luZzogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIG5ld1BvcyA9IE1hdGgubWluKHRoaXMuJGNoZWNrZWRQb3MsIE1hdGgubWF4KHRoaXMuJHVuY2hlY2tlZFBvcywgbW91c2VQb3MpKTsgLy8gUHJldmVudCB1bm5lY2Vzc2FyeSByZXJlbmRlcnNcblxuICAgIGlmIChuZXdQb3MgIT09ICRwb3MpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAkcG9zOiBuZXdQb3NcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBSZWFjdFN3aXRjaC5wcm90b3R5cGUuJG9uRHJhZ1N0b3AgPSBmdW5jdGlvbiAkb25EcmFnU3RvcChldmVudCkge1xuICAgIHZhciByZWYgPSB0aGlzLnN0YXRlO1xuICAgIHZhciAkcG9zID0gcmVmLiRwb3M7XG4gICAgdmFyICRpc0RyYWdnaW5nID0gcmVmLiRpc0RyYWdnaW5nO1xuICAgIHZhciAkZHJhZ1N0YXJ0aW5nVGltZSA9IHJlZi4kZHJhZ1N0YXJ0aW5nVGltZTtcbiAgICB2YXIgcmVmJDEgPSB0aGlzLnByb3BzO1xuICAgIHZhciBjaGVja2VkID0gcmVmJDEuY2hlY2tlZDtcbiAgICB2YXIgaGFsZndheUNoZWNrcG9pbnQgPSAodGhpcy4kY2hlY2tlZFBvcyArIHRoaXMuJHVuY2hlY2tlZFBvcykgLyAyOyAvLyBTaW11bGF0ZSBjbGlja2luZyB0aGUgaGFuZGxlXG5cbiAgICB2YXIgdGltZVNpbmNlU3RhcnQgPSBEYXRlLm5vdygpIC0gJGRyYWdTdGFydGluZ1RpbWU7XG5cbiAgICBpZiAoISRpc0RyYWdnaW5nIHx8IHRpbWVTaW5jZVN0YXJ0IDwgMjUwKSB7XG4gICAgICB0aGlzLiRvbkNoYW5nZShldmVudCk7IC8vIEhhbmRsZSBkcmFnZ2luZyBmcm9tIGNoZWNrZWQgcG9zaXRpb25cbiAgICB9IGVsc2UgaWYgKGNoZWNrZWQpIHtcbiAgICAgIGlmICgkcG9zID4gaGFsZndheUNoZWNrcG9pbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgJHBvczogdGhpcy4kY2hlY2tlZFBvc1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJG9uQ2hhbmdlKGV2ZW50KTtcbiAgICAgIH0gLy8gSGFuZGxlIGRyYWdnaW5nIGZyb20gdW5jaGVja2VkIHBvc2l0aW9uXG5cbiAgICB9IGVsc2UgaWYgKCRwb3MgPCBoYWxmd2F5Q2hlY2twb2ludCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICRwb3M6IHRoaXMuJHVuY2hlY2tlZFBvc1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJG9uQ2hhbmdlKGV2ZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICRpc0RyYWdnaW5nOiBmYWxzZSxcbiAgICAgICRoYXNPdXRsaW5lOiBmYWxzZVxuICAgIH0pO1xuICAgIHRoaXMuJGxhc3REcmFnQXQgPSBEYXRlLm5vdygpO1xuICB9O1xuXG4gIFJlYWN0U3dpdGNoLnByb3RvdHlwZS4kb25Nb3VzZURvd24gPSBmdW5jdGlvbiAkb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBJZ25vcmUgcmlnaHQgY2xpY2sgYW5kIHNjcm9sbFxuXG4gICAgaWYgKHR5cGVvZiBldmVudC5idXR0b24gPT09IFwibnVtYmVyXCIgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy4kb25EcmFnU3RhcnQoZXZlbnQuY2xpZW50WCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy4kb25Nb3VzZU1vdmUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLiRvbk1vdXNlVXApO1xuICB9O1xuXG4gIFJlYWN0U3dpdGNoLnByb3RvdHlwZS4kb25Nb3VzZU1vdmUgPSBmdW5jdGlvbiAkb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuJG9uRHJhZyhldmVudC5jbGllbnRYKTtcbiAgfTtcblxuICBSZWFjdFN3aXRjaC5wcm90b3R5cGUuJG9uTW91c2VVcCA9IGZ1bmN0aW9uICRvbk1vdXNlVXAoZXZlbnQpIHtcbiAgICB0aGlzLiRvbkRyYWdTdG9wKGV2ZW50KTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLiRvbk1vdXNlTW92ZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuJG9uTW91c2VVcCk7XG4gIH07XG5cbiAgUmVhY3RTd2l0Y2gucHJvdG90eXBlLiRvblRvdWNoU3RhcnQgPSBmdW5jdGlvbiAkb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgdGhpcy4kY2hlY2tlZFN0YXRlRnJvbURyYWdnaW5nID0gbnVsbDtcbiAgICB0aGlzLiRvbkRyYWdTdGFydChldmVudC50b3VjaGVzWzBdLmNsaWVudFgpO1xuICB9O1xuXG4gIFJlYWN0U3dpdGNoLnByb3RvdHlwZS4kb25Ub3VjaE1vdmUgPSBmdW5jdGlvbiAkb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICB0aGlzLiRvbkRyYWcoZXZlbnQudG91Y2hlc1swXS5jbGllbnRYKTtcbiAgfTtcblxuICBSZWFjdFN3aXRjaC5wcm90b3R5cGUuJG9uVG91Y2hFbmQgPSBmdW5jdGlvbiAkb25Ub3VjaEVuZChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy4kb25EcmFnU3RvcChldmVudCk7XG4gIH07XG5cbiAgUmVhY3RTd2l0Y2gucHJvdG90eXBlLiRvbklucHV0Q2hhbmdlID0gZnVuY3Rpb24gJG9uSW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICAvLyBUaGlzIGNvbmRpdGlvbiBpcyB1bmZvcnR1bmF0ZWx5IG5lZWRlZCBpbiBzb21lIGJyb3dzZXJzIHdoZXJlIHRoZSBpbnB1dCdzIGNoYW5nZSBldmVudCBtaWdodCBnZXQgdHJpZ2dlcmVkXG4gICAgLy8gcmlnaHQgYWZ0ZXIgdGhlIGRyYWdzdG9wIGV2ZW50IGlzIHRyaWdnZXJlZCAob2NjdXJzIHdoZW4gZHJvcHBpbmcgb3ZlciBhIGxhYmVsIGVsZW1lbnQpXG4gICAgaWYgKERhdGUubm93KCkgLSB0aGlzLiRsYXN0RHJhZ0F0ID4gNTApIHtcbiAgICAgIHRoaXMuJG9uQ2hhbmdlKGV2ZW50KTsgLy8gUHJldmVudCBjbGlja2luZyBsYWJlbCwgYnV0IG5vdCBrZXkgYWN0aXZhdGlvbiBmcm9tIHNldHRpbmcgb3V0bGluZSB0byB0cnVlIC0geWVzLCB0aGlzIGlzIGFic3VyZFxuXG4gICAgICBpZiAoRGF0ZS5ub3coKSAtIHRoaXMuJGxhc3RLZXlVcEF0ID4gNTApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgJGhhc091dGxpbmU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBSZWFjdFN3aXRjaC5wcm90b3R5cGUuJG9uS2V5VXAgPSBmdW5jdGlvbiAkb25LZXlVcCgpIHtcbiAgICB0aGlzLiRsYXN0S2V5VXBBdCA9IERhdGUubm93KCk7XG4gIH07XG5cbiAgUmVhY3RTd2l0Y2gucHJvdG90eXBlLiRzZXRIYXNPdXRsaW5lID0gZnVuY3Rpb24gJHNldEhhc091dGxpbmUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAkaGFzT3V0bGluZTogdHJ1ZVxuICAgIH0pO1xuICB9O1xuXG4gIFJlYWN0U3dpdGNoLnByb3RvdHlwZS4kdW5zZXRIYXNPdXRsaW5lID0gZnVuY3Rpb24gJHVuc2V0SGFzT3V0bGluZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICRoYXNPdXRsaW5lOiBmYWxzZVxuICAgIH0pO1xuICB9O1xuXG4gIFJlYWN0U3dpdGNoLnByb3RvdHlwZS4kZ2V0SW5wdXRSZWYgPSBmdW5jdGlvbiAkZ2V0SW5wdXRSZWYoZWwpIHtcbiAgICB0aGlzLiRpbnB1dFJlZiA9IGVsO1xuICB9O1xuXG4gIFJlYWN0U3dpdGNoLnByb3RvdHlwZS4kb25DbGljayA9IGZ1bmN0aW9uICRvbkNsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLiRpbnB1dFJlZi5mb2N1cygpO1xuICAgIHRoaXMuJG9uQ2hhbmdlKGV2ZW50KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICRoYXNPdXRsaW5lOiBmYWxzZVxuICAgIH0pO1xuICB9O1xuXG4gIFJlYWN0U3dpdGNoLnByb3RvdHlwZS4kb25DaGFuZ2UgPSBmdW5jdGlvbiAkb25DaGFuZ2UoZXZlbnQpIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY2hlY2tlZCA9IHJlZi5jaGVja2VkO1xuICAgIHZhciBvbkNoYW5nZSA9IHJlZi5vbkNoYW5nZTtcbiAgICB2YXIgaWQgPSByZWYuaWQ7XG4gICAgb25DaGFuZ2UoIWNoZWNrZWQsIGV2ZW50LCBpZCk7XG4gIH07XG5cbiAgUmVhY3RTd2l0Y2gucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZGlzYWJsZWQgPSByZWYuZGlzYWJsZWQ7XG4gICAgdmFyIGNsYXNzTmFtZSA9IHJlZi5jbGFzc05hbWU7XG4gICAgdmFyIG9mZkNvbG9yID0gcmVmLm9mZkNvbG9yO1xuICAgIHZhciBvbkNvbG9yID0gcmVmLm9uQ29sb3I7XG4gICAgdmFyIG9mZkhhbmRsZUNvbG9yID0gcmVmLm9mZkhhbmRsZUNvbG9yO1xuICAgIHZhciBvbkhhbmRsZUNvbG9yID0gcmVmLm9uSGFuZGxlQ29sb3I7XG4gICAgdmFyIGNoZWNrZWRJY29uJCQxID0gcmVmLmNoZWNrZWRJY29uO1xuICAgIHZhciB1bmNoZWNrZWRJY29uJCQxID0gcmVmLnVuY2hlY2tlZEljb247XG4gICAgdmFyIGJveFNoYWRvdyA9IHJlZi5ib3hTaGFkb3c7XG4gICAgdmFyIGFjdGl2ZUJveFNoYWRvdyA9IHJlZi5hY3RpdmVCb3hTaGFkb3c7XG4gICAgdmFyIGhlaWdodCA9IHJlZi5oZWlnaHQ7XG4gICAgdmFyIHdpZHRoID0gcmVmLndpZHRoO1xuICAgIHZhciBoYW5kbGVEaWFtZXRlciA9IHJlZi5oYW5kbGVEaWFtZXRlcjtcbiAgICB2YXIgcmVzdCQxID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocmVmLCBbXCJkaXNhYmxlZFwiLCBcImNsYXNzTmFtZVwiLCBcIm9mZkNvbG9yXCIsIFwib25Db2xvclwiLCBcIm9mZkhhbmRsZUNvbG9yXCIsIFwib25IYW5kbGVDb2xvclwiLCBcImNoZWNrZWRJY29uXCIsIFwidW5jaGVja2VkSWNvblwiLCBcImJveFNoYWRvd1wiLCBcImFjdGl2ZUJveFNoYWRvd1wiLCBcImhlaWdodFwiLCBcIndpZHRoXCIsIFwiaGFuZGxlRGlhbWV0ZXJcIl0pO1xuICAgIHZhciByZXN0ID0gcmVzdCQxO1xuICAgIHZhciByZWYkMSA9IHRoaXMuc3RhdGU7XG4gICAgdmFyICRwb3MgPSByZWYkMS4kcG9zO1xuICAgIHZhciAkaXNEcmFnZ2luZyA9IHJlZiQxLiRpc0RyYWdnaW5nO1xuICAgIHZhciAkaGFzT3V0bGluZSA9IHJlZiQxLiRoYXNPdXRsaW5lO1xuICAgIHZhciByb290U3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICBvcGFjaXR5OiBkaXNhYmxlZCA/IDAuNSA6IDEsXG4gICAgICBkaXJlY3Rpb246IFwibHRyXCIsXG4gICAgICBib3JkZXJSYWRpdXM6IGhlaWdodCAvIDIsXG4gICAgICBXZWJraXRUcmFuc2l0aW9uOiBcIm9wYWNpdHkgMC4yNXNcIixcbiAgICAgIE1velRyYW5zaXRpb246IFwib3BhY2l0eSAwLjI1c1wiLFxuICAgICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IDAuMjVzXCIsXG4gICAgICB0b3VjaEFjdGlvbjogXCJub25lXCIsXG4gICAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDApXCIsXG4gICAgICBXZWJraXRVc2VyU2VsZWN0OiBcIm5vbmVcIixcbiAgICAgIE1velVzZXJTZWxlY3Q6IFwibm9uZVwiLFxuICAgICAgbXNVc2VyU2VsZWN0OiBcIm5vbmVcIixcbiAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiXG4gICAgfTtcbiAgICB2YXIgYmFja2dyb3VuZFN0eWxlID0ge1xuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBtYXJnaW46IE1hdGgubWF4KDAsICh0aGlzLiRoYW5kbGVEaWFtZXRlciAtIGhlaWdodCkgLyAyKSxcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICBiYWNrZ3JvdW5kOiBnZXRCYWNrZ3JvdW5kQ29sb3IoJHBvcywgdGhpcy4kY2hlY2tlZFBvcywgdGhpcy4kdW5jaGVja2VkUG9zLCBvZmZDb2xvciwgb25Db2xvciksXG4gICAgICBib3JkZXJSYWRpdXM6IGhlaWdodCAvIDIsXG4gICAgICBjdXJzb3I6IGRpc2FibGVkID8gXCJkZWZhdWx0XCIgOiBcInBvaW50ZXJcIixcbiAgICAgIFdlYmtpdFRyYW5zaXRpb246ICRpc0RyYWdnaW5nID8gbnVsbCA6IFwiYmFja2dyb3VuZCAwLjI1c1wiLFxuICAgICAgTW96VHJhbnNpdGlvbjogJGlzRHJhZ2dpbmcgPyBudWxsIDogXCJiYWNrZ3JvdW5kIDAuMjVzXCIsXG4gICAgICB0cmFuc2l0aW9uOiAkaXNEcmFnZ2luZyA/IG51bGwgOiBcImJhY2tncm91bmQgMC4yNXNcIlxuICAgIH07XG4gICAgdmFyIGNoZWNrZWRJY29uU3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHdpZHRoOiBNYXRoLm1pbihoZWlnaHQgKiAxLjUsIHdpZHRoIC0gKHRoaXMuJGhhbmRsZURpYW1ldGVyICsgaGVpZ2h0KSAvIDIgKyAxKSxcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICBvcGFjaXR5OiAoJHBvcyAtIHRoaXMuJHVuY2hlY2tlZFBvcykgLyAodGhpcy4kY2hlY2tlZFBvcyAtIHRoaXMuJHVuY2hlY2tlZFBvcyksXG4gICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbiAgICAgIFdlYmtpdFRyYW5zaXRpb246ICRpc0RyYWdnaW5nID8gbnVsbCA6IFwib3BhY2l0eSAwLjI1c1wiLFxuICAgICAgTW96VHJhbnNpdGlvbjogJGlzRHJhZ2dpbmcgPyBudWxsIDogXCJvcGFjaXR5IDAuMjVzXCIsXG4gICAgICB0cmFuc2l0aW9uOiAkaXNEcmFnZ2luZyA/IG51bGwgOiBcIm9wYWNpdHkgMC4yNXNcIlxuICAgIH07XG4gICAgdmFyIHVuY2hlY2tlZEljb25TdHlsZSA9IHtcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgd2lkdGg6IE1hdGgubWluKGhlaWdodCAqIDEuNSwgd2lkdGggLSAodGhpcy4kaGFuZGxlRGlhbWV0ZXIgKyBoZWlnaHQpIC8gMiArIDEpLFxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIG9wYWNpdHk6IDEgLSAoJHBvcyAtIHRoaXMuJHVuY2hlY2tlZFBvcykgLyAodGhpcy4kY2hlY2tlZFBvcyAtIHRoaXMuJHVuY2hlY2tlZFBvcyksXG4gICAgICByaWdodDogMCxcbiAgICAgIHRvcDogMCxcbiAgICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxuICAgICAgV2Via2l0VHJhbnNpdGlvbjogJGlzRHJhZ2dpbmcgPyBudWxsIDogXCJvcGFjaXR5IDAuMjVzXCIsXG4gICAgICBNb3pUcmFuc2l0aW9uOiAkaXNEcmFnZ2luZyA/IG51bGwgOiBcIm9wYWNpdHkgMC4yNXNcIixcbiAgICAgIHRyYW5zaXRpb246ICRpc0RyYWdnaW5nID8gbnVsbCA6IFwib3BhY2l0eSAwLjI1c1wiXG4gICAgfTtcbiAgICB2YXIgaGFuZGxlU3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IHRoaXMuJGhhbmRsZURpYW1ldGVyLFxuICAgICAgd2lkdGg6IHRoaXMuJGhhbmRsZURpYW1ldGVyLFxuICAgICAgYmFja2dyb3VuZDogZ2V0QmFja2dyb3VuZENvbG9yKCRwb3MsIHRoaXMuJGNoZWNrZWRQb3MsIHRoaXMuJHVuY2hlY2tlZFBvcywgb2ZmSGFuZGxlQ29sb3IsIG9uSGFuZGxlQ29sb3IpLFxuICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgIGN1cnNvcjogZGlzYWJsZWQgPyBcImRlZmF1bHRcIiA6IFwicG9pbnRlclwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKFwiICsgJHBvcyArIFwicHgpXCIsXG4gICAgICB0b3A6IE1hdGgubWF4KDAsIChoZWlnaHQgLSB0aGlzLiRoYW5kbGVEaWFtZXRlcikgLyAyKSxcbiAgICAgIG91dGxpbmU6IDAsXG4gICAgICBib3hTaGFkb3c6ICRoYXNPdXRsaW5lID8gYWN0aXZlQm94U2hhZG93IDogYm94U2hhZG93LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgV2Via2l0VHJhbnNpdGlvbjogJGlzRHJhZ2dpbmcgPyBudWxsIDogXCJiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzLCB0cmFuc2Zvcm0gMC4yNXMsIGJveC1zaGFkb3cgMC4xNXNcIixcbiAgICAgIE1velRyYW5zaXRpb246ICRpc0RyYWdnaW5nID8gbnVsbCA6IFwiYmFja2dyb3VuZC1jb2xvciAwLjI1cywgdHJhbnNmb3JtIDAuMjVzLCBib3gtc2hhZG93IDAuMTVzXCIsXG4gICAgICB0cmFuc2l0aW9uOiAkaXNEcmFnZ2luZyA/IG51bGwgOiBcImJhY2tncm91bmQtY29sb3IgMC4yNXMsIHRyYW5zZm9ybSAwLjI1cywgYm94LXNoYWRvdyAwLjE1c1wiXG4gICAgfTtcbiAgICB2YXIgaW5wdXRTdHlsZSA9IHtcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGNsaXA6IFwicmVjdCgwIDAgMCAwKVwiLFxuICAgICAgaGVpZ2h0OiAxLFxuICAgICAgbWFyZ2luOiAtMSxcbiAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICB3aWR0aDogMVxuICAgIH07XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgc3R5bGU6IHJvb3RTdHlsZVxuICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJyZWFjdC1zd2l0Y2gtYmdcIixcbiAgICAgIHN0eWxlOiBiYWNrZ3JvdW5kU3R5bGUsXG4gICAgICBvbkNsaWNrOiBkaXNhYmxlZCA/IG51bGwgOiB0aGlzLiRvbkNsaWNrLFxuICAgICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSwgY2hlY2tlZEljb24kJDEgJiYgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgc3R5bGU6IGNoZWNrZWRJY29uU3R5bGVcbiAgICB9LCBjaGVja2VkSWNvbiQkMSksIHVuY2hlY2tlZEljb24kJDEgJiYgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgc3R5bGU6IHVuY2hlY2tlZEljb25TdHlsZVxuICAgIH0sIHVuY2hlY2tlZEljb24kJDEpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiBcInJlYWN0LXN3aXRjaC1oYW5kbGVcIixcbiAgICAgIHN0eWxlOiBoYW5kbGVTdHlsZSxcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9LFxuICAgICAgb25Nb3VzZURvd246IGRpc2FibGVkID8gbnVsbCA6IHRoaXMuJG9uTW91c2VEb3duLFxuICAgICAgb25Ub3VjaFN0YXJ0OiBkaXNhYmxlZCA/IG51bGwgOiB0aGlzLiRvblRvdWNoU3RhcnQsXG4gICAgICBvblRvdWNoTW92ZTogZGlzYWJsZWQgPyBudWxsIDogdGhpcy4kb25Ub3VjaE1vdmUsXG4gICAgICBvblRvdWNoRW5kOiBkaXNhYmxlZCA/IG51bGwgOiB0aGlzLiRvblRvdWNoRW5kLFxuICAgICAgb25Ub3VjaENhbmNlbDogZGlzYWJsZWQgPyBudWxsIDogdGhpcy4kdW5zZXRIYXNPdXRsaW5lXG4gICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgX2V4dGVuZHMoe30sIHtcbiAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgIHJvbGU6IFwic3dpdGNoXCIsXG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICBzdHlsZTogaW5wdXRTdHlsZVxuICAgIH0sIHJlc3QsIHtcbiAgICAgIHJlZjogdGhpcy4kZ2V0SW5wdXRSZWYsXG4gICAgICBvbkZvY3VzOiB0aGlzLiRzZXRIYXNPdXRsaW5lLFxuICAgICAgb25CbHVyOiB0aGlzLiR1bnNldEhhc091dGxpbmUsXG4gICAgICBvbktleVVwOiB0aGlzLiRvbktleVVwLFxuICAgICAgb25DaGFuZ2U6IHRoaXMuJG9uSW5wdXRDaGFuZ2VcbiAgICB9KSkpO1xuICB9O1xuXG4gIHJldHVybiBSZWFjdFN3aXRjaDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuUmVhY3RTd2l0Y2gucHJvcFR5cGVzID0ge1xuICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvZmZDb2xvcjogaGV4Q29sb3JQcm9wVHlwZSxcbiAgb25Db2xvcjogaGV4Q29sb3JQcm9wVHlwZSxcbiAgb2ZmSGFuZGxlQ29sb3I6IGhleENvbG9yUHJvcFR5cGUsXG4gIG9uSGFuZGxlQ29sb3I6IGhleENvbG9yUHJvcFR5cGUsXG4gIGhhbmRsZURpYW1ldGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuICB1bmNoZWNrZWRJY29uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgY2hlY2tlZEljb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICBib3hTaGFkb3c6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFjdGl2ZUJveFNoYWRvdzogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblJlYWN0U3dpdGNoLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBvZmZDb2xvcjogXCIjODg4XCIsXG4gIG9uQ29sb3I6IFwiIzA4MFwiLFxuICBvZmZIYW5kbGVDb2xvcjogXCIjZmZmXCIsXG4gIG9uSGFuZGxlQ29sb3I6IFwiI2ZmZlwiLFxuICB1bmNoZWNrZWRJY29uOiB1bmNoZWNrZWRJY29uLFxuICBjaGVja2VkSWNvbjogY2hlY2tlZEljb24sXG4gIGJveFNoYWRvdzogbnVsbCxcbiAgYWN0aXZlQm94U2hhZG93OiBcIjAgMCAycHggM3B4ICMzYmZcIixcbiAgaGVpZ2h0OiAyOCxcbiAgd2lkdGg6IDU2XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSZWFjdFN3aXRjaDtcbiIsImlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9kaXN0L3JlYWN0LXN3aXRjaC5taW4uanNcIik7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2Rpc3QvcmVhY3Qtc3dpdGNoLmRldi5qc1wiKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlc2V0cyB3YXJuaW5nIGNhY2hlIHdoZW4gdGVzdGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBlbGVtZW50VHlwZTogY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGZhbHN5IHZhbHVlIGNhbid0IGJlIGEgU3ltYm9sXG4gICAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9