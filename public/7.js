(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/@date-io/dayjs/build/index.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/@date-io/dayjs/build/index.esm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/customParseFormat */ "./node_modules/dayjs/plugin/customParseFormat.js");
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_advancedFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/advancedFormat */ "./node_modules/dayjs/plugin/advancedFormat.js");
/* harmony import */ var dayjs_plugin_advancedFormat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_advancedFormat__WEBPACK_IMPORTED_MODULE_2__);




dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.extend(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1___default.a);
dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.extend(dayjs_plugin_advancedFormat__WEBPACK_IMPORTED_MODULE_2___default.a);
var DayjsUtils = /** @class */ (function () {
    function DayjsUtils(_a) {
        var _b = _a === void 0 ? {} : _a, locale = _b.locale, instance = _b.instance, dayjs = _b.dayjs;
        this.yearFormat = "YYYY";
        this.yearMonthFormat = "MMMM YYYY";
        this.dateTime12hFormat = "MMMM Do hh:mm a";
        this.dateTime24hFormat = "MMMM Do HH:mm";
        this.time12hFormat = "hh:mm A";
        this.time24hFormat = "HH:mm";
        this.dateFormat = "MMMM Do";
        this.dayjs = instance || dayjs || dayjs__WEBPACK_IMPORTED_MODULE_0___default.a;
        this.locale = locale;
    }
    DayjsUtils.prototype.parse = function (value, format) {
        if (value === "") {
            return null;
        }
        return this.dayjs(value, format);
    };
    DayjsUtils.prototype.date = function (value) {
        if (value === null) {
            return null;
        }
        return this.dayjs(value);
    };
    DayjsUtils.prototype.isValid = function (value) {
        return this.dayjs(value).isValid();
    };
    DayjsUtils.prototype.isNull = function (date) {
        if (date === null) {
            return true;
        }
        return false;
    };
    DayjsUtils.prototype.getDiff = function (date, comparing, units, float) {
        return date.diff(comparing, units, float);
    };
    DayjsUtils.prototype.isAfter = function (date, value) {
        return date.isAfter(value);
    };
    DayjsUtils.prototype.isBefore = function (date, value) {
        return date.isBefore(value);
    };
    DayjsUtils.prototype.isAfterDay = function (date, value) {
        return date.isAfter(value, "day");
    };
    DayjsUtils.prototype.isBeforeDay = function (date, value) {
        return date.isBefore(value, "day");
    };
    DayjsUtils.prototype.isBeforeYear = function (date, value) {
        return date.isBefore(value, "year");
    };
    DayjsUtils.prototype.isAfterYear = function (date, value) {
        return date.isAfter(value, "year");
    };
    DayjsUtils.prototype.startOfDay = function (date) {
        return date.clone().startOf("day");
    };
    DayjsUtils.prototype.endOfDay = function (date) {
        return date.clone().endOf("day");
    };
    DayjsUtils.prototype.format = function (date, formatString) {
        date.locale(this.locale);
        return date.format(formatString);
    };
    DayjsUtils.prototype.formatNumber = function (numberToFormat) {
        return numberToFormat;
    };
    DayjsUtils.prototype.getHours = function (date) {
        return date.hour();
    };
    DayjsUtils.prototype.addDays = function (date, count) {
        return count < 0
            ? date.clone().subtract(Math.abs(count), "day")
            : date.clone().add(count, "day");
    };
    DayjsUtils.prototype.setMonth = function (date, count) {
        return date.clone().set("month", count);
    };
    DayjsUtils.prototype.setHours = function (date, count) {
        return date.clone().set("hour", count);
    };
    DayjsUtils.prototype.getMinutes = function (date) {
        return date.minute();
    };
    DayjsUtils.prototype.setMinutes = function (date, count) {
        return date.clone().set("minute", count);
    };
    DayjsUtils.prototype.getSeconds = function (date) {
        return date.second();
    };
    DayjsUtils.prototype.setSeconds = function (date, count) {
        return date.clone().set("second", count);
    };
    DayjsUtils.prototype.getMonth = function (date) {
        return date.month();
    };
    DayjsUtils.prototype.isSameDay = function (date, comparing) {
        return date.isSame(comparing, "day");
    };
    DayjsUtils.prototype.getMeridiemText = function (ampm) {
        return ampm === "am" ? "AM" : "PM";
    };
    DayjsUtils.prototype.startOfMonth = function (date) {
        return date.clone().startOf("month");
    };
    DayjsUtils.prototype.endOfMonth = function (date) {
        return date.clone().endOf("month");
    };
    DayjsUtils.prototype.getNextMonth = function (date) {
        return date.clone().add(1, "month");
    };
    DayjsUtils.prototype.getPreviousMonth = function (date) {
        return date.clone().subtract(1, "month");
    };
    DayjsUtils.prototype.getMonthArray = function (date) {
        var firstMonth = date.clone().startOf("year");
        var monthArray = [firstMonth];
        while (monthArray.length < 12) {
            var prevMonth = monthArray[monthArray.length - 1];
            monthArray.push(this.getNextMonth(prevMonth));
        }
        return monthArray;
    };
    DayjsUtils.prototype.getMonthText = function (date) {
        return this.format(date, "MMMM");
    };
    DayjsUtils.prototype.getYear = function (date) {
        return date.year();
    };
    DayjsUtils.prototype.setYear = function (date, year) {
        return date.clone().set("year", year);
    };
    DayjsUtils.prototype.mergeDateAndTime = function (date, time) {
        return this.setMinutes(this.setHours(date, this.getHours(time)), this.getMinutes(time));
    };
    DayjsUtils.prototype.getWeekdays = function () {
        var _this = this;
        return [0, 1, 2, 3, 4, 5, 6].map(function (dayOfWeek) {
            return _this.format(_this.dayjs().set("day", dayOfWeek), "dd");
        });
    };
    DayjsUtils.prototype.isEqual = function (value, comparing) {
        if (value === null && comparing === null) {
            return true;
        }
        return this.dayjs(value).isSame(comparing);
    };
    DayjsUtils.prototype.getWeekArray = function (date) {
        var start = date
            .clone()
            .startOf("month")
            .startOf("week");
        var end = date
            .clone()
            .endOf("month")
            .endOf("week");
        var count = 0;
        var current = start;
        var nestedWeeks = [];
        while (current.isBefore(end)) {
            var weekNumber = Math.floor(count / 7);
            nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
            nestedWeeks[weekNumber].push(current);
            current = current.clone().add(1, "day");
            count += 1;
        }
        return nestedWeeks;
    };
    DayjsUtils.prototype.getYearRange = function (start, end) {
        var startDate = this.dayjs(start).startOf("year");
        var endDate = this.dayjs(end).endOf("year");
        var years = [];
        var current = startDate;
        while (current.isBefore(endDate)) {
            years.push(current);
            current = current.clone().add(1, "year");
        }
        return years;
    };
    // displaying methods
    DayjsUtils.prototype.getCalendarHeaderText = function (date) {
        return this.format(date, "MMMM YYYY");
    };
    DayjsUtils.prototype.getYearText = function (date) {
        return this.format(date, "YYYY");
    };
    DayjsUtils.prototype.getDatePickerHeaderText = function (date) {
        return this.format(date, "ddd, MMM D");
    };
    DayjsUtils.prototype.getDateTimePickerHeaderText = function (date) {
        return this.format(date, "MMM D");
    };
    DayjsUtils.prototype.getDayText = function (date) {
        return this.format(date, "D");
    };
    DayjsUtils.prototype.getHourText = function (date, ampm) {
        return this.format(date, ampm ? "hh" : "HH");
    };
    DayjsUtils.prototype.getMinuteText = function (date) {
        return this.format(date, "mm");
    };
    DayjsUtils.prototype.getSecondText = function (date) {
        return this.format(date, "ss");
    };
    return DayjsUtils;
}());

/* harmony default export */ __webpack_exports__["default"] = (DayjsUtils);


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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Wrapper-241966d7.js */ "./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/inherits.js");
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
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/inherits.js");










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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/inherits.js");
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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Picker_0912c402_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Picker-0912c402.js */ "./node_modules/@material-ui/pickers/esm/Picker-0912c402.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/inherits.js");
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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Picker_0912c402_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Picker-0912c402.js */ "./node_modules/@material-ui/pickers/esm/Picker-0912c402.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/inherits.js");
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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Wrapper-241966d7.js */ "./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js");
/* harmony import */ var _Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Calendar-11ae61f6.js */ "./node_modules/@material-ui/pickers/esm/Calendar-11ae61f6.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Picker_0912c402_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Picker-0912c402.js */ "./node_modules/@material-ui/pickers/esm/Picker-0912c402.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/inherits.js");
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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MuiPickersContext", function() { return _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MuiPickersUtilsProvider", function() { return _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["M"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUtils", function() { return _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["u"]; });

/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Picker_0912c402_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Picker-0912c402.js */ "./node_modules/@material-ui/pickers/esm/Picker-0912c402.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _Picker_0912c402_js__WEBPACK_IMPORTED_MODULE_21__["P"]; });

/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/inherits.js");
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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
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

/***/ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
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

/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*****************************************************************************************************/
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

/***/ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

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

/***/ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \***********************************************************************************************************/
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

/***/ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*****************************************************************************************************/
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

/***/ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_class_addClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/class/addClass */ "./node_modules/dom-helpers/class/addClass.js");
/* harmony import */ var dom_helpers_class_addClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_class_addClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dom_helpers_class_removeClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/class/removeClass */ "./node_modules/dom-helpers/class/removeClass.js");
/* harmony import */ var dom_helpers_class_removeClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_class_removeClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Transition */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/esm/utils/PropTypes.js");










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return dom_helpers_class_addClass__WEBPACK_IMPORTED_MODULE_4___default()(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return dom_helpers_class_removeClass__WEBPACK_IMPORTED_MODULE_5___default()(node, c);
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
   * The animation classNames applied to the component as it enters, exits or
   * has finished the transition. A single name can be provided and it will be
   * suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-enter`, `fade-enter-active`,
   * `fade-enter-done`, `fade-exit`, `fade-exit-active`, `fade-exit-done`,
   * `fade-appear`, `fade-appear-active`, and `fade-appear-done`.
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
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"]
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
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
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
    if (this.props[handler]) this.props[handler](Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["findDOMNode"])(this));
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
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
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
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
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
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_2__["func"].isRequired, prop_types__WEBPACK_IMPORTED_MODULE_2__["element"].isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],

  /**
   * Enable or disable enter transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],

  /**
   * Enable or disable exit transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],

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
  addEndListener: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"] // Name the function so it is clearer in the documentation

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
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
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

/***/ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
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

/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

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

/***/ "./node_modules/dayjs/plugin/advancedFormat.js":
/*!*****************************************************!*\
  !*** ./node_modules/dayjs/plugin/advancedFormat.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";return function(e,t,r){var n=t.prototype,o=n.format;r.en.ordinal=function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"},n.format=function(e){var t=this,r=this.$locale(),n=this.$utils(),i=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|gggg|Do|X|x|k{1,2}|S/g,function(e){switch(e){case"Q":return Math.ceil((t.$M+1)/3);case"Do":return r.ordinal(t.$D);case"gggg":return t.weekYear();case"wo":return r.ordinal(t.week(),"W");case"k":case"kk":return n.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case"X":return Math.floor(t.$d.getTime()/1e3);case"x":return t.$d.getTime();default:return e}});return o.bind(this)(i)}}});


/***/ }),

/***/ "./node_modules/dayjs/plugin/customParseFormat.js":
/*!********************************************************!*\
  !*** ./node_modules/dayjs/plugin/customParseFormat.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():undefined}(this,function(){"use strict";var t,n=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,e=/\d\d/,r=/\d\d?/,o=/\d*[^\s\d-:/.()]+/;var s=function(t){return function(n){this[t]=+n}},i=[/[+-]\d\d:?\d\d/,function(t){var n,e;(this.zone||(this.zone={})).offset=(n=t.match(/([+-]|\d\d)/g),0===(e=60*n[1]+ +n[2])?0:"+"===n[0]?-e:e)}],a={A:[/[AP]M/,function(t){this.afternoon="PM"===t}],a:[/[ap]m/,function(t){this.afternoon="pm"===t}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[e,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[e,s("day")],Do:[o,function(n){var e=t.ordinal,r=n.match(/\d+/);if(this.day=r[0],e)for(var o=1;o<=31;o+=1)e(o).replace(/\[|\]/g,"")===n&&(this.day=o)}],M:[r,s("month")],MM:[e,s("month")],MMM:[o,function(n){var e=t,r=e.months,o=e.monthsShort,s=o?o.findIndex(function(t){return t===n}):r.findIndex(function(t){return t.substr(0,3)===n});if(s<0)throw new Error;this.month=s+1}],MMMM:[o,function(n){var e=t.months.indexOf(n);if(e<0)throw new Error;this.month=e+1}],Y:[/[+-]?\d+/,s("year")],YY:[e,function(t){t=+t,this.year=t+(t>68?1900:2e3)}],YYYY:[/\d{4}/,s("year")],Z:i,ZZ:i};var u=function(t,e,r){try{var o=function(t){for(var e=t.match(n),r=e.length,o=0;o<r;o+=1){var s=e[o],i=a[s],u=i&&i[0],f=i&&i[1];e[o]=f?{regex:u,parser:f}:s.replace(/^\[|\]$/g,"")}return function(t){for(var n={},o=0,s=0;o<r;o+=1){var i=e[o];if("string"==typeof i)s+=i.length;else{var a=i.regex,u=i.parser,f=t.substr(s),h=a.exec(f)[0];u.call(n,h),t=t.replace(h,"")}}return function(t){var n=t.afternoon;if(void 0!==n){var e=t.hours;n?e<12&&(t.hours+=12):12===e&&(t.hours=0),delete t.afternoon}}(n),n}}(e)(t),s=o.year,i=o.month,u=o.day,f=o.hours,h=o.minutes,d=o.seconds,c=o.milliseconds,m=o.zone;if(m)return new Date(Date.UTC(s,i-1,u,f||0,h||0,d||0,c||0)+60*m.offset*1e3);var l=new Date,v=s||l.getFullYear(),p=i>0?i-1:l.getMonth(),M=u||l.getDate(),y=f||0,D=h||0,Y=d||0,g=c||0;return r?new Date(Date.UTC(v,p,M,y,D,Y,g)):new Date(v,p,M,y,D,Y,g)}catch(t){return new Date("")}};return function(n,e,r){var o=e.prototype,s=o.parse;o.parse=function(n){var e=n.date,o=n.format,i=n.pl,a=n.utc;this.$u=a,o?(t=i?r.Ls[i]:this.$locale(),this.$d=u(e,o,a),this.init(n)):s.call(this,n)}}});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRhdGUtaW8vZGF5anMvYnVpbGQvaW5kZXguZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvcGlja2Vycy9lc20vQ2FsZW5kYXItMTFhZTYxZjYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL2VzbS9DbG9jay0xM2M4ZjMzZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvZXNtL0Nsb2NrVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvZXNtL0RhdGVQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL2VzbS9EYXRlVGltZVBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvZXNtL0RheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvZXNtL1BpY2tlci0wOTEyYzQwMi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvZXNtL1RpbWVQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL2VzbS9UaW1lUGlja2VyVG9vbGJhci0wNTY0NmY3Ni5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvZXNtL1dyYXBwZXItMjQxOTY2ZDcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvZXNtL21ha2VQaWNrZXJXaXRoU3RhdGUtZmVlMzk3NjUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL2VzbS91c2VVdGlscy1jZmI5NmFjOS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvcGlja2Vycy9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvcGlja2Vycy9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvcGlja2Vycy9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvcGlja2Vycy9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvcGlja2Vycy9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9DU1NUcmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvcGlja2Vycy9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vUmVwbGFjZVRyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9Td2l0Y2hUcmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvcGlja2Vycy9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vVHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL1RyYW5zaXRpb25Hcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL1RyYW5zaXRpb25Hcm91cENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL3V0aWxzL0NoaWxkTWFwcGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL3V0aWxzL1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvcGlja2Vycy9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvcGlja2Vycy9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXlqcy9wbHVnaW4vYWR2YW5jZWRGb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi9jdXN0b21QYXJzZUZvcm1hdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUM7QUFDOEI7QUFDTjs7QUFFekQsNENBQVksUUFBUSxxRUFBaUI7QUFDckMsNENBQVksUUFBUSxrRUFBYztBQUNsQztBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDRDQUFZO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFYyx5RUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDdE4xQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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Q0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhEQUFhO0FBQ25CO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDJEQUFhO0FBQzVCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDJEQUFhLENBQUMsZ0RBQUc7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLDJEQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUEsRUFBRSx1RkFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxLQUFxQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sS0FBcUMsNEZBQTRGLFNBQU07QUFDN0k7QUFDQTs7QUFFQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnQ0FBZ0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDOWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxJQUFxQztBQUN6QyxnQkFBZ0IsbUJBQU8sQ0FBQyxrREFBVTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFPLENBQUMsNkpBQTJCO0FBQ3RELENBQUMsTUFBTSxFQUlOOzs7Ozs7Ozs7Ozs7O0FDbEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjs7QUFFQTs7Ozs7Ozs7Ozs7O0FDWEEsZUFBZSxLQUFvRCxvQkFBb0IsU0FBaUYsQ0FBQyxpQkFBaUIsYUFBYSx1QkFBdUIsNkJBQTZCLHlCQUF5QixvQ0FBb0MsMkNBQTJDLHNCQUFzQixrSEFBa0gsSUFBSSxpQkFBaUIsVUFBVSxxQ0FBcUMsZ0NBQWdDLCtCQUErQix3Q0FBd0Msc0VBQXNFLDhDQUE4Qyw4QkFBOEIsa0JBQWtCLEVBQUUseUJBQXlCOzs7Ozs7Ozs7Ozs7QUNBcjFCLGVBQWUsS0FBb0Qsb0JBQW9CLFNBQW9GLENBQUMsaUJBQWlCLGFBQWEsa0ZBQWtGLElBQUksbURBQW1ELGtCQUFrQixtQkFBbUIsWUFBWSxpQ0FBaUMsUUFBUSx5QkFBeUIsK0VBQStFLEtBQUssdUJBQXVCLHdCQUF3Qix5QkFBeUIsd0JBQXdCLHNCQUFzQix5QkFBeUIsb0JBQW9CLHdCQUF3QixXQUFXLEVBQUUsY0FBYyxxQkFBcUIsdU1BQXVNLGlDQUFpQywrQkFBK0IsTUFBTSxpREFBaUQsd0RBQXdELCtEQUErRCxhQUFhLDBCQUEwQix5QkFBeUIsRUFBRSx1QkFBdUIsZUFBZSxzQkFBc0IsMEJBQTBCLHVCQUF1QixlQUFlLDZDQUE2QyxpQ0FBaUMsWUFBWSxFQUFFLHVCQUF1QixzQkFBc0IsSUFBSSxrQkFBa0Isb0NBQW9DLElBQUksTUFBTSxzQ0FBc0MsUUFBUSxpQkFBaUIsMEJBQTBCLG1CQUFtQixZQUFZLFNBQVMsSUFBSSxNQUFNLFdBQVcsa0NBQWtDLEtBQUssc0RBQXNELCtCQUErQixtQkFBbUIsa0JBQWtCLGVBQWUsY0FBYyw4REFBOEQsT0FBTyw4RkFBOEYsNEVBQTRFLHdHQUF3RyxtRUFBbUUsU0FBUyxzQkFBc0IsdUJBQXVCLDRCQUE0QixvQkFBb0IsdUNBQXVDLHdGQUF3RiIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlZmF1bHREYXlqcyBmcm9tICdkYXlqcyc7XG5pbXBvcnQgY3VzdG9tUGFyc2VGb3JtYXQgZnJvbSAnZGF5anMvcGx1Z2luL2N1c3RvbVBhcnNlRm9ybWF0JztcbmltcG9ydCBhZHZhbmNlZEZvcm1hdCBmcm9tICdkYXlqcy9wbHVnaW4vYWR2YW5jZWRGb3JtYXQnO1xuXG5kZWZhdWx0RGF5anMuZXh0ZW5kKGN1c3RvbVBhcnNlRm9ybWF0KTtcbmRlZmF1bHREYXlqcy5leHRlbmQoYWR2YW5jZWRGb3JtYXQpO1xudmFyIERheWpzVXRpbHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGF5anNVdGlscyhfYSkge1xuICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgbG9jYWxlID0gX2IubG9jYWxlLCBpbnN0YW5jZSA9IF9iLmluc3RhbmNlLCBkYXlqcyA9IF9iLmRheWpzO1xuICAgICAgICB0aGlzLnllYXJGb3JtYXQgPSBcIllZWVlcIjtcbiAgICAgICAgdGhpcy55ZWFyTW9udGhGb3JtYXQgPSBcIk1NTU0gWVlZWVwiO1xuICAgICAgICB0aGlzLmRhdGVUaW1lMTJoRm9ybWF0ID0gXCJNTU1NIERvIGhoOm1tIGFcIjtcbiAgICAgICAgdGhpcy5kYXRlVGltZTI0aEZvcm1hdCA9IFwiTU1NTSBEbyBISDptbVwiO1xuICAgICAgICB0aGlzLnRpbWUxMmhGb3JtYXQgPSBcImhoOm1tIEFcIjtcbiAgICAgICAgdGhpcy50aW1lMjRoRm9ybWF0ID0gXCJISDptbVwiO1xuICAgICAgICB0aGlzLmRhdGVGb3JtYXQgPSBcIk1NTU0gRG9cIjtcbiAgICAgICAgdGhpcy5kYXlqcyA9IGluc3RhbmNlIHx8IGRheWpzIHx8IGRlZmF1bHREYXlqcztcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgfVxuICAgIERheWpzVXRpbHMucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKHZhbHVlLCBmb3JtYXQpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kYXlqcyh2YWx1ZSwgZm9ybWF0KTtcbiAgICB9O1xuICAgIERheWpzVXRpbHMucHJvdG90eXBlLmRhdGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kYXlqcyh2YWx1ZSk7XG4gICAgfTtcbiAgICBEYXlqc1V0aWxzLnByb3RvdHlwZS5pc1ZhbGlkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRheWpzKHZhbHVlKS5pc1ZhbGlkKCk7XG4gICAgfTtcbiAgICBEYXlqc1V0aWxzLnByb3RvdHlwZS5pc051bGwgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICBpZiAoZGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgRGF5anNVdGlscy5wcm90b3R5cGUuZ2V0RGlmZiA9IGZ1bmN0aW9uIChkYXRlLCBjb21wYXJpbmcsIHVuaXRzLCBmbG9hdCkge1xuICAgICAgICByZXR1cm4gZGF0ZS5kaWZmKGNvbXBhcmluZywgdW5pdHMsIGZsb2F0KTtcbiAgICB9O1xuICAgIERheWpzVXRpbHMucHJvdG90eXBlLmlzQWZ0ZXIgPSBmdW5jdGlvbiAoZGF0ZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGUuaXNBZnRlcih2YWx1ZSk7XG4gICAgfTtcbiAgICBEYXlqc1V0aWxzLnByb3RvdHlwZS5pc0JlZm9yZSA9IGZ1bmN0aW9uIChkYXRlLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZGF0ZS5pc0JlZm9yZSh2YWx1ZSk7XG4gICAgfTtcbiAgICBEYXlqc1V0aWxzLnByb3RvdHlwZS5pc0FmdGVyRGF5ID0gZnVuY3Rpb24gKGRhdGUsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBkYXRlLmlzQWZ0ZXIodmFsdWUsIFwiZGF5XCIpO1xuICAgIH07XG4gICAgRGF5anNVdGlscy5wcm90b3R5cGUuaXNCZWZvcmVEYXkgPSBmdW5jdGlvbiAoZGF0ZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGUuaXNCZWZvcmUodmFsdWUsIFwiZGF5XCIpO1xuICAgIH07XG4gICAgRGF5anNVdGlscy5wcm90b3R5cGUuaXNCZWZvcmVZZWFyID0gZnVuY3Rpb24gKGRhdGUsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBkYXRlLmlzQmVmb3JlKHZhbHVlLCBcInllYXJcIik7XG4gICAgfTtcbiAgICBEYXlqc1V0aWxzLnByb3RvdHlwZS5pc0FmdGVyWWVhciA9IGZ1bmN0aW9uIChkYXRlLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZGF0ZS5pc0FmdGVyKHZhbHVlLCBcInllYXJcIik7XG4gICAgfTtcbiAgICBEYXlqc1V0aWxzLnByb3RvdHlwZS5zdGFydE9mRGF5ID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGUuY2xvbmUoKS5zdGFydE9mKFwiZGF5XCIpO1xuICAgIH07XG4gICAgRGF5anNVdGlscy5wcm90b3R5cGUuZW5kT2ZEYXkgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICByZXR1cm4gZGF0ZS5jbG9uZSgpLmVuZE9mKFwiZGF5XCIpO1xuICAgIH07XG4gICAgRGF5anNVdGlscy5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24gKGRhdGUsIGZvcm1hdFN0cmluZykge1xuICAgICAgICBkYXRlLmxvY2FsZSh0aGlzLmxvY2FsZSk7XG4gICAgICAgIHJldHVybiBkYXRlLmZvcm1hdChmb3JtYXRTdHJpbmcpO1xuICAgIH07XG4gICAgRGF5anNVdGlscy5wcm90b3R5cGUuZm9ybWF0TnVtYmVyID0gZnVuY3Rpb24gKG51bWJlclRvRm9ybWF0KSB7XG4gICAgICAgIHJldHVybiBudW1iZXJUb0Zvcm1hdDtcbiAgICB9O1xuICAgIERheWpzVXRpbHMucHJvdG90eXBlLmdldEhvdXJzID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGUuaG91cigpO1xuICAgIH07XG4gICAgRGF5anNVdGlscy5wcm90b3R5cGUuYWRkRGF5cyA9IGZ1bmN0aW9uIChkYXRlLCBjb3VudCkge1xuICAgICAgICByZXR1cm4gY291bnQgPCAwXG4gICAgICAgICAgICA/IGRhdGUuY2xvbmUoKS5zdWJ0cmFjdChNYXRoLmFicyhjb3VudCksIFwiZGF5XCIpXG4gICAgICAgICAgICA6IGRhdGUuY2xvbmUoKS5hZGQoY291bnQsIFwiZGF5XCIpO1xuICAgIH07XG4gICAgRGF5anNVdGlscy5wcm90b3R5cGUuc2V0TW9udGggPSBmdW5jdGlvbiAoZGF0ZSwgY291bnQpIHtcbiAgICAgICAgcmV0dXJuIGRhdGUuY2xvbmUoKS5zZXQoXCJtb250aFwiLCBjb3VudCk7XG4gICAgfTtcbiAgICBEYXlqc1V0aWxzLnByb3RvdHlwZS5zZXRIb3VycyA9IGZ1bmN0aW9uIChkYXRlLCBjb3VudCkge1xuICAgICAgICByZXR1cm4gZGF0ZS5jbG9uZSgpLnNldChcImhvdXJcIiwgY291bnQpO1xuICAgIH07XG4gICAgRGF5anNVdGlscy5wcm90b3R5cGUuZ2V0TWludXRlcyA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgIHJldHVybiBkYXRlLm1pbnV0ZSgpO1xuICAgIH07XG4gICAgRGF5anNVdGlscy5wcm90b3R5cGUuc2V0TWludXRlcyA9IGZ1bmN0aW9uIChkYXRlLCBjb3VudCkge1xuICAgICAgICByZXR1cm4gZGF0ZS5jbG9uZSgpLnNldChcIm1pbnV0ZVwiLCBjb3VudCk7XG4gICAgfTtcbiAgICBEYXlqc1V0aWxzLnByb3RvdHlwZS5nZXRTZWNvbmRzID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGUuc2Vjb25kKCk7XG4gICAgfTtcbiAgICBEYXlqc1V0aWxzLnByb3RvdHlwZS5zZXRTZWNvbmRzID0gZnVuY3Rpb24gKGRhdGUsIGNvdW50KSB7XG4gICAgICAgIHJldHVybiBkYXRlLmNsb25lKCkuc2V0KFwic2Vjb25kXCIsIGNvdW50KTtcbiAgICB9O1xuICAgIERheWpzVXRpbHMucHJvdG90eXBlLmdldE1vbnRoID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGUubW9udGgoKTtcbiAgICB9O1xuICAgIERheWpzVXRpbHMucHJvdG90eXBlLmlzU2FtZURheSA9IGZ1bmN0aW9uIChkYXRlLCBjb21wYXJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGRhdGUuaXNTYW1lKGNvbXBhcmluZywgXCJkYXlcIik7XG4gICAgfTtcbiAgICBEYXlqc1V0aWxzLnByb3RvdHlwZS5nZXRNZXJpZGllbVRleHQgPSBmdW5jdGlvbiAoYW1wbSkge1xuICAgICAgICByZXR1cm4gYW1wbSA9PT0gXCJhbVwiID8gXCJBTVwiIDogXCJQTVwiO1xuICAgIH07XG4gICAgRGF5anNVdGlscy5wcm90b3R5cGUuc3RhcnRPZk1vbnRoID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGUuY2xvbmUoKS5zdGFydE9mKFwibW9udGhcIik7XG4gICAgfTtcbiAgICBEYXlqc1V0aWxzLnByb3RvdHlwZS5lbmRPZk1vbnRoID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGUuY2xvbmUoKS5lbmRPZihcIm1vbnRoXCIpO1xuICAgIH07XG4gICAgRGF5anNVdGlscy5wcm90b3R5cGUuZ2V0TmV4dE1vbnRoID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGUuY2xvbmUoKS5hZGQoMSwgXCJtb250aFwiKTtcbiAgICB9O1xuICAgIERheWpzVXRpbHMucHJvdG90eXBlLmdldFByZXZpb3VzTW9udGggPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICByZXR1cm4gZGF0ZS5jbG9uZSgpLnN1YnRyYWN0KDEsIFwibW9udGhcIik7XG4gICAgfTtcbiAgICBEYXlqc1V0aWxzLnByb3RvdHlwZS5nZXRNb250aEFycmF5ID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgdmFyIGZpcnN0TW9udGggPSBkYXRlLmNsb25lKCkuc3RhcnRPZihcInllYXJcIik7XG4gICAgICAgIHZhciBtb250aEFycmF5ID0gW2ZpcnN0TW9udGhdO1xuICAgICAgICB3aGlsZSAobW9udGhBcnJheS5sZW5ndGggPCAxMikge1xuICAgICAgICAgICAgdmFyIHByZXZNb250aCA9IG1vbnRoQXJyYXlbbW9udGhBcnJheS5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIG1vbnRoQXJyYXkucHVzaCh0aGlzLmdldE5leHRNb250aChwcmV2TW9udGgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW9udGhBcnJheTtcbiAgICB9O1xuICAgIERheWpzVXRpbHMucHJvdG90eXBlLmdldE1vbnRoVGV4dCA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdChkYXRlLCBcIk1NTU1cIik7XG4gICAgfTtcbiAgICBEYXlqc1V0aWxzLnByb3RvdHlwZS5nZXRZZWFyID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGUueWVhcigpO1xuICAgIH07XG4gICAgRGF5anNVdGlscy5wcm90b3R5cGUuc2V0WWVhciA9IGZ1bmN0aW9uIChkYXRlLCB5ZWFyKSB7XG4gICAgICAgIHJldHVybiBkYXRlLmNsb25lKCkuc2V0KFwieWVhclwiLCB5ZWFyKTtcbiAgICB9O1xuICAgIERheWpzVXRpbHMucHJvdG90eXBlLm1lcmdlRGF0ZUFuZFRpbWUgPSBmdW5jdGlvbiAoZGF0ZSwgdGltZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRNaW51dGVzKHRoaXMuc2V0SG91cnMoZGF0ZSwgdGhpcy5nZXRIb3Vycyh0aW1lKSksIHRoaXMuZ2V0TWludXRlcyh0aW1lKSk7XG4gICAgfTtcbiAgICBEYXlqc1V0aWxzLnByb3RvdHlwZS5nZXRXZWVrZGF5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIFswLCAxLCAyLCAzLCA0LCA1LCA2XS5tYXAoZnVuY3Rpb24gKGRheU9mV2Vlaykge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmZvcm1hdChfdGhpcy5kYXlqcygpLnNldChcImRheVwiLCBkYXlPZldlZWspLCBcImRkXCIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIERheWpzVXRpbHMucHJvdG90eXBlLmlzRXF1YWwgPSBmdW5jdGlvbiAodmFsdWUsIGNvbXBhcmluZykge1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgJiYgY29tcGFyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kYXlqcyh2YWx1ZSkuaXNTYW1lKGNvbXBhcmluZyk7XG4gICAgfTtcbiAgICBEYXlqc1V0aWxzLnByb3RvdHlwZS5nZXRXZWVrQXJyYXkgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICB2YXIgc3RhcnQgPSBkYXRlXG4gICAgICAgICAgICAuY2xvbmUoKVxuICAgICAgICAgICAgLnN0YXJ0T2YoXCJtb250aFwiKVxuICAgICAgICAgICAgLnN0YXJ0T2YoXCJ3ZWVrXCIpO1xuICAgICAgICB2YXIgZW5kID0gZGF0ZVxuICAgICAgICAgICAgLmNsb25lKClcbiAgICAgICAgICAgIC5lbmRPZihcIm1vbnRoXCIpXG4gICAgICAgICAgICAuZW5kT2YoXCJ3ZWVrXCIpO1xuICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICB2YXIgY3VycmVudCA9IHN0YXJ0O1xuICAgICAgICB2YXIgbmVzdGVkV2Vla3MgPSBbXTtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnQuaXNCZWZvcmUoZW5kKSkge1xuICAgICAgICAgICAgdmFyIHdlZWtOdW1iZXIgPSBNYXRoLmZsb29yKGNvdW50IC8gNyk7XG4gICAgICAgICAgICBuZXN0ZWRXZWVrc1t3ZWVrTnVtYmVyXSA9IG5lc3RlZFdlZWtzW3dlZWtOdW1iZXJdIHx8IFtdO1xuICAgICAgICAgICAgbmVzdGVkV2Vla3Nbd2Vla051bWJlcl0ucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LmNsb25lKCkuYWRkKDEsIFwiZGF5XCIpO1xuICAgICAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmVzdGVkV2Vla3M7XG4gICAgfTtcbiAgICBEYXlqc1V0aWxzLnByb3RvdHlwZS5nZXRZZWFyUmFuZ2UgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xuICAgICAgICB2YXIgc3RhcnREYXRlID0gdGhpcy5kYXlqcyhzdGFydCkuc3RhcnRPZihcInllYXJcIik7XG4gICAgICAgIHZhciBlbmREYXRlID0gdGhpcy5kYXlqcyhlbmQpLmVuZE9mKFwieWVhclwiKTtcbiAgICAgICAgdmFyIHllYXJzID0gW107XG4gICAgICAgIHZhciBjdXJyZW50ID0gc3RhcnREYXRlO1xuICAgICAgICB3aGlsZSAoY3VycmVudC5pc0JlZm9yZShlbmREYXRlKSkge1xuICAgICAgICAgICAgeWVhcnMucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LmNsb25lKCkuYWRkKDEsIFwieWVhclwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geWVhcnM7XG4gICAgfTtcbiAgICAvLyBkaXNwbGF5aW5nIG1ldGhvZHNcbiAgICBEYXlqc1V0aWxzLnByb3RvdHlwZS5nZXRDYWxlbmRhckhlYWRlclRleHQgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXQoZGF0ZSwgXCJNTU1NIFlZWVlcIik7XG4gICAgfTtcbiAgICBEYXlqc1V0aWxzLnByb3RvdHlwZS5nZXRZZWFyVGV4dCA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdChkYXRlLCBcIllZWVlcIik7XG4gICAgfTtcbiAgICBEYXlqc1V0aWxzLnByb3RvdHlwZS5nZXREYXRlUGlja2VySGVhZGVyVGV4dCA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdChkYXRlLCBcImRkZCwgTU1NIERcIik7XG4gICAgfTtcbiAgICBEYXlqc1V0aWxzLnByb3RvdHlwZS5nZXREYXRlVGltZVBpY2tlckhlYWRlclRleHQgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXQoZGF0ZSwgXCJNTU0gRFwiKTtcbiAgICB9O1xuICAgIERheWpzVXRpbHMucHJvdG90eXBlLmdldERheVRleHQgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXQoZGF0ZSwgXCJEXCIpO1xuICAgIH07XG4gICAgRGF5anNVdGlscy5wcm90b3R5cGUuZ2V0SG91clRleHQgPSBmdW5jdGlvbiAoZGF0ZSwgYW1wbSkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXQoZGF0ZSwgYW1wbSA/IFwiaGhcIiA6IFwiSEhcIik7XG4gICAgfTtcbiAgICBEYXlqc1V0aWxzLnByb3RvdHlwZS5nZXRNaW51dGVUZXh0ID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0KGRhdGUsIFwibW1cIik7XG4gICAgfTtcbiAgICBEYXlqc1V0aWxzLnByb3RvdHlwZS5nZXRTZWNvbmRUZXh0ID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0KGRhdGUsIFwic3NcIik7XG4gICAgfTtcbiAgICByZXR1cm4gRGF5anNVdGlscztcbn0oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IERheWpzVXRpbHM7XG4iLCJpbXBvcnQgUmVhY3RfX2RlZmF1bHQsIHsgdXNlQ2FsbGJhY2ssIGNyZWF0ZUVsZW1lbnQsIGNsb25lRWxlbWVudCwgRnJhZ21lbnQsIENvbXBvbmVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm9kZSwgYm9vbCwgZnVuYyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdSBhcyB1c2VVdGlscyB9IGZyb20gJy4vdXNlVXRpbHMtY2ZiOTZhYzkuanMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUsIHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgYSBhcyBhcnJheUluY2x1ZGVzLCByIGFzIHJ1bktleUhhbmRsZXIsIFYgYXMgVmFyaWFudENvbnRleHQgfSBmcm9tICcuL1dyYXBwZXItMjQxOTY2ZDcuanMnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdmdJY29uJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2dldFByb3RvdHlwZU9mIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMnO1xuaW1wb3J0IERheSBmcm9tICcuL0RheS5qcyc7XG5pbXBvcnQgeyBUcmFuc2l0aW9uR3JvdXAsIENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuXG52YXIgZmluZENsb3Nlc3RFbmFibGVkRGF0ZSA9IGZ1bmN0aW9uIGZpbmRDbG9zZXN0RW5hYmxlZERhdGUoX3JlZikge1xuICB2YXIgZGF0ZSA9IF9yZWYuZGF0ZSxcbiAgICAgIHV0aWxzID0gX3JlZi51dGlscyxcbiAgICAgIG1pbkRhdGUgPSBfcmVmLm1pbkRhdGUsXG4gICAgICBtYXhEYXRlID0gX3JlZi5tYXhEYXRlLFxuICAgICAgZGlzYWJsZUZ1dHVyZSA9IF9yZWYuZGlzYWJsZUZ1dHVyZSxcbiAgICAgIGRpc2FibGVQYXN0ID0gX3JlZi5kaXNhYmxlUGFzdCxcbiAgICAgIHNob3VsZERpc2FibGVEYXRlID0gX3JlZi5zaG91bGREaXNhYmxlRGF0ZTtcbiAgdmFyIHRvZGF5ID0gdXRpbHMuc3RhcnRPZkRheSh1dGlscy5kYXRlKCkpO1xuXG4gIGlmIChkaXNhYmxlUGFzdCAmJiB1dGlscy5pc0JlZm9yZShtaW5EYXRlLCB0b2RheSkpIHtcbiAgICBtaW5EYXRlID0gdG9kYXk7XG4gIH1cblxuICBpZiAoZGlzYWJsZUZ1dHVyZSAmJiB1dGlscy5pc0FmdGVyKG1heERhdGUsIHRvZGF5KSkge1xuICAgIG1heERhdGUgPSB0b2RheTtcbiAgfVxuXG4gIHZhciBmb3J3YXJkID0gZGF0ZTtcbiAgdmFyIGJhY2t3YXJkID0gZGF0ZTtcblxuICBpZiAodXRpbHMuaXNCZWZvcmUoZGF0ZSwgbWluRGF0ZSkpIHtcbiAgICBmb3J3YXJkID0gdXRpbHMuZGF0ZShtaW5EYXRlKTtcbiAgICBiYWNrd2FyZCA9IG51bGw7XG4gIH1cblxuICBpZiAodXRpbHMuaXNBZnRlcihkYXRlLCBtYXhEYXRlKSkge1xuICAgIGlmIChiYWNrd2FyZCkge1xuICAgICAgYmFja3dhcmQgPSB1dGlscy5kYXRlKG1heERhdGUpO1xuICAgIH1cblxuICAgIGZvcndhcmQgPSBudWxsO1xuICB9XG5cbiAgd2hpbGUgKGZvcndhcmQgfHwgYmFja3dhcmQpIHtcbiAgICBpZiAoZm9yd2FyZCAmJiB1dGlscy5pc0FmdGVyKGZvcndhcmQsIG1heERhdGUpKSB7XG4gICAgICBmb3J3YXJkID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoYmFja3dhcmQgJiYgdXRpbHMuaXNCZWZvcmUoYmFja3dhcmQsIG1pbkRhdGUpKSB7XG4gICAgICBiYWNrd2FyZCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGZvcndhcmQpIHtcbiAgICAgIGlmICghc2hvdWxkRGlzYWJsZURhdGUoZm9yd2FyZCkpIHtcbiAgICAgICAgcmV0dXJuIGZvcndhcmQ7XG4gICAgICB9XG5cbiAgICAgIGZvcndhcmQgPSB1dGlscy5hZGREYXlzKGZvcndhcmQsIDEpO1xuICAgIH1cblxuICAgIGlmIChiYWNrd2FyZCkge1xuICAgICAgaWYgKCFzaG91bGREaXNhYmxlRGF0ZShiYWNrd2FyZCkpIHtcbiAgICAgICAgcmV0dXJuIGJhY2t3YXJkO1xuICAgICAgfVxuXG4gICAgICBiYWNrd2FyZCA9IHV0aWxzLmFkZERheXMoYmFja3dhcmQsIC0xKTtcbiAgICB9XG4gIH0gLy8gZmFsbGJhY2sgdG8gdG9kYXkgaWYgbm8gZW5hYmxlZCBkYXlzXG5cblxuICByZXR1cm4gdXRpbHMuZGF0ZSgpO1xufTtcbnZhciBpc1llYXJPbmx5VmlldyA9IGZ1bmN0aW9uIGlzWWVhck9ubHlWaWV3KHZpZXdzKSB7XG4gIHJldHVybiB2aWV3cy5sZW5ndGggPT09IDEgJiYgdmlld3NbMF0gPT09ICd5ZWFyJztcbn07XG52YXIgaXNZZWFyQW5kTW9udGhWaWV3cyA9IGZ1bmN0aW9uIGlzWWVhckFuZE1vbnRoVmlld3Modmlld3MpIHtcbiAgcmV0dXJuIHZpZXdzLmxlbmd0aCA9PT0gMiAmJiBhcnJheUluY2x1ZGVzKHZpZXdzLCAnbW9udGgnKSAmJiBhcnJheUluY2x1ZGVzKHZpZXdzLCAneWVhcicpO1xufTtcbnZhciBnZXRGb3JtYXRCeVZpZXdzID0gZnVuY3Rpb24gZ2V0Rm9ybWF0QnlWaWV3cyh2aWV3cywgdXRpbHMpIHtcbiAgaWYgKGlzWWVhck9ubHlWaWV3KHZpZXdzKSkge1xuICAgIHJldHVybiB1dGlscy55ZWFyRm9ybWF0O1xuICB9XG5cbiAgaWYgKGlzWWVhckFuZE1vbnRoVmlld3Modmlld3MpKSB7XG4gICAgcmV0dXJuIHV0aWxzLnllYXJNb250aEZvcm1hdDtcbiAgfVxuXG4gIHJldHVybiB1dGlscy5kYXRlRm9ybWF0O1xufTtcblxudmFyIERheVdyYXBwZXIgPSBmdW5jdGlvbiBEYXlXcmFwcGVyKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgIGRpc2FibGVkID0gX3JlZi5kaXNhYmxlZCxcbiAgICAgIG9uU2VsZWN0ID0gX3JlZi5vblNlbGVjdCxcbiAgICAgIGRheUluQ3VycmVudE1vbnRoID0gX3JlZi5kYXlJbkN1cnJlbnRNb250aCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImNoaWxkcmVuXCIsIFwidmFsdWVcIiwgXCJkaXNhYmxlZFwiLCBcIm9uU2VsZWN0XCIsIFwiZGF5SW5DdXJyZW50TW9udGhcIl0pO1xuXG4gIHZhciBoYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gb25TZWxlY3QodmFsdWUpO1xuICB9LCBbb25TZWxlY3QsIHZhbHVlXSk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICByb2xlOiBcInByZXNlbnRhdGlvblwiLFxuICAgIG9uQ2xpY2s6IGRheUluQ3VycmVudE1vbnRoICYmICFkaXNhYmxlZCA/IGhhbmRsZUNsaWNrIDogdW5kZWZpbmVkLFxuICAgIG9uS2V5UHJlc3M6IGRheUluQ3VycmVudE1vbnRoICYmICFkaXNhYmxlZCA/IGhhbmRsZUNsaWNrIDogdW5kZWZpbmVkXG4gIH0sIG90aGVyKSwgY2hpbGRyZW4pO1xufTtcblxudmFyIGFuaW1hdGlvbkR1cmF0aW9uID0gMzUwO1xudmFyIHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoZnVuY3Rpb24gKHRoZW1lKSB7XG4gIHZhciBzbGlkZVRyYW5zaXRpb24gPSB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3RyYW5zZm9ybScsIHtcbiAgICBkdXJhdGlvbjogYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgZWFzaW5nOiAnY3ViaWMtYmV6aWVyKDAuMzUsIDAuOCwgMC40LCAxKSdcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdHJhbnNpdGlvbkNvbnRhaW5lcjoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgJyYgPiAqJzoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgbGVmdDogMFxuICAgICAgfVxuICAgIH0sXG4gICAgJ3NsaWRlRW50ZXItbGVmdCc6IHtcbiAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDEwMCUpJ1xuICAgIH0sXG4gICAgJ3NsaWRlRW50ZXItcmlnaHQnOiB7XG4gICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtMTAwJSknXG4gICAgfSxcbiAgICBzbGlkZUVudGVyQWN0aXZlOiB7XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCUpJyxcbiAgICAgIHRyYW5zaXRpb246IHNsaWRlVHJhbnNpdGlvblxuICAgIH0sXG4gICAgc2xpZGVFeGl0OiB7XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCUpJ1xuICAgIH0sXG4gICAgJ3NsaWRlRXhpdEFjdGl2ZUxlZnQtbGVmdCc6IHtcbiAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC0yMDAlKScsXG4gICAgICB0cmFuc2l0aW9uOiBzbGlkZVRyYW5zaXRpb25cbiAgICB9LFxuICAgICdzbGlkZUV4aXRBY3RpdmVMZWZ0LXJpZ2h0Jzoge1xuICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMjAwJSknLFxuICAgICAgdHJhbnNpdGlvbjogc2xpZGVUcmFuc2l0aW9uXG4gICAgfVxuICB9O1xufSwge1xuICBuYW1lOiAnTXVpUGlja2Vyc1NsaWRlVHJhbnNpdGlvbidcbn0pO1xuXG52YXIgU2xpZGVUcmFuc2l0aW9uID0gZnVuY3Rpb24gU2xpZGVUcmFuc2l0aW9uKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIHRyYW5zS2V5ID0gX3JlZi50cmFuc0tleSxcbiAgICAgIHNsaWRlRGlyZWN0aW9uID0gX3JlZi5zbGlkZURpcmVjdGlvbixcbiAgICAgIF9yZWYkY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmJGNsYXNzTmFtZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYkY2xhc3NOYW1lO1xuICB2YXIgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICB2YXIgdHJhbnNpdGlvbkNsYXNzZXMgPSB7XG4gICAgZXhpdDogY2xhc3Nlcy5zbGlkZUV4aXQsXG4gICAgZW50ZXJBY3RpdmU6IGNsYXNzZXMuc2xpZGVFbnRlckFjdGl2ZSxcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZW50ZXI6IGNsYXNzZXNbJ3NsaWRlRW50ZXItJyArIHNsaWRlRGlyZWN0aW9uXSxcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZXhpdEFjdGl2ZTogY2xhc3Nlc1snc2xpZGVFeGl0QWN0aXZlTGVmdC0nICsgc2xpZGVEaXJlY3Rpb25dXG4gIH07XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Hcm91cCwge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnRyYW5zaXRpb25Db250YWluZXIsIGNsYXNzTmFtZSksXG4gICAgY2hpbGRGYWN0b3J5OiBmdW5jdGlvbiBjaGlsZEZhY3RvcnkoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGNsb25lRWxlbWVudChlbGVtZW50LCB7XG4gICAgICAgIGNsYXNzTmFtZXM6IHRyYW5zaXRpb25DbGFzc2VzXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIGNyZWF0ZUVsZW1lbnQoQ1NTVHJhbnNpdGlvbiwge1xuICAgIG1vdW50T25FbnRlcjogdHJ1ZSxcbiAgICB1bm1vdW50T25FeGl0OiB0cnVlLFxuICAgIGtleTogdHJhbnNLZXkgKyBzbGlkZURpcmVjdGlvbixcbiAgICB0aW1lb3V0OiBhbmltYXRpb25EdXJhdGlvbixcbiAgICBjbGFzc05hbWVzOiB0cmFuc2l0aW9uQ2xhc3NlcyxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfSkpO1xufTtcblxudmFyIEFycm93TGVmdEljb24gPSBmdW5jdGlvbiBBcnJvd0xlZnRJY29uKHByb3BzKSB7XG4gIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFN2Z0ljb24sIHByb3BzLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxelwiXG4gIH0pLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgZDogXCJNMCAwaDI0djI0SDBWMHpcIlxuICB9KSk7XG59O1xuXG52YXIgQXJyb3dSaWdodEljb24gPSBmdW5jdGlvbiBBcnJvd1JpZ2h0SWNvbihwcm9wcykge1xuICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChTdmdJY29uLCBwcm9wcywgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTguNTkgMTYuNTlMMTMuMTcgMTIgOC41OSA3LjQxIDEwIDZsNiA2LTYgNi0xLjQxLTEuNDF6XCJcbiAgfSksIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBkOiBcIk0wIDBoMjR2MjRIMFYwelwiXG4gIH0pKTtcbn07XG5cbnZhciB1c2VTdHlsZXMkMSA9IG1ha2VTdHlsZXMoZnVuY3Rpb24gKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgc3dpdGNoSGVhZGVyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMC41KSxcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxKVxuICAgIH0sXG4gICAgdHJhbnNpdGlvbkNvbnRhaW5lcjoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGhlaWdodDogMjNcbiAgICB9LFxuICAgIGljb25CdXR0b246IHtcbiAgICAgIHpJbmRleDogMSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyXG4gICAgfSxcbiAgICBkYXlzSGVhZGVyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIG1heEhlaWdodDogMTZcbiAgICB9LFxuICAgIGRheUxhYmVsOiB7XG4gICAgICB3aWR0aDogMzYsXG4gICAgICBtYXJnaW46ICcwIDJweCcsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5oaW50XG4gICAgfVxuICB9O1xufSwge1xuICBuYW1lOiAnTXVpUGlja2Vyc0NhbGVuZGFySGVhZGVyJ1xufSk7XG52YXIgQ2FsZW5kYXJIZWFkZXIgPSBmdW5jdGlvbiBDYWxlbmRhckhlYWRlcihfcmVmKSB7XG4gIHZhciBjdXJyZW50TW9udGggPSBfcmVmLmN1cnJlbnRNb250aCxcbiAgICAgIG9uTW9udGhDaGFuZ2UgPSBfcmVmLm9uTW9udGhDaGFuZ2UsXG4gICAgICBsZWZ0QXJyb3dJY29uID0gX3JlZi5sZWZ0QXJyb3dJY29uLFxuICAgICAgcmlnaHRBcnJvd0ljb24gPSBfcmVmLnJpZ2h0QXJyb3dJY29uLFxuICAgICAgbGVmdEFycm93QnV0dG9uUHJvcHMgPSBfcmVmLmxlZnRBcnJvd0J1dHRvblByb3BzLFxuICAgICAgcmlnaHRBcnJvd0J1dHRvblByb3BzID0gX3JlZi5yaWdodEFycm93QnV0dG9uUHJvcHMsXG4gICAgICBkaXNhYmxlUHJldk1vbnRoID0gX3JlZi5kaXNhYmxlUHJldk1vbnRoLFxuICAgICAgZGlzYWJsZU5leHRNb250aCA9IF9yZWYuZGlzYWJsZU5leHRNb250aCxcbiAgICAgIHNsaWRlRGlyZWN0aW9uID0gX3JlZi5zbGlkZURpcmVjdGlvbjtcbiAgdmFyIHV0aWxzID0gdXNlVXRpbHMoKTtcbiAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMkMSgpO1xuICB2YXIgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICB2YXIgcnRsID0gdGhlbWUuZGlyZWN0aW9uID09PSAncnRsJztcblxuICB2YXIgc2VsZWN0TmV4dE1vbnRoID0gZnVuY3Rpb24gc2VsZWN0TmV4dE1vbnRoKCkge1xuICAgIHJldHVybiBvbk1vbnRoQ2hhbmdlKHV0aWxzLmdldE5leHRNb250aChjdXJyZW50TW9udGgpLCAnbGVmdCcpO1xuICB9O1xuXG4gIHZhciBzZWxlY3RQcmV2aW91c01vbnRoID0gZnVuY3Rpb24gc2VsZWN0UHJldmlvdXNNb250aCgpIHtcbiAgICByZXR1cm4gb25Nb250aENoYW5nZSh1dGlscy5nZXRQcmV2aW91c01vbnRoKGN1cnJlbnRNb250aCksICdyaWdodCcpO1xuICB9O1xuXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5zd2l0Y2hIZWFkZXJcbiAgfSwgY3JlYXRlRWxlbWVudChJY29uQnV0dG9uLCBfZXh0ZW5kcyh7fSwgbGVmdEFycm93QnV0dG9uUHJvcHMsIHtcbiAgICBkaXNhYmxlZDogZGlzYWJsZVByZXZNb250aCxcbiAgICBvbkNsaWNrOiBzZWxlY3RQcmV2aW91c01vbnRoLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5pY29uQnV0dG9uXG4gIH0pLCBydGwgPyByaWdodEFycm93SWNvbiA6IGxlZnRBcnJvd0ljb24pLCBjcmVhdGVFbGVtZW50KFNsaWRlVHJhbnNpdGlvbiwge1xuICAgIHNsaWRlRGlyZWN0aW9uOiBzbGlkZURpcmVjdGlvbixcbiAgICB0cmFuc0tleTogY3VycmVudE1vbnRoLnRvU3RyaW5nKCksXG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRyYW5zaXRpb25Db250YWluZXJcbiAgfSwgY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCB7XG4gICAgYWxpZ246IFwiY2VudGVyXCIsXG4gICAgdmFyaWFudDogXCJib2R5MVwiXG4gIH0sIHV0aWxzLmdldENhbGVuZGFySGVhZGVyVGV4dChjdXJyZW50TW9udGgpKSksIGNyZWF0ZUVsZW1lbnQoSWNvbkJ1dHRvbiwgX2V4dGVuZHMoe30sIHJpZ2h0QXJyb3dCdXR0b25Qcm9wcywge1xuICAgIGRpc2FibGVkOiBkaXNhYmxlTmV4dE1vbnRoLFxuICAgIG9uQ2xpY2s6IHNlbGVjdE5leHRNb250aCxcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMuaWNvbkJ1dHRvblxuICB9KSwgcnRsID8gbGVmdEFycm93SWNvbiA6IHJpZ2h0QXJyb3dJY29uKSksIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5kYXlzSGVhZGVyXG4gIH0sIHV0aWxzLmdldFdlZWtkYXlzKCkubWFwKGZ1bmN0aW9uIChkYXksIGluZGV4KSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeSwge1xuICAgICAga2V5OiBpbmRleCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxuICAgICAgLFxuICAgICAgdmFyaWFudDogXCJjYXB0aW9uXCIsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXMuZGF5TGFiZWxcbiAgICB9LCBkYXkpO1xuICB9KSkpO1xufTtcbkNhbGVuZGFySGVhZGVyLmRpc3BsYXlOYW1lID0gJ0NhbGVuZGFySGVhZGVyJztcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IENhbGVuZGFySGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgbGVmdEFycm93SWNvbjogbm9kZSxcbiAgcmlnaHRBcnJvd0ljb246IG5vZGUsXG4gIGRpc2FibGVQcmV2TW9udGg6IGJvb2wsXG4gIGRpc2FibGVOZXh0TW9udGg6IGJvb2xcbn0gOiB2b2lkIDA7XG5DYWxlbmRhckhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGxlZnRBcnJvd0ljb246IGNyZWF0ZUVsZW1lbnQoQXJyb3dMZWZ0SWNvbiwgbnVsbCksXG4gIHJpZ2h0QXJyb3dJY29uOiBjcmVhdGVFbGVtZW50KEFycm93UmlnaHRJY29uLCBudWxsKSxcbiAgZGlzYWJsZVByZXZNb250aDogZmFsc2UsXG4gIGRpc2FibGVOZXh0TW9udGg6IGZhbHNlXG59O1xuXG52YXIgd2l0aFV0aWxzID0gZnVuY3Rpb24gd2l0aFV0aWxzKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKENvbXBvbmVudCkge1xuICAgIHZhciBXaXRoVXRpbHMgPSBmdW5jdGlvbiBXaXRoVXRpbHMocHJvcHMpIHtcbiAgICAgIHZhciB1dGlscyA9IHVzZVV0aWxzKCk7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICAgICAgdXRpbHM6IHV0aWxzXG4gICAgICB9LCBwcm9wcykpO1xuICAgIH07XG5cbiAgICBXaXRoVXRpbHMuZGlzcGxheU5hbWUgPSBcIldpdGhVdGlscyhcIi5jb25jYXQoQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lLCBcIilcIik7XG4gICAgcmV0dXJuIFdpdGhVdGlscztcbiAgfTtcbn07XG5cbnZhciBLZXlEb3duTGlzdGVuZXIgPSBmdW5jdGlvbiBLZXlEb3duTGlzdGVuZXIoX3JlZikge1xuICB2YXIgb25LZXlEb3duID0gX3JlZi5vbktleURvd247XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleURvd24pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93bik7XG4gICAgfTtcbiAgfSwgW29uS2V5RG93bl0pO1xuICByZXR1cm4gbnVsbDtcbn07XG5cbnZhciBDYWxlbmRhciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ2FsZW5kYXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENhbGVuZGFyKCkge1xuICAgIHZhciBfZ2V0UHJvdG90eXBlT2YyO1xuXG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhbGVuZGFyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfZ2V0UHJvdG90eXBlT2YyID0gX2dldFByb3RvdHlwZU9mKENhbGVuZGFyKSkuY2FsbC5hcHBseShfZ2V0UHJvdG90eXBlT2YyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBzbGlkZURpcmVjdGlvbjogJ2xlZnQnLFxuICAgICAgY3VycmVudE1vbnRoOiBfdGhpcy5wcm9wcy51dGlscy5zdGFydE9mTW9udGgoX3RoaXMucHJvcHMuZGF0ZSksXG4gICAgICBsb2FkaW5nUXVldWU6IDBcbiAgICB9O1xuXG4gICAgX3RoaXMucHVzaFRvTG9hZGluZ1F1ZXVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGxvYWRpbmdRdWV1ZSA9IF90aGlzLnN0YXRlLmxvYWRpbmdRdWV1ZSArIDE7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9hZGluZ1F1ZXVlOiBsb2FkaW5nUXVldWVcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5wb3BGcm9tTG9hZGluZ1F1ZXVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGxvYWRpbmdRdWV1ZSA9IF90aGlzLnN0YXRlLmxvYWRpbmdRdWV1ZTtcbiAgICAgIGxvYWRpbmdRdWV1ZSA9IGxvYWRpbmdRdWV1ZSA8PSAwID8gMCA6IGxvYWRpbmdRdWV1ZSAtIDE7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9hZGluZ1F1ZXVlOiBsb2FkaW5nUXVldWVcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVDaGFuZ2VNb250aCA9IGZ1bmN0aW9uIChuZXdNb250aCwgc2xpZGVEaXJlY3Rpb24pIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY3VycmVudE1vbnRoOiBuZXdNb250aCxcbiAgICAgICAgc2xpZGVEaXJlY3Rpb246IHNsaWRlRGlyZWN0aW9uXG4gICAgICB9KTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uTW9udGhDaGFuZ2UpIHtcbiAgICAgICAgdmFyIHJldHVyblZhbCA9IF90aGlzLnByb3BzLm9uTW9udGhDaGFuZ2UobmV3TW9udGgpO1xuXG4gICAgICAgIGlmIChyZXR1cm5WYWwpIHtcbiAgICAgICAgICBfdGhpcy5wdXNoVG9Mb2FkaW5nUXVldWUoKTtcblxuICAgICAgICAgIHJldHVyblZhbC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnBvcEZyb21Mb2FkaW5nUXVldWUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy52YWxpZGF0ZU1pbk1heERhdGUgPSBmdW5jdGlvbiAoZGF5KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBtaW5EYXRlID0gX3RoaXMkcHJvcHMubWluRGF0ZSxcbiAgICAgICAgICBtYXhEYXRlID0gX3RoaXMkcHJvcHMubWF4RGF0ZSxcbiAgICAgICAgICB1dGlscyA9IF90aGlzJHByb3BzLnV0aWxzLFxuICAgICAgICAgIGRpc2FibGVGdXR1cmUgPSBfdGhpcyRwcm9wcy5kaXNhYmxlRnV0dXJlLFxuICAgICAgICAgIGRpc2FibGVQYXN0ID0gX3RoaXMkcHJvcHMuZGlzYWJsZVBhc3Q7XG4gICAgICB2YXIgbm93ID0gdXRpbHMuZGF0ZSgpO1xuICAgICAgcmV0dXJuIEJvb2xlYW4oZGlzYWJsZUZ1dHVyZSAmJiB1dGlscy5pc0FmdGVyRGF5KGRheSwgbm93KSB8fCBkaXNhYmxlUGFzdCAmJiB1dGlscy5pc0JlZm9yZURheShkYXksIG5vdykgfHwgbWluRGF0ZSAmJiB1dGlscy5pc0JlZm9yZURheShkYXksIHV0aWxzLmRhdGUobWluRGF0ZSkpIHx8IG1heERhdGUgJiYgdXRpbHMuaXNBZnRlckRheShkYXksIHV0aWxzLmRhdGUobWF4RGF0ZSkpKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2hvdWxkRGlzYWJsZVByZXZNb250aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICB1dGlscyA9IF90aGlzJHByb3BzMi51dGlscyxcbiAgICAgICAgICBkaXNhYmxlUGFzdCA9IF90aGlzJHByb3BzMi5kaXNhYmxlUGFzdCxcbiAgICAgICAgICBtaW5EYXRlID0gX3RoaXMkcHJvcHMyLm1pbkRhdGU7XG4gICAgICB2YXIgbm93ID0gdXRpbHMuZGF0ZSgpO1xuICAgICAgdmFyIGZpcnN0RW5hYmxlZE1vbnRoID0gdXRpbHMuc3RhcnRPZk1vbnRoKGRpc2FibGVQYXN0ICYmIHV0aWxzLmlzQWZ0ZXIobm93LCB1dGlscy5kYXRlKG1pbkRhdGUpKSA/IG5vdyA6IHV0aWxzLmRhdGUobWluRGF0ZSkpO1xuICAgICAgcmV0dXJuICF1dGlscy5pc0JlZm9yZShmaXJzdEVuYWJsZWRNb250aCwgX3RoaXMuc3RhdGUuY3VycmVudE1vbnRoKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2hvdWxkRGlzYWJsZU5leHRNb250aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICB1dGlscyA9IF90aGlzJHByb3BzMy51dGlscyxcbiAgICAgICAgICBkaXNhYmxlRnV0dXJlID0gX3RoaXMkcHJvcHMzLmRpc2FibGVGdXR1cmUsXG4gICAgICAgICAgbWF4RGF0ZSA9IF90aGlzJHByb3BzMy5tYXhEYXRlO1xuICAgICAgdmFyIG5vdyA9IHV0aWxzLmRhdGUoKTtcbiAgICAgIHZhciBsYXN0RW5hYmxlZE1vbnRoID0gdXRpbHMuc3RhcnRPZk1vbnRoKGRpc2FibGVGdXR1cmUgJiYgdXRpbHMuaXNCZWZvcmUobm93LCB1dGlscy5kYXRlKG1heERhdGUpKSA/IG5vdyA6IHV0aWxzLmRhdGUobWF4RGF0ZSkpO1xuICAgICAgcmV0dXJuICF1dGlscy5pc0FmdGVyKGxhc3RFbmFibGVkTW9udGgsIF90aGlzLnN0YXRlLmN1cnJlbnRNb250aCk7XG4gICAgfTtcblxuICAgIF90aGlzLnNob3VsZERpc2FibGVEYXRlID0gZnVuY3Rpb24gKGRheSkge1xuICAgICAgdmFyIHNob3VsZERpc2FibGVEYXRlID0gX3RoaXMucHJvcHMuc2hvdWxkRGlzYWJsZURhdGU7XG4gICAgICByZXR1cm4gX3RoaXMudmFsaWRhdGVNaW5NYXhEYXRlKGRheSkgfHwgQm9vbGVhbihzaG91bGREaXNhYmxlRGF0ZSAmJiBzaG91bGREaXNhYmxlRGF0ZShkYXkpKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlRGF5U2VsZWN0ID0gZnVuY3Rpb24gKGRheSkge1xuICAgICAgdmFyIGlzRmluaXNoID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0cnVlO1xuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGRhdGUgPSBfdGhpcyRwcm9wczQuZGF0ZSxcbiAgICAgICAgICB1dGlscyA9IF90aGlzJHByb3BzNC51dGlscztcblxuICAgICAgX3RoaXMucHJvcHMub25DaGFuZ2UodXRpbHMubWVyZ2VEYXRlQW5kVGltZShkYXksIGRhdGUpLCBpc0ZpbmlzaCk7XG4gICAgfTtcblxuICAgIF90aGlzLm1vdmVUb0RheSA9IGZ1bmN0aW9uIChkYXkpIHtcbiAgICAgIHZhciB1dGlscyA9IF90aGlzLnByb3BzLnV0aWxzO1xuXG4gICAgICBpZiAoZGF5ICYmICFfdGhpcy5zaG91bGREaXNhYmxlRGF0ZShkYXkpKSB7XG4gICAgICAgIGlmICh1dGlscy5nZXRNb250aChkYXkpICE9PSB1dGlscy5nZXRNb250aChfdGhpcy5zdGF0ZS5jdXJyZW50TW9udGgpKSB7XG4gICAgICAgICAgX3RoaXMuaGFuZGxlQ2hhbmdlTW9udGgodXRpbHMuc3RhcnRPZk1vbnRoKGRheSksICdsZWZ0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5oYW5kbGVEYXlTZWxlY3QoZGF5LCBmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczUgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICB0aGVtZSA9IF90aGlzJHByb3BzNS50aGVtZSxcbiAgICAgICAgICBkYXRlID0gX3RoaXMkcHJvcHM1LmRhdGUsXG4gICAgICAgICAgdXRpbHMgPSBfdGhpcyRwcm9wczUudXRpbHM7XG4gICAgICBydW5LZXlIYW5kbGVyKGV2ZW50LCB7XG4gICAgICAgIEFycm93VXA6IGZ1bmN0aW9uIEFycm93VXAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm1vdmVUb0RheSh1dGlscy5hZGREYXlzKGRhdGUsIC03KSk7XG4gICAgICAgIH0sXG4gICAgICAgIEFycm93RG93bjogZnVuY3Rpb24gQXJyb3dEb3duKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5tb3ZlVG9EYXkodXRpbHMuYWRkRGF5cyhkYXRlLCA3KSk7XG4gICAgICAgIH0sXG4gICAgICAgIEFycm93TGVmdDogZnVuY3Rpb24gQXJyb3dMZWZ0KCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5tb3ZlVG9EYXkodXRpbHMuYWRkRGF5cyhkYXRlLCB0aGVtZS5kaXJlY3Rpb24gPT09ICdsdHInID8gLTEgOiAxKSk7XG4gICAgICAgIH0sXG4gICAgICAgIEFycm93UmlnaHQ6IGZ1bmN0aW9uIEFycm93UmlnaHQoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm1vdmVUb0RheSh1dGlscy5hZGREYXlzKGRhdGUsIHRoZW1lLmRpcmVjdGlvbiA9PT0gJ2x0cicgPyAxIDogLTEpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlcldlZWtzID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHV0aWxzID0gX3RoaXMkcHJvcHM2LnV0aWxzLFxuICAgICAgICAgIGNsYXNzZXMgPSBfdGhpcyRwcm9wczYuY2xhc3NlcztcbiAgICAgIHZhciB3ZWVrcyA9IHV0aWxzLmdldFdlZWtBcnJheShfdGhpcy5zdGF0ZS5jdXJyZW50TW9udGgpO1xuICAgICAgcmV0dXJuIHdlZWtzLm1hcChmdW5jdGlvbiAod2Vlaykge1xuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAga2V5OiBcIndlZWstXCIuY29uY2F0KHdlZWtbMF0udG9TdHJpbmcoKSksXG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLndlZWtcbiAgICAgICAgfSwgX3RoaXMucmVuZGVyRGF5cyh3ZWVrKSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyRGF5cyA9IGZ1bmN0aW9uICh3ZWVrKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM3ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgZGF0ZSA9IF90aGlzJHByb3BzNy5kYXRlLFxuICAgICAgICAgIHJlbmRlckRheSA9IF90aGlzJHByb3BzNy5yZW5kZXJEYXksXG4gICAgICAgICAgdXRpbHMgPSBfdGhpcyRwcm9wczcudXRpbHM7XG4gICAgICB2YXIgbm93ID0gdXRpbHMuZGF0ZSgpO1xuICAgICAgdmFyIHNlbGVjdGVkRGF0ZSA9IHV0aWxzLnN0YXJ0T2ZEYXkoZGF0ZSk7XG4gICAgICB2YXIgY3VycmVudE1vbnRoTnVtYmVyID0gdXRpbHMuZ2V0TW9udGgoX3RoaXMuc3RhdGUuY3VycmVudE1vbnRoKTtcbiAgICAgIHJldHVybiB3ZWVrLm1hcChmdW5jdGlvbiAoZGF5KSB7XG4gICAgICAgIHZhciBkaXNhYmxlZCA9IF90aGlzLnNob3VsZERpc2FibGVEYXRlKGRheSk7XG5cbiAgICAgICAgdmFyIGlzRGF5SW5DdXJyZW50TW9udGggPSB1dGlscy5nZXRNb250aChkYXkpID09PSBjdXJyZW50TW9udGhOdW1iZXI7XG4gICAgICAgIHZhciBkYXlDb21wb25lbnQgPSBjcmVhdGVFbGVtZW50KERheSwge1xuICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICBjdXJyZW50OiB1dGlscy5pc1NhbWVEYXkoZGF5LCBub3cpLFxuICAgICAgICAgIGhpZGRlbjogIWlzRGF5SW5DdXJyZW50TW9udGgsXG4gICAgICAgICAgc2VsZWN0ZWQ6IHV0aWxzLmlzU2FtZURheShzZWxlY3RlZERhdGUsIGRheSlcbiAgICAgICAgfSwgdXRpbHMuZ2V0RGF5VGV4dChkYXkpKTtcblxuICAgICAgICBpZiAocmVuZGVyRGF5KSB7XG4gICAgICAgICAgZGF5Q29tcG9uZW50ID0gcmVuZGVyRGF5KGRheSwgc2VsZWN0ZWREYXRlLCBpc0RheUluQ3VycmVudE1vbnRoLCBkYXlDb21wb25lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoRGF5V3JhcHBlciwge1xuICAgICAgICAgIHZhbHVlOiBkYXksXG4gICAgICAgICAga2V5OiBkYXkudG9TdHJpbmcoKSxcbiAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgICAgZGF5SW5DdXJyZW50TW9udGg6IGlzRGF5SW5DdXJyZW50TW9udGgsXG4gICAgICAgICAgb25TZWxlY3Q6IF90aGlzLmhhbmRsZURheVNlbGVjdFxuICAgICAgICB9LCBkYXlDb21wb25lbnQpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDYWxlbmRhciwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM4ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBkYXRlID0gX3RoaXMkcHJvcHM4LmRhdGUsXG4gICAgICAgICAgbWluRGF0ZSA9IF90aGlzJHByb3BzOC5taW5EYXRlLFxuICAgICAgICAgIG1heERhdGUgPSBfdGhpcyRwcm9wczgubWF4RGF0ZSxcbiAgICAgICAgICB1dGlscyA9IF90aGlzJHByb3BzOC51dGlscyxcbiAgICAgICAgICBkaXNhYmxlUGFzdCA9IF90aGlzJHByb3BzOC5kaXNhYmxlUGFzdCxcbiAgICAgICAgICBkaXNhYmxlRnV0dXJlID0gX3RoaXMkcHJvcHM4LmRpc2FibGVGdXR1cmU7XG5cbiAgICAgIGlmICh0aGlzLnNob3VsZERpc2FibGVEYXRlKGRhdGUpKSB7XG4gICAgICAgIHZhciBjbG9zZXN0RW5hYmxlZERhdGUgPSBmaW5kQ2xvc2VzdEVuYWJsZWREYXRlKHtcbiAgICAgICAgICBkYXRlOiBkYXRlLFxuICAgICAgICAgIHV0aWxzOiB1dGlscyxcbiAgICAgICAgICBtaW5EYXRlOiB1dGlscy5kYXRlKG1pbkRhdGUpLFxuICAgICAgICAgIG1heERhdGU6IHV0aWxzLmRhdGUobWF4RGF0ZSksXG4gICAgICAgICAgZGlzYWJsZVBhc3Q6IEJvb2xlYW4oZGlzYWJsZVBhc3QpLFxuICAgICAgICAgIGRpc2FibGVGdXR1cmU6IEJvb2xlYW4oZGlzYWJsZUZ1dHVyZSksXG4gICAgICAgICAgc2hvdWxkRGlzYWJsZURhdGU6IHRoaXMuc2hvdWxkRGlzYWJsZURhdGVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaGFuZGxlRGF5U2VsZWN0KGNsb3Nlc3RFbmFibGVkRGF0ZSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBjdXJyZW50TW9udGggPSBfdGhpcyRzdGF0ZS5jdXJyZW50TW9udGgsXG4gICAgICAgICAgc2xpZGVEaXJlY3Rpb24gPSBfdGhpcyRzdGF0ZS5zbGlkZURpcmVjdGlvbjtcbiAgICAgIHZhciBfdGhpcyRwcm9wczkgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzZXMgPSBfdGhpcyRwcm9wczkuY2xhc3NlcyxcbiAgICAgICAgICBhbGxvd0tleWJvYXJkQ29udHJvbCA9IF90aGlzJHByb3BzOS5hbGxvd0tleWJvYXJkQ29udHJvbCxcbiAgICAgICAgICBsZWZ0QXJyb3dCdXR0b25Qcm9wcyA9IF90aGlzJHByb3BzOS5sZWZ0QXJyb3dCdXR0b25Qcm9wcyxcbiAgICAgICAgICBsZWZ0QXJyb3dJY29uID0gX3RoaXMkcHJvcHM5LmxlZnRBcnJvd0ljb24sXG4gICAgICAgICAgcmlnaHRBcnJvd0J1dHRvblByb3BzID0gX3RoaXMkcHJvcHM5LnJpZ2h0QXJyb3dCdXR0b25Qcm9wcyxcbiAgICAgICAgICByaWdodEFycm93SWNvbiA9IF90aGlzJHByb3BzOS5yaWdodEFycm93SWNvbixcbiAgICAgICAgICBsb2FkaW5nSW5kaWNhdG9yID0gX3RoaXMkcHJvcHM5LmxvYWRpbmdJbmRpY2F0b3I7XG4gICAgICB2YXIgbG9hZGluZ0VsZW1lbnQgPSBsb2FkaW5nSW5kaWNhdG9yID8gbG9hZGluZ0luZGljYXRvciA6IGNyZWF0ZUVsZW1lbnQoQ2lyY3VsYXJQcm9ncmVzcywgbnVsbCk7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgYWxsb3dLZXlib2FyZENvbnRyb2wgJiYgdGhpcy5jb250ZXh0ICE9PSAnc3RhdGljJyAmJiBjcmVhdGVFbGVtZW50KEtleURvd25MaXN0ZW5lciwge1xuICAgICAgICBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93blxuICAgICAgfSksIGNyZWF0ZUVsZW1lbnQoQ2FsZW5kYXJIZWFkZXIsIHtcbiAgICAgICAgY3VycmVudE1vbnRoOiBjdXJyZW50TW9udGgsXG4gICAgICAgIHNsaWRlRGlyZWN0aW9uOiBzbGlkZURpcmVjdGlvbixcbiAgICAgICAgb25Nb250aENoYW5nZTogdGhpcy5oYW5kbGVDaGFuZ2VNb250aCxcbiAgICAgICAgbGVmdEFycm93SWNvbjogbGVmdEFycm93SWNvbixcbiAgICAgICAgbGVmdEFycm93QnV0dG9uUHJvcHM6IGxlZnRBcnJvd0J1dHRvblByb3BzLFxuICAgICAgICByaWdodEFycm93SWNvbjogcmlnaHRBcnJvd0ljb24sXG4gICAgICAgIHJpZ2h0QXJyb3dCdXR0b25Qcm9wczogcmlnaHRBcnJvd0J1dHRvblByb3BzLFxuICAgICAgICBkaXNhYmxlUHJldk1vbnRoOiB0aGlzLnNob3VsZERpc2FibGVQcmV2TW9udGgoKSxcbiAgICAgICAgZGlzYWJsZU5leHRNb250aDogdGhpcy5zaG91bGREaXNhYmxlTmV4dE1vbnRoKClcbiAgICAgIH0pLCBjcmVhdGVFbGVtZW50KFNsaWRlVHJhbnNpdGlvbiwge1xuICAgICAgICBzbGlkZURpcmVjdGlvbjogc2xpZGVEaXJlY3Rpb24sXG4gICAgICAgIHRyYW5zS2V5OiBjdXJyZW50TW9udGgudG9TdHJpbmcoKSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRyYW5zaXRpb25Db250YWluZXJcbiAgICAgIH0sIGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIHRoaXMuc3RhdGUubG9hZGluZ1F1ZXVlID4gMCAmJiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnByb2dyZXNzQ29udGFpbmVyXG4gICAgICB9LCBsb2FkaW5nRWxlbWVudCkgfHwgY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCB0aGlzLnJlbmRlcldlZWtzKCkpKSkpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBzdGF0ZSkge1xuICAgICAgdmFyIHV0aWxzID0gbmV4dFByb3BzLnV0aWxzLFxuICAgICAgICAgIG5leHREYXRlID0gbmV4dFByb3BzLmRhdGU7XG5cbiAgICAgIGlmICghdXRpbHMuaXNFcXVhbChuZXh0RGF0ZSwgc3RhdGUubGFzdERhdGUpKSB7XG4gICAgICAgIHZhciBuZXh0TW9udGggPSB1dGlscy5nZXRNb250aChuZXh0RGF0ZSk7XG4gICAgICAgIHZhciBsYXN0RGF0ZSA9IHN0YXRlLmxhc3REYXRlIHx8IG5leHREYXRlO1xuICAgICAgICB2YXIgbGFzdE1vbnRoID0gdXRpbHMuZ2V0TW9udGgobGFzdERhdGUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxhc3REYXRlOiBuZXh0RGF0ZSxcbiAgICAgICAgICBjdXJyZW50TW9udGg6IG5leHRQcm9wcy51dGlscy5zdGFydE9mTW9udGgobmV4dERhdGUpLFxuICAgICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICAgIHNsaWRlRGlyZWN0aW9uOiBuZXh0TW9udGggPT09IGxhc3RNb250aCA/IHN0YXRlLnNsaWRlRGlyZWN0aW9uIDogdXRpbHMuaXNBZnRlckRheShuZXh0RGF0ZSwgbGFzdERhdGUpID8gJ2xlZnQnIDogJ3JpZ2h0J1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2FsZW5kYXI7XG59KENvbXBvbmVudCk7XG5DYWxlbmRhci5jb250ZXh0VHlwZSA9IFZhcmlhbnRDb250ZXh0O1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gQ2FsZW5kYXIucHJvcFR5cGVzID0ge1xuICByZW5kZXJEYXk6IGZ1bmMsXG4gIHNob3VsZERpc2FibGVEYXRlOiBmdW5jLFxuICBhbGxvd0tleWJvYXJkQ29udHJvbDogYm9vbFxufSA6IHZvaWQgMDtcbkNhbGVuZGFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgbWluRGF0ZTogbmV3IERhdGUoJzE5MDAtMDEtMDEnKSxcbiAgbWF4RGF0ZTogbmV3IERhdGUoJzIxMDAtMDEtMDEnKSxcbiAgZGlzYWJsZVBhc3Q6IGZhbHNlLFxuICBkaXNhYmxlRnV0dXJlOiBmYWxzZSxcbiAgYWxsb3dLZXlib2FyZENvbnRyb2w6IHRydWVcbn07XG52YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgdHJhbnNpdGlvbkNvbnRhaW5lcjoge1xuICAgICAgbWluSGVpZ2h0OiAzNiAqIDYsXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMS41KVxuICAgIH0sXG4gICAgcHJvZ3Jlc3NDb250YWluZXI6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gICAgfSxcbiAgICB3ZWVrOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgICB9XG4gIH07XG59O1xudmFyIENhbGVuZGFyJDEgPSB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpUGlja2Vyc0NhbGVuZGFyJyxcbiAgd2l0aFRoZW1lOiB0cnVlXG59KSh3aXRoVXRpbHMoKShDYWxlbmRhcikpO1xuXG5leHBvcnQgeyBDYWxlbmRhciBhcyBDLCBDYWxlbmRhciQxIGFzIGEsIGlzWWVhckFuZE1vbnRoVmlld3MgYXMgYiwgZ2V0Rm9ybWF0QnlWaWV3cyBhcyBnLCBpc1llYXJPbmx5VmlldyBhcyBpLCBzdHlsZXMgYXMgcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q2FsZW5kYXItMTFhZTYxZjYuanMubWFwXG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBvbmVPZiwgbnVtYmVyLCBmdW5jLCBhcnJheU9mLCBub2RlLCBib29sLCBhbnkgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3JlYXRlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2dldFByb3RvdHlwZU9mIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMnO1xuXG52YXIgQ2xvY2tUeXBlO1xuXG4oZnVuY3Rpb24gKENsb2NrVHlwZSkge1xuICBDbG9ja1R5cGVbXCJIT1VSU1wiXSA9IFwiaG91cnNcIjtcbiAgQ2xvY2tUeXBlW1wiTUlOVVRFU1wiXSA9IFwibWludXRlc1wiO1xuICBDbG9ja1R5cGVbXCJTRUNPTkRTXCJdID0gXCJzZWNvbmRzXCI7XG59KShDbG9ja1R5cGUgfHwgKENsb2NrVHlwZSA9IHt9KSk7XG5cbnZhciBDbG9ja1R5cGUkMSA9IENsb2NrVHlwZTtcblxudmFyIENsb2NrUG9pbnRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ2xvY2tQb2ludGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDbG9ja1BvaW50ZXIoKSB7XG4gICAgdmFyIF9nZXRQcm90b3R5cGVPZjI7XG5cbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2xvY2tQb2ludGVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfZ2V0UHJvdG90eXBlT2YyID0gX2dldFByb3RvdHlwZU9mKENsb2NrUG9pbnRlcikpLmNhbGwuYXBwbHkoX2dldFByb3RvdHlwZU9mMiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgdG9BbmltYXRlVHJhbnNmb3JtOiBmYWxzZSxcbiAgICAgIHByZXZpb3VzVHlwZTogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIF90aGlzLmdldEFuZ2xlU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHByb3BzLnZhbHVlLFxuICAgICAgICAgIGlzSW5uZXIgPSBfdGhpcyRwcm9wcy5pc0lubmVyLFxuICAgICAgICAgIHR5cGUgPSBfdGhpcyRwcm9wcy50eXBlO1xuICAgICAgdmFyIG1heCA9IHR5cGUgPT09IENsb2NrVHlwZSQxLkhPVVJTID8gMTIgOiA2MDtcbiAgICAgIHZhciBhbmdsZSA9IDM2MCAvIG1heCAqIHZhbHVlO1xuXG4gICAgICBpZiAodHlwZSA9PT0gQ2xvY2tUeXBlJDEuSE9VUlMgJiYgdmFsdWUgPiAxMikge1xuICAgICAgICBhbmdsZSAtPSAzNjA7IC8vIHJvdW5kIHVwIGFuZ2xlIHRvIG1heCAzNjAgZGVncmVlc1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWlnaHQ6IGlzSW5uZXIgPyAnMjYlJyA6ICc0MCUnLFxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlWihcIi5jb25jYXQoYW5nbGUsIFwiZGVnKVwiKVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENsb2NrUG9pbnRlciwgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzZXMgPSBfdGhpcyRwcm9wczIuY2xhc3NlcyxcbiAgICAgICAgICBoYXNTZWxlY3RlZCA9IF90aGlzJHByb3BzMi5oYXNTZWxlY3RlZDtcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHRoaXMuZ2V0QW5nbGVTdHlsZSgpLFxuICAgICAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5wb2ludGVyLCB0aGlzLnN0YXRlLnRvQW5pbWF0ZVRyYW5zZm9ybSAmJiBjbGFzc2VzLmFuaW1hdGVUcmFuc2Zvcm0pXG4gICAgICB9LCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMudGh1bWIsIGhhc1NlbGVjdGVkICYmIGNsYXNzZXMubm9Qb2ludClcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2xvY2tQb2ludGVyO1xufShDb21wb25lbnQpO1xuXG5DbG9ja1BvaW50ZXIuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gKG5leHRQcm9wcywgc3RhdGUpIHtcbiAgaWYgKG5leHRQcm9wcy50eXBlICE9PSBzdGF0ZS5wcmV2aW91c1R5cGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9BbmltYXRlVHJhbnNmb3JtOiB0cnVlLFxuICAgICAgcHJldmlvdXNUeXBlOiBuZXh0UHJvcHMudHlwZVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRvQW5pbWF0ZVRyYW5zZm9ybTogZmFsc2UsXG4gICAgcHJldmlvdXNUeXBlOiBuZXh0UHJvcHMudHlwZVxuICB9O1xufTtcblxudmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4gY3JlYXRlU3R5bGVzKHtcbiAgICBwb2ludGVyOiB7XG4gICAgICB3aWR0aDogMixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGxlZnQ6ICdjYWxjKDUwJSAtIDFweCknLFxuICAgICAgYm90dG9tOiAnNTAlJyxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ2NlbnRlciBib3R0b20gMHB4J1xuICAgIH0sXG4gICAgYW5pbWF0ZVRyYW5zZm9ybToge1xuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsndHJhbnNmb3JtJywgJ2hlaWdodCddKVxuICAgIH0sXG4gICAgdGh1bWI6IHtcbiAgICAgIHdpZHRoOiA0LFxuICAgICAgaGVpZ2h0OiA0LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuY29udHJhc3RUZXh0LFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogLTIxLFxuICAgICAgbGVmdDogLTE1LFxuICAgICAgYm9yZGVyOiBcIjE0cHggc29saWQgXCIuY29uY2F0KHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluKSxcbiAgICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94J1xuICAgIH0sXG4gICAgbm9Qb2ludDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgIH1cbiAgfSk7XG59O1xudmFyIENsb2NrUG9pbnRlciQxID0gd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVBpY2tlcnNDbG9ja1BvaW50ZXInXG59KShDbG9ja1BvaW50ZXIpO1xuXG52YXIgY2VudGVyID0ge1xuICB4OiAyNjAgLyAyLFxuICB5OiAyNjAgLyAyXG59O1xudmFyIGJhc2VQb2ludCA9IHtcbiAgeDogY2VudGVyLngsXG4gIHk6IDBcbn07XG52YXIgY3ggPSBiYXNlUG9pbnQueCAtIGNlbnRlci54O1xudmFyIGN5ID0gYmFzZVBvaW50LnkgLSBjZW50ZXIueTtcblxudmFyIHJhZDJkZWcgPSBmdW5jdGlvbiByYWQyZGVnKHJhZCkge1xuICByZXR1cm4gcmFkICogNTcuMjk1Nzc5NTEzMDgyMzI7XG59O1xuXG52YXIgZ2V0QW5nbGVWYWx1ZSA9IGZ1bmN0aW9uIGdldEFuZ2xlVmFsdWUoc3RlcCwgb2Zmc2V0WCwgb2Zmc2V0WSkge1xuICB2YXIgeCA9IG9mZnNldFggLSBjZW50ZXIueDtcbiAgdmFyIHkgPSBvZmZzZXRZIC0gY2VudGVyLnk7XG4gIHZhciBhdGFuID0gTWF0aC5hdGFuMihjeCwgY3kpIC0gTWF0aC5hdGFuMih4LCB5KTtcbiAgdmFyIGRlZyA9IHJhZDJkZWcoYXRhbik7XG4gIGRlZyA9IE1hdGgucm91bmQoZGVnIC8gc3RlcCkgKiBzdGVwO1xuICBkZWcgJT0gMzYwO1xuICB2YXIgdmFsdWUgPSBNYXRoLmZsb29yKGRlZyAvIHN0ZXApIHx8IDA7XG4gIHZhciBkZWx0YSA9IE1hdGgucG93KHgsIDIpICsgTWF0aC5wb3coeSwgMik7XG4gIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChkZWx0YSk7XG4gIHJldHVybiB7XG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGRpc3RhbmNlOiBkaXN0YW5jZVxuICB9O1xufTtcblxudmFyIGdldEhvdXJzID0gZnVuY3Rpb24gZ2V0SG91cnMob2Zmc2V0WCwgb2Zmc2V0WSwgYW1wbSkge1xuICB2YXIgX2dldEFuZ2xlVmFsdWUgPSBnZXRBbmdsZVZhbHVlKDMwLCBvZmZzZXRYLCBvZmZzZXRZKSxcbiAgICAgIHZhbHVlID0gX2dldEFuZ2xlVmFsdWUudmFsdWUsXG4gICAgICBkaXN0YW5jZSA9IF9nZXRBbmdsZVZhbHVlLmRpc3RhbmNlO1xuXG4gIHZhbHVlID0gdmFsdWUgfHwgMTI7XG5cbiAgaWYgKCFhbXBtKSB7XG4gICAgaWYgKGRpc3RhbmNlIDwgOTApIHtcbiAgICAgIHZhbHVlICs9IDEyO1xuICAgICAgdmFsdWUgJT0gMjQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhbHVlICU9IDEyO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcbnZhciBnZXRNaW51dGVzID0gZnVuY3Rpb24gZ2V0TWludXRlcyhvZmZzZXRYLCBvZmZzZXRZKSB7XG4gIHZhciBzdGVwID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAxO1xuICB2YXIgYW5nbGVTdGVwID0gc3RlcCAqIDY7XG5cbiAgdmFyIF9nZXRBbmdsZVZhbHVlMiA9IGdldEFuZ2xlVmFsdWUoYW5nbGVTdGVwLCBvZmZzZXRYLCBvZmZzZXRZKSxcbiAgICAgIHZhbHVlID0gX2dldEFuZ2xlVmFsdWUyLnZhbHVlO1xuXG4gIHZhbHVlID0gdmFsdWUgKiBzdGVwICUgNjA7XG4gIHJldHVybiB2YWx1ZTtcbn07XG52YXIgZ2V0TWVyaWRpZW0gPSBmdW5jdGlvbiBnZXRNZXJpZGllbShkYXRlLCB1dGlscykge1xuICByZXR1cm4gdXRpbHMuZ2V0SG91cnMoZGF0ZSkgPj0gMTIgPyAncG0nIDogJ2FtJztcbn07XG52YXIgY29udmVydFRvTWVyaWRpZW0gPSBmdW5jdGlvbiBjb252ZXJ0VG9NZXJpZGllbSh0aW1lLCBtZXJpZGllbSwgYW1wbSwgdXRpbHMpIHtcbiAgaWYgKGFtcG0pIHtcbiAgICB2YXIgY3VycmVudE1lcmlkaWVtID0gdXRpbHMuZ2V0SG91cnModGltZSkgPj0gMTIgPyAncG0nIDogJ2FtJztcblxuICAgIGlmIChjdXJyZW50TWVyaWRpZW0gIT09IG1lcmlkaWVtKSB7XG4gICAgICB2YXIgaG91cnMgPSBtZXJpZGllbSA9PT0gJ2FtJyA/IHV0aWxzLmdldEhvdXJzKHRpbWUpIC0gMTIgOiB1dGlscy5nZXRIb3Vycyh0aW1lKSArIDEyO1xuICAgICAgcmV0dXJuIHV0aWxzLnNldEhvdXJzKHRpbWUsIGhvdXJzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGltZTtcbn07XG5cbnZhciBDbG9jayA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ2xvY2ssIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENsb2NrKCkge1xuICAgIHZhciBfZ2V0UHJvdG90eXBlT2YyO1xuXG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENsb2NrKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfZ2V0UHJvdG90eXBlT2YyID0gX2dldFByb3RvdHlwZU9mKENsb2NrKSkuY2FsbC5hcHBseShfZ2V0UHJvdG90eXBlT2YyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG4gICAgX3RoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcblxuICAgIF90aGlzLmhhbmRsZVRvdWNoTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBfdGhpcy5pc01vdmluZyA9IHRydWU7XG5cbiAgICAgIF90aGlzLnNldFRpbWUoZSk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZVRvdWNoRW5kID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChfdGhpcy5pc01vdmluZykge1xuICAgICAgICBfdGhpcy5zZXRUaW1lKGUsIHRydWUpO1xuXG4gICAgICAgIF90aGlzLmlzTW92aW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZU1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgLy8gTW91c2VFdmVudC53aGljaCBpcyBkZXByZWNhdGVkLCBidXQgTW91c2VFdmVudC5idXR0b25zIGlzIG5vdCBzdXBwb3J0ZWQgaW4gU2FmYXJpXG5cbiAgICAgIHZhciBpc0J1dHRvblByZXNzZWQgPSB0eXBlb2YgZS5idXR0b25zID09PSAndW5kZWZpbmVkJyA/IGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDEgOiBlLmJ1dHRvbnMgPT09IDE7XG5cbiAgICAgIGlmIChpc0J1dHRvblByZXNzZWQpIHtcbiAgICAgICAgX3RoaXMuc2V0VGltZShlLm5hdGl2ZUV2ZW50LCBmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZU1vdXNlVXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKF90aGlzLmlzTW92aW5nKSB7XG4gICAgICAgIF90aGlzLmlzTW92aW5nID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFRpbWUoZS5uYXRpdmVFdmVudCwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhc1NlbGVjdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgdHlwZSA9IF90aGlzJHByb3BzLnR5cGUsXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRwcm9wcy52YWx1ZTtcblxuICAgICAgaWYgKHR5cGUgPT09IENsb2NrVHlwZSQxLkhPVVJTKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWUgJSA1ID09PSAwO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2xvY2ssIFt7XG4gICAga2V5OiBcInNldFRpbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VGltZShlKSB7XG4gICAgICB2YXIgaXNGaW5pc2ggPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgICAgdmFyIG9mZnNldFggPSBlLm9mZnNldFgsXG4gICAgICAgICAgb2Zmc2V0WSA9IGUub2Zmc2V0WTtcblxuICAgICAgaWYgKHR5cGVvZiBvZmZzZXRYID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBvZmZzZXRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICBvZmZzZXRZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMudHlwZSA9PT0gQ2xvY2tUeXBlJDEuU0VDT05EUyB8fCB0aGlzLnByb3BzLnR5cGUgPT09IENsb2NrVHlwZSQxLk1JTlVURVMgPyBnZXRNaW51dGVzKG9mZnNldFgsIG9mZnNldFksIHRoaXMucHJvcHMubWludXRlc1N0ZXApIDogZ2V0SG91cnMob2Zmc2V0WCwgb2Zmc2V0WSwgQm9vbGVhbih0aGlzLnByb3BzLmFtcG0pKTtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUsIGlzRmluaXNoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzZXMgPSBfdGhpcyRwcm9wczIuY2xhc3NlcyxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHByb3BzMi52YWx1ZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzMi5jaGlsZHJlbixcbiAgICAgICAgICB0eXBlID0gX3RoaXMkcHJvcHMyLnR5cGUsXG4gICAgICAgICAgYW1wbSA9IF90aGlzJHByb3BzMi5hbXBtO1xuICAgICAgdmFyIGlzUG9pbnRlcklubmVyID0gIWFtcG0gJiYgdHlwZSA9PT0gQ2xvY2tUeXBlJDEuSE9VUlMgJiYgKHZhbHVlIDwgMSB8fCB2YWx1ZSA+IDEyKTtcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLmNvbnRhaW5lclxuICAgICAgfSwgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5jbG9ja1xuICAgICAgfSwgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHJvbGU6IFwibWVudVwiLFxuICAgICAgICB0YWJJbmRleDogLTEsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5zcXVhcmVNYXNrLFxuICAgICAgICBvblRvdWNoTW92ZTogdGhpcy5oYW5kbGVUb3VjaE1vdmUsXG4gICAgICAgIG9uVG91Y2hFbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmQsXG4gICAgICAgIG9uTW91c2VVcDogdGhpcy5oYW5kbGVNb3VzZVVwLFxuICAgICAgICBvbk1vdXNlTW92ZTogdGhpcy5oYW5kbGVNb3ZlXG4gICAgICB9KSwgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5waW5cbiAgICAgIH0pLCBjcmVhdGVFbGVtZW50KENsb2NrUG9pbnRlciQxLCB7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaXNJbm5lcjogaXNQb2ludGVySW5uZXIsXG4gICAgICAgIGhhc1NlbGVjdGVkOiB0aGlzLmhhc1NlbGVjdGVkKClcbiAgICAgIH0pLCBjaGlsZHJlbikpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDbG9jaztcbn0oQ29tcG9uZW50KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IENsb2NrLnByb3BUeXBlcyA9IHtcbiAgdHlwZTogb25lT2YoT2JqZWN0LmtleXMoQ2xvY2tUeXBlJDEpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIENsb2NrVHlwZSQxW2tleV07XG4gIH0pKS5pc1JlcXVpcmVkLFxuICB2YWx1ZTogbnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9uQ2hhbmdlOiBmdW5jLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBhcnJheU9mKG5vZGUpLmlzUmVxdWlyZWQsXG4gIGFtcG06IGJvb2wsXG4gIG1pbnV0ZXNTdGVwOiBudW1iZXIsXG4gIGlubmVyUmVmOiBhbnlcbn0gOiB2b2lkIDA7XG5DbG9jay5kZWZhdWx0UHJvcHMgPSB7XG4gIGFtcG06IGZhbHNlLFxuICBtaW51dGVzU3RlcDogMVxufTtcbnZhciBzdHlsZXMkMSA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4gY3JlYXRlU3R5bGVzKHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcsXG4gICAgICBtYXJnaW46IFwiXCIuY29uY2F0KHRoZW1lLnNwYWNpbmcoMiksIFwicHggMCBcIikuY29uY2F0KHRoZW1lLnNwYWNpbmcoMSksIFwicHhcIilcbiAgICB9LFxuICAgIGNsb2NrOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLC4wNyknLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGhlaWdodDogMjYwLFxuICAgICAgd2lkdGg6IDI2MCxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgekluZGV4OiAxXG4gICAgfSxcbiAgICBzcXVhcmVNYXNrOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdhdXRvJyxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIHRvdWNoQWN0aW9uczogJ25vbmUnLFxuICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBjdXJzb3I6ICdtb3ZlJ1xuICAgICAgfVxuICAgIH0sXG4gICAgcGluOiB7XG4gICAgICB3aWR0aDogNixcbiAgICAgIGhlaWdodDogNixcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6ICc1MCUnLFxuICAgICAgbGVmdDogJzUwJScsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknXG4gICAgfVxuICB9KTtcbn07XG52YXIgQ2xvY2skMSA9IHdpdGhTdHlsZXMoc3R5bGVzJDEsIHtcbiAgbmFtZTogJ011aVBpY2tlcnNDbG9jaydcbn0pKENsb2NrKTtcblxuZXhwb3J0IHsgQ2xvY2sgYXMgQywgQ2xvY2skMSBhcyBhLCBDbG9ja1R5cGUkMSBhcyBiLCBjb252ZXJ0VG9NZXJpZGllbSBhcyBjLCBnZXRNZXJpZGllbSBhcyBnLCBzdHlsZXMkMSBhcyBzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1DbG9jay0xM2M4ZjMzZC5qcy5tYXBcbiIsImltcG9ydCB7IHVzZU1lbW8sIGNyZWF0ZUVsZW1lbnQsIG1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBvYmplY3QsIGZ1bmMsIGJvb2wsIG51bWJlciwgb25lT2YgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHUgYXMgdXNlVXRpbHMgfSBmcm9tICcuL3VzZVV0aWxzLWNmYjk2YWM5LmpzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZic7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzJztcbmltcG9ydCB7IGIgYXMgQ2xvY2tUeXBlLCBnIGFzIGdldE1lcmlkaWVtLCBjIGFzIGNvbnZlcnRUb01lcmlkaWVtLCBhIGFzIENsb2NrIH0gZnJvbSAnLi9DbG9jay0xM2M4ZjMzZC5qcyc7XG5cbnZhciBwb3NpdGlvbnMgPSB7XG4gIDA6IFswLCA0MF0sXG4gIDE6IFs1NSwgMTkuNl0sXG4gIDI6IFs5NC40LCA1OS41XSxcbiAgMzogWzEwOSwgMTE0XSxcbiAgNDogWzk0LjQsIDE2OC41XSxcbiAgNTogWzU0LjUsIDIwOC40XSxcbiAgNjogWzAsIDIyM10sXG4gIDc6IFstNTQuNSwgMjA4LjRdLFxuICA4OiBbLTk0LjQsIDE2OC41XSxcbiAgOTogWy0xMDksIDExNF0sXG4gIDEwOiBbLTk0LjQsIDU5LjVdLFxuICAxMTogWy01NC41LCAxOS42XSxcbiAgMTI6IFswLCA1XSxcbiAgMTM6IFszNi45LCA0OS45XSxcbiAgMTQ6IFs2NCwgNzddLFxuICAxNTogWzc0LCAxMTRdLFxuICAxNjogWzY0LCAxNTFdLFxuICAxNzogWzM3LCAxNzhdLFxuICAxODogWzAsIDE4OF0sXG4gIDE5OiBbLTM3LCAxNzhdLFxuICAyMDogWy02NCwgMTUxXSxcbiAgMjE6IFstNzQsIDExNF0sXG4gIDIyOiBbLTY0LCA3N10sXG4gIDIzOiBbLTM3LCA1MF1cbn07XG52YXIgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhmdW5jdGlvbiAodGhlbWUpIHtcbiAgdmFyIHNpemUgPSB0aGVtZS5zcGFjaW5nKDQpO1xuICByZXR1cm4ge1xuICAgIGNsb2NrTnVtYmVyOiB7XG4gICAgICB3aWR0aDogc2l6ZSxcbiAgICAgIGhlaWdodDogMzIsXG4gICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGxlZnQ6IFwiY2FsYygoMTAwJSAtIFwiLmNvbmNhdCh0eXBlb2Ygc2l6ZSA9PT0gJ251bWJlcicgPyBcIlwiLmNvbmNhdChzaXplLCBcInB4XCIpIDogc2l6ZSwgXCIpIC8gMilcIiksXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5IDogdGhlbWUucGFsZXR0ZS50ZXh0LmhpbnRcbiAgICB9LFxuICAgIGNsb2NrTnVtYmVyU2VsZWN0ZWQ6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuY29udHJhc3RUZXh0XG4gICAgfVxuICB9O1xufSwge1xuICBuYW1lOiAnTXVpUGlja2Vyc0Nsb2NrTnVtYmVyJ1xufSk7XG52YXIgQ2xvY2tOdW1iZXIgPSBmdW5jdGlvbiBDbG9ja051bWJlcihfcmVmKSB7XG4gIHZhciBzZWxlY3RlZCA9IF9yZWYuc2VsZWN0ZWQsXG4gICAgICBsYWJlbCA9IF9yZWYubGFiZWwsXG4gICAgICBpbmRleCA9IF9yZWYuaW5kZXgsXG4gICAgICBpc0lubmVyID0gX3JlZi5pc0lubmVyO1xuICB2YXIgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICB2YXIgY2xhc3NOYW1lID0gY2xzeChjbGFzc2VzLmNsb2NrTnVtYmVyLCBzZWxlY3RlZCAmJiBjbGFzc2VzLmNsb2NrTnVtYmVyU2VsZWN0ZWQpO1xuICB2YXIgdHJhbnNmb3JtU3R5bGUgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBwb3NpdGlvbnNbaW5kZXhdO1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKFwiLmNvbmNhdChwb3NpdGlvblswXSwgXCJweCwgXCIpLmNvbmNhdChwb3NpdGlvblsxXSwgXCJweFwiKVxuICAgIH07XG4gIH0sIFtpbmRleF0pO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCB7XG4gICAgY29tcG9uZW50OiBcInNwYW5cIixcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICB2YXJpYW50OiBpc0lubmVyID8gJ2JvZHkyJyA6ICdib2R5MScsXG4gICAgc3R5bGU6IHRyYW5zZm9ybVN0eWxlLFxuICAgIGNoaWxkcmVuOiBsYWJlbFxuICB9KTtcbn07XG5cbnZhciBnZXRIb3VyTnVtYmVycyA9IGZ1bmN0aW9uIGdldEhvdXJOdW1iZXJzKF9yZWYpIHtcbiAgdmFyIGFtcG0gPSBfcmVmLmFtcG0sXG4gICAgICB1dGlscyA9IF9yZWYudXRpbHMsXG4gICAgICBkYXRlID0gX3JlZi5kYXRlO1xuICB2YXIgY3VycmVudEhvdXJzID0gdXRpbHMuZ2V0SG91cnMoZGF0ZSk7XG4gIHZhciBob3VyTnVtYmVycyA9IFtdO1xuICB2YXIgc3RhcnRIb3VyID0gYW1wbSA/IDEgOiAwO1xuICB2YXIgZW5kSG91ciA9IGFtcG0gPyAxMiA6IDIzO1xuXG4gIHZhciBpc1NlbGVjdGVkID0gZnVuY3Rpb24gaXNTZWxlY3RlZChob3VyKSB7XG4gICAgaWYgKGFtcG0pIHtcbiAgICAgIGlmIChob3VyID09PSAxMikge1xuICAgICAgICByZXR1cm4gY3VycmVudEhvdXJzID09PSAxMiB8fCBjdXJyZW50SG91cnMgPT09IDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjdXJyZW50SG91cnMgPT09IGhvdXIgfHwgY3VycmVudEhvdXJzIC0gMTIgPT09IGhvdXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRIb3VycyA9PT0gaG91cjtcbiAgfTtcblxuICBmb3IgKHZhciBob3VyID0gc3RhcnRIb3VyOyBob3VyIDw9IGVuZEhvdXI7IGhvdXIgKz0gMSkge1xuICAgIHZhciBsYWJlbCA9IGhvdXIudG9TdHJpbmcoKTtcblxuICAgIGlmIChob3VyID09PSAwKSB7XG4gICAgICBsYWJlbCA9ICcwMCc7XG4gICAgfVxuXG4gICAgdmFyIHByb3BzID0ge1xuICAgICAgaW5kZXg6IGhvdXIsXG4gICAgICBsYWJlbDogdXRpbHMuZm9ybWF0TnVtYmVyKGxhYmVsKSxcbiAgICAgIHNlbGVjdGVkOiBpc1NlbGVjdGVkKGhvdXIpLFxuICAgICAgaXNJbm5lcjogIWFtcG0gJiYgKGhvdXIgPT09IDAgfHwgaG91ciA+IDEyKVxuICAgIH07XG4gICAgaG91ck51bWJlcnMucHVzaChjcmVhdGVFbGVtZW50KENsb2NrTnVtYmVyLCBfZXh0ZW5kcyh7XG4gICAgICBrZXk6IGhvdXJcbiAgICB9LCBwcm9wcykpKTtcbiAgfVxuXG4gIHJldHVybiBob3VyTnVtYmVycztcbn07XG52YXIgZ2V0TWludXRlc051bWJlcnMgPSBmdW5jdGlvbiBnZXRNaW51dGVzTnVtYmVycyhfcmVmMikge1xuICB2YXIgdmFsdWUgPSBfcmVmMi52YWx1ZSxcbiAgICAgIHV0aWxzID0gX3JlZjIudXRpbHM7XG4gIHZhciBmID0gdXRpbHMuZm9ybWF0TnVtYmVyO1xuICByZXR1cm4gW2NyZWF0ZUVsZW1lbnQoQ2xvY2tOdW1iZXIsIHtcbiAgICBsYWJlbDogZignMDAnKSxcbiAgICBzZWxlY3RlZDogdmFsdWUgPT09IDAsXG4gICAgaW5kZXg6IDEyLFxuICAgIGtleTogMTJcbiAgfSksIGNyZWF0ZUVsZW1lbnQoQ2xvY2tOdW1iZXIsIHtcbiAgICBsYWJlbDogZignMDUnKSxcbiAgICBzZWxlY3RlZDogdmFsdWUgPT09IDUsXG4gICAgaW5kZXg6IDEsXG4gICAga2V5OiAxXG4gIH0pLCBjcmVhdGVFbGVtZW50KENsb2NrTnVtYmVyLCB7XG4gICAgbGFiZWw6IGYoJzEwJyksXG4gICAgc2VsZWN0ZWQ6IHZhbHVlID09PSAxMCxcbiAgICBpbmRleDogMixcbiAgICBrZXk6IDJcbiAgfSksIGNyZWF0ZUVsZW1lbnQoQ2xvY2tOdW1iZXIsIHtcbiAgICBsYWJlbDogZignMTUnKSxcbiAgICBzZWxlY3RlZDogdmFsdWUgPT09IDE1LFxuICAgIGluZGV4OiAzLFxuICAgIGtleTogM1xuICB9KSwgY3JlYXRlRWxlbWVudChDbG9ja051bWJlciwge1xuICAgIGxhYmVsOiBmKCcyMCcpLFxuICAgIHNlbGVjdGVkOiB2YWx1ZSA9PT0gMjAsXG4gICAgaW5kZXg6IDQsXG4gICAga2V5OiA0XG4gIH0pLCBjcmVhdGVFbGVtZW50KENsb2NrTnVtYmVyLCB7XG4gICAgbGFiZWw6IGYoJzI1JyksXG4gICAgc2VsZWN0ZWQ6IHZhbHVlID09PSAyNSxcbiAgICBpbmRleDogNSxcbiAgICBrZXk6IDVcbiAgfSksIGNyZWF0ZUVsZW1lbnQoQ2xvY2tOdW1iZXIsIHtcbiAgICBsYWJlbDogZignMzAnKSxcbiAgICBzZWxlY3RlZDogdmFsdWUgPT09IDMwLFxuICAgIGluZGV4OiA2LFxuICAgIGtleTogNlxuICB9KSwgY3JlYXRlRWxlbWVudChDbG9ja051bWJlciwge1xuICAgIGxhYmVsOiBmKCczNScpLFxuICAgIHNlbGVjdGVkOiB2YWx1ZSA9PT0gMzUsXG4gICAgaW5kZXg6IDcsXG4gICAga2V5OiA3XG4gIH0pLCBjcmVhdGVFbGVtZW50KENsb2NrTnVtYmVyLCB7XG4gICAgbGFiZWw6IGYoJzQwJyksXG4gICAgc2VsZWN0ZWQ6IHZhbHVlID09PSA0MCxcbiAgICBpbmRleDogOCxcbiAgICBrZXk6IDhcbiAgfSksIGNyZWF0ZUVsZW1lbnQoQ2xvY2tOdW1iZXIsIHtcbiAgICBsYWJlbDogZignNDUnKSxcbiAgICBzZWxlY3RlZDogdmFsdWUgPT09IDQ1LFxuICAgIGluZGV4OiA5LFxuICAgIGtleTogOVxuICB9KSwgY3JlYXRlRWxlbWVudChDbG9ja051bWJlciwge1xuICAgIGxhYmVsOiBmKCc1MCcpLFxuICAgIHNlbGVjdGVkOiB2YWx1ZSA9PT0gNTAsXG4gICAgaW5kZXg6IDEwLFxuICAgIGtleTogMTBcbiAgfSksIGNyZWF0ZUVsZW1lbnQoQ2xvY2tOdW1iZXIsIHtcbiAgICBsYWJlbDogZignNTUnKSxcbiAgICBzZWxlY3RlZDogdmFsdWUgPT09IDU1LFxuICAgIGluZGV4OiAxMSxcbiAgICBrZXk6IDExXG4gIH0pXTtcbn07XG5cbnZhciBDbG9ja1ZpZXcgPSBmdW5jdGlvbiBDbG9ja1ZpZXcoX3JlZikge1xuICB2YXIgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgIG9uSG91ckNoYW5nZSA9IF9yZWYub25Ib3VyQ2hhbmdlLFxuICAgICAgb25NaW51dGVzQ2hhbmdlID0gX3JlZi5vbk1pbnV0ZXNDaGFuZ2UsXG4gICAgICBvblNlY29uZHNDaGFuZ2UgPSBfcmVmLm9uU2Vjb25kc0NoYW5nZSxcbiAgICAgIGFtcG0gPSBfcmVmLmFtcG0sXG4gICAgICBkYXRlID0gX3JlZi5kYXRlLFxuICAgICAgbWludXRlc1N0ZXAgPSBfcmVmLm1pbnV0ZXNTdGVwO1xuICB2YXIgdXRpbHMgPSB1c2VVdGlscygpO1xuICB2YXIgdmlld1Byb3BzID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIENsb2NrVHlwZS5IT1VSUzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogdXRpbHMuZ2V0SG91cnMoZGF0ZSksXG4gICAgICAgICAgY2hpbGRyZW46IGdldEhvdXJOdW1iZXJzKHtcbiAgICAgICAgICAgIGRhdGU6IGRhdGUsXG4gICAgICAgICAgICB1dGlsczogdXRpbHMsXG4gICAgICAgICAgICBhbXBtOiBCb29sZWFuKGFtcG0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlLCBpc0ZpbmlzaCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRNZXJpZGllbSA9IGdldE1lcmlkaWVtKGRhdGUsIHV0aWxzKTtcbiAgICAgICAgICAgIHZhciB1cGRhdGVkVGltZVdpdGhNZXJpZGllbSA9IGNvbnZlcnRUb01lcmlkaWVtKHV0aWxzLnNldEhvdXJzKGRhdGUsIHZhbHVlKSwgY3VycmVudE1lcmlkaWVtLCBCb29sZWFuKGFtcG0pLCB1dGlscyk7XG4gICAgICAgICAgICBvbkhvdXJDaGFuZ2UodXBkYXRlZFRpbWVXaXRoTWVyaWRpZW0sIGlzRmluaXNoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgIGNhc2UgQ2xvY2tUeXBlLk1JTlVURVM6XG4gICAgICAgIHZhciBtaW51dGVzVmFsdWUgPSB1dGlscy5nZXRNaW51dGVzKGRhdGUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBtaW51dGVzVmFsdWUsXG4gICAgICAgICAgY2hpbGRyZW46IGdldE1pbnV0ZXNOdW1iZXJzKHtcbiAgICAgICAgICAgIHZhbHVlOiBtaW51dGVzVmFsdWUsXG4gICAgICAgICAgICB1dGlsczogdXRpbHNcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUsIGlzRmluaXNoKSB7XG4gICAgICAgICAgICB2YXIgdXBkYXRlZFRpbWUgPSB1dGlscy5zZXRNaW51dGVzKGRhdGUsIHZhbHVlKTtcbiAgICAgICAgICAgIG9uTWludXRlc0NoYW5nZSh1cGRhdGVkVGltZSwgaXNGaW5pc2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgY2FzZSBDbG9ja1R5cGUuU0VDT05EUzpcbiAgICAgICAgdmFyIHNlY29uZHNWYWx1ZSA9IHV0aWxzLmdldFNlY29uZHMoZGF0ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IHNlY29uZHNWYWx1ZSxcbiAgICAgICAgICBjaGlsZHJlbjogZ2V0TWludXRlc051bWJlcnMoe1xuICAgICAgICAgICAgdmFsdWU6IHNlY29uZHNWYWx1ZSxcbiAgICAgICAgICAgIHV0aWxzOiB1dGlsc1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSwgaXNGaW5pc2gpIHtcbiAgICAgICAgICAgIHZhciB1cGRhdGVkVGltZSA9IHV0aWxzLnNldFNlY29uZHMoZGF0ZSwgdmFsdWUpO1xuICAgICAgICAgICAgb25TZWNvbmRzQ2hhbmdlKHVwZGF0ZWRUaW1lLCBpc0ZpbmlzaCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IHByb3ZpZGUgdGhlIHR5cGUgZm9yIFRpbWVQaWNrZXJWaWV3Jyk7XG4gICAgfVxuICB9LCBbYW1wbSwgZGF0ZSwgb25Ib3VyQ2hhbmdlLCBvbk1pbnV0ZXNDaGFuZ2UsIG9uU2Vjb25kc0NoYW5nZSwgdHlwZSwgdXRpbHNdKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoQ2xvY2ssIF9leHRlbmRzKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGFtcG06IGFtcG0sXG4gICAgbWludXRlc1N0ZXA6IG1pbnV0ZXNTdGVwXG4gIH0sIHZpZXdQcm9wcykpO1xufTtcbkNsb2NrVmlldy5kaXNwbGF5TmFtZSA9ICdUaW1lUGlja2VyVmlldyc7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBDbG9ja1ZpZXcucHJvcFR5cGVzID0ge1xuICBkYXRlOiBvYmplY3QuaXNSZXF1aXJlZCxcbiAgb25Ib3VyQ2hhbmdlOiBmdW5jLmlzUmVxdWlyZWQsXG4gIG9uTWludXRlc0NoYW5nZTogZnVuYy5pc1JlcXVpcmVkLFxuICBvblNlY29uZHNDaGFuZ2U6IGZ1bmMuaXNSZXF1aXJlZCxcbiAgYW1wbTogYm9vbCxcbiAgbWludXRlc1N0ZXA6IG51bWJlcixcbiAgdHlwZTogb25lT2YoT2JqZWN0LmtleXMoQ2xvY2tUeXBlKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBDbG9ja1R5cGVba2V5XTtcbiAgfSkpLmlzUmVxdWlyZWRcbn0gOiB2b2lkIDA7XG5DbG9ja1ZpZXcuZGVmYXVsdFByb3BzID0ge1xuICBhbXBtOiB0cnVlLFxuICBtaW51dGVzU3RlcDogMVxufTtcbnZhciBDbG9ja1ZpZXckMSA9IG1lbW8oQ2xvY2tWaWV3KTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xvY2tWaWV3JDE7XG5leHBvcnQgeyBDbG9ja1ZpZXcgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNsb2NrVmlldy5qcy5tYXBcbiIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IHsgdXNlTWVtbywgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1IGFzIHVzZVV0aWxzIH0gZnJvbSAnLi91c2VVdGlscy1jZmI5NmFjOS5qcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IFAgYXMgUGlja2VyVG9vbGJhciwgVCBhcyBUb29sYmFyQnV0dG9uLCBtIGFzIG1ha2VQaWNrZXJXaXRoU3RhdGUsIGEgYXMgUHVyZURhdGVJbnB1dCwgdSBhcyB1c2VQaWNrZXJTdGF0ZSwgSyBhcyBLZXlib2FyZERhdGVJbnB1dCwgYiBhcyB1c2VLZXlib2FyZFBpY2tlclN0YXRlIH0gZnJvbSAnLi9tYWtlUGlja2VyV2l0aFN0YXRlLWZlZTM5NzY1LmpzJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgJy4vV3JhcHBlci0yNDE5NjZkNy5qcyc7XG5pbXBvcnQgeyBpIGFzIGlzWWVhck9ubHlWaWV3LCBiIGFzIGlzWWVhckFuZE1vbnRoVmlld3MsIGcgYXMgZ2V0Rm9ybWF0QnlWaWV3cyB9IGZyb20gJy4vQ2FsZW5kYXItMTFhZTYxZjYuanMnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnQnO1xuaW1wb3J0ICdyaWZtJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvU3ZnSWNvbic7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXknO1xuaW1wb3J0IHsgZCBhcyBkYXRlUGlja2VyRGVmYXVsdFByb3BzIH0gZnJvbSAnLi9QaWNrZXItMDkxMmM0MDIuanMnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMnO1xuaW1wb3J0ICcuL0RheS5qcyc7XG5pbXBvcnQgJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyJztcbmltcG9ydCAnLi9DbG9jay0xM2M4ZjMzZC5qcyc7XG5pbXBvcnQgJy4vQ2xvY2tWaWV3LmpzJztcblxudmFyIHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICB0b29sYmFyOiB7XG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnXG4gIH0sXG4gIHRvb2xiYXJMYW5kc2NhcGU6IHtcbiAgICBwYWRkaW5nOiAxNlxuICB9LFxuICBkYXRlTGFuZHNjYXBlOiB7XG4gICAgbWFyZ2luUmlnaHQ6IDE2XG4gIH1cbn0sIHtcbiAgbmFtZTogJ011aVBpY2tlcnNEYXRlUGlja2VyUm9vdCdcbn0pO1xudmFyIERhdGVQaWNrZXJUb29sYmFyID0gZnVuY3Rpb24gRGF0ZVBpY2tlclRvb2xiYXIoX3JlZikge1xuICB2YXIgZGF0ZSA9IF9yZWYuZGF0ZSxcbiAgICAgIHZpZXdzID0gX3JlZi52aWV3cyxcbiAgICAgIHNldE9wZW5WaWV3ID0gX3JlZi5zZXRPcGVuVmlldyxcbiAgICAgIGlzTGFuZHNjYXBlID0gX3JlZi5pc0xhbmRzY2FwZSxcbiAgICAgIG9wZW5WaWV3ID0gX3JlZi5vcGVuVmlldztcbiAgdmFyIHV0aWxzID0gdXNlVXRpbHMoKTtcbiAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgdmFyIGlzWWVhck9ubHkgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gaXNZZWFyT25seVZpZXcodmlld3MpO1xuICB9LCBbdmlld3NdKTtcbiAgdmFyIGlzWWVhckFuZE1vbnRoID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzWWVhckFuZE1vbnRoVmlld3Modmlld3MpO1xuICB9LCBbdmlld3NdKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoUGlja2VyVG9vbGJhciwge1xuICAgIGlzTGFuZHNjYXBlOiBpc0xhbmRzY2FwZSxcbiAgICBjbGFzc05hbWU6IGNsc3goIWlzWWVhck9ubHkgJiYgY2xhc3Nlcy50b29sYmFyLCBpc0xhbmRzY2FwZSAmJiBjbGFzc2VzLnRvb2xiYXJMYW5kc2NhcGUpXG4gIH0sIGNyZWF0ZUVsZW1lbnQoVG9vbGJhckJ1dHRvbiwge1xuICAgIHZhcmlhbnQ6IGlzWWVhck9ubHkgPyAnaDMnIDogJ3N1YnRpdGxlMScsXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIHJldHVybiBzZXRPcGVuVmlldygneWVhcicpO1xuICAgIH0sXG4gICAgc2VsZWN0ZWQ6IG9wZW5WaWV3ID09PSAneWVhcicsXG4gICAgbGFiZWw6IHV0aWxzLmdldFllYXJUZXh0KGRhdGUpXG4gIH0pLCAhaXNZZWFyT25seSAmJiAhaXNZZWFyQW5kTW9udGggJiYgY3JlYXRlRWxlbWVudChUb29sYmFyQnV0dG9uLCB7XG4gICAgdmFyaWFudDogXCJoNFwiLFxuICAgIHNlbGVjdGVkOiBvcGVuVmlldyA9PT0gJ2RhdGUnLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICByZXR1cm4gc2V0T3BlblZpZXcoJ2RhdGUnKTtcbiAgICB9LFxuICAgIGFsaWduOiBpc0xhbmRzY2FwZSA/ICdsZWZ0JyA6ICdjZW50ZXInLFxuICAgIGxhYmVsOiB1dGlscy5nZXREYXRlUGlja2VySGVhZGVyVGV4dChkYXRlKSxcbiAgICBjbGFzc05hbWU6IGNsc3goaXNMYW5kc2NhcGUgJiYgY2xhc3Nlcy5kYXRlTGFuZHNjYXBlKVxuICB9KSwgaXNZZWFyQW5kTW9udGggJiYgY3JlYXRlRWxlbWVudChUb29sYmFyQnV0dG9uLCB7XG4gICAgdmFyaWFudDogXCJoNFwiLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICByZXR1cm4gc2V0T3BlblZpZXcoJ21vbnRoJyk7XG4gICAgfSxcbiAgICBzZWxlY3RlZDogb3BlblZpZXcgPT09ICdtb250aCcsXG4gICAgbGFiZWw6IHV0aWxzLmdldE1vbnRoVGV4dChkYXRlKVxuICB9KSk7XG59O1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgZGVmYXVsdFByb3BzID0gX29iamVjdFNwcmVhZCh7fSwgZGF0ZVBpY2tlckRlZmF1bHRQcm9wcywge1xuICBvcGVuVG86ICdkYXRlJyxcbiAgdmlld3M6IFsneWVhcicsICdkYXRlJ11cbn0pO1xuXG5mdW5jdGlvbiB1c2VPcHRpb25zKHByb3BzKSB7XG4gIHZhciB1dGlscyA9IHVzZVV0aWxzKCk7XG4gIHJldHVybiB7XG4gICAgZ2V0RGVmYXVsdEZvcm1hdDogZnVuY3Rpb24gZ2V0RGVmYXVsdEZvcm1hdCgpIHtcbiAgICAgIHJldHVybiBnZXRGb3JtYXRCeVZpZXdzKHByb3BzLnZpZXdzLCB1dGlscyk7XG4gICAgfVxuICB9O1xufVxuXG52YXIgRGF0ZVBpY2tlciA9IG1ha2VQaWNrZXJXaXRoU3RhdGUoe1xuICB1c2VPcHRpb25zOiB1c2VPcHRpb25zLFxuICBJbnB1dDogUHVyZURhdGVJbnB1dCxcbiAgdXNlU3RhdGU6IHVzZVBpY2tlclN0YXRlLFxuICBEZWZhdWx0VG9vbGJhckNvbXBvbmVudDogRGF0ZVBpY2tlclRvb2xiYXJcbn0pO1xudmFyIEtleWJvYXJkRGF0ZVBpY2tlciA9IG1ha2VQaWNrZXJXaXRoU3RhdGUoe1xuICB1c2VPcHRpb25zOiB1c2VPcHRpb25zLFxuICBJbnB1dDogS2V5Ym9hcmREYXRlSW5wdXQsXG4gIHVzZVN0YXRlOiB1c2VLZXlib2FyZFBpY2tlclN0YXRlLFxuICBEZWZhdWx0VG9vbGJhckNvbXBvbmVudDogRGF0ZVBpY2tlclRvb2xiYXJcbn0pO1xuRGF0ZVBpY2tlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5LZXlib2FyZERhdGVQaWNrZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgeyBEYXRlUGlja2VyLCBLZXlib2FyZERhdGVQaWNrZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPURhdGVQaWNrZXIuanMubWFwXG4iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBSZWFjdF9fZGVmYXVsdCwgeyBjcmVhdGVFbGVtZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1IGFzIHVzZVV0aWxzIH0gZnJvbSAnLi91c2VVdGlscy1jZmI5NmFjOS5qcyc7XG5pbXBvcnQgJ2Nsc3gnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IFAgYXMgUGlja2VyVG9vbGJhciwgVCBhcyBUb29sYmFyQnV0dG9uLCBjIGFzIFRvb2xiYXJUZXh0LCBtIGFzIG1ha2VQaWNrZXJXaXRoU3RhdGUsIGEgYXMgUHVyZURhdGVJbnB1dCwgdSBhcyB1c2VQaWNrZXJTdGF0ZSwgSyBhcyBLZXlib2FyZERhdGVJbnB1dCwgYiBhcyB1c2VLZXlib2FyZFBpY2tlclN0YXRlLCBwIGFzIHBpY2sxMmhPcjI0aEZvcm1hdCB9IGZyb20gJy4vbWFrZVBpY2tlcldpdGhTdGF0ZS1mZWUzOTc2NS5qcyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0ICcuL1dyYXBwZXItMjQxOTY2ZDcuanMnO1xuaW1wb3J0ICcuL0NhbGVuZGFyLTExYWU2MWY2LmpzJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50JztcbmltcG9ydCAncmlmbSc7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdmdJY29uJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheSc7XG5pbXBvcnQgeyBhIGFzIGRhdGVUaW1lUGlja2VyRGVmYXVsdFByb3BzIH0gZnJvbSAnLi9QaWNrZXItMDkxMmM0MDIuanMnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMnO1xuaW1wb3J0ICcuL0RheS5qcyc7XG5pbXBvcnQgJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyJztcbmltcG9ydCAnLi9DbG9jay0xM2M4ZjMzZC5qcyc7XG5pbXBvcnQgJy4vQ2xvY2tWaWV3LmpzJztcbmltcG9ydCB7IHUgYXMgdXNlTWVyaWRpZW1Nb2RlIH0gZnJvbSAnLi9UaW1lUGlja2VyVG9vbGJhci0wNTY0NmY3Ni5qcyc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBUYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFiJztcbmltcG9ydCBUYWJzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYnMnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcblxudmFyIFRpbWVJY29uID0gZnVuY3Rpb24gVGltZUljb24ocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU3ZnSWNvbiwgcHJvcHMsIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xMS45OSAyQzYuNDcgMiAyIDYuNDggMiAxMnM0LjQ3IDEwIDkuOTkgMTBDMTcuNTIgMjIgMjIgMTcuNTIgMjIgMTJTMTcuNTIgMiAxMS45OSAyek0xMiAyMGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDh6XCJcbiAgfSksIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBkOiBcIk0wIDBoMjR2MjRIMHpcIlxuICB9KSwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTEyLjUgN0gxMXY2bDUuMjUgMy4xNS43NS0xLjIzLTQuNS0yLjY3elwiXG4gIH0pKTtcbn07XG5cbnZhciBEYXRlUmFuZ2VJY29uID0gZnVuY3Rpb24gRGF0ZVJhbmdlSWNvbihwcm9wcykge1xuICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChTdmdJY29uLCBwcm9wcywgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTkgMTFIN3YyaDJ2LTJ6bTQgMGgtMnYyaDJ2LTJ6bTQgMGgtMnYyaDJ2LTJ6bTItN2gtMVYyaC0ydjJIOFYySDZ2Mkg1Yy0xLjExIDAtMS45OS45LTEuOTkgMkwzIDIwYzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY5aDE0djExelwiXG4gIH0pLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgZDogXCJNMCAwaDI0djI0SDB6XCJcbiAgfSkpO1xufTtcblxudmFyIHZpZXdUb1RhYkluZGV4ID0gZnVuY3Rpb24gdmlld1RvVGFiSW5kZXgob3BlblZpZXcpIHtcbiAgaWYgKG9wZW5WaWV3ID09PSAnZGF0ZScgfHwgb3BlblZpZXcgPT09ICd5ZWFyJykge1xuICAgIHJldHVybiAnZGF0ZSc7XG4gIH1cblxuICByZXR1cm4gJ3RpbWUnO1xufTtcblxudmFyIHRhYkluZGV4VG9WaWV3ID0gZnVuY3Rpb24gdGFiSW5kZXhUb1ZpZXcodGFiKSB7XG4gIGlmICh0YWIgPT09ICdkYXRlJykge1xuICAgIHJldHVybiAnZGF0ZSc7XG4gIH1cblxuICByZXR1cm4gJ2hvdXJzJztcbn07XG5cbnZhciB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKGZ1bmN0aW9uICh0aGVtZSkge1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgdmFyIHRhYnNCYWNrZ3JvdW5kID0gdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4gOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmRbXCJkZWZhdWx0XCJdO1xuICByZXR1cm4ge1xuICAgIHRhYnM6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmdldENvbnRyYXN0VGV4dCh0YWJzQmFja2dyb3VuZCksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRhYnNCYWNrZ3JvdW5kXG4gICAgfVxuICB9O1xufSwge1xuICBuYW1lOiAnTXVpUGlja2VyRFRUYWJzJ1xufSk7XG52YXIgRGF0ZVRpbWVQaWNrZXJUYWJzID0gZnVuY3Rpb24gRGF0ZVRpbWVQaWNrZXJUYWJzKF9yZWYpIHtcbiAgdmFyIHZpZXcgPSBfcmVmLnZpZXcsXG4gICAgICBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsXG4gICAgICBkYXRlUmFuZ2VJY29uID0gX3JlZi5kYXRlUmFuZ2VJY29uLFxuICAgICAgdGltZUljb24gPSBfcmVmLnRpbWVJY29uO1xuICB2YXIgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICB2YXIgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICB2YXIgaW5kaWNhdG9yQ29sb3IgPSB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyAnc2Vjb25kYXJ5JyA6ICdwcmltYXJ5JztcblxuICB2YXIgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9PSB2aWV3VG9UYWJJbmRleCh2aWV3KSkge1xuICAgICAgb25DaGFuZ2UodGFiSW5kZXhUb1ZpZXcodmFsdWUpKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoUGFwZXIsIG51bGwsIGNyZWF0ZUVsZW1lbnQoVGFicywge1xuICAgIHZhcmlhbnQ6IFwiZnVsbFdpZHRoXCIsXG4gICAgdmFsdWU6IHZpZXdUb1RhYkluZGV4KHZpZXcpLFxuICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRhYnMsXG4gICAgaW5kaWNhdG9yQ29sb3I6IGluZGljYXRvckNvbG9yXG4gIH0sIGNyZWF0ZUVsZW1lbnQoVGFiLCB7XG4gICAgdmFsdWU6IFwiZGF0ZVwiLFxuICAgIGljb246IGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIGRhdGVSYW5nZUljb24pXG4gIH0pLCBjcmVhdGVFbGVtZW50KFRhYiwge1xuICAgIHZhbHVlOiBcInRpbWVcIixcbiAgICBpY29uOiBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCB0aW1lSWNvbilcbiAgfSkpKTtcbn07XG5EYXRlVGltZVBpY2tlclRhYnMuZGVmYXVsdFByb3BzID0ge1xuICBkYXRlUmFuZ2VJY29uOiBjcmVhdGVFbGVtZW50KERhdGVSYW5nZUljb24sIG51bGwpLFxuICB0aW1lSWNvbjogY3JlYXRlRWxlbWVudChUaW1lSWNvbiwgbnVsbClcbn07XG5cbnZhciB1c2VTdHlsZXMkMSA9IG1ha2VTdHlsZXMoZnVuY3Rpb24gKF8pIHtcbiAgcmV0dXJuIHtcbiAgICB0b29sYmFyOiB7XG4gICAgICBwYWRkaW5nTGVmdDogMTYsXG4gICAgICBwYWRkaW5nUmlnaHQ6IDE2LFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnXG4gICAgfSxcbiAgICBzZXBhcmF0b3I6IHtcbiAgICAgIG1hcmdpbjogJzAgNHB4IDAgMnB4JyxcbiAgICAgIGN1cnNvcjogJ2RlZmF1bHQnXG4gICAgfVxuICB9O1xufSwge1xuICBuYW1lOiAnTXVpUGlja2VyRFRUb29sYmFyJ1xufSk7XG52YXIgRGF0ZVRpbWVQaWNrZXJUb29sYmFyID0gZnVuY3Rpb24gRGF0ZVRpbWVQaWNrZXJUb29sYmFyKF9yZWYpIHtcbiAgdmFyIGRhdGUgPSBfcmVmLmRhdGUsXG4gICAgICBvcGVuVmlldyA9IF9yZWYub3BlblZpZXcsXG4gICAgICBzZXRPcGVuVmlldyA9IF9yZWYuc2V0T3BlblZpZXcsXG4gICAgICBhbXBtID0gX3JlZi5hbXBtLFxuICAgICAgaGlkZVRhYnMgPSBfcmVmLmhpZGVUYWJzLFxuICAgICAgZGF0ZVJhbmdlSWNvbiA9IF9yZWYuZGF0ZVJhbmdlSWNvbixcbiAgICAgIHRpbWVJY29uID0gX3JlZi50aW1lSWNvbixcbiAgICAgIG9uQ2hhbmdlID0gX3JlZi5vbkNoYW5nZTtcbiAgdmFyIHV0aWxzID0gdXNlVXRpbHMoKTtcbiAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMkMSgpO1xuICB2YXIgc2hvd1RhYnMgPSAhaGlkZVRhYnMgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmlubmVySGVpZ2h0ID4gNjY3O1xuXG4gIHZhciBfdXNlTWVyaWRpZW1Nb2RlID0gdXNlTWVyaWRpZW1Nb2RlKGRhdGUsIGFtcG0sIG9uQ2hhbmdlKSxcbiAgICAgIG1lcmlkaWVtTW9kZSA9IF91c2VNZXJpZGllbU1vZGUubWVyaWRpZW1Nb2RlLFxuICAgICAgaGFuZGxlTWVyaWRpZW1DaGFuZ2UgPSBfdXNlTWVyaWRpZW1Nb2RlLmhhbmRsZU1lcmlkaWVtQ2hhbmdlO1xuXG4gIHZhciB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIHZhciBydGwgPSB0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgY3JlYXRlRWxlbWVudChQaWNrZXJUb29sYmFyLCB7XG4gICAgaXNMYW5kc2NhcGU6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy50b29sYmFyXG4gIH0sIGNyZWF0ZUVsZW1lbnQoR3JpZCwge1xuICAgIGNvbnRhaW5lcjogdHJ1ZSxcbiAgICBqdXN0aWZ5OiBcImNlbnRlclwiLFxuICAgIHdyYXA6IFwibm93cmFwXCJcbiAgfSwgY3JlYXRlRWxlbWVudChHcmlkLCB7XG4gICAgaXRlbTogdHJ1ZSxcbiAgICBjb250YWluZXI6IHRydWUsXG4gICAgeHM6IDUsXG4gICAganVzdGlmeTogXCJmbGV4LXN0YXJ0XCIsXG4gICAgZGlyZWN0aW9uOiBcImNvbHVtblwiXG4gIH0sIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgY3JlYXRlRWxlbWVudChUb29sYmFyQnV0dG9uLCB7XG4gICAgdmFyaWFudDogXCJzdWJ0aXRsZTFcIixcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgcmV0dXJuIHNldE9wZW5WaWV3KCd5ZWFyJyk7XG4gICAgfSxcbiAgICBzZWxlY3RlZDogb3BlblZpZXcgPT09ICd5ZWFyJyxcbiAgICBsYWJlbDogdXRpbHMuZ2V0WWVhclRleHQoZGF0ZSlcbiAgfSkpLCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIGNyZWF0ZUVsZW1lbnQoVG9vbGJhckJ1dHRvbiwge1xuICAgIHZhcmlhbnQ6IFwiaDRcIixcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgcmV0dXJuIHNldE9wZW5WaWV3KCdkYXRlJyk7XG4gICAgfSxcbiAgICBzZWxlY3RlZDogb3BlblZpZXcgPT09ICdkYXRlJyxcbiAgICBsYWJlbDogdXRpbHMuZ2V0RGF0ZVRpbWVQaWNrZXJIZWFkZXJUZXh0KGRhdGUpXG4gIH0pKSksIGNyZWF0ZUVsZW1lbnQoR3JpZCwge1xuICAgIGl0ZW06IHRydWUsXG4gICAgY29udGFpbmVyOiB0cnVlLFxuICAgIHhzOiA2LFxuICAgIGp1c3RpZnk6IFwiY2VudGVyXCIsXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LWVuZFwiLFxuICAgIGRpcmVjdGlvbjogcnRsID8gJ3Jvdy1yZXZlcnNlJyA6ICdyb3cnXG4gIH0sIGNyZWF0ZUVsZW1lbnQoVG9vbGJhckJ1dHRvbiwge1xuICAgIHZhcmlhbnQ6IFwiaDNcIixcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgcmV0dXJuIHNldE9wZW5WaWV3KCdob3VycycpO1xuICAgIH0sXG4gICAgc2VsZWN0ZWQ6IG9wZW5WaWV3ID09PSAnaG91cnMnLFxuICAgIGxhYmVsOiB1dGlscy5nZXRIb3VyVGV4dChkYXRlLCBhbXBtKVxuICB9KSwgY3JlYXRlRWxlbWVudChUb29sYmFyVGV4dCwge1xuICAgIHZhcmlhbnQ6IFwiaDNcIixcbiAgICBsYWJlbDogXCI6XCIsXG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLnNlcGFyYXRvclxuICB9KSwgY3JlYXRlRWxlbWVudChUb29sYmFyQnV0dG9uLCB7XG4gICAgdmFyaWFudDogXCJoM1wiLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICByZXR1cm4gc2V0T3BlblZpZXcoJ21pbnV0ZXMnKTtcbiAgICB9LFxuICAgIHNlbGVjdGVkOiBvcGVuVmlldyA9PT0gJ21pbnV0ZXMnLFxuICAgIGxhYmVsOiB1dGlscy5nZXRNaW51dGVUZXh0KGRhdGUpXG4gIH0pKSwgYW1wbSAmJiBjcmVhdGVFbGVtZW50KEdyaWQsIHtcbiAgICBpdGVtOiB0cnVlLFxuICAgIGNvbnRhaW5lcjogdHJ1ZSxcbiAgICB4czogMSxcbiAgICBkaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAganVzdGlmeTogXCJmbGV4LWVuZFwiXG4gIH0sIGNyZWF0ZUVsZW1lbnQoVG9vbGJhckJ1dHRvbiwge1xuICAgIHZhcmlhbnQ6IFwic3VidGl0bGUxXCIsXG4gICAgc2VsZWN0ZWQ6IG1lcmlkaWVtTW9kZSA9PT0gJ2FtJyxcbiAgICBsYWJlbDogdXRpbHMuZ2V0TWVyaWRpZW1UZXh0KCdhbScpLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICByZXR1cm4gaGFuZGxlTWVyaWRpZW1DaGFuZ2UoJ2FtJyk7XG4gICAgfVxuICB9KSwgY3JlYXRlRWxlbWVudChUb29sYmFyQnV0dG9uLCB7XG4gICAgdmFyaWFudDogXCJzdWJ0aXRsZTFcIixcbiAgICBzZWxlY3RlZDogbWVyaWRpZW1Nb2RlID09PSAncG0nLFxuICAgIGxhYmVsOiB1dGlscy5nZXRNZXJpZGllbVRleHQoJ3BtJyksXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIHJldHVybiBoYW5kbGVNZXJpZGllbUNoYW5nZSgncG0nKTtcbiAgICB9XG4gIH0pKSkpLCBzaG93VGFicyAmJiBjcmVhdGVFbGVtZW50KERhdGVUaW1lUGlja2VyVGFicywge1xuICAgIGRhdGVSYW5nZUljb246IGRhdGVSYW5nZUljb24sXG4gICAgdGltZUljb246IHRpbWVJY29uLFxuICAgIHZpZXc6IG9wZW5WaWV3LFxuICAgIG9uQ2hhbmdlOiBzZXRPcGVuVmlld1xuICB9KSk7XG59O1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgZGVmYXVsdFByb3BzID0gX29iamVjdFNwcmVhZCh7fSwgZGF0ZVRpbWVQaWNrZXJEZWZhdWx0UHJvcHMsIHtcbiAgd2lkZXI6IHRydWUsXG4gIG9yaWVudGF0aW9uOiAncG9ydHJhaXQnLFxuICBvcGVuVG86ICdkYXRlJyxcbiAgdmlld3M6IFsneWVhcicsICdkYXRlJywgJ2hvdXJzJywgJ21pbnV0ZXMnXVxufSk7XG5cbmZ1bmN0aW9uIHVzZU9wdGlvbnMocHJvcHMpIHtcbiAgdmFyIHV0aWxzID0gdXNlVXRpbHMoKTtcblxuICBpZiAocHJvcHMub3JpZW50YXRpb24gIT09ICdwb3J0cmFpdCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlIGFyZSBub3Qgc3VwcG9ydGluZyBjdXN0b20gb3JpZW50YXRpb24gZm9yIERhdGVUaW1lUGlja2VyIHlldCA6KCcpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXREZWZhdWx0Rm9ybWF0OiBmdW5jdGlvbiBnZXREZWZhdWx0Rm9ybWF0KCkge1xuICAgICAgcmV0dXJuIHBpY2sxMmhPcjI0aEZvcm1hdChwcm9wcy5mb3JtYXQsIHByb3BzLmFtcG0sIHtcbiAgICAgICAgJzEyaCc6IHV0aWxzLmRhdGVUaW1lMTJoRm9ybWF0LFxuICAgICAgICAnMjRoJzogdXRpbHMuZGF0ZVRpbWUyNGhGb3JtYXRcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIERhdGVUaW1lUGlja2VyID0gbWFrZVBpY2tlcldpdGhTdGF0ZSh7XG4gIHVzZU9wdGlvbnM6IHVzZU9wdGlvbnMsXG4gIElucHV0OiBQdXJlRGF0ZUlucHV0LFxuICB1c2VTdGF0ZTogdXNlUGlja2VyU3RhdGUsXG4gIERlZmF1bHRUb29sYmFyQ29tcG9uZW50OiBEYXRlVGltZVBpY2tlclRvb2xiYXJcbn0pO1xudmFyIEtleWJvYXJkRGF0ZVRpbWVQaWNrZXIgPSBtYWtlUGlja2VyV2l0aFN0YXRlKHtcbiAgdXNlT3B0aW9uczogdXNlT3B0aW9ucyxcbiAgSW5wdXQ6IEtleWJvYXJkRGF0ZUlucHV0LFxuICB1c2VTdGF0ZTogdXNlS2V5Ym9hcmRQaWNrZXJTdGF0ZSxcbiAgRGVmYXVsdFRvb2xiYXJDb21wb25lbnQ6IERhdGVUaW1lUGlja2VyVG9vbGJhcixcbiAgZ2V0Q3VzdG9tUHJvcHM6IGZ1bmN0aW9uIGdldEN1c3RvbVByb3BzKHByb3BzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZnVzZTogcHJvcHMuYW1wbSA/IC9bXlxcZGFwXSsvZ2kgOiAvW15cXGRdKy9naVxuICAgIH07XG4gIH1cbn0pO1xuRGF0ZVRpbWVQaWNrZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuS2V5Ym9hcmREYXRlVGltZVBpY2tlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCB7IERhdGVUaW1lUGlja2VyLCBLZXlib2FyZERhdGVUaW1lUGlja2VyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1EYXRlVGltZVBpY2tlci5qcy5tYXBcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBib29sIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuXG52YXIgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhmdW5jdGlvbiAodGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICBkYXk6IHtcbiAgICAgIHdpZHRoOiAzNixcbiAgICAgIGhlaWdodDogMzYsXG4gICAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5jYXB0aW9uLmZvbnRTaXplLFxuICAgICAgbWFyZ2luOiAnMCAycHgnLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtLFxuICAgICAgcGFkZGluZzogMFxuICAgIH0sXG4gICAgaGlkZGVuOiB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgfSxcbiAgICBjdXJyZW50OiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICBmb250V2VpZ2h0OiA2MDBcbiAgICB9LFxuICAgIGRheVNlbGVjdGVkOiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmNvbnRyYXN0VGV4dCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW0sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgICAgfVxuICAgIH0sXG4gICAgZGF5RGlzYWJsZWQ6IHtcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuaGludFxuICAgIH1cbiAgfTtcbn0sIHtcbiAgbmFtZTogJ011aVBpY2tlcnNEYXknXG59KTtcbnZhciBEYXkgPSBmdW5jdGlvbiBEYXkoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgZGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkLFxuICAgICAgaGlkZGVuID0gX3JlZi5oaWRkZW4sXG4gICAgICBjdXJyZW50ID0gX3JlZi5jdXJyZW50LFxuICAgICAgc2VsZWN0ZWQgPSBfcmVmLnNlbGVjdGVkLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wiY2hpbGRyZW5cIiwgXCJkaXNhYmxlZFwiLCBcImhpZGRlblwiLCBcImN1cnJlbnRcIiwgXCJzZWxlY3RlZFwiXSk7XG5cbiAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgdmFyIGNsYXNzTmFtZSA9IGNsc3goY2xhc3Nlcy5kYXksIGhpZGRlbiAmJiBjbGFzc2VzLmhpZGRlbiwgY3VycmVudCAmJiBjbGFzc2VzLmN1cnJlbnQsIHNlbGVjdGVkICYmIGNsYXNzZXMuZGF5U2VsZWN0ZWQsIGRpc2FibGVkICYmIGNsYXNzZXMuZGF5RGlzYWJsZWQpO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChJY29uQnV0dG9uLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgdGFiSW5kZXg6IGhpZGRlbiB8fCBkaXNhYmxlZCA/IC0xIDogMFxuICB9LCBvdGhlciksIGNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeSwge1xuICAgIHZhcmlhbnQ6IFwiYm9keTJcIixcbiAgICBjb2xvcjogXCJpbmhlcml0XCJcbiAgfSwgY2hpbGRyZW4pKTtcbn07XG5EYXkuZGlzcGxheU5hbWUgPSAnRGF5JztcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IERheS5wcm9wVHlwZXMgPSB7XG4gIGN1cnJlbnQ6IGJvb2wsXG4gIGRpc2FibGVkOiBib29sLFxuICBoaWRkZW46IGJvb2wsXG4gIHNlbGVjdGVkOiBib29sXG59IDogdm9pZCAwO1xuRGF5LmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBoaWRkZW46IGZhbHNlLFxuICBjdXJyZW50OiBmYWxzZSxcbiAgc2VsZWN0ZWQ6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXk7XG5leHBvcnQgeyBEYXksIHVzZVN0eWxlcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RGF5LmpzLm1hcFxuIiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIGZvcndhcmRSZWYsIGNyZWF0ZUVsZW1lbnQsIHVzZUNvbnRleHQsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgb25lT2ZUeXBlLCBvYmplY3QsIHN0cmluZywgbnVtYmVyLCBpbnN0YW5jZU9mLCBvbmVPZiB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdSBhcyB1c2VVdGlscyB9IGZyb20gJy4vdXNlVXRpbHMtY2ZiOTZhYzkuanMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBhIGFzIGFycmF5SW5jbHVkZXMsIFYgYXMgVmFyaWFudENvbnRleHQsIHUgYXMgdXNlSXNvbW9ycGhpY0VmZmVjdCwgYiBhcyBWSUVXX0hFSUdIVCwgRCBhcyBESUFMT0dfV0lEVEgsIGMgYXMgRElBTE9HX1dJRFRIX1dJREVSIH0gZnJvbSAnLi9XcmFwcGVyLTI0MTk2NmQ3LmpzJztcbmltcG9ydCB7IGEgYXMgQ2FsZW5kYXIgfSBmcm9tICcuL0NhbGVuZGFyLTExYWU2MWY2LmpzJztcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5JztcbmltcG9ydCB7IENsb2NrVmlldyB9IGZyb20gJy4vQ2xvY2tWaWV3LmpzJztcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cbnZhciBkYXRlID0gb25lT2ZUeXBlKFtvYmplY3QsIHN0cmluZywgbnVtYmVyLCBpbnN0YW5jZU9mKERhdGUpXSk7XG52YXIgZGF0ZVBpY2tlclZpZXcgPSBvbmVPZihbJ3llYXInLCAnbW9udGgnLCAnZGF5J10pO1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW9iamVjdC1saXRlcmFsLXR5cGUtYXNzZXJ0aW9uICovXG5cbnZhciB0aW1lUGlja2VyRGVmYXVsdFByb3BzID0ge1xuICBhbXBtOiB0cnVlLFxuICBpbnZhbGlkRGF0ZU1lc3NhZ2U6ICdJbnZhbGlkIFRpbWUgRm9ybWF0J1xufTtcbnZhciBkYXRlUGlja2VyRGVmYXVsdFByb3BzID0ge1xuICBtaW5EYXRlOiBuZXcgRGF0ZSgnMTkwMC0wMS0wMScpLFxuICBtYXhEYXRlOiBuZXcgRGF0ZSgnMjEwMC0wMS0wMScpLFxuICBpbnZhbGlkRGF0ZU1lc3NhZ2U6ICdJbnZhbGlkIERhdGUgRm9ybWF0JyxcbiAgbWluRGF0ZU1lc3NhZ2U6ICdEYXRlIHNob3VsZCBub3QgYmUgYmVmb3JlIG1pbmltYWwgZGF0ZScsXG4gIG1heERhdGVNZXNzYWdlOiAnRGF0ZSBzaG91bGQgbm90IGJlIGFmdGVyIG1heGltYWwgZGF0ZScsXG4gIGFsbG93S2V5Ym9hcmRDb250cm9sOiB0cnVlXG59O1xudmFyIGRhdGVUaW1lUGlja2VyRGVmYXVsdFByb3BzID0gX29iamVjdFNwcmVhZCh7fSwgdGltZVBpY2tlckRlZmF1bHRQcm9wcywge30sIGRhdGVQaWNrZXJEZWZhdWx0UHJvcHMsIHtcbiAgc2hvd1RhYnM6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiB1c2VWaWV3cyh2aWV3cywgb3BlblRvLCBvbkNoYW5nZSkge1xuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gdXNlU3RhdGUob3BlblRvICYmIGFycmF5SW5jbHVkZXModmlld3MsIG9wZW5UbykgPyBvcGVuVG8gOiB2aWV3c1swXSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIG9wZW5WaWV3ID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldE9wZW5WaWV3ID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgaGFuZGxlQ2hhbmdlQW5kT3Blbk5leHQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZGF0ZSwgaXNGaW5pc2gpIHtcbiAgICB2YXIgbmV4dFZpZXdUb09wZW4gPSB2aWV3c1t2aWV3cy5pbmRleE9mKG9wZW5WaWV3KSArIDFdO1xuXG4gICAgaWYgKGlzRmluaXNoICYmIG5leHRWaWV3VG9PcGVuKSB7XG4gICAgICAvLyBkbyBub3QgY2xvc2UgcGlja2VyIGlmIG5lZWRzIHRvIHNob3cgbmV4dCB2aWV3XG4gICAgICBvbkNoYW5nZShkYXRlLCBmYWxzZSk7XG4gICAgICBzZXRPcGVuVmlldyhuZXh0Vmlld1RvT3Blbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb25DaGFuZ2UoZGF0ZSwgQm9vbGVhbihpc0ZpbmlzaCkpO1xuICB9LCBbb25DaGFuZ2UsIG9wZW5WaWV3LCB2aWV3c10pO1xuICByZXR1cm4ge1xuICAgIGhhbmRsZUNoYW5nZUFuZE9wZW5OZXh0OiBoYW5kbGVDaGFuZ2VBbmRPcGVuTmV4dCxcbiAgICBvcGVuVmlldzogb3BlblZpZXcsXG4gICAgc2V0T3BlblZpZXc6IHNldE9wZW5WaWV3XG4gIH07XG59XG5cbnZhciB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKGZ1bmN0aW9uICh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGhlaWdodDogNDAsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtXG4gICAgICB9XG4gICAgfSxcbiAgICB5ZWFyU2VsZWN0ZWQ6IHtcbiAgICAgIG1hcmdpbjogJzEwcHggMCcsXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW1cbiAgICB9LFxuICAgIHllYXJEaXNhYmxlZDoge1xuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5oaW50XG4gICAgfVxuICB9O1xufSwge1xuICBuYW1lOiAnTXVpUGlja2Vyc1llYXInXG59KTtcbnZhciBZZWFyID0gZnVuY3Rpb24gWWVhcihfcmVmKSB7XG4gIHZhciBvblNlbGVjdCA9IF9yZWYub25TZWxlY3QsXG4gICAgICBmb3J3YXJkZWRSZWYgPSBfcmVmLmZvcndhcmRlZFJlZixcbiAgICAgIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgIHNlbGVjdGVkID0gX3JlZi5zZWxlY3RlZCxcbiAgICAgIGRpc2FibGVkID0gX3JlZi5kaXNhYmxlZCxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcIm9uU2VsZWN0XCIsIFwiZm9yd2FyZGVkUmVmXCIsIFwidmFsdWVcIiwgXCJzZWxlY3RlZFwiLCBcImRpc2FibGVkXCIsIFwiY2hpbGRyZW5cIl0pO1xuXG4gIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHZhciBoYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gb25TZWxlY3QodmFsdWUpO1xuICB9LCBbb25TZWxlY3QsIHZhbHVlXSk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIF9leHRlbmRzKHtcbiAgICByb2xlOiBcImJ1dHRvblwiLFxuICAgIGNvbXBvbmVudDogXCJkaXZcIixcbiAgICB0YWJJbmRleDogZGlzYWJsZWQgPyAtMSA6IDAsXG4gICAgb25DbGljazogaGFuZGxlQ2xpY2ssXG4gICAgb25LZXlQcmVzczogaGFuZGxlQ2xpY2ssXG4gICAgY29sb3I6IHNlbGVjdGVkID8gJ3ByaW1hcnknIDogdW5kZWZpbmVkLFxuICAgIHZhcmlhbnQ6IHNlbGVjdGVkID8gJ2g1JyA6ICdzdWJ0aXRsZTEnLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICByZWY6IGZvcndhcmRlZFJlZixcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBzZWxlY3RlZCAmJiBjbGFzc2VzLnllYXJTZWxlY3RlZCwgZGlzYWJsZWQgJiYgY2xhc3Nlcy55ZWFyRGlzYWJsZWQpXG4gIH0sIG90aGVyKSk7XG59O1xuWWVhci5kaXNwbGF5TmFtZSA9ICdZZWFyJztcbnZhciBZZWFyJDEgPSBmb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFllYXIsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIGZvcndhcmRlZFJlZjogcmVmXG4gIH0pKTtcbn0pO1xuXG52YXIgdXNlU3R5bGVzJDEgPSBtYWtlU3R5bGVzKHtcbiAgY29udGFpbmVyOiB7XG4gICAgaGVpZ2h0OiAzMDAsXG4gICAgb3ZlcmZsb3dZOiAnYXV0bydcbiAgfVxufSwge1xuICBuYW1lOiAnTXVpUGlja2Vyc1llYXJTZWxlY3Rpb24nXG59KTtcbnZhciBZZWFyU2VsZWN0aW9uID0gZnVuY3Rpb24gWWVhclNlbGVjdGlvbihfcmVmKSB7XG4gIHZhciBkYXRlID0gX3JlZi5kYXRlLFxuICAgICAgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlLFxuICAgICAgb25ZZWFyQ2hhbmdlID0gX3JlZi5vblllYXJDaGFuZ2UsXG4gICAgICBtaW5EYXRlID0gX3JlZi5taW5EYXRlLFxuICAgICAgbWF4RGF0ZSA9IF9yZWYubWF4RGF0ZSxcbiAgICAgIGRpc2FibGVQYXN0ID0gX3JlZi5kaXNhYmxlUGFzdCxcbiAgICAgIGRpc2FibGVGdXR1cmUgPSBfcmVmLmRpc2FibGVGdXR1cmUsXG4gICAgICBhbmltYXRlWWVhclNjcm9sbGluZyA9IF9yZWYuYW5pbWF0ZVllYXJTY3JvbGxpbmc7XG4gIHZhciB1dGlscyA9IHVzZVV0aWxzKCk7XG4gIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzJDEoKTtcbiAgdmFyIGN1cnJlbnRWYXJpYW50ID0gdXNlQ29udGV4dChWYXJpYW50Q29udGV4dCk7XG4gIHZhciBzZWxlY3RlZFllYXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNlbGVjdGVkWWVhclJlZi5jdXJyZW50ICYmIHNlbGVjdGVkWWVhclJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZWxlY3RlZFllYXJSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgYmxvY2s6IGN1cnJlbnRWYXJpYW50ID09PSAnc3RhdGljJyA/ICduZWFyZXN0JyA6ICdjZW50ZXInLFxuICAgICAgICAgIGJlaGF2aW9yOiBhbmltYXRlWWVhclNjcm9sbGluZyA/ICdzbW9vdGgnIDogJ2F1dG8nXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBjYWxsIHdpdGhvdXQgYXJndW1lbnRzIGluIGNhc2Ugd2hlbiBzY3JvbGxJbnRvVmlldyB3b3JrcyBpbXByb3Blcmx5IChlLmcuIEZpcmVmb3ggNTItNTcpXG4gICAgICAgIHNlbGVjdGVkWWVhclJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICB2YXIgY3VycmVudFllYXIgPSB1dGlscy5nZXRZZWFyKGRhdGUpO1xuICB2YXIgb25ZZWFyU2VsZWN0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHllYXIpIHtcbiAgICB2YXIgbmV3RGF0ZSA9IHV0aWxzLnNldFllYXIoZGF0ZSwgeWVhcik7XG5cbiAgICBpZiAob25ZZWFyQ2hhbmdlKSB7XG4gICAgICBvblllYXJDaGFuZ2UobmV3RGF0ZSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UobmV3RGF0ZSwgdHJ1ZSk7XG4gIH0sIFtkYXRlLCBvbkNoYW5nZSwgb25ZZWFyQ2hhbmdlLCB1dGlsc10pO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLmNvbnRhaW5lclxuICB9LCB1dGlscy5nZXRZZWFyUmFuZ2UobWluRGF0ZSwgbWF4RGF0ZSkubWFwKGZ1bmN0aW9uICh5ZWFyKSB7XG4gICAgdmFyIHllYXJOdW1iZXIgPSB1dGlscy5nZXRZZWFyKHllYXIpO1xuICAgIHZhciBzZWxlY3RlZCA9IHllYXJOdW1iZXIgPT09IGN1cnJlbnRZZWFyO1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFllYXIkMSwge1xuICAgICAga2V5OiB1dGlscy5nZXRZZWFyVGV4dCh5ZWFyKSxcbiAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZCxcbiAgICAgIHZhbHVlOiB5ZWFyTnVtYmVyLFxuICAgICAgb25TZWxlY3Q6IG9uWWVhclNlbGVjdCxcbiAgICAgIHJlZjogc2VsZWN0ZWQgPyBzZWxlY3RlZFllYXJSZWYgOiB1bmRlZmluZWQsXG4gICAgICBkaXNhYmxlZDogQm9vbGVhbihkaXNhYmxlUGFzdCAmJiB1dGlscy5pc0JlZm9yZVllYXIoeWVhciwgdXRpbHMuZGF0ZSgpKSB8fCBkaXNhYmxlRnV0dXJlICYmIHV0aWxzLmlzQWZ0ZXJZZWFyKHllYXIsIHV0aWxzLmRhdGUoKSkpXG4gICAgfSwgdXRpbHMuZ2V0WWVhclRleHQoeWVhcikpO1xuICB9KSk7XG59O1xuXG52YXIgdXNlU3R5bGVzJDIgPSBtYWtlU3R5bGVzKGZ1bmN0aW9uICh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGZsZXg6ICcxIDAgMzMuMzMlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICBoZWlnaHQ6IDc1LFxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdmb250LXNpemUnLCB7XG4gICAgICAgIGR1cmF0aW9uOiAnMTAwbXMnXG4gICAgICB9KSxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bVxuICAgICAgfVxuICAgIH0sXG4gICAgbW9udGhTZWxlY3RlZDoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtXG4gICAgfSxcbiAgICBtb250aERpc2FibGVkOiB7XG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LmhpbnRcbiAgICB9XG4gIH07XG59LCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJzTW9udGgnXG59KTtcbnZhciBNb250aCA9IGZ1bmN0aW9uIE1vbnRoKF9yZWYpIHtcbiAgdmFyIHNlbGVjdGVkID0gX3JlZi5zZWxlY3RlZCxcbiAgICAgIG9uU2VsZWN0ID0gX3JlZi5vblNlbGVjdCxcbiAgICAgIGRpc2FibGVkID0gX3JlZi5kaXNhYmxlZCxcbiAgICAgIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcInNlbGVjdGVkXCIsIFwib25TZWxlY3RcIiwgXCJkaXNhYmxlZFwiLCBcInZhbHVlXCIsIFwiY2hpbGRyZW5cIl0pO1xuXG4gIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzJDIoKTtcbiAgdmFyIGhhbmRsZVNlbGVjdGlvbiA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBvblNlbGVjdCh2YWx1ZSk7XG4gIH0sIFtvblNlbGVjdCwgdmFsdWVdKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeSwgX2V4dGVuZHMoe1xuICAgIHJvbGU6IFwiYnV0dG9uXCIsXG4gICAgY29tcG9uZW50OiBcImRpdlwiLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIHNlbGVjdGVkICYmIGNsYXNzZXMubW9udGhTZWxlY3RlZCwgZGlzYWJsZWQgJiYgY2xhc3Nlcy5tb250aERpc2FibGVkKSxcbiAgICB0YWJJbmRleDogZGlzYWJsZWQgPyAtMSA6IDAsXG4gICAgb25DbGljazogaGFuZGxlU2VsZWN0aW9uLFxuICAgIG9uS2V5UHJlc3M6IGhhbmRsZVNlbGVjdGlvbixcbiAgICBjb2xvcjogc2VsZWN0ZWQgPyAncHJpbWFyeScgOiB1bmRlZmluZWQsXG4gICAgdmFyaWFudDogc2VsZWN0ZWQgPyAnaDUnIDogJ3N1YnRpdGxlMScsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gIH0sIG90aGVyKSk7XG59O1xuTW9udGguZGlzcGxheU5hbWUgPSAnTW9udGgnO1xuXG52YXIgdXNlU3R5bGVzJDMgPSBtYWtlU3R5bGVzKHtcbiAgY29udGFpbmVyOiB7XG4gICAgd2lkdGg6IDMxMCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBhbGlnbkNvbnRlbnQ6ICdzdHJldGNoJ1xuICB9XG59LCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJzTW9udGhTZWxlY3Rpb24nXG59KTtcbnZhciBNb250aFNlbGVjdGlvbiA9IGZ1bmN0aW9uIE1vbnRoU2VsZWN0aW9uKF9yZWYpIHtcbiAgdmFyIGRpc2FibGVQYXN0ID0gX3JlZi5kaXNhYmxlUGFzdCxcbiAgICAgIGRpc2FibGVGdXR1cmUgPSBfcmVmLmRpc2FibGVGdXR1cmUsXG4gICAgICBtaW5EYXRlID0gX3JlZi5taW5EYXRlLFxuICAgICAgbWF4RGF0ZSA9IF9yZWYubWF4RGF0ZSxcbiAgICAgIGRhdGUgPSBfcmVmLmRhdGUsXG4gICAgICBvbk1vbnRoQ2hhbmdlID0gX3JlZi5vbk1vbnRoQ2hhbmdlLFxuICAgICAgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlO1xuICB2YXIgdXRpbHMgPSB1c2VVdGlscygpO1xuICB2YXIgY2xhc3NlcyA9IHVzZVN0eWxlcyQzKCk7XG4gIHZhciBjdXJyZW50TW9udGggPSB1dGlscy5nZXRNb250aChkYXRlKTtcblxuICB2YXIgc2hvdWxkRGlzYWJsZU1vbnRoID0gZnVuY3Rpb24gc2hvdWxkRGlzYWJsZU1vbnRoKG1vbnRoKSB7XG4gICAgdmFyIG5vdyA9IHV0aWxzLmRhdGUoKTtcbiAgICB2YXIgdXRpbE1pbkRhdGUgPSB1dGlscy5kYXRlKG1pbkRhdGUpO1xuICAgIHZhciB1dGlsTWF4RGF0ZSA9IHV0aWxzLmRhdGUobWF4RGF0ZSk7XG4gICAgdmFyIGZpcnN0RW5hYmxlZE1vbnRoID0gdXRpbHMuc3RhcnRPZk1vbnRoKGRpc2FibGVQYXN0ICYmIHV0aWxzLmlzQWZ0ZXIobm93LCB1dGlsTWluRGF0ZSkgPyBub3cgOiB1dGlsTWluRGF0ZSk7XG4gICAgdmFyIGxhc3RFbmFibGVkTW9udGggPSB1dGlscy5zdGFydE9mTW9udGgoZGlzYWJsZUZ1dHVyZSAmJiB1dGlscy5pc0JlZm9yZShub3csIHV0aWxNYXhEYXRlKSA/IG5vdyA6IHV0aWxNYXhEYXRlKTtcbiAgICB2YXIgaXNCZWZvcmVGaXJzdEVuYWJsZWQgPSB1dGlscy5pc0JlZm9yZShtb250aCwgZmlyc3RFbmFibGVkTW9udGgpO1xuICAgIHZhciBpc0FmdGVyTGFzdEVuYWJsZWQgPSB1dGlscy5pc0FmdGVyKG1vbnRoLCBsYXN0RW5hYmxlZE1vbnRoKTtcbiAgICByZXR1cm4gaXNCZWZvcmVGaXJzdEVuYWJsZWQgfHwgaXNBZnRlckxhc3RFbmFibGVkO1xuICB9O1xuXG4gIHZhciBvbk1vbnRoU2VsZWN0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKG1vbnRoKSB7XG4gICAgdmFyIG5ld0RhdGUgPSB1dGlscy5zZXRNb250aChkYXRlLCBtb250aCk7XG4gICAgb25DaGFuZ2UobmV3RGF0ZSwgdHJ1ZSk7XG5cbiAgICBpZiAob25Nb250aENoYW5nZSkge1xuICAgICAgb25Nb250aENoYW5nZShuZXdEYXRlKTtcbiAgICB9XG4gIH0sIFtkYXRlLCBvbkNoYW5nZSwgb25Nb250aENoYW5nZSwgdXRpbHNdKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5jb250YWluZXJcbiAgfSwgdXRpbHMuZ2V0TW9udGhBcnJheShkYXRlKS5tYXAoZnVuY3Rpb24gKG1vbnRoKSB7XG4gICAgdmFyIG1vbnRoTnVtYmVyID0gdXRpbHMuZ2V0TW9udGgobW9udGgpO1xuICAgIHZhciBtb250aFRleHQgPSB1dGlscy5mb3JtYXQobW9udGgsICdNTU0nKTtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChNb250aCwge1xuICAgICAga2V5OiBtb250aFRleHQsXG4gICAgICB2YWx1ZTogbW9udGhOdW1iZXIsXG4gICAgICBzZWxlY3RlZDogbW9udGhOdW1iZXIgPT09IGN1cnJlbnRNb250aCxcbiAgICAgIG9uU2VsZWN0OiBvbk1vbnRoU2VsZWN0LFxuICAgICAgZGlzYWJsZWQ6IHNob3VsZERpc2FibGVNb250aChtb250aClcbiAgICB9LCBtb250aFRleHQpO1xuICB9KSk7XG59O1xuXG52YXIgZ2V0T3JpZW50YXRpb24gPSBmdW5jdGlvbiBnZXRPcmllbnRhdGlvbigpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuICdwb3J0cmFpdCc7XG4gIH1cblxuICBpZiAod2luZG93LnNjcmVlbiAmJiB3aW5kb3cuc2NyZWVuLm9yaWVudGF0aW9uICYmIHdpbmRvdy5zY3JlZW4ub3JpZW50YXRpb24uYW5nbGUpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMod2luZG93LnNjcmVlbi5vcmllbnRhdGlvbi5hbmdsZSkgPT09IDkwID8gJ2xhbmRzY2FwZScgOiAncG9ydHJhaXQnO1xuICB9IC8vIFN1cHBvcnQgSU9TIHNhZmFyaVxuXG5cbiAgaWYgKHdpbmRvdy5vcmllbnRhdGlvbikge1xuICAgIHJldHVybiBNYXRoLmFicyhOdW1iZXIod2luZG93Lm9yaWVudGF0aW9uKSkgPT09IDkwID8gJ2xhbmRzY2FwZScgOiAncG9ydHJhaXQnO1xuICB9XG5cbiAgcmV0dXJuICdwb3J0cmFpdCc7XG59O1xuXG5mdW5jdGlvbiB1c2VJc0xhbmRzY2FwZShjdXN0b21PcmllbnRhdGlvbikge1xuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gdXNlU3RhdGUoZ2V0T3JpZW50YXRpb24oKSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIG9yaWVudGF0aW9uID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldE9yaWVudGF0aW9uID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgZXZlbnRIYW5kbGVyID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBzZXRPcmllbnRhdGlvbihnZXRPcmllbnRhdGlvbigpKTtcbiAgfSwgW10pO1xuICB1c2VJc29tb3JwaGljRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCBldmVudEhhbmRsZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgZXZlbnRIYW5kbGVyKTtcbiAgICB9O1xuICB9LCBbZXZlbnRIYW5kbGVyXSk7XG4gIHZhciBvcmllbnRhdGlvblRvVXNlID0gY3VzdG9tT3JpZW50YXRpb24gfHwgb3JpZW50YXRpb247XG4gIHJldHVybiBvcmllbnRhdGlvblRvVXNlID09PSAnbGFuZHNjYXBlJztcbn1cblxuZnVuY3Rpb24gb3duS2V5cyQxKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDEodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQxKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzJDEoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxudmFyIHZpZXdzTWFwID0ge1xuICB5ZWFyOiBZZWFyU2VsZWN0aW9uLFxuICBtb250aDogTW9udGhTZWxlY3Rpb24sXG4gIGRhdGU6IENhbGVuZGFyLFxuICBob3VyczogQ2xvY2tWaWV3LFxuICBtaW51dGVzOiBDbG9ja1ZpZXcsXG4gIHNlY29uZHM6IENsb2NrVmlld1xufTtcbnZhciB1c2VTdHlsZXMkNCA9IG1ha2VTdHlsZXMoe1xuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcbiAgfSxcbiAgY29udGFpbmVyTGFuZHNjYXBlOiB7XG4gICAgZmxleERpcmVjdGlvbjogJ3JvdydcbiAgfSxcbiAgcGlja2VyVmlldzoge1xuICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXG4gICAgbWluSGVpZ2h0OiBWSUVXX0hFSUdIVCxcbiAgICBtaW5XaWR0aDogRElBTE9HX1dJRFRILFxuICAgIG1heFdpZHRoOiBESUFMT0dfV0lEVEhfV0lERVIsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICB9LFxuICBwaWNrZXJWaWV3TGFuZHNjYXBlOiB7XG4gICAgcGFkZGluZzogJzAgOHB4J1xuICB9XG59LCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJzQmFzZVBpY2tlcidcbn0pO1xudmFyIFBpY2tlciA9IGZ1bmN0aW9uIFBpY2tlcihfcmVmKSB7XG4gIHZhciBkYXRlID0gX3JlZi5kYXRlLFxuICAgICAgdmlld3MgPSBfcmVmLnZpZXdzLFxuICAgICAgZGlzYWJsZVRvb2xiYXIgPSBfcmVmLmRpc2FibGVUb29sYmFyLFxuICAgICAgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlLFxuICAgICAgb3BlblRvID0gX3JlZi5vcGVuVG8sXG4gICAgICB1bnBhcnNlZE1pbkRhdGUgPSBfcmVmLm1pbkRhdGUsXG4gICAgICB1bnBhcnNlZE1heERhdGUgPSBfcmVmLm1heERhdGUsXG4gICAgICBUb29sYmFyQ29tcG9uZW50ID0gX3JlZi5Ub29sYmFyQ29tcG9uZW50LFxuICAgICAgb3JpZW50YXRpb24gPSBfcmVmLm9yaWVudGF0aW9uLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJkYXRlXCIsIFwidmlld3NcIiwgXCJkaXNhYmxlVG9vbGJhclwiLCBcIm9uQ2hhbmdlXCIsIFwib3BlblRvXCIsIFwibWluRGF0ZVwiLCBcIm1heERhdGVcIiwgXCJUb29sYmFyQ29tcG9uZW50XCIsIFwib3JpZW50YXRpb25cIl0pO1xuXG4gIHZhciB1dGlscyA9IHVzZVV0aWxzKCk7XG4gIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzJDQoKTtcbiAgdmFyIGlzTGFuZHNjYXBlID0gdXNlSXNMYW5kc2NhcGUob3JpZW50YXRpb24pO1xuXG4gIHZhciBfdXNlVmlld3MgPSB1c2VWaWV3cyh2aWV3cywgb3BlblRvLCBvbkNoYW5nZSksXG4gICAgICBvcGVuVmlldyA9IF91c2VWaWV3cy5vcGVuVmlldyxcbiAgICAgIHNldE9wZW5WaWV3ID0gX3VzZVZpZXdzLnNldE9wZW5WaWV3LFxuICAgICAgaGFuZGxlQ2hhbmdlQW5kT3Blbk5leHQgPSBfdXNlVmlld3MuaGFuZGxlQ2hhbmdlQW5kT3Blbk5leHQ7XG5cbiAgdmFyIG1pbkRhdGUgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdXRpbHMuZGF0ZSh1bnBhcnNlZE1pbkRhdGUpO1xuICB9LCBbdW5wYXJzZWRNaW5EYXRlLCB1dGlsc10pO1xuICB2YXIgbWF4RGF0ZSA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB1dGlscy5kYXRlKHVucGFyc2VkTWF4RGF0ZSk7XG4gIH0sIFt1bnBhcnNlZE1heERhdGUsIHV0aWxzXSk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5jb250YWluZXIsIGlzTGFuZHNjYXBlICYmIGNsYXNzZXMuY29udGFpbmVyTGFuZHNjYXBlKVxuICB9LCAhZGlzYWJsZVRvb2xiYXIgJiYgY3JlYXRlRWxlbWVudChUb29sYmFyQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIHZpZXdzOiB2aWV3cyxcbiAgICBpc0xhbmRzY2FwZTogaXNMYW5kc2NhcGUsXG4gICAgZGF0ZTogZGF0ZSxcbiAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgc2V0T3BlblZpZXc6IHNldE9wZW5WaWV3LFxuICAgIG9wZW5WaWV3OiBvcGVuVmlld1xuICB9KSksIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnBpY2tlclZpZXcsIGlzTGFuZHNjYXBlICYmIGNsYXNzZXMucGlja2VyVmlld0xhbmRzY2FwZSlcbiAgfSwgb3BlblZpZXcgPT09ICd5ZWFyJyAmJiBjcmVhdGVFbGVtZW50KFllYXJTZWxlY3Rpb24sIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgZGF0ZTogZGF0ZSxcbiAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlQW5kT3Blbk5leHQsXG4gICAgbWluRGF0ZTogbWluRGF0ZSxcbiAgICBtYXhEYXRlOiBtYXhEYXRlXG4gIH0pKSwgb3BlblZpZXcgPT09ICdtb250aCcgJiYgY3JlYXRlRWxlbWVudChNb250aFNlbGVjdGlvbiwgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICBkYXRlOiBkYXRlLFxuICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2VBbmRPcGVuTmV4dCxcbiAgICBtaW5EYXRlOiBtaW5EYXRlLFxuICAgIG1heERhdGU6IG1heERhdGVcbiAgfSkpLCBvcGVuVmlldyA9PT0gJ2RhdGUnICYmIGNyZWF0ZUVsZW1lbnQoQ2FsZW5kYXIsIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgZGF0ZTogZGF0ZSxcbiAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlQW5kT3Blbk5leHQsXG4gICAgbWluRGF0ZTogbWluRGF0ZSxcbiAgICBtYXhEYXRlOiBtYXhEYXRlXG4gIH0pKSwgKG9wZW5WaWV3ID09PSAnaG91cnMnIHx8IG9wZW5WaWV3ID09PSAnbWludXRlcycgfHwgb3BlblZpZXcgPT09ICdzZWNvbmRzJykgJiYgY3JlYXRlRWxlbWVudChDbG9ja1ZpZXcsIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgZGF0ZTogZGF0ZSxcbiAgICB0eXBlOiBvcGVuVmlldyxcbiAgICBvbkhvdXJDaGFuZ2U6IGhhbmRsZUNoYW5nZUFuZE9wZW5OZXh0LFxuICAgIG9uTWludXRlc0NoYW5nZTogaGFuZGxlQ2hhbmdlQW5kT3Blbk5leHQsXG4gICAgb25TZWNvbmRzQ2hhbmdlOiBoYW5kbGVDaGFuZ2VBbmRPcGVuTmV4dFxuICB9KSkpKTtcbn07XG5QaWNrZXIuZGVmYXVsdFByb3BzID0gX29iamVjdFNwcmVhZCQxKHt9LCBkYXRlUGlja2VyRGVmYXVsdFByb3BzLCB7XG4gIHZpZXdzOiBPYmplY3Qua2V5cyh2aWV3c01hcClcbn0pO1xuXG5leHBvcnQgeyBQaWNrZXIgYXMgUCwgZGF0ZVRpbWVQaWNrZXJEZWZhdWx0UHJvcHMgYXMgYSwgZGF0ZVBpY2tlckRlZmF1bHRQcm9wcyBhcyBkLCB0aW1lUGlja2VyRGVmYXVsdFByb3BzIGFzIHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVBpY2tlci0wOTEyYzQwMi5qcy5tYXBcbiIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0ICdyZWFjdCc7XG5pbXBvcnQgJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdSBhcyB1c2VVdGlscyB9IGZyb20gJy4vdXNlVXRpbHMtY2ZiOTZhYzkuanMnO1xuaW1wb3J0ICdjbHN4JztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBtIGFzIG1ha2VQaWNrZXJXaXRoU3RhdGUsIGEgYXMgUHVyZURhdGVJbnB1dCwgdSBhcyB1c2VQaWNrZXJTdGF0ZSwgSyBhcyBLZXlib2FyZERhdGVJbnB1dCwgYiBhcyB1c2VLZXlib2FyZFBpY2tlclN0YXRlLCBwIGFzIHBpY2sxMmhPcjI0aEZvcm1hdCB9IGZyb20gJy4vbWFrZVBpY2tlcldpdGhTdGF0ZS1mZWUzOTc2NS5qcyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0ICcuL1dyYXBwZXItMjQxOTY2ZDcuanMnO1xuaW1wb3J0ICcuL0NhbGVuZGFyLTExYWU2MWY2LmpzJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50JztcbmltcG9ydCAncmlmbSc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1N2Z0ljb24nO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5JztcbmltcG9ydCB7IHQgYXMgdGltZVBpY2tlckRlZmF1bHRQcm9wcyB9IGZyb20gJy4vUGlja2VyLTA5MTJjNDAyLmpzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZic7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzJztcbmltcG9ydCAnLi9EYXkuanMnO1xuaW1wb3J0ICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3Zlcic7XG5pbXBvcnQgJy4vQ2xvY2stMTNjOGYzM2QuanMnO1xuaW1wb3J0ICcuL0Nsb2NrVmlldy5qcyc7XG5pbXBvcnQgeyBUIGFzIFRpbWVQaWNrZXJUb29sYmFyIH0gZnJvbSAnLi9UaW1lUGlja2VyVG9vbGJhci0wNTY0NmY3Ni5qcyc7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBkZWZhdWx0UHJvcHMgPSBfb2JqZWN0U3ByZWFkKHt9LCB0aW1lUGlja2VyRGVmYXVsdFByb3BzLCB7XG4gIG9wZW5UbzogJ2hvdXJzJyxcbiAgdmlld3M6IFsnaG91cnMnLCAnbWludXRlcyddXG59KTtcblxuZnVuY3Rpb24gdXNlT3B0aW9ucyhwcm9wcykge1xuICB2YXIgdXRpbHMgPSB1c2VVdGlscygpO1xuICByZXR1cm4ge1xuICAgIGdldERlZmF1bHRGb3JtYXQ6IGZ1bmN0aW9uIGdldERlZmF1bHRGb3JtYXQoKSB7XG4gICAgICByZXR1cm4gcGljazEyaE9yMjRoRm9ybWF0KHByb3BzLmZvcm1hdCwgcHJvcHMuYW1wbSwge1xuICAgICAgICAnMTJoJzogdXRpbHMudGltZTEyaEZvcm1hdCxcbiAgICAgICAgJzI0aCc6IHV0aWxzLnRpbWUyNGhGb3JtYXRcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIFRpbWVQaWNrZXIgPSBtYWtlUGlja2VyV2l0aFN0YXRlKHtcbiAgdXNlT3B0aW9uczogdXNlT3B0aW9ucyxcbiAgSW5wdXQ6IFB1cmVEYXRlSW5wdXQsXG4gIHVzZVN0YXRlOiB1c2VQaWNrZXJTdGF0ZSxcbiAgRGVmYXVsdFRvb2xiYXJDb21wb25lbnQ6IFRpbWVQaWNrZXJUb29sYmFyXG59KTtcbnZhciBLZXlib2FyZFRpbWVQaWNrZXIgPSBtYWtlUGlja2VyV2l0aFN0YXRlKHtcbiAgdXNlT3B0aW9uczogdXNlT3B0aW9ucyxcbiAgSW5wdXQ6IEtleWJvYXJkRGF0ZUlucHV0LFxuICB1c2VTdGF0ZTogdXNlS2V5Ym9hcmRQaWNrZXJTdGF0ZSxcbiAgRGVmYXVsdFRvb2xiYXJDb21wb25lbnQ6IFRpbWVQaWNrZXJUb29sYmFyLFxuICBnZXRDdXN0b21Qcm9wczogZnVuY3Rpb24gZ2V0Q3VzdG9tUHJvcHMocHJvcHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVmdXNlOiBwcm9wcy5hbXBtID8gL1teXFxkYXBdKy9naSA6IC9bXlxcZF0rL2dpXG4gICAgfTtcbiAgfVxufSk7XG5UaW1lUGlja2VyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbktleWJvYXJkVGltZVBpY2tlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCB7IEtleWJvYXJkVGltZVBpY2tlciwgVGltZVBpY2tlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VGltZVBpY2tlci5qcy5tYXBcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdSBhcyB1c2VVdGlscyB9IGZyb20gJy4vdXNlVXRpbHMtY2ZiOTZhYzkuanMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBQIGFzIFBpY2tlclRvb2xiYXIsIFQgYXMgVG9vbGJhckJ1dHRvbiwgYyBhcyBUb29sYmFyVGV4dCB9IGZyb20gJy4vbWFrZVBpY2tlcldpdGhTdGF0ZS1mZWUzOTc2NS5qcyc7XG5pbXBvcnQgeyBhIGFzIGFycmF5SW5jbHVkZXMgfSBmcm9tICcuL1dyYXBwZXItMjQxOTY2ZDcuanMnO1xuaW1wb3J0IHsgYiBhcyBDbG9ja1R5cGUsIGcgYXMgZ2V0TWVyaWRpZW0sIGMgYXMgY29udmVydFRvTWVyaWRpZW0gfSBmcm9tICcuL0Nsb2NrLTEzYzhmMzNkLmpzJztcblxudmFyIHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICB0b29sYmFyTGFuZHNjYXBlOiB7XG4gICAgZmxleFdyYXA6ICd3cmFwJ1xuICB9LFxuICB0b29sYmFyQW1wbUxlZnRQYWRkaW5nOiB7XG4gICAgcGFkZGluZ0xlZnQ6IDUwXG4gIH0sXG4gIHNlcGFyYXRvcjoge1xuICAgIG1hcmdpbjogJzAgNHB4IDAgMnB4JyxcbiAgICBjdXJzb3I6ICdkZWZhdWx0J1xuICB9LFxuICBob3VyTWludXRlTGFiZWw6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJ1xuICB9LFxuICBob3VyTWludXRlTGFiZWxBbXBtTGFuZHNjYXBlOiB7XG4gICAgbWFyZ2luVG9wOiAnYXV0bydcbiAgfSxcbiAgaG91ck1pbnV0ZUxhYmVsUmV2ZXJzZToge1xuICAgIGZsZXhEaXJlY3Rpb246ICdyb3ctcmV2ZXJzZSdcbiAgfSxcbiAgYW1wbVNlbGVjdGlvbjoge1xuICAgIG1hcmdpbkxlZnQ6IDIwLFxuICAgIG1hcmdpblJpZ2h0OiAtMjAsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG4gIH0sXG4gIGFtcG1MYW5kc2NhcGU6IHtcbiAgICBtYXJnaW46ICc0cHggMCBhdXRvJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXG4gICAgZmxleEJhc2lzOiAnMTAwJSdcbiAgfSxcbiAgYW1wbVNlbGVjdGlvbldpdGhTZWNvbmRzOiB7XG4gICAgbWFyZ2luTGVmdDogMTUsXG4gICAgbWFyZ2luUmlnaHQ6IDEwXG4gIH0sXG4gIGFtcG1MYWJlbDoge1xuICAgIGZvbnRTaXplOiAxOFxuICB9XG59LCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJzVGltZVBpY2tlclRvb2xiYXInXG59KTtcbmZ1bmN0aW9uIHVzZU1lcmlkaWVtTW9kZShkYXRlLCBhbXBtLCBvbkNoYW5nZSkge1xuICB2YXIgdXRpbHMgPSB1c2VVdGlscygpO1xuICB2YXIgbWVyaWRpZW1Nb2RlID0gZ2V0TWVyaWRpZW0oZGF0ZSwgdXRpbHMpO1xuICB2YXIgaGFuZGxlTWVyaWRpZW1DaGFuZ2UgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobW9kZSkge1xuICAgIHZhciB0aW1lV2l0aE1lcmlkaWVtID0gY29udmVydFRvTWVyaWRpZW0oZGF0ZSwgbW9kZSwgQm9vbGVhbihhbXBtKSwgdXRpbHMpO1xuICAgIG9uQ2hhbmdlKHRpbWVXaXRoTWVyaWRpZW0sIGZhbHNlKTtcbiAgfSwgW2FtcG0sIGRhdGUsIG9uQ2hhbmdlLCB1dGlsc10pO1xuICByZXR1cm4ge1xuICAgIG1lcmlkaWVtTW9kZTogbWVyaWRpZW1Nb2RlLFxuICAgIGhhbmRsZU1lcmlkaWVtQ2hhbmdlOiBoYW5kbGVNZXJpZGllbUNoYW5nZVxuICB9O1xufVxudmFyIFRpbWVQaWNrZXJUb29sYmFyID0gZnVuY3Rpb24gVGltZVBpY2tlclRvb2xiYXIoX3JlZikge1xuICB2YXIgZGF0ZSA9IF9yZWYuZGF0ZSxcbiAgICAgIHZpZXdzID0gX3JlZi52aWV3cyxcbiAgICAgIGFtcG0gPSBfcmVmLmFtcG0sXG4gICAgICBvcGVuVmlldyA9IF9yZWYub3BlblZpZXcsXG4gICAgICBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsXG4gICAgICBpc0xhbmRzY2FwZSA9IF9yZWYuaXNMYW5kc2NhcGUsXG4gICAgICBzZXRPcGVuVmlldyA9IF9yZWYuc2V0T3BlblZpZXc7XG4gIHZhciB1dGlscyA9IHVzZVV0aWxzKCk7XG4gIHZhciB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgdmFyIF91c2VNZXJpZGllbU1vZGUgPSB1c2VNZXJpZGllbU1vZGUoZGF0ZSwgYW1wbSwgb25DaGFuZ2UpLFxuICAgICAgbWVyaWRpZW1Nb2RlID0gX3VzZU1lcmlkaWVtTW9kZS5tZXJpZGllbU1vZGUsXG4gICAgICBoYW5kbGVNZXJpZGllbUNoYW5nZSA9IF91c2VNZXJpZGllbU1vZGUuaGFuZGxlTWVyaWRpZW1DaGFuZ2U7XG5cbiAgdmFyIGNsb2NrVHlwb2dyYXBoeVZhcmlhbnQgPSBpc0xhbmRzY2FwZSA/ICdoMycgOiAnaDInO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChQaWNrZXJUb29sYmFyLCB7XG4gICAgaXNMYW5kc2NhcGU6IGlzTGFuZHNjYXBlLFxuICAgIGNsYXNzTmFtZTogY2xzeChpc0xhbmRzY2FwZSA/IGNsYXNzZXMudG9vbGJhckxhbmRzY2FwZSA6IGFtcG0gJiYgY2xhc3Nlcy50b29sYmFyQW1wbUxlZnRQYWRkaW5nKVxuICB9LCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5ob3VyTWludXRlTGFiZWwsIGFtcG0gJiYgaXNMYW5kc2NhcGUgJiYgY2xhc3Nlcy5ob3VyTWludXRlTGFiZWxBbXBtTGFuZHNjYXBlLCB7XG4gICAgICBydGw6IGNsYXNzZXMuaG91ck1pbnV0ZUxhYmVsUmV2ZXJzZVxuICAgIH1bdGhlbWUuZGlyZWN0aW9uXSlcbiAgfSwgYXJyYXlJbmNsdWRlcyh2aWV3cywgJ2hvdXJzJykgJiYgY3JlYXRlRWxlbWVudChUb29sYmFyQnV0dG9uLCB7XG4gICAgdmFyaWFudDogY2xvY2tUeXBvZ3JhcGh5VmFyaWFudCxcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgcmV0dXJuIHNldE9wZW5WaWV3KENsb2NrVHlwZS5IT1VSUyk7XG4gICAgfSxcbiAgICBzZWxlY3RlZDogb3BlblZpZXcgPT09IENsb2NrVHlwZS5IT1VSUyxcbiAgICBsYWJlbDogdXRpbHMuZ2V0SG91clRleHQoZGF0ZSwgQm9vbGVhbihhbXBtKSlcbiAgfSksIGFycmF5SW5jbHVkZXModmlld3MsIFsnaG91cnMnLCAnbWludXRlcyddKSAmJiBjcmVhdGVFbGVtZW50KFRvb2xiYXJUZXh0LCB7XG4gICAgbGFiZWw6IFwiOlwiLFxuICAgIHZhcmlhbnQ6IGNsb2NrVHlwb2dyYXBoeVZhcmlhbnQsXG4gICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5zZXBhcmF0b3JcbiAgfSksIGFycmF5SW5jbHVkZXModmlld3MsICdtaW51dGVzJykgJiYgY3JlYXRlRWxlbWVudChUb29sYmFyQnV0dG9uLCB7XG4gICAgdmFyaWFudDogY2xvY2tUeXBvZ3JhcGh5VmFyaWFudCxcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgcmV0dXJuIHNldE9wZW5WaWV3KENsb2NrVHlwZS5NSU5VVEVTKTtcbiAgICB9LFxuICAgIHNlbGVjdGVkOiBvcGVuVmlldyA9PT0gQ2xvY2tUeXBlLk1JTlVURVMsXG4gICAgbGFiZWw6IHV0aWxzLmdldE1pbnV0ZVRleHQoZGF0ZSlcbiAgfSksIGFycmF5SW5jbHVkZXModmlld3MsIFsnbWludXRlcycsICdzZWNvbmRzJ10pICYmIGNyZWF0ZUVsZW1lbnQoVG9vbGJhclRleHQsIHtcbiAgICB2YXJpYW50OiBcImgyXCIsXG4gICAgbGFiZWw6IFwiOlwiLFxuICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMuc2VwYXJhdG9yXG4gIH0pLCBhcnJheUluY2x1ZGVzKHZpZXdzLCAnc2Vjb25kcycpICYmIGNyZWF0ZUVsZW1lbnQoVG9vbGJhckJ1dHRvbiwge1xuICAgIHZhcmlhbnQ6IFwiaDJcIixcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgcmV0dXJuIHNldE9wZW5WaWV3KENsb2NrVHlwZS5TRUNPTkRTKTtcbiAgICB9LFxuICAgIHNlbGVjdGVkOiBvcGVuVmlldyA9PT0gQ2xvY2tUeXBlLlNFQ09ORFMsXG4gICAgbGFiZWw6IHV0aWxzLmdldFNlY29uZFRleHQoZGF0ZSlcbiAgfSkpLCBhbXBtICYmIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmFtcG1TZWxlY3Rpb24sIGlzTGFuZHNjYXBlICYmIGNsYXNzZXMuYW1wbUxhbmRzY2FwZSwgYXJyYXlJbmNsdWRlcyh2aWV3cywgJ3NlY29uZHMnKSAmJiBjbGFzc2VzLmFtcG1TZWxlY3Rpb25XaXRoU2Vjb25kcylcbiAgfSwgY3JlYXRlRWxlbWVudChUb29sYmFyQnV0dG9uLCB7XG4gICAgZGlzYWJsZVJpcHBsZTogdHJ1ZSxcbiAgICB2YXJpYW50OiBcInN1YnRpdGxlMVwiLFxuICAgIHNlbGVjdGVkOiBtZXJpZGllbU1vZGUgPT09ICdhbScsXG4gICAgdHlwb2dyYXBoeUNsYXNzTmFtZTogY2xhc3Nlcy5hbXBtTGFiZWwsXG4gICAgbGFiZWw6IHV0aWxzLmdldE1lcmlkaWVtVGV4dCgnYW0nKSxcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgcmV0dXJuIGhhbmRsZU1lcmlkaWVtQ2hhbmdlKCdhbScpO1xuICAgIH1cbiAgfSksIGNyZWF0ZUVsZW1lbnQoVG9vbGJhckJ1dHRvbiwge1xuICAgIGRpc2FibGVSaXBwbGU6IHRydWUsXG4gICAgdmFyaWFudDogXCJzdWJ0aXRsZTFcIixcbiAgICBzZWxlY3RlZDogbWVyaWRpZW1Nb2RlID09PSAncG0nLFxuICAgIHR5cG9ncmFwaHlDbGFzc05hbWU6IGNsYXNzZXMuYW1wbUxhYmVsLFxuICAgIGxhYmVsOiB1dGlscy5nZXRNZXJpZGllbVRleHQoJ3BtJyksXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIHJldHVybiBoYW5kbGVNZXJpZGllbUNoYW5nZSgncG0nKTtcbiAgICB9XG4gIH0pKSk7XG59O1xuXG5leHBvcnQgeyBUaW1lUGlja2VyVG9vbGJhciBhcyBULCB1c2VNZXJpZGllbU1vZGUgYXMgdSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VGltZVBpY2tlclRvb2xiYXItMDU2NDZmNzYuanMubWFwXG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmLCBGcmFnbWVudCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG5vZGUsIGJvb2wsIG9iamVjdCwgZnVuYyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHdpdGhTdHlsZXMsIGNyZWF0ZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zJztcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3Zlcic7XG5cbi8qKiBVc2UgaXQgaW5zdGVhZCBvZiAuaW5jbHVkZXMgbWV0aG9kIGZvciBJRSBzdXBwb3J0ICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzKGFycmF5LCBpdGVtT3JJdGVtcykge1xuICBpZiAoQXJyYXkuaXNBcnJheShpdGVtT3JJdGVtcykpIHtcbiAgICByZXR1cm4gaXRlbU9ySXRlbXMuZXZlcnkoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBhcnJheS5pbmRleE9mKGl0ZW0pICE9PSAtMTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBhcnJheS5pbmRleE9mKGl0ZW1Pckl0ZW1zKSAhPT0gLTE7XG59XG5cbnZhciBESUFMT0dfV0lEVEggPSAzMTA7XG52YXIgRElBTE9HX1dJRFRIX1dJREVSID0gMzI1O1xudmFyIFZJRVdfSEVJR0hUID0gMzA1O1xuXG52YXIgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhmdW5jdGlvbiAodGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICBzdGF0aWNXcmFwcGVyUm9vdDoge1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgbWluV2lkdGg6IERJQUxPR19XSURUSCxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXJcbiAgICB9XG4gIH07XG59LCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJzU3RhdGljV3JhcHBlcidcbn0pO1xudmFyIFN0YXRpY1dyYXBwZXIgPSBmdW5jdGlvbiBTdGF0aWNXcmFwcGVyKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5zdGF0aWNXcmFwcGVyUm9vdCxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfSk7XG59O1xuXG52YXIgTW9kYWxEaWFsb2cgPSBmdW5jdGlvbiBNb2RhbERpYWxvZyhfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gX3JlZi5jbGFzc2VzLFxuICAgICAgb25BY2NlcHQgPSBfcmVmLm9uQWNjZXB0LFxuICAgICAgb25EaXNtaXNzID0gX3JlZi5vbkRpc21pc3MsXG4gICAgICBvbkNsZWFyID0gX3JlZi5vbkNsZWFyLFxuICAgICAgb25TZXRUb2RheSA9IF9yZWYub25TZXRUb2RheSxcbiAgICAgIG9rTGFiZWwgPSBfcmVmLm9rTGFiZWwsXG4gICAgICBjYW5jZWxMYWJlbCA9IF9yZWYuY2FuY2VsTGFiZWwsXG4gICAgICBjbGVhckxhYmVsID0gX3JlZi5jbGVhckxhYmVsLFxuICAgICAgdG9kYXlMYWJlbCA9IF9yZWYudG9kYXlMYWJlbCxcbiAgICAgIGNsZWFyYWJsZSA9IF9yZWYuY2xlYXJhYmxlLFxuICAgICAgc2hvd1RvZGF5QnV0dG9uID0gX3JlZi5zaG93VG9kYXlCdXR0b24sXG4gICAgICBzaG93VGFicyA9IF9yZWYuc2hvd1RhYnMsXG4gICAgICB3aWRlciA9IF9yZWYud2lkZXIsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJvbkFjY2VwdFwiLCBcIm9uRGlzbWlzc1wiLCBcIm9uQ2xlYXJcIiwgXCJvblNldFRvZGF5XCIsIFwib2tMYWJlbFwiLCBcImNhbmNlbExhYmVsXCIsIFwiY2xlYXJMYWJlbFwiLCBcInRvZGF5TGFiZWxcIiwgXCJjbGVhcmFibGVcIiwgXCJzaG93VG9kYXlCdXR0b25cIiwgXCJzaG93VGFic1wiLCBcIndpZGVyXCJdKTtcblxuICByZXR1cm4gY3JlYXRlRWxlbWVudChEaWFsb2csIF9leHRlbmRzKHtcbiAgICByb2xlOiBcImRpYWxvZ1wiLFxuICAgIG9uQ2xvc2U6IG9uRGlzbWlzcyxcbiAgICBjbGFzc2VzOiB7XG4gICAgICBwYXBlcjogY2xzeChjbGFzc2VzLmRpYWxvZ1Jvb3QsIHdpZGVyICYmIGNsYXNzZXMuZGlhbG9nUm9vdFdpZGVyKVxuICAgIH1cbiAgfSwgb3RoZXIpLCBjcmVhdGVFbGVtZW50KERpYWxvZ0NvbnRlbnQsIHtcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLmRpYWxvZ1xuICB9KSwgY3JlYXRlRWxlbWVudChEaWFsb2dBY3Rpb25zLCB7XG4gICAgY2xhc3Nlczoge1xuICAgICAgcm9vdDogY2xzeCgoY2xlYXJhYmxlIHx8IHNob3dUb2RheUJ1dHRvbikgJiYgY2xhc3Nlcy53aXRoQWRkaXRpb25hbEFjdGlvbilcbiAgICB9XG4gIH0sIGNsZWFyYWJsZSAmJiBjcmVhdGVFbGVtZW50KEJ1dHRvbiwge1xuICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICBvbkNsaWNrOiBvbkNsZWFyXG4gIH0sIGNsZWFyTGFiZWwpLCBzaG93VG9kYXlCdXR0b24gJiYgY3JlYXRlRWxlbWVudChCdXR0b24sIHtcbiAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgb25DbGljazogb25TZXRUb2RheVxuICB9LCB0b2RheUxhYmVsKSwgY2FuY2VsTGFiZWwgJiYgY3JlYXRlRWxlbWVudChCdXR0b24sIHtcbiAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgb25DbGljazogb25EaXNtaXNzXG4gIH0sIGNhbmNlbExhYmVsKSwgb2tMYWJlbCAmJiBjcmVhdGVFbGVtZW50KEJ1dHRvbiwge1xuICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICBvbkNsaWNrOiBvbkFjY2VwdFxuICB9LCBva0xhYmVsKSkpO1xufTtcbk1vZGFsRGlhbG9nLmRpc3BsYXlOYW1lID0gJ01vZGFsRGlhbG9nJztcbnZhciBzdHlsZXMgPSBjcmVhdGVTdHlsZXMoe1xuICBkaWFsb2dSb290OiB7XG4gICAgbWluV2lkdGg6IERJQUxPR19XSURUSFxuICB9LFxuICBkaWFsb2dSb290V2lkZXI6IHtcbiAgICBtaW5XaWR0aDogRElBTE9HX1dJRFRIX1dJREVSXG4gIH0sXG4gIGRpYWxvZzoge1xuICAgICcmOmZpcnN0LWNoaWxkJzoge1xuICAgICAgcGFkZGluZzogMFxuICAgIH1cbiAgfSxcbiAgd2l0aEFkZGl0aW9uYWxBY3Rpb246IHtcbiAgICAvLyBzZXQganVzdGlmeUNvbnRlbnQgdG8gZGVmYXVsdCB2YWx1ZSB0byBmaXggSUUxMSBsYXlvdXQgYnVnXG4gICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9kbXRyS292YWxlbmtvL21hdGVyaWFsLXVpLXBpY2tlcnMvcHVsbC8yNjdcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgICcmID4gKjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bydcbiAgICB9XG4gIH1cbn0pO1xudmFyIE1vZGFsRGlhbG9nJDEgPSB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpUGlja2Vyc01vZGFsJ1xufSkoTW9kYWxEaWFsb2cpO1xuXG52YXIgdXNlSXNvbW9ycGhpY0VmZmVjdCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gdXNlRWZmZWN0IDogdXNlTGF5b3V0RWZmZWN0O1xuZnVuY3Rpb24gcnVuS2V5SGFuZGxlcihlLCBrZXlIYW5kbGVycykge1xuICB2YXIgaGFuZGxlciA9IGtleUhhbmRsZXJzW2Uua2V5XTtcblxuICBpZiAoaGFuZGxlcikge1xuICAgIGhhbmRsZXIoKTsgLy8gaWYgZXZlbnQgd2FzIGhhbmRsZWQgcHJldmVudCBvdGhlciBzaWRlIGVmZmVjdHMgKGUuZy4gcGFnZSBzY3JvbGwpXG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHVzZUtleURvd24oYWN0aXZlLCBrZXlIYW5kbGVycykge1xuICB2YXIga2V5SGFuZGxlcnNSZWYgPSB1c2VSZWYoa2V5SGFuZGxlcnMpO1xuICBrZXlIYW5kbGVyc1JlZi5jdXJyZW50ID0ga2V5SGFuZGxlcnM7XG4gIHVzZUlzb21vcnBoaWNFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIHZhciBoYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgICAgICBydW5LZXlIYW5kbGVyKGV2ZW50LCBrZXlIYW5kbGVyc1JlZi5jdXJyZW50KTtcbiAgICAgIH07XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93bik7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFthY3RpdmVdKTtcbn1cblxudmFyIE1vZGFsV3JhcHBlciA9IGZ1bmN0aW9uIE1vZGFsV3JhcHBlcihfcmVmKSB7XG4gIHZhciBvcGVuID0gX3JlZi5vcGVuLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgb2tMYWJlbCA9IF9yZWYub2tMYWJlbCxcbiAgICAgIGNhbmNlbExhYmVsID0gX3JlZi5jYW5jZWxMYWJlbCxcbiAgICAgIGNsZWFyTGFiZWwgPSBfcmVmLmNsZWFyTGFiZWwsXG4gICAgICB0b2RheUxhYmVsID0gX3JlZi50b2RheUxhYmVsLFxuICAgICAgc2hvd1RvZGF5QnV0dG9uID0gX3JlZi5zaG93VG9kYXlCdXR0b24sXG4gICAgICBjbGVhcmFibGUgPSBfcmVmLmNsZWFyYWJsZSxcbiAgICAgIERpYWxvZ1Byb3BzID0gX3JlZi5EaWFsb2dQcm9wcyxcbiAgICAgIHNob3dUYWJzID0gX3JlZi5zaG93VGFicyxcbiAgICAgIHdpZGVyID0gX3JlZi53aWRlcixcbiAgICAgIElucHV0Q29tcG9uZW50ID0gX3JlZi5JbnB1dENvbXBvbmVudCxcbiAgICAgIERhdGVJbnB1dFByb3BzID0gX3JlZi5EYXRlSW5wdXRQcm9wcyxcbiAgICAgIG9uQ2xlYXIgPSBfcmVmLm9uQ2xlYXIsXG4gICAgICBvbkFjY2VwdCA9IF9yZWYub25BY2NlcHQsXG4gICAgICBvbkRpc21pc3MgPSBfcmVmLm9uRGlzbWlzcyxcbiAgICAgIG9uU2V0VG9kYXkgPSBfcmVmLm9uU2V0VG9kYXksXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJvcGVuXCIsIFwiY2hpbGRyZW5cIiwgXCJva0xhYmVsXCIsIFwiY2FuY2VsTGFiZWxcIiwgXCJjbGVhckxhYmVsXCIsIFwidG9kYXlMYWJlbFwiLCBcInNob3dUb2RheUJ1dHRvblwiLCBcImNsZWFyYWJsZVwiLCBcIkRpYWxvZ1Byb3BzXCIsIFwic2hvd1RhYnNcIiwgXCJ3aWRlclwiLCBcIklucHV0Q29tcG9uZW50XCIsIFwiRGF0ZUlucHV0UHJvcHNcIiwgXCJvbkNsZWFyXCIsIFwib25BY2NlcHRcIiwgXCJvbkRpc21pc3NcIiwgXCJvblNldFRvZGF5XCJdKTtcblxuICB1c2VLZXlEb3duKG9wZW4sIHtcbiAgICBFbnRlcjogb25BY2NlcHRcbiAgfSk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCBjcmVhdGVFbGVtZW50KElucHV0Q29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgb3RoZXIsIERhdGVJbnB1dFByb3BzKSksIGNyZWF0ZUVsZW1lbnQoTW9kYWxEaWFsb2ckMSwgX2V4dGVuZHMoe1xuICAgIHdpZGVyOiB3aWRlcixcbiAgICBzaG93VGFiczogc2hvd1RhYnMsXG4gICAgb3Blbjogb3BlbixcbiAgICBvbkNsZWFyOiBvbkNsZWFyLFxuICAgIG9uQWNjZXB0OiBvbkFjY2VwdCxcbiAgICBvbkRpc21pc3M6IG9uRGlzbWlzcyxcbiAgICBvblNldFRvZGF5OiBvblNldFRvZGF5LFxuICAgIGNsZWFyTGFiZWw6IGNsZWFyTGFiZWwsXG4gICAgdG9kYXlMYWJlbDogdG9kYXlMYWJlbCxcbiAgICBva0xhYmVsOiBva0xhYmVsLFxuICAgIGNhbmNlbExhYmVsOiBjYW5jZWxMYWJlbCxcbiAgICBjbGVhcmFibGU6IGNsZWFyYWJsZSxcbiAgICBzaG93VG9kYXlCdXR0b246IHNob3dUb2RheUJ1dHRvbixcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfSwgRGlhbG9nUHJvcHMpKSk7XG59O1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gTW9kYWxXcmFwcGVyLnByb3BUeXBlcyA9IHtcbiAgb2tMYWJlbDogbm9kZSxcbiAgY2FuY2VsTGFiZWw6IG5vZGUsXG4gIGNsZWFyTGFiZWw6IG5vZGUsXG4gIGNsZWFyYWJsZTogYm9vbCxcbiAgdG9kYXlMYWJlbDogbm9kZSxcbiAgc2hvd1RvZGF5QnV0dG9uOiBib29sLFxuICBEaWFsb2dQcm9wczogb2JqZWN0XG59IDogdm9pZCAwO1xuTW9kYWxXcmFwcGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgb2tMYWJlbDogJ09LJyxcbiAgY2FuY2VsTGFiZWw6ICdDYW5jZWwnLFxuICBjbGVhckxhYmVsOiAnQ2xlYXInLFxuICB0b2RheUxhYmVsOiAnVG9kYXknLFxuICBjbGVhcmFibGU6IGZhbHNlLFxuICBzaG93VG9kYXlCdXR0b246IGZhbHNlXG59O1xuXG52YXIgSW5saW5lV3JhcHBlciA9IGZ1bmN0aW9uIElubGluZVdyYXBwZXIoX3JlZikge1xuICB2YXIgb3BlbiA9IF9yZWYub3BlbixcbiAgICAgIHdpZGVyID0gX3JlZi53aWRlcixcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIFBvcG92ZXJQcm9wcyA9IF9yZWYuUG9wb3ZlclByb3BzLFxuICAgICAgb25DbGVhciA9IF9yZWYub25DbGVhcixcbiAgICAgIG9uRGlzbWlzcyA9IF9yZWYub25EaXNtaXNzLFxuICAgICAgb25TZXRUb2RheSA9IF9yZWYub25TZXRUb2RheSxcbiAgICAgIG9uQWNjZXB0ID0gX3JlZi5vbkFjY2VwdCxcbiAgICAgIHNob3dUYWJzID0gX3JlZi5zaG93VGFicyxcbiAgICAgIERhdGVJbnB1dFByb3BzID0gX3JlZi5EYXRlSW5wdXRQcm9wcyxcbiAgICAgIElucHV0Q29tcG9uZW50ID0gX3JlZi5JbnB1dENvbXBvbmVudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcIm9wZW5cIiwgXCJ3aWRlclwiLCBcImNoaWxkcmVuXCIsIFwiUG9wb3ZlclByb3BzXCIsIFwib25DbGVhclwiLCBcIm9uRGlzbWlzc1wiLCBcIm9uU2V0VG9kYXlcIiwgXCJvbkFjY2VwdFwiLCBcInNob3dUYWJzXCIsIFwiRGF0ZUlucHV0UHJvcHNcIiwgXCJJbnB1dENvbXBvbmVudFwiXSk7XG5cbiAgdmFyIHJlZiA9IHVzZVJlZigpO1xuICB1c2VLZXlEb3duKG9wZW4sIHtcbiAgICBFbnRlcjogb25BY2NlcHRcbiAgfSk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCBjcmVhdGVFbGVtZW50KElucHV0Q29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgb3RoZXIsIERhdGVJbnB1dFByb3BzLCB7XG4gICAgaW5wdXRSZWY6IHJlZlxuICB9KSksIGNyZWF0ZUVsZW1lbnQoUG9wb3ZlciwgX2V4dGVuZHMoe1xuICAgIG9wZW46IG9wZW4sXG4gICAgb25DbG9zZTogb25EaXNtaXNzLFxuICAgIGFuY2hvckVsOiByZWYuY3VycmVudCxcbiAgICBhbmNob3JPcmlnaW46IHtcbiAgICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcbiAgICAgIGhvcml6b250YWw6ICdjZW50ZXInXG4gICAgfSxcbiAgICB0cmFuc2Zvcm1PcmlnaW46IHtcbiAgICAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICAgIGhvcml6b250YWw6ICdjZW50ZXInXG4gICAgfSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfSwgUG9wb3ZlclByb3BzKSkpO1xufTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IElubGluZVdyYXBwZXIucHJvcFR5cGVzID0ge1xuICBvbk9wZW46IGZ1bmMsXG4gIG9uQ2xvc2U6IGZ1bmMsXG4gIFBvcG92ZXJQcm9wczogb2JqZWN0XG59IDogdm9pZCAwO1xuXG5mdW5jdGlvbiBnZXRXcmFwcGVyRnJvbVZhcmlhbnQodmFyaWFudCkge1xuICBzd2l0Y2ggKHZhcmlhbnQpIHtcbiAgICBjYXNlICdpbmxpbmUnOlxuICAgICAgcmV0dXJuIElubGluZVdyYXBwZXI7XG5cbiAgICBjYXNlICdzdGF0aWMnOlxuICAgICAgcmV0dXJuIFN0YXRpY1dyYXBwZXI7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIE1vZGFsV3JhcHBlcjtcbiAgfVxufVxudmFyIFZhcmlhbnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcbnZhciBXcmFwcGVyID0gZnVuY3Rpb24gV3JhcHBlcihfcmVmKSB7XG4gIHZhciB2YXJpYW50ID0gX3JlZi52YXJpYW50LFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1widmFyaWFudFwiXSk7XG5cbiAgdmFyIENvbXBvbmVudCA9IGdldFdyYXBwZXJGcm9tVmFyaWFudCh2YXJpYW50KTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoVmFyaWFudENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogdmFyaWFudCB8fCAnZGlhbG9nJ1xuICB9LCBjcmVhdGVFbGVtZW50KENvbXBvbmVudCwgcHJvcHMpKTtcbn07XG5cbmV4cG9ydCB7IERJQUxPR19XSURUSCBhcyBELCBWYXJpYW50Q29udGV4dCBhcyBWLCBXcmFwcGVyIGFzIFcsIGFycmF5SW5jbHVkZXMgYXMgYSwgVklFV19IRUlHSFQgYXMgYiwgRElBTE9HX1dJRFRIX1dJREVSIGFzIGMsIHJ1bktleUhhbmRsZXIgYXMgciwgdXNlSXNvbW9ycGhpY0VmZmVjdCBhcyB1IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1XcmFwcGVyLTI0MTk2NmQ3LmpzLm1hcFxuIiwiaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgJ3JlYWN0JztcbmltcG9ydCAncHJvcC10eXBlcyc7XG5leHBvcnQgeyBhIGFzIE11aVBpY2tlcnNDb250ZXh0LCBNIGFzIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLCB1IGFzIHVzZVV0aWxzIH0gZnJvbSAnLi91c2VVdGlscy1jZmI5NmFjOS5qcyc7XG5pbXBvcnQgJ2Nsc3gnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IHUgYXMgdXNlUGlja2VyU3RhdGUgfSBmcm9tICcuL21ha2VQaWNrZXJXaXRoU3RhdGUtZmVlMzk3NjUuanMnO1xuZXhwb3J0IHsgbSBhcyBtYWtlUGlja2VyV2l0aFN0YXRlLCBiIGFzIHVzZUtleWJvYXJkUGlja2VyU3RhdGUsIHUgYXMgdXNlUGlja2VyU3RhdGUsIHYgYXMgdmFsaWRhdGUgfSBmcm9tICcuL21ha2VQaWNrZXJXaXRoU3RhdGUtZmVlMzk3NjUuanMnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCAnLi9XcmFwcGVyLTI0MTk2NmQ3LmpzJztcbmV4cG9ydCB7IGEgYXMgQ2FsZW5kYXIgfSBmcm9tICcuL0NhbGVuZGFyLTExYWU2MWY2LmpzJztcbmV4cG9ydCB7IERhdGVQaWNrZXIsIEtleWJvYXJkRGF0ZVBpY2tlciB9IGZyb20gJy4vRGF0ZVBpY2tlci5qcyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudCc7XG5pbXBvcnQgJ3JpZm0nO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9TdmdJY29uJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheSc7XG5leHBvcnQgeyBQIGFzIFBpY2tlciB9IGZyb20gJy4vUGlja2VyLTA5MTJjNDAyLmpzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZic7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGF5IH0gZnJvbSAnLi9EYXkuanMnO1xuaW1wb3J0ICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3Zlcic7XG5leHBvcnQgeyBhIGFzIENsb2NrIH0gZnJvbSAnLi9DbG9jay0xM2M4ZjMzZC5qcyc7XG5leHBvcnQgeyBDbG9ja1ZpZXcsIGRlZmF1bHQgYXMgVGltZVBpY2tlclZpZXcgfSBmcm9tICcuL0Nsb2NrVmlldy5qcyc7XG5pbXBvcnQgJy4vVGltZVBpY2tlclRvb2xiYXItMDU2NDZmNzYuanMnO1xuZXhwb3J0IHsgS2V5Ym9hcmRUaW1lUGlja2VyLCBUaW1lUGlja2VyIH0gZnJvbSAnLi9UaW1lUGlja2VyLmpzJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1RhYic7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1RhYnMnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5leHBvcnQgeyBEYXRlVGltZVBpY2tlciwgS2V5Ym9hcmREYXRlVGltZVBpY2tlciB9IGZyb20gJy4vRGF0ZVRpbWVQaWNrZXIuanMnO1xuXG5mdW5jdGlvbiB1c2VTdGF0aWNTdGF0ZShfcmVmKSB7XG4gIHZhciB2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICBfcmVmJGF1dG9PayA9IF9yZWYuYXV0b09rLFxuICAgICAgYXV0b09rID0gX3JlZiRhdXRvT2sgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJGF1dG9PayxcbiAgICAgIG9uQ2hhbmdlID0gX3JlZi5vbkNoYW5nZSxcbiAgICAgIGRlZmF1bHRGb3JtYXQgPSBfcmVmLmRlZmF1bHRGb3JtYXQ7XG5cbiAgdmFyIF91c2VQaWNrZXJTdGF0ZSA9IHVzZVBpY2tlclN0YXRlKHtcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgb25DaGFuZ2U6IG9uQ2hhbmdlLFxuICAgIGF1dG9PazogYXV0b09rXG4gIH0sIHtcbiAgICAvLyBqdXN0IGEgcmFuZG9tIGZvcm1hdCwgbW9zdGx5IGFsd2F5cyBub3QgbmVlZGVkIGZvciB1c2Vyc1xuICAgIGdldERlZmF1bHRGb3JtYXQ6IGZ1bmN0aW9uIGdldERlZmF1bHRGb3JtYXQoKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdEZvcm1hdCB8fCAnTU0vZGQveXl5eSc7XG4gICAgfVxuICB9KSxcbiAgICAgIHBpY2tlclByb3BzID0gX3VzZVBpY2tlclN0YXRlLnBpY2tlclByb3BzLFxuICAgICAgd3JhcHBlclByb3BzID0gX3VzZVBpY2tlclN0YXRlLndyYXBwZXJQcm9wcyxcbiAgICAgIGlucHV0UHJvcHMgPSBfdXNlUGlja2VyU3RhdGUuaW5wdXRQcm9wcztcblxuICByZXR1cm4ge1xuICAgIHBpY2tlclByb3BzOiBwaWNrZXJQcm9wcyxcbiAgICB3cmFwcGVyUHJvcHM6IHdyYXBwZXJQcm9wcyxcbiAgICBpbnB1dFByb3BzOiBpbnB1dFByb3BzXG4gIH07XG59XG5cbmV4cG9ydCB7IHVzZVN0YXRpY1N0YXRlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IFJlYWN0X19kZWZhdWx0LCB7IGNyZWF0ZUVsZW1lbnQsIHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VEZWJ1Z1ZhbHVlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBib29sLCBzdHJpbmcsIGFueSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdSBhcyB1c2VVdGlscyB9IGZyb20gJy4vdXNlVXRpbHMtY2ZiOTZhYzkuanMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgZmFkZSwgd2l0aFN0eWxlcywgY3JlYXRlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IHsgVyBhcyBXcmFwcGVyIH0gZnJvbSAnLi9XcmFwcGVyLTI0MTk2NmQ3LmpzJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IElucHV0QWRvcm5tZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50JztcbmltcG9ydCB7IFJpZm0gfSBmcm9tICdyaWZtJztcbmltcG9ydCBTdmdJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N2Z0ljb24nO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXknO1xuaW1wb3J0IHsgUCBhcyBQaWNrZXIgfSBmcm9tICcuL1BpY2tlci0wOTEyYzQwMi5qcyc7XG5cbnZhciB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKGZ1bmN0aW9uICh0aGVtZSkge1xuICB2YXIgdGV4dENvbG9yID0gdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmNvbnRyYXN0VGV4dCA6IHRoZW1lLnBhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZFtcImRlZmF1bHRcIl0pO1xuICByZXR1cm4ge1xuICAgIHRvb2xiYXJUeHQ6IHtcbiAgICAgIGNvbG9yOiBmYWRlKHRleHRDb2xvciwgMC41NClcbiAgICB9LFxuICAgIHRvb2xiYXJCdG5TZWxlY3RlZDoge1xuICAgICAgY29sb3I6IHRleHRDb2xvclxuICAgIH1cbiAgfTtcbn0sIHtcbiAgbmFtZTogJ011aVBpY2tlcnNUb29sYmFyVGV4dCdcbn0pO1xuXG52YXIgVG9vbGJhclRleHQgPSBmdW5jdGlvbiBUb29sYmFyVGV4dChfcmVmKSB7XG4gIHZhciBzZWxlY3RlZCA9IF9yZWYuc2VsZWN0ZWQsXG4gICAgICBsYWJlbCA9IF9yZWYubGFiZWwsXG4gICAgICBfcmVmJGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZiRjbGFzc05hbWUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmJGNsYXNzTmFtZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcInNlbGVjdGVkXCIsIFwibGFiZWxcIiwgXCJjbGFzc05hbWVcIl0pO1xuXG4gIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIF9leHRlbmRzKHtcbiAgICBjaGlsZHJlbjogbGFiZWwsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMudG9vbGJhclR4dCwgY2xhc3NOYW1lLCBzZWxlY3RlZCAmJiBjbGFzc2VzLnRvb2xiYXJCdG5TZWxlY3RlZClcbiAgfSwgb3RoZXIpKTtcbn07XG5cbnZhciBUb29sYmFyQnV0dG9uID0gZnVuY3Rpb24gVG9vbGJhckJ1dHRvbihfcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gX3JlZi5jbGFzc2VzLFxuICAgICAgX3JlZiRjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYkY2xhc3NOYW1lID09PSB2b2lkIDAgPyBudWxsIDogX3JlZiRjbGFzc05hbWUsXG4gICAgICBsYWJlbCA9IF9yZWYubGFiZWwsXG4gICAgICBzZWxlY3RlZCA9IF9yZWYuc2VsZWN0ZWQsXG4gICAgICB2YXJpYW50ID0gX3JlZi52YXJpYW50LFxuICAgICAgYWxpZ24gPSBfcmVmLmFsaWduLFxuICAgICAgdHlwb2dyYXBoeUNsYXNzTmFtZSA9IF9yZWYudHlwb2dyYXBoeUNsYXNzTmFtZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJsYWJlbFwiLCBcInNlbGVjdGVkXCIsIFwidmFyaWFudFwiLCBcImFsaWduXCIsIFwidHlwb2dyYXBoeUNsYXNzTmFtZVwiXSk7XG5cbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoQnV0dG9uLCBfZXh0ZW5kcyh7XG4gICAgdmFyaWFudDogXCJ0ZXh0XCIsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMudG9vbGJhckJ0biwgY2xhc3NOYW1lKVxuICB9LCBvdGhlciksIGNyZWF0ZUVsZW1lbnQoVG9vbGJhclRleHQsIHtcbiAgICBhbGlnbjogYWxpZ24sXG4gICAgY2xhc3NOYW1lOiB0eXBvZ3JhcGh5Q2xhc3NOYW1lLFxuICAgIHZhcmlhbnQ6IHZhcmlhbnQsXG4gICAgbGFiZWw6IGxhYmVsLFxuICAgIHNlbGVjdGVkOiBzZWxlY3RlZFxuICB9KSk7XG59O1xuXG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUb29sYmFyQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgc2VsZWN0ZWQ6IGJvb2wuaXNSZXF1aXJlZCxcbiAgbGFiZWw6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBjbGFzc2VzOiBhbnkuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBzdHJpbmcsXG4gIGlubmVyUmVmOiBhbnlcbn0gOiB2b2lkIDA7XG5Ub29sYmFyQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJ1xufTtcbnZhciBzdHlsZXMgPSBjcmVhdGVTdHlsZXMoe1xuICB0b29sYmFyQnRuOiB7XG4gICAgcGFkZGluZzogMCxcbiAgICBtaW5XaWR0aDogJzE2cHgnLFxuICAgIHRleHRUcmFuc2Zvcm06ICdub25lJ1xuICB9XG59KTtcbnZhciBUb29sYmFyQnV0dG9uJDEgPSB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpUGlja2Vyc1Rvb2xiYXJCdXR0b24nXG59KShUb29sYmFyQnV0dG9uKTtcblxudmFyIHVzZVN0eWxlcyQxID0gbWFrZVN0eWxlcyhmdW5jdGlvbiAodGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICB0b29sYmFyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgaGVpZ2h0OiAxMDAsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluIDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kW1wiZGVmYXVsdFwiXVxuICAgIH0sXG4gICAgdG9vbGJhckxhbmRzY2FwZToge1xuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBtYXhXaWR0aDogMTUwLFxuICAgICAgcGFkZGluZzogOCxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCdcbiAgICB9XG4gIH07XG59LCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJzVG9vbGJhcidcbn0pO1xuXG52YXIgUGlja2VyVG9vbGJhciA9IGZ1bmN0aW9uIFBpY2tlclRvb2xiYXIoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgaXNMYW5kc2NhcGUgPSBfcmVmLmlzTGFuZHNjYXBlLFxuICAgICAgX3JlZiRjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYkY2xhc3NOYW1lID09PSB2b2lkIDAgPyBudWxsIDogX3JlZiRjbGFzc05hbWUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJjaGlsZHJlblwiLCBcImlzTGFuZHNjYXBlXCIsIFwiY2xhc3NOYW1lXCJdKTtcblxuICB2YXIgY2xhc3NlcyA9IHVzZVN0eWxlcyQxKCk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFRvb2xiYXIsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy50b29sYmFyLCBjbGFzc05hbWUsIGlzTGFuZHNjYXBlICYmIGNsYXNzZXMudG9vbGJhckxhbmRzY2FwZSlcbiAgfSwgb3RoZXIpLCBjaGlsZHJlbik7XG59O1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxudmFyIFB1cmVEYXRlSW5wdXQgPSBmdW5jdGlvbiBQdXJlRGF0ZUlucHV0KF9yZWYpIHtcbiAgdmFyIGlucHV0VmFsdWUgPSBfcmVmLmlucHV0VmFsdWUsXG4gICAgICBpbnB1dFZhcmlhbnQgPSBfcmVmLmlucHV0VmFyaWFudCxcbiAgICAgIHZhbGlkYXRpb25FcnJvciA9IF9yZWYudmFsaWRhdGlvbkVycm9yLFxuICAgICAgSW5wdXRQcm9wcyA9IF9yZWYuSW5wdXRQcm9wcyxcbiAgICAgIG9uT3BlbiA9IF9yZWYub3BlblBpY2tlcixcbiAgICAgIF9yZWYkVGV4dEZpZWxkQ29tcG9uZSA9IF9yZWYuVGV4dEZpZWxkQ29tcG9uZW50LFxuICAgICAgVGV4dEZpZWxkQ29tcG9uZW50ID0gX3JlZiRUZXh0RmllbGRDb21wb25lID09PSB2b2lkIDAgPyBUZXh0RmllbGQgOiBfcmVmJFRleHRGaWVsZENvbXBvbmUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJpbnB1dFZhbHVlXCIsIFwiaW5wdXRWYXJpYW50XCIsIFwidmFsaWRhdGlvbkVycm9yXCIsIFwiSW5wdXRQcm9wc1wiLCBcIm9wZW5QaWNrZXJcIiwgXCJUZXh0RmllbGRDb21wb25lbnRcIl0pO1xuXG4gIHZhciBQdXJlRGF0ZUlucHV0UHJvcHMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgSW5wdXRQcm9wcywge1xuICAgICAgcmVhZE9ubHk6IHRydWVcbiAgICB9KTtcbiAgfSwgW0lucHV0UHJvcHNdKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoVGV4dEZpZWxkQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgZXJyb3I6IEJvb2xlYW4odmFsaWRhdGlvbkVycm9yKSxcbiAgICBoZWxwZXJUZXh0OiB2YWxpZGF0aW9uRXJyb3JcbiAgfSwgb3RoZXIsIHtcbiAgICAvLyBkbyBub3Qgb3ZlcnJpZGFibGVcbiAgICBvbkNsaWNrOiBvbk9wZW4sXG4gICAgdmFsdWU6IGlucHV0VmFsdWUsXG4gICAgdmFyaWFudDogaW5wdXRWYXJpYW50LFxuICAgIElucHV0UHJvcHM6IFB1cmVEYXRlSW5wdXRQcm9wcyxcbiAgICBvbktleURvd246IGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7XG4gICAgICAvLyBzcGFjZVxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgb25PcGVuKCk7XG4gICAgICB9XG4gICAgfVxuICB9KSk7XG59O1xuUHVyZURhdGVJbnB1dC5kaXNwbGF5TmFtZSA9ICdQdXJlRGF0ZUlucHV0JztcblxudmFyIEtleWJvYXJkSWNvbiA9IGZ1bmN0aW9uIEtleWJvYXJkSWNvbihwcm9wcykge1xuICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChTdmdJY29uLCBwcm9wcywgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTE3IDEyaC01djVoNXYtNXpNMTYgMXYySDhWMUg2djJINWMtMS4xMSAwLTEuOTkuOS0xLjk5IDJMMyAxOWMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yaC0xVjFoLTJ6bTMgMThINVY4aDE0djExelwiXG4gIH0pLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgZDogXCJNMCAwaDI0djI0SDB6XCJcbiAgfSkpO1xufTtcblxudmFyIGdldERpc3BsYXlEYXRlID0gZnVuY3Rpb24gZ2V0RGlzcGxheURhdGUodmFsdWUsIGZvcm1hdCwgdXRpbHMsIGlzRW1wdHksIF9yZWYpIHtcbiAgdmFyIGludmFsaWRMYWJlbCA9IF9yZWYuaW52YWxpZExhYmVsLFxuICAgICAgZW1wdHlMYWJlbCA9IF9yZWYuZW1wdHlMYWJlbCxcbiAgICAgIGxhYmVsRnVuYyA9IF9yZWYubGFiZWxGdW5jO1xuICB2YXIgZGF0ZSA9IHV0aWxzLmRhdGUodmFsdWUpO1xuXG4gIGlmIChsYWJlbEZ1bmMpIHtcbiAgICByZXR1cm4gbGFiZWxGdW5jKGlzRW1wdHkgPyBudWxsIDogZGF0ZSwgaW52YWxpZExhYmVsKTtcbiAgfVxuXG4gIGlmIChpc0VtcHR5KSB7XG4gICAgcmV0dXJuIGVtcHR5TGFiZWwgfHwgJyc7XG4gIH1cblxuICByZXR1cm4gdXRpbHMuaXNWYWxpZChkYXRlKSA/IHV0aWxzLmZvcm1hdChkYXRlLCBmb3JtYXQpIDogaW52YWxpZExhYmVsO1xufTtcblxudmFyIGdldENvbXBhcmlzb25NYXhEYXRlID0gZnVuY3Rpb24gZ2V0Q29tcGFyaXNvbk1heERhdGUodXRpbHMsIHN0cmljdENvbXBhcmVEYXRlcywgZGF0ZSkge1xuICBpZiAoc3RyaWN0Q29tcGFyZURhdGVzKSB7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICByZXR1cm4gdXRpbHMuZW5kT2ZEYXkoZGF0ZSk7XG59O1xuXG52YXIgZ2V0Q29tcGFyaXNvbk1pbkRhdGUgPSBmdW5jdGlvbiBnZXRDb21wYXJpc29uTWluRGF0ZSh1dGlscywgc3RyaWN0Q29tcGFyZURhdGVzLCBkYXRlKSB7XG4gIGlmIChzdHJpY3RDb21wYXJlRGF0ZXMpIHtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIHJldHVybiB1dGlscy5zdGFydE9mRGF5KGRhdGUpO1xufTtcblxudmFyIHZhbGlkYXRlID0gZnVuY3Rpb24gdmFsaWRhdGUodmFsdWUsIHV0aWxzLCBfcmVmMikge1xuICB2YXIgbWF4RGF0ZSA9IF9yZWYyLm1heERhdGUsXG4gICAgICBtaW5EYXRlID0gX3JlZjIubWluRGF0ZSxcbiAgICAgIGRpc2FibGVQYXN0ID0gX3JlZjIuZGlzYWJsZVBhc3QsXG4gICAgICBkaXNhYmxlRnV0dXJlID0gX3JlZjIuZGlzYWJsZUZ1dHVyZSxcbiAgICAgIG1heERhdGVNZXNzYWdlID0gX3JlZjIubWF4RGF0ZU1lc3NhZ2UsXG4gICAgICBtaW5EYXRlTWVzc2FnZSA9IF9yZWYyLm1pbkRhdGVNZXNzYWdlLFxuICAgICAgaW52YWxpZERhdGVNZXNzYWdlID0gX3JlZjIuaW52YWxpZERhdGVNZXNzYWdlLFxuICAgICAgc3RyaWN0Q29tcGFyZURhdGVzID0gX3JlZjIuc3RyaWN0Q29tcGFyZURhdGVzO1xuICB2YXIgcGFyc2VkVmFsdWUgPSB1dGlscy5kYXRlKHZhbHVlKTsgLy8gaWYgbnVsbCAtIGRvIG5vdCBzaG93IGVycm9yXG5cbiAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKCF1dGlscy5pc1ZhbGlkKHZhbHVlKSkge1xuICAgIHJldHVybiBpbnZhbGlkRGF0ZU1lc3NhZ2U7XG4gIH1cblxuICBpZiAobWF4RGF0ZSAmJiB1dGlscy5pc0FmdGVyKHBhcnNlZFZhbHVlLCBnZXRDb21wYXJpc29uTWF4RGF0ZSh1dGlscywgISFzdHJpY3RDb21wYXJlRGF0ZXMsIHV0aWxzLmRhdGUobWF4RGF0ZSkpKSkge1xuICAgIHJldHVybiBtYXhEYXRlTWVzc2FnZTtcbiAgfVxuXG4gIGlmIChkaXNhYmxlRnV0dXJlICYmIHV0aWxzLmlzQWZ0ZXIocGFyc2VkVmFsdWUsIGdldENvbXBhcmlzb25NYXhEYXRlKHV0aWxzLCAhIXN0cmljdENvbXBhcmVEYXRlcywgdXRpbHMuZGF0ZSgpKSkpIHtcbiAgICByZXR1cm4gbWF4RGF0ZU1lc3NhZ2U7XG4gIH1cblxuICBpZiAobWluRGF0ZSAmJiB1dGlscy5pc0JlZm9yZShwYXJzZWRWYWx1ZSwgZ2V0Q29tcGFyaXNvbk1pbkRhdGUodXRpbHMsICEhc3RyaWN0Q29tcGFyZURhdGVzLCB1dGlscy5kYXRlKG1pbkRhdGUpKSkpIHtcbiAgICByZXR1cm4gbWluRGF0ZU1lc3NhZ2U7XG4gIH1cblxuICBpZiAoZGlzYWJsZVBhc3QgJiYgdXRpbHMuaXNCZWZvcmUocGFyc2VkVmFsdWUsIGdldENvbXBhcmlzb25NaW5EYXRlKHV0aWxzLCAhIXN0cmljdENvbXBhcmVEYXRlcywgdXRpbHMuZGF0ZSgpKSkpIHtcbiAgICByZXR1cm4gbWluRGF0ZU1lc3NhZ2U7XG4gIH1cblxuICByZXR1cm4gJyc7XG59O1xuZnVuY3Rpb24gcGljazEyaE9yMjRoRm9ybWF0KHVzZXJGb3JtYXQpIHtcbiAgdmFyIGFtcG0gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG4gIHZhciBmb3JtYXRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgaWYgKHVzZXJGb3JtYXQpIHtcbiAgICByZXR1cm4gdXNlckZvcm1hdDtcbiAgfVxuXG4gIHJldHVybiBhbXBtID8gZm9ybWF0c1snMTJoJ10gOiBmb3JtYXRzWycyNGgnXTtcbn1cbmZ1bmN0aW9uIG1ha2VNYXNrRnJvbUZvcm1hdChmb3JtYXQsIG51bWJlck1hc2tDaGFyKSB7XG4gIHJldHVybiBmb3JtYXQucmVwbGFjZSgvW2Etel0vZ2ksIG51bWJlck1hc2tDaGFyKTtcbn1cbnZhciBtYXNrZWREYXRlRm9ybWF0dGVyID0gZnVuY3Rpb24gbWFza2VkRGF0ZUZvcm1hdHRlcihtYXNrLCBudW1iZXJNYXNrQ2hhciwgcmVmdXNlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIHBhcnNlZCA9IHZhbHVlLnJlcGxhY2UocmVmdXNlLCAnJyk7XG5cbiAgICBpZiAocGFyc2VkID09PSAnJykge1xuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG5cbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIG4gPSAwO1xuXG4gICAgd2hpbGUgKGkgPCBtYXNrLmxlbmd0aCkge1xuICAgICAgdmFyIG1hc2tDaGFyID0gbWFza1tpXTtcblxuICAgICAgaWYgKG1hc2tDaGFyID09PSBudW1iZXJNYXNrQ2hhciAmJiBuIDwgcGFyc2VkLmxlbmd0aCkge1xuICAgICAgICB2YXIgcGFyc2VkQ2hhciA9IHBhcnNlZFtuXTtcbiAgICAgICAgcmVzdWx0ICs9IHBhcnNlZENoYXI7XG4gICAgICAgIG4gKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCArPSBtYXNrQ2hhcjtcbiAgICAgIH1cblxuICAgICAgaSArPSAxO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuXG5mdW5jdGlvbiBvd25LZXlzJDEob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkMSh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzJDEoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkMShzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG52YXIgS2V5Ym9hcmREYXRlSW5wdXQgPSBmdW5jdGlvbiBLZXlib2FyZERhdGVJbnB1dChfcmVmKSB7XG4gIHZhciBpbnB1dFZhbHVlID0gX3JlZi5pbnB1dFZhbHVlLFxuICAgICAgaW5wdXRWYXJpYW50ID0gX3JlZi5pbnB1dFZhcmlhbnQsXG4gICAgICB2YWxpZGF0aW9uRXJyb3IgPSBfcmVmLnZhbGlkYXRpb25FcnJvcixcbiAgICAgIEtleWJvYXJkQnV0dG9uUHJvcHMgPSBfcmVmLktleWJvYXJkQnV0dG9uUHJvcHMsXG4gICAgICBJbnB1dEFkb3JubWVudFByb3BzID0gX3JlZi5JbnB1dEFkb3JubWVudFByb3BzLFxuICAgICAgb25PcGVuID0gX3JlZi5vcGVuUGlja2VyLFxuICAgICAgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlLFxuICAgICAgSW5wdXRQcm9wcyA9IF9yZWYuSW5wdXRQcm9wcyxcbiAgICAgIG1hc2sgPSBfcmVmLm1hc2ssXG4gICAgICBfcmVmJG1hc2tDaGFyID0gX3JlZi5tYXNrQ2hhcixcbiAgICAgIG1hc2tDaGFyID0gX3JlZiRtYXNrQ2hhciA9PT0gdm9pZCAwID8gJ18nIDogX3JlZiRtYXNrQ2hhcixcbiAgICAgIF9yZWYkcmVmdXNlID0gX3JlZi5yZWZ1c2UsXG4gICAgICByZWZ1c2UgPSBfcmVmJHJlZnVzZSA9PT0gdm9pZCAwID8gL1teXFxkXSsvZ2kgOiBfcmVmJHJlZnVzZSxcbiAgICAgIGZvcm1hdCA9IF9yZWYuZm9ybWF0LFxuICAgICAga2V5Ym9hcmRJY29uID0gX3JlZi5rZXlib2FyZEljb24sXG4gICAgICBkaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQsXG4gICAgICByaWZtRm9ybWF0dGVyID0gX3JlZi5yaWZtRm9ybWF0dGVyLFxuICAgICAgX3JlZiRUZXh0RmllbGRDb21wb25lID0gX3JlZi5UZXh0RmllbGRDb21wb25lbnQsXG4gICAgICBUZXh0RmllbGRDb21wb25lbnQgPSBfcmVmJFRleHRGaWVsZENvbXBvbmUgPT09IHZvaWQgMCA/IFRleHRGaWVsZCA6IF9yZWYkVGV4dEZpZWxkQ29tcG9uZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImlucHV0VmFsdWVcIiwgXCJpbnB1dFZhcmlhbnRcIiwgXCJ2YWxpZGF0aW9uRXJyb3JcIiwgXCJLZXlib2FyZEJ1dHRvblByb3BzXCIsIFwiSW5wdXRBZG9ybm1lbnRQcm9wc1wiLCBcIm9wZW5QaWNrZXJcIiwgXCJvbkNoYW5nZVwiLCBcIklucHV0UHJvcHNcIiwgXCJtYXNrXCIsIFwibWFza0NoYXJcIiwgXCJyZWZ1c2VcIiwgXCJmb3JtYXRcIiwgXCJrZXlib2FyZEljb25cIiwgXCJkaXNhYmxlZFwiLCBcInJpZm1Gb3JtYXR0ZXJcIiwgXCJUZXh0RmllbGRDb21wb25lbnRcIl0pO1xuXG4gIHZhciBpbnB1dE1hc2sgPSBtYXNrIHx8IG1ha2VNYXNrRnJvbUZvcm1hdChmb3JtYXQsIG1hc2tDaGFyKTsgLy8gcHJldHRpZXItaWdub3JlXG5cbiAgdmFyIGZvcm1hdHRlciA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtYXNrZWREYXRlRm9ybWF0dGVyKGlucHV0TWFzaywgbWFza0NoYXIsIHJlZnVzZSk7XG4gIH0sIFtpbnB1dE1hc2ssIG1hc2tDaGFyLCByZWZ1c2VdKTtcbiAgdmFyIHBvc2l0aW9uID0gSW5wdXRBZG9ybm1lbnRQcm9wcyAmJiBJbnB1dEFkb3JubWVudFByb3BzLnBvc2l0aW9uID8gSW5wdXRBZG9ybm1lbnRQcm9wcy5wb3NpdGlvbiA6ICdlbmQnO1xuXG4gIHZhciBoYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UodGV4dCkge1xuICAgIHZhciBmaW5hbFN0cmluZyA9IHRleHQgPT09ICcnIHx8IHRleHQgPT09IGlucHV0TWFzayA/IG51bGwgOiB0ZXh0O1xuICAgIG9uQ2hhbmdlKGZpbmFsU3RyaW5nKTtcbiAgfTtcblxuICByZXR1cm4gY3JlYXRlRWxlbWVudChSaWZtLCB7XG4gICAga2V5OiBpbnB1dE1hc2ssXG4gICAgdmFsdWU6IGlucHV0VmFsdWUsXG4gICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICByZWZ1c2U6IHJlZnVzZSxcbiAgICBmb3JtYXQ6IHJpZm1Gb3JtYXR0ZXIgfHwgZm9ybWF0dGVyXG4gIH0sIGZ1bmN0aW9uIChfcmVmMikge1xuICAgIHZhciBvbkNoYW5nZSA9IF9yZWYyLm9uQ2hhbmdlLFxuICAgICAgICB2YWx1ZSA9IF9yZWYyLnZhbHVlO1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFRleHRGaWVsZENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgZXJyb3I6IEJvb2xlYW4odmFsaWRhdGlvbkVycm9yKSxcbiAgICAgIGhlbHBlclRleHQ6IHZhbGlkYXRpb25FcnJvclxuICAgIH0sIG90aGVyLCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgICB2YXJpYW50OiBpbnB1dFZhcmlhbnQsXG4gICAgICBJbnB1dFByb3BzOiBfb2JqZWN0U3ByZWFkJDEoe30sIElucHV0UHJvcHMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocG9zaXRpb24sIFwiQWRvcm5tZW50XCIpLCBjcmVhdGVFbGVtZW50KElucHV0QWRvcm5tZW50LCBfZXh0ZW5kcyh7XG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICAgICAgfSwgSW5wdXRBZG9ybm1lbnRQcm9wcyksIGNyZWF0ZUVsZW1lbnQoSWNvbkJ1dHRvbiwgX2V4dGVuZHMoe1xuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWRcbiAgICAgIH0sIEtleWJvYXJkQnV0dG9uUHJvcHMsIHtcbiAgICAgICAgb25DbGljazogb25PcGVuXG4gICAgICB9KSwga2V5Ym9hcmRJY29uKSkpKVxuICAgIH0pKTtcbiAgfSk7XG59O1xuS2V5Ym9hcmREYXRlSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICBrZXlib2FyZEljb246IGNyZWF0ZUVsZW1lbnQoS2V5Ym9hcmRJY29uLCBudWxsKVxufTtcblxuZnVuY3Rpb24gdXNlT3BlblN0YXRlKF9yZWYpIHtcbiAgdmFyIG9wZW4gPSBfcmVmLm9wZW4sXG4gICAgICBvbk9wZW4gPSBfcmVmLm9uT3BlbixcbiAgICAgIG9uQ2xvc2UgPSBfcmVmLm9uQ2xvc2U7XG4gIHZhciBzZXRJc09wZW5TdGF0ZSA9IG51bGw7XG5cbiAgaWYgKG9wZW4gPT09IHVuZGVmaW5lZCB8fCBvcGVuID09PSBudWxsKSB7XG4gICAgLy8gVGhlIGNvbXBvbmVudCBpcyB1bmNvbnRyb2xsZWQsIHNvIHdlIG5lZWQgdG8gZ2l2ZSBpdCBpdHMgb3duIHN0YXRlLlxuICAgIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB2YXIgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMik7XG5cbiAgICBvcGVuID0gX3VzZVN0YXRlMlswXTtcbiAgICBzZXRJc09wZW5TdGF0ZSA9IF91c2VTdGF0ZTJbMV07XG4gIH0gLy8gcHJldHRpZXItaWdub3JlXG5cblxuICB2YXIgc2V0SXNPcGVuID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5ld0lzT3Blbikge1xuICAgIHNldElzT3BlblN0YXRlICYmIHNldElzT3BlblN0YXRlKG5ld0lzT3Blbik7XG4gICAgcmV0dXJuIG5ld0lzT3BlbiA/IG9uT3BlbiAmJiBvbk9wZW4oKSA6IG9uQ2xvc2UgJiYgb25DbG9zZSgpO1xuICB9LCBbb25PcGVuLCBvbkNsb3NlLCBzZXRJc09wZW5TdGF0ZV0pO1xuICByZXR1cm4ge1xuICAgIGlzT3Blbjogb3BlbixcbiAgICBzZXRJc09wZW46IHNldElzT3BlblxuICB9O1xufVxuXG52YXIgdXNlVmFsdWVUb0RhdGUgPSBmdW5jdGlvbiB1c2VWYWx1ZVRvRGF0ZSh1dGlscywgX3JlZikge1xuICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgaW5pdGlhbEZvY3VzZWREYXRlID0gX3JlZi5pbml0aWFsRm9jdXNlZERhdGU7XG4gIHZhciBub3dSZWYgPSB1c2VSZWYodXRpbHMuZGF0ZSgpKTtcbiAgdmFyIGRhdGUgPSB1dGlscy5kYXRlKHZhbHVlIHx8IGluaXRpYWxGb2N1c2VkRGF0ZSB8fCBub3dSZWYuY3VycmVudCk7XG4gIHJldHVybiBkYXRlICYmIHV0aWxzLmlzVmFsaWQoZGF0ZSkgPyBkYXRlIDogbm93UmVmLmN1cnJlbnQ7XG59O1xuXG5mdW5jdGlvbiB1c2VEYXRlVmFsdWVzKHByb3BzLCBvcHRpb25zKSB7XG4gIHZhciB1dGlscyA9IHVzZVV0aWxzKCk7XG4gIHZhciBkYXRlID0gdXNlVmFsdWVUb0RhdGUodXRpbHMsIHByb3BzKTtcbiAgdmFyIGZvcm1hdCA9IHByb3BzLmZvcm1hdCB8fCBvcHRpb25zLmdldERlZmF1bHRGb3JtYXQoKTtcbiAgcmV0dXJuIHtcbiAgICBkYXRlOiBkYXRlLFxuICAgIGZvcm1hdDogZm9ybWF0XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZVBpY2tlclN0YXRlKHByb3BzLCBvcHRpb25zKSB7XG4gIHZhciBhdXRvT2sgPSBwcm9wcy5hdXRvT2ssXG4gICAgICBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgcmVhZE9ubHkgPSBwcm9wcy5yZWFkT25seSxcbiAgICAgIG9uQWNjZXB0ID0gcHJvcHMub25BY2NlcHQsXG4gICAgICBfb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgIG9uRXJyb3IgPSBwcm9wcy5vbkVycm9yLFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIHZhcmlhbnQgPSBwcm9wcy52YXJpYW50O1xuICB2YXIgdXRpbHMgPSB1c2VVdGlscygpO1xuXG4gIHZhciBfdXNlT3BlblN0YXRlID0gdXNlT3BlblN0YXRlKHByb3BzKSxcbiAgICAgIGlzT3BlbiA9IF91c2VPcGVuU3RhdGUuaXNPcGVuLFxuICAgICAgc2V0SXNPcGVuID0gX3VzZU9wZW5TdGF0ZS5zZXRJc09wZW47XG5cbiAgdmFyIF91c2VEYXRlVmFsdWVzID0gdXNlRGF0ZVZhbHVlcyhwcm9wcywgb3B0aW9ucyksXG4gICAgICBkYXRlID0gX3VzZURhdGVWYWx1ZXMuZGF0ZSxcbiAgICAgIGZvcm1hdCA9IF91c2VEYXRlVmFsdWVzLmZvcm1hdDtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoZGF0ZSksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIHBpY2tlckRhdGUgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0UGlja2VyRGF0ZSA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBpZiB2YWx1ZSB3YXMgY2hhbmdlZCBpbiBjbG9zZWQgc3RhdGUgLSB0cmVhdCBpdCBhcyBhY2NlcHRlZFxuICAgIGlmICghaXNPcGVuICYmICF1dGlscy5pc0VxdWFsKHBpY2tlckRhdGUsIGRhdGUpKSB7XG4gICAgICBzZXRQaWNrZXJEYXRlKGRhdGUpO1xuICAgIH1cbiAgfSwgW2RhdGUsIGlzT3BlbiwgcGlja2VyRGF0ZSwgdXRpbHNdKTtcbiAgdmFyIGFjY2VwdERhdGUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoYWNjZXB0ZWREYXRlKSB7XG4gICAgX29uQ2hhbmdlKGFjY2VwdGVkRGF0ZSk7XG5cbiAgICBpZiAob25BY2NlcHQpIHtcbiAgICAgIG9uQWNjZXB0KGFjY2VwdGVkRGF0ZSk7XG4gICAgfVxuXG4gICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgfSwgW29uQWNjZXB0LCBfb25DaGFuZ2UsIHNldElzT3Blbl0pO1xuICB2YXIgd3JhcHBlclByb3BzID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvcm1hdDogZm9ybWF0LFxuICAgICAgb3BlbjogaXNPcGVuLFxuICAgICAgb25DbGVhcjogZnVuY3Rpb24gb25DbGVhcigpIHtcbiAgICAgICAgcmV0dXJuIGFjY2VwdERhdGUobnVsbCk7XG4gICAgICB9LFxuICAgICAgb25BY2NlcHQ6IGZ1bmN0aW9uIG9uQWNjZXB0KCkge1xuICAgICAgICByZXR1cm4gYWNjZXB0RGF0ZShwaWNrZXJEYXRlKTtcbiAgICAgIH0sXG4gICAgICBvblNldFRvZGF5OiBmdW5jdGlvbiBvblNldFRvZGF5KCkge1xuICAgICAgICByZXR1cm4gc2V0UGlja2VyRGF0ZSh1dGlscy5kYXRlKCkpO1xuICAgICAgfSxcbiAgICAgIG9uRGlzbWlzczogZnVuY3Rpb24gb25EaXNtaXNzKCkge1xuICAgICAgICBzZXRJc09wZW4oZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFthY2NlcHREYXRlLCBmb3JtYXQsIGlzT3BlbiwgcGlja2VyRGF0ZSwgc2V0SXNPcGVuLCB1dGlsc10pO1xuICB2YXIgcGlja2VyUHJvcHMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0ZTogcGlja2VyRGF0ZSxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShuZXdEYXRlKSB7XG4gICAgICAgIHZhciBpc0ZpbmlzaCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcbiAgICAgICAgc2V0UGlja2VyRGF0ZShuZXdEYXRlKTtcblxuICAgICAgICBpZiAoaXNGaW5pc2ggJiYgYXV0b09rKSB7XG4gICAgICAgICAgYWNjZXB0RGF0ZShuZXdEYXRlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gc2ltdWxhdGUgYXV0b09rLCBidXQgZG8gbm90IGNsb3NlIHRoZSBtb2RhbFxuXG5cbiAgICAgICAgaWYgKHZhcmlhbnQgPT09ICdpbmxpbmUnIHx8IHZhcmlhbnQgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgX29uQ2hhbmdlKG5ld0RhdGUpO1xuXG4gICAgICAgICAgb25BY2NlcHQgJiYgb25BY2NlcHQobmV3RGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9LCBbYWNjZXB0RGF0ZSwgYXV0b09rLCBvbkFjY2VwdCwgX29uQ2hhbmdlLCBwaWNrZXJEYXRlLCB2YXJpYW50XSk7XG4gIHZhciB2YWxpZGF0aW9uRXJyb3IgPSB2YWxpZGF0ZSh2YWx1ZSwgdXRpbHMsIHByb3BzKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAob25FcnJvcikge1xuICAgICAgb25FcnJvcih2YWxpZGF0aW9uRXJyb3IsIHZhbHVlKTtcbiAgICB9XG4gIH0sIFtvbkVycm9yLCB2YWxpZGF0aW9uRXJyb3IsIHZhbHVlXSk7XG4gIHZhciBpbnB1dFZhbHVlID0gZ2V0RGlzcGxheURhdGUoZGF0ZSwgZm9ybWF0LCB1dGlscywgdmFsdWUgPT09IG51bGwsIHByb3BzKTtcbiAgdmFyIGlucHV0UHJvcHMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSxcbiAgICAgIHZhbGlkYXRpb25FcnJvcjogdmFsaWRhdGlvbkVycm9yLFxuICAgICAgb3BlblBpY2tlcjogZnVuY3Rpb24gb3BlblBpY2tlcigpIHtcbiAgICAgICAgcmV0dXJuICFyZWFkT25seSAmJiAhZGlzYWJsZWQgJiYgc2V0SXNPcGVuKHRydWUpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtkaXNhYmxlZCwgaW5wdXRWYWx1ZSwgcmVhZE9ubHksIHNldElzT3BlbiwgdmFsaWRhdGlvbkVycm9yXSk7XG4gIHZhciBwaWNrZXJTdGF0ZSA9IHtcbiAgICBwaWNrZXJQcm9wczogcGlja2VyUHJvcHMsXG4gICAgaW5wdXRQcm9wczogaW5wdXRQcm9wcyxcbiAgICB3cmFwcGVyUHJvcHM6IHdyYXBwZXJQcm9wc1xuICB9O1xuICB1c2VEZWJ1Z1ZhbHVlKHBpY2tlclN0YXRlKTtcbiAgcmV0dXJuIHBpY2tlclN0YXRlO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzJDIob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkMih0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzJDIoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkMihzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIHBhcnNlSW5wdXRTdHJpbmcodmFsdWUsIHV0aWxzLCBmb3JtYXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gdXRpbHMucGFyc2UodmFsdWUsIGZvcm1hdCk7XG4gIH0gY2F0Y2ggKF91bnVzZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiB1c2VLZXlib2FyZFBpY2tlclN0YXRlKHByb3BzLCBvcHRpb25zKSB7XG4gIHZhciBfcHJvcHMkZm9ybWF0ID0gcHJvcHMuZm9ybWF0LFxuICAgICAgZm9ybWF0ID0gX3Byb3BzJGZvcm1hdCA9PT0gdm9pZCAwID8gb3B0aW9ucy5nZXREZWZhdWx0Rm9ybWF0KCkgOiBfcHJvcHMkZm9ybWF0LFxuICAgICAgaW5wdXRWYWx1ZSA9IHByb3BzLmlucHV0VmFsdWUsXG4gICAgICBfb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgIHZhbHVlID0gcHJvcHMudmFsdWU7XG4gIHZhciB1dGlscyA9IHVzZVV0aWxzKCk7XG4gIHZhciBkaXNwbGF5RGF0ZSA9IGdldERpc3BsYXlEYXRlKHZhbHVlLCBmb3JtYXQsIHV0aWxzLCB2YWx1ZSA9PT0gbnVsbCwgcHJvcHMpO1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShkaXNwbGF5RGF0ZSksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIGlubmVySW5wdXRWYWx1ZSA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRJbm5lcklucHV0VmFsdWUgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBkYXRlVmFsdWUgPSBpbnB1dFZhbHVlID8gcGFyc2VJbnB1dFN0cmluZyhpbnB1dFZhbHVlLCB1dGlscywgZm9ybWF0KSA6IHZhbHVlO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB1dGlscy5pc1ZhbGlkKHZhbHVlKSkge1xuICAgICAgc2V0SW5uZXJJbnB1dFZhbHVlKGRpc3BsYXlEYXRlKTtcbiAgICB9XG4gIH0sIFtkaXNwbGF5RGF0ZSwgc2V0SW5uZXJJbnB1dFZhbHVlLCB1dGlscywgdmFsdWVdKTtcbiAgdmFyIGhhbmRsZUtleWJvYXJkQ2hhbmdlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGRhdGUpIHtcbiAgICBfb25DaGFuZ2UoZGF0ZSwgZGF0ZSA9PT0gbnVsbCA/IG51bGwgOiB1dGlscy5mb3JtYXQoZGF0ZSwgZm9ybWF0KSk7XG4gIH0sIFtmb3JtYXQsIF9vbkNoYW5nZSwgdXRpbHNdKTtcblxuICB2YXIgX3VzZVBpY2tlclN0YXRlID0gdXNlUGlja2VyU3RhdGUoIC8vIEV4dGVuZCBwcm9wcyBpbnRlcmZhY2VcbiAgX29iamVjdFNwcmVhZCQyKHt9LCBwcm9wcywge1xuICAgIHZhbHVlOiBkYXRlVmFsdWUsXG4gICAgb25DaGFuZ2U6IGhhbmRsZUtleWJvYXJkQ2hhbmdlXG4gIH0pLCBvcHRpb25zKSxcbiAgICAgIGlubmVySW5wdXRQcm9wcyA9IF91c2VQaWNrZXJTdGF0ZS5pbnB1dFByb3BzLFxuICAgICAgd3JhcHBlclByb3BzID0gX3VzZVBpY2tlclN0YXRlLndyYXBwZXJQcm9wcyxcbiAgICAgIHBpY2tlclByb3BzID0gX3VzZVBpY2tlclN0YXRlLnBpY2tlclByb3BzO1xuXG4gIHZhciBpbnB1dFByb3BzID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9vYmplY3RTcHJlYWQkMih7fSwgaW5uZXJJbnB1dFByb3BzLCB7XG4gICAgICAvLyByZXVzZSB2YWxpZGF0aW9uIGFuZCBvcGVuL2Nsb3NlIGxvZ2ljXG4gICAgICBmb3JtYXQ6IHdyYXBwZXJQcm9wcy5mb3JtYXQsXG4gICAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlIHx8IGlubmVySW5wdXRWYWx1ZSxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICBzZXRJbm5lcklucHV0VmFsdWUodmFsdWUgfHwgJycpO1xuICAgICAgICB2YXIgZGF0ZSA9IHZhbHVlID09PSBudWxsID8gbnVsbCA6IHV0aWxzLnBhcnNlKHZhbHVlLCB3cmFwcGVyUHJvcHMuZm9ybWF0KTtcblxuICAgICAgICBfb25DaGFuZ2UoZGF0ZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbaW5uZXJJbnB1dFByb3BzLCBpbm5lcklucHV0VmFsdWUsIGlucHV0VmFsdWUsIF9vbkNoYW5nZSwgdXRpbHMsIHdyYXBwZXJQcm9wcy5mb3JtYXRdKTtcbiAgcmV0dXJuIHtcbiAgICBpbnB1dFByb3BzOiBpbnB1dFByb3BzLFxuICAgIHdyYXBwZXJQcm9wczogd3JhcHBlclByb3BzLFxuICAgIHBpY2tlclByb3BzOiBwaWNrZXJQcm9wc1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYWtlUGlja2VyV2l0aFN0YXRlKF9yZWYpIHtcbiAgdmFyIElucHV0ID0gX3JlZi5JbnB1dCxcbiAgICAgIHVzZVN0YXRlID0gX3JlZi51c2VTdGF0ZSxcbiAgICAgIHVzZU9wdGlvbnMgPSBfcmVmLnVzZU9wdGlvbnMsXG4gICAgICBnZXRDdXN0b21Qcm9wcyA9IF9yZWYuZ2V0Q3VzdG9tUHJvcHMsXG4gICAgICBEZWZhdWx0VG9vbGJhckNvbXBvbmVudCA9IF9yZWYuRGVmYXVsdFRvb2xiYXJDb21wb25lbnQ7XG5cbiAgZnVuY3Rpb24gUGlja2VyV2l0aFN0YXRlKHByb3BzKSB7XG4gICAgdmFyIGFsbG93S2V5Ym9hcmRDb250cm9sID0gcHJvcHMuYWxsb3dLZXlib2FyZENvbnRyb2wsXG4gICAgICAgIGFtcG0gPSBwcm9wcy5hbXBtLFxuICAgICAgICBhbmltYXRlWWVhclNjcm9sbGluZyA9IHByb3BzLmFuaW1hdGVZZWFyU2Nyb2xsaW5nLFxuICAgICAgICBhdXRvT2sgPSBwcm9wcy5hdXRvT2ssXG4gICAgICAgIGRhdGVSYW5nZUljb24gPSBwcm9wcy5kYXRlUmFuZ2VJY29uLFxuICAgICAgICBkaXNhYmxlRnV0dXJlID0gcHJvcHMuZGlzYWJsZUZ1dHVyZSxcbiAgICAgICAgZGlzYWJsZVBhc3QgPSBwcm9wcy5kaXNhYmxlUGFzdCxcbiAgICAgICAgZGlzYWJsZVRvb2xiYXIgPSBwcm9wcy5kaXNhYmxlVG9vbGJhcixcbiAgICAgICAgZW1wdHlMYWJlbCA9IHByb3BzLmVtcHR5TGFiZWwsXG4gICAgICAgIGZvcm1hdCA9IHByb3BzLmZvcm1hdCxcbiAgICAgICAgZm9yd2FyZGVkUmVmID0gcHJvcHMuZm9yd2FyZGVkUmVmLFxuICAgICAgICBoaWRlVGFicyA9IHByb3BzLmhpZGVUYWJzLFxuICAgICAgICBpbml0aWFsRm9jdXNlZERhdGUgPSBwcm9wcy5pbml0aWFsRm9jdXNlZERhdGUsXG4gICAgICAgIGludmFsaWREYXRlTWVzc2FnZSA9IHByb3BzLmludmFsaWREYXRlTWVzc2FnZSxcbiAgICAgICAgaW52YWxpZExhYmVsID0gcHJvcHMuaW52YWxpZExhYmVsLFxuICAgICAgICBsYWJlbEZ1bmMgPSBwcm9wcy5sYWJlbEZ1bmMsXG4gICAgICAgIGxlZnRBcnJvd0J1dHRvblByb3BzID0gcHJvcHMubGVmdEFycm93QnV0dG9uUHJvcHMsXG4gICAgICAgIGxlZnRBcnJvd0ljb24gPSBwcm9wcy5sZWZ0QXJyb3dJY29uLFxuICAgICAgICBsb2FkaW5nSW5kaWNhdG9yID0gcHJvcHMubG9hZGluZ0luZGljYXRvcixcbiAgICAgICAgbWF4RGF0ZSA9IHByb3BzLm1heERhdGUsXG4gICAgICAgIG1heERhdGVNZXNzYWdlID0gcHJvcHMubWF4RGF0ZU1lc3NhZ2UsXG4gICAgICAgIG1pbkRhdGUgPSBwcm9wcy5taW5EYXRlLFxuICAgICAgICBtaW5EYXRlTWVzc2FnZSA9IHByb3BzLm1pbkRhdGVNZXNzYWdlLFxuICAgICAgICBtaW51dGVzU3RlcCA9IHByb3BzLm1pbnV0ZXNTdGVwLFxuICAgICAgICBvbkFjY2VwdCA9IHByb3BzLm9uQWNjZXB0LFxuICAgICAgICBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgICBvbkNsb3NlID0gcHJvcHMub25DbG9zZSxcbiAgICAgICAgb25Nb250aENoYW5nZSA9IHByb3BzLm9uTW9udGhDaGFuZ2UsXG4gICAgICAgIG9uT3BlbiA9IHByb3BzLm9uT3BlbixcbiAgICAgICAgb25ZZWFyQ2hhbmdlID0gcHJvcHMub25ZZWFyQ2hhbmdlLFxuICAgICAgICBvcGVuVG8gPSBwcm9wcy5vcGVuVG8sXG4gICAgICAgIG9yaWVudGF0aW9uID0gcHJvcHMub3JpZW50YXRpb24sXG4gICAgICAgIHJlbmRlckRheSA9IHByb3BzLnJlbmRlckRheSxcbiAgICAgICAgcmlnaHRBcnJvd0J1dHRvblByb3BzID0gcHJvcHMucmlnaHRBcnJvd0J1dHRvblByb3BzLFxuICAgICAgICByaWdodEFycm93SWNvbiA9IHByb3BzLnJpZ2h0QXJyb3dJY29uLFxuICAgICAgICBzaG91bGREaXNhYmxlRGF0ZSA9IHByb3BzLnNob3VsZERpc2FibGVEYXRlLFxuICAgICAgICBzdHJpY3RDb21wYXJlRGF0ZXMgPSBwcm9wcy5zdHJpY3RDb21wYXJlRGF0ZXMsXG4gICAgICAgIHRpbWVJY29uID0gcHJvcHMudGltZUljb24sXG4gICAgICAgIF9wcm9wcyRUb29sYmFyQ29tcG9uZSA9IHByb3BzLlRvb2xiYXJDb21wb25lbnQsXG4gICAgICAgIFRvb2xiYXJDb21wb25lbnQgPSBfcHJvcHMkVG9vbGJhckNvbXBvbmUgPT09IHZvaWQgMCA/IERlZmF1bHRUb29sYmFyQ29tcG9uZW50IDogX3Byb3BzJFRvb2xiYXJDb21wb25lLFxuICAgICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgICB2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgICAgdmlld3MgPSBwcm9wcy52aWV3cyxcbiAgICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImFsbG93S2V5Ym9hcmRDb250cm9sXCIsIFwiYW1wbVwiLCBcImFuaW1hdGVZZWFyU2Nyb2xsaW5nXCIsIFwiYXV0b09rXCIsIFwiZGF0ZVJhbmdlSWNvblwiLCBcImRpc2FibGVGdXR1cmVcIiwgXCJkaXNhYmxlUGFzdFwiLCBcImRpc2FibGVUb29sYmFyXCIsIFwiZW1wdHlMYWJlbFwiLCBcImZvcm1hdFwiLCBcImZvcndhcmRlZFJlZlwiLCBcImhpZGVUYWJzXCIsIFwiaW5pdGlhbEZvY3VzZWREYXRlXCIsIFwiaW52YWxpZERhdGVNZXNzYWdlXCIsIFwiaW52YWxpZExhYmVsXCIsIFwibGFiZWxGdW5jXCIsIFwibGVmdEFycm93QnV0dG9uUHJvcHNcIiwgXCJsZWZ0QXJyb3dJY29uXCIsIFwibG9hZGluZ0luZGljYXRvclwiLCBcIm1heERhdGVcIiwgXCJtYXhEYXRlTWVzc2FnZVwiLCBcIm1pbkRhdGVcIiwgXCJtaW5EYXRlTWVzc2FnZVwiLCBcIm1pbnV0ZXNTdGVwXCIsIFwib25BY2NlcHRcIiwgXCJvbkNoYW5nZVwiLCBcIm9uQ2xvc2VcIiwgXCJvbk1vbnRoQ2hhbmdlXCIsIFwib25PcGVuXCIsIFwib25ZZWFyQ2hhbmdlXCIsIFwib3BlblRvXCIsIFwib3JpZW50YXRpb25cIiwgXCJyZW5kZXJEYXlcIiwgXCJyaWdodEFycm93QnV0dG9uUHJvcHNcIiwgXCJyaWdodEFycm93SWNvblwiLCBcInNob3VsZERpc2FibGVEYXRlXCIsIFwic3RyaWN0Q29tcGFyZURhdGVzXCIsIFwidGltZUljb25cIiwgXCJUb29sYmFyQ29tcG9uZW50XCIsIFwidmFsdWVcIiwgXCJ2YXJpYW50XCIsIFwidmlld3NcIl0pO1xuXG4gICAgdmFyIGluamVjdGVkUHJvcHMgPSBnZXRDdXN0b21Qcm9wcyA/IGdldEN1c3RvbVByb3BzKHByb3BzKSA6IHt9O1xuICAgIHZhciBvcHRpb25zID0gdXNlT3B0aW9ucyhwcm9wcyk7XG5cbiAgICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUocHJvcHMsIG9wdGlvbnMpLFxuICAgICAgICBwaWNrZXJQcm9wcyA9IF91c2VTdGF0ZS5waWNrZXJQcm9wcyxcbiAgICAgICAgaW5wdXRQcm9wcyA9IF91c2VTdGF0ZS5pbnB1dFByb3BzLFxuICAgICAgICB3cmFwcGVyUHJvcHMgPSBfdXNlU3RhdGUud3JhcHBlclByb3BzO1xuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoV3JhcHBlciwgX2V4dGVuZHMoe1xuICAgICAgdmFyaWFudDogdmFyaWFudCxcbiAgICAgIElucHV0Q29tcG9uZW50OiBJbnB1dCxcbiAgICAgIERhdGVJbnB1dFByb3BzOiBpbnB1dFByb3BzXG4gICAgfSwgaW5qZWN0ZWRQcm9wcywgd3JhcHBlclByb3BzLCBvdGhlciksIGNyZWF0ZUVsZW1lbnQoUGlja2VyLCBfZXh0ZW5kcyh7fSwgcGlja2VyUHJvcHMsIHtcbiAgICAgIGFsbG93S2V5Ym9hcmRDb250cm9sOiBhbGxvd0tleWJvYXJkQ29udHJvbCxcbiAgICAgIGFtcG06IGFtcG0sXG4gICAgICBhbmltYXRlWWVhclNjcm9sbGluZzogYW5pbWF0ZVllYXJTY3JvbGxpbmcsXG4gICAgICBkYXRlUmFuZ2VJY29uOiBkYXRlUmFuZ2VJY29uLFxuICAgICAgZGlzYWJsZUZ1dHVyZTogZGlzYWJsZUZ1dHVyZSxcbiAgICAgIGRpc2FibGVQYXN0OiBkaXNhYmxlUGFzdCxcbiAgICAgIGRpc2FibGVUb29sYmFyOiBkaXNhYmxlVG9vbGJhcixcbiAgICAgIGhpZGVUYWJzOiBoaWRlVGFicyxcbiAgICAgIGxlZnRBcnJvd0J1dHRvblByb3BzOiBsZWZ0QXJyb3dCdXR0b25Qcm9wcyxcbiAgICAgIGxlZnRBcnJvd0ljb246IGxlZnRBcnJvd0ljb24sXG4gICAgICBsb2FkaW5nSW5kaWNhdG9yOiBsb2FkaW5nSW5kaWNhdG9yLFxuICAgICAgbWF4RGF0ZTogbWF4RGF0ZSxcbiAgICAgIG1pbkRhdGU6IG1pbkRhdGUsXG4gICAgICBtaW51dGVzU3RlcDogbWludXRlc1N0ZXAsXG4gICAgICBvbk1vbnRoQ2hhbmdlOiBvbk1vbnRoQ2hhbmdlLFxuICAgICAgb25ZZWFyQ2hhbmdlOiBvblllYXJDaGFuZ2UsXG4gICAgICBvcGVuVG86IG9wZW5UbyxcbiAgICAgIG9yaWVudGF0aW9uOiBvcmllbnRhdGlvbixcbiAgICAgIHJlbmRlckRheTogcmVuZGVyRGF5LFxuICAgICAgcmlnaHRBcnJvd0J1dHRvblByb3BzOiByaWdodEFycm93QnV0dG9uUHJvcHMsXG4gICAgICByaWdodEFycm93SWNvbjogcmlnaHRBcnJvd0ljb24sXG4gICAgICBzaG91bGREaXNhYmxlRGF0ZTogc2hvdWxkRGlzYWJsZURhdGUsXG4gICAgICBzdHJpY3RDb21wYXJlRGF0ZXM6IHN0cmljdENvbXBhcmVEYXRlcyxcbiAgICAgIHRpbWVJY29uOiB0aW1lSWNvbixcbiAgICAgIFRvb2xiYXJDb21wb25lbnQ6IFRvb2xiYXJDb21wb25lbnQsXG4gICAgICB2aWV3czogdmlld3NcbiAgICB9KSkpO1xuICB9XG5cbiAgcmV0dXJuIFBpY2tlcldpdGhTdGF0ZTtcbn1cblxuZXhwb3J0IHsgS2V5Ym9hcmREYXRlSW5wdXQgYXMgSywgUGlja2VyVG9vbGJhciBhcyBQLCBUb29sYmFyQnV0dG9uJDEgYXMgVCwgUHVyZURhdGVJbnB1dCBhcyBhLCB1c2VLZXlib2FyZFBpY2tlclN0YXRlIGFzIGIsIFRvb2xiYXJUZXh0IGFzIGMsIG1ha2VQaWNrZXJXaXRoU3RhdGUgYXMgbSwgcGljazEyaE9yMjRoRm9ybWF0IGFzIHAsIHVzZVBpY2tlclN0YXRlIGFzIHUsIHZhbGlkYXRlIGFzIHYgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1ha2VQaWNrZXJXaXRoU3RhdGUtZmVlMzk3NjUuanMubWFwXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VNZW1vLCBjcmVhdGVFbGVtZW50LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZnVuYywgb25lT2ZUeXBlLCBvYmplY3QsIHN0cmluZywgZWxlbWVudCwgYXJyYXlPZiB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuXG52YXIgTXVpUGlja2Vyc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xudmFyIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyID0gZnVuY3Rpb24gTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIoX3JlZikge1xuICB2YXIgVXRpbHMgPSBfcmVmLnV0aWxzLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgbG9jYWxlID0gX3JlZi5sb2NhbGUsXG4gICAgICBsaWJJbnN0YW5jZSA9IF9yZWYubGliSW5zdGFuY2U7XG4gIHZhciB1dGlscyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgVXRpbHMoe1xuICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICBpbnN0YW5jZTogbGliSW5zdGFuY2VcbiAgICB9KTtcbiAgfSwgW1V0aWxzLCBsaWJJbnN0YW5jZSwgbG9jYWxlXSk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KE11aVBpY2tlcnNDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHV0aWxzLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICB9KTtcbn07XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBNdWlQaWNrZXJzVXRpbHNQcm92aWRlci5wcm9wVHlwZXMgPSB7XG4gIHV0aWxzOiBmdW5jLmlzUmVxdWlyZWQsXG4gIGxvY2FsZTogb25lT2ZUeXBlKFtvYmplY3QsIHN0cmluZ10pLFxuICBjaGlsZHJlbjogb25lT2ZUeXBlKFtlbGVtZW50LmlzUmVxdWlyZWQsIGFycmF5T2YoZWxlbWVudC5pc1JlcXVpcmVkKV0pLmlzUmVxdWlyZWRcbn0gOiB2b2lkIDA7XG5cbnZhciBjaGVja1V0aWxzID0gZnVuY3Rpb24gY2hlY2tVdGlscyh1dGlscykge1xuICBpZiAoIXV0aWxzKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IGZpbmQgdXRpbHMgaW4gY29udGV4dC4gWW91IGVpdGhlciBhKSBmb3Jnb3QgdG8gd3JhcCB5b3VyIGNvbXBvbmVudCB0cmVlIGluIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyOyBvciBiKSBtaXhlZCBuYW1lZCBhbmQgZGlyZWN0IGZpbGUgaW1wb3J0cy4gIFJlY29tbWVuZGF0aW9uOiB1c2UgbmFtZWQgaW1wb3J0cyBmcm9tIHRoZSBtb2R1bGUgaW5kZXguJyk7XG4gIH1cbn07XG5mdW5jdGlvbiB1c2VVdGlscygpIHtcbiAgdmFyIHV0aWxzID0gdXNlQ29udGV4dChNdWlQaWNrZXJzQ29udGV4dCk7XG4gIGNoZWNrVXRpbHModXRpbHMpO1xuICByZXR1cm4gdXRpbHM7XG59XG5cbmV4cG9ydCB7IE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyIGFzIE0sIE11aVBpY2tlcnNDb250ZXh0IGFzIGEsIHVzZVV0aWxzIGFzIHUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZVV0aWxzLWNmYjk2YWM5LmpzLm1hcFxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAoIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufSIsImltcG9ydCBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi4vLi4vaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiLi9ub25JdGVyYWJsZVJlc3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCAqIGFzIFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBhZGRPbmVDbGFzcyBmcm9tICdkb20taGVscGVycy9jbGFzcy9hZGRDbGFzcyc7XG5pbXBvcnQgcmVtb3ZlT25lQ2xhc3MgZnJvbSAnZG9tLWhlbHBlcnMvY2xhc3MvcmVtb3ZlQ2xhc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcmFuc2l0aW9uIGZyb20gJy4vVHJhbnNpdGlvbic7XG5pbXBvcnQgeyBjbGFzc05hbWVzU2hhcGUgfSBmcm9tICcuL3V0aWxzL1Byb3BUeXBlcyc7XG5cbnZhciBfYWRkQ2xhc3MgPSBmdW5jdGlvbiBhZGRDbGFzcyhub2RlLCBjbGFzc2VzKSB7XG4gIHJldHVybiBub2RlICYmIGNsYXNzZXMgJiYgY2xhc3Nlcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gYWRkT25lQ2xhc3Mobm9kZSwgYyk7XG4gIH0pO1xufTtcblxudmFyIHJlbW92ZUNsYXNzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3Mobm9kZSwgY2xhc3Nlcykge1xuICByZXR1cm4gbm9kZSAmJiBjbGFzc2VzICYmIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIHJlbW92ZU9uZUNsYXNzKG5vZGUsIGMpO1xuICB9KTtcbn07XG4vKipcbiAqIEEgdHJhbnNpdGlvbiBjb21wb25lbnQgaW5zcGlyZWQgYnkgdGhlIGV4Y2VsbGVudFxuICogW25nLWFuaW1hdGVdKGh0dHA6Ly93d3cubmdhbmltYXRlLm9yZy8pIGxpYnJhcnksIHlvdSBzaG91bGQgdXNlIGl0IGlmIHlvdSdyZVxuICogdXNpbmcgQ1NTIHRyYW5zaXRpb25zIG9yIGFuaW1hdGlvbnMuIEl0J3MgYnVpbHQgdXBvbiB0aGVcbiAqIFtgVHJhbnNpdGlvbmBdKGh0dHBzOi8vcmVhY3Rjb21tdW5pdHkub3JnL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvdHJhbnNpdGlvbilcbiAqIGNvbXBvbmVudCwgc28gaXQgaW5oZXJpdHMgYWxsIG9mIGl0cyBwcm9wcy5cbiAqXG4gKiBgQ1NTVHJhbnNpdGlvbmAgYXBwbGllcyBhIHBhaXIgb2YgY2xhc3MgbmFtZXMgZHVyaW5nIHRoZSBgYXBwZWFyYCwgYGVudGVyYCxcbiAqIGFuZCBgZXhpdGAgc3RhdGVzIG9mIHRoZSB0cmFuc2l0aW9uLiBUaGUgZmlyc3QgY2xhc3MgaXMgYXBwbGllZCBhbmQgdGhlbiBhXG4gKiBzZWNvbmQgYCotYWN0aXZlYCBjbGFzcyBpbiBvcmRlciB0byBhY3RpdmF0ZSB0aGUgQ1NTIHRyYW5zaXRpb24uIEFmdGVyIHRoZVxuICogdHJhbnNpdGlvbiwgbWF0Y2hpbmcgYCotZG9uZWAgY2xhc3MgbmFtZXMgYXJlIGFwcGxpZWQgdG8gcGVyc2lzdCB0aGVcbiAqIHRyYW5zaXRpb24gc3RhdGUuXG4gKlxuICogYGBganN4XG4gKiBmdW5jdGlvbiBBcHAoKSB7XG4gKiAgIGNvbnN0IFtpblByb3AsIHNldEluUHJvcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gKiAgIHJldHVybiAoXG4gKiAgICAgPGRpdj5cbiAqICAgICAgIDxDU1NUcmFuc2l0aW9uIGluPXtpblByb3B9IHRpbWVvdXQ9ezIwMH0gY2xhc3NOYW1lcz1cIm15LW5vZGVcIj5cbiAqICAgICAgICAgPGRpdj5cbiAqICAgICAgICAgICB7XCJJJ2xsIHJlY2VpdmUgbXktbm9kZS0qIGNsYXNzZXNcIn1cbiAqICAgICAgICAgPC9kaXY+XG4gKiAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gKiAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRJblByb3AodHJ1ZSl9PlxuICogICAgICAgICBDbGljayB0byBFbnRlclxuICogICAgICAgPC9idXR0b24+XG4gKiAgICAgPC9kaXY+XG4gKiAgICk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBXaGVuIHRoZSBgaW5gIHByb3AgaXMgc2V0IHRvIGB0cnVlYCwgdGhlIGNoaWxkIGNvbXBvbmVudCB3aWxsIGZpcnN0IHJlY2VpdmVcbiAqIHRoZSBjbGFzcyBgZXhhbXBsZS1lbnRlcmAsIHRoZW4gdGhlIGBleGFtcGxlLWVudGVyLWFjdGl2ZWAgd2lsbCBiZSBhZGRlZCBpblxuICogdGhlIG5leHQgdGljay4gYENTU1RyYW5zaXRpb25gIFtmb3JjZXMgYVxuICogcmVmbG93XShodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2Jsb2IvNTAwNzMwM2U3MjlhNzRiZTY2YTIxYzNlMjIwNWU0OTE2ODIxNTI0Yi9zcmMvQ1NTVHJhbnNpdGlvbi5qcyNMMjA4LUwyMTUpXG4gKiBiZXR3ZWVuIGJlZm9yZSBhZGRpbmcgdGhlIGBleGFtcGxlLWVudGVyLWFjdGl2ZWAuIFRoaXMgaXMgYW4gaW1wb3J0YW50IHRyaWNrXG4gKiBiZWNhdXNlIGl0IGFsbG93cyB1cyB0byB0cmFuc2l0aW9uIGJldHdlZW4gYGV4YW1wbGUtZW50ZXJgIGFuZFxuICogYGV4YW1wbGUtZW50ZXItYWN0aXZlYCBldmVuIHRob3VnaCB0aGV5IHdlcmUgYWRkZWQgaW1tZWRpYXRlbHkgb25lIGFmdGVyXG4gKiBhbm90aGVyLiBNb3N0IG5vdGFibHksIHRoaXMgaXMgd2hhdCBtYWtlcyBpdCBwb3NzaWJsZSBmb3IgdXMgdG8gYW5pbWF0ZVxuICogX2FwcGVhcmFuY2VfLlxuICpcbiAqIGBgYGNzc1xuICogLm15LW5vZGUtZW50ZXIge1xuICogICBvcGFjaXR5OiAwO1xuICogfVxuICogLm15LW5vZGUtZW50ZXItYWN0aXZlIHtcbiAqICAgb3BhY2l0eTogMTtcbiAqICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcbiAqIH1cbiAqIC5teS1ub2RlLWV4aXQge1xuICogICBvcGFjaXR5OiAxO1xuICogfVxuICogLm15LW5vZGUtZXhpdC1hY3RpdmUge1xuICogICBvcGFjaXR5OiAwO1xuICogICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xuICogfVxuICogYGBgXG4gKlxuICogYCotYWN0aXZlYCBjbGFzc2VzIHJlcHJlc2VudCB3aGljaCBzdHlsZXMgeW91IHdhbnQgdG8gYW5pbWF0ZSAqKnRvKiouXG4gKi9cblxuXG52YXIgQ1NTVHJhbnNpdGlvbiA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShDU1NUcmFuc2l0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDU1NUcmFuc2l0aW9uKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgIF90aGlzLmFwcGxpZWRDbGFzc2VzID0ge1xuICAgICAgYXBwZWFyOiB7fSxcbiAgICAgIGVudGVyOiB7fSxcbiAgICAgIGV4aXQ6IHt9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRW50ZXIgPSBmdW5jdGlvbiAobm9kZSwgYXBwZWFyaW5nKSB7XG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdleGl0Jyk7XG5cbiAgICAgIF90aGlzLmFkZENsYXNzKG5vZGUsIGFwcGVhcmluZyA/ICdhcHBlYXInIDogJ2VudGVyJywgJ2Jhc2UnKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRW50ZXIpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FbnRlcihub2RlLCBhcHBlYXJpbmcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkVudGVyaW5nID0gZnVuY3Rpb24gKG5vZGUsIGFwcGVhcmluZykge1xuICAgICAgdmFyIHR5cGUgPSBhcHBlYXJpbmcgPyAnYXBwZWFyJyA6ICdlbnRlcic7XG5cbiAgICAgIF90aGlzLmFkZENsYXNzKG5vZGUsIHR5cGUsICdhY3RpdmUnKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRW50ZXJpbmcpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FbnRlcmluZyhub2RlLCBhcHBlYXJpbmcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkVudGVyZWQgPSBmdW5jdGlvbiAobm9kZSwgYXBwZWFyaW5nKSB7XG4gICAgICB2YXIgdHlwZSA9IGFwcGVhcmluZyA/ICdhcHBlYXInIDogJ2VudGVyJztcblxuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCB0eXBlKTtcblxuICAgICAgX3RoaXMuYWRkQ2xhc3Mobm9kZSwgdHlwZSwgJ2RvbmUnKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRW50ZXJlZCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkVudGVyZWQobm9kZSwgYXBwZWFyaW5nKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FeGl0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2FwcGVhcicpO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdlbnRlcicpO1xuXG4gICAgICBfdGhpcy5hZGRDbGFzcyhub2RlLCAnZXhpdCcsICdiYXNlJyk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkV4aXQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FeGl0KG5vZGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkV4aXRpbmcgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgX3RoaXMuYWRkQ2xhc3Mobm9kZSwgJ2V4aXQnLCAnYWN0aXZlJyk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkV4aXRpbmcpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FeGl0aW5nKG5vZGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkV4aXRlZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdleGl0Jyk7XG5cbiAgICAgIF90aGlzLmFkZENsYXNzKG5vZGUsICdleGl0JywgJ2RvbmUnKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRXhpdGVkKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRXhpdGVkKG5vZGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5nZXRDbGFzc05hbWVzID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIHZhciBjbGFzc05hbWVzID0gX3RoaXMucHJvcHMuY2xhc3NOYW1lcztcbiAgICAgIHZhciBpc1N0cmluZ0NsYXNzTmFtZXMgPSB0eXBlb2YgY2xhc3NOYW1lcyA9PT0gJ3N0cmluZyc7XG4gICAgICB2YXIgcHJlZml4ID0gaXNTdHJpbmdDbGFzc05hbWVzICYmIGNsYXNzTmFtZXMgPyBjbGFzc05hbWVzICsgXCItXCIgOiAnJztcbiAgICAgIHZhciBiYXNlQ2xhc3NOYW1lID0gaXNTdHJpbmdDbGFzc05hbWVzID8gXCJcIiArIHByZWZpeCArIHR5cGUgOiBjbGFzc05hbWVzW3R5cGVdO1xuICAgICAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IGlzU3RyaW5nQ2xhc3NOYW1lcyA/IGJhc2VDbGFzc05hbWUgKyBcIi1hY3RpdmVcIiA6IGNsYXNzTmFtZXNbdHlwZSArIFwiQWN0aXZlXCJdO1xuICAgICAgdmFyIGRvbmVDbGFzc05hbWUgPSBpc1N0cmluZ0NsYXNzTmFtZXMgPyBiYXNlQ2xhc3NOYW1lICsgXCItZG9uZVwiIDogY2xhc3NOYW1lc1t0eXBlICsgXCJEb25lXCJdO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYmFzZUNsYXNzTmFtZTogYmFzZUNsYXNzTmFtZSxcbiAgICAgICAgYWN0aXZlQ2xhc3NOYW1lOiBhY3RpdmVDbGFzc05hbWUsXG4gICAgICAgIGRvbmVDbGFzc05hbWU6IGRvbmVDbGFzc05hbWVcbiAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBDU1NUcmFuc2l0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8uYWRkQ2xhc3MgPSBmdW5jdGlvbiBhZGRDbGFzcyhub2RlLCB0eXBlLCBwaGFzZSkge1xuICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLmdldENsYXNzTmFtZXModHlwZSlbcGhhc2UgKyBcIkNsYXNzTmFtZVwiXTtcblxuICAgIGlmICh0eXBlID09PSAnYXBwZWFyJyAmJiBwaGFzZSA9PT0gJ2RvbmUnKSB7XG4gICAgICBjbGFzc05hbWUgKz0gXCIgXCIgKyB0aGlzLmdldENsYXNzTmFtZXMoJ2VudGVyJykuZG9uZUNsYXNzTmFtZTtcbiAgICB9IC8vIFRoaXMgaXMgZm9yIHRvIGZvcmNlIGEgcmVwYWludCxcbiAgICAvLyB3aGljaCBpcyBuZWNlc3NhcnkgaW4gb3JkZXIgdG8gdHJhbnNpdGlvbiBzdHlsZXMgd2hlbiBhZGRpbmcgYSBjbGFzcyBuYW1lLlxuXG5cbiAgICBpZiAocGhhc2UgPT09ICdhY3RpdmUnKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbiAgICAgIG5vZGUgJiYgbm9kZS5zY3JvbGxUb3A7XG4gICAgfVxuXG4gICAgdGhpcy5hcHBsaWVkQ2xhc3Nlc1t0eXBlXVtwaGFzZV0gPSBjbGFzc05hbWU7XG5cbiAgICBfYWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlQ2xhc3NlcyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMobm9kZSwgdHlwZSkge1xuICAgIHZhciBfdGhpcyRhcHBsaWVkQ2xhc3NlcyQgPSB0aGlzLmFwcGxpZWRDbGFzc2VzW3R5cGVdLFxuICAgICAgICBiYXNlQ2xhc3NOYW1lID0gX3RoaXMkYXBwbGllZENsYXNzZXMkLmJhc2UsXG4gICAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF90aGlzJGFwcGxpZWRDbGFzc2VzJC5hY3RpdmUsXG4gICAgICAgIGRvbmVDbGFzc05hbWUgPSBfdGhpcyRhcHBsaWVkQ2xhc3NlcyQuZG9uZTtcbiAgICB0aGlzLmFwcGxpZWRDbGFzc2VzW3R5cGVdID0ge307XG5cbiAgICBpZiAoYmFzZUNsYXNzTmFtZSkge1xuICAgICAgcmVtb3ZlQ2xhc3Mobm9kZSwgYmFzZUNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZUNsYXNzTmFtZSkge1xuICAgICAgcmVtb3ZlQ2xhc3Mobm9kZSwgYWN0aXZlQ2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICBpZiAoZG9uZUNsYXNzTmFtZSkge1xuICAgICAgcmVtb3ZlQ2xhc3Mobm9kZSwgZG9uZUNsYXNzTmFtZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgXyA9IF90aGlzJHByb3BzLmNsYXNzTmFtZXMsXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImNsYXNzTmFtZXNcIl0pO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbiwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBvbkVudGVyOiB0aGlzLm9uRW50ZXIsXG4gICAgICBvbkVudGVyZWQ6IHRoaXMub25FbnRlcmVkLFxuICAgICAgb25FbnRlcmluZzogdGhpcy5vbkVudGVyaW5nLFxuICAgICAgb25FeGl0OiB0aGlzLm9uRXhpdCxcbiAgICAgIG9uRXhpdGluZzogdGhpcy5vbkV4aXRpbmcsXG4gICAgICBvbkV4aXRlZDogdGhpcy5vbkV4aXRlZFxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gQ1NTVHJhbnNpdGlvbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuQ1NTVHJhbnNpdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZXM6ICcnXG59O1xuQ1NTVHJhbnNpdGlvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBfZXh0ZW5kcyh7fSwgVHJhbnNpdGlvbi5wcm9wVHlwZXMsIHtcbiAgLyoqXG4gICAqIFRoZSBhbmltYXRpb24gY2xhc3NOYW1lcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQgYXMgaXQgZW50ZXJzLCBleGl0cyBvclxuICAgKiBoYXMgZmluaXNoZWQgdGhlIHRyYW5zaXRpb24uIEEgc2luZ2xlIG5hbWUgY2FuIGJlIHByb3ZpZGVkIGFuZCBpdCB3aWxsIGJlXG4gICAqIHN1ZmZpeGVkIGZvciBlYWNoIHN0YWdlOiBlLmcuXG4gICAqXG4gICAqIGBjbGFzc05hbWVzPVwiZmFkZVwiYCBhcHBsaWVzIGBmYWRlLWVudGVyYCwgYGZhZGUtZW50ZXItYWN0aXZlYCxcbiAgICogYGZhZGUtZW50ZXItZG9uZWAsIGBmYWRlLWV4aXRgLCBgZmFkZS1leGl0LWFjdGl2ZWAsIGBmYWRlLWV4aXQtZG9uZWAsXG4gICAqIGBmYWRlLWFwcGVhcmAsIGBmYWRlLWFwcGVhci1hY3RpdmVgLCBhbmQgYGZhZGUtYXBwZWFyLWRvbmVgLlxuICAgKlxuICAgKiAqKk5vdGUqKjogYGZhZGUtYXBwZWFyLWRvbmVgIGFuZCBgZmFkZS1lbnRlci1kb25lYCB3aWxsIF9ib3RoXyBiZSBhcHBsaWVkLlxuICAgKiBUaGlzIGFsbG93cyB5b3UgdG8gZGVmaW5lIGRpZmZlcmVudCBiZWhhdmlvciBmb3Igd2hlbiBhcHBlYXJpbmcgaXMgZG9uZSBhbmRcbiAgICogd2hlbiByZWd1bGFyIGVudGVyaW5nIGlzIGRvbmUsIHVzaW5nIHNlbGVjdG9ycyBsaWtlXG4gICAqIGAuZmFkZS1lbnRlci1kb25lOm5vdCguZmFkZS1hcHBlYXItZG9uZSlgLiBGb3IgZXhhbXBsZSwgeW91IGNvdWxkIGFwcGx5IGFuXG4gICAqIGVwaWMgZW50cmFuY2UgYW5pbWF0aW9uIHdoZW4gZWxlbWVudCBmaXJzdCBhcHBlYXJzIGluIHRoZSBET00gdXNpbmdcbiAgICogW0FuaW1hdGUuY3NzXShodHRwczovL2RhbmVkZW4uZ2l0aHViLmlvL2FuaW1hdGUuY3NzLykuIE90aGVyd2lzZSB5b3UgY2FuXG4gICAqIHNpbXBseSB1c2UgYGZhZGUtZW50ZXItZG9uZWAgZm9yIGRlZmluaW5nIGJvdGggY2FzZXMuXG4gICAqXG4gICAqIEVhY2ggaW5kaXZpZHVhbCBjbGFzc05hbWVzIGNhbiBhbHNvIGJlIHNwZWNpZmllZCBpbmRlcGVuZGVudGx5IGxpa2U6XG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGNsYXNzTmFtZXM9e3tcbiAgICogIGFwcGVhcjogJ215LWFwcGVhcicsXG4gICAqICBhcHBlYXJBY3RpdmU6ICdteS1hY3RpdmUtYXBwZWFyJyxcbiAgICogIGFwcGVhckRvbmU6ICdteS1kb25lLWFwcGVhcicsXG4gICAqICBlbnRlcjogJ215LWVudGVyJyxcbiAgICogIGVudGVyQWN0aXZlOiAnbXktYWN0aXZlLWVudGVyJyxcbiAgICogIGVudGVyRG9uZTogJ215LWRvbmUtZW50ZXInLFxuICAgKiAgZXhpdDogJ215LWV4aXQnLFxuICAgKiAgZXhpdEFjdGl2ZTogJ215LWFjdGl2ZS1leGl0JyxcbiAgICogIGV4aXREb25lOiAnbXktZG9uZS1leGl0JyxcbiAgICogfX1cbiAgICogYGBgXG4gICAqXG4gICAqIElmIHlvdSB3YW50IHRvIHNldCB0aGVzZSBjbGFzc2VzIHVzaW5nIENTUyBNb2R1bGVzOlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLmNzcyc7XG4gICAqIGBgYFxuICAgKlxuICAgKiB5b3UgbWlnaHQgd2FudCB0byB1c2UgY2FtZWxDYXNlIGluIHlvdXIgQ1NTIGZpbGUsIHRoYXQgd2F5IGNvdWxkIHNpbXBseVxuICAgKiBzcHJlYWQgdGhlbSBpbnN0ZWFkIG9mIGxpc3RpbmcgdGhlbSBvbmUgYnkgb25lOlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjbGFzc05hbWVzPXt7IC4uLnN0eWxlcyB9fVxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge3N0cmluZyB8IHtcbiAgICogIGFwcGVhcj86IHN0cmluZyxcbiAgICogIGFwcGVhckFjdGl2ZT86IHN0cmluZyxcbiAgICogIGFwcGVhckRvbmU/OiBzdHJpbmcsXG4gICAqICBlbnRlcj86IHN0cmluZyxcbiAgICogIGVudGVyQWN0aXZlPzogc3RyaW5nLFxuICAgKiAgZW50ZXJEb25lPzogc3RyaW5nLFxuICAgKiAgZXhpdD86IHN0cmluZyxcbiAgICogIGV4aXRBY3RpdmU/OiBzdHJpbmcsXG4gICAqICBleGl0RG9uZT86IHN0cmluZyxcbiAgICogfX1cbiAgICovXG4gIGNsYXNzTmFtZXM6IGNsYXNzTmFtZXNTaGFwZSxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2VudGVyJyBvciAnYXBwZWFyJyBjbGFzcyBpc1xuICAgKiBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXG4gICAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2VudGVyLWFjdGl2ZScgb3JcbiAgICogJ2FwcGVhci1hY3RpdmUnIGNsYXNzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZW50ZXInIG9yXG4gICAqICdhcHBlYXInIGNsYXNzZXMgYXJlICoqcmVtb3ZlZCoqIGFuZCB0aGUgYGRvbmVgIGNsYXNzIGlzIGFkZGVkIHRvIHRoZSBET00gbm9kZS5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2V4aXQnIGNsYXNzIGlzXG4gICAqIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KVxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2V4aXQtYWN0aXZlJyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudClcbiAgICovXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdleGl0JyBjbGFzc2VzXG4gICAqIGFyZSAqKnJlbW92ZWQqKiBhbmQgdGhlIGBleGl0LWRvbmVgIGNsYXNzIGlzIGFkZGVkIHRvIHRoZSBET00gbm9kZS5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpXG4gICAqL1xuICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmNcbn0pIDoge307XG5leHBvcnQgZGVmYXVsdCBDU1NUcmFuc2l0aW9uOyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBUcmFuc2l0aW9uR3JvdXAgZnJvbSAnLi9UcmFuc2l0aW9uR3JvdXAnO1xuLyoqXG4gKiBUaGUgYDxSZXBsYWNlVHJhbnNpdGlvbj5gIGNvbXBvbmVudCBpcyBhIHNwZWNpYWxpemVkIGBUcmFuc2l0aW9uYCBjb21wb25lbnRcbiAqIHRoYXQgYW5pbWF0ZXMgYmV0d2VlbiB0d28gY2hpbGRyZW4uXG4gKlxuICogYGBganN4XG4gKiA8UmVwbGFjZVRyYW5zaXRpb24gaW4+XG4gKiAgIDxGYWRlPjxkaXY+SSBhcHBlYXIgZmlyc3Q8L2Rpdj48L0ZhZGU+XG4gKiAgIDxGYWRlPjxkaXY+SSByZXBsYWNlIHRoZSBhYm92ZTwvZGl2PjwvRmFkZT5cbiAqIDwvUmVwbGFjZVRyYW5zaXRpb24+XG4gKiBgYGBcbiAqL1xuXG52YXIgUmVwbGFjZVRyYW5zaXRpb24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoUmVwbGFjZVRyYW5zaXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJlcGxhY2VUcmFuc2l0aW9uKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBfYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIF9hcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoX2FyZ3MpKSB8fCB0aGlzO1xuXG4gICAgX3RoaXMuaGFuZGxlRW50ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3RoaXMuaGFuZGxlTGlmZWN5Y2xlKCdvbkVudGVyJywgMCwgYXJncyk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUVudGVyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUxpZmVjeWNsZSgnb25FbnRlcmluZycsIDAsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVFbnRlcmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW40KSwgX2tleTQgPSAwOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICAgIGFyZ3NbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUxpZmVjeWNsZSgnb25FbnRlcmVkJywgMCwgYXJncyk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUV4aXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuNSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjUpLCBfa2V5NSA9IDA7IF9rZXk1IDwgX2xlbjU7IF9rZXk1KyspIHtcbiAgICAgICAgYXJnc1tfa2V5NV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3RoaXMuaGFuZGxlTGlmZWN5Y2xlKCdvbkV4aXQnLCAxLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlRXhpdGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW42ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNiksIF9rZXk2ID0gMDsgX2tleTYgPCBfbGVuNjsgX2tleTYrKykge1xuICAgICAgICBhcmdzW19rZXk2XSA9IGFyZ3VtZW50c1tfa2V5Nl07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVMaWZlY3ljbGUoJ29uRXhpdGluZycsIDEsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVFeGl0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuNyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjcpLCBfa2V5NyA9IDA7IF9rZXk3IDwgX2xlbjc7IF9rZXk3KyspIHtcbiAgICAgICAgYXJnc1tfa2V5N10gPSBhcmd1bWVudHNbX2tleTddO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3RoaXMuaGFuZGxlTGlmZWN5Y2xlKCdvbkV4aXRlZCcsIDEsIGFyZ3MpO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUmVwbGFjZVRyYW5zaXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5oYW5kbGVMaWZlY3ljbGUgPSBmdW5jdGlvbiBoYW5kbGVMaWZlY3ljbGUoaGFuZGxlciwgaWR4LCBvcmlnaW5hbEFyZ3MpIHtcbiAgICB2YXIgX2NoaWxkJHByb3BzO1xuXG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB2YXIgY2hpbGQgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKVtpZHhdO1xuICAgIGlmIChjaGlsZC5wcm9wc1toYW5kbGVyXSkgKF9jaGlsZCRwcm9wcyA9IGNoaWxkLnByb3BzKVtoYW5kbGVyXS5hcHBseShfY2hpbGQkcHJvcHMsIG9yaWdpbmFsQXJncyk7XG4gICAgaWYgKHRoaXMucHJvcHNbaGFuZGxlcl0pIHRoaXMucHJvcHNbaGFuZGxlcl0oZmluZERPTU5vZGUodGhpcykpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgaW5Qcm9wID0gX3RoaXMkcHJvcHMuaW4sXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiaW5cIl0pO1xuXG4gICAgdmFyIF9SZWFjdCRDaGlsZHJlbiR0b0FyciA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLFxuICAgICAgICBmaXJzdCA9IF9SZWFjdCRDaGlsZHJlbiR0b0FyclswXSxcbiAgICAgICAgc2Vjb25kID0gX1JlYWN0JENoaWxkcmVuJHRvQXJyWzFdO1xuXG4gICAgZGVsZXRlIHByb3BzLm9uRW50ZXI7XG4gICAgZGVsZXRlIHByb3BzLm9uRW50ZXJpbmc7XG4gICAgZGVsZXRlIHByb3BzLm9uRW50ZXJlZDtcbiAgICBkZWxldGUgcHJvcHMub25FeGl0O1xuICAgIGRlbGV0ZSBwcm9wcy5vbkV4aXRpbmc7XG4gICAgZGVsZXRlIHByb3BzLm9uRXhpdGVkO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Hcm91cCwgcHJvcHMsIGluUHJvcCA/IFJlYWN0LmNsb25lRWxlbWVudChmaXJzdCwge1xuICAgICAga2V5OiAnZmlyc3QnLFxuICAgICAgb25FbnRlcjogdGhpcy5oYW5kbGVFbnRlcixcbiAgICAgIG9uRW50ZXJpbmc6IHRoaXMuaGFuZGxlRW50ZXJpbmcsXG4gICAgICBvbkVudGVyZWQ6IHRoaXMuaGFuZGxlRW50ZXJlZFxuICAgIH0pIDogUmVhY3QuY2xvbmVFbGVtZW50KHNlY29uZCwge1xuICAgICAga2V5OiAnc2Vjb25kJyxcbiAgICAgIG9uRW50ZXI6IHRoaXMuaGFuZGxlRXhpdCxcbiAgICAgIG9uRW50ZXJpbmc6IHRoaXMuaGFuZGxlRXhpdGluZyxcbiAgICAgIG9uRW50ZXJlZDogdGhpcy5oYW5kbGVFeGl0ZWRcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIFJlcGxhY2VUcmFuc2l0aW9uO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5SZXBsYWNlVHJhbnNpdGlvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGluOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogZnVuY3Rpb24gY2hpbGRyZW4ocHJvcHMsIHByb3BOYW1lKSB7XG4gICAgaWYgKFJlYWN0LkNoaWxkcmVuLmNvdW50KHByb3BzW3Byb3BOYW1lXSkgIT09IDIpIHJldHVybiBuZXcgRXJyb3IoXCJcXFwiXCIgKyBwcm9wTmFtZSArIFwiXFxcIiBtdXN0IGJlIGV4YWN0bHkgdHdvIHRyYW5zaXRpb24gY29tcG9uZW50cy5cIik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0gOiB7fTtcbmV4cG9ydCBkZWZhdWx0IFJlcGxhY2VUcmFuc2l0aW9uOyIsImltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuXG52YXIgX2xlYXZlUmVuZGVycywgX2VudGVyUmVuZGVycztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBFTlRFUkVELCBFTlRFUklORywgRVhJVElORyB9IGZyb20gJy4vVHJhbnNpdGlvbic7XG5pbXBvcnQgVHJhbnNpdGlvbkdyb3VwQ29udGV4dCBmcm9tICcuL1RyYW5zaXRpb25Hcm91cENvbnRleHQnO1xuXG5mdW5jdGlvbiBhcmVDaGlsZHJlbkRpZmZlcmVudChvbGRDaGlsZHJlbiwgbmV3Q2hpbGRyZW4pIHtcbiAgaWYgKG9sZENoaWxkcmVuID09PSBuZXdDaGlsZHJlbikgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChvbGRDaGlsZHJlbikgJiYgUmVhY3QuaXNWYWxpZEVsZW1lbnQobmV3Q2hpbGRyZW4pICYmIG9sZENoaWxkcmVuLmtleSAhPSBudWxsICYmIG9sZENoaWxkcmVuLmtleSA9PT0gbmV3Q2hpbGRyZW4ua2V5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4vKipcbiAqIEVudW0gb2YgbW9kZXMgZm9yIFN3aXRjaFRyYW5zaXRpb24gY29tcG9uZW50XG4gKiBAZW51bSB7IHN0cmluZyB9XG4gKi9cblxuXG5leHBvcnQgdmFyIG1vZGVzID0ge1xuICBvdXQ6ICdvdXQtaW4nLFxuICBpbjogJ2luLW91dCdcbn07XG5cbnZhciBjYWxsSG9vayA9IGZ1bmN0aW9uIGNhbGxIb29rKGVsZW1lbnQsIG5hbWUsIGNiKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9lbGVtZW50JHByb3BzO1xuXG4gICAgZWxlbWVudC5wcm9wc1tuYW1lXSAmJiAoX2VsZW1lbnQkcHJvcHMgPSBlbGVtZW50LnByb3BzKVtuYW1lXS5hcHBseShfZWxlbWVudCRwcm9wcywgYXJndW1lbnRzKTtcbiAgICBjYigpO1xuICB9O1xufTtcblxudmFyIGxlYXZlUmVuZGVycyA9IChfbGVhdmVSZW5kZXJzID0ge30sIF9sZWF2ZVJlbmRlcnNbbW9kZXMub3V0XSA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBjdXJyZW50ID0gX3JlZi5jdXJyZW50LFxuICAgICAgY2hhbmdlU3RhdGUgPSBfcmVmLmNoYW5nZVN0YXRlO1xuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGN1cnJlbnQsIHtcbiAgICBpbjogZmFsc2UsXG4gICAgb25FeGl0ZWQ6IGNhbGxIb29rKGN1cnJlbnQsICdvbkV4aXRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoYW5nZVN0YXRlKEVOVEVSSU5HLCBudWxsKTtcbiAgICB9KVxuICB9KTtcbn0sIF9sZWF2ZVJlbmRlcnNbbW9kZXMuaW5dID0gZnVuY3Rpb24gKF9yZWYyKSB7XG4gIHZhciBjdXJyZW50ID0gX3JlZjIuY3VycmVudCxcbiAgICAgIGNoYW5nZVN0YXRlID0gX3JlZjIuY2hhbmdlU3RhdGUsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYyLmNoaWxkcmVuO1xuICByZXR1cm4gW2N1cnJlbnQsIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgIGluOiB0cnVlLFxuICAgIG9uRW50ZXJlZDogY2FsbEhvb2soY2hpbGRyZW4sICdvbkVudGVyZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGFuZ2VTdGF0ZShFTlRFUklORyk7XG4gICAgfSlcbiAgfSldO1xufSwgX2xlYXZlUmVuZGVycyk7XG52YXIgZW50ZXJSZW5kZXJzID0gKF9lbnRlclJlbmRlcnMgPSB7fSwgX2VudGVyUmVuZGVyc1ttb2Rlcy5vdXRdID0gZnVuY3Rpb24gKF9yZWYzKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYzLmNoaWxkcmVuLFxuICAgICAgY2hhbmdlU3RhdGUgPSBfcmVmMy5jaGFuZ2VTdGF0ZTtcbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgIGluOiB0cnVlLFxuICAgIG9uRW50ZXJlZDogY2FsbEhvb2soY2hpbGRyZW4sICdvbkVudGVyZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGFuZ2VTdGF0ZShFTlRFUkVELCBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICAgICAgaW46IHRydWVcbiAgICAgIH0pKTtcbiAgICB9KVxuICB9KTtcbn0sIF9lbnRlclJlbmRlcnNbbW9kZXMuaW5dID0gZnVuY3Rpb24gKF9yZWY0KSB7XG4gIHZhciBjdXJyZW50ID0gX3JlZjQuY3VycmVudCxcbiAgICAgIGNoaWxkcmVuID0gX3JlZjQuY2hpbGRyZW4sXG4gICAgICBjaGFuZ2VTdGF0ZSA9IF9yZWY0LmNoYW5nZVN0YXRlO1xuICByZXR1cm4gW1JlYWN0LmNsb25lRWxlbWVudChjdXJyZW50LCB7XG4gICAgaW46IGZhbHNlLFxuICAgIG9uRXhpdGVkOiBjYWxsSG9vayhjdXJyZW50LCAnb25FeGl0ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGFuZ2VTdGF0ZShFTlRFUkVELCBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICAgICAgaW46IHRydWVcbiAgICAgIH0pKTtcbiAgICB9KVxuICB9KSwgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgaW46IHRydWVcbiAgfSldO1xufSwgX2VudGVyUmVuZGVycyk7XG4vKipcbiAqIEEgdHJhbnNpdGlvbiBjb21wb25lbnQgaW5zcGlyZWQgYnkgdGhlIFt2dWUgdHJhbnNpdGlvbiBtb2Rlc10oaHR0cHM6Ly92dWVqcy5vcmcvdjIvZ3VpZGUvdHJhbnNpdGlvbnMuaHRtbCNUcmFuc2l0aW9uLU1vZGVzKS5cbiAqIFlvdSBjYW4gdXNlIGl0IHdoZW4geW91IHdhbnQgdG8gY29udHJvbCB0aGUgcmVuZGVyIGJldHdlZW4gc3RhdGUgdHJhbnNpdGlvbnMuXG4gKiBCYXNlZCBvbiB0aGUgc2VsZWN0ZWQgbW9kZSBhbmQgdGhlIGNoaWxkJ3Mga2V5IHdoaWNoIGlzIHRoZSBgVHJhbnNpdGlvbmAgb3IgYENTU1RyYW5zaXRpb25gIGNvbXBvbmVudCwgdGhlIGBTd2l0Y2hUcmFuc2l0aW9uYCBtYWtlcyBhIGNvbnNpc3RlbnQgdHJhbnNpdGlvbiBiZXR3ZWVuIHRoZW0uXG4gKlxuICogSWYgdGhlIGBvdXQtaW5gIG1vZGUgaXMgc2VsZWN0ZWQsIHRoZSBgU3dpdGNoVHJhbnNpdGlvbmAgd2FpdHMgdW50aWwgdGhlIG9sZCBjaGlsZCBsZWF2ZXMgYW5kIHRoZW4gaW5zZXJ0cyBhIG5ldyBjaGlsZC5cbiAqIElmIHRoZSBgaW4tb3V0YCBtb2RlIGlzIHNlbGVjdGVkLCB0aGUgYFN3aXRjaFRyYW5zaXRpb25gIGluc2VydHMgYSBuZXcgY2hpbGQgZmlyc3QsIHdhaXRzIGZvciB0aGUgbmV3IGNoaWxkIHRvIGVudGVyIGFuZCB0aGVuIHJlbW92ZXMgdGhlIG9sZCBjaGlsZFxuICpcbiAqIGBgYGpzeFxuICpcbiAqIGZ1bmN0aW9uIEFwcCgpIHtcbiAqICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAqICByZXR1cm4gKFxuICogICAgPFN3aXRjaFRyYW5zaXRpb24+XG4gKiAgICAgIDxGYWRlVHJhbnNpdGlvbiBrZXk9e3N0YXRlID8gXCJHb29kYnllLCB3b3JsZCFcIiA6IFwiSGVsbG8sIHdvcmxkIVwifVxuICogICAgICAgIGFkZEVuZExpc3RlbmVyPXsobm9kZSwgZG9uZSkgPT4gbm9kZS5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBkb25lLCBmYWxzZSl9XG4gKiAgICAgICAgY2xhc3NOYW1lcz0nZmFkZScgPlxuICogICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U3RhdGUoc3RhdGUgPT4gIXN0YXRlKX0+XG4gKiAgICAgICAgICB7c3RhdGUgPyBcIkdvb2RieWUsIHdvcmxkIVwiIDogXCJIZWxsbywgd29ybGQhXCJ9XG4gKiAgICAgICAgPC9idXR0b24+XG4gKiAgICAgIDwvRmFkZVRyYW5zaXRpb24+XG4gKiAgICA8L1N3aXRjaFRyYW5zaXRpb24+XG4gKiAgKVxuICogfVxuICogYGBgXG4gKi9cblxudmFyIFN3aXRjaFRyYW5zaXRpb24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoU3dpdGNoVHJhbnNpdGlvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU3dpdGNoVHJhbnNpdGlvbigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0YXR1czogRU5URVJFRCxcbiAgICAgIGN1cnJlbnQ6IG51bGxcbiAgICB9O1xuICAgIF90aGlzLmFwcGVhcmVkID0gZmFsc2U7XG5cbiAgICBfdGhpcy5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0dXMsIGN1cnJlbnQpIHtcbiAgICAgIGlmIChjdXJyZW50ID09PSB2b2lkIDApIHtcbiAgICAgICAgY3VycmVudCA9IF90aGlzLnN0YXRlLmN1cnJlbnQ7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgIGN1cnJlbnQ6IGN1cnJlbnRcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3dpdGNoVHJhbnNpdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5hcHBlYXJlZCA9IHRydWU7XG4gIH07XG5cbiAgU3dpdGNoVHJhbnNpdGlvbi5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgaWYgKHByb3BzLmNoaWxkcmVuID09IG51bGwpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnQ6IG51bGxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnN0YXR1cyA9PT0gRU5URVJJTkcgJiYgcHJvcHMubW9kZSA9PT0gbW9kZXMuaW4pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogRU5URVJJTkdcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmN1cnJlbnQgJiYgYXJlQ2hpbGRyZW5EaWZmZXJlbnQoc3RhdGUuY3VycmVudCwgcHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6IEVYSVRJTkdcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnQ6IFJlYWN0LmNsb25lRWxlbWVudChwcm9wcy5jaGlsZHJlbiwge1xuICAgICAgICBpbjogdHJ1ZVxuICAgICAgfSlcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgbW9kZSA9IF90aGlzJHByb3BzLm1vZGUsXG4gICAgICAgIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgc3RhdHVzID0gX3RoaXMkc3RhdGUuc3RhdHVzLFxuICAgICAgICBjdXJyZW50ID0gX3RoaXMkc3RhdGUuY3VycmVudDtcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICAgIGN1cnJlbnQ6IGN1cnJlbnQsXG4gICAgICBjaGFuZ2VTdGF0ZTogdGhpcy5jaGFuZ2VTdGF0ZSxcbiAgICAgIHN0YXR1czogc3RhdHVzXG4gICAgfTtcbiAgICB2YXIgY29tcG9uZW50O1xuXG4gICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgIGNhc2UgRU5URVJJTkc6XG4gICAgICAgIGNvbXBvbmVudCA9IGVudGVyUmVuZGVyc1ttb2RlXShkYXRhKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRVhJVElORzpcbiAgICAgICAgY29tcG9uZW50ID0gbGVhdmVSZW5kZXJzW21vZGVdKGRhdGEpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBFTlRFUkVEOlxuICAgICAgICBjb21wb25lbnQgPSBjdXJyZW50O1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Hcm91cENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGlzTW91bnRpbmc6ICF0aGlzLmFwcGVhcmVkXG4gICAgICB9XG4gICAgfSwgY29tcG9uZW50KTtcbiAgfTtcblxuICByZXR1cm4gU3dpdGNoVHJhbnNpdGlvbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuU3dpdGNoVHJhbnNpdGlvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBUcmFuc2l0aW9uIG1vZGVzLlxuICAgKiBgb3V0LWluYDogQ3VycmVudCBlbGVtZW50IHRyYW5zaXRpb25zIG91dCBmaXJzdCwgdGhlbiB3aGVuIGNvbXBsZXRlLCB0aGUgbmV3IGVsZW1lbnQgdHJhbnNpdGlvbnMgaW4uXG4gICAqIGBpbi1vdXQ6IE5ldyBlbGVtZW50IHRyYW5zaXRpb25zIGluIGZpcnN0LCB0aGVuIHdoZW4gY29tcGxldGUsIHRoZSBjdXJyZW50IGVsZW1lbnQgdHJhbnNpdGlvbnMgb3V0LmBcbiAgICpcbiAgICogQHR5cGUgeydvdXQtaW4nfCdpbi1vdXQnfVxuICAgKi9cbiAgbW9kZTogUHJvcFR5cGVzLm9uZU9mKFttb2Rlcy5pbiwgbW9kZXMub3V0XSksXG5cbiAgLyoqXG4gICAqIEFueSBgVHJhbnNpdGlvbmAgb3IgYENTU1RyYW5zaXRpb25gIGNvbXBvbmVudFxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWRdKVxufSA6IHt9O1xuU3dpdGNoVHJhbnNpdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIG1vZGU6IG1vZGVzLm91dFxufTtcbmV4cG9ydCBkZWZhdWx0IFN3aXRjaFRyYW5zaXRpb247IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCAqIGFzIFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgdGltZW91dHNTaGFwZSB9IGZyb20gJy4vdXRpbHMvUHJvcFR5cGVzJztcbmltcG9ydCBUcmFuc2l0aW9uR3JvdXBDb250ZXh0IGZyb20gJy4vVHJhbnNpdGlvbkdyb3VwQ29udGV4dCc7XG5leHBvcnQgdmFyIFVOTU9VTlRFRCA9ICd1bm1vdW50ZWQnO1xuZXhwb3J0IHZhciBFWElURUQgPSAnZXhpdGVkJztcbmV4cG9ydCB2YXIgRU5URVJJTkcgPSAnZW50ZXJpbmcnO1xuZXhwb3J0IHZhciBFTlRFUkVEID0gJ2VudGVyZWQnO1xuZXhwb3J0IHZhciBFWElUSU5HID0gJ2V4aXRpbmcnO1xuLyoqXG4gKiBUaGUgVHJhbnNpdGlvbiBjb21wb25lbnQgbGV0cyB5b3UgZGVzY3JpYmUgYSB0cmFuc2l0aW9uIGZyb20gb25lIGNvbXBvbmVudFxuICogc3RhdGUgdG8gYW5vdGhlciBfb3ZlciB0aW1lXyB3aXRoIGEgc2ltcGxlIGRlY2xhcmF0aXZlIEFQSS4gTW9zdCBjb21tb25seVxuICogaXQncyB1c2VkIHRvIGFuaW1hdGUgdGhlIG1vdW50aW5nIGFuZCB1bm1vdW50aW5nIG9mIGEgY29tcG9uZW50LCBidXQgY2FuIGFsc29cbiAqIGJlIHVzZWQgdG8gZGVzY3JpYmUgaW4tcGxhY2UgdHJhbnNpdGlvbiBzdGF0ZXMgYXMgd2VsbC5cbiAqXG4gKiAtLS1cbiAqXG4gKiAqKk5vdGUqKjogYFRyYW5zaXRpb25gIGlzIGEgcGxhdGZvcm0tYWdub3N0aWMgYmFzZSBjb21wb25lbnQuIElmIHlvdSdyZSB1c2luZ1xuICogdHJhbnNpdGlvbnMgaW4gQ1NTLCB5b3UnbGwgcHJvYmFibHkgd2FudCB0byB1c2VcbiAqIFtgQ1NTVHJhbnNpdGlvbmBdKGh0dHBzOi8vcmVhY3Rjb21tdW5pdHkub3JnL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvY3NzLXRyYW5zaXRpb24pXG4gKiBpbnN0ZWFkLiBJdCBpbmhlcml0cyBhbGwgdGhlIGZlYXR1cmVzIG9mIGBUcmFuc2l0aW9uYCwgYnV0IGNvbnRhaW5zXG4gKiBhZGRpdGlvbmFsIGZlYXR1cmVzIG5lY2Vzc2FyeSB0byBwbGF5IG5pY2Ugd2l0aCBDU1MgdHJhbnNpdGlvbnMgKGhlbmNlIHRoZVxuICogbmFtZSBvZiB0aGUgY29tcG9uZW50KS5cbiAqXG4gKiAtLS1cbiAqXG4gKiBCeSBkZWZhdWx0IHRoZSBgVHJhbnNpdGlvbmAgY29tcG9uZW50IGRvZXMgbm90IGFsdGVyIHRoZSBiZWhhdmlvciBvZiB0aGVcbiAqIGNvbXBvbmVudCBpdCByZW5kZXJzLCBpdCBvbmx5IHRyYWNrcyBcImVudGVyXCIgYW5kIFwiZXhpdFwiIHN0YXRlcyBmb3IgdGhlXG4gKiBjb21wb25lbnRzLiBJdCdzIHVwIHRvIHlvdSB0byBnaXZlIG1lYW5pbmcgYW5kIGVmZmVjdCB0byB0aG9zZSBzdGF0ZXMuIEZvclxuICogZXhhbXBsZSB3ZSBjYW4gYWRkIHN0eWxlcyB0byBhIGNvbXBvbmVudCB3aGVuIGl0IGVudGVycyBvciBleGl0czpcbiAqXG4gKiBgYGBqc3hcbiAqIGltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbiAqXG4gKiBjb25zdCBkdXJhdGlvbiA9IDMwMDtcbiAqXG4gKiBjb25zdCBkZWZhdWx0U3R5bGUgPSB7XG4gKiAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7ZHVyYXRpb259bXMgZWFzZS1pbi1vdXRgLFxuICogICBvcGFjaXR5OiAwLFxuICogfVxuICpcbiAqIGNvbnN0IHRyYW5zaXRpb25TdHlsZXMgPSB7XG4gKiAgIGVudGVyaW5nOiB7IG9wYWNpdHk6IDEgfSxcbiAqICAgZW50ZXJlZDogIHsgb3BhY2l0eTogMSB9LFxuICogICBleGl0aW5nOiAgeyBvcGFjaXR5OiAwIH0sXG4gKiAgIGV4aXRlZDogIHsgb3BhY2l0eTogMCB9LFxuICogfTtcbiAqXG4gKiBjb25zdCBGYWRlID0gKHsgaW46IGluUHJvcCB9KSA9PiAoXG4gKiAgIDxUcmFuc2l0aW9uIGluPXtpblByb3B9IHRpbWVvdXQ9e2R1cmF0aW9ufT5cbiAqICAgICB7c3RhdGUgPT4gKFxuICogICAgICAgPGRpdiBzdHlsZT17e1xuICogICAgICAgICAuLi5kZWZhdWx0U3R5bGUsXG4gKiAgICAgICAgIC4uLnRyYW5zaXRpb25TdHlsZXNbc3RhdGVdXG4gKiAgICAgICB9fT5cbiAqICAgICAgICAgSSdtIGEgZmFkZSBUcmFuc2l0aW9uIVxuICogICAgICAgPC9kaXY+XG4gKiAgICAgKX1cbiAqICAgPC9UcmFuc2l0aW9uPlxuICogKTtcbiAqIGBgYFxuICpcbiAqIFRoZXJlIGFyZSA0IG1haW4gc3RhdGVzIGEgVHJhbnNpdGlvbiBjYW4gYmUgaW46XG4gKiAgLSBgJ2VudGVyaW5nJ2BcbiAqICAtIGAnZW50ZXJlZCdgXG4gKiAgLSBgJ2V4aXRpbmcnYFxuICogIC0gYCdleGl0ZWQnYFxuICpcbiAqIFRyYW5zaXRpb24gc3RhdGUgaXMgdG9nZ2xlZCB2aWEgdGhlIGBpbmAgcHJvcC4gV2hlbiBgdHJ1ZWAgdGhlIGNvbXBvbmVudFxuICogYmVnaW5zIHRoZSBcIkVudGVyXCIgc3RhZ2UuIER1cmluZyB0aGlzIHN0YWdlLCB0aGUgY29tcG9uZW50IHdpbGwgc2hpZnQgZnJvbVxuICogaXRzIGN1cnJlbnQgdHJhbnNpdGlvbiBzdGF0ZSwgdG8gYCdlbnRlcmluZydgIGZvciB0aGUgZHVyYXRpb24gb2YgdGhlXG4gKiB0cmFuc2l0aW9uIGFuZCB0aGVuIHRvIHRoZSBgJ2VudGVyZWQnYCBzdGFnZSBvbmNlIGl0J3MgY29tcGxldGUuIExldCdzIHRha2VcbiAqIHRoZSBmb2xsb3dpbmcgZXhhbXBsZSAod2UnbGwgdXNlIHRoZVxuICogW3VzZVN0YXRlXShodHRwczovL3JlYWN0anMub3JnL2RvY3MvaG9va3MtcmVmZXJlbmNlLmh0bWwjdXNlc3RhdGUpIGhvb2spOlxuICpcbiAqIGBgYGpzeFxuICogZnVuY3Rpb24gQXBwKCkge1xuICogICBjb25zdCBbaW5Qcm9wLCBzZXRJblByb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xuICogICByZXR1cm4gKFxuICogICAgIDxkaXY+XG4gKiAgICAgICA8VHJhbnNpdGlvbiBpbj17aW5Qcm9wfSB0aW1lb3V0PXs1MDB9PlxuICogICAgICAgICB7c3RhdGUgPT4gKFxuICogICAgICAgICAgIC8vIC4uLlxuICogICAgICAgICApfVxuICogICAgICAgPC9UcmFuc2l0aW9uPlxuICogICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJblByb3AodHJ1ZSl9PlxuICogICAgICAgICBDbGljayB0byBFbnRlclxuICogICAgICAgPC9idXR0b24+XG4gKiAgICAgPC9kaXY+XG4gKiAgICk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBXaGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZCB0aGUgY29tcG9uZW50IHdpbGwgc2hpZnQgdG8gdGhlIGAnZW50ZXJpbmcnYCBzdGF0ZVxuICogYW5kIHN0YXkgdGhlcmUgZm9yIDUwMG1zICh0aGUgdmFsdWUgb2YgYHRpbWVvdXRgKSBiZWZvcmUgaXQgZmluYWxseSBzd2l0Y2hlc1xuICogdG8gYCdlbnRlcmVkJ2AuXG4gKlxuICogV2hlbiBgaW5gIGlzIGBmYWxzZWAgdGhlIHNhbWUgdGhpbmcgaGFwcGVucyBleGNlcHQgdGhlIHN0YXRlIG1vdmVzIGZyb21cbiAqIGAnZXhpdGluZydgIHRvIGAnZXhpdGVkJ2AuXG4gKi9cblxudmFyIFRyYW5zaXRpb24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVHJhbnNpdGlvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVHJhbnNpdGlvbihwcm9wcywgY29udGV4dCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSB8fCB0aGlzO1xuICAgIHZhciBwYXJlbnRHcm91cCA9IGNvbnRleHQ7IC8vIEluIHRoZSBjb250ZXh0IG9mIGEgVHJhbnNpdGlvbkdyb3VwIGFsbCBlbnRlcnMgYXJlIHJlYWxseSBhcHBlYXJzXG5cbiAgICB2YXIgYXBwZWFyID0gcGFyZW50R3JvdXAgJiYgIXBhcmVudEdyb3VwLmlzTW91bnRpbmcgPyBwcm9wcy5lbnRlciA6IHByb3BzLmFwcGVhcjtcbiAgICB2YXIgaW5pdGlhbFN0YXR1cztcbiAgICBfdGhpcy5hcHBlYXJTdGF0dXMgPSBudWxsO1xuXG4gICAgaWYgKHByb3BzLmluKSB7XG4gICAgICBpZiAoYXBwZWFyKSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBFWElURUQ7XG4gICAgICAgIF90aGlzLmFwcGVhclN0YXR1cyA9IEVOVEVSSU5HO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IEVOVEVSRUQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcm9wcy51bm1vdW50T25FeGl0IHx8IHByb3BzLm1vdW50T25FbnRlcikge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gVU5NT1VOVEVEO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IEVYSVRFRDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0YXR1czogaW5pdGlhbFN0YXR1c1xuICAgIH07XG4gICAgX3RoaXMubmV4dENhbGxiYWNrID0gbnVsbDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBUcmFuc2l0aW9uLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhfcmVmLCBwcmV2U3RhdGUpIHtcbiAgICB2YXIgbmV4dEluID0gX3JlZi5pbjtcblxuICAgIGlmIChuZXh0SW4gJiYgcHJldlN0YXRlLnN0YXR1cyA9PT0gVU5NT1VOVEVEKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6IEVYSVRFRFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTsgLy8gZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUocHJldlByb3BzKSB7XG4gIC8vICAgbGV0IG5leHRTdGF0dXMgPSBudWxsXG4gIC8vICAgaWYgKHByZXZQcm9wcyAhPT0gdGhpcy5wcm9wcykge1xuICAvLyAgICAgY29uc3QgeyBzdGF0dXMgfSA9IHRoaXMuc3RhdGVcbiAgLy8gICAgIGlmICh0aGlzLnByb3BzLmluKSB7XG4gIC8vICAgICAgIGlmIChzdGF0dXMgIT09IEVOVEVSSU5HICYmIHN0YXR1cyAhPT0gRU5URVJFRCkge1xuICAvLyAgICAgICAgIG5leHRTdGF0dXMgPSBFTlRFUklOR1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICBpZiAoc3RhdHVzID09PSBFTlRFUklORyB8fCBzdGF0dXMgPT09IEVOVEVSRUQpIHtcbiAgLy8gICAgICAgICBuZXh0U3RhdHVzID0gRVhJVElOR1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiB7IG5leHRTdGF0dXMgfVxuICAvLyB9XG5cblxuICB2YXIgX3Byb3RvID0gVHJhbnNpdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0dXModHJ1ZSwgdGhpcy5hcHBlYXJTdGF0dXMpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgdmFyIG5leHRTdGF0dXMgPSBudWxsO1xuXG4gICAgaWYgKHByZXZQcm9wcyAhPT0gdGhpcy5wcm9wcykge1xuICAgICAgdmFyIHN0YXR1cyA9IHRoaXMuc3RhdGUuc3RhdHVzO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5pbikge1xuICAgICAgICBpZiAoc3RhdHVzICE9PSBFTlRFUklORyAmJiBzdGF0dXMgIT09IEVOVEVSRUQpIHtcbiAgICAgICAgICBuZXh0U3RhdHVzID0gRU5URVJJTkc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IEVOVEVSSU5HIHx8IHN0YXR1cyA9PT0gRU5URVJFRCkge1xuICAgICAgICAgIG5leHRTdGF0dXMgPSBFWElUSU5HO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVTdGF0dXMoZmFsc2UsIG5leHRTdGF0dXMpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2FuY2VsTmV4dENhbGxiYWNrKCk7XG4gIH07XG5cbiAgX3Byb3RvLmdldFRpbWVvdXRzID0gZnVuY3Rpb24gZ2V0VGltZW91dHMoKSB7XG4gICAgdmFyIHRpbWVvdXQgPSB0aGlzLnByb3BzLnRpbWVvdXQ7XG4gICAgdmFyIGV4aXQsIGVudGVyLCBhcHBlYXI7XG4gICAgZXhpdCA9IGVudGVyID0gYXBwZWFyID0gdGltZW91dDtcblxuICAgIGlmICh0aW1lb3V0ICE9IG51bGwgJiYgdHlwZW9mIHRpbWVvdXQgIT09ICdudW1iZXInKSB7XG4gICAgICBleGl0ID0gdGltZW91dC5leGl0O1xuICAgICAgZW50ZXIgPSB0aW1lb3V0LmVudGVyOyAvLyBUT0RPOiByZW1vdmUgZmFsbGJhY2sgZm9yIG5leHQgbWFqb3JcblxuICAgICAgYXBwZWFyID0gdGltZW91dC5hcHBlYXIgIT09IHVuZGVmaW5lZCA/IHRpbWVvdXQuYXBwZWFyIDogZW50ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGV4aXQ6IGV4aXQsXG4gICAgICBlbnRlcjogZW50ZXIsXG4gICAgICBhcHBlYXI6IGFwcGVhclxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZVN0YXR1cyA9IGZ1bmN0aW9uIHVwZGF0ZVN0YXR1cyhtb3VudGluZywgbmV4dFN0YXR1cykge1xuICAgIGlmIChtb3VudGluZyA9PT0gdm9pZCAwKSB7XG4gICAgICBtb3VudGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChuZXh0U3RhdHVzICE9PSBudWxsKSB7XG4gICAgICAvLyBuZXh0U3RhdHVzIHdpbGwgYWx3YXlzIGJlIEVOVEVSSU5HIG9yIEVYSVRJTkcuXG4gICAgICB0aGlzLmNhbmNlbE5leHRDYWxsYmFjaygpO1xuICAgICAgdmFyIG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgICAgaWYgKG5leHRTdGF0dXMgPT09IEVOVEVSSU5HKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUVudGVyKG5vZGUsIG1vdW50aW5nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUV4aXQobm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnVubW91bnRPbkV4aXQgJiYgdGhpcy5zdGF0ZS5zdGF0dXMgPT09IEVYSVRFRCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN0YXR1czogVU5NT1VOVEVEXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnBlcmZvcm1FbnRlciA9IGZ1bmN0aW9uIHBlcmZvcm1FbnRlcihub2RlLCBtb3VudGluZykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGVudGVyID0gdGhpcy5wcm9wcy5lbnRlcjtcbiAgICB2YXIgYXBwZWFyaW5nID0gdGhpcy5jb250ZXh0ID8gdGhpcy5jb250ZXh0LmlzTW91bnRpbmcgOiBtb3VudGluZztcbiAgICB2YXIgdGltZW91dHMgPSB0aGlzLmdldFRpbWVvdXRzKCk7XG4gICAgdmFyIGVudGVyVGltZW91dCA9IGFwcGVhcmluZyA/IHRpbWVvdXRzLmFwcGVhciA6IHRpbWVvdXRzLmVudGVyOyAvLyBubyBlbnRlciBhbmltYXRpb24gc2tpcCByaWdodCB0byBFTlRFUkVEXG4gICAgLy8gaWYgd2UgYXJlIG1vdW50aW5nIGFuZCBydW5uaW5nIHRoaXMgaXQgbWVhbnMgYXBwZWFyIF9tdXN0XyBiZSBzZXRcblxuICAgIGlmICghbW91bnRpbmcgJiYgIWVudGVyIHx8IGNvbmZpZy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5zYWZlU2V0U3RhdGUoe1xuICAgICAgICBzdGF0dXM6IEVOVEVSRURcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJlZChub2RlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25FbnRlcihub2RlLCBhcHBlYXJpbmcpO1xuICAgIHRoaXMuc2FmZVNldFN0YXRlKHtcbiAgICAgIHN0YXR1czogRU5URVJJTkdcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIucHJvcHMub25FbnRlcmluZyhub2RlLCBhcHBlYXJpbmcpO1xuXG4gICAgICBfdGhpczIub25UcmFuc2l0aW9uRW5kKG5vZGUsIGVudGVyVGltZW91dCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuc2FmZVNldFN0YXRlKHtcbiAgICAgICAgICBzdGF0dXM6IEVOVEVSRURcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5wcm9wcy5vbkVudGVyZWQobm9kZSwgYXBwZWFyaW5nKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucGVyZm9ybUV4aXQgPSBmdW5jdGlvbiBwZXJmb3JtRXhpdChub2RlKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgZXhpdCA9IHRoaXMucHJvcHMuZXhpdDtcbiAgICB2YXIgdGltZW91dHMgPSB0aGlzLmdldFRpbWVvdXRzKCk7IC8vIG5vIGV4aXQgYW5pbWF0aW9uIHNraXAgcmlnaHQgdG8gRVhJVEVEXG5cbiAgICBpZiAoIWV4aXQgfHwgY29uZmlnLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICAgIHN0YXR1czogRVhJVEVEXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25FeGl0KG5vZGUpO1xuICAgIHRoaXMuc2FmZVNldFN0YXRlKHtcbiAgICAgIHN0YXR1czogRVhJVElOR1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRpbmcobm9kZSk7XG5cbiAgICAgIF90aGlzMy5vblRyYW5zaXRpb25FbmQobm9kZSwgdGltZW91dHMuZXhpdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMuc2FmZVNldFN0YXRlKHtcbiAgICAgICAgICBzdGF0dXM6IEVYSVRFRFxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMzLnByb3BzLm9uRXhpdGVkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5jYW5jZWxOZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiBjYW5jZWxOZXh0Q2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMubmV4dENhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm5leHRDYWxsYmFjay5jYW5jZWwoKTtcbiAgICAgIHRoaXMubmV4dENhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNhZmVTZXRTdGF0ZSA9IGZ1bmN0aW9uIHNhZmVTZXRTdGF0ZShuZXh0U3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgLy8gVGhpcyBzaG91bGRuJ3QgYmUgbmVjZXNzYXJ5LCBidXQgdGhlcmUgYXJlIHdlaXJkIHJhY2UgY29uZGl0aW9ucyB3aXRoXG4gICAgLy8gc2V0U3RhdGUgY2FsbGJhY2tzIGFuZCB1bm1vdW50aW5nIGluIHRlc3RpbmcsIHNvIGFsd2F5cyBtYWtlIHN1cmUgdGhhdFxuICAgIC8vIHdlIGNhbiBjYW5jZWwgYW55IHBlbmRpbmcgc2V0U3RhdGUgY2FsbGJhY2tzIGFmdGVyIHdlIHVubW91bnQuXG4gICAgY2FsbGJhY2sgPSB0aGlzLnNldE5leHRDYWxsYmFjayhjYWxsYmFjayk7XG4gICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUsIGNhbGxiYWNrKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0TmV4dENhbGxiYWNrID0gZnVuY3Rpb24gc2V0TmV4dENhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgYWN0aXZlID0gdHJ1ZTtcblxuICAgIHRoaXMubmV4dENhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBfdGhpczQubmV4dENhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm5leHRDYWxsYmFjay5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMubmV4dENhbGxiYWNrO1xuICB9O1xuXG4gIF9wcm90by5vblRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQobm9kZSwgdGltZW91dCwgaGFuZGxlcikge1xuICAgIHRoaXMuc2V0TmV4dENhbGxiYWNrKGhhbmRsZXIpO1xuICAgIHZhciBkb2VzTm90SGF2ZVRpbWVvdXRPckxpc3RlbmVyID0gdGltZW91dCA9PSBudWxsICYmICF0aGlzLnByb3BzLmFkZEVuZExpc3RlbmVyO1xuXG4gICAgaWYgKCFub2RlIHx8IGRvZXNOb3RIYXZlVGltZW91dE9yTGlzdGVuZXIpIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0Q2FsbGJhY2ssIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmFkZEVuZExpc3RlbmVyKSB7XG4gICAgICB0aGlzLnByb3BzLmFkZEVuZExpc3RlbmVyKG5vZGUsIHRoaXMubmV4dENhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBpZiAodGltZW91dCAhPSBudWxsKSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMubmV4dENhbGxiYWNrLCB0aW1lb3V0KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgc3RhdHVzID0gdGhpcy5zdGF0ZS5zdGF0dXM7XG5cbiAgICBpZiAoc3RhdHVzID09PSBVTk1PVU5URUQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGNoaWxkUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiY2hpbGRyZW5cIl0pOyAvLyBmaWx0ZXIgcHJvcHMgZm9yIFRyYW5zdGl0aW9uXG5cblxuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmluO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm1vdW50T25FbnRlcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy51bm1vdW50T25FeGl0O1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmFwcGVhcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5lbnRlcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5leGl0O1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLnRpbWVvdXQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuYWRkRW5kTGlzdGVuZXI7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FbnRlcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkVudGVyaW5nO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRW50ZXJlZDtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkV4aXQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FeGl0aW5nO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRXhpdGVkO1xuXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gYWxsb3dzIGZvciBuZXN0ZWQgVHJhbnNpdGlvbnNcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Hcm91cENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgIH0sIGNoaWxkcmVuKHN0YXR1cywgY2hpbGRQcm9wcykpO1xuICAgIH1cblxuICAgIHZhciBjaGlsZCA9IFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIHJldHVybiAoLy8gYWxsb3dzIGZvciBuZXN0ZWQgVHJhbnNpdGlvbnNcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkdyb3VwQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgfSwgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKSlcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBUcmFuc2l0aW9uO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5UcmFuc2l0aW9uLmNvbnRleHRUeXBlID0gVHJhbnNpdGlvbkdyb3VwQ29udGV4dDtcblRyYW5zaXRpb24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogQSBgZnVuY3Rpb25gIGNoaWxkIGNhbiBiZSB1c2VkIGluc3RlYWQgb2YgYSBSZWFjdCBlbGVtZW50LiBUaGlzIGZ1bmN0aW9uIGlzXG4gICAqIGNhbGxlZCB3aXRoIHRoZSBjdXJyZW50IHRyYW5zaXRpb24gc3RhdHVzIChgJ2VudGVyaW5nJ2AsIGAnZW50ZXJlZCdgLFxuICAgKiBgJ2V4aXRpbmcnYCwgYCdleGl0ZWQnYCksIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGFwcGx5IGNvbnRleHRcbiAgICogc3BlY2lmaWMgcHJvcHMgdG8gYSBjb21wb25lbnQuXG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiA8VHJhbnNpdGlvbiBpbj17dGhpcy5zdGF0ZS5pbn0gdGltZW91dD17MTUwfT5cbiAgICogICB7c3RhdGUgPT4gKFxuICAgKiAgICAgPE15Q29tcG9uZW50IGNsYXNzTmFtZT17YGZhZGUgZmFkZS0ke3N0YXRlfWB9IC8+XG4gICAqICAgKX1cbiAgICogPC9UcmFuc2l0aW9uPlxuICAgKiBgYGBcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkXSkuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogU2hvdyB0aGUgY29tcG9uZW50OyB0cmlnZ2VycyB0aGUgZW50ZXIgb3IgZXhpdCBzdGF0ZXNcbiAgICovXG4gIGluOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQnkgZGVmYXVsdCB0aGUgY2hpbGQgY29tcG9uZW50IGlzIG1vdW50ZWQgaW1tZWRpYXRlbHkgYWxvbmcgd2l0aFxuICAgKiB0aGUgcGFyZW50IGBUcmFuc2l0aW9uYCBjb21wb25lbnQuIElmIHlvdSB3YW50IHRvIFwibGF6eSBtb3VudFwiIHRoZSBjb21wb25lbnQgb24gdGhlXG4gICAqIGZpcnN0IGBpbj17dHJ1ZX1gIHlvdSBjYW4gc2V0IGBtb3VudE9uRW50ZXJgLiBBZnRlciB0aGUgZmlyc3QgZW50ZXIgdHJhbnNpdGlvbiB0aGUgY29tcG9uZW50IHdpbGwgc3RheVxuICAgKiBtb3VudGVkLCBldmVuIG9uIFwiZXhpdGVkXCIsIHVubGVzcyB5b3UgYWxzbyBzcGVjaWZ5IGB1bm1vdW50T25FeGl0YC5cbiAgICovXG4gIG1vdW50T25FbnRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQgdGhlIGNoaWxkIGNvbXBvbmVudCBzdGF5cyBtb3VudGVkIGFmdGVyIGl0IHJlYWNoZXMgdGhlIGAnZXhpdGVkJ2Agc3RhdGUuXG4gICAqIFNldCBgdW5tb3VudE9uRXhpdGAgaWYgeW91J2QgcHJlZmVyIHRvIHVubW91bnQgdGhlIGNvbXBvbmVudCBhZnRlciBpdCBmaW5pc2hlcyBleGl0aW5nLlxuICAgKi9cbiAgdW5tb3VudE9uRXhpdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE5vcm1hbGx5IGEgY29tcG9uZW50IGlzIG5vdCB0cmFuc2l0aW9uZWQgaWYgaXQgaXMgc2hvd24gd2hlbiB0aGUgYDxUcmFuc2l0aW9uPmAgY29tcG9uZW50IG1vdW50cy5cbiAgICogSWYgeW91IHdhbnQgdG8gdHJhbnNpdGlvbiBvbiB0aGUgZmlyc3QgbW91bnQgc2V0IGBhcHBlYXJgIHRvIGB0cnVlYCwgYW5kIHRoZVxuICAgKiBjb21wb25lbnQgd2lsbCB0cmFuc2l0aW9uIGluIGFzIHNvb24gYXMgdGhlIGA8VHJhbnNpdGlvbj5gIG1vdW50cy5cbiAgICpcbiAgICogPiBOb3RlOiB0aGVyZSBhcmUgbm8gc3BlY2lmaWMgXCJhcHBlYXJcIiBzdGF0ZXMuIGBhcHBlYXJgIG9ubHkgYWRkcyBhbiBhZGRpdGlvbmFsIGBlbnRlcmAgdHJhbnNpdGlvbi5cbiAgICovXG4gIGFwcGVhcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIGVudGVyIHRyYW5zaXRpb25zLlxuICAgKi9cbiAgZW50ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBleGl0IHRyYW5zaXRpb25zLlxuICAgKi9cbiAgZXhpdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBkdXJhdGlvbiBvZiB0aGUgdHJhbnNpdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxuICAgKiBSZXF1aXJlZCB1bmxlc3MgYGFkZEVuZExpc3RlbmVyYCBpcyBwcm92aWRlZC5cbiAgICpcbiAgICogWW91IG1heSBzcGVjaWZ5IGEgc2luZ2xlIHRpbWVvdXQgZm9yIGFsbCB0cmFuc2l0aW9uczpcbiAgICpcbiAgICogYGBganN4XG4gICAqIHRpbWVvdXQ9ezUwMH1cbiAgICogYGBgXG4gICAqXG4gICAqIG9yIGluZGl2aWR1YWxseTpcbiAgICpcbiAgICogYGBganN4XG4gICAqIHRpbWVvdXQ9e3tcbiAgICogIGFwcGVhcjogNTAwLFxuICAgKiAgZW50ZXI6IDMwMCxcbiAgICogIGV4aXQ6IDUwMCxcbiAgICogfX1cbiAgICogYGBgXG4gICAqXG4gICAqIC0gYGFwcGVhcmAgZGVmYXVsdHMgdG8gdGhlIHZhbHVlIG9mIGBlbnRlcmBcbiAgICogLSBgZW50ZXJgIGRlZmF1bHRzIHRvIGAwYFxuICAgKiAtIGBleGl0YCBkZWZhdWx0cyB0byBgMGBcbiAgICpcbiAgICogQHR5cGUge251bWJlciB8IHsgZW50ZXI/OiBudW1iZXIsIGV4aXQ/OiBudW1iZXIsIGFwcGVhcj86IG51bWJlciB9fVxuICAgKi9cbiAgdGltZW91dDogZnVuY3Rpb24gdGltZW91dChwcm9wcykge1xuICAgIHZhciBwdCA9IHRpbWVvdXRzU2hhcGU7XG4gICAgaWYgKCFwcm9wcy5hZGRFbmRMaXN0ZW5lcikgcHQgPSBwdC5pc1JlcXVpcmVkO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHB0LmFwcGx5KHZvaWQgMCwgW3Byb3BzXS5jb25jYXQoYXJncykpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBZGQgYSBjdXN0b20gdHJhbnNpdGlvbiBlbmQgdHJpZ2dlci4gQ2FsbGVkIHdpdGggdGhlIHRyYW5zaXRpb25pbmdcbiAgICogRE9NIG5vZGUgYW5kIGEgYGRvbmVgIGNhbGxiYWNrLiBBbGxvd3MgZm9yIG1vcmUgZmluZSBncmFpbmVkIHRyYW5zaXRpb24gZW5kXG4gICAqIGxvZ2ljLiAqKk5vdGU6KiogVGltZW91dHMgYXJlIHN0aWxsIHVzZWQgYXMgYSBmYWxsYmFjayBpZiBwcm92aWRlZC5cbiAgICpcbiAgICogYGBganN4XG4gICAqIGFkZEVuZExpc3RlbmVyPXsobm9kZSwgZG9uZSkgPT4ge1xuICAgKiAgIC8vIHVzZSB0aGUgY3NzIHRyYW5zaXRpb25lbmQgZXZlbnQgdG8gbWFyayB0aGUgZmluaXNoIG9mIGEgdHJhbnNpdGlvblxuICAgKiAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGRvbmUsIGZhbHNlKTtcbiAgICogfX1cbiAgICogYGBgXG4gICAqL1xuICBhZGRFbmRMaXN0ZW5lcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgXCJlbnRlcmluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLiBBbiBleHRyYSBwYXJhbWV0ZXJcbiAgICogYGlzQXBwZWFyaW5nYCBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2UgaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50XG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbCkgLT4gdm9pZFxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImVudGVyaW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuIEFuIGV4dHJhIHBhcmFtZXRlclxuICAgKiBgaXNBcHBlYXJpbmdgIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZSBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnRcbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImVudGVyZWRcIiBzdGF0dXMgaXMgYXBwbGllZC4gQW4gZXh0cmEgcGFyYW1ldGVyXG4gICAqIGBpc0FwcGVhcmluZ2AgaXMgc3VwcGxpZWQgdG8gaW5kaWNhdGUgaWYgdGhlIGVudGVyIHN0YWdlIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudFxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpIC0+IHZvaWRcbiAgICovXG4gIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgXCJleGl0aW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJleGl0aW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkXG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJleGl0ZWRcIiBzdGF0dXMgaXMgYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpIC0+IHZvaWRcbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuYyAvLyBOYW1lIHRoZSBmdW5jdGlvbiBzbyBpdCBpcyBjbGVhcmVyIGluIHRoZSBkb2N1bWVudGF0aW9uXG5cbn0gOiB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cblRyYW5zaXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBpbjogZmFsc2UsXG4gIG1vdW50T25FbnRlcjogZmFsc2UsXG4gIHVubW91bnRPbkV4aXQ6IGZhbHNlLFxuICBhcHBlYXI6IGZhbHNlLFxuICBlbnRlcjogdHJ1ZSxcbiAgZXhpdDogdHJ1ZSxcbiAgb25FbnRlcjogbm9vcCxcbiAgb25FbnRlcmluZzogbm9vcCxcbiAgb25FbnRlcmVkOiBub29wLFxuICBvbkV4aXQ6IG5vb3AsXG4gIG9uRXhpdGluZzogbm9vcCxcbiAgb25FeGl0ZWQ6IG5vb3Bcbn07XG5UcmFuc2l0aW9uLlVOTU9VTlRFRCA9IDA7XG5UcmFuc2l0aW9uLkVYSVRFRCA9IDE7XG5UcmFuc2l0aW9uLkVOVEVSSU5HID0gMjtcblRyYW5zaXRpb24uRU5URVJFRCA9IDM7XG5UcmFuc2l0aW9uLkVYSVRJTkcgPSA0O1xuZXhwb3J0IGRlZmF1bHQgVHJhbnNpdGlvbjsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcmFuc2l0aW9uR3JvdXBDb250ZXh0IGZyb20gJy4vVHJhbnNpdGlvbkdyb3VwQ29udGV4dCc7XG5pbXBvcnQgeyBnZXRDaGlsZE1hcHBpbmcsIGdldEluaXRpYWxDaGlsZE1hcHBpbmcsIGdldE5leHRDaGlsZE1hcHBpbmcgfSBmcm9tICcuL3V0aWxzL0NoaWxkTWFwcGluZyc7XG5cbnZhciB2YWx1ZXMgPSBPYmplY3QudmFsdWVzIHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgcmV0dXJuIG9ialtrXTtcbiAgfSk7XG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnQ6ICdkaXYnLFxuICBjaGlsZEZhY3Rvcnk6IGZ1bmN0aW9uIGNoaWxkRmFjdG9yeShjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfVxuICAvKipcbiAgICogVGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAgY29tcG9uZW50IG1hbmFnZXMgYSBzZXQgb2YgdHJhbnNpdGlvbiBjb21wb25lbnRzXG4gICAqIChgPFRyYW5zaXRpb24+YCBhbmQgYDxDU1NUcmFuc2l0aW9uPmApIGluIGEgbGlzdC4gTGlrZSB3aXRoIHRoZSB0cmFuc2l0aW9uXG4gICAqIGNvbXBvbmVudHMsIGA8VHJhbnNpdGlvbkdyb3VwPmAgaXMgYSBzdGF0ZSBtYWNoaW5lIGZvciBtYW5hZ2luZyB0aGUgbW91bnRpbmdcbiAgICogYW5kIHVubW91bnRpbmcgb2YgY29tcG9uZW50cyBvdmVyIHRpbWUuXG4gICAqXG4gICAqIENvbnNpZGVyIHRoZSBleGFtcGxlIGJlbG93LiBBcyBpdGVtcyBhcmUgcmVtb3ZlZCBvciBhZGRlZCB0byB0aGUgVG9kb0xpc3QgdGhlXG4gICAqIGBpbmAgcHJvcCBpcyB0b2dnbGVkIGF1dG9tYXRpY2FsbHkgYnkgdGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAuXG4gICAqXG4gICAqIE5vdGUgdGhhdCBgPFRyYW5zaXRpb25Hcm91cD5gICBkb2VzIG5vdCBkZWZpbmUgYW55IGFuaW1hdGlvbiBiZWhhdmlvciFcbiAgICogRXhhY3RseSBfaG93XyBhIGxpc3QgaXRlbSBhbmltYXRlcyBpcyB1cCB0byB0aGUgaW5kaXZpZHVhbCB0cmFuc2l0aW9uXG4gICAqIGNvbXBvbmVudC4gVGhpcyBtZWFucyB5b3UgY2FuIG1peCBhbmQgbWF0Y2ggYW5pbWF0aW9ucyBhY3Jvc3MgZGlmZmVyZW50IGxpc3RcbiAgICogaXRlbXMuXG4gICAqL1xuXG59O1xuXG52YXIgVHJhbnNpdGlvbkdyb3VwID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFRyYW5zaXRpb25Hcm91cCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVHJhbnNpdGlvbkdyb3VwKHByb3BzLCBjb250ZXh0KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpIHx8IHRoaXM7XG5cbiAgICB2YXIgaGFuZGxlRXhpdGVkID0gX3RoaXMuaGFuZGxlRXhpdGVkLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpOyAvLyBJbml0aWFsIGNoaWxkcmVuIHNob3VsZCBhbGwgYmUgZW50ZXJpbmcsIGRlcGVuZGVudCBvbiBhcHBlYXJcblxuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBjb250ZXh0VmFsdWU6IHtcbiAgICAgICAgaXNNb3VudGluZzogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGhhbmRsZUV4aXRlZDogaGFuZGxlRXhpdGVkLFxuICAgICAgZmlyc3RSZW5kZXI6IHRydWVcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb250ZXh0VmFsdWU6IHtcbiAgICAgICAgaXNNb3VudGluZzogZmFsc2VcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcbiAgfTtcblxuICBUcmFuc2l0aW9uR3JvdXAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgX3JlZikge1xuICAgIHZhciBwcmV2Q2hpbGRNYXBwaW5nID0gX3JlZi5jaGlsZHJlbixcbiAgICAgICAgaGFuZGxlRXhpdGVkID0gX3JlZi5oYW5kbGVFeGl0ZWQsXG4gICAgICAgIGZpcnN0UmVuZGVyID0gX3JlZi5maXJzdFJlbmRlcjtcbiAgICByZXR1cm4ge1xuICAgICAgY2hpbGRyZW46IGZpcnN0UmVuZGVyID8gZ2V0SW5pdGlhbENoaWxkTWFwcGluZyhuZXh0UHJvcHMsIGhhbmRsZUV4aXRlZCkgOiBnZXROZXh0Q2hpbGRNYXBwaW5nKG5leHRQcm9wcywgcHJldkNoaWxkTWFwcGluZywgaGFuZGxlRXhpdGVkKSxcbiAgICAgIGZpcnN0UmVuZGVyOiBmYWxzZVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZUV4aXRlZCA9IGZ1bmN0aW9uIGhhbmRsZUV4aXRlZChjaGlsZCwgbm9kZSkge1xuICAgIHZhciBjdXJyZW50Q2hpbGRNYXBwaW5nID0gZ2V0Q2hpbGRNYXBwaW5nKHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIGlmIChjaGlsZC5rZXkgaW4gY3VycmVudENoaWxkTWFwcGluZykgcmV0dXJuO1xuXG4gICAgaWYgKGNoaWxkLnByb3BzLm9uRXhpdGVkKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb3VudGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBfZXh0ZW5kcyh7fSwgc3RhdGUuY2hpbGRyZW4pO1xuXG4gICAgICAgIGRlbGV0ZSBjaGlsZHJlbltjaGlsZC5rZXldO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgQ29tcG9uZW50ID0gX3RoaXMkcHJvcHMuY29tcG9uZW50LFxuICAgICAgICBjaGlsZEZhY3RvcnkgPSBfdGhpcyRwcm9wcy5jaGlsZEZhY3RvcnksXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImNvbXBvbmVudFwiLCBcImNoaWxkRmFjdG9yeVwiXSk7XG5cbiAgICB2YXIgY29udGV4dFZhbHVlID0gdGhpcy5zdGF0ZS5jb250ZXh0VmFsdWU7XG4gICAgdmFyIGNoaWxkcmVuID0gdmFsdWVzKHRoaXMuc3RhdGUuY2hpbGRyZW4pLm1hcChjaGlsZEZhY3RvcnkpO1xuICAgIGRlbGV0ZSBwcm9wcy5hcHBlYXI7XG4gICAgZGVsZXRlIHByb3BzLmVudGVyO1xuICAgIGRlbGV0ZSBwcm9wcy5leGl0O1xuXG4gICAgaWYgKENvbXBvbmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkdyb3VwQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZTogY29udGV4dFZhbHVlXG4gICAgICB9LCBjaGlsZHJlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkdyb3VwQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IGNvbnRleHRWYWx1ZVxuICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBwcm9wcywgY2hpbGRyZW4pKTtcbiAgfTtcblxuICByZXR1cm4gVHJhbnNpdGlvbkdyb3VwO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5UcmFuc2l0aW9uR3JvdXAucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogYDxUcmFuc2l0aW9uR3JvdXA+YCByZW5kZXJzIGEgYDxkaXY+YCBieSBkZWZhdWx0LiBZb3UgY2FuIGNoYW5nZSB0aGlzXG4gICAqIGJlaGF2aW9yIGJ5IHByb3ZpZGluZyBhIGBjb21wb25lbnRgIHByb3AuXG4gICAqIElmIHlvdSB1c2UgUmVhY3QgdjE2KyBhbmQgd291bGQgbGlrZSB0byBhdm9pZCBhIHdyYXBwaW5nIGA8ZGl2PmAgZWxlbWVudFxuICAgKiB5b3UgY2FuIHBhc3MgaW4gYGNvbXBvbmVudD17bnVsbH1gLiBUaGlzIGlzIHVzZWZ1bCBpZiB0aGUgd3JhcHBpbmcgZGl2XG4gICAqIGJvcmtzIHlvdXIgY3NzIHN0eWxlcy5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogQSBzZXQgb2YgYDxUcmFuc2l0aW9uPmAgY29tcG9uZW50cywgdGhhdCBhcmUgdG9nZ2xlZCBgaW5gIGFuZCBvdXQgYXMgdGhleVxuICAgKiBsZWF2ZS4gdGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAgd2lsbCBpbmplY3Qgc3BlY2lmaWMgdHJhbnNpdGlvbiBwcm9wcywgc29cbiAgICogcmVtZW1iZXIgdG8gc3ByZWFkIHRoZW0gdGhyb3VnaCBpZiB5b3UgYXJlIHdyYXBwaW5nIHRoZSBgPFRyYW5zaXRpb24+YCBhc1xuICAgKiB3aXRoIG91ciBgPEZhZGU+YCBleGFtcGxlLlxuICAgKlxuICAgKiBXaGlsZSB0aGlzIGNvbXBvbmVudCBpcyBtZWFudCBmb3IgbXVsdGlwbGUgYFRyYW5zaXRpb25gIG9yIGBDU1NUcmFuc2l0aW9uYFxuICAgKiBjaGlsZHJlbiwgc29tZXRpbWVzIHlvdSBtYXkgd2FudCB0byBoYXZlIGEgc2luZ2xlIHRyYW5zaXRpb24gY2hpbGQgd2l0aFxuICAgKiBjb250ZW50IHRoYXQgeW91IHdhbnQgdG8gYmUgdHJhbnNpdGlvbmVkIG91dCBhbmQgaW4gd2hlbiB5b3UgY2hhbmdlIGl0XG4gICAqIChlLmcuIHJvdXRlcywgaW1hZ2VzIGV0Yy4pIEluIHRoYXQgY2FzZSB5b3UgY2FuIGNoYW5nZSB0aGUgYGtleWAgcHJvcCBvZlxuICAgKiB0aGUgdHJhbnNpdGlvbiBjaGlsZCBhcyB5b3UgY2hhbmdlIGl0cyBjb250ZW50LCB0aGlzIHdpbGwgY2F1c2VcbiAgICogYFRyYW5zaXRpb25Hcm91cGAgdG8gdHJhbnNpdGlvbiB0aGUgY2hpbGQgb3V0IGFuZCBiYWNrIGluLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIHByb3AgdGhhdCBlbmFibGVzIG9yIGRpc2FibGVzIGFwcGVhciBhbmltYXRpb25zXG4gICAqIGZvciBhbGwgY2hpbGRyZW4uIE5vdGUgdGhhdCBzcGVjaWZ5aW5nIHRoaXMgd2lsbCBvdmVycmlkZSBhbnkgZGVmYXVsdHMgc2V0XG4gICAqIG9uIGluZGl2aWR1YWwgY2hpbGRyZW4gVHJhbnNpdGlvbnMuXG4gICAqL1xuICBhcHBlYXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIHByb3AgdGhhdCBlbmFibGVzIG9yIGRpc2FibGVzIGVudGVyIGFuaW1hdGlvbnNcbiAgICogZm9yIGFsbCBjaGlsZHJlbi4gTm90ZSB0aGF0IHNwZWNpZnlpbmcgdGhpcyB3aWxsIG92ZXJyaWRlIGFueSBkZWZhdWx0cyBzZXRcbiAgICogb24gaW5kaXZpZHVhbCBjaGlsZHJlbiBUcmFuc2l0aW9ucy5cbiAgICovXG4gIGVudGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBwcm9wIHRoYXQgZW5hYmxlcyBvciBkaXNhYmxlcyBleGl0IGFuaW1hdGlvbnNcbiAgICogZm9yIGFsbCBjaGlsZHJlbi4gTm90ZSB0aGF0IHNwZWNpZnlpbmcgdGhpcyB3aWxsIG92ZXJyaWRlIGFueSBkZWZhdWx0cyBzZXRcbiAgICogb24gaW5kaXZpZHVhbCBjaGlsZHJlbiBUcmFuc2l0aW9ucy5cbiAgICovXG4gIGV4aXQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBZb3UgbWF5IG5lZWQgdG8gYXBwbHkgcmVhY3RpdmUgdXBkYXRlcyB0byBhIGNoaWxkIGFzIGl0IGlzIGV4aXRpbmcuXG4gICAqIFRoaXMgaXMgZ2VuZXJhbGx5IGRvbmUgYnkgdXNpbmcgYGNsb25lRWxlbWVudGAgaG93ZXZlciBpbiB0aGUgY2FzZSBvZiBhbiBleGl0aW5nXG4gICAqIGNoaWxkIHRoZSBlbGVtZW50IGhhcyBhbHJlYWR5IGJlZW4gcmVtb3ZlZCBhbmQgbm90IGFjY2Vzc2libGUgdG8gdGhlIGNvbnN1bWVyLlxuICAgKlxuICAgKiBJZiB5b3UgZG8gbmVlZCB0byB1cGRhdGUgYSBjaGlsZCBhcyBpdCBsZWF2ZXMgeW91IGNhbiBwcm92aWRlIGEgYGNoaWxkRmFjdG9yeWBcbiAgICogdG8gd3JhcCBldmVyeSBjaGlsZCwgZXZlbiB0aGUgb25lcyB0aGF0IGFyZSBsZWF2aW5nLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihjaGlsZDogUmVhY3RFbGVtZW50KSAtPiBSZWFjdEVsZW1lbnRcbiAgICovXG4gIGNoaWxkRmFjdG9yeTogUHJvcFR5cGVzLmZ1bmNcbn0gOiB7fTtcblRyYW5zaXRpb25Hcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5leHBvcnQgZGVmYXVsdCBUcmFuc2l0aW9uR3JvdXA7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7IiwiZXhwb3J0IGRlZmF1bHQge1xuICBkaXNhYmxlZDogZmFsc2Vcbn07IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBDU1NUcmFuc2l0aW9uIH0gZnJvbSAnLi9DU1NUcmFuc2l0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVwbGFjZVRyYW5zaXRpb24gfSBmcm9tICcuL1JlcGxhY2VUcmFuc2l0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3dpdGNoVHJhbnNpdGlvbiB9IGZyb20gJy4vU3dpdGNoVHJhbnNpdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRyYW5zaXRpb25Hcm91cCB9IGZyb20gJy4vVHJhbnNpdGlvbkdyb3VwJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHJhbnNpdGlvbiB9IGZyb20gJy4vVHJhbnNpdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJzsiLCJpbXBvcnQgeyBDaGlsZHJlbiwgY2xvbmVFbGVtZW50LCBpc1ZhbGlkRWxlbWVudCB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogR2l2ZW4gYHRoaXMucHJvcHMuY2hpbGRyZW5gLCByZXR1cm4gYW4gb2JqZWN0IG1hcHBpbmcga2V5IHRvIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Kn0gY2hpbGRyZW4gYHRoaXMucHJvcHMuY2hpbGRyZW5gXG4gKiBAcmV0dXJuIHtvYmplY3R9IE1hcHBpbmcgb2Yga2V5IHRvIGNoaWxkXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENoaWxkTWFwcGluZyhjaGlsZHJlbiwgbWFwRm4pIHtcbiAgdmFyIG1hcHBlciA9IGZ1bmN0aW9uIG1hcHBlcihjaGlsZCkge1xuICAgIHJldHVybiBtYXBGbiAmJiBpc1ZhbGlkRWxlbWVudChjaGlsZCkgPyBtYXBGbihjaGlsZCkgOiBjaGlsZDtcbiAgfTtcblxuICB2YXIgcmVzdWx0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgaWYgKGNoaWxkcmVuKSBDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGM7XG4gIH0pLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgLy8gcnVuIHRoZSBtYXAgZnVuY3Rpb24gaGVyZSBpbnN0ZWFkIHNvIHRoYXQgdGhlIGtleSBpcyB0aGUgY29tcHV0ZWQgb25lXG4gICAgcmVzdWx0W2NoaWxkLmtleV0gPSBtYXBwZXIoY2hpbGQpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogV2hlbiB5b3UncmUgYWRkaW5nIG9yIHJlbW92aW5nIGNoaWxkcmVuIHNvbWUgbWF5IGJlIGFkZGVkIG9yIHJlbW92ZWQgaW4gdGhlXG4gKiBzYW1lIHJlbmRlciBwYXNzLiBXZSB3YW50IHRvIHNob3cgKmJvdGgqIHNpbmNlIHdlIHdhbnQgdG8gc2ltdWx0YW5lb3VzbHlcbiAqIGFuaW1hdGUgZWxlbWVudHMgaW4gYW5kIG91dC4gVGhpcyBmdW5jdGlvbiB0YWtlcyBhIHByZXZpb3VzIHNldCBvZiBrZXlzXG4gKiBhbmQgYSBuZXcgc2V0IG9mIGtleXMgYW5kIG1lcmdlcyB0aGVtIHdpdGggaXRzIGJlc3QgZ3Vlc3Mgb2YgdGhlIGNvcnJlY3RcbiAqIG9yZGVyaW5nLiBJbiB0aGUgZnV0dXJlIHdlIG1heSBleHBvc2Ugc29tZSBvZiB0aGUgdXRpbGl0aWVzIGluXG4gKiBSZWFjdE11bHRpQ2hpbGQgdG8gbWFrZSB0aGlzIGVhc3ksIGJ1dCBmb3Igbm93IFJlYWN0IGl0c2VsZiBkb2VzIG5vdFxuICogZGlyZWN0bHkgaGF2ZSB0aGlzIGNvbmNlcHQgb2YgdGhlIHVuaW9uIG9mIHByZXZDaGlsZHJlbiBhbmQgbmV4dENoaWxkcmVuXG4gKiBzbyB3ZSBpbXBsZW1lbnQgaXQgaGVyZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcHJldiBwcmV2IGNoaWxkcmVuIGFzIHJldHVybmVkIGZyb21cbiAqIGBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKClgLlxuICogQHBhcmFtIHtvYmplY3R9IG5leHQgbmV4dCBjaGlsZHJlbiBhcyByZXR1cm5lZCBmcm9tXG4gKiBgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZygpYC5cbiAqIEByZXR1cm4ge29iamVjdH0gYSBrZXkgc2V0IHRoYXQgY29udGFpbnMgYWxsIGtleXMgaW4gYHByZXZgIGFuZCBhbGwga2V5c1xuICogaW4gYG5leHRgIGluIGEgcmVhc29uYWJsZSBvcmRlci5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDaGlsZE1hcHBpbmdzKHByZXYsIG5leHQpIHtcbiAgcHJldiA9IHByZXYgfHwge307XG4gIG5leHQgPSBuZXh0IHx8IHt9O1xuXG4gIGZ1bmN0aW9uIGdldFZhbHVlRm9yS2V5KGtleSkge1xuICAgIHJldHVybiBrZXkgaW4gbmV4dCA/IG5leHRba2V5XSA6IHByZXZba2V5XTtcbiAgfSAvLyBGb3IgZWFjaCBrZXkgb2YgYG5leHRgLCB0aGUgbGlzdCBvZiBrZXlzIHRvIGluc2VydCBiZWZvcmUgdGhhdCBrZXkgaW5cbiAgLy8gdGhlIGNvbWJpbmVkIGxpc3RcblxuXG4gIHZhciBuZXh0S2V5c1BlbmRpbmcgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgcGVuZGluZ0tleXMgPSBbXTtcblxuICBmb3IgKHZhciBwcmV2S2V5IGluIHByZXYpIHtcbiAgICBpZiAocHJldktleSBpbiBuZXh0KSB7XG4gICAgICBpZiAocGVuZGluZ0tleXMubGVuZ3RoKSB7XG4gICAgICAgIG5leHRLZXlzUGVuZGluZ1twcmV2S2V5XSA9IHBlbmRpbmdLZXlzO1xuICAgICAgICBwZW5kaW5nS2V5cyA9IFtdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwZW5kaW5nS2V5cy5wdXNoKHByZXZLZXkpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpO1xuICB2YXIgY2hpbGRNYXBwaW5nID0ge307XG5cbiAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0KSB7XG4gICAgaWYgKG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcGVuZGluZ05leHRLZXkgPSBuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV07XG4gICAgICAgIGNoaWxkTWFwcGluZ1tuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV1dID0gZ2V0VmFsdWVGb3JLZXkocGVuZGluZ05leHRLZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoaWxkTWFwcGluZ1tuZXh0S2V5XSA9IGdldFZhbHVlRm9yS2V5KG5leHRLZXkpO1xuICB9IC8vIEZpbmFsbHksIGFkZCB0aGUga2V5cyB3aGljaCBkaWRuJ3QgYXBwZWFyIGJlZm9yZSBhbnkga2V5IGluIGBuZXh0YFxuXG5cbiAgZm9yIChpID0gMDsgaSA8IHBlbmRpbmdLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hpbGRNYXBwaW5nW3BlbmRpbmdLZXlzW2ldXSA9IGdldFZhbHVlRm9yS2V5KHBlbmRpbmdLZXlzW2ldKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZE1hcHBpbmc7XG59XG5cbmZ1bmN0aW9uIGdldFByb3AoY2hpbGQsIHByb3AsIHByb3BzKSB7XG4gIHJldHVybiBwcm9wc1twcm9wXSAhPSBudWxsID8gcHJvcHNbcHJvcF0gOiBjaGlsZC5wcm9wc1twcm9wXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRpYWxDaGlsZE1hcHBpbmcocHJvcHMsIG9uRXhpdGVkKSB7XG4gIHJldHVybiBnZXRDaGlsZE1hcHBpbmcocHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgIG9uRXhpdGVkOiBvbkV4aXRlZC5iaW5kKG51bGwsIGNoaWxkKSxcbiAgICAgIGluOiB0cnVlLFxuICAgICAgYXBwZWFyOiBnZXRQcm9wKGNoaWxkLCAnYXBwZWFyJywgcHJvcHMpLFxuICAgICAgZW50ZXI6IGdldFByb3AoY2hpbGQsICdlbnRlcicsIHByb3BzKSxcbiAgICAgIGV4aXQ6IGdldFByb3AoY2hpbGQsICdleGl0JywgcHJvcHMpXG4gICAgfSk7XG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRDaGlsZE1hcHBpbmcobmV4dFByb3BzLCBwcmV2Q2hpbGRNYXBwaW5nLCBvbkV4aXRlZCkge1xuICB2YXIgbmV4dENoaWxkTWFwcGluZyA9IGdldENoaWxkTWFwcGluZyhuZXh0UHJvcHMuY2hpbGRyZW4pO1xuICB2YXIgY2hpbGRyZW4gPSBtZXJnZUNoaWxkTWFwcGluZ3MocHJldkNoaWxkTWFwcGluZywgbmV4dENoaWxkTWFwcGluZyk7XG4gIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltrZXldO1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSByZXR1cm47XG4gICAgdmFyIGhhc1ByZXYgPSBrZXkgaW4gcHJldkNoaWxkTWFwcGluZztcbiAgICB2YXIgaGFzTmV4dCA9IGtleSBpbiBuZXh0Q2hpbGRNYXBwaW5nO1xuICAgIHZhciBwcmV2Q2hpbGQgPSBwcmV2Q2hpbGRNYXBwaW5nW2tleV07XG4gICAgdmFyIGlzTGVhdmluZyA9IGlzVmFsaWRFbGVtZW50KHByZXZDaGlsZCkgJiYgIXByZXZDaGlsZC5wcm9wcy5pbjsgLy8gaXRlbSBpcyBuZXcgKGVudGVyaW5nKVxuXG4gICAgaWYgKGhhc05leHQgJiYgKCFoYXNQcmV2IHx8IGlzTGVhdmluZykpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdlbnRlcmluZycsIGtleSlcbiAgICAgIGNoaWxkcmVuW2tleV0gPSBjbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgb25FeGl0ZWQ6IG9uRXhpdGVkLmJpbmQobnVsbCwgY2hpbGQpLFxuICAgICAgICBpbjogdHJ1ZSxcbiAgICAgICAgZXhpdDogZ2V0UHJvcChjaGlsZCwgJ2V4aXQnLCBuZXh0UHJvcHMpLFxuICAgICAgICBlbnRlcjogZ2V0UHJvcChjaGlsZCwgJ2VudGVyJywgbmV4dFByb3BzKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICghaGFzTmV4dCAmJiBoYXNQcmV2ICYmICFpc0xlYXZpbmcpIHtcbiAgICAgIC8vIGl0ZW0gaXMgb2xkIChleGl0aW5nKVxuICAgICAgLy8gY29uc29sZS5sb2coJ2xlYXZpbmcnLCBrZXkpXG4gICAgICBjaGlsZHJlbltrZXldID0gY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIGluOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChoYXNOZXh0ICYmIGhhc1ByZXYgJiYgaXNWYWxpZEVsZW1lbnQocHJldkNoaWxkKSkge1xuICAgICAgLy8gaXRlbSBoYXNuJ3QgY2hhbmdlZCB0cmFuc2l0aW9uIHN0YXRlc1xuICAgICAgLy8gY29weSBvdmVyIHRoZSBsYXN0IHRyYW5zaXRpb24gcHJvcHM7XG4gICAgICAvLyBjb25zb2xlLmxvZygndW5jaGFuZ2VkJywga2V5KVxuICAgICAgY2hpbGRyZW5ba2V5XSA9IGNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICBvbkV4aXRlZDogb25FeGl0ZWQuYmluZChudWxsLCBjaGlsZCksXG4gICAgICAgIGluOiBwcmV2Q2hpbGQucHJvcHMuaW4sXG4gICAgICAgIGV4aXQ6IGdldFByb3AoY2hpbGQsICdleGl0JywgbmV4dFByb3BzKSxcbiAgICAgICAgZW50ZXI6IGdldFByb3AoY2hpbGQsICdlbnRlcicsIG5leHRQcm9wcylcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBjaGlsZHJlbjtcbn0iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuZXhwb3J0IHZhciB0aW1lb3V0c1NoYXBlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zaGFwZSh7XG4gIGVudGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuICBleGl0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBhcHBlYXI6IFByb3BUeXBlcy5udW1iZXJcbn0pLmlzUmVxdWlyZWRdKSA6IG51bGw7XG5leHBvcnQgdmFyIGNsYXNzTmFtZXNTaGFwZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuc2hhcGUoe1xuICBlbnRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXhpdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWN0aXZlOiBQcm9wVHlwZXMuc3RyaW5nXG59KSwgUHJvcFR5cGVzLnNoYXBlKHtcbiAgZW50ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGVudGVyRG9uZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZW50ZXJBY3RpdmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGV4aXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGV4aXREb25lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBleGl0QWN0aXZlOiBQcm9wVHlwZXMuc3RyaW5nXG59KV0pIDogbnVsbDsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlc2V0cyB3YXJuaW5nIGNhY2hlIHdoZW4gdGVzdGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBlbGVtZW50VHlwZTogY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGZhbHN5IHZhbHVlIGNhbid0IGJlIGEgU3ltYm9sXG4gICAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTplLmRheWpzX3BsdWdpbl9hZHZhbmNlZEZvcm1hdD10KCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtyZXR1cm4gZnVuY3Rpb24oZSx0LHIpe3ZhciBuPXQucHJvdG90eXBlLG89bi5mb3JtYXQ7ci5lbi5vcmRpbmFsPWZ1bmN0aW9uKGUpe3ZhciB0PVtcInRoXCIsXCJzdFwiLFwibmRcIixcInJkXCJdLHI9ZSUxMDA7cmV0dXJuXCJbXCIrZSsodFsoci0yMCklMTBdfHx0W3JdfHx0WzBdKStcIl1cIn0sbi5mb3JtYXQ9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxyPXRoaXMuJGxvY2FsZSgpLG49dGhpcy4kdXRpbHMoKSxpPShlfHxcIllZWVktTU0tRERUSEg6bW06c3NaXCIpLnJlcGxhY2UoL1xcWyhbXlxcXV0rKV18UXx3b3xnZ2dnfERvfFh8eHxrezEsMn18Uy9nLGZ1bmN0aW9uKGUpe3N3aXRjaChlKXtjYXNlXCJRXCI6cmV0dXJuIE1hdGguY2VpbCgodC4kTSsxKS8zKTtjYXNlXCJEb1wiOnJldHVybiByLm9yZGluYWwodC4kRCk7Y2FzZVwiZ2dnZ1wiOnJldHVybiB0LndlZWtZZWFyKCk7Y2FzZVwid29cIjpyZXR1cm4gci5vcmRpbmFsKHQud2VlaygpLFwiV1wiKTtjYXNlXCJrXCI6Y2FzZVwia2tcIjpyZXR1cm4gbi5zKFN0cmluZygwPT09dC4kSD8yNDp0LiRIKSxcImtcIj09PWU/MToyLFwiMFwiKTtjYXNlXCJYXCI6cmV0dXJuIE1hdGguZmxvb3IodC4kZC5nZXRUaW1lKCkvMWUzKTtjYXNlXCJ4XCI6cmV0dXJuIHQuJGQuZ2V0VGltZSgpO2RlZmF1bHQ6cmV0dXJuIGV9fSk7cmV0dXJuIG8uYmluZCh0aGlzKShpKX19fSk7XG4iLCIhZnVuY3Rpb24odCxuKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1uKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShuKTp0LmRheWpzX3BsdWdpbl9jdXN0b21QYXJzZUZvcm1hdD1uKCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdCxuPS8oXFxbW15bXSpcXF0pfChbLTovLigpXFxzXSspfChBfGF8WVlZWXxZWT98TU0/TT9NP3xEb3xERD98aGg/fEhIP3xtbT98c3M/fFN7MSwzfXx6fFpaPykvZyxlPS9cXGRcXGQvLHI9L1xcZFxcZD8vLG89L1xcZCpbXlxcc1xcZC06Ly4oKV0rLzt2YXIgcz1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24obil7dGhpc1t0XT0rbn19LGk9Wy9bKy1dXFxkXFxkOj9cXGRcXGQvLGZ1bmN0aW9uKHQpe3ZhciBuLGU7KHRoaXMuem9uZXx8KHRoaXMuem9uZT17fSkpLm9mZnNldD0obj10Lm1hdGNoKC8oWystXXxcXGRcXGQpL2cpLDA9PT0oZT02MCpuWzFdKyArblsyXSk/MDpcIitcIj09PW5bMF0/LWU6ZSl9XSxhPXtBOlsvW0FQXU0vLGZ1bmN0aW9uKHQpe3RoaXMuYWZ0ZXJub29uPVwiUE1cIj09PXR9XSxhOlsvW2FwXW0vLGZ1bmN0aW9uKHQpe3RoaXMuYWZ0ZXJub29uPVwicG1cIj09PXR9XSxTOlsvXFxkLyxmdW5jdGlvbih0KXt0aGlzLm1pbGxpc2Vjb25kcz0xMDAqK3R9XSxTUzpbZSxmdW5jdGlvbih0KXt0aGlzLm1pbGxpc2Vjb25kcz0xMCordH1dLFNTUzpbL1xcZHszfS8sZnVuY3Rpb24odCl7dGhpcy5taWxsaXNlY29uZHM9K3R9XSxzOltyLHMoXCJzZWNvbmRzXCIpXSxzczpbcixzKFwic2Vjb25kc1wiKV0sbTpbcixzKFwibWludXRlc1wiKV0sbW06W3IscyhcIm1pbnV0ZXNcIildLEg6W3IscyhcImhvdXJzXCIpXSxoOltyLHMoXCJob3Vyc1wiKV0sSEg6W3IscyhcImhvdXJzXCIpXSxoaDpbcixzKFwiaG91cnNcIildLEQ6W3IscyhcImRheVwiKV0sREQ6W2UscyhcImRheVwiKV0sRG86W28sZnVuY3Rpb24obil7dmFyIGU9dC5vcmRpbmFsLHI9bi5tYXRjaCgvXFxkKy8pO2lmKHRoaXMuZGF5PXJbMF0sZSlmb3IodmFyIG89MTtvPD0zMTtvKz0xKWUobykucmVwbGFjZSgvXFxbfFxcXS9nLFwiXCIpPT09biYmKHRoaXMuZGF5PW8pfV0sTTpbcixzKFwibW9udGhcIildLE1NOltlLHMoXCJtb250aFwiKV0sTU1NOltvLGZ1bmN0aW9uKG4pe3ZhciBlPXQscj1lLm1vbnRocyxvPWUubW9udGhzU2hvcnQscz1vP28uZmluZEluZGV4KGZ1bmN0aW9uKHQpe3JldHVybiB0PT09bn0pOnIuZmluZEluZGV4KGZ1bmN0aW9uKHQpe3JldHVybiB0LnN1YnN0cigwLDMpPT09bn0pO2lmKHM8MCl0aHJvdyBuZXcgRXJyb3I7dGhpcy5tb250aD1zKzF9XSxNTU1NOltvLGZ1bmN0aW9uKG4pe3ZhciBlPXQubW9udGhzLmluZGV4T2Yobik7aWYoZTwwKXRocm93IG5ldyBFcnJvcjt0aGlzLm1vbnRoPWUrMX1dLFk6Wy9bKy1dP1xcZCsvLHMoXCJ5ZWFyXCIpXSxZWTpbZSxmdW5jdGlvbih0KXt0PSt0LHRoaXMueWVhcj10Kyh0PjY4PzE5MDA6MmUzKX1dLFlZWVk6Wy9cXGR7NH0vLHMoXCJ5ZWFyXCIpXSxaOmksWlo6aX07dmFyIHU9ZnVuY3Rpb24odCxlLHIpe3RyeXt2YXIgbz1mdW5jdGlvbih0KXtmb3IodmFyIGU9dC5tYXRjaChuKSxyPWUubGVuZ3RoLG89MDtvPHI7bys9MSl7dmFyIHM9ZVtvXSxpPWFbc10sdT1pJiZpWzBdLGY9aSYmaVsxXTtlW29dPWY/e3JlZ2V4OnUscGFyc2VyOmZ9OnMucmVwbGFjZSgvXlxcW3xcXF0kL2csXCJcIil9cmV0dXJuIGZ1bmN0aW9uKHQpe2Zvcih2YXIgbj17fSxvPTAscz0wO288cjtvKz0xKXt2YXIgaT1lW29dO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpKXMrPWkubGVuZ3RoO2Vsc2V7dmFyIGE9aS5yZWdleCx1PWkucGFyc2VyLGY9dC5zdWJzdHIocyksaD1hLmV4ZWMoZilbMF07dS5jYWxsKG4saCksdD10LnJlcGxhY2UoaCxcIlwiKX19cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBuPXQuYWZ0ZXJub29uO2lmKHZvaWQgMCE9PW4pe3ZhciBlPXQuaG91cnM7bj9lPDEyJiYodC5ob3Vycys9MTIpOjEyPT09ZSYmKHQuaG91cnM9MCksZGVsZXRlIHQuYWZ0ZXJub29ufX0obiksbn19KGUpKHQpLHM9by55ZWFyLGk9by5tb250aCx1PW8uZGF5LGY9by5ob3VycyxoPW8ubWludXRlcyxkPW8uc2Vjb25kcyxjPW8ubWlsbGlzZWNvbmRzLG09by56b25lO2lmKG0pcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKHMsaS0xLHUsZnx8MCxofHwwLGR8fDAsY3x8MCkrNjAqbS5vZmZzZXQqMWUzKTt2YXIgbD1uZXcgRGF0ZSx2PXN8fGwuZ2V0RnVsbFllYXIoKSxwPWk+MD9pLTE6bC5nZXRNb250aCgpLE09dXx8bC5nZXREYXRlKCkseT1mfHwwLEQ9aHx8MCxZPWR8fDAsZz1jfHwwO3JldHVybiByP25ldyBEYXRlKERhdGUuVVRDKHYscCxNLHksRCxZLGcpKTpuZXcgRGF0ZSh2LHAsTSx5LEQsWSxnKX1jYXRjaCh0KXtyZXR1cm4gbmV3IERhdGUoXCJcIil9fTtyZXR1cm4gZnVuY3Rpb24obixlLHIpe3ZhciBvPWUucHJvdG90eXBlLHM9by5wYXJzZTtvLnBhcnNlPWZ1bmN0aW9uKG4pe3ZhciBlPW4uZGF0ZSxvPW4uZm9ybWF0LGk9bi5wbCxhPW4udXRjO3RoaXMuJHU9YSxvPyh0PWk/ci5Mc1tpXTp0aGlzLiRsb2NhbGUoKSx0aGlzLiRkPXUoZSxvLGEpLHRoaXMuaW5pdChuKSk6cy5jYWxsKHRoaXMsbil9fX0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==