"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("babel-helper-vue-jsx-merge-props"));

var _vuePropertyDecorator = require("vue-property-decorator");

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

// import '../styles/index.less';
var prefix = 'h3-report';

var ReportListPagination = /*#__PURE__*/function (_Vue) {
  _inherits(ReportListPagination, _Vue);

  var _super = _createSuper(ReportListPagination);

  function ReportListPagination() {
    var _this;

    _classCallCheck(this, ReportListPagination);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "".concat(prefix, "-list-pagination");
    _this.pageValue = 1;
    _this.pageSizeName = '条/页';
    _this.currentPageSize = _this.pageSize[0];
    _this.showPageSizePane = false;
    return _this;
  }
  /**
   * 最大页数
   */


  _createClass(ReportListPagination, [{
    key: "maxPagesize",
    get: function get() {
      return Math.ceil(this.total / this.currentPageSize) || 1;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("div", {
        "class": this.prefixCls
      }, [this.showTotal && h("div", {
        "class": "".concat(this.prefixCls, "__totle")
      }, [" ", this.showTotal(this.total)]), h("div", {
        "class": "".concat(this.prefixCls, "__page")
      }, [h("i", {
        "class": "h3yun_All left-o ".concat(this.pageValue === 1 ? 'forbid' : ''),
        on: {
          "click": this.changePage
        }
      }), h("input", (0, _babelHelperVueJsxMergeProps.default)([{
        on: {
          "input": function input($event) {
            if ($event.target.composing) return;
            _this2.pageValue = $event.target.value;
          }
        },
        attrs: {
          type: "text"
        },
        "class": "".concat(this.prefixCls, "__page-num"),
        domProps: {
          "value": _this2.pageValue
        }
      }, {
        directives: [{
          name: "model",
          value: _this2.pageValue,
          modifiers: {}
        }]
      }, {
        on: {
          "change": this.changePage
        }
      }])), "/", h("span", {
        "class": "".concat(this.prefixCls, "__page-total")
      }, [this.maxPagesize]), h("i", {
        "class": "h3yun_All right-o ".concat(this.pageValue === this.maxPagesize ? 'forbid' : ''),
        on: {
          "click": this.changePage
        }
      })]), this.showSizeChanger && h("div", {
        "class": "".concat(this.prefixCls, "__changer")
      }, [h("div", {
        attrs: {
          tabindex: "1"
        },
        "class": "".concat(this.prefixCls, "__changer__input"),
        on: {
          "touchstart": this.showPageSizePane = true,
          "focus": this.showPageSizePane = true,
          "blur": this.closePageSize
        }
      }, ["".concat(this.currentPageSize, " ").concat(this.pageSizeName)]), h("div", {
        "class": "".concat(this.prefixCls, "__changer-item"),
        directives: [{
          name: "show",
          value: this.showPageSizePane
        }]
      }, [this.pageSize.map(function (item, index) {
        return h("li", {
          "class": [item === _this2.currentPageSize ? "".concat(_this2.prefixCls, "__changer-item--selected") : ''],
          key: index,
          on: {
            "click": _this2.selectPageSize(item)
          }
        });
      })])])]);
    }
    /**
     * 关闭页输选择器面板
     */

  }, {
    key: "closePageSize",
    value: function closePageSize() {
      var _this3 = this;

      // 定时器原因是先选中条数 再关闭面板
      setTimeout(function () {
        _this3.showPageSizePane = false;
      }, 400);
    }
    /**
     * 选择页数大小
     */

  }, {
    key: "selectPageSize",
    value: function selectPageSize(item) {
      this.currentPageSize = item;
      this.pageValue = this.pageValue > this.maxPagesize ? this.maxPagesize : this.pageValue;
      var params = {
        pageSize: this.currentPageSize,
        pageIndex: this.pageValue
      };
      this.$emit('change', params);
      this.closePageSize();
    }
    /**
     * 改变当前页数
     */

  }, {
    key: "changePage",
    value: function changePage(e) {
      var target = e.target;
      var page = this.pageValue;

      if (target.className.indexOf('left-o') > -1) {
        page -= 1;
      } else if (target.className.indexOf('right-o') > -1) {
        page += 1;
      } else {
        page = parseInt(target.value) || 1;
      }

      page = page < 1 ? 1 : page > this.maxPagesize ? this.maxPagesize : page;
      if (page === this.pageValue) return;
      this.pageValue = page;
      var params = {
        pageSize: this.currentPageSize,
        pageIndex: this.pageValue
      };
      this.$emit('change', params);
    }
  }]);

  return ReportListPagination;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {}
})], ReportListPagination.prototype, "showTotal", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: 0
})], ReportListPagination.prototype, "total", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: true
})], ReportListPagination.prototype, "showSizeChanger", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [10, 20, 30, 50, 100];
  }
})], ReportListPagination.prototype, "pageSize", void 0);

ReportListPagination = __decorate([(0, _vuePropertyDecorator.Component)({
  name: 'h3-report-list-pagination',
  components: {}
})], ReportListPagination);
var _default2 = ReportListPagination;
exports.default = _default2;