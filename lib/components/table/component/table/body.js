"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _cell = _interopRequireDefault(require("./cell"));

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

// import './table.less'
var ReportTableBody = /*#__PURE__*/function (_Vue) {
  _inherits(ReportTableBody, _Vue);

  var _super = _createSuper(ReportTableBody);

  function ReportTableBody() {
    _classCallCheck(this, ReportTableBody);

    return _super.apply(this, arguments);
  }

  _createClass(ReportTableBody, [{
    key: "render",
    value: function render(h) {
      var _this = this;

      var colgroup = [];
      var tr = [];
      var tableWidth = 0;
      this.columns.forEach(function (col, index) {
        tableWidth += _this.columnsWidth[index];
        colgroup.push(h('col', {
          attrs: {
            name: _this.columnsIds[index],
            width: _this.columnsWidth[index]
          }
        }));
      });
      this.innerData.forEach(function (item, rowIndex) {
        var td = [];

        _this.columns.forEach(function (col, index) {
          td.push(h('td', {
            attrs: {
              class: _this.columnsIds[index]
            }
          }, [h(_cell.default, {
            props: {
              index: _this.rowIndex + rowIndex,
              formatter: col.formatter,
              row: item,
              data: item[col.prop]
            }
          })]));
        });

        tr.push(h('tr', td));
      });
      var index = this.index - 1 > 0 ? this.index - 1 : 0;
      return h('table', {
        style: {
          position: 'absolute',
          left: '0',
          top: "".concat(index * 2000, "px"),
          width: "".concat(tableWidth, "px")
        },
        attrs: {
          cellspacing: 0,
          cellpadding: 0,
          border: 0,
          class: "".concat(this.prefixCls, "__body")
        }
      }, [h('colgroup', colgroup), tr]);
    }
  }]);

  return ReportTableBody;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportTableBody.prototype, "innerData", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return 0;
  }
})], ReportTableBody.prototype, "index", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return 0;
  }
})], ReportTableBody.prototype, "rowIndex", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportTableBody.prototype, "columnsIds", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportTableBody.prototype, "columns", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportTableBody.prototype, "columnsWidth", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return 'h3-table';
  }
})], ReportTableBody.prototype, "prefixCls", void 0);

ReportTableBody = __decorate([(0, _vuePropertyDecorator.Component)({
  name: 'h3-table-body',
  components: {
    Cell: _cell.default
  }
})], ReportTableBody);
var _default2 = ReportTableBody;
exports.default = _default2;