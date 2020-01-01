(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/Calendar-11ae61f6.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/Calendar-11ae61f6.js ***!
  \********************************************************************/
/*! exports provided: C, a, b, g, i, s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return Calendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Calendar$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isYearAndMonthViews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getFormatByViews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isYearOnlyView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return styles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Wrapper-241966d7.js */ "./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Day_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Day.js */ "./node_modules/@material-ui/pickers/esm/Day.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-transition-group */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");




















var findClosestEnabledDate = function findClosestEnabledDate(_ref) {
  var date = _ref.date,
      utils = _ref.utils,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      disableFuture = _ref.disableFuture,
      disablePast = _ref.disablePast,
      shouldDisableDate = _ref.shouldDisableDate;
  var today = utils.startOfDay(utils.date());

  if (disablePast && utils.isBefore(minDate, today)) {
    minDate = today;
  }

  if (disableFuture && utils.isAfter(maxDate, today)) {
    maxDate = today;
  }

  var forward = date;
  var backward = date;

  if (utils.isBefore(date, minDate)) {
    forward = utils.date(minDate);
    backward = null;
  }

  if (utils.isAfter(date, maxDate)) {
    if (backward) {
      backward = utils.date(maxDate);
    }

    forward = null;
  }

  while (forward || backward) {
    if (forward && utils.isAfter(forward, maxDate)) {
      forward = null;
    }

    if (backward && utils.isBefore(backward, minDate)) {
      backward = null;
    }

    if (forward) {
      if (!shouldDisableDate(forward)) {
        return forward;
      }

      forward = utils.addDays(forward, 1);
    }

    if (backward) {
      if (!shouldDisableDate(backward)) {
        return backward;
      }

      backward = utils.addDays(backward, -1);
    }
  } // fallback to today if no enabled days


  return utils.date();
};
var isYearOnlyView = function isYearOnlyView(views) {
  return views.length === 1 && views[0] === 'year';
};
var isYearAndMonthViews = function isYearAndMonthViews(views) {
  return views.length === 2 && Object(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_8__["a"])(views, 'month') && Object(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_8__["a"])(views, 'year');
};
var getFormatByViews = function getFormatByViews(views, utils) {
  if (isYearOnlyView(views)) {
    return utils.yearFormat;
  }

  if (isYearAndMonthViews(views)) {
    return utils.yearMonthFormat;
  }

  return utils.dateFormat;
};

var DayWrapper = function DayWrapper(_ref) {
  var children = _ref.children,
      value = _ref.value,
      disabled = _ref.disabled,
      onSelect = _ref.onSelect,
      dayInCurrentMonth = _ref.dayInCurrentMonth,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref, ["children", "value", "disabled", "onSelect", "dayInCurrentMonth"]);

  var handleClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return onSelect(value);
  }, [onSelect, value]);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({
    role: "presentation",
    onClick: dayInCurrentMonth && !disabled ? handleClick : undefined,
    onKeyPress: dayInCurrentMonth && !disabled ? handleClick : undefined
  }, other), children);
};

var animationDuration = 350;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  var slideTransition = theme.transitions.create('transform', {
    duration: animationDuration,
    easing: 'cubic-bezier(0.35, 0.8, 0.4, 1)'
  });
  return {
    transitionContainer: {
      display: 'block',
      position: 'relative',
      '& > *': {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0
      }
    },
    'slideEnter-left': {
      willChange: 'transform',
      transform: 'translate(100%)'
    },
    'slideEnter-right': {
      willChange: 'transform',
      transform: 'translate(-100%)'
    },
    slideEnterActive: {
      transform: 'translate(0%)',
      transition: slideTransition
    },
    slideExit: {
      transform: 'translate(0%)'
    },
    'slideExitActiveLeft-left': {
      willChange: 'transform',
      transform: 'translate(-200%)',
      transition: slideTransition
    },
    'slideExitActiveLeft-right': {
      willChange: 'transform',
      transform: 'translate(200%)',
      transition: slideTransition
    }
  };
}, {
  name: 'MuiPickersSlideTransition'
});

var SlideTransition = function SlideTransition(_ref) {
  var children = _ref.children,
      transKey = _ref.transKey,
      slideDirection = _ref.slideDirection,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className;
  var classes = useStyles();
  var transitionClasses = {
    exit: classes.slideExit,
    enterActive: classes.slideEnterActive,
    // @ts-ignore
    enter: classes['slideEnter-' + slideDirection],
    // @ts-ignore
    exitActive: classes['slideExitActiveLeft-' + slideDirection]
  };
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_transition_group__WEBPACK_IMPORTED_MODULE_17__["TransitionGroup"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.transitionContainer, className),
    childFactory: function childFactory(element) {
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(element, {
        classNames: transitionClasses
      });
    }
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_transition_group__WEBPACK_IMPORTED_MODULE_17__["CSSTransition"], {
    mountOnEnter: true,
    unmountOnExit: true,
    key: transKey + slideDirection,
    timeout: animationDuration,
    classNames: transitionClasses,
    children: children
  }));
};

var ArrowLeftIcon = function ArrowLeftIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_10__["default"], props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }));
};

var ArrowRightIcon = function ArrowRightIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_10__["default"], props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }));
};

var useStyles$1 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
    switchHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(1)
    },
    transitionContainer: {
      width: '100%',
      overflow: 'hidden',
      height: 23
    },
    iconButton: {
      zIndex: 1,
      backgroundColor: theme.palette.background.paper
    },
    daysHeader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxHeight: 16
    },
    dayLabel: {
      width: 36,
      margin: '0 2px',
      textAlign: 'center',
      color: theme.palette.text.hint
    }
  };
}, {
  name: 'MuiPickersCalendarHeader'
});
var CalendarHeader = function CalendarHeader(_ref) {
  var currentMonth = _ref.currentMonth,
      onMonthChange = _ref.onMonthChange,
      leftArrowIcon = _ref.leftArrowIcon,
      rightArrowIcon = _ref.rightArrowIcon,
      leftArrowButtonProps = _ref.leftArrowButtonProps,
      rightArrowButtonProps = _ref.rightArrowButtonProps,
      disablePrevMonth = _ref.disablePrevMonth,
      disableNextMonth = _ref.disableNextMonth,
      slideDirection = _ref.slideDirection;
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_2__["u"])();
  var classes = useStyles$1();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["useTheme"])();
  var rtl = theme.direction === 'rtl';

  var selectNextMonth = function selectNextMonth() {
    return onMonthChange(utils.getNextMonth(currentMonth), 'left');
  };

  var selectPreviousMonth = function selectPreviousMonth() {
    return onMonthChange(utils.getPreviousMonth(currentMonth), 'right');
  };

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classes.switchHeader
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, leftArrowButtonProps, {
    disabled: disablePrevMonth,
    onClick: selectPreviousMonth,
    className: classes.iconButton
  }), rtl ? rightArrowIcon : leftArrowIcon), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SlideTransition, {
    slideDirection: slideDirection,
    transKey: currentMonth.toString(),
    className: classes.transitionContainer
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    align: "center",
    variant: "body1"
  }, utils.getCalendarHeaderText(currentMonth))), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, rightArrowButtonProps, {
    disabled: disableNextMonth,
    onClick: selectNextMonth,
    className: classes.iconButton
  }), rtl ? leftArrowIcon : rightArrowIcon)), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classes.daysHeader
  }, utils.getWeekdays().map(function (day, index) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index // eslint-disable-line react/no-array-index-key
      ,
      variant: "caption",
      className: classes.dayLabel
    }, day);
  })));
};
CalendarHeader.displayName = 'CalendarHeader';
 true ? CalendarHeader.propTypes = {
  leftArrowIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],
  rightArrowIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],
  disablePrevMonth: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  disableNextMonth: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"]
} : undefined;
CalendarHeader.defaultProps = {
  leftArrowIcon: Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ArrowLeftIcon, null),
  rightArrowIcon: Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ArrowRightIcon, null),
  disablePrevMonth: false,
  disableNextMonth: false
};

var withUtils = function withUtils() {
  return function (Component) {
    var WithUtils = function WithUtils(props) {
      var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_2__["u"])();
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({
        utils: utils
      }, props));
    };

    WithUtils.displayName = "WithUtils(".concat(Component.displayName || Component.name, ")");
    return WithUtils;
  };
};

var KeyDownListener = function KeyDownListener(_ref) {
  var onKeyDown = _ref.onKeyDown;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('keydown', onKeyDown);
    return function () {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);
  return null;
};

var Calendar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_15__["default"])(Calendar, _React$Component);

  function Calendar() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__["default"])(this, Calendar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_13__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_14__["default"])(Calendar)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      slideDirection: 'left',
      currentMonth: _this.props.utils.startOfMonth(_this.props.date),
      loadingQueue: 0
    };

    _this.pushToLoadingQueue = function () {
      var loadingQueue = _this.state.loadingQueue + 1;

      _this.setState({
        loadingQueue: loadingQueue
      });
    };

    _this.popFromLoadingQueue = function () {
      var loadingQueue = _this.state.loadingQueue;
      loadingQueue = loadingQueue <= 0 ? 0 : loadingQueue - 1;

      _this.setState({
        loadingQueue: loadingQueue
      });
    };

    _this.handleChangeMonth = function (newMonth, slideDirection) {
      _this.setState({
        currentMonth: newMonth,
        slideDirection: slideDirection
      });

      if (_this.props.onMonthChange) {
        var returnVal = _this.props.onMonthChange(newMonth);

        if (returnVal) {
          _this.pushToLoadingQueue();

          returnVal.then(function () {
            _this.popFromLoadingQueue();
          });
        }
      }
    };

    _this.validateMinMaxDate = function (day) {
      var _this$props = _this.props,
          minDate = _this$props.minDate,
          maxDate = _this$props.maxDate,
          utils = _this$props.utils,
          disableFuture = _this$props.disableFuture,
          disablePast = _this$props.disablePast;
      var now = utils.date();
      return Boolean(disableFuture && utils.isAfterDay(day, now) || disablePast && utils.isBeforeDay(day, now) || minDate && utils.isBeforeDay(day, utils.date(minDate)) || maxDate && utils.isAfterDay(day, utils.date(maxDate)));
    };

    _this.shouldDisablePrevMonth = function () {
      var _this$props2 = _this.props,
          utils = _this$props2.utils,
          disablePast = _this$props2.disablePast,
          minDate = _this$props2.minDate;
      var now = utils.date();
      var firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, utils.date(minDate)) ? now : utils.date(minDate));
      return !utils.isBefore(firstEnabledMonth, _this.state.currentMonth);
    };

    _this.shouldDisableNextMonth = function () {
      var _this$props3 = _this.props,
          utils = _this$props3.utils,
          disableFuture = _this$props3.disableFuture,
          maxDate = _this$props3.maxDate;
      var now = utils.date();
      var lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, utils.date(maxDate)) ? now : utils.date(maxDate));
      return !utils.isAfter(lastEnabledMonth, _this.state.currentMonth);
    };

    _this.shouldDisableDate = function (day) {
      var shouldDisableDate = _this.props.shouldDisableDate;
      return _this.validateMinMaxDate(day) || Boolean(shouldDisableDate && shouldDisableDate(day));
    };

    _this.handleDaySelect = function (day) {
      var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var _this$props4 = _this.props,
          date = _this$props4.date,
          utils = _this$props4.utils;

      _this.props.onChange(utils.mergeDateAndTime(day, date), isFinish);
    };

    _this.moveToDay = function (day) {
      var utils = _this.props.utils;

      if (day && !_this.shouldDisableDate(day)) {
        if (utils.getMonth(day) !== utils.getMonth(_this.state.currentMonth)) {
          _this.handleChangeMonth(utils.startOfMonth(day), 'left');
        }

        _this.handleDaySelect(day, false);
      }
    };

    _this.handleKeyDown = function (event) {
      var _this$props5 = _this.props,
          theme = _this$props5.theme,
          date = _this$props5.date,
          utils = _this$props5.utils;
      Object(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_8__["r"])(event, {
        ArrowUp: function ArrowUp() {
          return _this.moveToDay(utils.addDays(date, -7));
        },
        ArrowDown: function ArrowDown() {
          return _this.moveToDay(utils.addDays(date, 7));
        },
        ArrowLeft: function ArrowLeft() {
          return _this.moveToDay(utils.addDays(date, theme.direction === 'ltr' ? -1 : 1));
        },
        ArrowRight: function ArrowRight() {
          return _this.moveToDay(utils.addDays(date, theme.direction === 'ltr' ? 1 : -1));
        }
      });
    };

    _this.renderWeeks = function () {
      var _this$props6 = _this.props,
          utils = _this$props6.utils,
          classes = _this$props6.classes;
      var weeks = utils.getWeekArray(_this.state.currentMonth);
      return weeks.map(function (week) {
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          key: "week-".concat(week[0].toString()),
          className: classes.week
        }, _this.renderDays(week));
      });
    };

    _this.renderDays = function (week) {
      var _this$props7 = _this.props,
          date = _this$props7.date,
          renderDay = _this$props7.renderDay,
          utils = _this$props7.utils;
      var now = utils.date();
      var selectedDate = utils.startOfDay(date);
      var currentMonthNumber = utils.getMonth(_this.state.currentMonth);
      return week.map(function (day) {
        var disabled = _this.shouldDisableDate(day);

        var isDayInCurrentMonth = utils.getMonth(day) === currentMonthNumber;
        var dayComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Day_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
          disabled: disabled,
          current: utils.isSameDay(day, now),
          hidden: !isDayInCurrentMonth,
          selected: utils.isSameDay(selectedDate, day)
        }, utils.getDayText(day));

        if (renderDay) {
          dayComponent = renderDay(day, selectedDate, isDayInCurrentMonth, dayComponent);
        }

        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DayWrapper, {
          value: day,
          key: day.toString(),
          disabled: disabled,
          dayInCurrentMonth: isDayInCurrentMonth,
          onSelect: _this.handleDaySelect
        }, dayComponent);
      });
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__["default"])(Calendar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props8 = this.props,
          date = _this$props8.date,
          minDate = _this$props8.minDate,
          maxDate = _this$props8.maxDate,
          utils = _this$props8.utils,
          disablePast = _this$props8.disablePast,
          disableFuture = _this$props8.disableFuture;

      if (this.shouldDisableDate(date)) {
        var closestEnabledDate = findClosestEnabledDate({
          date: date,
          utils: utils,
          minDate: utils.date(minDate),
          maxDate: utils.date(maxDate),
          disablePast: Boolean(disablePast),
          disableFuture: Boolean(disableFuture),
          shouldDisableDate: this.shouldDisableDate
        });
        this.handleDaySelect(closestEnabledDate, false);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          currentMonth = _this$state.currentMonth,
          slideDirection = _this$state.slideDirection;
      var _this$props9 = this.props,
          classes = _this$props9.classes,
          allowKeyboardControl = _this$props9.allowKeyboardControl,
          leftArrowButtonProps = _this$props9.leftArrowButtonProps,
          leftArrowIcon = _this$props9.leftArrowIcon,
          rightArrowButtonProps = _this$props9.rightArrowButtonProps,
          rightArrowIcon = _this$props9.rightArrowIcon,
          loadingIndicator = _this$props9.loadingIndicator;
      var loadingElement = loadingIndicator ? loadingIndicator : Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_18__["default"], null);
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, allowKeyboardControl && this.context !== 'static' && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(KeyDownListener, {
        onKeyDown: this.handleKeyDown
      }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CalendarHeader, {
        currentMonth: currentMonth,
        slideDirection: slideDirection,
        onMonthChange: this.handleChangeMonth,
        leftArrowIcon: leftArrowIcon,
        leftArrowButtonProps: leftArrowButtonProps,
        rightArrowIcon: rightArrowIcon,
        rightArrowButtonProps: rightArrowButtonProps,
        disablePrevMonth: this.shouldDisablePrevMonth(),
        disableNextMonth: this.shouldDisableNextMonth()
      }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SlideTransition, {
        slideDirection: slideDirection,
        transKey: currentMonth.toString(),
        className: classes.transitionContainer
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, this.state.loadingQueue > 0 && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: classes.progressContainer
      }, loadingElement) || Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, this.renderWeeks()))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, state) {
      var utils = nextProps.utils,
          nextDate = nextProps.date;

      if (!utils.isEqual(nextDate, state.lastDate)) {
        var nextMonth = utils.getMonth(nextDate);
        var lastDate = state.lastDate || nextDate;
        var lastMonth = utils.getMonth(lastDate);
        return {
          lastDate: nextDate,
          currentMonth: nextProps.utils.startOfMonth(nextDate),
          // prettier-ignore
          slideDirection: nextMonth === lastMonth ? state.slideDirection : utils.isAfterDay(nextDate, lastDate) ? 'left' : 'right'
        };
      }

      return null;
    }
  }]);

  return Calendar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
Calendar.contextType = _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_8__["V"];
 true ? Calendar.propTypes = {
  renderDay: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  shouldDisableDate: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  allowKeyboardControl: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"]
} : undefined;
Calendar.defaultProps = {
  minDate: new Date('1900-01-01'),
  maxDate: new Date('2100-01-01'),
  disablePast: false,
  disableFuture: false,
  allowKeyboardControl: true
};
var styles = function styles(theme) {
  return {
    transitionContainer: {
      minHeight: 36 * 6,
      marginTop: theme.spacing(1.5)
    },
    progressContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    week: {
      display: 'flex',
      justifyContent: 'center'
    }
  };
};
var Calendar$1 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(styles, {
  name: 'MuiPickersCalendar',
  withTheme: true
})(withUtils()(Calendar));


//# sourceMappingURL=Calendar-11ae61f6.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/Clock-13c8f33d.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/Clock-13c8f33d.js ***!
  \*****************************************************************/
/*! exports provided: C, a, b, c, g, s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return Clock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Clock$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ClockType$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return convertToMeridiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getMeridiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return styles$1; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");










var ClockType;

(function (ClockType) {
  ClockType["HOURS"] = "hours";
  ClockType["MINUTES"] = "minutes";
  ClockType["SECONDS"] = "seconds";
})(ClockType || (ClockType = {}));

var ClockType$1 = ClockType;

var ClockPointer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ClockPointer, _React$Component);

  function ClockPointer() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ClockPointer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(ClockPointer)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      toAnimateTransform: false,
      previousType: undefined
    };

    _this.getAngleStyle = function () {
      var _this$props = _this.props,
          value = _this$props.value,
          isInner = _this$props.isInner,
          type = _this$props.type;
      var max = type === ClockType$1.HOURS ? 12 : 60;
      var angle = 360 / max * value;

      if (type === ClockType$1.HOURS && value > 12) {
        angle -= 360; // round up angle to max 360 degrees
      }

      return {
        height: isInner ? '26%' : '40%',
        transform: "rotateZ(".concat(angle, "deg)")
      };
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ClockPointer, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          hasSelected = _this$props2.hasSelected;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        style: this.getAngleStyle(),
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.pointer, this.state.toAnimateTransform && classes.animateTransform)
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.thumb, hasSelected && classes.noPoint)
      }));
    }
  }]);

  return ClockPointer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ClockPointer.getDerivedStateFromProps = function (nextProps, state) {
  if (nextProps.type !== state.previousType) {
    return {
      toAnimateTransform: true,
      previousType: nextProps.type
    };
  }

  return {
    toAnimateTransform: false,
    previousType: nextProps.type
  };
};

var styles = function styles(theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createStyles"])({
    pointer: {
      width: 2,
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      left: 'calc(50% - 1px)',
      bottom: '50%',
      transformOrigin: 'center bottom 0px'
    },
    animateTransform: {
      transition: theme.transitions.create(['transform', 'height'])
    },
    thumb: {
      width: 4,
      height: 4,
      backgroundColor: theme.palette.primary.contrastText,
      borderRadius: '100%',
      position: 'absolute',
      top: -21,
      left: -15,
      border: "14px solid ".concat(theme.palette.primary.main),
      boxSizing: 'content-box'
    },
    noPoint: {
      backgroundColor: theme.palette.primary.main
    }
  });
};
var ClockPointer$1 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles, {
  name: 'MuiPickersClockPointer'
})(ClockPointer);

var center = {
  x: 260 / 2,
  y: 260 / 2
};
var basePoint = {
  x: center.x,
  y: 0
};
var cx = basePoint.x - center.x;
var cy = basePoint.y - center.y;

var rad2deg = function rad2deg(rad) {
  return rad * 57.29577951308232;
};

var getAngleValue = function getAngleValue(step, offsetX, offsetY) {
  var x = offsetX - center.x;
  var y = offsetY - center.y;
  var atan = Math.atan2(cx, cy) - Math.atan2(x, y);
  var deg = rad2deg(atan);
  deg = Math.round(deg / step) * step;
  deg %= 360;
  var value = Math.floor(deg / step) || 0;
  var delta = Math.pow(x, 2) + Math.pow(y, 2);
  var distance = Math.sqrt(delta);
  return {
    value: value,
    distance: distance
  };
};

var getHours = function getHours(offsetX, offsetY, ampm) {
  var _getAngleValue = getAngleValue(30, offsetX, offsetY),
      value = _getAngleValue.value,
      distance = _getAngleValue.distance;

  value = value || 12;

  if (!ampm) {
    if (distance < 90) {
      value += 12;
      value %= 24;
    }
  } else {
    value %= 12;
  }

  return value;
};
var getMinutes = function getMinutes(offsetX, offsetY) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var angleStep = step * 6;

  var _getAngleValue2 = getAngleValue(angleStep, offsetX, offsetY),
      value = _getAngleValue2.value;

  value = value * step % 60;
  return value;
};
var getMeridiem = function getMeridiem(date, utils) {
  return utils.getHours(date) >= 12 ? 'pm' : 'am';
};
var convertToMeridiem = function convertToMeridiem(time, meridiem, ampm, utils) {
  if (ampm) {
    var currentMeridiem = utils.getHours(time) >= 12 ? 'pm' : 'am';

    if (currentMeridiem !== meridiem) {
      var hours = meridiem === 'am' ? utils.getHours(time) - 12 : utils.getHours(time) + 12;
      return utils.setHours(time, hours);
    }
  }

  return time;
};

var Clock =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Clock, _React$Component);

  function Clock() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Clock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Clock)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.isMoving = false;

    _this.handleTouchMove = function (e) {
      _this.isMoving = true;

      _this.setTime(e);
    };

    _this.handleTouchEnd = function (e) {
      if (_this.isMoving) {
        _this.setTime(e, true);

        _this.isMoving = false;
      }
    };

    _this.handleMove = function (e) {
      e.preventDefault();
      e.stopPropagation(); // MouseEvent.which is deprecated, but MouseEvent.buttons is not supported in Safari

      var isButtonPressed = typeof e.buttons === 'undefined' ? e.nativeEvent.which === 1 : e.buttons === 1;

      if (isButtonPressed) {
        _this.setTime(e.nativeEvent, false);
      }
    };

    _this.handleMouseUp = function (e) {
      if (_this.isMoving) {
        _this.isMoving = false;
      }

      _this.setTime(e.nativeEvent, true);
    };

    _this.hasSelected = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          value = _this$props.value;

      if (type === ClockType$1.HOURS) {
        return true;
      }

      return value % 5 === 0;
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Clock, [{
    key: "setTime",
    value: function setTime(e) {
      var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var offsetX = e.offsetX,
          offsetY = e.offsetY;

      if (typeof offsetX === 'undefined') {
        var rect = e.target.getBoundingClientRect();
        offsetX = e.changedTouches[0].clientX - rect.left;
        offsetY = e.changedTouches[0].clientY - rect.top;
      }

      var value = this.props.type === ClockType$1.SECONDS || this.props.type === ClockType$1.MINUTES ? getMinutes(offsetX, offsetY, this.props.minutesStep) : getHours(offsetX, offsetY, Boolean(this.props.ampm));
      this.props.onChange(value, isFinish);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          value = _this$props2.value,
          children = _this$props2.children,
          type = _this$props2.type,
          ampm = _this$props2.ampm;
      var isPointerInner = !ampm && type === ClockType$1.HOURS && (value < 1 || value > 12);
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: classes.container
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: classes.clock
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        role: "menu",
        tabIndex: -1,
        className: classes.squareMask,
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd,
        onMouseUp: this.handleMouseUp,
        onMouseMove: this.handleMove
      }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: classes.pin
      }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockPointer$1, {
        type: type,
        value: value,
        isInner: isPointerInner,
        hasSelected: this.hasSelected()
      }), children));
    }
  }]);

  return Clock;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
 true ? Clock.propTypes = {
  type: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOf"])(Object.keys(ClockType$1).map(function (key) {
    return ClockType$1[key];
  })).isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  children: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_1__["node"]).isRequired,
  ampm: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  minutesStep: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1__["any"]
} : undefined;
Clock.defaultProps = {
  ampm: false,
  minutesStep: 1
};
var styles$1 = function styles(theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createStyles"])({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      margin: "".concat(theme.spacing(2), "px 0 ").concat(theme.spacing(1), "px")
    },
    clock: {
      backgroundColor: 'rgba(0,0,0,.07)',
      borderRadius: '50%',
      height: 260,
      width: 260,
      position: 'relative',
      pointerEvents: 'none',
      zIndex: 1
    },
    squareMask: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      pointerEvents: 'auto',
      outline: 'none',
      touchActions: 'none',
      userSelect: 'none',
      '&:active': {
        cursor: 'move'
      }
    },
    pin: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  });
};
var Clock$1 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles$1, {
  name: 'MuiPickersClock'
})(Clock);


//# sourceMappingURL=Clock-13c8f33d.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/ClockView.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/ClockView.js ***!
  \************************************************************/
/*! exports provided: default, ClockView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockView", function() { return ClockView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Clock_13c8f33d_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Clock-13c8f33d.js */ "./node_modules/@material-ui/pickers/esm/Clock-13c8f33d.js");














var positions = {
  0: [0, 40],
  1: [55, 19.6],
  2: [94.4, 59.5],
  3: [109, 114],
  4: [94.4, 168.5],
  5: [54.5, 208.4],
  6: [0, 223],
  7: [-54.5, 208.4],
  8: [-94.4, 168.5],
  9: [-109, 114],
  10: [-94.4, 59.5],
  11: [-54.5, 19.6],
  12: [0, 5],
  13: [36.9, 49.9],
  14: [64, 77],
  15: [74, 114],
  16: [64, 151],
  17: [37, 178],
  18: [0, 188],
  19: [-37, 178],
  20: [-64, 151],
  21: [-74, 114],
  22: [-64, 77],
  23: [-37, 50]
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  var size = theme.spacing(4);
  return {
    clockNumber: {
      width: size,
      height: 32,
      userSelect: 'none',
      position: 'absolute',
      left: "calc((100% - ".concat(typeof size === 'number' ? "".concat(size, "px") : size, ") / 2)"),
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      color: theme.palette.type === 'light' ? theme.palette.text.primary : theme.palette.text.hint
    },
    clockNumberSelected: {
      color: theme.palette.primary.contrastText
    }
  };
}, {
  name: 'MuiPickersClockNumber'
});
var ClockNumber = function ClockNumber(_ref) {
  var selected = _ref.selected,
      label = _ref.label,
      index = _ref.index,
      isInner = _ref.isInner;
  var classes = useStyles();
  var className = Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.clockNumber, selected && classes.clockNumberSelected);
  var transformStyle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var position = positions[index];
    return {
      transform: "translate(".concat(position[0], "px, ").concat(position[1], "px")
    };
  }, [index]);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "span",
    className: className,
    variant: isInner ? 'body2' : 'body1',
    style: transformStyle,
    children: label
  });
};

var getHourNumbers = function getHourNumbers(_ref) {
  var ampm = _ref.ampm,
      utils = _ref.utils,
      date = _ref.date;
  var currentHours = utils.getHours(date);
  var hourNumbers = [];
  var startHour = ampm ? 1 : 0;
  var endHour = ampm ? 12 : 23;

  var isSelected = function isSelected(hour) {
    if (ampm) {
      if (hour === 12) {
        return currentHours === 12 || currentHours === 0;
      }

      return currentHours === hour || currentHours - 12 === hour;
    }

    return currentHours === hour;
  };

  for (var hour = startHour; hour <= endHour; hour += 1) {
    var label = hour.toString();

    if (hour === 0) {
      label = '00';
    }

    var props = {
      index: hour,
      label: utils.formatNumber(label),
      selected: isSelected(hour),
      isInner: !ampm && (hour === 0 || hour > 12)
    };
    hourNumbers.push(Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockNumber, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({
      key: hour
    }, props)));
  }

  return hourNumbers;
};
var getMinutesNumbers = function getMinutesNumbers(_ref2) {
  var value = _ref2.value,
      utils = _ref2.utils;
  var f = utils.formatNumber;
  return [Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockNumber, {
    label: f('00'),
    selected: value === 0,
    index: 12,
    key: 12
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockNumber, {
    label: f('05'),
    selected: value === 5,
    index: 1,
    key: 1
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockNumber, {
    label: f('10'),
    selected: value === 10,
    index: 2,
    key: 2
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockNumber, {
    label: f('15'),
    selected: value === 15,
    index: 3,
    key: 3
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockNumber, {
    label: f('20'),
    selected: value === 20,
    index: 4,
    key: 4
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockNumber, {
    label: f('25'),
    selected: value === 25,
    index: 5,
    key: 5
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockNumber, {
    label: f('30'),
    selected: value === 30,
    index: 6,
    key: 6
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockNumber, {
    label: f('35'),
    selected: value === 35,
    index: 7,
    key: 7
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockNumber, {
    label: f('40'),
    selected: value === 40,
    index: 8,
    key: 8
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockNumber, {
    label: f('45'),
    selected: value === 45,
    index: 9,
    key: 9
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockNumber, {
    label: f('50'),
    selected: value === 50,
    index: 10,
    key: 10
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockNumber, {
    label: f('55'),
    selected: value === 55,
    index: 11,
    key: 11
  })];
};

var ClockView = function ClockView(_ref) {
  var type = _ref.type,
      onHourChange = _ref.onHourChange,
      onMinutesChange = _ref.onMinutesChange,
      onSecondsChange = _ref.onSecondsChange,
      ampm = _ref.ampm,
      date = _ref.date,
      minutesStep = _ref.minutesStep;
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_2__["u"])();
  var viewProps = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    switch (type) {
      case _Clock_13c8f33d_js__WEBPACK_IMPORTED_MODULE_12__["b"].HOURS:
        return {
          value: utils.getHours(date),
          children: getHourNumbers({
            date: date,
            utils: utils,
            ampm: Boolean(ampm)
          }),
          onChange: function onChange(value, isFinish) {
            var currentMeridiem = Object(_Clock_13c8f33d_js__WEBPACK_IMPORTED_MODULE_12__["g"])(date, utils);
            var updatedTimeWithMeridiem = Object(_Clock_13c8f33d_js__WEBPACK_IMPORTED_MODULE_12__["c"])(utils.setHours(date, value), currentMeridiem, Boolean(ampm), utils);
            onHourChange(updatedTimeWithMeridiem, isFinish);
          }
        };

      case _Clock_13c8f33d_js__WEBPACK_IMPORTED_MODULE_12__["b"].MINUTES:
        var minutesValue = utils.getMinutes(date);
        return {
          value: minutesValue,
          children: getMinutesNumbers({
            value: minutesValue,
            utils: utils
          }),
          onChange: function onChange(value, isFinish) {
            var updatedTime = utils.setMinutes(date, value);
            onMinutesChange(updatedTime, isFinish);
          }
        };

      case _Clock_13c8f33d_js__WEBPACK_IMPORTED_MODULE_12__["b"].SECONDS:
        var secondsValue = utils.getSeconds(date);
        return {
          value: secondsValue,
          children: getMinutesNumbers({
            value: secondsValue,
            utils: utils
          }),
          onChange: function onChange(value, isFinish) {
            var updatedTime = utils.setSeconds(date, value);
            onSecondsChange(updatedTime, isFinish);
          }
        };

      default:
        throw new Error('You must provide the type for TimePickerView');
    }
  }, [ampm, date, onHourChange, onMinutesChange, onSecondsChange, type, utils]);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Clock_13c8f33d_js__WEBPACK_IMPORTED_MODULE_12__["a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({
    type: type,
    ampm: ampm,
    minutesStep: minutesStep
  }, viewProps));
};
ClockView.displayName = 'TimePickerView';
 true ? ClockView.propTypes = {
  date: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"].isRequired,
  onHourChange: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  onMinutesChange: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  onSecondsChange: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  ampm: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  minutesStep: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
  type: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOf"])(Object.keys(_Clock_13c8f33d_js__WEBPACK_IMPORTED_MODULE_12__["b"]).map(function (key) {
    return _Clock_13c8f33d_js__WEBPACK_IMPORTED_MODULE_12__["b"][key];
  })).isRequired
} : undefined;
ClockView.defaultProps = {
  ampm: true,
  minutesStep: 1
};
var ClockView$1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(ClockView);

/* harmony default export */ __webpack_exports__["default"] = (ClockView$1);

//# sourceMappingURL=ClockView.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/DatePicker.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/DatePicker.js ***!
  \*************************************************************/
/*! exports provided: DatePicker, KeyboardDatePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return DatePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardDatePicker", function() { return KeyboardDatePicker; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./makePickerWithState-fee39765.js */ "./node_modules/@material-ui/pickers/esm/makePickerWithState-fee39765.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Wrapper-241966d7.js */ "./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js");
/* harmony import */ var _Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Calendar-11ae61f6.js */ "./node_modules/@material-ui/pickers/esm/Calendar-11ae61f6.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var rifm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rifm */ "./node_modules/rifm/dist/rifm.esm.js");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Picker_0912c402_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Picker-0912c402.js */ "./node_modules/@material-ui/pickers/esm/Picker-0912c402.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Day_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Day.js */ "./node_modules/@material-ui/pickers/esm/Day.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-transition-group */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/core/Popover */ "./node_modules/@material-ui/core/esm/Popover/index.js");
/* harmony import */ var _Clock_13c8f33d_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Clock-13c8f33d.js */ "./node_modules/@material-ui/pickers/esm/Clock-13c8f33d.js");
/* harmony import */ var _ClockView_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ClockView.js */ "./node_modules/@material-ui/pickers/esm/ClockView.js");




































var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])({
  toolbar: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  toolbarLandscape: {
    padding: 16
  },
  dateLandscape: {
    marginRight: 16
  }
}, {
  name: 'MuiPickersDatePickerRoot'
});
var DatePickerToolbar = function DatePickerToolbar(_ref) {
  var date = _ref.date,
      views = _ref.views,
      setOpenView = _ref.setOpenView,
      isLandscape = _ref.isLandscape,
      openView = _ref.openView;
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["u"])();
  var classes = useStyles();
  var isYearOnly = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(_Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_13__["i"])(views);
  }, [views]);
  var isYearAndMonth = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(_Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_13__["b"])(views);
  }, [views]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["P"], {
    isLandscape: isLandscape,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(!isYearOnly && classes.toolbar, isLandscape && classes.toolbarLandscape)
  }, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["T"], {
    variant: isYearOnly ? 'h3' : 'subtitle1',
    onClick: function onClick() {
      return setOpenView('year');
    },
    selected: openView === 'year',
    label: utils.getYearText(date)
  }), !isYearOnly && !isYearAndMonth && Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["T"], {
    variant: "h4",
    selected: openView === 'date',
    onClick: function onClick() {
      return setOpenView('date');
    },
    align: isLandscape ? 'left' : 'center',
    label: utils.getDatePickerHeaderText(date),
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(isLandscape && classes.dateLandscape)
  }), isYearAndMonth && Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["T"], {
    variant: "h4",
    onClick: function onClick() {
      return setOpenView('month');
    },
    selected: openView === 'month',
    label: utils.getMonthText(date)
  }));
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var defaultProps = _objectSpread({}, _Picker_0912c402_js__WEBPACK_IMPORTED_MODULE_20__["d"], {
  openTo: 'date',
  views: ['year', 'date']
});

function useOptions(props) {
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["u"])();
  return {
    getDefaultFormat: function getDefaultFormat() {
      return Object(_Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_13__["g"])(props.views, utils);
    }
  };
}

var DatePicker = Object(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["m"])({
  useOptions: useOptions,
  Input: _makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["a"],
  useState: _makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["u"],
  DefaultToolbarComponent: DatePickerToolbar
});
var KeyboardDatePicker = Object(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["m"])({
  useOptions: useOptions,
  Input: _makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["K"],
  useState: _makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["b"],
  DefaultToolbarComponent: DatePickerToolbar
});
DatePicker.defaultProps = defaultProps;
KeyboardDatePicker.defaultProps = defaultProps;


//# sourceMappingURL=DatePicker.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/DateTimePicker.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/DateTimePicker.js ***!
  \*****************************************************************/
/*! exports provided: DateTimePicker, KeyboardDateTimePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimePicker", function() { return DateTimePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardDateTimePicker", function() { return KeyboardDateTimePicker; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./makePickerWithState-fee39765.js */ "./node_modules/@material-ui/pickers/esm/makePickerWithState-fee39765.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Wrapper-241966d7.js */ "./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js");
/* harmony import */ var _Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Calendar-11ae61f6.js */ "./node_modules/@material-ui/pickers/esm/Calendar-11ae61f6.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var rifm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rifm */ "./node_modules/rifm/dist/rifm.esm.js");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Picker_0912c402_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Picker-0912c402.js */ "./node_modules/@material-ui/pickers/esm/Picker-0912c402.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Day_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Day.js */ "./node_modules/@material-ui/pickers/esm/Day.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-transition-group */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/core/Popover */ "./node_modules/@material-ui/core/esm/Popover/index.js");
/* harmony import */ var _Clock_13c8f33d_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Clock-13c8f33d.js */ "./node_modules/@material-ui/pickers/esm/Clock-13c8f33d.js");
/* harmony import */ var _ClockView_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ClockView.js */ "./node_modules/@material-ui/pickers/esm/ClockView.js");
/* harmony import */ var _TimePickerToolbar_05646f76_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./TimePickerToolbar-05646f76.js */ "./node_modules/@material-ui/pickers/esm/TimePickerToolbar-05646f76.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");









































var TimeIcon = function TimeIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_18__["default"], props, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  }));
};

var DateRangeIcon = function DateRangeIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_18__["default"], props, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }));
};

var viewToTabIndex = function viewToTabIndex(openView) {
  if (openView === 'date' || openView === 'year') {
    return 'date';
  }

  return 'time';
};

var tabIndexToView = function tabIndexToView(tab) {
  if (tab === 'date') {
    return 'date';
  }

  return 'hours';
};

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  // prettier-ignore
  var tabsBackground = theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background["default"];
  return {
    tabs: {
      color: theme.palette.getContrastText(tabsBackground),
      backgroundColor: tabsBackground
    }
  };
}, {
  name: 'MuiPickerDTTabs'
});
var DateTimePickerTabs = function DateTimePickerTabs(_ref) {
  var view = _ref.view,
      onChange = _ref.onChange,
      dateRangeIcon = _ref.dateRangeIcon,
      timeIcon = _ref.timeIcon;
  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["useTheme"])();
  var indicatorColor = theme.palette.type === 'light' ? 'secondary' : 'primary';

  var handleChange = function handleChange(e, value) {
    if (value !== viewToTabIndex(view)) {
      onChange(tabIndexToView(value));
    }
  };

  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_39__["default"], null, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_38__["default"], {
    variant: "fullWidth",
    value: viewToTabIndex(view),
    onChange: handleChange,
    className: classes.tabs,
    indicatorColor: indicatorColor
  }, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_37__["default"], {
    value: "date",
    icon: Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, dateRangeIcon)
  }), Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_37__["default"], {
    value: "time",
    icon: Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, timeIcon)
  })));
};
DateTimePickerTabs.defaultProps = {
  dateRangeIcon: Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(DateRangeIcon, null),
  timeIcon: Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TimeIcon, null)
};

var useStyles$1 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (_) {
  return {
    toolbar: {
      paddingLeft: 16,
      paddingRight: 16,
      justifyContent: 'space-around'
    },
    separator: {
      margin: '0 4px 0 2px',
      cursor: 'default'
    }
  };
}, {
  name: 'MuiPickerDTToolbar'
});
var DateTimePickerToolbar = function DateTimePickerToolbar(_ref) {
  var date = _ref.date,
      openView = _ref.openView,
      setOpenView = _ref.setOpenView,
      ampm = _ref.ampm,
      hideTabs = _ref.hideTabs,
      dateRangeIcon = _ref.dateRangeIcon,
      timeIcon = _ref.timeIcon,
      onChange = _ref.onChange;
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["u"])();
  var classes = useStyles$1();
  var showTabs = !hideTabs && typeof window !== 'undefined' && window.innerHeight > 667;

  var _useMeridiemMode = Object(_TimePickerToolbar_05646f76_js__WEBPACK_IMPORTED_MODULE_35__["u"])(date, ampm, onChange),
      meridiemMode = _useMeridiemMode.meridiemMode,
      handleMeridiemChange = _useMeridiemMode.handleMeridiemChange;

  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["useTheme"])();
  var rtl = theme.direction === 'rtl';
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["P"], {
    isLandscape: false,
    className: classes.toolbar
  }, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_36__["default"], {
    container: true,
    justify: "center",
    wrap: "nowrap"
  }, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_36__["default"], {
    item: true,
    container: true,
    xs: 5,
    justify: "flex-start",
    direction: "column"
  }, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["T"], {
    variant: "subtitle1",
    onClick: function onClick() {
      return setOpenView('year');
    },
    selected: openView === 'year',
    label: utils.getYearText(date)
  })), Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["T"], {
    variant: "h4",
    onClick: function onClick() {
      return setOpenView('date');
    },
    selected: openView === 'date',
    label: utils.getDateTimePickerHeaderText(date)
  }))), Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_36__["default"], {
    item: true,
    container: true,
    xs: 6,
    justify: "center",
    alignItems: "flex-end",
    direction: rtl ? 'row-reverse' : 'row'
  }, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["T"], {
    variant: "h3",
    onClick: function onClick() {
      return setOpenView('hours');
    },
    selected: openView === 'hours',
    label: utils.getHourText(date, ampm)
  }), Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["c"], {
    variant: "h3",
    label: ":",
    className: classes.separator
  }), Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["T"], {
    variant: "h3",
    onClick: function onClick() {
      return setOpenView('minutes');
    },
    selected: openView === 'minutes',
    label: utils.getMinuteText(date)
  })), ampm && Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_36__["default"], {
    item: true,
    container: true,
    xs: 1,
    direction: "column",
    justify: "flex-end"
  }, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["T"], {
    variant: "subtitle1",
    selected: meridiemMode === 'am',
    label: utils.getMeridiemText('am'),
    onClick: function onClick() {
      return handleMeridiemChange('am');
    }
  }), Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["T"], {
    variant: "subtitle1",
    selected: meridiemMode === 'pm',
    label: utils.getMeridiemText('pm'),
    onClick: function onClick() {
      return handleMeridiemChange('pm');
    }
  })))), showTabs && Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(DateTimePickerTabs, {
    dateRangeIcon: dateRangeIcon,
    timeIcon: timeIcon,
    view: openView,
    onChange: setOpenView
  }));
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var defaultProps = _objectSpread({}, _Picker_0912c402_js__WEBPACK_IMPORTED_MODULE_20__["a"], {
  wider: true,
  orientation: 'portrait',
  openTo: 'date',
  views: ['year', 'date', 'hours', 'minutes']
});

function useOptions(props) {
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["u"])();

  if (props.orientation !== 'portrait') {
    throw new Error('We are not supporting custom orientation for DateTimePicker yet :(');
  }

  return {
    getDefaultFormat: function getDefaultFormat() {
      return Object(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["p"])(props.format, props.ampm, {
        '12h': utils.dateTime12hFormat,
        '24h': utils.dateTime24hFormat
      });
    }
  };
}

var DateTimePicker = Object(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["m"])({
  useOptions: useOptions,
  Input: _makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["a"],
  useState: _makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["u"],
  DefaultToolbarComponent: DateTimePickerToolbar
});
var KeyboardDateTimePicker = Object(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["m"])({
  useOptions: useOptions,
  Input: _makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["K"],
  useState: _makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["b"],
  DefaultToolbarComponent: DateTimePickerToolbar,
  getCustomProps: function getCustomProps(props) {
    return {
      refuse: props.ampm ? /[^\dap]+/gi : /[^\d]+/gi
    };
  }
});
DateTimePicker.defaultProps = defaultProps;
KeyboardDateTimePicker.defaultProps = defaultProps;


//# sourceMappingURL=DateTimePicker.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/Day.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/Day.js ***!
  \******************************************************/
/*! exports provided: default, Day, useStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Day", function() { return Day; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    day: {
      width: 36,
      height: 36,
      fontSize: theme.typography.caption.fontSize,
      margin: '0 2px',
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightMedium,
      padding: 0
    },
    hidden: {
      opacity: 0,
      pointerEvents: 'none'
    },
    current: {
      color: theme.palette.primary.main,
      fontWeight: 600
    },
    daySelected: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
      '&:hover': {
        backgroundColor: theme.palette.primary.main
      }
    },
    dayDisabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    }
  };
}, {
  name: 'MuiPickersDay'
});
var Day = function Day(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      hidden = _ref.hidden,
      current = _ref.current,
      selected = _ref.selected,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["children", "disabled", "hidden", "current", "selected"]);

  var classes = useStyles();
  var className = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.day, hidden && classes.hidden, current && classes.current, selected && classes.daySelected, disabled && classes.dayDisabled);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    className: className,
    tabIndex: hidden || disabled ? -1 : 0
  }, other), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "body2",
    color: "inherit"
  }, children));
};
Day.displayName = 'Day';
 true ? Day.propTypes = {
  current: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  hidden: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"]
} : undefined;
Day.defaultProps = {
  disabled: false,
  hidden: false,
  current: false,
  selected: false
};

/* harmony default export */ __webpack_exports__["default"] = (Day);

//# sourceMappingURL=Day.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/Picker-0912c402.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/Picker-0912c402.js ***!
  \******************************************************************/
/*! exports provided: P, a, d, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return Picker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dateTimePickerDefaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return datePickerDefaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return timePickerDefaultProps; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Wrapper-241966d7.js */ "./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js");
/* harmony import */ var _Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Calendar-11ae61f6.js */ "./node_modules/@material-ui/pickers/esm/Calendar-11ae61f6.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _ClockView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ClockView.js */ "./node_modules/@material-ui/pickers/esm/ClockView.js");














function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var date = Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_2__["object"], prop_types__WEBPACK_IMPORTED_MODULE_2__["string"], prop_types__WEBPACK_IMPORTED_MODULE_2__["number"], Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["instanceOf"])(Date)]);
var datePickerView = Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOf"])(['year', 'month', 'day']);
/* eslint-disable @typescript-eslint/no-object-literal-type-assertion */

var timePickerDefaultProps = {
  ampm: true,
  invalidDateMessage: 'Invalid Time Format'
};
var datePickerDefaultProps = {
  minDate: new Date('1900-01-01'),
  maxDate: new Date('2100-01-01'),
  invalidDateMessage: 'Invalid Date Format',
  minDateMessage: 'Date should not be before minimal date',
  maxDateMessage: 'Date should not be after maximal date',
  allowKeyboardControl: true
};
var dateTimePickerDefaultProps = _objectSpread({}, timePickerDefaultProps, {}, datePickerDefaultProps, {
  showTabs: true
});

function useViews(views, openTo, onChange) {
  var _React$useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(openTo && Object(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_9__["a"])(views, openTo) ? openTo : views[0]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_11__["default"])(_React$useState, 2),
      openView = _React$useState2[0],
      setOpenView = _React$useState2[1];

  var handleChangeAndOpenNext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (date, isFinish) {
    var nextViewToOpen = views[views.indexOf(openView) + 1];

    if (isFinish && nextViewToOpen) {
      // do not close picker if needs to show next view
      onChange(date, false);
      setOpenView(nextViewToOpen);
      return;
    }

    onChange(date, Boolean(isFinish));
  }, [onChange, openView, views]);
  return {
    handleChangeAndOpenNext: handleChangeAndOpenNext,
    openView: openView,
    setOpenView: setOpenView
  };
}

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
    root: {
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      outline: 'none',
      '&:focus': {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium
      }
    },
    yearSelected: {
      margin: '10px 0',
      fontWeight: theme.typography.fontWeightMedium
    },
    yearDisabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    }
  };
}, {
  name: 'MuiPickersYear'
});
var Year = function Year(_ref) {
  var onSelect = _ref.onSelect,
      forwardedRef = _ref.forwardedRef,
      value = _ref.value,
      selected = _ref.selected,
      disabled = _ref.disabled,
      children = _ref.children,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, ["onSelect", "forwardedRef", "value", "selected", "disabled", "children"]);

  var classes = useStyles();
  var handleClick = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return onSelect(value);
  }, [onSelect, value]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
    role: "button",
    component: "div",
    tabIndex: disabled ? -1 : 0,
    onClick: handleClick,
    onKeyPress: handleClick,
    color: selected ? 'primary' : undefined,
    variant: selected ? 'h5' : 'subtitle1',
    children: children,
    ref: forwardedRef,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, selected && classes.yearSelected, disabled && classes.yearDisabled)
  }, other));
};
Year.displayName = 'Year';
var Year$1 = Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function (props, ref) {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Year, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
    forwardedRef: ref
  }));
});

var useStyles$1 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])({
  container: {
    height: 300,
    overflowY: 'auto'
  }
}, {
  name: 'MuiPickersYearSelection'
});
var YearSelection = function YearSelection(_ref) {
  var date = _ref.date,
      onChange = _ref.onChange,
      onYearChange = _ref.onYearChange,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      disablePast = _ref.disablePast,
      disableFuture = _ref.disableFuture,
      animateYearScrolling = _ref.animateYearScrolling;
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["u"])();
  var classes = useStyles$1();
  var currentVariant = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_9__["V"]);
  var selectedYearRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (selectedYearRef.current && selectedYearRef.current.scrollIntoView) {
      try {
        selectedYearRef.current.scrollIntoView({
          block: currentVariant === 'static' ? 'nearest' : 'center',
          behavior: animateYearScrolling ? 'smooth' : 'auto'
        });
      } catch (e) {
        // call without arguments in case when scrollIntoView works improperly (e.g. Firefox 52-57)
        selectedYearRef.current.scrollIntoView();
      }
    }
  }, []); // eslint-disable-line

  var currentYear = utils.getYear(date);
  var onYearSelect = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (year) {
    var newDate = utils.setYear(date, year);

    if (onYearChange) {
      onYearChange(newDate);
    }

    onChange(newDate, true);
  }, [date, onChange, onYearChange, utils]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: classes.container
  }, utils.getYearRange(minDate, maxDate).map(function (year) {
    var yearNumber = utils.getYear(year);
    var selected = yearNumber === currentYear;
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Year$1, {
      key: utils.getYearText(year),
      selected: selected,
      value: yearNumber,
      onSelect: onYearSelect,
      ref: selected ? selectedYearRef : undefined,
      disabled: Boolean(disablePast && utils.isBeforeYear(year, utils.date()) || disableFuture && utils.isAfterYear(year, utils.date()))
    }, utils.getYearText(year));
  }));
};

var useStyles$2 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
    root: {
      flex: '1 0 33.33%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      outline: 'none',
      height: 75,
      transition: theme.transitions.create('font-size', {
        duration: '100ms'
      }),
      '&:focus': {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium
      }
    },
    monthSelected: {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium
    },
    monthDisabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    }
  };
}, {
  name: 'MuiPickersMonth'
});
var Month = function Month(_ref) {
  var selected = _ref.selected,
      onSelect = _ref.onSelect,
      disabled = _ref.disabled,
      value = _ref.value,
      children = _ref.children,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, ["selected", "onSelect", "disabled", "value", "children"]);

  var classes = useStyles$2();
  var handleSelection = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    onSelect(value);
  }, [onSelect, value]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
    role: "button",
    component: "div",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, selected && classes.monthSelected, disabled && classes.monthDisabled),
    tabIndex: disabled ? -1 : 0,
    onClick: handleSelection,
    onKeyPress: handleSelection,
    color: selected ? 'primary' : undefined,
    variant: selected ? 'h5' : 'subtitle1',
    children: children
  }, other));
};
Month.displayName = 'Month';

var useStyles$3 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])({
  container: {
    width: 310,
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'stretch'
  }
}, {
  name: 'MuiPickersMonthSelection'
});
var MonthSelection = function MonthSelection(_ref) {
  var disablePast = _ref.disablePast,
      disableFuture = _ref.disableFuture,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      date = _ref.date,
      onMonthChange = _ref.onMonthChange,
      onChange = _ref.onChange;
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["u"])();
  var classes = useStyles$3();
  var currentMonth = utils.getMonth(date);

  var shouldDisableMonth = function shouldDisableMonth(month) {
    var now = utils.date();
    var utilMinDate = utils.date(minDate);
    var utilMaxDate = utils.date(maxDate);
    var firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, utilMinDate) ? now : utilMinDate);
    var lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, utilMaxDate) ? now : utilMaxDate);
    var isBeforeFirstEnabled = utils.isBefore(month, firstEnabledMonth);
    var isAfterLastEnabled = utils.isAfter(month, lastEnabledMonth);
    return isBeforeFirstEnabled || isAfterLastEnabled;
  };

  var onMonthSelect = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (month) {
    var newDate = utils.setMonth(date, month);
    onChange(newDate, true);

    if (onMonthChange) {
      onMonthChange(newDate);
    }
  }, [date, onChange, onMonthChange, utils]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: classes.container
  }, utils.getMonthArray(date).map(function (month) {
    var monthNumber = utils.getMonth(month);
    var monthText = utils.format(month, 'MMM');
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Month, {
      key: monthText,
      value: monthNumber,
      selected: monthNumber === currentMonth,
      onSelect: onMonthSelect,
      disabled: shouldDisableMonth(month)
    }, monthText);
  }));
};

var getOrientation = function getOrientation() {
  if (typeof window === 'undefined') {
    return 'portrait';
  }

  if (window.screen && window.screen.orientation && window.screen.orientation.angle) {
    return Math.abs(window.screen.orientation.angle) === 90 ? 'landscape' : 'portrait';
  } // Support IOS safari


  if (window.orientation) {
    return Math.abs(Number(window.orientation)) === 90 ? 'landscape' : 'portrait';
  }

  return 'portrait';
};

function useIsLandscape(customOrientation) {
  var _React$useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(getOrientation()),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_11__["default"])(_React$useState, 2),
      orientation = _React$useState2[0],
      setOrientation = _React$useState2[1];

  var eventHandler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return setOrientation(getOrientation());
  }, []);
  Object(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_9__["u"])(function () {
    window.addEventListener('orientationchange', eventHandler);
    return function () {
      return window.removeEventListener('orientationchange', eventHandler);
    };
  }, [eventHandler]);
  var orientationToUse = customOrientation || orientation;
  return orientationToUse === 'landscape';
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var viewsMap = {
  year: YearSelection,
  month: MonthSelection,
  date: _Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_10__["a"],
  hours: _ClockView_js__WEBPACK_IMPORTED_MODULE_12__["ClockView"],
  minutes: _ClockView_js__WEBPACK_IMPORTED_MODULE_12__["ClockView"],
  seconds: _ClockView_js__WEBPACK_IMPORTED_MODULE_12__["ClockView"]
};
var useStyles$4 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  containerLandscape: {
    flexDirection: 'row'
  },
  pickerView: {
    overflowX: 'hidden',
    minHeight: _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_9__["b"],
    minWidth: _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_9__["D"],
    maxWidth: _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_9__["c"],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  pickerViewLandscape: {
    padding: '0 8px'
  }
}, {
  name: 'MuiPickersBasePicker'
});
var Picker = function Picker(_ref) {
  var date = _ref.date,
      views = _ref.views,
      disableToolbar = _ref.disableToolbar,
      onChange = _ref.onChange,
      openTo = _ref.openTo,
      unparsedMinDate = _ref.minDate,
      unparsedMaxDate = _ref.maxDate,
      ToolbarComponent = _ref.ToolbarComponent,
      orientation = _ref.orientation,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, ["date", "views", "disableToolbar", "onChange", "openTo", "minDate", "maxDate", "ToolbarComponent", "orientation"]);

  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["u"])();
  var classes = useStyles$4();
  var isLandscape = useIsLandscape(orientation);

  var _useViews = useViews(views, openTo, onChange),
      openView = _useViews.openView,
      setOpenView = _useViews.setOpenView,
      handleChangeAndOpenNext = _useViews.handleChangeAndOpenNext;

  var minDate = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return utils.date(unparsedMinDate);
  }, [unparsedMinDate, utils]);
  var maxDate = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return utils.date(unparsedMaxDate);
  }, [unparsedMaxDate, utils]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.container, isLandscape && classes.containerLandscape)
  }, !disableToolbar && Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToolbarComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, rest, {
    views: views,
    isLandscape: isLandscape,
    date: date,
    onChange: onChange,
    setOpenView: setOpenView,
    openView: openView
  })), Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.pickerView, isLandscape && classes.pickerViewLandscape)
  }, openView === 'year' && Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(YearSelection, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, rest, {
    date: date,
    onChange: handleChangeAndOpenNext,
    minDate: minDate,
    maxDate: maxDate
  })), openView === 'month' && Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MonthSelection, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, rest, {
    date: date,
    onChange: handleChangeAndOpenNext,
    minDate: minDate,
    maxDate: maxDate
  })), openView === 'date' && Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_10__["a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, rest, {
    date: date,
    onChange: handleChangeAndOpenNext,
    minDate: minDate,
    maxDate: maxDate
  })), (openView === 'hours' || openView === 'minutes' || openView === 'seconds') && Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_ClockView_js__WEBPACK_IMPORTED_MODULE_12__["ClockView"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, rest, {
    date: date,
    type: openView,
    onHourChange: handleChangeAndOpenNext,
    onMinutesChange: handleChangeAndOpenNext,
    onSecondsChange: handleChangeAndOpenNext
  }))));
};
Picker.defaultProps = _objectSpread$1({}, datePickerDefaultProps, {
  views: Object.keys(viewsMap)
});


//# sourceMappingURL=Picker-0912c402.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/TimePicker.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/TimePicker.js ***!
  \*************************************************************/
/*! exports provided: KeyboardTimePicker, TimePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardTimePicker", function() { return KeyboardTimePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePicker", function() { return TimePicker; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./makePickerWithState-fee39765.js */ "./node_modules/@material-ui/pickers/esm/makePickerWithState-fee39765.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Wrapper-241966d7.js */ "./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js");
/* harmony import */ var _Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Calendar-11ae61f6.js */ "./node_modules/@material-ui/pickers/esm/Calendar-11ae61f6.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var rifm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rifm */ "./node_modules/rifm/dist/rifm.esm.js");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Picker_0912c402_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Picker-0912c402.js */ "./node_modules/@material-ui/pickers/esm/Picker-0912c402.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Day_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Day.js */ "./node_modules/@material-ui/pickers/esm/Day.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-transition-group */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/core/Popover */ "./node_modules/@material-ui/core/esm/Popover/index.js");
/* harmony import */ var _Clock_13c8f33d_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Clock-13c8f33d.js */ "./node_modules/@material-ui/pickers/esm/Clock-13c8f33d.js");
/* harmony import */ var _ClockView_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ClockView.js */ "./node_modules/@material-ui/pickers/esm/ClockView.js");
/* harmony import */ var _TimePickerToolbar_05646f76_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./TimePickerToolbar-05646f76.js */ "./node_modules/@material-ui/pickers/esm/TimePickerToolbar-05646f76.js");





































function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var defaultProps = _objectSpread({}, _Picker_0912c402_js__WEBPACK_IMPORTED_MODULE_20__["t"], {
  openTo: 'hours',
  views: ['hours', 'minutes']
});

function useOptions(props) {
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["u"])();
  return {
    getDefaultFormat: function getDefaultFormat() {
      return Object(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["p"])(props.format, props.ampm, {
        '12h': utils.time12hFormat,
        '24h': utils.time24hFormat
      });
    }
  };
}

var TimePicker = Object(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["m"])({
  useOptions: useOptions,
  Input: _makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["a"],
  useState: _makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["u"],
  DefaultToolbarComponent: _TimePickerToolbar_05646f76_js__WEBPACK_IMPORTED_MODULE_35__["T"]
});
var KeyboardTimePicker = Object(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["m"])({
  useOptions: useOptions,
  Input: _makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["K"],
  useState: _makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["b"],
  DefaultToolbarComponent: _TimePickerToolbar_05646f76_js__WEBPACK_IMPORTED_MODULE_35__["T"],
  getCustomProps: function getCustomProps(props) {
    return {
      refuse: props.ampm ? /[^\dap]+/gi : /[^\d]+/gi
    };
  }
});
TimePicker.defaultProps = defaultProps;
KeyboardTimePicker.defaultProps = defaultProps;


//# sourceMappingURL=TimePicker.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/TimePickerToolbar-05646f76.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/TimePickerToolbar-05646f76.js ***!
  \*****************************************************************************/
/*! exports provided: T, u */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return TimePickerToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return useMeridiemMode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./makePickerWithState-fee39765.js */ "./node_modules/@material-ui/pickers/esm/makePickerWithState-fee39765.js");
/* harmony import */ var _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Wrapper-241966d7.js */ "./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js");
/* harmony import */ var _Clock_13c8f33d_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Clock-13c8f33d.js */ "./node_modules/@material-ui/pickers/esm/Clock-13c8f33d.js");








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  toolbarLandscape: {
    flexWrap: 'wrap'
  },
  toolbarAmpmLeftPadding: {
    paddingLeft: 50
  },
  separator: {
    margin: '0 4px 0 2px',
    cursor: 'default'
  },
  hourMinuteLabel: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  hourMinuteLabelAmpmLandscape: {
    marginTop: 'auto'
  },
  hourMinuteLabelReverse: {
    flexDirection: 'row-reverse'
  },
  ampmSelection: {
    marginLeft: 20,
    marginRight: -20,
    display: 'flex',
    flexDirection: 'column'
  },
  ampmLandscape: {
    margin: '4px 0 auto',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexBasis: '100%'
  },
  ampmSelectionWithSeconds: {
    marginLeft: 15,
    marginRight: 10
  },
  ampmLabel: {
    fontSize: 18
  }
}, {
  name: 'MuiPickersTimePickerToolbar'
});
function useMeridiemMode(date, ampm, onChange) {
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_1__["u"])();
  var meridiemMode = Object(_Clock_13c8f33d_js__WEBPACK_IMPORTED_MODULE_6__["g"])(date, utils);
  var handleMeridiemChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (mode) {
    var timeWithMeridiem = Object(_Clock_13c8f33d_js__WEBPACK_IMPORTED_MODULE_6__["c"])(date, mode, Boolean(ampm), utils);
    onChange(timeWithMeridiem, false);
  }, [ampm, date, onChange, utils]);
  return {
    meridiemMode: meridiemMode,
    handleMeridiemChange: handleMeridiemChange
  };
}
var TimePickerToolbar = function TimePickerToolbar(_ref) {
  var date = _ref.date,
      views = _ref.views,
      ampm = _ref.ampm,
      openView = _ref.openView,
      onChange = _ref.onChange,
      isLandscape = _ref.isLandscape,
      setOpenView = _ref.setOpenView;
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_1__["u"])();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  var classes = useStyles();

  var _useMeridiemMode = useMeridiemMode(date, ampm, onChange),
      meridiemMode = _useMeridiemMode.meridiemMode,
      handleMeridiemChange = _useMeridiemMode.handleMeridiemChange;

  var clockTypographyVariant = isLandscape ? 'h3' : 'h2';
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_4__["P"], {
    isLandscape: isLandscape,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(isLandscape ? classes.toolbarLandscape : ampm && classes.toolbarAmpmLeftPadding)
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.hourMinuteLabel, ampm && isLandscape && classes.hourMinuteLabelAmpmLandscape, {
      rtl: classes.hourMinuteLabelReverse
    }[theme.direction])
  }, Object(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_5__["a"])(views, 'hours') && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_4__["T"], {
    variant: clockTypographyVariant,
    onClick: function onClick() {
      return setOpenView(_Clock_13c8f33d_js__WEBPACK_IMPORTED_MODULE_6__["b"].HOURS);
    },
    selected: openView === _Clock_13c8f33d_js__WEBPACK_IMPORTED_MODULE_6__["b"].HOURS,
    label: utils.getHourText(date, Boolean(ampm))
  }), Object(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_5__["a"])(views, ['hours', 'minutes']) && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_4__["c"], {
    label: ":",
    variant: clockTypographyVariant,
    selected: false,
    className: classes.separator
  }), Object(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_5__["a"])(views, 'minutes') && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_4__["T"], {
    variant: clockTypographyVariant,
    onClick: function onClick() {
      return setOpenView(_Clock_13c8f33d_js__WEBPACK_IMPORTED_MODULE_6__["b"].MINUTES);
    },
    selected: openView === _Clock_13c8f33d_js__WEBPACK_IMPORTED_MODULE_6__["b"].MINUTES,
    label: utils.getMinuteText(date)
  }), Object(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_5__["a"])(views, ['minutes', 'seconds']) && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_4__["c"], {
    variant: "h2",
    label: ":",
    selected: false,
    className: classes.separator
  }), Object(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_5__["a"])(views, 'seconds') && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_4__["T"], {
    variant: "h2",
    onClick: function onClick() {
      return setOpenView(_Clock_13c8f33d_js__WEBPACK_IMPORTED_MODULE_6__["b"].SECONDS);
    },
    selected: openView === _Clock_13c8f33d_js__WEBPACK_IMPORTED_MODULE_6__["b"].SECONDS,
    label: utils.getSecondText(date)
  })), ampm && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.ampmSelection, isLandscape && classes.ampmLandscape, Object(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_5__["a"])(views, 'seconds') && classes.ampmSelectionWithSeconds)
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_4__["T"], {
    disableRipple: true,
    variant: "subtitle1",
    selected: meridiemMode === 'am',
    typographyClassName: classes.ampmLabel,
    label: utils.getMeridiemText('am'),
    onClick: function onClick() {
      return handleMeridiemChange('am');
    }
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_4__["T"], {
    disableRipple: true,
    variant: "subtitle1",
    selected: meridiemMode === 'pm',
    typographyClassName: classes.ampmLabel,
    label: utils.getMeridiemText('pm'),
    onClick: function onClick() {
      return handleMeridiemChange('pm');
    }
  })));
};


//# sourceMappingURL=TimePickerToolbar-05646f76.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js ***!
  \*******************************************************************/
/*! exports provided: D, V, W, a, b, c, r, u */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return DIALOG_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return VariantContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arrayIncludes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VIEW_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DIALOG_WIDTH_WIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return runKeyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return useIsomorphicEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Popover */ "./node_modules/@material-ui/core/esm/Popover/index.js");












/** Use it instead of .includes method for IE support */
function arrayIncludes(array, itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.every(function (item) {
      return array.indexOf(item) !== -1;
    });
  }

  return array.indexOf(itemOrItems) !== -1;
}

var DIALOG_WIDTH = 310;
var DIALOG_WIDTH_WIDER = 325;
var VIEW_HEIGHT = 305;

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    staticWrapperRoot: {
      overflow: 'hidden',
      minWidth: DIALOG_WIDTH,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.paper
    }
  };
}, {
  name: 'MuiPickersStaticWrapper'
});
var StaticWrapper = function StaticWrapper(_ref) {
  var children = _ref.children;
  var classes = useStyles();
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classes.staticWrapperRoot,
    children: children
  });
};

var ModalDialog = function ModalDialog(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      onAccept = _ref.onAccept,
      onDismiss = _ref.onDismiss,
      onClear = _ref.onClear,
      onSetToday = _ref.onSetToday,
      okLabel = _ref.okLabel,
      cancelLabel = _ref.cancelLabel,
      clearLabel = _ref.clearLabel,
      todayLabel = _ref.todayLabel,
      clearable = _ref.clearable,
      showTodayButton = _ref.showTodayButton,
      showTabs = _ref.showTabs,
      wider = _ref.wider,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["children", "classes", "onAccept", "onDismiss", "onClear", "onSetToday", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "clearable", "showTodayButton", "showTabs", "wider"]);

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    role: "dialog",
    onClose: onDismiss,
    classes: {
      paper: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.dialogRoot, wider && classes.dialogRootWider)
    }
  }, other), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    children: children,
    className: classes.dialog
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__["default"], {
    classes: {
      root: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])((clearable || showTodayButton) && classes.withAdditionalAction)
    }
  }, clearable && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "primary",
    onClick: onClear
  }, clearLabel), showTodayButton && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "primary",
    onClick: onSetToday
  }, todayLabel), cancelLabel && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "primary",
    onClick: onDismiss
  }, cancelLabel), okLabel && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "primary",
    onClick: onAccept
  }, okLabel)));
};
ModalDialog.displayName = 'ModalDialog';
var styles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["createStyles"])({
  dialogRoot: {
    minWidth: DIALOG_WIDTH
  },
  dialogRootWider: {
    minWidth: DIALOG_WIDTH_WIDER
  },
  dialog: {
    '&:first-child': {
      padding: 0
    }
  },
  withAdditionalAction: {
    // set justifyContent to default value to fix IE11 layout bug
    // see https://github.com/dmtrKovalenko/material-ui-pickers/pull/267
    justifyContent: 'flex-start',
    '& > *:first-child': {
      marginRight: 'auto'
    }
  }
});
var ModalDialog$1 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles, {
  name: 'MuiPickersModal'
})(ModalDialog);

var useIsomorphicEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"];
function runKeyHandler(e, keyHandlers) {
  var handler = keyHandlers[e.key];

  if (handler) {
    handler(); // if event was handled prevent other side effects (e.g. page scroll)

    e.preventDefault();
  }
}
function useKeyDown(active, keyHandlers) {
  var keyHandlersRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(keyHandlers);
  keyHandlersRef.current = keyHandlers;
  useIsomorphicEffect(function () {
    if (active) {
      var handleKeyDown = function handleKeyDown(event) {
        runKeyHandler(event, keyHandlersRef.current);
      };

      window.addEventListener('keydown', handleKeyDown);
      return function () {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [active]);
}

var ModalWrapper = function ModalWrapper(_ref) {
  var open = _ref.open,
      children = _ref.children,
      okLabel = _ref.okLabel,
      cancelLabel = _ref.cancelLabel,
      clearLabel = _ref.clearLabel,
      todayLabel = _ref.todayLabel,
      showTodayButton = _ref.showTodayButton,
      clearable = _ref.clearable,
      DialogProps = _ref.DialogProps,
      showTabs = _ref.showTabs,
      wider = _ref.wider,
      InputComponent = _ref.InputComponent,
      DateInputProps = _ref.DateInputProps,
      onClear = _ref.onClear,
      onAccept = _ref.onAccept,
      onDismiss = _ref.onDismiss,
      onSetToday = _ref.onSetToday,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["open", "children", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "showTodayButton", "clearable", "DialogProps", "showTabs", "wider", "InputComponent", "DateInputProps", "onClear", "onAccept", "onDismiss", "onSetToday"]);

  useKeyDown(open, {
    Enter: onAccept
  });
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InputComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, other, DateInputProps)), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ModalDialog$1, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    wider: wider,
    showTabs: showTabs,
    open: open,
    onClear: onClear,
    onAccept: onAccept,
    onDismiss: onDismiss,
    onSetToday: onSetToday,
    clearLabel: clearLabel,
    todayLabel: todayLabel,
    okLabel: okLabel,
    cancelLabel: cancelLabel,
    clearable: clearable,
    showTodayButton: showTodayButton,
    children: children
  }, DialogProps)));
};
 true ? ModalWrapper.propTypes = {
  okLabel: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],
  cancelLabel: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],
  clearLabel: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],
  clearable: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  todayLabel: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],
  showTodayButton: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  DialogProps: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"]
} : undefined;
ModalWrapper.defaultProps = {
  okLabel: 'OK',
  cancelLabel: 'Cancel',
  clearLabel: 'Clear',
  todayLabel: 'Today',
  clearable: false,
  showTodayButton: false
};

var InlineWrapper = function InlineWrapper(_ref) {
  var open = _ref.open,
      wider = _ref.wider,
      children = _ref.children,
      PopoverProps = _ref.PopoverProps,
      onClear = _ref.onClear,
      onDismiss = _ref.onDismiss,
      onSetToday = _ref.onSetToday,
      onAccept = _ref.onAccept,
      showTabs = _ref.showTabs,
      DateInputProps = _ref.DateInputProps,
      InputComponent = _ref.InputComponent,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["open", "wider", "children", "PopoverProps", "onClear", "onDismiss", "onSetToday", "onAccept", "showTabs", "DateInputProps", "InputComponent"]);

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  useKeyDown(open, {
    Enter: onAccept
  });
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InputComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, other, DateInputProps, {
    inputRef: ref
  })), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    open: open,
    onClose: onDismiss,
    anchorEl: ref.current,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    children: children
  }, PopoverProps)));
};
 true ? InlineWrapper.propTypes = {
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  PopoverProps: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"]
} : undefined;

function getWrapperFromVariant(variant) {
  switch (variant) {
    case 'inline':
      return InlineWrapper;

    case 'static':
      return StaticWrapper;

    default:
      return ModalWrapper;
  }
}
var VariantContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
var Wrapper = function Wrapper(_ref) {
  var variant = _ref.variant,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["variant"]);

  var Component = getWrapperFromVariant(variant);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(VariantContext.Provider, {
    value: variant || 'dialog'
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component, props));
};


//# sourceMappingURL=Wrapper-241966d7.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/index.js ***!
  \********************************************************/
/*! exports provided: MuiPickersContext, MuiPickersUtilsProvider, useUtils, makePickerWithState, useKeyboardPickerState, usePickerState, validate, Calendar, DatePicker, KeyboardDatePicker, Picker, Day, Clock, ClockView, TimePickerView, KeyboardTimePicker, TimePicker, DateTimePicker, KeyboardDateTimePicker, useStaticState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticState", function() { return useStaticState; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MuiPickersContext", function() { return _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MuiPickersUtilsProvider", function() { return _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["M"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUtils", function() { return _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["u"]; });

/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./makePickerWithState-fee39765.js */ "./node_modules/@material-ui/pickers/esm/makePickerWithState-fee39765.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makePickerWithState", function() { return _makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useKeyboardPickerState", function() { return _makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePickerState", function() { return _makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["u"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["v"]; });

/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Wrapper-241966d7.js */ "./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js");
/* harmony import */ var _Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Calendar-11ae61f6.js */ "./node_modules/@material-ui/pickers/esm/Calendar-11ae61f6.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return _Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_13__["a"]; });

/* harmony import */ var _DatePicker_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DatePicker.js */ "./node_modules/@material-ui/pickers/esm/DatePicker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return _DatePicker_js__WEBPACK_IMPORTED_MODULE_14__["DatePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyboardDatePicker", function() { return _DatePicker_js__WEBPACK_IMPORTED_MODULE_14__["KeyboardDatePicker"]; });

/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var rifm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rifm */ "./node_modules/rifm/dist/rifm.esm.js");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Picker_0912c402_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Picker-0912c402.js */ "./node_modules/@material-ui/pickers/esm/Picker-0912c402.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _Picker_0912c402_js__WEBPACK_IMPORTED_MODULE_21__["P"]; });

/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Day_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Day.js */ "./node_modules/@material-ui/pickers/esm/Day.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Day", function() { return _Day_js__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-transition-group */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @material-ui/core/Popover */ "./node_modules/@material-ui/core/esm/Popover/index.js");
/* harmony import */ var _Clock_13c8f33d_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Clock-13c8f33d.js */ "./node_modules/@material-ui/pickers/esm/Clock-13c8f33d.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return _Clock_13c8f33d_js__WEBPACK_IMPORTED_MODULE_34__["a"]; });

/* harmony import */ var _ClockView_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ClockView.js */ "./node_modules/@material-ui/pickers/esm/ClockView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClockView", function() { return _ClockView_js__WEBPACK_IMPORTED_MODULE_35__["ClockView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimePickerView", function() { return _ClockView_js__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _TimePickerToolbar_05646f76_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./TimePickerToolbar-05646f76.js */ "./node_modules/@material-ui/pickers/esm/TimePickerToolbar-05646f76.js");
/* harmony import */ var _TimePicker_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./TimePicker.js */ "./node_modules/@material-ui/pickers/esm/TimePicker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyboardTimePicker", function() { return _TimePicker_js__WEBPACK_IMPORTED_MODULE_37__["KeyboardTimePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimePicker", function() { return _TimePicker_js__WEBPACK_IMPORTED_MODULE_37__["TimePicker"]; });

/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _DateTimePicker_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./DateTimePicker.js */ "./node_modules/@material-ui/pickers/esm/DateTimePicker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateTimePicker", function() { return _DateTimePicker_js__WEBPACK_IMPORTED_MODULE_42__["DateTimePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyboardDateTimePicker", function() { return _DateTimePicker_js__WEBPACK_IMPORTED_MODULE_42__["KeyboardDateTimePicker"]; });














































function useStaticState(_ref) {
  var value = _ref.value,
      _ref$autoOk = _ref.autoOk,
      autoOk = _ref$autoOk === void 0 ? true : _ref$autoOk,
      onChange = _ref.onChange,
      defaultFormat = _ref.defaultFormat;

  var _usePickerState = Object(_makePickerWithState_fee39765_js__WEBPACK_IMPORTED_MODULE_9__["u"])({
    value: value,
    onChange: onChange,
    autoOk: autoOk
  }, {
    // just a random format, mostly always not needed for users
    getDefaultFormat: function getDefaultFormat() {
      return defaultFormat || 'MM/dd/yyyy';
    }
  }),
      pickerProps = _usePickerState.pickerProps,
      wrapperProps = _usePickerState.wrapperProps,
      inputProps = _usePickerState.inputProps;

  return {
    pickerProps: pickerProps,
    wrapperProps: wrapperProps,
    inputProps: inputProps
  };
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/makePickerWithState-fee39765.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/makePickerWithState-fee39765.js ***!
  \*******************************************************************************/
/*! exports provided: K, P, T, a, b, c, m, p, u, v */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return KeyboardDateInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return PickerToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return ToolbarButton$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PureDateInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useKeyboardPickerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ToolbarText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return makePickerWithState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return pick12hOr24hFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return usePickerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return validate; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Wrapper-241966d7.js */ "./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var rifm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rifm */ "./node_modules/rifm/dist/rifm.esm.js");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Picker_0912c402_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Picker-0912c402.js */ "./node_modules/@material-ui/pickers/esm/Picker-0912c402.js");




















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  var textColor = theme.palette.type === 'light' ? theme.palette.primary.contrastText : theme.palette.getContrastText(theme.palette.background["default"]);
  return {
    toolbarTxt: {
      color: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["fade"])(textColor, 0.54)
    },
    toolbarBtnSelected: {
      color: textColor
    }
  };
}, {
  name: 'MuiPickersToolbarText'
});

var ToolbarText = function ToolbarText(_ref) {
  var selected = _ref.selected,
      label = _ref.label,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, ["selected", "label", "className"]);

  var classes = useStyles();
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
    children: label,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.toolbarTxt, className, selected && classes.toolbarBtnSelected)
  }, other));
};

var ToolbarButton = function ToolbarButton(_ref) {
  var classes = _ref.classes,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className,
      label = _ref.label,
      selected = _ref.selected,
      variant = _ref.variant,
      align = _ref.align,
      typographyClassName = _ref.typographyClassName,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, ["classes", "className", "label", "selected", "variant", "align", "typographyClassName"]);

  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
    variant: "text",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.toolbarBtn, className)
  }, other), Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToolbarText, {
    align: align,
    className: typographyClassName,
    variant: variant,
    label: label,
    selected: selected
  }));
};

 true ? ToolbarButton.propTypes = {
  selected: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"].isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2__["any"].isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2__["any"]
} : undefined;
ToolbarButton.defaultProps = {
  className: ''
};
var styles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["createStyles"])({
  toolbarBtn: {
    padding: 0,
    minWidth: '16px',
    textTransform: 'none'
  }
});
var ToolbarButton$1 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["withStyles"])(styles, {
  name: 'MuiPickersToolbarButton'
})(ToolbarButton);

var useStyles$1 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
    toolbar: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 100,
      backgroundColor: theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background["default"]
    },
    toolbarLandscape: {
      height: 'auto',
      maxWidth: 150,
      padding: 8,
      justifyContent: 'flex-start'
    }
  };
}, {
  name: 'MuiPickersToolbar'
});

var PickerToolbar = function PickerToolbar(_ref) {
  var children = _ref.children,
      isLandscape = _ref.isLandscape,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, ["children", "isLandscape", "className"]);

  var classes = useStyles$1();
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.toolbar, className, isLandscape && classes.toolbarLandscape)
  }, other), children);
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var PureDateInput = function PureDateInput(_ref) {
  var inputValue = _ref.inputValue,
      inputVariant = _ref.inputVariant,
      validationError = _ref.validationError,
      InputProps = _ref.InputProps,
      onOpen = _ref.openPicker,
      _ref$TextFieldCompone = _ref.TextFieldComponent,
      TextFieldComponent = _ref$TextFieldCompone === void 0 ? _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"] : _ref$TextFieldCompone,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, ["inputValue", "inputVariant", "validationError", "InputProps", "openPicker", "TextFieldComponent"]);

  var PureDateInputProps = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return _objectSpread({}, InputProps, {
      readOnly: true
    });
  }, [InputProps]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextFieldComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
    error: Boolean(validationError),
    helperText: validationError
  }, other, {
    // do not overridable
    onClick: onOpen,
    value: inputValue,
    variant: inputVariant,
    InputProps: PureDateInputProps,
    onKeyDown: function onKeyDown(e) {
      // space
      if (e.keyCode === 32) {
        e.stopPropagation();
        onOpen();
      }
    }
  }));
};
PureDateInput.displayName = 'PureDateInput';

var KeyboardIcon = function KeyboardIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_16__["default"], props, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }));
};

var getDisplayDate = function getDisplayDate(value, format, utils, isEmpty, _ref) {
  var invalidLabel = _ref.invalidLabel,
      emptyLabel = _ref.emptyLabel,
      labelFunc = _ref.labelFunc;
  var date = utils.date(value);

  if (labelFunc) {
    return labelFunc(isEmpty ? null : date, invalidLabel);
  }

  if (isEmpty) {
    return emptyLabel || '';
  }

  return utils.isValid(date) ? utils.format(date, format) : invalidLabel;
};

var getComparisonMaxDate = function getComparisonMaxDate(utils, strictCompareDates, date) {
  if (strictCompareDates) {
    return date;
  }

  return utils.endOfDay(date);
};

var getComparisonMinDate = function getComparisonMinDate(utils, strictCompareDates, date) {
  if (strictCompareDates) {
    return date;
  }

  return utils.startOfDay(date);
};

var validate = function validate(value, utils, _ref2) {
  var maxDate = _ref2.maxDate,
      minDate = _ref2.minDate,
      disablePast = _ref2.disablePast,
      disableFuture = _ref2.disableFuture,
      maxDateMessage = _ref2.maxDateMessage,
      minDateMessage = _ref2.minDateMessage,
      invalidDateMessage = _ref2.invalidDateMessage,
      strictCompareDates = _ref2.strictCompareDates;
  var parsedValue = utils.date(value); // if null - do not show error

  if (value === null) {
    return '';
  }

  if (!utils.isValid(value)) {
    return invalidDateMessage;
  }

  if (maxDate && utils.isAfter(parsedValue, getComparisonMaxDate(utils, !!strictCompareDates, utils.date(maxDate)))) {
    return maxDateMessage;
  }

  if (disableFuture && utils.isAfter(parsedValue, getComparisonMaxDate(utils, !!strictCompareDates, utils.date()))) {
    return maxDateMessage;
  }

  if (minDate && utils.isBefore(parsedValue, getComparisonMinDate(utils, !!strictCompareDates, utils.date(minDate)))) {
    return minDateMessage;
  }

  if (disablePast && utils.isBefore(parsedValue, getComparisonMinDate(utils, !!strictCompareDates, utils.date()))) {
    return minDateMessage;
  }

  return '';
};
function pick12hOr24hFormat(userFormat) {
  var ampm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var formats = arguments.length > 2 ? arguments[2] : undefined;

  if (userFormat) {
    return userFormat;
  }

  return ampm ? formats['12h'] : formats['24h'];
}
function makeMaskFromFormat(format, numberMaskChar) {
  return format.replace(/[a-z]/gi, numberMaskChar);
}
var maskedDateFormatter = function maskedDateFormatter(mask, numberMaskChar, refuse) {
  return function (value) {
    var result = '';
    var parsed = value.replace(refuse, '');

    if (parsed === '') {
      return parsed;
    }

    var i = 0;
    var n = 0;

    while (i < mask.length) {
      var maskChar = mask[i];

      if (maskChar === numberMaskChar && n < parsed.length) {
        var parsedChar = parsed[n];
        result += parsedChar;
        n += 1;
      } else {
        result += maskChar;
      }

      i += 1;
    }

    return result;
  };
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var KeyboardDateInput = function KeyboardDateInput(_ref) {
  var inputValue = _ref.inputValue,
      inputVariant = _ref.inputVariant,
      validationError = _ref.validationError,
      KeyboardButtonProps = _ref.KeyboardButtonProps,
      InputAdornmentProps = _ref.InputAdornmentProps,
      onOpen = _ref.openPicker,
      onChange = _ref.onChange,
      InputProps = _ref.InputProps,
      mask = _ref.mask,
      _ref$maskChar = _ref.maskChar,
      maskChar = _ref$maskChar === void 0 ? '_' : _ref$maskChar,
      _ref$refuse = _ref.refuse,
      refuse = _ref$refuse === void 0 ? /[^\d]+/gi : _ref$refuse,
      format = _ref.format,
      keyboardIcon = _ref.keyboardIcon,
      disabled = _ref.disabled,
      rifmFormatter = _ref.rifmFormatter,
      _ref$TextFieldCompone = _ref.TextFieldComponent,
      TextFieldComponent = _ref$TextFieldCompone === void 0 ? _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"] : _ref$TextFieldCompone,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, ["inputValue", "inputVariant", "validationError", "KeyboardButtonProps", "InputAdornmentProps", "openPicker", "onChange", "InputProps", "mask", "maskChar", "refuse", "format", "keyboardIcon", "disabled", "rifmFormatter", "TextFieldComponent"]);

  var inputMask = mask || makeMaskFromFormat(format, maskChar); // prettier-ignore

  var formatter = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return maskedDateFormatter(inputMask, maskChar, refuse);
  }, [inputMask, maskChar, refuse]);
  var position = InputAdornmentProps && InputAdornmentProps.position ? InputAdornmentProps.position : 'end';

  var handleChange = function handleChange(text) {
    var finalString = text === '' || text === inputMask ? null : text;
    onChange(finalString);
  };

  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(rifm__WEBPACK_IMPORTED_MODULE_15__["Rifm"], {
    key: inputMask,
    value: inputValue,
    onChange: handleChange,
    refuse: refuse,
    format: rifmFormatter || formatter
  }, function (_ref2) {
    var onChange = _ref2.onChange,
        value = _ref2.value;
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextFieldComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
      disabled: disabled,
      error: Boolean(validationError),
      helperText: validationError
    }, other, {
      value: value,
      onChange: onChange,
      variant: inputVariant,
      InputProps: _objectSpread$1({}, InputProps, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(position, "Adornment"), Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
        position: position
      }, InputAdornmentProps), Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
        disabled: disabled
      }, KeyboardButtonProps, {
        onClick: onOpen
      }), keyboardIcon))))
    }));
  });
};
KeyboardDateInput.defaultProps = {
  keyboardIcon: Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(KeyboardIcon, null)
};

function useOpenState(_ref) {
  var open = _ref.open,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose;
  var setIsOpenState = null;

  if (open === undefined || open === null) {
    // The component is uncontrolled, so we need to give it its own state.
    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

    var _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_17__["default"])(_useState, 2);

    open = _useState2[0];
    setIsOpenState = _useState2[1];
  } // prettier-ignore


  var setIsOpen = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (newIsOpen) {
    setIsOpenState && setIsOpenState(newIsOpen);
    return newIsOpen ? onOpen && onOpen() : onClose && onClose();
  }, [onOpen, onClose, setIsOpenState]);
  return {
    isOpen: open,
    setIsOpen: setIsOpen
  };
}

var useValueToDate = function useValueToDate(utils, _ref) {
  var value = _ref.value,
      initialFocusedDate = _ref.initialFocusedDate;
  var nowRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(utils.date());
  var date = utils.date(value || initialFocusedDate || nowRef.current);
  return date && utils.isValid(date) ? date : nowRef.current;
};

function useDateValues(props, options) {
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["u"])();
  var date = useValueToDate(utils, props);
  var format = props.format || options.getDefaultFormat();
  return {
    date: date,
    format: format
  };
}

function usePickerState(props, options) {
  var autoOk = props.autoOk,
      disabled = props.disabled,
      readOnly = props.readOnly,
      onAccept = props.onAccept,
      _onChange = props.onChange,
      onError = props.onError,
      value = props.value,
      variant = props.variant;
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["u"])();

  var _useOpenState = useOpenState(props),
      isOpen = _useOpenState.isOpen,
      setIsOpen = _useOpenState.setIsOpen;

  var _useDateValues = useDateValues(props, options),
      date = _useDateValues.date,
      format = _useDateValues.format;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(date),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_17__["default"])(_useState, 2),
      pickerDate = _useState2[0],
      setPickerDate = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // if value was changed in closed state - treat it as accepted
    if (!isOpen && !utils.isEqual(pickerDate, date)) {
      setPickerDate(date);
    }
  }, [date, isOpen, pickerDate, utils]);
  var acceptDate = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (acceptedDate) {
    _onChange(acceptedDate);

    if (onAccept) {
      onAccept(acceptedDate);
    }

    setIsOpen(false);
  }, [onAccept, _onChange, setIsOpen]);
  var wrapperProps = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      format: format,
      open: isOpen,
      onClear: function onClear() {
        return acceptDate(null);
      },
      onAccept: function onAccept() {
        return acceptDate(pickerDate);
      },
      onSetToday: function onSetToday() {
        return setPickerDate(utils.date());
      },
      onDismiss: function onDismiss() {
        setIsOpen(false);
      }
    };
  }, [acceptDate, format, isOpen, pickerDate, setIsOpen, utils]);
  var pickerProps = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      date: pickerDate,
      onChange: function onChange(newDate) {
        var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        setPickerDate(newDate);

        if (isFinish && autoOk) {
          acceptDate(newDate);
          return;
        } // simulate autoOk, but do not close the modal


        if (variant === 'inline' || variant === 'static') {
          _onChange(newDate);

          onAccept && onAccept(newDate);
        }
      }
    };
  }, [acceptDate, autoOk, onAccept, _onChange, pickerDate, variant]);
  var validationError = validate(value, utils, props);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (onError) {
      onError(validationError, value);
    }
  }, [onError, validationError, value]);
  var inputValue = getDisplayDate(date, format, utils, value === null, props);
  var inputProps = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      inputValue: inputValue,
      validationError: validationError,
      openPicker: function openPicker() {
        return !readOnly && !disabled && setIsOpen(true);
      }
    };
  }, [disabled, inputValue, readOnly, setIsOpen, validationError]);
  var pickerState = {
    pickerProps: pickerProps,
    inputProps: inputProps,
    wrapperProps: wrapperProps
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(pickerState);
  return pickerState;
}

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(source, true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function parseInputString(value, utils, format) {
  try {
    return utils.parse(value, format);
  } catch (_unused) {
    return null;
  }
}

function useKeyboardPickerState(props, options) {
  var _props$format = props.format,
      format = _props$format === void 0 ? options.getDefaultFormat() : _props$format,
      inputValue = props.inputValue,
      _onChange = props.onChange,
      value = props.value;
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["u"])();
  var displayDate = getDisplayDate(value, format, utils, value === null, props);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(displayDate),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_17__["default"])(_useState, 2),
      innerInputValue = _useState2[0],
      setInnerInputValue = _useState2[1];

  var dateValue = inputValue ? parseInputString(inputValue, utils, format) : value;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (value === null || utils.isValid(value)) {
      setInnerInputValue(displayDate);
    }
  }, [displayDate, setInnerInputValue, utils, value]);
  var handleKeyboardChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (date) {
    _onChange(date, date === null ? null : utils.format(date, format));
  }, [format, _onChange, utils]);

  var _usePickerState = usePickerState( // Extend props interface
  _objectSpread$2({}, props, {
    value: dateValue,
    onChange: handleKeyboardChange
  }), options),
      innerInputProps = _usePickerState.inputProps,
      wrapperProps = _usePickerState.wrapperProps,
      pickerProps = _usePickerState.pickerProps;

  var inputProps = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return _objectSpread$2({}, innerInputProps, {
      // reuse validation and open/close logic
      format: wrapperProps.format,
      inputValue: inputValue || innerInputValue,
      onChange: function onChange(value) {
        setInnerInputValue(value || '');
        var date = value === null ? null : utils.parse(value, wrapperProps.format);

        _onChange(date, value);
      }
    });
  }, [innerInputProps, innerInputValue, inputValue, _onChange, utils, wrapperProps.format]);
  return {
    inputProps: inputProps,
    wrapperProps: wrapperProps,
    pickerProps: pickerProps
  };
}

function makePickerWithState(_ref) {
  var Input = _ref.Input,
      useState = _ref.useState,
      useOptions = _ref.useOptions,
      getCustomProps = _ref.getCustomProps,
      DefaultToolbarComponent = _ref.DefaultToolbarComponent;

  function PickerWithState(props) {
    var allowKeyboardControl = props.allowKeyboardControl,
        ampm = props.ampm,
        animateYearScrolling = props.animateYearScrolling,
        autoOk = props.autoOk,
        dateRangeIcon = props.dateRangeIcon,
        disableFuture = props.disableFuture,
        disablePast = props.disablePast,
        disableToolbar = props.disableToolbar,
        emptyLabel = props.emptyLabel,
        format = props.format,
        forwardedRef = props.forwardedRef,
        hideTabs = props.hideTabs,
        initialFocusedDate = props.initialFocusedDate,
        invalidDateMessage = props.invalidDateMessage,
        invalidLabel = props.invalidLabel,
        labelFunc = props.labelFunc,
        leftArrowButtonProps = props.leftArrowButtonProps,
        leftArrowIcon = props.leftArrowIcon,
        loadingIndicator = props.loadingIndicator,
        maxDate = props.maxDate,
        maxDateMessage = props.maxDateMessage,
        minDate = props.minDate,
        minDateMessage = props.minDateMessage,
        minutesStep = props.minutesStep,
        onAccept = props.onAccept,
        onChange = props.onChange,
        onClose = props.onClose,
        onMonthChange = props.onMonthChange,
        onOpen = props.onOpen,
        onYearChange = props.onYearChange,
        openTo = props.openTo,
        orientation = props.orientation,
        renderDay = props.renderDay,
        rightArrowButtonProps = props.rightArrowButtonProps,
        rightArrowIcon = props.rightArrowIcon,
        shouldDisableDate = props.shouldDisableDate,
        strictCompareDates = props.strictCompareDates,
        timeIcon = props.timeIcon,
        _props$ToolbarCompone = props.ToolbarComponent,
        ToolbarComponent = _props$ToolbarCompone === void 0 ? DefaultToolbarComponent : _props$ToolbarCompone,
        value = props.value,
        variant = props.variant,
        views = props.views,
        other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__["default"])(props, ["allowKeyboardControl", "ampm", "animateYearScrolling", "autoOk", "dateRangeIcon", "disableFuture", "disablePast", "disableToolbar", "emptyLabel", "format", "forwardedRef", "hideTabs", "initialFocusedDate", "invalidDateMessage", "invalidLabel", "labelFunc", "leftArrowButtonProps", "leftArrowIcon", "loadingIndicator", "maxDate", "maxDateMessage", "minDate", "minDateMessage", "minutesStep", "onAccept", "onChange", "onClose", "onMonthChange", "onOpen", "onYearChange", "openTo", "orientation", "renderDay", "rightArrowButtonProps", "rightArrowIcon", "shouldDisableDate", "strictCompareDates", "timeIcon", "ToolbarComponent", "value", "variant", "views"]);

    var injectedProps = getCustomProps ? getCustomProps(props) : {};
    var options = useOptions(props);

    var _useState = useState(props, options),
        pickerProps = _useState.pickerProps,
        inputProps = _useState.inputProps,
        wrapperProps = _useState.wrapperProps;

    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_11__["W"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
      variant: variant,
      InputComponent: Input,
      DateInputProps: inputProps
    }, injectedProps, wrapperProps, other), Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_Picker_0912c402_js__WEBPACK_IMPORTED_MODULE_18__["P"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, pickerProps, {
      allowKeyboardControl: allowKeyboardControl,
      ampm: ampm,
      animateYearScrolling: animateYearScrolling,
      dateRangeIcon: dateRangeIcon,
      disableFuture: disableFuture,
      disablePast: disablePast,
      disableToolbar: disableToolbar,
      hideTabs: hideTabs,
      leftArrowButtonProps: leftArrowButtonProps,
      leftArrowIcon: leftArrowIcon,
      loadingIndicator: loadingIndicator,
      maxDate: maxDate,
      minDate: minDate,
      minutesStep: minutesStep,
      onMonthChange: onMonthChange,
      onYearChange: onYearChange,
      openTo: openTo,
      orientation: orientation,
      renderDay: renderDay,
      rightArrowButtonProps: rightArrowButtonProps,
      rightArrowIcon: rightArrowIcon,
      shouldDisableDate: shouldDisableDate,
      strictCompareDates: strictCompareDates,
      timeIcon: timeIcon,
      ToolbarComponent: ToolbarComponent,
      views: views
    })));
  }

  return PickerWithState;
}


//# sourceMappingURL=makePickerWithState-fee39765.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js ***!
  \********************************************************************/
/*! exports provided: M, a, u */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return MuiPickersUtilsProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MuiPickersContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return useUtils; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var MuiPickersContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
var MuiPickersUtilsProvider = function MuiPickersUtilsProvider(_ref) {
  var Utils = _ref.utils,
      children = _ref.children,
      locale = _ref.locale,
      libInstance = _ref.libInstance;
  var utils = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return new Utils({
      locale: locale,
      instance: libInstance
    });
  }, [Utils, libInstance, locale]);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MuiPickersContext.Provider, {
    value: utils,
    children: children
  });
};
 true ? MuiPickersUtilsProvider.propTypes = {
  utils: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  locale: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["object"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]]),
  children: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["element"].isRequired, Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_1__["element"].isRequired)]).isRequired
} : undefined;

var checkUtils = function checkUtils(utils) {
  if (!utils) {
    // tslint:disable-next-line
    throw new Error('Can not find utils in context. You either a) forgot to wrap your component tree in MuiPickersUtilsProvider; or b) mixed named and direct file imports.  Recommendation: use named imports from the module index.');
  }
};
function useUtils() {
  var utils = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(MuiPickersContext);
  checkUtils(utils);
  return utils;
}


//# sourceMappingURL=useUtils-cfb96ac9.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/dom-helpers/esm/addClass.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/dom-helpers/esm/addClass.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addClass; });
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ "./node_modules/@material-ui/pickers/node_modules/dom-helpers/esm/hasClass.js");

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!Object(_hasClass__WEBPACK_IMPORTED_MODULE_0__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/dom-helpers/esm/hasClass.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/dom-helpers/esm/hasClass.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hasClass; });
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/dom-helpers/esm/removeClass.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/dom-helpers/esm/removeClass.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeClass; });
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    ;
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/CSSTransition.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/CSSTransition.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/addClass */ "./node_modules/@material-ui/pickers/node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/removeClass */ "./node_modules/@material-ui/pickers/node_modules/dom-helpers/esm/removeClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Transition */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/utils/PropTypes.js");










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__["default"])(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__["default"])(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
 * using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (node, appearing) {
      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    if (type === 'appear' && phase === 'done') {
      className += " " + this.getClassNames('enter').doneClassName;
    } // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    this.appliedClasses[type][phase] = className;

    _addClass(node, className);
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["classNames"]);

    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Transition__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Transition__WEBPACK_IMPORTED_MODULE_7__["default"].propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided and it
   * will be suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-appear`, `fade-appear-active`,
   * `fade-appear-done`, `fade-enter`, `fade-enter-active`, `fade-enter-done`,
   * `fade-exit`, `fade-exit-active`, and `fade-exit-done`.
   *
   * **Note**: `fade-appear-done` and `fade-enter-done` will _both_ be applied.
   * This allows you to define different behavior for when appearing is done and
   * when regular entering is done, using selectors like
   * `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply an
   * epic entrance animation when element first appears in the DOM using
   * [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   * simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__["classNamesShape"],

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
}) : undefined;
/* harmony default export */ __webpack_exports__["default"] = (CSSTransition);

/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/ReplaceTransition.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/ReplaceTransition.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/TransitionGroup.js");






/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;
    var child = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler](react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in"]);

    var _React$Children$toArr = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroup__WEBPACK_IMPORTED_MODULE_5__["default"], props, inProp ? react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

ReplaceTransition.propTypes =  true ? {
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  children: function children(props, propName) {
    if (react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (ReplaceTransition);

/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/SwitchTransition.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/SwitchTransition.js ***!
  \*******************************************************************************************************/
/*! exports provided: modes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modes", function() { return modes; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Transition */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/TransitionGroupContext.js");


var _leaveRenders, _enterRenders;






function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(oldChildren) && react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }

  return true;
}
/**
 * Enum of modes for SwitchTransition component
 * @enum { string }
 */


var modes = {
  out: 'out-in',
  in: 'in-out'
};

var callHook = function callHook(element, name, cb) {
  return function () {
    var _element$props;

    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};

var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
  var current = _ref.current,
      changeState = _ref.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"], null);
    })
  });
}, _leaveRenders[modes.in] = function (_ref2) {
  var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
  return [current, react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
  var children = _ref3.children,
      changeState = _ref3.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function (_ref4) {
  var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
  return [react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true
  })];
}, _enterRenders);
/**
 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
 * You can use it when you want to control the render between state transitions.
 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
 *
 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child
 *
 * ```jsx
 *
 * function App() {
 *  const [state, setState] = useState(false);
 *  return (
 *    <SwitchTransition>
 *      <FadeTransition key={state ? "Goodbye, world!" : "Hello, world!"}
 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
 *        classNames='fade' >
 *        <button onClick={() => setState(state => !state)}>
 *          {state ? "Goodbye, world!" : "Hello, world!"}
 *        </button>
 *      </FadeTransition>
 *    </SwitchTransition>
 *  )
 * }
 * ```
 */

var SwitchTransition =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"],
      current: null
    };
    _this.appeared = false;

    _this.changeState = function (status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }

      _this.setState({
        status: status,
        current: current
      });
    };

    return _this;
  }

  var _proto = SwitchTransition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }

    if (state.status === _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"] && props.mode === modes.in) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]
      };
    }

    return {
      current: react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(props.children, {
        in: true
      })
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        mode = _this$props.mode,
        _this$state = this.state,
        status = _this$state.status,
        current = _this$state.current;
    var data = {
      children: children,
      current: current,
      changeState: this.changeState,
      status: status
    };
    var component;

    switch (status) {
      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]:
        component = enterRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]:
        component = leaveRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"]:
        component = current;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };

  return SwitchTransition;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

SwitchTransition.propTypes =  true ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out: New element transitions in first, then when complete, the current element transitions out.`
   *
   * @type {'out-in'|'in-out'}
   */
  mode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([modes.in, modes.out]),

  /**
   * Any `Transition` or `CSSTransition` component
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired])
} : undefined;
SwitchTransition.defaultProps = {
  mode: modes.out
};
/* harmony default export */ __webpack_exports__["default"] = (SwitchTransition);

/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/Transition.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/Transition.js ***!
  \*************************************************************************************************/
/*! exports provided: UNMOUNTED, EXITED, ENTERING, ENTERED, EXITING, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNMOUNTED", function() { return UNMOUNTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITED", function() { return EXITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERING", function() { return ENTERING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERED", function() { return ENTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITING", function() { return EXITING; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/config.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/TransitionGroupContext.js");








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();
      var node = react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      // allows for nested Transitions
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
        value: null
      }, children(status, childProps));
    }

    var child = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.only(children);
    return (// allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
        value: null
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(child, childProps))
    );
  };

  return Transition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"];
Transition.propTypes =  true ? {
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Normally a component is not transitioned if it is shown when the
   * `<Transition>` component mounts. If you want to transition on the first
   * mount set `appear` to `true`, and the component will transition in as soon
   * as the `<Transition>` mounts.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__["timeoutsShape"];
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func // Name the function so it is clearer in the documentation

} : undefined;

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;
/* harmony default export */ __webpack_exports__["default"] = (Transition);

/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/TransitionGroup.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/TransitionGroup.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/TransitionGroupContext.js");
/* harmony import */ var _utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/utils/ChildMapping.js");









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getInitialChildMapping"])(nextProps, handleExited) : Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getNextChildMapping"])(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getChildMapping"])(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
        value: contextValue
      }, children);
    }

    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
      value: contextValue
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
} : undefined;
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (TransitionGroup);

/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/config.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/config.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  disabled: false
});

/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/index.js ***!
  \********************************************************************************************/
/*! exports provided: CSSTransition, ReplaceTransition, SwitchTransition, TransitionGroup, Transition, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSSTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSTransition */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSTransition", function() { return _CSSTransition__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReplaceTransition */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/ReplaceTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaceTransition", function() { return _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchTransition */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/SwitchTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchTransition", function() { return _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionGroup", function() { return _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Transition */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/Transition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return _Transition__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _config__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/utils/ChildMapping.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/utils/ChildMapping.js ***!
  \*********************************************************************************************************/
/*! exports provided: getChildMapping, mergeChildMappings, getInitialChildMapping, getNextChildMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildMapping", function() { return getChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeChildMappings", function() { return mergeChildMappings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialChildMapping", function() { return getInitialChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextChildMapping", function() { return getNextChildMapping; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        in: false
      });
    } else if (hasNext && hasPrev && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/utils/PropTypes.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/utils/PropTypes.js ***!
  \******************************************************************************************************/
/*! exports provided: timeoutsShape, classNamesShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeoutsShape", function() { return timeoutsShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNamesShape", function() { return classNamesShape; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  appear: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
}).isRequired]) : undefined;
var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  active: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
})]) : undefined;

/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/prop-types/checkPropTypes.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/prop-types/checkPropTypes.js ***!
  \*************************************************************************************************************************/
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
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/prop-types/lib/ReactPropTypesSecret.js");
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

/***/ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/prop-types/factoryWithTypeCheckers.js":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \**********************************************************************************************************************************/
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

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/prop-types/checkPropTypes.js");

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

/***/ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/prop-types/index.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/prop-types/index.js ***!
  \****************************************************************************************************************/
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
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \***********************************************************************************************************************************/
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

/***/ "./node_modules/convert-css-length/dist/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/convert-css-length/dist/index.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var e=function(e){return parseFloat(e)};/* harmony default export */ __webpack_exports__["default"] = (function(r){return null==r&&(r=r),function(n,t,i,f){null==i&&(i=r),null==f&&(f=i);var l=String(n).match(/[\d.\-\+]*\s*(.*)/)[1]||"";if(l===t)return n;var u=e(n);if("px"!==l)if("em"===l)u=e(n)*e(i);else if("rem"===l)u=e(n)*e(r);else{if("ex"!==l)return n;u=e(n)*e(i)*2}var a=u;if("px"!==t)if("em"===t)a=u/e(f);else if("rem"===t)a=u/e(r);else{if("ex"!==t)return n;a=u/e(f)/2}return parseFloat(a.toFixed(5))+t}});
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/normalize-scroll-left/esm/main.js":
/*!********************************************************!*\
  !*** ./node_modules/normalize-scroll-left/esm/main.js ***!
  \********************************************************/
/*! exports provided: _setScrollType, detectScrollType, getNormalizedScrollLeft, setNormalizedScrollLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_setScrollType", function() { return _setScrollType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectScrollType", function() { return detectScrollType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNormalizedScrollLeft", function() { return getNormalizedScrollLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNormalizedScrollLeft", function() { return setNormalizedScrollLeft; });
// Based on https://github.com/react-bootstrap/dom-helpers/blob/master/src/util/inDOM.js
var inDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var cachedType;
function _setScrollType(type) {
    cachedType = type;
}
// Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
function detectScrollType() {
    if (cachedType) {
        return cachedType;
    }
    if (!inDOM || !window.document.body) {
        return 'indeterminate';
    }
    var dummy = window.document.createElement('div');
    dummy.appendChild(document.createTextNode('ABCD'));
    dummy.dir = 'rtl';
    dummy.style.fontSize = '14px';
    dummy.style.width = '4px';
    dummy.style.height = '1px';
    dummy.style.position = 'absolute';
    dummy.style.top = '-1000px';
    dummy.style.overflow = 'scroll';
    document.body.appendChild(dummy);
    cachedType = 'reverse';
    if (dummy.scrollLeft > 0) {
        cachedType = 'default';
    }
    else {
        dummy.scrollLeft = 1;
        if (dummy.scrollLeft === 0) {
            cachedType = 'negative';
        }
    }
    document.body.removeChild(dummy);
    return cachedType;
}
// Based on https://stackoverflow.com/a/24394376
function getNormalizedScrollLeft(element, direction) {
    var scrollLeft = element.scrollLeft;
    // Perform the calculations only when direction is rtl to avoid messing up the ltr bahavior
    if (direction !== 'rtl') {
        return scrollLeft;
    }
    var type = detectScrollType();
    if (type === 'indeterminate') {
        return Number.NaN;
    }
    switch (type) {
        case 'negative':
            return element.scrollWidth - element.clientWidth + scrollLeft;
        case 'reverse':
            return element.scrollWidth - element.clientWidth - scrollLeft;
    }
    return scrollLeft;
}
function setNormalizedScrollLeft(element, scrollLeft, direction) {
    // Perform the calculations only when direction is rtl to avoid messing up the ltr bahavior
    if (direction !== 'rtl') {
        element.scrollLeft = scrollLeft;
        return;
    }
    var type = detectScrollType();
    if (type === 'indeterminate') {
        return;
    }
    switch (type) {
        case 'negative':
            element.scrollLeft = element.clientWidth - element.scrollWidth + scrollLeft;
            break;
        case 'reverse':
            element.scrollLeft = element.scrollWidth - element.clientWidth - scrollLeft;
            break;
        default:
            element.scrollLeft = scrollLeft;
            break;
    }
}


/***/ }),

/***/ "./node_modules/rifm/dist/rifm.esm.js":
/*!********************************************!*\
  !*** ./node_modules/rifm/dist/rifm.esm.js ***!
  \********************************************/
/*! exports provided: Rifm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rifm", function() { return Rifm; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Rifm =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Rifm, _React$Component);

  function Rifm(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this._state = null;
    _this._del = false;

    _this._handleChange = function (evt) {
      if (true) {
        if (evt.target.type === 'number') {
          console.error('Rifm does not support input type=number, use type=tel instead.');
          return;
        }
      } // FUTURE: use evt.nativeEvent.inputType for del event, see comments at onkeydown


      var stateValue = _this.state.value;
      var value = evt.target.value;
      var input = evt.target;
      var op = value.length > stateValue.length;
      var del = _this._del;

      var noOp = stateValue === _this.props.format(value);

      _this.setState({
        value: value,
        local: true
      }, function () {
        var selectionStart = input.selectionStart;
        var refuse = _this.props.refuse || /[^\d]+/g;
        var before = value.substr(0, selectionStart).replace(refuse, '');
        _this._state = {
          input: input,
          before: before,
          op: op,
          di: del && noOp,
          del: del
        };

        if (_this.props.replace && _this.props.replace(stateValue) && op && !noOp) {
          var start = -1;

          for (var i = 0; i !== before.length; ++i) {
            start = Math.max(start, value.toLowerCase().indexOf(before[i].toLowerCase(), start + 1));
          }

          var c = value.substr(start + 1).replace(refuse, '')[0];
          start = value.indexOf(c, start + 1);
          value = "" + value.substr(0, start) + value.substr(start + 1);
        }

        var fv = _this.props.format(value);

        if (stateValue === fv) {
          _this.setState({
            value: value
          });
        } else {
          _this.props.onChange(fv);
        }
      });
    };

    _this._hKD = function (evt) {
      if (evt.code === 'Delete') {
        _this._del = true;
      }
    };

    _this._hKU = function (evt) {
      if (evt.code === 'Delete') {
        _this._del = false;
      }
    };

    _this.state = {
      value: props.value,
      local: true
    };
    return _this;
  }

  Rifm.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    return {
      value: state.local ? state.value : props.value,
      local: false
    };
  };

  var _proto = Rifm.prototype;

  _proto.render = function render() {
    var _handleChange = this._handleChange,
        value = this.state.value,
        children = this.props.children;
    return children({
      value: value,
      onChange: _handleChange
    });
  } // delete when  https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/inputType will be supported by all major browsers
  ;

  _proto.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener('keydown', this._hKD);
    document.removeEventListener('keyup', this._hKU);
  } // delete when  https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/inputType will be supported by all major browsers
  ;

  _proto.componentDidMount = function componentDidMount() {
    document.addEventListener('keydown', this._hKD);
    document.addEventListener('keyup', this._hKU);
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    var _state = this._state;

    if (_state) {
      var value = this.state.value;
      var start = -1;

      for (var i = 0; i !== _state.before.length; ++i) {
        start = Math.max(start, value.toLowerCase().indexOf(_state.before[i].toLowerCase(), start + 1));
      } // format usually looks better without this


      if (this.props.replace && (_state.op || _state.del && !_state.di)) {
        while (value[start + 1] && (this.props.refuse || /[^\d]+/).test(value[start + 1])) {
          start += 1;
        }
      }

      _state.input.selectionStart = _state.input.selectionEnd = start + 1 + (_state.di ? 1 : 0);
    }

    this._state = null;
  };

  return Rifm;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvcGlja2Vycy9lc20vQ2FsZW5kYXItMTFhZTYxZjYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL2VzbS9DbG9jay0xM2M4ZjMzZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvZXNtL0Nsb2NrVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvZXNtL0RhdGVQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL2VzbS9EYXRlVGltZVBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvZXNtL0RheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvZXNtL1BpY2tlci0wOTEyYzQwMi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvZXNtL1RpbWVQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL2VzbS9UaW1lUGlja2VyVG9vbGJhci0wNTY0NmY3Ni5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvZXNtL1dyYXBwZXItMjQxOTY2ZDcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvZXNtL21ha2VQaWNrZXJXaXRoU3RhdGUtZmVlMzk3NjUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL2VzbS91c2VVdGlscy1jZmI5NmFjOS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9hZGRDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9oYXNDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9yZW1vdmVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL0NTU1RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9SZXBsYWNlVHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL1N3aXRjaFRyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9UcmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvcGlja2Vycy9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vVHJhbnNpdGlvbkdyb3VwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvcGlja2Vycy9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vVHJhbnNpdGlvbkdyb3VwQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvcGlja2Vycy9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vdXRpbHMvQ2hpbGRNYXBwaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvcGlja2Vycy9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vdXRpbHMvUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvcGlja2Vycy9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvcGlja2Vycy9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbnZlcnQtY3NzLWxlbmd0aC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLXNjcm9sbC1sZWZ0L2VzbS9tYWluLmpzIiwid2VicGFjazov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QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw4REFBYTtBQUNuQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwyREFBYTtBQUM1QjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQiwyREFBYSxDQUFDLGdEQUFHO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUEsZUFBZSwyREFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBLEVBQUUsdUZBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztB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OztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix1R0FBNkI7O0FBRTdDLFdBQVcsNENBQUssZUFBZSxtREFBVSxFQUFFLGtGQUFRLEdBQUc7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQyxDQUFDLDRDQUFLOztBQUVQO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixLQUFxQyxHQUFHLGtGQUFRLEdBQUcsRUFBRSxtREFBVTtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsS0FBcUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLDRCQUE0QjtBQUNqRDtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxDQUFDLCtDQUFTOztBQUVLIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZlwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKCEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi4vLi4vaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiLi9ub25JdGVyYWJsZVJlc3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdF9fZGVmYXVsdCwgeyB1c2VDYWxsYmFjaywgY3JlYXRlRWxlbWVudCwgY2xvbmVFbGVtZW50LCBGcmFnbWVudCwgQ29tcG9uZW50LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBub2RlLCBib29sLCBmdW5jIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1IGFzIHVzZVV0aWxzIH0gZnJvbSAnLi91c2VVdGlscy1jZmI5NmFjOS5qcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSwgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBhIGFzIGFycmF5SW5jbHVkZXMsIHIgYXMgcnVuS2V5SGFuZGxlciwgViBhcyBWYXJpYW50Q29udGV4dCB9IGZyb20gJy4vV3JhcHBlci0yNDE5NjZkNy5qcyc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBTdmdJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N2Z0ljb24nO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfZ2V0UHJvdG90eXBlT2YgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YnO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cyc7XG5pbXBvcnQgRGF5IGZyb20gJy4vRGF5LmpzJztcbmltcG9ydCB7IFRyYW5zaXRpb25Hcm91cCwgQ1NTVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5cbnZhciBmaW5kQ2xvc2VzdEVuYWJsZWREYXRlID0gZnVuY3Rpb24gZmluZENsb3Nlc3RFbmFibGVkRGF0ZShfcmVmKSB7XG4gIHZhciBkYXRlID0gX3JlZi5kYXRlLFxuICAgICAgdXRpbHMgPSBfcmVmLnV0aWxzLFxuICAgICAgbWluRGF0ZSA9IF9yZWYubWluRGF0ZSxcbiAgICAgIG1heERhdGUgPSBfcmVmLm1heERhdGUsXG4gICAgICBkaXNhYmxlRnV0dXJlID0gX3JlZi5kaXNhYmxlRnV0dXJlLFxuICAgICAgZGlzYWJsZVBhc3QgPSBfcmVmLmRpc2FibGVQYXN0LFxuICAgICAgc2hvdWxkRGlzYWJsZURhdGUgPSBfcmVmLnNob3VsZERpc2FibGVEYXRlO1xuICB2YXIgdG9kYXkgPSB1dGlscy5zdGFydE9mRGF5KHV0aWxzLmRhdGUoKSk7XG5cbiAgaWYgKGRpc2FibGVQYXN0ICYmIHV0aWxzLmlzQmVmb3JlKG1pbkRhdGUsIHRvZGF5KSkge1xuICAgIG1pbkRhdGUgPSB0b2RheTtcbiAgfVxuXG4gIGlmIChkaXNhYmxlRnV0dXJlICYmIHV0aWxzLmlzQWZ0ZXIobWF4RGF0ZSwgdG9kYXkpKSB7XG4gICAgbWF4RGF0ZSA9IHRvZGF5O1xuICB9XG5cbiAgdmFyIGZvcndhcmQgPSBkYXRlO1xuICB2YXIgYmFja3dhcmQgPSBkYXRlO1xuXG4gIGlmICh1dGlscy5pc0JlZm9yZShkYXRlLCBtaW5EYXRlKSkge1xuICAgIGZvcndhcmQgPSB1dGlscy5kYXRlKG1pbkRhdGUpO1xuICAgIGJhY2t3YXJkID0gbnVsbDtcbiAgfVxuXG4gIGlmICh1dGlscy5pc0FmdGVyKGRhdGUsIG1heERhdGUpKSB7XG4gICAgaWYgKGJhY2t3YXJkKSB7XG4gICAgICBiYWNrd2FyZCA9IHV0aWxzLmRhdGUobWF4RGF0ZSk7XG4gICAgfVxuXG4gICAgZm9yd2FyZCA9IG51bGw7XG4gIH1cblxuICB3aGlsZSAoZm9yd2FyZCB8fCBiYWNrd2FyZCkge1xuICAgIGlmIChmb3J3YXJkICYmIHV0aWxzLmlzQWZ0ZXIoZm9yd2FyZCwgbWF4RGF0ZSkpIHtcbiAgICAgIGZvcndhcmQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChiYWNrd2FyZCAmJiB1dGlscy5pc0JlZm9yZShiYWNrd2FyZCwgbWluRGF0ZSkpIHtcbiAgICAgIGJhY2t3YXJkID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoZm9yd2FyZCkge1xuICAgICAgaWYgKCFzaG91bGREaXNhYmxlRGF0ZShmb3J3YXJkKSkge1xuICAgICAgICByZXR1cm4gZm9yd2FyZDtcbiAgICAgIH1cblxuICAgICAgZm9yd2FyZCA9IHV0aWxzLmFkZERheXMoZm9yd2FyZCwgMSk7XG4gICAgfVxuXG4gICAgaWYgKGJhY2t3YXJkKSB7XG4gICAgICBpZiAoIXNob3VsZERpc2FibGVEYXRlKGJhY2t3YXJkKSkge1xuICAgICAgICByZXR1cm4gYmFja3dhcmQ7XG4gICAgICB9XG5cbiAgICAgIGJhY2t3YXJkID0gdXRpbHMuYWRkRGF5cyhiYWNrd2FyZCwgLTEpO1xuICAgIH1cbiAgfSAvLyBmYWxsYmFjayB0byB0b2RheSBpZiBubyBlbmFibGVkIGRheXNcblxuXG4gIHJldHVybiB1dGlscy5kYXRlKCk7XG59O1xudmFyIGlzWWVhck9ubHlWaWV3ID0gZnVuY3Rpb24gaXNZZWFyT25seVZpZXcodmlld3MpIHtcbiAgcmV0dXJuIHZpZXdzLmxlbmd0aCA9PT0gMSAmJiB2aWV3c1swXSA9PT0gJ3llYXInO1xufTtcbnZhciBpc1llYXJBbmRNb250aFZpZXdzID0gZnVuY3Rpb24gaXNZZWFyQW5kTW9udGhWaWV3cyh2aWV3cykge1xuICByZXR1cm4gdmlld3MubGVuZ3RoID09PSAyICYmIGFycmF5SW5jbHVkZXModmlld3MsICdtb250aCcpICYmIGFycmF5SW5jbHVkZXModmlld3MsICd5ZWFyJyk7XG59O1xudmFyIGdldEZvcm1hdEJ5Vmlld3MgPSBmdW5jdGlvbiBnZXRGb3JtYXRCeVZpZXdzKHZpZXdzLCB1dGlscykge1xuICBpZiAoaXNZZWFyT25seVZpZXcodmlld3MpKSB7XG4gICAgcmV0dXJuIHV0aWxzLnllYXJGb3JtYXQ7XG4gIH1cblxuICBpZiAoaXNZZWFyQW5kTW9udGhWaWV3cyh2aWV3cykpIHtcbiAgICByZXR1cm4gdXRpbHMueWVhck1vbnRoRm9ybWF0O1xuICB9XG5cbiAgcmV0dXJuIHV0aWxzLmRhdGVGb3JtYXQ7XG59O1xuXG52YXIgRGF5V3JhcHBlciA9IGZ1bmN0aW9uIERheVdyYXBwZXIoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgZGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkLFxuICAgICAgb25TZWxlY3QgPSBfcmVmLm9uU2VsZWN0LFxuICAgICAgZGF5SW5DdXJyZW50TW9udGggPSBfcmVmLmRheUluQ3VycmVudE1vbnRoLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wiY2hpbGRyZW5cIiwgXCJ2YWx1ZVwiLCBcImRpc2FibGVkXCIsIFwib25TZWxlY3RcIiwgXCJkYXlJbkN1cnJlbnRNb250aFwiXSk7XG5cbiAgdmFyIGhhbmRsZUNsaWNrID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBvblNlbGVjdCh2YWx1ZSk7XG4gIH0sIFtvblNlbGVjdCwgdmFsdWVdKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIHJvbGU6IFwicHJlc2VudGF0aW9uXCIsXG4gICAgb25DbGljazogZGF5SW5DdXJyZW50TW9udGggJiYgIWRpc2FibGVkID8gaGFuZGxlQ2xpY2sgOiB1bmRlZmluZWQsXG4gICAgb25LZXlQcmVzczogZGF5SW5DdXJyZW50TW9udGggJiYgIWRpc2FibGVkID8gaGFuZGxlQ2xpY2sgOiB1bmRlZmluZWRcbiAgfSwgb3RoZXIpLCBjaGlsZHJlbik7XG59O1xuXG52YXIgYW5pbWF0aW9uRHVyYXRpb24gPSAzNTA7XG52YXIgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhmdW5jdGlvbiAodGhlbWUpIHtcbiAgdmFyIHNsaWRlVHJhbnNpdGlvbiA9IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgndHJhbnNmb3JtJywge1xuICAgIGR1cmF0aW9uOiBhbmltYXRpb25EdXJhdGlvbixcbiAgICBlYXNpbmc6ICdjdWJpYy1iZXppZXIoMC4zNSwgMC44LCAwLjQsIDEpJ1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0cmFuc2l0aW9uQ29udGFpbmVyOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAnJiA+IConOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBsZWZ0OiAwXG4gICAgICB9XG4gICAgfSxcbiAgICAnc2xpZGVFbnRlci1sZWZ0Jzoge1xuICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMTAwJSknXG4gICAgfSxcbiAgICAnc2xpZGVFbnRlci1yaWdodCc6IHtcbiAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC0xMDAlKSdcbiAgICB9LFxuICAgIHNsaWRlRW50ZXJBY3RpdmU6IHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwJSknLFxuICAgICAgdHJhbnNpdGlvbjogc2xpZGVUcmFuc2l0aW9uXG4gICAgfSxcbiAgICBzbGlkZUV4aXQ6IHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwJSknXG4gICAgfSxcbiAgICAnc2xpZGVFeGl0QWN0aXZlTGVmdC1sZWZ0Jzoge1xuICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTIwMCUpJyxcbiAgICAgIHRyYW5zaXRpb246IHNsaWRlVHJhbnNpdGlvblxuICAgIH0sXG4gICAgJ3NsaWRlRXhpdEFjdGl2ZUxlZnQtcmlnaHQnOiB7XG4gICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgyMDAlKScsXG4gICAgICB0cmFuc2l0aW9uOiBzbGlkZVRyYW5zaXRpb25cbiAgICB9XG4gIH07XG59LCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJzU2xpZGVUcmFuc2l0aW9uJ1xufSk7XG5cbnZhciBTbGlkZVRyYW5zaXRpb24gPSBmdW5jdGlvbiBTbGlkZVRyYW5zaXRpb24oX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgdHJhbnNLZXkgPSBfcmVmLnRyYW5zS2V5LFxuICAgICAgc2xpZGVEaXJlY3Rpb24gPSBfcmVmLnNsaWRlRGlyZWN0aW9uLFxuICAgICAgX3JlZiRjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYkY2xhc3NOYW1lID09PSB2b2lkIDAgPyBudWxsIDogX3JlZiRjbGFzc05hbWU7XG4gIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHZhciB0cmFuc2l0aW9uQ2xhc3NlcyA9IHtcbiAgICBleGl0OiBjbGFzc2VzLnNsaWRlRXhpdCxcbiAgICBlbnRlckFjdGl2ZTogY2xhc3Nlcy5zbGlkZUVudGVyQWN0aXZlLFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBlbnRlcjogY2xhc3Nlc1snc2xpZGVFbnRlci0nICsgc2xpZGVEaXJlY3Rpb25dLFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBleGl0QWN0aXZlOiBjbGFzc2VzWydzbGlkZUV4aXRBY3RpdmVMZWZ0LScgKyBzbGlkZURpcmVjdGlvbl1cbiAgfTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkdyb3VwLCB7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMudHJhbnNpdGlvbkNvbnRhaW5lciwgY2xhc3NOYW1lKSxcbiAgICBjaGlsZEZhY3Rvcnk6IGZ1bmN0aW9uIGNoaWxkRmFjdG9yeShlbGVtZW50KSB7XG4gICAgICByZXR1cm4gY2xvbmVFbGVtZW50KGVsZW1lbnQsIHtcbiAgICAgICAgY2xhc3NOYW1lczogdHJhbnNpdGlvbkNsYXNzZXNcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgY3JlYXRlRWxlbWVudChDU1NUcmFuc2l0aW9uLCB7XG4gICAgbW91bnRPbkVudGVyOiB0cnVlLFxuICAgIHVubW91bnRPbkV4aXQ6IHRydWUsXG4gICAga2V5OiB0cmFuc0tleSArIHNsaWRlRGlyZWN0aW9uLFxuICAgIHRpbWVvdXQ6IGFuaW1hdGlvbkR1cmF0aW9uLFxuICAgIGNsYXNzTmFtZXM6IHRyYW5zaXRpb25DbGFzc2VzLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICB9KSk7XG59O1xuXG52YXIgQXJyb3dMZWZ0SWNvbiA9IGZ1bmN0aW9uIEFycm93TGVmdEljb24ocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU3ZnSWNvbiwgcHJvcHMsIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xNS40MSAxNi41OUwxMC44MyAxMmw0LjU4LTQuNTlMMTQgNmwtNiA2IDYgNiAxLjQxLTEuNDF6XCJcbiAgfSksIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBkOiBcIk0wIDBoMjR2MjRIMFYwelwiXG4gIH0pKTtcbn07XG5cbnZhciBBcnJvd1JpZ2h0SWNvbiA9IGZ1bmN0aW9uIEFycm93UmlnaHRJY29uKHByb3BzKSB7XG4gIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFN2Z0ljb24sIHByb3BzLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXpcIlxuICB9KSwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIGQ6IFwiTTAgMGgyNHYyNEgwVjB6XCJcbiAgfSkpO1xufTtcblxudmFyIHVzZVN0eWxlcyQxID0gbWFrZVN0eWxlcyhmdW5jdGlvbiAodGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICBzd2l0Y2hIZWFkZXI6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygwLjUpLFxuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEpXG4gICAgfSxcbiAgICB0cmFuc2l0aW9uQ29udGFpbmVyOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgaGVpZ2h0OiAyM1xuICAgIH0sXG4gICAgaWNvbkJ1dHRvbjoge1xuICAgICAgekluZGV4OiAxLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXJcbiAgICB9LFxuICAgIGRheXNIZWFkZXI6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgbWF4SGVpZ2h0OiAxNlxuICAgIH0sXG4gICAgZGF5TGFiZWw6IHtcbiAgICAgIHdpZHRoOiAzNixcbiAgICAgIG1hcmdpbjogJzAgMnB4JyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LmhpbnRcbiAgICB9XG4gIH07XG59LCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJzQ2FsZW5kYXJIZWFkZXInXG59KTtcbnZhciBDYWxlbmRhckhlYWRlciA9IGZ1bmN0aW9uIENhbGVuZGFySGVhZGVyKF9yZWYpIHtcbiAgdmFyIGN1cnJlbnRNb250aCA9IF9yZWYuY3VycmVudE1vbnRoLFxuICAgICAgb25Nb250aENoYW5nZSA9IF9yZWYub25Nb250aENoYW5nZSxcbiAgICAgIGxlZnRBcnJvd0ljb24gPSBfcmVmLmxlZnRBcnJvd0ljb24sXG4gICAgICByaWdodEFycm93SWNvbiA9IF9yZWYucmlnaHRBcnJvd0ljb24sXG4gICAgICBsZWZ0QXJyb3dCdXR0b25Qcm9wcyA9IF9yZWYubGVmdEFycm93QnV0dG9uUHJvcHMsXG4gICAgICByaWdodEFycm93QnV0dG9uUHJvcHMgPSBfcmVmLnJpZ2h0QXJyb3dCdXR0b25Qcm9wcyxcbiAgICAgIGRpc2FibGVQcmV2TW9udGggPSBfcmVmLmRpc2FibGVQcmV2TW9udGgsXG4gICAgICBkaXNhYmxlTmV4dE1vbnRoID0gX3JlZi5kaXNhYmxlTmV4dE1vbnRoLFxuICAgICAgc2xpZGVEaXJlY3Rpb24gPSBfcmVmLnNsaWRlRGlyZWN0aW9uO1xuICB2YXIgdXRpbHMgPSB1c2VVdGlscygpO1xuICB2YXIgY2xhc3NlcyA9IHVzZVN0eWxlcyQxKCk7XG4gIHZhciB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIHZhciBydGwgPSB0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnO1xuXG4gIHZhciBzZWxlY3ROZXh0TW9udGggPSBmdW5jdGlvbiBzZWxlY3ROZXh0TW9udGgoKSB7XG4gICAgcmV0dXJuIG9uTW9udGhDaGFuZ2UodXRpbHMuZ2V0TmV4dE1vbnRoKGN1cnJlbnRNb250aCksICdsZWZ0Jyk7XG4gIH07XG5cbiAgdmFyIHNlbGVjdFByZXZpb3VzTW9udGggPSBmdW5jdGlvbiBzZWxlY3RQcmV2aW91c01vbnRoKCkge1xuICAgIHJldHVybiBvbk1vbnRoQ2hhbmdlKHV0aWxzLmdldFByZXZpb3VzTW9udGgoY3VycmVudE1vbnRoKSwgJ3JpZ2h0Jyk7XG4gIH07XG5cbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLnN3aXRjaEhlYWRlclxuICB9LCBjcmVhdGVFbGVtZW50KEljb25CdXR0b24sIF9leHRlbmRzKHt9LCBsZWZ0QXJyb3dCdXR0b25Qcm9wcywge1xuICAgIGRpc2FibGVkOiBkaXNhYmxlUHJldk1vbnRoLFxuICAgIG9uQ2xpY2s6IHNlbGVjdFByZXZpb3VzTW9udGgsXG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLmljb25CdXR0b25cbiAgfSksIHJ0bCA/IHJpZ2h0QXJyb3dJY29uIDogbGVmdEFycm93SWNvbiksIGNyZWF0ZUVsZW1lbnQoU2xpZGVUcmFuc2l0aW9uLCB7XG4gICAgc2xpZGVEaXJlY3Rpb246IHNsaWRlRGlyZWN0aW9uLFxuICAgIHRyYW5zS2V5OiBjdXJyZW50TW9udGgudG9TdHJpbmcoKSxcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMudHJhbnNpdGlvbkNvbnRhaW5lclxuICB9LCBjcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHtcbiAgICBhbGlnbjogXCJjZW50ZXJcIixcbiAgICB2YXJpYW50OiBcImJvZHkxXCJcbiAgfSwgdXRpbHMuZ2V0Q2FsZW5kYXJIZWFkZXJUZXh0KGN1cnJlbnRNb250aCkpKSwgY3JlYXRlRWxlbWVudChJY29uQnV0dG9uLCBfZXh0ZW5kcyh7fSwgcmlnaHRBcnJvd0J1dHRvblByb3BzLCB7XG4gICAgZGlzYWJsZWQ6IGRpc2FibGVOZXh0TW9udGgsXG4gICAgb25DbGljazogc2VsZWN0TmV4dE1vbnRoLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5pY29uQnV0dG9uXG4gIH0pLCBydGwgPyBsZWZ0QXJyb3dJY29uIDogcmlnaHRBcnJvd0ljb24pKSwgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLmRheXNIZWFkZXJcbiAgfSwgdXRpbHMuZ2V0V2Vla2RheXMoKS5tYXAoZnVuY3Rpb24gKGRheSwgaW5kZXgpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCB7XG4gICAgICBrZXk6IGluZGV4IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XG4gICAgICAsXG4gICAgICB2YXJpYW50OiBcImNhcHRpb25cIixcbiAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5kYXlMYWJlbFxuICAgIH0sIGRheSk7XG4gIH0pKSk7XG59O1xuQ2FsZW5kYXJIZWFkZXIuZGlzcGxheU5hbWUgPSAnQ2FsZW5kYXJIZWFkZXInO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gQ2FsZW5kYXJIZWFkZXIucHJvcFR5cGVzID0ge1xuICBsZWZ0QXJyb3dJY29uOiBub2RlLFxuICByaWdodEFycm93SWNvbjogbm9kZSxcbiAgZGlzYWJsZVByZXZNb250aDogYm9vbCxcbiAgZGlzYWJsZU5leHRNb250aDogYm9vbFxufSA6IHZvaWQgMDtcbkNhbGVuZGFySGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGVmdEFycm93SWNvbjogY3JlYXRlRWxlbWVudChBcnJvd0xlZnRJY29uLCBudWxsKSxcbiAgcmlnaHRBcnJvd0ljb246IGNyZWF0ZUVsZW1lbnQoQXJyb3dSaWdodEljb24sIG51bGwpLFxuICBkaXNhYmxlUHJldk1vbnRoOiBmYWxzZSxcbiAgZGlzYWJsZU5leHRNb250aDogZmFsc2Vcbn07XG5cbnZhciB3aXRoVXRpbHMgPSBmdW5jdGlvbiB3aXRoVXRpbHMoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoQ29tcG9uZW50KSB7XG4gICAgdmFyIFdpdGhVdGlscyA9IGZ1bmN0aW9uIFdpdGhVdGlscyhwcm9wcykge1xuICAgICAgdmFyIHV0aWxzID0gdXNlVXRpbHMoKTtcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgICB1dGlsczogdXRpbHNcbiAgICAgIH0sIHByb3BzKSk7XG4gICAgfTtcblxuICAgIFdpdGhVdGlscy5kaXNwbGF5TmFtZSA9IFwiV2l0aFV0aWxzKFwiLmNvbmNhdChDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUsIFwiKVwiKTtcbiAgICByZXR1cm4gV2l0aFV0aWxzO1xuICB9O1xufTtcblxudmFyIEtleURvd25MaXN0ZW5lciA9IGZ1bmN0aW9uIEtleURvd25MaXN0ZW5lcihfcmVmKSB7XG4gIHZhciBvbktleURvd24gPSBfcmVmLm9uS2V5RG93bjtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93bik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlEb3duKTtcbiAgICB9O1xuICB9LCBbb25LZXlEb3duXSk7XG4gIHJldHVybiBudWxsO1xufTtcblxudmFyIENhbGVuZGFyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDYWxlbmRhciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ2FsZW5kYXIoKSB7XG4gICAgdmFyIF9nZXRQcm90b3R5cGVPZjI7XG5cbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2FsZW5kYXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9nZXRQcm90b3R5cGVPZjIgPSBfZ2V0UHJvdG90eXBlT2YoQ2FsZW5kYXIpKS5jYWxsLmFwcGx5KF9nZXRQcm90b3R5cGVPZjIsIFt0aGlzXS5jb25jYXQoYXJncykpKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNsaWRlRGlyZWN0aW9uOiAnbGVmdCcsXG4gICAgICBjdXJyZW50TW9udGg6IF90aGlzLnByb3BzLnV0aWxzLnN0YXJ0T2ZNb250aChfdGhpcy5wcm9wcy5kYXRlKSxcbiAgICAgIGxvYWRpbmdRdWV1ZTogMFxuICAgIH07XG5cbiAgICBfdGhpcy5wdXNoVG9Mb2FkaW5nUXVldWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbG9hZGluZ1F1ZXVlID0gX3RoaXMuc3RhdGUubG9hZGluZ1F1ZXVlICsgMTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2FkaW5nUXVldWU6IGxvYWRpbmdRdWV1ZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLnBvcEZyb21Mb2FkaW5nUXVldWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbG9hZGluZ1F1ZXVlID0gX3RoaXMuc3RhdGUubG9hZGluZ1F1ZXVlO1xuICAgICAgbG9hZGluZ1F1ZXVlID0gbG9hZGluZ1F1ZXVlIDw9IDAgPyAwIDogbG9hZGluZ1F1ZXVlIC0gMTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2FkaW5nUXVldWU6IGxvYWRpbmdRdWV1ZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUNoYW5nZU1vbnRoID0gZnVuY3Rpb24gKG5ld01vbnRoLCBzbGlkZURpcmVjdGlvbikge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjdXJyZW50TW9udGg6IG5ld01vbnRoLFxuICAgICAgICBzbGlkZURpcmVjdGlvbjogc2xpZGVEaXJlY3Rpb25cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Nb250aENoYW5nZSkge1xuICAgICAgICB2YXIgcmV0dXJuVmFsID0gX3RoaXMucHJvcHMub25Nb250aENoYW5nZShuZXdNb250aCk7XG5cbiAgICAgICAgaWYgKHJldHVyblZhbCkge1xuICAgICAgICAgIF90aGlzLnB1c2hUb0xvYWRpbmdRdWV1ZSgpO1xuXG4gICAgICAgICAgcmV0dXJuVmFsLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMucG9wRnJvbUxvYWRpbmdRdWV1ZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnZhbGlkYXRlTWluTWF4RGF0ZSA9IGZ1bmN0aW9uIChkYXkpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG1pbkRhdGUgPSBfdGhpcyRwcm9wcy5taW5EYXRlLFxuICAgICAgICAgIG1heERhdGUgPSBfdGhpcyRwcm9wcy5tYXhEYXRlLFxuICAgICAgICAgIHV0aWxzID0gX3RoaXMkcHJvcHMudXRpbHMsXG4gICAgICAgICAgZGlzYWJsZUZ1dHVyZSA9IF90aGlzJHByb3BzLmRpc2FibGVGdXR1cmUsXG4gICAgICAgICAgZGlzYWJsZVBhc3QgPSBfdGhpcyRwcm9wcy5kaXNhYmxlUGFzdDtcbiAgICAgIHZhciBub3cgPSB1dGlscy5kYXRlKCk7XG4gICAgICByZXR1cm4gQm9vbGVhbihkaXNhYmxlRnV0dXJlICYmIHV0aWxzLmlzQWZ0ZXJEYXkoZGF5LCBub3cpIHx8IGRpc2FibGVQYXN0ICYmIHV0aWxzLmlzQmVmb3JlRGF5KGRheSwgbm93KSB8fCBtaW5EYXRlICYmIHV0aWxzLmlzQmVmb3JlRGF5KGRheSwgdXRpbHMuZGF0ZShtaW5EYXRlKSkgfHwgbWF4RGF0ZSAmJiB1dGlscy5pc0FmdGVyRGF5KGRheSwgdXRpbHMuZGF0ZShtYXhEYXRlKSkpO1xuICAgIH07XG5cbiAgICBfdGhpcy5zaG91bGREaXNhYmxlUHJldk1vbnRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHV0aWxzID0gX3RoaXMkcHJvcHMyLnV0aWxzLFxuICAgICAgICAgIGRpc2FibGVQYXN0ID0gX3RoaXMkcHJvcHMyLmRpc2FibGVQYXN0LFxuICAgICAgICAgIG1pbkRhdGUgPSBfdGhpcyRwcm9wczIubWluRGF0ZTtcbiAgICAgIHZhciBub3cgPSB1dGlscy5kYXRlKCk7XG4gICAgICB2YXIgZmlyc3RFbmFibGVkTW9udGggPSB1dGlscy5zdGFydE9mTW9udGgoZGlzYWJsZVBhc3QgJiYgdXRpbHMuaXNBZnRlcihub3csIHV0aWxzLmRhdGUobWluRGF0ZSkpID8gbm93IDogdXRpbHMuZGF0ZShtaW5EYXRlKSk7XG4gICAgICByZXR1cm4gIXV0aWxzLmlzQmVmb3JlKGZpcnN0RW5hYmxlZE1vbnRoLCBfdGhpcy5zdGF0ZS5jdXJyZW50TW9udGgpO1xuICAgIH07XG5cbiAgICBfdGhpcy5zaG91bGREaXNhYmxlTmV4dE1vbnRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHV0aWxzID0gX3RoaXMkcHJvcHMzLnV0aWxzLFxuICAgICAgICAgIGRpc2FibGVGdXR1cmUgPSBfdGhpcyRwcm9wczMuZGlzYWJsZUZ1dHVyZSxcbiAgICAgICAgICBtYXhEYXRlID0gX3RoaXMkcHJvcHMzLm1heERhdGU7XG4gICAgICB2YXIgbm93ID0gdXRpbHMuZGF0ZSgpO1xuICAgICAgdmFyIGxhc3RFbmFibGVkTW9udGggPSB1dGlscy5zdGFydE9mTW9udGgoZGlzYWJsZUZ1dHVyZSAmJiB1dGlscy5pc0JlZm9yZShub3csIHV0aWxzLmRhdGUobWF4RGF0ZSkpID8gbm93IDogdXRpbHMuZGF0ZShtYXhEYXRlKSk7XG4gICAgICByZXR1cm4gIXV0aWxzLmlzQWZ0ZXIobGFzdEVuYWJsZWRNb250aCwgX3RoaXMuc3RhdGUuY3VycmVudE1vbnRoKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2hvdWxkRGlzYWJsZURhdGUgPSBmdW5jdGlvbiAoZGF5KSB7XG4gICAgICB2YXIgc2hvdWxkRGlzYWJsZURhdGUgPSBfdGhpcy5wcm9wcy5zaG91bGREaXNhYmxlRGF0ZTtcbiAgICAgIHJldHVybiBfdGhpcy52YWxpZGF0ZU1pbk1heERhdGUoZGF5KSB8fCBCb29sZWFuKHNob3VsZERpc2FibGVEYXRlICYmIHNob3VsZERpc2FibGVEYXRlKGRheSkpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVEYXlTZWxlY3QgPSBmdW5jdGlvbiAoZGF5KSB7XG4gICAgICB2YXIgaXNGaW5pc2ggPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgZGF0ZSA9IF90aGlzJHByb3BzNC5kYXRlLFxuICAgICAgICAgIHV0aWxzID0gX3RoaXMkcHJvcHM0LnV0aWxzO1xuXG4gICAgICBfdGhpcy5wcm9wcy5vbkNoYW5nZSh1dGlscy5tZXJnZURhdGVBbmRUaW1lKGRheSwgZGF0ZSksIGlzRmluaXNoKTtcbiAgICB9O1xuXG4gICAgX3RoaXMubW92ZVRvRGF5ID0gZnVuY3Rpb24gKGRheSkge1xuICAgICAgdmFyIHV0aWxzID0gX3RoaXMucHJvcHMudXRpbHM7XG5cbiAgICAgIGlmIChkYXkgJiYgIV90aGlzLnNob3VsZERpc2FibGVEYXRlKGRheSkpIHtcbiAgICAgICAgaWYgKHV0aWxzLmdldE1vbnRoKGRheSkgIT09IHV0aWxzLmdldE1vbnRoKF90aGlzLnN0YXRlLmN1cnJlbnRNb250aCkpIHtcbiAgICAgICAgICBfdGhpcy5oYW5kbGVDaGFuZ2VNb250aCh1dGlscy5zdGFydE9mTW9udGgoZGF5KSwgJ2xlZnQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLmhhbmRsZURheVNlbGVjdChkYXksIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNSA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHRoZW1lID0gX3RoaXMkcHJvcHM1LnRoZW1lLFxuICAgICAgICAgIGRhdGUgPSBfdGhpcyRwcm9wczUuZGF0ZSxcbiAgICAgICAgICB1dGlscyA9IF90aGlzJHByb3BzNS51dGlscztcbiAgICAgIHJ1bktleUhhbmRsZXIoZXZlbnQsIHtcbiAgICAgICAgQXJyb3dVcDogZnVuY3Rpb24gQXJyb3dVcCgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMubW92ZVRvRGF5KHV0aWxzLmFkZERheXMoZGF0ZSwgLTcpKTtcbiAgICAgICAgfSxcbiAgICAgICAgQXJyb3dEb3duOiBmdW5jdGlvbiBBcnJvd0Rvd24oKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm1vdmVUb0RheSh1dGlscy5hZGREYXlzKGRhdGUsIDcpKTtcbiAgICAgICAgfSxcbiAgICAgICAgQXJyb3dMZWZ0OiBmdW5jdGlvbiBBcnJvd0xlZnQoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm1vdmVUb0RheSh1dGlscy5hZGREYXlzKGRhdGUsIHRoZW1lLmRpcmVjdGlvbiA9PT0gJ2x0cicgPyAtMSA6IDEpKTtcbiAgICAgICAgfSxcbiAgICAgICAgQXJyb3dSaWdodDogZnVuY3Rpb24gQXJyb3dSaWdodCgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMubW92ZVRvRGF5KHV0aWxzLmFkZERheXMoZGF0ZSwgdGhlbWUuZGlyZWN0aW9uID09PSAnbHRyJyA/IDEgOiAtMSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyV2Vla3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM2ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgdXRpbHMgPSBfdGhpcyRwcm9wczYudXRpbHMsXG4gICAgICAgICAgY2xhc3NlcyA9IF90aGlzJHByb3BzNi5jbGFzc2VzO1xuICAgICAgdmFyIHdlZWtzID0gdXRpbHMuZ2V0V2Vla0FycmF5KF90aGlzLnN0YXRlLmN1cnJlbnRNb250aCk7XG4gICAgICByZXR1cm4gd2Vla3MubWFwKGZ1bmN0aW9uICh3ZWVrKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBrZXk6IFwid2Vlay1cIi5jb25jYXQod2Vla1swXS50b1N0cmluZygpKSxcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMud2Vla1xuICAgICAgICB9LCBfdGhpcy5yZW5kZXJEYXlzKHdlZWspKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5yZW5kZXJEYXlzID0gZnVuY3Rpb24gKHdlZWspIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczcgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBkYXRlID0gX3RoaXMkcHJvcHM3LmRhdGUsXG4gICAgICAgICAgcmVuZGVyRGF5ID0gX3RoaXMkcHJvcHM3LnJlbmRlckRheSxcbiAgICAgICAgICB1dGlscyA9IF90aGlzJHByb3BzNy51dGlscztcbiAgICAgIHZhciBub3cgPSB1dGlscy5kYXRlKCk7XG4gICAgICB2YXIgc2VsZWN0ZWREYXRlID0gdXRpbHMuc3RhcnRPZkRheShkYXRlKTtcbiAgICAgIHZhciBjdXJyZW50TW9udGhOdW1iZXIgPSB1dGlscy5nZXRNb250aChfdGhpcy5zdGF0ZS5jdXJyZW50TW9udGgpO1xuICAgICAgcmV0dXJuIHdlZWsubWFwKGZ1bmN0aW9uIChkYXkpIHtcbiAgICAgICAgdmFyIGRpc2FibGVkID0gX3RoaXMuc2hvdWxkRGlzYWJsZURhdGUoZGF5KTtcblxuICAgICAgICB2YXIgaXNEYXlJbkN1cnJlbnRNb250aCA9IHV0aWxzLmdldE1vbnRoKGRheSkgPT09IGN1cnJlbnRNb250aE51bWJlcjtcbiAgICAgICAgdmFyIGRheUNvbXBvbmVudCA9IGNyZWF0ZUVsZW1lbnQoRGF5LCB7XG4gICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICAgIGN1cnJlbnQ6IHV0aWxzLmlzU2FtZURheShkYXksIG5vdyksXG4gICAgICAgICAgaGlkZGVuOiAhaXNEYXlJbkN1cnJlbnRNb250aCxcbiAgICAgICAgICBzZWxlY3RlZDogdXRpbHMuaXNTYW1lRGF5KHNlbGVjdGVkRGF0ZSwgZGF5KVxuICAgICAgICB9LCB1dGlscy5nZXREYXlUZXh0KGRheSkpO1xuXG4gICAgICAgIGlmIChyZW5kZXJEYXkpIHtcbiAgICAgICAgICBkYXlDb21wb25lbnQgPSByZW5kZXJEYXkoZGF5LCBzZWxlY3RlZERhdGUsIGlzRGF5SW5DdXJyZW50TW9udGgsIGRheUNvbXBvbmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChEYXlXcmFwcGVyLCB7XG4gICAgICAgICAgdmFsdWU6IGRheSxcbiAgICAgICAgICBrZXk6IGRheS50b1N0cmluZygpLFxuICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICBkYXlJbkN1cnJlbnRNb250aDogaXNEYXlJbkN1cnJlbnRNb250aCxcbiAgICAgICAgICBvblNlbGVjdDogX3RoaXMuaGFuZGxlRGF5U2VsZWN0XG4gICAgICAgIH0sIGRheUNvbXBvbmVudCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENhbGVuZGFyLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczggPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGRhdGUgPSBfdGhpcyRwcm9wczguZGF0ZSxcbiAgICAgICAgICBtaW5EYXRlID0gX3RoaXMkcHJvcHM4Lm1pbkRhdGUsXG4gICAgICAgICAgbWF4RGF0ZSA9IF90aGlzJHByb3BzOC5tYXhEYXRlLFxuICAgICAgICAgIHV0aWxzID0gX3RoaXMkcHJvcHM4LnV0aWxzLFxuICAgICAgICAgIGRpc2FibGVQYXN0ID0gX3RoaXMkcHJvcHM4LmRpc2FibGVQYXN0LFxuICAgICAgICAgIGRpc2FibGVGdXR1cmUgPSBfdGhpcyRwcm9wczguZGlzYWJsZUZ1dHVyZTtcblxuICAgICAgaWYgKHRoaXMuc2hvdWxkRGlzYWJsZURhdGUoZGF0ZSkpIHtcbiAgICAgICAgdmFyIGNsb3Nlc3RFbmFibGVkRGF0ZSA9IGZpbmRDbG9zZXN0RW5hYmxlZERhdGUoe1xuICAgICAgICAgIGRhdGU6IGRhdGUsXG4gICAgICAgICAgdXRpbHM6IHV0aWxzLFxuICAgICAgICAgIG1pbkRhdGU6IHV0aWxzLmRhdGUobWluRGF0ZSksXG4gICAgICAgICAgbWF4RGF0ZTogdXRpbHMuZGF0ZShtYXhEYXRlKSxcbiAgICAgICAgICBkaXNhYmxlUGFzdDogQm9vbGVhbihkaXNhYmxlUGFzdCksXG4gICAgICAgICAgZGlzYWJsZUZ1dHVyZTogQm9vbGVhbihkaXNhYmxlRnV0dXJlKSxcbiAgICAgICAgICBzaG91bGREaXNhYmxlRGF0ZTogdGhpcy5zaG91bGREaXNhYmxlRGF0ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5oYW5kbGVEYXlTZWxlY3QoY2xvc2VzdEVuYWJsZWREYXRlLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIGN1cnJlbnRNb250aCA9IF90aGlzJHN0YXRlLmN1cnJlbnRNb250aCxcbiAgICAgICAgICBzbGlkZURpcmVjdGlvbiA9IF90aGlzJHN0YXRlLnNsaWRlRGlyZWN0aW9uO1xuICAgICAgdmFyIF90aGlzJHByb3BzOSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2xhc3NlcyA9IF90aGlzJHByb3BzOS5jbGFzc2VzLFxuICAgICAgICAgIGFsbG93S2V5Ym9hcmRDb250cm9sID0gX3RoaXMkcHJvcHM5LmFsbG93S2V5Ym9hcmRDb250cm9sLFxuICAgICAgICAgIGxlZnRBcnJvd0J1dHRvblByb3BzID0gX3RoaXMkcHJvcHM5LmxlZnRBcnJvd0J1dHRvblByb3BzLFxuICAgICAgICAgIGxlZnRBcnJvd0ljb24gPSBfdGhpcyRwcm9wczkubGVmdEFycm93SWNvbixcbiAgICAgICAgICByaWdodEFycm93QnV0dG9uUHJvcHMgPSBfdGhpcyRwcm9wczkucmlnaHRBcnJvd0J1dHRvblByb3BzLFxuICAgICAgICAgIHJpZ2h0QXJyb3dJY29uID0gX3RoaXMkcHJvcHM5LnJpZ2h0QXJyb3dJY29uLFxuICAgICAgICAgIGxvYWRpbmdJbmRpY2F0b3IgPSBfdGhpcyRwcm9wczkubG9hZGluZ0luZGljYXRvcjtcbiAgICAgIHZhciBsb2FkaW5nRWxlbWVudCA9IGxvYWRpbmdJbmRpY2F0b3IgPyBsb2FkaW5nSW5kaWNhdG9yIDogY3JlYXRlRWxlbWVudChDaXJjdWxhclByb2dyZXNzLCBudWxsKTtcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCBhbGxvd0tleWJvYXJkQ29udHJvbCAmJiB0aGlzLmNvbnRleHQgIT09ICdzdGF0aWMnICYmIGNyZWF0ZUVsZW1lbnQoS2V5RG93bkxpc3RlbmVyLCB7XG4gICAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duXG4gICAgICB9KSwgY3JlYXRlRWxlbWVudChDYWxlbmRhckhlYWRlciwge1xuICAgICAgICBjdXJyZW50TW9udGg6IGN1cnJlbnRNb250aCxcbiAgICAgICAgc2xpZGVEaXJlY3Rpb246IHNsaWRlRGlyZWN0aW9uLFxuICAgICAgICBvbk1vbnRoQ2hhbmdlOiB0aGlzLmhhbmRsZUNoYW5nZU1vbnRoLFxuICAgICAgICBsZWZ0QXJyb3dJY29uOiBsZWZ0QXJyb3dJY29uLFxuICAgICAgICBsZWZ0QXJyb3dCdXR0b25Qcm9wczogbGVmdEFycm93QnV0dG9uUHJvcHMsXG4gICAgICAgIHJpZ2h0QXJyb3dJY29uOiByaWdodEFycm93SWNvbixcbiAgICAgICAgcmlnaHRBcnJvd0J1dHRvblByb3BzOiByaWdodEFycm93QnV0dG9uUHJvcHMsXG4gICAgICAgIGRpc2FibGVQcmV2TW9udGg6IHRoaXMuc2hvdWxkRGlzYWJsZVByZXZNb250aCgpLFxuICAgICAgICBkaXNhYmxlTmV4dE1vbnRoOiB0aGlzLnNob3VsZERpc2FibGVOZXh0TW9udGgoKVxuICAgICAgfSksIGNyZWF0ZUVsZW1lbnQoU2xpZGVUcmFuc2l0aW9uLCB7XG4gICAgICAgIHNsaWRlRGlyZWN0aW9uOiBzbGlkZURpcmVjdGlvbixcbiAgICAgICAgdHJhbnNLZXk6IGN1cnJlbnRNb250aC50b1N0cmluZygpLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMudHJhbnNpdGlvbkNvbnRhaW5lclxuICAgICAgfSwgY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgdGhpcy5zdGF0ZS5sb2FkaW5nUXVldWUgPiAwICYmIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMucHJvZ3Jlc3NDb250YWluZXJcbiAgICAgIH0sIGxvYWRpbmdFbGVtZW50KSB8fCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIHRoaXMucmVuZGVyV2Vla3MoKSkpKSk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHN0YXRlKSB7XG4gICAgICB2YXIgdXRpbHMgPSBuZXh0UHJvcHMudXRpbHMsXG4gICAgICAgICAgbmV4dERhdGUgPSBuZXh0UHJvcHMuZGF0ZTtcblxuICAgICAgaWYgKCF1dGlscy5pc0VxdWFsKG5leHREYXRlLCBzdGF0ZS5sYXN0RGF0ZSkpIHtcbiAgICAgICAgdmFyIG5leHRNb250aCA9IHV0aWxzLmdldE1vbnRoKG5leHREYXRlKTtcbiAgICAgICAgdmFyIGxhc3REYXRlID0gc3RhdGUubGFzdERhdGUgfHwgbmV4dERhdGU7XG4gICAgICAgIHZhciBsYXN0TW9udGggPSB1dGlscy5nZXRNb250aChsYXN0RGF0ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGFzdERhdGU6IG5leHREYXRlLFxuICAgICAgICAgIGN1cnJlbnRNb250aDogbmV4dFByb3BzLnV0aWxzLnN0YXJ0T2ZNb250aChuZXh0RGF0ZSksXG4gICAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgICAgc2xpZGVEaXJlY3Rpb246IG5leHRNb250aCA9PT0gbGFzdE1vbnRoID8gc3RhdGUuc2xpZGVEaXJlY3Rpb24gOiB1dGlscy5pc0FmdGVyRGF5KG5leHREYXRlLCBsYXN0RGF0ZSkgPyAnbGVmdCcgOiAncmlnaHQnXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDYWxlbmRhcjtcbn0oQ29tcG9uZW50KTtcbkNhbGVuZGFyLmNvbnRleHRUeXBlID0gVmFyaWFudENvbnRleHQ7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBDYWxlbmRhci5wcm9wVHlwZXMgPSB7XG4gIHJlbmRlckRheTogZnVuYyxcbiAgc2hvdWxkRGlzYWJsZURhdGU6IGZ1bmMsXG4gIGFsbG93S2V5Ym9hcmRDb250cm9sOiBib29sXG59IDogdm9pZCAwO1xuQ2FsZW5kYXIuZGVmYXVsdFByb3BzID0ge1xuICBtaW5EYXRlOiBuZXcgRGF0ZSgnMTkwMC0wMS0wMScpLFxuICBtYXhEYXRlOiBuZXcgRGF0ZSgnMjEwMC0wMS0wMScpLFxuICBkaXNhYmxlUGFzdDogZmFsc2UsXG4gIGRpc2FibGVGdXR1cmU6IGZhbHNlLFxuICBhbGxvd0tleWJvYXJkQ29udHJvbDogdHJ1ZVxufTtcbnZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICB0cmFuc2l0aW9uQ29udGFpbmVyOiB7XG4gICAgICBtaW5IZWlnaHQ6IDM2ICogNixcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxLjUpXG4gICAgfSxcbiAgICBwcm9ncmVzc0NvbnRhaW5lcjoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICB9LFxuICAgIHdlZWs6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgIH1cbiAgfTtcbn07XG52YXIgQ2FsZW5kYXIkMSA9IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJzQ2FsZW5kYXInLFxuICB3aXRoVGhlbWU6IHRydWVcbn0pKHdpdGhVdGlscygpKENhbGVuZGFyKSk7XG5cbmV4cG9ydCB7IENhbGVuZGFyIGFzIEMsIENhbGVuZGFyJDEgYXMgYSwgaXNZZWFyQW5kTW9udGhWaWV3cyBhcyBiLCBnZXRGb3JtYXRCeVZpZXdzIGFzIGcsIGlzWWVhck9ubHlWaWV3IGFzIGksIHN0eWxlcyBhcyBzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1DYWxlbmRhci0xMWFlNjFmNi5qcy5tYXBcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG9uZU9mLCBudW1iZXIsIGZ1bmMsIGFycmF5T2YsIG5vZGUsIGJvb2wsIGFueSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfZ2V0UHJvdG90eXBlT2YgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YnO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cyc7XG5cbnZhciBDbG9ja1R5cGU7XG5cbihmdW5jdGlvbiAoQ2xvY2tUeXBlKSB7XG4gIENsb2NrVHlwZVtcIkhPVVJTXCJdID0gXCJob3Vyc1wiO1xuICBDbG9ja1R5cGVbXCJNSU5VVEVTXCJdID0gXCJtaW51dGVzXCI7XG4gIENsb2NrVHlwZVtcIlNFQ09ORFNcIl0gPSBcInNlY29uZHNcIjtcbn0pKENsb2NrVHlwZSB8fCAoQ2xvY2tUeXBlID0ge30pKTtcblxudmFyIENsb2NrVHlwZSQxID0gQ2xvY2tUeXBlO1xuXG52YXIgQ2xvY2tQb2ludGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDbG9ja1BvaW50ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENsb2NrUG9pbnRlcigpIHtcbiAgICB2YXIgX2dldFByb3RvdHlwZU9mMjtcblxuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDbG9ja1BvaW50ZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9nZXRQcm90b3R5cGVPZjIgPSBfZ2V0UHJvdG90eXBlT2YoQ2xvY2tQb2ludGVyKSkuY2FsbC5hcHBseShfZ2V0UHJvdG90eXBlT2YyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICB0b0FuaW1hdGVUcmFuc2Zvcm06IGZhbHNlLFxuICAgICAgcHJldmlvdXNUeXBlOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0QW5nbGVTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkcHJvcHMudmFsdWUsXG4gICAgICAgICAgaXNJbm5lciA9IF90aGlzJHByb3BzLmlzSW5uZXIsXG4gICAgICAgICAgdHlwZSA9IF90aGlzJHByb3BzLnR5cGU7XG4gICAgICB2YXIgbWF4ID0gdHlwZSA9PT0gQ2xvY2tUeXBlJDEuSE9VUlMgPyAxMiA6IDYwO1xuICAgICAgdmFyIGFuZ2xlID0gMzYwIC8gbWF4ICogdmFsdWU7XG5cbiAgICAgIGlmICh0eXBlID09PSBDbG9ja1R5cGUkMS5IT1VSUyAmJiB2YWx1ZSA+IDEyKSB7XG4gICAgICAgIGFuZ2xlIC09IDM2MDsgLy8gcm91bmQgdXAgYW5nbGUgdG8gbWF4IDM2MCBkZWdyZWVzXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlaWdodDogaXNJbm5lciA/ICcyNiUnIDogJzQwJScsXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGVaKFwiLmNvbmNhdChhbmdsZSwgXCJkZWcpXCIpXG4gICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2xvY2tQb2ludGVyLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2xhc3NlcyA9IF90aGlzJHByb3BzMi5jbGFzc2VzLFxuICAgICAgICAgIGhhc1NlbGVjdGVkID0gX3RoaXMkcHJvcHMyLmhhc1NlbGVjdGVkO1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogdGhpcy5nZXRBbmdsZVN0eWxlKCksXG4gICAgICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnBvaW50ZXIsIHRoaXMuc3RhdGUudG9BbmltYXRlVHJhbnNmb3JtICYmIGNsYXNzZXMuYW5pbWF0ZVRyYW5zZm9ybSlcbiAgICAgIH0sIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy50aHVtYiwgaGFzU2VsZWN0ZWQgJiYgY2xhc3Nlcy5ub1BvaW50KVxuICAgICAgfSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDbG9ja1BvaW50ZXI7XG59KENvbXBvbmVudCk7XG5cbkNsb2NrUG9pbnRlci5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiAobmV4dFByb3BzLCBzdGF0ZSkge1xuICBpZiAobmV4dFByb3BzLnR5cGUgIT09IHN0YXRlLnByZXZpb3VzVHlwZSkge1xuICAgIHJldHVybiB7XG4gICAgICB0b0FuaW1hdGVUcmFuc2Zvcm06IHRydWUsXG4gICAgICBwcmV2aW91c1R5cGU6IG5leHRQcm9wcy50eXBlXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9BbmltYXRlVHJhbnNmb3JtOiBmYWxzZSxcbiAgICBwcmV2aW91c1R5cGU6IG5leHRQcm9wcy50eXBlXG4gIH07XG59O1xuXG52YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiBjcmVhdGVTdHlsZXMoe1xuICAgIHBvaW50ZXI6IHtcbiAgICAgIHdpZHRoOiAyLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbGVmdDogJ2NhbGMoNTAlIC0gMXB4KScsXG4gICAgICBib3R0b206ICc1MCUnLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnY2VudGVyIGJvdHRvbSAwcHgnXG4gICAgfSxcbiAgICBhbmltYXRlVHJhbnNmb3JtOiB7XG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd0cmFuc2Zvcm0nLCAnaGVpZ2h0J10pXG4gICAgfSxcbiAgICB0aHVtYjoge1xuICAgICAgd2lkdGg6IDQsXG4gICAgICBoZWlnaHQ6IDQsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5jb250cmFzdFRleHQsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxMDAlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAtMjEsXG4gICAgICBsZWZ0OiAtMTUsXG4gICAgICBib3JkZXI6IFwiMTRweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4pLFxuICAgICAgYm94U2l6aW5nOiAnY29udGVudC1ib3gnXG4gICAgfSxcbiAgICBub1BvaW50OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gICAgfVxuICB9KTtcbn07XG52YXIgQ2xvY2tQb2ludGVyJDEgPSB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpUGlja2Vyc0Nsb2NrUG9pbnRlcidcbn0pKENsb2NrUG9pbnRlcik7XG5cbnZhciBjZW50ZXIgPSB7XG4gIHg6IDI2MCAvIDIsXG4gIHk6IDI2MCAvIDJcbn07XG52YXIgYmFzZVBvaW50ID0ge1xuICB4OiBjZW50ZXIueCxcbiAgeTogMFxufTtcbnZhciBjeCA9IGJhc2VQb2ludC54IC0gY2VudGVyLng7XG52YXIgY3kgPSBiYXNlUG9pbnQueSAtIGNlbnRlci55O1xuXG52YXIgcmFkMmRlZyA9IGZ1bmN0aW9uIHJhZDJkZWcocmFkKSB7XG4gIHJldHVybiByYWQgKiA1Ny4yOTU3Nzk1MTMwODIzMjtcbn07XG5cbnZhciBnZXRBbmdsZVZhbHVlID0gZnVuY3Rpb24gZ2V0QW5nbGVWYWx1ZShzdGVwLCBvZmZzZXRYLCBvZmZzZXRZKSB7XG4gIHZhciB4ID0gb2Zmc2V0WCAtIGNlbnRlci54O1xuICB2YXIgeSA9IG9mZnNldFkgLSBjZW50ZXIueTtcbiAgdmFyIGF0YW4gPSBNYXRoLmF0YW4yKGN4LCBjeSkgLSBNYXRoLmF0YW4yKHgsIHkpO1xuICB2YXIgZGVnID0gcmFkMmRlZyhhdGFuKTtcbiAgZGVnID0gTWF0aC5yb3VuZChkZWcgLyBzdGVwKSAqIHN0ZXA7XG4gIGRlZyAlPSAzNjA7XG4gIHZhciB2YWx1ZSA9IE1hdGguZmxvb3IoZGVnIC8gc3RlcCkgfHwgMDtcbiAgdmFyIGRlbHRhID0gTWF0aC5wb3coeCwgMikgKyBNYXRoLnBvdyh5LCAyKTtcbiAgdmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KGRlbHRhKTtcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgZGlzdGFuY2U6IGRpc3RhbmNlXG4gIH07XG59O1xuXG52YXIgZ2V0SG91cnMgPSBmdW5jdGlvbiBnZXRIb3VycyhvZmZzZXRYLCBvZmZzZXRZLCBhbXBtKSB7XG4gIHZhciBfZ2V0QW5nbGVWYWx1ZSA9IGdldEFuZ2xlVmFsdWUoMzAsIG9mZnNldFgsIG9mZnNldFkpLFxuICAgICAgdmFsdWUgPSBfZ2V0QW5nbGVWYWx1ZS52YWx1ZSxcbiAgICAgIGRpc3RhbmNlID0gX2dldEFuZ2xlVmFsdWUuZGlzdGFuY2U7XG5cbiAgdmFsdWUgPSB2YWx1ZSB8fCAxMjtcblxuICBpZiAoIWFtcG0pIHtcbiAgICBpZiAoZGlzdGFuY2UgPCA5MCkge1xuICAgICAgdmFsdWUgKz0gMTI7XG4gICAgICB2YWx1ZSAlPSAyNDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFsdWUgJT0gMTI7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xudmFyIGdldE1pbnV0ZXMgPSBmdW5jdGlvbiBnZXRNaW51dGVzKG9mZnNldFgsIG9mZnNldFkpIHtcbiAgdmFyIHN0ZXAgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDE7XG4gIHZhciBhbmdsZVN0ZXAgPSBzdGVwICogNjtcblxuICB2YXIgX2dldEFuZ2xlVmFsdWUyID0gZ2V0QW5nbGVWYWx1ZShhbmdsZVN0ZXAsIG9mZnNldFgsIG9mZnNldFkpLFxuICAgICAgdmFsdWUgPSBfZ2V0QW5nbGVWYWx1ZTIudmFsdWU7XG5cbiAgdmFsdWUgPSB2YWx1ZSAqIHN0ZXAgJSA2MDtcbiAgcmV0dXJuIHZhbHVlO1xufTtcbnZhciBnZXRNZXJpZGllbSA9IGZ1bmN0aW9uIGdldE1lcmlkaWVtKGRhdGUsIHV0aWxzKSB7XG4gIHJldHVybiB1dGlscy5nZXRIb3VycyhkYXRlKSA+PSAxMiA/ICdwbScgOiAnYW0nO1xufTtcbnZhciBjb252ZXJ0VG9NZXJpZGllbSA9IGZ1bmN0aW9uIGNvbnZlcnRUb01lcmlkaWVtKHRpbWUsIG1lcmlkaWVtLCBhbXBtLCB1dGlscykge1xuICBpZiAoYW1wbSkge1xuICAgIHZhciBjdXJyZW50TWVyaWRpZW0gPSB1dGlscy5nZXRIb3Vycyh0aW1lKSA+PSAxMiA/ICdwbScgOiAnYW0nO1xuXG4gICAgaWYgKGN1cnJlbnRNZXJpZGllbSAhPT0gbWVyaWRpZW0pIHtcbiAgICAgIHZhciBob3VycyA9IG1lcmlkaWVtID09PSAnYW0nID8gdXRpbHMuZ2V0SG91cnModGltZSkgLSAxMiA6IHV0aWxzLmdldEhvdXJzKHRpbWUpICsgMTI7XG4gICAgICByZXR1cm4gdXRpbHMuc2V0SG91cnModGltZSwgaG91cnMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aW1lO1xufTtcblxudmFyIENsb2NrID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDbG9jaywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ2xvY2soKSB7XG4gICAgdmFyIF9nZXRQcm90b3R5cGVPZjI7XG5cbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2xvY2spO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9nZXRQcm90b3R5cGVPZjIgPSBfZ2V0UHJvdG90eXBlT2YoQ2xvY2spKS5jYWxsLmFwcGx5KF9nZXRQcm90b3R5cGVPZjIsIFt0aGlzXS5jb25jYXQoYXJncykpKTtcbiAgICBfdGhpcy5pc01vdmluZyA9IGZhbHNlO1xuXG4gICAgX3RoaXMuaGFuZGxlVG91Y2hNb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIF90aGlzLmlzTW92aW5nID0gdHJ1ZTtcblxuICAgICAgX3RoaXMuc2V0VGltZShlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlVG91Y2hFbmQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKF90aGlzLmlzTW92aW5nKSB7XG4gICAgICAgIF90aGlzLnNldFRpbWUoZSwgdHJ1ZSk7XG5cbiAgICAgICAgX3RoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpOyAvLyBNb3VzZUV2ZW50LndoaWNoIGlzIGRlcHJlY2F0ZWQsIGJ1dCBNb3VzZUV2ZW50LmJ1dHRvbnMgaXMgbm90IHN1cHBvcnRlZCBpbiBTYWZhcmlcblxuICAgICAgdmFyIGlzQnV0dG9uUHJlc3NlZCA9IHR5cGVvZiBlLmJ1dHRvbnMgPT09ICd1bmRlZmluZWQnID8gZS5uYXRpdmVFdmVudC53aGljaCA9PT0gMSA6IGUuYnV0dG9ucyA9PT0gMTtcblxuICAgICAgaWYgKGlzQnV0dG9uUHJlc3NlZCkge1xuICAgICAgICBfdGhpcy5zZXRUaW1lKGUubmF0aXZlRXZlbnQsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlTW91c2VVcCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoX3RoaXMuaXNNb3ZpbmcpIHtcbiAgICAgICAgX3RoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0VGltZShlLm5hdGl2ZUV2ZW50LCB0cnVlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFzU2VsZWN0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICB0eXBlID0gX3RoaXMkcHJvcHMudHlwZSxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHByb3BzLnZhbHVlO1xuXG4gICAgICBpZiAodHlwZSA9PT0gQ2xvY2tUeXBlJDEuSE9VUlMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZSAlIDUgPT09IDA7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDbG9jaywgW3tcbiAgICBrZXk6IFwic2V0VGltZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRUaW1lKGUpIHtcbiAgICAgIHZhciBpc0ZpbmlzaCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgICB2YXIgb2Zmc2V0WCA9IGUub2Zmc2V0WCxcbiAgICAgICAgICBvZmZzZXRZID0gZS5vZmZzZXRZO1xuXG4gICAgICBpZiAodHlwZW9mIG9mZnNldFggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIG9mZnNldFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgIG9mZnNldFkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlID0gdGhpcy5wcm9wcy50eXBlID09PSBDbG9ja1R5cGUkMS5TRUNPTkRTIHx8IHRoaXMucHJvcHMudHlwZSA9PT0gQ2xvY2tUeXBlJDEuTUlOVVRFUyA/IGdldE1pbnV0ZXMob2Zmc2V0WCwgb2Zmc2V0WSwgdGhpcy5wcm9wcy5taW51dGVzU3RlcCkgOiBnZXRIb3VycyhvZmZzZXRYLCBvZmZzZXRZLCBCb29sZWFuKHRoaXMucHJvcHMuYW1wbSkpO1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSwgaXNGaW5pc2gpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2xhc3NlcyA9IF90aGlzJHByb3BzMi5jbGFzc2VzLFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkcHJvcHMyLnZhbHVlLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMyLmNoaWxkcmVuLFxuICAgICAgICAgIHR5cGUgPSBfdGhpcyRwcm9wczIudHlwZSxcbiAgICAgICAgICBhbXBtID0gX3RoaXMkcHJvcHMyLmFtcG07XG4gICAgICB2YXIgaXNQb2ludGVySW5uZXIgPSAhYW1wbSAmJiB0eXBlID09PSBDbG9ja1R5cGUkMS5IT1VSUyAmJiAodmFsdWUgPCAxIHx8IHZhbHVlID4gMTIpO1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMuY29udGFpbmVyXG4gICAgICB9LCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLmNsb2NrXG4gICAgICB9LCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgcm9sZTogXCJtZW51XCIsXG4gICAgICAgIHRhYkluZGV4OiAtMSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnNxdWFyZU1hc2ssXG4gICAgICAgIG9uVG91Y2hNb3ZlOiB0aGlzLmhhbmRsZVRvdWNoTW92ZSxcbiAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZCxcbiAgICAgICAgb25Nb3VzZVVwOiB0aGlzLmhhbmRsZU1vdXNlVXAsXG4gICAgICAgIG9uTW91c2VNb3ZlOiB0aGlzLmhhbmRsZU1vdmVcbiAgICAgIH0pLCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnBpblxuICAgICAgfSksIGNyZWF0ZUVsZW1lbnQoQ2xvY2tQb2ludGVyJDEsIHtcbiAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpc0lubmVyOiBpc1BvaW50ZXJJbm5lcixcbiAgICAgICAgaGFzU2VsZWN0ZWQ6IHRoaXMuaGFzU2VsZWN0ZWQoKVxuICAgICAgfSksIGNoaWxkcmVuKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENsb2NrO1xufShDb21wb25lbnQpO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gQ2xvY2sucHJvcFR5cGVzID0ge1xuICB0eXBlOiBvbmVPZihPYmplY3Qua2V5cyhDbG9ja1R5cGUkMSkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gQ2xvY2tUeXBlJDFba2V5XTtcbiAgfSkpLmlzUmVxdWlyZWQsXG4gIHZhbHVlOiBudW1iZXIuaXNSZXF1aXJlZCxcbiAgb25DaGFuZ2U6IGZ1bmMuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IGFycmF5T2Yobm9kZSkuaXNSZXF1aXJlZCxcbiAgYW1wbTogYm9vbCxcbiAgbWludXRlc1N0ZXA6IG51bWJlcixcbiAgaW5uZXJSZWY6IGFueVxufSA6IHZvaWQgMDtcbkNsb2NrLmRlZmF1bHRQcm9wcyA9IHtcbiAgYW1wbTogZmFsc2UsXG4gIG1pbnV0ZXNTdGVwOiAxXG59O1xudmFyIHN0eWxlcyQxID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiBjcmVhdGVTdHlsZXMoe1xuICAgIGNvbnRhaW5lcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJyxcbiAgICAgIG1hcmdpbjogXCJcIi5jb25jYXQodGhlbWUuc3BhY2luZygyKSwgXCJweCAwIFwiKS5jb25jYXQodGhlbWUuc3BhY2luZygxKSwgXCJweFwiKVxuICAgIH0sXG4gICAgY2xvY2s6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsLjA3KScsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgaGVpZ2h0OiAyNjAsXG4gICAgICB3aWR0aDogMjYwLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICB6SW5kZXg6IDFcbiAgICB9LFxuICAgIHNxdWFyZU1hc2s6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ2F1dG8nLFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgdG91Y2hBY3Rpb25zOiAnbm9uZScsXG4gICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGN1cnNvcjogJ21vdmUnXG4gICAgICB9XG4gICAgfSxcbiAgICBwaW46IHtcbiAgICAgIHdpZHRoOiA2LFxuICAgICAgaGVpZ2h0OiA2LFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogJzUwJScsXG4gICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSdcbiAgICB9XG4gIH0pO1xufTtcbnZhciBDbG9jayQxID0gd2l0aFN0eWxlcyhzdHlsZXMkMSwge1xuICBuYW1lOiAnTXVpUGlja2Vyc0Nsb2NrJ1xufSkoQ2xvY2spO1xuXG5leHBvcnQgeyBDbG9jayBhcyBDLCBDbG9jayQxIGFzIGEsIENsb2NrVHlwZSQxIGFzIGIsIGNvbnZlcnRUb01lcmlkaWVtIGFzIGMsIGdldE1lcmlkaWVtIGFzIGcsIHN0eWxlcyQxIGFzIHMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNsb2NrLTEzYzhmMzNkLmpzLm1hcFxuIiwiaW1wb3J0IHsgdXNlTWVtbywgY3JlYXRlRWxlbWVudCwgbWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG9iamVjdCwgZnVuYywgYm9vbCwgbnVtYmVyLCBvbmVPZiB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdSBhcyB1c2VVdGlscyB9IGZyb20gJy4vdXNlVXRpbHMtY2ZiOTZhYzkuanMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMnO1xuaW1wb3J0IHsgYiBhcyBDbG9ja1R5cGUsIGcgYXMgZ2V0TWVyaWRpZW0sIGMgYXMgY29udmVydFRvTWVyaWRpZW0sIGEgYXMgQ2xvY2sgfSBmcm9tICcuL0Nsb2NrLTEzYzhmMzNkLmpzJztcblxudmFyIHBvc2l0aW9ucyA9IHtcbiAgMDogWzAsIDQwXSxcbiAgMTogWzU1LCAxOS42XSxcbiAgMjogWzk0LjQsIDU5LjVdLFxuICAzOiBbMTA5LCAxMTRdLFxuICA0OiBbOTQuNCwgMTY4LjVdLFxuICA1OiBbNTQuNSwgMjA4LjRdLFxuICA2OiBbMCwgMjIzXSxcbiAgNzogWy01NC41LCAyMDguNF0sXG4gIDg6IFstOTQuNCwgMTY4LjVdLFxuICA5OiBbLTEwOSwgMTE0XSxcbiAgMTA6IFstOTQuNCwgNTkuNV0sXG4gIDExOiBbLTU0LjUsIDE5LjZdLFxuICAxMjogWzAsIDVdLFxuICAxMzogWzM2LjksIDQ5LjldLFxuICAxNDogWzY0LCA3N10sXG4gIDE1OiBbNzQsIDExNF0sXG4gIDE2OiBbNjQsIDE1MV0sXG4gIDE3OiBbMzcsIDE3OF0sXG4gIDE4OiBbMCwgMTg4XSxcbiAgMTk6IFstMzcsIDE3OF0sXG4gIDIwOiBbLTY0LCAxNTFdLFxuICAyMTogWy03NCwgMTE0XSxcbiAgMjI6IFstNjQsIDc3XSxcbiAgMjM6IFstMzcsIDUwXVxufTtcbnZhciB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKGZ1bmN0aW9uICh0aGVtZSkge1xuICB2YXIgc2l6ZSA9IHRoZW1lLnNwYWNpbmcoNCk7XG4gIHJldHVybiB7XG4gICAgY2xvY2tOdW1iZXI6IHtcbiAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgaGVpZ2h0OiAzMixcbiAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbGVmdDogXCJjYWxjKCgxMDAlIC0gXCIuY29uY2F0KHR5cGVvZiBzaXplID09PSAnbnVtYmVyJyA/IFwiXCIuY29uY2F0KHNpemUsIFwicHhcIikgOiBzaXplLCBcIikgLyAyKVwiKSxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnkgOiB0aGVtZS5wYWxldHRlLnRleHQuaGludFxuICAgIH0sXG4gICAgY2xvY2tOdW1iZXJTZWxlY3RlZDoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5jb250cmFzdFRleHRcbiAgICB9XG4gIH07XG59LCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJzQ2xvY2tOdW1iZXInXG59KTtcbnZhciBDbG9ja051bWJlciA9IGZ1bmN0aW9uIENsb2NrTnVtYmVyKF9yZWYpIHtcbiAgdmFyIHNlbGVjdGVkID0gX3JlZi5zZWxlY3RlZCxcbiAgICAgIGxhYmVsID0gX3JlZi5sYWJlbCxcbiAgICAgIGluZGV4ID0gX3JlZi5pbmRleCxcbiAgICAgIGlzSW5uZXIgPSBfcmVmLmlzSW5uZXI7XG4gIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHZhciBjbGFzc05hbWUgPSBjbHN4KGNsYXNzZXMuY2xvY2tOdW1iZXIsIHNlbGVjdGVkICYmIGNsYXNzZXMuY2xvY2tOdW1iZXJTZWxlY3RlZCk7XG4gIHZhciB0cmFuc2Zvcm1TdHlsZSA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciBwb3NpdGlvbiA9IHBvc2l0aW9uc1tpbmRleF07XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoXCIuY29uY2F0KHBvc2l0aW9uWzBdLCBcInB4LCBcIikuY29uY2F0KHBvc2l0aW9uWzFdLCBcInB4XCIpXG4gICAgfTtcbiAgfSwgW2luZGV4XSk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHtcbiAgICBjb21wb25lbnQ6IFwic3BhblwiLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgIHZhcmlhbnQ6IGlzSW5uZXIgPyAnYm9keTInIDogJ2JvZHkxJyxcbiAgICBzdHlsZTogdHJhbnNmb3JtU3R5bGUsXG4gICAgY2hpbGRyZW46IGxhYmVsXG4gIH0pO1xufTtcblxudmFyIGdldEhvdXJOdW1iZXJzID0gZnVuY3Rpb24gZ2V0SG91ck51bWJlcnMoX3JlZikge1xuICB2YXIgYW1wbSA9IF9yZWYuYW1wbSxcbiAgICAgIHV0aWxzID0gX3JlZi51dGlscyxcbiAgICAgIGRhdGUgPSBfcmVmLmRhdGU7XG4gIHZhciBjdXJyZW50SG91cnMgPSB1dGlscy5nZXRIb3VycyhkYXRlKTtcbiAgdmFyIGhvdXJOdW1iZXJzID0gW107XG4gIHZhciBzdGFydEhvdXIgPSBhbXBtID8gMSA6IDA7XG4gIHZhciBlbmRIb3VyID0gYW1wbSA/IDEyIDogMjM7XG5cbiAgdmFyIGlzU2VsZWN0ZWQgPSBmdW5jdGlvbiBpc1NlbGVjdGVkKGhvdXIpIHtcbiAgICBpZiAoYW1wbSkge1xuICAgICAgaWYgKGhvdXIgPT09IDEyKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50SG91cnMgPT09IDEyIHx8IGN1cnJlbnRIb3VycyA9PT0gMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGN1cnJlbnRIb3VycyA9PT0gaG91ciB8fCBjdXJyZW50SG91cnMgLSAxMiA9PT0gaG91cjtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudEhvdXJzID09PSBob3VyO1xuICB9O1xuXG4gIGZvciAodmFyIGhvdXIgPSBzdGFydEhvdXI7IGhvdXIgPD0gZW5kSG91cjsgaG91ciArPSAxKSB7XG4gICAgdmFyIGxhYmVsID0gaG91ci50b1N0cmluZygpO1xuXG4gICAgaWYgKGhvdXIgPT09IDApIHtcbiAgICAgIGxhYmVsID0gJzAwJztcbiAgICB9XG5cbiAgICB2YXIgcHJvcHMgPSB7XG4gICAgICBpbmRleDogaG91cixcbiAgICAgIGxhYmVsOiB1dGlscy5mb3JtYXROdW1iZXIobGFiZWwpLFxuICAgICAgc2VsZWN0ZWQ6IGlzU2VsZWN0ZWQoaG91ciksXG4gICAgICBpc0lubmVyOiAhYW1wbSAmJiAoaG91ciA9PT0gMCB8fCBob3VyID4gMTIpXG4gICAgfTtcbiAgICBob3VyTnVtYmVycy5wdXNoKGNyZWF0ZUVsZW1lbnQoQ2xvY2tOdW1iZXIsIF9leHRlbmRzKHtcbiAgICAgIGtleTogaG91clxuICAgIH0sIHByb3BzKSkpO1xuICB9XG5cbiAgcmV0dXJuIGhvdXJOdW1iZXJzO1xufTtcbnZhciBnZXRNaW51dGVzTnVtYmVycyA9IGZ1bmN0aW9uIGdldE1pbnV0ZXNOdW1iZXJzKF9yZWYyKSB7XG4gIHZhciB2YWx1ZSA9IF9yZWYyLnZhbHVlLFxuICAgICAgdXRpbHMgPSBfcmVmMi51dGlscztcbiAgdmFyIGYgPSB1dGlscy5mb3JtYXROdW1iZXI7XG4gIHJldHVybiBbY3JlYXRlRWxlbWVudChDbG9ja051bWJlciwge1xuICAgIGxhYmVsOiBmKCcwMCcpLFxuICAgIHNlbGVjdGVkOiB2YWx1ZSA9PT0gMCxcbiAgICBpbmRleDogMTIsXG4gICAga2V5OiAxMlxuICB9KSwgY3JlYXRlRWxlbWVudChDbG9ja051bWJlciwge1xuICAgIGxhYmVsOiBmKCcwNScpLFxuICAgIHNlbGVjdGVkOiB2YWx1ZSA9PT0gNSxcbiAgICBpbmRleDogMSxcbiAgICBrZXk6IDFcbiAgfSksIGNyZWF0ZUVsZW1lbnQoQ2xvY2tOdW1iZXIsIHtcbiAgICBsYWJlbDogZignMTAnKSxcbiAgICBzZWxlY3RlZDogdmFsdWUgPT09IDEwLFxuICAgIGluZGV4OiAyLFxuICAgIGtleTogMlxuICB9KSwgY3JlYXRlRWxlbWVudChDbG9ja051bWJlciwge1xuICAgIGxhYmVsOiBmKCcxNScpLFxuICAgIHNlbGVjdGVkOiB2YWx1ZSA9PT0gMTUsXG4gICAgaW5kZXg6IDMsXG4gICAga2V5OiAzXG4gIH0pLCBjcmVhdGVFbGVtZW50KENsb2NrTnVtYmVyLCB7XG4gICAgbGFiZWw6IGYoJzIwJyksXG4gICAgc2VsZWN0ZWQ6IHZhbHVlID09PSAyMCxcbiAgICBpbmRleDogNCxcbiAgICBrZXk6IDRcbiAgfSksIGNyZWF0ZUVsZW1lbnQoQ2xvY2tOdW1iZXIsIHtcbiAgICBsYWJlbDogZignMjUnKSxcbiAgICBzZWxlY3RlZDogdmFsdWUgPT09IDI1LFxuICAgIGluZGV4OiA1LFxuICAgIGtleTogNVxuICB9KSwgY3JlYXRlRWxlbWVudChDbG9ja051bWJlciwge1xuICAgIGxhYmVsOiBmKCczMCcpLFxuICAgIHNlbGVjdGVkOiB2YWx1ZSA9PT0gMzAsXG4gICAgaW5kZXg6IDYsXG4gICAga2V5OiA2XG4gIH0pLCBjcmVhdGVFbGVtZW50KENsb2NrTnVtYmVyLCB7XG4gICAgbGFiZWw6IGYoJzM1JyksXG4gICAgc2VsZWN0ZWQ6IHZhbHVlID09PSAzNSxcbiAgICBpbmRleDogNyxcbiAgICBrZXk6IDdcbiAgfSksIGNyZWF0ZUVsZW1lbnQoQ2xvY2tOdW1iZXIsIHtcbiAgICBsYWJlbDogZignNDAnKSxcbiAgICBzZWxlY3RlZDogdmFsdWUgPT09IDQwLFxuICAgIGluZGV4OiA4LFxuICAgIGtleTogOFxuICB9KSwgY3JlYXRlRWxlbWVudChDbG9ja051bWJlciwge1xuICAgIGxhYmVsOiBmKCc0NScpLFxuICAgIHNlbGVjdGVkOiB2YWx1ZSA9PT0gNDUsXG4gICAgaW5kZXg6IDksXG4gICAga2V5OiA5XG4gIH0pLCBjcmVhdGVFbGVtZW50KENsb2NrTnVtYmVyLCB7XG4gICAgbGFiZWw6IGYoJzUwJyksXG4gICAgc2VsZWN0ZWQ6IHZhbHVlID09PSA1MCxcbiAgICBpbmRleDogMTAsXG4gICAga2V5OiAxMFxuICB9KSwgY3JlYXRlRWxlbWVudChDbG9ja051bWJlciwge1xuICAgIGxhYmVsOiBmKCc1NScpLFxuICAgIHNlbGVjdGVkOiB2YWx1ZSA9PT0gNTUsXG4gICAgaW5kZXg6IDExLFxuICAgIGtleTogMTFcbiAgfSldO1xufTtcblxudmFyIENsb2NrVmlldyA9IGZ1bmN0aW9uIENsb2NrVmlldyhfcmVmKSB7XG4gIHZhciB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgb25Ib3VyQ2hhbmdlID0gX3JlZi5vbkhvdXJDaGFuZ2UsXG4gICAgICBvbk1pbnV0ZXNDaGFuZ2UgPSBfcmVmLm9uTWludXRlc0NoYW5nZSxcbiAgICAgIG9uU2Vjb25kc0NoYW5nZSA9IF9yZWYub25TZWNvbmRzQ2hhbmdlLFxuICAgICAgYW1wbSA9IF9yZWYuYW1wbSxcbiAgICAgIGRhdGUgPSBfcmVmLmRhdGUsXG4gICAgICBtaW51dGVzU3RlcCA9IF9yZWYubWludXRlc1N0ZXA7XG4gIHZhciB1dGlscyA9IHVzZVV0aWxzKCk7XG4gIHZhciB2aWV3UHJvcHMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgQ2xvY2tUeXBlLkhPVVJTOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiB1dGlscy5nZXRIb3VycyhkYXRlKSxcbiAgICAgICAgICBjaGlsZHJlbjogZ2V0SG91ck51bWJlcnMoe1xuICAgICAgICAgICAgZGF0ZTogZGF0ZSxcbiAgICAgICAgICAgIHV0aWxzOiB1dGlscyxcbiAgICAgICAgICAgIGFtcG06IEJvb2xlYW4oYW1wbSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUsIGlzRmluaXNoKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudE1lcmlkaWVtID0gZ2V0TWVyaWRpZW0oZGF0ZSwgdXRpbHMpO1xuICAgICAgICAgICAgdmFyIHVwZGF0ZWRUaW1lV2l0aE1lcmlkaWVtID0gY29udmVydFRvTWVyaWRpZW0odXRpbHMuc2V0SG91cnMoZGF0ZSwgdmFsdWUpLCBjdXJyZW50TWVyaWRpZW0sIEJvb2xlYW4oYW1wbSksIHV0aWxzKTtcbiAgICAgICAgICAgIG9uSG91ckNoYW5nZSh1cGRhdGVkVGltZVdpdGhNZXJpZGllbSwgaXNGaW5pc2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgY2FzZSBDbG9ja1R5cGUuTUlOVVRFUzpcbiAgICAgICAgdmFyIG1pbnV0ZXNWYWx1ZSA9IHV0aWxzLmdldE1pbnV0ZXMoZGF0ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IG1pbnV0ZXNWYWx1ZSxcbiAgICAgICAgICBjaGlsZHJlbjogZ2V0TWludXRlc051bWJlcnMoe1xuICAgICAgICAgICAgdmFsdWU6IG1pbnV0ZXNWYWx1ZSxcbiAgICAgICAgICAgIHV0aWxzOiB1dGlsc1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSwgaXNGaW5pc2gpIHtcbiAgICAgICAgICAgIHZhciB1cGRhdGVkVGltZSA9IHV0aWxzLnNldE1pbnV0ZXMoZGF0ZSwgdmFsdWUpO1xuICAgICAgICAgICAgb25NaW51dGVzQ2hhbmdlKHVwZGF0ZWRUaW1lLCBpc0ZpbmlzaCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICBjYXNlIENsb2NrVHlwZS5TRUNPTkRTOlxuICAgICAgICB2YXIgc2Vjb25kc1ZhbHVlID0gdXRpbHMuZ2V0U2Vjb25kcyhkYXRlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogc2Vjb25kc1ZhbHVlLFxuICAgICAgICAgIGNoaWxkcmVuOiBnZXRNaW51dGVzTnVtYmVycyh7XG4gICAgICAgICAgICB2YWx1ZTogc2Vjb25kc1ZhbHVlLFxuICAgICAgICAgICAgdXRpbHM6IHV0aWxzXG4gICAgICAgICAgfSksXG4gICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlLCBpc0ZpbmlzaCkge1xuICAgICAgICAgICAgdmFyIHVwZGF0ZWRUaW1lID0gdXRpbHMuc2V0U2Vjb25kcyhkYXRlLCB2YWx1ZSk7XG4gICAgICAgICAgICBvblNlY29uZHNDaGFuZ2UodXBkYXRlZFRpbWUsIGlzRmluaXNoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3QgcHJvdmlkZSB0aGUgdHlwZSBmb3IgVGltZVBpY2tlclZpZXcnKTtcbiAgICB9XG4gIH0sIFthbXBtLCBkYXRlLCBvbkhvdXJDaGFuZ2UsIG9uTWludXRlc0NoYW5nZSwgb25TZWNvbmRzQ2hhbmdlLCB0eXBlLCB1dGlsc10pO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChDbG9jaywgX2V4dGVuZHMoe1xuICAgIHR5cGU6IHR5cGUsXG4gICAgYW1wbTogYW1wbSxcbiAgICBtaW51dGVzU3RlcDogbWludXRlc1N0ZXBcbiAgfSwgdmlld1Byb3BzKSk7XG59O1xuQ2xvY2tWaWV3LmRpc3BsYXlOYW1lID0gJ1RpbWVQaWNrZXJWaWV3JztcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IENsb2NrVmlldy5wcm9wVHlwZXMgPSB7XG4gIGRhdGU6IG9iamVjdC5pc1JlcXVpcmVkLFxuICBvbkhvdXJDaGFuZ2U6IGZ1bmMuaXNSZXF1aXJlZCxcbiAgb25NaW51dGVzQ2hhbmdlOiBmdW5jLmlzUmVxdWlyZWQsXG4gIG9uU2Vjb25kc0NoYW5nZTogZnVuYy5pc1JlcXVpcmVkLFxuICBhbXBtOiBib29sLFxuICBtaW51dGVzU3RlcDogbnVtYmVyLFxuICB0eXBlOiBvbmVPZihPYmplY3Qua2V5cyhDbG9ja1R5cGUpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIENsb2NrVHlwZVtrZXldO1xuICB9KSkuaXNSZXF1aXJlZFxufSA6IHZvaWQgMDtcbkNsb2NrVmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gIGFtcG06IHRydWUsXG4gIG1pbnV0ZXNTdGVwOiAxXG59O1xudmFyIENsb2NrVmlldyQxID0gbWVtbyhDbG9ja1ZpZXcpO1xuXG5leHBvcnQgZGVmYXVsdCBDbG9ja1ZpZXckMTtcbmV4cG9ydCB7IENsb2NrVmlldyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q2xvY2tWaWV3LmpzLm1hcFxuIiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgeyB1c2VNZW1vLCBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHUgYXMgdXNlVXRpbHMgfSBmcm9tICcuL3VzZVV0aWxzLWNmYjk2YWM5LmpzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgUCBhcyBQaWNrZXJUb29sYmFyLCBUIGFzIFRvb2xiYXJCdXR0b24sIG0gYXMgbWFrZVBpY2tlcldpdGhTdGF0ZSwgYSBhcyBQdXJlRGF0ZUlucHV0LCB1IGFzIHVzZVBpY2tlclN0YXRlLCBLIGFzIEtleWJvYXJkRGF0ZUlucHV0LCBiIGFzIHVzZUtleWJvYXJkUGlja2VyU3RhdGUgfSBmcm9tICcuL21ha2VQaWNrZXJXaXRoU3RhdGUtZmVlMzk3NjUuanMnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCAnLi9XcmFwcGVyLTI0MTk2NmQ3LmpzJztcbmltcG9ydCB7IGkgYXMgaXNZZWFyT25seVZpZXcsIGIgYXMgaXNZZWFyQW5kTW9udGhWaWV3cywgZyBhcyBnZXRGb3JtYXRCeVZpZXdzIH0gZnJvbSAnLi9DYWxlbmRhci0xMWFlNjFmNi5qcyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudCc7XG5pbXBvcnQgJ3JpZm0nO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9TdmdJY29uJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheSc7XG5pbXBvcnQgeyBkIGFzIGRhdGVQaWNrZXJEZWZhdWx0UHJvcHMgfSBmcm9tICcuL1BpY2tlci0wOTEyYzQwMi5qcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cyc7XG5pbXBvcnQgJy4vRGF5LmpzJztcbmltcG9ydCAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXInO1xuaW1wb3J0ICcuL0Nsb2NrLTEzYzhmMzNkLmpzJztcbmltcG9ydCAnLi9DbG9ja1ZpZXcuanMnO1xuXG52YXIgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHRvb2xiYXI6IHtcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCdcbiAgfSxcbiAgdG9vbGJhckxhbmRzY2FwZToge1xuICAgIHBhZGRpbmc6IDE2XG4gIH0sXG4gIGRhdGVMYW5kc2NhcGU6IHtcbiAgICBtYXJnaW5SaWdodDogMTZcbiAgfVxufSwge1xuICBuYW1lOiAnTXVpUGlja2Vyc0RhdGVQaWNrZXJSb290J1xufSk7XG52YXIgRGF0ZVBpY2tlclRvb2xiYXIgPSBmdW5jdGlvbiBEYXRlUGlja2VyVG9vbGJhcihfcmVmKSB7XG4gIHZhciBkYXRlID0gX3JlZi5kYXRlLFxuICAgICAgdmlld3MgPSBfcmVmLnZpZXdzLFxuICAgICAgc2V0T3BlblZpZXcgPSBfcmVmLnNldE9wZW5WaWV3LFxuICAgICAgaXNMYW5kc2NhcGUgPSBfcmVmLmlzTGFuZHNjYXBlLFxuICAgICAgb3BlblZpZXcgPSBfcmVmLm9wZW5WaWV3O1xuICB2YXIgdXRpbHMgPSB1c2VVdGlscygpO1xuICB2YXIgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICB2YXIgaXNZZWFyT25seSA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBpc1llYXJPbmx5Vmlldyh2aWV3cyk7XG4gIH0sIFt2aWV3c10pO1xuICB2YXIgaXNZZWFyQW5kTW9udGggPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gaXNZZWFyQW5kTW9udGhWaWV3cyh2aWV3cyk7XG4gIH0sIFt2aWV3c10pO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChQaWNrZXJUb29sYmFyLCB7XG4gICAgaXNMYW5kc2NhcGU6IGlzTGFuZHNjYXBlLFxuICAgIGNsYXNzTmFtZTogY2xzeCghaXNZZWFyT25seSAmJiBjbGFzc2VzLnRvb2xiYXIsIGlzTGFuZHNjYXBlICYmIGNsYXNzZXMudG9vbGJhckxhbmRzY2FwZSlcbiAgfSwgY3JlYXRlRWxlbWVudChUb29sYmFyQnV0dG9uLCB7XG4gICAgdmFyaWFudDogaXNZZWFyT25seSA/ICdoMycgOiAnc3VidGl0bGUxJyxcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgcmV0dXJuIHNldE9wZW5WaWV3KCd5ZWFyJyk7XG4gICAgfSxcbiAgICBzZWxlY3RlZDogb3BlblZpZXcgPT09ICd5ZWFyJyxcbiAgICBsYWJlbDogdXRpbHMuZ2V0WWVhclRleHQoZGF0ZSlcbiAgfSksICFpc1llYXJPbmx5ICYmICFpc1llYXJBbmRNb250aCAmJiBjcmVhdGVFbGVtZW50KFRvb2xiYXJCdXR0b24sIHtcbiAgICB2YXJpYW50OiBcImg0XCIsXG4gICAgc2VsZWN0ZWQ6IG9wZW5WaWV3ID09PSAnZGF0ZScsXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIHJldHVybiBzZXRPcGVuVmlldygnZGF0ZScpO1xuICAgIH0sXG4gICAgYWxpZ246IGlzTGFuZHNjYXBlID8gJ2xlZnQnIDogJ2NlbnRlcicsXG4gICAgbGFiZWw6IHV0aWxzLmdldERhdGVQaWNrZXJIZWFkZXJUZXh0KGRhdGUpLFxuICAgIGNsYXNzTmFtZTogY2xzeChpc0xhbmRzY2FwZSAmJiBjbGFzc2VzLmRhdGVMYW5kc2NhcGUpXG4gIH0pLCBpc1llYXJBbmRNb250aCAmJiBjcmVhdGVFbGVtZW50KFRvb2xiYXJCdXR0b24sIHtcbiAgICB2YXJpYW50OiBcImg0XCIsXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIHJldHVybiBzZXRPcGVuVmlldygnbW9udGgnKTtcbiAgICB9LFxuICAgIHNlbGVjdGVkOiBvcGVuVmlldyA9PT0gJ21vbnRoJyxcbiAgICBsYWJlbDogdXRpbHMuZ2V0TW9udGhUZXh0KGRhdGUpXG4gIH0pKTtcbn07XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBkZWZhdWx0UHJvcHMgPSBfb2JqZWN0U3ByZWFkKHt9LCBkYXRlUGlja2VyRGVmYXVsdFByb3BzLCB7XG4gIG9wZW5UbzogJ2RhdGUnLFxuICB2aWV3czogWyd5ZWFyJywgJ2RhdGUnXVxufSk7XG5cbmZ1bmN0aW9uIHVzZU9wdGlvbnMocHJvcHMpIHtcbiAgdmFyIHV0aWxzID0gdXNlVXRpbHMoKTtcbiAgcmV0dXJuIHtcbiAgICBnZXREZWZhdWx0Rm9ybWF0OiBmdW5jdGlvbiBnZXREZWZhdWx0Rm9ybWF0KCkge1xuICAgICAgcmV0dXJuIGdldEZvcm1hdEJ5Vmlld3MocHJvcHMudmlld3MsIHV0aWxzKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBEYXRlUGlja2VyID0gbWFrZVBpY2tlcldpdGhTdGF0ZSh7XG4gIHVzZU9wdGlvbnM6IHVzZU9wdGlvbnMsXG4gIElucHV0OiBQdXJlRGF0ZUlucHV0LFxuICB1c2VTdGF0ZTogdXNlUGlja2VyU3RhdGUsXG4gIERlZmF1bHRUb29sYmFyQ29tcG9uZW50OiBEYXRlUGlja2VyVG9vbGJhclxufSk7XG52YXIgS2V5Ym9hcmREYXRlUGlja2VyID0gbWFrZVBpY2tlcldpdGhTdGF0ZSh7XG4gIHVzZU9wdGlvbnM6IHVzZU9wdGlvbnMsXG4gIElucHV0OiBLZXlib2FyZERhdGVJbnB1dCxcbiAgdXNlU3RhdGU6IHVzZUtleWJvYXJkUGlja2VyU3RhdGUsXG4gIERlZmF1bHRUb29sYmFyQ29tcG9uZW50OiBEYXRlUGlja2VyVG9vbGJhclxufSk7XG5EYXRlUGlja2VyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbktleWJvYXJkRGF0ZVBpY2tlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCB7IERhdGVQaWNrZXIsIEtleWJvYXJkRGF0ZVBpY2tlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RGF0ZVBpY2tlci5qcy5tYXBcbiIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IFJlYWN0X19kZWZhdWx0LCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHUgYXMgdXNlVXRpbHMgfSBmcm9tICcuL3VzZVV0aWxzLWNmYjk2YWM5LmpzJztcbmltcG9ydCAnY2xzeCc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgUCBhcyBQaWNrZXJUb29sYmFyLCBUIGFzIFRvb2xiYXJCdXR0b24sIGMgYXMgVG9vbGJhclRleHQsIG0gYXMgbWFrZVBpY2tlcldpdGhTdGF0ZSwgYSBhcyBQdXJlRGF0ZUlucHV0LCB1IGFzIHVzZVBpY2tlclN0YXRlLCBLIGFzIEtleWJvYXJkRGF0ZUlucHV0LCBiIGFzIHVzZUtleWJvYXJkUGlja2VyU3RhdGUsIHAgYXMgcGljazEyaE9yMjRoRm9ybWF0IH0gZnJvbSAnLi9tYWtlUGlja2VyV2l0aFN0YXRlLWZlZTM5NzY1LmpzJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgJy4vV3JhcHBlci0yNDE5NjZkNy5qcyc7XG5pbXBvcnQgJy4vQ2FsZW5kYXItMTFhZTYxZjYuanMnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnQnO1xuaW1wb3J0ICdyaWZtJztcbmltcG9ydCBTdmdJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N2Z0ljb24nO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5JztcbmltcG9ydCB7IGEgYXMgZGF0ZVRpbWVQaWNrZXJEZWZhdWx0UHJvcHMgfSBmcm9tICcuL1BpY2tlci0wOTEyYzQwMi5qcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cyc7XG5pbXBvcnQgJy4vRGF5LmpzJztcbmltcG9ydCAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXInO1xuaW1wb3J0ICcuL0Nsb2NrLTEzYzhmMzNkLmpzJztcbmltcG9ydCAnLi9DbG9ja1ZpZXcuanMnO1xuaW1wb3J0IHsgdSBhcyB1c2VNZXJpZGllbU1vZGUgfSBmcm9tICcuL1RpbWVQaWNrZXJUb29sYmFyLTA1NjQ2Zjc2LmpzJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFRhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWInO1xuaW1wb3J0IFRhYnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFicyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuXG52YXIgVGltZUljb24gPSBmdW5jdGlvbiBUaW1lSWNvbihwcm9wcykge1xuICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChTdmdJY29uLCBwcm9wcywgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6TTEyIDIwYy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOHpcIlxuICB9KSwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIGQ6IFwiTTAgMGgyNHYyNEgwelwiXG4gIH0pLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTIuNSA3SDExdjZsNS4yNSAzLjE1Ljc1LTEuMjMtNC41LTIuNjd6XCJcbiAgfSkpO1xufTtcblxudmFyIERhdGVSYW5nZUljb24gPSBmdW5jdGlvbiBEYXRlUmFuZ2VJY29uKHByb3BzKSB7XG4gIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFN2Z0ljb24sIHByb3BzLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNOSAxMUg3djJoMnYtMnptNCAwaC0ydjJoMnYtMnptNCAwaC0ydjJoMnYtMnptMi03aC0xVjJoLTJ2Mkg4VjJINnYySDVjLTEuMTEgMC0xLjk5LjktMS45OSAyTDMgMjBjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNmMwLTEuMS0uOS0yLTItMnptMCAxNkg1VjloMTR2MTF6XCJcbiAgfSksIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBkOiBcIk0wIDBoMjR2MjRIMHpcIlxuICB9KSk7XG59O1xuXG52YXIgdmlld1RvVGFiSW5kZXggPSBmdW5jdGlvbiB2aWV3VG9UYWJJbmRleChvcGVuVmlldykge1xuICBpZiAob3BlblZpZXcgPT09ICdkYXRlJyB8fCBvcGVuVmlldyA9PT0gJ3llYXInKSB7XG4gICAgcmV0dXJuICdkYXRlJztcbiAgfVxuXG4gIHJldHVybiAndGltZSc7XG59O1xuXG52YXIgdGFiSW5kZXhUb1ZpZXcgPSBmdW5jdGlvbiB0YWJJbmRleFRvVmlldyh0YWIpIHtcbiAgaWYgKHRhYiA9PT0gJ2RhdGUnKSB7XG4gICAgcmV0dXJuICdkYXRlJztcbiAgfVxuXG4gIHJldHVybiAnaG91cnMnO1xufTtcblxudmFyIHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoZnVuY3Rpb24gKHRoZW1lKSB7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICB2YXIgdGFic0JhY2tncm91bmQgPSB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbiA6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZFtcImRlZmF1bHRcIl07XG4gIHJldHVybiB7XG4gICAgdGFiczoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KHRhYnNCYWNrZ3JvdW5kKSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGFic0JhY2tncm91bmRcbiAgICB9XG4gIH07XG59LCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJEVFRhYnMnXG59KTtcbnZhciBEYXRlVGltZVBpY2tlclRhYnMgPSBmdW5jdGlvbiBEYXRlVGltZVBpY2tlclRhYnMoX3JlZikge1xuICB2YXIgdmlldyA9IF9yZWYudmlldyxcbiAgICAgIG9uQ2hhbmdlID0gX3JlZi5vbkNoYW5nZSxcbiAgICAgIGRhdGVSYW5nZUljb24gPSBfcmVmLmRhdGVSYW5nZUljb24sXG4gICAgICB0aW1lSWNvbiA9IF9yZWYudGltZUljb247XG4gIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHZhciB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIHZhciBpbmRpY2F0b3JDb2xvciA9IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/ICdzZWNvbmRhcnknIDogJ3ByaW1hcnknO1xuXG4gIHZhciBoYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgIT09IHZpZXdUb1RhYkluZGV4KHZpZXcpKSB7XG4gICAgICBvbkNoYW5nZSh0YWJJbmRleFRvVmlldyh2YWx1ZSkpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gY3JlYXRlRWxlbWVudChQYXBlciwgbnVsbCwgY3JlYXRlRWxlbWVudChUYWJzLCB7XG4gICAgdmFyaWFudDogXCJmdWxsV2lkdGhcIixcbiAgICB2YWx1ZTogdmlld1RvVGFiSW5kZXgodmlldyksXG4gICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMudGFicyxcbiAgICBpbmRpY2F0b3JDb2xvcjogaW5kaWNhdG9yQ29sb3JcbiAgfSwgY3JlYXRlRWxlbWVudChUYWIsIHtcbiAgICB2YWx1ZTogXCJkYXRlXCIsXG4gICAgaWNvbjogY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgZGF0ZVJhbmdlSWNvbilcbiAgfSksIGNyZWF0ZUVsZW1lbnQoVGFiLCB7XG4gICAgdmFsdWU6IFwidGltZVwiLFxuICAgIGljb246IGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIHRpbWVJY29uKVxuICB9KSkpO1xufTtcbkRhdGVUaW1lUGlja2VyVGFicy5kZWZhdWx0UHJvcHMgPSB7XG4gIGRhdGVSYW5nZUljb246IGNyZWF0ZUVsZW1lbnQoRGF0ZVJhbmdlSWNvbiwgbnVsbCksXG4gIHRpbWVJY29uOiBjcmVhdGVFbGVtZW50KFRpbWVJY29uLCBudWxsKVxufTtcblxudmFyIHVzZVN0eWxlcyQxID0gbWFrZVN0eWxlcyhmdW5jdGlvbiAoXykge1xuICByZXR1cm4ge1xuICAgIHRvb2xiYXI6IHtcbiAgICAgIHBhZGRpbmdMZWZ0OiAxNixcbiAgICAgIHBhZGRpbmdSaWdodDogMTYsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCdcbiAgICB9LFxuICAgIHNlcGFyYXRvcjoge1xuICAgICAgbWFyZ2luOiAnMCA0cHggMCAycHgnLFxuICAgICAgY3Vyc29yOiAnZGVmYXVsdCdcbiAgICB9XG4gIH07XG59LCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJEVFRvb2xiYXInXG59KTtcbnZhciBEYXRlVGltZVBpY2tlclRvb2xiYXIgPSBmdW5jdGlvbiBEYXRlVGltZVBpY2tlclRvb2xiYXIoX3JlZikge1xuICB2YXIgZGF0ZSA9IF9yZWYuZGF0ZSxcbiAgICAgIG9wZW5WaWV3ID0gX3JlZi5vcGVuVmlldyxcbiAgICAgIHNldE9wZW5WaWV3ID0gX3JlZi5zZXRPcGVuVmlldyxcbiAgICAgIGFtcG0gPSBfcmVmLmFtcG0sXG4gICAgICBoaWRlVGFicyA9IF9yZWYuaGlkZVRhYnMsXG4gICAgICBkYXRlUmFuZ2VJY29uID0gX3JlZi5kYXRlUmFuZ2VJY29uLFxuICAgICAgdGltZUljb24gPSBfcmVmLnRpbWVJY29uLFxuICAgICAgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlO1xuICB2YXIgdXRpbHMgPSB1c2VVdGlscygpO1xuICB2YXIgY2xhc3NlcyA9IHVzZVN0eWxlcyQxKCk7XG4gIHZhciBzaG93VGFicyA9ICFoaWRlVGFicyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuaW5uZXJIZWlnaHQgPiA2Njc7XG5cbiAgdmFyIF91c2VNZXJpZGllbU1vZGUgPSB1c2VNZXJpZGllbU1vZGUoZGF0ZSwgYW1wbSwgb25DaGFuZ2UpLFxuICAgICAgbWVyaWRpZW1Nb2RlID0gX3VzZU1lcmlkaWVtTW9kZS5tZXJpZGllbU1vZGUsXG4gICAgICBoYW5kbGVNZXJpZGllbUNoYW5nZSA9IF91c2VNZXJpZGllbU1vZGUuaGFuZGxlTWVyaWRpZW1DaGFuZ2U7XG5cbiAgdmFyIHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgdmFyIHJ0bCA9IHRoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCc7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCBjcmVhdGVFbGVtZW50KFBpY2tlclRvb2xiYXIsIHtcbiAgICBpc0xhbmRzY2FwZTogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRvb2xiYXJcbiAgfSwgY3JlYXRlRWxlbWVudChHcmlkLCB7XG4gICAgY29udGFpbmVyOiB0cnVlLFxuICAgIGp1c3RpZnk6IFwiY2VudGVyXCIsXG4gICAgd3JhcDogXCJub3dyYXBcIlxuICB9LCBjcmVhdGVFbGVtZW50KEdyaWQsIHtcbiAgICBpdGVtOiB0cnVlLFxuICAgIGNvbnRhaW5lcjogdHJ1ZSxcbiAgICB4czogNSxcbiAgICBqdXN0aWZ5OiBcImZsZXgtc3RhcnRcIixcbiAgICBkaXJlY3Rpb246IFwiY29sdW1uXCJcbiAgfSwgY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBjcmVhdGVFbGVtZW50KFRvb2xiYXJCdXR0b24sIHtcbiAgICB2YXJpYW50OiBcInN1YnRpdGxlMVwiLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICByZXR1cm4gc2V0T3BlblZpZXcoJ3llYXInKTtcbiAgICB9LFxuICAgIHNlbGVjdGVkOiBvcGVuVmlldyA9PT0gJ3llYXInLFxuICAgIGxhYmVsOiB1dGlscy5nZXRZZWFyVGV4dChkYXRlKVxuICB9KSksIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgY3JlYXRlRWxlbWVudChUb29sYmFyQnV0dG9uLCB7XG4gICAgdmFyaWFudDogXCJoNFwiLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICByZXR1cm4gc2V0T3BlblZpZXcoJ2RhdGUnKTtcbiAgICB9LFxuICAgIHNlbGVjdGVkOiBvcGVuVmlldyA9PT0gJ2RhdGUnLFxuICAgIGxhYmVsOiB1dGlscy5nZXREYXRlVGltZVBpY2tlckhlYWRlclRleHQoZGF0ZSlcbiAgfSkpKSwgY3JlYXRlRWxlbWVudChHcmlkLCB7XG4gICAgaXRlbTogdHJ1ZSxcbiAgICBjb250YWluZXI6IHRydWUsXG4gICAgeHM6IDYsXG4gICAganVzdGlmeTogXCJjZW50ZXJcIixcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtZW5kXCIsXG4gICAgZGlyZWN0aW9uOiBydGwgPyAncm93LXJldmVyc2UnIDogJ3JvdydcbiAgfSwgY3JlYXRlRWxlbWVudChUb29sYmFyQnV0dG9uLCB7XG4gICAgdmFyaWFudDogXCJoM1wiLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICByZXR1cm4gc2V0T3BlblZpZXcoJ2hvdXJzJyk7XG4gICAgfSxcbiAgICBzZWxlY3RlZDogb3BlblZpZXcgPT09ICdob3VycycsXG4gICAgbGFiZWw6IHV0aWxzLmdldEhvdXJUZXh0KGRhdGUsIGFtcG0pXG4gIH0pLCBjcmVhdGVFbGVtZW50KFRvb2xiYXJUZXh0LCB7XG4gICAgdmFyaWFudDogXCJoM1wiLFxuICAgIGxhYmVsOiBcIjpcIixcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMuc2VwYXJhdG9yXG4gIH0pLCBjcmVhdGVFbGVtZW50KFRvb2xiYXJCdXR0b24sIHtcbiAgICB2YXJpYW50OiBcImgzXCIsXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIHJldHVybiBzZXRPcGVuVmlldygnbWludXRlcycpO1xuICAgIH0sXG4gICAgc2VsZWN0ZWQ6IG9wZW5WaWV3ID09PSAnbWludXRlcycsXG4gICAgbGFiZWw6IHV0aWxzLmdldE1pbnV0ZVRleHQoZGF0ZSlcbiAgfSkpLCBhbXBtICYmIGNyZWF0ZUVsZW1lbnQoR3JpZCwge1xuICAgIGl0ZW06IHRydWUsXG4gICAgY29udGFpbmVyOiB0cnVlLFxuICAgIHhzOiAxLFxuICAgIGRpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBqdXN0aWZ5OiBcImZsZXgtZW5kXCJcbiAgfSwgY3JlYXRlRWxlbWVudChUb29sYmFyQnV0dG9uLCB7XG4gICAgdmFyaWFudDogXCJzdWJ0aXRsZTFcIixcbiAgICBzZWxlY3RlZDogbWVyaWRpZW1Nb2RlID09PSAnYW0nLFxuICAgIGxhYmVsOiB1dGlscy5nZXRNZXJpZGllbVRleHQoJ2FtJyksXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIHJldHVybiBoYW5kbGVNZXJpZGllbUNoYW5nZSgnYW0nKTtcbiAgICB9XG4gIH0pLCBjcmVhdGVFbGVtZW50KFRvb2xiYXJCdXR0b24sIHtcbiAgICB2YXJpYW50OiBcInN1YnRpdGxlMVwiLFxuICAgIHNlbGVjdGVkOiBtZXJpZGllbU1vZGUgPT09ICdwbScsXG4gICAgbGFiZWw6IHV0aWxzLmdldE1lcmlkaWVtVGV4dCgncG0nKSxcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgcmV0dXJuIGhhbmRsZU1lcmlkaWVtQ2hhbmdlKCdwbScpO1xuICAgIH1cbiAgfSkpKSksIHNob3dUYWJzICYmIGNyZWF0ZUVsZW1lbnQoRGF0ZVRpbWVQaWNrZXJUYWJzLCB7XG4gICAgZGF0ZVJhbmdlSWNvbjogZGF0ZVJhbmdlSWNvbixcbiAgICB0aW1lSWNvbjogdGltZUljb24sXG4gICAgdmlldzogb3BlblZpZXcsXG4gICAgb25DaGFuZ2U6IHNldE9wZW5WaWV3XG4gIH0pKTtcbn07XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBkZWZhdWx0UHJvcHMgPSBfb2JqZWN0U3ByZWFkKHt9LCBkYXRlVGltZVBpY2tlckRlZmF1bHRQcm9wcywge1xuICB3aWRlcjogdHJ1ZSxcbiAgb3JpZW50YXRpb246ICdwb3J0cmFpdCcsXG4gIG9wZW5UbzogJ2RhdGUnLFxuICB2aWV3czogWyd5ZWFyJywgJ2RhdGUnLCAnaG91cnMnLCAnbWludXRlcyddXG59KTtcblxuZnVuY3Rpb24gdXNlT3B0aW9ucyhwcm9wcykge1xuICB2YXIgdXRpbHMgPSB1c2VVdGlscygpO1xuXG4gIGlmIChwcm9wcy5vcmllbnRhdGlvbiAhPT0gJ3BvcnRyYWl0Jykge1xuICAgIHRocm93IG5ldyBFcnJvcignV2UgYXJlIG5vdCBzdXBwb3J0aW5nIGN1c3RvbSBvcmllbnRhdGlvbiBmb3IgRGF0ZVRpbWVQaWNrZXIgeWV0IDooJyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldERlZmF1bHRGb3JtYXQ6IGZ1bmN0aW9uIGdldERlZmF1bHRGb3JtYXQoKSB7XG4gICAgICByZXR1cm4gcGljazEyaE9yMjRoRm9ybWF0KHByb3BzLmZvcm1hdCwgcHJvcHMuYW1wbSwge1xuICAgICAgICAnMTJoJzogdXRpbHMuZGF0ZVRpbWUxMmhGb3JtYXQsXG4gICAgICAgICcyNGgnOiB1dGlscy5kYXRlVGltZTI0aEZvcm1hdFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuXG52YXIgRGF0ZVRpbWVQaWNrZXIgPSBtYWtlUGlja2VyV2l0aFN0YXRlKHtcbiAgdXNlT3B0aW9uczogdXNlT3B0aW9ucyxcbiAgSW5wdXQ6IFB1cmVEYXRlSW5wdXQsXG4gIHVzZVN0YXRlOiB1c2VQaWNrZXJTdGF0ZSxcbiAgRGVmYXVsdFRvb2xiYXJDb21wb25lbnQ6IERhdGVUaW1lUGlja2VyVG9vbGJhclxufSk7XG52YXIgS2V5Ym9hcmREYXRlVGltZVBpY2tlciA9IG1ha2VQaWNrZXJXaXRoU3RhdGUoe1xuICB1c2VPcHRpb25zOiB1c2VPcHRpb25zLFxuICBJbnB1dDogS2V5Ym9hcmREYXRlSW5wdXQsXG4gIHVzZVN0YXRlOiB1c2VLZXlib2FyZFBpY2tlclN0YXRlLFxuICBEZWZhdWx0VG9vbGJhckNvbXBvbmVudDogRGF0ZVRpbWVQaWNrZXJUb29sYmFyLFxuICBnZXRDdXN0b21Qcm9wczogZnVuY3Rpb24gZ2V0Q3VzdG9tUHJvcHMocHJvcHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVmdXNlOiBwcm9wcy5hbXBtID8gL1teXFxkYXBdKy9naSA6IC9bXlxcZF0rL2dpXG4gICAgfTtcbiAgfVxufSk7XG5EYXRlVGltZVBpY2tlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5LZXlib2FyZERhdGVUaW1lUGlja2VyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IHsgRGF0ZVRpbWVQaWNrZXIsIEtleWJvYXJkRGF0ZVRpbWVQaWNrZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPURhdGVUaW1lUGlja2VyLmpzLm1hcFxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJvb2wgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5cbnZhciB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKGZ1bmN0aW9uICh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIGRheToge1xuICAgICAgd2lkdGg6IDM2LFxuICAgICAgaGVpZ2h0OiAzNixcbiAgICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LmNhcHRpb24uZm9udFNpemUsXG4gICAgICBtYXJnaW46ICcwIDJweCcsXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW0sXG4gICAgICBwYWRkaW5nOiAwXG4gICAgfSxcbiAgICBoaWRkZW46IHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgICB9LFxuICAgIGN1cnJlbnQ6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgIGZvbnRXZWlnaHQ6IDYwMFxuICAgIH0sXG4gICAgZGF5U2VsZWN0ZWQ6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuY29udHJhc3RUZXh0LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gICAgICB9XG4gICAgfSxcbiAgICBkYXlEaXNhYmxlZDoge1xuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5oaW50XG4gICAgfVxuICB9O1xufSwge1xuICBuYW1lOiAnTXVpUGlja2Vyc0RheSdcbn0pO1xudmFyIERheSA9IGZ1bmN0aW9uIERheShfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBkaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQsXG4gICAgICBoaWRkZW4gPSBfcmVmLmhpZGRlbixcbiAgICAgIGN1cnJlbnQgPSBfcmVmLmN1cnJlbnQsXG4gICAgICBzZWxlY3RlZCA9IF9yZWYuc2VsZWN0ZWQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJjaGlsZHJlblwiLCBcImRpc2FibGVkXCIsIFwiaGlkZGVuXCIsIFwiY3VycmVudFwiLCBcInNlbGVjdGVkXCJdKTtcblxuICB2YXIgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICB2YXIgY2xhc3NOYW1lID0gY2xzeChjbGFzc2VzLmRheSwgaGlkZGVuICYmIGNsYXNzZXMuaGlkZGVuLCBjdXJyZW50ICYmIGNsYXNzZXMuY3VycmVudCwgc2VsZWN0ZWQgJiYgY2xhc3Nlcy5kYXlTZWxlY3RlZCwgZGlzYWJsZWQgJiYgY2xhc3Nlcy5kYXlEaXNhYmxlZCk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KEljb25CdXR0b24sIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICB0YWJJbmRleDogaGlkZGVuIHx8IGRpc2FibGVkID8gLTEgOiAwXG4gIH0sIG90aGVyKSwgY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCB7XG4gICAgdmFyaWFudDogXCJib2R5MlwiLFxuICAgIGNvbG9yOiBcImluaGVyaXRcIlxuICB9LCBjaGlsZHJlbikpO1xufTtcbkRheS5kaXNwbGF5TmFtZSA9ICdEYXknO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gRGF5LnByb3BUeXBlcyA9IHtcbiAgY3VycmVudDogYm9vbCxcbiAgZGlzYWJsZWQ6IGJvb2wsXG4gIGhpZGRlbjogYm9vbCxcbiAgc2VsZWN0ZWQ6IGJvb2xcbn0gOiB2b2lkIDA7XG5EYXkuZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIGhpZGRlbjogZmFsc2UsXG4gIGN1cnJlbnQ6IGZhbHNlLFxuICBzZWxlY3RlZDogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERheTtcbmV4cG9ydCB7IERheSwgdXNlU3R5bGVzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1EYXkuanMubWFwXG4iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgZm9yd2FyZFJlZiwgY3JlYXRlRWxlbWVudCwgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBvbmVPZlR5cGUsIG9iamVjdCwgc3RyaW5nLCBudW1iZXIsIGluc3RhbmNlT2YsIG9uZU9mIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1IGFzIHVzZVV0aWxzIH0gZnJvbSAnLi91c2VVdGlscy1jZmI5NmFjOS5qcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IGEgYXMgYXJyYXlJbmNsdWRlcywgViBhcyBWYXJpYW50Q29udGV4dCwgdSBhcyB1c2VJc29tb3JwaGljRWZmZWN0LCBiIGFzIFZJRVdfSEVJR0hULCBEIGFzIERJQUxPR19XSURUSCwgYyBhcyBESUFMT0dfV0lEVEhfV0lERVIgfSBmcm9tICcuL1dyYXBwZXItMjQxOTY2ZDcuanMnO1xuaW1wb3J0IHsgYSBhcyBDYWxlbmRhciB9IGZyb20gJy4vQ2FsZW5kYXItMTFhZTYxZjYuanMnO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXknO1xuaW1wb3J0IHsgQ2xvY2tWaWV3IH0gZnJvbSAnLi9DbG9ja1ZpZXcuanMnO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxudmFyIGRhdGUgPSBvbmVPZlR5cGUoW29iamVjdCwgc3RyaW5nLCBudW1iZXIsIGluc3RhbmNlT2YoRGF0ZSldKTtcbnZhciBkYXRlUGlja2VyVmlldyA9IG9uZU9mKFsneWVhcicsICdtb250aCcsICdkYXknXSk7XG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tb2JqZWN0LWxpdGVyYWwtdHlwZS1hc3NlcnRpb24gKi9cblxudmFyIHRpbWVQaWNrZXJEZWZhdWx0UHJvcHMgPSB7XG4gIGFtcG06IHRydWUsXG4gIGludmFsaWREYXRlTWVzc2FnZTogJ0ludmFsaWQgVGltZSBGb3JtYXQnXG59O1xudmFyIGRhdGVQaWNrZXJEZWZhdWx0UHJvcHMgPSB7XG4gIG1pbkRhdGU6IG5ldyBEYXRlKCcxOTAwLTAxLTAxJyksXG4gIG1heERhdGU6IG5ldyBEYXRlKCcyMTAwLTAxLTAxJyksXG4gIGludmFsaWREYXRlTWVzc2FnZTogJ0ludmFsaWQgRGF0ZSBGb3JtYXQnLFxuICBtaW5EYXRlTWVzc2FnZTogJ0RhdGUgc2hvdWxkIG5vdCBiZSBiZWZvcmUgbWluaW1hbCBkYXRlJyxcbiAgbWF4RGF0ZU1lc3NhZ2U6ICdEYXRlIHNob3VsZCBub3QgYmUgYWZ0ZXIgbWF4aW1hbCBkYXRlJyxcbiAgYWxsb3dLZXlib2FyZENvbnRyb2w6IHRydWVcbn07XG52YXIgZGF0ZVRpbWVQaWNrZXJEZWZhdWx0UHJvcHMgPSBfb2JqZWN0U3ByZWFkKHt9LCB0aW1lUGlja2VyRGVmYXVsdFByb3BzLCB7fSwgZGF0ZVBpY2tlckRlZmF1bHRQcm9wcywge1xuICBzaG93VGFiczogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIHVzZVZpZXdzKHZpZXdzLCBvcGVuVG8sIG9uQ2hhbmdlKSB7XG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSB1c2VTdGF0ZShvcGVuVG8gJiYgYXJyYXlJbmNsdWRlcyh2aWV3cywgb3BlblRvKSA/IG9wZW5UbyA6IHZpZXdzWzBdKSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuICAgICAgb3BlblZpZXcgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0T3BlblZpZXcgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBoYW5kbGVDaGFuZ2VBbmRPcGVuTmV4dCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChkYXRlLCBpc0ZpbmlzaCkge1xuICAgIHZhciBuZXh0Vmlld1RvT3BlbiA9IHZpZXdzW3ZpZXdzLmluZGV4T2Yob3BlblZpZXcpICsgMV07XG5cbiAgICBpZiAoaXNGaW5pc2ggJiYgbmV4dFZpZXdUb09wZW4pIHtcbiAgICAgIC8vIGRvIG5vdCBjbG9zZSBwaWNrZXIgaWYgbmVlZHMgdG8gc2hvdyBuZXh0IHZpZXdcbiAgICAgIG9uQ2hhbmdlKGRhdGUsIGZhbHNlKTtcbiAgICAgIHNldE9wZW5WaWV3KG5leHRWaWV3VG9PcGVuKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvbkNoYW5nZShkYXRlLCBCb29sZWFuKGlzRmluaXNoKSk7XG4gIH0sIFtvbkNoYW5nZSwgb3BlblZpZXcsIHZpZXdzXSk7XG4gIHJldHVybiB7XG4gICAgaGFuZGxlQ2hhbmdlQW5kT3Blbk5leHQ6IGhhbmRsZUNoYW5nZUFuZE9wZW5OZXh0LFxuICAgIG9wZW5WaWV3OiBvcGVuVmlldyxcbiAgICBzZXRPcGVuVmlldzogc2V0T3BlblZpZXdcbiAgfTtcbn1cblxudmFyIHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoZnVuY3Rpb24gKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgaGVpZ2h0OiA0MCxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW1cbiAgICAgIH1cbiAgICB9LFxuICAgIHllYXJTZWxlY3RlZDoge1xuICAgICAgbWFyZ2luOiAnMTBweCAwJyxcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bVxuICAgIH0sXG4gICAgeWVhckRpc2FibGVkOiB7XG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LmhpbnRcbiAgICB9XG4gIH07XG59LCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJzWWVhcidcbn0pO1xudmFyIFllYXIgPSBmdW5jdGlvbiBZZWFyKF9yZWYpIHtcbiAgdmFyIG9uU2VsZWN0ID0gX3JlZi5vblNlbGVjdCxcbiAgICAgIGZvcndhcmRlZFJlZiA9IF9yZWYuZm9yd2FyZGVkUmVmLFxuICAgICAgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgc2VsZWN0ZWQgPSBfcmVmLnNlbGVjdGVkLFxuICAgICAgZGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wib25TZWxlY3RcIiwgXCJmb3J3YXJkZWRSZWZcIiwgXCJ2YWx1ZVwiLCBcInNlbGVjdGVkXCIsIFwiZGlzYWJsZWRcIiwgXCJjaGlsZHJlblwiXSk7XG5cbiAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgdmFyIGhhbmRsZUNsaWNrID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBvblNlbGVjdCh2YWx1ZSk7XG4gIH0sIFtvblNlbGVjdCwgdmFsdWVdKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeSwgX2V4dGVuZHMoe1xuICAgIHJvbGU6IFwiYnV0dG9uXCIsXG4gICAgY29tcG9uZW50OiBcImRpdlwiLFxuICAgIHRhYkluZGV4OiBkaXNhYmxlZCA/IC0xIDogMCxcbiAgICBvbkNsaWNrOiBoYW5kbGVDbGljayxcbiAgICBvbktleVByZXNzOiBoYW5kbGVDbGljayxcbiAgICBjb2xvcjogc2VsZWN0ZWQgPyAncHJpbWFyeScgOiB1bmRlZmluZWQsXG4gICAgdmFyaWFudDogc2VsZWN0ZWQgPyAnaDUnIDogJ3N1YnRpdGxlMScsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIHJlZjogZm9yd2FyZGVkUmVmLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIHNlbGVjdGVkICYmIGNsYXNzZXMueWVhclNlbGVjdGVkLCBkaXNhYmxlZCAmJiBjbGFzc2VzLnllYXJEaXNhYmxlZClcbiAgfSwgb3RoZXIpKTtcbn07XG5ZZWFyLmRpc3BsYXlOYW1lID0gJ1llYXInO1xudmFyIFllYXIkMSA9IGZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoWWVhciwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgZm9yd2FyZGVkUmVmOiByZWZcbiAgfSkpO1xufSk7XG5cbnZhciB1c2VTdHlsZXMkMSA9IG1ha2VTdHlsZXMoe1xuICBjb250YWluZXI6IHtcbiAgICBoZWlnaHQ6IDMwMCxcbiAgICBvdmVyZmxvd1k6ICdhdXRvJ1xuICB9XG59LCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJzWWVhclNlbGVjdGlvbidcbn0pO1xudmFyIFllYXJTZWxlY3Rpb24gPSBmdW5jdGlvbiBZZWFyU2VsZWN0aW9uKF9yZWYpIHtcbiAgdmFyIGRhdGUgPSBfcmVmLmRhdGUsXG4gICAgICBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsXG4gICAgICBvblllYXJDaGFuZ2UgPSBfcmVmLm9uWWVhckNoYW5nZSxcbiAgICAgIG1pbkRhdGUgPSBfcmVmLm1pbkRhdGUsXG4gICAgICBtYXhEYXRlID0gX3JlZi5tYXhEYXRlLFxuICAgICAgZGlzYWJsZVBhc3QgPSBfcmVmLmRpc2FibGVQYXN0LFxuICAgICAgZGlzYWJsZUZ1dHVyZSA9IF9yZWYuZGlzYWJsZUZ1dHVyZSxcbiAgICAgIGFuaW1hdGVZZWFyU2Nyb2xsaW5nID0gX3JlZi5hbmltYXRlWWVhclNjcm9sbGluZztcbiAgdmFyIHV0aWxzID0gdXNlVXRpbHMoKTtcbiAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMkMSgpO1xuICB2YXIgY3VycmVudFZhcmlhbnQgPSB1c2VDb250ZXh0KFZhcmlhbnRDb250ZXh0KTtcbiAgdmFyIHNlbGVjdGVkWWVhclJlZiA9IHVzZVJlZihudWxsKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2VsZWN0ZWRZZWFyUmVmLmN1cnJlbnQgJiYgc2VsZWN0ZWRZZWFyUmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNlbGVjdGVkWWVhclJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICBibG9jazogY3VycmVudFZhcmlhbnQgPT09ICdzdGF0aWMnID8gJ25lYXJlc3QnIDogJ2NlbnRlcicsXG4gICAgICAgICAgYmVoYXZpb3I6IGFuaW1hdGVZZWFyU2Nyb2xsaW5nID8gJ3Ntb290aCcgOiAnYXV0bydcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGNhbGwgd2l0aG91dCBhcmd1bWVudHMgaW4gY2FzZSB3aGVuIHNjcm9sbEludG9WaWV3IHdvcmtzIGltcHJvcGVybHkgKGUuZy4gRmlyZWZveCA1Mi01NylcbiAgICAgICAgc2VsZWN0ZWRZZWFyUmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIHZhciBjdXJyZW50WWVhciA9IHV0aWxzLmdldFllYXIoZGF0ZSk7XG4gIHZhciBvblllYXJTZWxlY3QgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoeWVhcikge1xuICAgIHZhciBuZXdEYXRlID0gdXRpbHMuc2V0WWVhcihkYXRlLCB5ZWFyKTtcblxuICAgIGlmIChvblllYXJDaGFuZ2UpIHtcbiAgICAgIG9uWWVhckNoYW5nZShuZXdEYXRlKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZShuZXdEYXRlLCB0cnVlKTtcbiAgfSwgW2RhdGUsIG9uQ2hhbmdlLCBvblllYXJDaGFuZ2UsIHV0aWxzXSk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMuY29udGFpbmVyXG4gIH0sIHV0aWxzLmdldFllYXJSYW5nZShtaW5EYXRlLCBtYXhEYXRlKS5tYXAoZnVuY3Rpb24gKHllYXIpIHtcbiAgICB2YXIgeWVhck51bWJlciA9IHV0aWxzLmdldFllYXIoeWVhcik7XG4gICAgdmFyIHNlbGVjdGVkID0geWVhck51bWJlciA9PT0gY3VycmVudFllYXI7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoWWVhciQxLCB7XG4gICAgICBrZXk6IHV0aWxzLmdldFllYXJUZXh0KHllYXIpLFxuICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkLFxuICAgICAgdmFsdWU6IHllYXJOdW1iZXIsXG4gICAgICBvblNlbGVjdDogb25ZZWFyU2VsZWN0LFxuICAgICAgcmVmOiBzZWxlY3RlZCA/IHNlbGVjdGVkWWVhclJlZiA6IHVuZGVmaW5lZCxcbiAgICAgIGRpc2FibGVkOiBCb29sZWFuKGRpc2FibGVQYXN0ICYmIHV0aWxzLmlzQmVmb3JlWWVhcih5ZWFyLCB1dGlscy5kYXRlKCkpIHx8IGRpc2FibGVGdXR1cmUgJiYgdXRpbHMuaXNBZnRlclllYXIoeWVhciwgdXRpbHMuZGF0ZSgpKSlcbiAgICB9LCB1dGlscy5nZXRZZWFyVGV4dCh5ZWFyKSk7XG4gIH0pKTtcbn07XG5cbnZhciB1c2VTdHlsZXMkMiA9IG1ha2VTdHlsZXMoZnVuY3Rpb24gKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgZmxleDogJzEgMCAzMy4zMyUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIGhlaWdodDogNzUsXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ2ZvbnQtc2l6ZScsIHtcbiAgICAgICAgZHVyYXRpb246ICcxMDBtcydcbiAgICAgIH0pLFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtXG4gICAgICB9XG4gICAgfSxcbiAgICBtb250aFNlbGVjdGVkOiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW1cbiAgICB9LFxuICAgIG1vbnRoRGlzYWJsZWQ6IHtcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuaGludFxuICAgIH1cbiAgfTtcbn0sIHtcbiAgbmFtZTogJ011aVBpY2tlcnNNb250aCdcbn0pO1xudmFyIE1vbnRoID0gZnVuY3Rpb24gTW9udGgoX3JlZikge1xuICB2YXIgc2VsZWN0ZWQgPSBfcmVmLnNlbGVjdGVkLFxuICAgICAgb25TZWxlY3QgPSBfcmVmLm9uU2VsZWN0LFxuICAgICAgZGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkLFxuICAgICAgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wic2VsZWN0ZWRcIiwgXCJvblNlbGVjdFwiLCBcImRpc2FibGVkXCIsIFwidmFsdWVcIiwgXCJjaGlsZHJlblwiXSk7XG5cbiAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMkMigpO1xuICB2YXIgaGFuZGxlU2VsZWN0aW9uID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIG9uU2VsZWN0KHZhbHVlKTtcbiAgfSwgW29uU2VsZWN0LCB2YWx1ZV0pO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCBfZXh0ZW5kcyh7XG4gICAgcm9sZTogXCJidXR0b25cIixcbiAgICBjb21wb25lbnQ6IFwiZGl2XCIsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgc2VsZWN0ZWQgJiYgY2xhc3Nlcy5tb250aFNlbGVjdGVkLCBkaXNhYmxlZCAmJiBjbGFzc2VzLm1vbnRoRGlzYWJsZWQpLFxuICAgIHRhYkluZGV4OiBkaXNhYmxlZCA/IC0xIDogMCxcbiAgICBvbkNsaWNrOiBoYW5kbGVTZWxlY3Rpb24sXG4gICAgb25LZXlQcmVzczogaGFuZGxlU2VsZWN0aW9uLFxuICAgIGNvbG9yOiBzZWxlY3RlZCA/ICdwcmltYXJ5JyA6IHVuZGVmaW5lZCxcbiAgICB2YXJpYW50OiBzZWxlY3RlZCA/ICdoNScgOiAnc3VidGl0bGUxJyxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfSwgb3RoZXIpKTtcbn07XG5Nb250aC5kaXNwbGF5TmFtZSA9ICdNb250aCc7XG5cbnZhciB1c2VTdHlsZXMkMyA9IG1ha2VTdHlsZXMoe1xuICBjb250YWluZXI6IHtcbiAgICB3aWR0aDogMzEwLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIGFsaWduQ29udGVudDogJ3N0cmV0Y2gnXG4gIH1cbn0sIHtcbiAgbmFtZTogJ011aVBpY2tlcnNNb250aFNlbGVjdGlvbidcbn0pO1xudmFyIE1vbnRoU2VsZWN0aW9uID0gZnVuY3Rpb24gTW9udGhTZWxlY3Rpb24oX3JlZikge1xuICB2YXIgZGlzYWJsZVBhc3QgPSBfcmVmLmRpc2FibGVQYXN0LFxuICAgICAgZGlzYWJsZUZ1dHVyZSA9IF9yZWYuZGlzYWJsZUZ1dHVyZSxcbiAgICAgIG1pbkRhdGUgPSBfcmVmLm1pbkRhdGUsXG4gICAgICBtYXhEYXRlID0gX3JlZi5tYXhEYXRlLFxuICAgICAgZGF0ZSA9IF9yZWYuZGF0ZSxcbiAgICAgIG9uTW9udGhDaGFuZ2UgPSBfcmVmLm9uTW9udGhDaGFuZ2UsXG4gICAgICBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2U7XG4gIHZhciB1dGlscyA9IHVzZVV0aWxzKCk7XG4gIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzJDMoKTtcbiAgdmFyIGN1cnJlbnRNb250aCA9IHV0aWxzLmdldE1vbnRoKGRhdGUpO1xuXG4gIHZhciBzaG91bGREaXNhYmxlTW9udGggPSBmdW5jdGlvbiBzaG91bGREaXNhYmxlTW9udGgobW9udGgpIHtcbiAgICB2YXIgbm93ID0gdXRpbHMuZGF0ZSgpO1xuICAgIHZhciB1dGlsTWluRGF0ZSA9IHV0aWxzLmRhdGUobWluRGF0ZSk7XG4gICAgdmFyIHV0aWxNYXhEYXRlID0gdXRpbHMuZGF0ZShtYXhEYXRlKTtcbiAgICB2YXIgZmlyc3RFbmFibGVkTW9udGggPSB1dGlscy5zdGFydE9mTW9udGgoZGlzYWJsZVBhc3QgJiYgdXRpbHMuaXNBZnRlcihub3csIHV0aWxNaW5EYXRlKSA/IG5vdyA6IHV0aWxNaW5EYXRlKTtcbiAgICB2YXIgbGFzdEVuYWJsZWRNb250aCA9IHV0aWxzLnN0YXJ0T2ZNb250aChkaXNhYmxlRnV0dXJlICYmIHV0aWxzLmlzQmVmb3JlKG5vdywgdXRpbE1heERhdGUpID8gbm93IDogdXRpbE1heERhdGUpO1xuICAgIHZhciBpc0JlZm9yZUZpcnN0RW5hYmxlZCA9IHV0aWxzLmlzQmVmb3JlKG1vbnRoLCBmaXJzdEVuYWJsZWRNb250aCk7XG4gICAgdmFyIGlzQWZ0ZXJMYXN0RW5hYmxlZCA9IHV0aWxzLmlzQWZ0ZXIobW9udGgsIGxhc3RFbmFibGVkTW9udGgpO1xuICAgIHJldHVybiBpc0JlZm9yZUZpcnN0RW5hYmxlZCB8fCBpc0FmdGVyTGFzdEVuYWJsZWQ7XG4gIH07XG5cbiAgdmFyIG9uTW9udGhTZWxlY3QgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobW9udGgpIHtcbiAgICB2YXIgbmV3RGF0ZSA9IHV0aWxzLnNldE1vbnRoKGRhdGUsIG1vbnRoKTtcbiAgICBvbkNoYW5nZShuZXdEYXRlLCB0cnVlKTtcblxuICAgIGlmIChvbk1vbnRoQ2hhbmdlKSB7XG4gICAgICBvbk1vbnRoQ2hhbmdlKG5ld0RhdGUpO1xuICAgIH1cbiAgfSwgW2RhdGUsIG9uQ2hhbmdlLCBvbk1vbnRoQ2hhbmdlLCB1dGlsc10pO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLmNvbnRhaW5lclxuICB9LCB1dGlscy5nZXRNb250aEFycmF5KGRhdGUpLm1hcChmdW5jdGlvbiAobW9udGgpIHtcbiAgICB2YXIgbW9udGhOdW1iZXIgPSB1dGlscy5nZXRNb250aChtb250aCk7XG4gICAgdmFyIG1vbnRoVGV4dCA9IHV0aWxzLmZvcm1hdChtb250aCwgJ01NTScpO1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KE1vbnRoLCB7XG4gICAgICBrZXk6IG1vbnRoVGV4dCxcbiAgICAgIHZhbHVlOiBtb250aE51bWJlcixcbiAgICAgIHNlbGVjdGVkOiBtb250aE51bWJlciA9PT0gY3VycmVudE1vbnRoLFxuICAgICAgb25TZWxlY3Q6IG9uTW9udGhTZWxlY3QsXG4gICAgICBkaXNhYmxlZDogc2hvdWxkRGlzYWJsZU1vbnRoKG1vbnRoKVxuICAgIH0sIG1vbnRoVGV4dCk7XG4gIH0pKTtcbn07XG5cbnZhciBnZXRPcmllbnRhdGlvbiA9IGZ1bmN0aW9uIGdldE9yaWVudGF0aW9uKCkge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gJ3BvcnRyYWl0JztcbiAgfVxuXG4gIGlmICh3aW5kb3cuc2NyZWVuICYmIHdpbmRvdy5zY3JlZW4ub3JpZW50YXRpb24gJiYgd2luZG93LnNjcmVlbi5vcmllbnRhdGlvbi5hbmdsZSkge1xuICAgIHJldHVybiBNYXRoLmFicyh3aW5kb3cuc2NyZWVuLm9yaWVudGF0aW9uLmFuZ2xlKSA9PT0gOTAgPyAnbGFuZHNjYXBlJyA6ICdwb3J0cmFpdCc7XG4gIH0gLy8gU3VwcG9ydCBJT1Mgc2FmYXJpXG5cblxuICBpZiAod2luZG93Lm9yaWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKE51bWJlcih3aW5kb3cub3JpZW50YXRpb24pKSA9PT0gOTAgPyAnbGFuZHNjYXBlJyA6ICdwb3J0cmFpdCc7XG4gIH1cblxuICByZXR1cm4gJ3BvcnRyYWl0Jztcbn07XG5cbmZ1bmN0aW9uIHVzZUlzTGFuZHNjYXBlKGN1c3RvbU9yaWVudGF0aW9uKSB7XG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSB1c2VTdGF0ZShnZXRPcmllbnRhdGlvbigpKSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuICAgICAgb3JpZW50YXRpb24gPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0T3JpZW50YXRpb24gPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBldmVudEhhbmRsZXIgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHNldE9yaWVudGF0aW9uKGdldE9yaWVudGF0aW9uKCkpO1xuICB9LCBbXSk7XG4gIHVzZUlzb21vcnBoaWNFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIGV2ZW50SGFuZGxlcik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCBldmVudEhhbmRsZXIpO1xuICAgIH07XG4gIH0sIFtldmVudEhhbmRsZXJdKTtcbiAgdmFyIG9yaWVudGF0aW9uVG9Vc2UgPSBjdXN0b21PcmllbnRhdGlvbiB8fCBvcmllbnRhdGlvbjtcbiAgcmV0dXJuIG9yaWVudGF0aW9uVG9Vc2UgPT09ICdsYW5kc2NhcGUnO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzJDEob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkMSh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzJDEoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkMShzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG52YXIgdmlld3NNYXAgPSB7XG4gIHllYXI6IFllYXJTZWxlY3Rpb24sXG4gIG1vbnRoOiBNb250aFNlbGVjdGlvbixcbiAgZGF0ZTogQ2FsZW5kYXIsXG4gIGhvdXJzOiBDbG9ja1ZpZXcsXG4gIG1pbnV0ZXM6IENsb2NrVmlldyxcbiAgc2Vjb25kczogQ2xvY2tWaWV3XG59O1xudmFyIHVzZVN0eWxlcyQ0ID0gbWFrZVN0eWxlcyh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICB9LFxuICBjb250YWluZXJMYW5kc2NhcGU6IHtcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93J1xuICB9LFxuICBwaWNrZXJWaWV3OiB7XG4gICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICBtaW5IZWlnaHQ6IFZJRVdfSEVJR0hULFxuICAgIG1pbldpZHRoOiBESUFMT0dfV0lEVEgsXG4gICAgbWF4V2lkdGg6IERJQUxPR19XSURUSF9XSURFUixcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gIH0sXG4gIHBpY2tlclZpZXdMYW5kc2NhcGU6IHtcbiAgICBwYWRkaW5nOiAnMCA4cHgnXG4gIH1cbn0sIHtcbiAgbmFtZTogJ011aVBpY2tlcnNCYXNlUGlja2VyJ1xufSk7XG52YXIgUGlja2VyID0gZnVuY3Rpb24gUGlja2VyKF9yZWYpIHtcbiAgdmFyIGRhdGUgPSBfcmVmLmRhdGUsXG4gICAgICB2aWV3cyA9IF9yZWYudmlld3MsXG4gICAgICBkaXNhYmxlVG9vbGJhciA9IF9yZWYuZGlzYWJsZVRvb2xiYXIsXG4gICAgICBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsXG4gICAgICBvcGVuVG8gPSBfcmVmLm9wZW5UbyxcbiAgICAgIHVucGFyc2VkTWluRGF0ZSA9IF9yZWYubWluRGF0ZSxcbiAgICAgIHVucGFyc2VkTWF4RGF0ZSA9IF9yZWYubWF4RGF0ZSxcbiAgICAgIFRvb2xiYXJDb21wb25lbnQgPSBfcmVmLlRvb2xiYXJDb21wb25lbnQsXG4gICAgICBvcmllbnRhdGlvbiA9IF9yZWYub3JpZW50YXRpb24sXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImRhdGVcIiwgXCJ2aWV3c1wiLCBcImRpc2FibGVUb29sYmFyXCIsIFwib25DaGFuZ2VcIiwgXCJvcGVuVG9cIiwgXCJtaW5EYXRlXCIsIFwibWF4RGF0ZVwiLCBcIlRvb2xiYXJDb21wb25lbnRcIiwgXCJvcmllbnRhdGlvblwiXSk7XG5cbiAgdmFyIHV0aWxzID0gdXNlVXRpbHMoKTtcbiAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMkNCgpO1xuICB2YXIgaXNMYW5kc2NhcGUgPSB1c2VJc0xhbmRzY2FwZShvcmllbnRhdGlvbik7XG5cbiAgdmFyIF91c2VWaWV3cyA9IHVzZVZpZXdzKHZpZXdzLCBvcGVuVG8sIG9uQ2hhbmdlKSxcbiAgICAgIG9wZW5WaWV3ID0gX3VzZVZpZXdzLm9wZW5WaWV3LFxuICAgICAgc2V0T3BlblZpZXcgPSBfdXNlVmlld3Muc2V0T3BlblZpZXcsXG4gICAgICBoYW5kbGVDaGFuZ2VBbmRPcGVuTmV4dCA9IF91c2VWaWV3cy5oYW5kbGVDaGFuZ2VBbmRPcGVuTmV4dDtcblxuICB2YXIgbWluRGF0ZSA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB1dGlscy5kYXRlKHVucGFyc2VkTWluRGF0ZSk7XG4gIH0sIFt1bnBhcnNlZE1pbkRhdGUsIHV0aWxzXSk7XG4gIHZhciBtYXhEYXRlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHV0aWxzLmRhdGUodW5wYXJzZWRNYXhEYXRlKTtcbiAgfSwgW3VucGFyc2VkTWF4RGF0ZSwgdXRpbHNdKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmNvbnRhaW5lciwgaXNMYW5kc2NhcGUgJiYgY2xhc3Nlcy5jb250YWluZXJMYW5kc2NhcGUpXG4gIH0sICFkaXNhYmxlVG9vbGJhciAmJiBjcmVhdGVFbGVtZW50KFRvb2xiYXJDb21wb25lbnQsIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgdmlld3M6IHZpZXdzLFxuICAgIGlzTGFuZHNjYXBlOiBpc0xhbmRzY2FwZSxcbiAgICBkYXRlOiBkYXRlLFxuICAgIG9uQ2hhbmdlOiBvbkNoYW5nZSxcbiAgICBzZXRPcGVuVmlldzogc2V0T3BlblZpZXcsXG4gICAgb3BlblZpZXc6IG9wZW5WaWV3XG4gIH0pKSwgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucGlja2VyVmlldywgaXNMYW5kc2NhcGUgJiYgY2xhc3Nlcy5waWNrZXJWaWV3TGFuZHNjYXBlKVxuICB9LCBvcGVuVmlldyA9PT0gJ3llYXInICYmIGNyZWF0ZUVsZW1lbnQoWWVhclNlbGVjdGlvbiwgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICBkYXRlOiBkYXRlLFxuICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2VBbmRPcGVuTmV4dCxcbiAgICBtaW5EYXRlOiBtaW5EYXRlLFxuICAgIG1heERhdGU6IG1heERhdGVcbiAgfSkpLCBvcGVuVmlldyA9PT0gJ21vbnRoJyAmJiBjcmVhdGVFbGVtZW50KE1vbnRoU2VsZWN0aW9uLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIGRhdGU6IGRhdGUsXG4gICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZUFuZE9wZW5OZXh0LFxuICAgIG1pbkRhdGU6IG1pbkRhdGUsXG4gICAgbWF4RGF0ZTogbWF4RGF0ZVxuICB9KSksIG9wZW5WaWV3ID09PSAnZGF0ZScgJiYgY3JlYXRlRWxlbWVudChDYWxlbmRhciwgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICBkYXRlOiBkYXRlLFxuICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2VBbmRPcGVuTmV4dCxcbiAgICBtaW5EYXRlOiBtaW5EYXRlLFxuICAgIG1heERhdGU6IG1heERhdGVcbiAgfSkpLCAob3BlblZpZXcgPT09ICdob3VycycgfHwgb3BlblZpZXcgPT09ICdtaW51dGVzJyB8fCBvcGVuVmlldyA9PT0gJ3NlY29uZHMnKSAmJiBjcmVhdGVFbGVtZW50KENsb2NrVmlldywgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICBkYXRlOiBkYXRlLFxuICAgIHR5cGU6IG9wZW5WaWV3LFxuICAgIG9uSG91ckNoYW5nZTogaGFuZGxlQ2hhbmdlQW5kT3Blbk5leHQsXG4gICAgb25NaW51dGVzQ2hhbmdlOiBoYW5kbGVDaGFuZ2VBbmRPcGVuTmV4dCxcbiAgICBvblNlY29uZHNDaGFuZ2U6IGhhbmRsZUNoYW5nZUFuZE9wZW5OZXh0XG4gIH0pKSkpO1xufTtcblBpY2tlci5kZWZhdWx0UHJvcHMgPSBfb2JqZWN0U3ByZWFkJDEoe30sIGRhdGVQaWNrZXJEZWZhdWx0UHJvcHMsIHtcbiAgdmlld3M6IE9iamVjdC5rZXlzKHZpZXdzTWFwKVxufSk7XG5cbmV4cG9ydCB7IFBpY2tlciBhcyBQLCBkYXRlVGltZVBpY2tlckRlZmF1bHRQcm9wcyBhcyBhLCBkYXRlUGlja2VyRGVmYXVsdFByb3BzIGFzIGQsIHRpbWVQaWNrZXJEZWZhdWx0UHJvcHMgYXMgdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UGlja2VyLTA5MTJjNDAyLmpzLm1hcFxuIiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgJ3JlYWN0JztcbmltcG9ydCAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1IGFzIHVzZVV0aWxzIH0gZnJvbSAnLi91c2VVdGlscy1jZmI5NmFjOS5qcyc7XG5pbXBvcnQgJ2Nsc3gnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IG0gYXMgbWFrZVBpY2tlcldpdGhTdGF0ZSwgYSBhcyBQdXJlRGF0ZUlucHV0LCB1IGFzIHVzZVBpY2tlclN0YXRlLCBLIGFzIEtleWJvYXJkRGF0ZUlucHV0LCBiIGFzIHVzZUtleWJvYXJkUGlja2VyU3RhdGUsIHAgYXMgcGljazEyaE9yMjRoRm9ybWF0IH0gZnJvbSAnLi9tYWtlUGlja2VyV2l0aFN0YXRlLWZlZTM5NzY1LmpzJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgJy4vV3JhcHBlci0yNDE5NjZkNy5qcyc7XG5pbXBvcnQgJy4vQ2FsZW5kYXItMTFhZTYxZjYuanMnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnQnO1xuaW1wb3J0ICdyaWZtJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvU3ZnSWNvbic7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXknO1xuaW1wb3J0IHsgdCBhcyB0aW1lUGlja2VyRGVmYXVsdFByb3BzIH0gZnJvbSAnLi9QaWNrZXItMDkxMmM0MDIuanMnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMnO1xuaW1wb3J0ICcuL0RheS5qcyc7XG5pbXBvcnQgJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyJztcbmltcG9ydCAnLi9DbG9jay0xM2M4ZjMzZC5qcyc7XG5pbXBvcnQgJy4vQ2xvY2tWaWV3LmpzJztcbmltcG9ydCB7IFQgYXMgVGltZVBpY2tlclRvb2xiYXIgfSBmcm9tICcuL1RpbWVQaWNrZXJUb29sYmFyLTA1NjQ2Zjc2LmpzJztcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIGRlZmF1bHRQcm9wcyA9IF9vYmplY3RTcHJlYWQoe30sIHRpbWVQaWNrZXJEZWZhdWx0UHJvcHMsIHtcbiAgb3BlblRvOiAnaG91cnMnLFxuICB2aWV3czogWydob3VycycsICdtaW51dGVzJ11cbn0pO1xuXG5mdW5jdGlvbiB1c2VPcHRpb25zKHByb3BzKSB7XG4gIHZhciB1dGlscyA9IHVzZVV0aWxzKCk7XG4gIHJldHVybiB7XG4gICAgZ2V0RGVmYXVsdEZvcm1hdDogZnVuY3Rpb24gZ2V0RGVmYXVsdEZvcm1hdCgpIHtcbiAgICAgIHJldHVybiBwaWNrMTJoT3IyNGhGb3JtYXQocHJvcHMuZm9ybWF0LCBwcm9wcy5hbXBtLCB7XG4gICAgICAgICcxMmgnOiB1dGlscy50aW1lMTJoRm9ybWF0LFxuICAgICAgICAnMjRoJzogdXRpbHMudGltZTI0aEZvcm1hdFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuXG52YXIgVGltZVBpY2tlciA9IG1ha2VQaWNrZXJXaXRoU3RhdGUoe1xuICB1c2VPcHRpb25zOiB1c2VPcHRpb25zLFxuICBJbnB1dDogUHVyZURhdGVJbnB1dCxcbiAgdXNlU3RhdGU6IHVzZVBpY2tlclN0YXRlLFxuICBEZWZhdWx0VG9vbGJhckNvbXBvbmVudDogVGltZVBpY2tlclRvb2xiYXJcbn0pO1xudmFyIEtleWJvYXJkVGltZVBpY2tlciA9IG1ha2VQaWNrZXJXaXRoU3RhdGUoe1xuICB1c2VPcHRpb25zOiB1c2VPcHRpb25zLFxuICBJbnB1dDogS2V5Ym9hcmREYXRlSW5wdXQsXG4gIHVzZVN0YXRlOiB1c2VLZXlib2FyZFBpY2tlclN0YXRlLFxuICBEZWZhdWx0VG9vbGJhckNvbXBvbmVudDogVGltZVBpY2tlclRvb2xiYXIsXG4gIGdldEN1c3RvbVByb3BzOiBmdW5jdGlvbiBnZXRDdXN0b21Qcm9wcyhwcm9wcykge1xuICAgIHJldHVybiB7XG4gICAgICByZWZ1c2U6IHByb3BzLmFtcG0gPyAvW15cXGRhcF0rL2dpIDogL1teXFxkXSsvZ2lcbiAgICB9O1xuICB9XG59KTtcblRpbWVQaWNrZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuS2V5Ym9hcmRUaW1lUGlja2VyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IHsgS2V5Ym9hcmRUaW1lUGlja2VyLCBUaW1lUGlja2VyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1UaW1lUGlja2VyLmpzLm1hcFxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1IGFzIHVzZVV0aWxzIH0gZnJvbSAnLi91c2VVdGlscy1jZmI5NmFjOS5qcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IFAgYXMgUGlja2VyVG9vbGJhciwgVCBhcyBUb29sYmFyQnV0dG9uLCBjIGFzIFRvb2xiYXJUZXh0IH0gZnJvbSAnLi9tYWtlUGlja2VyV2l0aFN0YXRlLWZlZTM5NzY1LmpzJztcbmltcG9ydCB7IGEgYXMgYXJyYXlJbmNsdWRlcyB9IGZyb20gJy4vV3JhcHBlci0yNDE5NjZkNy5qcyc7XG5pbXBvcnQgeyBiIGFzIENsb2NrVHlwZSwgZyBhcyBnZXRNZXJpZGllbSwgYyBhcyBjb252ZXJ0VG9NZXJpZGllbSB9IGZyb20gJy4vQ2xvY2stMTNjOGYzM2QuanMnO1xuXG52YXIgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHRvb2xiYXJMYW5kc2NhcGU6IHtcbiAgICBmbGV4V3JhcDogJ3dyYXAnXG4gIH0sXG4gIHRvb2xiYXJBbXBtTGVmdFBhZGRpbmc6IHtcbiAgICBwYWRkaW5nTGVmdDogNTBcbiAgfSxcbiAgc2VwYXJhdG9yOiB7XG4gICAgbWFyZ2luOiAnMCA0cHggMCAycHgnLFxuICAgIGN1cnNvcjogJ2RlZmF1bHQnXG4gIH0sXG4gIGhvdXJNaW51dGVMYWJlbDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnXG4gIH0sXG4gIGhvdXJNaW51dGVMYWJlbEFtcG1MYW5kc2NhcGU6IHtcbiAgICBtYXJnaW5Ub3A6ICdhdXRvJ1xuICB9LFxuICBob3VyTWludXRlTGFiZWxSZXZlcnNlOiB7XG4gICAgZmxleERpcmVjdGlvbjogJ3Jvdy1yZXZlcnNlJ1xuICB9LFxuICBhbXBtU2VsZWN0aW9uOiB7XG4gICAgbWFyZ2luTGVmdDogMjAsXG4gICAgbWFyZ2luUmlnaHQ6IC0yMCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcbiAgfSxcbiAgYW1wbUxhbmRzY2FwZToge1xuICAgIG1hcmdpbjogJzRweCAwIGF1dG8nLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyxcbiAgICBmbGV4QmFzaXM6ICcxMDAlJ1xuICB9LFxuICBhbXBtU2VsZWN0aW9uV2l0aFNlY29uZHM6IHtcbiAgICBtYXJnaW5MZWZ0OiAxNSxcbiAgICBtYXJnaW5SaWdodDogMTBcbiAgfSxcbiAgYW1wbUxhYmVsOiB7XG4gICAgZm9udFNpemU6IDE4XG4gIH1cbn0sIHtcbiAgbmFtZTogJ011aVBpY2tlcnNUaW1lUGlja2VyVG9vbGJhcidcbn0pO1xuZnVuY3Rpb24gdXNlTWVyaWRpZW1Nb2RlKGRhdGUsIGFtcG0sIG9uQ2hhbmdlKSB7XG4gIHZhciB1dGlscyA9IHVzZVV0aWxzKCk7XG4gIHZhciBtZXJpZGllbU1vZGUgPSBnZXRNZXJpZGllbShkYXRlLCB1dGlscyk7XG4gIHZhciBoYW5kbGVNZXJpZGllbUNoYW5nZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChtb2RlKSB7XG4gICAgdmFyIHRpbWVXaXRoTWVyaWRpZW0gPSBjb252ZXJ0VG9NZXJpZGllbShkYXRlLCBtb2RlLCBCb29sZWFuKGFtcG0pLCB1dGlscyk7XG4gICAgb25DaGFuZ2UodGltZVdpdGhNZXJpZGllbSwgZmFsc2UpO1xuICB9LCBbYW1wbSwgZGF0ZSwgb25DaGFuZ2UsIHV0aWxzXSk7XG4gIHJldHVybiB7XG4gICAgbWVyaWRpZW1Nb2RlOiBtZXJpZGllbU1vZGUsXG4gICAgaGFuZGxlTWVyaWRpZW1DaGFuZ2U6IGhhbmRsZU1lcmlkaWVtQ2hhbmdlXG4gIH07XG59XG52YXIgVGltZVBpY2tlclRvb2xiYXIgPSBmdW5jdGlvbiBUaW1lUGlja2VyVG9vbGJhcihfcmVmKSB7XG4gIHZhciBkYXRlID0gX3JlZi5kYXRlLFxuICAgICAgdmlld3MgPSBfcmVmLnZpZXdzLFxuICAgICAgYW1wbSA9IF9yZWYuYW1wbSxcbiAgICAgIG9wZW5WaWV3ID0gX3JlZi5vcGVuVmlldyxcbiAgICAgIG9uQ2hhbmdlID0gX3JlZi5vbkNoYW5nZSxcbiAgICAgIGlzTGFuZHNjYXBlID0gX3JlZi5pc0xhbmRzY2FwZSxcbiAgICAgIHNldE9wZW5WaWV3ID0gX3JlZi5zZXRPcGVuVmlldztcbiAgdmFyIHV0aWxzID0gdXNlVXRpbHMoKTtcbiAgdmFyIHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICB2YXIgX3VzZU1lcmlkaWVtTW9kZSA9IHVzZU1lcmlkaWVtTW9kZShkYXRlLCBhbXBtLCBvbkNoYW5nZSksXG4gICAgICBtZXJpZGllbU1vZGUgPSBfdXNlTWVyaWRpZW1Nb2RlLm1lcmlkaWVtTW9kZSxcbiAgICAgIGhhbmRsZU1lcmlkaWVtQ2hhbmdlID0gX3VzZU1lcmlkaWVtTW9kZS5oYW5kbGVNZXJpZGllbUNoYW5nZTtcblxuICB2YXIgY2xvY2tUeXBvZ3JhcGh5VmFyaWFudCA9IGlzTGFuZHNjYXBlID8gJ2gzJyA6ICdoMic7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFBpY2tlclRvb2xiYXIsIHtcbiAgICBpc0xhbmRzY2FwZTogaXNMYW5kc2NhcGUsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGlzTGFuZHNjYXBlID8gY2xhc3Nlcy50b29sYmFyTGFuZHNjYXBlIDogYW1wbSAmJiBjbGFzc2VzLnRvb2xiYXJBbXBtTGVmdFBhZGRpbmcpXG4gIH0sIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmhvdXJNaW51dGVMYWJlbCwgYW1wbSAmJiBpc0xhbmRzY2FwZSAmJiBjbGFzc2VzLmhvdXJNaW51dGVMYWJlbEFtcG1MYW5kc2NhcGUsIHtcbiAgICAgIHJ0bDogY2xhc3Nlcy5ob3VyTWludXRlTGFiZWxSZXZlcnNlXG4gICAgfVt0aGVtZS5kaXJlY3Rpb25dKVxuICB9LCBhcnJheUluY2x1ZGVzKHZpZXdzLCAnaG91cnMnKSAmJiBjcmVhdGVFbGVtZW50KFRvb2xiYXJCdXR0b24sIHtcbiAgICB2YXJpYW50OiBjbG9ja1R5cG9ncmFwaHlWYXJpYW50LFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICByZXR1cm4gc2V0T3BlblZpZXcoQ2xvY2tUeXBlLkhPVVJTKTtcbiAgICB9LFxuICAgIHNlbGVjdGVkOiBvcGVuVmlldyA9PT0gQ2xvY2tUeXBlLkhPVVJTLFxuICAgIGxhYmVsOiB1dGlscy5nZXRIb3VyVGV4dChkYXRlLCBCb29sZWFuKGFtcG0pKVxuICB9KSwgYXJyYXlJbmNsdWRlcyh2aWV3cywgWydob3VycycsICdtaW51dGVzJ10pICYmIGNyZWF0ZUVsZW1lbnQoVG9vbGJhclRleHQsIHtcbiAgICBsYWJlbDogXCI6XCIsXG4gICAgdmFyaWFudDogY2xvY2tUeXBvZ3JhcGh5VmFyaWFudCxcbiAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLnNlcGFyYXRvclxuICB9KSwgYXJyYXlJbmNsdWRlcyh2aWV3cywgJ21pbnV0ZXMnKSAmJiBjcmVhdGVFbGVtZW50KFRvb2xiYXJCdXR0b24sIHtcbiAgICB2YXJpYW50OiBjbG9ja1R5cG9ncmFwaHlWYXJpYW50LFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICByZXR1cm4gc2V0T3BlblZpZXcoQ2xvY2tUeXBlLk1JTlVURVMpO1xuICAgIH0sXG4gICAgc2VsZWN0ZWQ6IG9wZW5WaWV3ID09PSBDbG9ja1R5cGUuTUlOVVRFUyxcbiAgICBsYWJlbDogdXRpbHMuZ2V0TWludXRlVGV4dChkYXRlKVxuICB9KSwgYXJyYXlJbmNsdWRlcyh2aWV3cywgWydtaW51dGVzJywgJ3NlY29uZHMnXSkgJiYgY3JlYXRlRWxlbWVudChUb29sYmFyVGV4dCwge1xuICAgIHZhcmlhbnQ6IFwiaDJcIixcbiAgICBsYWJlbDogXCI6XCIsXG4gICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5zZXBhcmF0b3JcbiAgfSksIGFycmF5SW5jbHVkZXModmlld3MsICdzZWNvbmRzJykgJiYgY3JlYXRlRWxlbWVudChUb29sYmFyQnV0dG9uLCB7XG4gICAgdmFyaWFudDogXCJoMlwiLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICByZXR1cm4gc2V0T3BlblZpZXcoQ2xvY2tUeXBlLlNFQ09ORFMpO1xuICAgIH0sXG4gICAgc2VsZWN0ZWQ6IG9wZW5WaWV3ID09PSBDbG9ja1R5cGUuU0VDT05EUyxcbiAgICBsYWJlbDogdXRpbHMuZ2V0U2Vjb25kVGV4dChkYXRlKVxuICB9KSksIGFtcG0gJiYgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMuYW1wbVNlbGVjdGlvbiwgaXNMYW5kc2NhcGUgJiYgY2xhc3Nlcy5hbXBtTGFuZHNjYXBlLCBhcnJheUluY2x1ZGVzKHZpZXdzLCAnc2Vjb25kcycpICYmIGNsYXNzZXMuYW1wbVNlbGVjdGlvbldpdGhTZWNvbmRzKVxuICB9LCBjcmVhdGVFbGVtZW50KFRvb2xiYXJCdXR0b24sIHtcbiAgICBkaXNhYmxlUmlwcGxlOiB0cnVlLFxuICAgIHZhcmlhbnQ6IFwic3VidGl0bGUxXCIsXG4gICAgc2VsZWN0ZWQ6IG1lcmlkaWVtTW9kZSA9PT0gJ2FtJyxcbiAgICB0eXBvZ3JhcGh5Q2xhc3NOYW1lOiBjbGFzc2VzLmFtcG1MYWJlbCxcbiAgICBsYWJlbDogdXRpbHMuZ2V0TWVyaWRpZW1UZXh0KCdhbScpLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICByZXR1cm4gaGFuZGxlTWVyaWRpZW1DaGFuZ2UoJ2FtJyk7XG4gICAgfVxuICB9KSwgY3JlYXRlRWxlbWVudChUb29sYmFyQnV0dG9uLCB7XG4gICAgZGlzYWJsZVJpcHBsZTogdHJ1ZSxcbiAgICB2YXJpYW50OiBcInN1YnRpdGxlMVwiLFxuICAgIHNlbGVjdGVkOiBtZXJpZGllbU1vZGUgPT09ICdwbScsXG4gICAgdHlwb2dyYXBoeUNsYXNzTmFtZTogY2xhc3Nlcy5hbXBtTGFiZWwsXG4gICAgbGFiZWw6IHV0aWxzLmdldE1lcmlkaWVtVGV4dCgncG0nKSxcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgcmV0dXJuIGhhbmRsZU1lcmlkaWVtQ2hhbmdlKCdwbScpO1xuICAgIH1cbiAgfSkpKTtcbn07XG5cbmV4cG9ydCB7IFRpbWVQaWNrZXJUb29sYmFyIGFzIFQsIHVzZU1lcmlkaWVtTW9kZSBhcyB1IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1UaW1lUGlja2VyVG9vbGJhci0wNTY0NmY3Ni5qcy5tYXBcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYsIEZyYWdtZW50LCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm9kZSwgYm9vbCwgb2JqZWN0LCBmdW5jIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFN0eWxlcywgY3JlYXRlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XG5pbXBvcnQgUG9wb3ZlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyJztcblxuLyoqIFVzZSBpdCBpbnN0ZWFkIG9mIC5pbmNsdWRlcyBtZXRob2QgZm9yIElFIHN1cHBvcnQgKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXMoYXJyYXksIGl0ZW1Pckl0ZW1zKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGl0ZW1Pckl0ZW1zKSkge1xuICAgIHJldHVybiBpdGVtT3JJdGVtcy5ldmVyeShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGFycmF5LmluZGV4T2YoaXRlbSkgIT09IC0xO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5LmluZGV4T2YoaXRlbU9ySXRlbXMpICE9PSAtMTtcbn1cblxudmFyIERJQUxPR19XSURUSCA9IDMxMDtcbnZhciBESUFMT0dfV0lEVEhfV0lERVIgPSAzMjU7XG52YXIgVklFV19IRUlHSFQgPSAzMDU7XG5cbnZhciB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKGZ1bmN0aW9uICh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIHN0YXRpY1dyYXBwZXJSb290OiB7XG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBtaW5XaWR0aDogRElBTE9HX1dJRFRILFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlclxuICAgIH1cbiAgfTtcbn0sIHtcbiAgbmFtZTogJ011aVBpY2tlcnNTdGF0aWNXcmFwcGVyJ1xufSk7XG52YXIgU3RhdGljV3JhcHBlciA9IGZ1bmN0aW9uIFN0YXRpY1dyYXBwZXIoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICB2YXIgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLnN0YXRpY1dyYXBwZXJSb290LFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICB9KTtcbn07XG5cbnZhciBNb2RhbERpYWxvZyA9IGZ1bmN0aW9uIE1vZGFsRGlhbG9nKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBfcmVmLmNsYXNzZXMsXG4gICAgICBvbkFjY2VwdCA9IF9yZWYub25BY2NlcHQsXG4gICAgICBvbkRpc21pc3MgPSBfcmVmLm9uRGlzbWlzcyxcbiAgICAgIG9uQ2xlYXIgPSBfcmVmLm9uQ2xlYXIsXG4gICAgICBvblNldFRvZGF5ID0gX3JlZi5vblNldFRvZGF5LFxuICAgICAgb2tMYWJlbCA9IF9yZWYub2tMYWJlbCxcbiAgICAgIGNhbmNlbExhYmVsID0gX3JlZi5jYW5jZWxMYWJlbCxcbiAgICAgIGNsZWFyTGFiZWwgPSBfcmVmLmNsZWFyTGFiZWwsXG4gICAgICB0b2RheUxhYmVsID0gX3JlZi50b2RheUxhYmVsLFxuICAgICAgY2xlYXJhYmxlID0gX3JlZi5jbGVhcmFibGUsXG4gICAgICBzaG93VG9kYXlCdXR0b24gPSBfcmVmLnNob3dUb2RheUJ1dHRvbixcbiAgICAgIHNob3dUYWJzID0gX3JlZi5zaG93VGFicyxcbiAgICAgIHdpZGVyID0gX3JlZi53aWRlcixcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcIm9uQWNjZXB0XCIsIFwib25EaXNtaXNzXCIsIFwib25DbGVhclwiLCBcIm9uU2V0VG9kYXlcIiwgXCJva0xhYmVsXCIsIFwiY2FuY2VsTGFiZWxcIiwgXCJjbGVhckxhYmVsXCIsIFwidG9kYXlMYWJlbFwiLCBcImNsZWFyYWJsZVwiLCBcInNob3dUb2RheUJ1dHRvblwiLCBcInNob3dUYWJzXCIsIFwid2lkZXJcIl0pO1xuXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KERpYWxvZywgX2V4dGVuZHMoe1xuICAgIHJvbGU6IFwiZGlhbG9nXCIsXG4gICAgb25DbG9zZTogb25EaXNtaXNzLFxuICAgIGNsYXNzZXM6IHtcbiAgICAgIHBhcGVyOiBjbHN4KGNsYXNzZXMuZGlhbG9nUm9vdCwgd2lkZXIgJiYgY2xhc3Nlcy5kaWFsb2dSb290V2lkZXIpXG4gICAgfVxuICB9LCBvdGhlciksIGNyZWF0ZUVsZW1lbnQoRGlhbG9nQ29udGVudCwge1xuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMuZGlhbG9nXG4gIH0pLCBjcmVhdGVFbGVtZW50KERpYWxvZ0FjdGlvbnMsIHtcbiAgICBjbGFzc2VzOiB7XG4gICAgICByb290OiBjbHN4KChjbGVhcmFibGUgfHwgc2hvd1RvZGF5QnV0dG9uKSAmJiBjbGFzc2VzLndpdGhBZGRpdGlvbmFsQWN0aW9uKVxuICAgIH1cbiAgfSwgY2xlYXJhYmxlICYmIGNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7XG4gICAgY29sb3I6IFwicHJpbWFyeVwiLFxuICAgIG9uQ2xpY2s6IG9uQ2xlYXJcbiAgfSwgY2xlYXJMYWJlbCksIHNob3dUb2RheUJ1dHRvbiAmJiBjcmVhdGVFbGVtZW50KEJ1dHRvbiwge1xuICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICBvbkNsaWNrOiBvblNldFRvZGF5XG4gIH0sIHRvZGF5TGFiZWwpLCBjYW5jZWxMYWJlbCAmJiBjcmVhdGVFbGVtZW50KEJ1dHRvbiwge1xuICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICBvbkNsaWNrOiBvbkRpc21pc3NcbiAgfSwgY2FuY2VsTGFiZWwpLCBva0xhYmVsICYmIGNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7XG4gICAgY29sb3I6IFwicHJpbWFyeVwiLFxuICAgIG9uQ2xpY2s6IG9uQWNjZXB0XG4gIH0sIG9rTGFiZWwpKSk7XG59O1xuTW9kYWxEaWFsb2cuZGlzcGxheU5hbWUgPSAnTW9kYWxEaWFsb2cnO1xudmFyIHN0eWxlcyA9IGNyZWF0ZVN0eWxlcyh7XG4gIGRpYWxvZ1Jvb3Q6IHtcbiAgICBtaW5XaWR0aDogRElBTE9HX1dJRFRIXG4gIH0sXG4gIGRpYWxvZ1Jvb3RXaWRlcjoge1xuICAgIG1pbldpZHRoOiBESUFMT0dfV0lEVEhfV0lERVJcbiAgfSxcbiAgZGlhbG9nOiB7XG4gICAgJyY6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICBwYWRkaW5nOiAwXG4gICAgfVxuICB9LFxuICB3aXRoQWRkaXRpb25hbEFjdGlvbjoge1xuICAgIC8vIHNldCBqdXN0aWZ5Q29udGVudCB0byBkZWZhdWx0IHZhbHVlIHRvIGZpeCBJRTExIGxheW91dCBidWdcbiAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2RtdHJLb3ZhbGVua28vbWF0ZXJpYWwtdWktcGlja2Vycy9wdWxsLzI2N1xuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gICAgJyYgPiAqOmZpcnN0LWNoaWxkJzoge1xuICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJ1xuICAgIH1cbiAgfVxufSk7XG52YXIgTW9kYWxEaWFsb2ckMSA9IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJzTW9kYWwnXG59KShNb2RhbERpYWxvZyk7XG5cbnZhciB1c2VJc29tb3JwaGljRWZmZWN0ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyB1c2VFZmZlY3QgOiB1c2VMYXlvdXRFZmZlY3Q7XG5mdW5jdGlvbiBydW5LZXlIYW5kbGVyKGUsIGtleUhhbmRsZXJzKSB7XG4gIHZhciBoYW5kbGVyID0ga2V5SGFuZGxlcnNbZS5rZXldO1xuXG4gIGlmIChoYW5kbGVyKSB7XG4gICAgaGFuZGxlcigpOyAvLyBpZiBldmVudCB3YXMgaGFuZGxlZCBwcmV2ZW50IG90aGVyIHNpZGUgZWZmZWN0cyAoZS5nLiBwYWdlIHNjcm9sbClcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuZnVuY3Rpb24gdXNlS2V5RG93bihhY3RpdmUsIGtleUhhbmRsZXJzKSB7XG4gIHZhciBrZXlIYW5kbGVyc1JlZiA9IHVzZVJlZihrZXlIYW5kbGVycyk7XG4gIGtleUhhbmRsZXJzUmVmLmN1cnJlbnQgPSBrZXlIYW5kbGVycztcbiAgdXNlSXNvbW9ycGhpY0VmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgdmFyIGhhbmRsZUtleURvd24gPSBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIHJ1bktleUhhbmRsZXIoZXZlbnQsIGtleUhhbmRsZXJzUmVmLmN1cnJlbnQpO1xuICAgICAgfTtcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93bik7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW2FjdGl2ZV0pO1xufVxuXG52YXIgTW9kYWxXcmFwcGVyID0gZnVuY3Rpb24gTW9kYWxXcmFwcGVyKF9yZWYpIHtcbiAgdmFyIG9wZW4gPSBfcmVmLm9wZW4sXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBva0xhYmVsID0gX3JlZi5va0xhYmVsLFxuICAgICAgY2FuY2VsTGFiZWwgPSBfcmVmLmNhbmNlbExhYmVsLFxuICAgICAgY2xlYXJMYWJlbCA9IF9yZWYuY2xlYXJMYWJlbCxcbiAgICAgIHRvZGF5TGFiZWwgPSBfcmVmLnRvZGF5TGFiZWwsXG4gICAgICBzaG93VG9kYXlCdXR0b24gPSBfcmVmLnNob3dUb2RheUJ1dHRvbixcbiAgICAgIGNsZWFyYWJsZSA9IF9yZWYuY2xlYXJhYmxlLFxuICAgICAgRGlhbG9nUHJvcHMgPSBfcmVmLkRpYWxvZ1Byb3BzLFxuICAgICAgc2hvd1RhYnMgPSBfcmVmLnNob3dUYWJzLFxuICAgICAgd2lkZXIgPSBfcmVmLndpZGVyLFxuICAgICAgSW5wdXRDb21wb25lbnQgPSBfcmVmLklucHV0Q29tcG9uZW50LFxuICAgICAgRGF0ZUlucHV0UHJvcHMgPSBfcmVmLkRhdGVJbnB1dFByb3BzLFxuICAgICAgb25DbGVhciA9IF9yZWYub25DbGVhcixcbiAgICAgIG9uQWNjZXB0ID0gX3JlZi5vbkFjY2VwdCxcbiAgICAgIG9uRGlzbWlzcyA9IF9yZWYub25EaXNtaXNzLFxuICAgICAgb25TZXRUb2RheSA9IF9yZWYub25TZXRUb2RheSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcIm9wZW5cIiwgXCJjaGlsZHJlblwiLCBcIm9rTGFiZWxcIiwgXCJjYW5jZWxMYWJlbFwiLCBcImNsZWFyTGFiZWxcIiwgXCJ0b2RheUxhYmVsXCIsIFwic2hvd1RvZGF5QnV0dG9uXCIsIFwiY2xlYXJhYmxlXCIsIFwiRGlhbG9nUHJvcHNcIiwgXCJzaG93VGFic1wiLCBcIndpZGVyXCIsIFwiSW5wdXRDb21wb25lbnRcIiwgXCJEYXRlSW5wdXRQcm9wc1wiLCBcIm9uQ2xlYXJcIiwgXCJvbkFjY2VwdFwiLCBcIm9uRGlzbWlzc1wiLCBcIm9uU2V0VG9kYXlcIl0pO1xuXG4gIHVzZUtleURvd24ob3Blbiwge1xuICAgIEVudGVyOiBvbkFjY2VwdFxuICB9KTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIGNyZWF0ZUVsZW1lbnQoSW5wdXRDb21wb25lbnQsIF9leHRlbmRzKHt9LCBvdGhlciwgRGF0ZUlucHV0UHJvcHMpKSwgY3JlYXRlRWxlbWVudChNb2RhbERpYWxvZyQxLCBfZXh0ZW5kcyh7XG4gICAgd2lkZXI6IHdpZGVyLFxuICAgIHNob3dUYWJzOiBzaG93VGFicyxcbiAgICBvcGVuOiBvcGVuLFxuICAgIG9uQ2xlYXI6IG9uQ2xlYXIsXG4gICAgb25BY2NlcHQ6IG9uQWNjZXB0LFxuICAgIG9uRGlzbWlzczogb25EaXNtaXNzLFxuICAgIG9uU2V0VG9kYXk6IG9uU2V0VG9kYXksXG4gICAgY2xlYXJMYWJlbDogY2xlYXJMYWJlbCxcbiAgICB0b2RheUxhYmVsOiB0b2RheUxhYmVsLFxuICAgIG9rTGFiZWw6IG9rTGFiZWwsXG4gICAgY2FuY2VsTGFiZWw6IGNhbmNlbExhYmVsLFxuICAgIGNsZWFyYWJsZTogY2xlYXJhYmxlLFxuICAgIHNob3dUb2RheUJ1dHRvbjogc2hvd1RvZGF5QnV0dG9uLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICB9LCBEaWFsb2dQcm9wcykpKTtcbn07XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBNb2RhbFdyYXBwZXIucHJvcFR5cGVzID0ge1xuICBva0xhYmVsOiBub2RlLFxuICBjYW5jZWxMYWJlbDogbm9kZSxcbiAgY2xlYXJMYWJlbDogbm9kZSxcbiAgY2xlYXJhYmxlOiBib29sLFxuICB0b2RheUxhYmVsOiBub2RlLFxuICBzaG93VG9kYXlCdXR0b246IGJvb2wsXG4gIERpYWxvZ1Byb3BzOiBvYmplY3Rcbn0gOiB2b2lkIDA7XG5Nb2RhbFdyYXBwZXIuZGVmYXVsdFByb3BzID0ge1xuICBva0xhYmVsOiAnT0snLFxuICBjYW5jZWxMYWJlbDogJ0NhbmNlbCcsXG4gIGNsZWFyTGFiZWw6ICdDbGVhcicsXG4gIHRvZGF5TGFiZWw6ICdUb2RheScsXG4gIGNsZWFyYWJsZTogZmFsc2UsXG4gIHNob3dUb2RheUJ1dHRvbjogZmFsc2Vcbn07XG5cbnZhciBJbmxpbmVXcmFwcGVyID0gZnVuY3Rpb24gSW5saW5lV3JhcHBlcihfcmVmKSB7XG4gIHZhciBvcGVuID0gX3JlZi5vcGVuLFxuICAgICAgd2lkZXIgPSBfcmVmLndpZGVyLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgUG9wb3ZlclByb3BzID0gX3JlZi5Qb3BvdmVyUHJvcHMsXG4gICAgICBvbkNsZWFyID0gX3JlZi5vbkNsZWFyLFxuICAgICAgb25EaXNtaXNzID0gX3JlZi5vbkRpc21pc3MsXG4gICAgICBvblNldFRvZGF5ID0gX3JlZi5vblNldFRvZGF5LFxuICAgICAgb25BY2NlcHQgPSBfcmVmLm9uQWNjZXB0LFxuICAgICAgc2hvd1RhYnMgPSBfcmVmLnNob3dUYWJzLFxuICAgICAgRGF0ZUlucHV0UHJvcHMgPSBfcmVmLkRhdGVJbnB1dFByb3BzLFxuICAgICAgSW5wdXRDb21wb25lbnQgPSBfcmVmLklucHV0Q29tcG9uZW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wib3BlblwiLCBcIndpZGVyXCIsIFwiY2hpbGRyZW5cIiwgXCJQb3BvdmVyUHJvcHNcIiwgXCJvbkNsZWFyXCIsIFwib25EaXNtaXNzXCIsIFwib25TZXRUb2RheVwiLCBcIm9uQWNjZXB0XCIsIFwic2hvd1RhYnNcIiwgXCJEYXRlSW5wdXRQcm9wc1wiLCBcIklucHV0Q29tcG9uZW50XCJdKTtcblxuICB2YXIgcmVmID0gdXNlUmVmKCk7XG4gIHVzZUtleURvd24ob3Blbiwge1xuICAgIEVudGVyOiBvbkFjY2VwdFxuICB9KTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIGNyZWF0ZUVsZW1lbnQoSW5wdXRDb21wb25lbnQsIF9leHRlbmRzKHt9LCBvdGhlciwgRGF0ZUlucHV0UHJvcHMsIHtcbiAgICBpbnB1dFJlZjogcmVmXG4gIH0pKSwgY3JlYXRlRWxlbWVudChQb3BvdmVyLCBfZXh0ZW5kcyh7XG4gICAgb3Blbjogb3BlbixcbiAgICBvbkNsb3NlOiBvbkRpc21pc3MsXG4gICAgYW5jaG9yRWw6IHJlZi5jdXJyZW50LFxuICAgIGFuY2hvck9yaWdpbjoge1xuICAgICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcidcbiAgICB9LFxuICAgIHRyYW5zZm9ybU9yaWdpbjoge1xuICAgICAgdmVydGljYWw6ICd0b3AnLFxuICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcidcbiAgICB9LFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICB9LCBQb3BvdmVyUHJvcHMpKSk7XG59O1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gSW5saW5lV3JhcHBlci5wcm9wVHlwZXMgPSB7XG4gIG9uT3BlbjogZnVuYyxcbiAgb25DbG9zZTogZnVuYyxcbiAgUG9wb3ZlclByb3BzOiBvYmplY3Rcbn0gOiB2b2lkIDA7XG5cbmZ1bmN0aW9uIGdldFdyYXBwZXJGcm9tVmFyaWFudCh2YXJpYW50KSB7XG4gIHN3aXRjaCAodmFyaWFudCkge1xuICAgIGNhc2UgJ2lubGluZSc6XG4gICAgICByZXR1cm4gSW5saW5lV3JhcHBlcjtcblxuICAgIGNhc2UgJ3N0YXRpYyc6XG4gICAgICByZXR1cm4gU3RhdGljV3JhcHBlcjtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gTW9kYWxXcmFwcGVyO1xuICB9XG59XG52YXIgVmFyaWFudENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xudmFyIFdyYXBwZXIgPSBmdW5jdGlvbiBXcmFwcGVyKF9yZWYpIHtcbiAgdmFyIHZhcmlhbnQgPSBfcmVmLnZhcmlhbnQsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJ2YXJpYW50XCJdKTtcblxuICB2YXIgQ29tcG9uZW50ID0gZ2V0V3JhcHBlckZyb21WYXJpYW50KHZhcmlhbnQpO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChWYXJpYW50Q29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB2YXJpYW50IHx8ICdkaWFsb2cnXG4gIH0sIGNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBwcm9wcykpO1xufTtcblxuZXhwb3J0IHsgRElBTE9HX1dJRFRIIGFzIEQsIFZhcmlhbnRDb250ZXh0IGFzIFYsIFdyYXBwZXIgYXMgVywgYXJyYXlJbmNsdWRlcyBhcyBhLCBWSUVXX0hFSUdIVCBhcyBiLCBESUFMT0dfV0lEVEhfV0lERVIgYXMgYywgcnVuS2V5SGFuZGxlciBhcyByLCB1c2VJc29tb3JwaGljRWZmZWN0IGFzIHUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVdyYXBwZXItMjQxOTY2ZDcuanMubWFwXG4iLCJpbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCAncmVhY3QnO1xuaW1wb3J0ICdwcm9wLXR5cGVzJztcbmV4cG9ydCB7IGEgYXMgTXVpUGlja2Vyc0NvbnRleHQsIE0gYXMgTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIsIHUgYXMgdXNlVXRpbHMgfSBmcm9tICcuL3VzZVV0aWxzLWNmYjk2YWM5LmpzJztcbmltcG9ydCAnY2xzeCc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgdSBhcyB1c2VQaWNrZXJTdGF0ZSB9IGZyb20gJy4vbWFrZVBpY2tlcldpdGhTdGF0ZS1mZWUzOTc2NS5qcyc7XG5leHBvcnQgeyBtIGFzIG1ha2VQaWNrZXJXaXRoU3RhdGUsIGIgYXMgdXNlS2V5Ym9hcmRQaWNrZXJTdGF0ZSwgdSBhcyB1c2VQaWNrZXJTdGF0ZSwgdiBhcyB2YWxpZGF0ZSB9IGZyb20gJy4vbWFrZVBpY2tlcldpdGhTdGF0ZS1mZWUzOTc2NS5qcyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0ICcuL1dyYXBwZXItMjQxOTY2ZDcuanMnO1xuZXhwb3J0IHsgYSBhcyBDYWxlbmRhciB9IGZyb20gJy4vQ2FsZW5kYXItMTFhZTYxZjYuanMnO1xuZXhwb3J0IHsgRGF0ZVBpY2tlciwgS2V5Ym9hcmREYXRlUGlja2VyIH0gZnJvbSAnLi9EYXRlUGlja2VyLmpzJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50JztcbmltcG9ydCAncmlmbSc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1N2Z0ljb24nO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5JztcbmV4cG9ydCB7IFAgYXMgUGlja2VyIH0gZnJvbSAnLi9QaWNrZXItMDkxMmM0MDIuanMnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEYXkgfSBmcm9tICcuL0RheS5qcyc7XG5pbXBvcnQgJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyJztcbmV4cG9ydCB7IGEgYXMgQ2xvY2sgfSBmcm9tICcuL0Nsb2NrLTEzYzhmMzNkLmpzJztcbmV4cG9ydCB7IENsb2NrVmlldywgZGVmYXVsdCBhcyBUaW1lUGlja2VyVmlldyB9IGZyb20gJy4vQ2xvY2tWaWV3LmpzJztcbmltcG9ydCAnLi9UaW1lUGlja2VyVG9vbGJhci0wNTY0NmY3Ni5qcyc7XG5leHBvcnQgeyBLZXlib2FyZFRpbWVQaWNrZXIsIFRpbWVQaWNrZXIgfSBmcm9tICcuL1RpbWVQaWNrZXIuanMnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvVGFiJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvVGFicyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmV4cG9ydCB7IERhdGVUaW1lUGlja2VyLCBLZXlib2FyZERhdGVUaW1lUGlja2VyIH0gZnJvbSAnLi9EYXRlVGltZVBpY2tlci5qcyc7XG5cbmZ1bmN0aW9uIHVzZVN0YXRpY1N0YXRlKF9yZWYpIHtcbiAgdmFyIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgIF9yZWYkYXV0b09rID0gX3JlZi5hdXRvT2ssXG4gICAgICBhdXRvT2sgPSBfcmVmJGF1dG9PayA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYkYXV0b09rLFxuICAgICAgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlLFxuICAgICAgZGVmYXVsdEZvcm1hdCA9IF9yZWYuZGVmYXVsdEZvcm1hdDtcblxuICB2YXIgX3VzZVBpY2tlclN0YXRlID0gdXNlUGlja2VyU3RhdGUoe1xuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgYXV0b09rOiBhdXRvT2tcbiAgfSwge1xuICAgIC8vIGp1c3QgYSByYW5kb20gZm9ybWF0LCBtb3N0bHkgYWx3YXlzIG5vdCBuZWVkZWQgZm9yIHVzZXJzXG4gICAgZ2V0RGVmYXVsdEZvcm1hdDogZnVuY3Rpb24gZ2V0RGVmYXVsdEZvcm1hdCgpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0Rm9ybWF0IHx8ICdNTS9kZC95eXl5JztcbiAgICB9XG4gIH0pLFxuICAgICAgcGlja2VyUHJvcHMgPSBfdXNlUGlja2VyU3RhdGUucGlja2VyUHJvcHMsXG4gICAgICB3cmFwcGVyUHJvcHMgPSBfdXNlUGlja2VyU3RhdGUud3JhcHBlclByb3BzLFxuICAgICAgaW5wdXRQcm9wcyA9IF91c2VQaWNrZXJTdGF0ZS5pbnB1dFByb3BzO1xuXG4gIHJldHVybiB7XG4gICAgcGlja2VyUHJvcHM6IHBpY2tlclByb3BzLFxuICAgIHdyYXBwZXJQcm9wczogd3JhcHBlclByb3BzLFxuICAgIGlucHV0UHJvcHM6IGlucHV0UHJvcHNcbiAgfTtcbn1cblxuZXhwb3J0IHsgdXNlU3RhdGljU3RhdGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgUmVhY3RfX2RlZmF1bHQsIHsgY3JlYXRlRWxlbWVudCwgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZURlYnVnVmFsdWUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJvb2wsIHN0cmluZywgYW55IH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1IGFzIHVzZVV0aWxzIH0gZnJvbSAnLi91c2VVdGlscy1jZmI5NmFjOS5qcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBmYWRlLCB3aXRoU3R5bGVzLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgeyBXIGFzIFdyYXBwZXIgfSBmcm9tICcuL1dyYXBwZXItMjQxOTY2ZDcuanMnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgSW5wdXRBZG9ybm1lbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnQnO1xuaW1wb3J0IHsgUmlmbSB9IGZyb20gJ3JpZm0nO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3ZnSWNvbic7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheSc7XG5pbXBvcnQgeyBQIGFzIFBpY2tlciB9IGZyb20gJy4vUGlja2VyLTA5MTJjNDAyLmpzJztcblxudmFyIHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoZnVuY3Rpb24gKHRoZW1lKSB7XG4gIHZhciB0ZXh0Q29sb3IgPSB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkuY29udHJhc3RUZXh0IDogdGhlbWUucGFsZXR0ZS5nZXRDb250cmFzdFRleHQodGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kW1wiZGVmYXVsdFwiXSk7XG4gIHJldHVybiB7XG4gICAgdG9vbGJhclR4dDoge1xuICAgICAgY29sb3I6IGZhZGUodGV4dENvbG9yLCAwLjU0KVxuICAgIH0sXG4gICAgdG9vbGJhckJ0blNlbGVjdGVkOiB7XG4gICAgICBjb2xvcjogdGV4dENvbG9yXG4gICAgfVxuICB9O1xufSwge1xuICBuYW1lOiAnTXVpUGlja2Vyc1Rvb2xiYXJUZXh0J1xufSk7XG5cbnZhciBUb29sYmFyVGV4dCA9IGZ1bmN0aW9uIFRvb2xiYXJUZXh0KF9yZWYpIHtcbiAgdmFyIHNlbGVjdGVkID0gX3JlZi5zZWxlY3RlZCxcbiAgICAgIGxhYmVsID0gX3JlZi5sYWJlbCxcbiAgICAgIF9yZWYkY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmJGNsYXNzTmFtZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYkY2xhc3NOYW1lLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wic2VsZWN0ZWRcIiwgXCJsYWJlbFwiLCBcImNsYXNzTmFtZVwiXSk7XG5cbiAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeSwgX2V4dGVuZHMoe1xuICAgIGNoaWxkcmVuOiBsYWJlbCxcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy50b29sYmFyVHh0LCBjbGFzc05hbWUsIHNlbGVjdGVkICYmIGNsYXNzZXMudG9vbGJhckJ0blNlbGVjdGVkKVxuICB9LCBvdGhlcikpO1xufTtcblxudmFyIFRvb2xiYXJCdXR0b24gPSBmdW5jdGlvbiBUb29sYmFyQnV0dG9uKF9yZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBfcmVmLmNsYXNzZXMsXG4gICAgICBfcmVmJGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZiRjbGFzc05hbWUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmJGNsYXNzTmFtZSxcbiAgICAgIGxhYmVsID0gX3JlZi5sYWJlbCxcbiAgICAgIHNlbGVjdGVkID0gX3JlZi5zZWxlY3RlZCxcbiAgICAgIHZhcmlhbnQgPSBfcmVmLnZhcmlhbnQsXG4gICAgICBhbGlnbiA9IF9yZWYuYWxpZ24sXG4gICAgICB0eXBvZ3JhcGh5Q2xhc3NOYW1lID0gX3JlZi50eXBvZ3JhcGh5Q2xhc3NOYW1lLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImxhYmVsXCIsIFwic2VsZWN0ZWRcIiwgXCJ2YXJpYW50XCIsIFwiYWxpZ25cIiwgXCJ0eXBvZ3JhcGh5Q2xhc3NOYW1lXCJdKTtcblxuICByZXR1cm4gY3JlYXRlRWxlbWVudChCdXR0b24sIF9leHRlbmRzKHtcbiAgICB2YXJpYW50OiBcInRleHRcIixcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy50b29sYmFyQnRuLCBjbGFzc05hbWUpXG4gIH0sIG90aGVyKSwgY3JlYXRlRWxlbWVudChUb29sYmFyVGV4dCwge1xuICAgIGFsaWduOiBhbGlnbixcbiAgICBjbGFzc05hbWU6IHR5cG9ncmFwaHlDbGFzc05hbWUsXG4gICAgdmFyaWFudDogdmFyaWFudCxcbiAgICBsYWJlbDogbGFiZWwsXG4gICAgc2VsZWN0ZWQ6IHNlbGVjdGVkXG4gIH0pKTtcbn07XG5cbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFRvb2xiYXJCdXR0b24ucHJvcFR5cGVzID0ge1xuICBzZWxlY3RlZDogYm9vbC5pc1JlcXVpcmVkLFxuICBsYWJlbDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNsYXNzZXM6IGFueS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IHN0cmluZyxcbiAgaW5uZXJSZWY6IGFueVxufSA6IHZvaWQgMDtcblRvb2xiYXJCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnXG59O1xudmFyIHN0eWxlcyA9IGNyZWF0ZVN0eWxlcyh7XG4gIHRvb2xiYXJCdG46IHtcbiAgICBwYWRkaW5nOiAwLFxuICAgIG1pbldpZHRoOiAnMTZweCcsXG4gICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnXG4gIH1cbn0pO1xudmFyIFRvb2xiYXJCdXR0b24kMSA9IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJzVG9vbGJhckJ1dHRvbidcbn0pKFRvb2xiYXJCdXR0b24pO1xuXG52YXIgdXNlU3R5bGVzJDEgPSBtYWtlU3R5bGVzKGZ1bmN0aW9uICh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIHRvb2xiYXI6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBoZWlnaHQ6IDEwMCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4gOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmRbXCJkZWZhdWx0XCJdXG4gICAgfSxcbiAgICB0b29sYmFyTGFuZHNjYXBlOiB7XG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIG1heFdpZHRoOiAxNTAsXG4gICAgICBwYWRkaW5nOiA4LFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0J1xuICAgIH1cbiAgfTtcbn0sIHtcbiAgbmFtZTogJ011aVBpY2tlcnNUb29sYmFyJ1xufSk7XG5cbnZhciBQaWNrZXJUb29sYmFyID0gZnVuY3Rpb24gUGlja2VyVG9vbGJhcihfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBpc0xhbmRzY2FwZSA9IF9yZWYuaXNMYW5kc2NhcGUsXG4gICAgICBfcmVmJGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZiRjbGFzc05hbWUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmJGNsYXNzTmFtZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImNoaWxkcmVuXCIsIFwiaXNMYW5kc2NhcGVcIiwgXCJjbGFzc05hbWVcIl0pO1xuXG4gIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzJDEoKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoVG9vbGJhciwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnRvb2xiYXIsIGNsYXNzTmFtZSwgaXNMYW5kc2NhcGUgJiYgY2xhc3Nlcy50b29sYmFyTGFuZHNjYXBlKVxuICB9LCBvdGhlciksIGNoaWxkcmVuKTtcbn07XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG52YXIgUHVyZURhdGVJbnB1dCA9IGZ1bmN0aW9uIFB1cmVEYXRlSW5wdXQoX3JlZikge1xuICB2YXIgaW5wdXRWYWx1ZSA9IF9yZWYuaW5wdXRWYWx1ZSxcbiAgICAgIGlucHV0VmFyaWFudCA9IF9yZWYuaW5wdXRWYXJpYW50LFxuICAgICAgdmFsaWRhdGlvbkVycm9yID0gX3JlZi52YWxpZGF0aW9uRXJyb3IsXG4gICAgICBJbnB1dFByb3BzID0gX3JlZi5JbnB1dFByb3BzLFxuICAgICAgb25PcGVuID0gX3JlZi5vcGVuUGlja2VyLFxuICAgICAgX3JlZiRUZXh0RmllbGRDb21wb25lID0gX3JlZi5UZXh0RmllbGRDb21wb25lbnQsXG4gICAgICBUZXh0RmllbGRDb21wb25lbnQgPSBfcmVmJFRleHRGaWVsZENvbXBvbmUgPT09IHZvaWQgMCA/IFRleHRGaWVsZCA6IF9yZWYkVGV4dEZpZWxkQ29tcG9uZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImlucHV0VmFsdWVcIiwgXCJpbnB1dFZhcmlhbnRcIiwgXCJ2YWxpZGF0aW9uRXJyb3JcIiwgXCJJbnB1dFByb3BzXCIsIFwib3BlblBpY2tlclwiLCBcIlRleHRGaWVsZENvbXBvbmVudFwiXSk7XG5cbiAgdmFyIFB1cmVEYXRlSW5wdXRQcm9wcyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBJbnB1dFByb3BzLCB7XG4gICAgICByZWFkT25seTogdHJ1ZVxuICAgIH0pO1xuICB9LCBbSW5wdXRQcm9wc10pO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChUZXh0RmllbGRDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBlcnJvcjogQm9vbGVhbih2YWxpZGF0aW9uRXJyb3IpLFxuICAgIGhlbHBlclRleHQ6IHZhbGlkYXRpb25FcnJvclxuICB9LCBvdGhlciwge1xuICAgIC8vIGRvIG5vdCBvdmVycmlkYWJsZVxuICAgIG9uQ2xpY2s6IG9uT3BlbixcbiAgICB2YWx1ZTogaW5wdXRWYWx1ZSxcbiAgICB2YXJpYW50OiBpbnB1dFZhcmlhbnQsXG4gICAgSW5wdXRQcm9wczogUHVyZURhdGVJbnB1dFByb3BzLFxuICAgIG9uS2V5RG93bjogZnVuY3Rpb24gb25LZXlEb3duKGUpIHtcbiAgICAgIC8vIHNwYWNlXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAzMikge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBvbk9wZW4oKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pKTtcbn07XG5QdXJlRGF0ZUlucHV0LmRpc3BsYXlOYW1lID0gJ1B1cmVEYXRlSW5wdXQnO1xuXG52YXIgS2V5Ym9hcmRJY29uID0gZnVuY3Rpb24gS2V5Ym9hcmRJY29uKHByb3BzKSB7XG4gIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFN2Z0ljb24sIHByb3BzLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTcgMTJoLTV2NWg1di01ek0xNiAxdjJIOFYxSDZ2Mkg1Yy0xLjExIDAtMS45OS45LTEuOTkgMkwzIDE5YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJoLTFWMWgtMnptMyAxOEg1VjhoMTR2MTF6XCJcbiAgfSksIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBkOiBcIk0wIDBoMjR2MjRIMHpcIlxuICB9KSk7XG59O1xuXG52YXIgZ2V0RGlzcGxheURhdGUgPSBmdW5jdGlvbiBnZXREaXNwbGF5RGF0ZSh2YWx1ZSwgZm9ybWF0LCB1dGlscywgaXNFbXB0eSwgX3JlZikge1xuICB2YXIgaW52YWxpZExhYmVsID0gX3JlZi5pbnZhbGlkTGFiZWwsXG4gICAgICBlbXB0eUxhYmVsID0gX3JlZi5lbXB0eUxhYmVsLFxuICAgICAgbGFiZWxGdW5jID0gX3JlZi5sYWJlbEZ1bmM7XG4gIHZhciBkYXRlID0gdXRpbHMuZGF0ZSh2YWx1ZSk7XG5cbiAgaWYgKGxhYmVsRnVuYykge1xuICAgIHJldHVybiBsYWJlbEZ1bmMoaXNFbXB0eSA/IG51bGwgOiBkYXRlLCBpbnZhbGlkTGFiZWwpO1xuICB9XG5cbiAgaWYgKGlzRW1wdHkpIHtcbiAgICByZXR1cm4gZW1wdHlMYWJlbCB8fCAnJztcbiAgfVxuXG4gIHJldHVybiB1dGlscy5pc1ZhbGlkKGRhdGUpID8gdXRpbHMuZm9ybWF0KGRhdGUsIGZvcm1hdCkgOiBpbnZhbGlkTGFiZWw7XG59O1xuXG52YXIgZ2V0Q29tcGFyaXNvbk1heERhdGUgPSBmdW5jdGlvbiBnZXRDb21wYXJpc29uTWF4RGF0ZSh1dGlscywgc3RyaWN0Q29tcGFyZURhdGVzLCBkYXRlKSB7XG4gIGlmIChzdHJpY3RDb21wYXJlRGF0ZXMpIHtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIHJldHVybiB1dGlscy5lbmRPZkRheShkYXRlKTtcbn07XG5cbnZhciBnZXRDb21wYXJpc29uTWluRGF0ZSA9IGZ1bmN0aW9uIGdldENvbXBhcmlzb25NaW5EYXRlKHV0aWxzLCBzdHJpY3RDb21wYXJlRGF0ZXMsIGRhdGUpIHtcbiAgaWYgKHN0cmljdENvbXBhcmVEYXRlcykge1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgcmV0dXJuIHV0aWxzLnN0YXJ0T2ZEYXkoZGF0ZSk7XG59O1xuXG52YXIgdmFsaWRhdGUgPSBmdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZSwgdXRpbHMsIF9yZWYyKSB7XG4gIHZhciBtYXhEYXRlID0gX3JlZjIubWF4RGF0ZSxcbiAgICAgIG1pbkRhdGUgPSBfcmVmMi5taW5EYXRlLFxuICAgICAgZGlzYWJsZVBhc3QgPSBfcmVmMi5kaXNhYmxlUGFzdCxcbiAgICAgIGRpc2FibGVGdXR1cmUgPSBfcmVmMi5kaXNhYmxlRnV0dXJlLFxuICAgICAgbWF4RGF0ZU1lc3NhZ2UgPSBfcmVmMi5tYXhEYXRlTWVzc2FnZSxcbiAgICAgIG1pbkRhdGVNZXNzYWdlID0gX3JlZjIubWluRGF0ZU1lc3NhZ2UsXG4gICAgICBpbnZhbGlkRGF0ZU1lc3NhZ2UgPSBfcmVmMi5pbnZhbGlkRGF0ZU1lc3NhZ2UsXG4gICAgICBzdHJpY3RDb21wYXJlRGF0ZXMgPSBfcmVmMi5zdHJpY3RDb21wYXJlRGF0ZXM7XG4gIHZhciBwYXJzZWRWYWx1ZSA9IHV0aWxzLmRhdGUodmFsdWUpOyAvLyBpZiBudWxsIC0gZG8gbm90IHNob3cgZXJyb3JcblxuICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAoIXV0aWxzLmlzVmFsaWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGludmFsaWREYXRlTWVzc2FnZTtcbiAgfVxuXG4gIGlmIChtYXhEYXRlICYmIHV0aWxzLmlzQWZ0ZXIocGFyc2VkVmFsdWUsIGdldENvbXBhcmlzb25NYXhEYXRlKHV0aWxzLCAhIXN0cmljdENvbXBhcmVEYXRlcywgdXRpbHMuZGF0ZShtYXhEYXRlKSkpKSB7XG4gICAgcmV0dXJuIG1heERhdGVNZXNzYWdlO1xuICB9XG5cbiAgaWYgKGRpc2FibGVGdXR1cmUgJiYgdXRpbHMuaXNBZnRlcihwYXJzZWRWYWx1ZSwgZ2V0Q29tcGFyaXNvbk1heERhdGUodXRpbHMsICEhc3RyaWN0Q29tcGFyZURhdGVzLCB1dGlscy5kYXRlKCkpKSkge1xuICAgIHJldHVybiBtYXhEYXRlTWVzc2FnZTtcbiAgfVxuXG4gIGlmIChtaW5EYXRlICYmIHV0aWxzLmlzQmVmb3JlKHBhcnNlZFZhbHVlLCBnZXRDb21wYXJpc29uTWluRGF0ZSh1dGlscywgISFzdHJpY3RDb21wYXJlRGF0ZXMsIHV0aWxzLmRhdGUobWluRGF0ZSkpKSkge1xuICAgIHJldHVybiBtaW5EYXRlTWVzc2FnZTtcbiAgfVxuXG4gIGlmIChkaXNhYmxlUGFzdCAmJiB1dGlscy5pc0JlZm9yZShwYXJzZWRWYWx1ZSwgZ2V0Q29tcGFyaXNvbk1pbkRhdGUodXRpbHMsICEhc3RyaWN0Q29tcGFyZURhdGVzLCB1dGlscy5kYXRlKCkpKSkge1xuICAgIHJldHVybiBtaW5EYXRlTWVzc2FnZTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn07XG5mdW5jdGlvbiBwaWNrMTJoT3IyNGhGb3JtYXQodXNlckZvcm1hdCkge1xuICB2YXIgYW1wbSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcbiAgdmFyIGZvcm1hdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcblxuICBpZiAodXNlckZvcm1hdCkge1xuICAgIHJldHVybiB1c2VyRm9ybWF0O1xuICB9XG5cbiAgcmV0dXJuIGFtcG0gPyBmb3JtYXRzWycxMmgnXSA6IGZvcm1hdHNbJzI0aCddO1xufVxuZnVuY3Rpb24gbWFrZU1hc2tGcm9tRm9ybWF0KGZvcm1hdCwgbnVtYmVyTWFza0NoYXIpIHtcbiAgcmV0dXJuIGZvcm1hdC5yZXBsYWNlKC9bYS16XS9naSwgbnVtYmVyTWFza0NoYXIpO1xufVxudmFyIG1hc2tlZERhdGVGb3JtYXR0ZXIgPSBmdW5jdGlvbiBtYXNrZWREYXRlRm9ybWF0dGVyKG1hc2ssIG51bWJlck1hc2tDaGFyLCByZWZ1c2UpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgcGFyc2VkID0gdmFsdWUucmVwbGFjZShyZWZ1c2UsICcnKTtcblxuICAgIGlmIChwYXJzZWQgPT09ICcnKSB7XG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH1cblxuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbiA9IDA7XG5cbiAgICB3aGlsZSAoaSA8IG1hc2subGVuZ3RoKSB7XG4gICAgICB2YXIgbWFza0NoYXIgPSBtYXNrW2ldO1xuXG4gICAgICBpZiAobWFza0NoYXIgPT09IG51bWJlck1hc2tDaGFyICYmIG4gPCBwYXJzZWQubGVuZ3RoKSB7XG4gICAgICAgIHZhciBwYXJzZWRDaGFyID0gcGFyc2VkW25dO1xuICAgICAgICByZXN1bHQgKz0gcGFyc2VkQ2hhcjtcbiAgICAgICAgbiArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ICs9IG1hc2tDaGFyO1xuICAgICAgfVxuXG4gICAgICBpICs9IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIG93bktleXMkMShvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQxKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkMShzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyQxKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cbnZhciBLZXlib2FyZERhdGVJbnB1dCA9IGZ1bmN0aW9uIEtleWJvYXJkRGF0ZUlucHV0KF9yZWYpIHtcbiAgdmFyIGlucHV0VmFsdWUgPSBfcmVmLmlucHV0VmFsdWUsXG4gICAgICBpbnB1dFZhcmlhbnQgPSBfcmVmLmlucHV0VmFyaWFudCxcbiAgICAgIHZhbGlkYXRpb25FcnJvciA9IF9yZWYudmFsaWRhdGlvbkVycm9yLFxuICAgICAgS2V5Ym9hcmRCdXR0b25Qcm9wcyA9IF9yZWYuS2V5Ym9hcmRCdXR0b25Qcm9wcyxcbiAgICAgIElucHV0QWRvcm5tZW50UHJvcHMgPSBfcmVmLklucHV0QWRvcm5tZW50UHJvcHMsXG4gICAgICBvbk9wZW4gPSBfcmVmLm9wZW5QaWNrZXIsXG4gICAgICBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsXG4gICAgICBJbnB1dFByb3BzID0gX3JlZi5JbnB1dFByb3BzLFxuICAgICAgbWFzayA9IF9yZWYubWFzayxcbiAgICAgIF9yZWYkbWFza0NoYXIgPSBfcmVmLm1hc2tDaGFyLFxuICAgICAgbWFza0NoYXIgPSBfcmVmJG1hc2tDaGFyID09PSB2b2lkIDAgPyAnXycgOiBfcmVmJG1hc2tDaGFyLFxuICAgICAgX3JlZiRyZWZ1c2UgPSBfcmVmLnJlZnVzZSxcbiAgICAgIHJlZnVzZSA9IF9yZWYkcmVmdXNlID09PSB2b2lkIDAgPyAvW15cXGRdKy9naSA6IF9yZWYkcmVmdXNlLFxuICAgICAgZm9ybWF0ID0gX3JlZi5mb3JtYXQsXG4gICAgICBrZXlib2FyZEljb24gPSBfcmVmLmtleWJvYXJkSWNvbixcbiAgICAgIGRpc2FibGVkID0gX3JlZi5kaXNhYmxlZCxcbiAgICAgIHJpZm1Gb3JtYXR0ZXIgPSBfcmVmLnJpZm1Gb3JtYXR0ZXIsXG4gICAgICBfcmVmJFRleHRGaWVsZENvbXBvbmUgPSBfcmVmLlRleHRGaWVsZENvbXBvbmVudCxcbiAgICAgIFRleHRGaWVsZENvbXBvbmVudCA9IF9yZWYkVGV4dEZpZWxkQ29tcG9uZSA9PT0gdm9pZCAwID8gVGV4dEZpZWxkIDogX3JlZiRUZXh0RmllbGRDb21wb25lLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wiaW5wdXRWYWx1ZVwiLCBcImlucHV0VmFyaWFudFwiLCBcInZhbGlkYXRpb25FcnJvclwiLCBcIktleWJvYXJkQnV0dG9uUHJvcHNcIiwgXCJJbnB1dEFkb3JubWVudFByb3BzXCIsIFwib3BlblBpY2tlclwiLCBcIm9uQ2hhbmdlXCIsIFwiSW5wdXRQcm9wc1wiLCBcIm1hc2tcIiwgXCJtYXNrQ2hhclwiLCBcInJlZnVzZVwiLCBcImZvcm1hdFwiLCBcImtleWJvYXJkSWNvblwiLCBcImRpc2FibGVkXCIsIFwicmlmbUZvcm1hdHRlclwiLCBcIlRleHRGaWVsZENvbXBvbmVudFwiXSk7XG5cbiAgdmFyIGlucHV0TWFzayA9IG1hc2sgfHwgbWFrZU1hc2tGcm9tRm9ybWF0KGZvcm1hdCwgbWFza0NoYXIpOyAvLyBwcmV0dGllci1pZ25vcmVcblxuICB2YXIgZm9ybWF0dGVyID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG1hc2tlZERhdGVGb3JtYXR0ZXIoaW5wdXRNYXNrLCBtYXNrQ2hhciwgcmVmdXNlKTtcbiAgfSwgW2lucHV0TWFzaywgbWFza0NoYXIsIHJlZnVzZV0pO1xuICB2YXIgcG9zaXRpb24gPSBJbnB1dEFkb3JubWVudFByb3BzICYmIElucHV0QWRvcm5tZW50UHJvcHMucG9zaXRpb24gPyBJbnB1dEFkb3JubWVudFByb3BzLnBvc2l0aW9uIDogJ2VuZCc7XG5cbiAgdmFyIGhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh0ZXh0KSB7XG4gICAgdmFyIGZpbmFsU3RyaW5nID0gdGV4dCA9PT0gJycgfHwgdGV4dCA9PT0gaW5wdXRNYXNrID8gbnVsbCA6IHRleHQ7XG4gICAgb25DaGFuZ2UoZmluYWxTdHJpbmcpO1xuICB9O1xuXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFJpZm0sIHtcbiAgICBrZXk6IGlucHV0TWFzayxcbiAgICB2YWx1ZTogaW5wdXRWYWx1ZSxcbiAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgIHJlZnVzZTogcmVmdXNlLFxuICAgIGZvcm1hdDogcmlmbUZvcm1hdHRlciB8fCBmb3JtYXR0ZXJcbiAgfSwgZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgdmFyIG9uQ2hhbmdlID0gX3JlZjIub25DaGFuZ2UsXG4gICAgICAgIHZhbHVlID0gX3JlZjIudmFsdWU7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoVGV4dEZpZWxkQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICBlcnJvcjogQm9vbGVhbih2YWxpZGF0aW9uRXJyb3IpLFxuICAgICAgaGVscGVyVGV4dDogdmFsaWRhdGlvbkVycm9yXG4gICAgfSwgb3RoZXIsIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIG9uQ2hhbmdlOiBvbkNoYW5nZSxcbiAgICAgIHZhcmlhbnQ6IGlucHV0VmFyaWFudCxcbiAgICAgIElucHV0UHJvcHM6IF9vYmplY3RTcHJlYWQkMSh7fSwgSW5wdXRQcm9wcywgX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChwb3NpdGlvbiwgXCJBZG9ybm1lbnRcIiksIGNyZWF0ZUVsZW1lbnQoSW5wdXRBZG9ybm1lbnQsIF9leHRlbmRzKHtcbiAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uXG4gICAgICB9LCBJbnB1dEFkb3JubWVudFByb3BzKSwgY3JlYXRlRWxlbWVudChJY29uQnV0dG9uLCBfZXh0ZW5kcyh7XG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICAgICAgfSwgS2V5Ym9hcmRCdXR0b25Qcm9wcywge1xuICAgICAgICBvbkNsaWNrOiBvbk9wZW5cbiAgICAgIH0pLCBrZXlib2FyZEljb24pKSkpXG4gICAgfSkpO1xuICB9KTtcbn07XG5LZXlib2FyZERhdGVJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGtleWJvYXJkSWNvbjogY3JlYXRlRWxlbWVudChLZXlib2FyZEljb24sIG51bGwpXG59O1xuXG5mdW5jdGlvbiB1c2VPcGVuU3RhdGUoX3JlZikge1xuICB2YXIgb3BlbiA9IF9yZWYub3BlbixcbiAgICAgIG9uT3BlbiA9IF9yZWYub25PcGVuLFxuICAgICAgb25DbG9zZSA9IF9yZWYub25DbG9zZTtcbiAgdmFyIHNldElzT3BlblN0YXRlID0gbnVsbDtcblxuICBpZiAob3BlbiA9PT0gdW5kZWZpbmVkIHx8IG9wZW4gPT09IG51bGwpIHtcbiAgICAvLyBUaGUgY29tcG9uZW50IGlzIHVuY29udHJvbGxlZCwgc28gd2UgbmVlZCB0byBnaXZlIGl0IGl0cyBvd24gc3RhdGUuXG4gICAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHZhciBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKTtcblxuICAgIG9wZW4gPSBfdXNlU3RhdGUyWzBdO1xuICAgIHNldElzT3BlblN0YXRlID0gX3VzZVN0YXRlMlsxXTtcbiAgfSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG4gIHZhciBzZXRJc09wZW4gPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmV3SXNPcGVuKSB7XG4gICAgc2V0SXNPcGVuU3RhdGUgJiYgc2V0SXNPcGVuU3RhdGUobmV3SXNPcGVuKTtcbiAgICByZXR1cm4gbmV3SXNPcGVuID8gb25PcGVuICYmIG9uT3BlbigpIDogb25DbG9zZSAmJiBvbkNsb3NlKCk7XG4gIH0sIFtvbk9wZW4sIG9uQ2xvc2UsIHNldElzT3BlblN0YXRlXSk7XG4gIHJldHVybiB7XG4gICAgaXNPcGVuOiBvcGVuLFxuICAgIHNldElzT3Blbjogc2V0SXNPcGVuXG4gIH07XG59XG5cbnZhciB1c2VWYWx1ZVRvRGF0ZSA9IGZ1bmN0aW9uIHVzZVZhbHVlVG9EYXRlKHV0aWxzLCBfcmVmKSB7XG4gIHZhciB2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICBpbml0aWFsRm9jdXNlZERhdGUgPSBfcmVmLmluaXRpYWxGb2N1c2VkRGF0ZTtcbiAgdmFyIG5vd1JlZiA9IHVzZVJlZih1dGlscy5kYXRlKCkpO1xuICB2YXIgZGF0ZSA9IHV0aWxzLmRhdGUodmFsdWUgfHwgaW5pdGlhbEZvY3VzZWREYXRlIHx8IG5vd1JlZi5jdXJyZW50KTtcbiAgcmV0dXJuIGRhdGUgJiYgdXRpbHMuaXNWYWxpZChkYXRlKSA/IGRhdGUgOiBub3dSZWYuY3VycmVudDtcbn07XG5cbmZ1bmN0aW9uIHVzZURhdGVWYWx1ZXMocHJvcHMsIG9wdGlvbnMpIHtcbiAgdmFyIHV0aWxzID0gdXNlVXRpbHMoKTtcbiAgdmFyIGRhdGUgPSB1c2VWYWx1ZVRvRGF0ZSh1dGlscywgcHJvcHMpO1xuICB2YXIgZm9ybWF0ID0gcHJvcHMuZm9ybWF0IHx8IG9wdGlvbnMuZ2V0RGVmYXVsdEZvcm1hdCgpO1xuICByZXR1cm4ge1xuICAgIGRhdGU6IGRhdGUsXG4gICAgZm9ybWF0OiBmb3JtYXRcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlUGlja2VyU3RhdGUocHJvcHMsIG9wdGlvbnMpIHtcbiAgdmFyIGF1dG9PayA9IHByb3BzLmF1dG9PayxcbiAgICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICByZWFkT25seSA9IHByb3BzLnJlYWRPbmx5LFxuICAgICAgb25BY2NlcHQgPSBwcm9wcy5vbkFjY2VwdCxcbiAgICAgIF9vbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgb25FcnJvciA9IHByb3BzLm9uRXJyb3IsXG4gICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgdmFyaWFudCA9IHByb3BzLnZhcmlhbnQ7XG4gIHZhciB1dGlscyA9IHVzZVV0aWxzKCk7XG5cbiAgdmFyIF91c2VPcGVuU3RhdGUgPSB1c2VPcGVuU3RhdGUocHJvcHMpLFxuICAgICAgaXNPcGVuID0gX3VzZU9wZW5TdGF0ZS5pc09wZW4sXG4gICAgICBzZXRJc09wZW4gPSBfdXNlT3BlblN0YXRlLnNldElzT3BlbjtcblxuICB2YXIgX3VzZURhdGVWYWx1ZXMgPSB1c2VEYXRlVmFsdWVzKHByb3BzLCBvcHRpb25zKSxcbiAgICAgIGRhdGUgPSBfdXNlRGF0ZVZhbHVlcy5kYXRlLFxuICAgICAgZm9ybWF0ID0gX3VzZURhdGVWYWx1ZXMuZm9ybWF0O1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShkYXRlKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgcGlja2VyRGF0ZSA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRQaWNrZXJEYXRlID0gX3VzZVN0YXRlMlsxXTtcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIC8vIGlmIHZhbHVlIHdhcyBjaGFuZ2VkIGluIGNsb3NlZCBzdGF0ZSAtIHRyZWF0IGl0IGFzIGFjY2VwdGVkXG4gICAgaWYgKCFpc09wZW4gJiYgIXV0aWxzLmlzRXF1YWwocGlja2VyRGF0ZSwgZGF0ZSkpIHtcbiAgICAgIHNldFBpY2tlckRhdGUoZGF0ZSk7XG4gICAgfVxuICB9LCBbZGF0ZSwgaXNPcGVuLCBwaWNrZXJEYXRlLCB1dGlsc10pO1xuICB2YXIgYWNjZXB0RGF0ZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChhY2NlcHRlZERhdGUpIHtcbiAgICBfb25DaGFuZ2UoYWNjZXB0ZWREYXRlKTtcblxuICAgIGlmIChvbkFjY2VwdCkge1xuICAgICAgb25BY2NlcHQoYWNjZXB0ZWREYXRlKTtcbiAgICB9XG5cbiAgICBzZXRJc09wZW4oZmFsc2UpO1xuICB9LCBbb25BY2NlcHQsIF9vbkNoYW5nZSwgc2V0SXNPcGVuXSk7XG4gIHZhciB3cmFwcGVyUHJvcHMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9ybWF0OiBmb3JtYXQsXG4gICAgICBvcGVuOiBpc09wZW4sXG4gICAgICBvbkNsZWFyOiBmdW5jdGlvbiBvbkNsZWFyKCkge1xuICAgICAgICByZXR1cm4gYWNjZXB0RGF0ZShudWxsKTtcbiAgICAgIH0sXG4gICAgICBvbkFjY2VwdDogZnVuY3Rpb24gb25BY2NlcHQoKSB7XG4gICAgICAgIHJldHVybiBhY2NlcHREYXRlKHBpY2tlckRhdGUpO1xuICAgICAgfSxcbiAgICAgIG9uU2V0VG9kYXk6IGZ1bmN0aW9uIG9uU2V0VG9kYXkoKSB7XG4gICAgICAgIHJldHVybiBzZXRQaWNrZXJEYXRlKHV0aWxzLmRhdGUoKSk7XG4gICAgICB9LFxuICAgICAgb25EaXNtaXNzOiBmdW5jdGlvbiBvbkRpc21pc3MoKSB7XG4gICAgICAgIHNldElzT3BlbihmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW2FjY2VwdERhdGUsIGZvcm1hdCwgaXNPcGVuLCBwaWNrZXJEYXRlLCBzZXRJc09wZW4sIHV0aWxzXSk7XG4gIHZhciBwaWNrZXJQcm9wcyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRlOiBwaWNrZXJEYXRlLFxuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKG5ld0RhdGUpIHtcbiAgICAgICAgdmFyIGlzRmluaXNoID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0cnVlO1xuICAgICAgICBzZXRQaWNrZXJEYXRlKG5ld0RhdGUpO1xuXG4gICAgICAgIGlmIChpc0ZpbmlzaCAmJiBhdXRvT2spIHtcbiAgICAgICAgICBhY2NlcHREYXRlKG5ld0RhdGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBzaW11bGF0ZSBhdXRvT2ssIGJ1dCBkbyBub3QgY2xvc2UgdGhlIG1vZGFsXG5cblxuICAgICAgICBpZiAodmFyaWFudCA9PT0gJ2lubGluZScgfHwgdmFyaWFudCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICBfb25DaGFuZ2UobmV3RGF0ZSk7XG5cbiAgICAgICAgICBvbkFjY2VwdCAmJiBvbkFjY2VwdChuZXdEYXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH0sIFthY2NlcHREYXRlLCBhdXRvT2ssIG9uQWNjZXB0LCBfb25DaGFuZ2UsIHBpY2tlckRhdGUsIHZhcmlhbnRdKTtcbiAgdmFyIHZhbGlkYXRpb25FcnJvciA9IHZhbGlkYXRlKHZhbHVlLCB1dGlscywgcHJvcHMpO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChvbkVycm9yKSB7XG4gICAgICBvbkVycm9yKHZhbGlkYXRpb25FcnJvciwgdmFsdWUpO1xuICAgIH1cbiAgfSwgW29uRXJyb3IsIHZhbGlkYXRpb25FcnJvciwgdmFsdWVdKTtcbiAgdmFyIGlucHV0VmFsdWUgPSBnZXREaXNwbGF5RGF0ZShkYXRlLCBmb3JtYXQsIHV0aWxzLCB2YWx1ZSA9PT0gbnVsbCwgcHJvcHMpO1xuICB2YXIgaW5wdXRQcm9wcyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlLFxuICAgICAgdmFsaWRhdGlvbkVycm9yOiB2YWxpZGF0aW9uRXJyb3IsXG4gICAgICBvcGVuUGlja2VyOiBmdW5jdGlvbiBvcGVuUGlja2VyKCkge1xuICAgICAgICByZXR1cm4gIXJlYWRPbmx5ICYmICFkaXNhYmxlZCAmJiBzZXRJc09wZW4odHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW2Rpc2FibGVkLCBpbnB1dFZhbHVlLCByZWFkT25seSwgc2V0SXNPcGVuLCB2YWxpZGF0aW9uRXJyb3JdKTtcbiAgdmFyIHBpY2tlclN0YXRlID0ge1xuICAgIHBpY2tlclByb3BzOiBwaWNrZXJQcm9wcyxcbiAgICBpbnB1dFByb3BzOiBpbnB1dFByb3BzLFxuICAgIHdyYXBwZXJQcm9wczogd3JhcHBlclByb3BzXG4gIH07XG4gIHVzZURlYnVnVmFsdWUocGlja2VyU3RhdGUpO1xuICByZXR1cm4gcGlja2VyU3RhdGU7XG59XG5cbmZ1bmN0aW9uIG93bktleXMkMihvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQyKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkMihzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyQyKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gcGFyc2VJbnB1dFN0cmluZyh2YWx1ZSwgdXRpbHMsIGZvcm1hdCkge1xuICB0cnkge1xuICAgIHJldHVybiB1dGlscy5wYXJzZSh2YWx1ZSwgZm9ybWF0KTtcbiAgfSBjYXRjaCAoX3VudXNlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVzZUtleWJvYXJkUGlja2VyU3RhdGUocHJvcHMsIG9wdGlvbnMpIHtcbiAgdmFyIF9wcm9wcyRmb3JtYXQgPSBwcm9wcy5mb3JtYXQsXG4gICAgICBmb3JtYXQgPSBfcHJvcHMkZm9ybWF0ID09PSB2b2lkIDAgPyBvcHRpb25zLmdldERlZmF1bHRGb3JtYXQoKSA6IF9wcm9wcyRmb3JtYXQsXG4gICAgICBpbnB1dFZhbHVlID0gcHJvcHMuaW5wdXRWYWx1ZSxcbiAgICAgIF9vbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgdmFyIHV0aWxzID0gdXNlVXRpbHMoKTtcbiAgdmFyIGRpc3BsYXlEYXRlID0gZ2V0RGlzcGxheURhdGUodmFsdWUsIGZvcm1hdCwgdXRpbHMsIHZhbHVlID09PSBudWxsLCBwcm9wcyk7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKGRpc3BsYXlEYXRlKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgaW5uZXJJbnB1dFZhbHVlID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldElubmVySW5wdXRWYWx1ZSA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIGRhdGVWYWx1ZSA9IGlucHV0VmFsdWUgPyBwYXJzZUlucHV0U3RyaW5nKGlucHV0VmFsdWUsIHV0aWxzLCBmb3JtYXQpIDogdmFsdWU7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHV0aWxzLmlzVmFsaWQodmFsdWUpKSB7XG4gICAgICBzZXRJbm5lcklucHV0VmFsdWUoZGlzcGxheURhdGUpO1xuICAgIH1cbiAgfSwgW2Rpc3BsYXlEYXRlLCBzZXRJbm5lcklucHV0VmFsdWUsIHV0aWxzLCB2YWx1ZV0pO1xuICB2YXIgaGFuZGxlS2V5Ym9hcmRDaGFuZ2UgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZGF0ZSkge1xuICAgIF9vbkNoYW5nZShkYXRlLCBkYXRlID09PSBudWxsID8gbnVsbCA6IHV0aWxzLmZvcm1hdChkYXRlLCBmb3JtYXQpKTtcbiAgfSwgW2Zvcm1hdCwgX29uQ2hhbmdlLCB1dGlsc10pO1xuXG4gIHZhciBfdXNlUGlja2VyU3RhdGUgPSB1c2VQaWNrZXJTdGF0ZSggLy8gRXh0ZW5kIHByb3BzIGludGVyZmFjZVxuICBfb2JqZWN0U3ByZWFkJDIoe30sIHByb3BzLCB7XG4gICAgdmFsdWU6IGRhdGVWYWx1ZSxcbiAgICBvbkNoYW5nZTogaGFuZGxlS2V5Ym9hcmRDaGFuZ2VcbiAgfSksIG9wdGlvbnMpLFxuICAgICAgaW5uZXJJbnB1dFByb3BzID0gX3VzZVBpY2tlclN0YXRlLmlucHV0UHJvcHMsXG4gICAgICB3cmFwcGVyUHJvcHMgPSBfdXNlUGlja2VyU3RhdGUud3JhcHBlclByb3BzLFxuICAgICAgcGlja2VyUHJvcHMgPSBfdXNlUGlja2VyU3RhdGUucGlja2VyUHJvcHM7XG5cbiAgdmFyIGlucHV0UHJvcHMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX29iamVjdFNwcmVhZCQyKHt9LCBpbm5lcklucHV0UHJvcHMsIHtcbiAgICAgIC8vIHJldXNlIHZhbGlkYXRpb24gYW5kIG9wZW4vY2xvc2UgbG9naWNcbiAgICAgIGZvcm1hdDogd3JhcHBlclByb3BzLmZvcm1hdCxcbiAgICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWUgfHwgaW5uZXJJbnB1dFZhbHVlLFxuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHNldElubmVySW5wdXRWYWx1ZSh2YWx1ZSB8fCAnJyk7XG4gICAgICAgIHZhciBkYXRlID0gdmFsdWUgPT09IG51bGwgPyBudWxsIDogdXRpbHMucGFyc2UodmFsdWUsIHdyYXBwZXJQcm9wcy5mb3JtYXQpO1xuXG4gICAgICAgIF9vbkNoYW5nZShkYXRlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtpbm5lcklucHV0UHJvcHMsIGlubmVySW5wdXRWYWx1ZSwgaW5wdXRWYWx1ZSwgX29uQ2hhbmdlLCB1dGlscywgd3JhcHBlclByb3BzLmZvcm1hdF0pO1xuICByZXR1cm4ge1xuICAgIGlucHV0UHJvcHM6IGlucHV0UHJvcHMsXG4gICAgd3JhcHBlclByb3BzOiB3cmFwcGVyUHJvcHMsXG4gICAgcGlja2VyUHJvcHM6IHBpY2tlclByb3BzXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VQaWNrZXJXaXRoU3RhdGUoX3JlZikge1xuICB2YXIgSW5wdXQgPSBfcmVmLklucHV0LFxuICAgICAgdXNlU3RhdGUgPSBfcmVmLnVzZVN0YXRlLFxuICAgICAgdXNlT3B0aW9ucyA9IF9yZWYudXNlT3B0aW9ucyxcbiAgICAgIGdldEN1c3RvbVByb3BzID0gX3JlZi5nZXRDdXN0b21Qcm9wcyxcbiAgICAgIERlZmF1bHRUb29sYmFyQ29tcG9uZW50ID0gX3JlZi5EZWZhdWx0VG9vbGJhckNvbXBvbmVudDtcblxuICBmdW5jdGlvbiBQaWNrZXJXaXRoU3RhdGUocHJvcHMpIHtcbiAgICB2YXIgYWxsb3dLZXlib2FyZENvbnRyb2wgPSBwcm9wcy5hbGxvd0tleWJvYXJkQ29udHJvbCxcbiAgICAgICAgYW1wbSA9IHByb3BzLmFtcG0sXG4gICAgICAgIGFuaW1hdGVZZWFyU2Nyb2xsaW5nID0gcHJvcHMuYW5pbWF0ZVllYXJTY3JvbGxpbmcsXG4gICAgICAgIGF1dG9PayA9IHByb3BzLmF1dG9PayxcbiAgICAgICAgZGF0ZVJhbmdlSWNvbiA9IHByb3BzLmRhdGVSYW5nZUljb24sXG4gICAgICAgIGRpc2FibGVGdXR1cmUgPSBwcm9wcy5kaXNhYmxlRnV0dXJlLFxuICAgICAgICBkaXNhYmxlUGFzdCA9IHByb3BzLmRpc2FibGVQYXN0LFxuICAgICAgICBkaXNhYmxlVG9vbGJhciA9IHByb3BzLmRpc2FibGVUb29sYmFyLFxuICAgICAgICBlbXB0eUxhYmVsID0gcHJvcHMuZW1wdHlMYWJlbCxcbiAgICAgICAgZm9ybWF0ID0gcHJvcHMuZm9ybWF0LFxuICAgICAgICBmb3J3YXJkZWRSZWYgPSBwcm9wcy5mb3J3YXJkZWRSZWYsXG4gICAgICAgIGhpZGVUYWJzID0gcHJvcHMuaGlkZVRhYnMsXG4gICAgICAgIGluaXRpYWxGb2N1c2VkRGF0ZSA9IHByb3BzLmluaXRpYWxGb2N1c2VkRGF0ZSxcbiAgICAgICAgaW52YWxpZERhdGVNZXNzYWdlID0gcHJvcHMuaW52YWxpZERhdGVNZXNzYWdlLFxuICAgICAgICBpbnZhbGlkTGFiZWwgPSBwcm9wcy5pbnZhbGlkTGFiZWwsXG4gICAgICAgIGxhYmVsRnVuYyA9IHByb3BzLmxhYmVsRnVuYyxcbiAgICAgICAgbGVmdEFycm93QnV0dG9uUHJvcHMgPSBwcm9wcy5sZWZ0QXJyb3dCdXR0b25Qcm9wcyxcbiAgICAgICAgbGVmdEFycm93SWNvbiA9IHByb3BzLmxlZnRBcnJvd0ljb24sXG4gICAgICAgIGxvYWRpbmdJbmRpY2F0b3IgPSBwcm9wcy5sb2FkaW5nSW5kaWNhdG9yLFxuICAgICAgICBtYXhEYXRlID0gcHJvcHMubWF4RGF0ZSxcbiAgICAgICAgbWF4RGF0ZU1lc3NhZ2UgPSBwcm9wcy5tYXhEYXRlTWVzc2FnZSxcbiAgICAgICAgbWluRGF0ZSA9IHByb3BzLm1pbkRhdGUsXG4gICAgICAgIG1pbkRhdGVNZXNzYWdlID0gcHJvcHMubWluRGF0ZU1lc3NhZ2UsXG4gICAgICAgIG1pbnV0ZXNTdGVwID0gcHJvcHMubWludXRlc1N0ZXAsXG4gICAgICAgIG9uQWNjZXB0ID0gcHJvcHMub25BY2NlcHQsXG4gICAgICAgIG9uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2UsXG4gICAgICAgIG9uQ2xvc2UgPSBwcm9wcy5vbkNsb3NlLFxuICAgICAgICBvbk1vbnRoQ2hhbmdlID0gcHJvcHMub25Nb250aENoYW5nZSxcbiAgICAgICAgb25PcGVuID0gcHJvcHMub25PcGVuLFxuICAgICAgICBvblllYXJDaGFuZ2UgPSBwcm9wcy5vblllYXJDaGFuZ2UsXG4gICAgICAgIG9wZW5UbyA9IHByb3BzLm9wZW5UbyxcbiAgICAgICAgb3JpZW50YXRpb24gPSBwcm9wcy5vcmllbnRhdGlvbixcbiAgICAgICAgcmVuZGVyRGF5ID0gcHJvcHMucmVuZGVyRGF5LFxuICAgICAgICByaWdodEFycm93QnV0dG9uUHJvcHMgPSBwcm9wcy5yaWdodEFycm93QnV0dG9uUHJvcHMsXG4gICAgICAgIHJpZ2h0QXJyb3dJY29uID0gcHJvcHMucmlnaHRBcnJvd0ljb24sXG4gICAgICAgIHNob3VsZERpc2FibGVEYXRlID0gcHJvcHMuc2hvdWxkRGlzYWJsZURhdGUsXG4gICAgICAgIHN0cmljdENvbXBhcmVEYXRlcyA9IHByb3BzLnN0cmljdENvbXBhcmVEYXRlcyxcbiAgICAgICAgdGltZUljb24gPSBwcm9wcy50aW1lSWNvbixcbiAgICAgICAgX3Byb3BzJFRvb2xiYXJDb21wb25lID0gcHJvcHMuVG9vbGJhckNvbXBvbmVudCxcbiAgICAgICAgVG9vbGJhckNvbXBvbmVudCA9IF9wcm9wcyRUb29sYmFyQ29tcG9uZSA9PT0gdm9pZCAwID8gRGVmYXVsdFRvb2xiYXJDb21wb25lbnQgOiBfcHJvcHMkVG9vbGJhckNvbXBvbmUsXG4gICAgICAgIHZhbHVlID0gcHJvcHMudmFsdWUsXG4gICAgICAgIHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgICB2aWV3cyA9IHByb3BzLnZpZXdzLFxuICAgICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYWxsb3dLZXlib2FyZENvbnRyb2xcIiwgXCJhbXBtXCIsIFwiYW5pbWF0ZVllYXJTY3JvbGxpbmdcIiwgXCJhdXRvT2tcIiwgXCJkYXRlUmFuZ2VJY29uXCIsIFwiZGlzYWJsZUZ1dHVyZVwiLCBcImRpc2FibGVQYXN0XCIsIFwiZGlzYWJsZVRvb2xiYXJcIiwgXCJlbXB0eUxhYmVsXCIsIFwiZm9ybWF0XCIsIFwiZm9yd2FyZGVkUmVmXCIsIFwiaGlkZVRhYnNcIiwgXCJpbml0aWFsRm9jdXNlZERhdGVcIiwgXCJpbnZhbGlkRGF0ZU1lc3NhZ2VcIiwgXCJpbnZhbGlkTGFiZWxcIiwgXCJsYWJlbEZ1bmNcIiwgXCJsZWZ0QXJyb3dCdXR0b25Qcm9wc1wiLCBcImxlZnRBcnJvd0ljb25cIiwgXCJsb2FkaW5nSW5kaWNhdG9yXCIsIFwibWF4RGF0ZVwiLCBcIm1heERhdGVNZXNzYWdlXCIsIFwibWluRGF0ZVwiLCBcIm1pbkRhdGVNZXNzYWdlXCIsIFwibWludXRlc1N0ZXBcIiwgXCJvbkFjY2VwdFwiLCBcIm9uQ2hhbmdlXCIsIFwib25DbG9zZVwiLCBcIm9uTW9udGhDaGFuZ2VcIiwgXCJvbk9wZW5cIiwgXCJvblllYXJDaGFuZ2VcIiwgXCJvcGVuVG9cIiwgXCJvcmllbnRhdGlvblwiLCBcInJlbmRlckRheVwiLCBcInJpZ2h0QXJyb3dCdXR0b25Qcm9wc1wiLCBcInJpZ2h0QXJyb3dJY29uXCIsIFwic2hvdWxkRGlzYWJsZURhdGVcIiwgXCJzdHJpY3RDb21wYXJlRGF0ZXNcIiwgXCJ0aW1lSWNvblwiLCBcIlRvb2xiYXJDb21wb25lbnRcIiwgXCJ2YWx1ZVwiLCBcInZhcmlhbnRcIiwgXCJ2aWV3c1wiXSk7XG5cbiAgICB2YXIgaW5qZWN0ZWRQcm9wcyA9IGdldEN1c3RvbVByb3BzID8gZ2V0Q3VzdG9tUHJvcHMocHJvcHMpIDoge307XG4gICAgdmFyIG9wdGlvbnMgPSB1c2VPcHRpb25zKHByb3BzKTtcblxuICAgIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShwcm9wcywgb3B0aW9ucyksXG4gICAgICAgIHBpY2tlclByb3BzID0gX3VzZVN0YXRlLnBpY2tlclByb3BzLFxuICAgICAgICBpbnB1dFByb3BzID0gX3VzZVN0YXRlLmlucHV0UHJvcHMsXG4gICAgICAgIHdyYXBwZXJQcm9wcyA9IF91c2VTdGF0ZS53cmFwcGVyUHJvcHM7XG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChXcmFwcGVyLCBfZXh0ZW5kcyh7XG4gICAgICB2YXJpYW50OiB2YXJpYW50LFxuICAgICAgSW5wdXRDb21wb25lbnQ6IElucHV0LFxuICAgICAgRGF0ZUlucHV0UHJvcHM6IGlucHV0UHJvcHNcbiAgICB9LCBpbmplY3RlZFByb3BzLCB3cmFwcGVyUHJvcHMsIG90aGVyKSwgY3JlYXRlRWxlbWVudChQaWNrZXIsIF9leHRlbmRzKHt9LCBwaWNrZXJQcm9wcywge1xuICAgICAgYWxsb3dLZXlib2FyZENvbnRyb2w6IGFsbG93S2V5Ym9hcmRDb250cm9sLFxuICAgICAgYW1wbTogYW1wbSxcbiAgICAgIGFuaW1hdGVZZWFyU2Nyb2xsaW5nOiBhbmltYXRlWWVhclNjcm9sbGluZyxcbiAgICAgIGRhdGVSYW5nZUljb246IGRhdGVSYW5nZUljb24sXG4gICAgICBkaXNhYmxlRnV0dXJlOiBkaXNhYmxlRnV0dXJlLFxuICAgICAgZGlzYWJsZVBhc3Q6IGRpc2FibGVQYXN0LFxuICAgICAgZGlzYWJsZVRvb2xiYXI6IGRpc2FibGVUb29sYmFyLFxuICAgICAgaGlkZVRhYnM6IGhpZGVUYWJzLFxuICAgICAgbGVmdEFycm93QnV0dG9uUHJvcHM6IGxlZnRBcnJvd0J1dHRvblByb3BzLFxuICAgICAgbGVmdEFycm93SWNvbjogbGVmdEFycm93SWNvbixcbiAgICAgIGxvYWRpbmdJbmRpY2F0b3I6IGxvYWRpbmdJbmRpY2F0b3IsXG4gICAgICBtYXhEYXRlOiBtYXhEYXRlLFxuICAgICAgbWluRGF0ZTogbWluRGF0ZSxcbiAgICAgIG1pbnV0ZXNTdGVwOiBtaW51dGVzU3RlcCxcbiAgICAgIG9uTW9udGhDaGFuZ2U6IG9uTW9udGhDaGFuZ2UsXG4gICAgICBvblllYXJDaGFuZ2U6IG9uWWVhckNoYW5nZSxcbiAgICAgIG9wZW5Ubzogb3BlblRvLFxuICAgICAgb3JpZW50YXRpb246IG9yaWVudGF0aW9uLFxuICAgICAgcmVuZGVyRGF5OiByZW5kZXJEYXksXG4gICAgICByaWdodEFycm93QnV0dG9uUHJvcHM6IHJpZ2h0QXJyb3dCdXR0b25Qcm9wcyxcbiAgICAgIHJpZ2h0QXJyb3dJY29uOiByaWdodEFycm93SWNvbixcbiAgICAgIHNob3VsZERpc2FibGVEYXRlOiBzaG91bGREaXNhYmxlRGF0ZSxcbiAgICAgIHN0cmljdENvbXBhcmVEYXRlczogc3RyaWN0Q29tcGFyZURhdGVzLFxuICAgICAgdGltZUljb246IHRpbWVJY29uLFxuICAgICAgVG9vbGJhckNvbXBvbmVudDogVG9vbGJhckNvbXBvbmVudCxcbiAgICAgIHZpZXdzOiB2aWV3c1xuICAgIH0pKSk7XG4gIH1cblxuICByZXR1cm4gUGlja2VyV2l0aFN0YXRlO1xufVxuXG5leHBvcnQgeyBLZXlib2FyZERhdGVJbnB1dCBhcyBLLCBQaWNrZXJUb29sYmFyIGFzIFAsIFRvb2xiYXJCdXR0b24kMSBhcyBULCBQdXJlRGF0ZUlucHV0IGFzIGEsIHVzZUtleWJvYXJkUGlja2VyU3RhdGUgYXMgYiwgVG9vbGJhclRleHQgYXMgYywgbWFrZVBpY2tlcldpdGhTdGF0ZSBhcyBtLCBwaWNrMTJoT3IyNGhGb3JtYXQgYXMgcCwgdXNlUGlja2VyU3RhdGUgYXMgdSwgdmFsaWRhdGUgYXMgdiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFrZVBpY2tlcldpdGhTdGF0ZS1mZWUzOTc2NS5qcy5tYXBcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZU1lbW8sIGNyZWF0ZUVsZW1lbnQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmdW5jLCBvbmVPZlR5cGUsIG9iamVjdCwgc3RyaW5nLCBlbGVtZW50LCBhcnJheU9mIH0gZnJvbSAncHJvcC10eXBlcyc7XG5cbnZhciBNdWlQaWNrZXJzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG52YXIgTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIgPSBmdW5jdGlvbiBNdWlQaWNrZXJzVXRpbHNQcm92aWRlcihfcmVmKSB7XG4gIHZhciBVdGlscyA9IF9yZWYudXRpbHMsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBsb2NhbGUgPSBfcmVmLmxvY2FsZSxcbiAgICAgIGxpYkluc3RhbmNlID0gX3JlZi5saWJJbnN0YW5jZTtcbiAgdmFyIHV0aWxzID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBVdGlscyh7XG4gICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgIGluc3RhbmNlOiBsaWJJbnN0YW5jZVxuICAgIH0pO1xuICB9LCBbVXRpbHMsIGxpYkluc3RhbmNlLCBsb2NhbGVdKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoTXVpUGlja2Vyc0NvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogdXRpbHMsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gIH0pO1xufTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgdXRpbHM6IGZ1bmMuaXNSZXF1aXJlZCxcbiAgbG9jYWxlOiBvbmVPZlR5cGUoW29iamVjdCwgc3RyaW5nXSksXG4gIGNoaWxkcmVuOiBvbmVPZlR5cGUoW2VsZW1lbnQuaXNSZXF1aXJlZCwgYXJyYXlPZihlbGVtZW50LmlzUmVxdWlyZWQpXSkuaXNSZXF1aXJlZFxufSA6IHZvaWQgMDtcblxudmFyIGNoZWNrVXRpbHMgPSBmdW5jdGlvbiBjaGVja1V0aWxzKHV0aWxzKSB7XG4gIGlmICghdXRpbHMpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgZmluZCB1dGlscyBpbiBjb250ZXh0LiBZb3UgZWl0aGVyIGEpIGZvcmdvdCB0byB3cmFwIHlvdXIgY29tcG9uZW50IHRyZWUgaW4gTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXI7IG9yIGIpIG1peGVkIG5hbWVkIGFuZCBkaXJlY3QgZmlsZSBpbXBvcnRzLiAgUmVjb21tZW5kYXRpb246IHVzZSBuYW1lZCBpbXBvcnRzIGZyb20gdGhlIG1vZHVsZSBpbmRleC4nKTtcbiAgfVxufTtcbmZ1bmN0aW9uIHVzZVV0aWxzKCkge1xuICB2YXIgdXRpbHMgPSB1c2VDb250ZXh0KE11aVBpY2tlcnNDb250ZXh0KTtcbiAgY2hlY2tVdGlscyh1dGlscyk7XG4gIHJldHVybiB1dGlscztcbn1cblxuZXhwb3J0IHsgTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIgYXMgTSwgTXVpUGlja2Vyc0NvbnRleHQgYXMgYSwgdXNlVXRpbHMgYXMgdSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlVXRpbHMtY2ZiOTZhYzkuanMubWFwXG4iLCJpbXBvcnQgaGFzQ2xhc3MgZnJvbSAnLi9oYXNDbGFzcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtlbHNlIGlmICghaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSkgaWYgKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUgKyBcIiBcIiArIGNsYXNzTmFtZTtlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIChlbGVtZW50LmNsYXNzTmFtZSAmJiBlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8ICcnKSArIFwiIFwiICsgY2xhc3NOYW1lKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSByZXR1cm4gISFjbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgcmV0dXJuIChcIiBcIiArIChlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8IGVsZW1lbnQuY2xhc3NOYW1lKSArIFwiIFwiKS5pbmRleE9mKFwiIFwiICsgY2xhc3NOYW1lICsgXCIgXCIpICE9PSAtMTtcbn0iLCJmdW5jdGlvbiByZXBsYWNlQ2xhc3NOYW1lKG9yaWdDbGFzcywgY2xhc3NUb1JlbW92ZSkge1xuICByZXR1cm4gb3JpZ0NsYXNzLnJlcGxhY2UobmV3IFJlZ0V4cChcIihefFxcXFxzKVwiICsgY2xhc3NUb1JlbW92ZSArIFwiKD86XFxcXHN8JClcIiwgJ2cnKSwgJyQxJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoL15cXHMqfFxccyokL2csICcnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICA7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSByZXBsYWNlQ2xhc3NOYW1lKGVsZW1lbnQuY2xhc3NOYW1lLCBjbGFzc05hbWUpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIHJlcGxhY2VDbGFzc05hbWUoZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCAnJywgY2xhc3NOYW1lKSk7XG4gIH1cbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGFkZE9uZUNsYXNzIGZyb20gJ2RvbS1oZWxwZXJzL2FkZENsYXNzJztcbmltcG9ydCByZW1vdmVPbmVDbGFzcyBmcm9tICdkb20taGVscGVycy9yZW1vdmVDbGFzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAnLi9UcmFuc2l0aW9uJztcbmltcG9ydCB7IGNsYXNzTmFtZXNTaGFwZSB9IGZyb20gJy4vdXRpbHMvUHJvcFR5cGVzJztcblxudmFyIF9hZGRDbGFzcyA9IGZ1bmN0aW9uIGFkZENsYXNzKG5vZGUsIGNsYXNzZXMpIHtcbiAgcmV0dXJuIG5vZGUgJiYgY2xhc3NlcyAmJiBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBhZGRPbmVDbGFzcyhub2RlLCBjKTtcbiAgfSk7XG59O1xuXG52YXIgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiByZW1vdmVDbGFzcyhub2RlLCBjbGFzc2VzKSB7XG4gIHJldHVybiBub2RlICYmIGNsYXNzZXMgJiYgY2xhc3Nlcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gcmVtb3ZlT25lQ2xhc3Mobm9kZSwgYyk7XG4gIH0pO1xufTtcbi8qKlxuICogQSB0cmFuc2l0aW9uIGNvbXBvbmVudCBpbnNwaXJlZCBieSB0aGUgZXhjZWxsZW50XG4gKiBbbmctYW5pbWF0ZV0oaHR0cDovL3d3dy5uZ2FuaW1hdGUub3JnLykgbGlicmFyeSwgeW91IHNob3VsZCB1c2UgaXQgaWYgeW91J3JlXG4gKiB1c2luZyBDU1MgdHJhbnNpdGlvbnMgb3IgYW5pbWF0aW9ucy4gSXQncyBidWlsdCB1cG9uIHRoZVxuICogW2BUcmFuc2l0aW9uYF0oaHR0cHM6Ly9yZWFjdGNvbW11bml0eS5vcmcvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC90cmFuc2l0aW9uKVxuICogY29tcG9uZW50LCBzbyBpdCBpbmhlcml0cyBhbGwgb2YgaXRzIHByb3BzLlxuICpcbiAqIGBDU1NUcmFuc2l0aW9uYCBhcHBsaWVzIGEgcGFpciBvZiBjbGFzcyBuYW1lcyBkdXJpbmcgdGhlIGBhcHBlYXJgLCBgZW50ZXJgLFxuICogYW5kIGBleGl0YCBzdGF0ZXMgb2YgdGhlIHRyYW5zaXRpb24uIFRoZSBmaXJzdCBjbGFzcyBpcyBhcHBsaWVkIGFuZCB0aGVuIGFcbiAqIHNlY29uZCBgKi1hY3RpdmVgIGNsYXNzIGluIG9yZGVyIHRvIGFjdGl2YXRlIHRoZSBDU1MgdHJhbnNpdGlvbi4gQWZ0ZXIgdGhlXG4gKiB0cmFuc2l0aW9uLCBtYXRjaGluZyBgKi1kb25lYCBjbGFzcyBuYW1lcyBhcmUgYXBwbGllZCB0byBwZXJzaXN0IHRoZVxuICogdHJhbnNpdGlvbiBzdGF0ZS5cbiAqXG4gKiBgYGBqc3hcbiAqIGZ1bmN0aW9uIEFwcCgpIHtcbiAqICAgY29uc3QgW2luUHJvcCwgc2V0SW5Qcm9wXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAqICAgcmV0dXJuIChcbiAqICAgICA8ZGl2PlxuICogICAgICAgPENTU1RyYW5zaXRpb24gaW49e2luUHJvcH0gdGltZW91dD17MjAwfSBjbGFzc05hbWVzPVwibXktbm9kZVwiPlxuICogICAgICAgICA8ZGl2PlxuICogICAgICAgICAgIHtcIkknbGwgcmVjZWl2ZSBteS1ub2RlLSogY2xhc3Nlc1wifVxuICogICAgICAgICA8L2Rpdj5cbiAqICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAqICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldEluUHJvcCh0cnVlKX0+XG4gKiAgICAgICAgIENsaWNrIHRvIEVudGVyXG4gKiAgICAgICA8L2J1dHRvbj5cbiAqICAgICA8L2Rpdj5cbiAqICAgKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIFdoZW4gdGhlIGBpbmAgcHJvcCBpcyBzZXQgdG8gYHRydWVgLCB0aGUgY2hpbGQgY29tcG9uZW50IHdpbGwgZmlyc3QgcmVjZWl2ZVxuICogdGhlIGNsYXNzIGBleGFtcGxlLWVudGVyYCwgdGhlbiB0aGUgYGV4YW1wbGUtZW50ZXItYWN0aXZlYCB3aWxsIGJlIGFkZGVkIGluXG4gKiB0aGUgbmV4dCB0aWNrLiBgQ1NTVHJhbnNpdGlvbmAgW2ZvcmNlcyBhXG4gKiByZWZsb3ddKGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvYmxvYi81MDA3MzAzZTcyOWE3NGJlNjZhMjFjM2UyMjA1ZTQ5MTY4MjE1MjRiL3NyYy9DU1NUcmFuc2l0aW9uLmpzI0wyMDgtTDIxNSlcbiAqIGJldHdlZW4gYmVmb3JlIGFkZGluZyB0aGUgYGV4YW1wbGUtZW50ZXItYWN0aXZlYC4gVGhpcyBpcyBhbiBpbXBvcnRhbnQgdHJpY2tcbiAqIGJlY2F1c2UgaXQgYWxsb3dzIHVzIHRvIHRyYW5zaXRpb24gYmV0d2VlbiBgZXhhbXBsZS1lbnRlcmAgYW5kXG4gKiBgZXhhbXBsZS1lbnRlci1hY3RpdmVgIGV2ZW4gdGhvdWdoIHRoZXkgd2VyZSBhZGRlZCBpbW1lZGlhdGVseSBvbmUgYWZ0ZXJcbiAqIGFub3RoZXIuIE1vc3Qgbm90YWJseSwgdGhpcyBpcyB3aGF0IG1ha2VzIGl0IHBvc3NpYmxlIGZvciB1cyB0byBhbmltYXRlXG4gKiBfYXBwZWFyYW5jZV8uXG4gKlxuICogYGBgY3NzXG4gKiAubXktbm9kZS1lbnRlciB7XG4gKiAgIG9wYWNpdHk6IDA7XG4gKiB9XG4gKiAubXktbm9kZS1lbnRlci1hY3RpdmUge1xuICogICBvcGFjaXR5OiAxO1xuICogICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xuICogfVxuICogLm15LW5vZGUtZXhpdCB7XG4gKiAgIG9wYWNpdHk6IDE7XG4gKiB9XG4gKiAubXktbm9kZS1leGl0LWFjdGl2ZSB7XG4gKiAgIG9wYWNpdHk6IDA7XG4gKiAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBgKi1hY3RpdmVgIGNsYXNzZXMgcmVwcmVzZW50IHdoaWNoIHN0eWxlcyB5b3Ugd2FudCB0byBhbmltYXRlICoqdG8qKi5cbiAqXG4gKiAqKk5vdGUqKjogSWYgeW91J3JlIHVzaW5nIHRoZVxuICogW2BhcHBlYXJgXShodHRwOi8vcmVhY3Rjb21tdW5pdHkub3JnL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvdHJhbnNpdGlvbiNUcmFuc2l0aW9uLXByb3AtYXBwZWFyKVxuICogcHJvcCwgbWFrZSBzdXJlIHRvIGRlZmluZSBzdHlsZXMgZm9yIGAuYXBwZWFyLSpgIGNsYXNzZXMgYXMgd2VsbC5cbiAqL1xuXG5cbnZhciBDU1NUcmFuc2l0aW9uID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKENTU1RyYW5zaXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENTU1RyYW5zaXRpb24oKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgX3RoaXMuYXBwbGllZENsYXNzZXMgPSB7XG4gICAgICBhcHBlYXI6IHt9LFxuICAgICAgZW50ZXI6IHt9LFxuICAgICAgZXhpdDoge31cbiAgICB9O1xuXG4gICAgX3RoaXMub25FbnRlciA9IGZ1bmN0aW9uIChub2RlLCBhcHBlYXJpbmcpIHtcbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2V4aXQnKTtcblxuICAgICAgX3RoaXMuYWRkQ2xhc3Mobm9kZSwgYXBwZWFyaW5nID8gJ2FwcGVhcicgOiAnZW50ZXInLCAnYmFzZScpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FbnRlcikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkVudGVyKG5vZGUsIGFwcGVhcmluZyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRW50ZXJpbmcgPSBmdW5jdGlvbiAobm9kZSwgYXBwZWFyaW5nKSB7XG4gICAgICB2YXIgdHlwZSA9IGFwcGVhcmluZyA/ICdhcHBlYXInIDogJ2VudGVyJztcblxuICAgICAgX3RoaXMuYWRkQ2xhc3Mobm9kZSwgdHlwZSwgJ2FjdGl2ZScpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FbnRlcmluZykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkVudGVyaW5nKG5vZGUsIGFwcGVhcmluZyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRW50ZXJlZCA9IGZ1bmN0aW9uIChub2RlLCBhcHBlYXJpbmcpIHtcbiAgICAgIHZhciB0eXBlID0gYXBwZWFyaW5nID8gJ2FwcGVhcicgOiAnZW50ZXInO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsIHR5cGUpO1xuXG4gICAgICBfdGhpcy5hZGRDbGFzcyhub2RlLCB0eXBlLCAnZG9uZScpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FbnRlcmVkKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRW50ZXJlZChub2RlLCBhcHBlYXJpbmcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkV4aXQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCAnYXBwZWFyJyk7XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2VudGVyJyk7XG5cbiAgICAgIF90aGlzLmFkZENsYXNzKG5vZGUsICdleGl0JywgJ2Jhc2UnKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRXhpdCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkV4aXQobm9kZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRXhpdGluZyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBfdGhpcy5hZGRDbGFzcyhub2RlLCAnZXhpdCcsICdhY3RpdmUnKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRXhpdGluZykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkV4aXRpbmcobm9kZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRXhpdGVkID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2V4aXQnKTtcblxuICAgICAgX3RoaXMuYWRkQ2xhc3Mobm9kZSwgJ2V4aXQnLCAnZG9uZScpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FeGl0ZWQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmdldENsYXNzTmFtZXMgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgdmFyIGNsYXNzTmFtZXMgPSBfdGhpcy5wcm9wcy5jbGFzc05hbWVzO1xuICAgICAgdmFyIGlzU3RyaW5nQ2xhc3NOYW1lcyA9IHR5cGVvZiBjbGFzc05hbWVzID09PSAnc3RyaW5nJztcbiAgICAgIHZhciBwcmVmaXggPSBpc1N0cmluZ0NsYXNzTmFtZXMgJiYgY2xhc3NOYW1lcyA/IGNsYXNzTmFtZXMgKyBcIi1cIiA6ICcnO1xuICAgICAgdmFyIGJhc2VDbGFzc05hbWUgPSBpc1N0cmluZ0NsYXNzTmFtZXMgPyBcIlwiICsgcHJlZml4ICsgdHlwZSA6IGNsYXNzTmFtZXNbdHlwZV07XG4gICAgICB2YXIgYWN0aXZlQ2xhc3NOYW1lID0gaXNTdHJpbmdDbGFzc05hbWVzID8gYmFzZUNsYXNzTmFtZSArIFwiLWFjdGl2ZVwiIDogY2xhc3NOYW1lc1t0eXBlICsgXCJBY3RpdmVcIl07XG4gICAgICB2YXIgZG9uZUNsYXNzTmFtZSA9IGlzU3RyaW5nQ2xhc3NOYW1lcyA/IGJhc2VDbGFzc05hbWUgKyBcIi1kb25lXCIgOiBjbGFzc05hbWVzW3R5cGUgKyBcIkRvbmVcIl07XG4gICAgICByZXR1cm4ge1xuICAgICAgICBiYXNlQ2xhc3NOYW1lOiBiYXNlQ2xhc3NOYW1lLFxuICAgICAgICBhY3RpdmVDbGFzc05hbWU6IGFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgICAgZG9uZUNsYXNzTmFtZTogZG9uZUNsYXNzTmFtZVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IENTU1RyYW5zaXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5hZGRDbGFzcyA9IGZ1bmN0aW9uIGFkZENsYXNzKG5vZGUsIHR5cGUsIHBoYXNlKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IHRoaXMuZ2V0Q2xhc3NOYW1lcyh0eXBlKVtwaGFzZSArIFwiQ2xhc3NOYW1lXCJdO1xuXG4gICAgaWYgKHR5cGUgPT09ICdhcHBlYXInICYmIHBoYXNlID09PSAnZG9uZScpIHtcbiAgICAgIGNsYXNzTmFtZSArPSBcIiBcIiArIHRoaXMuZ2V0Q2xhc3NOYW1lcygnZW50ZXInKS5kb25lQ2xhc3NOYW1lO1xuICAgIH0gLy8gVGhpcyBpcyBmb3IgdG8gZm9yY2UgYSByZXBhaW50LFxuICAgIC8vIHdoaWNoIGlzIG5lY2Vzc2FyeSBpbiBvcmRlciB0byB0cmFuc2l0aW9uIHN0eWxlcyB3aGVuIGFkZGluZyBhIGNsYXNzIG5hbWUuXG5cblxuICAgIGlmIChwaGFzZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuICAgICAgbm9kZSAmJiBub2RlLnNjcm9sbFRvcDtcbiAgICB9XG5cbiAgICB0aGlzLmFwcGxpZWRDbGFzc2VzW3R5cGVdW3BoYXNlXSA9IGNsYXNzTmFtZTtcblxuICAgIF9hZGRDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVDbGFzc2VzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3Nlcyhub2RlLCB0eXBlKSB7XG4gICAgdmFyIF90aGlzJGFwcGxpZWRDbGFzc2VzJCA9IHRoaXMuYXBwbGllZENsYXNzZXNbdHlwZV0sXG4gICAgICAgIGJhc2VDbGFzc05hbWUgPSBfdGhpcyRhcHBsaWVkQ2xhc3NlcyQuYmFzZSxcbiAgICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3RoaXMkYXBwbGllZENsYXNzZXMkLmFjdGl2ZSxcbiAgICAgICAgZG9uZUNsYXNzTmFtZSA9IF90aGlzJGFwcGxpZWRDbGFzc2VzJC5kb25lO1xuICAgIHRoaXMuYXBwbGllZENsYXNzZXNbdHlwZV0gPSB7fTtcblxuICAgIGlmIChiYXNlQ2xhc3NOYW1lKSB7XG4gICAgICByZW1vdmVDbGFzcyhub2RlLCBiYXNlQ2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlQ2xhc3NOYW1lKSB7XG4gICAgICByZW1vdmVDbGFzcyhub2RlLCBhY3RpdmVDbGFzc05hbWUpO1xuICAgIH1cblxuICAgIGlmIChkb25lQ2xhc3NOYW1lKSB7XG4gICAgICByZW1vdmVDbGFzcyhub2RlLCBkb25lQ2xhc3NOYW1lKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBfID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lcyxcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiY2xhc3NOYW1lc1wiXSk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIG9uRW50ZXI6IHRoaXMub25FbnRlcixcbiAgICAgIG9uRW50ZXJlZDogdGhpcy5vbkVudGVyZWQsXG4gICAgICBvbkVudGVyaW5nOiB0aGlzLm9uRW50ZXJpbmcsXG4gICAgICBvbkV4aXQ6IHRoaXMub25FeGl0LFxuICAgICAgb25FeGl0aW5nOiB0aGlzLm9uRXhpdGluZyxcbiAgICAgIG9uRXhpdGVkOiB0aGlzLm9uRXhpdGVkXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBDU1NUcmFuc2l0aW9uO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5DU1NUcmFuc2l0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lczogJydcbn07XG5DU1NUcmFuc2l0aW9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IF9leHRlbmRzKHt9LCBUcmFuc2l0aW9uLnByb3BUeXBlcywge1xuICAvKipcbiAgICogVGhlIGFuaW1hdGlvbiBjbGFzc05hbWVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudCBhcyBpdCBhcHBlYXJzLCBlbnRlcnMsXG4gICAqIGV4aXRzIG9yIGhhcyBmaW5pc2hlZCB0aGUgdHJhbnNpdGlvbi4gQSBzaW5nbGUgbmFtZSBjYW4gYmUgcHJvdmlkZWQgYW5kIGl0XG4gICAqIHdpbGwgYmUgc3VmZml4ZWQgZm9yIGVhY2ggc3RhZ2U6IGUuZy5cbiAgICpcbiAgICogYGNsYXNzTmFtZXM9XCJmYWRlXCJgIGFwcGxpZXMgYGZhZGUtYXBwZWFyYCwgYGZhZGUtYXBwZWFyLWFjdGl2ZWAsXG4gICAqIGBmYWRlLWFwcGVhci1kb25lYCwgYGZhZGUtZW50ZXJgLCBgZmFkZS1lbnRlci1hY3RpdmVgLCBgZmFkZS1lbnRlci1kb25lYCxcbiAgICogYGZhZGUtZXhpdGAsIGBmYWRlLWV4aXQtYWN0aXZlYCwgYW5kIGBmYWRlLWV4aXQtZG9uZWAuXG4gICAqXG4gICAqICoqTm90ZSoqOiBgZmFkZS1hcHBlYXItZG9uZWAgYW5kIGBmYWRlLWVudGVyLWRvbmVgIHdpbGwgX2JvdGhfIGJlIGFwcGxpZWQuXG4gICAqIFRoaXMgYWxsb3dzIHlvdSB0byBkZWZpbmUgZGlmZmVyZW50IGJlaGF2aW9yIGZvciB3aGVuIGFwcGVhcmluZyBpcyBkb25lIGFuZFxuICAgKiB3aGVuIHJlZ3VsYXIgZW50ZXJpbmcgaXMgZG9uZSwgdXNpbmcgc2VsZWN0b3JzIGxpa2VcbiAgICogYC5mYWRlLWVudGVyLWRvbmU6bm90KC5mYWRlLWFwcGVhci1kb25lKWAuIEZvciBleGFtcGxlLCB5b3UgY291bGQgYXBwbHkgYW5cbiAgICogZXBpYyBlbnRyYW5jZSBhbmltYXRpb24gd2hlbiBlbGVtZW50IGZpcnN0IGFwcGVhcnMgaW4gdGhlIERPTSB1c2luZ1xuICAgKiBbQW5pbWF0ZS5jc3NdKGh0dHBzOi8vZGFuZWRlbi5naXRodWIuaW8vYW5pbWF0ZS5jc3MvKS4gT3RoZXJ3aXNlIHlvdSBjYW5cbiAgICogc2ltcGx5IHVzZSBgZmFkZS1lbnRlci1kb25lYCBmb3IgZGVmaW5pbmcgYm90aCBjYXNlcy5cbiAgICpcbiAgICogRWFjaCBpbmRpdmlkdWFsIGNsYXNzTmFtZXMgY2FuIGFsc28gYmUgc3BlY2lmaWVkIGluZGVwZW5kZW50bHkgbGlrZTpcbiAgICpcbiAgICogYGBganNcbiAgICogY2xhc3NOYW1lcz17e1xuICAgKiAgYXBwZWFyOiAnbXktYXBwZWFyJyxcbiAgICogIGFwcGVhckFjdGl2ZTogJ215LWFjdGl2ZS1hcHBlYXInLFxuICAgKiAgYXBwZWFyRG9uZTogJ215LWRvbmUtYXBwZWFyJyxcbiAgICogIGVudGVyOiAnbXktZW50ZXInLFxuICAgKiAgZW50ZXJBY3RpdmU6ICdteS1hY3RpdmUtZW50ZXInLFxuICAgKiAgZW50ZXJEb25lOiAnbXktZG9uZS1lbnRlcicsXG4gICAqICBleGl0OiAnbXktZXhpdCcsXG4gICAqICBleGl0QWN0aXZlOiAnbXktYWN0aXZlLWV4aXQnLFxuICAgKiAgZXhpdERvbmU6ICdteS1kb25lLWV4aXQnLFxuICAgKiB9fVxuICAgKiBgYGBcbiAgICpcbiAgICogSWYgeW91IHdhbnQgdG8gc2V0IHRoZXNlIGNsYXNzZXMgdXNpbmcgQ1NTIE1vZHVsZXM6XG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuY3NzJztcbiAgICogYGBgXG4gICAqXG4gICAqIHlvdSBtaWdodCB3YW50IHRvIHVzZSBjYW1lbENhc2UgaW4geW91ciBDU1MgZmlsZSwgdGhhdCB3YXkgY291bGQgc2ltcGx5XG4gICAqIHNwcmVhZCB0aGVtIGluc3RlYWQgb2YgbGlzdGluZyB0aGVtIG9uZSBieSBvbmU6XG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGNsYXNzTmFtZXM9e3sgLi4uc3R5bGVzIH19XG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nIHwge1xuICAgKiAgYXBwZWFyPzogc3RyaW5nLFxuICAgKiAgYXBwZWFyQWN0aXZlPzogc3RyaW5nLFxuICAgKiAgYXBwZWFyRG9uZT86IHN0cmluZyxcbiAgICogIGVudGVyPzogc3RyaW5nLFxuICAgKiAgZW50ZXJBY3RpdmU/OiBzdHJpbmcsXG4gICAqICBlbnRlckRvbmU/OiBzdHJpbmcsXG4gICAqICBleGl0Pzogc3RyaW5nLFxuICAgKiAgZXhpdEFjdGl2ZT86IHN0cmluZyxcbiAgICogIGV4aXREb25lPzogc3RyaW5nLFxuICAgKiB9fVxuICAgKi9cbiAgY2xhc3NOYW1lczogY2xhc3NOYW1lc1NoYXBlLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZW50ZXInIG9yICdhcHBlYXInIGNsYXNzIGlzXG4gICAqIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZW50ZXItYWN0aXZlJyBvclxuICAgKiAnYXBwZWFyLWFjdGl2ZScgY2xhc3MgaXMgYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdlbnRlcicgb3JcbiAgICogJ2FwcGVhcicgY2xhc3NlcyBhcmUgKipyZW1vdmVkKiogYW5kIHRoZSBgZG9uZWAgY2xhc3MgaXMgYWRkZWQgdG8gdGhlIERPTSBub2RlLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZXhpdCcgY2xhc3MgaXNcbiAgICogYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZXhpdC1hY3RpdmUnIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KVxuICAgKi9cbiAgb25FeGl0aW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2V4aXQnIGNsYXNzZXNcbiAgICogYXJlICoqcmVtb3ZlZCoqIGFuZCB0aGUgYGV4aXQtZG9uZWAgY2xhc3MgaXMgYWRkZWQgdG8gdGhlIERPTSBub2RlLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudClcbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuY1xufSkgOiB7fTtcbmV4cG9ydCBkZWZhdWx0IENTU1RyYW5zaXRpb247IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgVHJhbnNpdGlvbkdyb3VwIGZyb20gJy4vVHJhbnNpdGlvbkdyb3VwJztcbi8qKlxuICogVGhlIGA8UmVwbGFjZVRyYW5zaXRpb24+YCBjb21wb25lbnQgaXMgYSBzcGVjaWFsaXplZCBgVHJhbnNpdGlvbmAgY29tcG9uZW50XG4gKiB0aGF0IGFuaW1hdGVzIGJldHdlZW4gdHdvIGNoaWxkcmVuLlxuICpcbiAqIGBgYGpzeFxuICogPFJlcGxhY2VUcmFuc2l0aW9uIGluPlxuICogICA8RmFkZT48ZGl2PkkgYXBwZWFyIGZpcnN0PC9kaXY+PC9GYWRlPlxuICogICA8RmFkZT48ZGl2PkkgcmVwbGFjZSB0aGUgYWJvdmU8L2Rpdj48L0ZhZGU+XG4gKiA8L1JlcGxhY2VUcmFuc2l0aW9uPlxuICogYGBgXG4gKi9cblxudmFyIFJlcGxhY2VUcmFuc2l0aW9uID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFJlcGxhY2VUcmFuc2l0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSZXBsYWNlVHJhbnNpdGlvbigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgX2FyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBfYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KF9hcmdzKSkgfHwgdGhpcztcblxuICAgIF90aGlzLmhhbmRsZUVudGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUxpZmVjeWNsZSgnb25FbnRlcicsIDAsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVFbnRlcmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVMaWZlY3ljbGUoJ29uRW50ZXJpbmcnLCAwLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlRW50ZXJlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNCksIF9rZXk0ID0gMDsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgICAgICBhcmdzW19rZXk0XSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVMaWZlY3ljbGUoJ29uRW50ZXJlZCcsIDAsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVFeGl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW41KSwgX2tleTUgPSAwOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleTVdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUxpZmVjeWNsZSgnb25FeGl0JywgMSwgYXJncyk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUV4aXRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuNiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjYpLCBfa2V5NiA9IDA7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcbiAgICAgICAgYXJnc1tfa2V5Nl0gPSBhcmd1bWVudHNbX2tleTZdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3RoaXMuaGFuZGxlTGlmZWN5Y2xlKCdvbkV4aXRpbmcnLCAxLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlRXhpdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjcgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW43KSwgX2tleTcgPSAwOyBfa2V5NyA8IF9sZW43OyBfa2V5NysrKSB7XG4gICAgICAgIGFyZ3NbX2tleTddID0gYXJndW1lbnRzW19rZXk3XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUxpZmVjeWNsZSgnb25FeGl0ZWQnLCAxLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFJlcGxhY2VUcmFuc2l0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8uaGFuZGxlTGlmZWN5Y2xlID0gZnVuY3Rpb24gaGFuZGxlTGlmZWN5Y2xlKGhhbmRsZXIsIGlkeCwgb3JpZ2luYWxBcmdzKSB7XG4gICAgdmFyIF9jaGlsZCRwcm9wcztcblxuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgdmFyIGNoaWxkID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbilbaWR4XTtcbiAgICBpZiAoY2hpbGQucHJvcHNbaGFuZGxlcl0pIChfY2hpbGQkcHJvcHMgPSBjaGlsZC5wcm9wcylbaGFuZGxlcl0uYXBwbHkoX2NoaWxkJHByb3BzLCBvcmlnaW5hbEFyZ3MpO1xuICAgIGlmICh0aGlzLnByb3BzW2hhbmRsZXJdKSB0aGlzLnByb3BzW2hhbmRsZXJdKFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGluUHJvcCA9IF90aGlzJHByb3BzLmluLFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImluXCJdKTtcblxuICAgIHZhciBfUmVhY3QkQ2hpbGRyZW4kdG9BcnIgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKSxcbiAgICAgICAgZmlyc3QgPSBfUmVhY3QkQ2hpbGRyZW4kdG9BcnJbMF0sXG4gICAgICAgIHNlY29uZCA9IF9SZWFjdCRDaGlsZHJlbiR0b0FyclsxXTtcblxuICAgIGRlbGV0ZSBwcm9wcy5vbkVudGVyO1xuICAgIGRlbGV0ZSBwcm9wcy5vbkVudGVyaW5nO1xuICAgIGRlbGV0ZSBwcm9wcy5vbkVudGVyZWQ7XG4gICAgZGVsZXRlIHByb3BzLm9uRXhpdDtcbiAgICBkZWxldGUgcHJvcHMub25FeGl0aW5nO1xuICAgIGRlbGV0ZSBwcm9wcy5vbkV4aXRlZDtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uR3JvdXAsIHByb3BzLCBpblByb3AgPyBSZWFjdC5jbG9uZUVsZW1lbnQoZmlyc3QsIHtcbiAgICAgIGtleTogJ2ZpcnN0JyxcbiAgICAgIG9uRW50ZXI6IHRoaXMuaGFuZGxlRW50ZXIsXG4gICAgICBvbkVudGVyaW5nOiB0aGlzLmhhbmRsZUVudGVyaW5nLFxuICAgICAgb25FbnRlcmVkOiB0aGlzLmhhbmRsZUVudGVyZWRcbiAgICB9KSA6IFJlYWN0LmNsb25lRWxlbWVudChzZWNvbmQsIHtcbiAgICAgIGtleTogJ3NlY29uZCcsXG4gICAgICBvbkVudGVyOiB0aGlzLmhhbmRsZUV4aXQsXG4gICAgICBvbkVudGVyaW5nOiB0aGlzLmhhbmRsZUV4aXRpbmcsXG4gICAgICBvbkVudGVyZWQ6IHRoaXMuaGFuZGxlRXhpdGVkXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBSZXBsYWNlVHJhbnNpdGlvbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuUmVwbGFjZVRyYW5zaXRpb24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICBpbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IGZ1bmN0aW9uIGNoaWxkcmVuKHByb3BzLCBwcm9wTmFtZSkge1xuICAgIGlmIChSZWFjdC5DaGlsZHJlbi5jb3VudChwcm9wc1twcm9wTmFtZV0pICE9PSAyKSByZXR1cm4gbmV3IEVycm9yKFwiXFxcIlwiICsgcHJvcE5hbWUgKyBcIlxcXCIgbXVzdCBiZSBleGFjdGx5IHR3byB0cmFuc2l0aW9uIGNvbXBvbmVudHMuXCIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59IDoge307XG5leHBvcnQgZGVmYXVsdCBSZXBsYWNlVHJhbnNpdGlvbjsiLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcblxudmFyIF9sZWF2ZVJlbmRlcnMsIF9lbnRlclJlbmRlcnM7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRU5URVJFRCwgRU5URVJJTkcsIEVYSVRJTkcgfSBmcm9tICcuL1RyYW5zaXRpb24nO1xuaW1wb3J0IFRyYW5zaXRpb25Hcm91cENvbnRleHQgZnJvbSAnLi9UcmFuc2l0aW9uR3JvdXBDb250ZXh0JztcblxuZnVuY3Rpb24gYXJlQ2hpbGRyZW5EaWZmZXJlbnQob2xkQ2hpbGRyZW4sIG5ld0NoaWxkcmVuKSB7XG4gIGlmIChvbGRDaGlsZHJlbiA9PT0gbmV3Q2hpbGRyZW4pIHJldHVybiBmYWxzZTtcblxuICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQob2xkQ2hpbGRyZW4pICYmIFJlYWN0LmlzVmFsaWRFbGVtZW50KG5ld0NoaWxkcmVuKSAmJiBvbGRDaGlsZHJlbi5rZXkgIT0gbnVsbCAmJiBvbGRDaGlsZHJlbi5rZXkgPT09IG5ld0NoaWxkcmVuLmtleSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuLyoqXG4gKiBFbnVtIG9mIG1vZGVzIGZvciBTd2l0Y2hUcmFuc2l0aW9uIGNvbXBvbmVudFxuICogQGVudW0geyBzdHJpbmcgfVxuICovXG5cblxuZXhwb3J0IHZhciBtb2RlcyA9IHtcbiAgb3V0OiAnb3V0LWluJyxcbiAgaW46ICdpbi1vdXQnXG59O1xuXG52YXIgY2FsbEhvb2sgPSBmdW5jdGlvbiBjYWxsSG9vayhlbGVtZW50LCBuYW1lLCBjYikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfZWxlbWVudCRwcm9wcztcblxuICAgIGVsZW1lbnQucHJvcHNbbmFtZV0gJiYgKF9lbGVtZW50JHByb3BzID0gZWxlbWVudC5wcm9wcylbbmFtZV0uYXBwbHkoX2VsZW1lbnQkcHJvcHMsIGFyZ3VtZW50cyk7XG4gICAgY2IoKTtcbiAgfTtcbn07XG5cbnZhciBsZWF2ZVJlbmRlcnMgPSAoX2xlYXZlUmVuZGVycyA9IHt9LCBfbGVhdmVSZW5kZXJzW21vZGVzLm91dF0gPSBmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgY3VycmVudCA9IF9yZWYuY3VycmVudCxcbiAgICAgIGNoYW5nZVN0YXRlID0gX3JlZi5jaGFuZ2VTdGF0ZTtcbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjdXJyZW50LCB7XG4gICAgaW46IGZhbHNlLFxuICAgIG9uRXhpdGVkOiBjYWxsSG9vayhjdXJyZW50LCAnb25FeGl0ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGFuZ2VTdGF0ZShFTlRFUklORywgbnVsbCk7XG4gICAgfSlcbiAgfSk7XG59LCBfbGVhdmVSZW5kZXJzW21vZGVzLmluXSA9IGZ1bmN0aW9uIChfcmVmMikge1xuICB2YXIgY3VycmVudCA9IF9yZWYyLmN1cnJlbnQsXG4gICAgICBjaGFuZ2VTdGF0ZSA9IF9yZWYyLmNoYW5nZVN0YXRlLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmMi5jaGlsZHJlbjtcbiAgcmV0dXJuIFtjdXJyZW50LCBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICBpbjogdHJ1ZSxcbiAgICBvbkVudGVyZWQ6IGNhbGxIb29rKGNoaWxkcmVuLCAnb25FbnRlcmVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgY2hhbmdlU3RhdGUoRU5URVJJTkcpO1xuICAgIH0pXG4gIH0pXTtcbn0sIF9sZWF2ZVJlbmRlcnMpO1xudmFyIGVudGVyUmVuZGVycyA9IChfZW50ZXJSZW5kZXJzID0ge30sIF9lbnRlclJlbmRlcnNbbW9kZXMub3V0XSA9IGZ1bmN0aW9uIChfcmVmMykge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmMy5jaGlsZHJlbixcbiAgICAgIGNoYW5nZVN0YXRlID0gX3JlZjMuY2hhbmdlU3RhdGU7XG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICBpbjogdHJ1ZSxcbiAgICBvbkVudGVyZWQ6IGNhbGxIb29rKGNoaWxkcmVuLCAnb25FbnRlcmVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgY2hhbmdlU3RhdGUoRU5URVJFRCwgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgIGluOiB0cnVlXG4gICAgICB9KSk7XG4gICAgfSlcbiAgfSk7XG59LCBfZW50ZXJSZW5kZXJzW21vZGVzLmluXSA9IGZ1bmN0aW9uIChfcmVmNCkge1xuICB2YXIgY3VycmVudCA9IF9yZWY0LmN1cnJlbnQsXG4gICAgICBjaGlsZHJlbiA9IF9yZWY0LmNoaWxkcmVuLFxuICAgICAgY2hhbmdlU3RhdGUgPSBfcmVmNC5jaGFuZ2VTdGF0ZTtcbiAgcmV0dXJuIFtSZWFjdC5jbG9uZUVsZW1lbnQoY3VycmVudCwge1xuICAgIGluOiBmYWxzZSxcbiAgICBvbkV4aXRlZDogY2FsbEhvb2soY3VycmVudCwgJ29uRXhpdGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgY2hhbmdlU3RhdGUoRU5URVJFRCwgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgIGluOiB0cnVlXG4gICAgICB9KSk7XG4gICAgfSlcbiAgfSksIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgIGluOiB0cnVlXG4gIH0pXTtcbn0sIF9lbnRlclJlbmRlcnMpO1xuLyoqXG4gKiBBIHRyYW5zaXRpb24gY29tcG9uZW50IGluc3BpcmVkIGJ5IHRoZSBbdnVlIHRyYW5zaXRpb24gbW9kZXNdKGh0dHBzOi8vdnVlanMub3JnL3YyL2d1aWRlL3RyYW5zaXRpb25zLmh0bWwjVHJhbnNpdGlvbi1Nb2RlcykuXG4gKiBZb3UgY2FuIHVzZSBpdCB3aGVuIHlvdSB3YW50IHRvIGNvbnRyb2wgdGhlIHJlbmRlciBiZXR3ZWVuIHN0YXRlIHRyYW5zaXRpb25zLlxuICogQmFzZWQgb24gdGhlIHNlbGVjdGVkIG1vZGUgYW5kIHRoZSBjaGlsZCdzIGtleSB3aGljaCBpcyB0aGUgYFRyYW5zaXRpb25gIG9yIGBDU1NUcmFuc2l0aW9uYCBjb21wb25lbnQsIHRoZSBgU3dpdGNoVHJhbnNpdGlvbmAgbWFrZXMgYSBjb25zaXN0ZW50IHRyYW5zaXRpb24gYmV0d2VlbiB0aGVtLlxuICpcbiAqIElmIHRoZSBgb3V0LWluYCBtb2RlIGlzIHNlbGVjdGVkLCB0aGUgYFN3aXRjaFRyYW5zaXRpb25gIHdhaXRzIHVudGlsIHRoZSBvbGQgY2hpbGQgbGVhdmVzIGFuZCB0aGVuIGluc2VydHMgYSBuZXcgY2hpbGQuXG4gKiBJZiB0aGUgYGluLW91dGAgbW9kZSBpcyBzZWxlY3RlZCwgdGhlIGBTd2l0Y2hUcmFuc2l0aW9uYCBpbnNlcnRzIGEgbmV3IGNoaWxkIGZpcnN0LCB3YWl0cyBmb3IgdGhlIG5ldyBjaGlsZCB0byBlbnRlciBhbmQgdGhlbiByZW1vdmVzIHRoZSBvbGQgY2hpbGRcbiAqXG4gKiBgYGBqc3hcbiAqXG4gKiBmdW5jdGlvbiBBcHAoKSB7XG4gKiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gKiAgcmV0dXJuIChcbiAqICAgIDxTd2l0Y2hUcmFuc2l0aW9uPlxuICogICAgICA8RmFkZVRyYW5zaXRpb24ga2V5PXtzdGF0ZSA/IFwiR29vZGJ5ZSwgd29ybGQhXCIgOiBcIkhlbGxvLCB3b3JsZCFcIn1cbiAqICAgICAgICBhZGRFbmRMaXN0ZW5lcj17KG5vZGUsIGRvbmUpID0+IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZG9uZSwgZmFsc2UpfVxuICogICAgICAgIGNsYXNzTmFtZXM9J2ZhZGUnID5cbiAqICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFN0YXRlKHN0YXRlID0+ICFzdGF0ZSl9PlxuICogICAgICAgICAge3N0YXRlID8gXCJHb29kYnllLCB3b3JsZCFcIiA6IFwiSGVsbG8sIHdvcmxkIVwifVxuICogICAgICAgIDwvYnV0dG9uPlxuICogICAgICA8L0ZhZGVUcmFuc2l0aW9uPlxuICogICAgPC9Td2l0Y2hUcmFuc2l0aW9uPlxuICogIClcbiAqIH1cbiAqIGBgYFxuICovXG5cbnZhciBTd2l0Y2hUcmFuc2l0aW9uID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFN3aXRjaFRyYW5zaXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFN3aXRjaFRyYW5zaXRpb24oKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBzdGF0dXM6IEVOVEVSRUQsXG4gICAgICBjdXJyZW50OiBudWxsXG4gICAgfTtcbiAgICBfdGhpcy5hcHBlYXJlZCA9IGZhbHNlO1xuXG4gICAgX3RoaXMuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbiAoc3RhdHVzLCBjdXJyZW50KSB7XG4gICAgICBpZiAoY3VycmVudCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGN1cnJlbnQgPSBfdGhpcy5zdGF0ZS5jdXJyZW50O1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgICBjdXJyZW50OiBjdXJyZW50XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFN3aXRjaFRyYW5zaXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuYXBwZWFyZWQgPSB0cnVlO1xuICB9O1xuXG4gIFN3aXRjaFRyYW5zaXRpb24uZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgIGlmIChwcm9wcy5jaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50OiBudWxsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5zdGF0dXMgPT09IEVOVEVSSU5HICYmIHByb3BzLm1vZGUgPT09IG1vZGVzLmluKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6IEVOVEVSSU5HXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5jdXJyZW50ICYmIGFyZUNoaWxkcmVuRGlmZmVyZW50KHN0YXRlLmN1cnJlbnQsIHByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzOiBFWElUSU5HXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50OiBSZWFjdC5jbG9uZUVsZW1lbnQocHJvcHMuY2hpbGRyZW4sIHtcbiAgICAgICAgaW46IHRydWVcbiAgICAgIH0pXG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIG1vZGUgPSBfdGhpcyRwcm9wcy5tb2RlLFxuICAgICAgICBfdGhpcyRzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgIHN0YXR1cyA9IF90aGlzJHN0YXRlLnN0YXR1cyxcbiAgICAgICAgY3VycmVudCA9IF90aGlzJHN0YXRlLmN1cnJlbnQ7XG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICBjdXJyZW50OiBjdXJyZW50LFxuICAgICAgY2hhbmdlU3RhdGU6IHRoaXMuY2hhbmdlU3RhdGUsXG4gICAgICBzdGF0dXM6IHN0YXR1c1xuICAgIH07XG4gICAgdmFyIGNvbXBvbmVudDtcblxuICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICBjYXNlIEVOVEVSSU5HOlxuICAgICAgICBjb21wb25lbnQgPSBlbnRlclJlbmRlcnNbbW9kZV0oZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEVYSVRJTkc6XG4gICAgICAgIGNvbXBvbmVudCA9IGxlYXZlUmVuZGVyc1ttb2RlXShkYXRhKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRU5URVJFRDpcbiAgICAgICAgY29tcG9uZW50ID0gY3VycmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uR3JvdXBDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICBpc01vdW50aW5nOiAhdGhpcy5hcHBlYXJlZFxuICAgICAgfVxuICAgIH0sIGNvbXBvbmVudCk7XG4gIH07XG5cbiAgcmV0dXJuIFN3aXRjaFRyYW5zaXRpb247XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblN3aXRjaFRyYW5zaXRpb24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogVHJhbnNpdGlvbiBtb2Rlcy5cbiAgICogYG91dC1pbmA6IEN1cnJlbnQgZWxlbWVudCB0cmFuc2l0aW9ucyBvdXQgZmlyc3QsIHRoZW4gd2hlbiBjb21wbGV0ZSwgdGhlIG5ldyBlbGVtZW50IHRyYW5zaXRpb25zIGluLlxuICAgKiBgaW4tb3V0OiBOZXcgZWxlbWVudCB0cmFuc2l0aW9ucyBpbiBmaXJzdCwgdGhlbiB3aGVuIGNvbXBsZXRlLCB0aGUgY3VycmVudCBlbGVtZW50IHRyYW5zaXRpb25zIG91dC5gXG4gICAqXG4gICAqIEB0eXBlIHsnb3V0LWluJ3wnaW4tb3V0J31cbiAgICovXG4gIG1vZGU6IFByb3BUeXBlcy5vbmVPZihbbW9kZXMuaW4sIG1vZGVzLm91dF0pLFxuXG4gIC8qKlxuICAgKiBBbnkgYFRyYW5zaXRpb25gIG9yIGBDU1NUcmFuc2l0aW9uYCBjb21wb25lbnRcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkXSlcbn0gOiB7fTtcblN3aXRjaFRyYW5zaXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBtb2RlOiBtb2Rlcy5vdXRcbn07XG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hUcmFuc2l0aW9uOyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyB0aW1lb3V0c1NoYXBlIH0gZnJvbSAnLi91dGlscy9Qcm9wVHlwZXMnO1xuaW1wb3J0IFRyYW5zaXRpb25Hcm91cENvbnRleHQgZnJvbSAnLi9UcmFuc2l0aW9uR3JvdXBDb250ZXh0JztcbmV4cG9ydCB2YXIgVU5NT1VOVEVEID0gJ3VubW91bnRlZCc7XG5leHBvcnQgdmFyIEVYSVRFRCA9ICdleGl0ZWQnO1xuZXhwb3J0IHZhciBFTlRFUklORyA9ICdlbnRlcmluZyc7XG5leHBvcnQgdmFyIEVOVEVSRUQgPSAnZW50ZXJlZCc7XG5leHBvcnQgdmFyIEVYSVRJTkcgPSAnZXhpdGluZyc7XG4vKipcbiAqIFRoZSBUcmFuc2l0aW9uIGNvbXBvbmVudCBsZXRzIHlvdSBkZXNjcmliZSBhIHRyYW5zaXRpb24gZnJvbSBvbmUgY29tcG9uZW50XG4gKiBzdGF0ZSB0byBhbm90aGVyIF9vdmVyIHRpbWVfIHdpdGggYSBzaW1wbGUgZGVjbGFyYXRpdmUgQVBJLiBNb3N0IGNvbW1vbmx5XG4gKiBpdCdzIHVzZWQgdG8gYW5pbWF0ZSB0aGUgbW91bnRpbmcgYW5kIHVubW91bnRpbmcgb2YgYSBjb21wb25lbnQsIGJ1dCBjYW4gYWxzb1xuICogYmUgdXNlZCB0byBkZXNjcmliZSBpbi1wbGFjZSB0cmFuc2l0aW9uIHN0YXRlcyBhcyB3ZWxsLlxuICpcbiAqIC0tLVxuICpcbiAqICoqTm90ZSoqOiBgVHJhbnNpdGlvbmAgaXMgYSBwbGF0Zm9ybS1hZ25vc3RpYyBiYXNlIGNvbXBvbmVudC4gSWYgeW91J3JlIHVzaW5nXG4gKiB0cmFuc2l0aW9ucyBpbiBDU1MsIHlvdSdsbCBwcm9iYWJseSB3YW50IHRvIHVzZVxuICogW2BDU1NUcmFuc2l0aW9uYF0oaHR0cHM6Ly9yZWFjdGNvbW11bml0eS5vcmcvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9jc3MtdHJhbnNpdGlvbilcbiAqIGluc3RlYWQuIEl0IGluaGVyaXRzIGFsbCB0aGUgZmVhdHVyZXMgb2YgYFRyYW5zaXRpb25gLCBidXQgY29udGFpbnNcbiAqIGFkZGl0aW9uYWwgZmVhdHVyZXMgbmVjZXNzYXJ5IHRvIHBsYXkgbmljZSB3aXRoIENTUyB0cmFuc2l0aW9ucyAoaGVuY2UgdGhlXG4gKiBuYW1lIG9mIHRoZSBjb21wb25lbnQpLlxuICpcbiAqIC0tLVxuICpcbiAqIEJ5IGRlZmF1bHQgdGhlIGBUcmFuc2l0aW9uYCBjb21wb25lbnQgZG9lcyBub3QgYWx0ZXIgdGhlIGJlaGF2aW9yIG9mIHRoZVxuICogY29tcG9uZW50IGl0IHJlbmRlcnMsIGl0IG9ubHkgdHJhY2tzIFwiZW50ZXJcIiBhbmQgXCJleGl0XCIgc3RhdGVzIGZvciB0aGVcbiAqIGNvbXBvbmVudHMuIEl0J3MgdXAgdG8geW91IHRvIGdpdmUgbWVhbmluZyBhbmQgZWZmZWN0IHRvIHRob3NlIHN0YXRlcy4gRm9yXG4gKiBleGFtcGxlIHdlIGNhbiBhZGQgc3R5bGVzIHRvIGEgY29tcG9uZW50IHdoZW4gaXQgZW50ZXJzIG9yIGV4aXRzOlxuICpcbiAqIGBgYGpzeFxuICogaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuICpcbiAqIGNvbnN0IGR1cmF0aW9uID0gMzAwO1xuICpcbiAqIGNvbnN0IGRlZmF1bHRTdHlsZSA9IHtcbiAqICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHtkdXJhdGlvbn1tcyBlYXNlLWluLW91dGAsXG4gKiAgIG9wYWNpdHk6IDAsXG4gKiB9XG4gKlxuICogY29uc3QgdHJhbnNpdGlvblN0eWxlcyA9IHtcbiAqICAgZW50ZXJpbmc6IHsgb3BhY2l0eTogMSB9LFxuICogICBlbnRlcmVkOiAgeyBvcGFjaXR5OiAxIH0sXG4gKiAgIGV4aXRpbmc6ICB7IG9wYWNpdHk6IDAgfSxcbiAqICAgZXhpdGVkOiAgeyBvcGFjaXR5OiAwIH0sXG4gKiB9O1xuICpcbiAqIGNvbnN0IEZhZGUgPSAoeyBpbjogaW5Qcm9wIH0pID0+IChcbiAqICAgPFRyYW5zaXRpb24gaW49e2luUHJvcH0gdGltZW91dD17ZHVyYXRpb259PlxuICogICAgIHtzdGF0ZSA9PiAoXG4gKiAgICAgICA8ZGl2IHN0eWxlPXt7XG4gKiAgICAgICAgIC4uLmRlZmF1bHRTdHlsZSxcbiAqICAgICAgICAgLi4udHJhbnNpdGlvblN0eWxlc1tzdGF0ZV1cbiAqICAgICAgIH19PlxuICogICAgICAgICBJJ20gYSBmYWRlIFRyYW5zaXRpb24hXG4gKiAgICAgICA8L2Rpdj5cbiAqICAgICApfVxuICogICA8L1RyYW5zaXRpb24+XG4gKiApO1xuICogYGBgXG4gKlxuICogVGhlcmUgYXJlIDQgbWFpbiBzdGF0ZXMgYSBUcmFuc2l0aW9uIGNhbiBiZSBpbjpcbiAqICAtIGAnZW50ZXJpbmcnYFxuICogIC0gYCdlbnRlcmVkJ2BcbiAqICAtIGAnZXhpdGluZydgXG4gKiAgLSBgJ2V4aXRlZCdgXG4gKlxuICogVHJhbnNpdGlvbiBzdGF0ZSBpcyB0b2dnbGVkIHZpYSB0aGUgYGluYCBwcm9wLiBXaGVuIGB0cnVlYCB0aGUgY29tcG9uZW50XG4gKiBiZWdpbnMgdGhlIFwiRW50ZXJcIiBzdGFnZS4gRHVyaW5nIHRoaXMgc3RhZ2UsIHRoZSBjb21wb25lbnQgd2lsbCBzaGlmdCBmcm9tXG4gKiBpdHMgY3VycmVudCB0cmFuc2l0aW9uIHN0YXRlLCB0byBgJ2VudGVyaW5nJ2AgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGVcbiAqIHRyYW5zaXRpb24gYW5kIHRoZW4gdG8gdGhlIGAnZW50ZXJlZCdgIHN0YWdlIG9uY2UgaXQncyBjb21wbGV0ZS4gTGV0J3MgdGFrZVxuICogdGhlIGZvbGxvd2luZyBleGFtcGxlICh3ZSdsbCB1c2UgdGhlXG4gKiBbdXNlU3RhdGVdKGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9ob29rcy1yZWZlcmVuY2UuaHRtbCN1c2VzdGF0ZSkgaG9vayk6XG4gKlxuICogYGBganN4XG4gKiBmdW5jdGlvbiBBcHAoKSB7XG4gKiAgIGNvbnN0IFtpblByb3AsIHNldEluUHJvcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gKiAgIHJldHVybiAoXG4gKiAgICAgPGRpdj5cbiAqICAgICAgIDxUcmFuc2l0aW9uIGluPXtpblByb3B9IHRpbWVvdXQ9ezUwMH0+XG4gKiAgICAgICAgIHtzdGF0ZSA9PiAoXG4gKiAgICAgICAgICAgLy8gLi4uXG4gKiAgICAgICAgICl9XG4gKiAgICAgICA8L1RyYW5zaXRpb24+XG4gKiAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEluUHJvcCh0cnVlKX0+XG4gKiAgICAgICAgIENsaWNrIHRvIEVudGVyXG4gKiAgICAgICA8L2J1dHRvbj5cbiAqICAgICA8L2Rpdj5cbiAqICAgKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIFdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkIHRoZSBjb21wb25lbnQgd2lsbCBzaGlmdCB0byB0aGUgYCdlbnRlcmluZydgIHN0YXRlXG4gKiBhbmQgc3RheSB0aGVyZSBmb3IgNTAwbXMgKHRoZSB2YWx1ZSBvZiBgdGltZW91dGApIGJlZm9yZSBpdCBmaW5hbGx5IHN3aXRjaGVzXG4gKiB0byBgJ2VudGVyZWQnYC5cbiAqXG4gKiBXaGVuIGBpbmAgaXMgYGZhbHNlYCB0aGUgc2FtZSB0aGluZyBoYXBwZW5zIGV4Y2VwdCB0aGUgc3RhdGUgbW92ZXMgZnJvbVxuICogYCdleGl0aW5nJ2AgdG8gYCdleGl0ZWQnYC5cbiAqL1xuXG52YXIgVHJhbnNpdGlvbiA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShUcmFuc2l0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUcmFuc2l0aW9uKHByb3BzLCBjb250ZXh0KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpIHx8IHRoaXM7XG4gICAgdmFyIHBhcmVudEdyb3VwID0gY29udGV4dDsgLy8gSW4gdGhlIGNvbnRleHQgb2YgYSBUcmFuc2l0aW9uR3JvdXAgYWxsIGVudGVycyBhcmUgcmVhbGx5IGFwcGVhcnNcblxuICAgIHZhciBhcHBlYXIgPSBwYXJlbnRHcm91cCAmJiAhcGFyZW50R3JvdXAuaXNNb3VudGluZyA/IHByb3BzLmVudGVyIDogcHJvcHMuYXBwZWFyO1xuICAgIHZhciBpbml0aWFsU3RhdHVzO1xuICAgIF90aGlzLmFwcGVhclN0YXR1cyA9IG51bGw7XG5cbiAgICBpZiAocHJvcHMuaW4pIHtcbiAgICAgIGlmIChhcHBlYXIpIHtcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IEVYSVRFRDtcbiAgICAgICAgX3RoaXMuYXBwZWFyU3RhdHVzID0gRU5URVJJTkc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gRU5URVJFRDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByb3BzLnVubW91bnRPbkV4aXQgfHwgcHJvcHMubW91bnRPbkVudGVyKSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBVTk1PVU5URUQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gRVhJVEVEO1xuICAgICAgfVxuICAgIH1cblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgc3RhdHVzOiBpbml0aWFsU3RhdHVzXG4gICAgfTtcbiAgICBfdGhpcy5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFRyYW5zaXRpb24uZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKF9yZWYsIHByZXZTdGF0ZSkge1xuICAgIHZhciBuZXh0SW4gPSBfcmVmLmluO1xuXG4gICAgaWYgKG5leHRJbiAmJiBwcmV2U3RhdGUuc3RhdHVzID09PSBVTk1PVU5URUQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogRVhJVEVEXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9OyAvLyBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgLy8gICBsZXQgbmV4dFN0YXR1cyA9IG51bGxcbiAgLy8gICBpZiAocHJldlByb3BzICE9PSB0aGlzLnByb3BzKSB7XG4gIC8vICAgICBjb25zdCB7IHN0YXR1cyB9ID0gdGhpcy5zdGF0ZVxuICAvLyAgICAgaWYgKHRoaXMucHJvcHMuaW4pIHtcbiAgLy8gICAgICAgaWYgKHN0YXR1cyAhPT0gRU5URVJJTkcgJiYgc3RhdHVzICE9PSBFTlRFUkVEKSB7XG4gIC8vICAgICAgICAgbmV4dFN0YXR1cyA9IEVOVEVSSU5HXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0gZWxzZSB7XG4gIC8vICAgICAgIGlmIChzdGF0dXMgPT09IEVOVEVSSU5HIHx8IHN0YXR1cyA9PT0gRU5URVJFRCkge1xuICAvLyAgICAgICAgIG5leHRTdGF0dXMgPSBFWElUSU5HXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIHsgbmV4dFN0YXR1cyB9XG4gIC8vIH1cblxuXG4gIHZhciBfcHJvdG8gPSBUcmFuc2l0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXR1cyh0cnVlLCB0aGlzLmFwcGVhclN0YXR1cyk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICB2YXIgbmV4dFN0YXR1cyA9IG51bGw7XG5cbiAgICBpZiAocHJldlByb3BzICE9PSB0aGlzLnByb3BzKSB7XG4gICAgICB2YXIgc3RhdHVzID0gdGhpcy5zdGF0ZS5zdGF0dXM7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmluKSB7XG4gICAgICAgIGlmIChzdGF0dXMgIT09IEVOVEVSSU5HICYmIHN0YXR1cyAhPT0gRU5URVJFRCkge1xuICAgICAgICAgIG5leHRTdGF0dXMgPSBFTlRFUklORztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gRU5URVJJTkcgfHwgc3RhdHVzID09PSBFTlRFUkVEKSB7XG4gICAgICAgICAgbmV4dFN0YXR1cyA9IEVYSVRJTkc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVN0YXR1cyhmYWxzZSwgbmV4dFN0YXR1cyk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5jYW5jZWxOZXh0Q2FsbGJhY2soKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0VGltZW91dHMgPSBmdW5jdGlvbiBnZXRUaW1lb3V0cygpIHtcbiAgICB2YXIgdGltZW91dCA9IHRoaXMucHJvcHMudGltZW91dDtcbiAgICB2YXIgZXhpdCwgZW50ZXIsIGFwcGVhcjtcbiAgICBleGl0ID0gZW50ZXIgPSBhcHBlYXIgPSB0aW1lb3V0O1xuXG4gICAgaWYgKHRpbWVvdXQgIT0gbnVsbCAmJiB0eXBlb2YgdGltZW91dCAhPT0gJ251bWJlcicpIHtcbiAgICAgIGV4aXQgPSB0aW1lb3V0LmV4aXQ7XG4gICAgICBlbnRlciA9IHRpbWVvdXQuZW50ZXI7IC8vIFRPRE86IHJlbW92ZSBmYWxsYmFjayBmb3IgbmV4dCBtYWpvclxuXG4gICAgICBhcHBlYXIgPSB0aW1lb3V0LmFwcGVhciAhPT0gdW5kZWZpbmVkID8gdGltZW91dC5hcHBlYXIgOiBlbnRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZXhpdDogZXhpdCxcbiAgICAgIGVudGVyOiBlbnRlcixcbiAgICAgIGFwcGVhcjogYXBwZWFyXG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlU3RhdHVzID0gZnVuY3Rpb24gdXBkYXRlU3RhdHVzKG1vdW50aW5nLCBuZXh0U3RhdHVzKSB7XG4gICAgaWYgKG1vdW50aW5nID09PSB2b2lkIDApIHtcbiAgICAgIG1vdW50aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG5leHRTdGF0dXMgIT09IG51bGwpIHtcbiAgICAgIC8vIG5leHRTdGF0dXMgd2lsbCBhbHdheXMgYmUgRU5URVJJTkcgb3IgRVhJVElORy5cbiAgICAgIHRoaXMuY2FuY2VsTmV4dENhbGxiYWNrKCk7XG4gICAgICB2YXIgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgICBpZiAobmV4dFN0YXR1cyA9PT0gRU5URVJJTkcpIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtRW50ZXIobm9kZSwgbW91bnRpbmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtRXhpdChub2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMudW5tb3VudE9uRXhpdCAmJiB0aGlzLnN0YXRlLnN0YXR1cyA9PT0gRVhJVEVEKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc3RhdHVzOiBVTk1PVU5URURcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucGVyZm9ybUVudGVyID0gZnVuY3Rpb24gcGVyZm9ybUVudGVyKG5vZGUsIG1vdW50aW5nKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgZW50ZXIgPSB0aGlzLnByb3BzLmVudGVyO1xuICAgIHZhciBhcHBlYXJpbmcgPSB0aGlzLmNvbnRleHQgPyB0aGlzLmNvbnRleHQuaXNNb3VudGluZyA6IG1vdW50aW5nO1xuICAgIHZhciB0aW1lb3V0cyA9IHRoaXMuZ2V0VGltZW91dHMoKTtcbiAgICB2YXIgZW50ZXJUaW1lb3V0ID0gYXBwZWFyaW5nID8gdGltZW91dHMuYXBwZWFyIDogdGltZW91dHMuZW50ZXI7IC8vIG5vIGVudGVyIGFuaW1hdGlvbiBza2lwIHJpZ2h0IHRvIEVOVEVSRURcbiAgICAvLyBpZiB3ZSBhcmUgbW91bnRpbmcgYW5kIHJ1bm5pbmcgdGhpcyBpdCBtZWFucyBhcHBlYXIgX211c3RfIGJlIHNldFxuXG4gICAgaWYgKCFtb3VudGluZyAmJiAhZW50ZXIgfHwgY29uZmlnLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICAgIHN0YXR1czogRU5URVJFRFxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIucHJvcHMub25FbnRlcmVkKG5vZGUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkVudGVyKG5vZGUsIGFwcGVhcmluZyk7XG4gICAgdGhpcy5zYWZlU2V0U3RhdGUoe1xuICAgICAgc3RhdHVzOiBFTlRFUklOR1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMi5wcm9wcy5vbkVudGVyaW5nKG5vZGUsIGFwcGVhcmluZyk7XG5cbiAgICAgIF90aGlzMi5vblRyYW5zaXRpb25FbmQobm9kZSwgZW50ZXJUaW1lb3V0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5zYWZlU2V0U3RhdGUoe1xuICAgICAgICAgIHN0YXR1czogRU5URVJFRFxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJlZChub2RlLCBhcHBlYXJpbmcpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5wZXJmb3JtRXhpdCA9IGZ1bmN0aW9uIHBlcmZvcm1FeGl0KG5vZGUpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBleGl0ID0gdGhpcy5wcm9wcy5leGl0O1xuICAgIHZhciB0aW1lb3V0cyA9IHRoaXMuZ2V0VGltZW91dHMoKTsgLy8gbm8gZXhpdCBhbmltYXRpb24gc2tpcCByaWdodCB0byBFWElURURcblxuICAgIGlmICghZXhpdCB8fCBjb25maWcuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuc2FmZVNldFN0YXRlKHtcbiAgICAgICAgc3RhdHVzOiBFWElURURcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMzLnByb3BzLm9uRXhpdGVkKG5vZGUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkV4aXQobm9kZSk7XG4gICAgdGhpcy5zYWZlU2V0U3RhdGUoe1xuICAgICAgc3RhdHVzOiBFWElUSU5HXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMzLnByb3BzLm9uRXhpdGluZyhub2RlKTtcblxuICAgICAgX3RoaXMzLm9uVHJhbnNpdGlvbkVuZChub2RlLCB0aW1lb3V0cy5leGl0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy5zYWZlU2V0U3RhdGUoe1xuICAgICAgICAgIHN0YXR1czogRVhJVEVEXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczMucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmNhbmNlbE5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIGNhbmNlbE5leHRDYWxsYmFjaygpIHtcbiAgICBpZiAodGhpcy5uZXh0Q2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgIHRoaXMubmV4dENhbGxiYWNrLmNhbmNlbCgpO1xuICAgICAgdGhpcy5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2FmZVNldFN0YXRlID0gZnVuY3Rpb24gc2FmZVNldFN0YXRlKG5leHRTdGF0ZSwgY2FsbGJhY2spIHtcbiAgICAvLyBUaGlzIHNob3VsZG4ndCBiZSBuZWNlc3NhcnksIGJ1dCB0aGVyZSBhcmUgd2VpcmQgcmFjZSBjb25kaXRpb25zIHdpdGhcbiAgICAvLyBzZXRTdGF0ZSBjYWxsYmFja3MgYW5kIHVubW91bnRpbmcgaW4gdGVzdGluZywgc28gYWx3YXlzIG1ha2Ugc3VyZSB0aGF0XG4gICAgLy8gd2UgY2FuIGNhbmNlbCBhbnkgcGVuZGluZyBzZXRTdGF0ZSBjYWxsYmFja3MgYWZ0ZXIgd2UgdW5tb3VudC5cbiAgICBjYWxsYmFjayA9IHRoaXMuc2V0TmV4dENhbGxiYWNrKGNhbGxiYWNrKTtcbiAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSwgY2FsbGJhY2spO1xuICB9O1xuXG4gIF9wcm90by5zZXROZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiBzZXROZXh0Q2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHZhciBhY3RpdmUgPSB0cnVlO1xuXG4gICAgdGhpcy5uZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIF90aGlzNC5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMubmV4dENhbGxiYWNrLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5uZXh0Q2FsbGJhY2s7XG4gIH07XG5cbiAgX3Byb3RvLm9uVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZChub2RlLCB0aW1lb3V0LCBoYW5kbGVyKSB7XG4gICAgdGhpcy5zZXROZXh0Q2FsbGJhY2soaGFuZGxlcik7XG4gICAgdmFyIGRvZXNOb3RIYXZlVGltZW91dE9yTGlzdGVuZXIgPSB0aW1lb3V0ID09IG51bGwgJiYgIXRoaXMucHJvcHMuYWRkRW5kTGlzdGVuZXI7XG5cbiAgICBpZiAoIW5vZGUgfHwgZG9lc05vdEhhdmVUaW1lb3V0T3JMaXN0ZW5lcikge1xuICAgICAgc2V0VGltZW91dCh0aGlzLm5leHRDYWxsYmFjaywgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuYWRkRW5kTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuYWRkRW5kTGlzdGVuZXIobm9kZSwgdGhpcy5uZXh0Q2FsbGJhY2spO1xuICAgIH1cblxuICAgIGlmICh0aW1lb3V0ICE9IG51bGwpIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0Q2FsbGJhY2ssIHRpbWVvdXQpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBzdGF0dXMgPSB0aGlzLnN0YXRlLnN0YXR1cztcblxuICAgIGlmIChzdGF0dXMgPT09IFVOTU9VTlRFRCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgY2hpbGRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJjaGlsZHJlblwiXSk7IC8vIGZpbHRlciBwcm9wcyBmb3IgVHJhbnN0aXRpb25cblxuXG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuaW47XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMubW91bnRPbkVudGVyO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLnVubW91bnRPbkV4aXQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuYXBwZWFyO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmVudGVyO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmV4aXQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMudGltZW91dDtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5hZGRFbmRMaXN0ZW5lcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkVudGVyO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRW50ZXJpbmc7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FbnRlcmVkO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRXhpdDtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkV4aXRpbmc7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FeGl0ZWQ7XG5cbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBhbGxvd3MgZm9yIG5lc3RlZCBUcmFuc2l0aW9uc1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkdyb3VwQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgfSwgY2hpbGRyZW4oc3RhdHVzLCBjaGlsZFByb3BzKSk7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkID0gUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgcmV0dXJuICgvLyBhbGxvd3MgZm9yIG5lc3RlZCBUcmFuc2l0aW9uc1xuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uR3JvdXBDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiBudWxsXG4gICAgICB9LCBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIFRyYW5zaXRpb247XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblRyYW5zaXRpb24uY29udGV4dFR5cGUgPSBUcmFuc2l0aW9uR3JvdXBDb250ZXh0O1xuVHJhbnNpdGlvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBBIGBmdW5jdGlvbmAgY2hpbGQgY2FuIGJlIHVzZWQgaW5zdGVhZCBvZiBhIFJlYWN0IGVsZW1lbnQuIFRoaXMgZnVuY3Rpb24gaXNcbiAgICogY2FsbGVkIHdpdGggdGhlIGN1cnJlbnQgdHJhbnNpdGlvbiBzdGF0dXMgKGAnZW50ZXJpbmcnYCwgYCdlbnRlcmVkJ2AsXG4gICAqIGAnZXhpdGluZydgLCBgJ2V4aXRlZCdgKSwgd2hpY2ggY2FuIGJlIHVzZWQgdG8gYXBwbHkgY29udGV4dFxuICAgKiBzcGVjaWZpYyBwcm9wcyB0byBhIGNvbXBvbmVudC5cbiAgICpcbiAgICogYGBganN4XG4gICAqIDxUcmFuc2l0aW9uIGluPXt0aGlzLnN0YXRlLmlufSB0aW1lb3V0PXsxNTB9PlxuICAgKiAgIHtzdGF0ZSA9PiAoXG4gICAqICAgICA8TXlDb21wb25lbnQgY2xhc3NOYW1lPXtgZmFkZSBmYWRlLSR7c3RhdGV9YH0gLz5cbiAgICogICApfVxuICAgKiA8L1RyYW5zaXRpb24+XG4gICAqIGBgYFxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWRdKS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBjb21wb25lbnQ7IHRyaWdnZXJzIHRoZSBlbnRlciBvciBleGl0IHN0YXRlc1xuICAgKi9cbiAgaW46IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0IHRoZSBjaGlsZCBjb21wb25lbnQgaXMgbW91bnRlZCBpbW1lZGlhdGVseSBhbG9uZyB3aXRoXG4gICAqIHRoZSBwYXJlbnQgYFRyYW5zaXRpb25gIGNvbXBvbmVudC4gSWYgeW91IHdhbnQgdG8gXCJsYXp5IG1vdW50XCIgdGhlIGNvbXBvbmVudCBvbiB0aGVcbiAgICogZmlyc3QgYGluPXt0cnVlfWAgeW91IGNhbiBzZXQgYG1vdW50T25FbnRlcmAuIEFmdGVyIHRoZSBmaXJzdCBlbnRlciB0cmFuc2l0aW9uIHRoZSBjb21wb25lbnQgd2lsbCBzdGF5XG4gICAqIG1vdW50ZWQsIGV2ZW4gb24gXCJleGl0ZWRcIiwgdW5sZXNzIHlvdSBhbHNvIHNwZWNpZnkgYHVubW91bnRPbkV4aXRgLlxuICAgKi9cbiAgbW91bnRPbkVudGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQnkgZGVmYXVsdCB0aGUgY2hpbGQgY29tcG9uZW50IHN0YXlzIG1vdW50ZWQgYWZ0ZXIgaXQgcmVhY2hlcyB0aGUgYCdleGl0ZWQnYCBzdGF0ZS5cbiAgICogU2V0IGB1bm1vdW50T25FeGl0YCBpZiB5b3UnZCBwcmVmZXIgdG8gdW5tb3VudCB0aGUgY29tcG9uZW50IGFmdGVyIGl0IGZpbmlzaGVzIGV4aXRpbmcuXG4gICAqL1xuICB1bm1vdW50T25FeGl0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTm9ybWFsbHkgYSBjb21wb25lbnQgaXMgbm90IHRyYW5zaXRpb25lZCBpZiBpdCBpcyBzaG93biB3aGVuIHRoZVxuICAgKiBgPFRyYW5zaXRpb24+YCBjb21wb25lbnQgbW91bnRzLiBJZiB5b3Ugd2FudCB0byB0cmFuc2l0aW9uIG9uIHRoZSBmaXJzdFxuICAgKiBtb3VudCBzZXQgYGFwcGVhcmAgdG8gYHRydWVgLCBhbmQgdGhlIGNvbXBvbmVudCB3aWxsIHRyYW5zaXRpb24gaW4gYXMgc29vblxuICAgKiBhcyB0aGUgYDxUcmFuc2l0aW9uPmAgbW91bnRzLlxuICAgKlxuICAgKiA+ICoqTm90ZSoqOiB0aGVyZSBhcmUgbm8gc3BlY2lhbCBhcHBlYXIgc3RhdGVzIGxpa2UgYGFwcGVhcmluZ2AvYGFwcGVhcmVkYCwgdGhpcyBwcm9wXG4gICAqID4gb25seSBhZGRzIGFuIGFkZGl0aW9uYWwgZW50ZXIgdHJhbnNpdGlvbi4gSG93ZXZlciwgaW4gdGhlXG4gICAqID4gYDxDU1NUcmFuc2l0aW9uPmAgY29tcG9uZW50IHRoYXQgZmlyc3QgZW50ZXIgdHJhbnNpdGlvbiBkb2VzIHJlc3VsdCBpblxuICAgKiA+IGFkZGl0aW9uYWwgYC5hcHBlYXItKmAgY2xhc3NlcywgdGhhdCB3YXkgeW91IGNhbiBjaG9vc2UgdG8gc3R5bGUgaXRcbiAgICogPiBkaWZmZXJlbnRseS5cbiAgICovXG4gIGFwcGVhcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIGVudGVyIHRyYW5zaXRpb25zLlxuICAgKi9cbiAgZW50ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBleGl0IHRyYW5zaXRpb25zLlxuICAgKi9cbiAgZXhpdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBkdXJhdGlvbiBvZiB0aGUgdHJhbnNpdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxuICAgKiBSZXF1aXJlZCB1bmxlc3MgYGFkZEVuZExpc3RlbmVyYCBpcyBwcm92aWRlZC5cbiAgICpcbiAgICogWW91IG1heSBzcGVjaWZ5IGEgc2luZ2xlIHRpbWVvdXQgZm9yIGFsbCB0cmFuc2l0aW9uczpcbiAgICpcbiAgICogYGBganN4XG4gICAqIHRpbWVvdXQ9ezUwMH1cbiAgICogYGBgXG4gICAqXG4gICAqIG9yIGluZGl2aWR1YWxseTpcbiAgICpcbiAgICogYGBganN4XG4gICAqIHRpbWVvdXQ9e3tcbiAgICogIGFwcGVhcjogNTAwLFxuICAgKiAgZW50ZXI6IDMwMCxcbiAgICogIGV4aXQ6IDUwMCxcbiAgICogfX1cbiAgICogYGBgXG4gICAqXG4gICAqIC0gYGFwcGVhcmAgZGVmYXVsdHMgdG8gdGhlIHZhbHVlIG9mIGBlbnRlcmBcbiAgICogLSBgZW50ZXJgIGRlZmF1bHRzIHRvIGAwYFxuICAgKiAtIGBleGl0YCBkZWZhdWx0cyB0byBgMGBcbiAgICpcbiAgICogQHR5cGUge251bWJlciB8IHsgZW50ZXI/OiBudW1iZXIsIGV4aXQ/OiBudW1iZXIsIGFwcGVhcj86IG51bWJlciB9fVxuICAgKi9cbiAgdGltZW91dDogZnVuY3Rpb24gdGltZW91dChwcm9wcykge1xuICAgIHZhciBwdCA9IHRpbWVvdXRzU2hhcGU7XG4gICAgaWYgKCFwcm9wcy5hZGRFbmRMaXN0ZW5lcikgcHQgPSBwdC5pc1JlcXVpcmVkO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHB0LmFwcGx5KHZvaWQgMCwgW3Byb3BzXS5jb25jYXQoYXJncykpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBZGQgYSBjdXN0b20gdHJhbnNpdGlvbiBlbmQgdHJpZ2dlci4gQ2FsbGVkIHdpdGggdGhlIHRyYW5zaXRpb25pbmdcbiAgICogRE9NIG5vZGUgYW5kIGEgYGRvbmVgIGNhbGxiYWNrLiBBbGxvd3MgZm9yIG1vcmUgZmluZSBncmFpbmVkIHRyYW5zaXRpb24gZW5kXG4gICAqIGxvZ2ljLiAqKk5vdGU6KiogVGltZW91dHMgYXJlIHN0aWxsIHVzZWQgYXMgYSBmYWxsYmFjayBpZiBwcm92aWRlZC5cbiAgICpcbiAgICogYGBganN4XG4gICAqIGFkZEVuZExpc3RlbmVyPXsobm9kZSwgZG9uZSkgPT4ge1xuICAgKiAgIC8vIHVzZSB0aGUgY3NzIHRyYW5zaXRpb25lbmQgZXZlbnQgdG8gbWFyayB0aGUgZmluaXNoIG9mIGEgdHJhbnNpdGlvblxuICAgKiAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGRvbmUsIGZhbHNlKTtcbiAgICogfX1cbiAgICogYGBgXG4gICAqL1xuICBhZGRFbmRMaXN0ZW5lcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgXCJlbnRlcmluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLiBBbiBleHRyYSBwYXJhbWV0ZXJcbiAgICogYGlzQXBwZWFyaW5nYCBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2UgaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50XG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbCkgLT4gdm9pZFxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImVudGVyaW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuIEFuIGV4dHJhIHBhcmFtZXRlclxuICAgKiBgaXNBcHBlYXJpbmdgIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZSBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnRcbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImVudGVyZWRcIiBzdGF0dXMgaXMgYXBwbGllZC4gQW4gZXh0cmEgcGFyYW1ldGVyXG4gICAqIGBpc0FwcGVhcmluZ2AgaXMgc3VwcGxpZWQgdG8gaW5kaWNhdGUgaWYgdGhlIGVudGVyIHN0YWdlIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudFxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpIC0+IHZvaWRcbiAgICovXG4gIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgXCJleGl0aW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJleGl0aW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkXG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJleGl0ZWRcIiBzdGF0dXMgaXMgYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpIC0+IHZvaWRcbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuYyAvLyBOYW1lIHRoZSBmdW5jdGlvbiBzbyBpdCBpcyBjbGVhcmVyIGluIHRoZSBkb2N1bWVudGF0aW9uXG5cbn0gOiB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cblRyYW5zaXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBpbjogZmFsc2UsXG4gIG1vdW50T25FbnRlcjogZmFsc2UsXG4gIHVubW91bnRPbkV4aXQ6IGZhbHNlLFxuICBhcHBlYXI6IGZhbHNlLFxuICBlbnRlcjogdHJ1ZSxcbiAgZXhpdDogdHJ1ZSxcbiAgb25FbnRlcjogbm9vcCxcbiAgb25FbnRlcmluZzogbm9vcCxcbiAgb25FbnRlcmVkOiBub29wLFxuICBvbkV4aXQ6IG5vb3AsXG4gIG9uRXhpdGluZzogbm9vcCxcbiAgb25FeGl0ZWQ6IG5vb3Bcbn07XG5UcmFuc2l0aW9uLlVOTU9VTlRFRCA9IDA7XG5UcmFuc2l0aW9uLkVYSVRFRCA9IDE7XG5UcmFuc2l0aW9uLkVOVEVSSU5HID0gMjtcblRyYW5zaXRpb24uRU5URVJFRCA9IDM7XG5UcmFuc2l0aW9uLkVYSVRJTkcgPSA0O1xuZXhwb3J0IGRlZmF1bHQgVHJhbnNpdGlvbjsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcmFuc2l0aW9uR3JvdXBDb250ZXh0IGZyb20gJy4vVHJhbnNpdGlvbkdyb3VwQ29udGV4dCc7XG5pbXBvcnQgeyBnZXRDaGlsZE1hcHBpbmcsIGdldEluaXRpYWxDaGlsZE1hcHBpbmcsIGdldE5leHRDaGlsZE1hcHBpbmcgfSBmcm9tICcuL3V0aWxzL0NoaWxkTWFwcGluZyc7XG5cbnZhciB2YWx1ZXMgPSBPYmplY3QudmFsdWVzIHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgcmV0dXJuIG9ialtrXTtcbiAgfSk7XG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnQ6ICdkaXYnLFxuICBjaGlsZEZhY3Rvcnk6IGZ1bmN0aW9uIGNoaWxkRmFjdG9yeShjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfVxuICAvKipcbiAgICogVGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAgY29tcG9uZW50IG1hbmFnZXMgYSBzZXQgb2YgdHJhbnNpdGlvbiBjb21wb25lbnRzXG4gICAqIChgPFRyYW5zaXRpb24+YCBhbmQgYDxDU1NUcmFuc2l0aW9uPmApIGluIGEgbGlzdC4gTGlrZSB3aXRoIHRoZSB0cmFuc2l0aW9uXG4gICAqIGNvbXBvbmVudHMsIGA8VHJhbnNpdGlvbkdyb3VwPmAgaXMgYSBzdGF0ZSBtYWNoaW5lIGZvciBtYW5hZ2luZyB0aGUgbW91bnRpbmdcbiAgICogYW5kIHVubW91bnRpbmcgb2YgY29tcG9uZW50cyBvdmVyIHRpbWUuXG4gICAqXG4gICAqIENvbnNpZGVyIHRoZSBleGFtcGxlIGJlbG93LiBBcyBpdGVtcyBhcmUgcmVtb3ZlZCBvciBhZGRlZCB0byB0aGUgVG9kb0xpc3QgdGhlXG4gICAqIGBpbmAgcHJvcCBpcyB0b2dnbGVkIGF1dG9tYXRpY2FsbHkgYnkgdGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAuXG4gICAqXG4gICAqIE5vdGUgdGhhdCBgPFRyYW5zaXRpb25Hcm91cD5gICBkb2VzIG5vdCBkZWZpbmUgYW55IGFuaW1hdGlvbiBiZWhhdmlvciFcbiAgICogRXhhY3RseSBfaG93XyBhIGxpc3QgaXRlbSBhbmltYXRlcyBpcyB1cCB0byB0aGUgaW5kaXZpZHVhbCB0cmFuc2l0aW9uXG4gICAqIGNvbXBvbmVudC4gVGhpcyBtZWFucyB5b3UgY2FuIG1peCBhbmQgbWF0Y2ggYW5pbWF0aW9ucyBhY3Jvc3MgZGlmZmVyZW50IGxpc3RcbiAgICogaXRlbXMuXG4gICAqL1xuXG59O1xuXG52YXIgVHJhbnNpdGlvbkdyb3VwID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFRyYW5zaXRpb25Hcm91cCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVHJhbnNpdGlvbkdyb3VwKHByb3BzLCBjb250ZXh0KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpIHx8IHRoaXM7XG5cbiAgICB2YXIgaGFuZGxlRXhpdGVkID0gX3RoaXMuaGFuZGxlRXhpdGVkLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpOyAvLyBJbml0aWFsIGNoaWxkcmVuIHNob3VsZCBhbGwgYmUgZW50ZXJpbmcsIGRlcGVuZGVudCBvbiBhcHBlYXJcblxuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBjb250ZXh0VmFsdWU6IHtcbiAgICAgICAgaXNNb3VudGluZzogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGhhbmRsZUV4aXRlZDogaGFuZGxlRXhpdGVkLFxuICAgICAgZmlyc3RSZW5kZXI6IHRydWVcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb250ZXh0VmFsdWU6IHtcbiAgICAgICAgaXNNb3VudGluZzogZmFsc2VcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcbiAgfTtcblxuICBUcmFuc2l0aW9uR3JvdXAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgX3JlZikge1xuICAgIHZhciBwcmV2Q2hpbGRNYXBwaW5nID0gX3JlZi5jaGlsZHJlbixcbiAgICAgICAgaGFuZGxlRXhpdGVkID0gX3JlZi5oYW5kbGVFeGl0ZWQsXG4gICAgICAgIGZpcnN0UmVuZGVyID0gX3JlZi5maXJzdFJlbmRlcjtcbiAgICByZXR1cm4ge1xuICAgICAgY2hpbGRyZW46IGZpcnN0UmVuZGVyID8gZ2V0SW5pdGlhbENoaWxkTWFwcGluZyhuZXh0UHJvcHMsIGhhbmRsZUV4aXRlZCkgOiBnZXROZXh0Q2hpbGRNYXBwaW5nKG5leHRQcm9wcywgcHJldkNoaWxkTWFwcGluZywgaGFuZGxlRXhpdGVkKSxcbiAgICAgIGZpcnN0UmVuZGVyOiBmYWxzZVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZUV4aXRlZCA9IGZ1bmN0aW9uIGhhbmRsZUV4aXRlZChjaGlsZCwgbm9kZSkge1xuICAgIHZhciBjdXJyZW50Q2hpbGRNYXBwaW5nID0gZ2V0Q2hpbGRNYXBwaW5nKHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIGlmIChjaGlsZC5rZXkgaW4gY3VycmVudENoaWxkTWFwcGluZykgcmV0dXJuO1xuXG4gICAgaWYgKGNoaWxkLnByb3BzLm9uRXhpdGVkKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb3VudGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBfZXh0ZW5kcyh7fSwgc3RhdGUuY2hpbGRyZW4pO1xuXG4gICAgICAgIGRlbGV0ZSBjaGlsZHJlbltjaGlsZC5rZXldO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgQ29tcG9uZW50ID0gX3RoaXMkcHJvcHMuY29tcG9uZW50LFxuICAgICAgICBjaGlsZEZhY3RvcnkgPSBfdGhpcyRwcm9wcy5jaGlsZEZhY3RvcnksXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImNvbXBvbmVudFwiLCBcImNoaWxkRmFjdG9yeVwiXSk7XG5cbiAgICB2YXIgY29udGV4dFZhbHVlID0gdGhpcy5zdGF0ZS5jb250ZXh0VmFsdWU7XG4gICAgdmFyIGNoaWxkcmVuID0gdmFsdWVzKHRoaXMuc3RhdGUuY2hpbGRyZW4pLm1hcChjaGlsZEZhY3RvcnkpO1xuICAgIGRlbGV0ZSBwcm9wcy5hcHBlYXI7XG4gICAgZGVsZXRlIHByb3BzLmVudGVyO1xuICAgIGRlbGV0ZSBwcm9wcy5leGl0O1xuXG4gICAgaWYgKENvbXBvbmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkdyb3VwQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZTogY29udGV4dFZhbHVlXG4gICAgICB9LCBjaGlsZHJlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkdyb3VwQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IGNvbnRleHRWYWx1ZVxuICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBwcm9wcywgY2hpbGRyZW4pKTtcbiAgfTtcblxuICByZXR1cm4gVHJhbnNpdGlvbkdyb3VwO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5UcmFuc2l0aW9uR3JvdXAucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogYDxUcmFuc2l0aW9uR3JvdXA+YCByZW5kZXJzIGEgYDxkaXY+YCBieSBkZWZhdWx0LiBZb3UgY2FuIGNoYW5nZSB0aGlzXG4gICAqIGJlaGF2aW9yIGJ5IHByb3ZpZGluZyBhIGBjb21wb25lbnRgIHByb3AuXG4gICAqIElmIHlvdSB1c2UgUmVhY3QgdjE2KyBhbmQgd291bGQgbGlrZSB0byBhdm9pZCBhIHdyYXBwaW5nIGA8ZGl2PmAgZWxlbWVudFxuICAgKiB5b3UgY2FuIHBhc3MgaW4gYGNvbXBvbmVudD17bnVsbH1gLiBUaGlzIGlzIHVzZWZ1bCBpZiB0aGUgd3JhcHBpbmcgZGl2XG4gICAqIGJvcmtzIHlvdXIgY3NzIHN0eWxlcy5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogQSBzZXQgb2YgYDxUcmFuc2l0aW9uPmAgY29tcG9uZW50cywgdGhhdCBhcmUgdG9nZ2xlZCBgaW5gIGFuZCBvdXQgYXMgdGhleVxuICAgKiBsZWF2ZS4gdGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAgd2lsbCBpbmplY3Qgc3BlY2lmaWMgdHJhbnNpdGlvbiBwcm9wcywgc29cbiAgICogcmVtZW1iZXIgdG8gc3ByZWFkIHRoZW0gdGhyb3VnaCBpZiB5b3UgYXJlIHdyYXBwaW5nIHRoZSBgPFRyYW5zaXRpb24+YCBhc1xuICAgKiB3aXRoIG91ciBgPEZhZGU+YCBleGFtcGxlLlxuICAgKlxuICAgKiBXaGlsZSB0aGlzIGNvbXBvbmVudCBpcyBtZWFudCBmb3IgbXVsdGlwbGUgYFRyYW5zaXRpb25gIG9yIGBDU1NUcmFuc2l0aW9uYFxuICAgKiBjaGlsZHJlbiwgc29tZXRpbWVzIHlvdSBtYXkgd2FudCB0byBoYXZlIGEgc2luZ2xlIHRyYW5zaXRpb24gY2hpbGQgd2l0aFxuICAgKiBjb250ZW50IHRoYXQgeW91IHdhbnQgdG8gYmUgdHJhbnNpdGlvbmVkIG91dCBhbmQgaW4gd2hlbiB5b3UgY2hhbmdlIGl0XG4gICAqIChlLmcuIHJvdXRlcywgaW1hZ2VzIGV0Yy4pIEluIHRoYXQgY2FzZSB5b3UgY2FuIGNoYW5nZSB0aGUgYGtleWAgcHJvcCBvZlxuICAgKiB0aGUgdHJhbnNpdGlvbiBjaGlsZCBhcyB5b3UgY2hhbmdlIGl0cyBjb250ZW50LCB0aGlzIHdpbGwgY2F1c2VcbiAgICogYFRyYW5zaXRpb25Hcm91cGAgdG8gdHJhbnNpdGlvbiB0aGUgY2hpbGQgb3V0IGFuZCBiYWNrIGluLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIHByb3AgdGhhdCBlbmFibGVzIG9yIGRpc2FibGVzIGFwcGVhciBhbmltYXRpb25zXG4gICAqIGZvciBhbGwgY2hpbGRyZW4uIE5vdGUgdGhhdCBzcGVjaWZ5aW5nIHRoaXMgd2lsbCBvdmVycmlkZSBhbnkgZGVmYXVsdHMgc2V0XG4gICAqIG9uIGluZGl2aWR1YWwgY2hpbGRyZW4gVHJhbnNpdGlvbnMuXG4gICAqL1xuICBhcHBlYXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIHByb3AgdGhhdCBlbmFibGVzIG9yIGRpc2FibGVzIGVudGVyIGFuaW1hdGlvbnNcbiAgICogZm9yIGFsbCBjaGlsZHJlbi4gTm90ZSB0aGF0IHNwZWNpZnlpbmcgdGhpcyB3aWxsIG92ZXJyaWRlIGFueSBkZWZhdWx0cyBzZXRcbiAgICogb24gaW5kaXZpZHVhbCBjaGlsZHJlbiBUcmFuc2l0aW9ucy5cbiAgICovXG4gIGVudGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBwcm9wIHRoYXQgZW5hYmxlcyBvciBkaXNhYmxlcyBleGl0IGFuaW1hdGlvbnNcbiAgICogZm9yIGFsbCBjaGlsZHJlbi4gTm90ZSB0aGF0IHNwZWNpZnlpbmcgdGhpcyB3aWxsIG92ZXJyaWRlIGFueSBkZWZhdWx0cyBzZXRcbiAgICogb24gaW5kaXZpZHVhbCBjaGlsZHJlbiBUcmFuc2l0aW9ucy5cbiAgICovXG4gIGV4aXQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBZb3UgbWF5IG5lZWQgdG8gYXBwbHkgcmVhY3RpdmUgdXBkYXRlcyB0byBhIGNoaWxkIGFzIGl0IGlzIGV4aXRpbmcuXG4gICAqIFRoaXMgaXMgZ2VuZXJhbGx5IGRvbmUgYnkgdXNpbmcgYGNsb25lRWxlbWVudGAgaG93ZXZlciBpbiB0aGUgY2FzZSBvZiBhbiBleGl0aW5nXG4gICAqIGNoaWxkIHRoZSBlbGVtZW50IGhhcyBhbHJlYWR5IGJlZW4gcmVtb3ZlZCBhbmQgbm90IGFjY2Vzc2libGUgdG8gdGhlIGNvbnN1bWVyLlxuICAgKlxuICAgKiBJZiB5b3UgZG8gbmVlZCB0byB1cGRhdGUgYSBjaGlsZCBhcyBpdCBsZWF2ZXMgeW91IGNhbiBwcm92aWRlIGEgYGNoaWxkRmFjdG9yeWBcbiAgICogdG8gd3JhcCBldmVyeSBjaGlsZCwgZXZlbiB0aGUgb25lcyB0aGF0IGFyZSBsZWF2aW5nLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihjaGlsZDogUmVhY3RFbGVtZW50KSAtPiBSZWFjdEVsZW1lbnRcbiAgICovXG4gIGNoaWxkRmFjdG9yeTogUHJvcFR5cGVzLmZ1bmNcbn0gOiB7fTtcblRyYW5zaXRpb25Hcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5leHBvcnQgZGVmYXVsdCBUcmFuc2l0aW9uR3JvdXA7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7IiwiZXhwb3J0IGRlZmF1bHQge1xuICBkaXNhYmxlZDogZmFsc2Vcbn07IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBDU1NUcmFuc2l0aW9uIH0gZnJvbSAnLi9DU1NUcmFuc2l0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVwbGFjZVRyYW5zaXRpb24gfSBmcm9tICcuL1JlcGxhY2VUcmFuc2l0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3dpdGNoVHJhbnNpdGlvbiB9IGZyb20gJy4vU3dpdGNoVHJhbnNpdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRyYW5zaXRpb25Hcm91cCB9IGZyb20gJy4vVHJhbnNpdGlvbkdyb3VwJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHJhbnNpdGlvbiB9IGZyb20gJy4vVHJhbnNpdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJzsiLCJpbXBvcnQgeyBDaGlsZHJlbiwgY2xvbmVFbGVtZW50LCBpc1ZhbGlkRWxlbWVudCB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogR2l2ZW4gYHRoaXMucHJvcHMuY2hpbGRyZW5gLCByZXR1cm4gYW4gb2JqZWN0IG1hcHBpbmcga2V5IHRvIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Kn0gY2hpbGRyZW4gYHRoaXMucHJvcHMuY2hpbGRyZW5gXG4gKiBAcmV0dXJuIHtvYmplY3R9IE1hcHBpbmcgb2Yga2V5IHRvIGNoaWxkXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENoaWxkTWFwcGluZyhjaGlsZHJlbiwgbWFwRm4pIHtcbiAgdmFyIG1hcHBlciA9IGZ1bmN0aW9uIG1hcHBlcihjaGlsZCkge1xuICAgIHJldHVybiBtYXBGbiAmJiBpc1ZhbGlkRWxlbWVudChjaGlsZCkgPyBtYXBGbihjaGlsZCkgOiBjaGlsZDtcbiAgfTtcblxuICB2YXIgcmVzdWx0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgaWYgKGNoaWxkcmVuKSBDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGM7XG4gIH0pLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgLy8gcnVuIHRoZSBtYXAgZnVuY3Rpb24gaGVyZSBpbnN0ZWFkIHNvIHRoYXQgdGhlIGtleSBpcyB0aGUgY29tcHV0ZWQgb25lXG4gICAgcmVzdWx0W2NoaWxkLmtleV0gPSBtYXBwZXIoY2hpbGQpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogV2hlbiB5b3UncmUgYWRkaW5nIG9yIHJlbW92aW5nIGNoaWxkcmVuIHNvbWUgbWF5IGJlIGFkZGVkIG9yIHJlbW92ZWQgaW4gdGhlXG4gKiBzYW1lIHJlbmRlciBwYXNzLiBXZSB3YW50IHRvIHNob3cgKmJvdGgqIHNpbmNlIHdlIHdhbnQgdG8gc2ltdWx0YW5lb3VzbHlcbiAqIGFuaW1hdGUgZWxlbWVudHMgaW4gYW5kIG91dC4gVGhpcyBmdW5jdGlvbiB0YWtlcyBhIHByZXZpb3VzIHNldCBvZiBrZXlzXG4gKiBhbmQgYSBuZXcgc2V0IG9mIGtleXMgYW5kIG1lcmdlcyB0aGVtIHdpdGggaXRzIGJlc3QgZ3Vlc3Mgb2YgdGhlIGNvcnJlY3RcbiAqIG9yZGVyaW5nLiBJbiB0aGUgZnV0dXJlIHdlIG1heSBleHBvc2Ugc29tZSBvZiB0aGUgdXRpbGl0aWVzIGluXG4gKiBSZWFjdE11bHRpQ2hpbGQgdG8gbWFrZSB0aGlzIGVhc3ksIGJ1dCBmb3Igbm93IFJlYWN0IGl0c2VsZiBkb2VzIG5vdFxuICogZGlyZWN0bHkgaGF2ZSB0aGlzIGNvbmNlcHQgb2YgdGhlIHVuaW9uIG9mIHByZXZDaGlsZHJlbiBhbmQgbmV4dENoaWxkcmVuXG4gKiBzbyB3ZSBpbXBsZW1lbnQgaXQgaGVyZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcHJldiBwcmV2IGNoaWxkcmVuIGFzIHJldHVybmVkIGZyb21cbiAqIGBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKClgLlxuICogQHBhcmFtIHtvYmplY3R9IG5leHQgbmV4dCBjaGlsZHJlbiBhcyByZXR1cm5lZCBmcm9tXG4gKiBgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZygpYC5cbiAqIEByZXR1cm4ge29iamVjdH0gYSBrZXkgc2V0IHRoYXQgY29udGFpbnMgYWxsIGtleXMgaW4gYHByZXZgIGFuZCBhbGwga2V5c1xuICogaW4gYG5leHRgIGluIGEgcmVhc29uYWJsZSBvcmRlci5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDaGlsZE1hcHBpbmdzKHByZXYsIG5leHQpIHtcbiAgcHJldiA9IHByZXYgfHwge307XG4gIG5leHQgPSBuZXh0IHx8IHt9O1xuXG4gIGZ1bmN0aW9uIGdldFZhbHVlRm9yS2V5KGtleSkge1xuICAgIHJldHVybiBrZXkgaW4gbmV4dCA/IG5leHRba2V5XSA6IHByZXZba2V5XTtcbiAgfSAvLyBGb3IgZWFjaCBrZXkgb2YgYG5leHRgLCB0aGUgbGlzdCBvZiBrZXlzIHRvIGluc2VydCBiZWZvcmUgdGhhdCBrZXkgaW5cbiAgLy8gdGhlIGNvbWJpbmVkIGxpc3RcblxuXG4gIHZhciBuZXh0S2V5c1BlbmRpbmcgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgcGVuZGluZ0tleXMgPSBbXTtcblxuICBmb3IgKHZhciBwcmV2S2V5IGluIHByZXYpIHtcbiAgICBpZiAocHJldktleSBpbiBuZXh0KSB7XG4gICAgICBpZiAocGVuZGluZ0tleXMubGVuZ3RoKSB7XG4gICAgICAgIG5leHRLZXlzUGVuZGluZ1twcmV2S2V5XSA9IHBlbmRpbmdLZXlzO1xuICAgICAgICBwZW5kaW5nS2V5cyA9IFtdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwZW5kaW5nS2V5cy5wdXNoKHByZXZLZXkpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpO1xuICB2YXIgY2hpbGRNYXBwaW5nID0ge307XG5cbiAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0KSB7XG4gICAgaWYgKG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcGVuZGluZ05leHRLZXkgPSBuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV07XG4gICAgICAgIGNoaWxkTWFwcGluZ1tuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV1dID0gZ2V0VmFsdWVGb3JLZXkocGVuZGluZ05leHRLZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoaWxkTWFwcGluZ1tuZXh0S2V5XSA9IGdldFZhbHVlRm9yS2V5KG5leHRLZXkpO1xuICB9IC8vIEZpbmFsbHksIGFkZCB0aGUga2V5cyB3aGljaCBkaWRuJ3QgYXBwZWFyIGJlZm9yZSBhbnkga2V5IGluIGBuZXh0YFxuXG5cbiAgZm9yIChpID0gMDsgaSA8IHBlbmRpbmdLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hpbGRNYXBwaW5nW3BlbmRpbmdLZXlzW2ldXSA9IGdldFZhbHVlRm9yS2V5KHBlbmRpbmdLZXlzW2ldKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZE1hcHBpbmc7XG59XG5cbmZ1bmN0aW9uIGdldFByb3AoY2hpbGQsIHByb3AsIHByb3BzKSB7XG4gIHJldHVybiBwcm9wc1twcm9wXSAhPSBudWxsID8gcHJvcHNbcHJvcF0gOiBjaGlsZC5wcm9wc1twcm9wXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRpYWxDaGlsZE1hcHBpbmcocHJvcHMsIG9uRXhpdGVkKSB7XG4gIHJldHVybiBnZXRDaGlsZE1hcHBpbmcocHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgIG9uRXhpdGVkOiBvbkV4aXRlZC5iaW5kKG51bGwsIGNoaWxkKSxcbiAgICAgIGluOiB0cnVlLFxuICAgICAgYXBwZWFyOiBnZXRQcm9wKGNoaWxkLCAnYXBwZWFyJywgcHJvcHMpLFxuICAgICAgZW50ZXI6IGdldFByb3AoY2hpbGQsICdlbnRlcicsIHByb3BzKSxcbiAgICAgIGV4aXQ6IGdldFByb3AoY2hpbGQsICdleGl0JywgcHJvcHMpXG4gICAgfSk7XG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRDaGlsZE1hcHBpbmcobmV4dFByb3BzLCBwcmV2Q2hpbGRNYXBwaW5nLCBvbkV4aXRlZCkge1xuICB2YXIgbmV4dENoaWxkTWFwcGluZyA9IGdldENoaWxkTWFwcGluZyhuZXh0UHJvcHMuY2hpbGRyZW4pO1xuICB2YXIgY2hpbGRyZW4gPSBtZXJnZUNoaWxkTWFwcGluZ3MocHJldkNoaWxkTWFwcGluZywgbmV4dENoaWxkTWFwcGluZyk7XG4gIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltrZXldO1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSByZXR1cm47XG4gICAgdmFyIGhhc1ByZXYgPSBrZXkgaW4gcHJldkNoaWxkTWFwcGluZztcbiAgICB2YXIgaGFzTmV4dCA9IGtleSBpbiBuZXh0Q2hpbGRNYXBwaW5nO1xuICAgIHZhciBwcmV2Q2hpbGQgPSBwcmV2Q2hpbGRNYXBwaW5nW2tleV07XG4gICAgdmFyIGlzTGVhdmluZyA9IGlzVmFsaWRFbGVtZW50KHByZXZDaGlsZCkgJiYgIXByZXZDaGlsZC5wcm9wcy5pbjsgLy8gaXRlbSBpcyBuZXcgKGVudGVyaW5nKVxuXG4gICAgaWYgKGhhc05leHQgJiYgKCFoYXNQcmV2IHx8IGlzTGVhdmluZykpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdlbnRlcmluZycsIGtleSlcbiAgICAgIGNoaWxkcmVuW2tleV0gPSBjbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgb25FeGl0ZWQ6IG9uRXhpdGVkLmJpbmQobnVsbCwgY2hpbGQpLFxuICAgICAgICBpbjogdHJ1ZSxcbiAgICAgICAgZXhpdDogZ2V0UHJvcChjaGlsZCwgJ2V4aXQnLCBuZXh0UHJvcHMpLFxuICAgICAgICBlbnRlcjogZ2V0UHJvcChjaGlsZCwgJ2VudGVyJywgbmV4dFByb3BzKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICghaGFzTmV4dCAmJiBoYXNQcmV2ICYmICFpc0xlYXZpbmcpIHtcbiAgICAgIC8vIGl0ZW0gaXMgb2xkIChleGl0aW5nKVxuICAgICAgLy8gY29uc29sZS5sb2coJ2xlYXZpbmcnLCBrZXkpXG4gICAgICBjaGlsZHJlbltrZXldID0gY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIGluOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChoYXNOZXh0ICYmIGhhc1ByZXYgJiYgaXNWYWxpZEVsZW1lbnQocHJldkNoaWxkKSkge1xuICAgICAgLy8gaXRlbSBoYXNuJ3QgY2hhbmdlZCB0cmFuc2l0aW9uIHN0YXRlc1xuICAgICAgLy8gY29weSBvdmVyIHRoZSBsYXN0IHRyYW5zaXRpb24gcHJvcHM7XG4gICAgICAvLyBjb25zb2xlLmxvZygndW5jaGFuZ2VkJywga2V5KVxuICAgICAgY2hpbGRyZW5ba2V5XSA9IGNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICBvbkV4aXRlZDogb25FeGl0ZWQuYmluZChudWxsLCBjaGlsZCksXG4gICAgICAgIGluOiBwcmV2Q2hpbGQucHJvcHMuaW4sXG4gICAgICAgIGV4aXQ6IGdldFByb3AoY2hpbGQsICdleGl0JywgbmV4dFByb3BzKSxcbiAgICAgICAgZW50ZXI6IGdldFByb3AoY2hpbGQsICdlbnRlcicsIG5leHRQcm9wcylcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBjaGlsZHJlbjtcbn0iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuZXhwb3J0IHZhciB0aW1lb3V0c1NoYXBlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zaGFwZSh7XG4gIGVudGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuICBleGl0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBhcHBlYXI6IFByb3BUeXBlcy5udW1iZXJcbn0pLmlzUmVxdWlyZWRdKSA6IG51bGw7XG5leHBvcnQgdmFyIGNsYXNzTmFtZXNTaGFwZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuc2hhcGUoe1xuICBlbnRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXhpdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWN0aXZlOiBQcm9wVHlwZXMuc3RyaW5nXG59KSwgUHJvcFR5cGVzLnNoYXBlKHtcbiAgZW50ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGVudGVyRG9uZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZW50ZXJBY3RpdmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGV4aXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGV4aXREb25lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBleGl0QWN0aXZlOiBQcm9wVHlwZXMuc3RyaW5nXG59KV0pIDogbnVsbDsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwidmFyIGU9ZnVuY3Rpb24oZSl7cmV0dXJuIHBhcnNlRmxvYXQoZSl9O2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHIpe3JldHVybiBudWxsPT1yJiYocj1yKSxmdW5jdGlvbihuLHQsaSxmKXtudWxsPT1pJiYoaT1yKSxudWxsPT1mJiYoZj1pKTt2YXIgbD1TdHJpbmcobikubWF0Y2goL1tcXGQuXFwtXFwrXSpcXHMqKC4qKS8pWzFdfHxcIlwiO2lmKGw9PT10KXJldHVybiBuO3ZhciB1PWUobik7aWYoXCJweFwiIT09bClpZihcImVtXCI9PT1sKXU9ZShuKSplKGkpO2Vsc2UgaWYoXCJyZW1cIj09PWwpdT1lKG4pKmUocik7ZWxzZXtpZihcImV4XCIhPT1sKXJldHVybiBuO3U9ZShuKSplKGkpKjJ9dmFyIGE9dTtpZihcInB4XCIhPT10KWlmKFwiZW1cIj09PXQpYT11L2UoZik7ZWxzZSBpZihcInJlbVwiPT09dClhPXUvZShyKTtlbHNle2lmKFwiZXhcIiE9PXQpcmV0dXJuIG47YT11L2UoZikvMn1yZXR1cm4gcGFyc2VGbG9hdChhLnRvRml4ZWQoNSkpK3R9fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiLy8gQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWJvb3RzdHJhcC9kb20taGVscGVycy9ibG9iL21hc3Rlci9zcmMvdXRpbC9pbkRPTS5qc1xyXG52YXIgaW5ET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xyXG52YXIgY2FjaGVkVHlwZTtcclxuZXhwb3J0IGZ1bmN0aW9uIF9zZXRTY3JvbGxUeXBlKHR5cGUpIHtcclxuICAgIGNhY2hlZFR5cGUgPSB0eXBlO1xyXG59XHJcbi8vIEJhc2VkIG9uIHRoZSBqcXVlcnkgcGx1Z2luIGh0dHBzOi8vZ2l0aHViLmNvbS9vdGhyZWUvanF1ZXJ5LnJ0bC1zY3JvbGwtdHlwZVxyXG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0U2Nyb2xsVHlwZSgpIHtcclxuICAgIGlmIChjYWNoZWRUeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhY2hlZFR5cGU7XHJcbiAgICB9XHJcbiAgICBpZiAoIWluRE9NIHx8ICF3aW5kb3cuZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICAgIHJldHVybiAnaW5kZXRlcm1pbmF0ZSc7XHJcbiAgICB9XHJcbiAgICB2YXIgZHVtbXkgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkdW1teS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQUJDRCcpKTtcclxuICAgIGR1bW15LmRpciA9ICdydGwnO1xyXG4gICAgZHVtbXkuc3R5bGUuZm9udFNpemUgPSAnMTRweCc7XHJcbiAgICBkdW1teS5zdHlsZS53aWR0aCA9ICc0cHgnO1xyXG4gICAgZHVtbXkuc3R5bGUuaGVpZ2h0ID0gJzFweCc7XHJcbiAgICBkdW1teS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBkdW1teS5zdHlsZS50b3AgPSAnLTEwMDBweCc7XHJcbiAgICBkdW1teS5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkdW1teSk7XHJcbiAgICBjYWNoZWRUeXBlID0gJ3JldmVyc2UnO1xyXG4gICAgaWYgKGR1bW15LnNjcm9sbExlZnQgPiAwKSB7XHJcbiAgICAgICAgY2FjaGVkVHlwZSA9ICdkZWZhdWx0JztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGR1bW15LnNjcm9sbExlZnQgPSAxO1xyXG4gICAgICAgIGlmIChkdW1teS5zY3JvbGxMZWZ0ID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNhY2hlZFR5cGUgPSAnbmVnYXRpdmUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZHVtbXkpO1xyXG4gICAgcmV0dXJuIGNhY2hlZFR5cGU7XHJcbn1cclxuLy8gQmFzZWQgb24gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI0Mzk0Mzc2XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROb3JtYWxpemVkU2Nyb2xsTGVmdChlbGVtZW50LCBkaXJlY3Rpb24pIHtcclxuICAgIHZhciBzY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgLy8gUGVyZm9ybSB0aGUgY2FsY3VsYXRpb25zIG9ubHkgd2hlbiBkaXJlY3Rpb24gaXMgcnRsIHRvIGF2b2lkIG1lc3NpbmcgdXAgdGhlIGx0ciBiYWhhdmlvclxyXG4gICAgaWYgKGRpcmVjdGlvbiAhPT0gJ3J0bCcpIHtcclxuICAgICAgICByZXR1cm4gc2Nyb2xsTGVmdDtcclxuICAgIH1cclxuICAgIHZhciB0eXBlID0gZGV0ZWN0U2Nyb2xsVHlwZSgpO1xyXG4gICAgaWYgKHR5cGUgPT09ICdpbmRldGVybWluYXRlJykge1xyXG4gICAgICAgIHJldHVybiBOdW1iZXIuTmFOO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbmVnYXRpdmUnOlxyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5zY3JvbGxXaWR0aCAtIGVsZW1lbnQuY2xpZW50V2lkdGggKyBzY3JvbGxMZWZ0O1xyXG4gICAgICAgIGNhc2UgJ3JldmVyc2UnOlxyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5zY3JvbGxXaWR0aCAtIGVsZW1lbnQuY2xpZW50V2lkdGggLSBzY3JvbGxMZWZ0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNjcm9sbExlZnQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE5vcm1hbGl6ZWRTY3JvbGxMZWZ0KGVsZW1lbnQsIHNjcm9sbExlZnQsIGRpcmVjdGlvbikge1xyXG4gICAgLy8gUGVyZm9ybSB0aGUgY2FsY3VsYXRpb25zIG9ubHkgd2hlbiBkaXJlY3Rpb24gaXMgcnRsIHRvIGF2b2lkIG1lc3NpbmcgdXAgdGhlIGx0ciBiYWhhdmlvclxyXG4gICAgaWYgKGRpcmVjdGlvbiAhPT0gJ3J0bCcpIHtcclxuICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0O1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciB0eXBlID0gZGV0ZWN0U2Nyb2xsVHlwZSgpO1xyXG4gICAgaWYgKHR5cGUgPT09ICdpbmRldGVybWluYXRlJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ25lZ2F0aXZlJzpcclxuICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gZWxlbWVudC5jbGllbnRXaWR0aCAtIGVsZW1lbnQuc2Nyb2xsV2lkdGggKyBzY3JvbGxMZWZ0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdyZXZlcnNlJzpcclxuICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxXaWR0aCAtIGVsZW1lbnQuY2xpZW50V2lkdGggLSBzY3JvbGxMZWZ0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZSc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbnZhciBSaWZtID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFJpZm0sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJpZm0ocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5fc3RhdGUgPSBudWxsO1xuICAgIF90aGlzLl9kZWwgPSBmYWxzZTtcblxuICAgIF90aGlzLl9oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoZXZ0LnRhcmdldC50eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JpZm0gZG9lcyBub3Qgc3VwcG9ydCBpbnB1dCB0eXBlPW51bWJlciwgdXNlIHR5cGU9dGVsIGluc3RlYWQuJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IC8vIEZVVFVSRTogdXNlIGV2dC5uYXRpdmVFdmVudC5pbnB1dFR5cGUgZm9yIGRlbCBldmVudCwgc2VlIGNvbW1lbnRzIGF0IG9ua2V5ZG93blxuXG5cbiAgICAgIHZhciBzdGF0ZVZhbHVlID0gX3RoaXMuc3RhdGUudmFsdWU7XG4gICAgICB2YXIgdmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlO1xuICAgICAgdmFyIGlucHV0ID0gZXZ0LnRhcmdldDtcbiAgICAgIHZhciBvcCA9IHZhbHVlLmxlbmd0aCA+IHN0YXRlVmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGRlbCA9IF90aGlzLl9kZWw7XG5cbiAgICAgIHZhciBub09wID0gc3RhdGVWYWx1ZSA9PT0gX3RoaXMucHJvcHMuZm9ybWF0KHZhbHVlKTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGxvY2FsOiB0cnVlXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxlY3Rpb25TdGFydCA9IGlucHV0LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICB2YXIgcmVmdXNlID0gX3RoaXMucHJvcHMucmVmdXNlIHx8IC9bXlxcZF0rL2c7XG4gICAgICAgIHZhciBiZWZvcmUgPSB2YWx1ZS5zdWJzdHIoMCwgc2VsZWN0aW9uU3RhcnQpLnJlcGxhY2UocmVmdXNlLCAnJyk7XG4gICAgICAgIF90aGlzLl9zdGF0ZSA9IHtcbiAgICAgICAgICBpbnB1dDogaW5wdXQsXG4gICAgICAgICAgYmVmb3JlOiBiZWZvcmUsXG4gICAgICAgICAgb3A6IG9wLFxuICAgICAgICAgIGRpOiBkZWwgJiYgbm9PcCxcbiAgICAgICAgICBkZWw6IGRlbFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5yZXBsYWNlICYmIF90aGlzLnByb3BzLnJlcGxhY2Uoc3RhdGVWYWx1ZSkgJiYgb3AgJiYgIW5vT3ApIHtcbiAgICAgICAgICB2YXIgc3RhcnQgPSAtMTtcblxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpICE9PSBiZWZvcmUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHN0YXJ0ID0gTWF0aC5tYXgoc3RhcnQsIHZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihiZWZvcmVbaV0udG9Mb3dlckNhc2UoKSwgc3RhcnQgKyAxKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGMgPSB2YWx1ZS5zdWJzdHIoc3RhcnQgKyAxKS5yZXBsYWNlKHJlZnVzZSwgJycpWzBdO1xuICAgICAgICAgIHN0YXJ0ID0gdmFsdWUuaW5kZXhPZihjLCBzdGFydCArIDEpO1xuICAgICAgICAgIHZhbHVlID0gXCJcIiArIHZhbHVlLnN1YnN0cigwLCBzdGFydCkgKyB2YWx1ZS5zdWJzdHIoc3RhcnQgKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmdiA9IF90aGlzLnByb3BzLmZvcm1hdCh2YWx1ZSk7XG5cbiAgICAgICAgaWYgKHN0YXRlVmFsdWUgPT09IGZ2KSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMucHJvcHMub25DaGFuZ2UoZnYpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX2hLRCA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGlmIChldnQuY29kZSA9PT0gJ0RlbGV0ZScpIHtcbiAgICAgICAgX3RoaXMuX2RlbCA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9oS1UgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZiAoZXZ0LmNvZGUgPT09ICdEZWxldGUnKSB7XG4gICAgICAgIF90aGlzLl9kZWwgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogcHJvcHMudmFsdWUsXG4gICAgICBsb2NhbDogdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgUmlmbS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBzdGF0ZS5sb2NhbCA/IHN0YXRlLnZhbHVlIDogcHJvcHMudmFsdWUsXG4gICAgICBsb2NhbDogZmFsc2VcbiAgICB9O1xuICB9O1xuXG4gIHZhciBfcHJvdG8gPSBSaWZtLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfaGFuZGxlQ2hhbmdlID0gdGhpcy5faGFuZGxlQ2hhbmdlLFxuICAgICAgICB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWUsXG4gICAgICAgIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICByZXR1cm4gY2hpbGRyZW4oe1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgb25DaGFuZ2U6IF9oYW5kbGVDaGFuZ2VcbiAgICB9KTtcbiAgfSAvLyBkZWxldGUgd2hlbiAgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0lucHV0RXZlbnQvaW5wdXRUeXBlIHdpbGwgYmUgc3VwcG9ydGVkIGJ5IGFsbCBtYWpvciBicm93c2Vyc1xuICA7XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hLRCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9oS1UpO1xuICB9IC8vIGRlbGV0ZSB3aGVuICBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSW5wdXRFdmVudC9pbnB1dFR5cGUgd2lsbCBiZSBzdXBwb3J0ZWQgYnkgYWxsIG1ham9yIGJyb3dzZXJzXG4gIDtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faEtEKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2hLVSk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB2YXIgX3N0YXRlID0gdGhpcy5fc3RhdGU7XG5cbiAgICBpZiAoX3N0YXRlKSB7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgICAgdmFyIHN0YXJ0ID0gLTE7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpICE9PSBfc3RhdGUuYmVmb3JlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHN0YXJ0ID0gTWF0aC5tYXgoc3RhcnQsIHZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihfc3RhdGUuYmVmb3JlW2ldLnRvTG93ZXJDYXNlKCksIHN0YXJ0ICsgMSkpO1xuICAgICAgfSAvLyBmb3JtYXQgdXN1YWxseSBsb29rcyBiZXR0ZXIgd2l0aG91dCB0aGlzXG5cblxuICAgICAgaWYgKHRoaXMucHJvcHMucmVwbGFjZSAmJiAoX3N0YXRlLm9wIHx8IF9zdGF0ZS5kZWwgJiYgIV9zdGF0ZS5kaSkpIHtcbiAgICAgICAgd2hpbGUgKHZhbHVlW3N0YXJ0ICsgMV0gJiYgKHRoaXMucHJvcHMucmVmdXNlIHx8IC9bXlxcZF0rLykudGVzdCh2YWx1ZVtzdGFydCArIDFdKSkge1xuICAgICAgICAgIHN0YXJ0ICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgX3N0YXRlLmlucHV0LnNlbGVjdGlvblN0YXJ0ID0gX3N0YXRlLmlucHV0LnNlbGVjdGlvbkVuZCA9IHN0YXJ0ICsgMSArIChfc3RhdGUuZGkgPyAxIDogMCk7XG4gICAgfVxuXG4gICAgdGhpcy5fc3RhdGUgPSBudWxsO1xuICB9O1xuXG4gIHJldHVybiBSaWZtO1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgeyBSaWZtIH07XG4iXSwic291cmNlUm9vdCI6IiJ9