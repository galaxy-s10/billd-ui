"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

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

var tableWidth = 0;

var ReportTable = /*#__PURE__*/function (_Vue) {
  _inherits(ReportTable, _Vue);

  var _super = _createSuper(ReportTable);

  function ReportTable() {
    _classCallCheck(this, ReportTable);

    return _super.apply(this, arguments);
  }

  _createClass(ReportTable, [{
    key: "watchScrollLeft",
    value: function watchScrollLeft() {
      var header = this.$refs.header;

      if (header) {
        header.scrollLeft = this.scrollLeft;
      }
    }
  }, {
    key: "render",
    value: function render(h) {
      var _this = this;

      var colgroup = [];
      var tr = [];
      tableWidth = 0;
      this.columns.forEach(function (col, index) {
        tableWidth += _this.columnsWidth[index];
        colgroup.push(h('col', {
          attrs: {
            name: _this.columnsIds[index],
            width: _this.columnsWidth[index]
          }
        }));
        tr.push(h('th', {
          attrs: {
            class: _this.columnsIds[index]
          },
          style: {
            color: '#f00'
          }
        }, [h('div', {
          attrs: {
            class: 'cell'
          }
        }, col.label)]));
      });

      if (!this.gutter) {
        tableWidth += this.gutterWidth;
        colgroup.push(h('col', {
          attrs: {
            name: 'gutter',
            width: this.gutter ? 0 : this.gutterWidth
          }
        }));
        tr.push(h('th', {
          class: {
            gutter: true,
            'is-hidden': this.gutter
          }
        }));
      }

      return h('div', {
        ref: 'header',
        attrs: {
          class: "".concat(this.prefixCls, "__header-warp")
        }
      }, [h('table', {
        style: {
          width: "".concat(tableWidth, "px")
        },
        attrs: {
          cellspacing: 0,
          cellpadding: 0,
          border: 0,
          class: "".concat(this.prefixCls, "__header")
        }
      }, [h('colgroup', colgroup), h('tr', tr)])]);
    }
  }]);

  return ReportTable;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportTable.prototype, "columnsWidth", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportTable.prototype, "columnsIds", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportTable.prototype, "columns", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return 'h3-table';
  }
})], ReportTable.prototype, "prefixCls", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return 0;
  }
})], ReportTable.prototype, "scrollLeft", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return '';
  }
})], ReportTable.prototype, "gutter", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return 17;
  }
})], ReportTable.prototype, "gutterWidth", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)('scrollLeft')], ReportTable.prototype, "watchScrollLeft", null);

ReportTable = __decorate([(0, _vuePropertyDecorator.Component)({
  name: 'h3-table-header',
  components: {}
})], ReportTable);
var _default2 = ReportTable;
exports.default = _default2;