"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertNumber = convertNumber;
exports.stringNumber = stringNumber;
exports.commaFormat = commaFormat;
exports.default = void 0;

/**
 * 数值转换
 * @param value
 * @param comma
 * @param percent
 * @param fraction
 */
function convertNumber(value, _ref) {
  var fraction = _ref.fraction,
      comma = _ref.comma,
      percent = _ref.percent;
  if (value === null || value === undefined || value === '') return '';
  var unit = '';

  if (typeof fraction === 'number') {
    if (fraction === 0 || fraction || percent) {
      value = selfFixed(parseFloat(value.toString()), fraction + (percent ? 2 : 0)); // value = parseFloat((value).toString()).toFixed((fraction as any) + (percent ? 2 : 0));
    } else {
      value = parseFloat(value.toString());
    }
  }

  if (percent) {
    value = parseFloat(value.toString()) * 100;
    value = Math.round(value * 1000000) / 1000000; // 防止小数有效数字标志
    // value = (fraction ? value.toFixed(fraction as any) : value);

    value = fraction ? selfFixed(value, fraction) : value;
    unit = '%';
  }

  if (comma) {
    var reg = value.toString().indexOf('.') > -1 ? /(\d{1,3})(?=(?:\d{3})+\.)/g : /(\d{1,3})(?=(?:\d{3})+$)/g; //千分符的正则

    value = value.toString().replace(reg, '$1,'); //千分位格式化
  }

  return value + unit;
}
/**
 * 大数字转换中文尾缀
 * @param value
 */


function stringNumber(value) {
  var unit = '';
  var stringValue = value;

  if (value > 9999 && value < 100000000 || value < -9999 && value > -100000000) {
    stringValue = value / 10000;
    unit = '万';
  } else if (value > 99999999 || value < -99999999) {
    stringValue = value / 100000000;
    unit = '亿';
  }

  stringValue += unit;
  return stringValue;
}

function commaFormat(str) {
  var reg = /\d{1,3}(?=(\d{3})+$)/g;
  var nums = str.split('.');
  nums[0] = nums[0].replace(reg, '$&,');
  return nums.join('.');
}
/**
 * 实现toFixed四舍五入
 * @param number
 * @param n
 */


function selfFixed(number, n) {
  if (n > 20 || n < 0) {
    throw new RangeError('toFixed() digits argument must be between 0 and 20');
  }

  if (isNaN(number) || number >= Math.pow(10, 21)) {
    return number.toString();
  }

  if (typeof n == 'undefined' || n == 0) {
    return Math.round(number).toString();
  }

  var result = number.toString();
  var arr = result.split('.'); // 整数的情况

  if (arr.length < 2) {
    result += '.';

    for (var i = 0; i < n; i += 1) {
      result += '0';
    }

    return result;
  }

  var integer = arr[0];
  var decimal = arr[1];

  if (decimal.length == n) {
    return result;
  }

  if (decimal.length < n) {
    for (var _i = 0; _i < n - decimal.length; _i += 1) {
      result += '0';
    }

    return result;
  }

  result = integer + '.' + decimal.substr(0, n);
  var last = decimal.substr(n, 1); // 四舍五入，转换为整数再处理，避免浮点数精度的损失

  if (parseInt(last, 10) >= 5) {
    var x = Math.pow(10, n);
    result = (Math.round(parseFloat(result) * x) + 1) / x;
    result = result.toFixed(n);
  }

  return result;
}

var _default = {
  convertNumber: convertNumber,
  stringNumber: stringNumber
};
exports.default = _default;