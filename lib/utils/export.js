"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadFile = exports.default = void 0;

var _xlsx = _interopRequireDefault(require("xlsx"));

var _date = require("./date");

var _alias = _interopRequireDefault(require("./alias"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var merges = [];
/**
 * Table导出Excel
 * @param data
 * 参数所需数据接口： headRows, headColumns, bodyRows, summary, alias, title, colWidth
 */

function exportExcel(data) {
  if (!data) return;
  merges = [];
  var headRows = data.headRows,
      headColumns = data.headColumns,
      bodyRows = data.bodyRows,
      summary = data.summary,
      alias = data.alias,
      title = data.title,
      colWidth = data.colWidth,
      columns = data.columns,
      rows = data.rows,
      metric = data.metric;

  if (headColumns.length) {
    summary = new Array(headColumns[0].length - 1).fill(null).concat(summary);
  }

  summary = [['汇总'].concat(summary)];
  var workbook = {
    SheetNames: [],
    Sheets: {}
  };
  var wsName = 'report';
  var wsColHeadData = makeColHead(headRows, [].concat(_toConsumableArray(columns), _toConsumableArray(rows), _toConsumableArray(metric)), alias);
  var wsRowHeadData = makeRowHead(headColumns, [].concat(_toConsumableArray(rows), _toConsumableArray(columns), _toConsumableArray(metric)), alias, headRows.length);

  var ws = _xlsx.default.utils.aoa_to_sheet(wsColHeadData);

  _xlsx.default.utils.sheet_add_aoa(ws, wsRowHeadData, {
    origin: -1
  });

  var dataOriginC = headColumns.length && headColumns[0].length || 0;
  var dataOriginR = headRows.length;

  _xlsx.default.utils.sheet_add_aoa(ws, bodyRows, {
    origin: {
      r: dataOriginR,
      c: dataOriginC
    }
  });

  _xlsx.default.utils.sheet_add_aoa(ws, summary, {
    origin: -1
  });

  _xlsx.default.utils.book_append_sheet(workbook, ws, wsName); // const allCollNum = wsColHeadData[0].length;
  // const headRowsNum = wsColHeadData.length;
  // const headRange = { s: { r: 0, c: 0 }, e: { r: headRowsNum - 1, c: allCollNum - 1 } };
  // setRangeSytle(headRange, ws);


  if (dataOriginC > 0) {
    var summaryR = dataOriginR + bodyRows.length;
    merges.push({
      s: {
        r: summaryR,
        c: 0
      },
      e: {
        r: summaryR,
        c: dataOriginC - 1
      }
    }); // const footRange = { s: { r: summaryR, c: 0 }, e: { r: summaryR, c: allCollNum - 1 } };
    // setRangeSytle(footRange, ws);
  }

  ws['!merges'] = merges; // ws['!cols'] = [...new Array(allCollNum).fill({ wpx: 100 })];

  ws['!cols'] = _toConsumableArray(colWidth.map(function (item) {
    return {
      wpx: item * 1.2
    };
  }));
  var dateStr = (0, _date.dateFormat)(new Date(), 'YYYYMMDD');

  _xlsx.default.writeFile(workbook, "".concat(title).concat(dateStr, ".xlsx"));
}
/**
 * 格式化Excel表头数据
 * @param headData
 * @param columns
 * @param alias
 */


function makeColHead(headData) {
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var alias = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var res = [];
  headData.forEach(function (row, i) {
    var resRow = [];
    var currentCol = 0;
    row.forEach(function (cell) {
      if (_typeof(cell) === 'object') {
        var aliaName = '';

        var _iterator = _createForOfIteratorHelper(columns),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;

            if (cell.label ? (0, _alias.default)(item.uid, cell.label, alias) : '') {
              aliaName = (0, _alias.default)(item.uid, cell.label, alias);
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        resRow.push(aliaName || cell.label);

        if (cell.rowspan && cell.rowspan > 1) {
          merges.push({
            s: {
              r: i,
              c: currentCol
            },
            e: {
              r: i + cell.rowspan - 1,
              c: currentCol + cell.colspan - 1
            }
          });
        } else if (cell.colspan && cell.colspan > 1) {
          merges.push({
            s: {
              r: i,
              c: currentCol
            },
            e: {
              r: i,
              c: currentCol + cell.colspan - 1
            }
          });

          for (var k = 1; k < cell.colspan; k++) {
            resRow.push(null);
          }

          currentCol += cell.colspan;
        } else {
          currentCol++;
        }
      } else {
        resRow.push(alias[cell] || cell);
        currentCol++;
      }
    });
    res.push(resRow);
  });
  return res;
}
/**
 * 格式化Excel表头数据
 * @param headData
 * @param rows
 * @param alias
 * @param headRowNum
 */


function makeRowHead(headData, rows) {
  var alias = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var headRowNum = arguments.length > 3 ? arguments[3] : undefined;
  var res = [];
  var innerMerges = [];
  var preRow = [];
  headData.forEach(function (row, i) {
    var resRow = [];
    row.forEach(function (cell, j) {
      if (cell && preRow[j] === cell && (j === 0 || j > 0 && row[j - 1] == preRow[j - 1])) {
        resRow.push(null);
        addRowSpan(innerMerges, i - 1, j, cell);
      } else {
        var aliaName = '';

        var _iterator2 = _createForOfIteratorHelper(rows),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;

            if (cell ? (0, _alias.default)(item.uid, cell, alias) : '') {
              aliaName = (0, _alias.default)(item.uid, cell, alias);
              break;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        resRow.push(aliaName || cell);

        if (!innerMerges[i]) {
          innerMerges[i] = _defineProperty({}, j, {
            v: cell,
            r: i,
            c: j,
            rowspan: 1
          });
        } else {
          innerMerges[i][j] = {
            v: cell,
            r: i,
            c: j,
            rowspan: 1
          };
        }
      }
    });
    res.push(resRow);
    preRow = row;
  });
  innerMerges.forEach(function (row) {
    for (var i in row) {
      var cell = row[i];

      if (cell.rowspan > 1) {
        merges.push({
          s: {
            r: cell.r + headRowNum,
            c: cell.c
          },
          e: {
            r: cell.r + headRowNum + cell.rowspan - 1,
            c: cell.c
          }
        });
      }
    }
  });
  return res;
}
/**
 * 合并纵向单元格
 * @param merges
 * @param i
 * @param j
 * @param cell
 */


function addRowSpan(merges, i, j, cell) {
  for (i; i >= 0; i--) {
    if (merges[i][j] && merges[i][j].v === cell) {
      merges[i][j].rowspan++;
      break;
    }
  }
}
/**
 * 转换单元格地址到Excel表示法： 如 {c: 5 列, r: 0 行} 到 A6
 * @param cell
 */
// function encode_cell(cell: {c: number, r: number}) {
//   function encode_row(row) { return "" + (row + 1); }
//   function encode_col(col) { let s=""; for(++col; col; col=Math.floor((col-1)/26)) s = String.fromCharCode(((col-1)%26) + 65) + s; return s; }
//   return encode_col(cell.c) + encode_row(cell.r);
// }

/**
 * 设置区域范围内的单元格样式
 * @param range
 * @param ws
 */
// function setRangeSytle(range: any, ws: any) {
//   for(let R = range.s.r; R <= range.e.r; ++R) {
//     for(let C = range.s.c; C <= range.e.c; ++C) {
//       let _address = encode_cell({ c: C, r: R });
//       if (ws[_address]) {
//         ws[_address].s = {
//           font: {
//             color: {
//               rgb: '8893A700'
//             }
//           },
//           alignment: {
//             horizontal: 'center',
//             vertical: 'center',
//             wrap_text: true
//           },
//         };
//       }
//     }
//   }
// }


var _default = exportExcel;
exports.default = _default;

var downloadFile = function downloadFile(url, name) {
  var a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.target = '_self';
  a.click();
};

exports.downloadFile = downloadFile;