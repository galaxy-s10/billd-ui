"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _treeItem = _interopRequireDefault(require("./tree-item"));

var _vuedraggable = _interopRequireDefault(require("vuedraggable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var MenuTree_1;
{
  /* <script lang="ts"> */
}

var MenuTree = MenuTree_1 = /*#__PURE__*/function (_Vue) {
  _inherits(MenuTree, _Vue);

  var _super = _createSuper(MenuTree);

  function MenuTree() {
    var _this;

    _classCallCheck(this, MenuTree);

    _this = _super.apply(this, arguments); // innerTreeNode: H3.Tree.TreeNode | undefined;

    _this.innerTreeNode = {};
    _this.prefixCls = "h3-menu-tree";
    _this.dragOptions = {
      group: "dragGroup",
      animation: 150,
      sort: true // 定义是否可以拖拽

    }; // 拖拽移动的节点信息

    _this.moveNode = null; // 拖拽移动结束后的父节点ID

    _this.moveNodeParentObjectId = "";
    return _this;
  }

  _createClass(MenuTree, [{
    key: "watchTreeNode",
    value: function watchTreeNode() {
      var _this2 = this;

      var defaultNode = {
        icon: "",
        open: false,
        selected: false,
        checked: false,
        hover: false
      };
      Object.keys(this.mapping).forEach(function (key) {
        defaultNode[key] = null;
      });

      var assignValue = _extends(defaultNode, this.treeNode);

      Object.keys(assignValue).forEach(function (key) {
        // $set强制更新数据，否则监听不到treeNode
        _this2.$set(_this2.innerTreeNode, key, assignValue[key]);
      });

      if (this.parentNode) {
        this.innerTreeNode[this.mapping.parent] = this.parentNode[this.mapping.key];
      } // 判断是否为目录级


      if (Object.keys(this.innerTreeNode)[this.mapping.folder]) {
        this.innerTreeNode[this.mapping.folder] = true;
      }
    }
  }, {
    key: "watchIsOpen",
    value: function watchIsOpen(val) {
      var _this3 = this;

      if (val) {
        this.$emit("parent-open");
      }

      this.$nextTick(function () {
        if (_this3.$refs.list) {
          _this3.$refs.list.classList.toggle("h3-menu-tree__list-open");
        }
      });
    }
  }, {
    key: "parentOpen",
    value: function parentOpen() {
      this.innerTreeNode.open = true;
    }
    /**
     * 拖拽开始
     * @param evt 拖拽自带属性
     */

  }, {
    key: "menuDragStart",
    value: function menuDragStart(evt) {// console.log('menuDragStart', evt);
      // 拖拽的目标节点信息
      // this.treeDragStart(evt, this.moveNode);
    }
    /**
     * 拖拽结束
     * @param evt 拖拽自带属性
     */

  }, {
    key: "menuDragEnd",
    value: function menuDragEnd(evt) {
      // console.log('menuDragEnd', evt);
      this.treeDragEnd(evt);
    }
    /**
     * 节点拖拽开始
     * @param evt
     * @param moveNode 拖拽的目标节点信息
     */

  }, {
    key: "treeValueChange",
    value: function treeValueChange(evt) {
      this.$emit("tree-drag-change", evt);
    }
    /**
     *
     */

  }, {
    key: "treeMenuValueChange",
    value: function treeMenuValueChange(evt) {// console.log('treeMenuValueChange', evt);
    }
    /**
     * 节点拖拽时的
     * @param evt
     */

  }, {
    key: "treeMenuMove",
    value: function treeMenuMove(evt) {
      this.moveNode = evt.draggedContext.element; // console.log('tree-menu  treeMove', evt);

      this.treeMove(evt);
    }
    /**
     * 节点拖动到另一个列表时
     * @param evt
     */

  }, {
    key: "treeRemove",
    value: function treeRemove(evt) {
      // console.log('MENU ---treeRemove', evt, this.treeNode);
      var child = this.treeNode.children || [];
      child.splice(evt.oldIndex, 1);
      this.treeMenuChange(child, this.treeNode);
    }
    /**
     *
     */

  }, {
    key: "treeAdd",
    value: function treeAdd(evt) {
      console.log("treeadd", evt, this.treeNode);
      var formRoot = !evt.from.dataset.key && !evt.to.dataset.key;
      if (formRoot) return;
      var child = this.treeNode.children || [];
      child.splice(evt.newIndex, 0, evt.item._underlying_vm_);
      this.treeMenuChange(child, this.treeNode);
    }
    /**
     * 找父节点ObjectId
     */

  }, {
    key: "findParentObjectId",
    value: function findParentObjectId(list, objectId) {
      var _iterator = _createForOfIteratorHelper(list.children),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var i = _step.value;

          if (i.objectId === objectId) {
            this.moveNodeParentObjectId = list.objectId;
            break;
          } else {
            if (i.children) {
              this.findParentObjectId(i, objectId);
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "render",
    value: function render(h) {
      var _this4 = this;

      if (!this.innerTreeNode) return;
      var dragArr = [];
      var menuTrees = [];
      var list;

      if (this.innerTreeNode.children && this.innerTreeNode.children.length) {
        this.innerTreeNode.children.forEach(function (tree) {
          menuTrees.push(h(MenuTree_1, {
            key: tree[_this4.mapping.key],
            props: _extends({}, _this4.$props, {
              treeNode: tree,
              parentNode: _this4.innerTreeNode
            }),
            on: {
              "parent-open": _this4.parentOpen,
              "tree-drag-change": _this4.treeMenuValueChange
            },
            scopedSlots: _this4.$scopedSlots
          }));
        });
      } // 能拖拽才渲染dragging


      if (this.dragging) {
        dragArr.push([h(_vuedraggable.default, {
          attrs: {
            "data-key": this.treeNode[this.mapping.key]
          },
          props: {
            // list: this.treeNode.children,
            value: this.treeNode.children,
            options: this.dragOptions,
            move: this.treeMenuMove
          },
          on: {
            input: this.treeValueChange,
            start: this.menuDragStart,
            end: this.menuDragEnd,
            remove: this.treeRemove,
            move: this.treeMenuMove,
            add: this.treeAdd
          }
        }, menuTrees)]);
      } else {
        dragArr = menuTrees;
      }

      if (dragArr.length && this.innerTreeNode.open) {
        list = h("div", {
          ref: "list",
          class: {
            "h3-menu-tree__list": true,
            "h3-menu-tree__list--dragging": this.dragging
          }
        }, dragArr);
      }

      console.log(this.$scopedSlots.node);
      console.log(list);
      return h("div", {
        class: {
          "h3-menu-tree": true
        }
      }, [h(_treeItem.default, {
        props: _extends({}, this.$props, {
          treeNode: this.innerTreeNode
        }),
        scopedSlots: {
          node: this.$scopedSlots.node
        },
        attrs: {
          aaa: 123,
          bbb: 5435
        }
      }), list]);
    }
  }]);

  return MenuTree;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], MenuTree.prototype, "treeNode", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], MenuTree.prototype, "parentNode", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return true;
  }
})], MenuTree.prototype, "accord", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return null;
  }
})], MenuTree.prototype, "folderIcon", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return null;
  }
})], MenuTree.prototype, "nodeIcon", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return false;
  }
})], MenuTree.prototype, "multiple", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return false;
  }
})], MenuTree.prototype, "folderSelected", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return false;
  }
})], MenuTree.prototype, "folderCheckbox", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return false;
  }
})], MenuTree.prototype, "dragging", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return {};
  }
})], MenuTree.prototype, "mapping", void 0);

__decorate([(0, _vuePropertyDecorator.Inject)({
  default: function _default() {}
})], MenuTree.prototype, "treeDragStart", void 0);

__decorate([(0, _vuePropertyDecorator.Inject)({
  default: function _default() {}
})], MenuTree.prototype, "treeDragEnd", void 0);

__decorate([(0, _vuePropertyDecorator.Inject)({
  default: function _default() {}
})], MenuTree.prototype, "treeMove", void 0);

__decorate([(0, _vuePropertyDecorator.Inject)({
  default: function _default() {}
})], MenuTree.prototype, "treeMenuChange", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)("treeNode", {
  immediate: true,
  deep: true
})], MenuTree.prototype, "watchTreeNode", null);

__decorate([(0, _vuePropertyDecorator.Watch)("innerTreeNode.open")], MenuTree.prototype, "watchIsOpen", null);

MenuTree = MenuTree_1 = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-menu-tree",
  components: {
    TreeItem: _treeItem.default,
    H3Draggable: _vuedraggable.default
  }
})], MenuTree);
var _default2 = MenuTree; // </script>

exports.default = _default2;