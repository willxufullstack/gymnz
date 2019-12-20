(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./resources/sass/customer.scss":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./resources/sass/customer.scss ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".time-sheet > div {\n  margin: 0 !important;\n}\n.time-sheet .time-cell {\n  text-align: center;\n  color: #666;\n  height: 28px;\n  line-height: 28px;\n  margin: 2px 0;\n  padding: 0 !important;\n}\n.time-sheet .time-cell.active-0, .time-sheet .time-cell.active-1, .time-sheet .time-cell.active-2, .time-sheet .time-cell.active-3 {\n  color: #9c27b0;\n  border-top: solid 2px #9c27b0;\n  border-bottom: solid 2px #9c27b0;\n  line-height: 24px;\n  font-weight: 600;\n}\n.time-sheet .time-cell.active-0 {\n  border-left: solid 2px #9c27b0;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.time-sheet .time-cell.active-3 {\n  border-right: solid 2px #9c27b0;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.time-sheet .time-cell.disabled {\n  color: #999;\n  background: #ececec;\n}\n.time-sheet .time-cell.disabled.active-0, .time-sheet .time-cell.disabled.active-1, .time-sheet .time-cell.disabled.active-2, .time-sheet .time-cell.disabled.active-3 {\n  color: #fff;\n  background: #9c27b0;\n}\n\n.coach-grid {\n  max-height: 65px;\n}\n\n.coach-container {\n  margin-top: 18px;\n  display: -webkit-box;\n  display: flex;\n}\n.coach-container .coach-avatar {\n  margin-right: 6px;\n}\n.coach-container .coach-name {\n  -webkit-box-flex: 1;\n          flex: 1;\n  line-height: 40px;\n}\n.coach-container.active .coach-avatar {\n  background: -webkit-linear-gradient(30deg, #ab47bc, #8e24aa);\n  background: linear-gradient(60deg, #ab47bc, #8e24aa);\n  box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12);\n}\n.coach-container.active .coach-name {\n  color: #9c27b0;\n  font-weight: 600;\n}\n\n.timesheet-container {\n  overflow: hidden;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function memoizeOne(resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = areInputsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  var result = function memoized() {
    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  };

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


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

/***/ "./resources/js/views/Customer/Customers.jsx":
/*!***************************************************!*\
  !*** ./resources/js/views/Customer/Customers.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux_es_connect_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux/es/connect/connect */ "./node_modules/react-redux/es/connect/connect.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions */ "./resources/js/actions/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-table */ "./node_modules/material-table/dist/index.js");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sass_customer_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../sass/customer.scss */ "./resources/sass/customer.scss");
/* harmony import */ var _sass_customer_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sass_customer_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lang */ "./resources/js/lang.js");
var _jsxFileName="/Users/roynwang/Desktop/gymnz/resources/js/views/Customer/Customers.jsx";function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);};var L=Object(_lang__WEBPACK_IMPORTED_MODULE_6__["default"])('Customers');var Customers=function(_React$Component){_inherits(Customers,_React$Component);function Customers(props){var _this;_classCallCheck(this,Customers);_this=_possibleConstructorReturn(this,_getPrototypeOf(Customers).call(this,props));_this.getCustomerListData=function(){return _this.props.gym.customers.map(function(c){return[c.name,c.email,c.sex?L.male:L.female];});};_this.onRowClick=function(_,row){var customerId=row.id;_this.props.history.push({pathname:"customer/".concat(customerId)});};return _this;}_createClass(Customers,[{key:"render",value:function render(){var columns=[{title:L.name,field:'name'},{title:L.phone,field:'email'},{title:L.sex,field:'sex',render:function render(row){return row.sex?L.male:L.female;}}];return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"customers-page",__source:{fileName:_jsxFileName,lineNumber:31}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(material_table__WEBPACK_IMPORTED_MODULE_4___default.a,{title:L.customers,columns:columns,data:this.props.gym.customers,onRowClick:this.onRowClick,options:{pageSize:10,pageSizeOptions:[]},localization:{body:{emptyDataSourceMessage:L.emptyDataSourceMessage},toolbar:{searchTooltip:L.searchTooltip,searchPlaceholder:L.searchPlaceholder}},__source:{fileName:_jsxFileName,lineNumber:32}}));}}]);return Customers;}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);var mapStoreToProps=function mapStoreToProps(store){return{selectedGym:store.setting.selectedGym,gym:store.gym};};function mapDispatchToProps(dispatch){return{actions:Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])(_actions__WEBPACK_IMPORTED_MODULE_2__,dispatch)};}var LinkedCustomers=Object(react_redux_es_connect_connect__WEBPACK_IMPORTED_MODULE_0__["default"])(mapStoreToProps,mapDispatchToProps)(Customers);/* harmony default export */ __webpack_exports__["default"] = (LinkedCustomers);

/***/ }),

/***/ "./resources/sass/customer.scss":
/*!**************************************!*\
  !*** ./resources/sass/customer.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/src??ref--7-2!../../node_modules/sass-loader/lib/loader.js??ref--7-3!./customer.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./resources/sass/customer.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9jdXN0b21lci5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tZW1vaXplLW9uZS9kaXN0L21lbW9pemUtb25lLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmlmbS9kaXN0L3JpZm0uZXNtLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9DdXN0b21lci9DdXN0b21lcnMuanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zYXNzL2N1c3RvbWVyLnNjc3M/OWM4ZiJdLCJuYW1lcyI6WyJMIiwiaTE4TiIsIkN1c3RvbWVycyIsInByb3BzIiwiZ2V0Q3VzdG9tZXJMaXN0RGF0YSIsImd5bSIsImN1c3RvbWVycyIsIm1hcCIsImMiLCJuYW1lIiwiZW1haWwiLCJzZXgiLCJtYWxlIiwiZmVtYWxlIiwib25Sb3dDbGljayIsIl8iLCJyb3ciLCJjdXN0b21lcklkIiwiaWQiLCJoaXN0b3J5IiwicHVzaCIsInBhdGhuYW1lIiwiY29sdW1ucyIsInRpdGxlIiwiZmllbGQiLCJwaG9uZSIsInJlbmRlciIsInBhZ2VTaXplIiwicGFnZVNpemVPcHRpb25zIiwiYm9keSIsImVtcHR5RGF0YVNvdXJjZU1lc3NhZ2UiLCJ0b29sYmFyIiwic2VhcmNoVG9vbHRpcCIsInNlYXJjaFBsYWNlaG9sZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdG9yZVRvUHJvcHMiLCJzdG9yZSIsInNlbGVjdGVkR3ltIiwic2V0dGluZyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYWN0aW9ucyIsImJpbmRBY3Rpb25DcmVhdG9ycyIsIkFjdGlvbnMiLCJMaW5rZWRDdXN0b21lcnMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyxnR0FBK0M7QUFDbEY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLHNCQUFzQix5QkFBeUIs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RFosQ0FFTEMsaUJBQWlCLENBQUVqQyxDQUFDLENBQUNpQyxpQkFGaEIsQ0FKQyxDQVRsQixpREFESSxDQUFSLENBc0JILEMsdUJBM0NtQkMsNENBQUssQ0FBQ0MsUyxFQThDOUIsR0FBTUMsZ0JBQWUsQ0FBRyxRQUFsQkEsZ0JBQWtCLENBQUNDLEtBQUQsQ0FBVyxDQUMvQixNQUFPLENBQ0hDLFdBQVcsQ0FBRUQsS0FBSyxDQUFDRSxPQUFOLENBQWNELFdBRHhCLENBRUhqQyxHQUFHLENBQUVnQyxLQUFLLENBQUNoQyxHQUZSLENBQVAsQ0FJSCxDQUxELENBT0EsUUFBU21DLG1CQUFULENBQTRCQyxRQUE1QixDQUFzQyxDQUNsQyxNQUFPLENBQ0hDLE9BQU8sQ0FBRUMsZ0VBQWtCLENBQUNDLHFDQUFELENBQVVILFFBQVYsQ0FEeEIsQ0FBUCxDQUdILENBRUQsR0FBTUksZ0JBQWUsQ0FBR0MsOEVBQU8sQ0FDM0JWLGVBRDJCLENBRTNCSSxrQkFGMkIsQ0FBUCxDQUd0QnRDLFNBSHNCLENBQXhCLENBS2UyQyw4RUFBZixFOzs7Ozs7Ozs7Ozs7QUN4RUEsY0FBYyxtQkFBTyxDQUFDLHNUQUEwSzs7QUFFaE0sNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNHQUFtRDs7QUFFeEU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiIxOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRpbWUtc2hlZXQgPiBkaXYge1xcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxufVxcbi50aW1lLXNoZWV0IC50aW1lLWNlbGwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICM2NjY7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBsaW5lLWhlaWdodDogMjhweDtcXG4gIG1hcmdpbjogMnB4IDA7XFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxufVxcbi50aW1lLXNoZWV0IC50aW1lLWNlbGwuYWN0aXZlLTAsIC50aW1lLXNoZWV0IC50aW1lLWNlbGwuYWN0aXZlLTEsIC50aW1lLXNoZWV0IC50aW1lLWNlbGwuYWN0aXZlLTIsIC50aW1lLXNoZWV0IC50aW1lLWNlbGwuYWN0aXZlLTMge1xcbiAgY29sb3I6ICM5YzI3YjA7XFxuICBib3JkZXItdG9wOiBzb2xpZCAycHggIzljMjdiMDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjOWMyN2IwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4udGltZS1zaGVldCAudGltZS1jZWxsLmFjdGl2ZS0wIHtcXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggIzljMjdiMDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcXG59XFxuLnRpbWUtc2hlZXQgLnRpbWUtY2VsbC5hY3RpdmUtMyB7XFxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCAjOWMyN2IwO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XFxufVxcbi50aW1lLXNoZWV0IC50aW1lLWNlbGwuZGlzYWJsZWQge1xcbiAgY29sb3I6ICM5OTk7XFxuICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xcbn1cXG4udGltZS1zaGVldCAudGltZS1jZWxsLmRpc2FibGVkLmFjdGl2ZS0wLCAudGltZS1zaGVldCAudGltZS1jZWxsLmRpc2FibGVkLmFjdGl2ZS0xLCAudGltZS1zaGVldCAudGltZS1jZWxsLmRpc2FibGVkLmFjdGl2ZS0yLCAudGltZS1zaGVldCAudGltZS1jZWxsLmRpc2FibGVkLmFjdGl2ZS0zIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogIzljMjdiMDtcXG59XFxuXFxuLmNvYWNoLWdyaWQge1xcbiAgbWF4LWhlaWdodDogNjVweDtcXG59XFxuXFxuLmNvYWNoLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAxOHB4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uY29hY2gtY29udGFpbmVyIC5jb2FjaC1hdmF0YXIge1xcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxufVxcbi5jb2FjaC1jb250YWluZXIgLmNvYWNoLW5hbWUge1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAgICAgZmxleDogMTtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbn1cXG4uY29hY2gtY29udGFpbmVyLmFjdGl2ZSAuY29hY2gtYXZhdGFyIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDMwZGVnLCAjYWI0N2JjLCAjOGUyNGFhKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgI2FiNDdiYywgIzhlMjRhYSk7XFxuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDE1NiwgMzksIDE3NiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDE1NiwgMzksIDE3NiwgMC4xMik7XFxufVxcbi5jb2FjaC1jb250YWluZXIuYWN0aXZlIC5jb2FjaC1uYW1lIHtcXG4gIGNvbG9yOiAjOWMyN2IwO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnRpbWVzaGVldC1jb250YWluZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZnVuY3Rpb24gYXJlSW5wdXRzRXF1YWwobmV3SW5wdXRzLCBsYXN0SW5wdXRzKSB7XG4gIGlmIChuZXdJbnB1dHMubGVuZ3RoICE9PSBsYXN0SW5wdXRzLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3SW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG5ld0lucHV0c1tpXSAhPT0gbGFzdElucHV0c1tpXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBtZW1vaXplT25lKHJlc3VsdEZuLCBpc0VxdWFsKSB7XG4gIGlmIChpc0VxdWFsID09PSB2b2lkIDApIHtcbiAgICBpc0VxdWFsID0gYXJlSW5wdXRzRXF1YWw7XG4gIH1cblxuICB2YXIgbGFzdFRoaXM7XG4gIHZhciBsYXN0QXJncyA9IFtdO1xuICB2YXIgbGFzdFJlc3VsdDtcbiAgdmFyIGNhbGxlZE9uY2UgPSBmYWxzZTtcblxuICB2YXIgcmVzdWx0ID0gZnVuY3Rpb24gbWVtb2l6ZWQoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG5ld0FyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBuZXdBcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChjYWxsZWRPbmNlICYmIGxhc3RUaGlzID09PSB0aGlzICYmIGlzRXF1YWwobmV3QXJncywgbGFzdEFyZ3MpKSB7XG4gICAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgICB9XG5cbiAgICBsYXN0UmVzdWx0ID0gcmVzdWx0Rm4uYXBwbHkodGhpcywgbmV3QXJncyk7XG4gICAgY2FsbGVkT25jZSA9IHRydWU7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RBcmdzID0gbmV3QXJncztcbiAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplT25lO1xuIiwiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG52YXIgUmlmbSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShSaWZtLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSaWZtKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuX3N0YXRlID0gbnVsbDtcbiAgICBfdGhpcy5fZGVsID0gZmFsc2U7XG5cbiAgICBfdGhpcy5faGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGV2dC50YXJnZXQudHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdSaWZtIGRvZXMgbm90IHN1cHBvcnQgaW5wdXQgdHlwZT1udW1iZXIsIHVzZSB0eXBlPXRlbCBpbnN0ZWFkLicpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSAvLyBGVVRVUkU6IHVzZSBldnQubmF0aXZlRXZlbnQuaW5wdXRUeXBlIGZvciBkZWwgZXZlbnQsIHNlZSBjb21tZW50cyBhdCBvbmtleWRvd25cblxuXG4gICAgICB2YXIgc3RhdGVWYWx1ZSA9IF90aGlzLnN0YXRlLnZhbHVlO1xuICAgICAgdmFyIHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZTtcbiAgICAgIHZhciBpbnB1dCA9IGV2dC50YXJnZXQ7XG4gICAgICB2YXIgb3AgPSB2YWx1ZS5sZW5ndGggPiBzdGF0ZVZhbHVlLmxlbmd0aDtcbiAgICAgIHZhciBkZWwgPSBfdGhpcy5fZGVsO1xuXG4gICAgICB2YXIgbm9PcCA9IHN0YXRlVmFsdWUgPT09IF90aGlzLnByb3BzLmZvcm1hdCh2YWx1ZSk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBsb2NhbDogdHJ1ZVxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZWN0aW9uU3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgdmFyIHJlZnVzZSA9IF90aGlzLnByb3BzLnJlZnVzZSB8fCAvW15cXGRdKy9nO1xuICAgICAgICB2YXIgYmVmb3JlID0gdmFsdWUuc3Vic3RyKDAsIHNlbGVjdGlvblN0YXJ0KS5yZXBsYWNlKHJlZnVzZSwgJycpO1xuICAgICAgICBfdGhpcy5fc3RhdGUgPSB7XG4gICAgICAgICAgaW5wdXQ6IGlucHV0LFxuICAgICAgICAgIGJlZm9yZTogYmVmb3JlLFxuICAgICAgICAgIG9wOiBvcCxcbiAgICAgICAgICBkaTogZGVsICYmIG5vT3AsXG4gICAgICAgICAgZGVsOiBkZWxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoX3RoaXMucHJvcHMucmVwbGFjZSAmJiBfdGhpcy5wcm9wcy5yZXBsYWNlKHN0YXRlVmFsdWUpICYmIG9wICYmICFub09wKSB7XG4gICAgICAgICAgdmFyIHN0YXJ0ID0gLTE7XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSAhPT0gYmVmb3JlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBzdGFydCA9IE1hdGgubWF4KHN0YXJ0LCB2YWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoYmVmb3JlW2ldLnRvTG93ZXJDYXNlKCksIHN0YXJ0ICsgMSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBjID0gdmFsdWUuc3Vic3RyKHN0YXJ0ICsgMSkucmVwbGFjZShyZWZ1c2UsICcnKVswXTtcbiAgICAgICAgICBzdGFydCA9IHZhbHVlLmluZGV4T2YoYywgc3RhcnQgKyAxKTtcbiAgICAgICAgICB2YWx1ZSA9IFwiXCIgKyB2YWx1ZS5zdWJzdHIoMCwgc3RhcnQpICsgdmFsdWUuc3Vic3RyKHN0YXJ0ICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZnYgPSBfdGhpcy5wcm9wcy5mb3JtYXQodmFsdWUpO1xuXG4gICAgICAgIGlmIChzdGF0ZVZhbHVlID09PSBmdikge1xuICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uQ2hhbmdlKGZ2KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLl9oS0QgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZiAoZXZ0LmNvZGUgPT09ICdEZWxldGUnKSB7XG4gICAgICAgIF90aGlzLl9kZWwgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5faEtVID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYgKGV2dC5jb2RlID09PSAnRGVsZXRlJykge1xuICAgICAgICBfdGhpcy5fZGVsID0gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IHByb3BzLnZhbHVlLFxuICAgICAgbG9jYWw6IHRydWVcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFJpZm0uZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogc3RhdGUubG9jYWwgPyBzdGF0ZS52YWx1ZSA6IHByb3BzLnZhbHVlLFxuICAgICAgbG9jYWw6IGZhbHNlXG4gICAgfTtcbiAgfTtcblxuICB2YXIgX3Byb3RvID0gUmlmbS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX2hhbmRsZUNoYW5nZSA9IHRoaXMuX2hhbmRsZUNoYW5nZSxcbiAgICAgICAgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlLFxuICAgICAgICBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgcmV0dXJuIGNoaWxkcmVuKHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIG9uQ2hhbmdlOiBfaGFuZGxlQ2hhbmdlXG4gICAgfSk7XG4gIH0gLy8gZGVsZXRlIHdoZW4gIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9JbnB1dEV2ZW50L2lucHV0VHlwZSB3aWxsIGJlIHN1cHBvcnRlZCBieSBhbGwgbWFqb3IgYnJvd3NlcnNcbiAgO1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oS0QpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5faEtVKTtcbiAgfSAvLyBkZWxldGUgd2hlbiAgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0lucHV0RXZlbnQvaW5wdXRUeXBlIHdpbGwgYmUgc3VwcG9ydGVkIGJ5IGFsbCBtYWpvciBicm93c2Vyc1xuICA7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hLRCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9oS1UpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdmFyIF9zdGF0ZSA9IHRoaXMuX3N0YXRlO1xuXG4gICAgaWYgKF9zdGF0ZSkge1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICAgIHZhciBzdGFydCA9IC0xO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSAhPT0gX3N0YXRlLmJlZm9yZS5sZW5ndGg7ICsraSkge1xuICAgICAgICBzdGFydCA9IE1hdGgubWF4KHN0YXJ0LCB2YWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoX3N0YXRlLmJlZm9yZVtpXS50b0xvd2VyQ2FzZSgpLCBzdGFydCArIDEpKTtcbiAgICAgIH0gLy8gZm9ybWF0IHVzdWFsbHkgbG9va3MgYmV0dGVyIHdpdGhvdXQgdGhpc1xuXG5cbiAgICAgIGlmICh0aGlzLnByb3BzLnJlcGxhY2UgJiYgKF9zdGF0ZS5vcCB8fCBfc3RhdGUuZGVsICYmICFfc3RhdGUuZGkpKSB7XG4gICAgICAgIHdoaWxlICh2YWx1ZVtzdGFydCArIDFdICYmICh0aGlzLnByb3BzLnJlZnVzZSB8fCAvW15cXGRdKy8pLnRlc3QodmFsdWVbc3RhcnQgKyAxXSkpIHtcbiAgICAgICAgICBzdGFydCArPSAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF9zdGF0ZS5pbnB1dC5zZWxlY3Rpb25TdGFydCA9IF9zdGF0ZS5pbnB1dC5zZWxlY3Rpb25FbmQgPSBzdGFydCArIDEgKyAoX3N0YXRlLmRpID8gMSA6IDApO1xuICAgIH1cblxuICAgIHRoaXMuX3N0YXRlID0gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gUmlmbTtcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IHsgUmlmbSB9O1xuIiwiaW1wb3J0IGNvbm5lY3QgZnJvbSBcInJlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvY29ubmVjdFwiO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gXCIuLi8uLi9hY3Rpb25zXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7O1xuaW1wb3J0IE1hdGVyaWFsVGFibGUgZnJvbSAnbWF0ZXJpYWwtdGFibGUnO1xuaW1wb3J0IFwiLi4vLi4vLi4vc2Fzcy9jdXN0b21lci5zY3NzXCJcbmltcG9ydCBpMThOIGZyb20gJy4uLy4uL2xhbmcnXG5cbmNvbnN0IEwgPSBpMThOKCdDdXN0b21lcnMnKVxuY2xhc3MgQ3VzdG9tZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgZ2V0Q3VzdG9tZXJMaXN0RGF0YSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZ3ltLmN1c3RvbWVycy5tYXAoYyA9PiBbYy5uYW1lLCBjLmVtYWlsLCBjLnNleCA/IEwubWFsZSA6IEwuZmVtYWxlXSk7XG4gICAgfTtcblxuICAgIG9uUm93Q2xpY2sgPSAoXywgcm93KSA9PiB7XG4gICAgICAgIGxldCBjdXN0b21lcklkID0gcm93LmlkO1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh7IHBhdGhuYW1lOiBgY3VzdG9tZXIvJHtjdXN0b21lcklkfWAgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IFtcbiAgICAgICAgICAgIHsgdGl0bGU6IEwubmFtZSwgZmllbGQ6ICduYW1lJyB9LFxuICAgICAgICAgICAgeyB0aXRsZTogTC5waG9uZSwgZmllbGQ6ICdlbWFpbCcgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6IEwuc2V4LCBmaWVsZDogJ3NleCcsIHJlbmRlcjogcm93ID0+IHJvdy5zZXggPyBMLm1hbGUgOiBMLmZlbWFsZSB9XG4gICAgICAgIF1cblxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPSdjdXN0b21lcnMtcGFnZScgPlxuICAgICAgICAgICAgPE1hdGVyaWFsVGFibGVcbiAgICAgICAgICAgICAgICB0aXRsZT17TC5jdXN0b21lcnN9XG4gICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICBkYXRhPXt0aGlzLnByb3BzLmd5bS5jdXN0b21lcnN9XG4gICAgICAgICAgICAgICAgb25Sb3dDbGljaz17dGhpcy5vblJvd0NsaWNrfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwLFxuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZU9wdGlvbnM6IFtdXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBsb2NhbGl6YXRpb249e3tcbiAgICAgICAgICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHlEYXRhU291cmNlTWVzc2FnZTogTC5lbXB0eURhdGFTb3VyY2VNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFRvb2x0aXA6IEwuc2VhcmNoVG9vbHRpcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFBsYWNlaG9sZGVyOiBMLnNlYXJjaFBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj4pO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RvcmVUb1Byb3BzID0gKHN0b3JlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0ZWRHeW06IHN0b3JlLnNldHRpbmcuc2VsZWN0ZWRHeW0sXG4gICAgICAgIGd5bTogc3RvcmUuZ3ltLFxuICAgIH07XG59O1xuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoQWN0aW9ucywgZGlzcGF0Y2gpXG4gICAgfTtcbn1cblxuY29uc3QgTGlua2VkQ3VzdG9tZXJzID0gY29ubmVjdChcbiAgICBtYXBTdG9yZVRvUHJvcHMsXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKEN1c3RvbWVycyk7XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtlZEN1c3RvbWVyczsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4vY3VzdG9tZXIuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4vY3VzdG9tZXIuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuL2N1c3RvbWVyLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9