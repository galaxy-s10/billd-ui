"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

require("./style/index.js");

var _common = require("../utils/common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import "../../../dist/switch/style/index.css";
var _default2 = {
  inheritAttrs: false,
  props: {
    rowKey: {
      type: String
    },
    bordered: {
      type: Boolean
    },
    sourceData: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    rowSelection: {
      type: Object,
      default: function _default() {
        return {};
      }
    } // columns: {
    //   type: Array,
    //   default: function () {
    //     return []
    //   }
    // },

  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    return h("div", {
      "class": {
        "hss-table": true,
        border: this.bordered
      },
      "style": "width:810px;"
    }, [h("div", {
      "class": "table-scroll"
    }, [h("div", {
      "class": "h-table-header h-hide-scrollbar",
      "style": {
        overflow: "scroll",
        marginBottom: "-".concat(this.scrollBarWidth, "px")
      },
      "ref": "h-table-scroll-head",
      "on": {
        "scroll": function scroll($event) {
          if ($event.target !== $event.currentTarget) return null;
          return function (e) {
            return _this.normalScroll(e);
          }($event);
        }
      }
    }, [h("table", {
      "style": {
        width: this.scroll.x ? this.scroll.x + "px" : "100%"
      }
    }, [h("colgroup", [this.rowSelection.type && h("col", {
      "class": "hss-table-selection-col"
    }), this.columns.map(function (item, index) {
      return h("col", {
        "key": item.key,
        "attrs": {
          "column-key": _this.getColumnKey(item) || index
        },
        "style": {
          minWidth: item.width + "px",
          width: item.width + "px"
        }
      });
    })]), h("thead", {
      "class": "hss-table-thead"
    }, [h("tr", [h("th", [h("div", {
      "class": "hss-checkbox",
      "on": {
        "click": function click() {
          return _this.onSelectAll();
        }
      }
    }, [h("input", (0, _babelHelperVueJsxMergeProps.default)([{
      "on": {
        "change": function change($event) {
          var $$a = _this.tableIsSelectAll,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;

          if (Array.isArray($$a)) {
            var $$v = null,
                $$i = _this._i($$a, $$v);

            if ($$el.checked) {
              $$i < 0 && (_this.tableIsSelectAll = $$a.concat([$$v]));
            } else {
              $$i > -1 && (_this.tableIsSelectAll = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _this.tableIsSelectAll = $$c;
          }
        }
      },
      "attrs": {
        "type": "checkbox"
      },
      "class": {
        "hss-checkbox-input": true,
        "hss-checkbox-checked": this.tableIsSelectAll
      },
      "domProps": {
        "checked": Array.isArray(_this.tableIsSelectAll) ? this._i(_this.tableIsSelectAll, null) > -1 : _this.tableIsSelectAll
      }
    }, {
      directives: [{
        name: "model",
        value: _this.tableIsSelectAll,
        modifiers: {}
      }]
    }])), h("span", {
      "class": {
        "hss-checkbox-inner": true,
        "none-selected": this.selectedList.length - this.intersection.length == 0,
        "no-all": !(this.selectedList.length - this.intersection.length == 0) && this.selectedList.length != 0 && this.selectedList.length < this.sourceData.length
      }
    })])]), this.columns.map(function (item, index) {
      return h("th", {
        "key": index,
        "attrs": {
          "column-key": _this.getColumnKey(item) || index
        },
        "style": {
          "text-align": item.align ? item.align : "left"
        }
      }, [item.title]);
    })])])])]), h("div", {
      "class": "h-table-body h-table-scroll-body",
      "style": {
        overflow: "scroll",
        maxHeight: this.scroll.y + "px"
      },
      "ref": "h-table-scroll-body",
      "on": {
        "scroll": function scroll($event) {
          if ($event.target !== $event.currentTarget) return null;
          return function (e) {
            return _this.normalScroll(e);
          }($event);
        }
      }
    }, [h("table", {
      "style": {
        width: this.scroll.x ? this.scroll.x + "px" : "100%"
      }
    }, [h("colgroup", [this.rowSelection.type && h("col", {
      "class": "hss-table-selection-col"
    }), this.columns.map(function (item, index) {
      return h("col", {
        "key": index,
        "attrs": {
          "column-key": _this.getColumnKey(item) || index
        },
        "style": {
          minWidth: item.width + "px",
          width: item.width + "px"
        }
      });
    })]), h("tbody", {
      "class": "hss-table-tbody",
      "ref": "hss-table-tbody"
    }, [this.sourceData.map(function (rowItem, rowIndex) {
      return h("tr", {
        "class": {
          hovertr: rowIndex == _this.nowTr
        },
        "key": _this.sourceData[rowIndex][_this.getRowKey(rowItem)],
        "attrs": {
          "row-key": _this.sourceData[rowIndex][_this.getRowKey(rowItem)]
        },
        "on": {
          "mouseenter": function mouseenter(e) {
            return _this.mouseEnter(e, rowIndex);
          },
          "mouseleave": function mouseleave(e) {
            return _this.mouseLeave(e);
          }
        }
      }, [h("td", [h("div", {
        "class": {
          "hss-checkbox": true,
          "hss-checkbox-disabled": _this._getCheckboxProps(rowItem).disabled
        },
        "on": {
          "click": function click(e) {
            return _this.onSelect(rowItem, _this.isSelected(rowItem), e);
          }
        }
      }, [h("input", (0, _babelHelperVueJsxMergeProps.default)([{
        "on": {
          "change": function change($event) {
            var $$a = _this.selectedList,
                $$el = $event.target,
                $$c = $$el.checked ? true : false;

            if (Array.isArray($$a)) {
              var $$v = rowItem,
                  $$i = _this._i($$a, $$v);

              if ($$el.checked) {
                $$i < 0 && (_this.selectedList = $$a.concat([$$v]));
              } else {
                $$i > -1 && (_this.selectedList = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
              }
            } else {
              _this.selectedList = $$c;
            }
          }
        },
        "attrs": {
          "type": "checkbox",
          "disabled": _this._getCheckboxProps(rowItem).disabled
        },
        "class": {
          "hss-checkbox-input": true,
          "hss-checkbox-checked": _this.isSelected(rowItem),
          "hss-checkbox-disabled": _this._getCheckboxProps(rowItem).disabled
        },
        "domProps": {
          "checked": Array.isArray(_this.selectedList) ? _this._i(_this.selectedList, rowItem) > -1 : _this.selectedList
        }
      }, {
        directives: [{
          name: "model",
          value: _this.selectedList,
          modifiers: {}
        }]
      }])), h("span", {
        "class": {
          "hss-checkbox-inner": true
        }
      })])]), _this.columns.map(function (columnsItem, columnsIndex) {
        return h("td", {
          "key": _this.getColumnKey(columnsItem) || columnsIndex,
          "attrs": {
            "row-key": _this.getColumnKey(columnsItem) || columnsIndex
          },
          "class": {
            ellipsis: columnsItem.ellipsis
          },
          "style": {
            "text-align": columnsItem.align ? columnsItem.align : "left"
          }
        }, [typeof columnsItem.render == "function" ? _this.tempRender("".concat(columnsItem.dataIndex, "-").concat(rowIndex), rowItem, columnsItem.render) : "", typeof columnsItem.render == "function" ? _this.$slots["".concat(columnsItem.dataIndex, "-").concat(rowIndex)] : _this.getRowData(columnsItem, rowItem)]);
      })]);
    })])])])]), this.fixedLeftData.length && h("div", {
      "class": "fixed-left"
    }, [h("div", [h("table", {
      "style": "min-width:auto"
    }, [h("colgroup", [this.rowSelection.type && h("col", {
      "class": "hss-table-selection-col"
    }), this.fixedLeftData.map(function (item, index) {
      return h("col", {
        "key": index,
        "attrs": {
          "column-key": item.column.key || index
        },
        "style": {
          minWidth: item.column.col.width + "px",
          width: item.column.col.width + "px"
        }
      });
    })]), h("thead", {
      "class": "hss-table-thead"
    }, [h("tr", [h("th", [h("div", {
      "class": "hss-checkbox",
      "on": {
        "click": function click() {
          return _this.onSelectAll();
        }
      }
    }, [h("input", (0, _babelHelperVueJsxMergeProps.default)([{
      "on": {
        "change": function change($event) {
          var $$a = _this.tableIsSelectAll,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;

          if (Array.isArray($$a)) {
            var $$v = null,
                $$i = _this._i($$a, $$v);

            if ($$el.checked) {
              $$i < 0 && (_this.tableIsSelectAll = $$a.concat([$$v]));
            } else {
              $$i > -1 && (_this.tableIsSelectAll = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _this.tableIsSelectAll = $$c;
          }
        }
      },
      "attrs": {
        "type": "checkbox"
      },
      "class": {
        "hss-checkbox-input": true,
        "hss-checkbox-checked": this.tableIsSelectAll
      },
      "domProps": {
        "checked": Array.isArray(_this.tableIsSelectAll) ? this._i(_this.tableIsSelectAll, null) > -1 : _this.tableIsSelectAll
      }
    }, {
      directives: [{
        name: "model",
        value: _this.tableIsSelectAll,
        modifiers: {}
      }]
    }])), h("span", {
      "class": {
        "hss-checkbox-inner": true,
        "none-selected": this.selectedList.length - this.intersection.length == 0,
        "no-all": !(this.selectedList.length - this.intersection.length == 0) && this.selectedList.length != 0 && this.selectedList.length < this.sourceData.length
      }
    })])]), this.fixedLeftData.map(function (item, index) {
      return h("th", {
        "key": index,
        "attrs": {
          "column-key": item.column.key || index
        },
        "style": {
          "text-align": item.column.col.align ? item.column.col.align : "left"
        }
      }, [item.column.col.title]);
    })])])])]), h("div", {
      "style": {
        marginRight: "-".concat(this.scrollBarWidth, "px"),
        marginBottom: "-".concat(this.scrollBarWidth, "px")
      }
    }, [h("div", {
      "style": {
        maxHeight: this.scroll.y + "px",
        overflow: "scroll"
      },
      "ref": "h-table-fixed-left-body",
      "on": {
        "scroll": function scroll($event) {
          if ($event.target !== $event.currentTarget) return null;
          return function (e) {
            return _this.normalScroll(e);
          }($event);
        }
      }
    }, [h("table", {
      "style": "background:white"
    }, [h("colgroup", [this.rowSelection.type && h("col", {
      "class": "hss-table-selection-col"
    }), this.fixedLeftData.map(function (item, index) {
      return h("col", {
        "key": item.column.key,
        "attrs": {
          "column-key": item.column.key || index
        },
        "style": {
          minWidth: item.column.col.width + "px",
          width: item.column.col.width + "px"
        }
      });
    })]), h("tbody", {
      "class": "hss-table-tbody"
    }, [this.sourceData.map(function (item, index) {
      return h("tr", {
        "key": _this.sourceData[index][_this.getRowKey(item)],
        "attrs": {
          "row-key": _this.sourceData[index][_this.getRowKey(item)]
        },
        "style": {
          height: _this.trList[index] + "px" || "auto"
        },
        "class": {
          hovertr: index == _this.nowTr
        },
        "on": {
          "mouseenter": function mouseenter(e) {
            return _this.mouseEnter(e, index);
          },
          "mouseleave": function mouseleave(e) {
            return _this.mouseLeave();
          }
        }
      }, [h("td", [h("div", {
        "class": {
          "hss-checkbox": true,
          "hss-checkbox-disabled": _this._getCheckboxProps(_this.fixedLeftData[0].data[index]).disabled
        },
        "on": {
          "click": function click(e) {
            return _this.onSelect(_this.fixedLeftData[0].data[index], _this.isSelected(_this.fixedLeftData[0].data[index]), e);
          }
        }
      }, [h("input", (0, _babelHelperVueJsxMergeProps.default)([{
        "on": {
          "change": function change($event) {
            var $$a = _this.selectedList,
                $$el = $event.target,
                $$c = $$el.checked ? true : false;

            if (Array.isArray($$a)) {
              var $$v = _this.fixedLeftData[0].data[index],
                  $$i = _this._i($$a, $$v);

              if ($$el.checked) {
                $$i < 0 && (_this.selectedList = $$a.concat([$$v]));
              } else {
                $$i > -1 && (_this.selectedList = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
              }
            } else {
              _this.selectedList = $$c;
            }
          }
        },
        "attrs": {
          "type": "checkbox",
          "disabled": _this._getCheckboxProps(_this.fixedLeftData[0].data[index]).disabled
        },
        "class": {
          "hss-checkbox-input": true,
          "hss-checkbox-checked": _this.isSelected(_this.fixedLeftData[0].data[index]),
          "hss-checkbox-disabled": _this._getCheckboxProps(_this.fixedLeftData[0].data[index]).disabled
        },
        "domProps": {
          "checked": Array.isArray(_this.selectedList) ? _this._i(_this.selectedList, _this.fixedLeftData[0].data[index]) > -1 : _this.selectedList
        }
      }, {
        directives: [{
          name: "model",
          value: _this.selectedList,
          modifiers: {}
        }]
      }])), h("span", {
        "class": {
          "hss-checkbox-inner": true
        }
      })])]), _this.fixedLeftData.map(function (col, colIndex) {
        return h("td", {
          "key": col.column.key || colIndex,
          "attrs": {
            "column-key": col.column.key || colIndex
          },
          "style": {
            "text-align": col.column.col.align ? col.column.col.align : "left"
          }
        }, [typeof col.column.col.render == "function" ? _this.tempRender("fixed-left-".concat(col.column.col.dataIndex, "-").concat(colIndex, "-").concat(index), col.data[index], col.column.col.render) : "", typeof col.column.col.render == "function" ? _this.$slots["fixed-left-".concat(col.column.col.dataIndex, "-").concat(colIndex, "-").concat(index)] : _this.getRowData(col.column.col, col.data[index])]);
      })]);
    })])])])])]), this.fixedRightData.length && h("div", {
      "class": "fixed-right"
    }, [h("div", [h("table", {
      "style": "min-width:auto"
    }, [h("colgroup", [this.fixedRightData.map(function (item, index) {
      return h("col", {
        "key": item.column.key,
        "attrs": {
          "column-key": item.column.key || index
        },
        "style": {
          minWidth: item.column.col.width + "px",
          width: item.column.col.width + "px",
          color: "red"
        }
      });
    })]), h("thead", {
      "class": "hss-table-thead"
    }, [h("tr", [this.fixedRightData.map(function (item, index) {
      return h("th", {
        "key": item.column.key || index,
        "attrs": {
          "column-key": item.column.key || index
        },
        "style": {
          "text-align": item.column.col.align ? item.column.col.align : "left"
        }
      }, [item.column.col.title]);
    })])])])]), h("div", {
      "style": {
        maxHeight: this.scroll.y + "px",
        overflow: "scroll",
        marginBottom: "-".concat(this.scrollBarWidth, "px")
      },
      "ref": "h-table-fixed-right-body",
      "on": {
        "scroll": function scroll($event) {
          if ($event.target !== $event.currentTarget) return null;
          return function (e) {
            return _this.normalScroll(e);
          }($event);
        }
      }
    }, [h("table", [h("colgroup", [this.fixedRightData.map(function (item, index) {
      return h("col", {
        "key": item.column.key || index,
        "attrs": {
          "column-key": item.column.key || index
        },
        "style": {
          minWidth: item.column.col.width + "px",
          width: item.column.col.width + "px"
        }
      });
    })]), h("tbody", {
      "class": "hss-table-tbody"
    }, [this.sourceData.map(function (item, index) {
      return h("tr", {
        "key": _this.sourceData[index][_this.getRowKey(item)],
        "attrs": {
          "row-key": _this.sourceData[index][_this.getRowKey(item)]
        },
        "style": {
          height: _this.trList[index] + "px" || "auto"
        },
        "class": {
          hovertr: index == _this.nowTr
        },
        "on": {
          "mouseenter": function mouseenter(e) {
            return _this.mouseEnter(e, index);
          },
          "mouseleave": function mouseleave(e) {
            return _this.mouseLeave();
          }
        }
      }, [_this.fixedRightData.map(function (col, colIndex) {
        return h("td", {
          "key": col.column.key || colIndex,
          "attrs": {
            "column-key": col.column.key || colIndex
          },
          "style": {
            "text-align": col.column.col.align ? col.column.col.align : "left"
          }
        }, [typeof col.column.col.render == "function" ? _this.tempRender("fixed-right-".concat(col.column.col.key, "-").concat(colIndex, "-").concat(index), col.data[index], col.column.col.render) : "", typeof col.column.col.render == "function" ? _this.$slots["fixed-right-".concat(col.column.col.key, "-").concat(colIndex, "-").concat(index)] : _this.getRowData(col.column.col, col.data[index])]);
      })]);
    })])])])])]);
  },
  data: function data() {
    return {
      // rowKey: "idd",
      // bordered: true,
      lastScrollTop: 0,
      lastScrollLeft: 0,
      fixedScrolling: false,
      normalScrolling: false,
      scrollBarWidth: 15,
      selectedIndex: [],
      selectedList: [],
      canSelected: [],
      // tableIsSelectAll: false,
      nowTr: -1,
      trList: [],
      scroll: {
        x: 1000,
        y: 300
      },
      // fixedLeft: [],
      // fixedRight: [],
      fixedLeftData: [],
      fixedRightData: [],
      allData: {},
      defaultCheckedList: [],
      defaultDisabledList: [],
      // defaultCheckedList: [200],
      // defaultDisabledList: [100, 200],
      intersection: [],
      union: [],
      difference: [],
      columns: this.$attrs.columns
    };
  },
  watch: {
    selectedList: function selectedList(newVal, oldVal) {
      // console.log(newVal, oldVal);
      newVal.length == this.sourceData.length && (this.tableIsSelectAll = true); // let key = this.getRowKey()

      var newSelectedRowKeys = newVal.map(function (v) {
        // console.log(v, "vv");
        return v.key;
      });
      var newSelectedRows = newVal;
      var oldSelectedRowKeys = oldVal.map(function (v) {
        return v.key;
      });
      var oldSelectedRows = oldVal;
      console.log("选中项发生变化时的回调onChange:", newSelectedRowKeys, newSelectedRows, oldSelectedRowKeys, oldSelectedRows); // function(newSelectedRowKeys, newSelectedRows,oldSelectedRowKeys,oldSelectedRows) {}
    }
  },
  computed: {
    tableIsSelectAll: {
      get: function get() {
        var res = this.sourceData.length - this.intersection.length == this.selectedList.length;
        var res1 = this.sourceData.length - this.difference.length == this.selectedList.length;
        return res || res1;
      },
      set: function set(v) {
        return v;
      }
    },
    isSelected: function isSelected() {
      var _this2 = this;

      return function (v) {
        var key = _this2.getRowKey(v);

        return _this2.selectedList.filter(function (item) {
          return item[key] == v[key];
        }).length == 1;
      };
    },
    // nowHoverTr() {
    //   return (v) => {
    //     console.log(v);
    //     // console.log(this.nowTr);
    //     return v == this.nowTr;
    //   };
    // },
    getHeight: function getHeight() {
      var _this3 = this;

      return function (v) {
        console.log(v);
        console.log(_this3.$refs);
        console.log(Object.keys(_this3.$refs).length, 9999); // console.log(this.$refs['hss-table-tbody']);

        return 100 + "px";
      };
    }
  },
  created: function created() {
    // 初始化
    this.initTable();
  },
  mounted: function mounted() {
    // 同步行高
    this.asyncRowHeight();
    console.log((0, _common.getScrollBarWidth)(), 234324); // 设置滚动条高度

    this.scrollBarWidth = (0, _common.getScrollBarWidth)();
  },
  methods: {
    initTable: function initTable() {
      var _this4 = this;

      /**
       * 首先对数据进行处理，
       * 对columns进行遍历，把左固定，右固定，不固定的col分别保存在一个单独的数组里，
       * 然后把这三个数组放在一个对象保存起来。
       */
      var allData = {
        left: [],
        normal: [],
        right: []
      };
      var sortColumns = [];
      this.columns.map(function (item) {
        // console.log(item);
        //判断columnKey是否正确
        var columnKey = _this4.getColumnKey(item);

        if (!columnKey) {
          console.error("columnKey有误（column中key以及dataIndex均无）,将使用v-for遍历时的index作为columnKey");
        }

        var fixed = item.fixed ? item.fixed : false;

        if (item.fixed === true || fixed == "left") {
          var fixedLeftRowData = _this4.sourceData.filter(function (v) {
            // row的key优先级：rowKey > key
            var rowKey = _this4.getRowKey(v);

            if (!rowKey) {
              console.error("请确保dataSource中的每项数据都有key值，如果没有，请指定rowKey！");
            }

            return rowKey && v[rowKey];
          });

          allData["left"].push({
            // column: { key: columnKey, col: item },
            // 顺便将columnKey保存到key里，这样就不用再进col里面判断columnKey了
            column: {
              key: columnKey,
              col: item
            },
            data: fixedLeftRowData
          });
        } else if (fixed == "right") {
          var fixedRightRowData = _this4.sourceData.filter(function (v) {
            var rowKey = _this4.getRowKey(v);

            if (!rowKey) {
              console.error("请确保dataSource中的每项数据都有key值，如果没有，请指定rowKey！");
            }

            return rowKey && v[rowKey];
          });

          allData["right"].push({
            column: {
              key: columnKey,
              col: item
            },
            data: fixedRightRowData
          });
        } else {
          var normalRowData = _this4.sourceData.filter(function (v) {
            // console.log(v, 39, item.key, item);
            var rowKey = _this4.getRowKey(v);

            if (!rowKey) {
              console.error("请确保dataSource中的每项数据都有key值，如果没有，请指定rowKey！");
            }

            return rowKey && v[rowKey];
          });

          allData["normal"].push({
            column: {
              key: columnKey,
              col: item
            },
            data: normalRowData
          });
        }
      });
      this.allData = allData;
      this.fixedLeftData = allData.left;
      this.fixedRightData = allData.right;
      var arr1 = Object.values(allData);
      console.log(arr1);
      arr1.map(function (item) {
        console.log(item);
        item.map(function (v) {
          console.log(v.column.title);
          sortColumns.push(v.column.col);
        });
      });
      console.log(sortColumns);
      this.columns = sortColumns; // 求出默认选中和默认禁用的交集

      var intersection = this.defaultCheckedList.filter(function (v) {
        return _this4.defaultDisabledList.indexOf(v) > -1;
      });
      this.intersection = intersection;
      console.log("求出默认选中和默认禁用的交集", intersection); // 求出默认选中和默认禁用的并集

      this.union = Array.from(new Set(this.defaultCheckedList.concat(this.defaultDisabledList)));
      console.log("求出默认选中和默认禁用的并集", this.union); // 求出默认选中和默认禁用的差集

      this.difference = this.defaultDisabledList.filter(function (v) {
        return _this4.defaultCheckedList.indexOf(v) === -1;
      });
      console.log("求出默认选中和默认禁用的差集", this.union); // 查找所有非disabled的数据

      var canSelected = this.sourceData.filter(function (v) {
        return _this4.defaultDisabledList.indexOf(v.key) == -1;
      });
      this.canSelected = canSelected; // 处理默认选中数据

      this.selectedList = this.sourceData.filter(function (item) {
        console.log("处理默认选中数据", item);
        return _this4.defaultCheckedList.indexOf(item.key) != -1;
      });
    },
    _getCheckboxProps: function _getCheckboxProps(rowItem) {
      // console.log(rowItem,'============');
      var prop = this.rowSelection.getCheckboxProps(rowItem);

      if (prop.disabled) {
        // console.log(
        //   "这个默认是disabled",
        //   this.getRowKey(rowItem),
        //   prop,
        //   rowItem
        // );
        // 防止无限更新You may have an infinite update loop in a component render function.
        this.defaultDisabledList.indexOf(rowItem[this.getRowKey(rowItem)]) == -1 && this.defaultDisabledList.push(rowItem[this.getRowKey(rowItem)]);
      } else if (prop.defaultChecked) {
        // console.log('这个默认是defaultChecked',prop,rowItem);
        this.defaultCheckedList.indexOf(rowItem[this.getRowKey(rowItem)]) == -1 && this.defaultCheckedList.push(rowItem[this.getRowKey(rowItem)]);
      }

      return prop;
    },

    /**
     * 获取对column的v-for时的key,优先级：column.key>column.dataIndex
     * 遍历column时，如果找不到key，将使用v-for遍历时默认的index作为columnKey
     */
    getColumnKey: function getColumnKey(column) {
      // columns的v-for时的key
      var columnKey = column.key || column.dataIndex;
      return columnKey;
    },
    // 获取对data-source的v-for时的key
    getRowKey: function getRowKey(row) {
      // data-source的v-for时的key
      // console.log("columns的v-for时的key", row);
      var rowKey = this.rowKey || row.key && "key";
      return rowKey;
    },
    // 获取dataIndex,colunmItem:当前column的dataIndex,rowItem:当前data的某项
    getRowData: function getRowData(colunmItem, rowItem) {
      // let dataIndex = colunmItem.dataIndex
      // console.log(colunmItem, rowItem,colunmItem.dataIndex, "433333333333");
      return rowItem[colunmItem.dataIndex];
    },
    // 用户手动选择/取消选择某列的回调
    onSelect: function onSelect(row, isSelected, event) {
      var _this5 = this;

      setTimeout(function () {
        console.log("用户手动选择/取消选择某列的回调onSelect", "当前列数据：", row, "当前列是否选中：", !isSelected, "当前已选择数据：", _this5.selectedList, "event：", event);
      }, 0); // Function(row, isSelected, selectedRows, event){}
    },
    // 更改全选
    onSelectAll: function onSelectAll(v) {
      var _this6 = this;

      // console.log(v);
      console.log("更改全选onSelectAll");
      var isAll = null;

      if (this.tableIsSelectAll) {
        // 当前是全选了，则取消全选
        isAll = false;
        var selectKey = this.selectedList.map(function (v) {
          return v.key;
        }); // console.log(selectKey);

        var changeData = this.sourceData.filter(function (item) {
          return selectKey.indexOf(item.key) == -1;
        });
        console.log("取消全选", "是否全选：", isAll, "原选择的数据：", this.selectedList, "现选择的数据：", // nowSelectedList,
        "改变的数据：", changeData);
        this.selectedList = this.sourceData.filter(function (v) {
          return _this6.intersection.indexOf(v.key) != -1;
        });
      } else {
        // 当前不是全选，需要全选
        // console.log(changeData);
        isAll = true; // 查找当前选中的数据的key

        var _selectKey = this.selectedList.map(function (v) {
          return v.key;
        }); // // 查找所有非disabled的数据
        // let canSelected = this.sourceData.filter(v => {
        //   return this.defaultDisabledList.indexOf(v.key) != -1;
        // });
        // this.canSelected = canSelected;
        // console.log(selectKey);
        // 过滤出修改的数据


        var changeRows = this.canSelected.filter(function (item) {
          return _selectKey.indexOf(item.key) == -1;
        }); // 当前选中的数据(默认不可修改和默认选中这两数据的交集+所有可选中的数据)

        var nowSelectedRows = this.canSelected.concat(this.sourceData.filter(function (v) {
          return v.key == _this6.intersection;
        })); // let nowSelectedRows = this.sourceData.filter(
        //   item => this.defaultDisabledList.indexOf(item.key) == -1
        // );
        // function(isAll,oldSelectRows,nowSelectedRows,changeRows){}

        console.log("点击全选", "是否全选：", isAll, "原选择的数据：", this.selectedList, "现选择的数据：", nowSelectedRows, "改变的数据：", changeRows);
        this.selectedList = nowSelectedRows;
      }
    },
    asyncRowHeight: function asyncRowHeight() {
      // console.log(this.$refs["hss-table-tbody"].children);
      var tr = this.$refs["hss-table-tbody"].children;
      var trList = [];

      for (var i = 0; i < tr.length; i++) {
        console.log(tr[i], tr[i].offsetHeight, "====================");
        trList.push(tr[i].offsetHeight);
      }

      this.trList = trList;
    },
    mouseEnter: function mouseEnter(e, v) {
      // console.log("mouseEnter");
      if (this.fixedLeftData.length || this.fixedRightData.length) {
        this.nowTr = v;
      }
    },
    mouseLeave: function mouseLeave() {
      // console.log("mouseLeave");
      if (this.fixedLeftData.length || this.fixedRightData.length) {
        this.nowTr = -1;
      }
    },
    normalScroll: function normalScroll(e, index) {
      if (e.target == this.$refs["h-table-scroll-head"]) {// console.log(e.target);
      }

      var l = e.target.scrollLeft;
      var t = e.target.scrollTop;

      if (this.lastScrollTop != t) {
        if (e.target == this.$refs["h-table-scroll-body"]) {
          // this.$refs["h-table-scroll-body"] &&
          //   (this.$refs["h-table-scroll-body"].scrollTop = t);
          // if (!this.fixedScrolling) {
          this.$refs["h-table-fixed-left-body"] && (this.$refs["h-table-fixed-left-body"].scrollTop = t);
          this.$refs["h-table-fixed-right-body"] && (this.$refs["h-table-fixed-right-body"].scrollTop = t);
        }

        if (e.target == this.$refs["h-table-fixed-left-body"]) {
          console.log(e.target);
          this.$refs["h-table-fixed-right-body"] && (this.$refs["h-table-fixed-right-body"].scrollTop = t);
          this.$refs["h-table-scroll-body"] && (this.$refs["h-table-scroll-body"].scrollTop = t);
        }

        if (e.target == this.$refs["h-table-fixed-right-body"]) {
          console.log(e.target);
          this.$refs["h-table-fixed-left-body"] && (this.$refs["h-table-fixed-left-body"].scrollTop = t);
          this.$refs["h-table-scroll-body"] && (this.$refs["h-table-scroll-body"].scrollTop = t);
        }
      } // 虽然table-head不可见，鼠标滚动不了，但笔记本的触控板可以滚动table-head，可能有bug


      if (this.lastScrollLeft != l) {
        if (e.target == this.$refs["h-table-scroll-body"]) {
          // console.log("左右滚动");
          // this.$refs["h-table-scroll-body"] &&
          //   (this.$refs["h-table-scroll-body"].scrollTop = t);
          // normal-head左右滚动
          this.$refs["h-table-scroll-head"] && (this.$refs["h-table-scroll-head"].scrollLeft = l); // this.$refs["h-table-scroll-body"] &&
          //   (this.$refs["h-table-scroll-body"].scrollLeft = l);
        }

        if (e.target == this.$refs["h-table-scroll-head"]) {
          console.log(e.target);
          this.$refs["h-table-scroll-body"] && (this.$refs["h-table-scroll-body"].scrollLeft = l);
        }
      } // if (e.target == this.$refs["h-table-scroll-body"]) {
      //   console.log("左右滚动");
      //   this.$refs["h-table-scroll-body"] &&
      //     (this.$refs["h-table-scroll-body"].scrollTop = t);
      // }
      // if (e.target == this.$refs["h-table-scroll-head"]) {
      //   this.$refs["h-table-scroll-body"] &&
      //     (this.$refs["h-table-scroll-body"].scrollLeft = l);
      // }


      this.lastScrollTop = t; //记录最后的上下滚动距离

      this.lastScrollLeft = l; //记录最后的左右滚动距离
      // console.log("tttttttttttt", t);
      // this.normalScrolling = false;
    },
    // 第一个参数是插槽名，第二个参数是当前行数据，第三个参数是render函数。
    tempRender: function tempRender(name, row, dom) {
      var VNode = dom.call(this, this.$createElement, row); // console.log(VNode,'VNodeVNodeVNode');

      this.$slots[name] = VNode;
    }
  }
};
exports.default = _default2;