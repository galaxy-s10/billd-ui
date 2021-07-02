"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _table = _interopRequireDefault(require("./component/table"));

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

var ReportTable = /*#__PURE__*/function (_Vue) {
  _inherits(ReportTable, _Vue);

  var _super = _createSuper(ReportTable);

  function ReportTable() {
    var _this;

    _classCallCheck(this, ReportTable);

    _this = _super.apply(this, arguments);
    _this.prefixCls = 'h3-report-table';
    _this.height = 0;
    _this.width = 0;
    return _this;
  }

  _createClass(ReportTable, [{
    key: "watchResizeState",
    value: function watchResizeState(val) {
      if (!val && this.refresh) {
        this.height = this.options.height || this.$el.clientHeight;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": this.prefixCls
      }, [this.refresh && h("h3-table", {
        attrs: {
          summary: true,
          columns: this.getColumns,
          data: this.options.data,
          height: this.tableHeight
        }
      })]);
    }
  }, {
    key: "tableHeight",
    get: function get() {
      return this.height;
    }
  }, {
    key: "getColumns",
    get: function get() {
      var _this2 = this;

      var cols = this.options.columns.map(function (col) {
        return {
          label: col.alias || col.name,
          prop: col.uid,
          width: 100,
          type: col.type,
          summaryType: col.options ? col.options.aggregateType : null,
          formatter: function formatter(text, row) {
            return _this2.options.dataAlias[text] || text;
          }
        };
      }); // cols.unshift({
      //   label: '序号',
      //   prop: 'index',
      //   width: 40,
      //   formatter: (text: string, row: any, index: number) => (index + 1).toString()
      // } as any);

      return cols;
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.height = this.options.height || this.$el.clientHeight;
      this.width = this.$el.clientWidth;
    }
  }]);

  return ReportTable;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return {};
  }
})], ReportTable.prototype, "options", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return true;
  }
})], ReportTable.prototype, "refresh", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)('options.resizeState')], ReportTable.prototype, "watchResizeState", null);

ReportTable = __decorate([(0, _vuePropertyDecorator.Component)({
  name: 'h3-report-table',
  components: {
    H3Table: _table.default
  }
})], ReportTable);
var _default2 = ReportTable;
exports.default = _default2;