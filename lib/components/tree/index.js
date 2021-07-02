"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _treeMenu = _interopRequireDefault(require("./tree-menu"));

var _treeItem = _interopRequireDefault(require("./tree-item"));

var _vuedraggable = _interopRequireDefault(require("vuedraggable"));

var _vueFragment = require("vue-fragment");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

var Tree = /*#__PURE__*/function (_Vue) {
  _inherits(Tree, _Vue);

  var _super = _createSuper(Tree);

  function Tree() {
    var _this;

    _classCallCheck(this, Tree);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-tree";
    _this.innerNodeList = {};
    _this.checkedNodeList = {};
    _this.dragOptions = {
      group: "dragGroup",
      animation: 150,
      disabled: false,
      sort: true // 定义是否可以拖拽

    };
    _this.moveNode = null;
    _this.toList = null;
    _this.fromList = null;
    _this.openTimer = null; // 真正渲染的数据序列 内部数据

    _this.renderTreeList = [];
    return _this;
  }

  _createClass(Tree, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("div", {
        "class": "h3-tree"
      }, [this.dragging ? h("h3-draggable", {
        attrs: {
          "data-key": "null",
          value: this.renderTreeList,
          options: this.dragOptions,
          move: this.treeMove
        },
        on: {
          "input": function input() {
            return _this2.treeValueChange;
          },
          "start": function start() {
            return _this2.treeDragStart;
          },
          "end": function end() {
            return _this2.treeDragEnd;
          },
          "remove": function remove() {
            return _this2.treeRemove;
          }
        }
      }, [this.renderTreeList.map(function (tree) {
        return h("tree-menu", {
          attrs: {
            treeNode: tree,
            mapping: _this2.mapping,
            parentNode: null,
            accord: _this2.accord,
            folderIcon: _this2.folderIcon,
            nodeIcon: _this2.nodeIcon,
            multiple: _this2.multiple,
            folderSelected: _this2.folderSelected,
            folderCheckbox: _this2.folderCheckbox,
            dragging: _this2.dragging
          },
          key: "h-".concat(tree[_this2.mapping.key]),
          scopedSlots: {
            node: function node(props) {
              return _this2.$scopedSlots.node ? _this2.$scopedSlots.node({
                treeNode: props.treeNode,
                nodeIcon: props.nodeIcon
              }) : undefined;
            }
          },
          on: {
            "tree-drag-change": function treeDragChange(e) {
              return _this2.dragChange(e, tree);
            }
          }
        });
      })]) : h("div", [this.renderTreeList.map(function (tree) {
        return h("tree-menu", {
          key: "h-".concat(tree[_this2.mapping.key]),
          attrs: {
            treeNode: tree,
            mapping: _this2.mapping,
            parentNode: "null",
            accord: _this2.accord,
            folderIcon: _this2.folderIcon,
            nodeIcon: _this2.nodeIcon,
            multiple: _this2.multiple,
            folderSelected: _this2.folderSelected,
            folderCheckbox: _this2.folderCheckbox,
            dragging: _this2.mapping
          },
          scopedSlots: {
            // node: (props) => {
            //   return (
            //     <a-vue-fragment>
            //       {this.$scopedSlots.node({ treeNode: props.treeNode, nodeIcon: props.nodeIcon })}
            //     </a-vue-fragment>
            //   );
            // },
            node: function node(props) {
              return _this2.$scopedSlots.node ? _this2.$scopedSlots.node({
                treeNode: props.treeNode,
                nodeIcon: props.nodeIcon
              }) : undefined;
            }
          },
          on: {
            "tree-drag-change": function treeDragChange(e) {
              return _this2.treeMenuChange(e, tree);
            }
          }
        });
      })])]);
    } // 监听title

  }, {
    key: "watchDisable",
    value: function watchDisable(val) {
      this.dragOptions.disabled = val;
    }
  }, {
    key: "dragChange",
    value: function dragChange(evt, tree) {
      this.treeMenuChange(evt, tree);
    }
    /**
     * 处理数据格式
     */

  }, {
    key: "setRenderTreeList",
    value: function setRenderTreeList() {
      var _this3 = this;

      var tmpList = JSON.parse(JSON.stringify(this.treeList));

      var backUpList = _toConsumableArray(tmpList);

      var fristFlod = tmpList.filter(function (i) {
        return !i[_this3.mapping.parent];
      });

      if (fristFlod.length < 1) {
        fristFlod = _toConsumableArray(tmpList);
      } // const indexArr = [];


      if (this.tile) {
        var findChild = function findChild(item) {
          if (!backUpList || backUpList.length < 1) {
            return [];
          }

          backUpList = backUpList.filter(function (t) {
            return item[_this3.mapping.key] !== t[_this3.mapping.parent];
          });
          return tmpList.filter(function (t) {
            return item[_this3.mapping.key] === t[_this3.mapping.parent];
          });
        };

        var setChild = function setChild(item) {
          if (!item[_this3.mapping.folder]) return item;
          var child = findChild(item);

          var tempChild = _toConsumableArray(child);

          if (child && child.length > 0) {
            tempChild = setList(child);
          }

          item.children = tempChild;
          return item;
        };

        var setList = function setList(list) {
          list.forEach(function (l, index) {
            list[index] = setChild(l);
          });
          return list;
        };

        return setList(fristFlod);
      }

      return tmpList;
    }
  }, {
    key: "innerTreeList",
    get: function get() {
      var _this4 = this;

      var tmpList = JSON.parse(JSON.stringify(this.treeList)); // 文件夹的列表

      var indexArr = [];

      if (this.tile) {
        var setNode = function setNode(node, list) {
          var indexList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
          list.forEach(function (nNode, index) {
            if (node[_this4.mapping.key] === nNode[_this4.mapping.parent]) {
              node.str = node.str || "";
              node.str += nNode[_this4.mapping.key] + ",";
              node.children = node.children || [];
              node.children.push(nNode);
              indexList.push(index);
              setNode(nNode, list, indexList);
            }
          });
          return indexList;
        };

        tmpList.forEach(function (node) {
          if (!node[_this4.mapping.folder]) {
            delete node.children;
          }

          setNode(node, tmpList, indexArr);
        });
        indexArr.forEach(function (index) {
          tmpList[index] = null;
        });
        tmpList = tmpList.filter(function (node) {
          return node;
        });
      }

      return tmpList;
    }
  }, {
    key: "mapping",
    get: function get() {
      return _extends({
        title: "title",
        key: "key",
        parent: "parent",
        folder: "folder"
      }, this.keyMappings);
    }
  }, {
    key: "watchOpenKeys",
    value: function watchOpenKeys() {
      this.handleOpenKeys();
    }
  }, {
    key: "watchTreeList",
    value: function watchTreeList() {
      this.initValue();
    }
  }, {
    key: "addFolderList",
    value: function addFolderList(node) {
      this.innerNodeList[node[this.mapping.key]] = node;
    }
  }, {
    key: "nodeClick",
    value: function nodeClick(node) {
      var _this5 = this;

      node.selected = true;
      Object.keys(this.innerNodeList).forEach(function (key) {
        if (key !== node[_this5.mapping.key].toString() && _this5.innerNodeList[key].selected == node.selected) {
          _this5.innerNodeList[key].selected = false;
        }
      });
      this.$emit("node-click", node);
    }
  }, {
    key: "treeNodeExpand",
    value: function treeNodeExpand(treeNode) {
      var _this6 = this;

      if (treeNode.open && this.accord && this.treeList) {
        Object.values(this.innerNodeList).forEach(function (child) {
          if (child[_this6.mapping.key] !== treeNode[_this6.mapping.key]) {
            child.open = false;
          }
        });
      }

      this.$emit("folder-click", treeNode);
    }
  }, {
    key: "multipleClick",
    value: function multipleClick(node) {
      var _this7 = this;

      node.checked = !node.checked;

      if (node.checked) {
        this.checkedNodeList[node[this.mapping.key]] = node;
      } else {
        delete this.checkedNodeList[node[this.mapping.key]];
      } // folderSelected - 目录可选


      if (this.folderSelected) {
        this.allUpChecked(node);
        this.allDownChecked(node);
        this.$emit("multiple-click", {
          node: node,
          selected: Object.values(this.checkedNodeList).map(function (tree) {
            return tree[_this7.mapping.key];
          })
        });
      } else {
        this.$emit("multiple-click", {
          node: node,
          selected: this.checkedNodeList
        });
      }
    }
  }, {
    key: "nodeHover",
    value: function nodeHover(node) {
      this.$emit("node-hover", node);
    }
    /**
     * 向下处理节点状态
     */

  }, {
    key: "allDownChecked",
    value: function allDownChecked(node) {
      var _this8 = this;

      if (node.children && node.children.length) {
        node.children.forEach(function (tree) {
          var iTree = _this8.innerNodeList[tree[_this8.mapping.key]];
          iTree.checked = !iTree.checked;

          if (iTree.checked) {
            _this8.checkedNodeList[iTree[_this8.mapping.key]] = iTree;
          } else {
            delete _this8.checkedNodeList[iTree[_this8.mapping.key]];
          }

          _this8.allDownChecked(tree);
        });
      }
    }
    /**
     * 向上处理节点状态
     */

  }, {
    key: "allUpChecked",
    value: function allUpChecked(node) {
      var _this9 = this;

      if (node[this.mapping.parent] || node[this.mapping.parent] === 0) {
        var parentNode = this.innerNodeList[node[this.mapping.parent]];
        var difference = false;
        parentNode.children.forEach(function (tree) {
          var bTree = _this9.innerNodeList[tree[_this9.mapping.key]];
          if (node.checked != bTree.checked) difference = true;
        });

        if (!difference) {
          parentNode.checked = node.checked;

          if (parentNode.checked) {
            this.checkedNodeList[parentNode[this.mapping.key]] = parentNode;
          } else {
            delete this.checkedNodeList[parentNode[this.mapping.key]];
          }

          this.allUpChecked(parentNode);
        }
      }
    }
    /**
     * 处理需要打开的keys
     */

  }, {
    key: "handleOpenKeys",
    value: function handleOpenKeys() {
      var _this10 = this;

      var opened = false;
      this.openKeys.forEach(function (key) {
        if (_this10.innerNodeList[key]) {
          _this10.innerNodeList[key].open = true;
          opened = true;
        }
      });
      this.$nextTick(function () {
        if (opened) {
          _this10.$emit("open-keys-end");
        }
      });
    }
    /**
     * 节点拖拽开始
     * @param evt
     */

  }, {
    key: "treeValueChange",
    value: function treeValueChange(evt) {
      console.log("节点拖拽开始");
      this.renderTreeList = evt;
    }
    /**
     * 目录自节点改变排序
     */

  }, {
    key: "treeMenuChange",
    value: function treeMenuChange(evt, tree) {
      console.log(evt, tree);
      this.$set(tree, "children", evt);
      this.$set(tree, "open", true);
      this.treeValueChange(this.renderTreeList);
    }
    /**
     * 节点拖拽开始
     * @param evt
     */

  }, {
    key: "treeDragStart",
    value: function treeDragStart(evt) {}
    /**
     * 节点拖拽结束
     * @param evt
     */

  }, {
    key: "treeDragEnd",
    value: function treeDragEnd(evt) {
      var params = {
        list: this.renderTreeList,
        moveNode: this.moveNode,
        to: this.toList && this.toList.key ? this.toList.key : null,
        from: this.fromList && this.fromList.key ? this.fromList.key : null
      };
      this.$emit("tree-drag-change", params);
    }
    /**
     * 节点拖拽时的
     * @param evt
     */

  }, {
    key: "treeMove",
    value: function treeMove(evt) {
      this.moveNode = evt.draggedContext.element;
      this.toList = evt.to.dataset;
      this.fromList = evt.from.dataset;

      if (this.allowNodeDrag) {
        return this.allowNodeDrag(evt);
      }
    }
    /**
     * 节点拖动到另一个列表时
     * @param evt
     */

  }, {
    key: "treeRemove",
    value: function treeRemove(evt) {}
    /**
     * 初始化数据
     */

  }, {
    key: "initValue",
    value: function initValue() {
      this.renderTreeList = this.setRenderTreeList();
    }
  }, {
    key: "updated",
    value: function updated() {
      var _this11 = this;

      clearTimeout(this.openTimer);
      this.openTimer = setTimeout(function () {
        _this11.handleOpenKeys();
      }, 50);
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.handleOpenKeys();
      this.initValue();
    }
  }]);

  return Tree;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], Tree.prototype, "treeList", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], Tree.prototype, "openKeys", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return false;
  }
})], Tree.prototype, "tile", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return true;
  }
})], Tree.prototype, "accord", void 0);

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
    return {
      open: "h3yun_All folder-open-fill",
      close: "h3yun_All folder-fill"
    };
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
})], Tree.prototype, "dragging", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return false;
  }
})], Tree.prototype, "disabled", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return {};
  }
})], Tree.prototype, "keyMappings", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    (function () {
      return true;
    });
  }
})], Tree.prototype, "allowNodeDrag", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)("disabled")], Tree.prototype, "watchDisable", null);

__decorate([(0, _vuePropertyDecorator.Watch)("openKeys")], Tree.prototype, "watchOpenKeys", null);

__decorate([(0, _vuePropertyDecorator.Watch)("treeList")], Tree.prototype, "watchTreeList", null);

__decorate([(0, _vuePropertyDecorator.Provide)()], Tree.prototype, "addFolderList", null);

__decorate([(0, _vuePropertyDecorator.Provide)()], Tree.prototype, "nodeClick", null);

__decorate([(0, _vuePropertyDecorator.Provide)()], Tree.prototype, "treeNodeExpand", null);

__decorate([(0, _vuePropertyDecorator.Provide)()], Tree.prototype, "multipleClick", null);

__decorate([(0, _vuePropertyDecorator.Provide)()], Tree.prototype, "nodeHover", null);

__decorate([(0, _vuePropertyDecorator.Provide)()], Tree.prototype, "treeValueChange", null);

__decorate([(0, _vuePropertyDecorator.Provide)()], Tree.prototype, "treeMenuChange", null);

__decorate([(0, _vuePropertyDecorator.Provide)()], Tree.prototype, "treeDragStart", null);

__decorate([(0, _vuePropertyDecorator.Provide)()], Tree.prototype, "treeDragEnd", null);

__decorate([(0, _vuePropertyDecorator.Provide)()], Tree.prototype, "treeMove", null);

Tree = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-tree",
  components: {
    TreeMenu: _treeMenu.default,
    TreeItem: _treeItem.default,
    H3Draggable: _vuedraggable.default,
    AVueFragment: _vueFragment.Fragment
  }
})], Tree);
var _default2 = Tree;
exports.default = _default2;