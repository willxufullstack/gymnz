(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

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




/***/ }),

/***/ "./resources/js/components/Typography/Primary.jsx":
/*!********************************************************!*\
  !*** ./resources/js/components/Typography/Primary.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_jss_material_dashboard_react_components_typographyStyle_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -assets/jss/material-dashboard-react/components/typographyStyle.jsx */ "./resources/js/assets/jss/material-dashboard-react/components/typographyStyle.jsx");
var _jsxFileName="/Users/roynwang/Desktop/gymnz/resources/js/components/Typography/Primary.jsx";function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function Primary(_ref){var props=_extends({},_ref);var className=props.className,classes=props.classes,children=props.children;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:(className||"")+" "+classes.defaultFontStyle+" "+classes.primaryText,__source:{fileName:_jsxFileName,lineNumber:11}},children);}Primary.propTypes={classes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired};/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_assets_jss_material_dashboard_react_components_typographyStyle_jsx__WEBPACK_IMPORTED_MODULE_3__["default"])(Primary));

/***/ }),

/***/ "./resources/js/views/Report/MonthlyReport.js":
/*!****************************************************!*\
  !*** ./resources/js/views/Report/MonthlyReport.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux_es_connect_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux/es/connect/connect */ "./node_modules/react-redux/es/connect/connect.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./resources/js/actions/index.js");
/* harmony import */ var react_chartist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartist */ "./node_modules/react-chartist/dist/index.js");
/* harmony import */ var react_chartist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_chartist__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_CustomTabs_CustomTabs_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -components/CustomTabs/CustomTabs.jsx */ "./resources/js/components/CustomTabs/CustomTabs.jsx");
/* harmony import */ var _components_Table_Table_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -components/Table/Table.jsx */ "./resources/js/components/Table/Table.jsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -utils */ "./resources/js/utils.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var _date_io_dayjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @date-io/dayjs */ "./node_modules/@date-io/dayjs/build/index.esm.js");
/* harmony import */ var _components_Grid_GridItem_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! -components/Grid/GridItem.jsx */ "./resources/js/components/Grid/GridItem.jsx");
/* harmony import */ var _components_Grid_GridContainer_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! -components/Grid/GridContainer.jsx */ "./resources/js/components/Grid/GridContainer.jsx");
/* harmony import */ var _components_Typography_Primary_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! -components/Typography/Primary.jsx */ "./resources/js/components/Typography/Primary.jsx");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../lang */ "./resources/js/lang.js");
var _jsxFileName="/Users/roynwang/Desktop/gymnz/resources/js/views/Report/MonthlyReport.js";function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}var L=Object(_lang__WEBPACK_IMPORTED_MODULE_14__["default"])('MonthlyReport');var MonthlyReport=function(_React$Component){_inherits(MonthlyReport,_React$Component);function MonthlyReport(props){var _this;_classCallCheck(this,MonthlyReport);_this=_possibleConstructorReturn(this,_getPrototypeOf(MonthlyReport).call(this,props));_this.handleDateChange=function(date){_this.setState({date:date},function(){_this.refresh();});};_this.refresh=function(){_this.refreshFunMap[_this.state.selectedTabIndex]&&_this.refreshFunMap[_this.state.selectedTabIndex]();};_this.loadSale=function(){var month=_utils__WEBPACK_IMPORTED_MODULE_7__["getMonthStartEnd"](_this.state.date);_this.props.actions.loadGymOrders(_this.props.selectedGym.id,month);};_this.getSummaryTab=function(){var summary=_this.props.gym.report.summary;var row=function row(label,value){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid_GridItem_jsx__WEBPACK_IMPORTED_MODULE_10__["default"],{xs:12,sm:12,md:12,container:true,alignItems:"center",classes:{grid:'gym-summary-row'},__source:{fileName:_jsxFileName,lineNumber:81}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid_GridItem_jsx__WEBPACK_IMPORTED_MODULE_10__["default"],{xs:6,sm:6,md:6,__source:{fileName:_jsxFileName,lineNumber:89}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"],{variant:"button",display:"block",gutterBottom:true,className:"gym-summary-label",__source:{fileName:_jsxFileName,lineNumber:90}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Typography_Primary_jsx__WEBPACK_IMPORTED_MODULE_12__["default"],{__source:{fileName:_jsxFileName,lineNumber:96}},label))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid_GridItem_jsx__WEBPACK_IMPORTED_MODULE_10__["default"],{xs:6,sm:6,md:6,__source:{fileName:_jsxFileName,lineNumber:99}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"],{variant:"subtitle2",display:"block",gutterBottom:true,className:"gym-summary-value",__source:{fileName:_jsxFileName,lineNumber:100}},value)));};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid_GridContainer_jsx__WEBPACK_IMPORTED_MODULE_11__["default"],{__source:{fileName:_jsxFileName,lineNumber:113}},row(L.activeCustomer,summary.activeCustomerCount),row(L.scheduleCount,summary.scheduleCount),row(L.orderCount,summary.orderCount),row(L.orderPrice,summary.orderPrice));};_this.getSaleTab=function(){var orders=_this.props.gym.report.orders;if(!orders){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:125}},"No Orders");}var header=[L.price,L.bookedTotal,L.coach,L.customer,L.created];var tableData=orders.map(function(r){return[r.price+'',r.booked_amount+' / '+r.course_amount,r.coach.user.name,r.customer.name,r.created_at];});return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_Table_jsx__WEBPACK_IMPORTED_MODULE_6__["default"],{classes:{tableResponsive:'no-margin-top'},tableHeaderColor:"primary",tableHead:header,tableData:tableData,__source:{fileName:_jsxFileName,lineNumber:137}});};_this.getScheduleCountByCoachTab=function(){var groups=_this.props.gym.report.scheduleCountByCoach;if(!groups){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:149}},L.noData);}var header=[L.coach,L.Count];var tableData=[];var chartData={labels:[],series:[]};groups.forEach(function(r){tableData.push([r.coach.user.name+'',r.course_amount+'']);chartData.labels.push(r.coach.user.name);chartData.series.push(r.course_amount);});var chartOptions={labelInterpolationFnc:function labelInterpolationFnc(value){return value;}};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid_GridContainer_jsx__WEBPACK_IMPORTED_MODULE_11__["default"],{alignItems:"center",__source:{fileName:_jsxFileName,lineNumber:170}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid_GridItem_jsx__WEBPACK_IMPORTED_MODULE_10__["default"],{xs:12,sm:12,md:8,__source:{fileName:_jsxFileName,lineNumber:171}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_Table_jsx__WEBPACK_IMPORTED_MODULE_6__["default"],{classes:{tableResponsive:'no-margin-top'},tableHeaderColor:"primary",tableHead:header,tableData:tableData,__source:{fileName:_jsxFileName,lineNumber:172}})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid_GridItem_jsx__WEBPACK_IMPORTED_MODULE_10__["default"],{xs:12,sm:12,md:4,__source:{fileName:_jsxFileName,lineNumber:179}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartist__WEBPACK_IMPORTED_MODULE_4___default.a,{className:"ct-chart",data:chartData,type:"Pie",options:chartOptions,__source:{fileName:_jsxFileName,lineNumber:180}})));};_this.getScheduleCountByCustomerTab=function(){var groups=_this.props.gym.report.scheduleCountByCustomer;if(!groups){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:194}},L.noData);}var header=[L.name,L.Count];var tableData=groups.map(function(r){return[r.customer.name+'',r.course_amount+''];});return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_Table_jsx__WEBPACK_IMPORTED_MODULE_6__["default"],{classes:{tableResponsive:'no-margin-top'},tableHeaderColor:"primary",tableHead:header,tableData:tableData,__source:{fileName:_jsxFileName,lineNumber:203}});};_this.tapTab=function(tabIndex){_this.setState({selectedTabIndex:tabIndex},function(){_this.refresh();});};_this.state={date:new Date(),selectedTabIndex:0};_this.refreshFunMap=[function(){var params=_utils__WEBPACK_IMPORTED_MODULE_7__["getMonthStartEnd"](_this.state.date);params.status=2;_this.props.actions.loadGymSummary(_this.props.selectedGym.id,params);},_this.loadSale,function(){var params=_utils__WEBPACK_IMPORTED_MODULE_7__["getMonthStartEnd"](_this.state.date);params.count='coach_id';params.status=2;_this.props.actions.loadGymScheduleCount(_this.props.selectedGym.id,params);},function(){var params=_utils__WEBPACK_IMPORTED_MODULE_7__["getMonthStartEnd"](_this.state.date);params.count='customer_id';params.status=2;_this.props.actions.loadGymScheduleCount(_this.props.selectedGym.id,params);}];return _this;}_createClass(MonthlyReport,[{key:"componentWillMount",value:function componentWillMount(){this.refresh();}},{key:"render",value:function render(){var dateSelector=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__["MuiPickersUtilsProvider"],{utils:_date_io_dayjs__WEBPACK_IMPORTED_MODULE_9__["default"],locale:'zh-cn',__source:{fileName:_jsxFileName,lineNumber:224}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__["DatePicker"],{format:"MM/YYYY",className:"report-month-selector",openTo:"month",views:['year','month'],value:this.state.date,onChange:this.handleDateChange,__source:{fileName:_jsxFileName,lineNumber:225}}));return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CustomTabs_CustomTabs_jsx__WEBPACK_IMPORTED_MODULE_5__["default"],{title:dateSelector,headerColor:"primary",onSwitch:this.tapTab,tabs:[{tabName:L.summary,tabContent:this.getSummaryTab()},{tabName:L.sale,tabContent:this.getSaleTab()},{tabName:L.coach,tabContent:this.getScheduleCountByCoachTab()},{tabName:L.customer,tabContent:this.getScheduleCountByCustomerTab()}],__source:{fileName:_jsxFileName,lineNumber:237}});}}]);return MonthlyReport;}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);var mapStoreToProps=function mapStoreToProps(store){return{selectedGym:store.setting.selectedGym,gym:store.gym};};function mapDispatchToProps(dispatch){return{actions:Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_actions__WEBPACK_IMPORTED_MODULE_3__,dispatch)};}var LinkedMonthlyReport=Object(react_redux_es_connect_connect__WEBPACK_IMPORTED_MODULE_1__["default"])(mapStoreToProps,mapDispatchToProps)(MonthlyReport);/* harmony default export */ __webpack_exports__["default"] = (LinkedMonthlyReport);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29udmVydC1jc3MtbGVuZ3RoL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUtc2Nyb2xsLWxlZnQvZXNtL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JpZm0vZGlzdC9yaWZtLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L1ByaW1hcnkuanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9SZXBvcnQvTW9udGhseVJlcG9ydC5qcyJdLCJuYW1lcyI6WyJQcmltYXJ5IiwicHJvcHMiLCJjbGFzc05hbWUiLCJjbGFzc2VzIiwiY2hpbGRyZW4iLCJkZWZhdWx0Rm9udFN0eWxlIiwicHJpbWFyeVRleHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2l0aFN0eWxlcyIsInR5cG9ncmFwaHlTdHlsZSIsIkwiLCJpMThOIiwiTW9udGhseVJlcG9ydCIsImhhbmRsZURhdGVDaGFuZ2UiLCJkYXRlIiwic2V0U3RhdGUiLCJyZWZyZXNoIiwicmVmcmVzaEZ1bk1hcCIsInN0YXRlIiwic2VsZWN0ZWRUYWJJbmRleCIsImxvYWRTYWxlIiwibW9udGgiLCJ1dGlscyIsImFjdGlvbnMiLCJsb2FkR3ltT3JkZXJzIiwic2VsZWN0ZWRHeW0iLCJpZCIsImdldFN1bW1hcnlUYWIiLCJzdW1tYXJ5IiwiZ3ltIiwicmVwb3J0Iiwicm93IiwibGFiZWwiLCJ2YWx1ZSIsImdyaWQiLCJhY3RpdmVDdXN0b21lciIsImFjdGl2ZUN1c3RvbWVyQ291bnQiLCJzY2hlZHVsZUNvdW50Iiwib3JkZXJDb3VudCIsIm9yZGVyUHJpY2UiLCJnZXRTYWxlVGFiIiwib3JkZXJzIiwiaGVhZGVyIiwicHJpY2UiLCJib29rZWRUb3RhbCIsImNvYWNoIiwiY3VzdG9tZXIiLCJjcmVhdGVkIiwidGFibGVEYXRhIiwibWFwIiwiciIsImJvb2tlZF9hbW91bnQiLCJjb3Vyc2VfYW1vdW50IiwidXNlciIsIm5hbWUiLCJjcmVhdGVkX2F0IiwidGFibGVSZXNwb25zaXZlIiwiZ2V0U2NoZWR1bGVDb3VudEJ5Q29hY2hUYWIiLCJncm91cHMiLCJzY2hlZHVsZUNvdW50QnlDb2FjaCIsIm5vRGF0YSIsIkNvdW50IiwiY2hhcnREYXRhIiwibGFiZWxzIiwic2VyaWVzIiwiZm9yRWFjaCIsInB1c2giLCJjaGFydE9wdGlvbnMiLCJsYWJlbEludGVycG9sYXRpb25GbmMiLCJnZXRTY2hlZHVsZUNvdW50QnlDdXN0b21lclRhYiIsInNjaGVkdWxlQ291bnRCeUN1c3RvbWVyIiwidGFwVGFiIiwidGFiSW5kZXgiLCJEYXRlIiwicGFyYW1zIiwic3RhdHVzIiwibG9hZEd5bVN1bW1hcnkiLCJjb3VudCIsImxvYWRHeW1TY2hlZHVsZUNvdW50IiwiZGF0ZVNlbGVjdG9yIiwiRGF5anNVdGlscyIsInRhYk5hbWUiLCJ0YWJDb250ZW50Iiwic2FsZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RvcmVUb1Byb3BzIiwic3RvcmUiLCJzZXR0aW5nIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJBY3Rpb25zIiwiTGlua2VkTW9udGhseVJlcG9ydCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBLGtCQUFrQixzQkFBcUMsMkVBQVksd0NBQXdDLDhCQUE4QixrREFBa0Qsa0JBQWtCLFdBQVcsb0NBQW9DLDhCQUE4QixLQUFLLHFCQUFxQixjQUFjLFFBQVEsaUNBQWlDLDJCQUEyQixLQUFLLHFCQUFxQixXQUFXLG1DQUFtQztBQUM5Yzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7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RCxPQUFPLENBQUV2RSxDQUFDLENBQUN5RSxJQURmLENBRUlELFVBQVUsQ0FBRSxLQUFLMUMsVUFBTCxFQUZoQixDQUxFLENBU0YsQ0FDSXlDLE9BQU8sQ0FBRXZFLENBQUMsQ0FBQ21DLEtBRGYsQ0FFSXFDLFVBQVUsQ0FBRSxLQUFLekIsMEJBQUwsRUFGaEIsQ0FURSxDQWFGLENBQ0l3QixPQUFPLENBQUV2RSxDQUFDLENBQUNvQyxRQURmLENBRUlvQyxVQUFVLENBQUUsS0FBS2IsNkJBQUwsRUFGaEIsQ0FiRSxDQUpWLGtEQURKLENBeUJILEMsMkJBbFB1QmUsNENBQUssQ0FBQ0MsUyxFQXFQbEMsR0FBTUMsZ0JBQWUsQ0FBRyxRQUFsQkEsZ0JBQWtCLENBQUFDLEtBQUssQ0FBSSxDQUM3QixNQUFPLENBQ0g5RCxXQUFXLENBQUU4RCxLQUFLLENBQUNDLE9BQU4sQ0FBYy9ELFdBRHhCLENBRUhJLEdBQUcsQ0FBRTBELEtBQUssQ0FBQzFELEdBRlIsQ0FBUCxDQUlILENBTEQsQ0FPQSxRQUFTNEQsbUJBQVQsQ0FBNEJDLFFBQTVCLENBQXNDLENBQ2xDLE1BQU8sQ0FDSG5FLE9BQU8sQ0FBRW9FLGdFQUFrQixDQUFDQyxxQ0FBRCxDQUFVRixRQUFWLENBRHhCLENBQVAsQ0FHSCxDQUVELEdBQU1HLG9CQUFtQixDQUFHQyw4RUFBTyxDQUMvQlIsZUFEK0IsQ0FFL0JHLGtCQUYrQixDQUFQLENBRzFCN0UsYUFIMEIsQ0FBNUIsQ0FLZWlGLGtGQUFmLEUiLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZT1mdW5jdGlvbihlKXtyZXR1cm4gcGFyc2VGbG9hdChlKX07ZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocil7cmV0dXJuIG51bGw9PXImJihyPXIpLGZ1bmN0aW9uKG4sdCxpLGYpe251bGw9PWkmJihpPXIpLG51bGw9PWYmJihmPWkpO3ZhciBsPVN0cmluZyhuKS5tYXRjaCgvW1xcZC5cXC1cXCtdKlxccyooLiopLylbMV18fFwiXCI7aWYobD09PXQpcmV0dXJuIG47dmFyIHU9ZShuKTtpZihcInB4XCIhPT1sKWlmKFwiZW1cIj09PWwpdT1lKG4pKmUoaSk7ZWxzZSBpZihcInJlbVwiPT09bCl1PWUobikqZShyKTtlbHNle2lmKFwiZXhcIiE9PWwpcmV0dXJuIG47dT1lKG4pKmUoaSkqMn12YXIgYT11O2lmKFwicHhcIiE9PXQpaWYoXCJlbVwiPT09dClhPXUvZShmKTtlbHNlIGlmKFwicmVtXCI9PT10KWE9dS9lKHIpO2Vsc2V7aWYoXCJleFwiIT09dClyZXR1cm4gbjthPXUvZShmKS8yfXJldHVybiBwYXJzZUZsb2F0KGEudG9GaXhlZCg1KSkrdH19XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCIvLyBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtYm9vdHN0cmFwL2RvbS1oZWxwZXJzL2Jsb2IvbWFzdGVyL3NyYy91dGlsL2luRE9NLmpzXHJcbnZhciBpbkRPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XHJcbnZhciBjYWNoZWRUeXBlO1xyXG5leHBvcnQgZnVuY3Rpb24gX3NldFNjcm9sbFR5cGUodHlwZSkge1xyXG4gICAgY2FjaGVkVHlwZSA9IHR5cGU7XHJcbn1cclxuLy8gQmFzZWQgb24gdGhlIGpxdWVyeSBwbHVnaW4gaHR0cHM6Ly9naXRodWIuY29tL290aHJlZS9qcXVlcnkucnRsLXNjcm9sbC10eXBlXHJcbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RTY3JvbGxUeXBlKCkge1xyXG4gICAgaWYgKGNhY2hlZFR5cGUpIHtcclxuICAgICAgICByZXR1cm4gY2FjaGVkVHlwZTtcclxuICAgIH1cclxuICAgIGlmICghaW5ET00gfHwgIXdpbmRvdy5kb2N1bWVudC5ib2R5KSB7XHJcbiAgICAgICAgcmV0dXJuICdpbmRldGVybWluYXRlJztcclxuICAgIH1cclxuICAgIHZhciBkdW1teSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGR1bW15LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdBQkNEJykpO1xyXG4gICAgZHVtbXkuZGlyID0gJ3J0bCc7XHJcbiAgICBkdW1teS5zdHlsZS5mb250U2l6ZSA9ICcxNHB4JztcclxuICAgIGR1bW15LnN0eWxlLndpZHRoID0gJzRweCc7XHJcbiAgICBkdW1teS5zdHlsZS5oZWlnaHQgPSAnMXB4JztcclxuICAgIGR1bW15LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIGR1bW15LnN0eWxlLnRvcCA9ICctMTAwMHB4JztcclxuICAgIGR1bW15LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGR1bW15KTtcclxuICAgIGNhY2hlZFR5cGUgPSAncmV2ZXJzZSc7XHJcbiAgICBpZiAoZHVtbXkuc2Nyb2xsTGVmdCA+IDApIHtcclxuICAgICAgICBjYWNoZWRUeXBlID0gJ2RlZmF1bHQnO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZHVtbXkuc2Nyb2xsTGVmdCA9IDE7XHJcbiAgICAgICAgaWYgKGR1bW15LnNjcm9sbExlZnQgPT09IDApIHtcclxuICAgICAgICAgICAgY2FjaGVkVHlwZSA9ICduZWdhdGl2ZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkdW1teSk7XHJcbiAgICByZXR1cm4gY2FjaGVkVHlwZTtcclxufVxyXG4vLyBCYXNlZCBvbiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjQzOTQzNzZcclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vcm1hbGl6ZWRTY3JvbGxMZWZ0KGVsZW1lbnQsIGRpcmVjdGlvbikge1xyXG4gICAgdmFyIHNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgICAvLyBQZXJmb3JtIHRoZSBjYWxjdWxhdGlvbnMgb25seSB3aGVuIGRpcmVjdGlvbiBpcyBydGwgdG8gYXZvaWQgbWVzc2luZyB1cCB0aGUgbHRyIGJhaGF2aW9yXHJcbiAgICBpZiAoZGlyZWN0aW9uICE9PSAncnRsJykge1xyXG4gICAgICAgIHJldHVybiBzY3JvbGxMZWZ0O1xyXG4gICAgfVxyXG4gICAgdmFyIHR5cGUgPSBkZXRlY3RTY3JvbGxUeXBlKCk7XHJcbiAgICBpZiAodHlwZSA9PT0gJ2luZGV0ZXJtaW5hdGUnKSB7XHJcbiAgICAgICAgcmV0dXJuIE51bWJlci5OYU47XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICduZWdhdGl2ZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LnNjcm9sbFdpZHRoIC0gZWxlbWVudC5jbGllbnRXaWR0aCArIHNjcm9sbExlZnQ7XHJcbiAgICAgICAgY2FzZSAncmV2ZXJzZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LnNjcm9sbFdpZHRoIC0gZWxlbWVudC5jbGllbnRXaWR0aCAtIHNjcm9sbExlZnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2Nyb2xsTGVmdDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Tm9ybWFsaXplZFNjcm9sbExlZnQoZWxlbWVudCwgc2Nyb2xsTGVmdCwgZGlyZWN0aW9uKSB7XHJcbiAgICAvLyBQZXJmb3JtIHRoZSBjYWxjdWxhdGlvbnMgb25seSB3aGVuIGRpcmVjdGlvbiBpcyBydGwgdG8gYXZvaWQgbWVzc2luZyB1cCB0aGUgbHRyIGJhaGF2aW9yXHJcbiAgICBpZiAoZGlyZWN0aW9uICE9PSAncnRsJykge1xyXG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHR5cGUgPSBkZXRlY3RTY3JvbGxUeXBlKCk7XHJcbiAgICBpZiAodHlwZSA9PT0gJ2luZGV0ZXJtaW5hdGUnKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbmVnYXRpdmUnOlxyXG4gICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBlbGVtZW50LmNsaWVudFdpZHRoIC0gZWxlbWVudC5zY3JvbGxXaWR0aCArIHNjcm9sbExlZnQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3JldmVyc2UnOlxyXG4gICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbFdpZHRoIC0gZWxlbWVudC5jbGllbnRXaWR0aCAtIHNjcm9sbExlZnQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxudmFyIFJpZm0gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoUmlmbSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmlmbShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLl9zdGF0ZSA9IG51bGw7XG4gICAgX3RoaXMuX2RlbCA9IGZhbHNlO1xuXG4gICAgX3RoaXMuX2hhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChldnQudGFyZ2V0LnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignUmlmbSBkb2VzIG5vdCBzdXBwb3J0IGlucHV0IHR5cGU9bnVtYmVyLCB1c2UgdHlwZT10ZWwgaW5zdGVhZC4nKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gLy8gRlVUVVJFOiB1c2UgZXZ0Lm5hdGl2ZUV2ZW50LmlucHV0VHlwZSBmb3IgZGVsIGV2ZW50LCBzZWUgY29tbWVudHMgYXQgb25rZXlkb3duXG5cblxuICAgICAgdmFyIHN0YXRlVmFsdWUgPSBfdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICAgIHZhciB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWU7XG4gICAgICB2YXIgaW5wdXQgPSBldnQudGFyZ2V0O1xuICAgICAgdmFyIG9wID0gdmFsdWUubGVuZ3RoID4gc3RhdGVWYWx1ZS5sZW5ndGg7XG4gICAgICB2YXIgZGVsID0gX3RoaXMuX2RlbDtcblxuICAgICAgdmFyIG5vT3AgPSBzdGF0ZVZhbHVlID09PSBfdGhpcy5wcm9wcy5mb3JtYXQodmFsdWUpO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgbG9jYWw6IHRydWVcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGVjdGlvblN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIHZhciByZWZ1c2UgPSBfdGhpcy5wcm9wcy5yZWZ1c2UgfHwgL1teXFxkXSsvZztcbiAgICAgICAgdmFyIGJlZm9yZSA9IHZhbHVlLnN1YnN0cigwLCBzZWxlY3Rpb25TdGFydCkucmVwbGFjZShyZWZ1c2UsICcnKTtcbiAgICAgICAgX3RoaXMuX3N0YXRlID0ge1xuICAgICAgICAgIGlucHV0OiBpbnB1dCxcbiAgICAgICAgICBiZWZvcmU6IGJlZm9yZSxcbiAgICAgICAgICBvcDogb3AsXG4gICAgICAgICAgZGk6IGRlbCAmJiBub09wLFxuICAgICAgICAgIGRlbDogZGVsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKF90aGlzLnByb3BzLnJlcGxhY2UgJiYgX3RoaXMucHJvcHMucmVwbGFjZShzdGF0ZVZhbHVlKSAmJiBvcCAmJiAhbm9PcCkge1xuICAgICAgICAgIHZhciBzdGFydCA9IC0xO1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgIT09IGJlZm9yZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgc3RhcnQgPSBNYXRoLm1heChzdGFydCwgdmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGJlZm9yZVtpXS50b0xvd2VyQ2FzZSgpLCBzdGFydCArIDEpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgYyA9IHZhbHVlLnN1YnN0cihzdGFydCArIDEpLnJlcGxhY2UocmVmdXNlLCAnJylbMF07XG4gICAgICAgICAgc3RhcnQgPSB2YWx1ZS5pbmRleE9mKGMsIHN0YXJ0ICsgMSk7XG4gICAgICAgICAgdmFsdWUgPSBcIlwiICsgdmFsdWUuc3Vic3RyKDAsIHN0YXJ0KSArIHZhbHVlLnN1YnN0cihzdGFydCArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZ2ID0gX3RoaXMucHJvcHMuZm9ybWF0KHZhbHVlKTtcblxuICAgICAgICBpZiAoc3RhdGVWYWx1ZSA9PT0gZnYpIHtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbkNoYW5nZShmdik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5faEtEID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYgKGV2dC5jb2RlID09PSAnRGVsZXRlJykge1xuICAgICAgICBfdGhpcy5fZGVsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX2hLVSA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGlmIChldnQuY29kZSA9PT0gJ0RlbGV0ZScpIHtcbiAgICAgICAgX3RoaXMuX2RlbCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSxcbiAgICAgIGxvY2FsOiB0cnVlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBSaWZtLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHN0YXRlLmxvY2FsID8gc3RhdGUudmFsdWUgOiBwcm9wcy52YWx1ZSxcbiAgICAgIGxvY2FsOiBmYWxzZVxuICAgIH07XG4gIH07XG5cbiAgdmFyIF9wcm90byA9IFJpZm0ucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9oYW5kbGVDaGFuZ2UgPSB0aGlzLl9oYW5kbGVDaGFuZ2UsXG4gICAgICAgIHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZSxcbiAgICAgICAgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIHJldHVybiBjaGlsZHJlbih7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBvbkNoYW5nZTogX2hhbmRsZUNoYW5nZVxuICAgIH0pO1xuICB9IC8vIGRlbGV0ZSB3aGVuICBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSW5wdXRFdmVudC9pbnB1dFR5cGUgd2lsbCBiZSBzdXBwb3J0ZWQgYnkgYWxsIG1ham9yIGJyb3dzZXJzXG4gIDtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faEtEKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2hLVSk7XG4gIH0gLy8gZGVsZXRlIHdoZW4gIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9JbnB1dEV2ZW50L2lucHV0VHlwZSB3aWxsIGJlIHN1cHBvcnRlZCBieSBhbGwgbWFqb3IgYnJvd3NlcnNcbiAgO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oS0QpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5faEtVKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHZhciBfc3RhdGUgPSB0aGlzLl9zdGF0ZTtcblxuICAgIGlmIChfc3RhdGUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgICB2YXIgc3RhcnQgPSAtMTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgIT09IF9zdGF0ZS5iZWZvcmUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgc3RhcnQgPSBNYXRoLm1heChzdGFydCwgdmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKF9zdGF0ZS5iZWZvcmVbaV0udG9Mb3dlckNhc2UoKSwgc3RhcnQgKyAxKSk7XG4gICAgICB9IC8vIGZvcm1hdCB1c3VhbGx5IGxvb2tzIGJldHRlciB3aXRob3V0IHRoaXNcblxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5yZXBsYWNlICYmIChfc3RhdGUub3AgfHwgX3N0YXRlLmRlbCAmJiAhX3N0YXRlLmRpKSkge1xuICAgICAgICB3aGlsZSAodmFsdWVbc3RhcnQgKyAxXSAmJiAodGhpcy5wcm9wcy5yZWZ1c2UgfHwgL1teXFxkXSsvKS50ZXN0KHZhbHVlW3N0YXJ0ICsgMV0pKSB7XG4gICAgICAgICAgc3RhcnQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBfc3RhdGUuaW5wdXQuc2VsZWN0aW9uU3RhcnQgPSBfc3RhdGUuaW5wdXQuc2VsZWN0aW9uRW5kID0gc3RhcnQgKyAxICsgKF9zdGF0ZS5kaSA/IDEgOiAwKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zdGF0ZSA9IG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIFJpZm07XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCB7IFJpZm0gfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgdHlwb2dyYXBoeVN0eWxlIGZyb20gXCItYXNzZXRzL2pzcy9tYXRlcmlhbC1kYXNoYm9hcmQtcmVhY3QvY29tcG9uZW50cy90eXBvZ3JhcGh5U3R5bGUuanN4XCI7XG5cbmZ1bmN0aW9uIFByaW1hcnkoeyAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjbGFzc2VzLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eyhjbGFzc05hbWUgfHwgXCJcIikgKyBcIiBcIiArIGNsYXNzZXMuZGVmYXVsdEZvbnRTdHlsZSArIFwiIFwiICsgY2xhc3Nlcy5wcmltYXJ5VGV4dH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblByaW1hcnkucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXModHlwb2dyYXBoeVN0eWxlKShQcmltYXJ5KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjb25uZWN0IGZyb20gJ3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvY29ubmVjdCdcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zJ1xuLy8gcmVhY3QgcGx1Z2luIGZvciBjcmVhdGluZyBjaGFydHNcbmltcG9ydCBDaGFydGlzdEdyYXBoIGZyb20gJ3JlYWN0LWNoYXJ0aXN0J1xuaW1wb3J0IFRhYnMgZnJvbSAnLWNvbXBvbmVudHMvQ3VzdG9tVGFicy9DdXN0b21UYWJzLmpzeCdcbmltcG9ydCBUYWJsZSBmcm9tICctY29tcG9uZW50cy9UYWJsZS9UYWJsZS5qc3gnXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICctdXRpbHMnXG5pbXBvcnQgeyBEYXRlUGlja2VyLCBNdWlQaWNrZXJzVXRpbHNQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9waWNrZXJzJ1xuaW1wb3J0IERheWpzVXRpbHMgZnJvbSAnQGRhdGUtaW8vZGF5anMnXG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSAnLWNvbXBvbmVudHMvR3JpZC9HcmlkSXRlbS5qc3gnXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICctY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXIuanN4J1xuaW1wb3J0IFByaW1hcnkgZnJvbSAnLWNvbXBvbmVudHMvVHlwb2dyYXBoeS9QcmltYXJ5LmpzeCdcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXG5pbXBvcnQgaTE4TiBmcm9tICcuLi8uLi9sYW5nJ1xuXG5jb25zdCBMID0gaTE4TignTW9udGhseVJlcG9ydCcpXG5jbGFzcyBNb250aGx5UmVwb3J0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICBzZWxlY3RlZFRhYkluZGV4OiAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWZyZXNoRnVuTWFwID0gW1xuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB1dGlscy5nZXRNb250aFN0YXJ0RW5kKHRoaXMuc3RhdGUuZGF0ZSlcbiAgICAgICAgICAgICAgICAvLyBvbmx5IGluY2x1ZGUgdGhlIGNvbXBsZXRlZCBjbGFzc1xuICAgICAgICAgICAgICAgIHBhcmFtcy5zdGF0dXMgPSAyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLmxvYWRHeW1TdW1tYXJ5KFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkR3ltLmlkLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXNcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5sb2FkU2FsZSwgLy8gcmVmcmVzaCBzYWxlXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9yZWZyZXNoIGNvYWNoXG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHV0aWxzLmdldE1vbnRoU3RhcnRFbmQodGhpcy5zdGF0ZS5kYXRlKVxuICAgICAgICAgICAgICAgIHBhcmFtcy5jb3VudCA9ICdjb2FjaF9pZCdcbiAgICAgICAgICAgICAgICBwYXJhbXMuc3RhdHVzID0gMlxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy5sb2FkR3ltU2NoZWR1bGVDb3VudChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZEd5bS5pZCxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAvL3JlZnJlc2ggY3VzdG9tZXJcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0gdXRpbHMuZ2V0TW9udGhTdGFydEVuZCh0aGlzLnN0YXRlLmRhdGUpXG4gICAgICAgICAgICAgICAgcGFyYW1zLmNvdW50ID0gJ2N1c3RvbWVyX2lkJ1xuICAgICAgICAgICAgICAgIHBhcmFtcy5zdGF0dXMgPSAyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLmxvYWRHeW1TY2hlZHVsZUNvdW50KFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkR3ltLmlkLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXNcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG5cbiAgICBoYW5kbGVEYXRlQ2hhbmdlID0gZGF0ZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRlIH0sICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVmcmVzaCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5yZWZyZXNoRnVuTWFwW3RoaXMuc3RhdGUuc2VsZWN0ZWRUYWJJbmRleF0gJiZcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEZ1bk1hcFt0aGlzLnN0YXRlLnNlbGVjdGVkVGFiSW5kZXhdKClcbiAgICB9XG5cbiAgICBsb2FkU2FsZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9udGggPSB1dGlscy5nZXRNb250aFN0YXJ0RW5kKHRoaXMuc3RhdGUuZGF0ZSlcbiAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLmxvYWRHeW1PcmRlcnModGhpcy5wcm9wcy5zZWxlY3RlZEd5bS5pZCwgbW9udGgpXG4gICAgfVxuXG4gICAgZ2V0U3VtbWFyeVRhYiA9ICgpID0+IHtcbiAgICAgICAgbGV0IHN1bW1hcnkgPSB0aGlzLnByb3BzLmd5bS5yZXBvcnQuc3VtbWFyeVxuXG4gICAgICAgIGxldCByb3cgPSAobGFiZWwsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbVxuICAgICAgICAgICAgICAgICAgICB4cz17MTJ9XG4gICAgICAgICAgICAgICAgICAgIHNtPXsxMn1cbiAgICAgICAgICAgICAgICAgICAgbWQ9ezEyfVxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7IGdyaWQ6ICdneW0tc3VtbWFyeS1yb3cnIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezZ9IHNtPXs2fSBtZD17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2J1dHRvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PSdibG9jaydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2d5bS1zdW1tYXJ5LWxhYmVsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmltYXJ5PntsYWJlbH08L1ByaW1hcnk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17Nn0gc209ezZ9IG1kPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nc3VidGl0bGUyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9J2Jsb2NrJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZ3ltLXN1bW1hcnktdmFsdWUnXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIHtyb3coTC5hY3RpdmVDdXN0b21lciwgc3VtbWFyeS5hY3RpdmVDdXN0b21lckNvdW50KX1cbiAgICAgICAgICAgICAgICB7cm93KEwuc2NoZWR1bGVDb3VudCwgc3VtbWFyeS5zY2hlZHVsZUNvdW50KX1cbiAgICAgICAgICAgICAgICB7cm93KEwub3JkZXJDb3VudCwgc3VtbWFyeS5vcmRlckNvdW50KX1cbiAgICAgICAgICAgICAgICB7cm93KEwub3JkZXJQcmljZSwgc3VtbWFyeS5vcmRlclByaWNlKX1cbiAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGdldFNhbGVUYWIgPSAoKSA9PiB7XG4gICAgICAgIGxldCBvcmRlcnMgPSB0aGlzLnByb3BzLmd5bS5yZXBvcnQub3JkZXJzXG4gICAgICAgIGlmICghb3JkZXJzKSB7XG4gICAgICAgICAgICByZXR1cm4gPHA+Tm8gT3JkZXJzPC9wPlxuICAgICAgICB9XG4gICAgICAgIGxldCBoZWFkZXIgPSBbTC5wcmljZSwgTC5ib29rZWRUb3RhbCwgTC5jb2FjaCwgTC5jdXN0b21lciwgTC5jcmVhdGVkXVxuICAgICAgICBsZXQgdGFibGVEYXRhID0gb3JkZXJzLm1hcChyID0+IFtcbiAgICAgICAgICAgIHIucHJpY2UgKyAnJyxcbiAgICAgICAgICAgIHIuYm9va2VkX2Ftb3VudCArICcgLyAnICsgci5jb3Vyc2VfYW1vdW50LFxuICAgICAgICAgICAgci5jb2FjaC51c2VyLm5hbWUsXG4gICAgICAgICAgICByLmN1c3RvbWVyLm5hbWUsXG4gICAgICAgICAgICByLmNyZWF0ZWRfYXRcbiAgICAgICAgXSlcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17eyB0YWJsZVJlc3BvbnNpdmU6ICduby1tYXJnaW4tdG9wJyB9fVxuICAgICAgICAgICAgICAgIHRhYmxlSGVhZGVyQ29sb3I9J3ByaW1hcnknXG4gICAgICAgICAgICAgICAgdGFibGVIZWFkPXtoZWFkZXJ9XG4gICAgICAgICAgICAgICAgdGFibGVEYXRhPXt0YWJsZURhdGF9XG4gICAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgZ2V0U2NoZWR1bGVDb3VudEJ5Q29hY2hUYWIgPSAoKSA9PiB7XG4gICAgICAgIGxldCBncm91cHMgPSB0aGlzLnByb3BzLmd5bS5yZXBvcnQuc2NoZWR1bGVDb3VudEJ5Q29hY2hcbiAgICAgICAgaWYgKCFncm91cHMpIHtcbiAgICAgICAgICAgIHJldHVybiA8cD57TC5ub0RhdGF9PC9wPlxuICAgICAgICB9XG4gICAgICAgIGxldCBoZWFkZXIgPSBbTC5jb2FjaCwgTC5Db3VudF1cbiAgICAgICAgbGV0IHRhYmxlRGF0YSA9IFtdXG4gICAgICAgIGxldCBjaGFydERhdGEgPSB7XG4gICAgICAgICAgICBsYWJlbHM6IFtdLFxuICAgICAgICAgICAgc2VyaWVzOiBbXVxuICAgICAgICB9XG4gICAgICAgIGdyb3Vwcy5mb3JFYWNoKHIgPT4ge1xuICAgICAgICAgICAgdGFibGVEYXRhLnB1c2goW3IuY29hY2gudXNlci5uYW1lICsgJycsIHIuY291cnNlX2Ftb3VudCArICcnXSlcbiAgICAgICAgICAgIGNoYXJ0RGF0YS5sYWJlbHMucHVzaChyLmNvYWNoLnVzZXIubmFtZSlcbiAgICAgICAgICAgIGNoYXJ0RGF0YS5zZXJpZXMucHVzaChyLmNvdXJzZV9hbW91bnQpXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IGNoYXJ0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGxhYmVsSW50ZXJwb2xhdGlvbkZuYzogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8R3JpZENvbnRhaW5lciBhbGlnbkl0ZW1zPSdjZW50ZXInPlxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezh9PlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgdGFibGVSZXNwb25zaXZlOiAnbm8tbWFyZ2luLXRvcCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlSGVhZGVyQ29sb3I9J3ByaW1hcnknXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUhlYWQ9e2hlYWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlRGF0YT17dGFibGVEYXRhfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17NH0+XG4gICAgICAgICAgICAgICAgICAgIDxDaGFydGlzdEdyYXBoXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2N0LWNoYXJ0J1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17Y2hhcnREYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nUGllJ1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y2hhcnRPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBnZXRTY2hlZHVsZUNvdW50QnlDdXN0b21lclRhYiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGdyb3VwcyA9IHRoaXMucHJvcHMuZ3ltLnJlcG9ydC5zY2hlZHVsZUNvdW50QnlDdXN0b21lclxuICAgICAgICBpZiAoIWdyb3Vwcykge1xuICAgICAgICAgICAgcmV0dXJuIDxwPntMLm5vRGF0YX08L3A+XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGhlYWRlciA9IFtMLm5hbWUsIEwuQ291bnRdXG4gICAgICAgIGxldCB0YWJsZURhdGEgPSBncm91cHMubWFwKHIgPT4gW1xuICAgICAgICAgICAgci5jdXN0b21lci5uYW1lICsgJycsXG4gICAgICAgICAgICByLmNvdXJzZV9hbW91bnQgKyAnJ1xuICAgICAgICBdKVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGFibGVcbiAgICAgICAgICAgICAgICBjbGFzc2VzPXt7IHRhYmxlUmVzcG9uc2l2ZTogJ25vLW1hcmdpbi10b3AnIH19XG4gICAgICAgICAgICAgICAgdGFibGVIZWFkZXJDb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICAgICAgICB0YWJsZUhlYWQ9e2hlYWRlcn1cbiAgICAgICAgICAgICAgICB0YWJsZURhdGE9e3RhYmxlRGF0YX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICB0YXBUYWIgPSB0YWJJbmRleCA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFRhYkluZGV4OiB0YWJJbmRleCB9LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoKClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGRhdGVTZWxlY3RvciA9IChcbiAgICAgICAgICAgIDxNdWlQaWNrZXJzVXRpbHNQcm92aWRlciB1dGlscz17RGF5anNVdGlsc30gbG9jYWxlPXsnemgtY24nfT5cbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9J01NL1lZWVknXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncmVwb3J0LW1vbnRoLXNlbGVjdG9yJ1xuICAgICAgICAgICAgICAgICAgICBvcGVuVG89J21vbnRoJ1xuICAgICAgICAgICAgICAgICAgICB2aWV3cz17Wyd5ZWFyJywgJ21vbnRoJ119XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZURhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXI+XG4gICAgICAgIClcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgICAgICB0aXRsZT17ZGF0ZVNlbGVjdG9yfVxuICAgICAgICAgICAgICAgIGhlYWRlckNvbG9yPSdwcmltYXJ5J1xuICAgICAgICAgICAgICAgIG9uU3dpdGNoPXt0aGlzLnRhcFRhYn1cbiAgICAgICAgICAgICAgICB0YWJzPXtbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYk5hbWU6IEwuc3VtbWFyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkNvbnRlbnQ6IHRoaXMuZ2V0U3VtbWFyeVRhYigpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYk5hbWU6IEwuc2FsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkNvbnRlbnQ6IHRoaXMuZ2V0U2FsZVRhYigpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYk5hbWU6IEwuY29hY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJDb250ZW50OiB0aGlzLmdldFNjaGVkdWxlQ291bnRCeUNvYWNoVGFiKClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFiTmFtZTogTC5jdXN0b21lcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkNvbnRlbnQ6IHRoaXMuZ2V0U2NoZWR1bGVDb3VudEJ5Q3VzdG9tZXJUYWIoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0b3JlVG9Qcm9wcyA9IHN0b3JlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RlZEd5bTogc3RvcmUuc2V0dGluZy5zZWxlY3RlZEd5bSxcbiAgICAgICAgZ3ltOiBzdG9yZS5neW1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhBY3Rpb25zLCBkaXNwYXRjaClcbiAgICB9XG59XG5cbmNvbnN0IExpbmtlZE1vbnRobHlSZXBvcnQgPSBjb25uZWN0KFxuICAgIG1hcFN0b3JlVG9Qcm9wcyxcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoTW9udGhseVJlcG9ydClcblxuZXhwb3J0IGRlZmF1bHQgTGlua2VkTW9udGhseVJlcG9ydFxuIl0sInNvdXJjZVJvb3QiOiIifQ==