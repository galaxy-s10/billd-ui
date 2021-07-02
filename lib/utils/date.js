"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.dateFormat = exports.dateCNFormat = exports.convertDate = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _dateType = require("../enum/date-type");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var acronymMounth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Agu', 'Sep', 'Oct', 'Nov', 'Dec']; // getDateRange('2019-9-17', 3);  // FOR TEST

var getDateRange = function getDateRange(date, range) {
  var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'YYYY-MM-DD HH:mm:ss';
  var monentDate = (0, _moment.default)(date);
  var startDate = '';
  var endDate = '';

  if (typeof range === 'number') {
    switch (range) {
      case 0:
        range = 'year';
        break;

      case 1:
        range = 'quarter';
        break;

      case 2:
        range = 'month';
        break;

      case 3:
        range = 'week';
        break;

      case 4:
        range = 'day';
        break;

      default:
        break;
    }
  }

  switch (range) {
    case 'year':
    case 'quarter':
    case 'month':
    case 'week':
    case 'day':
      startDate = monentDate.startOf(range).format(format);
      endDate = monentDate.endOf(range).format(format);
      break;

    default:
      break;
  }

  return [startDate, endDate];
};
/**
 * 计算格式化后的明细表格式
 * @param date
 */


var convertDate = function convertDate(value, options) {
  var dateObj = value;

  if (value instanceof Array) {
    // 如果是字符串数组 那么递归返回
    return value.map(function (d) {
      return d ? convertDate(d, options) : '';
    });
  }

  if (typeof value === 'string') {
    var dateArray = value.split(' ');
    var date = dateArray.length > 0 ? dateArray[0] : '';
    var time = dateArray.length > 0 ? dateArray[1] : '';
    var year, month, day, hour, minite, second;
    year = date.split('-')[0];
    month = date.split('-')[1];
    day = date.split('-')[2];
    hour = time.split(':')[0];
    minite = time.split(':')[1];
    second = time.split(':')[2];
    dateObj = new Date(year, month - 1, day, hour, minite, second);
  }

  if (options.isCustom) {
    return dateFormat(dateObj, options.customFormat);
  } else if (options.formatType && options.formatType !== '') {
    var style = '';

    switch (options.formatType) {
      case _dateType.DateFormatType.Type1:
        style = "YYYY年M月D日";
        break;

      case _dateType.DateFormatType.Type2:
        style = "YYYY年M月";
        break;

      case _dateType.DateFormatType.Type3:
        style = "M月D日";
        break;

      case _dateType.DateFormatType.Type4:
        style = "YYYY/M/D";
        break;

      case _dateType.DateFormatType.Type5:
        style = "YYYY/M/D H:mm";
        break;

      case _dateType.DateFormatType.Type6:
        style = "YY/M/D";
        break;

      case _dateType.DateFormatType.Type7:
        style = "M/D";
        break;

      case _dateType.DateFormatType.Type8:
        style = "D-EEE-YYYY";
        break;

      case _dateType.DateFormatType.Type9:
        style = "EEE-YYYY"; // style = `${acronymMounth[dateObj.getMonth()]}-YYYY`;

        break;

      default:
        style = "YYYY-MM-DD";
        break;
    }

    return dateFormat(dateObj, style);
  }

  return value;
};
/**
 * 处理 2019年 2019年第3季度 2019年5月 2019年第7周 2019年第123日（年 季度 月 周 日）
 * @param date
 * dateCNFormat('2019年第7周');
 */


exports.convertDate = convertDate;

var dateCNFormat = function dateCNFormat(date) {
  var res = [];

  if (date) {
    var comp = date.match(/(\d*)年?[^\d]?(\d*)(月(\d*)(日)|(季|月|周|日|天))?/);

    if (comp && comp.length > 0) {
      var year = comp[1];
      var dateMoment = (0, _moment.default)().year(year);

      if (comp[5] || comp[3]) {
        var num = comp[2];

        switch (comp[5] || comp[3]) {
          case '季':
            dateMoment.quarter(num);
            res = getDateRange(dateMoment, 1);
            break;

          case '月':
            dateMoment.month(num - 1);
            res = getDateRange(dateMoment, 2);
            break;

          case '周':
            dateMoment.week(num);
            res = getDateRange(dateMoment, 3);
            break;

          case '日':
          case '天':
            dateMoment.month(comp[2] - 1).date(comp[4]);
            res = getDateRange(dateMoment, 4);
            break;

          default:
            break;
        }
      } else {
        res = getDateRange(dateMoment, 0);
      }
    }
  }

  return res;
};
/**
 * 时间转换
 * @param date  时间对象
 * @param fmt  YYYY-MM-DD HH:mm:ss q季度
 */


exports.dateCNFormat = dateCNFormat;

var dateFormat = function dateFormat(date, fmt) {
  var o = {
    "M+": date.getMonth() + 1,
    "D+": date.getDate(),
    "H+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    "S": date.getMilliseconds() //毫秒
    // "E+": acronymMounth[date.getMonth()], // 英文月份

  };
  if (/(Y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));

  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  } // 过滤英文月份


  if (/(E+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, acronymMounth[date.getMonth()]);
  return fmt;
};

exports.dateFormat = dateFormat;
var _default = {
  dateFormat: dateFormat
};
exports.default = _default;