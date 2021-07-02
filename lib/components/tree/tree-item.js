"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/checkbox/style/css");

var _checkbox = _interopRequireDefault(require("ant-design-vue/lib/checkbox"));

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

var Tree = /*#__PURE__*/function (_Vue) {
  _inherits(Tree, _Vue);

  var _super = _createSuper(Tree);

  function Tree() {
    var _this;

    _classCallCheck(this, Tree);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-menu-tree-item";
    return _this;
  }

  _createClass(Tree, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      // :treeNode="treeNode" :nodeIcon="nodeIconStyle"
      return h("div", {
        "class": {
          "h3-menu-tree-item": true,
          "h3-menu-tree-item--selected": "".concat(this.treeNode.selected)
        },
        scopedSlots: {
          node: function node(props) {
            console.log("使用nodenode插槽", props);
            return h("div", [_this2.nodeIconStyle ? h("i", {
              "class": "nodeIconStyle"
            }) : "", h("div", {
              "class": "".concat(_this2.prefixCls, "__word")
            }, [_this2.treeNode[_this2.mapping.title]])]);
          } // default: props => {
          //   console.log('default1');
          //   return <span>default1</span>;
          // }

        },
        on: {
          "click": this.click,
          "mousemove": this.mousemove
        }
      }, [this.$scopedSlots.node ? this.$scopedSlots.node({
        treeNode: this.treeNode,
        nodeIcon: this.nodeIconStyle
      }) : h("div", [this.nodeIconStyle && h("i", {
        "class": "nodeIconStyle"
      }), h("div", {
        "class": "".concat(this.prefixCls, "__word")
      }, [this.treeNode[this.mapping.title]])]), this.multiple && this.getFolderCheckbox ? h("h3-checkbox", {
        "class": ["".concat(this.prefixCls, "__checkbox")],
        attrs: {
          checked: this.treeNode.checked
        },
        on: {
          "change": function change($event) {
            $event.stopPropagation();
            return _this2.treeCheckbox($event);
          }
        }
      }) : ""]);
    }
  }, {
    key: "watchTreeNode",
    value: function watchTreeNode() {
      this.addFolderList(this.treeNode);
    }
  }, {
    key: "nodeIconStyle",
    get: function get() {
      var style = null;

      if (this.treeNode[this.mapping.folder]) {
        if (this.folderIcon) {
          if (this.treeNode.open) {
            style = this.folderIcon.open;
          } else {
            style = this.folderIcon.close;
          }
        }
      } else if (this.nodeIcon) {
        style = this.nodeIcon;
      }

      return style;
    }
  }, {
    key: "getFolderCheckbox",
    get: function get() {
      if (this.folderCheckbox) {
        return true;
      } else {
        return !this.treeNode[this.mapping.folder];
      }
    }
  }, {
    key: "treeCheckbox",
    value: function treeCheckbox() {
      console.log("sdfsf");
      console.log(this.multipleClick);
      this.multipleClick(this.treeNode);
    }
  }, {
    key: "mousemove",
    value: function mousemove() {
      this.nodeHover(this.treeNode);
    }
  }, {
    key: "click",
    value: function click() {
      this.treeNode.open = !this.treeNode.open;

      if (!this.treeNode[this.mapping.folder] || this.folderSelected) {
        this.nodeClick(this.treeNode);
      }

      if (this.treeNode[this.mapping.folder]) {
        this.treeNodeExpand(this.treeNode);
      }
    }
  }]);

  return Tree;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return {};
  }
})], Tree.prototype, "treeNode", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return null;
  }
})], Tree.prototype, "folderIcon", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return null;
  }
})], Tree.prototype, "nodeIcon", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return false;
  }
})], Tree.prototype, "multiple", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return false;
  }
})], Tree.prototype, "folderSelected", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return false;
  }
})], Tree.prototype, "folderCheckbox", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return {};
  }
})], Tree.prototype, "mapping", void 0);

__decorate([(0, _vuePropertyDecorator.Inject)({
  default: function _default() {}
})], Tree.prototype, "nodeClick", void 0);

__decorate([(0, _vuePropertyDecorator.Inject)({
  default: function _default() {}
})], Tree.prototype, "nodeHover", void 0);

__decorate([(0, _vuePropertyDecorator.Inject)({
  default: function _default() {}
})], Tree.prototype, "multipleClick", void 0);

__decorate([(0, _vuePropertyDecorator.Inject)({
  default: function _default() {}
})], Tree.prototype, "treeNodeExpand", void 0);

__decorate([(0, _vuePropertyDecorator.Inject)({
  default: function _default() {}
})], Tree.prototype, "addFolderList", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)("tree", {
  immediate: true
})], Tree.prototype, "watchTreeNode", null);

Tree = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-menu-tree-item",
  components: {
    H3Checkbox: _checkbox.default
  }
})], Tree);
var _default2 = Tree;
exports.default = _default2;