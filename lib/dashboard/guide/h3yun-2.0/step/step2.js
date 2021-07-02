"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _vuexClass = require("vuex-class");

var _antdVue = require("@h3/antd-vue");

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

{
  /* <template>
  <a-modal
    v-if="visible"
    okText="确定"
    cancelText="取消"
    :visible="value"
    :destroyOnClose="true"
    :centered="true"
    :mask="false"
    title="数据源选择"
    :wrapClassName="prefixCls"
    width="482px"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <a-input
      placeholder="搜索"
    >
      <a-icon slot="prefix" type="search"/>
    </a-input>
    <div class="h3-menu-tree">
      <div class="h3-menu-tree-item">
        <i class="h3yun_All folder-open-fill"></i>
        <div class="h3-menu-tree-item__word">示例应用</div>
      </div>
      <div class="h3-menu-tree__list h3-menu-tree__list-open">
        <div class="h3-menu-tree">
          <div class="h3-menu-tree-item">
            <div class="h3-menu-tree-item__word">深圳奥力给营业报表</div>
          </div>
        </div>
      </div>
    </div>
    
  </a-modal>
  </template> */
}
var ReportPro = (0, _vuexClass.namespace)("report");

var ReportStep = /*#__PURE__*/function (_Vue) {
  _inherits(ReportStep, _Vue);

  var _super = _createSuper(ReportStep);

  function ReportStep() {
    var _this;

    _classCallCheck(this, ReportStep);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-yun-guide-step-2";
    _this.value = true;
    _this.parent = null;
    return _this;
  }

  _createClass(ReportStep, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return this.visible && h("a-modal", {
        attrs: {
          width: "482px",
          okText: "确定",
          title: "数据源选择",
          cancelText: "取消",
          visible: this.value,
          destroyOnClose: true,
          centered: true,
          mask: false,
          wrapClassName: this.prefixCls
        },
        on: {
          "ok": this.handleOk,
          "cancel": this.handleCancel
        }
      }, [h("a-input", {
        attrs: {
          placeholder: "搜索"
        }
      }, [h("a-icon", {
        slot: "prefix",
        attrs: {
          type: "search"
        }
      })]), h("div", {
        "class": "h3-menu-tree"
      }, [h("div", {
        "class": "h3-menu-tree-item"
      }, [h("i", {
        "class": "h3yun_All folder-open-fill"
      }), h("div", {
        "class": "h3-menu-tree-item__word"
      }, ["\u793A\u4F8B\u5E94\u7528"])]), h("div", {
        "class": "h3-menu-tree__list h3-menu-tree__list-open"
      }, [h("div", {
        "class": "h3-menu-tree"
      }, [h("div", {
        "class": "h3-menu-tree-item"
      }, [h("div", {
        "class": "h3-menu-tree-item__word"
      }, ["\u6DF1\u5733\u5965\u529B\u7ED9\u8425\u4E1A\u62A5\u8868"])])])])])]);
    }
  }, {
    key: "onVisibleChange",
    value: function onVisibleChange(val) {
      if (val) {
        var res = document.getElementsByClassName("h3-report-guide");

        if (res && res[0]) {
          this.parent = res[0];
          this.parent.className += "  h3-report-introjs-parentIndex  ";
        }
      }

      this.value = val;
    }
  }, {
    key: "handleOk",
    value: function handleOk() {
      if (this.parent) {
        this.parent.classList.remove("h3-report-introjs-parentIndex");
      }

      this.value = false; // 关闭第二步新手引导 弹出第一部弹窗 聚焦第三步

      this.setStep(3);
    }
  }, {
    key: "handleCancel",
    value: function handleCancel() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);

  return ReportStep;
}(_vuePropertyDecorator.Vue);

__decorate([ReportPro.State("global")], ReportStep.prototype, "global", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: false
})], ReportStep.prototype, "visible", void 0);

__decorate([(0, _vuePropertyDecorator.Inject)({
  default: function _default() {}
})], ReportStep.prototype, "setStep", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)("visible")], ReportStep.prototype, "onVisibleChange", null);

ReportStep = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-yun-guide-step-2",
  components: {
    AModal: _antdVue.Modal,
    AInput: _antdVue.Input,
    AIcon: _antdVue.Icon
  }
})], ReportStep);
var _default2 = ReportStep;
exports.default = _default2;