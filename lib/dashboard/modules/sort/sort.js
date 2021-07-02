"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/radio/style/css");

var _radio = _interopRequireDefault(require("ant-design-vue/lib/radio"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _aggregateType = _interopRequireDefault(require("../../../enum/aggregate-type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReportSortModule = /*#__PURE__*/function (_Vue) {
  _inherits(ReportSortModule, _Vue);

  var _super = _createSuper(ReportSortModule);

  function ReportSortModule() {
    var _this;

    _classCallCheck(this, ReportSortModule);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-sort-module";
    _this.comPrefixCls = "report-modules"; // 排序列表

    _this.sortList = []; // 深拷贝chart数据

    _this.deepCopyChart = JSON.parse(JSON.stringify(_this.chart)); // 修改项数据

    _this.changeData = [];
    return _this;
  }

  _createClass(ReportSortModule, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("div", {
        "class": [this.prefixCls, this.comPrefixCls]
      }, [this.sortList.map(function (item, i) {
        h("div", {
          key: i,
          "class": ["".concat(_this2.prefixCls, "__field")]
        }, [h("div", {
          "class": ["".concat(_this2.prefixCls, "__sort-name")]
        }, [h("label", {
          attrs: {
            title: item.alias ? item.alias : item.name
          },
          "class": ["".concat(_this2.prefixCls, "__sort-label")]
        }, [item.alias ? item.alias : item.name]), h("label", [_this2.fieldTypeMapping(item.uid, item.sortType)])]), h("a-radio-group", {
          attrs: {
            buttonStyle: "solid",
            defaultValue: item.options.order,
            value: item.options.order ? item.options.order : "",
            change: function change(e) {
              return _this2.change(e, i);
            }
          },
          "class": ["".concat(_this2.prefixCls, "__order")]
        }, [h("a-radio-button", {
          attrs: {
            value: "''"
          }
        }, ["\u9ED8\u8BA4"]), h("a-radio-button", {
          attrs: {
            value: "'asc'"
          }
        }, ["\u5347\u5E8F"]), h("a-radio-button", {
          attrs: {
            value: "'desc'"
          }
        }, ["\u964D\u5E8F"])])]);
      })]);
    }
    /**
     * 字段类型映射
     * @param uid
     * @param type
     */

  }, {
    key: "fieldTypeMapping",
    value: function fieldTypeMapping(uid, type) {
      var typeMapping = ""; // 根据维度、分组维度、指标遍历

      var _iterator = _createForOfIteratorHelper(this.deepCopyChart.data[type]),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var i = _step.value;

          if (i.uid === uid) {
            var _iterator2 = _createForOfIteratorHelper(_aggregateType.default[i.type]),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var k = _step2.value;

                // 维度 - 日期(format)字段、指标 - 数值(aggregateType)字段
                if (k.value === i.options.format || k.value === i.options.aggregateType) {
                  typeMapping = "\uFF08".concat(k.label, "\uFF09");
                  break;
                } // 指标 - 字符串、日期字段
                else if (i.options.aggregateType === "COUNT") {
                    typeMapping = "（计数）";
                    break;
                  }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return typeMapping;
    }
    /**
     * 透视图排序规则
     * @param i
     */

  }, {
    key: "tableSortRules",
    value: function tableSortRules(i) {
      var dimensionCount = 0;
      var groupDimensionCount = 0;
      var metricCount = 0;
      var dimensionLength = this.chart.data.dimension.length + this.chart.data.groupDimension.length; // 计算维度、指标和

      this.sortList.forEach(function (item) {
        if (item.sortType === "dimension" && item.options.order) {
          dimensionCount += 1;
        }

        if (item.sortType === "groupDimension" && item.options.order) {
          groupDimensionCount += 1;
        }

        if (item.sortType === "metric" && item.options.order) {
          metricCount += 1;
        }
      }); // 找到指标第一个值

      var firstMetric = this.sortList.findIndex(function (item) {
        return item.sortType === "metric";
      }); // -1为透视图没有行维度，只有列维度和指标

      if (firstMetric !== -1) {
        // 点击维度
        if (this.sortList[i].sortType !== "metric") {
          // 点击最后一个行维度
          if (firstMetric - 1 === i) {
            this.sortList.forEach(function (item) {
              // 指标全部恢复默认值
              if (item.sortType === "metric") delete item.options.order;
            });
          }
        } else {
          this.sortList.forEach(function (item, index) {
            // 点击指标，把其他指标恢复默认(指标只能存在一个)，且把行维度最后一个值恢复默认，
            if (i !== index && item.sortType === "metric" || firstMetric - 1 === index) {
              delete item.options.order;
            }
          });
        }
      }
    }
    /**
     * 非透视图排序规则
     */

  }, {
    key: "defaultSortRules",
    value: function defaultSortRules(i) {
      if (this.sortList[i].sortType === "dimension") {
        this.sortList.forEach(function (item) {
          if (item.sortType === "metric") {
            delete item.options.order;
          }
        });
      } else {
        // 指标只能选一个
        this.sortList.forEach(function (item, index) {
          if (i !== index) {
            delete item.options.order;
          } else {
            if (item.options.order === "") {
              delete item.options.order;
            }
          }
        });
      }
    }
    /**
     * 排序规则
     * @param i
     */

  }, {
    key: "sortRules",
    value: function sortRules(i) {
      if (this.chartType === "table") {
        // 透视图排序规则
        this.tableSortRules(i);
      } else {
        // 非透视图排序规则
        this.defaultSortRules(i);
      }
    }
    /**
     * change事件
     * @param e
     * @param i
     */

  }, {
    key: "change",
    value: function change(e, i) {
      // 赋值
      var newOption = this.sortList[i];
      newOption.options.order = e.target.value;
      this.$set(this.sortList, i, newOption); // 排序规则

      this.sortRules(i);
      this.emitDate();
    }
    /**
     * 抛出changeDate
     */

  }, {
    key: "emitDate",
    value: function emitDate() {
      var _this3 = this;

      // 清空
      this.changeData = []; // 抛出修改项

      this.sortList.forEach(function (item) {
        if (item.options.order) {
          _this3.changeData.push(JSON.parse(JSON.stringify(item)));
        }
      });
      this.$emit("changeData", this.changeData);
    }
    /**
     * 添加排序类型字段
     * @param data
     * @param type
     */

  }, {
    key: "addSortType",
    value: function addSortType(data, type) {
      if (!data) return;
      data.map(function (item) {
        return item.sortType = type;
      });
    }
    /**
     * 合并维度、指标数据
     */

  }, {
    key: "combineData",
    value: function combineData() {
      var _this4 = this;

      var concatList = [];
      var chartList = ["bar", "line", "area", "pileBar", "stripe", "radar", "biax"]; // 添加排序类型字段

      this.addSortType(this.deepCopyChart.data.groupDimension, "groupDimension");
      this.addSortType(this.deepCopyChart.data.dimension, "dimension"); // 上述7个图表 + 2维1标，排序只显示维度字段

      if (this.deepCopyChart.data.dimension.length === 2 && chartList.includes(this.deepCopyChart.type)) {
        concatList = this.sortList.concat([].concat(_toConsumableArray(this.deepCopyChart.data.groupDimension || []), _toConsumableArray(this.deepCopyChart.data.dimension)));
      } else {
        // 新增双轴图的多指标数据
        var biaxMetric = [];

        if (this.deepCopyChart.type === "biax" && this.deepCopyChart.data.metricGroup) {
          this.deepCopyChart.data.metricGroup.forEach(function (m) {
            biaxMetric = [].concat(_toConsumableArray(biaxMetric), _toConsumableArray(m));
          });
          this.addSortType(biaxMetric, "metric");
        } // 添加排序类型字段


        this.addSortType(this.deepCopyChart.data.metric, "metric"); // 1维1标、1维多标显示全部字段

        concatList = this.sortList.concat([].concat(_toConsumableArray(this.deepCopyChart.data.groupDimension || []), _toConsumableArray(this.deepCopyChart.data.dimension), _toConsumableArray(this.deepCopyChart.data.metric), _toConsumableArray(biaxMetric)));
      } // 合并维度、指标数组数据（显示规则：列维度、行维度、指标）


      concatList.forEach(function (item, index) {
        if (item.options && item.options.order) {
          delete concatList[index].options.order;
        }

        _this4.sortList.push(concatList[index]);

        _this4.deepCopyChart.data.sort.forEach(function (sort) {
          if (sort.uid === item.uid) {
            sort.sortType = item.sortType;

            if (sort.options && sort.options.order) {
              _this4.sortList[index].options.order = sort.options.order;
            }
          }
        });
      });
    }
    /**
     * 透视图筛选排序数据
     */

  }, {
    key: "filterTableSortData",
    value: function filterTableSortData() {
      var _this5 = this;

      if (this.chart.type === "table") {
        // 判断是否存在行维度，如果不存在，则排序数据中不显示指标字段
        var isExistDimension = this.sortList.find(function (item) {
          return item.sortType === "dimension";
        });

        if (!isExistDimension) {
          this.sortList.forEach(function (item, index) {
            if (item.sortType === "metric") {
              _this5.sortList = _this5.sortList.splice(0, index);
            }
          });
        }
      }
    }
  }, {
    key: "mounted",
    value: function mounted() {
      // 合并维度、指标数据
      this.combineData(); // 透视图筛选排序数据

      this.filterTableSortData();
      this.emitDate();
    }
  }]);

  return ReportSortModule;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return {};
  }
})], ReportSortModule.prototype, "chart", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return "";
  }
})], ReportSortModule.prototype, "chartType", void 0);

ReportSortModule = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-sort-module",
  components: {
    ARadio: _radio.default,
    ARadioButton: _radio.default.Button,
    ARadioGroup: _radio.default.Group
  }
})], ReportSortModule);
var _default2 = ReportSortModule;
exports.default = _default2;