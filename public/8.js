(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/chartist/dist/chartist.js":
/*!************************************************!*\
  !*** ./node_modules/chartist/dist/chartist.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return (root['Chartist'] = factory());
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {

/* Chartist.js 0.10.0
 * Copyright © 2016 Gion Kunz
 * Free to use under either the WTFPL license or the MIT license.
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-WTFPL
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-MIT
 */
/**
 * The core module of Chartist that is mainly providing static functions and higher level functions for chart modules.
 *
 * @module Chartist.Core
 */
var Chartist = {
  version: '0.10.0'
};

(function (window, document, Chartist) {
  'use strict';

  /**
   * This object contains all namespaces used within Chartist.
   *
   * @memberof Chartist.Core
   * @type {{svg: string, xmlns: string, xhtml: string, xlink: string, ct: string}}
   */
  Chartist.namespaces = {
    svg: 'http://www.w3.org/2000/svg',
    xmlns: 'http://www.w3.org/2000/xmlns/',
    xhtml: 'http://www.w3.org/1999/xhtml',
    xlink: 'http://www.w3.org/1999/xlink',
    ct: 'http://gionkunz.github.com/chartist-js/ct'
  };

  /**
   * Helps to simplify functional style code
   *
   * @memberof Chartist.Core
   * @param {*} n This exact value will be returned by the noop function
   * @return {*} The same value that was provided to the n parameter
   */
  Chartist.noop = function (n) {
    return n;
  };

  /**
   * Generates a-z from a number 0 to 26
   *
   * @memberof Chartist.Core
   * @param {Number} n A number from 0 to 26 that will result in a letter a-z
   * @return {String} A character from a-z based on the input number n
   */
  Chartist.alphaNumerate = function (n) {
    // Limit to a-z
    return String.fromCharCode(97 + n % 26);
  };

  /**
   * Simple recursive object extend
   *
   * @memberof Chartist.Core
   * @param {Object} target Target object where the source will be merged into
   * @param {Object...} sources This object (objects) will be merged into target and then target is returned
   * @return {Object} An object that has the same reference as target but is extended and merged with the properties of source
   */
  Chartist.extend = function (target) {
    var i, source, sourceProp;
    target = target || {};

    for (i = 1; i < arguments.length; i++) {
      source = arguments[i];
      for (var prop in source) {
        sourceProp = source[prop];
        if (typeof sourceProp === 'object' && sourceProp !== null && !(sourceProp instanceof Array)) {
          target[prop] = Chartist.extend(target[prop], sourceProp);
        } else {
          target[prop] = sourceProp;
        }
      }
    }

    return target;
  };

  /**
   * Replaces all occurrences of subStr in str with newSubStr and returns a new string.
   *
   * @memberof Chartist.Core
   * @param {String} str
   * @param {String} subStr
   * @param {String} newSubStr
   * @return {String}
   */
  Chartist.replaceAll = function(str, subStr, newSubStr) {
    return str.replace(new RegExp(subStr, 'g'), newSubStr);
  };

  /**
   * Converts a number to a string with a unit. If a string is passed then this will be returned unmodified.
   *
   * @memberof Chartist.Core
   * @param {Number} value
   * @param {String} unit
   * @return {String} Returns the passed number value with unit.
   */
  Chartist.ensureUnit = function(value, unit) {
    if(typeof value === 'number') {
      value = value + unit;
    }

    return value;
  };

  /**
   * Converts a number or string to a quantity object.
   *
   * @memberof Chartist.Core
   * @param {String|Number} input
   * @return {Object} Returns an object containing the value as number and the unit as string.
   */
  Chartist.quantity = function(input) {
    if (typeof input === 'string') {
      var match = (/^(\d+)\s*(.*)$/g).exec(input);
      return {
        value : +match[1],
        unit: match[2] || undefined
      };
    }
    return { value: input };
  };

  /**
   * This is a wrapper around document.querySelector that will return the query if it's already of type Node
   *
   * @memberof Chartist.Core
   * @param {String|Node} query The query to use for selecting a Node or a DOM node that will be returned directly
   * @return {Node}
   */
  Chartist.querySelector = function(query) {
    return query instanceof Node ? query : document.querySelector(query);
  };

  /**
   * Functional style helper to produce array with given length initialized with undefined values
   *
   * @memberof Chartist.Core
   * @param length
   * @return {Array}
   */
  Chartist.times = function(length) {
    return Array.apply(null, new Array(length));
  };

  /**
   * Sum helper to be used in reduce functions
   *
   * @memberof Chartist.Core
   * @param previous
   * @param current
   * @return {*}
   */
  Chartist.sum = function(previous, current) {
    return previous + (current ? current : 0);
  };

  /**
   * Multiply helper to be used in `Array.map` for multiplying each value of an array with a factor.
   *
   * @memberof Chartist.Core
   * @param {Number} factor
   * @returns {Function} Function that can be used in `Array.map` to multiply each value in an array
   */
  Chartist.mapMultiply = function(factor) {
    return function(num) {
      return num * factor;
    };
  };

  /**
   * Add helper to be used in `Array.map` for adding a addend to each value of an array.
   *
   * @memberof Chartist.Core
   * @param {Number} addend
   * @returns {Function} Function that can be used in `Array.map` to add a addend to each value in an array
   */
  Chartist.mapAdd = function(addend) {
    return function(num) {
      return num + addend;
    };
  };

  /**
   * Map for multi dimensional arrays where their nested arrays will be mapped in serial. The output array will have the length of the largest nested array. The callback function is called with variable arguments where each argument is the nested array value (or undefined if there are no more values).
   *
   * @memberof Chartist.Core
   * @param arr
   * @param cb
   * @return {Array}
   */
  Chartist.serialMap = function(arr, cb) {
    var result = [],
        length = Math.max.apply(null, arr.map(function(e) {
          return e.length;
        }));

    Chartist.times(length).forEach(function(e, index) {
      var args = arr.map(function(e) {
        return e[index];
      });

      result[index] = cb.apply(null, args);
    });

    return result;
  };

  /**
   * This helper function can be used to round values with certain precision level after decimal. This is used to prevent rounding errors near float point precision limit.
   *
   * @memberof Chartist.Core
   * @param {Number} value The value that should be rounded with precision
   * @param {Number} [digits] The number of digits after decimal used to do the rounding
   * @returns {number} Rounded value
   */
  Chartist.roundWithPrecision = function(value, digits) {
    var precision = Math.pow(10, digits || Chartist.precision);
    return Math.round(value * precision) / precision;
  };

  /**
   * Precision level used internally in Chartist for rounding. If you require more decimal places you can increase this number.
   *
   * @memberof Chartist.Core
   * @type {number}
   */
  Chartist.precision = 8;

  /**
   * A map with characters to escape for strings to be safely used as attribute values.
   *
   * @memberof Chartist.Core
   * @type {Object}
   */
  Chartist.escapingMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#039;'
  };

  /**
   * This function serializes arbitrary data to a string. In case of data that can't be easily converted to a string, this function will create a wrapper object and serialize the data using JSON.stringify. The outcoming string will always be escaped using Chartist.escapingMap.
   * If called with null or undefined the function will return immediately with null or undefined.
   *
   * @memberof Chartist.Core
   * @param {Number|String|Object} data
   * @return {String}
   */
  Chartist.serialize = function(data) {
    if(data === null || data === undefined) {
      return data;
    } else if(typeof data === 'number') {
      data = ''+data;
    } else if(typeof data === 'object') {
      data = JSON.stringify({data: data});
    }

    return Object.keys(Chartist.escapingMap).reduce(function(result, key) {
      return Chartist.replaceAll(result, key, Chartist.escapingMap[key]);
    }, data);
  };

  /**
   * This function de-serializes a string previously serialized with Chartist.serialize. The string will always be unescaped using Chartist.escapingMap before it's returned. Based on the input value the return type can be Number, String or Object. JSON.parse is used with try / catch to see if the unescaped string can be parsed into an Object and this Object will be returned on success.
   *
   * @memberof Chartist.Core
   * @param {String} data
   * @return {String|Number|Object}
   */
  Chartist.deserialize = function(data) {
    if(typeof data !== 'string') {
      return data;
    }

    data = Object.keys(Chartist.escapingMap).reduce(function(result, key) {
      return Chartist.replaceAll(result, Chartist.escapingMap[key], key);
    }, data);

    try {
      data = JSON.parse(data);
      data = data.data !== undefined ? data.data : data;
    } catch(e) {}

    return data;
  };

  /**
   * Create or reinitialize the SVG element for the chart
   *
   * @memberof Chartist.Core
   * @param {Node} container The containing DOM Node object that will be used to plant the SVG element
   * @param {String} width Set the width of the SVG element. Default is 100%
   * @param {String} height Set the height of the SVG element. Default is 100%
   * @param {String} className Specify a class to be added to the SVG element
   * @return {Object} The created/reinitialized SVG element
   */
  Chartist.createSvg = function (container, width, height, className) {
    var svg;

    width = width || '100%';
    height = height || '100%';

    // Check if there is a previous SVG element in the container that contains the Chartist XML namespace and remove it
    // Since the DOM API does not support namespaces we need to manually search the returned list http://www.w3.org/TR/selectors-api/
    Array.prototype.slice.call(container.querySelectorAll('svg')).filter(function filterChartistSvgObjects(svg) {
      return svg.getAttributeNS(Chartist.namespaces.xmlns, 'ct');
    }).forEach(function removePreviousElement(svg) {
      container.removeChild(svg);
    });

    // Create svg object with width and height or use 100% as default
    svg = new Chartist.Svg('svg').attr({
      width: width,
      height: height
    }).addClass(className).attr({
      style: 'width: ' + width + '; height: ' + height + ';'
    });

    // Add the DOM node to our container
    container.appendChild(svg._node);

    return svg;
  };

  /**
   * Ensures that the data object passed as second argument to the charts is present and correctly initialized.
   *
   * @param  {Object} data The data object that is passed as second argument to the charts
   * @return {Object} The normalized data object
   */
  Chartist.normalizeData = function(data, reverse, multi) {
    var labelCount;
    var output = {
      raw: data,
      normalized: {}
    };

    // Check if we should generate some labels based on existing series data
    output.normalized.series = Chartist.getDataArray({
      series: data.series || []
    }, reverse, multi);

    // If all elements of the normalized data array are arrays we're dealing with
    // multi series data and we need to find the largest series if they are un-even
    if (output.normalized.series.every(function(value) {
        return value instanceof Array;
      })) {
      // Getting the series with the the most elements
      labelCount = Math.max.apply(null, output.normalized.series.map(function(series) {
        return series.length;
      }));
    } else {
      // We're dealing with Pie data so we just take the normalized array length
      labelCount = output.normalized.series.length;
    }

    output.normalized.labels = (data.labels || []).slice();
    // Padding the labels to labelCount with empty strings
    Array.prototype.push.apply(
      output.normalized.labels,
      Chartist.times(Math.max(0, labelCount - output.normalized.labels.length)).map(function() {
        return '';
      })
    );

    if(reverse) {
      Chartist.reverseData(output.normalized);
    }

    return output;
  };

  /**
   * This function safely checks if an objects has an owned property.
   *
   * @param {Object} object The object where to check for a property
   * @param {string} property The property name
   * @returns {boolean} Returns true if the object owns the specified property
   */
  Chartist.safeHasProperty = function(object, property) {
    return object !== null &&
      typeof object === 'object' &&
      object.hasOwnProperty(property);
  };

  /**
   * Checks if a value is considered a hole in the data series.
   *
   * @param {*} value
   * @returns {boolean} True if the value is considered a data hole
   */
  Chartist.isDataHoleValue = function(value) {
    return value === null ||
      value === undefined ||
      (typeof value === 'number' && isNaN(value));
  };

  /**
   * Reverses the series, labels and series data arrays.
   *
   * @memberof Chartist.Core
   * @param data
   */
  Chartist.reverseData = function(data) {
    data.labels.reverse();
    data.series.reverse();
    for (var i = 0; i < data.series.length; i++) {
      if(typeof(data.series[i]) === 'object' && data.series[i].data !== undefined) {
        data.series[i].data.reverse();
      } else if(data.series[i] instanceof Array) {
        data.series[i].reverse();
      }
    }
  };

  /**
   * Convert data series into plain array
   *
   * @memberof Chartist.Core
   * @param {Object} data The series object that contains the data to be visualized in the chart
   * @param {Boolean} [reverse] If true the whole data is reversed by the getDataArray call. This will modify the data object passed as first parameter. The labels as well as the series order is reversed. The whole series data arrays are reversed too.
   * @param {Boolean} [multi] Create a multi dimensional array from a series data array where a value object with `x` and `y` values will be created.
   * @return {Array} A plain array that contains the data to be visualized in the chart
   */
  Chartist.getDataArray = function(data, reverse, multi) {
    // Recursively walks through nested arrays and convert string values to numbers and objects with value properties
    // to values. Check the tests in data core -> data normalization for a detailed specification of expected values
    function recursiveConvert(value) {
      if(Chartist.safeHasProperty(value, 'value')) {
        // We are dealing with value object notation so we need to recurse on value property
        return recursiveConvert(value.value);
      } else if(Chartist.safeHasProperty(value, 'data')) {
        // We are dealing with series object notation so we need to recurse on data property
        return recursiveConvert(value.data);
      } else if(value instanceof Array) {
        // Data is of type array so we need to recurse on the series
        return value.map(recursiveConvert);
      } else if(Chartist.isDataHoleValue(value)) {
        // We're dealing with a hole in the data and therefore need to return undefined
        // We're also returning undefined for multi value output
        return undefined;
      } else {
        // We need to prepare multi value output (x and y data)
        if(multi) {
          var multiValue = {};

          // Single series value arrays are assumed to specify the Y-Axis value
          // For example: [1, 2] => [{x: undefined, y: 1}, {x: undefined, y: 2}]
          // If multi is a string then it's assumed that it specified which dimension should be filled as default
          if(typeof multi === 'string') {
            multiValue[multi] = Chartist.getNumberOrUndefined(value);
          } else {
            multiValue.y = Chartist.getNumberOrUndefined(value);
          }

          multiValue.x = value.hasOwnProperty('x') ? Chartist.getNumberOrUndefined(value.x) : multiValue.x;
          multiValue.y = value.hasOwnProperty('y') ? Chartist.getNumberOrUndefined(value.y) : multiValue.y;

          return multiValue;

        } else {
          // We can return simple data
          return Chartist.getNumberOrUndefined(value);
        }
      }
    }

    return data.series.map(recursiveConvert);
  };

  /**
   * Converts a number into a padding object.
   *
   * @memberof Chartist.Core
   * @param {Object|Number} padding
   * @param {Number} [fallback] This value is used to fill missing values if a incomplete padding object was passed
   * @returns {Object} Returns a padding object containing top, right, bottom, left properties filled with the padding number passed in as argument. If the argument is something else than a number (presumably already a correct padding object) then this argument is directly returned.
   */
  Chartist.normalizePadding = function(padding, fallback) {
    fallback = fallback || 0;

    return typeof padding === 'number' ? {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    } : {
      top: typeof padding.top === 'number' ? padding.top : fallback,
      right: typeof padding.right === 'number' ? padding.right : fallback,
      bottom: typeof padding.bottom === 'number' ? padding.bottom : fallback,
      left: typeof padding.left === 'number' ? padding.left : fallback
    };
  };

  Chartist.getMetaData = function(series, index) {
    var value = series.data ? series.data[index] : series[index];
    return value ? value.meta : undefined;
  };

  /**
   * Calculate the order of magnitude for the chart scale
   *
   * @memberof Chartist.Core
   * @param {Number} value The value Range of the chart
   * @return {Number} The order of magnitude
   */
  Chartist.orderOfMagnitude = function (value) {
    return Math.floor(Math.log(Math.abs(value)) / Math.LN10);
  };

  /**
   * Project a data length into screen coordinates (pixels)
   *
   * @memberof Chartist.Core
   * @param {Object} axisLength The svg element for the chart
   * @param {Number} length Single data value from a series array
   * @param {Object} bounds All the values to set the bounds of the chart
   * @return {Number} The projected data length in pixels
   */
  Chartist.projectLength = function (axisLength, length, bounds) {
    return length / bounds.range * axisLength;
  };

  /**
   * Get the height of the area in the chart for the data series
   *
   * @memberof Chartist.Core
   * @param {Object} svg The svg element for the chart
   * @param {Object} options The Object that contains all the optional values for the chart
   * @return {Number} The height of the area in the chart for the data series
   */
  Chartist.getAvailableHeight = function (svg, options) {
    return Math.max((Chartist.quantity(options.height).value || svg.height()) - (options.chartPadding.top +  options.chartPadding.bottom) - options.axisX.offset, 0);
  };

  /**
   * Get highest and lowest value of data array. This Array contains the data that will be visualized in the chart.
   *
   * @memberof Chartist.Core
   * @param {Array} data The array that contains the data to be visualized in the chart
   * @param {Object} options The Object that contains the chart options
   * @param {String} dimension Axis dimension 'x' or 'y' used to access the correct value and high / low configuration
   * @return {Object} An object that contains the highest and lowest value that will be visualized on the chart.
   */
  Chartist.getHighLow = function (data, options, dimension) {
    // TODO: Remove workaround for deprecated global high / low config. Axis high / low configuration is preferred
    options = Chartist.extend({}, options, dimension ? options['axis' + dimension.toUpperCase()] : {});

    var highLow = {
        high: options.high === undefined ? -Number.MAX_VALUE : +options.high,
        low: options.low === undefined ? Number.MAX_VALUE : +options.low
      };
    var findHigh = options.high === undefined;
    var findLow = options.low === undefined;

    // Function to recursively walk through arrays and find highest and lowest number
    function recursiveHighLow(data) {
      if(data === undefined) {
        return undefined;
      } else if(data instanceof Array) {
        for (var i = 0; i < data.length; i++) {
          recursiveHighLow(data[i]);
        }
      } else {
        var value = dimension ? +data[dimension] : +data;

        if (findHigh && value > highLow.high) {
          highLow.high = value;
        }

        if (findLow && value < highLow.low) {
          highLow.low = value;
        }
      }
    }

    // Start to find highest and lowest number recursively
    if(findHigh || findLow) {
      recursiveHighLow(data);
    }

    // Overrides of high / low based on reference value, it will make sure that the invisible reference value is
    // used to generate the chart. This is useful when the chart always needs to contain the position of the
    // invisible reference value in the view i.e. for bipolar scales.
    if (options.referenceValue || options.referenceValue === 0) {
      highLow.high = Math.max(options.referenceValue, highLow.high);
      highLow.low = Math.min(options.referenceValue, highLow.low);
    }

    // If high and low are the same because of misconfiguration or flat data (only the same value) we need
    // to set the high or low to 0 depending on the polarity
    if (highLow.high <= highLow.low) {
      // If both values are 0 we set high to 1
      if (highLow.low === 0) {
        highLow.high = 1;
      } else if (highLow.low < 0) {
        // If we have the same negative value for the bounds we set bounds.high to 0
        highLow.high = 0;
      } else if (highLow.high > 0) {
        // If we have the same positive value for the bounds we set bounds.low to 0
        highLow.low = 0;
      } else {
        // If data array was empty, values are Number.MAX_VALUE and -Number.MAX_VALUE. Set bounds to prevent errors
        highLow.high = 1;
        highLow.low = 0;
      }
    }

    return highLow;
  };

  /**
   * Checks if a value can be safely coerced to a number. This includes all values except null which result in finite numbers when coerced. This excludes NaN, since it's not finite.
   *
   * @memberof Chartist.Core
   * @param value
   * @returns {Boolean}
   */
  Chartist.isNumeric = function(value) {
    return value === null ? false : isFinite(value);
  };

  /**
   * Returns true on all falsey values except the numeric value 0.
   *
   * @memberof Chartist.Core
   * @param value
   * @returns {boolean}
   */
  Chartist.isFalseyButZero = function(value) {
    return !value && value !== 0;
  };

  /**
   * Returns a number if the passed parameter is a valid number or the function will return undefined. On all other values than a valid number, this function will return undefined.
   *
   * @memberof Chartist.Core
   * @param value
   * @returns {*}
   */
  Chartist.getNumberOrUndefined = function(value) {
    return Chartist.isNumeric(value) ? +value : undefined;
  };

  /**
   * Checks if provided value object is multi value (contains x or y properties)
   *
   * @memberof Chartist.Core
   * @param value
   */
  Chartist.isMultiValue = function(value) {
    return typeof value === 'object' && ('x' in value || 'y' in value);
  };

  /**
   * Gets a value from a dimension `value.x` or `value.y` while returning value directly if it's a valid numeric value. If the value is not numeric and it's falsey this function will return `defaultValue`.
   *
   * @memberof Chartist.Core
   * @param value
   * @param dimension
   * @param defaultValue
   * @returns {*}
   */
  Chartist.getMultiValue = function(value, dimension) {
    if(Chartist.isMultiValue(value)) {
      return Chartist.getNumberOrUndefined(value[dimension || 'y']);
    } else {
      return Chartist.getNumberOrUndefined(value);
    }
  };

  /**
   * Pollard Rho Algorithm to find smallest factor of an integer value. There are more efficient algorithms for factorization, but this one is quite efficient and not so complex.
   *
   * @memberof Chartist.Core
   * @param {Number} num An integer number where the smallest factor should be searched for
   * @returns {Number} The smallest integer factor of the parameter num.
   */
  Chartist.rho = function(num) {
    if(num === 1) {
      return num;
    }

    function gcd(p, q) {
      if (p % q === 0) {
        return q;
      } else {
        return gcd(q, p % q);
      }
    }

    function f(x) {
      return x * x + 1;
    }

    var x1 = 2, x2 = 2, divisor;
    if (num % 2 === 0) {
      return 2;
    }

    do {
      x1 = f(x1) % num;
      x2 = f(f(x2)) % num;
      divisor = gcd(Math.abs(x1 - x2), num);
    } while (divisor === 1);

    return divisor;
  };

  /**
   * Calculate and retrieve all the bounds for the chart and return them in one array
   *
   * @memberof Chartist.Core
   * @param {Number} axisLength The length of the Axis used for
   * @param {Object} highLow An object containing a high and low property indicating the value range of the chart.
   * @param {Number} scaleMinSpace The minimum projected length a step should result in
   * @param {Boolean} onlyInteger
   * @return {Object} All the values to set the bounds of the chart
   */
  Chartist.getBounds = function (axisLength, highLow, scaleMinSpace, onlyInteger) {
    var i,
      optimizationCounter = 0,
      newMin,
      newMax,
      bounds = {
        high: highLow.high,
        low: highLow.low
      };

    bounds.valueRange = bounds.high - bounds.low;
    bounds.oom = Chartist.orderOfMagnitude(bounds.valueRange);
    bounds.step = Math.pow(10, bounds.oom);
    bounds.min = Math.floor(bounds.low / bounds.step) * bounds.step;
    bounds.max = Math.ceil(bounds.high / bounds.step) * bounds.step;
    bounds.range = bounds.max - bounds.min;
    bounds.numberOfSteps = Math.round(bounds.range / bounds.step);

    // Optimize scale step by checking if subdivision is possible based on horizontalGridMinSpace
    // If we are already below the scaleMinSpace value we will scale up
    var length = Chartist.projectLength(axisLength, bounds.step, bounds);
    var scaleUp = length < scaleMinSpace;
    var smallestFactor = onlyInteger ? Chartist.rho(bounds.range) : 0;

    // First check if we should only use integer steps and if step 1 is still larger than scaleMinSpace so we can use 1
    if(onlyInteger && Chartist.projectLength(axisLength, 1, bounds) >= scaleMinSpace) {
      bounds.step = 1;
    } else if(onlyInteger && smallestFactor < bounds.step && Chartist.projectLength(axisLength, smallestFactor, bounds) >= scaleMinSpace) {
      // If step 1 was too small, we can try the smallest factor of range
      // If the smallest factor is smaller than the current bounds.step and the projected length of smallest factor
      // is larger than the scaleMinSpace we should go for it.
      bounds.step = smallestFactor;
    } else {
      // Trying to divide or multiply by 2 and find the best step value
      while (true) {
        if (scaleUp && Chartist.projectLength(axisLength, bounds.step, bounds) <= scaleMinSpace) {
          bounds.step *= 2;
        } else if (!scaleUp && Chartist.projectLength(axisLength, bounds.step / 2, bounds) >= scaleMinSpace) {
          bounds.step /= 2;
          if(onlyInteger && bounds.step % 1 !== 0) {
            bounds.step *= 2;
            break;
          }
        } else {
          break;
        }

        if(optimizationCounter++ > 1000) {
          throw new Error('Exceeded maximum number of iterations while optimizing scale step!');
        }
      }
    }

    var EPSILON = 2.221E-16;
    bounds.step = Math.max(bounds.step, EPSILON);
    function safeIncrement(value, increment) {
      // If increment is too small use *= (1+EPSILON) as a simple nextafter
      if (value === (value += increment)) {
      	value *= (1 + (increment > 0 ? EPSILON : -EPSILON));
      }
      return value;
    }

    // Narrow min and max based on new step
    newMin = bounds.min;
    newMax = bounds.max;
    while (newMin + bounds.step <= bounds.low) {
    	newMin = safeIncrement(newMin, bounds.step);
    }
    while (newMax - bounds.step >= bounds.high) {
    	newMax = safeIncrement(newMax, -bounds.step);
    }
    bounds.min = newMin;
    bounds.max = newMax;
    bounds.range = bounds.max - bounds.min;

    var values = [];
    for (i = bounds.min; i <= bounds.max; i = safeIncrement(i, bounds.step)) {
      var value = Chartist.roundWithPrecision(i);
      if (value !== values[values.length - 1]) {
        values.push(value);
      }
    }
    bounds.values = values;
    return bounds;
  };

  /**
   * Calculate cartesian coordinates of polar coordinates
   *
   * @memberof Chartist.Core
   * @param {Number} centerX X-axis coordinates of center point of circle segment
   * @param {Number} centerY X-axis coordinates of center point of circle segment
   * @param {Number} radius Radius of circle segment
   * @param {Number} angleInDegrees Angle of circle segment in degrees
   * @return {{x:Number, y:Number}} Coordinates of point on circumference
   */
  Chartist.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  /**
   * Initialize chart drawing rectangle (area where chart is drawn) x1,y1 = bottom left / x2,y2 = top right
   *
   * @memberof Chartist.Core
   * @param {Object} svg The svg element for the chart
   * @param {Object} options The Object that contains all the optional values for the chart
   * @param {Number} [fallbackPadding] The fallback padding if partial padding objects are used
   * @return {Object} The chart rectangles coordinates inside the svg element plus the rectangles measurements
   */
  Chartist.createChartRect = function (svg, options, fallbackPadding) {
    var hasAxis = !!(options.axisX || options.axisY);
    var yAxisOffset = hasAxis ? options.axisY.offset : 0;
    var xAxisOffset = hasAxis ? options.axisX.offset : 0;
    // If width or height results in invalid value (including 0) we fallback to the unitless settings or even 0
    var width = svg.width() || Chartist.quantity(options.width).value || 0;
    var height = svg.height() || Chartist.quantity(options.height).value || 0;
    var normalizedPadding = Chartist.normalizePadding(options.chartPadding, fallbackPadding);

    // If settings were to small to cope with offset (legacy) and padding, we'll adjust
    width = Math.max(width, yAxisOffset + normalizedPadding.left + normalizedPadding.right);
    height = Math.max(height, xAxisOffset + normalizedPadding.top + normalizedPadding.bottom);

    var chartRect = {
      padding: normalizedPadding,
      width: function () {
        return this.x2 - this.x1;
      },
      height: function () {
        return this.y1 - this.y2;
      }
    };

    if(hasAxis) {
      if (options.axisX.position === 'start') {
        chartRect.y2 = normalizedPadding.top + xAxisOffset;
        chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
      } else {
        chartRect.y2 = normalizedPadding.top;
        chartRect.y1 = Math.max(height - normalizedPadding.bottom - xAxisOffset, chartRect.y2 + 1);
      }

      if (options.axisY.position === 'start') {
        chartRect.x1 = normalizedPadding.left + yAxisOffset;
        chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
      } else {
        chartRect.x1 = normalizedPadding.left;
        chartRect.x2 = Math.max(width - normalizedPadding.right - yAxisOffset, chartRect.x1 + 1);
      }
    } else {
      chartRect.x1 = normalizedPadding.left;
      chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
      chartRect.y2 = normalizedPadding.top;
      chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
    }

    return chartRect;
  };

  /**
   * Creates a grid line based on a projected value.
   *
   * @memberof Chartist.Core
   * @param position
   * @param index
   * @param axis
   * @param offset
   * @param length
   * @param group
   * @param classes
   * @param eventEmitter
   */
  Chartist.createGrid = function(position, index, axis, offset, length, group, classes, eventEmitter) {
    var positionalData = {};
    positionalData[axis.units.pos + '1'] = position;
    positionalData[axis.units.pos + '2'] = position;
    positionalData[axis.counterUnits.pos + '1'] = offset;
    positionalData[axis.counterUnits.pos + '2'] = offset + length;

    var gridElement = group.elem('line', positionalData, classes.join(' '));

    // Event for grid draw
    eventEmitter.emit('draw',
      Chartist.extend({
        type: 'grid',
        axis: axis,
        index: index,
        group: group,
        element: gridElement
      }, positionalData)
    );
  };

  /**
   * Creates a grid background rect and emits the draw event.
   *
   * @memberof Chartist.Core
   * @param gridGroup
   * @param chartRect
   * @param className
   * @param eventEmitter
   */
  Chartist.createGridBackground = function (gridGroup, chartRect, className, eventEmitter) {
    var gridBackground = gridGroup.elem('rect', {
        x: chartRect.x1,
        y: chartRect.y2,
        width: chartRect.width(),
        height: chartRect.height(),
      }, className, true);

      // Event for grid background draw
      eventEmitter.emit('draw', {
        type: 'gridBackground',
        group: gridGroup,
        element: gridBackground
      });
  };

  /**
   * Creates a label based on a projected value and an axis.
   *
   * @memberof Chartist.Core
   * @param position
   * @param length
   * @param index
   * @param labels
   * @param axis
   * @param axisOffset
   * @param labelOffset
   * @param group
   * @param classes
   * @param useForeignObject
   * @param eventEmitter
   */
  Chartist.createLabel = function(position, length, index, labels, axis, axisOffset, labelOffset, group, classes, useForeignObject, eventEmitter) {
    var labelElement;
    var positionalData = {};

    positionalData[axis.units.pos] = position + labelOffset[axis.units.pos];
    positionalData[axis.counterUnits.pos] = labelOffset[axis.counterUnits.pos];
    positionalData[axis.units.len] = length;
    positionalData[axis.counterUnits.len] = Math.max(0, axisOffset - 10);

    if(useForeignObject) {
      // We need to set width and height explicitly to px as span will not expand with width and height being
      // 100% in all browsers
      var content = '<span class="' + classes.join(' ') + '" style="' +
        axis.units.len + ': ' + Math.round(positionalData[axis.units.len]) + 'px; ' +
        axis.counterUnits.len + ': ' + Math.round(positionalData[axis.counterUnits.len]) + 'px">' +
        labels[index] + '</span>';

      labelElement = group.foreignObject(content, Chartist.extend({
        style: 'overflow: visible;'
      }, positionalData));
    } else {
      labelElement = group.elem('text', positionalData, classes.join(' ')).text(labels[index]);
    }

    eventEmitter.emit('draw', Chartist.extend({
      type: 'label',
      axis: axis,
      index: index,
      group: group,
      element: labelElement,
      text: labels[index]
    }, positionalData));
  };

  /**
   * Helper to read series specific options from options object. It automatically falls back to the global option if
   * there is no option in the series options.
   *
   * @param {Object} series Series object
   * @param {Object} options Chartist options object
   * @param {string} key The options key that should be used to obtain the options
   * @returns {*}
   */
  Chartist.getSeriesOption = function(series, options, key) {
    if(series.name && options.series && options.series[series.name]) {
      var seriesOptions = options.series[series.name];
      return seriesOptions.hasOwnProperty(key) ? seriesOptions[key] : options[key];
    } else {
      return options[key];
    }
  };

  /**
   * Provides options handling functionality with callback for options changes triggered by responsive options and media query matches
   *
   * @memberof Chartist.Core
   * @param {Object} options Options set by user
   * @param {Array} responsiveOptions Optional functions to add responsive behavior to chart
   * @param {Object} eventEmitter The event emitter that will be used to emit the options changed events
   * @return {Object} The consolidated options object from the defaults, base and matching responsive options
   */
  Chartist.optionsProvider = function (options, responsiveOptions, eventEmitter) {
    var baseOptions = Chartist.extend({}, options),
      currentOptions,
      mediaQueryListeners = [],
      i;

    function updateCurrentOptions(mediaEvent) {
      var previousOptions = currentOptions;
      currentOptions = Chartist.extend({}, baseOptions);

      if (responsiveOptions) {
        for (i = 0; i < responsiveOptions.length; i++) {
          var mql = window.matchMedia(responsiveOptions[i][0]);
          if (mql.matches) {
            currentOptions = Chartist.extend(currentOptions, responsiveOptions[i][1]);
          }
        }
      }

      if(eventEmitter && mediaEvent) {
        eventEmitter.emit('optionsChanged', {
          previousOptions: previousOptions,
          currentOptions: currentOptions
        });
      }
    }

    function removeMediaQueryListeners() {
      mediaQueryListeners.forEach(function(mql) {
        mql.removeListener(updateCurrentOptions);
      });
    }

    if (!window.matchMedia) {
      throw 'window.matchMedia not found! Make sure you\'re using a polyfill.';
    } else if (responsiveOptions) {

      for (i = 0; i < responsiveOptions.length; i++) {
        var mql = window.matchMedia(responsiveOptions[i][0]);
        mql.addListener(updateCurrentOptions);
        mediaQueryListeners.push(mql);
      }
    }
    // Execute initially without an event argument so we get the correct options
    updateCurrentOptions();

    return {
      removeMediaQueryListeners: removeMediaQueryListeners,
      getCurrentOptions: function getCurrentOptions() {
        return Chartist.extend({}, currentOptions);
      }
    };
  };


  /**
   * Splits a list of coordinates and associated values into segments. Each returned segment contains a pathCoordinates
   * valueData property describing the segment.
   *
   * With the default options, segments consist of contiguous sets of points that do not have an undefined value. Any
   * points with undefined values are discarded.
   *
   * **Options**
   * The following options are used to determine how segments are formed
   * ```javascript
   * var options = {
   *   // If fillHoles is true, undefined values are simply discarded without creating a new segment. Assuming other options are default, this returns single segment.
   *   fillHoles: false,
   *   // If increasingX is true, the coordinates in all segments have strictly increasing x-values.
   *   increasingX: false
   * };
   * ```
   *
   * @memberof Chartist.Core
   * @param {Array} pathCoordinates List of point coordinates to be split in the form [x1, y1, x2, y2 ... xn, yn]
   * @param {Array} values List of associated point values in the form [v1, v2 .. vn]
   * @param {Object} options Options set by user
   * @return {Array} List of segments, each containing a pathCoordinates and valueData property.
   */
  Chartist.splitIntoSegments = function(pathCoordinates, valueData, options) {
    var defaultOptions = {
      increasingX: false,
      fillHoles: false
    };

    options = Chartist.extend({}, defaultOptions, options);

    var segments = [];
    var hole = true;

    for(var i = 0; i < pathCoordinates.length; i += 2) {
      // If this value is a "hole" we set the hole flag
      if(Chartist.getMultiValue(valueData[i / 2].value) === undefined) {
      // if(valueData[i / 2].value === undefined) {
        if(!options.fillHoles) {
          hole = true;
        }
      } else {
        if(options.increasingX && i >= 2 && pathCoordinates[i] <= pathCoordinates[i-2]) {
          // X is not increasing, so we need to make sure we start a new segment
          hole = true;
        }


        // If it's a valid value we need to check if we're coming out of a hole and create a new empty segment
        if(hole) {
          segments.push({
            pathCoordinates: [],
            valueData: []
          });
          // As we have a valid value now, we are not in a "hole" anymore
          hole = false;
        }

        // Add to the segment pathCoordinates and valueData
        segments[segments.length - 1].pathCoordinates.push(pathCoordinates[i], pathCoordinates[i + 1]);
        segments[segments.length - 1].valueData.push(valueData[i / 2]);
      }
    }

    return segments;
  };
}(window, document, Chartist));
;/**
 * Chartist path interpolation functions.
 *
 * @module Chartist.Interpolation
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  Chartist.Interpolation = {};

  /**
   * This interpolation function does not smooth the path and the result is only containing lines and no curves.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.none({
   *     fillHoles: false
   *   })
   * });
   *
   *
   * @memberof Chartist.Interpolation
   * @return {Function}
   */
  Chartist.Interpolation.none = function(options) {
    var defaultOptions = {
      fillHoles: false
    };
    options = Chartist.extend({}, defaultOptions, options);
    return function none(pathCoordinates, valueData) {
      var path = new Chartist.Svg.Path();
      var hole = true;

      for(var i = 0; i < pathCoordinates.length; i += 2) {
        var currX = pathCoordinates[i];
        var currY = pathCoordinates[i + 1];
        var currData = valueData[i / 2];

        if(Chartist.getMultiValue(currData.value) !== undefined) {

          if(hole) {
            path.move(currX, currY, false, currData);
          } else {
            path.line(currX, currY, false, currData);
          }

          hole = false;
        } else if(!options.fillHoles) {
          hole = true;
        }
      }

      return path;
    };
  };

  /**
   * Simple smoothing creates horizontal handles that are positioned with a fraction of the length between two data points. You can use the divisor option to specify the amount of smoothing.
   *
   * Simple smoothing can be used instead of `Chartist.Smoothing.cardinal` if you'd like to get rid of the artifacts it produces sometimes. Simple smoothing produces less flowing lines but is accurate by hitting the points and it also doesn't swing below or above the given data point.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter. The simple interpolation function accepts one configuration parameter `divisor`, between 1 and ∞, which controls the smoothing characteristics.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.simple({
   *     divisor: 2,
   *     fillHoles: false
   *   })
   * });
   *
   *
   * @memberof Chartist.Interpolation
   * @param {Object} options The options of the simple interpolation factory function.
   * @return {Function}
   */
  Chartist.Interpolation.simple = function(options) {
    var defaultOptions = {
      divisor: 2,
      fillHoles: false
    };
    options = Chartist.extend({}, defaultOptions, options);

    var d = 1 / Math.max(1, options.divisor);

    return function simple(pathCoordinates, valueData) {
      var path = new Chartist.Svg.Path();
      var prevX, prevY, prevData;

      for(var i = 0; i < pathCoordinates.length; i += 2) {
        var currX = pathCoordinates[i];
        var currY = pathCoordinates[i + 1];
        var length = (currX - prevX) * d;
        var currData = valueData[i / 2];

        if(currData.value !== undefined) {

          if(prevData === undefined) {
            path.move(currX, currY, false, currData);
          } else {
            path.curve(
              prevX + length,
              prevY,
              currX - length,
              currY,
              currX,
              currY,
              false,
              currData
            );
          }

          prevX = currX;
          prevY = currY;
          prevData = currData;
        } else if(!options.fillHoles) {
          prevX = currX = prevData = undefined;
        }
      }

      return path;
    };
  };

  /**
   * Cardinal / Catmull-Rome spline interpolation is the default smoothing function in Chartist. It produces nice results where the splines will always meet the points. It produces some artifacts though when data values are increased or decreased rapidly. The line may not follow a very accurate path and if the line should be accurate this smoothing function does not produce the best results.
   *
   * Cardinal splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter. The cardinal interpolation function accepts one configuration parameter `tension`, between 0 and 1, which controls the smoothing intensity.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.cardinal({
   *     tension: 1,
   *     fillHoles: false
   *   })
   * });
   *
   * @memberof Chartist.Interpolation
   * @param {Object} options The options of the cardinal factory function.
   * @return {Function}
   */
  Chartist.Interpolation.cardinal = function(options) {
    var defaultOptions = {
      tension: 1,
      fillHoles: false
    };

    options = Chartist.extend({}, defaultOptions, options);

    var t = Math.min(1, Math.max(0, options.tension)),
      c = 1 - t;

    return function cardinal(pathCoordinates, valueData) {
      // First we try to split the coordinates into segments
      // This is necessary to treat "holes" in line charts
      var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
        fillHoles: options.fillHoles
      });

      if(!segments.length) {
        // If there were no segments return 'Chartist.Interpolation.none'
        return Chartist.Interpolation.none()([]);
      } else if(segments.length > 1) {
        // If the split resulted in more that one segment we need to interpolate each segment individually and join them
        // afterwards together into a single path.
          var paths = [];
        // For each segment we will recurse the cardinal function
        segments.forEach(function(segment) {
          paths.push(cardinal(segment.pathCoordinates, segment.valueData));
        });
        // Join the segment path data into a single path and return
        return Chartist.Svg.Path.join(paths);
      } else {
        // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
        // segment
        pathCoordinates = segments[0].pathCoordinates;
        valueData = segments[0].valueData;

        // If less than two points we need to fallback to no smoothing
        if(pathCoordinates.length <= 4) {
          return Chartist.Interpolation.none()(pathCoordinates, valueData);
        }

        var path = new Chartist.Svg.Path().move(pathCoordinates[0], pathCoordinates[1], false, valueData[0]),
          z;

        for (var i = 0, iLen = pathCoordinates.length; iLen - 2 * !z > i; i += 2) {
          var p = [
            {x: +pathCoordinates[i - 2], y: +pathCoordinates[i - 1]},
            {x: +pathCoordinates[i], y: +pathCoordinates[i + 1]},
            {x: +pathCoordinates[i + 2], y: +pathCoordinates[i + 3]},
            {x: +pathCoordinates[i + 4], y: +pathCoordinates[i + 5]}
          ];
          if (z) {
            if (!i) {
              p[0] = {x: +pathCoordinates[iLen - 2], y: +pathCoordinates[iLen - 1]};
            } else if (iLen - 4 === i) {
              p[3] = {x: +pathCoordinates[0], y: +pathCoordinates[1]};
            } else if (iLen - 2 === i) {
              p[2] = {x: +pathCoordinates[0], y: +pathCoordinates[1]};
              p[3] = {x: +pathCoordinates[2], y: +pathCoordinates[3]};
            }
          } else {
            if (iLen - 4 === i) {
              p[3] = p[2];
            } else if (!i) {
              p[0] = {x: +pathCoordinates[i], y: +pathCoordinates[i + 1]};
            }
          }

          path.curve(
            (t * (-p[0].x + 6 * p[1].x + p[2].x) / 6) + (c * p[2].x),
            (t * (-p[0].y + 6 * p[1].y + p[2].y) / 6) + (c * p[2].y),
            (t * (p[1].x + 6 * p[2].x - p[3].x) / 6) + (c * p[2].x),
            (t * (p[1].y + 6 * p[2].y - p[3].y) / 6) + (c * p[2].y),
            p[2].x,
            p[2].y,
            false,
            valueData[(i + 2) / 2]
          );
        }

        return path;
      }
    };
  };

  /**
   * Monotone Cubic spline interpolation produces a smooth curve which preserves monotonicity. Unlike cardinal splines, the curve will not extend beyond the range of y-values of the original data points.
   *
   * Monotone Cubic splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
   *
   * The x-values of subsequent points must be increasing to fit a Monotone Cubic spline. If this condition is not met for a pair of adjacent points, then there will be a break in the curve between those data points.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.monotoneCubic({
   *     fillHoles: false
   *   })
   * });
   *
   * @memberof Chartist.Interpolation
   * @param {Object} options The options of the monotoneCubic factory function.
   * @return {Function}
   */
  Chartist.Interpolation.monotoneCubic = function(options) {
    var defaultOptions = {
      fillHoles: false
    };

    options = Chartist.extend({}, defaultOptions, options);

    return function monotoneCubic(pathCoordinates, valueData) {
      // First we try to split the coordinates into segments
      // This is necessary to treat "holes" in line charts
      var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
        fillHoles: options.fillHoles,
        increasingX: true
      });

      if(!segments.length) {
        // If there were no segments return 'Chartist.Interpolation.none'
        return Chartist.Interpolation.none()([]);
      } else if(segments.length > 1) {
        // If the split resulted in more that one segment we need to interpolate each segment individually and join them
        // afterwards together into a single path.
          var paths = [];
        // For each segment we will recurse the monotoneCubic fn function
        segments.forEach(function(segment) {
          paths.push(monotoneCubic(segment.pathCoordinates, segment.valueData));
        });
        // Join the segment path data into a single path and return
        return Chartist.Svg.Path.join(paths);
      } else {
        // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
        // segment
        pathCoordinates = segments[0].pathCoordinates;
        valueData = segments[0].valueData;

        // If less than three points we need to fallback to no smoothing
        if(pathCoordinates.length <= 4) {
          return Chartist.Interpolation.none()(pathCoordinates, valueData);
        }

        var xs = [],
          ys = [],
          i,
          n = pathCoordinates.length / 2,
          ms = [],
          ds = [], dys = [], dxs = [],
          path;

        // Populate x and y coordinates into separate arrays, for readability

        for(i = 0; i < n; i++) {
          xs[i] = pathCoordinates[i * 2];
          ys[i] = pathCoordinates[i * 2 + 1];
        }

        // Calculate deltas and derivative

        for(i = 0; i < n - 1; i++) {
          dys[i] = ys[i + 1] - ys[i];
          dxs[i] = xs[i + 1] - xs[i];
          ds[i] = dys[i] / dxs[i];
        }

        // Determine desired slope (m) at each point using Fritsch-Carlson method
        // See: http://math.stackexchange.com/questions/45218/implementation-of-monotone-cubic-interpolation

        ms[0] = ds[0];
        ms[n - 1] = ds[n - 2];

        for(i = 1; i < n - 1; i++) {
          if(ds[i] === 0 || ds[i - 1] === 0 || (ds[i - 1] > 0) !== (ds[i] > 0)) {
            ms[i] = 0;
          } else {
            ms[i] = 3 * (dxs[i - 1] + dxs[i]) / (
              (2 * dxs[i] + dxs[i - 1]) / ds[i - 1] +
              (dxs[i] + 2 * dxs[i - 1]) / ds[i]);

            if(!isFinite(ms[i])) {
              ms[i] = 0;
            }
          }
        }

        // Now build a path from the slopes

        path = new Chartist.Svg.Path().move(xs[0], ys[0], false, valueData[0]);

        for(i = 0; i < n - 1; i++) {
          path.curve(
            // First control point
            xs[i] + dxs[i] / 3,
            ys[i] + ms[i] * dxs[i] / 3,
            // Second control point
            xs[i + 1] - dxs[i] / 3,
            ys[i + 1] - ms[i + 1] * dxs[i] / 3,
            // End point
            xs[i + 1],
            ys[i + 1],

            false,
            valueData[i + 1]
          );
        }

        return path;
      }
    };
  };

  /**
   * Step interpolation will cause the line chart to move in steps rather than diagonal or smoothed lines. This interpolation will create additional points that will also be drawn when the `showPoint` option is enabled.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter. The step interpolation function accepts one configuration parameter `postpone`, that can be `true` or `false`. The default value is `true` and will cause the step to occur where the value actually changes. If a different behaviour is needed where the step is shifted to the left and happens before the actual value, this option can be set to `false`.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.step({
   *     postpone: true,
   *     fillHoles: false
   *   })
   * });
   *
   * @memberof Chartist.Interpolation
   * @param options
   * @returns {Function}
   */
  Chartist.Interpolation.step = function(options) {
    var defaultOptions = {
      postpone: true,
      fillHoles: false
    };

    options = Chartist.extend({}, defaultOptions, options);

    return function step(pathCoordinates, valueData) {
      var path = new Chartist.Svg.Path();

      var prevX, prevY, prevData;

      for (var i = 0; i < pathCoordinates.length; i += 2) {
        var currX = pathCoordinates[i];
        var currY = pathCoordinates[i + 1];
        var currData = valueData[i / 2];

        // If the current point is also not a hole we can draw the step lines
        if(currData.value !== undefined) {
          if(prevData === undefined) {
            path.move(currX, currY, false, currData);
          } else {
            if(options.postpone) {
              // If postponed we should draw the step line with the value of the previous value
              path.line(currX, prevY, false, prevData);
            } else {
              // If not postponed we should draw the step line with the value of the current value
              path.line(prevX, currY, false, currData);
            }
            // Line to the actual point (this should only be a Y-Axis movement
            path.line(currX, currY, false, currData);
          }

          prevX = currX;
          prevY = currY;
          prevData = currData;
        } else if(!options.fillHoles) {
          prevX = prevY = prevData = undefined;
        }
      }

      return path;
    };
  };

}(window, document, Chartist));
;/**
 * A very basic event module that helps to generate and catch events.
 *
 * @module Chartist.Event
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  Chartist.EventEmitter = function () {
    var handlers = [];

    /**
     * Add an event handler for a specific event
     *
     * @memberof Chartist.Event
     * @param {String} event The event name
     * @param {Function} handler A event handler function
     */
    function addEventHandler(event, handler) {
      handlers[event] = handlers[event] || [];
      handlers[event].push(handler);
    }

    /**
     * Remove an event handler of a specific event name or remove all event handlers for a specific event.
     *
     * @memberof Chartist.Event
     * @param {String} event The event name where a specific or all handlers should be removed
     * @param {Function} [handler] An optional event handler function. If specified only this specific handler will be removed and otherwise all handlers are removed.
     */
    function removeEventHandler(event, handler) {
      // Only do something if there are event handlers with this name existing
      if(handlers[event]) {
        // If handler is set we will look for a specific handler and only remove this
        if(handler) {
          handlers[event].splice(handlers[event].indexOf(handler), 1);
          if(handlers[event].length === 0) {
            delete handlers[event];
          }
        } else {
          // If no handler is specified we remove all handlers for this event
          delete handlers[event];
        }
      }
    }

    /**
     * Use this function to emit an event. All handlers that are listening for this event will be triggered with the data parameter.
     *
     * @memberof Chartist.Event
     * @param {String} event The event name that should be triggered
     * @param {*} data Arbitrary data that will be passed to the event handler callback functions
     */
    function emit(event, data) {
      // Only do something if there are event handlers with this name existing
      if(handlers[event]) {
        handlers[event].forEach(function(handler) {
          handler(data);
        });
      }

      // Emit event to star event handlers
      if(handlers['*']) {
        handlers['*'].forEach(function(starHandler) {
          starHandler(event, data);
        });
      }
    }

    return {
      addEventHandler: addEventHandler,
      removeEventHandler: removeEventHandler,
      emit: emit
    };
  };

}(window, document, Chartist));
;/**
 * This module provides some basic prototype inheritance utilities.
 *
 * @module Chartist.Class
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  function listToArray(list) {
    var arr = [];
    if (list.length) {
      for (var i = 0; i < list.length; i++) {
        arr.push(list[i]);
      }
    }
    return arr;
  }

  /**
   * Method to extend from current prototype.
   *
   * @memberof Chartist.Class
   * @param {Object} properties The object that serves as definition for the prototype that gets created for the new class. This object should always contain a constructor property that is the desired constructor for the newly created class.
   * @param {Object} [superProtoOverride] By default extens will use the current class prototype or Chartist.class. With this parameter you can specify any super prototype that will be used.
   * @return {Function} Constructor function of the new class
   *
   * @example
   * var Fruit = Class.extend({
     * color: undefined,
     *   sugar: undefined,
     *
     *   constructor: function(color, sugar) {
     *     this.color = color;
     *     this.sugar = sugar;
     *   },
     *
     *   eat: function() {
     *     this.sugar = 0;
     *     return this;
     *   }
     * });
   *
   * var Banana = Fruit.extend({
     *   length: undefined,
     *
     *   constructor: function(length, sugar) {
     *     Banana.super.constructor.call(this, 'Yellow', sugar);
     *     this.length = length;
     *   }
     * });
   *
   * var banana = new Banana(20, 40);
   * console.log('banana instanceof Fruit', banana instanceof Fruit);
   * console.log('Fruit is prototype of banana', Fruit.prototype.isPrototypeOf(banana));
   * console.log('bananas prototype is Fruit', Object.getPrototypeOf(banana) === Fruit.prototype);
   * console.log(banana.sugar);
   * console.log(banana.eat().sugar);
   * console.log(banana.color);
   */
  function extend(properties, superProtoOverride) {
    var superProto = superProtoOverride || this.prototype || Chartist.Class;
    var proto = Object.create(superProto);

    Chartist.Class.cloneDefinitions(proto, properties);

    var constr = function() {
      var fn = proto.constructor || function () {},
        instance;

      // If this is linked to the Chartist namespace the constructor was not called with new
      // To provide a fallback we will instantiate here and return the instance
      instance = this === Chartist ? Object.create(proto) : this;
      fn.apply(instance, Array.prototype.slice.call(arguments, 0));

      // If this constructor was not called with new we need to return the instance
      // This will not harm when the constructor has been called with new as the returned value is ignored
      return instance;
    };

    constr.prototype = proto;
    constr.super = superProto;
    constr.extend = this.extend;

    return constr;
  }

  // Variable argument list clones args > 0 into args[0] and retruns modified args[0]
  function cloneDefinitions() {
    var args = listToArray(arguments);
    var target = args[0];

    args.splice(1, args.length - 1).forEach(function (source) {
      Object.getOwnPropertyNames(source).forEach(function (propName) {
        // If this property already exist in target we delete it first
        delete target[propName];
        // Define the property with the descriptor from source
        Object.defineProperty(target, propName,
          Object.getOwnPropertyDescriptor(source, propName));
      });
    });

    return target;
  }

  Chartist.Class = {
    extend: extend,
    cloneDefinitions: cloneDefinitions
  };

}(window, document, Chartist));
;/**
 * Base for all chart types. The methods in Chartist.Base are inherited to all chart types.
 *
 * @module Chartist.Base
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  // TODO: Currently we need to re-draw the chart on window resize. This is usually very bad and will affect performance.
  // This is done because we can't work with relative coordinates when drawing the chart because SVG Path does not
  // work with relative positions yet. We need to check if we can do a viewBox hack to switch to percentage.
  // See http://mozilla.6506.n7.nabble.com/Specyfing-paths-with-percentages-unit-td247474.html
  // Update: can be done using the above method tested here: http://codepen.io/gionkunz/pen/KDvLj
  // The problem is with the label offsets that can't be converted into percentage and affecting the chart container
  /**
   * Updates the chart which currently does a full reconstruction of the SVG DOM
   *
   * @param {Object} [data] Optional data you'd like to set for the chart before it will update. If not specified the update method will use the data that is already configured with the chart.
   * @param {Object} [options] Optional options you'd like to add to the previous options for the chart before it will update. If not specified the update method will use the options that have been already configured with the chart.
   * @param {Boolean} [override] If set to true, the passed options will be used to extend the options that have been configured already. Otherwise the chart default options will be used as the base
   * @memberof Chartist.Base
   */
  function update(data, options, override) {
    if(data) {
      this.data = data || {};
      this.data.labels = this.data.labels || [];
      this.data.series = this.data.series || [];
      // Event for data transformation that allows to manipulate the data before it gets rendered in the charts
      this.eventEmitter.emit('data', {
        type: 'update',
        data: this.data
      });
    }

    if(options) {
      this.options = Chartist.extend({}, override ? this.options : this.defaultOptions, options);

      // If chartist was not initialized yet, we just set the options and leave the rest to the initialization
      // Otherwise we re-create the optionsProvider at this point
      if(!this.initializeTimeoutId) {
        this.optionsProvider.removeMediaQueryListeners();
        this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
      }
    }

    // Only re-created the chart if it has been initialized yet
    if(!this.initializeTimeoutId) {
      this.createChart(this.optionsProvider.getCurrentOptions());
    }

    // Return a reference to the chart object to chain up calls
    return this;
  }

  /**
   * This method can be called on the API object of each chart and will un-register all event listeners that were added to other components. This currently includes a window.resize listener as well as media query listeners if any responsive options have been provided. Use this function if you need to destroy and recreate Chartist charts dynamically.
   *
   * @memberof Chartist.Base
   */
  function detach() {
    // Only detach if initialization already occurred on this chart. If this chart still hasn't initialized (therefore
    // the initializationTimeoutId is still a valid timeout reference, we will clear the timeout
    if(!this.initializeTimeoutId) {
      window.removeEventListener('resize', this.resizeListener);
      this.optionsProvider.removeMediaQueryListeners();
    } else {
      window.clearTimeout(this.initializeTimeoutId);
    }

    return this;
  }

  /**
   * Use this function to register event handlers. The handler callbacks are synchronous and will run in the main thread rather than the event loop.
   *
   * @memberof Chartist.Base
   * @param {String} event Name of the event. Check the examples for supported events.
   * @param {Function} handler The handler function that will be called when an event with the given name was emitted. This function will receive a data argument which contains event data. See the example for more details.
   */
  function on(event, handler) {
    this.eventEmitter.addEventHandler(event, handler);
    return this;
  }

  /**
   * Use this function to un-register event handlers. If the handler function parameter is omitted all handlers for the given event will be un-registered.
   *
   * @memberof Chartist.Base
   * @param {String} event Name of the event for which a handler should be removed
   * @param {Function} [handler] The handler function that that was previously used to register a new event handler. This handler will be removed from the event handler list. If this parameter is omitted then all event handlers for the given event are removed from the list.
   */
  function off(event, handler) {
    this.eventEmitter.removeEventHandler(event, handler);
    return this;
  }

  function initialize() {
    // Add window resize listener that re-creates the chart
    window.addEventListener('resize', this.resizeListener);

    // Obtain current options based on matching media queries (if responsive options are given)
    // This will also register a listener that is re-creating the chart based on media changes
    this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
    // Register options change listener that will trigger a chart update
    this.eventEmitter.addEventHandler('optionsChanged', function() {
      this.update();
    }.bind(this));

    // Before the first chart creation we need to register us with all plugins that are configured
    // Initialize all relevant plugins with our chart object and the plugin options specified in the config
    if(this.options.plugins) {
      this.options.plugins.forEach(function(plugin) {
        if(plugin instanceof Array) {
          plugin[0](this, plugin[1]);
        } else {
          plugin(this);
        }
      }.bind(this));
    }

    // Event for data transformation that allows to manipulate the data before it gets rendered in the charts
    this.eventEmitter.emit('data', {
      type: 'initial',
      data: this.data
    });

    // Create the first chart
    this.createChart(this.optionsProvider.getCurrentOptions());

    // As chart is initialized from the event loop now we can reset our timeout reference
    // This is important if the chart gets initialized on the same element twice
    this.initializeTimeoutId = undefined;
  }

  /**
   * Constructor of chart base class.
   *
   * @param query
   * @param data
   * @param defaultOptions
   * @param options
   * @param responsiveOptions
   * @constructor
   */
  function Base(query, data, defaultOptions, options, responsiveOptions) {
    this.container = Chartist.querySelector(query);
    this.data = data || {};
    this.data.labels = this.data.labels || [];
    this.data.series = this.data.series || [];
    this.defaultOptions = defaultOptions;
    this.options = options;
    this.responsiveOptions = responsiveOptions;
    this.eventEmitter = Chartist.EventEmitter();
    this.supportsForeignObject = Chartist.Svg.isSupported('Extensibility');
    this.supportsAnimations = Chartist.Svg.isSupported('AnimationEventsAttribute');
    this.resizeListener = function resizeListener(){
      this.update();
    }.bind(this);

    if(this.container) {
      // If chartist was already initialized in this container we are detaching all event listeners first
      if(this.container.__chartist__) {
        this.container.__chartist__.detach();
      }

      this.container.__chartist__ = this;
    }

    // Using event loop for first draw to make it possible to register event listeners in the same call stack where
    // the chart was created.
    this.initializeTimeoutId = setTimeout(initialize.bind(this), 0);
  }

  // Creating the chart base class
  Chartist.Base = Chartist.Class.extend({
    constructor: Base,
    optionsProvider: undefined,
    container: undefined,
    svg: undefined,
    eventEmitter: undefined,
    createChart: function() {
      throw new Error('Base chart type can\'t be instantiated!');
    },
    update: update,
    detach: detach,
    on: on,
    off: off,
    version: Chartist.version,
    supportsForeignObject: false
  });

}(window, document, Chartist));
;/**
 * Chartist SVG module for simple SVG DOM abstraction
 *
 * @module Chartist.Svg
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  /**
   * Chartist.Svg creates a new SVG object wrapper with a starting element. You can use the wrapper to fluently create sub-elements and modify them.
   *
   * @memberof Chartist.Svg
   * @constructor
   * @param {String|Element} name The name of the SVG element to create or an SVG dom element which should be wrapped into Chartist.Svg
   * @param {Object} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
   * @param {String} className This class or class list will be added to the SVG element
   * @param {Object} parent The parent SVG wrapper object where this newly created wrapper and it's element will be attached to as child
   * @param {Boolean} insertFirst If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
   */
  function Svg(name, attributes, className, parent, insertFirst) {
    // If Svg is getting called with an SVG element we just return the wrapper
    if(name instanceof Element) {
      this._node = name;
    } else {
      this._node = document.createElementNS(Chartist.namespaces.svg, name);

      // If this is an SVG element created then custom namespace
      if(name === 'svg') {
        this.attr({
          'xmlns:ct': Chartist.namespaces.ct
        });
      }
    }

    if(attributes) {
      this.attr(attributes);
    }

    if(className) {
      this.addClass(className);
    }

    if(parent) {
      if (insertFirst && parent._node.firstChild) {
        parent._node.insertBefore(this._node, parent._node.firstChild);
      } else {
        parent._node.appendChild(this._node);
      }
    }
  }

  /**
   * Set attributes on the current SVG element of the wrapper you're currently working on.
   *
   * @memberof Chartist.Svg
   * @param {Object|String} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added. If this parameter is a String then the function is used as a getter and will return the attribute value.
   * @param {String} [ns] If specified, the attribute will be obtained using getAttributeNs. In order to write namepsaced attributes you can use the namespace:attribute notation within the attributes object.
   * @return {Object|String} The current wrapper object will be returned so it can be used for chaining or the attribute value if used as getter function.
   */
  function attr(attributes, ns) {
    if(typeof attributes === 'string') {
      if(ns) {
        return this._node.getAttributeNS(ns, attributes);
      } else {
        return this._node.getAttribute(attributes);
      }
    }

    Object.keys(attributes).forEach(function(key) {
      // If the attribute value is undefined we can skip this one
      if(attributes[key] === undefined) {
        return;
      }

      if (key.indexOf(':') !== -1) {
        var namespacedAttribute = key.split(':');
        this._node.setAttributeNS(Chartist.namespaces[namespacedAttribute[0]], key, attributes[key]);
      } else {
        this._node.setAttribute(key, attributes[key]);
      }
    }.bind(this));

    return this;
  }

  /**
   * Create a new SVG element whose wrapper object will be selected for further operations. This way you can also create nested groups easily.
   *
   * @memberof Chartist.Svg
   * @param {String} name The name of the SVG element that should be created as child element of the currently selected element wrapper
   * @param {Object} [attributes] An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
   * @param {String} [className] This class or class list will be added to the SVG element
   * @param {Boolean} [insertFirst] If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
   * @return {Chartist.Svg} Returns a Chartist.Svg wrapper object that can be used to modify the containing SVG data
   */
  function elem(name, attributes, className, insertFirst) {
    return new Chartist.Svg(name, attributes, className, this, insertFirst);
  }

  /**
   * Returns the parent Chartist.SVG wrapper object
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} Returns a Chartist.Svg wrapper around the parent node of the current node. If the parent node is not existing or it's not an SVG node then this function will return null.
   */
  function parent() {
    return this._node.parentNode instanceof SVGElement ? new Chartist.Svg(this._node.parentNode) : null;
  }

  /**
   * This method returns a Chartist.Svg wrapper around the root SVG element of the current tree.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The root SVG element wrapped in a Chartist.Svg element
   */
  function root() {
    var node = this._node;
    while(node.nodeName !== 'svg') {
      node = node.parentNode;
    }
    return new Chartist.Svg(node);
  }

  /**
   * Find the first child SVG element of the current element that matches a CSS selector. The returned object is a Chartist.Svg wrapper.
   *
   * @memberof Chartist.Svg
   * @param {String} selector A CSS selector that is used to query for child SVG elements
   * @return {Chartist.Svg} The SVG wrapper for the element found or null if no element was found
   */
  function querySelector(selector) {
    var foundNode = this._node.querySelector(selector);
    return foundNode ? new Chartist.Svg(foundNode) : null;
  }

  /**
   * Find the all child SVG elements of the current element that match a CSS selector. The returned object is a Chartist.Svg.List wrapper.
   *
   * @memberof Chartist.Svg
   * @param {String} selector A CSS selector that is used to query for child SVG elements
   * @return {Chartist.Svg.List} The SVG wrapper list for the element found or null if no element was found
   */
  function querySelectorAll(selector) {
    var foundNodes = this._node.querySelectorAll(selector);
    return foundNodes.length ? new Chartist.Svg.List(foundNodes) : null;
  }

  /**
   * Returns the underlying SVG node for the current element.
   *
   * @memberof Chartist.Svg
   * @returns {Node}
   */
  function getNode() {
    return this._node;
  }

  /**
   * This method creates a foreignObject (see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) that allows to embed HTML content into a SVG graphic. With the help of foreignObjects you can enable the usage of regular HTML elements inside of SVG where they are subject for SVG positioning and transformation but the Browser will use the HTML rendering capabilities for the containing DOM.
   *
   * @memberof Chartist.Svg
   * @param {Node|String} content The DOM Node, or HTML string that will be converted to a DOM Node, that is then placed into and wrapped by the foreignObject
   * @param {String} [attributes] An object with properties that will be added as attributes to the foreignObject element that is created. Attributes with undefined values will not be added.
   * @param {String} [className] This class or class list will be added to the SVG element
   * @param {Boolean} [insertFirst] Specifies if the foreignObject should be inserted as first child
   * @return {Chartist.Svg} New wrapper object that wraps the foreignObject element
   */
  function foreignObject(content, attributes, className, insertFirst) {
    // If content is string then we convert it to DOM
    // TODO: Handle case where content is not a string nor a DOM Node
    if(typeof content === 'string') {
      var container = document.createElement('div');
      container.innerHTML = content;
      content = container.firstChild;
    }

    // Adding namespace to content element
    content.setAttribute('xmlns', Chartist.namespaces.xmlns);

    // Creating the foreignObject without required extension attribute (as described here
    // http://www.w3.org/TR/SVG/extend.html#ForeignObjectElement)
    var fnObj = this.elem('foreignObject', attributes, className, insertFirst);

    // Add content to foreignObjectElement
    fnObj._node.appendChild(content);

    return fnObj;
  }

  /**
   * This method adds a new text element to the current Chartist.Svg wrapper.
   *
   * @memberof Chartist.Svg
   * @param {String} t The text that should be added to the text element that is created
   * @return {Chartist.Svg} The same wrapper object that was used to add the newly created element
   */
  function text(t) {
    this._node.appendChild(document.createTextNode(t));
    return this;
  }

  /**
   * This method will clear all child nodes of the current wrapper object.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The same wrapper object that got emptied
   */
  function empty() {
    while (this._node.firstChild) {
      this._node.removeChild(this._node.firstChild);
    }

    return this;
  }

  /**
   * This method will cause the current wrapper to remove itself from its parent wrapper. Use this method if you'd like to get rid of an element in a given DOM structure.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The parent wrapper object of the element that got removed
   */
  function remove() {
    this._node.parentNode.removeChild(this._node);
    return this.parent();
  }

  /**
   * This method will replace the element with a new element that can be created outside of the current DOM.
   *
   * @memberof Chartist.Svg
   * @param {Chartist.Svg} newElement The new Chartist.Svg object that will be used to replace the current wrapper object
   * @return {Chartist.Svg} The wrapper of the new element
   */
  function replace(newElement) {
    this._node.parentNode.replaceChild(newElement._node, this._node);
    return newElement;
  }

  /**
   * This method will append an element to the current element as a child.
   *
   * @memberof Chartist.Svg
   * @param {Chartist.Svg} element The Chartist.Svg element that should be added as a child
   * @param {Boolean} [insertFirst] Specifies if the element should be inserted as first child
   * @return {Chartist.Svg} The wrapper of the appended object
   */
  function append(element, insertFirst) {
    if(insertFirst && this._node.firstChild) {
      this._node.insertBefore(element._node, this._node.firstChild);
    } else {
      this._node.appendChild(element._node);
    }

    return this;
  }

  /**
   * Returns an array of class names that are attached to the current wrapper element. This method can not be chained further.
   *
   * @memberof Chartist.Svg
   * @return {Array} A list of classes or an empty array if there are no classes on the current element
   */
  function classes() {
    return this._node.getAttribute('class') ? this._node.getAttribute('class').trim().split(/\s+/) : [];
  }

  /**
   * Adds one or a space separated list of classes to the current element and ensures the classes are only existing once.
   *
   * @memberof Chartist.Svg
   * @param {String} names A white space separated list of class names
   * @return {Chartist.Svg} The wrapper of the current element
   */
  function addClass(names) {
    this._node.setAttribute('class',
      this.classes(this._node)
        .concat(names.trim().split(/\s+/))
        .filter(function(elem, pos, self) {
          return self.indexOf(elem) === pos;
        }).join(' ')
    );

    return this;
  }

  /**
   * Removes one or a space separated list of classes from the current element.
   *
   * @memberof Chartist.Svg
   * @param {String} names A white space separated list of class names
   * @return {Chartist.Svg} The wrapper of the current element
   */
  function removeClass(names) {
    var removedClasses = names.trim().split(/\s+/);

    this._node.setAttribute('class', this.classes(this._node).filter(function(name) {
      return removedClasses.indexOf(name) === -1;
    }).join(' '));

    return this;
  }

  /**
   * Removes all classes from the current element.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The wrapper of the current element
   */
  function removeAllClasses() {
    this._node.setAttribute('class', '');

    return this;
  }

  /**
   * Get element height using `getBoundingClientRect`
   *
   * @memberof Chartist.Svg
   * @return {Number} The elements height in pixels
   */
  function height() {
    return this._node.getBoundingClientRect().height;
  }

  /**
   * Get element width using `getBoundingClientRect`
   *
   * @memberof Chartist.Core
   * @return {Number} The elements width in pixels
   */
  function width() {
    return this._node.getBoundingClientRect().width;
  }

  /**
   * The animate function lets you animate the current element with SMIL animations. You can add animations for multiple attributes at the same time by using an animation definition object. This object should contain SMIL animation attributes. Please refer to http://www.w3.org/TR/SVG/animate.html for a detailed specification about the available animation attributes. Additionally an easing property can be passed in the animation definition object. This can be a string with a name of an easing function in `Chartist.Svg.Easing` or an array with four numbers specifying a cubic Bézier curve.
   * **An animations object could look like this:**
   * ```javascript
   * element.animate({
   *   opacity: {
   *     dur: 1000,
   *     from: 0,
   *     to: 1
   *   },
   *   x1: {
   *     dur: '1000ms',
   *     from: 100,
   *     to: 200,
   *     easing: 'easeOutQuart'
   *   },
   *   y1: {
   *     dur: '2s',
   *     from: 0,
   *     to: 100
   *   }
   * });
   * ```
   * **Automatic unit conversion**
   * For the `dur` and the `begin` animate attribute you can also omit a unit by passing a number. The number will automatically be converted to milli seconds.
   * **Guided mode**
   * The default behavior of SMIL animations with offset using the `begin` attribute is that the attribute will keep it's original value until the animation starts. Mostly this behavior is not desired as you'd like to have your element attributes already initialized with the animation `from` value even before the animation starts. Also if you don't specify `fill="freeze"` on an animate element or if you delete the animation after it's done (which is done in guided mode) the attribute will switch back to the initial value. This behavior is also not desired when performing simple one-time animations. For one-time animations you'd want to trigger animations immediately instead of relative to the document begin time. That's why in guided mode Chartist.Svg will also use the `begin` property to schedule a timeout and manually start the animation after the timeout. If you're using multiple SMIL definition objects for an attribute (in an array), guided mode will be disabled for this attribute, even if you explicitly enabled it.
   * If guided mode is enabled the following behavior is added:
   * - Before the animation starts (even when delayed with `begin`) the animated attribute will be set already to the `from` value of the animation
   * - `begin` is explicitly set to `indefinite` so it can be started manually without relying on document begin time (creation)
   * - The animate element will be forced to use `fill="freeze"`
   * - The animation will be triggered with `beginElement()` in a timeout where `begin` of the definition object is interpreted in milli seconds. If no `begin` was specified the timeout is triggered immediately.
   * - After the animation the element attribute value will be set to the `to` value of the animation
   * - The animate element is deleted from the DOM
   *
   * @memberof Chartist.Svg
   * @param {Object} animations An animations object where the property keys are the attributes you'd like to animate. The properties should be objects again that contain the SMIL animation attributes (usually begin, dur, from, and to). The property begin and dur is auto converted (see Automatic unit conversion). You can also schedule multiple animations for the same attribute by passing an Array of SMIL definition objects. Attributes that contain an array of SMIL definition objects will not be executed in guided mode.
   * @param {Boolean} guided Specify if guided mode should be activated for this animation (see Guided mode). If not otherwise specified, guided mode will be activated.
   * @param {Object} eventEmitter If specified, this event emitter will be notified when an animation starts or ends.
   * @return {Chartist.Svg} The current element where the animation was added
   */
  function animate(animations, guided, eventEmitter) {
    if(guided === undefined) {
      guided = true;
    }

    Object.keys(animations).forEach(function createAnimateForAttributes(attribute) {

      function createAnimate(animationDefinition, guided) {
        var attributeProperties = {},
          animate,
          timeout,
          easing;

        // Check if an easing is specified in the definition object and delete it from the object as it will not
        // be part of the animate element attributes.
        if(animationDefinition.easing) {
          // If already an easing Bézier curve array we take it or we lookup a easing array in the Easing object
          easing = animationDefinition.easing instanceof Array ?
            animationDefinition.easing :
            Chartist.Svg.Easing[animationDefinition.easing];
          delete animationDefinition.easing;
        }

        // If numeric dur or begin was provided we assume milli seconds
        animationDefinition.begin = Chartist.ensureUnit(animationDefinition.begin, 'ms');
        animationDefinition.dur = Chartist.ensureUnit(animationDefinition.dur, 'ms');

        if(easing) {
          animationDefinition.calcMode = 'spline';
          animationDefinition.keySplines = easing.join(' ');
          animationDefinition.keyTimes = '0;1';
        }

        // Adding "fill: freeze" if we are in guided mode and set initial attribute values
        if(guided) {
          animationDefinition.fill = 'freeze';
          // Animated property on our element should already be set to the animation from value in guided mode
          attributeProperties[attribute] = animationDefinition.from;
          this.attr(attributeProperties);

          // In guided mode we also set begin to indefinite so we can trigger the start manually and put the begin
          // which needs to be in ms aside
          timeout = Chartist.quantity(animationDefinition.begin || 0).value;
          animationDefinition.begin = 'indefinite';
        }

        animate = this.elem('animate', Chartist.extend({
          attributeName: attribute
        }, animationDefinition));

        if(guided) {
          // If guided we take the value that was put aside in timeout and trigger the animation manually with a timeout
          setTimeout(function() {
            // If beginElement fails we set the animated attribute to the end position and remove the animate element
            // This happens if the SMIL ElementTimeControl interface is not supported or any other problems occured in
            // the browser. (Currently FF 34 does not support animate elements in foreignObjects)
            try {
              animate._node.beginElement();
            } catch(err) {
              // Set animated attribute to current animated value
              attributeProperties[attribute] = animationDefinition.to;
              this.attr(attributeProperties);
              // Remove the animate element as it's no longer required
              animate.remove();
            }
          }.bind(this), timeout);
        }

        if(eventEmitter) {
          animate._node.addEventListener('beginEvent', function handleBeginEvent() {
            eventEmitter.emit('animationBegin', {
              element: this,
              animate: animate._node,
              params: animationDefinition
            });
          }.bind(this));
        }

        animate._node.addEventListener('endEvent', function handleEndEvent() {
          if(eventEmitter) {
            eventEmitter.emit('animationEnd', {
              element: this,
              animate: animate._node,
              params: animationDefinition
            });
          }

          if(guided) {
            // Set animated attribute to current animated value
            attributeProperties[attribute] = animationDefinition.to;
            this.attr(attributeProperties);
            // Remove the animate element as it's no longer required
            animate.remove();
          }
        }.bind(this));
      }

      // If current attribute is an array of definition objects we create an animate for each and disable guided mode
      if(animations[attribute] instanceof Array) {
        animations[attribute].forEach(function(animationDefinition) {
          createAnimate.bind(this)(animationDefinition, false);
        }.bind(this));
      } else {
        createAnimate.bind(this)(animations[attribute], guided);
      }

    }.bind(this));

    return this;
  }

  Chartist.Svg = Chartist.Class.extend({
    constructor: Svg,
    attr: attr,
    elem: elem,
    parent: parent,
    root: root,
    querySelector: querySelector,
    querySelectorAll: querySelectorAll,
    getNode: getNode,
    foreignObject: foreignObject,
    text: text,
    empty: empty,
    remove: remove,
    replace: replace,
    append: append,
    classes: classes,
    addClass: addClass,
    removeClass: removeClass,
    removeAllClasses: removeAllClasses,
    height: height,
    width: width,
    animate: animate
  });

  /**
   * This method checks for support of a given SVG feature like Extensibility, SVG-animation or the like. Check http://www.w3.org/TR/SVG11/feature for a detailed list.
   *
   * @memberof Chartist.Svg
   * @param {String} feature The SVG 1.1 feature that should be checked for support.
   * @return {Boolean} True of false if the feature is supported or not
   */
  Chartist.Svg.isSupported = function(feature) {
    return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#' + feature, '1.1');
  };

  /**
   * This Object contains some standard easing cubic bezier curves. Then can be used with their name in the `Chartist.Svg.animate`. You can also extend the list and use your own name in the `animate` function. Click the show code button to see the available bezier functions.
   *
   * @memberof Chartist.Svg
   */
  var easingCubicBeziers = {
    easeInSine: [0.47, 0, 0.745, 0.715],
    easeOutSine: [0.39, 0.575, 0.565, 1],
    easeInOutSine: [0.445, 0.05, 0.55, 0.95],
    easeInQuad: [0.55, 0.085, 0.68, 0.53],
    easeOutQuad: [0.25, 0.46, 0.45, 0.94],
    easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
    easeInCubic: [0.55, 0.055, 0.675, 0.19],
    easeOutCubic: [0.215, 0.61, 0.355, 1],
    easeInOutCubic: [0.645, 0.045, 0.355, 1],
    easeInQuart: [0.895, 0.03, 0.685, 0.22],
    easeOutQuart: [0.165, 0.84, 0.44, 1],
    easeInOutQuart: [0.77, 0, 0.175, 1],
    easeInQuint: [0.755, 0.05, 0.855, 0.06],
    easeOutQuint: [0.23, 1, 0.32, 1],
    easeInOutQuint: [0.86, 0, 0.07, 1],
    easeInExpo: [0.95, 0.05, 0.795, 0.035],
    easeOutExpo: [0.19, 1, 0.22, 1],
    easeInOutExpo: [1, 0, 0, 1],
    easeInCirc: [0.6, 0.04, 0.98, 0.335],
    easeOutCirc: [0.075, 0.82, 0.165, 1],
    easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
    easeInBack: [0.6, -0.28, 0.735, 0.045],
    easeOutBack: [0.175, 0.885, 0.32, 1.275],
    easeInOutBack: [0.68, -0.55, 0.265, 1.55]
  };

  Chartist.Svg.Easing = easingCubicBeziers;

  /**
   * This helper class is to wrap multiple `Chartist.Svg` elements into a list where you can call the `Chartist.Svg` functions on all elements in the list with one call. This is helpful when you'd like to perform calls with `Chartist.Svg` on multiple elements.
   * An instance of this class is also returned by `Chartist.Svg.querySelectorAll`.
   *
   * @memberof Chartist.Svg
   * @param {Array<Node>|NodeList} nodeList An Array of SVG DOM nodes or a SVG DOM NodeList (as returned by document.querySelectorAll)
   * @constructor
   */
  function SvgList(nodeList) {
    var list = this;

    this.svgElements = [];
    for(var i = 0; i < nodeList.length; i++) {
      this.svgElements.push(new Chartist.Svg(nodeList[i]));
    }

    // Add delegation methods for Chartist.Svg
    Object.keys(Chartist.Svg.prototype).filter(function(prototypeProperty) {
      return ['constructor',
          'parent',
          'querySelector',
          'querySelectorAll',
          'replace',
          'append',
          'classes',
          'height',
          'width'].indexOf(prototypeProperty) === -1;
    }).forEach(function(prototypeProperty) {
      list[prototypeProperty] = function() {
        var args = Array.prototype.slice.call(arguments, 0);
        list.svgElements.forEach(function(element) {
          Chartist.Svg.prototype[prototypeProperty].apply(element, args);
        });
        return list;
      };
    });
  }

  Chartist.Svg.List = Chartist.Class.extend({
    constructor: SvgList
  });
}(window, document, Chartist));
;/**
 * Chartist SVG path module for SVG path description creation and modification.
 *
 * @module Chartist.Svg.Path
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  /**
   * Contains the descriptors of supported element types in a SVG path. Currently only move, line and curve are supported.
   *
   * @memberof Chartist.Svg.Path
   * @type {Object}
   */
  var elementDescriptions = {
    m: ['x', 'y'],
    l: ['x', 'y'],
    c: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
    a: ['rx', 'ry', 'xAr', 'lAf', 'sf', 'x', 'y']
  };

  /**
   * Default options for newly created SVG path objects.
   *
   * @memberof Chartist.Svg.Path
   * @type {Object}
   */
  var defaultOptions = {
    // The accuracy in digit count after the decimal point. This will be used to round numbers in the SVG path. If this option is set to false then no rounding will be performed.
    accuracy: 3
  };

  function element(command, params, pathElements, pos, relative, data) {
    var pathElement = Chartist.extend({
      command: relative ? command.toLowerCase() : command.toUpperCase()
    }, params, data ? { data: data } : {} );

    pathElements.splice(pos, 0, pathElement);
  }

  function forEachParam(pathElements, cb) {
    pathElements.forEach(function(pathElement, pathElementIndex) {
      elementDescriptions[pathElement.command.toLowerCase()].forEach(function(paramName, paramIndex) {
        cb(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
      });
    });
  }

  /**
   * Used to construct a new path object.
   *
   * @memberof Chartist.Svg.Path
   * @param {Boolean} close If set to true then this path will be closed when stringified (with a Z at the end)
   * @param {Object} options Options object that overrides the default objects. See default options for more details.
   * @constructor
   */
  function SvgPath(close, options) {
    this.pathElements = [];
    this.pos = 0;
    this.close = close;
    this.options = Chartist.extend({}, defaultOptions, options);
  }

  /**
   * Gets or sets the current position (cursor) inside of the path. You can move around the cursor freely but limited to 0 or the count of existing elements. All modifications with element functions will insert new elements at the position of this cursor.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} [pos] If a number is passed then the cursor is set to this position in the path element array.
   * @return {Chartist.Svg.Path|Number} If the position parameter was passed then the return value will be the path object for easy call chaining. If no position parameter was passed then the current position is returned.
   */
  function position(pos) {
    if(pos !== undefined) {
      this.pos = Math.max(0, Math.min(this.pathElements.length, pos));
      return this;
    } else {
      return this.pos;
    }
  }

  /**
   * Removes elements from the path starting at the current position.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} count Number of path elements that should be removed from the current position.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function remove(count) {
    this.pathElements.splice(this.pos, count);
    return this;
  }

  /**
   * Use this function to add a new move SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The x coordinate for the move element.
   * @param {Number} y The y coordinate for the move element.
   * @param {Boolean} [relative] If set to true the move element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function move(x, y, relative, data) {
    element('M', {
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Use this function to add a new line SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The x coordinate for the line element.
   * @param {Number} y The y coordinate for the line element.
   * @param {Boolean} [relative] If set to true the line element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function line(x, y, relative, data) {
    element('L', {
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Use this function to add a new curve SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x1 The x coordinate for the first control point of the bezier curve.
   * @param {Number} y1 The y coordinate for the first control point of the bezier curve.
   * @param {Number} x2 The x coordinate for the second control point of the bezier curve.
   * @param {Number} y2 The y coordinate for the second control point of the bezier curve.
   * @param {Number} x The x coordinate for the target point of the curve element.
   * @param {Number} y The y coordinate for the target point of the curve element.
   * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function curve(x1, y1, x2, y2, x, y, relative, data) {
    element('C', {
      x1: +x1,
      y1: +y1,
      x2: +x2,
      y2: +y2,
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Use this function to add a new non-bezier curve SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} rx The radius to be used for the x-axis of the arc.
   * @param {Number} ry The radius to be used for the y-axis of the arc.
   * @param {Number} xAr Defines the orientation of the arc
   * @param {Number} lAf Large arc flag
   * @param {Number} sf Sweep flag
   * @param {Number} x The x coordinate for the target point of the curve element.
   * @param {Number} y The y coordinate for the target point of the curve element.
   * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function arc(rx, ry, xAr, lAf, sf, x, y, relative, data) {
    element('A', {
      rx: +rx,
      ry: +ry,
      xAr: +xAr,
      lAf: +lAf,
      sf: +sf,
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Parses an SVG path seen in the d attribute of path elements, and inserts the parsed elements into the existing path object at the current cursor position. Any closing path indicators (Z at the end of the path) will be ignored by the parser as this is provided by the close option in the options of the path object.
   *
   * @memberof Chartist.Svg.Path
   * @param {String} path Any SVG path that contains move (m), line (l) or curve (c) components.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function parse(path) {
    // Parsing the SVG path string into an array of arrays [['M', '10', '10'], ['L', '100', '100']]
    var chunks = path.replace(/([A-Za-z])([0-9])/g, '$1 $2')
      .replace(/([0-9])([A-Za-z])/g, '$1 $2')
      .split(/[\s,]+/)
      .reduce(function(result, element) {
        if(element.match(/[A-Za-z]/)) {
          result.push([]);
        }

        result[result.length - 1].push(element);
        return result;
      }, []);

    // If this is a closed path we remove the Z at the end because this is determined by the close option
    if(chunks[chunks.length - 1][0].toUpperCase() === 'Z') {
      chunks.pop();
    }

    // Using svgPathElementDescriptions to map raw path arrays into objects that contain the command and the parameters
    // For example {command: 'M', x: '10', y: '10'}
    var elements = chunks.map(function(chunk) {
        var command = chunk.shift(),
          description = elementDescriptions[command.toLowerCase()];

        return Chartist.extend({
          command: command
        }, description.reduce(function(result, paramName, index) {
          result[paramName] = +chunk[index];
          return result;
        }, {}));
      });

    // Preparing a splice call with the elements array as var arg params and insert the parsed elements at the current position
    var spliceArgs = [this.pos, 0];
    Array.prototype.push.apply(spliceArgs, elements);
    Array.prototype.splice.apply(this.pathElements, spliceArgs);
    // Increase the internal position by the element count
    this.pos += elements.length;

    return this;
  }

  /**
   * This function renders to current SVG path object into a final SVG string that can be used in the d attribute of SVG path elements. It uses the accuracy option to round big decimals. If the close parameter was set in the constructor of this path object then a path closing Z will be appended to the output string.
   *
   * @memberof Chartist.Svg.Path
   * @return {String}
   */
  function stringify() {
    var accuracyMultiplier = Math.pow(10, this.options.accuracy);

    return this.pathElements.reduce(function(path, pathElement) {
        var params = elementDescriptions[pathElement.command.toLowerCase()].map(function(paramName) {
          return this.options.accuracy ?
            (Math.round(pathElement[paramName] * accuracyMultiplier) / accuracyMultiplier) :
            pathElement[paramName];
        }.bind(this));

        return path + pathElement.command + params.join(',');
      }.bind(this), '') + (this.close ? 'Z' : '');
  }

  /**
   * Scales all elements in the current SVG path object. There is an individual parameter for each coordinate. Scaling will also be done for control points of curves, affecting the given coordinate.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The number which will be used to scale the x, x1 and x2 of all path elements.
   * @param {Number} y The number which will be used to scale the y, y1 and y2 of all path elements.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function scale(x, y) {
    forEachParam(this.pathElements, function(pathElement, paramName) {
      pathElement[paramName] *= paramName[0] === 'x' ? x : y;
    });
    return this;
  }

  /**
   * Translates all elements in the current SVG path object. The translation is relative and there is an individual parameter for each coordinate. Translation will also be done for control points of curves, affecting the given coordinate.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The number which will be used to translate the x, x1 and x2 of all path elements.
   * @param {Number} y The number which will be used to translate the y, y1 and y2 of all path elements.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function translate(x, y) {
    forEachParam(this.pathElements, function(pathElement, paramName) {
      pathElement[paramName] += paramName[0] === 'x' ? x : y;
    });
    return this;
  }

  /**
   * This function will run over all existing path elements and then loop over their attributes. The callback function will be called for every path element attribute that exists in the current path.
   * The method signature of the callback function looks like this:
   * ```javascript
   * function(pathElement, paramName, pathElementIndex, paramIndex, pathElements)
   * ```
   * If something else than undefined is returned by the callback function, this value will be used to replace the old value. This allows you to build custom transformations of path objects that can't be achieved using the basic transformation functions scale and translate.
   *
   * @memberof Chartist.Svg.Path
   * @param {Function} transformFnc The callback function for the transformation. Check the signature in the function description.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function transform(transformFnc) {
    forEachParam(this.pathElements, function(pathElement, paramName, pathElementIndex, paramIndex, pathElements) {
      var transformed = transformFnc(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
      if(transformed || transformed === 0) {
        pathElement[paramName] = transformed;
      }
    });
    return this;
  }

  /**
   * This function clones a whole path object with all its properties. This is a deep clone and path element objects will also be cloned.
   *
   * @memberof Chartist.Svg.Path
   * @param {Boolean} [close] Optional option to set the new cloned path to closed. If not specified or false, the original path close option will be used.
   * @return {Chartist.Svg.Path}
   */
  function clone(close) {
    var c = new Chartist.Svg.Path(close || this.close);
    c.pos = this.pos;
    c.pathElements = this.pathElements.slice().map(function cloneElements(pathElement) {
      return Chartist.extend({}, pathElement);
    });
    c.options = Chartist.extend({}, this.options);
    return c;
  }

  /**
   * Split a Svg.Path object by a specific command in the path chain. The path chain will be split and an array of newly created paths objects will be returned. This is useful if you'd like to split an SVG path by it's move commands, for example, in order to isolate chunks of drawings.
   *
   * @memberof Chartist.Svg.Path
   * @param {String} command The command you'd like to use to split the path
   * @return {Array<Chartist.Svg.Path>}
   */
  function splitByCommand(command) {
    var split = [
      new Chartist.Svg.Path()
    ];

    this.pathElements.forEach(function(pathElement) {
      if(pathElement.command === command.toUpperCase() && split[split.length - 1].pathElements.length !== 0) {
        split.push(new Chartist.Svg.Path());
      }

      split[split.length - 1].pathElements.push(pathElement);
    });

    return split;
  }

  /**
   * This static function on `Chartist.Svg.Path` is joining multiple paths together into one paths.
   *
   * @memberof Chartist.Svg.Path
   * @param {Array<Chartist.Svg.Path>} paths A list of paths to be joined together. The order is important.
   * @param {boolean} close If the newly created path should be a closed path
   * @param {Object} options Path options for the newly created path.
   * @return {Chartist.Svg.Path}
   */

  function join(paths, close, options) {
    var joinedPath = new Chartist.Svg.Path(close, options);
    for(var i = 0; i < paths.length; i++) {
      var path = paths[i];
      for(var j = 0; j < path.pathElements.length; j++) {
        joinedPath.pathElements.push(path.pathElements[j]);
      }
    }
    return joinedPath;
  }

  Chartist.Svg.Path = Chartist.Class.extend({
    constructor: SvgPath,
    position: position,
    remove: remove,
    move: move,
    line: line,
    curve: curve,
    arc: arc,
    scale: scale,
    translate: translate,
    transform: transform,
    parse: parse,
    stringify: stringify,
    clone: clone,
    splitByCommand: splitByCommand
  });

  Chartist.Svg.Path.elementDescriptions = elementDescriptions;
  Chartist.Svg.Path.join = join;
}(window, document, Chartist));
;/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  var axisUnits = {
    x: {
      pos: 'x',
      len: 'width',
      dir: 'horizontal',
      rectStart: 'x1',
      rectEnd: 'x2',
      rectOffset: 'y2'
    },
    y: {
      pos: 'y',
      len: 'height',
      dir: 'vertical',
      rectStart: 'y2',
      rectEnd: 'y1',
      rectOffset: 'x1'
    }
  };

  function Axis(units, chartRect, ticks, options) {
    this.units = units;
    this.counterUnits = units === axisUnits.x ? axisUnits.y : axisUnits.x;
    this.chartRect = chartRect;
    this.axisLength = chartRect[units.rectEnd] - chartRect[units.rectStart];
    this.gridOffset = chartRect[units.rectOffset];
    this.ticks = ticks;
    this.options = options;
  }

  function createGridAndLabels(gridGroup, labelGroup, useForeignObject, chartOptions, eventEmitter) {
    var axisOptions = chartOptions['axis' + this.units.pos.toUpperCase()];
    var projectedValues = this.ticks.map(this.projectValue.bind(this));
    var labelValues = this.ticks.map(axisOptions.labelInterpolationFnc);

    projectedValues.forEach(function(projectedValue, index) {
      var labelOffset = {
        x: 0,
        y: 0
      };

      // TODO: Find better solution for solving this problem
      // Calculate how much space we have available for the label
      var labelLength;
      if(projectedValues[index + 1]) {
        // If we still have one label ahead, we can calculate the distance to the next tick / label
        labelLength = projectedValues[index + 1] - projectedValue;
      } else {
        // If we don't have a label ahead and we have only two labels in total, we just take the remaining distance to
        // on the whole axis length. We limit that to a minimum of 30 pixel, so that labels close to the border will
        // still be visible inside of the chart padding.
        labelLength = Math.max(this.axisLength - projectedValue, 30);
      }

      // Skip grid lines and labels where interpolated label values are falsey (execpt for 0)
      if(Chartist.isFalseyButZero(labelValues[index]) && labelValues[index] !== '') {
        return;
      }

      // Transform to global coordinates using the chartRect
      // We also need to set the label offset for the createLabel function
      if(this.units.pos === 'x') {
        projectedValue = this.chartRect.x1 + projectedValue;
        labelOffset.x = chartOptions.axisX.labelOffset.x;

        // If the labels should be positioned in start position (top side for vertical axis) we need to set a
        // different offset as for positioned with end (bottom)
        if(chartOptions.axisX.position === 'start') {
          labelOffset.y = this.chartRect.padding.top + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
        } else {
          labelOffset.y = this.chartRect.y1 + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
        }
      } else {
        projectedValue = this.chartRect.y1 - projectedValue;
        labelOffset.y = chartOptions.axisY.labelOffset.y - (useForeignObject ? labelLength : 0);

        // If the labels should be positioned in start position (left side for horizontal axis) we need to set a
        // different offset as for positioned with end (right side)
        if(chartOptions.axisY.position === 'start') {
          labelOffset.x = useForeignObject ? this.chartRect.padding.left + chartOptions.axisY.labelOffset.x : this.chartRect.x1 - 10;
        } else {
          labelOffset.x = this.chartRect.x2 + chartOptions.axisY.labelOffset.x + 10;
        }
      }

      if(axisOptions.showGrid) {
        Chartist.createGrid(projectedValue, index, this, this.gridOffset, this.chartRect[this.counterUnits.len](), gridGroup, [
          chartOptions.classNames.grid,
          chartOptions.classNames[this.units.dir]
        ], eventEmitter);
      }

      if(axisOptions.showLabel) {
        Chartist.createLabel(projectedValue, labelLength, index, labelValues, this, axisOptions.offset, labelOffset, labelGroup, [
          chartOptions.classNames.label,
          chartOptions.classNames[this.units.dir],
          (axisOptions.position === 'start' ? chartOptions.classNames[axisOptions.position] : chartOptions.classNames['end'])
        ], useForeignObject, eventEmitter);
      }
    }.bind(this));
  }

  Chartist.Axis = Chartist.Class.extend({
    constructor: Axis,
    createGridAndLabels: createGridAndLabels,
    projectValue: function(value, index, data) {
      throw new Error('Base axis can\'t be instantiated!');
    }
  });

  Chartist.Axis.units = axisUnits;

}(window, document, Chartist));
;/**
 * The auto scale axis uses standard linear scale projection of values along an axis. It uses order of magnitude to find a scale automatically and evaluates the available space in order to find the perfect amount of ticks for your chart.
 * **Options**
 * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
 * ```javascript
 * var options = {
 *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
 *   high: 100,
 *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
 *   low: 0,
 *   // This option will be used when finding the right scale division settings. The amount of ticks on the scale will be determined so that as many ticks as possible will be displayed, while not violating this minimum required space (in pixel).
 *   scaleMinSpace: 20,
 *   // Can be set to true or false. If set to true, the scale will be generated with whole numbers only.
 *   onlyInteger: true,
 *   // The reference value can be used to make sure that this value will always be on the chart. This is especially useful on bipolar charts where the bipolar center always needs to be part of the chart.
 *   referenceValue: 5
 * };
 * ```
 *
 * @module Chartist.AutoScaleAxis
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  function AutoScaleAxis(axisUnit, data, chartRect, options) {
    // Usually we calculate highLow based on the data but this can be overriden by a highLow object in the options
    var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
    this.bounds = Chartist.getBounds(chartRect[axisUnit.rectEnd] - chartRect[axisUnit.rectStart], highLow, options.scaleMinSpace || 20, options.onlyInteger);
    this.range = {
      min: this.bounds.min,
      max: this.bounds.max
    };

    Chartist.AutoScaleAxis.super.constructor.call(this,
      axisUnit,
      chartRect,
      this.bounds.values,
      options);
  }

  function projectValue(value) {
    return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.bounds.min) / this.bounds.range;
  }

  Chartist.AutoScaleAxis = Chartist.Axis.extend({
    constructor: AutoScaleAxis,
    projectValue: projectValue
  });

}(window, document, Chartist));
;/**
 * The fixed scale axis uses standard linear projection of values along an axis. It makes use of a divisor option to divide the range provided from the minimum and maximum value or the options high and low that will override the computed minimum and maximum.
 * **Options**
 * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
 * ```javascript
 * var options = {
 *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
 *   high: 100,
 *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
 *   low: 0,
 *   // If specified then the value range determined from minimum to maximum (or low and high) will be divided by this number and ticks will be generated at those division points. The default divisor is 1.
 *   divisor: 4,
 *   // If ticks is explicitly set, then the axis will not compute the ticks with the divisor, but directly use the data in ticks to determine at what points on the axis a tick need to be generated.
 *   ticks: [1, 10, 20, 30]
 * };
 * ```
 *
 * @module Chartist.FixedScaleAxis
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  function FixedScaleAxis(axisUnit, data, chartRect, options) {
    var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
    this.divisor = options.divisor || 1;
    this.ticks = options.ticks || Chartist.times(this.divisor).map(function(value, index) {
      return highLow.low + (highLow.high - highLow.low) / this.divisor * index;
    }.bind(this));
    this.ticks.sort(function(a, b) {
      return a - b;
    });
    this.range = {
      min: highLow.low,
      max: highLow.high
    };

    Chartist.FixedScaleAxis.super.constructor.call(this,
      axisUnit,
      chartRect,
      this.ticks,
      options);

    this.stepLength = this.axisLength / this.divisor;
  }

  function projectValue(value) {
    return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.range.min) / (this.range.max - this.range.min);
  }

  Chartist.FixedScaleAxis = Chartist.Axis.extend({
    constructor: FixedScaleAxis,
    projectValue: projectValue
  });

}(window, document, Chartist));
;/**
 * The step axis for step based charts like bar chart or step based line charts. It uses a fixed amount of ticks that will be equally distributed across the whole axis length. The projection is done using the index of the data value rather than the value itself and therefore it's only useful for distribution purpose.
 * **Options**
 * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
 * ```javascript
 * var options = {
 *   // Ticks to be used to distribute across the axis length. As this axis type relies on the index of the value rather than the value, arbitrary data that can be converted to a string can be used as ticks.
 *   ticks: ['One', 'Two', 'Three'],
 *   // If set to true the full width will be used to distribute the values where the last value will be at the maximum of the axis length. If false the spaces between the ticks will be evenly distributed instead.
 *   stretch: true
 * };
 * ```
 *
 * @module Chartist.StepAxis
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  function StepAxis(axisUnit, data, chartRect, options) {
    Chartist.StepAxis.super.constructor.call(this,
      axisUnit,
      chartRect,
      options.ticks,
      options);

    var calc = Math.max(1, options.ticks.length - (options.stretch ? 1 : 0));
    this.stepLength = this.axisLength / calc;
  }

  function projectValue(value, index) {
    return this.stepLength * index;
  }

  Chartist.StepAxis = Chartist.Axis.extend({
    constructor: StepAxis,
    projectValue: projectValue
  });

}(window, document, Chartist));
;/**
 * The Chartist line chart can be used to draw Line or Scatter charts. If used in the browser you can access the global `Chartist` namespace where you find the `Line` function as a main entry point.
 *
 * For examples on how to use the line chart please check the examples of the `Chartist.Line` method.
 *
 * @module Chartist.Line
 */
/* global Chartist */
(function(window, document, Chartist){
  'use strict';

  /**
   * Default options in line charts. Expand the code view to see a detailed list of options with comments.
   *
   * @memberof Chartist.Line
   */
  var defaultOptions = {
    // Options for X-Axis
    axisX: {
      // The offset of the labels to the chart area
      offset: 30,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'end',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // Set the axis type to be used to project values on this axis. If not defined, Chartist.StepAxis will be used for the X-Axis, where the ticks option will be set to the labels in the data and the stretch option will be set to the global fullWidth option. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
      type: undefined
    },
    // Options for Y-Axis
    axisY: {
      // The offset of the labels to the chart area
      offset: 40,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'start',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // Set the axis type to be used to project values on this axis. If not defined, Chartist.AutoScaleAxis will be used for the Y-Axis, where the high and low options will be set to the global high and low options. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
      type: undefined,
      // This value specifies the minimum height in pixel of the scale steps
      scaleMinSpace: 20,
      // Use only integer values (whole numbers) for the scale steps
      onlyInteger: false
    },
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // If the line should be drawn or not
    showLine: true,
    // If dots should be drawn or not
    showPoint: true,
    // If the line chart should draw an area
    showArea: false,
    // The base for the area chart that will be used to close the area shape (is normally 0)
    areaBase: 0,
    // Specify if the lines should be smoothed. This value can be true or false where true will result in smoothing using the default smoothing interpolation function Chartist.Interpolation.cardinal and false results in Chartist.Interpolation.none. You can also choose other smoothing / interpolation functions available in the Chartist.Interpolation module, or write your own interpolation function. Check the examples for a brief description.
    lineSmooth: true,
    // If the line chart should add a background fill to the .ct-grids group.
    showGridBackground: false,
    // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
    low: undefined,
    // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
    high: undefined,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: {
      top: 15,
      right: 15,
      bottom: 5,
      left: 10
    },
    // When set to true, the last grid line on the x-axis is not drawn and the chart elements will expand to the full available width of the chart. For the last label to be drawn correctly you might need to add chart padding or offset the last label with a draw event handler.
    fullWidth: false,
    // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
    reverseData: false,
    // Override the class names that get used to generate the SVG structure of the chart
    classNames: {
      chart: 'ct-chart-line',
      label: 'ct-label',
      labelGroup: 'ct-labels',
      series: 'ct-series',
      line: 'ct-line',
      point: 'ct-point',
      area: 'ct-area',
      grid: 'ct-grid',
      gridGroup: 'ct-grids',
      gridBackground: 'ct-grid-background',
      vertical: 'ct-vertical',
      horizontal: 'ct-horizontal',
      start: 'ct-start',
      end: 'ct-end'
    }
  };

  /**
   * Creates a new chart
   *
   */
  function createChart(options) {
    var data = Chartist.normalizeData(this.data, options.reverseData, true);

    // Create new svg object
    this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart);
    // Create groups for labels, grid and series
    var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
    var seriesGroup = this.svg.elem('g');
    var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);

    var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
    var axisX, axisY;

    if(options.axisX.type === undefined) {
      axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
        ticks: data.normalized.labels,
        stretch: options.fullWidth
      }));
    } else {
      axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
    }

    if(options.axisY.type === undefined) {
      axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
        high: Chartist.isNumeric(options.high) ? options.high : options.axisY.high,
        low: Chartist.isNumeric(options.low) ? options.low : options.axisY.low
      }));
    } else {
      axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
    }

    axisX.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
    axisY.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

    if (options.showGridBackground) {
      Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
    }

    // Draw the series
    data.raw.series.forEach(function(series, seriesIndex) {
      var seriesElement = seriesGroup.elem('g');

      // Write attributes to series group element. If series name or meta is undefined the attributes will not be written
      seriesElement.attr({
        'ct:series-name': series.name,
        'ct:meta': Chartist.serialize(series.meta)
      });

      // Use series class from series data or if not set generate one
      seriesElement.addClass([
        options.classNames.series,
        (series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex))
      ].join(' '));

      var pathCoordinates = [],
        pathData = [];

      data.normalized.series[seriesIndex].forEach(function(value, valueIndex) {
        var p = {
          x: chartRect.x1 + axisX.projectValue(value, valueIndex, data.normalized.series[seriesIndex]),
          y: chartRect.y1 - axisY.projectValue(value, valueIndex, data.normalized.series[seriesIndex])
        };
        pathCoordinates.push(p.x, p.y);
        pathData.push({
          value: value,
          valueIndex: valueIndex,
          meta: Chartist.getMetaData(series, valueIndex)
        });
      }.bind(this));

      var seriesOptions = {
        lineSmooth: Chartist.getSeriesOption(series, options, 'lineSmooth'),
        showPoint: Chartist.getSeriesOption(series, options, 'showPoint'),
        showLine: Chartist.getSeriesOption(series, options, 'showLine'),
        showArea: Chartist.getSeriesOption(series, options, 'showArea'),
        areaBase: Chartist.getSeriesOption(series, options, 'areaBase')
      };

      var smoothing = typeof seriesOptions.lineSmooth === 'function' ?
        seriesOptions.lineSmooth : (seriesOptions.lineSmooth ? Chartist.Interpolation.monotoneCubic() : Chartist.Interpolation.none());
      // Interpolating path where pathData will be used to annotate each path element so we can trace back the original
      // index, value and meta data
      var path = smoothing(pathCoordinates, pathData);

      // If we should show points we need to create them now to avoid secondary loop
      // Points are drawn from the pathElements returned by the interpolation function
      // Small offset for Firefox to render squares correctly
      if (seriesOptions.showPoint) {

        path.pathElements.forEach(function(pathElement) {
          var point = seriesElement.elem('line', {
            x1: pathElement.x,
            y1: pathElement.y,
            x2: pathElement.x + 0.01,
            y2: pathElement.y
          }, options.classNames.point).attr({
            'ct:value': [pathElement.data.value.x, pathElement.data.value.y].filter(Chartist.isNumeric).join(','),
            'ct:meta': Chartist.serialize(pathElement.data.meta)
          });

          this.eventEmitter.emit('draw', {
            type: 'point',
            value: pathElement.data.value,
            index: pathElement.data.valueIndex,
            meta: pathElement.data.meta,
            series: series,
            seriesIndex: seriesIndex,
            axisX: axisX,
            axisY: axisY,
            group: seriesElement,
            element: point,
            x: pathElement.x,
            y: pathElement.y
          });
        }.bind(this));
      }

      if(seriesOptions.showLine) {
        var line = seriesElement.elem('path', {
          d: path.stringify()
        }, options.classNames.line, true);

        this.eventEmitter.emit('draw', {
          type: 'line',
          values: data.normalized.series[seriesIndex],
          path: path.clone(),
          chartRect: chartRect,
          index: seriesIndex,
          series: series,
          seriesIndex: seriesIndex,
          seriesMeta: series.meta,
          axisX: axisX,
          axisY: axisY,
          group: seriesElement,
          element: line
        });
      }

      // Area currently only works with axes that support a range!
      if(seriesOptions.showArea && axisY.range) {
        // If areaBase is outside the chart area (< min or > max) we need to set it respectively so that
        // the area is not drawn outside the chart area.
        var areaBase = Math.max(Math.min(seriesOptions.areaBase, axisY.range.max), axisY.range.min);

        // We project the areaBase value into screen coordinates
        var areaBaseProjected = chartRect.y1 - axisY.projectValue(areaBase);

        // In order to form the area we'll first split the path by move commands so we can chunk it up into segments
        path.splitByCommand('M').filter(function onlySolidSegments(pathSegment) {
          // We filter only "solid" segments that contain more than one point. Otherwise there's no need for an area
          return pathSegment.pathElements.length > 1;
        }).map(function convertToArea(solidPathSegments) {
          // Receiving the filtered solid path segments we can now convert those segments into fill areas
          var firstElement = solidPathSegments.pathElements[0];
          var lastElement = solidPathSegments.pathElements[solidPathSegments.pathElements.length - 1];

          // Cloning the solid path segment with closing option and removing the first move command from the clone
          // We then insert a new move that should start at the area base and draw a straight line up or down
          // at the end of the path we add an additional straight line to the projected area base value
          // As the closing option is set our path will be automatically closed
          return solidPathSegments.clone(true)
            .position(0)
            .remove(1)
            .move(firstElement.x, areaBaseProjected)
            .line(firstElement.x, firstElement.y)
            .position(solidPathSegments.pathElements.length + 1)
            .line(lastElement.x, areaBaseProjected);

        }).forEach(function createArea(areaPath) {
          // For each of our newly created area paths, we'll now create path elements by stringifying our path objects
          // and adding the created DOM elements to the correct series group
          var area = seriesElement.elem('path', {
            d: areaPath.stringify()
          }, options.classNames.area, true);

          // Emit an event for each area that was drawn
          this.eventEmitter.emit('draw', {
            type: 'area',
            values: data.normalized.series[seriesIndex],
            path: areaPath.clone(),
            series: series,
            seriesIndex: seriesIndex,
            axisX: axisX,
            axisY: axisY,
            chartRect: chartRect,
            index: seriesIndex,
            group: seriesElement,
            element: area
          });
        }.bind(this));
      }
    }.bind(this));

    this.eventEmitter.emit('created', {
      bounds: axisY.bounds,
      chartRect: chartRect,
      axisX: axisX,
      axisY: axisY,
      svg: this.svg,
      options: options
    });
  }

  /**
   * This method creates a new line chart.
   *
   * @memberof Chartist.Line
   * @param {String|Node} query A selector query string or directly a DOM element
   * @param {Object} data The data object that needs to consist of a labels and a series array
   * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
   * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   * @return {Object} An object which exposes the API for the created chart
   *
   * @example
   * // Create a simple line chart
   * var data = {
   *   // A labels array that can contain any sort of values
   *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
   *   // Our series array that contains series objects or in this case series data arrays
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // As options we currently only set a static size of 300x200 px
   * var options = {
   *   width: '300px',
   *   height: '200px'
   * };
   *
   * // In the global name space Chartist we call the Line function to initialize a line chart. As a first parameter we pass in a selector where we would like to get our chart created. Second parameter is the actual data object and as a third parameter we pass in our options
   * new Chartist.Line('.ct-chart', data, options);
   *
   * @example
   * // Use specific interpolation function with configuration from the Chartist.Interpolation module
   *
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [
   *     [1, 1, 8, 1, 7]
   *   ]
   * }, {
   *   lineSmooth: Chartist.Interpolation.cardinal({
   *     tension: 0.2
   *   })
   * });
   *
   * @example
   * // Create a line chart with responsive options
   *
   * var data = {
   *   // A labels array that can contain any sort of values
   *   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
   *   // Our series array that contains series objects or in this case series data arrays
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // In addition to the regular options we specify responsive option overrides that will override the default configutation based on the matching media queries.
   * var responsiveOptions = [
   *   ['screen and (min-width: 641px) and (max-width: 1024px)', {
   *     showPoint: false,
   *     axisX: {
   *       labelInterpolationFnc: function(value) {
   *         // Will return Mon, Tue, Wed etc. on medium screens
   *         return value.slice(0, 3);
   *       }
   *     }
   *   }],
   *   ['screen and (max-width: 640px)', {
   *     showLine: false,
   *     axisX: {
   *       labelInterpolationFnc: function(value) {
   *         // Will return M, T, W etc. on small screens
   *         return value[0];
   *       }
   *     }
   *   }]
   * ];
   *
   * new Chartist.Line('.ct-chart', data, null, responsiveOptions);
   *
   */
  function Line(query, data, options, responsiveOptions) {
    Chartist.Line.super.constructor.call(this,
      query,
      data,
      defaultOptions,
      Chartist.extend({}, defaultOptions, options),
      responsiveOptions);
  }

  // Creating line chart type in Chartist namespace
  Chartist.Line = Chartist.Base.extend({
    constructor: Line,
    createChart: createChart
  });

}(window, document, Chartist));
;/**
 * The bar chart module of Chartist that can be used to draw unipolar or bipolar bar and grouped bar charts.
 *
 * @module Chartist.Bar
 */
/* global Chartist */
(function(window, document, Chartist){
  'use strict';

  /**
   * Default options in bar charts. Expand the code view to see a detailed list of options with comments.
   *
   * @memberof Chartist.Bar
   */
  var defaultOptions = {
    // Options for X-Axis
    axisX: {
      // The offset of the chart drawing area to the border of the container
      offset: 30,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'end',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // This value specifies the minimum width in pixel of the scale steps
      scaleMinSpace: 30,
      // Use only integer values (whole numbers) for the scale steps
      onlyInteger: false
    },
    // Options for Y-Axis
    axisY: {
      // The offset of the chart drawing area to the border of the container
      offset: 40,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'start',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // This value specifies the minimum height in pixel of the scale steps
      scaleMinSpace: 20,
      // Use only integer values (whole numbers) for the scale steps
      onlyInteger: false
    },
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
    high: undefined,
    // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
    low: undefined,
    // Unless low/high are explicitly set, bar chart will be centered at zero by default. Set referenceValue to null to auto scale.
    referenceValue: 0,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: {
      top: 15,
      right: 15,
      bottom: 5,
      left: 10
    },
    // Specify the distance in pixel of bars in a group
    seriesBarDistance: 15,
    // If set to true this property will cause the series bars to be stacked. Check the `stackMode` option for further stacking options.
    stackBars: false,
    // If set to 'overlap' this property will force the stacked bars to draw from the zero line.
    // If set to 'accumulate' this property will form a total for each series point. This will also influence the y-axis and the overall bounds of the chart. In stacked mode the seriesBarDistance property will have no effect.
    stackMode: 'accumulate',
    // Inverts the axes of the bar chart in order to draw a horizontal bar chart. Be aware that you also need to invert your axis settings as the Y Axis will now display the labels and the X Axis the values.
    horizontalBars: false,
    // If set to true then each bar will represent a series and the data array is expected to be a one dimensional array of data values rather than a series array of series. This is useful if the bar chart should represent a profile rather than some data over time.
    distributeSeries: false,
    // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
    reverseData: false,
    // If the bar chart should add a background fill to the .ct-grids group.
    showGridBackground: false,
    // Override the class names that get used to generate the SVG structure of the chart
    classNames: {
      chart: 'ct-chart-bar',
      horizontalBars: 'ct-horizontal-bars',
      label: 'ct-label',
      labelGroup: 'ct-labels',
      series: 'ct-series',
      bar: 'ct-bar',
      grid: 'ct-grid',
      gridGroup: 'ct-grids',
      gridBackground: 'ct-grid-background',
      vertical: 'ct-vertical',
      horizontal: 'ct-horizontal',
      start: 'ct-start',
      end: 'ct-end'
    }
  };

  /**
   * Creates a new chart
   *
   */
  function createChart(options) {
    var data;
    var highLow;

    if(options.distributeSeries) {
      data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
      data.normalized.series = data.normalized.series.map(function(value) {
        return [value];
      });
    } else {
      data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
    }

    // Create new svg element
    this.svg = Chartist.createSvg(
      this.container,
      options.width,
      options.height,
      options.classNames.chart + (options.horizontalBars ? ' ' + options.classNames.horizontalBars : '')
    );

    // Drawing groups in correct order
    var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
    var seriesGroup = this.svg.elem('g');
    var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);

    if(options.stackBars && data.normalized.series.length !== 0) {

      // If stacked bars we need to calculate the high low from stacked values from each series
      var serialSums = Chartist.serialMap(data.normalized.series, function serialSums() {
        return Array.prototype.slice.call(arguments).map(function(value) {
          return value;
        }).reduce(function(prev, curr) {
          return {
            x: prev.x + (curr && curr.x) || 0,
            y: prev.y + (curr && curr.y) || 0
          };
        }, {x: 0, y: 0});
      });

      highLow = Chartist.getHighLow([serialSums], options, options.horizontalBars ? 'x' : 'y');

    } else {

      highLow = Chartist.getHighLow(data.normalized.series, options, options.horizontalBars ? 'x' : 'y');
    }

    // Overrides of high / low from settings
    highLow.high = +options.high || (options.high === 0 ? 0 : highLow.high);
    highLow.low = +options.low || (options.low === 0 ? 0 : highLow.low);

    var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);

    var valueAxis,
      labelAxisTicks,
      labelAxis,
      axisX,
      axisY;

    // We need to set step count based on some options combinations
    if(options.distributeSeries && options.stackBars) {
      // If distributed series are enabled and bars need to be stacked, we'll only have one bar and therefore should
      // use only the first label for the step axis
      labelAxisTicks = data.normalized.labels.slice(0, 1);
    } else {
      // If distributed series are enabled but stacked bars aren't, we should use the series labels
      // If we are drawing a regular bar chart with two dimensional series data, we just use the labels array
      // as the bars are normalized
      labelAxisTicks = data.normalized.labels;
    }

    // Set labelAxis and valueAxis based on the horizontalBars setting. This setting will flip the axes if necessary.
    if(options.horizontalBars) {
      if(options.axisX.type === undefined) {
        valueAxis = axisX = new Chartist.AutoScaleAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
          highLow: highLow,
          referenceValue: 0
        }));
      } else {
        valueAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
          highLow: highLow,
          referenceValue: 0
        }));
      }

      if(options.axisY.type === undefined) {
        labelAxis = axisY = new Chartist.StepAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, {
          ticks: labelAxisTicks
        });
      } else {
        labelAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
      }
    } else {
      if(options.axisX.type === undefined) {
        labelAxis = axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, {
          ticks: labelAxisTicks
        });
      } else {
        labelAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
      }

      if(options.axisY.type === undefined) {
        valueAxis = axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
          highLow: highLow,
          referenceValue: 0
        }));
      } else {
        valueAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
          highLow: highLow,
          referenceValue: 0
        }));
      }
    }

    // Projected 0 point
    var zeroPoint = options.horizontalBars ? (chartRect.x1 + valueAxis.projectValue(0)) : (chartRect.y1 - valueAxis.projectValue(0));
    // Used to track the screen coordinates of stacked bars
    var stackedBarValues = [];

    labelAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
    valueAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

    if (options.showGridBackground) {
      Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
    }

    // Draw the series
    data.raw.series.forEach(function(series, seriesIndex) {
      // Calculating bi-polar value of index for seriesOffset. For i = 0..4 biPol will be -1.5, -0.5, 0.5, 1.5 etc.
      var biPol = seriesIndex - (data.raw.series.length - 1) / 2;
      // Half of the period width between vertical grid lines used to position bars
      var periodHalfLength;
      // Current series SVG element
      var seriesElement;

      // We need to set periodHalfLength based on some options combinations
      if(options.distributeSeries && !options.stackBars) {
        // If distributed series are enabled but stacked bars aren't, we need to use the length of the normaizedData array
        // which is the series count and divide by 2
        periodHalfLength = labelAxis.axisLength / data.normalized.series.length / 2;
      } else if(options.distributeSeries && options.stackBars) {
        // If distributed series and stacked bars are enabled we'll only get one bar so we should just divide the axis
        // length by 2
        periodHalfLength = labelAxis.axisLength / 2;
      } else {
        // On regular bar charts we should just use the series length
        periodHalfLength = labelAxis.axisLength / data.normalized.series[seriesIndex].length / 2;
      }

      // Adding the series group to the series element
      seriesElement = seriesGroup.elem('g');

      // Write attributes to series group element. If series name or meta is undefined the attributes will not be written
      seriesElement.attr({
        'ct:series-name': series.name,
        'ct:meta': Chartist.serialize(series.meta)
      });

      // Use series class from series data or if not set generate one
      seriesElement.addClass([
        options.classNames.series,
        (series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex))
      ].join(' '));

      data.normalized.series[seriesIndex].forEach(function(value, valueIndex) {
        var projected,
          bar,
          previousStack,
          labelAxisValueIndex;

        // We need to set labelAxisValueIndex based on some options combinations
        if(options.distributeSeries && !options.stackBars) {
          // If distributed series are enabled but stacked bars aren't, we can use the seriesIndex for later projection
          // on the step axis for label positioning
          labelAxisValueIndex = seriesIndex;
        } else if(options.distributeSeries && options.stackBars) {
          // If distributed series and stacked bars are enabled, we will only get one bar and therefore always use
          // 0 for projection on the label step axis
          labelAxisValueIndex = 0;
        } else {
          // On regular bar charts we just use the value index to project on the label step axis
          labelAxisValueIndex = valueIndex;
        }

        // We need to transform coordinates differently based on the chart layout
        if(options.horizontalBars) {
          projected = {
            x: chartRect.x1 + valueAxis.projectValue(value && value.x ? value.x : 0, valueIndex, data.normalized.series[seriesIndex]),
            y: chartRect.y1 - labelAxis.projectValue(value && value.y ? value.y : 0, labelAxisValueIndex, data.normalized.series[seriesIndex])
          };
        } else {
          projected = {
            x: chartRect.x1 + labelAxis.projectValue(value && value.x ? value.x : 0, labelAxisValueIndex, data.normalized.series[seriesIndex]),
            y: chartRect.y1 - valueAxis.projectValue(value && value.y ? value.y : 0, valueIndex, data.normalized.series[seriesIndex])
          }
        }

        // If the label axis is a step based axis we will offset the bar into the middle of between two steps using
        // the periodHalfLength value. Also we do arrange the different series so that they align up to each other using
        // the seriesBarDistance. If we don't have a step axis, the bar positions can be chosen freely so we should not
        // add any automated positioning.
        if(labelAxis instanceof Chartist.StepAxis) {
          // Offset to center bar between grid lines, but only if the step axis is not stretched
          if(!labelAxis.options.stretch) {
            projected[labelAxis.units.pos] += periodHalfLength * (options.horizontalBars ? -1 : 1);
          }
          // Using bi-polar offset for multiple series if no stacked bars or series distribution is used
          projected[labelAxis.units.pos] += (options.stackBars || options.distributeSeries) ? 0 : biPol * options.seriesBarDistance * (options.horizontalBars ? -1 : 1);
        }

        // Enter value in stacked bar values used to remember previous screen value for stacking up bars
        previousStack = stackedBarValues[valueIndex] || zeroPoint;
        stackedBarValues[valueIndex] = previousStack - (zeroPoint - projected[labelAxis.counterUnits.pos]);

        // Skip if value is undefined
        if(value === undefined) {
          return;
        }

        var positions = {};
        positions[labelAxis.units.pos + '1'] = projected[labelAxis.units.pos];
        positions[labelAxis.units.pos + '2'] = projected[labelAxis.units.pos];

        if(options.stackBars && (options.stackMode === 'accumulate' || !options.stackMode)) {
          // Stack mode: accumulate (default)
          // If bars are stacked we use the stackedBarValues reference and otherwise base all bars off the zero line
          // We want backwards compatibility, so the expected fallback without the 'stackMode' option
          // to be the original behaviour (accumulate)
          positions[labelAxis.counterUnits.pos + '1'] = previousStack;
          positions[labelAxis.counterUnits.pos + '2'] = stackedBarValues[valueIndex];
        } else {
          // Draw from the zero line normally
          // This is also the same code for Stack mode: overlap
          positions[labelAxis.counterUnits.pos + '1'] = zeroPoint;
          positions[labelAxis.counterUnits.pos + '2'] = projected[labelAxis.counterUnits.pos];
        }

        // Limit x and y so that they are within the chart rect
        positions.x1 = Math.min(Math.max(positions.x1, chartRect.x1), chartRect.x2);
        positions.x2 = Math.min(Math.max(positions.x2, chartRect.x1), chartRect.x2);
        positions.y1 = Math.min(Math.max(positions.y1, chartRect.y2), chartRect.y1);
        positions.y2 = Math.min(Math.max(positions.y2, chartRect.y2), chartRect.y1);

        var metaData = Chartist.getMetaData(series, valueIndex);

        // Create bar element
        bar = seriesElement.elem('line', positions, options.classNames.bar).attr({
          'ct:value': [value.x, value.y].filter(Chartist.isNumeric).join(','),
          'ct:meta': Chartist.serialize(metaData)
        });

        this.eventEmitter.emit('draw', Chartist.extend({
          type: 'bar',
          value: value,
          index: valueIndex,
          meta: metaData,
          series: series,
          seriesIndex: seriesIndex,
          axisX: axisX,
          axisY: axisY,
          chartRect: chartRect,
          group: seriesElement,
          element: bar
        }, positions));
      }.bind(this));
    }.bind(this));

    this.eventEmitter.emit('created', {
      bounds: valueAxis.bounds,
      chartRect: chartRect,
      axisX: axisX,
      axisY: axisY,
      svg: this.svg,
      options: options
    });
  }

  /**
   * This method creates a new bar chart and returns API object that you can use for later changes.
   *
   * @memberof Chartist.Bar
   * @param {String|Node} query A selector query string or directly a DOM element
   * @param {Object} data The data object that needs to consist of a labels and a series array
   * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
   * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   * @return {Object} An object which exposes the API for the created chart
   *
   * @example
   * // Create a simple bar chart
   * var data = {
   *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // In the global name space Chartist we call the Bar function to initialize a bar chart. As a first parameter we pass in a selector where we would like to get our chart created and as a second parameter we pass our data object.
   * new Chartist.Bar('.ct-chart', data);
   *
   * @example
   * // This example creates a bipolar grouped bar chart where the boundaries are limitted to -10 and 10
   * new Chartist.Bar('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5, 6, 7],
   *   series: [
   *     [1, 3, 2, -5, -3, 1, -6],
   *     [-5, -2, -4, -1, 2, -3, 1]
   *   ]
   * }, {
   *   seriesBarDistance: 12,
   *   low: -10,
   *   high: 10
   * });
   *
   */
  function Bar(query, data, options, responsiveOptions) {
    Chartist.Bar.super.constructor.call(this,
      query,
      data,
      defaultOptions,
      Chartist.extend({}, defaultOptions, options),
      responsiveOptions);
  }

  // Creating bar chart type in Chartist namespace
  Chartist.Bar = Chartist.Base.extend({
    constructor: Bar,
    createChart: createChart
  });

}(window, document, Chartist));
;/**
 * The pie chart module of Chartist that can be used to draw pie, donut or gauge charts
 *
 * @module Chartist.Pie
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  /**
   * Default options in line charts. Expand the code view to see a detailed list of options with comments.
   *
   * @memberof Chartist.Pie
   */
  var defaultOptions = {
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: 5,
    // Override the class names that are used to generate the SVG structure of the chart
    classNames: {
      chartPie: 'ct-chart-pie',
      chartDonut: 'ct-chart-donut',
      series: 'ct-series',
      slicePie: 'ct-slice-pie',
      sliceDonut: 'ct-slice-donut',
      label: 'ct-label'
    },
    // The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
    startAngle: 0,
    // An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
    total: undefined,
    // If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
    donut: false,
    // Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
    // This option can be set as number or string to specify a relative width (i.e. 100 or '30%').
    donutWidth: 60,
    // If a label should be shown or not
    showLabel: true,
    // Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
    labelOffset: 0,
    // This option can be set to 'inside', 'outside' or 'center'. Positioned with 'inside' the labels will be placed on half the distance of the radius to the border of the Pie by respecting the 'labelOffset'. The 'outside' option will place the labels at the border of the pie and 'center' will place the labels in the absolute center point of the chart. The 'center' option only makes sense in conjunction with the 'labelOffset' option.
    labelPosition: 'inside',
    // An interpolation function for the label value
    labelInterpolationFnc: Chartist.noop,
    // Label direction can be 'neutral', 'explode' or 'implode'. The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
    labelDirection: 'neutral',
    // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
    reverseData: false,
    // If true empty values will be ignored to avoid drawing unncessary slices and labels
    ignoreEmptyValues: false
  };

  /**
   * Determines SVG anchor position based on direction and center parameter
   *
   * @param center
   * @param label
   * @param direction
   * @return {string}
   */
  function determineAnchorPosition(center, label, direction) {
    var toTheRight = label.x > center.x;

    if(toTheRight && direction === 'explode' ||
      !toTheRight && direction === 'implode') {
      return 'start';
    } else if(toTheRight && direction === 'implode' ||
      !toTheRight && direction === 'explode') {
      return 'end';
    } else {
      return 'middle';
    }
  }

  /**
   * Creates the pie chart
   *
   * @param options
   */
  function createChart(options) {
    var data = Chartist.normalizeData(this.data);
    var seriesGroups = [],
      labelsGroup,
      chartRect,
      radius,
      labelRadius,
      totalDataSum,
      startAngle = options.startAngle;

    // Create SVG.js draw
    this.svg = Chartist.createSvg(this.container, options.width, options.height,options.donut ? options.classNames.chartDonut : options.classNames.chartPie);
    // Calculate charting rect
    chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
    // Get biggest circle radius possible within chartRect
    radius = Math.min(chartRect.width() / 2, chartRect.height() / 2);
    // Calculate total of all series to get reference value or use total reference from optional options
    totalDataSum = options.total || data.normalized.series.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    }, 0);

    var donutWidth = Chartist.quantity(options.donutWidth);
    if (donutWidth.unit === '%') {
      donutWidth.value *= radius / 100;
    }

    // If this is a donut chart we need to adjust our radius to enable strokes to be drawn inside
    // Unfortunately this is not possible with the current SVG Spec
    // See this proposal for more details: http://lists.w3.org/Archives/Public/www-svg/2003Oct/0000.html
    radius -= options.donut ? donutWidth.value / 2  : 0;

    // If labelPosition is set to `outside` or a donut chart is drawn then the label position is at the radius,
    // if regular pie chart it's half of the radius
    if(options.labelPosition === 'outside' || options.donut) {
      labelRadius = radius;
    } else if(options.labelPosition === 'center') {
      // If labelPosition is center we start with 0 and will later wait for the labelOffset
      labelRadius = 0;
    } else {
      // Default option is 'inside' where we use half the radius so the label will be placed in the center of the pie
      // slice
      labelRadius = radius / 2;
    }
    // Add the offset to the labelRadius where a negative offset means closed to the center of the chart
    labelRadius += options.labelOffset;

    // Calculate end angle based on total sum and current data value and offset with padding
    var center = {
      x: chartRect.x1 + chartRect.width() / 2,
      y: chartRect.y2 + chartRect.height() / 2
    };

    // Check if there is only one non-zero value in the series array.
    var hasSingleValInSeries = data.raw.series.filter(function(val) {
      return val.hasOwnProperty('value') ? val.value !== 0 : val !== 0;
    }).length === 1;

    // Creating the series groups
    data.raw.series.forEach(function(series, index) {
      seriesGroups[index] = this.svg.elem('g', null, null);
    }.bind(this));
    //if we need to show labels we create the label group now
    if(options.showLabel) {
      labelsGroup = this.svg.elem('g', null, null);
    }

    // Draw the series
    // initialize series groups
    data.raw.series.forEach(function(series, index) {
      // If current value is zero and we are ignoring empty values then skip to next value
      if (data.normalized.series[index] === 0 && options.ignoreEmptyValues) return;

      // If the series is an object and contains a name or meta data we add a custom attribute
      seriesGroups[index].attr({
        'ct:series-name': series.name
      });

      // Use series class from series data or if not set generate one
      seriesGroups[index].addClass([
        options.classNames.series,
        (series.className || options.classNames.series + '-' + Chartist.alphaNumerate(index))
      ].join(' '));

      // If the whole dataset is 0 endAngle should be zero. Can't divide by 0.
      var endAngle = (totalDataSum > 0 ? startAngle + data.normalized.series[index] / totalDataSum * 360 : 0);

      // Use slight offset so there are no transparent hairline issues
      var overlappigStartAngle = Math.max(0, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2));

      // If we need to draw the arc for all 360 degrees we need to add a hack where we close the circle
      // with Z and use 359.99 degrees
      if(endAngle - overlappigStartAngle >= 359.99) {
        endAngle = overlappigStartAngle + 359.99;
      }

      var start = Chartist.polarToCartesian(center.x, center.y, radius, overlappigStartAngle),
        end = Chartist.polarToCartesian(center.x, center.y, radius, endAngle);

      // Create a new path element for the pie chart. If this isn't a donut chart we should close the path for a correct stroke
      var path = new Chartist.Svg.Path(!options.donut)
        .move(end.x, end.y)
        .arc(radius, radius, 0, endAngle - startAngle > 180, 0, start.x, start.y);

      // If regular pie chart (no donut) we add a line to the center of the circle for completing the pie
      if(!options.donut) {
        path.line(center.x, center.y);
      }

      // Create the SVG path
      // If this is a donut chart we add the donut class, otherwise just a regular slice
      var pathElement = seriesGroups[index].elem('path', {
        d: path.stringify()
      }, options.donut ? options.classNames.sliceDonut : options.classNames.slicePie);

      // Adding the pie series value to the path
      pathElement.attr({
        'ct:value': data.normalized.series[index],
        'ct:meta': Chartist.serialize(series.meta)
      });

      // If this is a donut, we add the stroke-width as style attribute
      if(options.donut) {
        pathElement.attr({
          'style': 'stroke-width: ' + donutWidth.value + 'px'
        });
      }

      // Fire off draw event
      this.eventEmitter.emit('draw', {
        type: 'slice',
        value: data.normalized.series[index],
        totalDataSum: totalDataSum,
        index: index,
        meta: series.meta,
        series: series,
        group: seriesGroups[index],
        element: pathElement,
        path: path.clone(),
        center: center,
        radius: radius,
        startAngle: startAngle,
        endAngle: endAngle
      });

      // If we need to show labels we need to add the label for this slice now
      if(options.showLabel) {
        var labelPosition;
        if(data.raw.series.length === 1) {
          // If we have only 1 series, we can position the label in the center of the pie
          labelPosition = {
            x: center.x,
            y: center.y
          };
        } else {
          // Position at the labelRadius distance from center and between start and end angle
          labelPosition = Chartist.polarToCartesian(
            center.x,
            center.y,
            labelRadius,
            startAngle + (endAngle - startAngle) / 2
          );
        }

        var rawValue;
        if(data.normalized.labels && !Chartist.isFalseyButZero(data.normalized.labels[index])) {
          rawValue = data.normalized.labels[index];
        } else {
          rawValue = data.normalized.series[index];
        }

        var interpolatedValue = options.labelInterpolationFnc(rawValue, index);

        if(interpolatedValue || interpolatedValue === 0) {
          var labelElement = labelsGroup.elem('text', {
            dx: labelPosition.x,
            dy: labelPosition.y,
            'text-anchor': determineAnchorPosition(center, labelPosition, options.labelDirection)
          }, options.classNames.label).text('' + interpolatedValue);

          // Fire off draw event
          this.eventEmitter.emit('draw', {
            type: 'label',
            index: index,
            group: labelsGroup,
            element: labelElement,
            text: '' + interpolatedValue,
            x: labelPosition.x,
            y: labelPosition.y
          });
        }
      }

      // Set next startAngle to current endAngle.
      // (except for last slice)
      startAngle = endAngle;
    }.bind(this));

    this.eventEmitter.emit('created', {
      chartRect: chartRect,
      svg: this.svg,
      options: options
    });
  }

  /**
   * This method creates a new pie chart and returns an object that can be used to redraw the chart.
   *
   * @memberof Chartist.Pie
   * @param {String|Node} query A selector query string or directly a DOM element
   * @param {Object} data The data object in the pie chart needs to have a series property with a one dimensional data array. The values will be normalized against each other and don't necessarily need to be in percentage. The series property can also be an array of value objects that contain a value property and a className property to override the CSS class name for the series group.
   * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
   * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   * @return {Object} An object with a version and an update method to manually redraw the chart
   *
   * @example
   * // Simple pie chart example with four series
   * new Chartist.Pie('.ct-chart', {
   *   series: [10, 2, 4, 3]
   * });
   *
   * @example
   * // Drawing a donut chart
   * new Chartist.Pie('.ct-chart', {
   *   series: [10, 2, 4, 3]
   * }, {
   *   donut: true
   * });
   *
   * @example
   * // Using donut, startAngle and total to draw a gauge chart
   * new Chartist.Pie('.ct-chart', {
   *   series: [20, 10, 30, 40]
   * }, {
   *   donut: true,
   *   donutWidth: 20,
   *   startAngle: 270,
   *   total: 200
   * });
   *
   * @example
   * // Drawing a pie chart with padding and labels that are outside the pie
   * new Chartist.Pie('.ct-chart', {
   *   series: [20, 10, 30, 40]
   * }, {
   *   chartPadding: 30,
   *   labelOffset: 50,
   *   labelDirection: 'explode'
   * });
   *
   * @example
   * // Overriding the class names for individual series as well as a name and meta data.
   * // The name will be written as ct:series-name attribute and the meta data will be serialized and written
   * // to a ct:meta attribute.
   * new Chartist.Pie('.ct-chart', {
   *   series: [{
   *     value: 20,
   *     name: 'Series 1',
   *     className: 'my-custom-class-one',
   *     meta: 'Meta One'
   *   }, {
   *     value: 10,
   *     name: 'Series 2',
   *     className: 'my-custom-class-two',
   *     meta: 'Meta Two'
   *   }, {
   *     value: 70,
   *     name: 'Series 3',
   *     className: 'my-custom-class-three',
   *     meta: 'Meta Three'
   *   }]
   * });
   */
  function Pie(query, data, options, responsiveOptions) {
    Chartist.Pie.super.constructor.call(this,
      query,
      data,
      defaultOptions,
      Chartist.extend({}, defaultOptions, options),
      responsiveOptions);
  }

  // Creating pie chart type in Chartist namespace
  Chartist.Pie = Chartist.Base.extend({
    constructor: Pie,
    createChart: createChart,
    determineAnchorPosition: determineAnchorPosition
  });

}(window, document, Chartist));

return Chartist;

}));


/***/ }),

/***/ "./node_modules/react-chartist/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-chartist/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/react-chartist/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChartistGraph = function (_Component) {
  _inherits(ChartistGraph, _Component);

  function ChartistGraph() {
    _classCallCheck(this, ChartistGraph);

    return _possibleConstructorReturn(this, (ChartistGraph.__proto__ || Object.getPrototypeOf(ChartistGraph)).apply(this, arguments));
  }

  _createClass(ChartistGraph, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.updateChart(newProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.chartist) {
        try {
          this.chartist.detach();
        } catch (err) {
          throw new Error('Internal chartist error', err);
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateChart(this.props);
    }
  }, {
    key: 'updateChart',
    value: function updateChart(config) {
      var Chartist = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");

      var type = config.type,
          data = config.data;

      var options = config.options || {};
      var responsiveOptions = config.responsiveOptions || [];
      var event = void 0;

      if (this.chartist) {
        this.chartist.update(data, options, responsiveOptions);
      } else {
        this.chartist = new Chartist[type](this.chart, data, options, responsiveOptions);

        if (config.listener) {
          for (event in config.listener) {
            if (config.listener.hasOwnProperty(event)) {
              this.chartist.on(event, config.listener[event]);
            }
          }
        }
      }

      return this.chartist;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          style = _props.style,
          children = _props.children,
          data = _props.data,
          type = _props.type;

      var childrenWithProps = children && _react.Children.map(children, function (child) {
        return (0, _react.cloneElement)(child, {
          type: type,
          data: data
        });
      });
      return _react2.default.createElement(
        'div',
        { className: 'ct-chart ' + (className || ''), ref: function ref(_ref) {
            return _this2.chart = _ref;
          }, style: style },
        childrenWithProps
      );
    }
  }]);

  return ChartistGraph;
}(_react.Component);

ChartistGraph.propTypes = {
  type: _propTypes2.default.oneOf(['Line', 'Bar', 'Pie']).isRequired,
  data: _propTypes2.default.object.isRequired,
  className: _propTypes2.default.string,
  options: _propTypes2.default.object,
  responsiveOptions: _propTypes2.default.array,
  style: _propTypes2.default.object
};

exports.default = ChartistGraph;


/***/ }),

/***/ "./node_modules/react-chartist/node_modules/prop-types/checkPropTypes.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-chartist/node_modules/prop-types/checkPropTypes.js ***!
  \*******************************************************************************/
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
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/react-chartist/node_modules/prop-types/lib/ReactPropTypesSecret.js");
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

/***/ "./node_modules/react-chartist/node_modules/prop-types/factoryWithTypeCheckers.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/react-chartist/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \****************************************************************************************/
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

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/react-chartist/node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/react-chartist/node_modules/prop-types/checkPropTypes.js");

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

/***/ "./node_modules/react-chartist/node_modules/prop-types/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-chartist/node_modules/prop-types/index.js ***!
  \**********************************************************************/
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
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/react-chartist/node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/react-chartist/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-chartist/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*****************************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2hhcnRpc3QvZGlzdC9jaGFydGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY2hhcnRpc3QvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY2hhcnRpc3Qvbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWNoYXJ0aXN0L25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1jaGFydGlzdC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY2hhcnRpc3Qvbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsTUFBTSxJQUEwQztBQUNoRDtBQUNBLElBQUksaUNBQW1CLEVBQUUsbUNBQUU7QUFDM0I7QUFDQSxLQUFLO0FBQUEsb0dBQUM7QUFDTixHQUFHLE1BQU0sRUFPTjtBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEVBQUU7QUFDZixjQUFjLEVBQUU7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxVQUFVO0FBQ3ZCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLHNCQUFzQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0IsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsY0FBYztBQUNkLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHFCQUFxQjtBQUNsQyxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsNkJBQTZCLFdBQVc7QUFDeEM7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxtQ0FBbUMsd0JBQXdCO0FBQzNELEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsRUFBRTtBQUNmLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsY0FBYyxNQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0MsbUJBQW1CLEdBQUcsbUJBQW1CO0FBQy9FO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQixhQUFhLE9BQU87QUFDcEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscUVBQXFFOztBQUVyRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsZUFBZSxvQkFBb0I7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDO0FBQ2xDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE1BQU07QUFDbkIsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDOztBQUV6QztBQUNBLG1CQUFtQiw4QkFBOEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLGlCQUFpQiw4QkFBOEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkIsYUFBYSxNQUFNO0FBQ25CLGFBQWEsT0FBTztBQUNwQixjQUFjLE1BQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQzs7QUFFaEM7QUFDQTs7QUFFQSxrQkFBa0IsNEJBQTRCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsUUFBUTtBQUNSLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDOztBQUVoQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsTUFBTTtBQUNOO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0RBQXNELG1CQUFtQjtBQUN6RTtBQUNBLGFBQWEsdURBQXVEO0FBQ3BFLGFBQWEsbURBQW1EO0FBQ2hFLGFBQWEsdURBQXVEO0FBQ3BFLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLHNCQUFzQjtBQUN0QjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsYUFBYTtBQUNiLHNCQUFzQjtBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLFFBQVE7QUFDUixNQUFNO0FBQ047QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0IsV0FBVztBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLFdBQVc7QUFDN0I7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxrQkFBa0IsV0FBVztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQzs7QUFFaEM7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNEJBQTRCO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLEVBQUU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLHVDQUF1Qzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxDQUFDO0FBQ0QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGVBQWU7QUFDNUIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQixhQUFhLE9BQU87QUFDcEIsY0FBYyxjQUFjO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsY0FBYyxhQUFhO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxhQUFhO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxhQUFhO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsY0FBYyxhQUFhO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsY0FBYyxrQkFBa0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixjQUFjLGFBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjLGFBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsYUFBYTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGFBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQixjQUFjLGFBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQixhQUFhLFFBQVE7QUFDckIsY0FBYyxhQUFhO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjLGFBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjLGFBQWE7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGFBQWE7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixhQUFhLE9BQU87QUFDcEIsY0FBYyxhQUFhO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENB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QUFDRCxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUEsQ0FBQztBQUNELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILENBQUM7QUFDRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsQ0FBQztBQUNELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsQ0FBQztBQUNELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRHQUE0RztBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdIQUFnSDtBQUNoSDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EscUhBQXFIO0FBQ3JIO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxNQUFNO0FBQ25CLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxDQUFDO0FBQ0QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEdBQTRHO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsR0FBRyxXQUFXO0FBQ3ZCLE9BQU87O0FBRVA7O0FBRUEsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtSUFBbUk7QUFDbkk7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsMElBQTBJO0FBQzFJO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLG1JQUFtSTtBQUNuSTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCwwSUFBMEk7QUFDMUk7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE1BQU07QUFDbkIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsQ0FBQztBQUNELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRHQUE0RztBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNkJBQTZCO0FBQzdCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxVQUFVLEtBQXFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQyw0RkFBNEYsU0FBTTtBQUM3STtBQUNBOztBQUVBLG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGdDQUFnQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5a0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLElBQXFDO0FBQ3pDLGdCQUFnQixtQkFBTyxDQUFDLGtEQUFVOztBQUVsQztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyxtSEFBMkI7QUFDdEQsQ0FBQyxNQUFNLEVBSU47Ozs7Ozs7Ozs7Ozs7QUNsQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViOztBQUVBIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZSB1bmxlc3MgYW1kTW9kdWxlSWQgaXMgc2V0XG4gICAgZGVmaW5lKCdDaGFydGlzdCcsIFtdLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gKHJvb3RbJ0NoYXJ0aXN0J10gPSBmYWN0b3J5KCkpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgIC8vIGxpa2UgTm9kZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICByb290WydDaGFydGlzdCddID0gZmFjdG9yeSgpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblxuLyogQ2hhcnRpc3QuanMgMC4xMC4wXG4gKiBDb3B5cmlnaHQgwqkgMjAxNiBHaW9uIEt1bnpcbiAqIEZyZWUgdG8gdXNlIHVuZGVyIGVpdGhlciB0aGUgV1RGUEwgbGljZW5zZSBvciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vZ2lvbmt1bnovY2hhcnRpc3QtanMvbWFzdGVyL0xJQ0VOU0UtV1RGUExcbiAqIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9naW9ua3Vuei9jaGFydGlzdC1qcy9tYXN0ZXIvTElDRU5TRS1NSVRcbiAqL1xuLyoqXG4gKiBUaGUgY29yZSBtb2R1bGUgb2YgQ2hhcnRpc3QgdGhhdCBpcyBtYWlubHkgcHJvdmlkaW5nIHN0YXRpYyBmdW5jdGlvbnMgYW5kIGhpZ2hlciBsZXZlbCBmdW5jdGlvbnMgZm9yIGNoYXJ0IG1vZHVsZXMuXG4gKlxuICogQG1vZHVsZSBDaGFydGlzdC5Db3JlXG4gKi9cbnZhciBDaGFydGlzdCA9IHtcbiAgdmVyc2lvbjogJzAuMTAuMCdcbn07XG5cbihmdW5jdGlvbiAod2luZG93LCBkb2N1bWVudCwgQ2hhcnRpc3QpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBUaGlzIG9iamVjdCBjb250YWlucyBhbGwgbmFtZXNwYWNlcyB1c2VkIHdpdGhpbiBDaGFydGlzdC5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkNvcmVcbiAgICogQHR5cGUge3tzdmc6IHN0cmluZywgeG1sbnM6IHN0cmluZywgeGh0bWw6IHN0cmluZywgeGxpbms6IHN0cmluZywgY3Q6IHN0cmluZ319XG4gICAqL1xuICBDaGFydGlzdC5uYW1lc3BhY2VzID0ge1xuICAgIHN2ZzogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcbiAgICB4bWxuczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvJyxcbiAgICB4aHRtbDogJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnLFxuICAgIHhsaW5rOiAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsXG4gICAgY3Q6ICdodHRwOi8vZ2lvbmt1bnouZ2l0aHViLmNvbS9jaGFydGlzdC1qcy9jdCdcbiAgfTtcblxuICAvKipcbiAgICogSGVscHMgdG8gc2ltcGxpZnkgZnVuY3Rpb25hbCBzdHlsZSBjb2RlXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSB7Kn0gbiBUaGlzIGV4YWN0IHZhbHVlIHdpbGwgYmUgcmV0dXJuZWQgYnkgdGhlIG5vb3AgZnVuY3Rpb25cbiAgICogQHJldHVybiB7Kn0gVGhlIHNhbWUgdmFsdWUgdGhhdCB3YXMgcHJvdmlkZWQgdG8gdGhlIG4gcGFyYW1ldGVyXG4gICAqL1xuICBDaGFydGlzdC5ub29wID0gZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gbjtcbiAgfTtcblxuICAvKipcbiAgICogR2VuZXJhdGVzIGEteiBmcm9tIGEgbnVtYmVyIDAgdG8gMjZcbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkNvcmVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG4gQSBudW1iZXIgZnJvbSAwIHRvIDI2IHRoYXQgd2lsbCByZXN1bHQgaW4gYSBsZXR0ZXIgYS16XG4gICAqIEByZXR1cm4ge1N0cmluZ30gQSBjaGFyYWN0ZXIgZnJvbSBhLXogYmFzZWQgb24gdGhlIGlucHV0IG51bWJlciBuXG4gICAqL1xuICBDaGFydGlzdC5hbHBoYU51bWVyYXRlID0gZnVuY3Rpb24gKG4pIHtcbiAgICAvLyBMaW1pdCB0byBhLXpcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg5NyArIG4gJSAyNik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNpbXBsZSByZWN1cnNpdmUgb2JqZWN0IGV4dGVuZFxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IFRhcmdldCBvYmplY3Qgd2hlcmUgdGhlIHNvdXJjZSB3aWxsIGJlIG1lcmdlZCBpbnRvXG4gICAqIEBwYXJhbSB7T2JqZWN0Li4ufSBzb3VyY2VzIFRoaXMgb2JqZWN0IChvYmplY3RzKSB3aWxsIGJlIG1lcmdlZCBpbnRvIHRhcmdldCBhbmQgdGhlbiB0YXJnZXQgaXMgcmV0dXJuZWRcbiAgICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3QgdGhhdCBoYXMgdGhlIHNhbWUgcmVmZXJlbmNlIGFzIHRhcmdldCBidXQgaXMgZXh0ZW5kZWQgYW5kIG1lcmdlZCB3aXRoIHRoZSBwcm9wZXJ0aWVzIG9mIHNvdXJjZVxuICAgKi9cbiAgQ2hhcnRpc3QuZXh0ZW5kID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHZhciBpLCBzb3VyY2UsIHNvdXJjZVByb3A7XG4gICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IHt9O1xuXG4gICAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgICAgc291cmNlUHJvcCA9IHNvdXJjZVtwcm9wXTtcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wID09PSAnb2JqZWN0JyAmJiBzb3VyY2VQcm9wICE9PSBudWxsICYmICEoc291cmNlUHJvcCBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICAgIHRhcmdldFtwcm9wXSA9IENoYXJ0aXN0LmV4dGVuZCh0YXJnZXRbcHJvcF0sIHNvdXJjZVByb3ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHNvdXJjZVByb3A7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbGwgb2NjdXJyZW5jZXMgb2Ygc3ViU3RyIGluIHN0ciB3aXRoIG5ld1N1YlN0ciBhbmQgcmV0dXJucyBhIG5ldyBzdHJpbmcuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHN1YlN0clxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmV3U3ViU3RyXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIENoYXJ0aXN0LnJlcGxhY2VBbGwgPSBmdW5jdGlvbihzdHIsIHN1YlN0ciwgbmV3U3ViU3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoc3ViU3RyLCAnZycpLCBuZXdTdWJTdHIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIG51bWJlciB0byBhIHN0cmluZyB3aXRoIGEgdW5pdC4gSWYgYSBzdHJpbmcgaXMgcGFzc2VkIHRoZW4gdGhpcyB3aWxsIGJlIHJldHVybmVkIHVubW9kaWZpZWQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdW5pdFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IFJldHVybnMgdGhlIHBhc3NlZCBudW1iZXIgdmFsdWUgd2l0aCB1bml0LlxuICAgKi9cbiAgQ2hhcnRpc3QuZW5zdXJlVW5pdCA9IGZ1bmN0aW9uKHZhbHVlLCB1bml0KSB7XG4gICAgaWYodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUgPSB2YWx1ZSArIHVuaXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIG51bWJlciBvciBzdHJpbmcgdG8gYSBxdWFudGl0eSBvYmplY3QuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gaW5wdXRcbiAgICogQHJldHVybiB7T2JqZWN0fSBSZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSB2YWx1ZSBhcyBudW1iZXIgYW5kIHRoZSB1bml0IGFzIHN0cmluZy5cbiAgICovXG4gIENoYXJ0aXN0LnF1YW50aXR5ID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIG1hdGNoID0gKC9eKFxcZCspXFxzKiguKikkL2cpLmV4ZWMoaW5wdXQpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWUgOiArbWF0Y2hbMV0sXG4gICAgICAgIHVuaXQ6IG1hdGNoWzJdIHx8IHVuZGVmaW5lZFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgdmFsdWU6IGlucHV0IH07XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgYSB3cmFwcGVyIGFyb3VuZCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yIHRoYXQgd2lsbCByZXR1cm4gdGhlIHF1ZXJ5IGlmIGl0J3MgYWxyZWFkeSBvZiB0eXBlIE5vZGVcbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkNvcmVcbiAgICogQHBhcmFtIHtTdHJpbmd8Tm9kZX0gcXVlcnkgVGhlIHF1ZXJ5IHRvIHVzZSBmb3Igc2VsZWN0aW5nIGEgTm9kZSBvciBhIERPTSBub2RlIHRoYXQgd2lsbCBiZSByZXR1cm5lZCBkaXJlY3RseVxuICAgKiBAcmV0dXJuIHtOb2RlfVxuICAgKi9cbiAgQ2hhcnRpc3QucXVlcnlTZWxlY3RvciA9IGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHF1ZXJ5IGluc3RhbmNlb2YgTm9kZSA/IHF1ZXJ5IDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uYWwgc3R5bGUgaGVscGVyIHRvIHByb2R1Y2UgYXJyYXkgd2l0aCBnaXZlbiBsZW5ndGggaW5pdGlhbGl6ZWQgd2l0aCB1bmRlZmluZWQgdmFsdWVzXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSBsZW5ndGhcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBDaGFydGlzdC50aW1lcyA9IGZ1bmN0aW9uKGxlbmd0aCkge1xuICAgIHJldHVybiBBcnJheS5hcHBseShudWxsLCBuZXcgQXJyYXkobGVuZ3RoKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN1bSBoZWxwZXIgdG8gYmUgdXNlZCBpbiByZWR1Y2UgZnVuY3Rpb25zXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSBwcmV2aW91c1xuICAgKiBAcGFyYW0gY3VycmVudFxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgQ2hhcnRpc3Quc3VtID0gZnVuY3Rpb24ocHJldmlvdXMsIGN1cnJlbnQpIHtcbiAgICByZXR1cm4gcHJldmlvdXMgKyAoY3VycmVudCA/IGN1cnJlbnQgOiAwKTtcbiAgfTtcblxuICAvKipcbiAgICogTXVsdGlwbHkgaGVscGVyIHRvIGJlIHVzZWQgaW4gYEFycmF5Lm1hcGAgZm9yIG11bHRpcGx5aW5nIGVhY2ggdmFsdWUgb2YgYW4gYXJyYXkgd2l0aCBhIGZhY3Rvci5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkNvcmVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGZhY3RvclxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgaW4gYEFycmF5Lm1hcGAgdG8gbXVsdGlwbHkgZWFjaCB2YWx1ZSBpbiBhbiBhcnJheVxuICAgKi9cbiAgQ2hhcnRpc3QubWFwTXVsdGlwbHkgPSBmdW5jdGlvbihmYWN0b3IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24obnVtKSB7XG4gICAgICByZXR1cm4gbnVtICogZmFjdG9yO1xuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBoZWxwZXIgdG8gYmUgdXNlZCBpbiBgQXJyYXkubWFwYCBmb3IgYWRkaW5nIGEgYWRkZW5kIHRvIGVhY2ggdmFsdWUgb2YgYW4gYXJyYXkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBhZGRlbmRcbiAgICogQHJldHVybnMge0Z1bmN0aW9ufSBGdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIGluIGBBcnJheS5tYXBgIHRvIGFkZCBhIGFkZGVuZCB0byBlYWNoIHZhbHVlIGluIGFuIGFycmF5XG4gICAqL1xuICBDaGFydGlzdC5tYXBBZGQgPSBmdW5jdGlvbihhZGRlbmQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24obnVtKSB7XG4gICAgICByZXR1cm4gbnVtICsgYWRkZW5kO1xuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIE1hcCBmb3IgbXVsdGkgZGltZW5zaW9uYWwgYXJyYXlzIHdoZXJlIHRoZWlyIG5lc3RlZCBhcnJheXMgd2lsbCBiZSBtYXBwZWQgaW4gc2VyaWFsLiBUaGUgb3V0cHV0IGFycmF5IHdpbGwgaGF2ZSB0aGUgbGVuZ3RoIG9mIHRoZSBsYXJnZXN0IG5lc3RlZCBhcnJheS4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIHZhcmlhYmxlIGFyZ3VtZW50cyB3aGVyZSBlYWNoIGFyZ3VtZW50IGlzIHRoZSBuZXN0ZWQgYXJyYXkgdmFsdWUgKG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBhcmUgbm8gbW9yZSB2YWx1ZXMpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0gYXJyXG4gICAqIEBwYXJhbSBjYlxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIENoYXJ0aXN0LnNlcmlhbE1hcCA9IGZ1bmN0aW9uKGFyciwgY2IpIHtcbiAgICB2YXIgcmVzdWx0ID0gW10sXG4gICAgICAgIGxlbmd0aCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGFyci5tYXAoZnVuY3Rpb24oZSkge1xuICAgICAgICAgIHJldHVybiBlLmxlbmd0aDtcbiAgICAgICAgfSkpO1xuXG4gICAgQ2hhcnRpc3QudGltZXMobGVuZ3RoKS5mb3JFYWNoKGZ1bmN0aW9uKGUsIGluZGV4KSB7XG4gICAgICB2YXIgYXJncyA9IGFyci5tYXAoZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gZVtpbmRleF07XG4gICAgICB9KTtcblxuICAgICAgcmVzdWx0W2luZGV4XSA9IGNiLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyBoZWxwZXIgZnVuY3Rpb24gY2FuIGJlIHVzZWQgdG8gcm91bmQgdmFsdWVzIHdpdGggY2VydGFpbiBwcmVjaXNpb24gbGV2ZWwgYWZ0ZXIgZGVjaW1hbC4gVGhpcyBpcyB1c2VkIHRvIHByZXZlbnQgcm91bmRpbmcgZXJyb3JzIG5lYXIgZmxvYXQgcG9pbnQgcHJlY2lzaW9uIGxpbWl0LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgVGhlIHZhbHVlIHRoYXQgc2hvdWxkIGJlIHJvdW5kZWQgd2l0aCBwcmVjaXNpb25cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtkaWdpdHNdIFRoZSBudW1iZXIgb2YgZGlnaXRzIGFmdGVyIGRlY2ltYWwgdXNlZCB0byBkbyB0aGUgcm91bmRpbmdcbiAgICogQHJldHVybnMge251bWJlcn0gUm91bmRlZCB2YWx1ZVxuICAgKi9cbiAgQ2hhcnRpc3Qucm91bmRXaXRoUHJlY2lzaW9uID0gZnVuY3Rpb24odmFsdWUsIGRpZ2l0cykge1xuICAgIHZhciBwcmVjaXNpb24gPSBNYXRoLnBvdygxMCwgZGlnaXRzIHx8IENoYXJ0aXN0LnByZWNpc2lvbik7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiBwcmVjaXNpb24pIC8gcHJlY2lzaW9uO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcmVjaXNpb24gbGV2ZWwgdXNlZCBpbnRlcm5hbGx5IGluIENoYXJ0aXN0IGZvciByb3VuZGluZy4gSWYgeW91IHJlcXVpcmUgbW9yZSBkZWNpbWFsIHBsYWNlcyB5b3UgY2FuIGluY3JlYXNlIHRoaXMgbnVtYmVyLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQ2hhcnRpc3QucHJlY2lzaW9uID0gODtcblxuICAvKipcbiAgICogQSBtYXAgd2l0aCBjaGFyYWN0ZXJzIHRvIGVzY2FwZSBmb3Igc3RyaW5ncyB0byBiZSBzYWZlbHkgdXNlZCBhcyBhdHRyaWJ1dGUgdmFsdWVzLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgQ2hhcnRpc3QuZXNjYXBpbmdNYXAgPSB7XG4gICAgJyYnOiAnJmFtcDsnLFxuICAgICc8JzogJyZsdDsnLFxuICAgICc+JzogJyZndDsnLFxuICAgICdcIic6ICcmcXVvdDsnLFxuICAgICdcXCcnOiAnJiMwMzk7J1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHNlcmlhbGl6ZXMgYXJiaXRyYXJ5IGRhdGEgdG8gYSBzdHJpbmcuIEluIGNhc2Ugb2YgZGF0YSB0aGF0IGNhbid0IGJlIGVhc2lseSBjb252ZXJ0ZWQgdG8gYSBzdHJpbmcsIHRoaXMgZnVuY3Rpb24gd2lsbCBjcmVhdGUgYSB3cmFwcGVyIG9iamVjdCBhbmQgc2VyaWFsaXplIHRoZSBkYXRhIHVzaW5nIEpTT04uc3RyaW5naWZ5LiBUaGUgb3V0Y29taW5nIHN0cmluZyB3aWxsIGFsd2F5cyBiZSBlc2NhcGVkIHVzaW5nIENoYXJ0aXN0LmVzY2FwaW5nTWFwLlxuICAgKiBJZiBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCB0aGUgZnVuY3Rpb24gd2lsbCByZXR1cm4gaW1tZWRpYXRlbHkgd2l0aCBudWxsIG9yIHVuZGVmaW5lZC5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkNvcmVcbiAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfE9iamVjdH0gZGF0YVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBDaGFydGlzdC5zZXJpYWxpemUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYoZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gZWxzZSBpZih0eXBlb2YgZGF0YSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGRhdGEgPSAnJytkYXRhO1xuICAgIH0gZWxzZSBpZih0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7ZGF0YTogZGF0YX0pO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhDaGFydGlzdC5lc2NhcGluZ01hcCkucmVkdWNlKGZ1bmN0aW9uKHJlc3VsdCwga2V5KSB7XG4gICAgICByZXR1cm4gQ2hhcnRpc3QucmVwbGFjZUFsbChyZXN1bHQsIGtleSwgQ2hhcnRpc3QuZXNjYXBpbmdNYXBba2V5XSk7XG4gICAgfSwgZGF0YSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gZGUtc2VyaWFsaXplcyBhIHN0cmluZyBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgd2l0aCBDaGFydGlzdC5zZXJpYWxpemUuIFRoZSBzdHJpbmcgd2lsbCBhbHdheXMgYmUgdW5lc2NhcGVkIHVzaW5nIENoYXJ0aXN0LmVzY2FwaW5nTWFwIGJlZm9yZSBpdCdzIHJldHVybmVkLiBCYXNlZCBvbiB0aGUgaW5wdXQgdmFsdWUgdGhlIHJldHVybiB0eXBlIGNhbiBiZSBOdW1iZXIsIFN0cmluZyBvciBPYmplY3QuIEpTT04ucGFyc2UgaXMgdXNlZCB3aXRoIHRyeSAvIGNhdGNoIHRvIHNlZSBpZiB0aGUgdW5lc2NhcGVkIHN0cmluZyBjYW4gYmUgcGFyc2VkIGludG8gYW4gT2JqZWN0IGFuZCB0aGlzIE9iamVjdCB3aWxsIGJlIHJldHVybmVkIG9uIHN1Y2Nlc3MuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhXG4gICAqIEByZXR1cm4ge1N0cmluZ3xOdW1iZXJ8T2JqZWN0fVxuICAgKi9cbiAgQ2hhcnRpc3QuZGVzZXJpYWxpemUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYodHlwZW9mIGRhdGEgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBkYXRhID0gT2JqZWN0LmtleXMoQ2hhcnRpc3QuZXNjYXBpbmdNYXApLnJlZHVjZShmdW5jdGlvbihyZXN1bHQsIGtleSkge1xuICAgICAgcmV0dXJuIENoYXJ0aXN0LnJlcGxhY2VBbGwocmVzdWx0LCBDaGFydGlzdC5lc2NhcGluZ01hcFtrZXldLCBrZXkpO1xuICAgIH0sIGRhdGEpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgZGF0YSA9IGRhdGEuZGF0YSAhPT0gdW5kZWZpbmVkID8gZGF0YS5kYXRhIDogZGF0YTtcbiAgICB9IGNhdGNoKGUpIHt9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlIG9yIHJlaW5pdGlhbGl6ZSB0aGUgU1ZHIGVsZW1lbnQgZm9yIHRoZSBjaGFydFxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0ge05vZGV9IGNvbnRhaW5lciBUaGUgY29udGFpbmluZyBET00gTm9kZSBvYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gcGxhbnQgdGhlIFNWRyBlbGVtZW50XG4gICAqIEBwYXJhbSB7U3RyaW5nfSB3aWR0aCBTZXQgdGhlIHdpZHRoIG9mIHRoZSBTVkcgZWxlbWVudC4gRGVmYXVsdCBpcyAxMDAlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBoZWlnaHQgU2V0IHRoZSBoZWlnaHQgb2YgdGhlIFNWRyBlbGVtZW50LiBEZWZhdWx0IGlzIDEwMCVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBTcGVjaWZ5IGEgY2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIFNWRyBlbGVtZW50XG4gICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGNyZWF0ZWQvcmVpbml0aWFsaXplZCBTVkcgZWxlbWVudFxuICAgKi9cbiAgQ2hhcnRpc3QuY3JlYXRlU3ZnID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgd2lkdGgsIGhlaWdodCwgY2xhc3NOYW1lKSB7XG4gICAgdmFyIHN2ZztcblxuICAgIHdpZHRoID0gd2lkdGggfHwgJzEwMCUnO1xuICAgIGhlaWdodCA9IGhlaWdodCB8fCAnMTAwJSc7XG5cbiAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHByZXZpb3VzIFNWRyBlbGVtZW50IGluIHRoZSBjb250YWluZXIgdGhhdCBjb250YWlucyB0aGUgQ2hhcnRpc3QgWE1MIG5hbWVzcGFjZSBhbmQgcmVtb3ZlIGl0XG4gICAgLy8gU2luY2UgdGhlIERPTSBBUEkgZG9lcyBub3Qgc3VwcG9ydCBuYW1lc3BhY2VzIHdlIG5lZWQgdG8gbWFudWFsbHkgc2VhcmNoIHRoZSByZXR1cm5lZCBsaXN0IGh0dHA6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy1hcGkvXG4gICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N2ZycpKS5maWx0ZXIoZnVuY3Rpb24gZmlsdGVyQ2hhcnRpc3RTdmdPYmplY3RzKHN2Zykge1xuICAgICAgcmV0dXJuIHN2Zy5nZXRBdHRyaWJ1dGVOUyhDaGFydGlzdC5uYW1lc3BhY2VzLnhtbG5zLCAnY3QnKTtcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIHJlbW92ZVByZXZpb3VzRWxlbWVudChzdmcpIHtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChzdmcpO1xuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIHN2ZyBvYmplY3Qgd2l0aCB3aWR0aCBhbmQgaGVpZ2h0IG9yIHVzZSAxMDAlIGFzIGRlZmF1bHRcbiAgICBzdmcgPSBuZXcgQ2hhcnRpc3QuU3ZnKCdzdmcnKS5hdHRyKHtcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgfSkuYWRkQ2xhc3MoY2xhc3NOYW1lKS5hdHRyKHtcbiAgICAgIHN0eWxlOiAnd2lkdGg6ICcgKyB3aWR0aCArICc7IGhlaWdodDogJyArIGhlaWdodCArICc7J1xuICAgIH0pO1xuXG4gICAgLy8gQWRkIHRoZSBET00gbm9kZSB0byBvdXIgY29udGFpbmVyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN2Zy5fbm9kZSk7XG5cbiAgICByZXR1cm4gc3ZnO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFbnN1cmVzIHRoYXQgdGhlIGRhdGEgb2JqZWN0IHBhc3NlZCBhcyBzZWNvbmQgYXJndW1lbnQgdG8gdGhlIGNoYXJ0cyBpcyBwcmVzZW50IGFuZCBjb3JyZWN0bHkgaW5pdGlhbGl6ZWQuXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBUaGUgZGF0YSBvYmplY3QgdGhhdCBpcyBwYXNzZWQgYXMgc2Vjb25kIGFyZ3VtZW50IHRvIHRoZSBjaGFydHNcbiAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgbm9ybWFsaXplZCBkYXRhIG9iamVjdFxuICAgKi9cbiAgQ2hhcnRpc3Qubm9ybWFsaXplRGF0YSA9IGZ1bmN0aW9uKGRhdGEsIHJldmVyc2UsIG11bHRpKSB7XG4gICAgdmFyIGxhYmVsQ291bnQ7XG4gICAgdmFyIG91dHB1dCA9IHtcbiAgICAgIHJhdzogZGF0YSxcbiAgICAgIG5vcm1hbGl6ZWQ6IHt9XG4gICAgfTtcblxuICAgIC8vIENoZWNrIGlmIHdlIHNob3VsZCBnZW5lcmF0ZSBzb21lIGxhYmVscyBiYXNlZCBvbiBleGlzdGluZyBzZXJpZXMgZGF0YVxuICAgIG91dHB1dC5ub3JtYWxpemVkLnNlcmllcyA9IENoYXJ0aXN0LmdldERhdGFBcnJheSh7XG4gICAgICBzZXJpZXM6IGRhdGEuc2VyaWVzIHx8IFtdXG4gICAgfSwgcmV2ZXJzZSwgbXVsdGkpO1xuXG4gICAgLy8gSWYgYWxsIGVsZW1lbnRzIG9mIHRoZSBub3JtYWxpemVkIGRhdGEgYXJyYXkgYXJlIGFycmF5cyB3ZSdyZSBkZWFsaW5nIHdpdGhcbiAgICAvLyBtdWx0aSBzZXJpZXMgZGF0YSBhbmQgd2UgbmVlZCB0byBmaW5kIHRoZSBsYXJnZXN0IHNlcmllcyBpZiB0aGV5IGFyZSB1bi1ldmVuXG4gICAgaWYgKG91dHB1dC5ub3JtYWxpemVkLnNlcmllcy5ldmVyeShmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBBcnJheTtcbiAgICAgIH0pKSB7XG4gICAgICAvLyBHZXR0aW5nIHRoZSBzZXJpZXMgd2l0aCB0aGUgdGhlIG1vc3QgZWxlbWVudHNcbiAgICAgIGxhYmVsQ291bnQgPSBNYXRoLm1heC5hcHBseShudWxsLCBvdXRwdXQubm9ybWFsaXplZC5zZXJpZXMubWFwKGZ1bmN0aW9uKHNlcmllcykge1xuICAgICAgICByZXR1cm4gc2VyaWVzLmxlbmd0aDtcbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gV2UncmUgZGVhbGluZyB3aXRoIFBpZSBkYXRhIHNvIHdlIGp1c3QgdGFrZSB0aGUgbm9ybWFsaXplZCBhcnJheSBsZW5ndGhcbiAgICAgIGxhYmVsQ291bnQgPSBvdXRwdXQubm9ybWFsaXplZC5zZXJpZXMubGVuZ3RoO1xuICAgIH1cblxuICAgIG91dHB1dC5ub3JtYWxpemVkLmxhYmVscyA9IChkYXRhLmxhYmVscyB8fCBbXSkuc2xpY2UoKTtcbiAgICAvLyBQYWRkaW5nIHRoZSBsYWJlbHMgdG8gbGFiZWxDb3VudCB3aXRoIGVtcHR5IHN0cmluZ3NcbiAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShcbiAgICAgIG91dHB1dC5ub3JtYWxpemVkLmxhYmVscyxcbiAgICAgIENoYXJ0aXN0LnRpbWVzKE1hdGgubWF4KDAsIGxhYmVsQ291bnQgLSBvdXRwdXQubm9ybWFsaXplZC5sYWJlbHMubGVuZ3RoKSkubWFwKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBpZihyZXZlcnNlKSB7XG4gICAgICBDaGFydGlzdC5yZXZlcnNlRGF0YShvdXRwdXQubm9ybWFsaXplZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBzYWZlbHkgY2hlY2tzIGlmIGFuIG9iamVjdHMgaGFzIGFuIG93bmVkIHByb3BlcnR5LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3Qgd2hlcmUgdG8gY2hlY2sgZm9yIGEgcHJvcGVydHlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IFRoZSBwcm9wZXJ0eSBuYW1lXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIG9iamVjdCBvd25zIHRoZSBzcGVjaWZpZWQgcHJvcGVydHlcbiAgICovXG4gIENoYXJ0aXN0LnNhZmVIYXNQcm9wZXJ0eSA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gb2JqZWN0ICE9PSBudWxsICYmXG4gICAgICB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqZWN0Lmhhc093blByb3BlcnR5KHByb3BlcnR5KTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgdmFsdWUgaXMgY29uc2lkZXJlZCBhIGhvbGUgaW4gdGhlIGRhdGEgc2VyaWVzLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBjb25zaWRlcmVkIGEgZGF0YSBob2xlXG4gICAqL1xuICBDaGFydGlzdC5pc0RhdGFIb2xlVmFsdWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fFxuICAgICAgdmFsdWUgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsdWUpKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV2ZXJzZXMgdGhlIHNlcmllcywgbGFiZWxzIGFuZCBzZXJpZXMgZGF0YSBhcnJheXMuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqL1xuICBDaGFydGlzdC5yZXZlcnNlRGF0YSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBkYXRhLmxhYmVscy5yZXZlcnNlKCk7XG4gICAgZGF0YS5zZXJpZXMucmV2ZXJzZSgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5zZXJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKHR5cGVvZihkYXRhLnNlcmllc1tpXSkgPT09ICdvYmplY3QnICYmIGRhdGEuc2VyaWVzW2ldLmRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkYXRhLnNlcmllc1tpXS5kYXRhLnJldmVyc2UoKTtcbiAgICAgIH0gZWxzZSBpZihkYXRhLnNlcmllc1tpXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGRhdGEuc2VyaWVzW2ldLnJldmVyc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgZGF0YSBzZXJpZXMgaW50byBwbGFpbiBhcnJheVxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgc2VyaWVzIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSBkYXRhIHRvIGJlIHZpc3VhbGl6ZWQgaW4gdGhlIGNoYXJ0XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3JldmVyc2VdIElmIHRydWUgdGhlIHdob2xlIGRhdGEgaXMgcmV2ZXJzZWQgYnkgdGhlIGdldERhdGFBcnJheSBjYWxsLiBUaGlzIHdpbGwgbW9kaWZ5IHRoZSBkYXRhIG9iamVjdCBwYXNzZWQgYXMgZmlyc3QgcGFyYW1ldGVyLiBUaGUgbGFiZWxzIGFzIHdlbGwgYXMgdGhlIHNlcmllcyBvcmRlciBpcyByZXZlcnNlZC4gVGhlIHdob2xlIHNlcmllcyBkYXRhIGFycmF5cyBhcmUgcmV2ZXJzZWQgdG9vLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFttdWx0aV0gQ3JlYXRlIGEgbXVsdGkgZGltZW5zaW9uYWwgYXJyYXkgZnJvbSBhIHNlcmllcyBkYXRhIGFycmF5IHdoZXJlIGEgdmFsdWUgb2JqZWN0IHdpdGggYHhgIGFuZCBgeWAgdmFsdWVzIHdpbGwgYmUgY3JlYXRlZC5cbiAgICogQHJldHVybiB7QXJyYXl9IEEgcGxhaW4gYXJyYXkgdGhhdCBjb250YWlucyB0aGUgZGF0YSB0byBiZSB2aXN1YWxpemVkIGluIHRoZSBjaGFydFxuICAgKi9cbiAgQ2hhcnRpc3QuZ2V0RGF0YUFycmF5ID0gZnVuY3Rpb24oZGF0YSwgcmV2ZXJzZSwgbXVsdGkpIHtcbiAgICAvLyBSZWN1cnNpdmVseSB3YWxrcyB0aHJvdWdoIG5lc3RlZCBhcnJheXMgYW5kIGNvbnZlcnQgc3RyaW5nIHZhbHVlcyB0byBudW1iZXJzIGFuZCBvYmplY3RzIHdpdGggdmFsdWUgcHJvcGVydGllc1xuICAgIC8vIHRvIHZhbHVlcy4gQ2hlY2sgdGhlIHRlc3RzIGluIGRhdGEgY29yZSAtPiBkYXRhIG5vcm1hbGl6YXRpb24gZm9yIGEgZGV0YWlsZWQgc3BlY2lmaWNhdGlvbiBvZiBleHBlY3RlZCB2YWx1ZXNcbiAgICBmdW5jdGlvbiByZWN1cnNpdmVDb252ZXJ0KHZhbHVlKSB7XG4gICAgICBpZihDaGFydGlzdC5zYWZlSGFzUHJvcGVydHkodmFsdWUsICd2YWx1ZScpKSB7XG4gICAgICAgIC8vIFdlIGFyZSBkZWFsaW5nIHdpdGggdmFsdWUgb2JqZWN0IG5vdGF0aW9uIHNvIHdlIG5lZWQgdG8gcmVjdXJzZSBvbiB2YWx1ZSBwcm9wZXJ0eVxuICAgICAgICByZXR1cm4gcmVjdXJzaXZlQ29udmVydCh2YWx1ZS52YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYoQ2hhcnRpc3Quc2FmZUhhc1Byb3BlcnR5KHZhbHVlLCAnZGF0YScpKSB7XG4gICAgICAgIC8vIFdlIGFyZSBkZWFsaW5nIHdpdGggc2VyaWVzIG9iamVjdCBub3RhdGlvbiBzbyB3ZSBuZWVkIHRvIHJlY3Vyc2Ugb24gZGF0YSBwcm9wZXJ0eVxuICAgICAgICByZXR1cm4gcmVjdXJzaXZlQ29udmVydCh2YWx1ZS5kYXRhKTtcbiAgICAgIH0gZWxzZSBpZih2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIC8vIERhdGEgaXMgb2YgdHlwZSBhcnJheSBzbyB3ZSBuZWVkIHRvIHJlY3Vyc2Ugb24gdGhlIHNlcmllc1xuICAgICAgICByZXR1cm4gdmFsdWUubWFwKHJlY3Vyc2l2ZUNvbnZlcnQpO1xuICAgICAgfSBlbHNlIGlmKENoYXJ0aXN0LmlzRGF0YUhvbGVWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgLy8gV2UncmUgZGVhbGluZyB3aXRoIGEgaG9sZSBpbiB0aGUgZGF0YSBhbmQgdGhlcmVmb3JlIG5lZWQgdG8gcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICAvLyBXZSdyZSBhbHNvIHJldHVybmluZyB1bmRlZmluZWQgZm9yIG11bHRpIHZhbHVlIG91dHB1dFxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byBwcmVwYXJlIG11bHRpIHZhbHVlIG91dHB1dCAoeCBhbmQgeSBkYXRhKVxuICAgICAgICBpZihtdWx0aSkge1xuICAgICAgICAgIHZhciBtdWx0aVZhbHVlID0ge307XG5cbiAgICAgICAgICAvLyBTaW5nbGUgc2VyaWVzIHZhbHVlIGFycmF5cyBhcmUgYXNzdW1lZCB0byBzcGVjaWZ5IHRoZSBZLUF4aXMgdmFsdWVcbiAgICAgICAgICAvLyBGb3IgZXhhbXBsZTogWzEsIDJdID0+IFt7eDogdW5kZWZpbmVkLCB5OiAxfSwge3g6IHVuZGVmaW5lZCwgeTogMn1dXG4gICAgICAgICAgLy8gSWYgbXVsdGkgaXMgYSBzdHJpbmcgdGhlbiBpdCdzIGFzc3VtZWQgdGhhdCBpdCBzcGVjaWZpZWQgd2hpY2ggZGltZW5zaW9uIHNob3VsZCBiZSBmaWxsZWQgYXMgZGVmYXVsdFxuICAgICAgICAgIGlmKHR5cGVvZiBtdWx0aSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIG11bHRpVmFsdWVbbXVsdGldID0gQ2hhcnRpc3QuZ2V0TnVtYmVyT3JVbmRlZmluZWQodmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtdWx0aVZhbHVlLnkgPSBDaGFydGlzdC5nZXROdW1iZXJPclVuZGVmaW5lZCh2YWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbXVsdGlWYWx1ZS54ID0gdmFsdWUuaGFzT3duUHJvcGVydHkoJ3gnKSA/IENoYXJ0aXN0LmdldE51bWJlck9yVW5kZWZpbmVkKHZhbHVlLngpIDogbXVsdGlWYWx1ZS54O1xuICAgICAgICAgIG11bHRpVmFsdWUueSA9IHZhbHVlLmhhc093blByb3BlcnR5KCd5JykgPyBDaGFydGlzdC5nZXROdW1iZXJPclVuZGVmaW5lZCh2YWx1ZS55KSA6IG11bHRpVmFsdWUueTtcblxuICAgICAgICAgIHJldHVybiBtdWx0aVZhbHVlO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gV2UgY2FuIHJldHVybiBzaW1wbGUgZGF0YVxuICAgICAgICAgIHJldHVybiBDaGFydGlzdC5nZXROdW1iZXJPclVuZGVmaW5lZCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YS5zZXJpZXMubWFwKHJlY3Vyc2l2ZUNvbnZlcnQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIG51bWJlciBpbnRvIGEgcGFkZGluZyBvYmplY3QuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSB7T2JqZWN0fE51bWJlcn0gcGFkZGluZ1xuICAgKiBAcGFyYW0ge051bWJlcn0gW2ZhbGxiYWNrXSBUaGlzIHZhbHVlIGlzIHVzZWQgdG8gZmlsbCBtaXNzaW5nIHZhbHVlcyBpZiBhIGluY29tcGxldGUgcGFkZGluZyBvYmplY3Qgd2FzIHBhc3NlZFxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGEgcGFkZGluZyBvYmplY3QgY29udGFpbmluZyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQgcHJvcGVydGllcyBmaWxsZWQgd2l0aCB0aGUgcGFkZGluZyBudW1iZXIgcGFzc2VkIGluIGFzIGFyZ3VtZW50LiBJZiB0aGUgYXJndW1lbnQgaXMgc29tZXRoaW5nIGVsc2UgdGhhbiBhIG51bWJlciAocHJlc3VtYWJseSBhbHJlYWR5IGEgY29ycmVjdCBwYWRkaW5nIG9iamVjdCkgdGhlbiB0aGlzIGFyZ3VtZW50IGlzIGRpcmVjdGx5IHJldHVybmVkLlxuICAgKi9cbiAgQ2hhcnRpc3Qubm9ybWFsaXplUGFkZGluZyA9IGZ1bmN0aW9uKHBhZGRpbmcsIGZhbGxiYWNrKSB7XG4gICAgZmFsbGJhY2sgPSBmYWxsYmFjayB8fCAwO1xuXG4gICAgcmV0dXJuIHR5cGVvZiBwYWRkaW5nID09PSAnbnVtYmVyJyA/IHtcbiAgICAgIHRvcDogcGFkZGluZyxcbiAgICAgIHJpZ2h0OiBwYWRkaW5nLFxuICAgICAgYm90dG9tOiBwYWRkaW5nLFxuICAgICAgbGVmdDogcGFkZGluZ1xuICAgIH0gOiB7XG4gICAgICB0b3A6IHR5cGVvZiBwYWRkaW5nLnRvcCA9PT0gJ251bWJlcicgPyBwYWRkaW5nLnRvcCA6IGZhbGxiYWNrLFxuICAgICAgcmlnaHQ6IHR5cGVvZiBwYWRkaW5nLnJpZ2h0ID09PSAnbnVtYmVyJyA/IHBhZGRpbmcucmlnaHQgOiBmYWxsYmFjayxcbiAgICAgIGJvdHRvbTogdHlwZW9mIHBhZGRpbmcuYm90dG9tID09PSAnbnVtYmVyJyA/IHBhZGRpbmcuYm90dG9tIDogZmFsbGJhY2ssXG4gICAgICBsZWZ0OiB0eXBlb2YgcGFkZGluZy5sZWZ0ID09PSAnbnVtYmVyJyA/IHBhZGRpbmcubGVmdCA6IGZhbGxiYWNrXG4gICAgfTtcbiAgfTtcblxuICBDaGFydGlzdC5nZXRNZXRhRGF0YSA9IGZ1bmN0aW9uKHNlcmllcywgaW5kZXgpIHtcbiAgICB2YXIgdmFsdWUgPSBzZXJpZXMuZGF0YSA/IHNlcmllcy5kYXRhW2luZGV4XSA6IHNlcmllc1tpbmRleF07XG4gICAgcmV0dXJuIHZhbHVlID8gdmFsdWUubWV0YSA6IHVuZGVmaW5lZDtcbiAgfTtcblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHRoZSBvcmRlciBvZiBtYWduaXR1ZGUgZm9yIHRoZSBjaGFydCBzY2FsZVxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgVGhlIHZhbHVlIFJhbmdlIG9mIHRoZSBjaGFydFxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IFRoZSBvcmRlciBvZiBtYWduaXR1ZGVcbiAgICovXG4gIENoYXJ0aXN0Lm9yZGVyT2ZNYWduaXR1ZGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLmxvZyhNYXRoLmFicyh2YWx1ZSkpIC8gTWF0aC5MTjEwKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJvamVjdCBhIGRhdGEgbGVuZ3RoIGludG8gc2NyZWVuIGNvb3JkaW5hdGVzIChwaXhlbHMpXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBheGlzTGVuZ3RoIFRoZSBzdmcgZWxlbWVudCBmb3IgdGhlIGNoYXJ0XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGggU2luZ2xlIGRhdGEgdmFsdWUgZnJvbSBhIHNlcmllcyBhcnJheVxuICAgKiBAcGFyYW0ge09iamVjdH0gYm91bmRzIEFsbCB0aGUgdmFsdWVzIHRvIHNldCB0aGUgYm91bmRzIG9mIHRoZSBjaGFydFxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IFRoZSBwcm9qZWN0ZWQgZGF0YSBsZW5ndGggaW4gcGl4ZWxzXG4gICAqL1xuICBDaGFydGlzdC5wcm9qZWN0TGVuZ3RoID0gZnVuY3Rpb24gKGF4aXNMZW5ndGgsIGxlbmd0aCwgYm91bmRzKSB7XG4gICAgcmV0dXJuIGxlbmd0aCAvIGJvdW5kcy5yYW5nZSAqIGF4aXNMZW5ndGg7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaGVpZ2h0IG9mIHRoZSBhcmVhIGluIHRoZSBjaGFydCBmb3IgdGhlIGRhdGEgc2VyaWVzXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdmcgVGhlIHN2ZyBlbGVtZW50IGZvciB0aGUgY2hhcnRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIE9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCB0aGUgb3B0aW9uYWwgdmFsdWVzIGZvciB0aGUgY2hhcnRcbiAgICogQHJldHVybiB7TnVtYmVyfSBUaGUgaGVpZ2h0IG9mIHRoZSBhcmVhIGluIHRoZSBjaGFydCBmb3IgdGhlIGRhdGEgc2VyaWVzXG4gICAqL1xuICBDaGFydGlzdC5nZXRBdmFpbGFibGVIZWlnaHQgPSBmdW5jdGlvbiAoc3ZnLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KChDaGFydGlzdC5xdWFudGl0eShvcHRpb25zLmhlaWdodCkudmFsdWUgfHwgc3ZnLmhlaWdodCgpKSAtIChvcHRpb25zLmNoYXJ0UGFkZGluZy50b3AgKyAgb3B0aW9ucy5jaGFydFBhZGRpbmcuYm90dG9tKSAtIG9wdGlvbnMuYXhpc1gub2Zmc2V0LCAwKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGhpZ2hlc3QgYW5kIGxvd2VzdCB2YWx1ZSBvZiBkYXRhIGFycmF5LiBUaGlzIEFycmF5IGNvbnRhaW5zIHRoZSBkYXRhIHRoYXQgd2lsbCBiZSB2aXN1YWxpemVkIGluIHRoZSBjaGFydC5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkNvcmVcbiAgICogQHBhcmFtIHtBcnJheX0gZGF0YSBUaGUgYXJyYXkgdGhhdCBjb250YWlucyB0aGUgZGF0YSB0byBiZSB2aXN1YWxpemVkIGluIHRoZSBjaGFydFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBUaGUgT2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIGNoYXJ0IG9wdGlvbnNcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRpbWVuc2lvbiBBeGlzIGRpbWVuc2lvbiAneCcgb3IgJ3knIHVzZWQgdG8gYWNjZXNzIHRoZSBjb3JyZWN0IHZhbHVlIGFuZCBoaWdoIC8gbG93IGNvbmZpZ3VyYXRpb25cbiAgICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3QgdGhhdCBjb250YWlucyB0aGUgaGlnaGVzdCBhbmQgbG93ZXN0IHZhbHVlIHRoYXQgd2lsbCBiZSB2aXN1YWxpemVkIG9uIHRoZSBjaGFydC5cbiAgICovXG4gIENoYXJ0aXN0LmdldEhpZ2hMb3cgPSBmdW5jdGlvbiAoZGF0YSwgb3B0aW9ucywgZGltZW5zaW9uKSB7XG4gICAgLy8gVE9ETzogUmVtb3ZlIHdvcmthcm91bmQgZm9yIGRlcHJlY2F0ZWQgZ2xvYmFsIGhpZ2ggLyBsb3cgY29uZmlnLiBBeGlzIGhpZ2ggLyBsb3cgY29uZmlndXJhdGlvbiBpcyBwcmVmZXJyZWRcbiAgICBvcHRpb25zID0gQ2hhcnRpc3QuZXh0ZW5kKHt9LCBvcHRpb25zLCBkaW1lbnNpb24gPyBvcHRpb25zWydheGlzJyArIGRpbWVuc2lvbi50b1VwcGVyQ2FzZSgpXSA6IHt9KTtcblxuICAgIHZhciBoaWdoTG93ID0ge1xuICAgICAgICBoaWdoOiBvcHRpb25zLmhpZ2ggPT09IHVuZGVmaW5lZCA/IC1OdW1iZXIuTUFYX1ZBTFVFIDogK29wdGlvbnMuaGlnaCxcbiAgICAgICAgbG93OiBvcHRpb25zLmxvdyA9PT0gdW5kZWZpbmVkID8gTnVtYmVyLk1BWF9WQUxVRSA6ICtvcHRpb25zLmxvd1xuICAgICAgfTtcbiAgICB2YXIgZmluZEhpZ2ggPSBvcHRpb25zLmhpZ2ggPT09IHVuZGVmaW5lZDtcbiAgICB2YXIgZmluZExvdyA9IG9wdGlvbnMubG93ID09PSB1bmRlZmluZWQ7XG5cbiAgICAvLyBGdW5jdGlvbiB0byByZWN1cnNpdmVseSB3YWxrIHRocm91Z2ggYXJyYXlzIGFuZCBmaW5kIGhpZ2hlc3QgYW5kIGxvd2VzdCBudW1iZXJcbiAgICBmdW5jdGlvbiByZWN1cnNpdmVIaWdoTG93KGRhdGEpIHtcbiAgICAgIGlmKGRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIGlmKGRhdGEgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICByZWN1cnNpdmVIaWdoTG93KGRhdGFbaV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdmFsdWUgPSBkaW1lbnNpb24gPyArZGF0YVtkaW1lbnNpb25dIDogK2RhdGE7XG5cbiAgICAgICAgaWYgKGZpbmRIaWdoICYmIHZhbHVlID4gaGlnaExvdy5oaWdoKSB7XG4gICAgICAgICAgaGlnaExvdy5oaWdoID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmluZExvdyAmJiB2YWx1ZSA8IGhpZ2hMb3cubG93KSB7XG4gICAgICAgICAgaGlnaExvdy5sb3cgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0YXJ0IHRvIGZpbmQgaGlnaGVzdCBhbmQgbG93ZXN0IG51bWJlciByZWN1cnNpdmVseVxuICAgIGlmKGZpbmRIaWdoIHx8IGZpbmRMb3cpIHtcbiAgICAgIHJlY3Vyc2l2ZUhpZ2hMb3coZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gT3ZlcnJpZGVzIG9mIGhpZ2ggLyBsb3cgYmFzZWQgb24gcmVmZXJlbmNlIHZhbHVlLCBpdCB3aWxsIG1ha2Ugc3VyZSB0aGF0IHRoZSBpbnZpc2libGUgcmVmZXJlbmNlIHZhbHVlIGlzXG4gICAgLy8gdXNlZCB0byBnZW5lcmF0ZSB0aGUgY2hhcnQuIFRoaXMgaXMgdXNlZnVsIHdoZW4gdGhlIGNoYXJ0IGFsd2F5cyBuZWVkcyB0byBjb250YWluIHRoZSBwb3NpdGlvbiBvZiB0aGVcbiAgICAvLyBpbnZpc2libGUgcmVmZXJlbmNlIHZhbHVlIGluIHRoZSB2aWV3IGkuZS4gZm9yIGJpcG9sYXIgc2NhbGVzLlxuICAgIGlmIChvcHRpb25zLnJlZmVyZW5jZVZhbHVlIHx8IG9wdGlvbnMucmVmZXJlbmNlVmFsdWUgPT09IDApIHtcbiAgICAgIGhpZ2hMb3cuaGlnaCA9IE1hdGgubWF4KG9wdGlvbnMucmVmZXJlbmNlVmFsdWUsIGhpZ2hMb3cuaGlnaCk7XG4gICAgICBoaWdoTG93LmxvdyA9IE1hdGgubWluKG9wdGlvbnMucmVmZXJlbmNlVmFsdWUsIGhpZ2hMb3cubG93KTtcbiAgICB9XG5cbiAgICAvLyBJZiBoaWdoIGFuZCBsb3cgYXJlIHRoZSBzYW1lIGJlY2F1c2Ugb2YgbWlzY29uZmlndXJhdGlvbiBvciBmbGF0IGRhdGEgKG9ubHkgdGhlIHNhbWUgdmFsdWUpIHdlIG5lZWRcbiAgICAvLyB0byBzZXQgdGhlIGhpZ2ggb3IgbG93IHRvIDAgZGVwZW5kaW5nIG9uIHRoZSBwb2xhcml0eVxuICAgIGlmIChoaWdoTG93LmhpZ2ggPD0gaGlnaExvdy5sb3cpIHtcbiAgICAgIC8vIElmIGJvdGggdmFsdWVzIGFyZSAwIHdlIHNldCBoaWdoIHRvIDFcbiAgICAgIGlmIChoaWdoTG93LmxvdyA9PT0gMCkge1xuICAgICAgICBoaWdoTG93LmhpZ2ggPSAxO1xuICAgICAgfSBlbHNlIGlmIChoaWdoTG93LmxvdyA8IDApIHtcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSB0aGUgc2FtZSBuZWdhdGl2ZSB2YWx1ZSBmb3IgdGhlIGJvdW5kcyB3ZSBzZXQgYm91bmRzLmhpZ2ggdG8gMFxuICAgICAgICBoaWdoTG93LmhpZ2ggPSAwO1xuICAgICAgfSBlbHNlIGlmIChoaWdoTG93LmhpZ2ggPiAwKSB7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgdGhlIHNhbWUgcG9zaXRpdmUgdmFsdWUgZm9yIHRoZSBib3VuZHMgd2Ugc2V0IGJvdW5kcy5sb3cgdG8gMFxuICAgICAgICBoaWdoTG93LmxvdyA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiBkYXRhIGFycmF5IHdhcyBlbXB0eSwgdmFsdWVzIGFyZSBOdW1iZXIuTUFYX1ZBTFVFIGFuZCAtTnVtYmVyLk1BWF9WQUxVRS4gU2V0IGJvdW5kcyB0byBwcmV2ZW50IGVycm9yc1xuICAgICAgICBoaWdoTG93LmhpZ2ggPSAxO1xuICAgICAgICBoaWdoTG93LmxvdyA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGhpZ2hMb3c7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhIHZhbHVlIGNhbiBiZSBzYWZlbHkgY29lcmNlZCB0byBhIG51bWJlci4gVGhpcyBpbmNsdWRlcyBhbGwgdmFsdWVzIGV4Y2VwdCBudWxsIHdoaWNoIHJlc3VsdCBpbiBmaW5pdGUgbnVtYmVycyB3aGVuIGNvZXJjZWQuIFRoaXMgZXhjbHVkZXMgTmFOLCBzaW5jZSBpdCdzIG5vdCBmaW5pdGUuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIENoYXJ0aXN0LmlzTnVtZXJpYyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsID8gZmFsc2UgOiBpc0Zpbml0ZSh2YWx1ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBvbiBhbGwgZmFsc2V5IHZhbHVlcyBleGNlcHQgdGhlIG51bWVyaWMgdmFsdWUgMC5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkNvcmVcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgQ2hhcnRpc3QuaXNGYWxzZXlCdXRaZXJvID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gIXZhbHVlICYmIHZhbHVlICE9PSAwO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbnVtYmVyIGlmIHRoZSBwYXNzZWQgcGFyYW1ldGVyIGlzIGEgdmFsaWQgbnVtYmVyIG9yIHRoZSBmdW5jdGlvbiB3aWxsIHJldHVybiB1bmRlZmluZWQuIE9uIGFsbCBvdGhlciB2YWx1ZXMgdGhhbiBhIHZhbGlkIG51bWJlciwgdGhpcyBmdW5jdGlvbiB3aWxsIHJldHVybiB1bmRlZmluZWQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIENoYXJ0aXN0LmdldE51bWJlck9yVW5kZWZpbmVkID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gQ2hhcnRpc3QuaXNOdW1lcmljKHZhbHVlKSA/ICt2YWx1ZSA6IHVuZGVmaW5lZDtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHByb3ZpZGVkIHZhbHVlIG9iamVjdCBpcyBtdWx0aSB2YWx1ZSAoY29udGFpbnMgeCBvciB5IHByb3BlcnRpZXMpXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKi9cbiAgQ2hhcnRpc3QuaXNNdWx0aVZhbHVlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAoJ3gnIGluIHZhbHVlIHx8ICd5JyBpbiB2YWx1ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldHMgYSB2YWx1ZSBmcm9tIGEgZGltZW5zaW9uIGB2YWx1ZS54YCBvciBgdmFsdWUueWAgd2hpbGUgcmV0dXJuaW5nIHZhbHVlIGRpcmVjdGx5IGlmIGl0J3MgYSB2YWxpZCBudW1lcmljIHZhbHVlLiBJZiB0aGUgdmFsdWUgaXMgbm90IG51bWVyaWMgYW5kIGl0J3MgZmFsc2V5IHRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gYGRlZmF1bHRWYWx1ZWAuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKiBAcGFyYW0gZGltZW5zaW9uXG4gICAqIEBwYXJhbSBkZWZhdWx0VmFsdWVcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBDaGFydGlzdC5nZXRNdWx0aVZhbHVlID0gZnVuY3Rpb24odmFsdWUsIGRpbWVuc2lvbikge1xuICAgIGlmKENoYXJ0aXN0LmlzTXVsdGlWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBDaGFydGlzdC5nZXROdW1iZXJPclVuZGVmaW5lZCh2YWx1ZVtkaW1lbnNpb24gfHwgJ3knXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBDaGFydGlzdC5nZXROdW1iZXJPclVuZGVmaW5lZCh2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBQb2xsYXJkIFJobyBBbGdvcml0aG0gdG8gZmluZCBzbWFsbGVzdCBmYWN0b3Igb2YgYW4gaW50ZWdlciB2YWx1ZS4gVGhlcmUgYXJlIG1vcmUgZWZmaWNpZW50IGFsZ29yaXRobXMgZm9yIGZhY3Rvcml6YXRpb24sIGJ1dCB0aGlzIG9uZSBpcyBxdWl0ZSBlZmZpY2llbnQgYW5kIG5vdCBzbyBjb21wbGV4LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0ge051bWJlcn0gbnVtIEFuIGludGVnZXIgbnVtYmVyIHdoZXJlIHRoZSBzbWFsbGVzdCBmYWN0b3Igc2hvdWxkIGJlIHNlYXJjaGVkIGZvclxuICAgKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgc21hbGxlc3QgaW50ZWdlciBmYWN0b3Igb2YgdGhlIHBhcmFtZXRlciBudW0uXG4gICAqL1xuICBDaGFydGlzdC5yaG8gPSBmdW5jdGlvbihudW0pIHtcbiAgICBpZihudW0gPT09IDEpIHtcbiAgICAgIHJldHVybiBudW07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2NkKHAsIHEpIHtcbiAgICAgIGlmIChwICUgcSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gcTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBnY2QocSwgcCAlIHEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGYoeCkge1xuICAgICAgcmV0dXJuIHggKiB4ICsgMTtcbiAgICB9XG5cbiAgICB2YXIgeDEgPSAyLCB4MiA9IDIsIGRpdmlzb3I7XG4gICAgaWYgKG51bSAlIDIgPT09IDApIHtcbiAgICAgIHJldHVybiAyO1xuICAgIH1cblxuICAgIGRvIHtcbiAgICAgIHgxID0gZih4MSkgJSBudW07XG4gICAgICB4MiA9IGYoZih4MikpICUgbnVtO1xuICAgICAgZGl2aXNvciA9IGdjZChNYXRoLmFicyh4MSAtIHgyKSwgbnVtKTtcbiAgICB9IHdoaWxlIChkaXZpc29yID09PSAxKTtcblxuICAgIHJldHVybiBkaXZpc29yO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgYW5kIHJldHJpZXZlIGFsbCB0aGUgYm91bmRzIGZvciB0aGUgY2hhcnQgYW5kIHJldHVybiB0aGVtIGluIG9uZSBhcnJheVxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0ge051bWJlcn0gYXhpc0xlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBBeGlzIHVzZWQgZm9yXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBoaWdoTG93IEFuIG9iamVjdCBjb250YWluaW5nIGEgaGlnaCBhbmQgbG93IHByb3BlcnR5IGluZGljYXRpbmcgdGhlIHZhbHVlIHJhbmdlIG9mIHRoZSBjaGFydC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlTWluU3BhY2UgVGhlIG1pbmltdW0gcHJvamVjdGVkIGxlbmd0aCBhIHN0ZXAgc2hvdWxkIHJlc3VsdCBpblxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9ubHlJbnRlZ2VyXG4gICAqIEByZXR1cm4ge09iamVjdH0gQWxsIHRoZSB2YWx1ZXMgdG8gc2V0IHRoZSBib3VuZHMgb2YgdGhlIGNoYXJ0XG4gICAqL1xuICBDaGFydGlzdC5nZXRCb3VuZHMgPSBmdW5jdGlvbiAoYXhpc0xlbmd0aCwgaGlnaExvdywgc2NhbGVNaW5TcGFjZSwgb25seUludGVnZXIpIHtcbiAgICB2YXIgaSxcbiAgICAgIG9wdGltaXphdGlvbkNvdW50ZXIgPSAwLFxuICAgICAgbmV3TWluLFxuICAgICAgbmV3TWF4LFxuICAgICAgYm91bmRzID0ge1xuICAgICAgICBoaWdoOiBoaWdoTG93LmhpZ2gsXG4gICAgICAgIGxvdzogaGlnaExvdy5sb3dcbiAgICAgIH07XG5cbiAgICBib3VuZHMudmFsdWVSYW5nZSA9IGJvdW5kcy5oaWdoIC0gYm91bmRzLmxvdztcbiAgICBib3VuZHMub29tID0gQ2hhcnRpc3Qub3JkZXJPZk1hZ25pdHVkZShib3VuZHMudmFsdWVSYW5nZSk7XG4gICAgYm91bmRzLnN0ZXAgPSBNYXRoLnBvdygxMCwgYm91bmRzLm9vbSk7XG4gICAgYm91bmRzLm1pbiA9IE1hdGguZmxvb3IoYm91bmRzLmxvdyAvIGJvdW5kcy5zdGVwKSAqIGJvdW5kcy5zdGVwO1xuICAgIGJvdW5kcy5tYXggPSBNYXRoLmNlaWwoYm91bmRzLmhpZ2ggLyBib3VuZHMuc3RlcCkgKiBib3VuZHMuc3RlcDtcbiAgICBib3VuZHMucmFuZ2UgPSBib3VuZHMubWF4IC0gYm91bmRzLm1pbjtcbiAgICBib3VuZHMubnVtYmVyT2ZTdGVwcyA9IE1hdGgucm91bmQoYm91bmRzLnJhbmdlIC8gYm91bmRzLnN0ZXApO1xuXG4gICAgLy8gT3B0aW1pemUgc2NhbGUgc3RlcCBieSBjaGVja2luZyBpZiBzdWJkaXZpc2lvbiBpcyBwb3NzaWJsZSBiYXNlZCBvbiBob3Jpem9udGFsR3JpZE1pblNwYWNlXG4gICAgLy8gSWYgd2UgYXJlIGFscmVhZHkgYmVsb3cgdGhlIHNjYWxlTWluU3BhY2UgdmFsdWUgd2Ugd2lsbCBzY2FsZSB1cFxuICAgIHZhciBsZW5ndGggPSBDaGFydGlzdC5wcm9qZWN0TGVuZ3RoKGF4aXNMZW5ndGgsIGJvdW5kcy5zdGVwLCBib3VuZHMpO1xuICAgIHZhciBzY2FsZVVwID0gbGVuZ3RoIDwgc2NhbGVNaW5TcGFjZTtcbiAgICB2YXIgc21hbGxlc3RGYWN0b3IgPSBvbmx5SW50ZWdlciA/IENoYXJ0aXN0LnJobyhib3VuZHMucmFuZ2UpIDogMDtcblxuICAgIC8vIEZpcnN0IGNoZWNrIGlmIHdlIHNob3VsZCBvbmx5IHVzZSBpbnRlZ2VyIHN0ZXBzIGFuZCBpZiBzdGVwIDEgaXMgc3RpbGwgbGFyZ2VyIHRoYW4gc2NhbGVNaW5TcGFjZSBzbyB3ZSBjYW4gdXNlIDFcbiAgICBpZihvbmx5SW50ZWdlciAmJiBDaGFydGlzdC5wcm9qZWN0TGVuZ3RoKGF4aXNMZW5ndGgsIDEsIGJvdW5kcykgPj0gc2NhbGVNaW5TcGFjZSkge1xuICAgICAgYm91bmRzLnN0ZXAgPSAxO1xuICAgIH0gZWxzZSBpZihvbmx5SW50ZWdlciAmJiBzbWFsbGVzdEZhY3RvciA8IGJvdW5kcy5zdGVwICYmIENoYXJ0aXN0LnByb2plY3RMZW5ndGgoYXhpc0xlbmd0aCwgc21hbGxlc3RGYWN0b3IsIGJvdW5kcykgPj0gc2NhbGVNaW5TcGFjZSkge1xuICAgICAgLy8gSWYgc3RlcCAxIHdhcyB0b28gc21hbGwsIHdlIGNhbiB0cnkgdGhlIHNtYWxsZXN0IGZhY3RvciBvZiByYW5nZVxuICAgICAgLy8gSWYgdGhlIHNtYWxsZXN0IGZhY3RvciBpcyBzbWFsbGVyIHRoYW4gdGhlIGN1cnJlbnQgYm91bmRzLnN0ZXAgYW5kIHRoZSBwcm9qZWN0ZWQgbGVuZ3RoIG9mIHNtYWxsZXN0IGZhY3RvclxuICAgICAgLy8gaXMgbGFyZ2VyIHRoYW4gdGhlIHNjYWxlTWluU3BhY2Ugd2Ugc2hvdWxkIGdvIGZvciBpdC5cbiAgICAgIGJvdW5kcy5zdGVwID0gc21hbGxlc3RGYWN0b3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRyeWluZyB0byBkaXZpZGUgb3IgbXVsdGlwbHkgYnkgMiBhbmQgZmluZCB0aGUgYmVzdCBzdGVwIHZhbHVlXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBpZiAoc2NhbGVVcCAmJiBDaGFydGlzdC5wcm9qZWN0TGVuZ3RoKGF4aXNMZW5ndGgsIGJvdW5kcy5zdGVwLCBib3VuZHMpIDw9IHNjYWxlTWluU3BhY2UpIHtcbiAgICAgICAgICBib3VuZHMuc3RlcCAqPSAyO1xuICAgICAgICB9IGVsc2UgaWYgKCFzY2FsZVVwICYmIENoYXJ0aXN0LnByb2plY3RMZW5ndGgoYXhpc0xlbmd0aCwgYm91bmRzLnN0ZXAgLyAyLCBib3VuZHMpID49IHNjYWxlTWluU3BhY2UpIHtcbiAgICAgICAgICBib3VuZHMuc3RlcCAvPSAyO1xuICAgICAgICAgIGlmKG9ubHlJbnRlZ2VyICYmIGJvdW5kcy5zdGVwICUgMSAhPT0gMCkge1xuICAgICAgICAgICAgYm91bmRzLnN0ZXAgKj0gMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKG9wdGltaXphdGlvbkNvdW50ZXIrKyA+IDEwMDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4Y2VlZGVkIG1heGltdW0gbnVtYmVyIG9mIGl0ZXJhdGlvbnMgd2hpbGUgb3B0aW1pemluZyBzY2FsZSBzdGVwIScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIEVQU0lMT04gPSAyLjIyMUUtMTY7XG4gICAgYm91bmRzLnN0ZXAgPSBNYXRoLm1heChib3VuZHMuc3RlcCwgRVBTSUxPTik7XG4gICAgZnVuY3Rpb24gc2FmZUluY3JlbWVudCh2YWx1ZSwgaW5jcmVtZW50KSB7XG4gICAgICAvLyBJZiBpbmNyZW1lbnQgaXMgdG9vIHNtYWxsIHVzZSAqPSAoMStFUFNJTE9OKSBhcyBhIHNpbXBsZSBuZXh0YWZ0ZXJcbiAgICAgIGlmICh2YWx1ZSA9PT0gKHZhbHVlICs9IGluY3JlbWVudCkpIHtcbiAgICAgIFx0dmFsdWUgKj0gKDEgKyAoaW5jcmVtZW50ID4gMCA/IEVQU0lMT04gOiAtRVBTSUxPTikpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8vIE5hcnJvdyBtaW4gYW5kIG1heCBiYXNlZCBvbiBuZXcgc3RlcFxuICAgIG5ld01pbiA9IGJvdW5kcy5taW47XG4gICAgbmV3TWF4ID0gYm91bmRzLm1heDtcbiAgICB3aGlsZSAobmV3TWluICsgYm91bmRzLnN0ZXAgPD0gYm91bmRzLmxvdykge1xuICAgIFx0bmV3TWluID0gc2FmZUluY3JlbWVudChuZXdNaW4sIGJvdW5kcy5zdGVwKTtcbiAgICB9XG4gICAgd2hpbGUgKG5ld01heCAtIGJvdW5kcy5zdGVwID49IGJvdW5kcy5oaWdoKSB7XG4gICAgXHRuZXdNYXggPSBzYWZlSW5jcmVtZW50KG5ld01heCwgLWJvdW5kcy5zdGVwKTtcbiAgICB9XG4gICAgYm91bmRzLm1pbiA9IG5ld01pbjtcbiAgICBib3VuZHMubWF4ID0gbmV3TWF4O1xuICAgIGJvdW5kcy5yYW5nZSA9IGJvdW5kcy5tYXggLSBib3VuZHMubWluO1xuXG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgIGZvciAoaSA9IGJvdW5kcy5taW47IGkgPD0gYm91bmRzLm1heDsgaSA9IHNhZmVJbmNyZW1lbnQoaSwgYm91bmRzLnN0ZXApKSB7XG4gICAgICB2YXIgdmFsdWUgPSBDaGFydGlzdC5yb3VuZFdpdGhQcmVjaXNpb24oaSk7XG4gICAgICBpZiAodmFsdWUgIT09IHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBib3VuZHMudmFsdWVzID0gdmFsdWVzO1xuICAgIHJldHVybiBib3VuZHM7XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBjYXJ0ZXNpYW4gY29vcmRpbmF0ZXMgb2YgcG9sYXIgY29vcmRpbmF0ZXNcbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkNvcmVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNlbnRlclggWC1heGlzIGNvb3JkaW5hdGVzIG9mIGNlbnRlciBwb2ludCBvZiBjaXJjbGUgc2VnbWVudFxuICAgKiBAcGFyYW0ge051bWJlcn0gY2VudGVyWSBYLWF4aXMgY29vcmRpbmF0ZXMgb2YgY2VudGVyIHBvaW50IG9mIGNpcmNsZSBzZWdtZW50XG4gICAqIEBwYXJhbSB7TnVtYmVyfSByYWRpdXMgUmFkaXVzIG9mIGNpcmNsZSBzZWdtZW50XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBhbmdsZUluRGVncmVlcyBBbmdsZSBvZiBjaXJjbGUgc2VnbWVudCBpbiBkZWdyZWVzXG4gICAqIEByZXR1cm4ge3t4Ok51bWJlciwgeTpOdW1iZXJ9fSBDb29yZGluYXRlcyBvZiBwb2ludCBvbiBjaXJjdW1mZXJlbmNlXG4gICAqL1xuICBDaGFydGlzdC5wb2xhclRvQ2FydGVzaWFuID0gZnVuY3Rpb24gKGNlbnRlclgsIGNlbnRlclksIHJhZGl1cywgYW5nbGVJbkRlZ3JlZXMpIHtcbiAgICB2YXIgYW5nbGVJblJhZGlhbnMgPSAoYW5nbGVJbkRlZ3JlZXMgLSA5MCkgKiBNYXRoLlBJIC8gMTgwLjA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogY2VudGVyWCArIChyYWRpdXMgKiBNYXRoLmNvcyhhbmdsZUluUmFkaWFucykpLFxuICAgICAgeTogY2VudGVyWSArIChyYWRpdXMgKiBNYXRoLnNpbihhbmdsZUluUmFkaWFucykpXG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjaGFydCBkcmF3aW5nIHJlY3RhbmdsZSAoYXJlYSB3aGVyZSBjaGFydCBpcyBkcmF3bikgeDEseTEgPSBib3R0b20gbGVmdCAvIHgyLHkyID0gdG9wIHJpZ2h0XG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdmcgVGhlIHN2ZyBlbGVtZW50IGZvciB0aGUgY2hhcnRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIE9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCB0aGUgb3B0aW9uYWwgdmFsdWVzIGZvciB0aGUgY2hhcnRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtmYWxsYmFja1BhZGRpbmddIFRoZSBmYWxsYmFjayBwYWRkaW5nIGlmIHBhcnRpYWwgcGFkZGluZyBvYmplY3RzIGFyZSB1c2VkXG4gICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGNoYXJ0IHJlY3RhbmdsZXMgY29vcmRpbmF0ZXMgaW5zaWRlIHRoZSBzdmcgZWxlbWVudCBwbHVzIHRoZSByZWN0YW5nbGVzIG1lYXN1cmVtZW50c1xuICAgKi9cbiAgQ2hhcnRpc3QuY3JlYXRlQ2hhcnRSZWN0ID0gZnVuY3Rpb24gKHN2Zywgb3B0aW9ucywgZmFsbGJhY2tQYWRkaW5nKSB7XG4gICAgdmFyIGhhc0F4aXMgPSAhIShvcHRpb25zLmF4aXNYIHx8IG9wdGlvbnMuYXhpc1kpO1xuICAgIHZhciB5QXhpc09mZnNldCA9IGhhc0F4aXMgPyBvcHRpb25zLmF4aXNZLm9mZnNldCA6IDA7XG4gICAgdmFyIHhBeGlzT2Zmc2V0ID0gaGFzQXhpcyA/IG9wdGlvbnMuYXhpc1gub2Zmc2V0IDogMDtcbiAgICAvLyBJZiB3aWR0aCBvciBoZWlnaHQgcmVzdWx0cyBpbiBpbnZhbGlkIHZhbHVlIChpbmNsdWRpbmcgMCkgd2UgZmFsbGJhY2sgdG8gdGhlIHVuaXRsZXNzIHNldHRpbmdzIG9yIGV2ZW4gMFxuICAgIHZhciB3aWR0aCA9IHN2Zy53aWR0aCgpIHx8IENoYXJ0aXN0LnF1YW50aXR5KG9wdGlvbnMud2lkdGgpLnZhbHVlIHx8IDA7XG4gICAgdmFyIGhlaWdodCA9IHN2Zy5oZWlnaHQoKSB8fCBDaGFydGlzdC5xdWFudGl0eShvcHRpb25zLmhlaWdodCkudmFsdWUgfHwgMDtcbiAgICB2YXIgbm9ybWFsaXplZFBhZGRpbmcgPSBDaGFydGlzdC5ub3JtYWxpemVQYWRkaW5nKG9wdGlvbnMuY2hhcnRQYWRkaW5nLCBmYWxsYmFja1BhZGRpbmcpO1xuXG4gICAgLy8gSWYgc2V0dGluZ3Mgd2VyZSB0byBzbWFsbCB0byBjb3BlIHdpdGggb2Zmc2V0IChsZWdhY3kpIGFuZCBwYWRkaW5nLCB3ZSdsbCBhZGp1c3RcbiAgICB3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCB5QXhpc09mZnNldCArIG5vcm1hbGl6ZWRQYWRkaW5nLmxlZnQgKyBub3JtYWxpemVkUGFkZGluZy5yaWdodCk7XG4gICAgaGVpZ2h0ID0gTWF0aC5tYXgoaGVpZ2h0LCB4QXhpc09mZnNldCArIG5vcm1hbGl6ZWRQYWRkaW5nLnRvcCArIG5vcm1hbGl6ZWRQYWRkaW5nLmJvdHRvbSk7XG5cbiAgICB2YXIgY2hhcnRSZWN0ID0ge1xuICAgICAgcGFkZGluZzogbm9ybWFsaXplZFBhZGRpbmcsXG4gICAgICB3aWR0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy54MiAtIHRoaXMueDE7XG4gICAgICB9LFxuICAgICAgaGVpZ2h0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnkxIC0gdGhpcy55MjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYoaGFzQXhpcykge1xuICAgICAgaWYgKG9wdGlvbnMuYXhpc1gucG9zaXRpb24gPT09ICdzdGFydCcpIHtcbiAgICAgICAgY2hhcnRSZWN0LnkyID0gbm9ybWFsaXplZFBhZGRpbmcudG9wICsgeEF4aXNPZmZzZXQ7XG4gICAgICAgIGNoYXJ0UmVjdC55MSA9IE1hdGgubWF4KGhlaWdodCAtIG5vcm1hbGl6ZWRQYWRkaW5nLmJvdHRvbSwgY2hhcnRSZWN0LnkyICsgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFydFJlY3QueTIgPSBub3JtYWxpemVkUGFkZGluZy50b3A7XG4gICAgICAgIGNoYXJ0UmVjdC55MSA9IE1hdGgubWF4KGhlaWdodCAtIG5vcm1hbGl6ZWRQYWRkaW5nLmJvdHRvbSAtIHhBeGlzT2Zmc2V0LCBjaGFydFJlY3QueTIgKyAxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuYXhpc1kucG9zaXRpb24gPT09ICdzdGFydCcpIHtcbiAgICAgICAgY2hhcnRSZWN0LngxID0gbm9ybWFsaXplZFBhZGRpbmcubGVmdCArIHlBeGlzT2Zmc2V0O1xuICAgICAgICBjaGFydFJlY3QueDIgPSBNYXRoLm1heCh3aWR0aCAtIG5vcm1hbGl6ZWRQYWRkaW5nLnJpZ2h0LCBjaGFydFJlY3QueDEgKyAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoYXJ0UmVjdC54MSA9IG5vcm1hbGl6ZWRQYWRkaW5nLmxlZnQ7XG4gICAgICAgIGNoYXJ0UmVjdC54MiA9IE1hdGgubWF4KHdpZHRoIC0gbm9ybWFsaXplZFBhZGRpbmcucmlnaHQgLSB5QXhpc09mZnNldCwgY2hhcnRSZWN0LngxICsgMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYXJ0UmVjdC54MSA9IG5vcm1hbGl6ZWRQYWRkaW5nLmxlZnQ7XG4gICAgICBjaGFydFJlY3QueDIgPSBNYXRoLm1heCh3aWR0aCAtIG5vcm1hbGl6ZWRQYWRkaW5nLnJpZ2h0LCBjaGFydFJlY3QueDEgKyAxKTtcbiAgICAgIGNoYXJ0UmVjdC55MiA9IG5vcm1hbGl6ZWRQYWRkaW5nLnRvcDtcbiAgICAgIGNoYXJ0UmVjdC55MSA9IE1hdGgubWF4KGhlaWdodCAtIG5vcm1hbGl6ZWRQYWRkaW5nLmJvdHRvbSwgY2hhcnRSZWN0LnkyICsgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoYXJ0UmVjdDtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGdyaWQgbGluZSBiYXNlZCBvbiBhIHByb2plY3RlZCB2YWx1ZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkNvcmVcbiAgICogQHBhcmFtIHBvc2l0aW9uXG4gICAqIEBwYXJhbSBpbmRleFxuICAgKiBAcGFyYW0gYXhpc1xuICAgKiBAcGFyYW0gb2Zmc2V0XG4gICAqIEBwYXJhbSBsZW5ndGhcbiAgICogQHBhcmFtIGdyb3VwXG4gICAqIEBwYXJhbSBjbGFzc2VzXG4gICAqIEBwYXJhbSBldmVudEVtaXR0ZXJcbiAgICovXG4gIENoYXJ0aXN0LmNyZWF0ZUdyaWQgPSBmdW5jdGlvbihwb3NpdGlvbiwgaW5kZXgsIGF4aXMsIG9mZnNldCwgbGVuZ3RoLCBncm91cCwgY2xhc3NlcywgZXZlbnRFbWl0dGVyKSB7XG4gICAgdmFyIHBvc2l0aW9uYWxEYXRhID0ge307XG4gICAgcG9zaXRpb25hbERhdGFbYXhpcy51bml0cy5wb3MgKyAnMSddID0gcG9zaXRpb247XG4gICAgcG9zaXRpb25hbERhdGFbYXhpcy51bml0cy5wb3MgKyAnMiddID0gcG9zaXRpb247XG4gICAgcG9zaXRpb25hbERhdGFbYXhpcy5jb3VudGVyVW5pdHMucG9zICsgJzEnXSA9IG9mZnNldDtcbiAgICBwb3NpdGlvbmFsRGF0YVtheGlzLmNvdW50ZXJVbml0cy5wb3MgKyAnMiddID0gb2Zmc2V0ICsgbGVuZ3RoO1xuXG4gICAgdmFyIGdyaWRFbGVtZW50ID0gZ3JvdXAuZWxlbSgnbGluZScsIHBvc2l0aW9uYWxEYXRhLCBjbGFzc2VzLmpvaW4oJyAnKSk7XG5cbiAgICAvLyBFdmVudCBmb3IgZ3JpZCBkcmF3XG4gICAgZXZlbnRFbWl0dGVyLmVtaXQoJ2RyYXcnLFxuICAgICAgQ2hhcnRpc3QuZXh0ZW5kKHtcbiAgICAgICAgdHlwZTogJ2dyaWQnLFxuICAgICAgICBheGlzOiBheGlzLFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIGdyb3VwOiBncm91cCxcbiAgICAgICAgZWxlbWVudDogZ3JpZEVsZW1lbnRcbiAgICAgIH0sIHBvc2l0aW9uYWxEYXRhKVxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBncmlkIGJhY2tncm91bmQgcmVjdCBhbmQgZW1pdHMgdGhlIGRyYXcgZXZlbnQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSBncmlkR3JvdXBcbiAgICogQHBhcmFtIGNoYXJ0UmVjdFxuICAgKiBAcGFyYW0gY2xhc3NOYW1lXG4gICAqIEBwYXJhbSBldmVudEVtaXR0ZXJcbiAgICovXG4gIENoYXJ0aXN0LmNyZWF0ZUdyaWRCYWNrZ3JvdW5kID0gZnVuY3Rpb24gKGdyaWRHcm91cCwgY2hhcnRSZWN0LCBjbGFzc05hbWUsIGV2ZW50RW1pdHRlcikge1xuICAgIHZhciBncmlkQmFja2dyb3VuZCA9IGdyaWRHcm91cC5lbGVtKCdyZWN0Jywge1xuICAgICAgICB4OiBjaGFydFJlY3QueDEsXG4gICAgICAgIHk6IGNoYXJ0UmVjdC55MixcbiAgICAgICAgd2lkdGg6IGNoYXJ0UmVjdC53aWR0aCgpLFxuICAgICAgICBoZWlnaHQ6IGNoYXJ0UmVjdC5oZWlnaHQoKSxcbiAgICAgIH0sIGNsYXNzTmFtZSwgdHJ1ZSk7XG5cbiAgICAgIC8vIEV2ZW50IGZvciBncmlkIGJhY2tncm91bmQgZHJhd1xuICAgICAgZXZlbnRFbWl0dGVyLmVtaXQoJ2RyYXcnLCB7XG4gICAgICAgIHR5cGU6ICdncmlkQmFja2dyb3VuZCcsXG4gICAgICAgIGdyb3VwOiBncmlkR3JvdXAsXG4gICAgICAgIGVsZW1lbnQ6IGdyaWRCYWNrZ3JvdW5kXG4gICAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGxhYmVsIGJhc2VkIG9uIGEgcHJvamVjdGVkIHZhbHVlIGFuZCBhbiBheGlzLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0gcG9zaXRpb25cbiAgICogQHBhcmFtIGxlbmd0aFxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICogQHBhcmFtIGxhYmVsc1xuICAgKiBAcGFyYW0gYXhpc1xuICAgKiBAcGFyYW0gYXhpc09mZnNldFxuICAgKiBAcGFyYW0gbGFiZWxPZmZzZXRcbiAgICogQHBhcmFtIGdyb3VwXG4gICAqIEBwYXJhbSBjbGFzc2VzXG4gICAqIEBwYXJhbSB1c2VGb3JlaWduT2JqZWN0XG4gICAqIEBwYXJhbSBldmVudEVtaXR0ZXJcbiAgICovXG4gIENoYXJ0aXN0LmNyZWF0ZUxhYmVsID0gZnVuY3Rpb24ocG9zaXRpb24sIGxlbmd0aCwgaW5kZXgsIGxhYmVscywgYXhpcywgYXhpc09mZnNldCwgbGFiZWxPZmZzZXQsIGdyb3VwLCBjbGFzc2VzLCB1c2VGb3JlaWduT2JqZWN0LCBldmVudEVtaXR0ZXIpIHtcbiAgICB2YXIgbGFiZWxFbGVtZW50O1xuICAgIHZhciBwb3NpdGlvbmFsRGF0YSA9IHt9O1xuXG4gICAgcG9zaXRpb25hbERhdGFbYXhpcy51bml0cy5wb3NdID0gcG9zaXRpb24gKyBsYWJlbE9mZnNldFtheGlzLnVuaXRzLnBvc107XG4gICAgcG9zaXRpb25hbERhdGFbYXhpcy5jb3VudGVyVW5pdHMucG9zXSA9IGxhYmVsT2Zmc2V0W2F4aXMuY291bnRlclVuaXRzLnBvc107XG4gICAgcG9zaXRpb25hbERhdGFbYXhpcy51bml0cy5sZW5dID0gbGVuZ3RoO1xuICAgIHBvc2l0aW9uYWxEYXRhW2F4aXMuY291bnRlclVuaXRzLmxlbl0gPSBNYXRoLm1heCgwLCBheGlzT2Zmc2V0IC0gMTApO1xuXG4gICAgaWYodXNlRm9yZWlnbk9iamVjdCkge1xuICAgICAgLy8gV2UgbmVlZCB0byBzZXQgd2lkdGggYW5kIGhlaWdodCBleHBsaWNpdGx5IHRvIHB4IGFzIHNwYW4gd2lsbCBub3QgZXhwYW5kIHdpdGggd2lkdGggYW5kIGhlaWdodCBiZWluZ1xuICAgICAgLy8gMTAwJSBpbiBhbGwgYnJvd3NlcnNcbiAgICAgIHZhciBjb250ZW50ID0gJzxzcGFuIGNsYXNzPVwiJyArIGNsYXNzZXMuam9pbignICcpICsgJ1wiIHN0eWxlPVwiJyArXG4gICAgICAgIGF4aXMudW5pdHMubGVuICsgJzogJyArIE1hdGgucm91bmQocG9zaXRpb25hbERhdGFbYXhpcy51bml0cy5sZW5dKSArICdweDsgJyArXG4gICAgICAgIGF4aXMuY291bnRlclVuaXRzLmxlbiArICc6ICcgKyBNYXRoLnJvdW5kKHBvc2l0aW9uYWxEYXRhW2F4aXMuY291bnRlclVuaXRzLmxlbl0pICsgJ3B4XCI+JyArXG4gICAgICAgIGxhYmVsc1tpbmRleF0gKyAnPC9zcGFuPic7XG5cbiAgICAgIGxhYmVsRWxlbWVudCA9IGdyb3VwLmZvcmVpZ25PYmplY3QoY29udGVudCwgQ2hhcnRpc3QuZXh0ZW5kKHtcbiAgICAgICAgc3R5bGU6ICdvdmVyZmxvdzogdmlzaWJsZTsnXG4gICAgICB9LCBwb3NpdGlvbmFsRGF0YSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYWJlbEVsZW1lbnQgPSBncm91cC5lbGVtKCd0ZXh0JywgcG9zaXRpb25hbERhdGEsIGNsYXNzZXMuam9pbignICcpKS50ZXh0KGxhYmVsc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGV2ZW50RW1pdHRlci5lbWl0KCdkcmF3JywgQ2hhcnRpc3QuZXh0ZW5kKHtcbiAgICAgIHR5cGU6ICdsYWJlbCcsXG4gICAgICBheGlzOiBheGlzLFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgZ3JvdXA6IGdyb3VwLFxuICAgICAgZWxlbWVudDogbGFiZWxFbGVtZW50LFxuICAgICAgdGV4dDogbGFiZWxzW2luZGV4XVxuICAgIH0sIHBvc2l0aW9uYWxEYXRhKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhlbHBlciB0byByZWFkIHNlcmllcyBzcGVjaWZpYyBvcHRpb25zIGZyb20gb3B0aW9ucyBvYmplY3QuIEl0IGF1dG9tYXRpY2FsbHkgZmFsbHMgYmFjayB0byB0aGUgZ2xvYmFsIG9wdGlvbiBpZlxuICAgKiB0aGVyZSBpcyBubyBvcHRpb24gaW4gdGhlIHNlcmllcyBvcHRpb25zLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gc2VyaWVzIFNlcmllcyBvYmplY3RcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQ2hhcnRpc3Qgb3B0aW9ucyBvYmplY3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgb3B0aW9ucyBrZXkgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBvYnRhaW4gdGhlIG9wdGlvbnNcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBDaGFydGlzdC5nZXRTZXJpZXNPcHRpb24gPSBmdW5jdGlvbihzZXJpZXMsIG9wdGlvbnMsIGtleSkge1xuICAgIGlmKHNlcmllcy5uYW1lICYmIG9wdGlvbnMuc2VyaWVzICYmIG9wdGlvbnMuc2VyaWVzW3Nlcmllcy5uYW1lXSkge1xuICAgICAgdmFyIHNlcmllc09wdGlvbnMgPSBvcHRpb25zLnNlcmllc1tzZXJpZXMubmFtZV07XG4gICAgICByZXR1cm4gc2VyaWVzT3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpID8gc2VyaWVzT3B0aW9uc1trZXldIDogb3B0aW9uc1trZXldO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3B0aW9uc1trZXldO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUHJvdmlkZXMgb3B0aW9ucyBoYW5kbGluZyBmdW5jdGlvbmFsaXR5IHdpdGggY2FsbGJhY2sgZm9yIG9wdGlvbnMgY2hhbmdlcyB0cmlnZ2VyZWQgYnkgcmVzcG9uc2l2ZSBvcHRpb25zIGFuZCBtZWRpYSBxdWVyeSBtYXRjaGVzXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgc2V0IGJ5IHVzZXJcbiAgICogQHBhcmFtIHtBcnJheX0gcmVzcG9uc2l2ZU9wdGlvbnMgT3B0aW9uYWwgZnVuY3Rpb25zIHRvIGFkZCByZXNwb25zaXZlIGJlaGF2aW9yIHRvIGNoYXJ0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudEVtaXR0ZXIgVGhlIGV2ZW50IGVtaXR0ZXIgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZW1pdCB0aGUgb3B0aW9ucyBjaGFuZ2VkIGV2ZW50c1xuICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBjb25zb2xpZGF0ZWQgb3B0aW9ucyBvYmplY3QgZnJvbSB0aGUgZGVmYXVsdHMsIGJhc2UgYW5kIG1hdGNoaW5nIHJlc3BvbnNpdmUgb3B0aW9uc1xuICAgKi9cbiAgQ2hhcnRpc3Qub3B0aW9uc1Byb3ZpZGVyID0gZnVuY3Rpb24gKG9wdGlvbnMsIHJlc3BvbnNpdmVPcHRpb25zLCBldmVudEVtaXR0ZXIpIHtcbiAgICB2YXIgYmFzZU9wdGlvbnMgPSBDaGFydGlzdC5leHRlbmQoe30sIG9wdGlvbnMpLFxuICAgICAgY3VycmVudE9wdGlvbnMsXG4gICAgICBtZWRpYVF1ZXJ5TGlzdGVuZXJzID0gW10sXG4gICAgICBpO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ3VycmVudE9wdGlvbnMobWVkaWFFdmVudCkge1xuICAgICAgdmFyIHByZXZpb3VzT3B0aW9ucyA9IGN1cnJlbnRPcHRpb25zO1xuICAgICAgY3VycmVudE9wdGlvbnMgPSBDaGFydGlzdC5leHRlbmQoe30sIGJhc2VPcHRpb25zKTtcblxuICAgICAgaWYgKHJlc3BvbnNpdmVPcHRpb25zKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByZXNwb25zaXZlT3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShyZXNwb25zaXZlT3B0aW9uc1tpXVswXSk7XG4gICAgICAgICAgaWYgKG1xbC5tYXRjaGVzKSB7XG4gICAgICAgICAgICBjdXJyZW50T3B0aW9ucyA9IENoYXJ0aXN0LmV4dGVuZChjdXJyZW50T3B0aW9ucywgcmVzcG9uc2l2ZU9wdGlvbnNbaV1bMV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihldmVudEVtaXR0ZXIgJiYgbWVkaWFFdmVudCkge1xuICAgICAgICBldmVudEVtaXR0ZXIuZW1pdCgnb3B0aW9uc0NoYW5nZWQnLCB7XG4gICAgICAgICAgcHJldmlvdXNPcHRpb25zOiBwcmV2aW91c09wdGlvbnMsXG4gICAgICAgICAgY3VycmVudE9wdGlvbnM6IGN1cnJlbnRPcHRpb25zXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZU1lZGlhUXVlcnlMaXN0ZW5lcnMoKSB7XG4gICAgICBtZWRpYVF1ZXJ5TGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24obXFsKSB7XG4gICAgICAgIG1xbC5yZW1vdmVMaXN0ZW5lcih1cGRhdGVDdXJyZW50T3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXdpbmRvdy5tYXRjaE1lZGlhKSB7XG4gICAgICB0aHJvdyAnd2luZG93Lm1hdGNoTWVkaWEgbm90IGZvdW5kISBNYWtlIHN1cmUgeW91XFwncmUgdXNpbmcgYSBwb2x5ZmlsbC4nO1xuICAgIH0gZWxzZSBpZiAocmVzcG9uc2l2ZU9wdGlvbnMpIHtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IHJlc3BvbnNpdmVPcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShyZXNwb25zaXZlT3B0aW9uc1tpXVswXSk7XG4gICAgICAgIG1xbC5hZGRMaXN0ZW5lcih1cGRhdGVDdXJyZW50T3B0aW9ucyk7XG4gICAgICAgIG1lZGlhUXVlcnlMaXN0ZW5lcnMucHVzaChtcWwpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBFeGVjdXRlIGluaXRpYWxseSB3aXRob3V0IGFuIGV2ZW50IGFyZ3VtZW50IHNvIHdlIGdldCB0aGUgY29ycmVjdCBvcHRpb25zXG4gICAgdXBkYXRlQ3VycmVudE9wdGlvbnMoKTtcblxuICAgIHJldHVybiB7XG4gICAgICByZW1vdmVNZWRpYVF1ZXJ5TGlzdGVuZXJzOiByZW1vdmVNZWRpYVF1ZXJ5TGlzdGVuZXJzLFxuICAgICAgZ2V0Q3VycmVudE9wdGlvbnM6IGZ1bmN0aW9uIGdldEN1cnJlbnRPcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gQ2hhcnRpc3QuZXh0ZW5kKHt9LCBjdXJyZW50T3B0aW9ucyk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuXG4gIC8qKlxuICAgKiBTcGxpdHMgYSBsaXN0IG9mIGNvb3JkaW5hdGVzIGFuZCBhc3NvY2lhdGVkIHZhbHVlcyBpbnRvIHNlZ21lbnRzLiBFYWNoIHJldHVybmVkIHNlZ21lbnQgY29udGFpbnMgYSBwYXRoQ29vcmRpbmF0ZXNcbiAgICogdmFsdWVEYXRhIHByb3BlcnR5IGRlc2NyaWJpbmcgdGhlIHNlZ21lbnQuXG4gICAqXG4gICAqIFdpdGggdGhlIGRlZmF1bHQgb3B0aW9ucywgc2VnbWVudHMgY29uc2lzdCBvZiBjb250aWd1b3VzIHNldHMgb2YgcG9pbnRzIHRoYXQgZG8gbm90IGhhdmUgYW4gdW5kZWZpbmVkIHZhbHVlLiBBbnlcbiAgICogcG9pbnRzIHdpdGggdW5kZWZpbmVkIHZhbHVlcyBhcmUgZGlzY2FyZGVkLlxuICAgKlxuICAgKiAqKk9wdGlvbnMqKlxuICAgKiBUaGUgZm9sbG93aW5nIG9wdGlvbnMgYXJlIHVzZWQgdG8gZGV0ZXJtaW5lIGhvdyBzZWdtZW50cyBhcmUgZm9ybWVkXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogdmFyIG9wdGlvbnMgPSB7XG4gICAqICAgLy8gSWYgZmlsbEhvbGVzIGlzIHRydWUsIHVuZGVmaW5lZCB2YWx1ZXMgYXJlIHNpbXBseSBkaXNjYXJkZWQgd2l0aG91dCBjcmVhdGluZyBhIG5ldyBzZWdtZW50LiBBc3N1bWluZyBvdGhlciBvcHRpb25zIGFyZSBkZWZhdWx0LCB0aGlzIHJldHVybnMgc2luZ2xlIHNlZ21lbnQuXG4gICAqICAgZmlsbEhvbGVzOiBmYWxzZSxcbiAgICogICAvLyBJZiBpbmNyZWFzaW5nWCBpcyB0cnVlLCB0aGUgY29vcmRpbmF0ZXMgaW4gYWxsIHNlZ21lbnRzIGhhdmUgc3RyaWN0bHkgaW5jcmVhc2luZyB4LXZhbHVlcy5cbiAgICogICBpbmNyZWFzaW5nWDogZmFsc2VcbiAgICogfTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBhdGhDb29yZGluYXRlcyBMaXN0IG9mIHBvaW50IGNvb3JkaW5hdGVzIHRvIGJlIHNwbGl0IGluIHRoZSBmb3JtIFt4MSwgeTEsIHgyLCB5MiAuLi4geG4sIHluXVxuICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgTGlzdCBvZiBhc3NvY2lhdGVkIHBvaW50IHZhbHVlcyBpbiB0aGUgZm9ybSBbdjEsIHYyIC4uIHZuXVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIHNldCBieSB1c2VyXG4gICAqIEByZXR1cm4ge0FycmF5fSBMaXN0IG9mIHNlZ21lbnRzLCBlYWNoIGNvbnRhaW5pbmcgYSBwYXRoQ29vcmRpbmF0ZXMgYW5kIHZhbHVlRGF0YSBwcm9wZXJ0eS5cbiAgICovXG4gIENoYXJ0aXN0LnNwbGl0SW50b1NlZ21lbnRzID0gZnVuY3Rpb24ocGF0aENvb3JkaW5hdGVzLCB2YWx1ZURhdGEsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICBpbmNyZWFzaW5nWDogZmFsc2UsXG4gICAgICBmaWxsSG9sZXM6IGZhbHNlXG4gICAgfTtcblxuICAgIG9wdGlvbnMgPSBDaGFydGlzdC5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcblxuICAgIHZhciBzZWdtZW50cyA9IFtdO1xuICAgIHZhciBob2xlID0gdHJ1ZTtcblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwYXRoQ29vcmRpbmF0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIC8vIElmIHRoaXMgdmFsdWUgaXMgYSBcImhvbGVcIiB3ZSBzZXQgdGhlIGhvbGUgZmxhZ1xuICAgICAgaWYoQ2hhcnRpc3QuZ2V0TXVsdGlWYWx1ZSh2YWx1ZURhdGFbaSAvIDJdLnZhbHVlKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBpZih2YWx1ZURhdGFbaSAvIDJdLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYoIW9wdGlvbnMuZmlsbEhvbGVzKSB7XG4gICAgICAgICAgaG9sZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmKG9wdGlvbnMuaW5jcmVhc2luZ1ggJiYgaSA+PSAyICYmIHBhdGhDb29yZGluYXRlc1tpXSA8PSBwYXRoQ29vcmRpbmF0ZXNbaS0yXSkge1xuICAgICAgICAgIC8vIFggaXMgbm90IGluY3JlYXNpbmcsIHNvIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHdlIHN0YXJ0IGEgbmV3IHNlZ21lbnRcbiAgICAgICAgICBob2xlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gSWYgaXQncyBhIHZhbGlkIHZhbHVlIHdlIG5lZWQgdG8gY2hlY2sgaWYgd2UncmUgY29taW5nIG91dCBvZiBhIGhvbGUgYW5kIGNyZWF0ZSBhIG5ldyBlbXB0eSBzZWdtZW50XG4gICAgICAgIGlmKGhvbGUpIHtcbiAgICAgICAgICBzZWdtZW50cy5wdXNoKHtcbiAgICAgICAgICAgIHBhdGhDb29yZGluYXRlczogW10sXG4gICAgICAgICAgICB2YWx1ZURhdGE6IFtdXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gQXMgd2UgaGF2ZSBhIHZhbGlkIHZhbHVlIG5vdywgd2UgYXJlIG5vdCBpbiBhIFwiaG9sZVwiIGFueW1vcmVcbiAgICAgICAgICBob2xlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgdG8gdGhlIHNlZ21lbnQgcGF0aENvb3JkaW5hdGVzIGFuZCB2YWx1ZURhdGFcbiAgICAgICAgc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0ucGF0aENvb3JkaW5hdGVzLnB1c2gocGF0aENvb3JkaW5hdGVzW2ldLCBwYXRoQ29vcmRpbmF0ZXNbaSArIDFdKTtcbiAgICAgICAgc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0udmFsdWVEYXRhLnB1c2godmFsdWVEYXRhW2kgLyAyXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlZ21lbnRzO1xuICB9O1xufSh3aW5kb3csIGRvY3VtZW50LCBDaGFydGlzdCkpO1xuOy8qKlxuICogQ2hhcnRpc3QgcGF0aCBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9ucy5cbiAqXG4gKiBAbW9kdWxlIENoYXJ0aXN0LkludGVycG9sYXRpb25cbiAqL1xuLyogZ2xvYmFsIENoYXJ0aXN0ICovXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgQ2hhcnRpc3QpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIENoYXJ0aXN0LkludGVycG9sYXRpb24gPSB7fTtcblxuICAvKipcbiAgICogVGhpcyBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uIGRvZXMgbm90IHNtb290aCB0aGUgcGF0aCBhbmQgdGhlIHJlc3VsdCBpcyBvbmx5IGNvbnRhaW5pbmcgbGluZXMgYW5kIG5vIGN1cnZlcy5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogdmFyIGNoYXJ0ID0gbmV3IENoYXJ0aXN0LkxpbmUoJy5jdC1jaGFydCcsIHtcbiAgICogICBsYWJlbHM6IFsxLCAyLCAzLCA0LCA1XSxcbiAgICogICBzZXJpZXM6IFtbMSwgMiwgOCwgMSwgN11dXG4gICAqIH0sIHtcbiAgICogICBsaW5lU21vb3RoOiBDaGFydGlzdC5JbnRlcnBvbGF0aW9uLm5vbmUoe1xuICAgKiAgICAgZmlsbEhvbGVzOiBmYWxzZVxuICAgKiAgIH0pXG4gICAqIH0pO1xuICAgKlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuSW50ZXJwb2xhdGlvblxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAgICovXG4gIENoYXJ0aXN0LkludGVycG9sYXRpb24ubm9uZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICBmaWxsSG9sZXM6IGZhbHNlXG4gICAgfTtcbiAgICBvcHRpb25zID0gQ2hhcnRpc3QuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5vbmUocGF0aENvb3JkaW5hdGVzLCB2YWx1ZURhdGEpIHtcbiAgICAgIHZhciBwYXRoID0gbmV3IENoYXJ0aXN0LlN2Zy5QYXRoKCk7XG4gICAgICB2YXIgaG9sZSA9IHRydWU7XG5cbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwYXRoQ29vcmRpbmF0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgdmFyIGN1cnJYID0gcGF0aENvb3JkaW5hdGVzW2ldO1xuICAgICAgICB2YXIgY3VyclkgPSBwYXRoQ29vcmRpbmF0ZXNbaSArIDFdO1xuICAgICAgICB2YXIgY3VyckRhdGEgPSB2YWx1ZURhdGFbaSAvIDJdO1xuXG4gICAgICAgIGlmKENoYXJ0aXN0LmdldE11bHRpVmFsdWUoY3VyckRhdGEudmFsdWUpICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgIGlmKGhvbGUpIHtcbiAgICAgICAgICAgIHBhdGgubW92ZShjdXJyWCwgY3VyclksIGZhbHNlLCBjdXJyRGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhdGgubGluZShjdXJyWCwgY3VyclksIGZhbHNlLCBjdXJyRGF0YSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaG9sZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYoIW9wdGlvbnMuZmlsbEhvbGVzKSB7XG4gICAgICAgICAgaG9sZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogU2ltcGxlIHNtb290aGluZyBjcmVhdGVzIGhvcml6b250YWwgaGFuZGxlcyB0aGF0IGFyZSBwb3NpdGlvbmVkIHdpdGggYSBmcmFjdGlvbiBvZiB0aGUgbGVuZ3RoIGJldHdlZW4gdHdvIGRhdGEgcG9pbnRzLiBZb3UgY2FuIHVzZSB0aGUgZGl2aXNvciBvcHRpb24gdG8gc3BlY2lmeSB0aGUgYW1vdW50IG9mIHNtb290aGluZy5cbiAgICpcbiAgICogU2ltcGxlIHNtb290aGluZyBjYW4gYmUgdXNlZCBpbnN0ZWFkIG9mIGBDaGFydGlzdC5TbW9vdGhpbmcuY2FyZGluYWxgIGlmIHlvdSdkIGxpa2UgdG8gZ2V0IHJpZCBvZiB0aGUgYXJ0aWZhY3RzIGl0IHByb2R1Y2VzIHNvbWV0aW1lcy4gU2ltcGxlIHNtb290aGluZyBwcm9kdWNlcyBsZXNzIGZsb3dpbmcgbGluZXMgYnV0IGlzIGFjY3VyYXRlIGJ5IGhpdHRpbmcgdGhlIHBvaW50cyBhbmQgaXQgYWxzbyBkb2Vzbid0IHN3aW5nIGJlbG93IG9yIGFib3ZlIHRoZSBnaXZlbiBkYXRhIHBvaW50LlxuICAgKlxuICAgKiBBbGwgc21vb3RoaW5nIGZ1bmN0aW9ucyB3aXRoaW4gQ2hhcnRpc3QgYXJlIGZhY3RvcnkgZnVuY3Rpb25zIHRoYXQgYWNjZXB0IGFuIG9wdGlvbnMgcGFyYW1ldGVyLiBUaGUgc2ltcGxlIGludGVycG9sYXRpb24gZnVuY3Rpb24gYWNjZXB0cyBvbmUgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXIgYGRpdmlzb3JgLCBiZXR3ZWVuIDEgYW5kIOKIniwgd2hpY2ggY29udHJvbHMgdGhlIHNtb290aGluZyBjaGFyYWN0ZXJpc3RpY3MuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHZhciBjaGFydCA9IG5ldyBDaGFydGlzdC5MaW5lKCcuY3QtY2hhcnQnLCB7XG4gICAqICAgbGFiZWxzOiBbMSwgMiwgMywgNCwgNV0sXG4gICAqICAgc2VyaWVzOiBbWzEsIDIsIDgsIDEsIDddXVxuICAgKiB9LCB7XG4gICAqICAgbGluZVNtb290aDogQ2hhcnRpc3QuSW50ZXJwb2xhdGlvbi5zaW1wbGUoe1xuICAgKiAgICAgZGl2aXNvcjogMixcbiAgICogICAgIGZpbGxIb2xlczogZmFsc2VcbiAgICogICB9KVxuICAgKiB9KTtcbiAgICpcbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkludGVycG9sYXRpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIG9wdGlvbnMgb2YgdGhlIHNpbXBsZSBpbnRlcnBvbGF0aW9uIGZhY3RvcnkgZnVuY3Rpb24uXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICAgKi9cbiAgQ2hhcnRpc3QuSW50ZXJwb2xhdGlvbi5zaW1wbGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgZGl2aXNvcjogMixcbiAgICAgIGZpbGxIb2xlczogZmFsc2VcbiAgICB9O1xuICAgIG9wdGlvbnMgPSBDaGFydGlzdC5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcblxuICAgIHZhciBkID0gMSAvIE1hdGgubWF4KDEsIG9wdGlvbnMuZGl2aXNvcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gc2ltcGxlKHBhdGhDb29yZGluYXRlcywgdmFsdWVEYXRhKSB7XG4gICAgICB2YXIgcGF0aCA9IG5ldyBDaGFydGlzdC5TdmcuUGF0aCgpO1xuICAgICAgdmFyIHByZXZYLCBwcmV2WSwgcHJldkRhdGE7XG5cbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwYXRoQ29vcmRpbmF0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgdmFyIGN1cnJYID0gcGF0aENvb3JkaW5hdGVzW2ldO1xuICAgICAgICB2YXIgY3VyclkgPSBwYXRoQ29vcmRpbmF0ZXNbaSArIDFdO1xuICAgICAgICB2YXIgbGVuZ3RoID0gKGN1cnJYIC0gcHJldlgpICogZDtcbiAgICAgICAgdmFyIGN1cnJEYXRhID0gdmFsdWVEYXRhW2kgLyAyXTtcblxuICAgICAgICBpZihjdXJyRGF0YS52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICBpZihwcmV2RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwYXRoLm1vdmUoY3VyclgsIGN1cnJZLCBmYWxzZSwgY3VyckRhdGEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXRoLmN1cnZlKFxuICAgICAgICAgICAgICBwcmV2WCArIGxlbmd0aCxcbiAgICAgICAgICAgICAgcHJldlksXG4gICAgICAgICAgICAgIGN1cnJYIC0gbGVuZ3RoLFxuICAgICAgICAgICAgICBjdXJyWSxcbiAgICAgICAgICAgICAgY3VyclgsXG4gICAgICAgICAgICAgIGN1cnJZLFxuICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgY3VyckRhdGFcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcHJldlggPSBjdXJyWDtcbiAgICAgICAgICBwcmV2WSA9IGN1cnJZO1xuICAgICAgICAgIHByZXZEYXRhID0gY3VyckRhdGE7XG4gICAgICAgIH0gZWxzZSBpZighb3B0aW9ucy5maWxsSG9sZXMpIHtcbiAgICAgICAgICBwcmV2WCA9IGN1cnJYID0gcHJldkRhdGEgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogQ2FyZGluYWwgLyBDYXRtdWxsLVJvbWUgc3BsaW5lIGludGVycG9sYXRpb24gaXMgdGhlIGRlZmF1bHQgc21vb3RoaW5nIGZ1bmN0aW9uIGluIENoYXJ0aXN0LiBJdCBwcm9kdWNlcyBuaWNlIHJlc3VsdHMgd2hlcmUgdGhlIHNwbGluZXMgd2lsbCBhbHdheXMgbWVldCB0aGUgcG9pbnRzLiBJdCBwcm9kdWNlcyBzb21lIGFydGlmYWN0cyB0aG91Z2ggd2hlbiBkYXRhIHZhbHVlcyBhcmUgaW5jcmVhc2VkIG9yIGRlY3JlYXNlZCByYXBpZGx5LiBUaGUgbGluZSBtYXkgbm90IGZvbGxvdyBhIHZlcnkgYWNjdXJhdGUgcGF0aCBhbmQgaWYgdGhlIGxpbmUgc2hvdWxkIGJlIGFjY3VyYXRlIHRoaXMgc21vb3RoaW5nIGZ1bmN0aW9uIGRvZXMgbm90IHByb2R1Y2UgdGhlIGJlc3QgcmVzdWx0cy5cbiAgICpcbiAgICogQ2FyZGluYWwgc3BsaW5lcyBjYW4gb25seSBiZSBjcmVhdGVkIGlmIHRoZXJlIGFyZSBtb3JlIHRoYW4gdHdvIGRhdGEgcG9pbnRzLiBJZiB0aGlzIGlzIG5vdCB0aGUgY2FzZSB0aGlzIHNtb290aGluZyB3aWxsIGZhbGxiYWNrIHRvIGBDaGFydGlzdC5TbW9vdGhpbmcubm9uZWAuXG4gICAqXG4gICAqIEFsbCBzbW9vdGhpbmcgZnVuY3Rpb25zIHdpdGhpbiBDaGFydGlzdCBhcmUgZmFjdG9yeSBmdW5jdGlvbnMgdGhhdCBhY2NlcHQgYW4gb3B0aW9ucyBwYXJhbWV0ZXIuIFRoZSBjYXJkaW5hbCBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uIGFjY2VwdHMgb25lIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVyIGB0ZW5zaW9uYCwgYmV0d2VlbiAwIGFuZCAxLCB3aGljaCBjb250cm9scyB0aGUgc21vb3RoaW5nIGludGVuc2l0eS5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogdmFyIGNoYXJ0ID0gbmV3IENoYXJ0aXN0LkxpbmUoJy5jdC1jaGFydCcsIHtcbiAgICogICBsYWJlbHM6IFsxLCAyLCAzLCA0LCA1XSxcbiAgICogICBzZXJpZXM6IFtbMSwgMiwgOCwgMSwgN11dXG4gICAqIH0sIHtcbiAgICogICBsaW5lU21vb3RoOiBDaGFydGlzdC5JbnRlcnBvbGF0aW9uLmNhcmRpbmFsKHtcbiAgICogICAgIHRlbnNpb246IDEsXG4gICAqICAgICBmaWxsSG9sZXM6IGZhbHNlXG4gICAqICAgfSlcbiAgICogfSk7XG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5JbnRlcnBvbGF0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFRoZSBvcHRpb25zIG9mIHRoZSBjYXJkaW5hbCBmYWN0b3J5IGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAgICovXG4gIENoYXJ0aXN0LkludGVycG9sYXRpb24uY2FyZGluYWwgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgdGVuc2lvbjogMSxcbiAgICAgIGZpbGxIb2xlczogZmFsc2VcbiAgICB9O1xuXG4gICAgb3B0aW9ucyA9IENoYXJ0aXN0LmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgdmFyIHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBvcHRpb25zLnRlbnNpb24pKSxcbiAgICAgIGMgPSAxIC0gdDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBjYXJkaW5hbChwYXRoQ29vcmRpbmF0ZXMsIHZhbHVlRGF0YSkge1xuICAgICAgLy8gRmlyc3Qgd2UgdHJ5IHRvIHNwbGl0IHRoZSBjb29yZGluYXRlcyBpbnRvIHNlZ21lbnRzXG4gICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byB0cmVhdCBcImhvbGVzXCIgaW4gbGluZSBjaGFydHNcbiAgICAgIHZhciBzZWdtZW50cyA9IENoYXJ0aXN0LnNwbGl0SW50b1NlZ21lbnRzKHBhdGhDb29yZGluYXRlcywgdmFsdWVEYXRhLCB7XG4gICAgICAgIGZpbGxIb2xlczogb3B0aW9ucy5maWxsSG9sZXNcbiAgICAgIH0pO1xuXG4gICAgICBpZighc2VnbWVudHMubGVuZ3RoKSB7XG4gICAgICAgIC8vIElmIHRoZXJlIHdlcmUgbm8gc2VnbWVudHMgcmV0dXJuICdDaGFydGlzdC5JbnRlcnBvbGF0aW9uLm5vbmUnXG4gICAgICAgIHJldHVybiBDaGFydGlzdC5JbnRlcnBvbGF0aW9uLm5vbmUoKShbXSk7XG4gICAgICB9IGVsc2UgaWYoc2VnbWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyBJZiB0aGUgc3BsaXQgcmVzdWx0ZWQgaW4gbW9yZSB0aGF0IG9uZSBzZWdtZW50IHdlIG5lZWQgdG8gaW50ZXJwb2xhdGUgZWFjaCBzZWdtZW50IGluZGl2aWR1YWxseSBhbmQgam9pbiB0aGVtXG4gICAgICAgIC8vIGFmdGVyd2FyZHMgdG9nZXRoZXIgaW50byBhIHNpbmdsZSBwYXRoLlxuICAgICAgICAgIHZhciBwYXRocyA9IFtdO1xuICAgICAgICAvLyBGb3IgZWFjaCBzZWdtZW50IHdlIHdpbGwgcmVjdXJzZSB0aGUgY2FyZGluYWwgZnVuY3Rpb25cbiAgICAgICAgc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbihzZWdtZW50KSB7XG4gICAgICAgICAgcGF0aHMucHVzaChjYXJkaW5hbChzZWdtZW50LnBhdGhDb29yZGluYXRlcywgc2VnbWVudC52YWx1ZURhdGEpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEpvaW4gdGhlIHNlZ21lbnQgcGF0aCBkYXRhIGludG8gYSBzaW5nbGUgcGF0aCBhbmQgcmV0dXJuXG4gICAgICAgIHJldHVybiBDaGFydGlzdC5TdmcuUGF0aC5qb2luKHBhdGhzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHRoZXJlIHdhcyBvbmx5IG9uZSBzZWdtZW50IHdlIGNhbiBwcm9jZWVkIHJlZ3VsYXJseSBieSB1c2luZyBwYXRoQ29vcmRpbmF0ZXMgYW5kIHZhbHVlRGF0YSBmcm9tIHRoZSBmaXJzdFxuICAgICAgICAvLyBzZWdtZW50XG4gICAgICAgIHBhdGhDb29yZGluYXRlcyA9IHNlZ21lbnRzWzBdLnBhdGhDb29yZGluYXRlcztcbiAgICAgICAgdmFsdWVEYXRhID0gc2VnbWVudHNbMF0udmFsdWVEYXRhO1xuXG4gICAgICAgIC8vIElmIGxlc3MgdGhhbiB0d28gcG9pbnRzIHdlIG5lZWQgdG8gZmFsbGJhY2sgdG8gbm8gc21vb3RoaW5nXG4gICAgICAgIGlmKHBhdGhDb29yZGluYXRlcy5sZW5ndGggPD0gNCkge1xuICAgICAgICAgIHJldHVybiBDaGFydGlzdC5JbnRlcnBvbGF0aW9uLm5vbmUoKShwYXRoQ29vcmRpbmF0ZXMsIHZhbHVlRGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGF0aCA9IG5ldyBDaGFydGlzdC5TdmcuUGF0aCgpLm1vdmUocGF0aENvb3JkaW5hdGVzWzBdLCBwYXRoQ29vcmRpbmF0ZXNbMV0sIGZhbHNlLCB2YWx1ZURhdGFbMF0pLFxuICAgICAgICAgIHo7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlMZW4gPSBwYXRoQ29vcmRpbmF0ZXMubGVuZ3RoOyBpTGVuIC0gMiAqICF6ID4gaTsgaSArPSAyKSB7XG4gICAgICAgICAgdmFyIHAgPSBbXG4gICAgICAgICAgICB7eDogK3BhdGhDb29yZGluYXRlc1tpIC0gMl0sIHk6ICtwYXRoQ29vcmRpbmF0ZXNbaSAtIDFdfSxcbiAgICAgICAgICAgIHt4OiArcGF0aENvb3JkaW5hdGVzW2ldLCB5OiArcGF0aENvb3JkaW5hdGVzW2kgKyAxXX0sXG4gICAgICAgICAgICB7eDogK3BhdGhDb29yZGluYXRlc1tpICsgMl0sIHk6ICtwYXRoQ29vcmRpbmF0ZXNbaSArIDNdfSxcbiAgICAgICAgICAgIHt4OiArcGF0aENvb3JkaW5hdGVzW2kgKyA0XSwgeTogK3BhdGhDb29yZGluYXRlc1tpICsgNV19XG4gICAgICAgICAgXTtcbiAgICAgICAgICBpZiAoeikge1xuICAgICAgICAgICAgaWYgKCFpKSB7XG4gICAgICAgICAgICAgIHBbMF0gPSB7eDogK3BhdGhDb29yZGluYXRlc1tpTGVuIC0gMl0sIHk6ICtwYXRoQ29vcmRpbmF0ZXNbaUxlbiAtIDFdfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaUxlbiAtIDQgPT09IGkpIHtcbiAgICAgICAgICAgICAgcFszXSA9IHt4OiArcGF0aENvb3JkaW5hdGVzWzBdLCB5OiArcGF0aENvb3JkaW5hdGVzWzFdfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaUxlbiAtIDIgPT09IGkpIHtcbiAgICAgICAgICAgICAgcFsyXSA9IHt4OiArcGF0aENvb3JkaW5hdGVzWzBdLCB5OiArcGF0aENvb3JkaW5hdGVzWzFdfTtcbiAgICAgICAgICAgICAgcFszXSA9IHt4OiArcGF0aENvb3JkaW5hdGVzWzJdLCB5OiArcGF0aENvb3JkaW5hdGVzWzNdfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGlMZW4gLSA0ID09PSBpKSB7XG4gICAgICAgICAgICAgIHBbM10gPSBwWzJdO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghaSkge1xuICAgICAgICAgICAgICBwWzBdID0ge3g6ICtwYXRoQ29vcmRpbmF0ZXNbaV0sIHk6ICtwYXRoQ29vcmRpbmF0ZXNbaSArIDFdfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXRoLmN1cnZlKFxuICAgICAgICAgICAgKHQgKiAoLXBbMF0ueCArIDYgKiBwWzFdLnggKyBwWzJdLngpIC8gNikgKyAoYyAqIHBbMl0ueCksXG4gICAgICAgICAgICAodCAqICgtcFswXS55ICsgNiAqIHBbMV0ueSArIHBbMl0ueSkgLyA2KSArIChjICogcFsyXS55KSxcbiAgICAgICAgICAgICh0ICogKHBbMV0ueCArIDYgKiBwWzJdLnggLSBwWzNdLngpIC8gNikgKyAoYyAqIHBbMl0ueCksXG4gICAgICAgICAgICAodCAqIChwWzFdLnkgKyA2ICogcFsyXS55IC0gcFszXS55KSAvIDYpICsgKGMgKiBwWzJdLnkpLFxuICAgICAgICAgICAgcFsyXS54LFxuICAgICAgICAgICAgcFsyXS55LFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZURhdGFbKGkgKyAyKSAvIDJdXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIE1vbm90b25lIEN1YmljIHNwbGluZSBpbnRlcnBvbGF0aW9uIHByb2R1Y2VzIGEgc21vb3RoIGN1cnZlIHdoaWNoIHByZXNlcnZlcyBtb25vdG9uaWNpdHkuIFVubGlrZSBjYXJkaW5hbCBzcGxpbmVzLCB0aGUgY3VydmUgd2lsbCBub3QgZXh0ZW5kIGJleW9uZCB0aGUgcmFuZ2Ugb2YgeS12YWx1ZXMgb2YgdGhlIG9yaWdpbmFsIGRhdGEgcG9pbnRzLlxuICAgKlxuICAgKiBNb25vdG9uZSBDdWJpYyBzcGxpbmVzIGNhbiBvbmx5IGJlIGNyZWF0ZWQgaWYgdGhlcmUgYXJlIG1vcmUgdGhhbiB0d28gZGF0YSBwb2ludHMuIElmIHRoaXMgaXMgbm90IHRoZSBjYXNlIHRoaXMgc21vb3RoaW5nIHdpbGwgZmFsbGJhY2sgdG8gYENoYXJ0aXN0LlNtb290aGluZy5ub25lYC5cbiAgICpcbiAgICogVGhlIHgtdmFsdWVzIG9mIHN1YnNlcXVlbnQgcG9pbnRzIG11c3QgYmUgaW5jcmVhc2luZyB0byBmaXQgYSBNb25vdG9uZSBDdWJpYyBzcGxpbmUuIElmIHRoaXMgY29uZGl0aW9uIGlzIG5vdCBtZXQgZm9yIGEgcGFpciBvZiBhZGphY2VudCBwb2ludHMsIHRoZW4gdGhlcmUgd2lsbCBiZSBhIGJyZWFrIGluIHRoZSBjdXJ2ZSBiZXR3ZWVuIHRob3NlIGRhdGEgcG9pbnRzLlxuICAgKlxuICAgKiBBbGwgc21vb3RoaW5nIGZ1bmN0aW9ucyB3aXRoaW4gQ2hhcnRpc3QgYXJlIGZhY3RvcnkgZnVuY3Rpb25zIHRoYXQgYWNjZXB0IGFuIG9wdGlvbnMgcGFyYW1ldGVyLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiB2YXIgY2hhcnQgPSBuZXcgQ2hhcnRpc3QuTGluZSgnLmN0LWNoYXJ0Jywge1xuICAgKiAgIGxhYmVsczogWzEsIDIsIDMsIDQsIDVdLFxuICAgKiAgIHNlcmllczogW1sxLCAyLCA4LCAxLCA3XV1cbiAgICogfSwge1xuICAgKiAgIGxpbmVTbW9vdGg6IENoYXJ0aXN0LkludGVycG9sYXRpb24ubW9ub3RvbmVDdWJpYyh7XG4gICAqICAgICBmaWxsSG9sZXM6IGZhbHNlXG4gICAqICAgfSlcbiAgICogfSk7XG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5JbnRlcnBvbGF0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFRoZSBvcHRpb25zIG9mIHRoZSBtb25vdG9uZUN1YmljIGZhY3RvcnkgZnVuY3Rpb24uXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICAgKi9cbiAgQ2hhcnRpc3QuSW50ZXJwb2xhdGlvbi5tb25vdG9uZUN1YmljID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIGZpbGxIb2xlczogZmFsc2VcbiAgICB9O1xuXG4gICAgb3B0aW9ucyA9IENoYXJ0aXN0LmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1vbm90b25lQ3ViaWMocGF0aENvb3JkaW5hdGVzLCB2YWx1ZURhdGEpIHtcbiAgICAgIC8vIEZpcnN0IHdlIHRyeSB0byBzcGxpdCB0aGUgY29vcmRpbmF0ZXMgaW50byBzZWdtZW50c1xuICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgdG8gdHJlYXQgXCJob2xlc1wiIGluIGxpbmUgY2hhcnRzXG4gICAgICB2YXIgc2VnbWVudHMgPSBDaGFydGlzdC5zcGxpdEludG9TZWdtZW50cyhwYXRoQ29vcmRpbmF0ZXMsIHZhbHVlRGF0YSwge1xuICAgICAgICBmaWxsSG9sZXM6IG9wdGlvbnMuZmlsbEhvbGVzLFxuICAgICAgICBpbmNyZWFzaW5nWDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIGlmKCFzZWdtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgd2VyZSBubyBzZWdtZW50cyByZXR1cm4gJ0NoYXJ0aXN0LkludGVycG9sYXRpb24ubm9uZSdcbiAgICAgICAgcmV0dXJuIENoYXJ0aXN0LkludGVycG9sYXRpb24ubm9uZSgpKFtdKTtcbiAgICAgIH0gZWxzZSBpZihzZWdtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIElmIHRoZSBzcGxpdCByZXN1bHRlZCBpbiBtb3JlIHRoYXQgb25lIHNlZ21lbnQgd2UgbmVlZCB0byBpbnRlcnBvbGF0ZSBlYWNoIHNlZ21lbnQgaW5kaXZpZHVhbGx5IGFuZCBqb2luIHRoZW1cbiAgICAgICAgLy8gYWZ0ZXJ3YXJkcyB0b2dldGhlciBpbnRvIGEgc2luZ2xlIHBhdGguXG4gICAgICAgICAgdmFyIHBhdGhzID0gW107XG4gICAgICAgIC8vIEZvciBlYWNoIHNlZ21lbnQgd2Ugd2lsbCByZWN1cnNlIHRoZSBtb25vdG9uZUN1YmljIGZuIGZ1bmN0aW9uXG4gICAgICAgIHNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24oc2VnbWVudCkge1xuICAgICAgICAgIHBhdGhzLnB1c2gobW9ub3RvbmVDdWJpYyhzZWdtZW50LnBhdGhDb29yZGluYXRlcywgc2VnbWVudC52YWx1ZURhdGEpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEpvaW4gdGhlIHNlZ21lbnQgcGF0aCBkYXRhIGludG8gYSBzaW5nbGUgcGF0aCBhbmQgcmV0dXJuXG4gICAgICAgIHJldHVybiBDaGFydGlzdC5TdmcuUGF0aC5qb2luKHBhdGhzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHRoZXJlIHdhcyBvbmx5IG9uZSBzZWdtZW50IHdlIGNhbiBwcm9jZWVkIHJlZ3VsYXJseSBieSB1c2luZyBwYXRoQ29vcmRpbmF0ZXMgYW5kIHZhbHVlRGF0YSBmcm9tIHRoZSBmaXJzdFxuICAgICAgICAvLyBzZWdtZW50XG4gICAgICAgIHBhdGhDb29yZGluYXRlcyA9IHNlZ21lbnRzWzBdLnBhdGhDb29yZGluYXRlcztcbiAgICAgICAgdmFsdWVEYXRhID0gc2VnbWVudHNbMF0udmFsdWVEYXRhO1xuXG4gICAgICAgIC8vIElmIGxlc3MgdGhhbiB0aHJlZSBwb2ludHMgd2UgbmVlZCB0byBmYWxsYmFjayB0byBubyBzbW9vdGhpbmdcbiAgICAgICAgaWYocGF0aENvb3JkaW5hdGVzLmxlbmd0aCA8PSA0KSB7XG4gICAgICAgICAgcmV0dXJuIENoYXJ0aXN0LkludGVycG9sYXRpb24ubm9uZSgpKHBhdGhDb29yZGluYXRlcywgdmFsdWVEYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB4cyA9IFtdLFxuICAgICAgICAgIHlzID0gW10sXG4gICAgICAgICAgaSxcbiAgICAgICAgICBuID0gcGF0aENvb3JkaW5hdGVzLmxlbmd0aCAvIDIsXG4gICAgICAgICAgbXMgPSBbXSxcbiAgICAgICAgICBkcyA9IFtdLCBkeXMgPSBbXSwgZHhzID0gW10sXG4gICAgICAgICAgcGF0aDtcblxuICAgICAgICAvLyBQb3B1bGF0ZSB4IGFuZCB5IGNvb3JkaW5hdGVzIGludG8gc2VwYXJhdGUgYXJyYXlzLCBmb3IgcmVhZGFiaWxpdHlcblxuICAgICAgICBmb3IoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICB4c1tpXSA9IHBhdGhDb29yZGluYXRlc1tpICogMl07XG4gICAgICAgICAgeXNbaV0gPSBwYXRoQ29vcmRpbmF0ZXNbaSAqIDIgKyAxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGN1bGF0ZSBkZWx0YXMgYW5kIGRlcml2YXRpdmVcblxuICAgICAgICBmb3IoaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgZHlzW2ldID0geXNbaSArIDFdIC0geXNbaV07XG4gICAgICAgICAgZHhzW2ldID0geHNbaSArIDFdIC0geHNbaV07XG4gICAgICAgICAgZHNbaV0gPSBkeXNbaV0gLyBkeHNbaV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZXRlcm1pbmUgZGVzaXJlZCBzbG9wZSAobSkgYXQgZWFjaCBwb2ludCB1c2luZyBGcml0c2NoLUNhcmxzb24gbWV0aG9kXG4gICAgICAgIC8vIFNlZTogaHR0cDovL21hdGguc3RhY2tleGNoYW5nZS5jb20vcXVlc3Rpb25zLzQ1MjE4L2ltcGxlbWVudGF0aW9uLW9mLW1vbm90b25lLWN1YmljLWludGVycG9sYXRpb25cblxuICAgICAgICBtc1swXSA9IGRzWzBdO1xuICAgICAgICBtc1tuIC0gMV0gPSBkc1tuIC0gMl07XG5cbiAgICAgICAgZm9yKGkgPSAxOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgICAgIGlmKGRzW2ldID09PSAwIHx8IGRzW2kgLSAxXSA9PT0gMCB8fCAoZHNbaSAtIDFdID4gMCkgIT09IChkc1tpXSA+IDApKSB7XG4gICAgICAgICAgICBtc1tpXSA9IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1zW2ldID0gMyAqIChkeHNbaSAtIDFdICsgZHhzW2ldKSAvIChcbiAgICAgICAgICAgICAgKDIgKiBkeHNbaV0gKyBkeHNbaSAtIDFdKSAvIGRzW2kgLSAxXSArXG4gICAgICAgICAgICAgIChkeHNbaV0gKyAyICogZHhzW2kgLSAxXSkgLyBkc1tpXSk7XG5cbiAgICAgICAgICAgIGlmKCFpc0Zpbml0ZShtc1tpXSkpIHtcbiAgICAgICAgICAgICAgbXNbaV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vdyBidWlsZCBhIHBhdGggZnJvbSB0aGUgc2xvcGVzXG5cbiAgICAgICAgcGF0aCA9IG5ldyBDaGFydGlzdC5TdmcuUGF0aCgpLm1vdmUoeHNbMF0sIHlzWzBdLCBmYWxzZSwgdmFsdWVEYXRhWzBdKTtcblxuICAgICAgICBmb3IoaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgcGF0aC5jdXJ2ZShcbiAgICAgICAgICAgIC8vIEZpcnN0IGNvbnRyb2wgcG9pbnRcbiAgICAgICAgICAgIHhzW2ldICsgZHhzW2ldIC8gMyxcbiAgICAgICAgICAgIHlzW2ldICsgbXNbaV0gKiBkeHNbaV0gLyAzLFxuICAgICAgICAgICAgLy8gU2Vjb25kIGNvbnRyb2wgcG9pbnRcbiAgICAgICAgICAgIHhzW2kgKyAxXSAtIGR4c1tpXSAvIDMsXG4gICAgICAgICAgICB5c1tpICsgMV0gLSBtc1tpICsgMV0gKiBkeHNbaV0gLyAzLFxuICAgICAgICAgICAgLy8gRW5kIHBvaW50XG4gICAgICAgICAgICB4c1tpICsgMV0sXG4gICAgICAgICAgICB5c1tpICsgMV0sXG5cbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgdmFsdWVEYXRhW2kgKyAxXVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdGVwIGludGVycG9sYXRpb24gd2lsbCBjYXVzZSB0aGUgbGluZSBjaGFydCB0byBtb3ZlIGluIHN0ZXBzIHJhdGhlciB0aGFuIGRpYWdvbmFsIG9yIHNtb290aGVkIGxpbmVzLiBUaGlzIGludGVycG9sYXRpb24gd2lsbCBjcmVhdGUgYWRkaXRpb25hbCBwb2ludHMgdGhhdCB3aWxsIGFsc28gYmUgZHJhd24gd2hlbiB0aGUgYHNob3dQb2ludGAgb3B0aW9uIGlzIGVuYWJsZWQuXG4gICAqXG4gICAqIEFsbCBzbW9vdGhpbmcgZnVuY3Rpb25zIHdpdGhpbiBDaGFydGlzdCBhcmUgZmFjdG9yeSBmdW5jdGlvbnMgdGhhdCBhY2NlcHQgYW4gb3B0aW9ucyBwYXJhbWV0ZXIuIFRoZSBzdGVwIGludGVycG9sYXRpb24gZnVuY3Rpb24gYWNjZXB0cyBvbmUgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXIgYHBvc3Rwb25lYCwgdGhhdCBjYW4gYmUgYHRydWVgIG9yIGBmYWxzZWAuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGB0cnVlYCBhbmQgd2lsbCBjYXVzZSB0aGUgc3RlcCB0byBvY2N1ciB3aGVyZSB0aGUgdmFsdWUgYWN0dWFsbHkgY2hhbmdlcy4gSWYgYSBkaWZmZXJlbnQgYmVoYXZpb3VyIGlzIG5lZWRlZCB3aGVyZSB0aGUgc3RlcCBpcyBzaGlmdGVkIHRvIHRoZSBsZWZ0IGFuZCBoYXBwZW5zIGJlZm9yZSB0aGUgYWN0dWFsIHZhbHVlLCB0aGlzIG9wdGlvbiBjYW4gYmUgc2V0IHRvIGBmYWxzZWAuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHZhciBjaGFydCA9IG5ldyBDaGFydGlzdC5MaW5lKCcuY3QtY2hhcnQnLCB7XG4gICAqICAgbGFiZWxzOiBbMSwgMiwgMywgNCwgNV0sXG4gICAqICAgc2VyaWVzOiBbWzEsIDIsIDgsIDEsIDddXVxuICAgKiB9LCB7XG4gICAqICAgbGluZVNtb290aDogQ2hhcnRpc3QuSW50ZXJwb2xhdGlvbi5zdGVwKHtcbiAgICogICAgIHBvc3Rwb25lOiB0cnVlLFxuICAgKiAgICAgZmlsbEhvbGVzOiBmYWxzZVxuICAgKiAgIH0pXG4gICAqIH0pO1xuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuSW50ZXJwb2xhdGlvblxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICAqL1xuICBDaGFydGlzdC5JbnRlcnBvbGF0aW9uLnN0ZXAgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgcG9zdHBvbmU6IHRydWUsXG4gICAgICBmaWxsSG9sZXM6IGZhbHNlXG4gICAgfTtcblxuICAgIG9wdGlvbnMgPSBDaGFydGlzdC5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiBzdGVwKHBhdGhDb29yZGluYXRlcywgdmFsdWVEYXRhKSB7XG4gICAgICB2YXIgcGF0aCA9IG5ldyBDaGFydGlzdC5TdmcuUGF0aCgpO1xuXG4gICAgICB2YXIgcHJldlgsIHByZXZZLCBwcmV2RGF0YTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoQ29vcmRpbmF0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgdmFyIGN1cnJYID0gcGF0aENvb3JkaW5hdGVzW2ldO1xuICAgICAgICB2YXIgY3VyclkgPSBwYXRoQ29vcmRpbmF0ZXNbaSArIDFdO1xuICAgICAgICB2YXIgY3VyckRhdGEgPSB2YWx1ZURhdGFbaSAvIDJdO1xuXG4gICAgICAgIC8vIElmIHRoZSBjdXJyZW50IHBvaW50IGlzIGFsc28gbm90IGEgaG9sZSB3ZSBjYW4gZHJhdyB0aGUgc3RlcCBsaW5lc1xuICAgICAgICBpZihjdXJyRGF0YS52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYocHJldkRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcGF0aC5tb3ZlKGN1cnJYLCBjdXJyWSwgZmFsc2UsIGN1cnJEYXRhKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYob3B0aW9ucy5wb3N0cG9uZSkge1xuICAgICAgICAgICAgICAvLyBJZiBwb3N0cG9uZWQgd2Ugc2hvdWxkIGRyYXcgdGhlIHN0ZXAgbGluZSB3aXRoIHRoZSB2YWx1ZSBvZiB0aGUgcHJldmlvdXMgdmFsdWVcbiAgICAgICAgICAgICAgcGF0aC5saW5lKGN1cnJYLCBwcmV2WSwgZmFsc2UsIHByZXZEYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIElmIG5vdCBwb3N0cG9uZWQgd2Ugc2hvdWxkIGRyYXcgdGhlIHN0ZXAgbGluZSB3aXRoIHRoZSB2YWx1ZSBvZiB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgICBwYXRoLmxpbmUocHJldlgsIGN1cnJZLCBmYWxzZSwgY3VyckRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTGluZSB0byB0aGUgYWN0dWFsIHBvaW50ICh0aGlzIHNob3VsZCBvbmx5IGJlIGEgWS1BeGlzIG1vdmVtZW50XG4gICAgICAgICAgICBwYXRoLmxpbmUoY3VyclgsIGN1cnJZLCBmYWxzZSwgY3VyckRhdGEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHByZXZYID0gY3Vyclg7XG4gICAgICAgICAgcHJldlkgPSBjdXJyWTtcbiAgICAgICAgICBwcmV2RGF0YSA9IGN1cnJEYXRhO1xuICAgICAgICB9IGVsc2UgaWYoIW9wdGlvbnMuZmlsbEhvbGVzKSB7XG4gICAgICAgICAgcHJldlggPSBwcmV2WSA9IHByZXZEYXRhID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG4gIH07XG5cbn0od2luZG93LCBkb2N1bWVudCwgQ2hhcnRpc3QpKTtcbjsvKipcbiAqIEEgdmVyeSBiYXNpYyBldmVudCBtb2R1bGUgdGhhdCBoZWxwcyB0byBnZW5lcmF0ZSBhbmQgY2F0Y2ggZXZlbnRzLlxuICpcbiAqIEBtb2R1bGUgQ2hhcnRpc3QuRXZlbnRcbiAqL1xuLyogZ2xvYmFsIENoYXJ0aXN0ICovXG4oZnVuY3Rpb24gKHdpbmRvdywgZG9jdW1lbnQsIENoYXJ0aXN0KSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBDaGFydGlzdC5FdmVudEVtaXR0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZXJzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYW4gZXZlbnQgaGFuZGxlciBmb3IgYSBzcGVjaWZpYyBldmVudFxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkV2ZW50XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBBIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRFdmVudEhhbmRsZXIoZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXJzW2V2ZW50XSA9IGhhbmRsZXJzW2V2ZW50XSB8fCBbXTtcbiAgICAgIGhhbmRsZXJzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbiBldmVudCBoYW5kbGVyIG9mIGEgc3BlY2lmaWMgZXZlbnQgbmFtZSBvciByZW1vdmUgYWxsIGV2ZW50IGhhbmRsZXJzIGZvciBhIHNwZWNpZmljIGV2ZW50LlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkV2ZW50XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lIHdoZXJlIGEgc3BlY2lmaWMgb3IgYWxsIGhhbmRsZXJzIHNob3VsZCBiZSByZW1vdmVkXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2hhbmRsZXJdIEFuIG9wdGlvbmFsIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uIElmIHNwZWNpZmllZCBvbmx5IHRoaXMgc3BlY2lmaWMgaGFuZGxlciB3aWxsIGJlIHJlbW92ZWQgYW5kIG90aGVyd2lzZSBhbGwgaGFuZGxlcnMgYXJlIHJlbW92ZWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gcmVtb3ZlRXZlbnRIYW5kbGVyKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICAvLyBPbmx5IGRvIHNvbWV0aGluZyBpZiB0aGVyZSBhcmUgZXZlbnQgaGFuZGxlcnMgd2l0aCB0aGlzIG5hbWUgZXhpc3RpbmdcbiAgICAgIGlmKGhhbmRsZXJzW2V2ZW50XSkge1xuICAgICAgICAvLyBJZiBoYW5kbGVyIGlzIHNldCB3ZSB3aWxsIGxvb2sgZm9yIGEgc3BlY2lmaWMgaGFuZGxlciBhbmQgb25seSByZW1vdmUgdGhpc1xuICAgICAgICBpZihoYW5kbGVyKSB7XG4gICAgICAgICAgaGFuZGxlcnNbZXZlbnRdLnNwbGljZShoYW5kbGVyc1tldmVudF0uaW5kZXhPZihoYW5kbGVyKSwgMSk7XG4gICAgICAgICAgaWYoaGFuZGxlcnNbZXZlbnRdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZGVsZXRlIGhhbmRsZXJzW2V2ZW50XTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gSWYgbm8gaGFuZGxlciBpcyBzcGVjaWZpZWQgd2UgcmVtb3ZlIGFsbCBoYW5kbGVycyBmb3IgdGhpcyBldmVudFxuICAgICAgICAgIGRlbGV0ZSBoYW5kbGVyc1tldmVudF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2UgdGhpcyBmdW5jdGlvbiB0byBlbWl0IGFuIGV2ZW50LiBBbGwgaGFuZGxlcnMgdGhhdCBhcmUgbGlzdGVuaW5nIGZvciB0aGlzIGV2ZW50IHdpbGwgYmUgdHJpZ2dlcmVkIHdpdGggdGhlIGRhdGEgcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkV2ZW50XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lIHRoYXQgc2hvdWxkIGJlIHRyaWdnZXJlZFxuICAgICAqIEBwYXJhbSB7Kn0gZGF0YSBBcmJpdHJhcnkgZGF0YSB0aGF0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBldmVudCBoYW5kbGVyIGNhbGxiYWNrIGZ1bmN0aW9uc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVtaXQoZXZlbnQsIGRhdGEpIHtcbiAgICAgIC8vIE9ubHkgZG8gc29tZXRoaW5nIGlmIHRoZXJlIGFyZSBldmVudCBoYW5kbGVycyB3aXRoIHRoaXMgbmFtZSBleGlzdGluZ1xuICAgICAgaWYoaGFuZGxlcnNbZXZlbnRdKSB7XG4gICAgICAgIGhhbmRsZXJzW2V2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgICBoYW5kbGVyKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gRW1pdCBldmVudCB0byBzdGFyIGV2ZW50IGhhbmRsZXJzXG4gICAgICBpZihoYW5kbGVyc1snKiddKSB7XG4gICAgICAgIGhhbmRsZXJzWycqJ10uZm9yRWFjaChmdW5jdGlvbihzdGFySGFuZGxlcikge1xuICAgICAgICAgIHN0YXJIYW5kbGVyKGV2ZW50LCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFkZEV2ZW50SGFuZGxlcjogYWRkRXZlbnRIYW5kbGVyLFxuICAgICAgcmVtb3ZlRXZlbnRIYW5kbGVyOiByZW1vdmVFdmVudEhhbmRsZXIsXG4gICAgICBlbWl0OiBlbWl0XG4gICAgfTtcbiAgfTtcblxufSh3aW5kb3csIGRvY3VtZW50LCBDaGFydGlzdCkpO1xuOy8qKlxuICogVGhpcyBtb2R1bGUgcHJvdmlkZXMgc29tZSBiYXNpYyBwcm90b3R5cGUgaW5oZXJpdGFuY2UgdXRpbGl0aWVzLlxuICpcbiAqIEBtb2R1bGUgQ2hhcnRpc3QuQ2xhc3NcbiAqL1xuLyogZ2xvYmFsIENoYXJ0aXN0ICovXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgQ2hhcnRpc3QpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIGxpc3RUb0FycmF5KGxpc3QpIHtcbiAgICB2YXIgYXJyID0gW107XG4gICAgaWYgKGxpc3QubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJyLnB1c2gobGlzdFtpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGV4dGVuZCBmcm9tIGN1cnJlbnQgcHJvdG90eXBlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ2xhc3NcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXMgVGhlIG9iamVjdCB0aGF0IHNlcnZlcyBhcyBkZWZpbml0aW9uIGZvciB0aGUgcHJvdG90eXBlIHRoYXQgZ2V0cyBjcmVhdGVkIGZvciB0aGUgbmV3IGNsYXNzLiBUaGlzIG9iamVjdCBzaG91bGQgYWx3YXlzIGNvbnRhaW4gYSBjb25zdHJ1Y3RvciBwcm9wZXJ0eSB0aGF0IGlzIHRoZSBkZXNpcmVkIGNvbnN0cnVjdG9yIGZvciB0aGUgbmV3bHkgY3JlYXRlZCBjbGFzcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtzdXBlclByb3RvT3ZlcnJpZGVdIEJ5IGRlZmF1bHQgZXh0ZW5zIHdpbGwgdXNlIHRoZSBjdXJyZW50IGNsYXNzIHByb3RvdHlwZSBvciBDaGFydGlzdC5jbGFzcy4gV2l0aCB0aGlzIHBhcmFtZXRlciB5b3UgY2FuIHNwZWNpZnkgYW55IHN1cGVyIHByb3RvdHlwZSB0aGF0IHdpbGwgYmUgdXNlZC5cbiAgICogQHJldHVybiB7RnVuY3Rpb259IENvbnN0cnVjdG9yIGZ1bmN0aW9uIG9mIHRoZSBuZXcgY2xhc3NcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogdmFyIEZydWl0ID0gQ2xhc3MuZXh0ZW5kKHtcbiAgICAgKiBjb2xvcjogdW5kZWZpbmVkLFxuICAgICAqICAgc3VnYXI6IHVuZGVmaW5lZCxcbiAgICAgKlxuICAgICAqICAgY29uc3RydWN0b3I6IGZ1bmN0aW9uKGNvbG9yLCBzdWdhcikge1xuICAgICAqICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICogICAgIHRoaXMuc3VnYXIgPSBzdWdhcjtcbiAgICAgKiAgIH0sXG4gICAgICpcbiAgICAgKiAgIGVhdDogZnVuY3Rpb24oKSB7XG4gICAgICogICAgIHRoaXMuc3VnYXIgPSAwO1xuICAgICAqICAgICByZXR1cm4gdGhpcztcbiAgICAgKiAgIH1cbiAgICAgKiB9KTtcbiAgICpcbiAgICogdmFyIEJhbmFuYSA9IEZydWl0LmV4dGVuZCh7XG4gICAgICogICBsZW5ndGg6IHVuZGVmaW5lZCxcbiAgICAgKlxuICAgICAqICAgY29uc3RydWN0b3I6IGZ1bmN0aW9uKGxlbmd0aCwgc3VnYXIpIHtcbiAgICAgKiAgICAgQmFuYW5hLnN1cGVyLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgJ1llbGxvdycsIHN1Z2FyKTtcbiAgICAgKiAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICogICB9XG4gICAgICogfSk7XG4gICAqXG4gICAqIHZhciBiYW5hbmEgPSBuZXcgQmFuYW5hKDIwLCA0MCk7XG4gICAqIGNvbnNvbGUubG9nKCdiYW5hbmEgaW5zdGFuY2VvZiBGcnVpdCcsIGJhbmFuYSBpbnN0YW5jZW9mIEZydWl0KTtcbiAgICogY29uc29sZS5sb2coJ0ZydWl0IGlzIHByb3RvdHlwZSBvZiBiYW5hbmEnLCBGcnVpdC5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihiYW5hbmEpKTtcbiAgICogY29uc29sZS5sb2coJ2JhbmFuYXMgcHJvdG90eXBlIGlzIEZydWl0JywgT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhbmFuYSkgPT09IEZydWl0LnByb3RvdHlwZSk7XG4gICAqIGNvbnNvbGUubG9nKGJhbmFuYS5zdWdhcik7XG4gICAqIGNvbnNvbGUubG9nKGJhbmFuYS5lYXQoKS5zdWdhcik7XG4gICAqIGNvbnNvbGUubG9nKGJhbmFuYS5jb2xvcik7XG4gICAqL1xuICBmdW5jdGlvbiBleHRlbmQocHJvcGVydGllcywgc3VwZXJQcm90b092ZXJyaWRlKSB7XG4gICAgdmFyIHN1cGVyUHJvdG8gPSBzdXBlclByb3RvT3ZlcnJpZGUgfHwgdGhpcy5wcm90b3R5cGUgfHwgQ2hhcnRpc3QuQ2xhc3M7XG4gICAgdmFyIHByb3RvID0gT2JqZWN0LmNyZWF0ZShzdXBlclByb3RvKTtcblxuICAgIENoYXJ0aXN0LkNsYXNzLmNsb25lRGVmaW5pdGlvbnMocHJvdG8sIHByb3BlcnRpZXMpO1xuXG4gICAgdmFyIGNvbnN0ciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGZuID0gcHJvdG8uY29uc3RydWN0b3IgfHwgZnVuY3Rpb24gKCkge30sXG4gICAgICAgIGluc3RhbmNlO1xuXG4gICAgICAvLyBJZiB0aGlzIGlzIGxpbmtlZCB0byB0aGUgQ2hhcnRpc3QgbmFtZXNwYWNlIHRoZSBjb25zdHJ1Y3RvciB3YXMgbm90IGNhbGxlZCB3aXRoIG5ld1xuICAgICAgLy8gVG8gcHJvdmlkZSBhIGZhbGxiYWNrIHdlIHdpbGwgaW5zdGFudGlhdGUgaGVyZSBhbmQgcmV0dXJuIHRoZSBpbnN0YW5jZVxuICAgICAgaW5zdGFuY2UgPSB0aGlzID09PSBDaGFydGlzdCA/IE9iamVjdC5jcmVhdGUocHJvdG8pIDogdGhpcztcbiAgICAgIGZuLmFwcGx5KGluc3RhbmNlLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApKTtcblxuICAgICAgLy8gSWYgdGhpcyBjb25zdHJ1Y3RvciB3YXMgbm90IGNhbGxlZCB3aXRoIG5ldyB3ZSBuZWVkIHRvIHJldHVybiB0aGUgaW5zdGFuY2VcbiAgICAgIC8vIFRoaXMgd2lsbCBub3QgaGFybSB3aGVuIHRoZSBjb25zdHJ1Y3RvciBoYXMgYmVlbiBjYWxsZWQgd2l0aCBuZXcgYXMgdGhlIHJldHVybmVkIHZhbHVlIGlzIGlnbm9yZWRcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuXG4gICAgY29uc3RyLnByb3RvdHlwZSA9IHByb3RvO1xuICAgIGNvbnN0ci5zdXBlciA9IHN1cGVyUHJvdG87XG4gICAgY29uc3RyLmV4dGVuZCA9IHRoaXMuZXh0ZW5kO1xuXG4gICAgcmV0dXJuIGNvbnN0cjtcbiAgfVxuXG4gIC8vIFZhcmlhYmxlIGFyZ3VtZW50IGxpc3QgY2xvbmVzIGFyZ3MgPiAwIGludG8gYXJnc1swXSBhbmQgcmV0cnVucyBtb2RpZmllZCBhcmdzWzBdXG4gIGZ1bmN0aW9uIGNsb25lRGVmaW5pdGlvbnMoKSB7XG4gICAgdmFyIGFyZ3MgPSBsaXN0VG9BcnJheShhcmd1bWVudHMpO1xuICAgIHZhciB0YXJnZXQgPSBhcmdzWzBdO1xuXG4gICAgYXJncy5zcGxpY2UoMSwgYXJncy5sZW5ndGggLSAxKS5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAocHJvcE5hbWUpIHtcbiAgICAgICAgLy8gSWYgdGhpcyBwcm9wZXJ0eSBhbHJlYWR5IGV4aXN0IGluIHRhcmdldCB3ZSBkZWxldGUgaXQgZmlyc3RcbiAgICAgICAgZGVsZXRlIHRhcmdldFtwcm9wTmFtZV07XG4gICAgICAgIC8vIERlZmluZSB0aGUgcHJvcGVydHkgd2l0aCB0aGUgZGVzY3JpcHRvciBmcm9tIHNvdXJjZVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wTmFtZSxcbiAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgcHJvcE5hbWUpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIENoYXJ0aXN0LkNsYXNzID0ge1xuICAgIGV4dGVuZDogZXh0ZW5kLFxuICAgIGNsb25lRGVmaW5pdGlvbnM6IGNsb25lRGVmaW5pdGlvbnNcbiAgfTtcblxufSh3aW5kb3csIGRvY3VtZW50LCBDaGFydGlzdCkpO1xuOy8qKlxuICogQmFzZSBmb3IgYWxsIGNoYXJ0IHR5cGVzLiBUaGUgbWV0aG9kcyBpbiBDaGFydGlzdC5CYXNlIGFyZSBpbmhlcml0ZWQgdG8gYWxsIGNoYXJ0IHR5cGVzLlxuICpcbiAqIEBtb2R1bGUgQ2hhcnRpc3QuQmFzZVxuICovXG4vKiBnbG9iYWwgQ2hhcnRpc3QgKi9cbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCBDaGFydGlzdCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gVE9ETzogQ3VycmVudGx5IHdlIG5lZWQgdG8gcmUtZHJhdyB0aGUgY2hhcnQgb24gd2luZG93IHJlc2l6ZS4gVGhpcyBpcyB1c3VhbGx5IHZlcnkgYmFkIGFuZCB3aWxsIGFmZmVjdCBwZXJmb3JtYW5jZS5cbiAgLy8gVGhpcyBpcyBkb25lIGJlY2F1c2Ugd2UgY2FuJ3Qgd29yayB3aXRoIHJlbGF0aXZlIGNvb3JkaW5hdGVzIHdoZW4gZHJhd2luZyB0aGUgY2hhcnQgYmVjYXVzZSBTVkcgUGF0aCBkb2VzIG5vdFxuICAvLyB3b3JrIHdpdGggcmVsYXRpdmUgcG9zaXRpb25zIHlldC4gV2UgbmVlZCB0byBjaGVjayBpZiB3ZSBjYW4gZG8gYSB2aWV3Qm94IGhhY2sgdG8gc3dpdGNoIHRvIHBlcmNlbnRhZ2UuXG4gIC8vIFNlZSBodHRwOi8vbW96aWxsYS42NTA2Lm43Lm5hYmJsZS5jb20vU3BlY3lmaW5nLXBhdGhzLXdpdGgtcGVyY2VudGFnZXMtdW5pdC10ZDI0NzQ3NC5odG1sXG4gIC8vIFVwZGF0ZTogY2FuIGJlIGRvbmUgdXNpbmcgdGhlIGFib3ZlIG1ldGhvZCB0ZXN0ZWQgaGVyZTogaHR0cDovL2NvZGVwZW4uaW8vZ2lvbmt1bnovcGVuL0tEdkxqXG4gIC8vIFRoZSBwcm9ibGVtIGlzIHdpdGggdGhlIGxhYmVsIG9mZnNldHMgdGhhdCBjYW4ndCBiZSBjb252ZXJ0ZWQgaW50byBwZXJjZW50YWdlIGFuZCBhZmZlY3RpbmcgdGhlIGNoYXJ0IGNvbnRhaW5lclxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgY2hhcnQgd2hpY2ggY3VycmVudGx5IGRvZXMgYSBmdWxsIHJlY29uc3RydWN0aW9uIG9mIHRoZSBTVkcgRE9NXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YV0gT3B0aW9uYWwgZGF0YSB5b3UnZCBsaWtlIHRvIHNldCBmb3IgdGhlIGNoYXJ0IGJlZm9yZSBpdCB3aWxsIHVwZGF0ZS4gSWYgbm90IHNwZWNpZmllZCB0aGUgdXBkYXRlIG1ldGhvZCB3aWxsIHVzZSB0aGUgZGF0YSB0aGF0IGlzIGFscmVhZHkgY29uZmlndXJlZCB3aXRoIHRoZSBjaGFydC5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBPcHRpb25hbCBvcHRpb25zIHlvdSdkIGxpa2UgdG8gYWRkIHRvIHRoZSBwcmV2aW91cyBvcHRpb25zIGZvciB0aGUgY2hhcnQgYmVmb3JlIGl0IHdpbGwgdXBkYXRlLiBJZiBub3Qgc3BlY2lmaWVkIHRoZSB1cGRhdGUgbWV0aG9kIHdpbGwgdXNlIHRoZSBvcHRpb25zIHRoYXQgaGF2ZSBiZWVuIGFscmVhZHkgY29uZmlndXJlZCB3aXRoIHRoZSBjaGFydC5cbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3ZlcnJpZGVdIElmIHNldCB0byB0cnVlLCB0aGUgcGFzc2VkIG9wdGlvbnMgd2lsbCBiZSB1c2VkIHRvIGV4dGVuZCB0aGUgb3B0aW9ucyB0aGF0IGhhdmUgYmVlbiBjb25maWd1cmVkIGFscmVhZHkuIE90aGVyd2lzZSB0aGUgY2hhcnQgZGVmYXVsdCBvcHRpb25zIHdpbGwgYmUgdXNlZCBhcyB0aGUgYmFzZVxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQmFzZVxuICAgKi9cbiAgZnVuY3Rpb24gdXBkYXRlKGRhdGEsIG9wdGlvbnMsIG92ZXJyaWRlKSB7XG4gICAgaWYoZGF0YSkge1xuICAgICAgdGhpcy5kYXRhID0gZGF0YSB8fCB7fTtcbiAgICAgIHRoaXMuZGF0YS5sYWJlbHMgPSB0aGlzLmRhdGEubGFiZWxzIHx8IFtdO1xuICAgICAgdGhpcy5kYXRhLnNlcmllcyA9IHRoaXMuZGF0YS5zZXJpZXMgfHwgW107XG4gICAgICAvLyBFdmVudCBmb3IgZGF0YSB0cmFuc2Zvcm1hdGlvbiB0aGF0IGFsbG93cyB0byBtYW5pcHVsYXRlIHRoZSBkYXRhIGJlZm9yZSBpdCBnZXRzIHJlbmRlcmVkIGluIHRoZSBjaGFydHNcbiAgICAgIHRoaXMuZXZlbnRFbWl0dGVyLmVtaXQoJ2RhdGEnLCB7XG4gICAgICAgIHR5cGU6ICd1cGRhdGUnLFxuICAgICAgICBkYXRhOiB0aGlzLmRhdGFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IENoYXJ0aXN0LmV4dGVuZCh7fSwgb3ZlcnJpZGUgPyB0aGlzLm9wdGlvbnMgOiB0aGlzLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcblxuICAgICAgLy8gSWYgY2hhcnRpc3Qgd2FzIG5vdCBpbml0aWFsaXplZCB5ZXQsIHdlIGp1c3Qgc2V0IHRoZSBvcHRpb25zIGFuZCBsZWF2ZSB0aGUgcmVzdCB0byB0aGUgaW5pdGlhbGl6YXRpb25cbiAgICAgIC8vIE90aGVyd2lzZSB3ZSByZS1jcmVhdGUgdGhlIG9wdGlvbnNQcm92aWRlciBhdCB0aGlzIHBvaW50XG4gICAgICBpZighdGhpcy5pbml0aWFsaXplVGltZW91dElkKSB7XG4gICAgICAgIHRoaXMub3B0aW9uc1Byb3ZpZGVyLnJlbW92ZU1lZGlhUXVlcnlMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5vcHRpb25zUHJvdmlkZXIgPSBDaGFydGlzdC5vcHRpb25zUHJvdmlkZXIodGhpcy5vcHRpb25zLCB0aGlzLnJlc3BvbnNpdmVPcHRpb25zLCB0aGlzLmV2ZW50RW1pdHRlcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gT25seSByZS1jcmVhdGVkIHRoZSBjaGFydCBpZiBpdCBoYXMgYmVlbiBpbml0aWFsaXplZCB5ZXRcbiAgICBpZighdGhpcy5pbml0aWFsaXplVGltZW91dElkKSB7XG4gICAgICB0aGlzLmNyZWF0ZUNoYXJ0KHRoaXMub3B0aW9uc1Byb3ZpZGVyLmdldEN1cnJlbnRPcHRpb25zKCkpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBhIHJlZmVyZW5jZSB0byB0aGUgY2hhcnQgb2JqZWN0IHRvIGNoYWluIHVwIGNhbGxzXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgY2FuIGJlIGNhbGxlZCBvbiB0aGUgQVBJIG9iamVjdCBvZiBlYWNoIGNoYXJ0IGFuZCB3aWxsIHVuLXJlZ2lzdGVyIGFsbCBldmVudCBsaXN0ZW5lcnMgdGhhdCB3ZXJlIGFkZGVkIHRvIG90aGVyIGNvbXBvbmVudHMuIFRoaXMgY3VycmVudGx5IGluY2x1ZGVzIGEgd2luZG93LnJlc2l6ZSBsaXN0ZW5lciBhcyB3ZWxsIGFzIG1lZGlhIHF1ZXJ5IGxpc3RlbmVycyBpZiBhbnkgcmVzcG9uc2l2ZSBvcHRpb25zIGhhdmUgYmVlbiBwcm92aWRlZC4gVXNlIHRoaXMgZnVuY3Rpb24gaWYgeW91IG5lZWQgdG8gZGVzdHJveSBhbmQgcmVjcmVhdGUgQ2hhcnRpc3QgY2hhcnRzIGR5bmFtaWNhbGx5LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQmFzZVxuICAgKi9cbiAgZnVuY3Rpb24gZGV0YWNoKCkge1xuICAgIC8vIE9ubHkgZGV0YWNoIGlmIGluaXRpYWxpemF0aW9uIGFscmVhZHkgb2NjdXJyZWQgb24gdGhpcyBjaGFydC4gSWYgdGhpcyBjaGFydCBzdGlsbCBoYXNuJ3QgaW5pdGlhbGl6ZWQgKHRoZXJlZm9yZVxuICAgIC8vIHRoZSBpbml0aWFsaXphdGlvblRpbWVvdXRJZCBpcyBzdGlsbCBhIHZhbGlkIHRpbWVvdXQgcmVmZXJlbmNlLCB3ZSB3aWxsIGNsZWFyIHRoZSB0aW1lb3V0XG4gICAgaWYoIXRoaXMuaW5pdGlhbGl6ZVRpbWVvdXRJZCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplTGlzdGVuZXIpO1xuICAgICAgdGhpcy5vcHRpb25zUHJvdmlkZXIucmVtb3ZlTWVkaWFRdWVyeUxpc3RlbmVycygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuaW5pdGlhbGl6ZVRpbWVvdXRJZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRoaXMgZnVuY3Rpb24gdG8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnMuIFRoZSBoYW5kbGVyIGNhbGxiYWNrcyBhcmUgc3luY2hyb25vdXMgYW5kIHdpbGwgcnVuIGluIHRoZSBtYWluIHRocmVhZCByYXRoZXIgdGhhbiB0aGUgZXZlbnQgbG9vcC5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkJhc2VcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IE5hbWUgb2YgdGhlIGV2ZW50LiBDaGVjayB0aGUgZXhhbXBsZXMgZm9yIHN1cHBvcnRlZCBldmVudHMuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgVGhlIGhhbmRsZXIgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIGFuIGV2ZW50IHdpdGggdGhlIGdpdmVuIG5hbWUgd2FzIGVtaXR0ZWQuIFRoaXMgZnVuY3Rpb24gd2lsbCByZWNlaXZlIGEgZGF0YSBhcmd1bWVudCB3aGljaCBjb250YWlucyBldmVudCBkYXRhLiBTZWUgdGhlIGV4YW1wbGUgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGZ1bmN0aW9uIG9uKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgdGhpcy5ldmVudEVtaXR0ZXIuYWRkRXZlbnRIYW5kbGVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdGhpcyBmdW5jdGlvbiB0byB1bi1yZWdpc3RlciBldmVudCBoYW5kbGVycy4gSWYgdGhlIGhhbmRsZXIgZnVuY3Rpb24gcGFyYW1ldGVyIGlzIG9taXR0ZWQgYWxsIGhhbmRsZXJzIGZvciB0aGUgZ2l2ZW4gZXZlbnQgd2lsbCBiZSB1bi1yZWdpc3RlcmVkLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQmFzZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgTmFtZSBvZiB0aGUgZXZlbnQgZm9yIHdoaWNoIGEgaGFuZGxlciBzaG91bGQgYmUgcmVtb3ZlZFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaGFuZGxlcl0gVGhlIGhhbmRsZXIgZnVuY3Rpb24gdGhhdCB0aGF0IHdhcyBwcmV2aW91c2x5IHVzZWQgdG8gcmVnaXN0ZXIgYSBuZXcgZXZlbnQgaGFuZGxlci4gVGhpcyBoYW5kbGVyIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBldmVudCBoYW5kbGVyIGxpc3QuIElmIHRoaXMgcGFyYW1ldGVyIGlzIG9taXR0ZWQgdGhlbiBhbGwgZXZlbnQgaGFuZGxlcnMgZm9yIHRoZSBnaXZlbiBldmVudCBhcmUgcmVtb3ZlZCBmcm9tIHRoZSBsaXN0LlxuICAgKi9cbiAgZnVuY3Rpb24gb2ZmKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgdGhpcy5ldmVudEVtaXR0ZXIucmVtb3ZlRXZlbnRIYW5kbGVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgLy8gQWRkIHdpbmRvdyByZXNpemUgbGlzdGVuZXIgdGhhdCByZS1jcmVhdGVzIHRoZSBjaGFydFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZUxpc3RlbmVyKTtcblxuICAgIC8vIE9idGFpbiBjdXJyZW50IG9wdGlvbnMgYmFzZWQgb24gbWF0Y2hpbmcgbWVkaWEgcXVlcmllcyAoaWYgcmVzcG9uc2l2ZSBvcHRpb25zIGFyZSBnaXZlbilcbiAgICAvLyBUaGlzIHdpbGwgYWxzbyByZWdpc3RlciBhIGxpc3RlbmVyIHRoYXQgaXMgcmUtY3JlYXRpbmcgdGhlIGNoYXJ0IGJhc2VkIG9uIG1lZGlhIGNoYW5nZXNcbiAgICB0aGlzLm9wdGlvbnNQcm92aWRlciA9IENoYXJ0aXN0Lm9wdGlvbnNQcm92aWRlcih0aGlzLm9wdGlvbnMsIHRoaXMucmVzcG9uc2l2ZU9wdGlvbnMsIHRoaXMuZXZlbnRFbWl0dGVyKTtcbiAgICAvLyBSZWdpc3RlciBvcHRpb25zIGNoYW5nZSBsaXN0ZW5lciB0aGF0IHdpbGwgdHJpZ2dlciBhIGNoYXJ0IHVwZGF0ZVxuICAgIHRoaXMuZXZlbnRFbWl0dGVyLmFkZEV2ZW50SGFuZGxlcignb3B0aW9uc0NoYW5nZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIC8vIEJlZm9yZSB0aGUgZmlyc3QgY2hhcnQgY3JlYXRpb24gd2UgbmVlZCB0byByZWdpc3RlciB1cyB3aXRoIGFsbCBwbHVnaW5zIHRoYXQgYXJlIGNvbmZpZ3VyZWRcbiAgICAvLyBJbml0aWFsaXplIGFsbCByZWxldmFudCBwbHVnaW5zIHdpdGggb3VyIGNoYXJ0IG9iamVjdCBhbmQgdGhlIHBsdWdpbiBvcHRpb25zIHNwZWNpZmllZCBpbiB0aGUgY29uZmlnXG4gICAgaWYodGhpcy5vcHRpb25zLnBsdWdpbnMpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5wbHVnaW5zLmZvckVhY2goZnVuY3Rpb24ocGx1Z2luKSB7XG4gICAgICAgIGlmKHBsdWdpbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgcGx1Z2luWzBdKHRoaXMsIHBsdWdpblsxXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGx1Z2luKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIC8vIEV2ZW50IGZvciBkYXRhIHRyYW5zZm9ybWF0aW9uIHRoYXQgYWxsb3dzIHRvIG1hbmlwdWxhdGUgdGhlIGRhdGEgYmVmb3JlIGl0IGdldHMgcmVuZGVyZWQgaW4gdGhlIGNoYXJ0c1xuICAgIHRoaXMuZXZlbnRFbWl0dGVyLmVtaXQoJ2RhdGEnLCB7XG4gICAgICB0eXBlOiAnaW5pdGlhbCcsXG4gICAgICBkYXRhOiB0aGlzLmRhdGFcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgZmlyc3QgY2hhcnRcbiAgICB0aGlzLmNyZWF0ZUNoYXJ0KHRoaXMub3B0aW9uc1Byb3ZpZGVyLmdldEN1cnJlbnRPcHRpb25zKCkpO1xuXG4gICAgLy8gQXMgY2hhcnQgaXMgaW5pdGlhbGl6ZWQgZnJvbSB0aGUgZXZlbnQgbG9vcCBub3cgd2UgY2FuIHJlc2V0IG91ciB0aW1lb3V0IHJlZmVyZW5jZVxuICAgIC8vIFRoaXMgaXMgaW1wb3J0YW50IGlmIHRoZSBjaGFydCBnZXRzIGluaXRpYWxpemVkIG9uIHRoZSBzYW1lIGVsZW1lbnQgdHdpY2VcbiAgICB0aGlzLmluaXRpYWxpemVUaW1lb3V0SWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0b3Igb2YgY2hhcnQgYmFzZSBjbGFzcy5cbiAgICpcbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEBwYXJhbSBkZWZhdWx0T3B0aW9uc1xuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiBAcGFyYW0gcmVzcG9uc2l2ZU9wdGlvbnNcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBmdW5jdGlvbiBCYXNlKHF1ZXJ5LCBkYXRhLCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucywgcmVzcG9uc2l2ZU9wdGlvbnMpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IENoYXJ0aXN0LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xuICAgIHRoaXMuZGF0YSA9IGRhdGEgfHwge307XG4gICAgdGhpcy5kYXRhLmxhYmVscyA9IHRoaXMuZGF0YS5sYWJlbHMgfHwgW107XG4gICAgdGhpcy5kYXRhLnNlcmllcyA9IHRoaXMuZGF0YS5zZXJpZXMgfHwgW107XG4gICAgdGhpcy5kZWZhdWx0T3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5yZXNwb25zaXZlT3B0aW9ucyA9IHJlc3BvbnNpdmVPcHRpb25zO1xuICAgIHRoaXMuZXZlbnRFbWl0dGVyID0gQ2hhcnRpc3QuRXZlbnRFbWl0dGVyKCk7XG4gICAgdGhpcy5zdXBwb3J0c0ZvcmVpZ25PYmplY3QgPSBDaGFydGlzdC5TdmcuaXNTdXBwb3J0ZWQoJ0V4dGVuc2liaWxpdHknKTtcbiAgICB0aGlzLnN1cHBvcnRzQW5pbWF0aW9ucyA9IENoYXJ0aXN0LlN2Zy5pc1N1cHBvcnRlZCgnQW5pbWF0aW9uRXZlbnRzQXR0cmlidXRlJyk7XG4gICAgdGhpcy5yZXNpemVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlc2l6ZUxpc3RlbmVyKCl7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH0uYmluZCh0aGlzKTtcblxuICAgIGlmKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICAvLyBJZiBjaGFydGlzdCB3YXMgYWxyZWFkeSBpbml0aWFsaXplZCBpbiB0aGlzIGNvbnRhaW5lciB3ZSBhcmUgZGV0YWNoaW5nIGFsbCBldmVudCBsaXN0ZW5lcnMgZmlyc3RcbiAgICAgIGlmKHRoaXMuY29udGFpbmVyLl9fY2hhcnRpc3RfXykge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5fX2NoYXJ0aXN0X18uZGV0YWNoKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udGFpbmVyLl9fY2hhcnRpc3RfXyA9IHRoaXM7XG4gICAgfVxuXG4gICAgLy8gVXNpbmcgZXZlbnQgbG9vcCBmb3IgZmlyc3QgZHJhdyB0byBtYWtlIGl0IHBvc3NpYmxlIHRvIHJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVycyBpbiB0aGUgc2FtZSBjYWxsIHN0YWNrIHdoZXJlXG4gICAgLy8gdGhlIGNoYXJ0IHdhcyBjcmVhdGVkLlxuICAgIHRoaXMuaW5pdGlhbGl6ZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoaW5pdGlhbGl6ZS5iaW5kKHRoaXMpLCAwKTtcbiAgfVxuXG4gIC8vIENyZWF0aW5nIHRoZSBjaGFydCBiYXNlIGNsYXNzXG4gIENoYXJ0aXN0LkJhc2UgPSBDaGFydGlzdC5DbGFzcy5leHRlbmQoe1xuICAgIGNvbnN0cnVjdG9yOiBCYXNlLFxuICAgIG9wdGlvbnNQcm92aWRlcjogdW5kZWZpbmVkLFxuICAgIGNvbnRhaW5lcjogdW5kZWZpbmVkLFxuICAgIHN2ZzogdW5kZWZpbmVkLFxuICAgIGV2ZW50RW1pdHRlcjogdW5kZWZpbmVkLFxuICAgIGNyZWF0ZUNoYXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQmFzZSBjaGFydCB0eXBlIGNhblxcJ3QgYmUgaW5zdGFudGlhdGVkIScpO1xuICAgIH0sXG4gICAgdXBkYXRlOiB1cGRhdGUsXG4gICAgZGV0YWNoOiBkZXRhY2gsXG4gICAgb246IG9uLFxuICAgIG9mZjogb2ZmLFxuICAgIHZlcnNpb246IENoYXJ0aXN0LnZlcnNpb24sXG4gICAgc3VwcG9ydHNGb3JlaWduT2JqZWN0OiBmYWxzZVxuICB9KTtcblxufSh3aW5kb3csIGRvY3VtZW50LCBDaGFydGlzdCkpO1xuOy8qKlxuICogQ2hhcnRpc3QgU1ZHIG1vZHVsZSBmb3Igc2ltcGxlIFNWRyBET00gYWJzdHJhY3Rpb25cbiAqXG4gKiBAbW9kdWxlIENoYXJ0aXN0LlN2Z1xuICovXG4vKiBnbG9iYWwgQ2hhcnRpc3QgKi9cbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCBDaGFydGlzdCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIENoYXJ0aXN0LlN2ZyBjcmVhdGVzIGEgbmV3IFNWRyBvYmplY3Qgd3JhcHBlciB3aXRoIGEgc3RhcnRpbmcgZWxlbWVudC4gWW91IGNhbiB1c2UgdGhlIHdyYXBwZXIgdG8gZmx1ZW50bHkgY3JlYXRlIHN1Yi1lbGVtZW50cyBhbmQgbW9kaWZ5IHRoZW0uXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmdcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7U3RyaW5nfEVsZW1lbnR9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIFNWRyBlbGVtZW50IHRvIGNyZWF0ZSBvciBhbiBTVkcgZG9tIGVsZW1lbnQgd2hpY2ggc2hvdWxkIGJlIHdyYXBwZWQgaW50byBDaGFydGlzdC5TdmdcbiAgICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXMgQW4gb2JqZWN0IHdpdGggcHJvcGVydGllcyB0aGF0IHdpbGwgYmUgYWRkZWQgYXMgYXR0cmlidXRlcyB0byB0aGUgU1ZHIGVsZW1lbnQgdGhhdCBpcyBjcmVhdGVkLiBBdHRyaWJ1dGVzIHdpdGggdW5kZWZpbmVkIHZhbHVlcyB3aWxsIG5vdCBiZSBhZGRlZC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBUaGlzIGNsYXNzIG9yIGNsYXNzIGxpc3Qgd2lsbCBiZSBhZGRlZCB0byB0aGUgU1ZHIGVsZW1lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmVudCBUaGUgcGFyZW50IFNWRyB3cmFwcGVyIG9iamVjdCB3aGVyZSB0aGlzIG5ld2x5IGNyZWF0ZWQgd3JhcHBlciBhbmQgaXQncyBlbGVtZW50IHdpbGwgYmUgYXR0YWNoZWQgdG8gYXMgY2hpbGRcbiAgICogQHBhcmFtIHtCb29sZWFufSBpbnNlcnRGaXJzdCBJZiB0aGlzIHBhcmFtIGlzIHNldCB0byB0cnVlIGluIGNvbmp1bmN0aW9uIHdpdGggYSBwYXJlbnQgZWxlbWVudCB0aGUgbmV3bHkgY3JlYXRlZCBlbGVtZW50IHdpbGwgYmUgYWRkZWQgYXMgZmlyc3QgY2hpbGQgZWxlbWVudCBpbiB0aGUgcGFyZW50IGVsZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIFN2ZyhuYW1lLCBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHBhcmVudCwgaW5zZXJ0Rmlyc3QpIHtcbiAgICAvLyBJZiBTdmcgaXMgZ2V0dGluZyBjYWxsZWQgd2l0aCBhbiBTVkcgZWxlbWVudCB3ZSBqdXN0IHJldHVybiB0aGUgd3JhcHBlclxuICAgIGlmKG5hbWUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICB0aGlzLl9ub2RlID0gbmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhDaGFydGlzdC5uYW1lc3BhY2VzLnN2ZywgbmFtZSk7XG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYW4gU1ZHIGVsZW1lbnQgY3JlYXRlZCB0aGVuIGN1c3RvbSBuYW1lc3BhY2VcbiAgICAgIGlmKG5hbWUgPT09ICdzdmcnKSB7XG4gICAgICAgIHRoaXMuYXR0cih7XG4gICAgICAgICAgJ3htbG5zOmN0JzogQ2hhcnRpc3QubmFtZXNwYWNlcy5jdFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZihhdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLmF0dHIoYXR0cmlidXRlcyk7XG4gICAgfVxuXG4gICAgaWYoY2xhc3NOYW1lKSB7XG4gICAgICB0aGlzLmFkZENsYXNzKGNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgaWYocGFyZW50KSB7XG4gICAgICBpZiAoaW5zZXJ0Rmlyc3QgJiYgcGFyZW50Ll9ub2RlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50Ll9ub2RlLmluc2VydEJlZm9yZSh0aGlzLl9ub2RlLCBwYXJlbnQuX25vZGUuZmlyc3RDaGlsZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnQuX25vZGUuYXBwZW5kQ2hpbGQodGhpcy5fbm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhdHRyaWJ1dGVzIG9uIHRoZSBjdXJyZW50IFNWRyBlbGVtZW50IG9mIHRoZSB3cmFwcGVyIHlvdSdyZSBjdXJyZW50bHkgd29ya2luZyBvbi5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LlN2Z1xuICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGF0dHJpYnV0ZXMgQW4gb2JqZWN0IHdpdGggcHJvcGVydGllcyB0aGF0IHdpbGwgYmUgYWRkZWQgYXMgYXR0cmlidXRlcyB0byB0aGUgU1ZHIGVsZW1lbnQgdGhhdCBpcyBjcmVhdGVkLiBBdHRyaWJ1dGVzIHdpdGggdW5kZWZpbmVkIHZhbHVlcyB3aWxsIG5vdCBiZSBhZGRlZC4gSWYgdGhpcyBwYXJhbWV0ZXIgaXMgYSBTdHJpbmcgdGhlbiB0aGUgZnVuY3Rpb24gaXMgdXNlZCBhcyBhIGdldHRlciBhbmQgd2lsbCByZXR1cm4gdGhlIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtuc10gSWYgc3BlY2lmaWVkLCB0aGUgYXR0cmlidXRlIHdpbGwgYmUgb2J0YWluZWQgdXNpbmcgZ2V0QXR0cmlidXRlTnMuIEluIG9yZGVyIHRvIHdyaXRlIG5hbWVwc2FjZWQgYXR0cmlidXRlcyB5b3UgY2FuIHVzZSB0aGUgbmFtZXNwYWNlOmF0dHJpYnV0ZSBub3RhdGlvbiB3aXRoaW4gdGhlIGF0dHJpYnV0ZXMgb2JqZWN0LlxuICAgKiBAcmV0dXJuIHtPYmplY3R8U3RyaW5nfSBUaGUgY3VycmVudCB3cmFwcGVyIG9iamVjdCB3aWxsIGJlIHJldHVybmVkIHNvIGl0IGNhbiBiZSB1c2VkIGZvciBjaGFpbmluZyBvciB0aGUgYXR0cmlidXRlIHZhbHVlIGlmIHVzZWQgYXMgZ2V0dGVyIGZ1bmN0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gYXR0cihhdHRyaWJ1dGVzLCBucykge1xuICAgIGlmKHR5cGVvZiBhdHRyaWJ1dGVzID09PSAnc3RyaW5nJykge1xuICAgICAgaWYobnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25vZGUuZ2V0QXR0cmlidXRlTlMobnMsIGF0dHJpYnV0ZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25vZGUuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAvLyBJZiB0aGUgYXR0cmlidXRlIHZhbHVlIGlzIHVuZGVmaW5lZCB3ZSBjYW4gc2tpcCB0aGlzIG9uZVxuICAgICAgaWYoYXR0cmlidXRlc1trZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoa2V5LmluZGV4T2YoJzonKSAhPT0gLTEpIHtcbiAgICAgICAgdmFyIG5hbWVzcGFjZWRBdHRyaWJ1dGUgPSBrZXkuc3BsaXQoJzonKTtcbiAgICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGVOUyhDaGFydGlzdC5uYW1lc3BhY2VzW25hbWVzcGFjZWRBdHRyaWJ1dGVbMF1dLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBTVkcgZWxlbWVudCB3aG9zZSB3cmFwcGVyIG9iamVjdCB3aWxsIGJlIHNlbGVjdGVkIGZvciBmdXJ0aGVyIG9wZXJhdGlvbnMuIFRoaXMgd2F5IHlvdSBjYW4gYWxzbyBjcmVhdGUgbmVzdGVkIGdyb3VwcyBlYXNpbHkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmdcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIFNWRyBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIGNyZWF0ZWQgYXMgY2hpbGQgZWxlbWVudCBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGVsZW1lbnQgd3JhcHBlclxuICAgKiBAcGFyYW0ge09iamVjdH0gW2F0dHJpYnV0ZXNdIEFuIG9iamVjdCB3aXRoIHByb3BlcnRpZXMgdGhhdCB3aWxsIGJlIGFkZGVkIGFzIGF0dHJpYnV0ZXMgdG8gdGhlIFNWRyBlbGVtZW50IHRoYXQgaXMgY3JlYXRlZC4gQXR0cmlidXRlcyB3aXRoIHVuZGVmaW5lZCB2YWx1ZXMgd2lsbCBub3QgYmUgYWRkZWQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbY2xhc3NOYW1lXSBUaGlzIGNsYXNzIG9yIGNsYXNzIGxpc3Qgd2lsbCBiZSBhZGRlZCB0byB0aGUgU1ZHIGVsZW1lbnRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbaW5zZXJ0Rmlyc3RdIElmIHRoaXMgcGFyYW0gaXMgc2V0IHRvIHRydWUgaW4gY29uanVuY3Rpb24gd2l0aCBhIHBhcmVudCBlbGVtZW50IHRoZSBuZXdseSBjcmVhdGVkIGVsZW1lbnQgd2lsbCBiZSBhZGRlZCBhcyBmaXJzdCBjaGlsZCBlbGVtZW50IGluIHRoZSBwYXJlbnQgZWxlbWVudFxuICAgKiBAcmV0dXJuIHtDaGFydGlzdC5Tdmd9IFJldHVybnMgYSBDaGFydGlzdC5Tdmcgd3JhcHBlciBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byBtb2RpZnkgdGhlIGNvbnRhaW5pbmcgU1ZHIGRhdGFcbiAgICovXG4gIGZ1bmN0aW9uIGVsZW0obmFtZSwgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBpbnNlcnRGaXJzdCkge1xuICAgIHJldHVybiBuZXcgQ2hhcnRpc3QuU3ZnKG5hbWUsIGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgdGhpcywgaW5zZXJ0Rmlyc3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHBhcmVudCBDaGFydGlzdC5TVkcgd3JhcHBlciBvYmplY3RcbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LlN2Z1xuICAgKiBAcmV0dXJuIHtDaGFydGlzdC5Tdmd9IFJldHVybnMgYSBDaGFydGlzdC5Tdmcgd3JhcHBlciBhcm91bmQgdGhlIHBhcmVudCBub2RlIG9mIHRoZSBjdXJyZW50IG5vZGUuIElmIHRoZSBwYXJlbnQgbm9kZSBpcyBub3QgZXhpc3Rpbmcgb3IgaXQncyBub3QgYW4gU1ZHIG5vZGUgdGhlbiB0aGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIG51bGwuXG4gICAqL1xuICBmdW5jdGlvbiBwYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vZGUucGFyZW50Tm9kZSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQgPyBuZXcgQ2hhcnRpc3QuU3ZnKHRoaXMuX25vZGUucGFyZW50Tm9kZSkgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBDaGFydGlzdC5Tdmcgd3JhcHBlciBhcm91bmQgdGhlIHJvb3QgU1ZHIGVsZW1lbnQgb2YgdGhlIGN1cnJlbnQgdHJlZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LlN2Z1xuICAgKiBAcmV0dXJuIHtDaGFydGlzdC5Tdmd9IFRoZSByb290IFNWRyBlbGVtZW50IHdyYXBwZWQgaW4gYSBDaGFydGlzdC5TdmcgZWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gcm9vdCgpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMuX25vZGU7XG4gICAgd2hpbGUobm9kZS5ub2RlTmFtZSAhPT0gJ3N2ZycpIHtcbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQ2hhcnRpc3QuU3ZnKG5vZGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIGZpcnN0IGNoaWxkIFNWRyBlbGVtZW50IG9mIHRoZSBjdXJyZW50IGVsZW1lbnQgdGhhdCBtYXRjaGVzIGEgQ1NTIHNlbGVjdG9yLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGlzIGEgQ2hhcnRpc3QuU3ZnIHdyYXBwZXIuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmdcbiAgICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yIEEgQ1NTIHNlbGVjdG9yIHRoYXQgaXMgdXNlZCB0byBxdWVyeSBmb3IgY2hpbGQgU1ZHIGVsZW1lbnRzXG4gICAqIEByZXR1cm4ge0NoYXJ0aXN0LlN2Z30gVGhlIFNWRyB3cmFwcGVyIGZvciB0aGUgZWxlbWVudCBmb3VuZCBvciBudWxsIGlmIG5vIGVsZW1lbnQgd2FzIGZvdW5kXG4gICAqL1xuICBmdW5jdGlvbiBxdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gICAgdmFyIGZvdW5kTm9kZSA9IHRoaXMuX25vZGUucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgcmV0dXJuIGZvdW5kTm9kZSA/IG5ldyBDaGFydGlzdC5TdmcoZm91bmROb2RlKSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0aGUgYWxsIGNoaWxkIFNWRyBlbGVtZW50cyBvZiB0aGUgY3VycmVudCBlbGVtZW50IHRoYXQgbWF0Y2ggYSBDU1Mgc2VsZWN0b3IuIFRoZSByZXR1cm5lZCBvYmplY3QgaXMgYSBDaGFydGlzdC5TdmcuTGlzdCB3cmFwcGVyLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuU3ZnXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvciBBIENTUyBzZWxlY3RvciB0aGF0IGlzIHVzZWQgdG8gcXVlcnkgZm9yIGNoaWxkIFNWRyBlbGVtZW50c1xuICAgKiBAcmV0dXJuIHtDaGFydGlzdC5TdmcuTGlzdH0gVGhlIFNWRyB3cmFwcGVyIGxpc3QgZm9yIHRoZSBlbGVtZW50IGZvdW5kIG9yIG51bGwgaWYgbm8gZWxlbWVudCB3YXMgZm91bmRcbiAgICovXG4gIGZ1bmN0aW9uIHF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIHtcbiAgICB2YXIgZm91bmROb2RlcyA9IHRoaXMuX25vZGUucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgcmV0dXJuIGZvdW5kTm9kZXMubGVuZ3RoID8gbmV3IENoYXJ0aXN0LlN2Zy5MaXN0KGZvdW5kTm9kZXMpIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB1bmRlcmx5aW5nIFNWRyBub2RlIGZvciB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuU3ZnXG4gICAqIEByZXR1cm5zIHtOb2RlfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBjcmVhdGVzIGEgZm9yZWlnbk9iamVjdCAoc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NWRy9FbGVtZW50L2ZvcmVpZ25PYmplY3QpIHRoYXQgYWxsb3dzIHRvIGVtYmVkIEhUTUwgY29udGVudCBpbnRvIGEgU1ZHIGdyYXBoaWMuIFdpdGggdGhlIGhlbHAgb2YgZm9yZWlnbk9iamVjdHMgeW91IGNhbiBlbmFibGUgdGhlIHVzYWdlIG9mIHJlZ3VsYXIgSFRNTCBlbGVtZW50cyBpbnNpZGUgb2YgU1ZHIHdoZXJlIHRoZXkgYXJlIHN1YmplY3QgZm9yIFNWRyBwb3NpdGlvbmluZyBhbmQgdHJhbnNmb3JtYXRpb24gYnV0IHRoZSBCcm93c2VyIHdpbGwgdXNlIHRoZSBIVE1MIHJlbmRlcmluZyBjYXBhYmlsaXRpZXMgZm9yIHRoZSBjb250YWluaW5nIERPTS5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LlN2Z1xuICAgKiBAcGFyYW0ge05vZGV8U3RyaW5nfSBjb250ZW50IFRoZSBET00gTm9kZSwgb3IgSFRNTCBzdHJpbmcgdGhhdCB3aWxsIGJlIGNvbnZlcnRlZCB0byBhIERPTSBOb2RlLCB0aGF0IGlzIHRoZW4gcGxhY2VkIGludG8gYW5kIHdyYXBwZWQgYnkgdGhlIGZvcmVpZ25PYmplY3RcbiAgICogQHBhcmFtIHtTdHJpbmd9IFthdHRyaWJ1dGVzXSBBbiBvYmplY3Qgd2l0aCBwcm9wZXJ0aWVzIHRoYXQgd2lsbCBiZSBhZGRlZCBhcyBhdHRyaWJ1dGVzIHRvIHRoZSBmb3JlaWduT2JqZWN0IGVsZW1lbnQgdGhhdCBpcyBjcmVhdGVkLiBBdHRyaWJ1dGVzIHdpdGggdW5kZWZpbmVkIHZhbHVlcyB3aWxsIG5vdCBiZSBhZGRlZC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IFtjbGFzc05hbWVdIFRoaXMgY2xhc3Mgb3IgY2xhc3MgbGlzdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBTVkcgZWxlbWVudFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpbnNlcnRGaXJzdF0gU3BlY2lmaWVzIGlmIHRoZSBmb3JlaWduT2JqZWN0IHNob3VsZCBiZSBpbnNlcnRlZCBhcyBmaXJzdCBjaGlsZFxuICAgKiBAcmV0dXJuIHtDaGFydGlzdC5Tdmd9IE5ldyB3cmFwcGVyIG9iamVjdCB0aGF0IHdyYXBzIHRoZSBmb3JlaWduT2JqZWN0IGVsZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIGZvcmVpZ25PYmplY3QoY29udGVudCwgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBpbnNlcnRGaXJzdCkge1xuICAgIC8vIElmIGNvbnRlbnQgaXMgc3RyaW5nIHRoZW4gd2UgY29udmVydCBpdCB0byBET01cbiAgICAvLyBUT0RPOiBIYW5kbGUgY2FzZSB3aGVyZSBjb250ZW50IGlzIG5vdCBhIHN0cmluZyBub3IgYSBET00gTm9kZVxuICAgIGlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICBjb250ZW50ID0gY29udGFpbmVyLmZpcnN0Q2hpbGQ7XG4gICAgfVxuXG4gICAgLy8gQWRkaW5nIG5hbWVzcGFjZSB0byBjb250ZW50IGVsZW1lbnRcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgneG1sbnMnLCBDaGFydGlzdC5uYW1lc3BhY2VzLnhtbG5zKTtcblxuICAgIC8vIENyZWF0aW5nIHRoZSBmb3JlaWduT2JqZWN0IHdpdGhvdXQgcmVxdWlyZWQgZXh0ZW5zaW9uIGF0dHJpYnV0ZSAoYXMgZGVzY3JpYmVkIGhlcmVcbiAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcvZXh0ZW5kLmh0bWwjRm9yZWlnbk9iamVjdEVsZW1lbnQpXG4gICAgdmFyIGZuT2JqID0gdGhpcy5lbGVtKCdmb3JlaWduT2JqZWN0JywgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBpbnNlcnRGaXJzdCk7XG5cbiAgICAvLyBBZGQgY29udGVudCB0byBmb3JlaWduT2JqZWN0RWxlbWVudFxuICAgIGZuT2JqLl9ub2RlLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGZuT2JqO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGFkZHMgYSBuZXcgdGV4dCBlbGVtZW50IHRvIHRoZSBjdXJyZW50IENoYXJ0aXN0LlN2ZyB3cmFwcGVyLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuU3ZnXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0IFRoZSB0ZXh0IHRoYXQgc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSB0ZXh0IGVsZW1lbnQgdGhhdCBpcyBjcmVhdGVkXG4gICAqIEByZXR1cm4ge0NoYXJ0aXN0LlN2Z30gVGhlIHNhbWUgd3JhcHBlciBvYmplY3QgdGhhdCB3YXMgdXNlZCB0byBhZGQgdGhlIG5ld2x5IGNyZWF0ZWQgZWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gdGV4dCh0KSB7XG4gICAgdGhpcy5fbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0KSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBjbGVhciBhbGwgY2hpbGQgbm9kZXMgb2YgdGhlIGN1cnJlbnQgd3JhcHBlciBvYmplY3QuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmdcbiAgICogQHJldHVybiB7Q2hhcnRpc3QuU3ZnfSBUaGUgc2FtZSB3cmFwcGVyIG9iamVjdCB0aGF0IGdvdCBlbXB0aWVkXG4gICAqL1xuICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICB3aGlsZSAodGhpcy5fbm9kZS5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLl9ub2RlLnJlbW92ZUNoaWxkKHRoaXMuX25vZGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBjYXVzZSB0aGUgY3VycmVudCB3cmFwcGVyIHRvIHJlbW92ZSBpdHNlbGYgZnJvbSBpdHMgcGFyZW50IHdyYXBwZXIuIFVzZSB0aGlzIG1ldGhvZCBpZiB5b3UnZCBsaWtlIHRvIGdldCByaWQgb2YgYW4gZWxlbWVudCBpbiBhIGdpdmVuIERPTSBzdHJ1Y3R1cmUuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmdcbiAgICogQHJldHVybiB7Q2hhcnRpc3QuU3ZnfSBUaGUgcGFyZW50IHdyYXBwZXIgb2JqZWN0IG9mIHRoZSBlbGVtZW50IHRoYXQgZ290IHJlbW92ZWRcbiAgICovXG4gIGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICB0aGlzLl9ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5fbm9kZSk7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50KCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgd2lsbCByZXBsYWNlIHRoZSBlbGVtZW50IHdpdGggYSBuZXcgZWxlbWVudCB0aGF0IGNhbiBiZSBjcmVhdGVkIG91dHNpZGUgb2YgdGhlIGN1cnJlbnQgRE9NLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuU3ZnXG4gICAqIEBwYXJhbSB7Q2hhcnRpc3QuU3ZnfSBuZXdFbGVtZW50IFRoZSBuZXcgQ2hhcnRpc3QuU3ZnIG9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byByZXBsYWNlIHRoZSBjdXJyZW50IHdyYXBwZXIgb2JqZWN0XG4gICAqIEByZXR1cm4ge0NoYXJ0aXN0LlN2Z30gVGhlIHdyYXBwZXIgb2YgdGhlIG5ldyBlbGVtZW50XG4gICAqL1xuICBmdW5jdGlvbiByZXBsYWNlKG5ld0VsZW1lbnQpIHtcbiAgICB0aGlzLl9ub2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld0VsZW1lbnQuX25vZGUsIHRoaXMuX25vZGUpO1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgYXBwZW5kIGFuIGVsZW1lbnQgdG8gdGhlIGN1cnJlbnQgZWxlbWVudCBhcyBhIGNoaWxkLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuU3ZnXG4gICAqIEBwYXJhbSB7Q2hhcnRpc3QuU3ZnfSBlbGVtZW50IFRoZSBDaGFydGlzdC5TdmcgZWxlbWVudCB0aGF0IHNob3VsZCBiZSBhZGRlZCBhcyBhIGNoaWxkXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2luc2VydEZpcnN0XSBTcGVjaWZpZXMgaWYgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGluc2VydGVkIGFzIGZpcnN0IGNoaWxkXG4gICAqIEByZXR1cm4ge0NoYXJ0aXN0LlN2Z30gVGhlIHdyYXBwZXIgb2YgdGhlIGFwcGVuZGVkIG9iamVjdFxuICAgKi9cbiAgZnVuY3Rpb24gYXBwZW5kKGVsZW1lbnQsIGluc2VydEZpcnN0KSB7XG4gICAgaWYoaW5zZXJ0Rmlyc3QgJiYgdGhpcy5fbm9kZS5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLl9ub2RlLmluc2VydEJlZm9yZShlbGVtZW50Ll9ub2RlLCB0aGlzLl9ub2RlLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9ub2RlLmFwcGVuZENoaWxkKGVsZW1lbnQuX25vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgY2xhc3MgbmFtZXMgdGhhdCBhcmUgYXR0YWNoZWQgdG8gdGhlIGN1cnJlbnQgd3JhcHBlciBlbGVtZW50LiBUaGlzIG1ldGhvZCBjYW4gbm90IGJlIGNoYWluZWQgZnVydGhlci5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LlN2Z1xuICAgKiBAcmV0dXJuIHtBcnJheX0gQSBsaXN0IG9mIGNsYXNzZXMgb3IgYW4gZW1wdHkgYXJyYXkgaWYgdGhlcmUgYXJlIG5vIGNsYXNzZXMgb24gdGhlIGN1cnJlbnQgZWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gY2xhc3NlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fbm9kZS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPyB0aGlzLl9ub2RlLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS50cmltKCkuc3BsaXQoL1xccysvKSA6IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgb25lIG9yIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2YgY2xhc3NlcyB0byB0aGUgY3VycmVudCBlbGVtZW50IGFuZCBlbnN1cmVzIHRoZSBjbGFzc2VzIGFyZSBvbmx5IGV4aXN0aW5nIG9uY2UuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmdcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzIEEgd2hpdGUgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2YgY2xhc3MgbmFtZXNcbiAgICogQHJldHVybiB7Q2hhcnRpc3QuU3ZnfSBUaGUgd3JhcHBlciBvZiB0aGUgY3VycmVudCBlbGVtZW50XG4gICAqL1xuICBmdW5jdGlvbiBhZGRDbGFzcyhuYW1lcykge1xuICAgIHRoaXMuX25vZGUuc2V0QXR0cmlidXRlKCdjbGFzcycsXG4gICAgICB0aGlzLmNsYXNzZXModGhpcy5fbm9kZSlcbiAgICAgICAgLmNvbmNhdChuYW1lcy50cmltKCkuc3BsaXQoL1xccysvKSlcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbihlbGVtLCBwb3MsIHNlbGYpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi5pbmRleE9mKGVsZW0pID09PSBwb3M7XG4gICAgICAgIH0pLmpvaW4oJyAnKVxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIG9uZSBvciBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mIGNsYXNzZXMgZnJvbSB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuU3ZnXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lcyBBIHdoaXRlIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mIGNsYXNzIG5hbWVzXG4gICAqIEByZXR1cm4ge0NoYXJ0aXN0LlN2Z30gVGhlIHdyYXBwZXIgb2YgdGhlIGN1cnJlbnQgZWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MobmFtZXMpIHtcbiAgICB2YXIgcmVtb3ZlZENsYXNzZXMgPSBuYW1lcy50cmltKCkuc3BsaXQoL1xccysvKTtcblxuICAgIHRoaXMuX25vZGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIHRoaXMuY2xhc3Nlcyh0aGlzLl9ub2RlKS5maWx0ZXIoZnVuY3Rpb24obmFtZSkge1xuICAgICAgcmV0dXJuIHJlbW92ZWRDbGFzc2VzLmluZGV4T2YobmFtZSkgPT09IC0xO1xuICAgIH0pLmpvaW4oJyAnKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCBjbGFzc2VzIGZyb20gdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LlN2Z1xuICAgKiBAcmV0dXJuIHtDaGFydGlzdC5Tdmd9IFRoZSB3cmFwcGVyIG9mIHRoZSBjdXJyZW50IGVsZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIHJlbW92ZUFsbENsYXNzZXMoKSB7XG4gICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJycpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGVsZW1lbnQgaGVpZ2h0IHVzaW5nIGBnZXRCb3VuZGluZ0NsaWVudFJlY3RgXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmdcbiAgICogQHJldHVybiB7TnVtYmVyfSBUaGUgZWxlbWVudHMgaGVpZ2h0IGluIHBpeGVsc1xuICAgKi9cbiAgZnVuY3Rpb24gaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9ub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZWxlbWVudCB3aWR0aCB1c2luZyBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YFxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IFRoZSBlbGVtZW50cyB3aWR0aCBpbiBwaXhlbHNcbiAgICovXG4gIGZ1bmN0aW9uIHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLl9ub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBhbmltYXRlIGZ1bmN0aW9uIGxldHMgeW91IGFuaW1hdGUgdGhlIGN1cnJlbnQgZWxlbWVudCB3aXRoIFNNSUwgYW5pbWF0aW9ucy4gWW91IGNhbiBhZGQgYW5pbWF0aW9ucyBmb3IgbXVsdGlwbGUgYXR0cmlidXRlcyBhdCB0aGUgc2FtZSB0aW1lIGJ5IHVzaW5nIGFuIGFuaW1hdGlvbiBkZWZpbml0aW9uIG9iamVjdC4gVGhpcyBvYmplY3Qgc2hvdWxkIGNvbnRhaW4gU01JTCBhbmltYXRpb24gYXR0cmlidXRlcy4gUGxlYXNlIHJlZmVyIHRvIGh0dHA6Ly93d3cudzMub3JnL1RSL1NWRy9hbmltYXRlLmh0bWwgZm9yIGEgZGV0YWlsZWQgc3BlY2lmaWNhdGlvbiBhYm91dCB0aGUgYXZhaWxhYmxlIGFuaW1hdGlvbiBhdHRyaWJ1dGVzLiBBZGRpdGlvbmFsbHkgYW4gZWFzaW5nIHByb3BlcnR5IGNhbiBiZSBwYXNzZWQgaW4gdGhlIGFuaW1hdGlvbiBkZWZpbml0aW9uIG9iamVjdC4gVGhpcyBjYW4gYmUgYSBzdHJpbmcgd2l0aCBhIG5hbWUgb2YgYW4gZWFzaW5nIGZ1bmN0aW9uIGluIGBDaGFydGlzdC5TdmcuRWFzaW5nYCBvciBhbiBhcnJheSB3aXRoIGZvdXIgbnVtYmVycyBzcGVjaWZ5aW5nIGEgY3ViaWMgQsOpemllciBjdXJ2ZS5cbiAgICogKipBbiBhbmltYXRpb25zIG9iamVjdCBjb3VsZCBsb29rIGxpa2UgdGhpczoqKlxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGVsZW1lbnQuYW5pbWF0ZSh7XG4gICAqICAgb3BhY2l0eToge1xuICAgKiAgICAgZHVyOiAxMDAwLFxuICAgKiAgICAgZnJvbTogMCxcbiAgICogICAgIHRvOiAxXG4gICAqICAgfSxcbiAgICogICB4MToge1xuICAgKiAgICAgZHVyOiAnMTAwMG1zJyxcbiAgICogICAgIGZyb206IDEwMCxcbiAgICogICAgIHRvOiAyMDAsXG4gICAqICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhcnQnXG4gICAqICAgfSxcbiAgICogICB5MToge1xuICAgKiAgICAgZHVyOiAnMnMnLFxuICAgKiAgICAgZnJvbTogMCxcbiAgICogICAgIHRvOiAxMDBcbiAgICogICB9XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICogKipBdXRvbWF0aWMgdW5pdCBjb252ZXJzaW9uKipcbiAgICogRm9yIHRoZSBgZHVyYCBhbmQgdGhlIGBiZWdpbmAgYW5pbWF0ZSBhdHRyaWJ1dGUgeW91IGNhbiBhbHNvIG9taXQgYSB1bml0IGJ5IHBhc3NpbmcgYSBudW1iZXIuIFRoZSBudW1iZXIgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGNvbnZlcnRlZCB0byBtaWxsaSBzZWNvbmRzLlxuICAgKiAqKkd1aWRlZCBtb2RlKipcbiAgICogVGhlIGRlZmF1bHQgYmVoYXZpb3Igb2YgU01JTCBhbmltYXRpb25zIHdpdGggb2Zmc2V0IHVzaW5nIHRoZSBgYmVnaW5gIGF0dHJpYnV0ZSBpcyB0aGF0IHRoZSBhdHRyaWJ1dGUgd2lsbCBrZWVwIGl0J3Mgb3JpZ2luYWwgdmFsdWUgdW50aWwgdGhlIGFuaW1hdGlvbiBzdGFydHMuIE1vc3RseSB0aGlzIGJlaGF2aW9yIGlzIG5vdCBkZXNpcmVkIGFzIHlvdSdkIGxpa2UgdG8gaGF2ZSB5b3VyIGVsZW1lbnQgYXR0cmlidXRlcyBhbHJlYWR5IGluaXRpYWxpemVkIHdpdGggdGhlIGFuaW1hdGlvbiBgZnJvbWAgdmFsdWUgZXZlbiBiZWZvcmUgdGhlIGFuaW1hdGlvbiBzdGFydHMuIEFsc28gaWYgeW91IGRvbid0IHNwZWNpZnkgYGZpbGw9XCJmcmVlemVcImAgb24gYW4gYW5pbWF0ZSBlbGVtZW50IG9yIGlmIHlvdSBkZWxldGUgdGhlIGFuaW1hdGlvbiBhZnRlciBpdCdzIGRvbmUgKHdoaWNoIGlzIGRvbmUgaW4gZ3VpZGVkIG1vZGUpIHRoZSBhdHRyaWJ1dGUgd2lsbCBzd2l0Y2ggYmFjayB0byB0aGUgaW5pdGlhbCB2YWx1ZS4gVGhpcyBiZWhhdmlvciBpcyBhbHNvIG5vdCBkZXNpcmVkIHdoZW4gcGVyZm9ybWluZyBzaW1wbGUgb25lLXRpbWUgYW5pbWF0aW9ucy4gRm9yIG9uZS10aW1lIGFuaW1hdGlvbnMgeW91J2Qgd2FudCB0byB0cmlnZ2VyIGFuaW1hdGlvbnMgaW1tZWRpYXRlbHkgaW5zdGVhZCBvZiByZWxhdGl2ZSB0byB0aGUgZG9jdW1lbnQgYmVnaW4gdGltZS4gVGhhdCdzIHdoeSBpbiBndWlkZWQgbW9kZSBDaGFydGlzdC5Tdmcgd2lsbCBhbHNvIHVzZSB0aGUgYGJlZ2luYCBwcm9wZXJ0eSB0byBzY2hlZHVsZSBhIHRpbWVvdXQgYW5kIG1hbnVhbGx5IHN0YXJ0IHRoZSBhbmltYXRpb24gYWZ0ZXIgdGhlIHRpbWVvdXQuIElmIHlvdSdyZSB1c2luZyBtdWx0aXBsZSBTTUlMIGRlZmluaXRpb24gb2JqZWN0cyBmb3IgYW4gYXR0cmlidXRlIChpbiBhbiBhcnJheSksIGd1aWRlZCBtb2RlIHdpbGwgYmUgZGlzYWJsZWQgZm9yIHRoaXMgYXR0cmlidXRlLCBldmVuIGlmIHlvdSBleHBsaWNpdGx5IGVuYWJsZWQgaXQuXG4gICAqIElmIGd1aWRlZCBtb2RlIGlzIGVuYWJsZWQgdGhlIGZvbGxvd2luZyBiZWhhdmlvciBpcyBhZGRlZDpcbiAgICogLSBCZWZvcmUgdGhlIGFuaW1hdGlvbiBzdGFydHMgKGV2ZW4gd2hlbiBkZWxheWVkIHdpdGggYGJlZ2luYCkgdGhlIGFuaW1hdGVkIGF0dHJpYnV0ZSB3aWxsIGJlIHNldCBhbHJlYWR5IHRvIHRoZSBgZnJvbWAgdmFsdWUgb2YgdGhlIGFuaW1hdGlvblxuICAgKiAtIGBiZWdpbmAgaXMgZXhwbGljaXRseSBzZXQgdG8gYGluZGVmaW5pdGVgIHNvIGl0IGNhbiBiZSBzdGFydGVkIG1hbnVhbGx5IHdpdGhvdXQgcmVseWluZyBvbiBkb2N1bWVudCBiZWdpbiB0aW1lIChjcmVhdGlvbilcbiAgICogLSBUaGUgYW5pbWF0ZSBlbGVtZW50IHdpbGwgYmUgZm9yY2VkIHRvIHVzZSBgZmlsbD1cImZyZWV6ZVwiYFxuICAgKiAtIFRoZSBhbmltYXRpb24gd2lsbCBiZSB0cmlnZ2VyZWQgd2l0aCBgYmVnaW5FbGVtZW50KClgIGluIGEgdGltZW91dCB3aGVyZSBgYmVnaW5gIG9mIHRoZSBkZWZpbml0aW9uIG9iamVjdCBpcyBpbnRlcnByZXRlZCBpbiBtaWxsaSBzZWNvbmRzLiBJZiBubyBgYmVnaW5gIHdhcyBzcGVjaWZpZWQgdGhlIHRpbWVvdXQgaXMgdHJpZ2dlcmVkIGltbWVkaWF0ZWx5LlxuICAgKiAtIEFmdGVyIHRoZSBhbmltYXRpb24gdGhlIGVsZW1lbnQgYXR0cmlidXRlIHZhbHVlIHdpbGwgYmUgc2V0IHRvIHRoZSBgdG9gIHZhbHVlIG9mIHRoZSBhbmltYXRpb25cbiAgICogLSBUaGUgYW5pbWF0ZSBlbGVtZW50IGlzIGRlbGV0ZWQgZnJvbSB0aGUgRE9NXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmdcbiAgICogQHBhcmFtIHtPYmplY3R9IGFuaW1hdGlvbnMgQW4gYW5pbWF0aW9ucyBvYmplY3Qgd2hlcmUgdGhlIHByb3BlcnR5IGtleXMgYXJlIHRoZSBhdHRyaWJ1dGVzIHlvdSdkIGxpa2UgdG8gYW5pbWF0ZS4gVGhlIHByb3BlcnRpZXMgc2hvdWxkIGJlIG9iamVjdHMgYWdhaW4gdGhhdCBjb250YWluIHRoZSBTTUlMIGFuaW1hdGlvbiBhdHRyaWJ1dGVzICh1c3VhbGx5IGJlZ2luLCBkdXIsIGZyb20sIGFuZCB0bykuIFRoZSBwcm9wZXJ0eSBiZWdpbiBhbmQgZHVyIGlzIGF1dG8gY29udmVydGVkIChzZWUgQXV0b21hdGljIHVuaXQgY29udmVyc2lvbikuIFlvdSBjYW4gYWxzbyBzY2hlZHVsZSBtdWx0aXBsZSBhbmltYXRpb25zIGZvciB0aGUgc2FtZSBhdHRyaWJ1dGUgYnkgcGFzc2luZyBhbiBBcnJheSBvZiBTTUlMIGRlZmluaXRpb24gb2JqZWN0cy4gQXR0cmlidXRlcyB0aGF0IGNvbnRhaW4gYW4gYXJyYXkgb2YgU01JTCBkZWZpbml0aW9uIG9iamVjdHMgd2lsbCBub3QgYmUgZXhlY3V0ZWQgaW4gZ3VpZGVkIG1vZGUuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZ3VpZGVkIFNwZWNpZnkgaWYgZ3VpZGVkIG1vZGUgc2hvdWxkIGJlIGFjdGl2YXRlZCBmb3IgdGhpcyBhbmltYXRpb24gKHNlZSBHdWlkZWQgbW9kZSkuIElmIG5vdCBvdGhlcndpc2Ugc3BlY2lmaWVkLCBndWlkZWQgbW9kZSB3aWxsIGJlIGFjdGl2YXRlZC5cbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50RW1pdHRlciBJZiBzcGVjaWZpZWQsIHRoaXMgZXZlbnQgZW1pdHRlciB3aWxsIGJlIG5vdGlmaWVkIHdoZW4gYW4gYW5pbWF0aW9uIHN0YXJ0cyBvciBlbmRzLlxuICAgKiBAcmV0dXJuIHtDaGFydGlzdC5Tdmd9IFRoZSBjdXJyZW50IGVsZW1lbnQgd2hlcmUgdGhlIGFuaW1hdGlvbiB3YXMgYWRkZWRcbiAgICovXG4gIGZ1bmN0aW9uIGFuaW1hdGUoYW5pbWF0aW9ucywgZ3VpZGVkLCBldmVudEVtaXR0ZXIpIHtcbiAgICBpZihndWlkZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZ3VpZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhhbmltYXRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIGNyZWF0ZUFuaW1hdGVGb3JBdHRyaWJ1dGVzKGF0dHJpYnV0ZSkge1xuXG4gICAgICBmdW5jdGlvbiBjcmVhdGVBbmltYXRlKGFuaW1hdGlvbkRlZmluaXRpb24sIGd1aWRlZCkge1xuICAgICAgICB2YXIgYXR0cmlidXRlUHJvcGVydGllcyA9IHt9LFxuICAgICAgICAgIGFuaW1hdGUsXG4gICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICBlYXNpbmc7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYW4gZWFzaW5nIGlzIHNwZWNpZmllZCBpbiB0aGUgZGVmaW5pdGlvbiBvYmplY3QgYW5kIGRlbGV0ZSBpdCBmcm9tIHRoZSBvYmplY3QgYXMgaXQgd2lsbCBub3RcbiAgICAgICAgLy8gYmUgcGFydCBvZiB0aGUgYW5pbWF0ZSBlbGVtZW50IGF0dHJpYnV0ZXMuXG4gICAgICAgIGlmKGFuaW1hdGlvbkRlZmluaXRpb24uZWFzaW5nKSB7XG4gICAgICAgICAgLy8gSWYgYWxyZWFkeSBhbiBlYXNpbmcgQsOpemllciBjdXJ2ZSBhcnJheSB3ZSB0YWtlIGl0IG9yIHdlIGxvb2t1cCBhIGVhc2luZyBhcnJheSBpbiB0aGUgRWFzaW5nIG9iamVjdFxuICAgICAgICAgIGVhc2luZyA9IGFuaW1hdGlvbkRlZmluaXRpb24uZWFzaW5nIGluc3RhbmNlb2YgQXJyYXkgP1xuICAgICAgICAgICAgYW5pbWF0aW9uRGVmaW5pdGlvbi5lYXNpbmcgOlxuICAgICAgICAgICAgQ2hhcnRpc3QuU3ZnLkVhc2luZ1thbmltYXRpb25EZWZpbml0aW9uLmVhc2luZ107XG4gICAgICAgICAgZGVsZXRlIGFuaW1hdGlvbkRlZmluaXRpb24uZWFzaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgbnVtZXJpYyBkdXIgb3IgYmVnaW4gd2FzIHByb3ZpZGVkIHdlIGFzc3VtZSBtaWxsaSBzZWNvbmRzXG4gICAgICAgIGFuaW1hdGlvbkRlZmluaXRpb24uYmVnaW4gPSBDaGFydGlzdC5lbnN1cmVVbml0KGFuaW1hdGlvbkRlZmluaXRpb24uYmVnaW4sICdtcycpO1xuICAgICAgICBhbmltYXRpb25EZWZpbml0aW9uLmR1ciA9IENoYXJ0aXN0LmVuc3VyZVVuaXQoYW5pbWF0aW9uRGVmaW5pdGlvbi5kdXIsICdtcycpO1xuXG4gICAgICAgIGlmKGVhc2luZykge1xuICAgICAgICAgIGFuaW1hdGlvbkRlZmluaXRpb24uY2FsY01vZGUgPSAnc3BsaW5lJztcbiAgICAgICAgICBhbmltYXRpb25EZWZpbml0aW9uLmtleVNwbGluZXMgPSBlYXNpbmcuam9pbignICcpO1xuICAgICAgICAgIGFuaW1hdGlvbkRlZmluaXRpb24ua2V5VGltZXMgPSAnMDsxJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZGluZyBcImZpbGw6IGZyZWV6ZVwiIGlmIHdlIGFyZSBpbiBndWlkZWQgbW9kZSBhbmQgc2V0IGluaXRpYWwgYXR0cmlidXRlIHZhbHVlc1xuICAgICAgICBpZihndWlkZWQpIHtcbiAgICAgICAgICBhbmltYXRpb25EZWZpbml0aW9uLmZpbGwgPSAnZnJlZXplJztcbiAgICAgICAgICAvLyBBbmltYXRlZCBwcm9wZXJ0eSBvbiBvdXIgZWxlbWVudCBzaG91bGQgYWxyZWFkeSBiZSBzZXQgdG8gdGhlIGFuaW1hdGlvbiBmcm9tIHZhbHVlIGluIGd1aWRlZCBtb2RlXG4gICAgICAgICAgYXR0cmlidXRlUHJvcGVydGllc1thdHRyaWJ1dGVdID0gYW5pbWF0aW9uRGVmaW5pdGlvbi5mcm9tO1xuICAgICAgICAgIHRoaXMuYXR0cihhdHRyaWJ1dGVQcm9wZXJ0aWVzKTtcblxuICAgICAgICAgIC8vIEluIGd1aWRlZCBtb2RlIHdlIGFsc28gc2V0IGJlZ2luIHRvIGluZGVmaW5pdGUgc28gd2UgY2FuIHRyaWdnZXIgdGhlIHN0YXJ0IG1hbnVhbGx5IGFuZCBwdXQgdGhlIGJlZ2luXG4gICAgICAgICAgLy8gd2hpY2ggbmVlZHMgdG8gYmUgaW4gbXMgYXNpZGVcbiAgICAgICAgICB0aW1lb3V0ID0gQ2hhcnRpc3QucXVhbnRpdHkoYW5pbWF0aW9uRGVmaW5pdGlvbi5iZWdpbiB8fCAwKS52YWx1ZTtcbiAgICAgICAgICBhbmltYXRpb25EZWZpbml0aW9uLmJlZ2luID0gJ2luZGVmaW5pdGUnO1xuICAgICAgICB9XG5cbiAgICAgICAgYW5pbWF0ZSA9IHRoaXMuZWxlbSgnYW5pbWF0ZScsIENoYXJ0aXN0LmV4dGVuZCh7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogYXR0cmlidXRlXG4gICAgICAgIH0sIGFuaW1hdGlvbkRlZmluaXRpb24pKTtcblxuICAgICAgICBpZihndWlkZWQpIHtcbiAgICAgICAgICAvLyBJZiBndWlkZWQgd2UgdGFrZSB0aGUgdmFsdWUgdGhhdCB3YXMgcHV0IGFzaWRlIGluIHRpbWVvdXQgYW5kIHRyaWdnZXIgdGhlIGFuaW1hdGlvbiBtYW51YWxseSB3aXRoIGEgdGltZW91dFxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBJZiBiZWdpbkVsZW1lbnQgZmFpbHMgd2Ugc2V0IHRoZSBhbmltYXRlZCBhdHRyaWJ1dGUgdG8gdGhlIGVuZCBwb3NpdGlvbiBhbmQgcmVtb3ZlIHRoZSBhbmltYXRlIGVsZW1lbnRcbiAgICAgICAgICAgIC8vIFRoaXMgaGFwcGVucyBpZiB0aGUgU01JTCBFbGVtZW50VGltZUNvbnRyb2wgaW50ZXJmYWNlIGlzIG5vdCBzdXBwb3J0ZWQgb3IgYW55IG90aGVyIHByb2JsZW1zIG9jY3VyZWQgaW5cbiAgICAgICAgICAgIC8vIHRoZSBicm93c2VyLiAoQ3VycmVudGx5IEZGIDM0IGRvZXMgbm90IHN1cHBvcnQgYW5pbWF0ZSBlbGVtZW50cyBpbiBmb3JlaWduT2JqZWN0cylcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGFuaW1hdGUuX25vZGUuYmVnaW5FbGVtZW50KCk7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAvLyBTZXQgYW5pbWF0ZWQgYXR0cmlidXRlIHRvIGN1cnJlbnQgYW5pbWF0ZWQgdmFsdWVcbiAgICAgICAgICAgICAgYXR0cmlidXRlUHJvcGVydGllc1thdHRyaWJ1dGVdID0gYW5pbWF0aW9uRGVmaW5pdGlvbi50bztcbiAgICAgICAgICAgICAgdGhpcy5hdHRyKGF0dHJpYnV0ZVByb3BlcnRpZXMpO1xuICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGFuaW1hdGUgZWxlbWVudCBhcyBpdCdzIG5vIGxvbmdlciByZXF1aXJlZFxuICAgICAgICAgICAgICBhbmltYXRlLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0uYmluZCh0aGlzKSwgdGltZW91dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihldmVudEVtaXR0ZXIpIHtcbiAgICAgICAgICBhbmltYXRlLl9ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2JlZ2luRXZlbnQnLCBmdW5jdGlvbiBoYW5kbGVCZWdpbkV2ZW50KCkge1xuICAgICAgICAgICAgZXZlbnRFbWl0dGVyLmVtaXQoJ2FuaW1hdGlvbkJlZ2luJywge1xuICAgICAgICAgICAgICBlbGVtZW50OiB0aGlzLFxuICAgICAgICAgICAgICBhbmltYXRlOiBhbmltYXRlLl9ub2RlLFxuICAgICAgICAgICAgICBwYXJhbXM6IGFuaW1hdGlvbkRlZmluaXRpb25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBhbmltYXRlLl9ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZEV2ZW50JywgZnVuY3Rpb24gaGFuZGxlRW5kRXZlbnQoKSB7XG4gICAgICAgICAgaWYoZXZlbnRFbWl0dGVyKSB7XG4gICAgICAgICAgICBldmVudEVtaXR0ZXIuZW1pdCgnYW5pbWF0aW9uRW5kJywge1xuICAgICAgICAgICAgICBlbGVtZW50OiB0aGlzLFxuICAgICAgICAgICAgICBhbmltYXRlOiBhbmltYXRlLl9ub2RlLFxuICAgICAgICAgICAgICBwYXJhbXM6IGFuaW1hdGlvbkRlZmluaXRpb25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKGd1aWRlZCkge1xuICAgICAgICAgICAgLy8gU2V0IGFuaW1hdGVkIGF0dHJpYnV0ZSB0byBjdXJyZW50IGFuaW1hdGVkIHZhbHVlXG4gICAgICAgICAgICBhdHRyaWJ1dGVQcm9wZXJ0aWVzW2F0dHJpYnV0ZV0gPSBhbmltYXRpb25EZWZpbml0aW9uLnRvO1xuICAgICAgICAgICAgdGhpcy5hdHRyKGF0dHJpYnV0ZVByb3BlcnRpZXMpO1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBhbmltYXRlIGVsZW1lbnQgYXMgaXQncyBubyBsb25nZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGFuaW1hdGUucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBjdXJyZW50IGF0dHJpYnV0ZSBpcyBhbiBhcnJheSBvZiBkZWZpbml0aW9uIG9iamVjdHMgd2UgY3JlYXRlIGFuIGFuaW1hdGUgZm9yIGVhY2ggYW5kIGRpc2FibGUgZ3VpZGVkIG1vZGVcbiAgICAgIGlmKGFuaW1hdGlvbnNbYXR0cmlidXRlXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGFuaW1hdGlvbnNbYXR0cmlidXRlXS5mb3JFYWNoKGZ1bmN0aW9uKGFuaW1hdGlvbkRlZmluaXRpb24pIHtcbiAgICAgICAgICBjcmVhdGVBbmltYXRlLmJpbmQodGhpcykoYW5pbWF0aW9uRGVmaW5pdGlvbiwgZmFsc2UpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3JlYXRlQW5pbWF0ZS5iaW5kKHRoaXMpKGFuaW1hdGlvbnNbYXR0cmlidXRlXSwgZ3VpZGVkKTtcbiAgICAgIH1cblxuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIENoYXJ0aXN0LlN2ZyA9IENoYXJ0aXN0LkNsYXNzLmV4dGVuZCh7XG4gICAgY29uc3RydWN0b3I6IFN2ZyxcbiAgICBhdHRyOiBhdHRyLFxuICAgIGVsZW06IGVsZW0sXG4gICAgcGFyZW50OiBwYXJlbnQsXG4gICAgcm9vdDogcm9vdCxcbiAgICBxdWVyeVNlbGVjdG9yOiBxdWVyeVNlbGVjdG9yLFxuICAgIHF1ZXJ5U2VsZWN0b3JBbGw6IHF1ZXJ5U2VsZWN0b3JBbGwsXG4gICAgZ2V0Tm9kZTogZ2V0Tm9kZSxcbiAgICBmb3JlaWduT2JqZWN0OiBmb3JlaWduT2JqZWN0LFxuICAgIHRleHQ6IHRleHQsXG4gICAgZW1wdHk6IGVtcHR5LFxuICAgIHJlbW92ZTogcmVtb3ZlLFxuICAgIHJlcGxhY2U6IHJlcGxhY2UsXG4gICAgYXBwZW5kOiBhcHBlbmQsXG4gICAgY2xhc3NlczogY2xhc3NlcyxcbiAgICBhZGRDbGFzczogYWRkQ2xhc3MsXG4gICAgcmVtb3ZlQ2xhc3M6IHJlbW92ZUNsYXNzLFxuICAgIHJlbW92ZUFsbENsYXNzZXM6IHJlbW92ZUFsbENsYXNzZXMsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGFuaW1hdGU6IGFuaW1hdGVcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGNoZWNrcyBmb3Igc3VwcG9ydCBvZiBhIGdpdmVuIFNWRyBmZWF0dXJlIGxpa2UgRXh0ZW5zaWJpbGl0eSwgU1ZHLWFuaW1hdGlvbiBvciB0aGUgbGlrZS4gQ2hlY2sgaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSBmb3IgYSBkZXRhaWxlZCBsaXN0LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuU3ZnXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBmZWF0dXJlIFRoZSBTVkcgMS4xIGZlYXR1cmUgdGhhdCBzaG91bGQgYmUgY2hlY2tlZCBmb3Igc3VwcG9ydC5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gVHJ1ZSBvZiBmYWxzZSBpZiB0aGUgZmVhdHVyZSBpcyBzdXBwb3J0ZWQgb3Igbm90XG4gICAqL1xuICBDaGFydGlzdC5TdmcuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoJ2h0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjJyArIGZlYXR1cmUsICcxLjEnKTtcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyBPYmplY3QgY29udGFpbnMgc29tZSBzdGFuZGFyZCBlYXNpbmcgY3ViaWMgYmV6aWVyIGN1cnZlcy4gVGhlbiBjYW4gYmUgdXNlZCB3aXRoIHRoZWlyIG5hbWUgaW4gdGhlIGBDaGFydGlzdC5TdmcuYW5pbWF0ZWAuIFlvdSBjYW4gYWxzbyBleHRlbmQgdGhlIGxpc3QgYW5kIHVzZSB5b3VyIG93biBuYW1lIGluIHRoZSBgYW5pbWF0ZWAgZnVuY3Rpb24uIENsaWNrIHRoZSBzaG93IGNvZGUgYnV0dG9uIHRvIHNlZSB0aGUgYXZhaWxhYmxlIGJlemllciBmdW5jdGlvbnMuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmdcbiAgICovXG4gIHZhciBlYXNpbmdDdWJpY0JlemllcnMgPSB7XG4gICAgZWFzZUluU2luZTogWzAuNDcsIDAsIDAuNzQ1LCAwLjcxNV0sXG4gICAgZWFzZU91dFNpbmU6IFswLjM5LCAwLjU3NSwgMC41NjUsIDFdLFxuICAgIGVhc2VJbk91dFNpbmU6IFswLjQ0NSwgMC4wNSwgMC41NSwgMC45NV0sXG4gICAgZWFzZUluUXVhZDogWzAuNTUsIDAuMDg1LCAwLjY4LCAwLjUzXSxcbiAgICBlYXNlT3V0UXVhZDogWzAuMjUsIDAuNDYsIDAuNDUsIDAuOTRdLFxuICAgIGVhc2VJbk91dFF1YWQ6IFswLjQ1NSwgMC4wMywgMC41MTUsIDAuOTU1XSxcbiAgICBlYXNlSW5DdWJpYzogWzAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOV0sXG4gICAgZWFzZU91dEN1YmljOiBbMC4yMTUsIDAuNjEsIDAuMzU1LCAxXSxcbiAgICBlYXNlSW5PdXRDdWJpYzogWzAuNjQ1LCAwLjA0NSwgMC4zNTUsIDFdLFxuICAgIGVhc2VJblF1YXJ0OiBbMC44OTUsIDAuMDMsIDAuNjg1LCAwLjIyXSxcbiAgICBlYXNlT3V0UXVhcnQ6IFswLjE2NSwgMC44NCwgMC40NCwgMV0sXG4gICAgZWFzZUluT3V0UXVhcnQ6IFswLjc3LCAwLCAwLjE3NSwgMV0sXG4gICAgZWFzZUluUXVpbnQ6IFswLjc1NSwgMC4wNSwgMC44NTUsIDAuMDZdLFxuICAgIGVhc2VPdXRRdWludDogWzAuMjMsIDEsIDAuMzIsIDFdLFxuICAgIGVhc2VJbk91dFF1aW50OiBbMC44NiwgMCwgMC4wNywgMV0sXG4gICAgZWFzZUluRXhwbzogWzAuOTUsIDAuMDUsIDAuNzk1LCAwLjAzNV0sXG4gICAgZWFzZU91dEV4cG86IFswLjE5LCAxLCAwLjIyLCAxXSxcbiAgICBlYXNlSW5PdXRFeHBvOiBbMSwgMCwgMCwgMV0sXG4gICAgZWFzZUluQ2lyYzogWzAuNiwgMC4wNCwgMC45OCwgMC4zMzVdLFxuICAgIGVhc2VPdXRDaXJjOiBbMC4wNzUsIDAuODIsIDAuMTY1LCAxXSxcbiAgICBlYXNlSW5PdXRDaXJjOiBbMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2XSxcbiAgICBlYXNlSW5CYWNrOiBbMC42LCAtMC4yOCwgMC43MzUsIDAuMDQ1XSxcbiAgICBlYXNlT3V0QmFjazogWzAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzVdLFxuICAgIGVhc2VJbk91dEJhY2s6IFswLjY4LCAtMC41NSwgMC4yNjUsIDEuNTVdXG4gIH07XG5cbiAgQ2hhcnRpc3QuU3ZnLkVhc2luZyA9IGVhc2luZ0N1YmljQmV6aWVycztcblxuICAvKipcbiAgICogVGhpcyBoZWxwZXIgY2xhc3MgaXMgdG8gd3JhcCBtdWx0aXBsZSBgQ2hhcnRpc3QuU3ZnYCBlbGVtZW50cyBpbnRvIGEgbGlzdCB3aGVyZSB5b3UgY2FuIGNhbGwgdGhlIGBDaGFydGlzdC5TdmdgIGZ1bmN0aW9ucyBvbiBhbGwgZWxlbWVudHMgaW4gdGhlIGxpc3Qgd2l0aCBvbmUgY2FsbC4gVGhpcyBpcyBoZWxwZnVsIHdoZW4geW91J2QgbGlrZSB0byBwZXJmb3JtIGNhbGxzIHdpdGggYENoYXJ0aXN0LlN2Z2Agb24gbXVsdGlwbGUgZWxlbWVudHMuXG4gICAqIEFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgaXMgYWxzbyByZXR1cm5lZCBieSBgQ2hhcnRpc3QuU3ZnLnF1ZXJ5U2VsZWN0b3JBbGxgLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuU3ZnXG4gICAqIEBwYXJhbSB7QXJyYXk8Tm9kZT58Tm9kZUxpc3R9IG5vZGVMaXN0IEFuIEFycmF5IG9mIFNWRyBET00gbm9kZXMgb3IgYSBTVkcgRE9NIE5vZGVMaXN0IChhcyByZXR1cm5lZCBieSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKVxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIFN2Z0xpc3Qobm9kZUxpc3QpIHtcbiAgICB2YXIgbGlzdCA9IHRoaXM7XG5cbiAgICB0aGlzLnN2Z0VsZW1lbnRzID0gW107XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IG5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnN2Z0VsZW1lbnRzLnB1c2gobmV3IENoYXJ0aXN0LlN2Zyhub2RlTGlzdFtpXSkpO1xuICAgIH1cblxuICAgIC8vIEFkZCBkZWxlZ2F0aW9uIG1ldGhvZHMgZm9yIENoYXJ0aXN0LlN2Z1xuICAgIE9iamVjdC5rZXlzKENoYXJ0aXN0LlN2Zy5wcm90b3R5cGUpLmZpbHRlcihmdW5jdGlvbihwcm90b3R5cGVQcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuIFsnY29uc3RydWN0b3InLFxuICAgICAgICAgICdwYXJlbnQnLFxuICAgICAgICAgICdxdWVyeVNlbGVjdG9yJyxcbiAgICAgICAgICAncXVlcnlTZWxlY3RvckFsbCcsXG4gICAgICAgICAgJ3JlcGxhY2UnLFxuICAgICAgICAgICdhcHBlbmQnLFxuICAgICAgICAgICdjbGFzc2VzJyxcbiAgICAgICAgICAnaGVpZ2h0JyxcbiAgICAgICAgICAnd2lkdGgnXS5pbmRleE9mKHByb3RvdHlwZVByb3BlcnR5KSA9PT0gLTE7XG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbihwcm90b3R5cGVQcm9wZXJ0eSkge1xuICAgICAgbGlzdFtwcm90b3R5cGVQcm9wZXJ0eV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgICAgICBsaXN0LnN2Z0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgIENoYXJ0aXN0LlN2Zy5wcm90b3R5cGVbcHJvdG90eXBlUHJvcGVydHldLmFwcGx5KGVsZW1lbnQsIGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgQ2hhcnRpc3QuU3ZnLkxpc3QgPSBDaGFydGlzdC5DbGFzcy5leHRlbmQoe1xuICAgIGNvbnN0cnVjdG9yOiBTdmdMaXN0XG4gIH0pO1xufSh3aW5kb3csIGRvY3VtZW50LCBDaGFydGlzdCkpO1xuOy8qKlxuICogQ2hhcnRpc3QgU1ZHIHBhdGggbW9kdWxlIGZvciBTVkcgcGF0aCBkZXNjcmlwdGlvbiBjcmVhdGlvbiBhbmQgbW9kaWZpY2F0aW9uLlxuICpcbiAqIEBtb2R1bGUgQ2hhcnRpc3QuU3ZnLlBhdGhcbiAqL1xuLyogZ2xvYmFsIENoYXJ0aXN0ICovXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgQ2hhcnRpc3QpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBDb250YWlucyB0aGUgZGVzY3JpcHRvcnMgb2Ygc3VwcG9ydGVkIGVsZW1lbnQgdHlwZXMgaW4gYSBTVkcgcGF0aC4gQ3VycmVudGx5IG9ubHkgbW92ZSwgbGluZSBhbmQgY3VydmUgYXJlIHN1cHBvcnRlZC5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LlN2Zy5QYXRoXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICB2YXIgZWxlbWVudERlc2NyaXB0aW9ucyA9IHtcbiAgICBtOiBbJ3gnLCAneSddLFxuICAgIGw6IFsneCcsICd5J10sXG4gICAgYzogWyd4MScsICd5MScsICd4MicsICd5MicsICd4JywgJ3knXSxcbiAgICBhOiBbJ3J4JywgJ3J5JywgJ3hBcicsICdsQWYnLCAnc2YnLCAneCcsICd5J11cbiAgfTtcblxuICAvKipcbiAgICogRGVmYXVsdCBvcHRpb25zIGZvciBuZXdseSBjcmVhdGVkIFNWRyBwYXRoIG9iamVjdHMuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmcuUGF0aFxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIC8vIFRoZSBhY2N1cmFjeSBpbiBkaWdpdCBjb3VudCBhZnRlciB0aGUgZGVjaW1hbCBwb2ludC4gVGhpcyB3aWxsIGJlIHVzZWQgdG8gcm91bmQgbnVtYmVycyBpbiB0aGUgU1ZHIHBhdGguIElmIHRoaXMgb3B0aW9uIGlzIHNldCB0byBmYWxzZSB0aGVuIG5vIHJvdW5kaW5nIHdpbGwgYmUgcGVyZm9ybWVkLlxuICAgIGFjY3VyYWN5OiAzXG4gIH07XG5cbiAgZnVuY3Rpb24gZWxlbWVudChjb21tYW5kLCBwYXJhbXMsIHBhdGhFbGVtZW50cywgcG9zLCByZWxhdGl2ZSwgZGF0YSkge1xuICAgIHZhciBwYXRoRWxlbWVudCA9IENoYXJ0aXN0LmV4dGVuZCh7XG4gICAgICBjb21tYW5kOiByZWxhdGl2ZSA/IGNvbW1hbmQudG9Mb3dlckNhc2UoKSA6IGNvbW1hbmQudG9VcHBlckNhc2UoKVxuICAgIH0sIHBhcmFtcywgZGF0YSA/IHsgZGF0YTogZGF0YSB9IDoge30gKTtcblxuICAgIHBhdGhFbGVtZW50cy5zcGxpY2UocG9zLCAwLCBwYXRoRWxlbWVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JFYWNoUGFyYW0ocGF0aEVsZW1lbnRzLCBjYikge1xuICAgIHBhdGhFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKHBhdGhFbGVtZW50LCBwYXRoRWxlbWVudEluZGV4KSB7XG4gICAgICBlbGVtZW50RGVzY3JpcHRpb25zW3BhdGhFbGVtZW50LmNvbW1hbmQudG9Mb3dlckNhc2UoKV0uZm9yRWFjaChmdW5jdGlvbihwYXJhbU5hbWUsIHBhcmFtSW5kZXgpIHtcbiAgICAgICAgY2IocGF0aEVsZW1lbnQsIHBhcmFtTmFtZSwgcGF0aEVsZW1lbnRJbmRleCwgcGFyYW1JbmRleCwgcGF0aEVsZW1lbnRzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gY29uc3RydWN0IGEgbmV3IHBhdGggb2JqZWN0LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuU3ZnLlBhdGhcbiAgICogQHBhcmFtIHtCb29sZWFufSBjbG9zZSBJZiBzZXQgdG8gdHJ1ZSB0aGVuIHRoaXMgcGF0aCB3aWxsIGJlIGNsb3NlZCB3aGVuIHN0cmluZ2lmaWVkICh3aXRoIGEgWiBhdCB0aGUgZW5kKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIG9iamVjdCB0aGF0IG92ZXJyaWRlcyB0aGUgZGVmYXVsdCBvYmplY3RzLiBTZWUgZGVmYXVsdCBvcHRpb25zIGZvciBtb3JlIGRldGFpbHMuXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgZnVuY3Rpb24gU3ZnUGF0aChjbG9zZSwgb3B0aW9ucykge1xuICAgIHRoaXMucGF0aEVsZW1lbnRzID0gW107XG4gICAgdGhpcy5wb3MgPSAwO1xuICAgIHRoaXMuY2xvc2UgPSBjbG9zZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBDaGFydGlzdC5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIG9yIHNldHMgdGhlIGN1cnJlbnQgcG9zaXRpb24gKGN1cnNvcikgaW5zaWRlIG9mIHRoZSBwYXRoLiBZb3UgY2FuIG1vdmUgYXJvdW5kIHRoZSBjdXJzb3IgZnJlZWx5IGJ1dCBsaW1pdGVkIHRvIDAgb3IgdGhlIGNvdW50IG9mIGV4aXN0aW5nIGVsZW1lbnRzLiBBbGwgbW9kaWZpY2F0aW9ucyB3aXRoIGVsZW1lbnQgZnVuY3Rpb25zIHdpbGwgaW5zZXJ0IG5ldyBlbGVtZW50cyBhdCB0aGUgcG9zaXRpb24gb2YgdGhpcyBjdXJzb3IuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmcuUGF0aFxuICAgKiBAcGFyYW0ge051bWJlcn0gW3Bvc10gSWYgYSBudW1iZXIgaXMgcGFzc2VkIHRoZW4gdGhlIGN1cnNvciBpcyBzZXQgdG8gdGhpcyBwb3NpdGlvbiBpbiB0aGUgcGF0aCBlbGVtZW50IGFycmF5LlxuICAgKiBAcmV0dXJuIHtDaGFydGlzdC5TdmcuUGF0aHxOdW1iZXJ9IElmIHRoZSBwb3NpdGlvbiBwYXJhbWV0ZXIgd2FzIHBhc3NlZCB0aGVuIHRoZSByZXR1cm4gdmFsdWUgd2lsbCBiZSB0aGUgcGF0aCBvYmplY3QgZm9yIGVhc3kgY2FsbCBjaGFpbmluZy4gSWYgbm8gcG9zaXRpb24gcGFyYW1ldGVyIHdhcyBwYXNzZWQgdGhlbiB0aGUgY3VycmVudCBwb3NpdGlvbiBpcyByZXR1cm5lZC5cbiAgICovXG4gIGZ1bmN0aW9uIHBvc2l0aW9uKHBvcykge1xuICAgIGlmKHBvcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnBvcyA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMucGF0aEVsZW1lbnRzLmxlbmd0aCwgcG9zKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucG9zO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGVsZW1lbnRzIGZyb20gdGhlIHBhdGggc3RhcnRpbmcgYXQgdGhlIGN1cnJlbnQgcG9zaXRpb24uXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmcuUGF0aFxuICAgKiBAcGFyYW0ge051bWJlcn0gY291bnQgTnVtYmVyIG9mIHBhdGggZWxlbWVudHMgdGhhdCBzaG91bGQgYmUgcmVtb3ZlZCBmcm9tIHRoZSBjdXJyZW50IHBvc2l0aW9uLlxuICAgKiBAcmV0dXJuIHtDaGFydGlzdC5TdmcuUGF0aH0gVGhlIGN1cnJlbnQgcGF0aCBvYmplY3QgZm9yIGVhc3kgY2FsbCBjaGFpbmluZy5cbiAgICovXG4gIGZ1bmN0aW9uIHJlbW92ZShjb3VudCkge1xuICAgIHRoaXMucGF0aEVsZW1lbnRzLnNwbGljZSh0aGlzLnBvcywgY291bnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZSB0aGlzIGZ1bmN0aW9uIHRvIGFkZCBhIG5ldyBtb3ZlIFNWRyBwYXRoIGVsZW1lbnQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmcuUGF0aFxuICAgKiBAcGFyYW0ge051bWJlcn0geCBUaGUgeCBjb29yZGluYXRlIGZvciB0aGUgbW92ZSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge051bWJlcn0geSBUaGUgeSBjb29yZGluYXRlIGZvciB0aGUgbW92ZSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtyZWxhdGl2ZV0gSWYgc2V0IHRvIHRydWUgdGhlIG1vdmUgZWxlbWVudCB3aWxsIGJlIGNyZWF0ZWQgd2l0aCByZWxhdGl2ZSBjb29yZGluYXRlcyAobG93ZXJjYXNlIGxldHRlcilcbiAgICogQHBhcmFtIHsqfSBbZGF0YV0gQW55IGRhdGEgdGhhdCBzaG91bGQgYmUgc3RvcmVkIHdpdGggdGhlIGVsZW1lbnQgb2JqZWN0IHRoYXQgd2lsbCBiZSBhY2Nlc3NpYmxlIGluIHBhdGhFbGVtZW50XG4gICAqIEByZXR1cm4ge0NoYXJ0aXN0LlN2Zy5QYXRofSBUaGUgY3VycmVudCBwYXRoIG9iamVjdCBmb3IgZWFzeSBjYWxsIGNoYWluaW5nLlxuICAgKi9cbiAgZnVuY3Rpb24gbW92ZSh4LCB5LCByZWxhdGl2ZSwgZGF0YSkge1xuICAgIGVsZW1lbnQoJ00nLCB7XG4gICAgICB4OiAreCxcbiAgICAgIHk6ICt5XG4gICAgfSwgdGhpcy5wYXRoRWxlbWVudHMsIHRoaXMucG9zKyssIHJlbGF0aXZlLCBkYXRhKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdGhpcyBmdW5jdGlvbiB0byBhZGQgYSBuZXcgbGluZSBTVkcgcGF0aCBlbGVtZW50LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuU3ZnLlBhdGhcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHggVGhlIHggY29vcmRpbmF0ZSBmb3IgdGhlIGxpbmUgZWxlbWVudC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkgVGhlIHkgY29vcmRpbmF0ZSBmb3IgdGhlIGxpbmUgZWxlbWVudC5cbiAgICogQHBhcmFtIHtCb29sZWFufSBbcmVsYXRpdmVdIElmIHNldCB0byB0cnVlIHRoZSBsaW5lIGVsZW1lbnQgd2lsbCBiZSBjcmVhdGVkIHdpdGggcmVsYXRpdmUgY29vcmRpbmF0ZXMgKGxvd2VyY2FzZSBsZXR0ZXIpXG4gICAqIEBwYXJhbSB7Kn0gW2RhdGFdIEFueSBkYXRhIHRoYXQgc2hvdWxkIGJlIHN0b3JlZCB3aXRoIHRoZSBlbGVtZW50IG9iamVjdCB0aGF0IHdpbGwgYmUgYWNjZXNzaWJsZSBpbiBwYXRoRWxlbWVudFxuICAgKiBAcmV0dXJuIHtDaGFydGlzdC5TdmcuUGF0aH0gVGhlIGN1cnJlbnQgcGF0aCBvYmplY3QgZm9yIGVhc3kgY2FsbCBjaGFpbmluZy5cbiAgICovXG4gIGZ1bmN0aW9uIGxpbmUoeCwgeSwgcmVsYXRpdmUsIGRhdGEpIHtcbiAgICBlbGVtZW50KCdMJywge1xuICAgICAgeDogK3gsXG4gICAgICB5OiAreVxuICAgIH0sIHRoaXMucGF0aEVsZW1lbnRzLCB0aGlzLnBvcysrLCByZWxhdGl2ZSwgZGF0YSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRoaXMgZnVuY3Rpb24gdG8gYWRkIGEgbmV3IGN1cnZlIFNWRyBwYXRoIGVsZW1lbnQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmcuUGF0aFxuICAgKiBAcGFyYW0ge051bWJlcn0geDEgVGhlIHggY29vcmRpbmF0ZSBmb3IgdGhlIGZpcnN0IGNvbnRyb2wgcG9pbnQgb2YgdGhlIGJlemllciBjdXJ2ZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkxIFRoZSB5IGNvb3JkaW5hdGUgZm9yIHRoZSBmaXJzdCBjb250cm9sIHBvaW50IG9mIHRoZSBiZXppZXIgY3VydmUuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4MiBUaGUgeCBjb29yZGluYXRlIGZvciB0aGUgc2Vjb25kIGNvbnRyb2wgcG9pbnQgb2YgdGhlIGJlemllciBjdXJ2ZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkyIFRoZSB5IGNvb3JkaW5hdGUgZm9yIHRoZSBzZWNvbmQgY29udHJvbCBwb2ludCBvZiB0aGUgYmV6aWVyIGN1cnZlLlxuICAgKiBAcGFyYW0ge051bWJlcn0geCBUaGUgeCBjb29yZGluYXRlIGZvciB0aGUgdGFyZ2V0IHBvaW50IG9mIHRoZSBjdXJ2ZSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge051bWJlcn0geSBUaGUgeSBjb29yZGluYXRlIGZvciB0aGUgdGFyZ2V0IHBvaW50IG9mIHRoZSBjdXJ2ZSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtyZWxhdGl2ZV0gSWYgc2V0IHRvIHRydWUgdGhlIGN1cnZlIGVsZW1lbnQgd2lsbCBiZSBjcmVhdGVkIHdpdGggcmVsYXRpdmUgY29vcmRpbmF0ZXMgKGxvd2VyY2FzZSBsZXR0ZXIpXG4gICAqIEBwYXJhbSB7Kn0gW2RhdGFdIEFueSBkYXRhIHRoYXQgc2hvdWxkIGJlIHN0b3JlZCB3aXRoIHRoZSBlbGVtZW50IG9iamVjdCB0aGF0IHdpbGwgYmUgYWNjZXNzaWJsZSBpbiBwYXRoRWxlbWVudFxuICAgKiBAcmV0dXJuIHtDaGFydGlzdC5TdmcuUGF0aH0gVGhlIGN1cnJlbnQgcGF0aCBvYmplY3QgZm9yIGVhc3kgY2FsbCBjaGFpbmluZy5cbiAgICovXG4gIGZ1bmN0aW9uIGN1cnZlKHgxLCB5MSwgeDIsIHkyLCB4LCB5LCByZWxhdGl2ZSwgZGF0YSkge1xuICAgIGVsZW1lbnQoJ0MnLCB7XG4gICAgICB4MTogK3gxLFxuICAgICAgeTE6ICt5MSxcbiAgICAgIHgyOiAreDIsXG4gICAgICB5MjogK3kyLFxuICAgICAgeDogK3gsXG4gICAgICB5OiAreVxuICAgIH0sIHRoaXMucGF0aEVsZW1lbnRzLCB0aGlzLnBvcysrLCByZWxhdGl2ZSwgZGF0YSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRoaXMgZnVuY3Rpb24gdG8gYWRkIGEgbmV3IG5vbi1iZXppZXIgY3VydmUgU1ZHIHBhdGggZWxlbWVudC5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LlN2Zy5QYXRoXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByeCBUaGUgcmFkaXVzIHRvIGJlIHVzZWQgZm9yIHRoZSB4LWF4aXMgb2YgdGhlIGFyYy5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJ5IFRoZSByYWRpdXMgdG8gYmUgdXNlZCBmb3IgdGhlIHktYXhpcyBvZiB0aGUgYXJjLlxuICAgKiBAcGFyYW0ge051bWJlcn0geEFyIERlZmluZXMgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBhcmNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGxBZiBMYXJnZSBhcmMgZmxhZ1xuICAgKiBAcGFyYW0ge051bWJlcn0gc2YgU3dlZXAgZmxhZ1xuICAgKiBAcGFyYW0ge051bWJlcn0geCBUaGUgeCBjb29yZGluYXRlIGZvciB0aGUgdGFyZ2V0IHBvaW50IG9mIHRoZSBjdXJ2ZSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge051bWJlcn0geSBUaGUgeSBjb29yZGluYXRlIGZvciB0aGUgdGFyZ2V0IHBvaW50IG9mIHRoZSBjdXJ2ZSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtyZWxhdGl2ZV0gSWYgc2V0IHRvIHRydWUgdGhlIGN1cnZlIGVsZW1lbnQgd2lsbCBiZSBjcmVhdGVkIHdpdGggcmVsYXRpdmUgY29vcmRpbmF0ZXMgKGxvd2VyY2FzZSBsZXR0ZXIpXG4gICAqIEBwYXJhbSB7Kn0gW2RhdGFdIEFueSBkYXRhIHRoYXQgc2hvdWxkIGJlIHN0b3JlZCB3aXRoIHRoZSBlbGVtZW50IG9iamVjdCB0aGF0IHdpbGwgYmUgYWNjZXNzaWJsZSBpbiBwYXRoRWxlbWVudFxuICAgKiBAcmV0dXJuIHtDaGFydGlzdC5TdmcuUGF0aH0gVGhlIGN1cnJlbnQgcGF0aCBvYmplY3QgZm9yIGVhc3kgY2FsbCBjaGFpbmluZy5cbiAgICovXG4gIGZ1bmN0aW9uIGFyYyhyeCwgcnksIHhBciwgbEFmLCBzZiwgeCwgeSwgcmVsYXRpdmUsIGRhdGEpIHtcbiAgICBlbGVtZW50KCdBJywge1xuICAgICAgcng6ICtyeCxcbiAgICAgIHJ5OiArcnksXG4gICAgICB4QXI6ICt4QXIsXG4gICAgICBsQWY6ICtsQWYsXG4gICAgICBzZjogK3NmLFxuICAgICAgeDogK3gsXG4gICAgICB5OiAreVxuICAgIH0sIHRoaXMucGF0aEVsZW1lbnRzLCB0aGlzLnBvcysrLCByZWxhdGl2ZSwgZGF0YSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIGFuIFNWRyBwYXRoIHNlZW4gaW4gdGhlIGQgYXR0cmlidXRlIG9mIHBhdGggZWxlbWVudHMsIGFuZCBpbnNlcnRzIHRoZSBwYXJzZWQgZWxlbWVudHMgaW50byB0aGUgZXhpc3RpbmcgcGF0aCBvYmplY3QgYXQgdGhlIGN1cnJlbnQgY3Vyc29yIHBvc2l0aW9uLiBBbnkgY2xvc2luZyBwYXRoIGluZGljYXRvcnMgKFogYXQgdGhlIGVuZCBvZiB0aGUgcGF0aCkgd2lsbCBiZSBpZ25vcmVkIGJ5IHRoZSBwYXJzZXIgYXMgdGhpcyBpcyBwcm92aWRlZCBieSB0aGUgY2xvc2Ugb3B0aW9uIGluIHRoZSBvcHRpb25zIG9mIHRoZSBwYXRoIG9iamVjdC5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LlN2Zy5QYXRoXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIEFueSBTVkcgcGF0aCB0aGF0IGNvbnRhaW5zIG1vdmUgKG0pLCBsaW5lIChsKSBvciBjdXJ2ZSAoYykgY29tcG9uZW50cy5cbiAgICogQHJldHVybiB7Q2hhcnRpc3QuU3ZnLlBhdGh9IFRoZSBjdXJyZW50IHBhdGggb2JqZWN0IGZvciBlYXN5IGNhbGwgY2hhaW5pbmcuXG4gICAqL1xuICBmdW5jdGlvbiBwYXJzZShwYXRoKSB7XG4gICAgLy8gUGFyc2luZyB0aGUgU1ZHIHBhdGggc3RyaW5nIGludG8gYW4gYXJyYXkgb2YgYXJyYXlzIFtbJ00nLCAnMTAnLCAnMTAnXSwgWydMJywgJzEwMCcsICcxMDAnXV1cbiAgICB2YXIgY2h1bmtzID0gcGF0aC5yZXBsYWNlKC8oW0EtWmEtel0pKFswLTldKS9nLCAnJDEgJDInKVxuICAgICAgLnJlcGxhY2UoLyhbMC05XSkoW0EtWmEtel0pL2csICckMSAkMicpXG4gICAgICAuc3BsaXQoL1tcXHMsXSsvKVxuICAgICAgLnJlZHVjZShmdW5jdGlvbihyZXN1bHQsIGVsZW1lbnQpIHtcbiAgICAgICAgaWYoZWxlbWVudC5tYXRjaCgvW0EtWmEtel0vKSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKFtdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0ucHVzaChlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0sIFtdKTtcblxuICAgIC8vIElmIHRoaXMgaXMgYSBjbG9zZWQgcGF0aCB3ZSByZW1vdmUgdGhlIFogYXQgdGhlIGVuZCBiZWNhdXNlIHRoaXMgaXMgZGV0ZXJtaW5lZCBieSB0aGUgY2xvc2Ugb3B0aW9uXG4gICAgaWYoY2h1bmtzW2NodW5rcy5sZW5ndGggLSAxXVswXS50b1VwcGVyQ2FzZSgpID09PSAnWicpIHtcbiAgICAgIGNodW5rcy5wb3AoKTtcbiAgICB9XG5cbiAgICAvLyBVc2luZyBzdmdQYXRoRWxlbWVudERlc2NyaXB0aW9ucyB0byBtYXAgcmF3IHBhdGggYXJyYXlzIGludG8gb2JqZWN0cyB0aGF0IGNvbnRhaW4gdGhlIGNvbW1hbmQgYW5kIHRoZSBwYXJhbWV0ZXJzXG4gICAgLy8gRm9yIGV4YW1wbGUge2NvbW1hbmQ6ICdNJywgeDogJzEwJywgeTogJzEwJ31cbiAgICB2YXIgZWxlbWVudHMgPSBjaHVua3MubWFwKGZ1bmN0aW9uKGNodW5rKSB7XG4gICAgICAgIHZhciBjb21tYW5kID0gY2h1bmsuc2hpZnQoKSxcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IGVsZW1lbnREZXNjcmlwdGlvbnNbY29tbWFuZC50b0xvd2VyQ2FzZSgpXTtcblxuICAgICAgICByZXR1cm4gQ2hhcnRpc3QuZXh0ZW5kKHtcbiAgICAgICAgICBjb21tYW5kOiBjb21tYW5kXG4gICAgICAgIH0sIGRlc2NyaXB0aW9uLnJlZHVjZShmdW5jdGlvbihyZXN1bHQsIHBhcmFtTmFtZSwgaW5kZXgpIHtcbiAgICAgICAgICByZXN1bHRbcGFyYW1OYW1lXSA9ICtjaHVua1tpbmRleF07XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSwge30pKTtcbiAgICAgIH0pO1xuXG4gICAgLy8gUHJlcGFyaW5nIGEgc3BsaWNlIGNhbGwgd2l0aCB0aGUgZWxlbWVudHMgYXJyYXkgYXMgdmFyIGFyZyBwYXJhbXMgYW5kIGluc2VydCB0aGUgcGFyc2VkIGVsZW1lbnRzIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uXG4gICAgdmFyIHNwbGljZUFyZ3MgPSBbdGhpcy5wb3MsIDBdO1xuICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHNwbGljZUFyZ3MsIGVsZW1lbnRzKTtcbiAgICBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KHRoaXMucGF0aEVsZW1lbnRzLCBzcGxpY2VBcmdzKTtcbiAgICAvLyBJbmNyZWFzZSB0aGUgaW50ZXJuYWwgcG9zaXRpb24gYnkgdGhlIGVsZW1lbnQgY291bnRcbiAgICB0aGlzLnBvcyArPSBlbGVtZW50cy5sZW5ndGg7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHJlbmRlcnMgdG8gY3VycmVudCBTVkcgcGF0aCBvYmplY3QgaW50byBhIGZpbmFsIFNWRyBzdHJpbmcgdGhhdCBjYW4gYmUgdXNlZCBpbiB0aGUgZCBhdHRyaWJ1dGUgb2YgU1ZHIHBhdGggZWxlbWVudHMuIEl0IHVzZXMgdGhlIGFjY3VyYWN5IG9wdGlvbiB0byByb3VuZCBiaWcgZGVjaW1hbHMuIElmIHRoZSBjbG9zZSBwYXJhbWV0ZXIgd2FzIHNldCBpbiB0aGUgY29uc3RydWN0b3Igb2YgdGhpcyBwYXRoIG9iamVjdCB0aGVuIGEgcGF0aCBjbG9zaW5nIFogd2lsbCBiZSBhcHBlbmRlZCB0byB0aGUgb3V0cHV0IHN0cmluZy5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LlN2Zy5QYXRoXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIHN0cmluZ2lmeSgpIHtcbiAgICB2YXIgYWNjdXJhY3lNdWx0aXBsaWVyID0gTWF0aC5wb3coMTAsIHRoaXMub3B0aW9ucy5hY2N1cmFjeSk7XG5cbiAgICByZXR1cm4gdGhpcy5wYXRoRWxlbWVudHMucmVkdWNlKGZ1bmN0aW9uKHBhdGgsIHBhdGhFbGVtZW50KSB7XG4gICAgICAgIHZhciBwYXJhbXMgPSBlbGVtZW50RGVzY3JpcHRpb25zW3BhdGhFbGVtZW50LmNvbW1hbmQudG9Mb3dlckNhc2UoKV0ubWFwKGZ1bmN0aW9uKHBhcmFtTmFtZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYWNjdXJhY3kgP1xuICAgICAgICAgICAgKE1hdGgucm91bmQocGF0aEVsZW1lbnRbcGFyYW1OYW1lXSAqIGFjY3VyYWN5TXVsdGlwbGllcikgLyBhY2N1cmFjeU11bHRpcGxpZXIpIDpcbiAgICAgICAgICAgIHBhdGhFbGVtZW50W3BhcmFtTmFtZV07XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgcmV0dXJuIHBhdGggKyBwYXRoRWxlbWVudC5jb21tYW5kICsgcGFyYW1zLmpvaW4oJywnKTtcbiAgICAgIH0uYmluZCh0aGlzKSwgJycpICsgKHRoaXMuY2xvc2UgPyAnWicgOiAnJyk7XG4gIH1cblxuICAvKipcbiAgICogU2NhbGVzIGFsbCBlbGVtZW50cyBpbiB0aGUgY3VycmVudCBTVkcgcGF0aCBvYmplY3QuIFRoZXJlIGlzIGFuIGluZGl2aWR1YWwgcGFyYW1ldGVyIGZvciBlYWNoIGNvb3JkaW5hdGUuIFNjYWxpbmcgd2lsbCBhbHNvIGJlIGRvbmUgZm9yIGNvbnRyb2wgcG9pbnRzIG9mIGN1cnZlcywgYWZmZWN0aW5nIHRoZSBnaXZlbiBjb29yZGluYXRlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuU3ZnLlBhdGhcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHggVGhlIG51bWJlciB3aGljaCB3aWxsIGJlIHVzZWQgdG8gc2NhbGUgdGhlIHgsIHgxIGFuZCB4MiBvZiBhbGwgcGF0aCBlbGVtZW50cy5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkgVGhlIG51bWJlciB3aGljaCB3aWxsIGJlIHVzZWQgdG8gc2NhbGUgdGhlIHksIHkxIGFuZCB5MiBvZiBhbGwgcGF0aCBlbGVtZW50cy5cbiAgICogQHJldHVybiB7Q2hhcnRpc3QuU3ZnLlBhdGh9IFRoZSBjdXJyZW50IHBhdGggb2JqZWN0IGZvciBlYXN5IGNhbGwgY2hhaW5pbmcuXG4gICAqL1xuICBmdW5jdGlvbiBzY2FsZSh4LCB5KSB7XG4gICAgZm9yRWFjaFBhcmFtKHRoaXMucGF0aEVsZW1lbnRzLCBmdW5jdGlvbihwYXRoRWxlbWVudCwgcGFyYW1OYW1lKSB7XG4gICAgICBwYXRoRWxlbWVudFtwYXJhbU5hbWVdICo9IHBhcmFtTmFtZVswXSA9PT0gJ3gnID8geCA6IHk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNsYXRlcyBhbGwgZWxlbWVudHMgaW4gdGhlIGN1cnJlbnQgU1ZHIHBhdGggb2JqZWN0LiBUaGUgdHJhbnNsYXRpb24gaXMgcmVsYXRpdmUgYW5kIHRoZXJlIGlzIGFuIGluZGl2aWR1YWwgcGFyYW1ldGVyIGZvciBlYWNoIGNvb3JkaW5hdGUuIFRyYW5zbGF0aW9uIHdpbGwgYWxzbyBiZSBkb25lIGZvciBjb250cm9sIHBvaW50cyBvZiBjdXJ2ZXMsIGFmZmVjdGluZyB0aGUgZ2l2ZW4gY29vcmRpbmF0ZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LlN2Zy5QYXRoXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IFRoZSBudW1iZXIgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIHRyYW5zbGF0ZSB0aGUgeCwgeDEgYW5kIHgyIG9mIGFsbCBwYXRoIGVsZW1lbnRzLlxuICAgKiBAcGFyYW0ge051bWJlcn0geSBUaGUgbnVtYmVyIHdoaWNoIHdpbGwgYmUgdXNlZCB0byB0cmFuc2xhdGUgdGhlIHksIHkxIGFuZCB5MiBvZiBhbGwgcGF0aCBlbGVtZW50cy5cbiAgICogQHJldHVybiB7Q2hhcnRpc3QuU3ZnLlBhdGh9IFRoZSBjdXJyZW50IHBhdGggb2JqZWN0IGZvciBlYXN5IGNhbGwgY2hhaW5pbmcuXG4gICAqL1xuICBmdW5jdGlvbiB0cmFuc2xhdGUoeCwgeSkge1xuICAgIGZvckVhY2hQYXJhbSh0aGlzLnBhdGhFbGVtZW50cywgZnVuY3Rpb24ocGF0aEVsZW1lbnQsIHBhcmFtTmFtZSkge1xuICAgICAgcGF0aEVsZW1lbnRbcGFyYW1OYW1lXSArPSBwYXJhbU5hbWVbMF0gPT09ICd4JyA/IHggOiB5O1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gd2lsbCBydW4gb3ZlciBhbGwgZXhpc3RpbmcgcGF0aCBlbGVtZW50cyBhbmQgdGhlbiBsb29wIG92ZXIgdGhlaXIgYXR0cmlidXRlcy4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGZvciBldmVyeSBwYXRoIGVsZW1lbnQgYXR0cmlidXRlIHRoYXQgZXhpc3RzIGluIHRoZSBjdXJyZW50IHBhdGguXG4gICAqIFRoZSBtZXRob2Qgc2lnbmF0dXJlIG9mIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBsb29rcyBsaWtlIHRoaXM6XG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogZnVuY3Rpb24ocGF0aEVsZW1lbnQsIHBhcmFtTmFtZSwgcGF0aEVsZW1lbnRJbmRleCwgcGFyYW1JbmRleCwgcGF0aEVsZW1lbnRzKVxuICAgKiBgYGBcbiAgICogSWYgc29tZXRoaW5nIGVsc2UgdGhhbiB1bmRlZmluZWQgaXMgcmV0dXJuZWQgYnkgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLCB0aGlzIHZhbHVlIHdpbGwgYmUgdXNlZCB0byByZXBsYWNlIHRoZSBvbGQgdmFsdWUuIFRoaXMgYWxsb3dzIHlvdSB0byBidWlsZCBjdXN0b20gdHJhbnNmb3JtYXRpb25zIG9mIHBhdGggb2JqZWN0cyB0aGF0IGNhbid0IGJlIGFjaGlldmVkIHVzaW5nIHRoZSBiYXNpYyB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbnMgc2NhbGUgYW5kIHRyYW5zbGF0ZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LlN2Zy5QYXRoXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybUZuYyBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIHRoZSB0cmFuc2Zvcm1hdGlvbi4gQ2hlY2sgdGhlIHNpZ25hdHVyZSBpbiB0aGUgZnVuY3Rpb24gZGVzY3JpcHRpb24uXG4gICAqIEByZXR1cm4ge0NoYXJ0aXN0LlN2Zy5QYXRofSBUaGUgY3VycmVudCBwYXRoIG9iamVjdCBmb3IgZWFzeSBjYWxsIGNoYWluaW5nLlxuICAgKi9cbiAgZnVuY3Rpb24gdHJhbnNmb3JtKHRyYW5zZm9ybUZuYykge1xuICAgIGZvckVhY2hQYXJhbSh0aGlzLnBhdGhFbGVtZW50cywgZnVuY3Rpb24ocGF0aEVsZW1lbnQsIHBhcmFtTmFtZSwgcGF0aEVsZW1lbnRJbmRleCwgcGFyYW1JbmRleCwgcGF0aEVsZW1lbnRzKSB7XG4gICAgICB2YXIgdHJhbnNmb3JtZWQgPSB0cmFuc2Zvcm1GbmMocGF0aEVsZW1lbnQsIHBhcmFtTmFtZSwgcGF0aEVsZW1lbnRJbmRleCwgcGFyYW1JbmRleCwgcGF0aEVsZW1lbnRzKTtcbiAgICAgIGlmKHRyYW5zZm9ybWVkIHx8IHRyYW5zZm9ybWVkID09PSAwKSB7XG4gICAgICAgIHBhdGhFbGVtZW50W3BhcmFtTmFtZV0gPSB0cmFuc2Zvcm1lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGNsb25lcyBhIHdob2xlIHBhdGggb2JqZWN0IHdpdGggYWxsIGl0cyBwcm9wZXJ0aWVzLiBUaGlzIGlzIGEgZGVlcCBjbG9uZSBhbmQgcGF0aCBlbGVtZW50IG9iamVjdHMgd2lsbCBhbHNvIGJlIGNsb25lZC5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LlN2Zy5QYXRoXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2Nsb3NlXSBPcHRpb25hbCBvcHRpb24gdG8gc2V0IHRoZSBuZXcgY2xvbmVkIHBhdGggdG8gY2xvc2VkLiBJZiBub3Qgc3BlY2lmaWVkIG9yIGZhbHNlLCB0aGUgb3JpZ2luYWwgcGF0aCBjbG9zZSBvcHRpb24gd2lsbCBiZSB1c2VkLlxuICAgKiBAcmV0dXJuIHtDaGFydGlzdC5TdmcuUGF0aH1cbiAgICovXG4gIGZ1bmN0aW9uIGNsb25lKGNsb3NlKSB7XG4gICAgdmFyIGMgPSBuZXcgQ2hhcnRpc3QuU3ZnLlBhdGgoY2xvc2UgfHwgdGhpcy5jbG9zZSk7XG4gICAgYy5wb3MgPSB0aGlzLnBvcztcbiAgICBjLnBhdGhFbGVtZW50cyA9IHRoaXMucGF0aEVsZW1lbnRzLnNsaWNlKCkubWFwKGZ1bmN0aW9uIGNsb25lRWxlbWVudHMocGF0aEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBDaGFydGlzdC5leHRlbmQoe30sIHBhdGhFbGVtZW50KTtcbiAgICB9KTtcbiAgICBjLm9wdGlvbnMgPSBDaGFydGlzdC5leHRlbmQoe30sIHRoaXMub3B0aW9ucyk7XG4gICAgcmV0dXJuIGM7XG4gIH1cblxuICAvKipcbiAgICogU3BsaXQgYSBTdmcuUGF0aCBvYmplY3QgYnkgYSBzcGVjaWZpYyBjb21tYW5kIGluIHRoZSBwYXRoIGNoYWluLiBUaGUgcGF0aCBjaGFpbiB3aWxsIGJlIHNwbGl0IGFuZCBhbiBhcnJheSBvZiBuZXdseSBjcmVhdGVkIHBhdGhzIG9iamVjdHMgd2lsbCBiZSByZXR1cm5lZC4gVGhpcyBpcyB1c2VmdWwgaWYgeW91J2QgbGlrZSB0byBzcGxpdCBhbiBTVkcgcGF0aCBieSBpdCdzIG1vdmUgY29tbWFuZHMsIGZvciBleGFtcGxlLCBpbiBvcmRlciB0byBpc29sYXRlIGNodW5rcyBvZiBkcmF3aW5ncy5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LlN2Zy5QYXRoXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb21tYW5kIFRoZSBjb21tYW5kIHlvdSdkIGxpa2UgdG8gdXNlIHRvIHNwbGl0IHRoZSBwYXRoXG4gICAqIEByZXR1cm4ge0FycmF5PENoYXJ0aXN0LlN2Zy5QYXRoPn1cbiAgICovXG4gIGZ1bmN0aW9uIHNwbGl0QnlDb21tYW5kKGNvbW1hbmQpIHtcbiAgICB2YXIgc3BsaXQgPSBbXG4gICAgICBuZXcgQ2hhcnRpc3QuU3ZnLlBhdGgoKVxuICAgIF07XG5cbiAgICB0aGlzLnBhdGhFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKHBhdGhFbGVtZW50KSB7XG4gICAgICBpZihwYXRoRWxlbWVudC5jb21tYW5kID09PSBjb21tYW5kLnRvVXBwZXJDYXNlKCkgJiYgc3BsaXRbc3BsaXQubGVuZ3RoIC0gMV0ucGF0aEVsZW1lbnRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBzcGxpdC5wdXNoKG5ldyBDaGFydGlzdC5TdmcuUGF0aCgpKTtcbiAgICAgIH1cblxuICAgICAgc3BsaXRbc3BsaXQubGVuZ3RoIC0gMV0ucGF0aEVsZW1lbnRzLnB1c2gocGF0aEVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNwbGl0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgc3RhdGljIGZ1bmN0aW9uIG9uIGBDaGFydGlzdC5TdmcuUGF0aGAgaXMgam9pbmluZyBtdWx0aXBsZSBwYXRocyB0b2dldGhlciBpbnRvIG9uZSBwYXRocy5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LlN2Zy5QYXRoXG4gICAqIEBwYXJhbSB7QXJyYXk8Q2hhcnRpc3QuU3ZnLlBhdGg+fSBwYXRocyBBIGxpc3Qgb2YgcGF0aHMgdG8gYmUgam9pbmVkIHRvZ2V0aGVyLiBUaGUgb3JkZXIgaXMgaW1wb3J0YW50LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNsb3NlIElmIHRoZSBuZXdseSBjcmVhdGVkIHBhdGggc2hvdWxkIGJlIGEgY2xvc2VkIHBhdGhcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgUGF0aCBvcHRpb25zIGZvciB0aGUgbmV3bHkgY3JlYXRlZCBwYXRoLlxuICAgKiBAcmV0dXJuIHtDaGFydGlzdC5TdmcuUGF0aH1cbiAgICovXG5cbiAgZnVuY3Rpb24gam9pbihwYXRocywgY2xvc2UsIG9wdGlvbnMpIHtcbiAgICB2YXIgam9pbmVkUGF0aCA9IG5ldyBDaGFydGlzdC5TdmcuUGF0aChjbG9zZSwgb3B0aW9ucyk7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcGF0aCA9IHBhdGhzW2ldO1xuICAgICAgZm9yKHZhciBqID0gMDsgaiA8IHBhdGgucGF0aEVsZW1lbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGpvaW5lZFBhdGgucGF0aEVsZW1lbnRzLnB1c2gocGF0aC5wYXRoRWxlbWVudHNbal0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gam9pbmVkUGF0aDtcbiAgfVxuXG4gIENoYXJ0aXN0LlN2Zy5QYXRoID0gQ2hhcnRpc3QuQ2xhc3MuZXh0ZW5kKHtcbiAgICBjb25zdHJ1Y3RvcjogU3ZnUGF0aCxcbiAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgcmVtb3ZlOiByZW1vdmUsXG4gICAgbW92ZTogbW92ZSxcbiAgICBsaW5lOiBsaW5lLFxuICAgIGN1cnZlOiBjdXJ2ZSxcbiAgICBhcmM6IGFyYyxcbiAgICBzY2FsZTogc2NhbGUsXG4gICAgdHJhbnNsYXRlOiB0cmFuc2xhdGUsXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgcGFyc2U6IHBhcnNlLFxuICAgIHN0cmluZ2lmeTogc3RyaW5naWZ5LFxuICAgIGNsb25lOiBjbG9uZSxcbiAgICBzcGxpdEJ5Q29tbWFuZDogc3BsaXRCeUNvbW1hbmRcbiAgfSk7XG5cbiAgQ2hhcnRpc3QuU3ZnLlBhdGguZWxlbWVudERlc2NyaXB0aW9ucyA9IGVsZW1lbnREZXNjcmlwdGlvbnM7XG4gIENoYXJ0aXN0LlN2Zy5QYXRoLmpvaW4gPSBqb2luO1xufSh3aW5kb3csIGRvY3VtZW50LCBDaGFydGlzdCkpO1xuOy8qIGdsb2JhbCBDaGFydGlzdCAqL1xuKGZ1bmN0aW9uICh3aW5kb3csIGRvY3VtZW50LCBDaGFydGlzdCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGF4aXNVbml0cyA9IHtcbiAgICB4OiB7XG4gICAgICBwb3M6ICd4JyxcbiAgICAgIGxlbjogJ3dpZHRoJyxcbiAgICAgIGRpcjogJ2hvcml6b250YWwnLFxuICAgICAgcmVjdFN0YXJ0OiAneDEnLFxuICAgICAgcmVjdEVuZDogJ3gyJyxcbiAgICAgIHJlY3RPZmZzZXQ6ICd5MidcbiAgICB9LFxuICAgIHk6IHtcbiAgICAgIHBvczogJ3knLFxuICAgICAgbGVuOiAnaGVpZ2h0JyxcbiAgICAgIGRpcjogJ3ZlcnRpY2FsJyxcbiAgICAgIHJlY3RTdGFydDogJ3kyJyxcbiAgICAgIHJlY3RFbmQ6ICd5MScsXG4gICAgICByZWN0T2Zmc2V0OiAneDEnXG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIEF4aXModW5pdHMsIGNoYXJ0UmVjdCwgdGlja3MsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnVuaXRzID0gdW5pdHM7XG4gICAgdGhpcy5jb3VudGVyVW5pdHMgPSB1bml0cyA9PT0gYXhpc1VuaXRzLnggPyBheGlzVW5pdHMueSA6IGF4aXNVbml0cy54O1xuICAgIHRoaXMuY2hhcnRSZWN0ID0gY2hhcnRSZWN0O1xuICAgIHRoaXMuYXhpc0xlbmd0aCA9IGNoYXJ0UmVjdFt1bml0cy5yZWN0RW5kXSAtIGNoYXJ0UmVjdFt1bml0cy5yZWN0U3RhcnRdO1xuICAgIHRoaXMuZ3JpZE9mZnNldCA9IGNoYXJ0UmVjdFt1bml0cy5yZWN0T2Zmc2V0XTtcbiAgICB0aGlzLnRpY2tzID0gdGlja3M7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUdyaWRBbmRMYWJlbHMoZ3JpZEdyb3VwLCBsYWJlbEdyb3VwLCB1c2VGb3JlaWduT2JqZWN0LCBjaGFydE9wdGlvbnMsIGV2ZW50RW1pdHRlcikge1xuICAgIHZhciBheGlzT3B0aW9ucyA9IGNoYXJ0T3B0aW9uc1snYXhpcycgKyB0aGlzLnVuaXRzLnBvcy50b1VwcGVyQ2FzZSgpXTtcbiAgICB2YXIgcHJvamVjdGVkVmFsdWVzID0gdGhpcy50aWNrcy5tYXAodGhpcy5wcm9qZWN0VmFsdWUuYmluZCh0aGlzKSk7XG4gICAgdmFyIGxhYmVsVmFsdWVzID0gdGhpcy50aWNrcy5tYXAoYXhpc09wdGlvbnMubGFiZWxJbnRlcnBvbGF0aW9uRm5jKTtcblxuICAgIHByb2plY3RlZFZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uKHByb2plY3RlZFZhbHVlLCBpbmRleCkge1xuICAgICAgdmFyIGxhYmVsT2Zmc2V0ID0ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwXG4gICAgICB9O1xuXG4gICAgICAvLyBUT0RPOiBGaW5kIGJldHRlciBzb2x1dGlvbiBmb3Igc29sdmluZyB0aGlzIHByb2JsZW1cbiAgICAgIC8vIENhbGN1bGF0ZSBob3cgbXVjaCBzcGFjZSB3ZSBoYXZlIGF2YWlsYWJsZSBmb3IgdGhlIGxhYmVsXG4gICAgICB2YXIgbGFiZWxMZW5ndGg7XG4gICAgICBpZihwcm9qZWN0ZWRWYWx1ZXNbaW5kZXggKyAxXSkge1xuICAgICAgICAvLyBJZiB3ZSBzdGlsbCBoYXZlIG9uZSBsYWJlbCBhaGVhZCwgd2UgY2FuIGNhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgdG8gdGhlIG5leHQgdGljayAvIGxhYmVsXG4gICAgICAgIGxhYmVsTGVuZ3RoID0gcHJvamVjdGVkVmFsdWVzW2luZGV4ICsgMV0gLSBwcm9qZWN0ZWRWYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSBsYWJlbCBhaGVhZCBhbmQgd2UgaGF2ZSBvbmx5IHR3byBsYWJlbHMgaW4gdG90YWwsIHdlIGp1c3QgdGFrZSB0aGUgcmVtYWluaW5nIGRpc3RhbmNlIHRvXG4gICAgICAgIC8vIG9uIHRoZSB3aG9sZSBheGlzIGxlbmd0aC4gV2UgbGltaXQgdGhhdCB0byBhIG1pbmltdW0gb2YgMzAgcGl4ZWwsIHNvIHRoYXQgbGFiZWxzIGNsb3NlIHRvIHRoZSBib3JkZXIgd2lsbFxuICAgICAgICAvLyBzdGlsbCBiZSB2aXNpYmxlIGluc2lkZSBvZiB0aGUgY2hhcnQgcGFkZGluZy5cbiAgICAgICAgbGFiZWxMZW5ndGggPSBNYXRoLm1heCh0aGlzLmF4aXNMZW5ndGggLSBwcm9qZWN0ZWRWYWx1ZSwgMzApO1xuICAgICAgfVxuXG4gICAgICAvLyBTa2lwIGdyaWQgbGluZXMgYW5kIGxhYmVscyB3aGVyZSBpbnRlcnBvbGF0ZWQgbGFiZWwgdmFsdWVzIGFyZSBmYWxzZXkgKGV4ZWNwdCBmb3IgMClcbiAgICAgIGlmKENoYXJ0aXN0LmlzRmFsc2V5QnV0WmVybyhsYWJlbFZhbHVlc1tpbmRleF0pICYmIGxhYmVsVmFsdWVzW2luZGV4XSAhPT0gJycpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUcmFuc2Zvcm0gdG8gZ2xvYmFsIGNvb3JkaW5hdGVzIHVzaW5nIHRoZSBjaGFydFJlY3RcbiAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIGxhYmVsIG9mZnNldCBmb3IgdGhlIGNyZWF0ZUxhYmVsIGZ1bmN0aW9uXG4gICAgICBpZih0aGlzLnVuaXRzLnBvcyA9PT0gJ3gnKSB7XG4gICAgICAgIHByb2plY3RlZFZhbHVlID0gdGhpcy5jaGFydFJlY3QueDEgKyBwcm9qZWN0ZWRWYWx1ZTtcbiAgICAgICAgbGFiZWxPZmZzZXQueCA9IGNoYXJ0T3B0aW9ucy5heGlzWC5sYWJlbE9mZnNldC54O1xuXG4gICAgICAgIC8vIElmIHRoZSBsYWJlbHMgc2hvdWxkIGJlIHBvc2l0aW9uZWQgaW4gc3RhcnQgcG9zaXRpb24gKHRvcCBzaWRlIGZvciB2ZXJ0aWNhbCBheGlzKSB3ZSBuZWVkIHRvIHNldCBhXG4gICAgICAgIC8vIGRpZmZlcmVudCBvZmZzZXQgYXMgZm9yIHBvc2l0aW9uZWQgd2l0aCBlbmQgKGJvdHRvbSlcbiAgICAgICAgaWYoY2hhcnRPcHRpb25zLmF4aXNYLnBvc2l0aW9uID09PSAnc3RhcnQnKSB7XG4gICAgICAgICAgbGFiZWxPZmZzZXQueSA9IHRoaXMuY2hhcnRSZWN0LnBhZGRpbmcudG9wICsgY2hhcnRPcHRpb25zLmF4aXNYLmxhYmVsT2Zmc2V0LnkgKyAodXNlRm9yZWlnbk9iamVjdCA/IDUgOiAyMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFiZWxPZmZzZXQueSA9IHRoaXMuY2hhcnRSZWN0LnkxICsgY2hhcnRPcHRpb25zLmF4aXNYLmxhYmVsT2Zmc2V0LnkgKyAodXNlRm9yZWlnbk9iamVjdCA/IDUgOiAyMCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RlZFZhbHVlID0gdGhpcy5jaGFydFJlY3QueTEgLSBwcm9qZWN0ZWRWYWx1ZTtcbiAgICAgICAgbGFiZWxPZmZzZXQueSA9IGNoYXJ0T3B0aW9ucy5heGlzWS5sYWJlbE9mZnNldC55IC0gKHVzZUZvcmVpZ25PYmplY3QgPyBsYWJlbExlbmd0aCA6IDApO1xuXG4gICAgICAgIC8vIElmIHRoZSBsYWJlbHMgc2hvdWxkIGJlIHBvc2l0aW9uZWQgaW4gc3RhcnQgcG9zaXRpb24gKGxlZnQgc2lkZSBmb3IgaG9yaXpvbnRhbCBheGlzKSB3ZSBuZWVkIHRvIHNldCBhXG4gICAgICAgIC8vIGRpZmZlcmVudCBvZmZzZXQgYXMgZm9yIHBvc2l0aW9uZWQgd2l0aCBlbmQgKHJpZ2h0IHNpZGUpXG4gICAgICAgIGlmKGNoYXJ0T3B0aW9ucy5heGlzWS5wb3NpdGlvbiA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICAgIGxhYmVsT2Zmc2V0LnggPSB1c2VGb3JlaWduT2JqZWN0ID8gdGhpcy5jaGFydFJlY3QucGFkZGluZy5sZWZ0ICsgY2hhcnRPcHRpb25zLmF4aXNZLmxhYmVsT2Zmc2V0LnggOiB0aGlzLmNoYXJ0UmVjdC54MSAtIDEwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhYmVsT2Zmc2V0LnggPSB0aGlzLmNoYXJ0UmVjdC54MiArIGNoYXJ0T3B0aW9ucy5heGlzWS5sYWJlbE9mZnNldC54ICsgMTA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoYXhpc09wdGlvbnMuc2hvd0dyaWQpIHtcbiAgICAgICAgQ2hhcnRpc3QuY3JlYXRlR3JpZChwcm9qZWN0ZWRWYWx1ZSwgaW5kZXgsIHRoaXMsIHRoaXMuZ3JpZE9mZnNldCwgdGhpcy5jaGFydFJlY3RbdGhpcy5jb3VudGVyVW5pdHMubGVuXSgpLCBncmlkR3JvdXAsIFtcbiAgICAgICAgICBjaGFydE9wdGlvbnMuY2xhc3NOYW1lcy5ncmlkLFxuICAgICAgICAgIGNoYXJ0T3B0aW9ucy5jbGFzc05hbWVzW3RoaXMudW5pdHMuZGlyXVxuICAgICAgICBdLCBldmVudEVtaXR0ZXIpO1xuICAgICAgfVxuXG4gICAgICBpZihheGlzT3B0aW9ucy5zaG93TGFiZWwpIHtcbiAgICAgICAgQ2hhcnRpc3QuY3JlYXRlTGFiZWwocHJvamVjdGVkVmFsdWUsIGxhYmVsTGVuZ3RoLCBpbmRleCwgbGFiZWxWYWx1ZXMsIHRoaXMsIGF4aXNPcHRpb25zLm9mZnNldCwgbGFiZWxPZmZzZXQsIGxhYmVsR3JvdXAsIFtcbiAgICAgICAgICBjaGFydE9wdGlvbnMuY2xhc3NOYW1lcy5sYWJlbCxcbiAgICAgICAgICBjaGFydE9wdGlvbnMuY2xhc3NOYW1lc1t0aGlzLnVuaXRzLmRpcl0sXG4gICAgICAgICAgKGF4aXNPcHRpb25zLnBvc2l0aW9uID09PSAnc3RhcnQnID8gY2hhcnRPcHRpb25zLmNsYXNzTmFtZXNbYXhpc09wdGlvbnMucG9zaXRpb25dIDogY2hhcnRPcHRpb25zLmNsYXNzTmFtZXNbJ2VuZCddKVxuICAgICAgICBdLCB1c2VGb3JlaWduT2JqZWN0LCBldmVudEVtaXR0ZXIpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBDaGFydGlzdC5BeGlzID0gQ2hhcnRpc3QuQ2xhc3MuZXh0ZW5kKHtcbiAgICBjb25zdHJ1Y3RvcjogQXhpcyxcbiAgICBjcmVhdGVHcmlkQW5kTGFiZWxzOiBjcmVhdGVHcmlkQW5kTGFiZWxzLFxuICAgIHByb2plY3RWYWx1ZTogZnVuY3Rpb24odmFsdWUsIGluZGV4LCBkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jhc2UgYXhpcyBjYW5cXCd0IGJlIGluc3RhbnRpYXRlZCEnKTtcbiAgICB9XG4gIH0pO1xuXG4gIENoYXJ0aXN0LkF4aXMudW5pdHMgPSBheGlzVW5pdHM7XG5cbn0od2luZG93LCBkb2N1bWVudCwgQ2hhcnRpc3QpKTtcbjsvKipcbiAqIFRoZSBhdXRvIHNjYWxlIGF4aXMgdXNlcyBzdGFuZGFyZCBsaW5lYXIgc2NhbGUgcHJvamVjdGlvbiBvZiB2YWx1ZXMgYWxvbmcgYW4gYXhpcy4gSXQgdXNlcyBvcmRlciBvZiBtYWduaXR1ZGUgdG8gZmluZCBhIHNjYWxlIGF1dG9tYXRpY2FsbHkgYW5kIGV2YWx1YXRlcyB0aGUgYXZhaWxhYmxlIHNwYWNlIGluIG9yZGVyIHRvIGZpbmQgdGhlIHBlcmZlY3QgYW1vdW50IG9mIHRpY2tzIGZvciB5b3VyIGNoYXJ0LlxuICogKipPcHRpb25zKipcbiAqIFRoZSBmb2xsb3dpbmcgb3B0aW9ucyBhcmUgdXNlZCBieSB0aGlzIGF4aXMgaW4gYWRkaXRpb24gdG8gdGhlIGRlZmF1bHQgYXhpcyBvcHRpb25zIG91dGxpbmVkIGluIHRoZSBheGlzIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGNoYXJ0IGRlZmF1bHQgc2V0dGluZ3MuXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiB2YXIgb3B0aW9ucyA9IHtcbiAqICAgLy8gSWYgaGlnaCBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgYXhpcyB3aWxsIGRpc3BsYXkgdmFsdWVzIGV4cGxpY2l0bHkgdXAgdG8gdGhpcyB2YWx1ZSBhbmQgdGhlIGNvbXB1dGVkIG1heGltdW0gZnJvbSB0aGUgZGF0YSBpcyBpZ25vcmVkXG4gKiAgIGhpZ2g6IDEwMCxcbiAqICAgLy8gSWYgbG93IGlzIHNwZWNpZmllZCB0aGVuIHRoZSBheGlzIHdpbGwgZGlzcGxheSB2YWx1ZXMgZXhwbGljaXRseSBkb3duIHRvIHRoaXMgdmFsdWUgYW5kIHRoZSBjb21wdXRlZCBtaW5pbXVtIGZyb20gdGhlIGRhdGEgaXMgaWdub3JlZFxuICogICBsb3c6IDAsXG4gKiAgIC8vIFRoaXMgb3B0aW9uIHdpbGwgYmUgdXNlZCB3aGVuIGZpbmRpbmcgdGhlIHJpZ2h0IHNjYWxlIGRpdmlzaW9uIHNldHRpbmdzLiBUaGUgYW1vdW50IG9mIHRpY2tzIG9uIHRoZSBzY2FsZSB3aWxsIGJlIGRldGVybWluZWQgc28gdGhhdCBhcyBtYW55IHRpY2tzIGFzIHBvc3NpYmxlIHdpbGwgYmUgZGlzcGxheWVkLCB3aGlsZSBub3QgdmlvbGF0aW5nIHRoaXMgbWluaW11bSByZXF1aXJlZCBzcGFjZSAoaW4gcGl4ZWwpLlxuICogICBzY2FsZU1pblNwYWNlOiAyMCxcbiAqICAgLy8gQ2FuIGJlIHNldCB0byB0cnVlIG9yIGZhbHNlLiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHNjYWxlIHdpbGwgYmUgZ2VuZXJhdGVkIHdpdGggd2hvbGUgbnVtYmVycyBvbmx5LlxuICogICBvbmx5SW50ZWdlcjogdHJ1ZSxcbiAqICAgLy8gVGhlIHJlZmVyZW5jZSB2YWx1ZSBjYW4gYmUgdXNlZCB0byBtYWtlIHN1cmUgdGhhdCB0aGlzIHZhbHVlIHdpbGwgYWx3YXlzIGJlIG9uIHRoZSBjaGFydC4gVGhpcyBpcyBlc3BlY2lhbGx5IHVzZWZ1bCBvbiBiaXBvbGFyIGNoYXJ0cyB3aGVyZSB0aGUgYmlwb2xhciBjZW50ZXIgYWx3YXlzIG5lZWRzIHRvIGJlIHBhcnQgb2YgdGhlIGNoYXJ0LlxuICogICByZWZlcmVuY2VWYWx1ZTogNVxuICogfTtcbiAqIGBgYFxuICpcbiAqIEBtb2R1bGUgQ2hhcnRpc3QuQXV0b1NjYWxlQXhpc1xuICovXG4vKiBnbG9iYWwgQ2hhcnRpc3QgKi9cbihmdW5jdGlvbiAod2luZG93LCBkb2N1bWVudCwgQ2hhcnRpc3QpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIEF1dG9TY2FsZUF4aXMoYXhpc1VuaXQsIGRhdGEsIGNoYXJ0UmVjdCwgb3B0aW9ucykge1xuICAgIC8vIFVzdWFsbHkgd2UgY2FsY3VsYXRlIGhpZ2hMb3cgYmFzZWQgb24gdGhlIGRhdGEgYnV0IHRoaXMgY2FuIGJlIG92ZXJyaWRlbiBieSBhIGhpZ2hMb3cgb2JqZWN0IGluIHRoZSBvcHRpb25zXG4gICAgdmFyIGhpZ2hMb3cgPSBvcHRpb25zLmhpZ2hMb3cgfHwgQ2hhcnRpc3QuZ2V0SGlnaExvdyhkYXRhLCBvcHRpb25zLCBheGlzVW5pdC5wb3MpO1xuICAgIHRoaXMuYm91bmRzID0gQ2hhcnRpc3QuZ2V0Qm91bmRzKGNoYXJ0UmVjdFtheGlzVW5pdC5yZWN0RW5kXSAtIGNoYXJ0UmVjdFtheGlzVW5pdC5yZWN0U3RhcnRdLCBoaWdoTG93LCBvcHRpb25zLnNjYWxlTWluU3BhY2UgfHwgMjAsIG9wdGlvbnMub25seUludGVnZXIpO1xuICAgIHRoaXMucmFuZ2UgPSB7XG4gICAgICBtaW46IHRoaXMuYm91bmRzLm1pbixcbiAgICAgIG1heDogdGhpcy5ib3VuZHMubWF4XG4gICAgfTtcblxuICAgIENoYXJ0aXN0LkF1dG9TY2FsZUF4aXMuc3VwZXIuY29uc3RydWN0b3IuY2FsbCh0aGlzLFxuICAgICAgYXhpc1VuaXQsXG4gICAgICBjaGFydFJlY3QsXG4gICAgICB0aGlzLmJvdW5kcy52YWx1ZXMsXG4gICAgICBvcHRpb25zKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2plY3RWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmF4aXNMZW5ndGggKiAoK0NoYXJ0aXN0LmdldE11bHRpVmFsdWUodmFsdWUsIHRoaXMudW5pdHMucG9zKSAtIHRoaXMuYm91bmRzLm1pbikgLyB0aGlzLmJvdW5kcy5yYW5nZTtcbiAgfVxuXG4gIENoYXJ0aXN0LkF1dG9TY2FsZUF4aXMgPSBDaGFydGlzdC5BeGlzLmV4dGVuZCh7XG4gICAgY29uc3RydWN0b3I6IEF1dG9TY2FsZUF4aXMsXG4gICAgcHJvamVjdFZhbHVlOiBwcm9qZWN0VmFsdWVcbiAgfSk7XG5cbn0od2luZG93LCBkb2N1bWVudCwgQ2hhcnRpc3QpKTtcbjsvKipcbiAqIFRoZSBmaXhlZCBzY2FsZSBheGlzIHVzZXMgc3RhbmRhcmQgbGluZWFyIHByb2plY3Rpb24gb2YgdmFsdWVzIGFsb25nIGFuIGF4aXMuIEl0IG1ha2VzIHVzZSBvZiBhIGRpdmlzb3Igb3B0aW9uIHRvIGRpdmlkZSB0aGUgcmFuZ2UgcHJvdmlkZWQgZnJvbSB0aGUgbWluaW11bSBhbmQgbWF4aW11bSB2YWx1ZSBvciB0aGUgb3B0aW9ucyBoaWdoIGFuZCBsb3cgdGhhdCB3aWxsIG92ZXJyaWRlIHRoZSBjb21wdXRlZCBtaW5pbXVtIGFuZCBtYXhpbXVtLlxuICogKipPcHRpb25zKipcbiAqIFRoZSBmb2xsb3dpbmcgb3B0aW9ucyBhcmUgdXNlZCBieSB0aGlzIGF4aXMgaW4gYWRkaXRpb24gdG8gdGhlIGRlZmF1bHQgYXhpcyBvcHRpb25zIG91dGxpbmVkIGluIHRoZSBheGlzIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGNoYXJ0IGRlZmF1bHQgc2V0dGluZ3MuXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiB2YXIgb3B0aW9ucyA9IHtcbiAqICAgLy8gSWYgaGlnaCBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgYXhpcyB3aWxsIGRpc3BsYXkgdmFsdWVzIGV4cGxpY2l0bHkgdXAgdG8gdGhpcyB2YWx1ZSBhbmQgdGhlIGNvbXB1dGVkIG1heGltdW0gZnJvbSB0aGUgZGF0YSBpcyBpZ25vcmVkXG4gKiAgIGhpZ2g6IDEwMCxcbiAqICAgLy8gSWYgbG93IGlzIHNwZWNpZmllZCB0aGVuIHRoZSBheGlzIHdpbGwgZGlzcGxheSB2YWx1ZXMgZXhwbGljaXRseSBkb3duIHRvIHRoaXMgdmFsdWUgYW5kIHRoZSBjb21wdXRlZCBtaW5pbXVtIGZyb20gdGhlIGRhdGEgaXMgaWdub3JlZFxuICogICBsb3c6IDAsXG4gKiAgIC8vIElmIHNwZWNpZmllZCB0aGVuIHRoZSB2YWx1ZSByYW5nZSBkZXRlcm1pbmVkIGZyb20gbWluaW11bSB0byBtYXhpbXVtIChvciBsb3cgYW5kIGhpZ2gpIHdpbGwgYmUgZGl2aWRlZCBieSB0aGlzIG51bWJlciBhbmQgdGlja3Mgd2lsbCBiZSBnZW5lcmF0ZWQgYXQgdGhvc2UgZGl2aXNpb24gcG9pbnRzLiBUaGUgZGVmYXVsdCBkaXZpc29yIGlzIDEuXG4gKiAgIGRpdmlzb3I6IDQsXG4gKiAgIC8vIElmIHRpY2tzIGlzIGV4cGxpY2l0bHkgc2V0LCB0aGVuIHRoZSBheGlzIHdpbGwgbm90IGNvbXB1dGUgdGhlIHRpY2tzIHdpdGggdGhlIGRpdmlzb3IsIGJ1dCBkaXJlY3RseSB1c2UgdGhlIGRhdGEgaW4gdGlja3MgdG8gZGV0ZXJtaW5lIGF0IHdoYXQgcG9pbnRzIG9uIHRoZSBheGlzIGEgdGljayBuZWVkIHRvIGJlIGdlbmVyYXRlZC5cbiAqICAgdGlja3M6IFsxLCAxMCwgMjAsIDMwXVxuICogfTtcbiAqIGBgYFxuICpcbiAqIEBtb2R1bGUgQ2hhcnRpc3QuRml4ZWRTY2FsZUF4aXNcbiAqL1xuLyogZ2xvYmFsIENoYXJ0aXN0ICovXG4oZnVuY3Rpb24gKHdpbmRvdywgZG9jdW1lbnQsIENoYXJ0aXN0KSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBGaXhlZFNjYWxlQXhpcyhheGlzVW5pdCwgZGF0YSwgY2hhcnRSZWN0LCBvcHRpb25zKSB7XG4gICAgdmFyIGhpZ2hMb3cgPSBvcHRpb25zLmhpZ2hMb3cgfHwgQ2hhcnRpc3QuZ2V0SGlnaExvdyhkYXRhLCBvcHRpb25zLCBheGlzVW5pdC5wb3MpO1xuICAgIHRoaXMuZGl2aXNvciA9IG9wdGlvbnMuZGl2aXNvciB8fCAxO1xuICAgIHRoaXMudGlja3MgPSBvcHRpb25zLnRpY2tzIHx8IENoYXJ0aXN0LnRpbWVzKHRoaXMuZGl2aXNvcikubWFwKGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgcmV0dXJuIGhpZ2hMb3cubG93ICsgKGhpZ2hMb3cuaGlnaCAtIGhpZ2hMb3cubG93KSAvIHRoaXMuZGl2aXNvciAqIGluZGV4O1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgdGhpcy50aWNrcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIHJldHVybiBhIC0gYjtcbiAgICB9KTtcbiAgICB0aGlzLnJhbmdlID0ge1xuICAgICAgbWluOiBoaWdoTG93LmxvdyxcbiAgICAgIG1heDogaGlnaExvdy5oaWdoXG4gICAgfTtcblxuICAgIENoYXJ0aXN0LkZpeGVkU2NhbGVBeGlzLnN1cGVyLmNvbnN0cnVjdG9yLmNhbGwodGhpcyxcbiAgICAgIGF4aXNVbml0LFxuICAgICAgY2hhcnRSZWN0LFxuICAgICAgdGhpcy50aWNrcyxcbiAgICAgIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5zdGVwTGVuZ3RoID0gdGhpcy5heGlzTGVuZ3RoIC8gdGhpcy5kaXZpc29yO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvamVjdFZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXhpc0xlbmd0aCAqICgrQ2hhcnRpc3QuZ2V0TXVsdGlWYWx1ZSh2YWx1ZSwgdGhpcy51bml0cy5wb3MpIC0gdGhpcy5yYW5nZS5taW4pIC8gKHRoaXMucmFuZ2UubWF4IC0gdGhpcy5yYW5nZS5taW4pO1xuICB9XG5cbiAgQ2hhcnRpc3QuRml4ZWRTY2FsZUF4aXMgPSBDaGFydGlzdC5BeGlzLmV4dGVuZCh7XG4gICAgY29uc3RydWN0b3I6IEZpeGVkU2NhbGVBeGlzLFxuICAgIHByb2plY3RWYWx1ZTogcHJvamVjdFZhbHVlXG4gIH0pO1xuXG59KHdpbmRvdywgZG9jdW1lbnQsIENoYXJ0aXN0KSk7XG47LyoqXG4gKiBUaGUgc3RlcCBheGlzIGZvciBzdGVwIGJhc2VkIGNoYXJ0cyBsaWtlIGJhciBjaGFydCBvciBzdGVwIGJhc2VkIGxpbmUgY2hhcnRzLiBJdCB1c2VzIGEgZml4ZWQgYW1vdW50IG9mIHRpY2tzIHRoYXQgd2lsbCBiZSBlcXVhbGx5IGRpc3RyaWJ1dGVkIGFjcm9zcyB0aGUgd2hvbGUgYXhpcyBsZW5ndGguIFRoZSBwcm9qZWN0aW9uIGlzIGRvbmUgdXNpbmcgdGhlIGluZGV4IG9mIHRoZSBkYXRhIHZhbHVlIHJhdGhlciB0aGFuIHRoZSB2YWx1ZSBpdHNlbGYgYW5kIHRoZXJlZm9yZSBpdCdzIG9ubHkgdXNlZnVsIGZvciBkaXN0cmlidXRpb24gcHVycG9zZS5cbiAqICoqT3B0aW9ucyoqXG4gKiBUaGUgZm9sbG93aW5nIG9wdGlvbnMgYXJlIHVzZWQgYnkgdGhpcyBheGlzIGluIGFkZGl0aW9uIHRvIHRoZSBkZWZhdWx0IGF4aXMgb3B0aW9ucyBvdXRsaW5lZCBpbiB0aGUgYXhpcyBjb25maWd1cmF0aW9uIG9mIHRoZSBjaGFydCBkZWZhdWx0IHNldHRpbmdzLlxuICogYGBgamF2YXNjcmlwdFxuICogdmFyIG9wdGlvbnMgPSB7XG4gKiAgIC8vIFRpY2tzIHRvIGJlIHVzZWQgdG8gZGlzdHJpYnV0ZSBhY3Jvc3MgdGhlIGF4aXMgbGVuZ3RoLiBBcyB0aGlzIGF4aXMgdHlwZSByZWxpZXMgb24gdGhlIGluZGV4IG9mIHRoZSB2YWx1ZSByYXRoZXIgdGhhbiB0aGUgdmFsdWUsIGFyYml0cmFyeSBkYXRhIHRoYXQgY2FuIGJlIGNvbnZlcnRlZCB0byBhIHN0cmluZyBjYW4gYmUgdXNlZCBhcyB0aWNrcy5cbiAqICAgdGlja3M6IFsnT25lJywgJ1R3bycsICdUaHJlZSddLFxuICogICAvLyBJZiBzZXQgdG8gdHJ1ZSB0aGUgZnVsbCB3aWR0aCB3aWxsIGJlIHVzZWQgdG8gZGlzdHJpYnV0ZSB0aGUgdmFsdWVzIHdoZXJlIHRoZSBsYXN0IHZhbHVlIHdpbGwgYmUgYXQgdGhlIG1heGltdW0gb2YgdGhlIGF4aXMgbGVuZ3RoLiBJZiBmYWxzZSB0aGUgc3BhY2VzIGJldHdlZW4gdGhlIHRpY2tzIHdpbGwgYmUgZXZlbmx5IGRpc3RyaWJ1dGVkIGluc3RlYWQuXG4gKiAgIHN0cmV0Y2g6IHRydWVcbiAqIH07XG4gKiBgYGBcbiAqXG4gKiBAbW9kdWxlIENoYXJ0aXN0LlN0ZXBBeGlzXG4gKi9cbi8qIGdsb2JhbCBDaGFydGlzdCAqL1xuKGZ1bmN0aW9uICh3aW5kb3csIGRvY3VtZW50LCBDaGFydGlzdCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gU3RlcEF4aXMoYXhpc1VuaXQsIGRhdGEsIGNoYXJ0UmVjdCwgb3B0aW9ucykge1xuICAgIENoYXJ0aXN0LlN0ZXBBeGlzLnN1cGVyLmNvbnN0cnVjdG9yLmNhbGwodGhpcyxcbiAgICAgIGF4aXNVbml0LFxuICAgICAgY2hhcnRSZWN0LFxuICAgICAgb3B0aW9ucy50aWNrcyxcbiAgICAgIG9wdGlvbnMpO1xuXG4gICAgdmFyIGNhbGMgPSBNYXRoLm1heCgxLCBvcHRpb25zLnRpY2tzLmxlbmd0aCAtIChvcHRpb25zLnN0cmV0Y2ggPyAxIDogMCkpO1xuICAgIHRoaXMuc3RlcExlbmd0aCA9IHRoaXMuYXhpc0xlbmd0aCAvIGNhbGM7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9qZWN0VmFsdWUodmFsdWUsIGluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcExlbmd0aCAqIGluZGV4O1xuICB9XG5cbiAgQ2hhcnRpc3QuU3RlcEF4aXMgPSBDaGFydGlzdC5BeGlzLmV4dGVuZCh7XG4gICAgY29uc3RydWN0b3I6IFN0ZXBBeGlzLFxuICAgIHByb2plY3RWYWx1ZTogcHJvamVjdFZhbHVlXG4gIH0pO1xuXG59KHdpbmRvdywgZG9jdW1lbnQsIENoYXJ0aXN0KSk7XG47LyoqXG4gKiBUaGUgQ2hhcnRpc3QgbGluZSBjaGFydCBjYW4gYmUgdXNlZCB0byBkcmF3IExpbmUgb3IgU2NhdHRlciBjaGFydHMuIElmIHVzZWQgaW4gdGhlIGJyb3dzZXIgeW91IGNhbiBhY2Nlc3MgdGhlIGdsb2JhbCBgQ2hhcnRpc3RgIG5hbWVzcGFjZSB3aGVyZSB5b3UgZmluZCB0aGUgYExpbmVgIGZ1bmN0aW9uIGFzIGEgbWFpbiBlbnRyeSBwb2ludC5cbiAqXG4gKiBGb3IgZXhhbXBsZXMgb24gaG93IHRvIHVzZSB0aGUgbGluZSBjaGFydCBwbGVhc2UgY2hlY2sgdGhlIGV4YW1wbGVzIG9mIHRoZSBgQ2hhcnRpc3QuTGluZWAgbWV0aG9kLlxuICpcbiAqIEBtb2R1bGUgQ2hhcnRpc3QuTGluZVxuICovXG4vKiBnbG9iYWwgQ2hhcnRpc3QgKi9cbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCBDaGFydGlzdCl7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogRGVmYXVsdCBvcHRpb25zIGluIGxpbmUgY2hhcnRzLiBFeHBhbmQgdGhlIGNvZGUgdmlldyB0byBzZWUgYSBkZXRhaWxlZCBsaXN0IG9mIG9wdGlvbnMgd2l0aCBjb21tZW50cy5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkxpbmVcbiAgICovXG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAvLyBPcHRpb25zIGZvciBYLUF4aXNcbiAgICBheGlzWDoge1xuICAgICAgLy8gVGhlIG9mZnNldCBvZiB0aGUgbGFiZWxzIHRvIHRoZSBjaGFydCBhcmVhXG4gICAgICBvZmZzZXQ6IDMwLFxuICAgICAgLy8gUG9zaXRpb24gd2hlcmUgbGFiZWxzIGFyZSBwbGFjZWQuIENhbiBiZSBzZXQgdG8gYHN0YXJ0YCBvciBgZW5kYCB3aGVyZSBgc3RhcnRgIGlzIGVxdWl2YWxlbnQgdG8gbGVmdCBvciB0b3Agb24gdmVydGljYWwgYXhpcyBhbmQgYGVuZGAgaXMgZXF1aXZhbGVudCB0byByaWdodCBvciBib3R0b20gb24gaG9yaXpvbnRhbCBheGlzLlxuICAgICAgcG9zaXRpb246ICdlbmQnLFxuICAgICAgLy8gQWxsb3dzIHlvdSB0byBjb3JyZWN0IGxhYmVsIHBvc2l0aW9uaW5nIG9uIHRoaXMgYXhpcyBieSBwb3NpdGl2ZSBvciBuZWdhdGl2ZSB4IGFuZCB5IG9mZnNldC5cbiAgICAgIGxhYmVsT2Zmc2V0OiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDBcbiAgICAgIH0sXG4gICAgICAvLyBJZiBsYWJlbHMgc2hvdWxkIGJlIHNob3duIG9yIG5vdFxuICAgICAgc2hvd0xhYmVsOiB0cnVlLFxuICAgICAgLy8gSWYgdGhlIGF4aXMgZ3JpZCBzaG91bGQgYmUgZHJhd24gb3Igbm90XG4gICAgICBzaG93R3JpZDogdHJ1ZSxcbiAgICAgIC8vIEludGVycG9sYXRpb24gZnVuY3Rpb24gdGhhdCBhbGxvd3MgeW91IHRvIGludGVyY2VwdCB0aGUgdmFsdWUgZnJvbSB0aGUgYXhpcyBsYWJlbFxuICAgICAgbGFiZWxJbnRlcnBvbGF0aW9uRm5jOiBDaGFydGlzdC5ub29wLFxuICAgICAgLy8gU2V0IHRoZSBheGlzIHR5cGUgdG8gYmUgdXNlZCB0byBwcm9qZWN0IHZhbHVlcyBvbiB0aGlzIGF4aXMuIElmIG5vdCBkZWZpbmVkLCBDaGFydGlzdC5TdGVwQXhpcyB3aWxsIGJlIHVzZWQgZm9yIHRoZSBYLUF4aXMsIHdoZXJlIHRoZSB0aWNrcyBvcHRpb24gd2lsbCBiZSBzZXQgdG8gdGhlIGxhYmVscyBpbiB0aGUgZGF0YSBhbmQgdGhlIHN0cmV0Y2ggb3B0aW9uIHdpbGwgYmUgc2V0IHRvIHRoZSBnbG9iYWwgZnVsbFdpZHRoIG9wdGlvbi4gVGhpcyB0eXBlIGNhbiBiZSBjaGFuZ2VkIHRvIGFueSBheGlzIGNvbnN0cnVjdG9yIGF2YWlsYWJsZSAoZS5nLiBDaGFydGlzdC5GaXhlZFNjYWxlQXhpcyksIHdoZXJlIGFsbCBheGlzIG9wdGlvbnMgc2hvdWxkIGJlIHByZXNlbnQgaGVyZS5cbiAgICAgIHR5cGU6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgLy8gT3B0aW9ucyBmb3IgWS1BeGlzXG4gICAgYXhpc1k6IHtcbiAgICAgIC8vIFRoZSBvZmZzZXQgb2YgdGhlIGxhYmVscyB0byB0aGUgY2hhcnQgYXJlYVxuICAgICAgb2Zmc2V0OiA0MCxcbiAgICAgIC8vIFBvc2l0aW9uIHdoZXJlIGxhYmVscyBhcmUgcGxhY2VkLiBDYW4gYmUgc2V0IHRvIGBzdGFydGAgb3IgYGVuZGAgd2hlcmUgYHN0YXJ0YCBpcyBlcXVpdmFsZW50IHRvIGxlZnQgb3IgdG9wIG9uIHZlcnRpY2FsIGF4aXMgYW5kIGBlbmRgIGlzIGVxdWl2YWxlbnQgdG8gcmlnaHQgb3IgYm90dG9tIG9uIGhvcml6b250YWwgYXhpcy5cbiAgICAgIHBvc2l0aW9uOiAnc3RhcnQnLFxuICAgICAgLy8gQWxsb3dzIHlvdSB0byBjb3JyZWN0IGxhYmVsIHBvc2l0aW9uaW5nIG9uIHRoaXMgYXhpcyBieSBwb3NpdGl2ZSBvciBuZWdhdGl2ZSB4IGFuZCB5IG9mZnNldC5cbiAgICAgIGxhYmVsT2Zmc2V0OiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDBcbiAgICAgIH0sXG4gICAgICAvLyBJZiBsYWJlbHMgc2hvdWxkIGJlIHNob3duIG9yIG5vdFxuICAgICAgc2hvd0xhYmVsOiB0cnVlLFxuICAgICAgLy8gSWYgdGhlIGF4aXMgZ3JpZCBzaG91bGQgYmUgZHJhd24gb3Igbm90XG4gICAgICBzaG93R3JpZDogdHJ1ZSxcbiAgICAgIC8vIEludGVycG9sYXRpb24gZnVuY3Rpb24gdGhhdCBhbGxvd3MgeW91IHRvIGludGVyY2VwdCB0aGUgdmFsdWUgZnJvbSB0aGUgYXhpcyBsYWJlbFxuICAgICAgbGFiZWxJbnRlcnBvbGF0aW9uRm5jOiBDaGFydGlzdC5ub29wLFxuICAgICAgLy8gU2V0IHRoZSBheGlzIHR5cGUgdG8gYmUgdXNlZCB0byBwcm9qZWN0IHZhbHVlcyBvbiB0aGlzIGF4aXMuIElmIG5vdCBkZWZpbmVkLCBDaGFydGlzdC5BdXRvU2NhbGVBeGlzIHdpbGwgYmUgdXNlZCBmb3IgdGhlIFktQXhpcywgd2hlcmUgdGhlIGhpZ2ggYW5kIGxvdyBvcHRpb25zIHdpbGwgYmUgc2V0IHRvIHRoZSBnbG9iYWwgaGlnaCBhbmQgbG93IG9wdGlvbnMuIFRoaXMgdHlwZSBjYW4gYmUgY2hhbmdlZCB0byBhbnkgYXhpcyBjb25zdHJ1Y3RvciBhdmFpbGFibGUgKGUuZy4gQ2hhcnRpc3QuRml4ZWRTY2FsZUF4aXMpLCB3aGVyZSBhbGwgYXhpcyBvcHRpb25zIHNob3VsZCBiZSBwcmVzZW50IGhlcmUuXG4gICAgICB0eXBlOiB1bmRlZmluZWQsXG4gICAgICAvLyBUaGlzIHZhbHVlIHNwZWNpZmllcyB0aGUgbWluaW11bSBoZWlnaHQgaW4gcGl4ZWwgb2YgdGhlIHNjYWxlIHN0ZXBzXG4gICAgICBzY2FsZU1pblNwYWNlOiAyMCxcbiAgICAgIC8vIFVzZSBvbmx5IGludGVnZXIgdmFsdWVzICh3aG9sZSBudW1iZXJzKSBmb3IgdGhlIHNjYWxlIHN0ZXBzXG4gICAgICBvbmx5SW50ZWdlcjogZmFsc2VcbiAgICB9LFxuICAgIC8vIFNwZWNpZnkgYSBmaXhlZCB3aWR0aCBmb3IgdGhlIGNoYXJ0IGFzIGEgc3RyaW5nIChpLmUuICcxMDBweCcgb3IgJzUwJScpXG4gICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICAvLyBTcGVjaWZ5IGEgZml4ZWQgaGVpZ2h0IGZvciB0aGUgY2hhcnQgYXMgYSBzdHJpbmcgKGkuZS4gJzEwMHB4JyBvciAnNTAlJylcbiAgICBoZWlnaHQ6IHVuZGVmaW5lZCxcbiAgICAvLyBJZiB0aGUgbGluZSBzaG91bGQgYmUgZHJhd24gb3Igbm90XG4gICAgc2hvd0xpbmU6IHRydWUsXG4gICAgLy8gSWYgZG90cyBzaG91bGQgYmUgZHJhd24gb3Igbm90XG4gICAgc2hvd1BvaW50OiB0cnVlLFxuICAgIC8vIElmIHRoZSBsaW5lIGNoYXJ0IHNob3VsZCBkcmF3IGFuIGFyZWFcbiAgICBzaG93QXJlYTogZmFsc2UsXG4gICAgLy8gVGhlIGJhc2UgZm9yIHRoZSBhcmVhIGNoYXJ0IHRoYXQgd2lsbCBiZSB1c2VkIHRvIGNsb3NlIHRoZSBhcmVhIHNoYXBlIChpcyBub3JtYWxseSAwKVxuICAgIGFyZWFCYXNlOiAwLFxuICAgIC8vIFNwZWNpZnkgaWYgdGhlIGxpbmVzIHNob3VsZCBiZSBzbW9vdGhlZC4gVGhpcyB2YWx1ZSBjYW4gYmUgdHJ1ZSBvciBmYWxzZSB3aGVyZSB0cnVlIHdpbGwgcmVzdWx0IGluIHNtb290aGluZyB1c2luZyB0aGUgZGVmYXVsdCBzbW9vdGhpbmcgaW50ZXJwb2xhdGlvbiBmdW5jdGlvbiBDaGFydGlzdC5JbnRlcnBvbGF0aW9uLmNhcmRpbmFsIGFuZCBmYWxzZSByZXN1bHRzIGluIENoYXJ0aXN0LkludGVycG9sYXRpb24ubm9uZS4gWW91IGNhbiBhbHNvIGNob29zZSBvdGhlciBzbW9vdGhpbmcgLyBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9ucyBhdmFpbGFibGUgaW4gdGhlIENoYXJ0aXN0LkludGVycG9sYXRpb24gbW9kdWxlLCBvciB3cml0ZSB5b3VyIG93biBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uLiBDaGVjayB0aGUgZXhhbXBsZXMgZm9yIGEgYnJpZWYgZGVzY3JpcHRpb24uXG4gICAgbGluZVNtb290aDogdHJ1ZSxcbiAgICAvLyBJZiB0aGUgbGluZSBjaGFydCBzaG91bGQgYWRkIGEgYmFja2dyb3VuZCBmaWxsIHRvIHRoZSAuY3QtZ3JpZHMgZ3JvdXAuXG4gICAgc2hvd0dyaWRCYWNrZ3JvdW5kOiBmYWxzZSxcbiAgICAvLyBPdmVycmlkaW5nIHRoZSBuYXR1cmFsIGxvdyBvZiB0aGUgY2hhcnQgYWxsb3dzIHlvdSB0byB6b29tIGluIG9yIGxpbWl0IHRoZSBjaGFydHMgbG93ZXN0IGRpc3BsYXllZCB2YWx1ZVxuICAgIGxvdzogdW5kZWZpbmVkLFxuICAgIC8vIE92ZXJyaWRpbmcgdGhlIG5hdHVyYWwgaGlnaCBvZiB0aGUgY2hhcnQgYWxsb3dzIHlvdSB0byB6b29tIGluIG9yIGxpbWl0IHRoZSBjaGFydHMgaGlnaGVzdCBkaXNwbGF5ZWQgdmFsdWVcbiAgICBoaWdoOiB1bmRlZmluZWQsXG4gICAgLy8gUGFkZGluZyBvZiB0aGUgY2hhcnQgZHJhd2luZyBhcmVhIHRvIHRoZSBjb250YWluZXIgZWxlbWVudCBhbmQgbGFiZWxzIGFzIGEgbnVtYmVyIG9yIHBhZGRpbmcgb2JqZWN0IHt0b3A6IDUsIHJpZ2h0OiA1LCBib3R0b206IDUsIGxlZnQ6IDV9XG4gICAgY2hhcnRQYWRkaW5nOiB7XG4gICAgICB0b3A6IDE1LFxuICAgICAgcmlnaHQ6IDE1LFxuICAgICAgYm90dG9tOiA1LFxuICAgICAgbGVmdDogMTBcbiAgICB9LFxuICAgIC8vIFdoZW4gc2V0IHRvIHRydWUsIHRoZSBsYXN0IGdyaWQgbGluZSBvbiB0aGUgeC1heGlzIGlzIG5vdCBkcmF3biBhbmQgdGhlIGNoYXJ0IGVsZW1lbnRzIHdpbGwgZXhwYW5kIHRvIHRoZSBmdWxsIGF2YWlsYWJsZSB3aWR0aCBvZiB0aGUgY2hhcnQuIEZvciB0aGUgbGFzdCBsYWJlbCB0byBiZSBkcmF3biBjb3JyZWN0bHkgeW91IG1pZ2h0IG5lZWQgdG8gYWRkIGNoYXJ0IHBhZGRpbmcgb3Igb2Zmc2V0IHRoZSBsYXN0IGxhYmVsIHdpdGggYSBkcmF3IGV2ZW50IGhhbmRsZXIuXG4gICAgZnVsbFdpZHRoOiBmYWxzZSxcbiAgICAvLyBJZiB0cnVlIHRoZSB3aG9sZSBkYXRhIGlzIHJldmVyc2VkIGluY2x1ZGluZyBsYWJlbHMsIHRoZSBzZXJpZXMgb3JkZXIgYXMgd2VsbCBhcyB0aGUgd2hvbGUgc2VyaWVzIGRhdGEgYXJyYXlzLlxuICAgIHJldmVyc2VEYXRhOiBmYWxzZSxcbiAgICAvLyBPdmVycmlkZSB0aGUgY2xhc3MgbmFtZXMgdGhhdCBnZXQgdXNlZCB0byBnZW5lcmF0ZSB0aGUgU1ZHIHN0cnVjdHVyZSBvZiB0aGUgY2hhcnRcbiAgICBjbGFzc05hbWVzOiB7XG4gICAgICBjaGFydDogJ2N0LWNoYXJ0LWxpbmUnLFxuICAgICAgbGFiZWw6ICdjdC1sYWJlbCcsXG4gICAgICBsYWJlbEdyb3VwOiAnY3QtbGFiZWxzJyxcbiAgICAgIHNlcmllczogJ2N0LXNlcmllcycsXG4gICAgICBsaW5lOiAnY3QtbGluZScsXG4gICAgICBwb2ludDogJ2N0LXBvaW50JyxcbiAgICAgIGFyZWE6ICdjdC1hcmVhJyxcbiAgICAgIGdyaWQ6ICdjdC1ncmlkJyxcbiAgICAgIGdyaWRHcm91cDogJ2N0LWdyaWRzJyxcbiAgICAgIGdyaWRCYWNrZ3JvdW5kOiAnY3QtZ3JpZC1iYWNrZ3JvdW5kJyxcbiAgICAgIHZlcnRpY2FsOiAnY3QtdmVydGljYWwnLFxuICAgICAgaG9yaXpvbnRhbDogJ2N0LWhvcml6b250YWwnLFxuICAgICAgc3RhcnQ6ICdjdC1zdGFydCcsXG4gICAgICBlbmQ6ICdjdC1lbmQnXG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGNoYXJ0XG4gICAqXG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVDaGFydChvcHRpb25zKSB7XG4gICAgdmFyIGRhdGEgPSBDaGFydGlzdC5ub3JtYWxpemVEYXRhKHRoaXMuZGF0YSwgb3B0aW9ucy5yZXZlcnNlRGF0YSwgdHJ1ZSk7XG5cbiAgICAvLyBDcmVhdGUgbmV3IHN2ZyBvYmplY3RcbiAgICB0aGlzLnN2ZyA9IENoYXJ0aXN0LmNyZWF0ZVN2Zyh0aGlzLmNvbnRhaW5lciwgb3B0aW9ucy53aWR0aCwgb3B0aW9ucy5oZWlnaHQsIG9wdGlvbnMuY2xhc3NOYW1lcy5jaGFydCk7XG4gICAgLy8gQ3JlYXRlIGdyb3VwcyBmb3IgbGFiZWxzLCBncmlkIGFuZCBzZXJpZXNcbiAgICB2YXIgZ3JpZEdyb3VwID0gdGhpcy5zdmcuZWxlbSgnZycpLmFkZENsYXNzKG9wdGlvbnMuY2xhc3NOYW1lcy5ncmlkR3JvdXApO1xuICAgIHZhciBzZXJpZXNHcm91cCA9IHRoaXMuc3ZnLmVsZW0oJ2cnKTtcbiAgICB2YXIgbGFiZWxHcm91cCA9IHRoaXMuc3ZnLmVsZW0oJ2cnKS5hZGRDbGFzcyhvcHRpb25zLmNsYXNzTmFtZXMubGFiZWxHcm91cCk7XG5cbiAgICB2YXIgY2hhcnRSZWN0ID0gQ2hhcnRpc3QuY3JlYXRlQ2hhcnRSZWN0KHRoaXMuc3ZnLCBvcHRpb25zLCBkZWZhdWx0T3B0aW9ucy5wYWRkaW5nKTtcbiAgICB2YXIgYXhpc1gsIGF4aXNZO1xuXG4gICAgaWYob3B0aW9ucy5heGlzWC50eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGF4aXNYID0gbmV3IENoYXJ0aXN0LlN0ZXBBeGlzKENoYXJ0aXN0LkF4aXMudW5pdHMueCwgZGF0YS5ub3JtYWxpemVkLnNlcmllcywgY2hhcnRSZWN0LCBDaGFydGlzdC5leHRlbmQoe30sIG9wdGlvbnMuYXhpc1gsIHtcbiAgICAgICAgdGlja3M6IGRhdGEubm9ybWFsaXplZC5sYWJlbHMsXG4gICAgICAgIHN0cmV0Y2g6IG9wdGlvbnMuZnVsbFdpZHRoXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF4aXNYID0gb3B0aW9ucy5heGlzWC50eXBlLmNhbGwoQ2hhcnRpc3QsIENoYXJ0aXN0LkF4aXMudW5pdHMueCwgZGF0YS5ub3JtYWxpemVkLnNlcmllcywgY2hhcnRSZWN0LCBvcHRpb25zLmF4aXNYKTtcbiAgICB9XG5cbiAgICBpZihvcHRpb25zLmF4aXNZLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYXhpc1kgPSBuZXcgQ2hhcnRpc3QuQXV0b1NjYWxlQXhpcyhDaGFydGlzdC5BeGlzLnVuaXRzLnksIGRhdGEubm9ybWFsaXplZC5zZXJpZXMsIGNoYXJ0UmVjdCwgQ2hhcnRpc3QuZXh0ZW5kKHt9LCBvcHRpb25zLmF4aXNZLCB7XG4gICAgICAgIGhpZ2g6IENoYXJ0aXN0LmlzTnVtZXJpYyhvcHRpb25zLmhpZ2gpID8gb3B0aW9ucy5oaWdoIDogb3B0aW9ucy5heGlzWS5oaWdoLFxuICAgICAgICBsb3c6IENoYXJ0aXN0LmlzTnVtZXJpYyhvcHRpb25zLmxvdykgPyBvcHRpb25zLmxvdyA6IG9wdGlvbnMuYXhpc1kubG93XG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF4aXNZID0gb3B0aW9ucy5heGlzWS50eXBlLmNhbGwoQ2hhcnRpc3QsIENoYXJ0aXN0LkF4aXMudW5pdHMueSwgZGF0YS5ub3JtYWxpemVkLnNlcmllcywgY2hhcnRSZWN0LCBvcHRpb25zLmF4aXNZKTtcbiAgICB9XG5cbiAgICBheGlzWC5jcmVhdGVHcmlkQW5kTGFiZWxzKGdyaWRHcm91cCwgbGFiZWxHcm91cCwgdGhpcy5zdXBwb3J0c0ZvcmVpZ25PYmplY3QsIG9wdGlvbnMsIHRoaXMuZXZlbnRFbWl0dGVyKTtcbiAgICBheGlzWS5jcmVhdGVHcmlkQW5kTGFiZWxzKGdyaWRHcm91cCwgbGFiZWxHcm91cCwgdGhpcy5zdXBwb3J0c0ZvcmVpZ25PYmplY3QsIG9wdGlvbnMsIHRoaXMuZXZlbnRFbWl0dGVyKTtcblxuICAgIGlmIChvcHRpb25zLnNob3dHcmlkQmFja2dyb3VuZCkge1xuICAgICAgQ2hhcnRpc3QuY3JlYXRlR3JpZEJhY2tncm91bmQoZ3JpZEdyb3VwLCBjaGFydFJlY3QsIG9wdGlvbnMuY2xhc3NOYW1lcy5ncmlkQmFja2dyb3VuZCwgdGhpcy5ldmVudEVtaXR0ZXIpO1xuICAgIH1cblxuICAgIC8vIERyYXcgdGhlIHNlcmllc1xuICAgIGRhdGEucmF3LnNlcmllcy5mb3JFYWNoKGZ1bmN0aW9uKHNlcmllcywgc2VyaWVzSW5kZXgpIHtcbiAgICAgIHZhciBzZXJpZXNFbGVtZW50ID0gc2VyaWVzR3JvdXAuZWxlbSgnZycpO1xuXG4gICAgICAvLyBXcml0ZSBhdHRyaWJ1dGVzIHRvIHNlcmllcyBncm91cCBlbGVtZW50LiBJZiBzZXJpZXMgbmFtZSBvciBtZXRhIGlzIHVuZGVmaW5lZCB0aGUgYXR0cmlidXRlcyB3aWxsIG5vdCBiZSB3cml0dGVuXG4gICAgICBzZXJpZXNFbGVtZW50LmF0dHIoe1xuICAgICAgICAnY3Q6c2VyaWVzLW5hbWUnOiBzZXJpZXMubmFtZSxcbiAgICAgICAgJ2N0Om1ldGEnOiBDaGFydGlzdC5zZXJpYWxpemUoc2VyaWVzLm1ldGEpXG4gICAgICB9KTtcblxuICAgICAgLy8gVXNlIHNlcmllcyBjbGFzcyBmcm9tIHNlcmllcyBkYXRhIG9yIGlmIG5vdCBzZXQgZ2VuZXJhdGUgb25lXG4gICAgICBzZXJpZXNFbGVtZW50LmFkZENsYXNzKFtcbiAgICAgICAgb3B0aW9ucy5jbGFzc05hbWVzLnNlcmllcyxcbiAgICAgICAgKHNlcmllcy5jbGFzc05hbWUgfHwgb3B0aW9ucy5jbGFzc05hbWVzLnNlcmllcyArICctJyArIENoYXJ0aXN0LmFscGhhTnVtZXJhdGUoc2VyaWVzSW5kZXgpKVxuICAgICAgXS5qb2luKCcgJykpO1xuXG4gICAgICB2YXIgcGF0aENvb3JkaW5hdGVzID0gW10sXG4gICAgICAgIHBhdGhEYXRhID0gW107XG5cbiAgICAgIGRhdGEubm9ybWFsaXplZC5zZXJpZXNbc2VyaWVzSW5kZXhdLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIHZhbHVlSW5kZXgpIHtcbiAgICAgICAgdmFyIHAgPSB7XG4gICAgICAgICAgeDogY2hhcnRSZWN0LngxICsgYXhpc1gucHJvamVjdFZhbHVlKHZhbHVlLCB2YWx1ZUluZGV4LCBkYXRhLm5vcm1hbGl6ZWQuc2VyaWVzW3Nlcmllc0luZGV4XSksXG4gICAgICAgICAgeTogY2hhcnRSZWN0LnkxIC0gYXhpc1kucHJvamVjdFZhbHVlKHZhbHVlLCB2YWx1ZUluZGV4LCBkYXRhLm5vcm1hbGl6ZWQuc2VyaWVzW3Nlcmllc0luZGV4XSlcbiAgICAgICAgfTtcbiAgICAgICAgcGF0aENvb3JkaW5hdGVzLnB1c2gocC54LCBwLnkpO1xuICAgICAgICBwYXRoRGF0YS5wdXNoKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgdmFsdWVJbmRleDogdmFsdWVJbmRleCxcbiAgICAgICAgICBtZXRhOiBDaGFydGlzdC5nZXRNZXRhRGF0YShzZXJpZXMsIHZhbHVlSW5kZXgpXG4gICAgICAgIH0pO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgdmFyIHNlcmllc09wdGlvbnMgPSB7XG4gICAgICAgIGxpbmVTbW9vdGg6IENoYXJ0aXN0LmdldFNlcmllc09wdGlvbihzZXJpZXMsIG9wdGlvbnMsICdsaW5lU21vb3RoJyksXG4gICAgICAgIHNob3dQb2ludDogQ2hhcnRpc3QuZ2V0U2VyaWVzT3B0aW9uKHNlcmllcywgb3B0aW9ucywgJ3Nob3dQb2ludCcpLFxuICAgICAgICBzaG93TGluZTogQ2hhcnRpc3QuZ2V0U2VyaWVzT3B0aW9uKHNlcmllcywgb3B0aW9ucywgJ3Nob3dMaW5lJyksXG4gICAgICAgIHNob3dBcmVhOiBDaGFydGlzdC5nZXRTZXJpZXNPcHRpb24oc2VyaWVzLCBvcHRpb25zLCAnc2hvd0FyZWEnKSxcbiAgICAgICAgYXJlYUJhc2U6IENoYXJ0aXN0LmdldFNlcmllc09wdGlvbihzZXJpZXMsIG9wdGlvbnMsICdhcmVhQmFzZScpXG4gICAgICB9O1xuXG4gICAgICB2YXIgc21vb3RoaW5nID0gdHlwZW9mIHNlcmllc09wdGlvbnMubGluZVNtb290aCA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAgIHNlcmllc09wdGlvbnMubGluZVNtb290aCA6IChzZXJpZXNPcHRpb25zLmxpbmVTbW9vdGggPyBDaGFydGlzdC5JbnRlcnBvbGF0aW9uLm1vbm90b25lQ3ViaWMoKSA6IENoYXJ0aXN0LkludGVycG9sYXRpb24ubm9uZSgpKTtcbiAgICAgIC8vIEludGVycG9sYXRpbmcgcGF0aCB3aGVyZSBwYXRoRGF0YSB3aWxsIGJlIHVzZWQgdG8gYW5ub3RhdGUgZWFjaCBwYXRoIGVsZW1lbnQgc28gd2UgY2FuIHRyYWNlIGJhY2sgdGhlIG9yaWdpbmFsXG4gICAgICAvLyBpbmRleCwgdmFsdWUgYW5kIG1ldGEgZGF0YVxuICAgICAgdmFyIHBhdGggPSBzbW9vdGhpbmcocGF0aENvb3JkaW5hdGVzLCBwYXRoRGF0YSk7XG5cbiAgICAgIC8vIElmIHdlIHNob3VsZCBzaG93IHBvaW50cyB3ZSBuZWVkIHRvIGNyZWF0ZSB0aGVtIG5vdyB0byBhdm9pZCBzZWNvbmRhcnkgbG9vcFxuICAgICAgLy8gUG9pbnRzIGFyZSBkcmF3biBmcm9tIHRoZSBwYXRoRWxlbWVudHMgcmV0dXJuZWQgYnkgdGhlIGludGVycG9sYXRpb24gZnVuY3Rpb25cbiAgICAgIC8vIFNtYWxsIG9mZnNldCBmb3IgRmlyZWZveCB0byByZW5kZXIgc3F1YXJlcyBjb3JyZWN0bHlcbiAgICAgIGlmIChzZXJpZXNPcHRpb25zLnNob3dQb2ludCkge1xuXG4gICAgICAgIHBhdGgucGF0aEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24ocGF0aEVsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgcG9pbnQgPSBzZXJpZXNFbGVtZW50LmVsZW0oJ2xpbmUnLCB7XG4gICAgICAgICAgICB4MTogcGF0aEVsZW1lbnQueCxcbiAgICAgICAgICAgIHkxOiBwYXRoRWxlbWVudC55LFxuICAgICAgICAgICAgeDI6IHBhdGhFbGVtZW50LnggKyAwLjAxLFxuICAgICAgICAgICAgeTI6IHBhdGhFbGVtZW50LnlcbiAgICAgICAgICB9LCBvcHRpb25zLmNsYXNzTmFtZXMucG9pbnQpLmF0dHIoe1xuICAgICAgICAgICAgJ2N0OnZhbHVlJzogW3BhdGhFbGVtZW50LmRhdGEudmFsdWUueCwgcGF0aEVsZW1lbnQuZGF0YS52YWx1ZS55XS5maWx0ZXIoQ2hhcnRpc3QuaXNOdW1lcmljKS5qb2luKCcsJyksXG4gICAgICAgICAgICAnY3Q6bWV0YSc6IENoYXJ0aXN0LnNlcmlhbGl6ZShwYXRoRWxlbWVudC5kYXRhLm1ldGEpXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0aGlzLmV2ZW50RW1pdHRlci5lbWl0KCdkcmF3Jywge1xuICAgICAgICAgICAgdHlwZTogJ3BvaW50JyxcbiAgICAgICAgICAgIHZhbHVlOiBwYXRoRWxlbWVudC5kYXRhLnZhbHVlLFxuICAgICAgICAgICAgaW5kZXg6IHBhdGhFbGVtZW50LmRhdGEudmFsdWVJbmRleCxcbiAgICAgICAgICAgIG1ldGE6IHBhdGhFbGVtZW50LmRhdGEubWV0YSxcbiAgICAgICAgICAgIHNlcmllczogc2VyaWVzLFxuICAgICAgICAgICAgc2VyaWVzSW5kZXg6IHNlcmllc0luZGV4LFxuICAgICAgICAgICAgYXhpc1g6IGF4aXNYLFxuICAgICAgICAgICAgYXhpc1k6IGF4aXNZLFxuICAgICAgICAgICAgZ3JvdXA6IHNlcmllc0VsZW1lbnQsXG4gICAgICAgICAgICBlbGVtZW50OiBwb2ludCxcbiAgICAgICAgICAgIHg6IHBhdGhFbGVtZW50LngsXG4gICAgICAgICAgICB5OiBwYXRoRWxlbWVudC55XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICB9XG5cbiAgICAgIGlmKHNlcmllc09wdGlvbnMuc2hvd0xpbmUpIHtcbiAgICAgICAgdmFyIGxpbmUgPSBzZXJpZXNFbGVtZW50LmVsZW0oJ3BhdGgnLCB7XG4gICAgICAgICAgZDogcGF0aC5zdHJpbmdpZnkoKVxuICAgICAgICB9LCBvcHRpb25zLmNsYXNzTmFtZXMubGluZSwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIuZW1pdCgnZHJhdycsIHtcbiAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgdmFsdWVzOiBkYXRhLm5vcm1hbGl6ZWQuc2VyaWVzW3Nlcmllc0luZGV4XSxcbiAgICAgICAgICBwYXRoOiBwYXRoLmNsb25lKCksXG4gICAgICAgICAgY2hhcnRSZWN0OiBjaGFydFJlY3QsXG4gICAgICAgICAgaW5kZXg6IHNlcmllc0luZGV4LFxuICAgICAgICAgIHNlcmllczogc2VyaWVzLFxuICAgICAgICAgIHNlcmllc0luZGV4OiBzZXJpZXNJbmRleCxcbiAgICAgICAgICBzZXJpZXNNZXRhOiBzZXJpZXMubWV0YSxcbiAgICAgICAgICBheGlzWDogYXhpc1gsXG4gICAgICAgICAgYXhpc1k6IGF4aXNZLFxuICAgICAgICAgIGdyb3VwOiBzZXJpZXNFbGVtZW50LFxuICAgICAgICAgIGVsZW1lbnQ6IGxpbmVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFyZWEgY3VycmVudGx5IG9ubHkgd29ya3Mgd2l0aCBheGVzIHRoYXQgc3VwcG9ydCBhIHJhbmdlIVxuICAgICAgaWYoc2VyaWVzT3B0aW9ucy5zaG93QXJlYSAmJiBheGlzWS5yYW5nZSkge1xuICAgICAgICAvLyBJZiBhcmVhQmFzZSBpcyBvdXRzaWRlIHRoZSBjaGFydCBhcmVhICg8IG1pbiBvciA+IG1heCkgd2UgbmVlZCB0byBzZXQgaXQgcmVzcGVjdGl2ZWx5IHNvIHRoYXRcbiAgICAgICAgLy8gdGhlIGFyZWEgaXMgbm90IGRyYXduIG91dHNpZGUgdGhlIGNoYXJ0IGFyZWEuXG4gICAgICAgIHZhciBhcmVhQmFzZSA9IE1hdGgubWF4KE1hdGgubWluKHNlcmllc09wdGlvbnMuYXJlYUJhc2UsIGF4aXNZLnJhbmdlLm1heCksIGF4aXNZLnJhbmdlLm1pbik7XG5cbiAgICAgICAgLy8gV2UgcHJvamVjdCB0aGUgYXJlYUJhc2UgdmFsdWUgaW50byBzY3JlZW4gY29vcmRpbmF0ZXNcbiAgICAgICAgdmFyIGFyZWFCYXNlUHJvamVjdGVkID0gY2hhcnRSZWN0LnkxIC0gYXhpc1kucHJvamVjdFZhbHVlKGFyZWFCYXNlKTtcblxuICAgICAgICAvLyBJbiBvcmRlciB0byBmb3JtIHRoZSBhcmVhIHdlJ2xsIGZpcnN0IHNwbGl0IHRoZSBwYXRoIGJ5IG1vdmUgY29tbWFuZHMgc28gd2UgY2FuIGNodW5rIGl0IHVwIGludG8gc2VnbWVudHNcbiAgICAgICAgcGF0aC5zcGxpdEJ5Q29tbWFuZCgnTScpLmZpbHRlcihmdW5jdGlvbiBvbmx5U29saWRTZWdtZW50cyhwYXRoU2VnbWVudCkge1xuICAgICAgICAgIC8vIFdlIGZpbHRlciBvbmx5IFwic29saWRcIiBzZWdtZW50cyB0aGF0IGNvbnRhaW4gbW9yZSB0aGFuIG9uZSBwb2ludC4gT3RoZXJ3aXNlIHRoZXJlJ3Mgbm8gbmVlZCBmb3IgYW4gYXJlYVxuICAgICAgICAgIHJldHVybiBwYXRoU2VnbWVudC5wYXRoRWxlbWVudHMubGVuZ3RoID4gMTtcbiAgICAgICAgfSkubWFwKGZ1bmN0aW9uIGNvbnZlcnRUb0FyZWEoc29saWRQYXRoU2VnbWVudHMpIHtcbiAgICAgICAgICAvLyBSZWNlaXZpbmcgdGhlIGZpbHRlcmVkIHNvbGlkIHBhdGggc2VnbWVudHMgd2UgY2FuIG5vdyBjb252ZXJ0IHRob3NlIHNlZ21lbnRzIGludG8gZmlsbCBhcmVhc1xuICAgICAgICAgIHZhciBmaXJzdEVsZW1lbnQgPSBzb2xpZFBhdGhTZWdtZW50cy5wYXRoRWxlbWVudHNbMF07XG4gICAgICAgICAgdmFyIGxhc3RFbGVtZW50ID0gc29saWRQYXRoU2VnbWVudHMucGF0aEVsZW1lbnRzW3NvbGlkUGF0aFNlZ21lbnRzLnBhdGhFbGVtZW50cy5sZW5ndGggLSAxXTtcblxuICAgICAgICAgIC8vIENsb25pbmcgdGhlIHNvbGlkIHBhdGggc2VnbWVudCB3aXRoIGNsb3Npbmcgb3B0aW9uIGFuZCByZW1vdmluZyB0aGUgZmlyc3QgbW92ZSBjb21tYW5kIGZyb20gdGhlIGNsb25lXG4gICAgICAgICAgLy8gV2UgdGhlbiBpbnNlcnQgYSBuZXcgbW92ZSB0aGF0IHNob3VsZCBzdGFydCBhdCB0aGUgYXJlYSBiYXNlIGFuZCBkcmF3IGEgc3RyYWlnaHQgbGluZSB1cCBvciBkb3duXG4gICAgICAgICAgLy8gYXQgdGhlIGVuZCBvZiB0aGUgcGF0aCB3ZSBhZGQgYW4gYWRkaXRpb25hbCBzdHJhaWdodCBsaW5lIHRvIHRoZSBwcm9qZWN0ZWQgYXJlYSBiYXNlIHZhbHVlXG4gICAgICAgICAgLy8gQXMgdGhlIGNsb3Npbmcgb3B0aW9uIGlzIHNldCBvdXIgcGF0aCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgY2xvc2VkXG4gICAgICAgICAgcmV0dXJuIHNvbGlkUGF0aFNlZ21lbnRzLmNsb25lKHRydWUpXG4gICAgICAgICAgICAucG9zaXRpb24oMClcbiAgICAgICAgICAgIC5yZW1vdmUoMSlcbiAgICAgICAgICAgIC5tb3ZlKGZpcnN0RWxlbWVudC54LCBhcmVhQmFzZVByb2plY3RlZClcbiAgICAgICAgICAgIC5saW5lKGZpcnN0RWxlbWVudC54LCBmaXJzdEVsZW1lbnQueSlcbiAgICAgICAgICAgIC5wb3NpdGlvbihzb2xpZFBhdGhTZWdtZW50cy5wYXRoRWxlbWVudHMubGVuZ3RoICsgMSlcbiAgICAgICAgICAgIC5saW5lKGxhc3RFbGVtZW50LngsIGFyZWFCYXNlUHJvamVjdGVkKTtcblxuICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIGNyZWF0ZUFyZWEoYXJlYVBhdGgpIHtcbiAgICAgICAgICAvLyBGb3IgZWFjaCBvZiBvdXIgbmV3bHkgY3JlYXRlZCBhcmVhIHBhdGhzLCB3ZSdsbCBub3cgY3JlYXRlIHBhdGggZWxlbWVudHMgYnkgc3RyaW5naWZ5aW5nIG91ciBwYXRoIG9iamVjdHNcbiAgICAgICAgICAvLyBhbmQgYWRkaW5nIHRoZSBjcmVhdGVkIERPTSBlbGVtZW50cyB0byB0aGUgY29ycmVjdCBzZXJpZXMgZ3JvdXBcbiAgICAgICAgICB2YXIgYXJlYSA9IHNlcmllc0VsZW1lbnQuZWxlbSgncGF0aCcsIHtcbiAgICAgICAgICAgIGQ6IGFyZWFQYXRoLnN0cmluZ2lmeSgpXG4gICAgICAgICAgfSwgb3B0aW9ucy5jbGFzc05hbWVzLmFyZWEsIHRydWUpO1xuXG4gICAgICAgICAgLy8gRW1pdCBhbiBldmVudCBmb3IgZWFjaCBhcmVhIHRoYXQgd2FzIGRyYXduXG4gICAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIuZW1pdCgnZHJhdycsIHtcbiAgICAgICAgICAgIHR5cGU6ICdhcmVhJyxcbiAgICAgICAgICAgIHZhbHVlczogZGF0YS5ub3JtYWxpemVkLnNlcmllc1tzZXJpZXNJbmRleF0sXG4gICAgICAgICAgICBwYXRoOiBhcmVhUGF0aC5jbG9uZSgpLFxuICAgICAgICAgICAgc2VyaWVzOiBzZXJpZXMsXG4gICAgICAgICAgICBzZXJpZXNJbmRleDogc2VyaWVzSW5kZXgsXG4gICAgICAgICAgICBheGlzWDogYXhpc1gsXG4gICAgICAgICAgICBheGlzWTogYXhpc1ksXG4gICAgICAgICAgICBjaGFydFJlY3Q6IGNoYXJ0UmVjdCxcbiAgICAgICAgICAgIGluZGV4OiBzZXJpZXNJbmRleCxcbiAgICAgICAgICAgIGdyb3VwOiBzZXJpZXNFbGVtZW50LFxuICAgICAgICAgICAgZWxlbWVudDogYXJlYVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLmV2ZW50RW1pdHRlci5lbWl0KCdjcmVhdGVkJywge1xuICAgICAgYm91bmRzOiBheGlzWS5ib3VuZHMsXG4gICAgICBjaGFydFJlY3Q6IGNoYXJ0UmVjdCxcbiAgICAgIGF4aXNYOiBheGlzWCxcbiAgICAgIGF4aXNZOiBheGlzWSxcbiAgICAgIHN2ZzogdGhpcy5zdmcsXG4gICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgY3JlYXRlcyBhIG5ldyBsaW5lIGNoYXJ0LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuTGluZVxuICAgKiBAcGFyYW0ge1N0cmluZ3xOb2RlfSBxdWVyeSBBIHNlbGVjdG9yIHF1ZXJ5IHN0cmluZyBvciBkaXJlY3RseSBhIERPTSBlbGVtZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIG9iamVjdCB0aGF0IG5lZWRzIHRvIGNvbnNpc3Qgb2YgYSBsYWJlbHMgYW5kIGEgc2VyaWVzIGFycmF5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gVGhlIG9wdGlvbnMgb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IG92ZXJyaWRlIHRoZSBkZWZhdWx0IG9wdGlvbnMuIENoZWNrIHRoZSBleGFtcGxlcyBmb3IgYSBkZXRhaWxlZCBsaXN0LlxuICAgKiBAcGFyYW0ge0FycmF5fSBbcmVzcG9uc2l2ZU9wdGlvbnNdIFNwZWNpZnkgYW4gYXJyYXkgb2YgcmVzcG9uc2l2ZSBvcHRpb24gYXJyYXlzIHdoaWNoIGFyZSBhIG1lZGlhIHF1ZXJ5IGFuZCBvcHRpb25zIG9iamVjdCBwYWlyID0+IFtbbWVkaWFRdWVyeVN0cmluZywgb3B0aW9uc09iamVjdF0sW21vcmUuLi5dXVxuICAgKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCB3aGljaCBleHBvc2VzIHRoZSBBUEkgZm9yIHRoZSBjcmVhdGVkIGNoYXJ0XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIC8vIENyZWF0ZSBhIHNpbXBsZSBsaW5lIGNoYXJ0XG4gICAqIHZhciBkYXRhID0ge1xuICAgKiAgIC8vIEEgbGFiZWxzIGFycmF5IHRoYXQgY2FuIGNvbnRhaW4gYW55IHNvcnQgb2YgdmFsdWVzXG4gICAqICAgbGFiZWxzOiBbJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknXSxcbiAgICogICAvLyBPdXIgc2VyaWVzIGFycmF5IHRoYXQgY29udGFpbnMgc2VyaWVzIG9iamVjdHMgb3IgaW4gdGhpcyBjYXNlIHNlcmllcyBkYXRhIGFycmF5c1xuICAgKiAgIHNlcmllczogW1xuICAgKiAgICAgWzUsIDIsIDQsIDIsIDBdXG4gICAqICAgXVxuICAgKiB9O1xuICAgKlxuICAgKiAvLyBBcyBvcHRpb25zIHdlIGN1cnJlbnRseSBvbmx5IHNldCBhIHN0YXRpYyBzaXplIG9mIDMwMHgyMDAgcHhcbiAgICogdmFyIG9wdGlvbnMgPSB7XG4gICAqICAgd2lkdGg6ICczMDBweCcsXG4gICAqICAgaGVpZ2h0OiAnMjAwcHgnXG4gICAqIH07XG4gICAqXG4gICAqIC8vIEluIHRoZSBnbG9iYWwgbmFtZSBzcGFjZSBDaGFydGlzdCB3ZSBjYWxsIHRoZSBMaW5lIGZ1bmN0aW9uIHRvIGluaXRpYWxpemUgYSBsaW5lIGNoYXJ0LiBBcyBhIGZpcnN0IHBhcmFtZXRlciB3ZSBwYXNzIGluIGEgc2VsZWN0b3Igd2hlcmUgd2Ugd291bGQgbGlrZSB0byBnZXQgb3VyIGNoYXJ0IGNyZWF0ZWQuIFNlY29uZCBwYXJhbWV0ZXIgaXMgdGhlIGFjdHVhbCBkYXRhIG9iamVjdCBhbmQgYXMgYSB0aGlyZCBwYXJhbWV0ZXIgd2UgcGFzcyBpbiBvdXIgb3B0aW9uc1xuICAgKiBuZXcgQ2hhcnRpc3QuTGluZSgnLmN0LWNoYXJ0JywgZGF0YSwgb3B0aW9ucyk7XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIC8vIFVzZSBzcGVjaWZpYyBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uIHdpdGggY29uZmlndXJhdGlvbiBmcm9tIHRoZSBDaGFydGlzdC5JbnRlcnBvbGF0aW9uIG1vZHVsZVxuICAgKlxuICAgKiB2YXIgY2hhcnQgPSBuZXcgQ2hhcnRpc3QuTGluZSgnLmN0LWNoYXJ0Jywge1xuICAgKiAgIGxhYmVsczogWzEsIDIsIDMsIDQsIDVdLFxuICAgKiAgIHNlcmllczogW1xuICAgKiAgICAgWzEsIDEsIDgsIDEsIDddXG4gICAqICAgXVxuICAgKiB9LCB7XG4gICAqICAgbGluZVNtb290aDogQ2hhcnRpc3QuSW50ZXJwb2xhdGlvbi5jYXJkaW5hbCh7XG4gICAqICAgICB0ZW5zaW9uOiAwLjJcbiAgICogICB9KVxuICAgKiB9KTtcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogLy8gQ3JlYXRlIGEgbGluZSBjaGFydCB3aXRoIHJlc3BvbnNpdmUgb3B0aW9uc1xuICAgKlxuICAgKiB2YXIgZGF0YSA9IHtcbiAgICogICAvLyBBIGxhYmVscyBhcnJheSB0aGF0IGNhbiBjb250YWluIGFueSBzb3J0IG9mIHZhbHVlc1xuICAgKiAgIGxhYmVsczogWydNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5J10sXG4gICAqICAgLy8gT3VyIHNlcmllcyBhcnJheSB0aGF0IGNvbnRhaW5zIHNlcmllcyBvYmplY3RzIG9yIGluIHRoaXMgY2FzZSBzZXJpZXMgZGF0YSBhcnJheXNcbiAgICogICBzZXJpZXM6IFtcbiAgICogICAgIFs1LCAyLCA0LCAyLCAwXVxuICAgKiAgIF1cbiAgICogfTtcbiAgICpcbiAgICogLy8gSW4gYWRkaXRpb24gdG8gdGhlIHJlZ3VsYXIgb3B0aW9ucyB3ZSBzcGVjaWZ5IHJlc3BvbnNpdmUgb3B0aW9uIG92ZXJyaWRlcyB0aGF0IHdpbGwgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgY29uZmlndXRhdGlvbiBiYXNlZCBvbiB0aGUgbWF0Y2hpbmcgbWVkaWEgcXVlcmllcy5cbiAgICogdmFyIHJlc3BvbnNpdmVPcHRpb25zID0gW1xuICAgKiAgIFsnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDFweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCknLCB7XG4gICAqICAgICBzaG93UG9pbnQ6IGZhbHNlLFxuICAgKiAgICAgYXhpc1g6IHtcbiAgICogICAgICAgbGFiZWxJbnRlcnBvbGF0aW9uRm5jOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgKiAgICAgICAgIC8vIFdpbGwgcmV0dXJuIE1vbiwgVHVlLCBXZWQgZXRjLiBvbiBtZWRpdW0gc2NyZWVuc1xuICAgKiAgICAgICAgIHJldHVybiB2YWx1ZS5zbGljZSgwLCAzKTtcbiAgICogICAgICAgfVxuICAgKiAgICAgfVxuICAgKiAgIH1dLFxuICAgKiAgIFsnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCknLCB7XG4gICAqICAgICBzaG93TGluZTogZmFsc2UsXG4gICAqICAgICBheGlzWDoge1xuICAgKiAgICAgICBsYWJlbEludGVycG9sYXRpb25GbmM6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAqICAgICAgICAgLy8gV2lsbCByZXR1cm4gTSwgVCwgVyBldGMuIG9uIHNtYWxsIHNjcmVlbnNcbiAgICogICAgICAgICByZXR1cm4gdmFsdWVbMF07XG4gICAqICAgICAgIH1cbiAgICogICAgIH1cbiAgICogICB9XVxuICAgKiBdO1xuICAgKlxuICAgKiBuZXcgQ2hhcnRpc3QuTGluZSgnLmN0LWNoYXJ0JywgZGF0YSwgbnVsbCwgcmVzcG9uc2l2ZU9wdGlvbnMpO1xuICAgKlxuICAgKi9cbiAgZnVuY3Rpb24gTGluZShxdWVyeSwgZGF0YSwgb3B0aW9ucywgcmVzcG9uc2l2ZU9wdGlvbnMpIHtcbiAgICBDaGFydGlzdC5MaW5lLnN1cGVyLmNvbnN0cnVjdG9yLmNhbGwodGhpcyxcbiAgICAgIHF1ZXJ5LFxuICAgICAgZGF0YSxcbiAgICAgIGRlZmF1bHRPcHRpb25zLFxuICAgICAgQ2hhcnRpc3QuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyksXG4gICAgICByZXNwb25zaXZlT3B0aW9ucyk7XG4gIH1cblxuICAvLyBDcmVhdGluZyBsaW5lIGNoYXJ0IHR5cGUgaW4gQ2hhcnRpc3QgbmFtZXNwYWNlXG4gIENoYXJ0aXN0LkxpbmUgPSBDaGFydGlzdC5CYXNlLmV4dGVuZCh7XG4gICAgY29uc3RydWN0b3I6IExpbmUsXG4gICAgY3JlYXRlQ2hhcnQ6IGNyZWF0ZUNoYXJ0XG4gIH0pO1xuXG59KHdpbmRvdywgZG9jdW1lbnQsIENoYXJ0aXN0KSk7XG47LyoqXG4gKiBUaGUgYmFyIGNoYXJ0IG1vZHVsZSBvZiBDaGFydGlzdCB0aGF0IGNhbiBiZSB1c2VkIHRvIGRyYXcgdW5pcG9sYXIgb3IgYmlwb2xhciBiYXIgYW5kIGdyb3VwZWQgYmFyIGNoYXJ0cy5cbiAqXG4gKiBAbW9kdWxlIENoYXJ0aXN0LkJhclxuICovXG4vKiBnbG9iYWwgQ2hhcnRpc3QgKi9cbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCBDaGFydGlzdCl7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogRGVmYXVsdCBvcHRpb25zIGluIGJhciBjaGFydHMuIEV4cGFuZCB0aGUgY29kZSB2aWV3IHRvIHNlZSBhIGRldGFpbGVkIGxpc3Qgb2Ygb3B0aW9ucyB3aXRoIGNvbW1lbnRzLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQmFyXG4gICAqL1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgLy8gT3B0aW9ucyBmb3IgWC1BeGlzXG4gICAgYXhpc1g6IHtcbiAgICAgIC8vIFRoZSBvZmZzZXQgb2YgdGhlIGNoYXJ0IGRyYXdpbmcgYXJlYSB0byB0aGUgYm9yZGVyIG9mIHRoZSBjb250YWluZXJcbiAgICAgIG9mZnNldDogMzAsXG4gICAgICAvLyBQb3NpdGlvbiB3aGVyZSBsYWJlbHMgYXJlIHBsYWNlZC4gQ2FuIGJlIHNldCB0byBgc3RhcnRgIG9yIGBlbmRgIHdoZXJlIGBzdGFydGAgaXMgZXF1aXZhbGVudCB0byBsZWZ0IG9yIHRvcCBvbiB2ZXJ0aWNhbCBheGlzIGFuZCBgZW5kYCBpcyBlcXVpdmFsZW50IHRvIHJpZ2h0IG9yIGJvdHRvbSBvbiBob3Jpem9udGFsIGF4aXMuXG4gICAgICBwb3NpdGlvbjogJ2VuZCcsXG4gICAgICAvLyBBbGxvd3MgeW91IHRvIGNvcnJlY3QgbGFiZWwgcG9zaXRpb25pbmcgb24gdGhpcyBheGlzIGJ5IHBvc2l0aXZlIG9yIG5lZ2F0aXZlIHggYW5kIHkgb2Zmc2V0LlxuICAgICAgbGFiZWxPZmZzZXQ6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgICAgfSxcbiAgICAgIC8vIElmIGxhYmVscyBzaG91bGQgYmUgc2hvd24gb3Igbm90XG4gICAgICBzaG93TGFiZWw6IHRydWUsXG4gICAgICAvLyBJZiB0aGUgYXhpcyBncmlkIHNob3VsZCBiZSBkcmF3biBvciBub3RcbiAgICAgIHNob3dHcmlkOiB0cnVlLFxuICAgICAgLy8gSW50ZXJwb2xhdGlvbiBmdW5jdGlvbiB0aGF0IGFsbG93cyB5b3UgdG8gaW50ZXJjZXB0IHRoZSB2YWx1ZSBmcm9tIHRoZSBheGlzIGxhYmVsXG4gICAgICBsYWJlbEludGVycG9sYXRpb25GbmM6IENoYXJ0aXN0Lm5vb3AsXG4gICAgICAvLyBUaGlzIHZhbHVlIHNwZWNpZmllcyB0aGUgbWluaW11bSB3aWR0aCBpbiBwaXhlbCBvZiB0aGUgc2NhbGUgc3RlcHNcbiAgICAgIHNjYWxlTWluU3BhY2U6IDMwLFxuICAgICAgLy8gVXNlIG9ubHkgaW50ZWdlciB2YWx1ZXMgKHdob2xlIG51bWJlcnMpIGZvciB0aGUgc2NhbGUgc3RlcHNcbiAgICAgIG9ubHlJbnRlZ2VyOiBmYWxzZVxuICAgIH0sXG4gICAgLy8gT3B0aW9ucyBmb3IgWS1BeGlzXG4gICAgYXhpc1k6IHtcbiAgICAgIC8vIFRoZSBvZmZzZXQgb2YgdGhlIGNoYXJ0IGRyYXdpbmcgYXJlYSB0byB0aGUgYm9yZGVyIG9mIHRoZSBjb250YWluZXJcbiAgICAgIG9mZnNldDogNDAsXG4gICAgICAvLyBQb3NpdGlvbiB3aGVyZSBsYWJlbHMgYXJlIHBsYWNlZC4gQ2FuIGJlIHNldCB0byBgc3RhcnRgIG9yIGBlbmRgIHdoZXJlIGBzdGFydGAgaXMgZXF1aXZhbGVudCB0byBsZWZ0IG9yIHRvcCBvbiB2ZXJ0aWNhbCBheGlzIGFuZCBgZW5kYCBpcyBlcXVpdmFsZW50IHRvIHJpZ2h0IG9yIGJvdHRvbSBvbiBob3Jpem9udGFsIGF4aXMuXG4gICAgICBwb3NpdGlvbjogJ3N0YXJ0JyxcbiAgICAgIC8vIEFsbG93cyB5b3UgdG8gY29ycmVjdCBsYWJlbCBwb3NpdGlvbmluZyBvbiB0aGlzIGF4aXMgYnkgcG9zaXRpdmUgb3IgbmVnYXRpdmUgeCBhbmQgeSBvZmZzZXQuXG4gICAgICBsYWJlbE9mZnNldDoge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwXG4gICAgICB9LFxuICAgICAgLy8gSWYgbGFiZWxzIHNob3VsZCBiZSBzaG93biBvciBub3RcbiAgICAgIHNob3dMYWJlbDogdHJ1ZSxcbiAgICAgIC8vIElmIHRoZSBheGlzIGdyaWQgc2hvdWxkIGJlIGRyYXduIG9yIG5vdFxuICAgICAgc2hvd0dyaWQ6IHRydWUsXG4gICAgICAvLyBJbnRlcnBvbGF0aW9uIGZ1bmN0aW9uIHRoYXQgYWxsb3dzIHlvdSB0byBpbnRlcmNlcHQgdGhlIHZhbHVlIGZyb20gdGhlIGF4aXMgbGFiZWxcbiAgICAgIGxhYmVsSW50ZXJwb2xhdGlvbkZuYzogQ2hhcnRpc3Qubm9vcCxcbiAgICAgIC8vIFRoaXMgdmFsdWUgc3BlY2lmaWVzIHRoZSBtaW5pbXVtIGhlaWdodCBpbiBwaXhlbCBvZiB0aGUgc2NhbGUgc3RlcHNcbiAgICAgIHNjYWxlTWluU3BhY2U6IDIwLFxuICAgICAgLy8gVXNlIG9ubHkgaW50ZWdlciB2YWx1ZXMgKHdob2xlIG51bWJlcnMpIGZvciB0aGUgc2NhbGUgc3RlcHNcbiAgICAgIG9ubHlJbnRlZ2VyOiBmYWxzZVxuICAgIH0sXG4gICAgLy8gU3BlY2lmeSBhIGZpeGVkIHdpZHRoIGZvciB0aGUgY2hhcnQgYXMgYSBzdHJpbmcgKGkuZS4gJzEwMHB4JyBvciAnNTAlJylcbiAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgIC8vIFNwZWNpZnkgYSBmaXhlZCBoZWlnaHQgZm9yIHRoZSBjaGFydCBhcyBhIHN0cmluZyAoaS5lLiAnMTAwcHgnIG9yICc1MCUnKVxuICAgIGhlaWdodDogdW5kZWZpbmVkLFxuICAgIC8vIE92ZXJyaWRpbmcgdGhlIG5hdHVyYWwgaGlnaCBvZiB0aGUgY2hhcnQgYWxsb3dzIHlvdSB0byB6b29tIGluIG9yIGxpbWl0IHRoZSBjaGFydHMgaGlnaGVzdCBkaXNwbGF5ZWQgdmFsdWVcbiAgICBoaWdoOiB1bmRlZmluZWQsXG4gICAgLy8gT3ZlcnJpZGluZyB0aGUgbmF0dXJhbCBsb3cgb2YgdGhlIGNoYXJ0IGFsbG93cyB5b3UgdG8gem9vbSBpbiBvciBsaW1pdCB0aGUgY2hhcnRzIGxvd2VzdCBkaXNwbGF5ZWQgdmFsdWVcbiAgICBsb3c6IHVuZGVmaW5lZCxcbiAgICAvLyBVbmxlc3MgbG93L2hpZ2ggYXJlIGV4cGxpY2l0bHkgc2V0LCBiYXIgY2hhcnQgd2lsbCBiZSBjZW50ZXJlZCBhdCB6ZXJvIGJ5IGRlZmF1bHQuIFNldCByZWZlcmVuY2VWYWx1ZSB0byBudWxsIHRvIGF1dG8gc2NhbGUuXG4gICAgcmVmZXJlbmNlVmFsdWU6IDAsXG4gICAgLy8gUGFkZGluZyBvZiB0aGUgY2hhcnQgZHJhd2luZyBhcmVhIHRvIHRoZSBjb250YWluZXIgZWxlbWVudCBhbmQgbGFiZWxzIGFzIGEgbnVtYmVyIG9yIHBhZGRpbmcgb2JqZWN0IHt0b3A6IDUsIHJpZ2h0OiA1LCBib3R0b206IDUsIGxlZnQ6IDV9XG4gICAgY2hhcnRQYWRkaW5nOiB7XG4gICAgICB0b3A6IDE1LFxuICAgICAgcmlnaHQ6IDE1LFxuICAgICAgYm90dG9tOiA1LFxuICAgICAgbGVmdDogMTBcbiAgICB9LFxuICAgIC8vIFNwZWNpZnkgdGhlIGRpc3RhbmNlIGluIHBpeGVsIG9mIGJhcnMgaW4gYSBncm91cFxuICAgIHNlcmllc0JhckRpc3RhbmNlOiAxNSxcbiAgICAvLyBJZiBzZXQgdG8gdHJ1ZSB0aGlzIHByb3BlcnR5IHdpbGwgY2F1c2UgdGhlIHNlcmllcyBiYXJzIHRvIGJlIHN0YWNrZWQuIENoZWNrIHRoZSBgc3RhY2tNb2RlYCBvcHRpb24gZm9yIGZ1cnRoZXIgc3RhY2tpbmcgb3B0aW9ucy5cbiAgICBzdGFja0JhcnM6IGZhbHNlLFxuICAgIC8vIElmIHNldCB0byAnb3ZlcmxhcCcgdGhpcyBwcm9wZXJ0eSB3aWxsIGZvcmNlIHRoZSBzdGFja2VkIGJhcnMgdG8gZHJhdyBmcm9tIHRoZSB6ZXJvIGxpbmUuXG4gICAgLy8gSWYgc2V0IHRvICdhY2N1bXVsYXRlJyB0aGlzIHByb3BlcnR5IHdpbGwgZm9ybSBhIHRvdGFsIGZvciBlYWNoIHNlcmllcyBwb2ludC4gVGhpcyB3aWxsIGFsc28gaW5mbHVlbmNlIHRoZSB5LWF4aXMgYW5kIHRoZSBvdmVyYWxsIGJvdW5kcyBvZiB0aGUgY2hhcnQuIEluIHN0YWNrZWQgbW9kZSB0aGUgc2VyaWVzQmFyRGlzdGFuY2UgcHJvcGVydHkgd2lsbCBoYXZlIG5vIGVmZmVjdC5cbiAgICBzdGFja01vZGU6ICdhY2N1bXVsYXRlJyxcbiAgICAvLyBJbnZlcnRzIHRoZSBheGVzIG9mIHRoZSBiYXIgY2hhcnQgaW4gb3JkZXIgdG8gZHJhdyBhIGhvcml6b250YWwgYmFyIGNoYXJ0LiBCZSBhd2FyZSB0aGF0IHlvdSBhbHNvIG5lZWQgdG8gaW52ZXJ0IHlvdXIgYXhpcyBzZXR0aW5ncyBhcyB0aGUgWSBBeGlzIHdpbGwgbm93IGRpc3BsYXkgdGhlIGxhYmVscyBhbmQgdGhlIFggQXhpcyB0aGUgdmFsdWVzLlxuICAgIGhvcml6b250YWxCYXJzOiBmYWxzZSxcbiAgICAvLyBJZiBzZXQgdG8gdHJ1ZSB0aGVuIGVhY2ggYmFyIHdpbGwgcmVwcmVzZW50IGEgc2VyaWVzIGFuZCB0aGUgZGF0YSBhcnJheSBpcyBleHBlY3RlZCB0byBiZSBhIG9uZSBkaW1lbnNpb25hbCBhcnJheSBvZiBkYXRhIHZhbHVlcyByYXRoZXIgdGhhbiBhIHNlcmllcyBhcnJheSBvZiBzZXJpZXMuIFRoaXMgaXMgdXNlZnVsIGlmIHRoZSBiYXIgY2hhcnQgc2hvdWxkIHJlcHJlc2VudCBhIHByb2ZpbGUgcmF0aGVyIHRoYW4gc29tZSBkYXRhIG92ZXIgdGltZS5cbiAgICBkaXN0cmlidXRlU2VyaWVzOiBmYWxzZSxcbiAgICAvLyBJZiB0cnVlIHRoZSB3aG9sZSBkYXRhIGlzIHJldmVyc2VkIGluY2x1ZGluZyBsYWJlbHMsIHRoZSBzZXJpZXMgb3JkZXIgYXMgd2VsbCBhcyB0aGUgd2hvbGUgc2VyaWVzIGRhdGEgYXJyYXlzLlxuICAgIHJldmVyc2VEYXRhOiBmYWxzZSxcbiAgICAvLyBJZiB0aGUgYmFyIGNoYXJ0IHNob3VsZCBhZGQgYSBiYWNrZ3JvdW5kIGZpbGwgdG8gdGhlIC5jdC1ncmlkcyBncm91cC5cbiAgICBzaG93R3JpZEJhY2tncm91bmQ6IGZhbHNlLFxuICAgIC8vIE92ZXJyaWRlIHRoZSBjbGFzcyBuYW1lcyB0aGF0IGdldCB1c2VkIHRvIGdlbmVyYXRlIHRoZSBTVkcgc3RydWN0dXJlIG9mIHRoZSBjaGFydFxuICAgIGNsYXNzTmFtZXM6IHtcbiAgICAgIGNoYXJ0OiAnY3QtY2hhcnQtYmFyJyxcbiAgICAgIGhvcml6b250YWxCYXJzOiAnY3QtaG9yaXpvbnRhbC1iYXJzJyxcbiAgICAgIGxhYmVsOiAnY3QtbGFiZWwnLFxuICAgICAgbGFiZWxHcm91cDogJ2N0LWxhYmVscycsXG4gICAgICBzZXJpZXM6ICdjdC1zZXJpZXMnLFxuICAgICAgYmFyOiAnY3QtYmFyJyxcbiAgICAgIGdyaWQ6ICdjdC1ncmlkJyxcbiAgICAgIGdyaWRHcm91cDogJ2N0LWdyaWRzJyxcbiAgICAgIGdyaWRCYWNrZ3JvdW5kOiAnY3QtZ3JpZC1iYWNrZ3JvdW5kJyxcbiAgICAgIHZlcnRpY2FsOiAnY3QtdmVydGljYWwnLFxuICAgICAgaG9yaXpvbnRhbDogJ2N0LWhvcml6b250YWwnLFxuICAgICAgc3RhcnQ6ICdjdC1zdGFydCcsXG4gICAgICBlbmQ6ICdjdC1lbmQnXG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGNoYXJ0XG4gICAqXG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVDaGFydChvcHRpb25zKSB7XG4gICAgdmFyIGRhdGE7XG4gICAgdmFyIGhpZ2hMb3c7XG5cbiAgICBpZihvcHRpb25zLmRpc3RyaWJ1dGVTZXJpZXMpIHtcbiAgICAgIGRhdGEgPSBDaGFydGlzdC5ub3JtYWxpemVEYXRhKHRoaXMuZGF0YSwgb3B0aW9ucy5yZXZlcnNlRGF0YSwgb3B0aW9ucy5ob3Jpem9udGFsQmFycyA/ICd4JyA6ICd5Jyk7XG4gICAgICBkYXRhLm5vcm1hbGl6ZWQuc2VyaWVzID0gZGF0YS5ub3JtYWxpemVkLnNlcmllcy5tYXAoZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFt2YWx1ZV07XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IENoYXJ0aXN0Lm5vcm1hbGl6ZURhdGEodGhpcy5kYXRhLCBvcHRpb25zLnJldmVyc2VEYXRhLCBvcHRpb25zLmhvcml6b250YWxCYXJzID8gJ3gnIDogJ3knKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgbmV3IHN2ZyBlbGVtZW50XG4gICAgdGhpcy5zdmcgPSBDaGFydGlzdC5jcmVhdGVTdmcoXG4gICAgICB0aGlzLmNvbnRhaW5lcixcbiAgICAgIG9wdGlvbnMud2lkdGgsXG4gICAgICBvcHRpb25zLmhlaWdodCxcbiAgICAgIG9wdGlvbnMuY2xhc3NOYW1lcy5jaGFydCArIChvcHRpb25zLmhvcml6b250YWxCYXJzID8gJyAnICsgb3B0aW9ucy5jbGFzc05hbWVzLmhvcml6b250YWxCYXJzIDogJycpXG4gICAgKTtcblxuICAgIC8vIERyYXdpbmcgZ3JvdXBzIGluIGNvcnJlY3Qgb3JkZXJcbiAgICB2YXIgZ3JpZEdyb3VwID0gdGhpcy5zdmcuZWxlbSgnZycpLmFkZENsYXNzKG9wdGlvbnMuY2xhc3NOYW1lcy5ncmlkR3JvdXApO1xuICAgIHZhciBzZXJpZXNHcm91cCA9IHRoaXMuc3ZnLmVsZW0oJ2cnKTtcbiAgICB2YXIgbGFiZWxHcm91cCA9IHRoaXMuc3ZnLmVsZW0oJ2cnKS5hZGRDbGFzcyhvcHRpb25zLmNsYXNzTmFtZXMubGFiZWxHcm91cCk7XG5cbiAgICBpZihvcHRpb25zLnN0YWNrQmFycyAmJiBkYXRhLm5vcm1hbGl6ZWQuc2VyaWVzLmxlbmd0aCAhPT0gMCkge1xuXG4gICAgICAvLyBJZiBzdGFja2VkIGJhcnMgd2UgbmVlZCB0byBjYWxjdWxhdGUgdGhlIGhpZ2ggbG93IGZyb20gc3RhY2tlZCB2YWx1ZXMgZnJvbSBlYWNoIHNlcmllc1xuICAgICAgdmFyIHNlcmlhbFN1bXMgPSBDaGFydGlzdC5zZXJpYWxNYXAoZGF0YS5ub3JtYWxpemVkLnNlcmllcywgZnVuY3Rpb24gc2VyaWFsU3VtcygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykubWFwKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9KS5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3Vycikge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBwcmV2LnggKyAoY3VyciAmJiBjdXJyLngpIHx8IDAsXG4gICAgICAgICAgICB5OiBwcmV2LnkgKyAoY3VyciAmJiBjdXJyLnkpIHx8IDBcbiAgICAgICAgICB9O1xuICAgICAgICB9LCB7eDogMCwgeTogMH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGhpZ2hMb3cgPSBDaGFydGlzdC5nZXRIaWdoTG93KFtzZXJpYWxTdW1zXSwgb3B0aW9ucywgb3B0aW9ucy5ob3Jpem9udGFsQmFycyA/ICd4JyA6ICd5Jyk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICBoaWdoTG93ID0gQ2hhcnRpc3QuZ2V0SGlnaExvdyhkYXRhLm5vcm1hbGl6ZWQuc2VyaWVzLCBvcHRpb25zLCBvcHRpb25zLmhvcml6b250YWxCYXJzID8gJ3gnIDogJ3knKTtcbiAgICB9XG5cbiAgICAvLyBPdmVycmlkZXMgb2YgaGlnaCAvIGxvdyBmcm9tIHNldHRpbmdzXG4gICAgaGlnaExvdy5oaWdoID0gK29wdGlvbnMuaGlnaCB8fCAob3B0aW9ucy5oaWdoID09PSAwID8gMCA6IGhpZ2hMb3cuaGlnaCk7XG4gICAgaGlnaExvdy5sb3cgPSArb3B0aW9ucy5sb3cgfHwgKG9wdGlvbnMubG93ID09PSAwID8gMCA6IGhpZ2hMb3cubG93KTtcblxuICAgIHZhciBjaGFydFJlY3QgPSBDaGFydGlzdC5jcmVhdGVDaGFydFJlY3QodGhpcy5zdmcsIG9wdGlvbnMsIGRlZmF1bHRPcHRpb25zLnBhZGRpbmcpO1xuXG4gICAgdmFyIHZhbHVlQXhpcyxcbiAgICAgIGxhYmVsQXhpc1RpY2tzLFxuICAgICAgbGFiZWxBeGlzLFxuICAgICAgYXhpc1gsXG4gICAgICBheGlzWTtcblxuICAgIC8vIFdlIG5lZWQgdG8gc2V0IHN0ZXAgY291bnQgYmFzZWQgb24gc29tZSBvcHRpb25zIGNvbWJpbmF0aW9uc1xuICAgIGlmKG9wdGlvbnMuZGlzdHJpYnV0ZVNlcmllcyAmJiBvcHRpb25zLnN0YWNrQmFycykge1xuICAgICAgLy8gSWYgZGlzdHJpYnV0ZWQgc2VyaWVzIGFyZSBlbmFibGVkIGFuZCBiYXJzIG5lZWQgdG8gYmUgc3RhY2tlZCwgd2UnbGwgb25seSBoYXZlIG9uZSBiYXIgYW5kIHRoZXJlZm9yZSBzaG91bGRcbiAgICAgIC8vIHVzZSBvbmx5IHRoZSBmaXJzdCBsYWJlbCBmb3IgdGhlIHN0ZXAgYXhpc1xuICAgICAgbGFiZWxBeGlzVGlja3MgPSBkYXRhLm5vcm1hbGl6ZWQubGFiZWxzLnNsaWNlKDAsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiBkaXN0cmlidXRlZCBzZXJpZXMgYXJlIGVuYWJsZWQgYnV0IHN0YWNrZWQgYmFycyBhcmVuJ3QsIHdlIHNob3VsZCB1c2UgdGhlIHNlcmllcyBsYWJlbHNcbiAgICAgIC8vIElmIHdlIGFyZSBkcmF3aW5nIGEgcmVndWxhciBiYXIgY2hhcnQgd2l0aCB0d28gZGltZW5zaW9uYWwgc2VyaWVzIGRhdGEsIHdlIGp1c3QgdXNlIHRoZSBsYWJlbHMgYXJyYXlcbiAgICAgIC8vIGFzIHRoZSBiYXJzIGFyZSBub3JtYWxpemVkXG4gICAgICBsYWJlbEF4aXNUaWNrcyA9IGRhdGEubm9ybWFsaXplZC5sYWJlbHM7XG4gICAgfVxuXG4gICAgLy8gU2V0IGxhYmVsQXhpcyBhbmQgdmFsdWVBeGlzIGJhc2VkIG9uIHRoZSBob3Jpem9udGFsQmFycyBzZXR0aW5nLiBUaGlzIHNldHRpbmcgd2lsbCBmbGlwIHRoZSBheGVzIGlmIG5lY2Vzc2FyeS5cbiAgICBpZihvcHRpb25zLmhvcml6b250YWxCYXJzKSB7XG4gICAgICBpZihvcHRpb25zLmF4aXNYLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWx1ZUF4aXMgPSBheGlzWCA9IG5ldyBDaGFydGlzdC5BdXRvU2NhbGVBeGlzKENoYXJ0aXN0LkF4aXMudW5pdHMueCwgZGF0YS5ub3JtYWxpemVkLnNlcmllcywgY2hhcnRSZWN0LCBDaGFydGlzdC5leHRlbmQoe30sIG9wdGlvbnMuYXhpc1gsIHtcbiAgICAgICAgICBoaWdoTG93OiBoaWdoTG93LFxuICAgICAgICAgIHJlZmVyZW5jZVZhbHVlOiAwXG4gICAgICAgIH0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlQXhpcyA9IGF4aXNYID0gb3B0aW9ucy5heGlzWC50eXBlLmNhbGwoQ2hhcnRpc3QsIENoYXJ0aXN0LkF4aXMudW5pdHMueCwgZGF0YS5ub3JtYWxpemVkLnNlcmllcywgY2hhcnRSZWN0LCBDaGFydGlzdC5leHRlbmQoe30sIG9wdGlvbnMuYXhpc1gsIHtcbiAgICAgICAgICBoaWdoTG93OiBoaWdoTG93LFxuICAgICAgICAgIHJlZmVyZW5jZVZhbHVlOiAwXG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy5heGlzWS50eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGFiZWxBeGlzID0gYXhpc1kgPSBuZXcgQ2hhcnRpc3QuU3RlcEF4aXMoQ2hhcnRpc3QuQXhpcy51bml0cy55LCBkYXRhLm5vcm1hbGl6ZWQuc2VyaWVzLCBjaGFydFJlY3QsIHtcbiAgICAgICAgICB0aWNrczogbGFiZWxBeGlzVGlja3NcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYWJlbEF4aXMgPSBheGlzWSA9IG9wdGlvbnMuYXhpc1kudHlwZS5jYWxsKENoYXJ0aXN0LCBDaGFydGlzdC5BeGlzLnVuaXRzLnksIGRhdGEubm9ybWFsaXplZC5zZXJpZXMsIGNoYXJ0UmVjdCwgb3B0aW9ucy5heGlzWSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKG9wdGlvbnMuYXhpc1gudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxhYmVsQXhpcyA9IGF4aXNYID0gbmV3IENoYXJ0aXN0LlN0ZXBBeGlzKENoYXJ0aXN0LkF4aXMudW5pdHMueCwgZGF0YS5ub3JtYWxpemVkLnNlcmllcywgY2hhcnRSZWN0LCB7XG4gICAgICAgICAgdGlja3M6IGxhYmVsQXhpc1RpY2tzXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFiZWxBeGlzID0gYXhpc1ggPSBvcHRpb25zLmF4aXNYLnR5cGUuY2FsbChDaGFydGlzdCwgQ2hhcnRpc3QuQXhpcy51bml0cy54LCBkYXRhLm5vcm1hbGl6ZWQuc2VyaWVzLCBjaGFydFJlY3QsIG9wdGlvbnMuYXhpc1gpO1xuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLmF4aXNZLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWx1ZUF4aXMgPSBheGlzWSA9IG5ldyBDaGFydGlzdC5BdXRvU2NhbGVBeGlzKENoYXJ0aXN0LkF4aXMudW5pdHMueSwgZGF0YS5ub3JtYWxpemVkLnNlcmllcywgY2hhcnRSZWN0LCBDaGFydGlzdC5leHRlbmQoe30sIG9wdGlvbnMuYXhpc1ksIHtcbiAgICAgICAgICBoaWdoTG93OiBoaWdoTG93LFxuICAgICAgICAgIHJlZmVyZW5jZVZhbHVlOiAwXG4gICAgICAgIH0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlQXhpcyA9IGF4aXNZID0gb3B0aW9ucy5heGlzWS50eXBlLmNhbGwoQ2hhcnRpc3QsIENoYXJ0aXN0LkF4aXMudW5pdHMueSwgZGF0YS5ub3JtYWxpemVkLnNlcmllcywgY2hhcnRSZWN0LCBDaGFydGlzdC5leHRlbmQoe30sIG9wdGlvbnMuYXhpc1ksIHtcbiAgICAgICAgICBoaWdoTG93OiBoaWdoTG93LFxuICAgICAgICAgIHJlZmVyZW5jZVZhbHVlOiAwXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQcm9qZWN0ZWQgMCBwb2ludFxuICAgIHZhciB6ZXJvUG9pbnQgPSBvcHRpb25zLmhvcml6b250YWxCYXJzID8gKGNoYXJ0UmVjdC54MSArIHZhbHVlQXhpcy5wcm9qZWN0VmFsdWUoMCkpIDogKGNoYXJ0UmVjdC55MSAtIHZhbHVlQXhpcy5wcm9qZWN0VmFsdWUoMCkpO1xuICAgIC8vIFVzZWQgdG8gdHJhY2sgdGhlIHNjcmVlbiBjb29yZGluYXRlcyBvZiBzdGFja2VkIGJhcnNcbiAgICB2YXIgc3RhY2tlZEJhclZhbHVlcyA9IFtdO1xuXG4gICAgbGFiZWxBeGlzLmNyZWF0ZUdyaWRBbmRMYWJlbHMoZ3JpZEdyb3VwLCBsYWJlbEdyb3VwLCB0aGlzLnN1cHBvcnRzRm9yZWlnbk9iamVjdCwgb3B0aW9ucywgdGhpcy5ldmVudEVtaXR0ZXIpO1xuICAgIHZhbHVlQXhpcy5jcmVhdGVHcmlkQW5kTGFiZWxzKGdyaWRHcm91cCwgbGFiZWxHcm91cCwgdGhpcy5zdXBwb3J0c0ZvcmVpZ25PYmplY3QsIG9wdGlvbnMsIHRoaXMuZXZlbnRFbWl0dGVyKTtcblxuICAgIGlmIChvcHRpb25zLnNob3dHcmlkQmFja2dyb3VuZCkge1xuICAgICAgQ2hhcnRpc3QuY3JlYXRlR3JpZEJhY2tncm91bmQoZ3JpZEdyb3VwLCBjaGFydFJlY3QsIG9wdGlvbnMuY2xhc3NOYW1lcy5ncmlkQmFja2dyb3VuZCwgdGhpcy5ldmVudEVtaXR0ZXIpO1xuICAgIH1cblxuICAgIC8vIERyYXcgdGhlIHNlcmllc1xuICAgIGRhdGEucmF3LnNlcmllcy5mb3JFYWNoKGZ1bmN0aW9uKHNlcmllcywgc2VyaWVzSW5kZXgpIHtcbiAgICAgIC8vIENhbGN1bGF0aW5nIGJpLXBvbGFyIHZhbHVlIG9mIGluZGV4IGZvciBzZXJpZXNPZmZzZXQuIEZvciBpID0gMC4uNCBiaVBvbCB3aWxsIGJlIC0xLjUsIC0wLjUsIDAuNSwgMS41IGV0Yy5cbiAgICAgIHZhciBiaVBvbCA9IHNlcmllc0luZGV4IC0gKGRhdGEucmF3LnNlcmllcy5sZW5ndGggLSAxKSAvIDI7XG4gICAgICAvLyBIYWxmIG9mIHRoZSBwZXJpb2Qgd2lkdGggYmV0d2VlbiB2ZXJ0aWNhbCBncmlkIGxpbmVzIHVzZWQgdG8gcG9zaXRpb24gYmFyc1xuICAgICAgdmFyIHBlcmlvZEhhbGZMZW5ndGg7XG4gICAgICAvLyBDdXJyZW50IHNlcmllcyBTVkcgZWxlbWVudFxuICAgICAgdmFyIHNlcmllc0VsZW1lbnQ7XG5cbiAgICAgIC8vIFdlIG5lZWQgdG8gc2V0IHBlcmlvZEhhbGZMZW5ndGggYmFzZWQgb24gc29tZSBvcHRpb25zIGNvbWJpbmF0aW9uc1xuICAgICAgaWYob3B0aW9ucy5kaXN0cmlidXRlU2VyaWVzICYmICFvcHRpb25zLnN0YWNrQmFycykge1xuICAgICAgICAvLyBJZiBkaXN0cmlidXRlZCBzZXJpZXMgYXJlIGVuYWJsZWQgYnV0IHN0YWNrZWQgYmFycyBhcmVuJ3QsIHdlIG5lZWQgdG8gdXNlIHRoZSBsZW5ndGggb2YgdGhlIG5vcm1haXplZERhdGEgYXJyYXlcbiAgICAgICAgLy8gd2hpY2ggaXMgdGhlIHNlcmllcyBjb3VudCBhbmQgZGl2aWRlIGJ5IDJcbiAgICAgICAgcGVyaW9kSGFsZkxlbmd0aCA9IGxhYmVsQXhpcy5heGlzTGVuZ3RoIC8gZGF0YS5ub3JtYWxpemVkLnNlcmllcy5sZW5ndGggLyAyO1xuICAgICAgfSBlbHNlIGlmKG9wdGlvbnMuZGlzdHJpYnV0ZVNlcmllcyAmJiBvcHRpb25zLnN0YWNrQmFycykge1xuICAgICAgICAvLyBJZiBkaXN0cmlidXRlZCBzZXJpZXMgYW5kIHN0YWNrZWQgYmFycyBhcmUgZW5hYmxlZCB3ZSdsbCBvbmx5IGdldCBvbmUgYmFyIHNvIHdlIHNob3VsZCBqdXN0IGRpdmlkZSB0aGUgYXhpc1xuICAgICAgICAvLyBsZW5ndGggYnkgMlxuICAgICAgICBwZXJpb2RIYWxmTGVuZ3RoID0gbGFiZWxBeGlzLmF4aXNMZW5ndGggLyAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT24gcmVndWxhciBiYXIgY2hhcnRzIHdlIHNob3VsZCBqdXN0IHVzZSB0aGUgc2VyaWVzIGxlbmd0aFxuICAgICAgICBwZXJpb2RIYWxmTGVuZ3RoID0gbGFiZWxBeGlzLmF4aXNMZW5ndGggLyBkYXRhLm5vcm1hbGl6ZWQuc2VyaWVzW3Nlcmllc0luZGV4XS5sZW5ndGggLyAyO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGRpbmcgdGhlIHNlcmllcyBncm91cCB0byB0aGUgc2VyaWVzIGVsZW1lbnRcbiAgICAgIHNlcmllc0VsZW1lbnQgPSBzZXJpZXNHcm91cC5lbGVtKCdnJyk7XG5cbiAgICAgIC8vIFdyaXRlIGF0dHJpYnV0ZXMgdG8gc2VyaWVzIGdyb3VwIGVsZW1lbnQuIElmIHNlcmllcyBuYW1lIG9yIG1ldGEgaXMgdW5kZWZpbmVkIHRoZSBhdHRyaWJ1dGVzIHdpbGwgbm90IGJlIHdyaXR0ZW5cbiAgICAgIHNlcmllc0VsZW1lbnQuYXR0cih7XG4gICAgICAgICdjdDpzZXJpZXMtbmFtZSc6IHNlcmllcy5uYW1lLFxuICAgICAgICAnY3Q6bWV0YSc6IENoYXJ0aXN0LnNlcmlhbGl6ZShzZXJpZXMubWV0YSlcbiAgICAgIH0pO1xuXG4gICAgICAvLyBVc2Ugc2VyaWVzIGNsYXNzIGZyb20gc2VyaWVzIGRhdGEgb3IgaWYgbm90IHNldCBnZW5lcmF0ZSBvbmVcbiAgICAgIHNlcmllc0VsZW1lbnQuYWRkQ2xhc3MoW1xuICAgICAgICBvcHRpb25zLmNsYXNzTmFtZXMuc2VyaWVzLFxuICAgICAgICAoc2VyaWVzLmNsYXNzTmFtZSB8fCBvcHRpb25zLmNsYXNzTmFtZXMuc2VyaWVzICsgJy0nICsgQ2hhcnRpc3QuYWxwaGFOdW1lcmF0ZShzZXJpZXNJbmRleCkpXG4gICAgICBdLmpvaW4oJyAnKSk7XG5cbiAgICAgIGRhdGEubm9ybWFsaXplZC5zZXJpZXNbc2VyaWVzSW5kZXhdLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIHZhbHVlSW5kZXgpIHtcbiAgICAgICAgdmFyIHByb2plY3RlZCxcbiAgICAgICAgICBiYXIsXG4gICAgICAgICAgcHJldmlvdXNTdGFjayxcbiAgICAgICAgICBsYWJlbEF4aXNWYWx1ZUluZGV4O1xuXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gc2V0IGxhYmVsQXhpc1ZhbHVlSW5kZXggYmFzZWQgb24gc29tZSBvcHRpb25zIGNvbWJpbmF0aW9uc1xuICAgICAgICBpZihvcHRpb25zLmRpc3RyaWJ1dGVTZXJpZXMgJiYgIW9wdGlvbnMuc3RhY2tCYXJzKSB7XG4gICAgICAgICAgLy8gSWYgZGlzdHJpYnV0ZWQgc2VyaWVzIGFyZSBlbmFibGVkIGJ1dCBzdGFja2VkIGJhcnMgYXJlbid0LCB3ZSBjYW4gdXNlIHRoZSBzZXJpZXNJbmRleCBmb3IgbGF0ZXIgcHJvamVjdGlvblxuICAgICAgICAgIC8vIG9uIHRoZSBzdGVwIGF4aXMgZm9yIGxhYmVsIHBvc2l0aW9uaW5nXG4gICAgICAgICAgbGFiZWxBeGlzVmFsdWVJbmRleCA9IHNlcmllc0luZGV4O1xuICAgICAgICB9IGVsc2UgaWYob3B0aW9ucy5kaXN0cmlidXRlU2VyaWVzICYmIG9wdGlvbnMuc3RhY2tCYXJzKSB7XG4gICAgICAgICAgLy8gSWYgZGlzdHJpYnV0ZWQgc2VyaWVzIGFuZCBzdGFja2VkIGJhcnMgYXJlIGVuYWJsZWQsIHdlIHdpbGwgb25seSBnZXQgb25lIGJhciBhbmQgdGhlcmVmb3JlIGFsd2F5cyB1c2VcbiAgICAgICAgICAvLyAwIGZvciBwcm9qZWN0aW9uIG9uIHRoZSBsYWJlbCBzdGVwIGF4aXNcbiAgICAgICAgICBsYWJlbEF4aXNWYWx1ZUluZGV4ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPbiByZWd1bGFyIGJhciBjaGFydHMgd2UganVzdCB1c2UgdGhlIHZhbHVlIGluZGV4IHRvIHByb2plY3Qgb24gdGhlIGxhYmVsIHN0ZXAgYXhpc1xuICAgICAgICAgIGxhYmVsQXhpc1ZhbHVlSW5kZXggPSB2YWx1ZUluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2UgbmVlZCB0byB0cmFuc2Zvcm0gY29vcmRpbmF0ZXMgZGlmZmVyZW50bHkgYmFzZWQgb24gdGhlIGNoYXJ0IGxheW91dFxuICAgICAgICBpZihvcHRpb25zLmhvcml6b250YWxCYXJzKSB7XG4gICAgICAgICAgcHJvamVjdGVkID0ge1xuICAgICAgICAgICAgeDogY2hhcnRSZWN0LngxICsgdmFsdWVBeGlzLnByb2plY3RWYWx1ZSh2YWx1ZSAmJiB2YWx1ZS54ID8gdmFsdWUueCA6IDAsIHZhbHVlSW5kZXgsIGRhdGEubm9ybWFsaXplZC5zZXJpZXNbc2VyaWVzSW5kZXhdKSxcbiAgICAgICAgICAgIHk6IGNoYXJ0UmVjdC55MSAtIGxhYmVsQXhpcy5wcm9qZWN0VmFsdWUodmFsdWUgJiYgdmFsdWUueSA/IHZhbHVlLnkgOiAwLCBsYWJlbEF4aXNWYWx1ZUluZGV4LCBkYXRhLm5vcm1hbGl6ZWQuc2VyaWVzW3Nlcmllc0luZGV4XSlcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2plY3RlZCA9IHtcbiAgICAgICAgICAgIHg6IGNoYXJ0UmVjdC54MSArIGxhYmVsQXhpcy5wcm9qZWN0VmFsdWUodmFsdWUgJiYgdmFsdWUueCA/IHZhbHVlLnggOiAwLCBsYWJlbEF4aXNWYWx1ZUluZGV4LCBkYXRhLm5vcm1hbGl6ZWQuc2VyaWVzW3Nlcmllc0luZGV4XSksXG4gICAgICAgICAgICB5OiBjaGFydFJlY3QueTEgLSB2YWx1ZUF4aXMucHJvamVjdFZhbHVlKHZhbHVlICYmIHZhbHVlLnkgPyB2YWx1ZS55IDogMCwgdmFsdWVJbmRleCwgZGF0YS5ub3JtYWxpemVkLnNlcmllc1tzZXJpZXNJbmRleF0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIGxhYmVsIGF4aXMgaXMgYSBzdGVwIGJhc2VkIGF4aXMgd2Ugd2lsbCBvZmZzZXQgdGhlIGJhciBpbnRvIHRoZSBtaWRkbGUgb2YgYmV0d2VlbiB0d28gc3RlcHMgdXNpbmdcbiAgICAgICAgLy8gdGhlIHBlcmlvZEhhbGZMZW5ndGggdmFsdWUuIEFsc28gd2UgZG8gYXJyYW5nZSB0aGUgZGlmZmVyZW50IHNlcmllcyBzbyB0aGF0IHRoZXkgYWxpZ24gdXAgdG8gZWFjaCBvdGhlciB1c2luZ1xuICAgICAgICAvLyB0aGUgc2VyaWVzQmFyRGlzdGFuY2UuIElmIHdlIGRvbid0IGhhdmUgYSBzdGVwIGF4aXMsIHRoZSBiYXIgcG9zaXRpb25zIGNhbiBiZSBjaG9zZW4gZnJlZWx5IHNvIHdlIHNob3VsZCBub3RcbiAgICAgICAgLy8gYWRkIGFueSBhdXRvbWF0ZWQgcG9zaXRpb25pbmcuXG4gICAgICAgIGlmKGxhYmVsQXhpcyBpbnN0YW5jZW9mIENoYXJ0aXN0LlN0ZXBBeGlzKSB7XG4gICAgICAgICAgLy8gT2Zmc2V0IHRvIGNlbnRlciBiYXIgYmV0d2VlbiBncmlkIGxpbmVzLCBidXQgb25seSBpZiB0aGUgc3RlcCBheGlzIGlzIG5vdCBzdHJldGNoZWRcbiAgICAgICAgICBpZighbGFiZWxBeGlzLm9wdGlvbnMuc3RyZXRjaCkge1xuICAgICAgICAgICAgcHJvamVjdGVkW2xhYmVsQXhpcy51bml0cy5wb3NdICs9IHBlcmlvZEhhbGZMZW5ndGggKiAob3B0aW9ucy5ob3Jpem9udGFsQmFycyA/IC0xIDogMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFVzaW5nIGJpLXBvbGFyIG9mZnNldCBmb3IgbXVsdGlwbGUgc2VyaWVzIGlmIG5vIHN0YWNrZWQgYmFycyBvciBzZXJpZXMgZGlzdHJpYnV0aW9uIGlzIHVzZWRcbiAgICAgICAgICBwcm9qZWN0ZWRbbGFiZWxBeGlzLnVuaXRzLnBvc10gKz0gKG9wdGlvbnMuc3RhY2tCYXJzIHx8IG9wdGlvbnMuZGlzdHJpYnV0ZVNlcmllcykgPyAwIDogYmlQb2wgKiBvcHRpb25zLnNlcmllc0JhckRpc3RhbmNlICogKG9wdGlvbnMuaG9yaXpvbnRhbEJhcnMgPyAtMSA6IDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRW50ZXIgdmFsdWUgaW4gc3RhY2tlZCBiYXIgdmFsdWVzIHVzZWQgdG8gcmVtZW1iZXIgcHJldmlvdXMgc2NyZWVuIHZhbHVlIGZvciBzdGFja2luZyB1cCBiYXJzXG4gICAgICAgIHByZXZpb3VzU3RhY2sgPSBzdGFja2VkQmFyVmFsdWVzW3ZhbHVlSW5kZXhdIHx8IHplcm9Qb2ludDtcbiAgICAgICAgc3RhY2tlZEJhclZhbHVlc1t2YWx1ZUluZGV4XSA9IHByZXZpb3VzU3RhY2sgLSAoemVyb1BvaW50IC0gcHJvamVjdGVkW2xhYmVsQXhpcy5jb3VudGVyVW5pdHMucG9zXSk7XG5cbiAgICAgICAgLy8gU2tpcCBpZiB2YWx1ZSBpcyB1bmRlZmluZWRcbiAgICAgICAgaWYodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwb3NpdGlvbnMgPSB7fTtcbiAgICAgICAgcG9zaXRpb25zW2xhYmVsQXhpcy51bml0cy5wb3MgKyAnMSddID0gcHJvamVjdGVkW2xhYmVsQXhpcy51bml0cy5wb3NdO1xuICAgICAgICBwb3NpdGlvbnNbbGFiZWxBeGlzLnVuaXRzLnBvcyArICcyJ10gPSBwcm9qZWN0ZWRbbGFiZWxBeGlzLnVuaXRzLnBvc107XG5cbiAgICAgICAgaWYob3B0aW9ucy5zdGFja0JhcnMgJiYgKG9wdGlvbnMuc3RhY2tNb2RlID09PSAnYWNjdW11bGF0ZScgfHwgIW9wdGlvbnMuc3RhY2tNb2RlKSkge1xuICAgICAgICAgIC8vIFN0YWNrIG1vZGU6IGFjY3VtdWxhdGUgKGRlZmF1bHQpXG4gICAgICAgICAgLy8gSWYgYmFycyBhcmUgc3RhY2tlZCB3ZSB1c2UgdGhlIHN0YWNrZWRCYXJWYWx1ZXMgcmVmZXJlbmNlIGFuZCBvdGhlcndpc2UgYmFzZSBhbGwgYmFycyBvZmYgdGhlIHplcm8gbGluZVxuICAgICAgICAgIC8vIFdlIHdhbnQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHNvIHRoZSBleHBlY3RlZCBmYWxsYmFjayB3aXRob3V0IHRoZSAnc3RhY2tNb2RlJyBvcHRpb25cbiAgICAgICAgICAvLyB0byBiZSB0aGUgb3JpZ2luYWwgYmVoYXZpb3VyIChhY2N1bXVsYXRlKVxuICAgICAgICAgIHBvc2l0aW9uc1tsYWJlbEF4aXMuY291bnRlclVuaXRzLnBvcyArICcxJ10gPSBwcmV2aW91c1N0YWNrO1xuICAgICAgICAgIHBvc2l0aW9uc1tsYWJlbEF4aXMuY291bnRlclVuaXRzLnBvcyArICcyJ10gPSBzdGFja2VkQmFyVmFsdWVzW3ZhbHVlSW5kZXhdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIERyYXcgZnJvbSB0aGUgemVybyBsaW5lIG5vcm1hbGx5XG4gICAgICAgICAgLy8gVGhpcyBpcyBhbHNvIHRoZSBzYW1lIGNvZGUgZm9yIFN0YWNrIG1vZGU6IG92ZXJsYXBcbiAgICAgICAgICBwb3NpdGlvbnNbbGFiZWxBeGlzLmNvdW50ZXJVbml0cy5wb3MgKyAnMSddID0gemVyb1BvaW50O1xuICAgICAgICAgIHBvc2l0aW9uc1tsYWJlbEF4aXMuY291bnRlclVuaXRzLnBvcyArICcyJ10gPSBwcm9qZWN0ZWRbbGFiZWxBeGlzLmNvdW50ZXJVbml0cy5wb3NdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTGltaXQgeCBhbmQgeSBzbyB0aGF0IHRoZXkgYXJlIHdpdGhpbiB0aGUgY2hhcnQgcmVjdFxuICAgICAgICBwb3NpdGlvbnMueDEgPSBNYXRoLm1pbihNYXRoLm1heChwb3NpdGlvbnMueDEsIGNoYXJ0UmVjdC54MSksIGNoYXJ0UmVjdC54Mik7XG4gICAgICAgIHBvc2l0aW9ucy54MiA9IE1hdGgubWluKE1hdGgubWF4KHBvc2l0aW9ucy54MiwgY2hhcnRSZWN0LngxKSwgY2hhcnRSZWN0LngyKTtcbiAgICAgICAgcG9zaXRpb25zLnkxID0gTWF0aC5taW4oTWF0aC5tYXgocG9zaXRpb25zLnkxLCBjaGFydFJlY3QueTIpLCBjaGFydFJlY3QueTEpO1xuICAgICAgICBwb3NpdGlvbnMueTIgPSBNYXRoLm1pbihNYXRoLm1heChwb3NpdGlvbnMueTIsIGNoYXJ0UmVjdC55MiksIGNoYXJ0UmVjdC55MSk7XG5cbiAgICAgICAgdmFyIG1ldGFEYXRhID0gQ2hhcnRpc3QuZ2V0TWV0YURhdGEoc2VyaWVzLCB2YWx1ZUluZGV4KTtcblxuICAgICAgICAvLyBDcmVhdGUgYmFyIGVsZW1lbnRcbiAgICAgICAgYmFyID0gc2VyaWVzRWxlbWVudC5lbGVtKCdsaW5lJywgcG9zaXRpb25zLCBvcHRpb25zLmNsYXNzTmFtZXMuYmFyKS5hdHRyKHtcbiAgICAgICAgICAnY3Q6dmFsdWUnOiBbdmFsdWUueCwgdmFsdWUueV0uZmlsdGVyKENoYXJ0aXN0LmlzTnVtZXJpYykuam9pbignLCcpLFxuICAgICAgICAgICdjdDptZXRhJzogQ2hhcnRpc3Quc2VyaWFsaXplKG1ldGFEYXRhKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmV2ZW50RW1pdHRlci5lbWl0KCdkcmF3JywgQ2hhcnRpc3QuZXh0ZW5kKHtcbiAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgaW5kZXg6IHZhbHVlSW5kZXgsXG4gICAgICAgICAgbWV0YTogbWV0YURhdGEsXG4gICAgICAgICAgc2VyaWVzOiBzZXJpZXMsXG4gICAgICAgICAgc2VyaWVzSW5kZXg6IHNlcmllc0luZGV4LFxuICAgICAgICAgIGF4aXNYOiBheGlzWCxcbiAgICAgICAgICBheGlzWTogYXhpc1ksXG4gICAgICAgICAgY2hhcnRSZWN0OiBjaGFydFJlY3QsXG4gICAgICAgICAgZ3JvdXA6IHNlcmllc0VsZW1lbnQsXG4gICAgICAgICAgZWxlbWVudDogYmFyXG4gICAgICAgIH0sIHBvc2l0aW9ucykpO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5ldmVudEVtaXR0ZXIuZW1pdCgnY3JlYXRlZCcsIHtcbiAgICAgIGJvdW5kczogdmFsdWVBeGlzLmJvdW5kcyxcbiAgICAgIGNoYXJ0UmVjdDogY2hhcnRSZWN0LFxuICAgICAgYXhpc1g6IGF4aXNYLFxuICAgICAgYXhpc1k6IGF4aXNZLFxuICAgICAgc3ZnOiB0aGlzLnN2ZyxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBjcmVhdGVzIGEgbmV3IGJhciBjaGFydCBhbmQgcmV0dXJucyBBUEkgb2JqZWN0IHRoYXQgeW91IGNhbiB1c2UgZm9yIGxhdGVyIGNoYW5nZXMuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5CYXJcbiAgICogQHBhcmFtIHtTdHJpbmd8Tm9kZX0gcXVlcnkgQSBzZWxlY3RvciBxdWVyeSBzdHJpbmcgb3IgZGlyZWN0bHkgYSBET00gZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSBvYmplY3QgdGhhdCBuZWVkcyB0byBjb25zaXN0IG9mIGEgbGFiZWxzIGFuZCBhIHNlcmllcyBhcnJheVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIFRoZSBvcHRpb25zIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBvdmVycmlkZSB0aGUgZGVmYXVsdCBvcHRpb25zLiBDaGVjayB0aGUgZXhhbXBsZXMgZm9yIGEgZGV0YWlsZWQgbGlzdC5cbiAgICogQHBhcmFtIHtBcnJheX0gW3Jlc3BvbnNpdmVPcHRpb25zXSBTcGVjaWZ5IGFuIGFycmF5IG9mIHJlc3BvbnNpdmUgb3B0aW9uIGFycmF5cyB3aGljaCBhcmUgYSBtZWRpYSBxdWVyeSBhbmQgb3B0aW9ucyBvYmplY3QgcGFpciA9PiBbW21lZGlhUXVlcnlTdHJpbmcsIG9wdGlvbnNPYmplY3RdLFttb3JlLi4uXV1cbiAgICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3Qgd2hpY2ggZXhwb3NlcyB0aGUgQVBJIGZvciB0aGUgY3JlYXRlZCBjaGFydFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBDcmVhdGUgYSBzaW1wbGUgYmFyIGNoYXJ0XG4gICAqIHZhciBkYXRhID0ge1xuICAgKiAgIGxhYmVsczogWydNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJ10sXG4gICAqICAgc2VyaWVzOiBbXG4gICAqICAgICBbNSwgMiwgNCwgMiwgMF1cbiAgICogICBdXG4gICAqIH07XG4gICAqXG4gICAqIC8vIEluIHRoZSBnbG9iYWwgbmFtZSBzcGFjZSBDaGFydGlzdCB3ZSBjYWxsIHRoZSBCYXIgZnVuY3Rpb24gdG8gaW5pdGlhbGl6ZSBhIGJhciBjaGFydC4gQXMgYSBmaXJzdCBwYXJhbWV0ZXIgd2UgcGFzcyBpbiBhIHNlbGVjdG9yIHdoZXJlIHdlIHdvdWxkIGxpa2UgdG8gZ2V0IG91ciBjaGFydCBjcmVhdGVkIGFuZCBhcyBhIHNlY29uZCBwYXJhbWV0ZXIgd2UgcGFzcyBvdXIgZGF0YSBvYmplY3QuXG4gICAqIG5ldyBDaGFydGlzdC5CYXIoJy5jdC1jaGFydCcsIGRhdGEpO1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBUaGlzIGV4YW1wbGUgY3JlYXRlcyBhIGJpcG9sYXIgZ3JvdXBlZCBiYXIgY2hhcnQgd2hlcmUgdGhlIGJvdW5kYXJpZXMgYXJlIGxpbWl0dGVkIHRvIC0xMCBhbmQgMTBcbiAgICogbmV3IENoYXJ0aXN0LkJhcignLmN0LWNoYXJ0Jywge1xuICAgKiAgIGxhYmVsczogWzEsIDIsIDMsIDQsIDUsIDYsIDddLFxuICAgKiAgIHNlcmllczogW1xuICAgKiAgICAgWzEsIDMsIDIsIC01LCAtMywgMSwgLTZdLFxuICAgKiAgICAgWy01LCAtMiwgLTQsIC0xLCAyLCAtMywgMV1cbiAgICogICBdXG4gICAqIH0sIHtcbiAgICogICBzZXJpZXNCYXJEaXN0YW5jZTogMTIsXG4gICAqICAgbG93OiAtMTAsXG4gICAqICAgaGlnaDogMTBcbiAgICogfSk7XG4gICAqXG4gICAqL1xuICBmdW5jdGlvbiBCYXIocXVlcnksIGRhdGEsIG9wdGlvbnMsIHJlc3BvbnNpdmVPcHRpb25zKSB7XG4gICAgQ2hhcnRpc3QuQmFyLnN1cGVyLmNvbnN0cnVjdG9yLmNhbGwodGhpcyxcbiAgICAgIHF1ZXJ5LFxuICAgICAgZGF0YSxcbiAgICAgIGRlZmF1bHRPcHRpb25zLFxuICAgICAgQ2hhcnRpc3QuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyksXG4gICAgICByZXNwb25zaXZlT3B0aW9ucyk7XG4gIH1cblxuICAvLyBDcmVhdGluZyBiYXIgY2hhcnQgdHlwZSBpbiBDaGFydGlzdCBuYW1lc3BhY2VcbiAgQ2hhcnRpc3QuQmFyID0gQ2hhcnRpc3QuQmFzZS5leHRlbmQoe1xuICAgIGNvbnN0cnVjdG9yOiBCYXIsXG4gICAgY3JlYXRlQ2hhcnQ6IGNyZWF0ZUNoYXJ0XG4gIH0pO1xuXG59KHdpbmRvdywgZG9jdW1lbnQsIENoYXJ0aXN0KSk7XG47LyoqXG4gKiBUaGUgcGllIGNoYXJ0IG1vZHVsZSBvZiBDaGFydGlzdCB0aGF0IGNhbiBiZSB1c2VkIHRvIGRyYXcgcGllLCBkb251dCBvciBnYXVnZSBjaGFydHNcbiAqXG4gKiBAbW9kdWxlIENoYXJ0aXN0LlBpZVxuICovXG4vKiBnbG9iYWwgQ2hhcnRpc3QgKi9cbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCBDaGFydGlzdCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgb3B0aW9ucyBpbiBsaW5lIGNoYXJ0cy4gRXhwYW5kIHRoZSBjb2RlIHZpZXcgdG8gc2VlIGEgZGV0YWlsZWQgbGlzdCBvZiBvcHRpb25zIHdpdGggY29tbWVudHMuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5QaWVcbiAgICovXG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAvLyBTcGVjaWZ5IGEgZml4ZWQgd2lkdGggZm9yIHRoZSBjaGFydCBhcyBhIHN0cmluZyAoaS5lLiAnMTAwcHgnIG9yICc1MCUnKVxuICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgLy8gU3BlY2lmeSBhIGZpeGVkIGhlaWdodCBmb3IgdGhlIGNoYXJ0IGFzIGEgc3RyaW5nIChpLmUuICcxMDBweCcgb3IgJzUwJScpXG4gICAgaGVpZ2h0OiB1bmRlZmluZWQsXG4gICAgLy8gUGFkZGluZyBvZiB0aGUgY2hhcnQgZHJhd2luZyBhcmVhIHRvIHRoZSBjb250YWluZXIgZWxlbWVudCBhbmQgbGFiZWxzIGFzIGEgbnVtYmVyIG9yIHBhZGRpbmcgb2JqZWN0IHt0b3A6IDUsIHJpZ2h0OiA1LCBib3R0b206IDUsIGxlZnQ6IDV9XG4gICAgY2hhcnRQYWRkaW5nOiA1LFxuICAgIC8vIE92ZXJyaWRlIHRoZSBjbGFzcyBuYW1lcyB0aGF0IGFyZSB1c2VkIHRvIGdlbmVyYXRlIHRoZSBTVkcgc3RydWN0dXJlIG9mIHRoZSBjaGFydFxuICAgIGNsYXNzTmFtZXM6IHtcbiAgICAgIGNoYXJ0UGllOiAnY3QtY2hhcnQtcGllJyxcbiAgICAgIGNoYXJ0RG9udXQ6ICdjdC1jaGFydC1kb251dCcsXG4gICAgICBzZXJpZXM6ICdjdC1zZXJpZXMnLFxuICAgICAgc2xpY2VQaWU6ICdjdC1zbGljZS1waWUnLFxuICAgICAgc2xpY2VEb251dDogJ2N0LXNsaWNlLWRvbnV0JyxcbiAgICAgIGxhYmVsOiAnY3QtbGFiZWwnXG4gICAgfSxcbiAgICAvLyBUaGUgc3RhcnQgYW5nbGUgb2YgdGhlIHBpZSBjaGFydCBpbiBkZWdyZWVzIHdoZXJlIDAgcG9pbnRzIG5vcnRoLiBBIGhpZ2hlciB2YWx1ZSBvZmZzZXRzIHRoZSBzdGFydCBhbmdsZSBjbG9ja3dpc2UuXG4gICAgc3RhcnRBbmdsZTogMCxcbiAgICAvLyBBbiBvcHRpb25hbCB0b3RhbCB5b3UgY2FuIHNwZWNpZnkuIEJ5IHNwZWNpZnlpbmcgYSB0b3RhbCB2YWx1ZSwgdGhlIHN1bSBvZiB0aGUgdmFsdWVzIGluIHRoZSBzZXJpZXMgbXVzdCBiZSB0aGlzIHRvdGFsIGluIG9yZGVyIHRvIGRyYXcgYSBmdWxsIHBpZS4gWW91IGNhbiB1c2UgdGhpcyBwYXJhbWV0ZXIgdG8gZHJhdyBvbmx5IHBhcnRzIG9mIGEgcGllIG9yIGdhdWdlIGNoYXJ0cy5cbiAgICB0b3RhbDogdW5kZWZpbmVkLFxuICAgIC8vIElmIHNwZWNpZmllZCB0aGUgZG9udXQgQ1NTIGNsYXNzZXMgd2lsbCBiZSB1c2VkIGFuZCBzdHJva2VzIHdpbGwgYmUgZHJhd24gaW5zdGVhZCBvZiBwaWUgc2xpY2VzLlxuICAgIGRvbnV0OiBmYWxzZSxcbiAgICAvLyBTcGVjaWZ5IHRoZSBkb251dCBzdHJva2Ugd2lkdGgsIGN1cnJlbnRseSBkb25lIGluIGphdmFzY3JpcHQgZm9yIGNvbnZlbmllbmNlLiBNYXkgbW92ZSB0byBDU1Mgc3R5bGVzIGluIHRoZSBmdXR1cmUuXG4gICAgLy8gVGhpcyBvcHRpb24gY2FuIGJlIHNldCBhcyBudW1iZXIgb3Igc3RyaW5nIHRvIHNwZWNpZnkgYSByZWxhdGl2ZSB3aWR0aCAoaS5lLiAxMDAgb3IgJzMwJScpLlxuICAgIGRvbnV0V2lkdGg6IDYwLFxuICAgIC8vIElmIGEgbGFiZWwgc2hvdWxkIGJlIHNob3duIG9yIG5vdFxuICAgIHNob3dMYWJlbDogdHJ1ZSxcbiAgICAvLyBMYWJlbCBwb3NpdGlvbiBvZmZzZXQgZnJvbSB0aGUgc3RhbmRhcmQgcG9zaXRpb24gd2hpY2ggaXMgaGFsZiBkaXN0YW5jZSBvZiB0aGUgcmFkaXVzLiBUaGlzIHZhbHVlIGNhbiBiZSBlaXRoZXIgcG9zaXRpdmUgb3IgbmVnYXRpdmUuIFBvc2l0aXZlIHZhbHVlcyB3aWxsIHBvc2l0aW9uIHRoZSBsYWJlbCBhd2F5IGZyb20gdGhlIGNlbnRlci5cbiAgICBsYWJlbE9mZnNldDogMCxcbiAgICAvLyBUaGlzIG9wdGlvbiBjYW4gYmUgc2V0IHRvICdpbnNpZGUnLCAnb3V0c2lkZScgb3IgJ2NlbnRlcicuIFBvc2l0aW9uZWQgd2l0aCAnaW5zaWRlJyB0aGUgbGFiZWxzIHdpbGwgYmUgcGxhY2VkIG9uIGhhbGYgdGhlIGRpc3RhbmNlIG9mIHRoZSByYWRpdXMgdG8gdGhlIGJvcmRlciBvZiB0aGUgUGllIGJ5IHJlc3BlY3RpbmcgdGhlICdsYWJlbE9mZnNldCcuIFRoZSAnb3V0c2lkZScgb3B0aW9uIHdpbGwgcGxhY2UgdGhlIGxhYmVscyBhdCB0aGUgYm9yZGVyIG9mIHRoZSBwaWUgYW5kICdjZW50ZXInIHdpbGwgcGxhY2UgdGhlIGxhYmVscyBpbiB0aGUgYWJzb2x1dGUgY2VudGVyIHBvaW50IG9mIHRoZSBjaGFydC4gVGhlICdjZW50ZXInIG9wdGlvbiBvbmx5IG1ha2VzIHNlbnNlIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlICdsYWJlbE9mZnNldCcgb3B0aW9uLlxuICAgIGxhYmVsUG9zaXRpb246ICdpbnNpZGUnLFxuICAgIC8vIEFuIGludGVycG9sYXRpb24gZnVuY3Rpb24gZm9yIHRoZSBsYWJlbCB2YWx1ZVxuICAgIGxhYmVsSW50ZXJwb2xhdGlvbkZuYzogQ2hhcnRpc3Qubm9vcCxcbiAgICAvLyBMYWJlbCBkaXJlY3Rpb24gY2FuIGJlICduZXV0cmFsJywgJ2V4cGxvZGUnIG9yICdpbXBsb2RlJy4gVGhlIGxhYmVscyBhbmNob3Igd2lsbCBiZSBwb3NpdGlvbmVkIGJhc2VkIG9uIHRob3NlIHNldHRpbmdzIGFzIHdlbGwgYXMgdGhlIGZhY3QgaWYgdGhlIGxhYmVscyBhcmUgb24gdGhlIHJpZ2h0IG9yIGxlZnQgc2lkZSBvZiB0aGUgY2VudGVyIG9mIHRoZSBjaGFydC4gVXN1YWxseSBleHBsb2RlIGlzIHVzZWZ1bCB3aGVuIGxhYmVscyBhcmUgcG9zaXRpb25lZCBmYXIgYXdheSBmcm9tIHRoZSBjZW50ZXIuXG4gICAgbGFiZWxEaXJlY3Rpb246ICduZXV0cmFsJyxcbiAgICAvLyBJZiB0cnVlIHRoZSB3aG9sZSBkYXRhIGlzIHJldmVyc2VkIGluY2x1ZGluZyBsYWJlbHMsIHRoZSBzZXJpZXMgb3JkZXIgYXMgd2VsbCBhcyB0aGUgd2hvbGUgc2VyaWVzIGRhdGEgYXJyYXlzLlxuICAgIHJldmVyc2VEYXRhOiBmYWxzZSxcbiAgICAvLyBJZiB0cnVlIGVtcHR5IHZhbHVlcyB3aWxsIGJlIGlnbm9yZWQgdG8gYXZvaWQgZHJhd2luZyB1bm5jZXNzYXJ5IHNsaWNlcyBhbmQgbGFiZWxzXG4gICAgaWdub3JlRW1wdHlWYWx1ZXM6IGZhbHNlXG4gIH07XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgU1ZHIGFuY2hvciBwb3NpdGlvbiBiYXNlZCBvbiBkaXJlY3Rpb24gYW5kIGNlbnRlciBwYXJhbWV0ZXJcbiAgICpcbiAgICogQHBhcmFtIGNlbnRlclxuICAgKiBAcGFyYW0gbGFiZWxcbiAgICogQHBhcmFtIGRpcmVjdGlvblxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBkZXRlcm1pbmVBbmNob3JQb3NpdGlvbihjZW50ZXIsIGxhYmVsLCBkaXJlY3Rpb24pIHtcbiAgICB2YXIgdG9UaGVSaWdodCA9IGxhYmVsLnggPiBjZW50ZXIueDtcblxuICAgIGlmKHRvVGhlUmlnaHQgJiYgZGlyZWN0aW9uID09PSAnZXhwbG9kZScgfHxcbiAgICAgICF0b1RoZVJpZ2h0ICYmIGRpcmVjdGlvbiA9PT0gJ2ltcGxvZGUnKSB7XG4gICAgICByZXR1cm4gJ3N0YXJ0JztcbiAgICB9IGVsc2UgaWYodG9UaGVSaWdodCAmJiBkaXJlY3Rpb24gPT09ICdpbXBsb2RlJyB8fFxuICAgICAgIXRvVGhlUmlnaHQgJiYgZGlyZWN0aW9uID09PSAnZXhwbG9kZScpIHtcbiAgICAgIHJldHVybiAnZW5kJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdtaWRkbGUnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBwaWUgY2hhcnRcbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYXJ0KG9wdGlvbnMpIHtcbiAgICB2YXIgZGF0YSA9IENoYXJ0aXN0Lm5vcm1hbGl6ZURhdGEodGhpcy5kYXRhKTtcbiAgICB2YXIgc2VyaWVzR3JvdXBzID0gW10sXG4gICAgICBsYWJlbHNHcm91cCxcbiAgICAgIGNoYXJ0UmVjdCxcbiAgICAgIHJhZGl1cyxcbiAgICAgIGxhYmVsUmFkaXVzLFxuICAgICAgdG90YWxEYXRhU3VtLFxuICAgICAgc3RhcnRBbmdsZSA9IG9wdGlvbnMuc3RhcnRBbmdsZTtcblxuICAgIC8vIENyZWF0ZSBTVkcuanMgZHJhd1xuICAgIHRoaXMuc3ZnID0gQ2hhcnRpc3QuY3JlYXRlU3ZnKHRoaXMuY29udGFpbmVyLCBvcHRpb25zLndpZHRoLCBvcHRpb25zLmhlaWdodCxvcHRpb25zLmRvbnV0ID8gb3B0aW9ucy5jbGFzc05hbWVzLmNoYXJ0RG9udXQgOiBvcHRpb25zLmNsYXNzTmFtZXMuY2hhcnRQaWUpO1xuICAgIC8vIENhbGN1bGF0ZSBjaGFydGluZyByZWN0XG4gICAgY2hhcnRSZWN0ID0gQ2hhcnRpc3QuY3JlYXRlQ2hhcnRSZWN0KHRoaXMuc3ZnLCBvcHRpb25zLCBkZWZhdWx0T3B0aW9ucy5wYWRkaW5nKTtcbiAgICAvLyBHZXQgYmlnZ2VzdCBjaXJjbGUgcmFkaXVzIHBvc3NpYmxlIHdpdGhpbiBjaGFydFJlY3RcbiAgICByYWRpdXMgPSBNYXRoLm1pbihjaGFydFJlY3Qud2lkdGgoKSAvIDIsIGNoYXJ0UmVjdC5oZWlnaHQoKSAvIDIpO1xuICAgIC8vIENhbGN1bGF0ZSB0b3RhbCBvZiBhbGwgc2VyaWVzIHRvIGdldCByZWZlcmVuY2UgdmFsdWUgb3IgdXNlIHRvdGFsIHJlZmVyZW5jZSBmcm9tIG9wdGlvbmFsIG9wdGlvbnNcbiAgICB0b3RhbERhdGFTdW0gPSBvcHRpb25zLnRvdGFsIHx8IGRhdGEubm9ybWFsaXplZC5zZXJpZXMucmVkdWNlKGZ1bmN0aW9uKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHByZXZpb3VzVmFsdWUgKyBjdXJyZW50VmFsdWU7XG4gICAgfSwgMCk7XG5cbiAgICB2YXIgZG9udXRXaWR0aCA9IENoYXJ0aXN0LnF1YW50aXR5KG9wdGlvbnMuZG9udXRXaWR0aCk7XG4gICAgaWYgKGRvbnV0V2lkdGgudW5pdCA9PT0gJyUnKSB7XG4gICAgICBkb251dFdpZHRoLnZhbHVlICo9IHJhZGl1cyAvIDEwMDtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgZG9udXQgY2hhcnQgd2UgbmVlZCB0byBhZGp1c3Qgb3VyIHJhZGl1cyB0byBlbmFibGUgc3Ryb2tlcyB0byBiZSBkcmF3biBpbnNpZGVcbiAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoaXMgaXMgbm90IHBvc3NpYmxlIHdpdGggdGhlIGN1cnJlbnQgU1ZHIFNwZWNcbiAgICAvLyBTZWUgdGhpcyBwcm9wb3NhbCBmb3IgbW9yZSBkZXRhaWxzOiBodHRwOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93d3ctc3ZnLzIwMDNPY3QvMDAwMC5odG1sXG4gICAgcmFkaXVzIC09IG9wdGlvbnMuZG9udXQgPyBkb251dFdpZHRoLnZhbHVlIC8gMiAgOiAwO1xuXG4gICAgLy8gSWYgbGFiZWxQb3NpdGlvbiBpcyBzZXQgdG8gYG91dHNpZGVgIG9yIGEgZG9udXQgY2hhcnQgaXMgZHJhd24gdGhlbiB0aGUgbGFiZWwgcG9zaXRpb24gaXMgYXQgdGhlIHJhZGl1cyxcbiAgICAvLyBpZiByZWd1bGFyIHBpZSBjaGFydCBpdCdzIGhhbGYgb2YgdGhlIHJhZGl1c1xuICAgIGlmKG9wdGlvbnMubGFiZWxQb3NpdGlvbiA9PT0gJ291dHNpZGUnIHx8IG9wdGlvbnMuZG9udXQpIHtcbiAgICAgIGxhYmVsUmFkaXVzID0gcmFkaXVzO1xuICAgIH0gZWxzZSBpZihvcHRpb25zLmxhYmVsUG9zaXRpb24gPT09ICdjZW50ZXInKSB7XG4gICAgICAvLyBJZiBsYWJlbFBvc2l0aW9uIGlzIGNlbnRlciB3ZSBzdGFydCB3aXRoIDAgYW5kIHdpbGwgbGF0ZXIgd2FpdCBmb3IgdGhlIGxhYmVsT2Zmc2V0XG4gICAgICBsYWJlbFJhZGl1cyA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERlZmF1bHQgb3B0aW9uIGlzICdpbnNpZGUnIHdoZXJlIHdlIHVzZSBoYWxmIHRoZSByYWRpdXMgc28gdGhlIGxhYmVsIHdpbGwgYmUgcGxhY2VkIGluIHRoZSBjZW50ZXIgb2YgdGhlIHBpZVxuICAgICAgLy8gc2xpY2VcbiAgICAgIGxhYmVsUmFkaXVzID0gcmFkaXVzIC8gMjtcbiAgICB9XG4gICAgLy8gQWRkIHRoZSBvZmZzZXQgdG8gdGhlIGxhYmVsUmFkaXVzIHdoZXJlIGEgbmVnYXRpdmUgb2Zmc2V0IG1lYW5zIGNsb3NlZCB0byB0aGUgY2VudGVyIG9mIHRoZSBjaGFydFxuICAgIGxhYmVsUmFkaXVzICs9IG9wdGlvbnMubGFiZWxPZmZzZXQ7XG5cbiAgICAvLyBDYWxjdWxhdGUgZW5kIGFuZ2xlIGJhc2VkIG9uIHRvdGFsIHN1bSBhbmQgY3VycmVudCBkYXRhIHZhbHVlIGFuZCBvZmZzZXQgd2l0aCBwYWRkaW5nXG4gICAgdmFyIGNlbnRlciA9IHtcbiAgICAgIHg6IGNoYXJ0UmVjdC54MSArIGNoYXJ0UmVjdC53aWR0aCgpIC8gMixcbiAgICAgIHk6IGNoYXJ0UmVjdC55MiArIGNoYXJ0UmVjdC5oZWlnaHQoKSAvIDJcbiAgICB9O1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgb25seSBvbmUgbm9uLXplcm8gdmFsdWUgaW4gdGhlIHNlcmllcyBhcnJheS5cbiAgICB2YXIgaGFzU2luZ2xlVmFsSW5TZXJpZXMgPSBkYXRhLnJhdy5zZXJpZXMuZmlsdGVyKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgcmV0dXJuIHZhbC5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSA/IHZhbC52YWx1ZSAhPT0gMCA6IHZhbCAhPT0gMDtcbiAgICB9KS5sZW5ndGggPT09IDE7XG5cbiAgICAvLyBDcmVhdGluZyB0aGUgc2VyaWVzIGdyb3Vwc1xuICAgIGRhdGEucmF3LnNlcmllcy5mb3JFYWNoKGZ1bmN0aW9uKHNlcmllcywgaW5kZXgpIHtcbiAgICAgIHNlcmllc0dyb3Vwc1tpbmRleF0gPSB0aGlzLnN2Zy5lbGVtKCdnJywgbnVsbCwgbnVsbCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICAvL2lmIHdlIG5lZWQgdG8gc2hvdyBsYWJlbHMgd2UgY3JlYXRlIHRoZSBsYWJlbCBncm91cCBub3dcbiAgICBpZihvcHRpb25zLnNob3dMYWJlbCkge1xuICAgICAgbGFiZWxzR3JvdXAgPSB0aGlzLnN2Zy5lbGVtKCdnJywgbnVsbCwgbnVsbCk7XG4gICAgfVxuXG4gICAgLy8gRHJhdyB0aGUgc2VyaWVzXG4gICAgLy8gaW5pdGlhbGl6ZSBzZXJpZXMgZ3JvdXBzXG4gICAgZGF0YS5yYXcuc2VyaWVzLmZvckVhY2goZnVuY3Rpb24oc2VyaWVzLCBpbmRleCkge1xuICAgICAgLy8gSWYgY3VycmVudCB2YWx1ZSBpcyB6ZXJvIGFuZCB3ZSBhcmUgaWdub3JpbmcgZW1wdHkgdmFsdWVzIHRoZW4gc2tpcCB0byBuZXh0IHZhbHVlXG4gICAgICBpZiAoZGF0YS5ub3JtYWxpemVkLnNlcmllc1tpbmRleF0gPT09IDAgJiYgb3B0aW9ucy5pZ25vcmVFbXB0eVZhbHVlcykgcmV0dXJuO1xuXG4gICAgICAvLyBJZiB0aGUgc2VyaWVzIGlzIGFuIG9iamVjdCBhbmQgY29udGFpbnMgYSBuYW1lIG9yIG1ldGEgZGF0YSB3ZSBhZGQgYSBjdXN0b20gYXR0cmlidXRlXG4gICAgICBzZXJpZXNHcm91cHNbaW5kZXhdLmF0dHIoe1xuICAgICAgICAnY3Q6c2VyaWVzLW5hbWUnOiBzZXJpZXMubmFtZVxuICAgICAgfSk7XG5cbiAgICAgIC8vIFVzZSBzZXJpZXMgY2xhc3MgZnJvbSBzZXJpZXMgZGF0YSBvciBpZiBub3Qgc2V0IGdlbmVyYXRlIG9uZVxuICAgICAgc2VyaWVzR3JvdXBzW2luZGV4XS5hZGRDbGFzcyhbXG4gICAgICAgIG9wdGlvbnMuY2xhc3NOYW1lcy5zZXJpZXMsXG4gICAgICAgIChzZXJpZXMuY2xhc3NOYW1lIHx8IG9wdGlvbnMuY2xhc3NOYW1lcy5zZXJpZXMgKyAnLScgKyBDaGFydGlzdC5hbHBoYU51bWVyYXRlKGluZGV4KSlcbiAgICAgIF0uam9pbignICcpKTtcblxuICAgICAgLy8gSWYgdGhlIHdob2xlIGRhdGFzZXQgaXMgMCBlbmRBbmdsZSBzaG91bGQgYmUgemVyby4gQ2FuJ3QgZGl2aWRlIGJ5IDAuXG4gICAgICB2YXIgZW5kQW5nbGUgPSAodG90YWxEYXRhU3VtID4gMCA/IHN0YXJ0QW5nbGUgKyBkYXRhLm5vcm1hbGl6ZWQuc2VyaWVzW2luZGV4XSAvIHRvdGFsRGF0YVN1bSAqIDM2MCA6IDApO1xuXG4gICAgICAvLyBVc2Ugc2xpZ2h0IG9mZnNldCBzbyB0aGVyZSBhcmUgbm8gdHJhbnNwYXJlbnQgaGFpcmxpbmUgaXNzdWVzXG4gICAgICB2YXIgb3ZlcmxhcHBpZ1N0YXJ0QW5nbGUgPSBNYXRoLm1heCgwLCBzdGFydEFuZ2xlIC0gKGluZGV4ID09PSAwIHx8IGhhc1NpbmdsZVZhbEluU2VyaWVzID8gMCA6IDAuMikpO1xuXG4gICAgICAvLyBJZiB3ZSBuZWVkIHRvIGRyYXcgdGhlIGFyYyBmb3IgYWxsIDM2MCBkZWdyZWVzIHdlIG5lZWQgdG8gYWRkIGEgaGFjayB3aGVyZSB3ZSBjbG9zZSB0aGUgY2lyY2xlXG4gICAgICAvLyB3aXRoIFogYW5kIHVzZSAzNTkuOTkgZGVncmVlc1xuICAgICAgaWYoZW5kQW5nbGUgLSBvdmVybGFwcGlnU3RhcnRBbmdsZSA+PSAzNTkuOTkpIHtcbiAgICAgICAgZW5kQW5nbGUgPSBvdmVybGFwcGlnU3RhcnRBbmdsZSArIDM1OS45OTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXJ0ID0gQ2hhcnRpc3QucG9sYXJUb0NhcnRlc2lhbihjZW50ZXIueCwgY2VudGVyLnksIHJhZGl1cywgb3ZlcmxhcHBpZ1N0YXJ0QW5nbGUpLFxuICAgICAgICBlbmQgPSBDaGFydGlzdC5wb2xhclRvQ2FydGVzaWFuKGNlbnRlci54LCBjZW50ZXIueSwgcmFkaXVzLCBlbmRBbmdsZSk7XG5cbiAgICAgIC8vIENyZWF0ZSBhIG5ldyBwYXRoIGVsZW1lbnQgZm9yIHRoZSBwaWUgY2hhcnQuIElmIHRoaXMgaXNuJ3QgYSBkb251dCBjaGFydCB3ZSBzaG91bGQgY2xvc2UgdGhlIHBhdGggZm9yIGEgY29ycmVjdCBzdHJva2VcbiAgICAgIHZhciBwYXRoID0gbmV3IENoYXJ0aXN0LlN2Zy5QYXRoKCFvcHRpb25zLmRvbnV0KVxuICAgICAgICAubW92ZShlbmQueCwgZW5kLnkpXG4gICAgICAgIC5hcmMocmFkaXVzLCByYWRpdXMsIDAsIGVuZEFuZ2xlIC0gc3RhcnRBbmdsZSA+IDE4MCwgMCwgc3RhcnQueCwgc3RhcnQueSk7XG5cbiAgICAgIC8vIElmIHJlZ3VsYXIgcGllIGNoYXJ0IChubyBkb251dCkgd2UgYWRkIGEgbGluZSB0byB0aGUgY2VudGVyIG9mIHRoZSBjaXJjbGUgZm9yIGNvbXBsZXRpbmcgdGhlIHBpZVxuICAgICAgaWYoIW9wdGlvbnMuZG9udXQpIHtcbiAgICAgICAgcGF0aC5saW5lKGNlbnRlci54LCBjZW50ZXIueSk7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgU1ZHIHBhdGhcbiAgICAgIC8vIElmIHRoaXMgaXMgYSBkb251dCBjaGFydCB3ZSBhZGQgdGhlIGRvbnV0IGNsYXNzLCBvdGhlcndpc2UganVzdCBhIHJlZ3VsYXIgc2xpY2VcbiAgICAgIHZhciBwYXRoRWxlbWVudCA9IHNlcmllc0dyb3Vwc1tpbmRleF0uZWxlbSgncGF0aCcsIHtcbiAgICAgICAgZDogcGF0aC5zdHJpbmdpZnkoKVxuICAgICAgfSwgb3B0aW9ucy5kb251dCA/IG9wdGlvbnMuY2xhc3NOYW1lcy5zbGljZURvbnV0IDogb3B0aW9ucy5jbGFzc05hbWVzLnNsaWNlUGllKTtcblxuICAgICAgLy8gQWRkaW5nIHRoZSBwaWUgc2VyaWVzIHZhbHVlIHRvIHRoZSBwYXRoXG4gICAgICBwYXRoRWxlbWVudC5hdHRyKHtcbiAgICAgICAgJ2N0OnZhbHVlJzogZGF0YS5ub3JtYWxpemVkLnNlcmllc1tpbmRleF0sXG4gICAgICAgICdjdDptZXRhJzogQ2hhcnRpc3Quc2VyaWFsaXplKHNlcmllcy5tZXRhKVxuICAgICAgfSk7XG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYSBkb251dCwgd2UgYWRkIHRoZSBzdHJva2Utd2lkdGggYXMgc3R5bGUgYXR0cmlidXRlXG4gICAgICBpZihvcHRpb25zLmRvbnV0KSB7XG4gICAgICAgIHBhdGhFbGVtZW50LmF0dHIoe1xuICAgICAgICAgICdzdHlsZSc6ICdzdHJva2Utd2lkdGg6ICcgKyBkb251dFdpZHRoLnZhbHVlICsgJ3B4J1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gRmlyZSBvZmYgZHJhdyBldmVudFxuICAgICAgdGhpcy5ldmVudEVtaXR0ZXIuZW1pdCgnZHJhdycsIHtcbiAgICAgICAgdHlwZTogJ3NsaWNlJyxcbiAgICAgICAgdmFsdWU6IGRhdGEubm9ybWFsaXplZC5zZXJpZXNbaW5kZXhdLFxuICAgICAgICB0b3RhbERhdGFTdW06IHRvdGFsRGF0YVN1bSxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBtZXRhOiBzZXJpZXMubWV0YSxcbiAgICAgICAgc2VyaWVzOiBzZXJpZXMsXG4gICAgICAgIGdyb3VwOiBzZXJpZXNHcm91cHNbaW5kZXhdLFxuICAgICAgICBlbGVtZW50OiBwYXRoRWxlbWVudCxcbiAgICAgICAgcGF0aDogcGF0aC5jbG9uZSgpLFxuICAgICAgICBjZW50ZXI6IGNlbnRlcixcbiAgICAgICAgcmFkaXVzOiByYWRpdXMsXG4gICAgICAgIHN0YXJ0QW5nbGU6IHN0YXJ0QW5nbGUsXG4gICAgICAgIGVuZEFuZ2xlOiBlbmRBbmdsZVxuICAgICAgfSk7XG5cbiAgICAgIC8vIElmIHdlIG5lZWQgdG8gc2hvdyBsYWJlbHMgd2UgbmVlZCB0byBhZGQgdGhlIGxhYmVsIGZvciB0aGlzIHNsaWNlIG5vd1xuICAgICAgaWYob3B0aW9ucy5zaG93TGFiZWwpIHtcbiAgICAgICAgdmFyIGxhYmVsUG9zaXRpb247XG4gICAgICAgIGlmKGRhdGEucmF3LnNlcmllcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAvLyBJZiB3ZSBoYXZlIG9ubHkgMSBzZXJpZXMsIHdlIGNhbiBwb3NpdGlvbiB0aGUgbGFiZWwgaW4gdGhlIGNlbnRlciBvZiB0aGUgcGllXG4gICAgICAgICAgbGFiZWxQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IGNlbnRlci54LFxuICAgICAgICAgICAgeTogY2VudGVyLnlcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFBvc2l0aW9uIGF0IHRoZSBsYWJlbFJhZGl1cyBkaXN0YW5jZSBmcm9tIGNlbnRlciBhbmQgYmV0d2VlbiBzdGFydCBhbmQgZW5kIGFuZ2xlXG4gICAgICAgICAgbGFiZWxQb3NpdGlvbiA9IENoYXJ0aXN0LnBvbGFyVG9DYXJ0ZXNpYW4oXG4gICAgICAgICAgICBjZW50ZXIueCxcbiAgICAgICAgICAgIGNlbnRlci55LFxuICAgICAgICAgICAgbGFiZWxSYWRpdXMsXG4gICAgICAgICAgICBzdGFydEFuZ2xlICsgKGVuZEFuZ2xlIC0gc3RhcnRBbmdsZSkgLyAyXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByYXdWYWx1ZTtcbiAgICAgICAgaWYoZGF0YS5ub3JtYWxpemVkLmxhYmVscyAmJiAhQ2hhcnRpc3QuaXNGYWxzZXlCdXRaZXJvKGRhdGEubm9ybWFsaXplZC5sYWJlbHNbaW5kZXhdKSkge1xuICAgICAgICAgIHJhd1ZhbHVlID0gZGF0YS5ub3JtYWxpemVkLmxhYmVsc1tpbmRleF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmF3VmFsdWUgPSBkYXRhLm5vcm1hbGl6ZWQuc2VyaWVzW2luZGV4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpbnRlcnBvbGF0ZWRWYWx1ZSA9IG9wdGlvbnMubGFiZWxJbnRlcnBvbGF0aW9uRm5jKHJhd1ZhbHVlLCBpbmRleCk7XG5cbiAgICAgICAgaWYoaW50ZXJwb2xhdGVkVmFsdWUgfHwgaW50ZXJwb2xhdGVkVmFsdWUgPT09IDApIHtcbiAgICAgICAgICB2YXIgbGFiZWxFbGVtZW50ID0gbGFiZWxzR3JvdXAuZWxlbSgndGV4dCcsIHtcbiAgICAgICAgICAgIGR4OiBsYWJlbFBvc2l0aW9uLngsXG4gICAgICAgICAgICBkeTogbGFiZWxQb3NpdGlvbi55LFxuICAgICAgICAgICAgJ3RleHQtYW5jaG9yJzogZGV0ZXJtaW5lQW5jaG9yUG9zaXRpb24oY2VudGVyLCBsYWJlbFBvc2l0aW9uLCBvcHRpb25zLmxhYmVsRGlyZWN0aW9uKVxuICAgICAgICAgIH0sIG9wdGlvbnMuY2xhc3NOYW1lcy5sYWJlbCkudGV4dCgnJyArIGludGVycG9sYXRlZFZhbHVlKTtcblxuICAgICAgICAgIC8vIEZpcmUgb2ZmIGRyYXcgZXZlbnRcbiAgICAgICAgICB0aGlzLmV2ZW50RW1pdHRlci5lbWl0KCdkcmF3Jywge1xuICAgICAgICAgICAgdHlwZTogJ2xhYmVsJyxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIGdyb3VwOiBsYWJlbHNHcm91cCxcbiAgICAgICAgICAgIGVsZW1lbnQ6IGxhYmVsRWxlbWVudCxcbiAgICAgICAgICAgIHRleHQ6ICcnICsgaW50ZXJwb2xhdGVkVmFsdWUsXG4gICAgICAgICAgICB4OiBsYWJlbFBvc2l0aW9uLngsXG4gICAgICAgICAgICB5OiBsYWJlbFBvc2l0aW9uLnlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBTZXQgbmV4dCBzdGFydEFuZ2xlIHRvIGN1cnJlbnQgZW5kQW5nbGUuXG4gICAgICAvLyAoZXhjZXB0IGZvciBsYXN0IHNsaWNlKVxuICAgICAgc3RhcnRBbmdsZSA9IGVuZEFuZ2xlO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLmV2ZW50RW1pdHRlci5lbWl0KCdjcmVhdGVkJywge1xuICAgICAgY2hhcnRSZWN0OiBjaGFydFJlY3QsXG4gICAgICBzdmc6IHRoaXMuc3ZnLFxuICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGNyZWF0ZXMgYSBuZXcgcGllIGNoYXJ0IGFuZCByZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlZHJhdyB0aGUgY2hhcnQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5QaWVcbiAgICogQHBhcmFtIHtTdHJpbmd8Tm9kZX0gcXVlcnkgQSBzZWxlY3RvciBxdWVyeSBzdHJpbmcgb3IgZGlyZWN0bHkgYSBET00gZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSBvYmplY3QgaW4gdGhlIHBpZSBjaGFydCBuZWVkcyB0byBoYXZlIGEgc2VyaWVzIHByb3BlcnR5IHdpdGggYSBvbmUgZGltZW5zaW9uYWwgZGF0YSBhcnJheS4gVGhlIHZhbHVlcyB3aWxsIGJlIG5vcm1hbGl6ZWQgYWdhaW5zdCBlYWNoIG90aGVyIGFuZCBkb24ndCBuZWNlc3NhcmlseSBuZWVkIHRvIGJlIGluIHBlcmNlbnRhZ2UuIFRoZSBzZXJpZXMgcHJvcGVydHkgY2FuIGFsc28gYmUgYW4gYXJyYXkgb2YgdmFsdWUgb2JqZWN0cyB0aGF0IGNvbnRhaW4gYSB2YWx1ZSBwcm9wZXJ0eSBhbmQgYSBjbGFzc05hbWUgcHJvcGVydHkgdG8gb3ZlcnJpZGUgdGhlIENTUyBjbGFzcyBuYW1lIGZvciB0aGUgc2VyaWVzIGdyb3VwLlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIFRoZSBvcHRpb25zIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBvdmVycmlkZSB0aGUgZGVmYXVsdCBvcHRpb25zLiBDaGVjayB0aGUgZXhhbXBsZXMgZm9yIGEgZGV0YWlsZWQgbGlzdC5cbiAgICogQHBhcmFtIHtBcnJheX0gW3Jlc3BvbnNpdmVPcHRpb25zXSBTcGVjaWZ5IGFuIGFycmF5IG9mIHJlc3BvbnNpdmUgb3B0aW9uIGFycmF5cyB3aGljaCBhcmUgYSBtZWRpYSBxdWVyeSBhbmQgb3B0aW9ucyBvYmplY3QgcGFpciA9PiBbW21lZGlhUXVlcnlTdHJpbmcsIG9wdGlvbnNPYmplY3RdLFttb3JlLi4uXV1cbiAgICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3Qgd2l0aCBhIHZlcnNpb24gYW5kIGFuIHVwZGF0ZSBtZXRob2QgdG8gbWFudWFsbHkgcmVkcmF3IHRoZSBjaGFydFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBTaW1wbGUgcGllIGNoYXJ0IGV4YW1wbGUgd2l0aCBmb3VyIHNlcmllc1xuICAgKiBuZXcgQ2hhcnRpc3QuUGllKCcuY3QtY2hhcnQnLCB7XG4gICAqICAgc2VyaWVzOiBbMTAsIDIsIDQsIDNdXG4gICAqIH0pO1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBEcmF3aW5nIGEgZG9udXQgY2hhcnRcbiAgICogbmV3IENoYXJ0aXN0LlBpZSgnLmN0LWNoYXJ0Jywge1xuICAgKiAgIHNlcmllczogWzEwLCAyLCA0LCAzXVxuICAgKiB9LCB7XG4gICAqICAgZG9udXQ6IHRydWVcbiAgICogfSk7XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIC8vIFVzaW5nIGRvbnV0LCBzdGFydEFuZ2xlIGFuZCB0b3RhbCB0byBkcmF3IGEgZ2F1Z2UgY2hhcnRcbiAgICogbmV3IENoYXJ0aXN0LlBpZSgnLmN0LWNoYXJ0Jywge1xuICAgKiAgIHNlcmllczogWzIwLCAxMCwgMzAsIDQwXVxuICAgKiB9LCB7XG4gICAqICAgZG9udXQ6IHRydWUsXG4gICAqICAgZG9udXRXaWR0aDogMjAsXG4gICAqICAgc3RhcnRBbmdsZTogMjcwLFxuICAgKiAgIHRvdGFsOiAyMDBcbiAgICogfSk7XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIC8vIERyYXdpbmcgYSBwaWUgY2hhcnQgd2l0aCBwYWRkaW5nIGFuZCBsYWJlbHMgdGhhdCBhcmUgb3V0c2lkZSB0aGUgcGllXG4gICAqIG5ldyBDaGFydGlzdC5QaWUoJy5jdC1jaGFydCcsIHtcbiAgICogICBzZXJpZXM6IFsyMCwgMTAsIDMwLCA0MF1cbiAgICogfSwge1xuICAgKiAgIGNoYXJ0UGFkZGluZzogMzAsXG4gICAqICAgbGFiZWxPZmZzZXQ6IDUwLFxuICAgKiAgIGxhYmVsRGlyZWN0aW9uOiAnZXhwbG9kZSdcbiAgICogfSk7XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIC8vIE92ZXJyaWRpbmcgdGhlIGNsYXNzIG5hbWVzIGZvciBpbmRpdmlkdWFsIHNlcmllcyBhcyB3ZWxsIGFzIGEgbmFtZSBhbmQgbWV0YSBkYXRhLlxuICAgKiAvLyBUaGUgbmFtZSB3aWxsIGJlIHdyaXR0ZW4gYXMgY3Q6c2VyaWVzLW5hbWUgYXR0cmlidXRlIGFuZCB0aGUgbWV0YSBkYXRhIHdpbGwgYmUgc2VyaWFsaXplZCBhbmQgd3JpdHRlblxuICAgKiAvLyB0byBhIGN0Om1ldGEgYXR0cmlidXRlLlxuICAgKiBuZXcgQ2hhcnRpc3QuUGllKCcuY3QtY2hhcnQnLCB7XG4gICAqICAgc2VyaWVzOiBbe1xuICAgKiAgICAgdmFsdWU6IDIwLFxuICAgKiAgICAgbmFtZTogJ1NlcmllcyAxJyxcbiAgICogICAgIGNsYXNzTmFtZTogJ215LWN1c3RvbS1jbGFzcy1vbmUnLFxuICAgKiAgICAgbWV0YTogJ01ldGEgT25lJ1xuICAgKiAgIH0sIHtcbiAgICogICAgIHZhbHVlOiAxMCxcbiAgICogICAgIG5hbWU6ICdTZXJpZXMgMicsXG4gICAqICAgICBjbGFzc05hbWU6ICdteS1jdXN0b20tY2xhc3MtdHdvJyxcbiAgICogICAgIG1ldGE6ICdNZXRhIFR3bydcbiAgICogICB9LCB7XG4gICAqICAgICB2YWx1ZTogNzAsXG4gICAqICAgICBuYW1lOiAnU2VyaWVzIDMnLFxuICAgKiAgICAgY2xhc3NOYW1lOiAnbXktY3VzdG9tLWNsYXNzLXRocmVlJyxcbiAgICogICAgIG1ldGE6ICdNZXRhIFRocmVlJ1xuICAgKiAgIH1dXG4gICAqIH0pO1xuICAgKi9cbiAgZnVuY3Rpb24gUGllKHF1ZXJ5LCBkYXRhLCBvcHRpb25zLCByZXNwb25zaXZlT3B0aW9ucykge1xuICAgIENoYXJ0aXN0LlBpZS5zdXBlci5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsXG4gICAgICBxdWVyeSxcbiAgICAgIGRhdGEsXG4gICAgICBkZWZhdWx0T3B0aW9ucyxcbiAgICAgIENoYXJ0aXN0LmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpLFxuICAgICAgcmVzcG9uc2l2ZU9wdGlvbnMpO1xuICB9XG5cbiAgLy8gQ3JlYXRpbmcgcGllIGNoYXJ0IHR5cGUgaW4gQ2hhcnRpc3QgbmFtZXNwYWNlXG4gIENoYXJ0aXN0LlBpZSA9IENoYXJ0aXN0LkJhc2UuZXh0ZW5kKHtcbiAgICBjb25zdHJ1Y3RvcjogUGllLFxuICAgIGNyZWF0ZUNoYXJ0OiBjcmVhdGVDaGFydCxcbiAgICBkZXRlcm1pbmVBbmNob3JQb3NpdGlvbjogZGV0ZXJtaW5lQW5jaG9yUG9zaXRpb25cbiAgfSk7XG5cbn0od2luZG93LCBkb2N1bWVudCwgQ2hhcnRpc3QpKTtcblxucmV0dXJuIENoYXJ0aXN0O1xuXG59KSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENoYXJ0aXN0R3JhcGggPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ2hhcnRpc3RHcmFwaCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ2hhcnRpc3RHcmFwaCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2hhcnRpc3RHcmFwaCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENoYXJ0aXN0R3JhcGguX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDaGFydGlzdEdyYXBoKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2hhcnRpc3RHcmFwaCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuICAgICAgdGhpcy51cGRhdGVDaGFydChuZXdQcm9wcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLmNoYXJ0aXN0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5jaGFydGlzdC5kZXRhY2goKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnRlcm5hbCBjaGFydGlzdCBlcnJvcicsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy51cGRhdGVDaGFydCh0aGlzLnByb3BzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVDaGFydCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUNoYXJ0KGNvbmZpZykge1xuICAgICAgdmFyIENoYXJ0aXN0ID0gcmVxdWlyZSgnY2hhcnRpc3QnKTtcblxuICAgICAgdmFyIHR5cGUgPSBjb25maWcudHlwZSxcbiAgICAgICAgICBkYXRhID0gY29uZmlnLmRhdGE7XG5cbiAgICAgIHZhciBvcHRpb25zID0gY29uZmlnLm9wdGlvbnMgfHwge307XG4gICAgICB2YXIgcmVzcG9uc2l2ZU9wdGlvbnMgPSBjb25maWcucmVzcG9uc2l2ZU9wdGlvbnMgfHwgW107XG4gICAgICB2YXIgZXZlbnQgPSB2b2lkIDA7XG5cbiAgICAgIGlmICh0aGlzLmNoYXJ0aXN0KSB7XG4gICAgICAgIHRoaXMuY2hhcnRpc3QudXBkYXRlKGRhdGEsIG9wdGlvbnMsIHJlc3BvbnNpdmVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2hhcnRpc3QgPSBuZXcgQ2hhcnRpc3RbdHlwZV0odGhpcy5jaGFydCwgZGF0YSwgb3B0aW9ucywgcmVzcG9uc2l2ZU9wdGlvbnMpO1xuXG4gICAgICAgIGlmIChjb25maWcubGlzdGVuZXIpIHtcbiAgICAgICAgICBmb3IgKGV2ZW50IGluIGNvbmZpZy5saXN0ZW5lcikge1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5saXN0ZW5lci5oYXNPd25Qcm9wZXJ0eShldmVudCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5jaGFydGlzdC5vbihldmVudCwgY29uZmlnLmxpc3RlbmVyW2V2ZW50XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNoYXJ0aXN0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGRhdGEgPSBfcHJvcHMuZGF0YSxcbiAgICAgICAgICB0eXBlID0gX3Byb3BzLnR5cGU7XG5cbiAgICAgIHZhciBjaGlsZHJlbldpdGhQcm9wcyA9IGNoaWxkcmVuICYmIF9yZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ2N0LWNoYXJ0ICcgKyAoY2xhc3NOYW1lIHx8ICcnKSwgcmVmOiBmdW5jdGlvbiByZWYoX3JlZikge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5jaGFydCA9IF9yZWY7XG4gICAgICAgICAgfSwgc3R5bGU6IHN0eWxlIH0sXG4gICAgICAgIGNoaWxkcmVuV2l0aFByb3BzXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDaGFydGlzdEdyYXBoO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuQ2hhcnRpc3RHcmFwaC5wcm9wVHlwZXMgPSB7XG4gIHR5cGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoWydMaW5lJywgJ0JhcicsICdQaWUnXSkuaXNSZXF1aXJlZCxcbiAgZGF0YTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgb3B0aW9uczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIHJlc3BvbnNpdmVPcHRpb25zOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5LFxuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENoYXJ0aXN0R3JhcGg7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==