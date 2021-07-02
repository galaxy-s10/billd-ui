"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/tabs/style/css");

var _tabs = _interopRequireDefault(require("ant-design-vue/lib/tabs"));

require("ant-design-vue/lib/icon/style/css");

var _icon = _interopRequireDefault(require("ant-design-vue/lib/icon"));

require("ant-design-vue/lib/input/style/css");

var _input = _interopRequireDefault(require("ant-design-vue/lib/input"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _vueFragment = require("vue-fragment");

var _tree = _interopRequireDefault(require("../tree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

// import './style.less';
var SearchTree = /*#__PURE__*/function (_Vue) {
  _inherits(SearchTree, _Vue);

  var _super = _createSuper(SearchTree);

  function SearchTree() {
    var _this;

    _classCallCheck(this, SearchTree);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-search-tree";
    _this.searchValue = null;
    _this.innerList = [];
    _this.activeNode = null;
    return _this;
  }

  _createClass(SearchTree, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("div", {
        "class": this.prefixCls
      }, [h("div", {
        "class": "".concat(this.prefixCls, "__search")
      }, [h("a-input", {
        attrs: {
          placeholder: "搜索",
          value: this.searchValue
        },
        on: {
          "change": function change() {
            return _this2.search;
          }
        }
      }, [h("a-icon", {
        slot: "prefix",
        attrs: {
          type: "search"
        }
      })])]), this.$slots.default ? this.$slots.default : h("a-fragment", [h("div", {
        ref: "list",
        "class": "".concat(this.prefixCls, "__list")
      }, [!this.searchValue || this.getSearchList.length ? h("h3-tree", {
        attrs: {
          tile: true,
          accord: false,
          folderSelected: this.isSearchFolder,
          "open-keys": this.openKeys,
          "tree-list": this.getSourceList,
          "key-mappings": this.keyMappings
        },
        scopedSlots: {
          node: function node(props) {
            return h("a-fragment", [props.nodeIcon && h("i", {
              "class": "nodeIcon"
            }), h("div", {
              domProps: {
                "innerHTML": _this2.getHighlight(props.treeNode)
              },
              "class": "h3-menu-tree-item__word",
              attrs: {
                "data-key": props.treeNode[_this2.keyMappings.key]
              }
            })]);
          }
        },
        on: {
          "node-click": function nodeClick() {
            return _this2.nodeClick;
          },
          "open-keys-end": function openKeysEnd() {
            return _this2.openKeysEnd;
          }
        }
      }) : h("div", {
        "class": "".concat(this.prefixCls, "__empty")
      }, [this.empty])])])]);
    }
  }, {
    key: "watchList",
    value: function watchList() {
      this.innerList = JSON.parse(JSON.stringify(this.list));
    }
  }, {
    key: "defaultNodeId",
    get: function get() {
      return this.value && this.value instanceof Object ? this.value[this.keyMappings.key] : this.value;
    }
  }, {
    key: "keyMappings",
    get: function get() {
      return _extends({
        title: "title",
        key: "key",
        parent: "parent",
        folder: "folder"
      }, this.mappings);
    }
    /**
     * 获取数据源列表
     */

  }, {
    key: "getSourceList",
    get: function get() {
      var _this3 = this;

      var list = [];

      if (this.searchValue) {
        list = this.getSearchList;
      } else if (this.innerList.length) {
        if (this.value) {
          this.innerList.forEach(function (node) {
            // 如果数据源Id和当前数据源一致
            if (node[_this3.keyMappings.key] === _this3.defaultNodeId) {
              node.selected = true;
            } else {
              node.selected = false;
            }
          });
        }

        list = this.innerList;
      }

      return list;
    }
    /**
     * 获取查询的列表
     */

  }, {
    key: "getSearchList",
    get: function get() {
      var _this4 = this;

      return this.innerList.filter(function (node) {
        return (!node[_this4.keyMappings.folder] || _this4.isSearchFolder) && node[_this4.keyMappings.title].includes(_this4.searchValue);
      });
    }
    /**
     * 获取高亮显示文本
     * @param node
     */

  }, {
    key: "getHighlight",
    value: function getHighlight(node) {
      return this.searchValue ? node[this.keyMappings.title].replace(new RegExp("(".concat(this.searchValue, ")")), '<span class="highlight">$1</span>') : node[this.keyMappings.title];
    }
    /**
     * 搜索的时候清空激活的节点
     */

  }, {
    key: "search",
    value: function search() {
      this.$emit("input", null);
    }
    /**
     * 节点点击
     */

  }, {
    key: "nodeClick",
    value: function nodeClick(node) {
      this.$emit("input", node);
    }
    /**
     * 打开数据源node之后
     */

  }, {
    key: "openKeysEnd",
    value: function openKeysEnd() {
      var _this5 = this;

      setTimeout(function () {
        if (_this5.value) {
          var ele = _this5.$el.querySelector("[data-key=\"".concat(_this5.value[_this5.keyMappings.key], "\"]"));

          if (ele && _this5.defaultScrollTop) {
            var list = _this5.$refs.list;
            var listRect = list.getBoundingClientRect();
            var eleRect = ele.getBoundingClientRect();
            list.scrollTop = eleRect.top - listRect.top;
          }
        }
      }, 100);
    }
  }]);

  return SearchTree;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return null;
  }
})], SearchTree.prototype, "openKeys", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], SearchTree.prototype, "list", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return null;
  }
})], SearchTree.prototype, "value", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return false;
  }
})], SearchTree.prototype, "isSearchFolder", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return true;
  }
})], SearchTree.prototype, "defaultScrollTop", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return null;
  }
})], SearchTree.prototype, "mappings", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return "无查询结果";
  }
})], SearchTree.prototype, "empty", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)("list", {
  immediate: true,
  deep: true
})], SearchTree.prototype, "watchList", null);

SearchTree = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-search-tree",
  components: {
    AInput: _input.default,
    AIcon: _icon.default,
    H3Tree: _tree.default,
    ATabs: _tabs.default,
    ATabPane: _tabs.default.TabPane,
    AFragment: _vueFragment.Fragment
  }
})], SearchTree);
var _default2 = SearchTree;
exports.default = _default2;