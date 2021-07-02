"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _cell = _interopRequireDefault(require("./cell"));

var _alias = _interopRequireDefault(require("../../utils/alias"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var TableMixin = /*#__PURE__*/function (_Vue) {
  _inherits(TableMixin, _Vue);

  var _super = _createSuper(TableMixin);

  function TableMixin() {
    _classCallCheck(this, TableMixin);

    return _super.apply(this, arguments);
  }

  _createClass(TableMixin, [{
    key: "makeHead",
    value:
    /**
     * 创建表格
     * @param h
     * @param allowDrag
     */
    function makeHead(h) {
      var _this = this;

      var allowDrag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var self = this;
      var headTrs = [];
      var headerThs = [];
      var cellOptions = {};
      self.tableRows.forEach(function (row, index) {
        headerThs = [];
        row.forEach(function (cell, cellIndex) {
          var options = {
            attrs: {},
            class: {}
          };
          var dragDiv = h("div", {
            class: {
              "column-resize-area": true
            },
            on: {
              mousedown: function mousedown(e) {
                self.startDrag(e, cell);
              },
              dblclick: function dblclick(e) {
                self.dblclick(e, cell);
              }
            }
          });
          cellOptions = {
            props: {
              field: _this.rows[index],
              row: row,
              rowIndex: index,
              index: cellIndex,
              allowDrag: cellIndex !== row.length - 1,
              formatter: function formatter(_ref) {
                var data = _ref.data;
                var realData = _this.rows[index] ? (0, _alias.default)(_this.rows[index].uid, data, _this.alias) : "";
                return realData || data;
              },
              data: cell
            }
          };

          if (index < _this.rows.length && cellIndex > 0) {
            cellOptions.class = {
              "cell-click": cell.label !== "汇总"
            };
            cellOptions.on = {
              click: function click(data) {
                if (_this.cellClick) {
                  _this.cellClick({
                    type: "header",
                    data: data
                  });
                }
              }
            };
          }

          if (_typeof(cell) === "object") {
            if (cell.colspan) {
              options.attrs.colspan = cell.colspan;
            }

            if (cell.rowspan) {
              options.attrs.rowspan = cell.rowspan;
              cellOptions.class["middle"] = true;
            }

            cellOptions.props.data = cell.label;
          } // 最后一列并且不为最后一个才允许拖拽


          if (index === self.tableRows.length - 1 && cellIndex !== row.length - 1 && allowDrag && _this.allowDrag) {
            headerThs.push(h("th", options, [h(_cell.default, cellOptions), dragDiv]));
          } else {
            headerThs.push(h("th", options, [h(_cell.default, cellOptions)]));
          }
        });
        headTrs.push(h("tr", headerThs));
      });
      return headTrs;
    }
    /**
     * 拖拽
     */

  }, {
    key: "startDrag",
    value: function startDrag(e, row) {
      this.$emit("start-drag", {
        e: e,
        row: row
      });
    }
    /**
     * 双击格子自适应
     */

  }, {
    key: "dblclick",
    value: function dblclick(e, row) {
      this.$emit("change-columns", {
        e: e,
        row: row
      });
    }
  }]);

  return TableMixin;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {}
})], TableMixin.prototype, "alias", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], TableMixin.prototype, "tableRows", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], TableMixin.prototype, "rows", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return true;
  }
})], TableMixin.prototype, "allowDrag", void 0);

__decorate([(0, _vuePropertyDecorator.Inject)()], TableMixin.prototype, "cellClick", void 0);

TableMixin = __decorate([(0, _vuePropertyDecorator.Component)({
  components: {
    Cell: _cell.default
  }
})], TableMixin);
var _default2 = TableMixin;
exports.default = _default2;