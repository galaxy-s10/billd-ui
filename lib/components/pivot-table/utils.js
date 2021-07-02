"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getObjectChildrenLength = getObjectChildrenLength;
exports.handleColumns = handleColumns;
exports.handleBodyRows = handleBodyRows;
exports.handleRows = handleRows;
exports.handleTableData = handleTableData;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var rowIndex = 1;
/**
 * 获取Object对象子集长度
 * @param obj
 * @param num
 * @param metric
 */

function getObjectChildrenLength(obj, num, metric) {
  if (!(obj instanceof Array)) {
    Object.values(obj).forEach(function (item) {
      num = getObjectChildrenLength(item, num, metric);
    });
  } else {
    if (metric) {
      num += obj.length * metric.length;
    } else {
      num += obj.length;
    }
  }

  return num;
}
/**
 * 获取数组子集长度
 * @param arr
 * @param num
 */


function getChildrenLength(arr, num) {
  arr.forEach(function (item) {
    if (item.value) {
      num = getChildrenLength(item.value, num);
    } else {
      num += 1;
    }
  });
  return num;
}
/**
 * 处理行数据
 * @param columns
 * @param tableColumns
 * @param level
 * @param parent
 * @param isRowNo
 */


function handleColumns(columns, tableColumns, isRowNo, multiColumns) {
  var level = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var parent = arguments.length > 5 ? arguments[5] : undefined;
  var column;
  var rowspan;

  if (multiColumns) {
    // 行纬度大于一个
    columns.forEach(function (c) {
      column = parent ? _extends([], parent) : []; // 判断这个主指标有值

      rowspan = c.value ? c.value.length : 0;
      if (level === 1 && isRowNo) column.push(rowIndex++);
      column.push(c.key);
      var deep = c.value && c.value[0] && c.value[0].value;

      if (rowspan) {
        handleColumns(c.value, tableColumns, false, deep, level + 1, column);
      }
    });
  } else {
    // 行纬度只有一个时
    columns.forEach(function (item, index) {
      column = parent ? _extends([], parent) : [];
      if (level === 1 && isRowNo) column.push(rowIndex++);
      column.push(item);
      tableColumns.push(column);
    });
  }
} // export function handleRows(dataRows: any, metric: any, tableRows, level = 1) {
//   let children;
//   let width;
//   if (!tableRows[level - 1]) tableRows[level - 1] = [];
//   if (!(dataRows instanceof Array)) {
//     Object.keys(dataRows).forEach((colKey: string, index: number) => {
//       children = getObjectChildrenLength(dataRows[colKey], 0, metric);
//       tableRows[level - 1].push(...Array(children).fill(colKey));
//       if (children) {
//         handleRows(dataRows[colKey], metric, tableRows, level + 1);
//       }
//     });
//   } else {
//     dataRows.forEach((item: any, index: number) => {
//       tableRows[level - 1].push(...Array(metric.length).fill(item));
//       tableRows[level] = tableRows[level] || [];
//       tableRows[level].push(...metric);
//     });
//   }
// }


function handleBodyRows(rows, tableRows, row) {
  var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var rowspan;

  if (!(rows instanceof Array)) {
    Object.keys(rows).forEach(function (colKey, index) {
      rowspan = getObjectChildrenLength(rows[colKey], 0);

      if (level === 1 || index !== 0) {
        row = [];
      }

      row.push({
        rowspan: rowspan,
        label: colKey
      });

      if (level === 1 || index !== 0) {
        tableRows.push(row);
      }

      if (rowspan) {
        handleBodyRows(rows[colKey], tableRows, row, level + 1);
      }
    });
  } else {
    rows.forEach(function (item, index) {
      if (level === 1 || index !== 0) {
        row = [];
      }

      row.push({
        label: item
      });

      if (level === 1 || index !== 0) {
        tableRows.push(row);
      }
    });
  }
}

function handleRows(rows, metric, tableRows, multiRows) {
  var level = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var multiKeys = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
  var colspan;
  if (!tableRows[level - 1]) tableRows[level - 1] = [];

  if (multiRows) {
    rows.forEach(function (r, index) {
      colspan = r.value && r.value.length ? getChildrenLength(r.value, 0) * (metric ? metric.length : 1) : 1;
      tableRows[level - 1].push({
        colspan: colspan,
        label: r.key || ""
      });
      var deep = r.value && r.value[0] && r.value[0].value;

      if (colspan) {
        handleRows(r.value, metric, tableRows, deep, level + 1, multiKeys + "".concat(r.key, "_"));
      }
    });
  } else {
    rows.forEach(function (item, index) {
      tableRows[level - 1].push({
        label: item,
        colspan: metric ? metric.length : 1
      });
      tableRows[level] = tableRows[level] || [];

      if (metric) {
        var _tableRows$level;

        (_tableRows$level = tableRows[level]).push.apply(_tableRows$level, _toConsumableArray(metric.map(function (field) {
          return {
            label: field.alias || field.name,
            key: "".concat(multiKeys).concat(item, "_").concat(field.uid, "#").concat(field.alias || field.name)
          };
        })));
      }
    });
  }
}

function handleTableData(columns, rows, metrics, data) {
  var isRowNo = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  rowIndex = 1;
  var tableColumns = [];
  var tableRows = [];
  var multiColumns = columns && columns.length > 1;
  var multiRows = rows && rows.length > 1;

  if (columns && columns.length && data.columns) {
    handleColumns(data.columns, tableColumns, isRowNo, multiColumns); // 没有列维度,表格没有footerRows(汇总)，与明细表类似

    if (!rows.length) {
      tableRows = [[].concat(_toConsumableArray(columns), _toConsumableArray(metrics)).map(function (row, index) {
        return {
          label: row.alias || row.name,
          key: "".concat(row.uid, "#").concat(row.alias || row.name)
        };
      })];
    }
  } else if (isRowNo) {
    tableColumns = data.data.map(function (row, index) {
      return [index + 1];
    });
  } else {
    tableColumns = data.data.map(function (row, index) {
      return [""];
    });
  }

  if (rows && rows.length && data.rows) {
    handleRows(data.rows, metrics, tableRows, multiRows);
  }

  return {
    columns: tableColumns,
    rows: tableRows
  };
}