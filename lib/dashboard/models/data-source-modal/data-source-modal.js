"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("ant-design-vue/lib/tree/style/css");

var _tree = _interopRequireDefault(require("ant-design-vue/lib/tree"));

require("ant-design-vue/lib/tabs/style/css");

var _tabs = _interopRequireDefault(require("ant-design-vue/lib/tabs"));

require("ant-design-vue/lib/icon/style/css");

var _icon = _interopRequireDefault(require("ant-design-vue/lib/icon"));

require("ant-design-vue/lib/input/style/css");

var _input = _interopRequireDefault(require("ant-design-vue/lib/input"));

require("ant-design-vue/lib/modal/style/css");

var _modal = _interopRequireDefault(require("ant-design-vue/lib/modal"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _vuexClass = require("vuex-class");

var _vueFragment = require("vue-fragment");

var _types = require("../../../store/dashboard/types");

var _searchTree = _interopRequireDefault(require("../../../components/search-tree"));

var _loading = _interopRequireDefault(require("../../../components/loading"));

var _options = _interopRequireDefault(require("../../../dist/options"));

var _tree2 = _interopRequireDefault(require("../../../components/tree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var ReportPro = (0, _vuexClass.namespace)("report");

var ReportDataSourceModal = /*#__PURE__*/function (_Vue) {
  _inherits(ReportDataSourceModal, _Vue);

  var _super = _createSuper(ReportDataSourceModal);

  function ReportDataSourceModal() {
    var _this;

    _classCallCheck(this, ReportDataSourceModal);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-data-source-modal";
    _this.searchValue = "";
    _this.sourceList = [];
    _this.loading = true;
    _this.mappings = {
      title: "displayName",
      key: "objectId",
      parent: "parentObjectId"
    };
    _this.activeNode = null;
    _this.activeTabKey = "form";
    _this.tabOptions = [{
      value: "form",
      label: "表单",
      datasource: "formDataSource",
      display: true
    }, {
      value: "advanced",
      label: "高级数据源",
      datasource: "advancedDataSource",
      display: false
    }];
    return _this;
  }

  _createClass(ReportDataSourceModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return this.loading ? h("h3-loading", {
        "class": this.prefixCls
      }) : h("div", {
        "class": this.prefixCls
      }, [h("div", {
        "class": ["".concat(this.prefixCls, "__search")]
      }, [h("a-input", {
        attrs: {
          placeholder: "搜索",
          model: {
            value: _this2.searchValue,
            callback: function callback($$v) {
              _this2.searchValue = $$v;
            }
          }
        },
        on: {
          "change": this.search
        }
      }, [h("a-icon", {
        slot: "prefix",
        attrs: {
          type: "search"
        }
      })])]), h("a-tabs", {
        attrs: {
          model: {
            value: _this2.activeTabKey,
            callback: function callback($$v) {
              _this2.activeTabKey = $$v;
            }
          }
        }
      }, [this.tabOptions.map(function (tab) {
        return tab.display && h("a-tab-pane", {
          key: tab.value,
          attrs: {
            tab: tab.label
          }
        }, [_this2.renderDatasource && _this2.renderDatasource.length > 0 ? h("div", {
          "class": ["".concat(_this2.prefixCls, "__tree")]
        }, [h("a-tree", {
          attrs: {
            autoExpandParent: true,
            "tree-data": _this2.renderDatasource,
            defaultSelectedKeys: _this2.selectedKeys,
            defaultExpandedKeys: _this2.expandedKeys
          },
          scopedSlots: {
            title: function title(_ref) {
              var _title = _ref.title;
              h("a-fragment", [_title.indexOf(_this2.searchValue) > -1 ? h("span", [_title.substr(0, _title.indexOf(_this2.searchValue)), h("span", {
                style: "color: #1070ff"
              }, [_this2.searchValue]), _title.substr(_title.indexOf(_this2.searchValue) + _this2.searchValue.length)]) : h("span", [_title])]);
            }
          },
          on: {
            "select": _this2.onSelect
          }
        })]) : h("div", {
          "class": ["".concat(_this2.prefixCls, "__empty")]
        }, [h("img", {
          attrs: {
            src: require("../../../assets/empty-new.svg")
          }
        }), _this2.searchValue ? h("span", ["\u65E0\u641C\u7D22\u7ED3\u679C"]) : h("span", [_this2.activeTabKey === "advanced" ? h("a-fragment", ["\u6682\u65E0\u9AD8\u7EA7\u6570\u636E\u6E90\uFF0C\u8BF7\u70B9\u51FB", h("span", {
          "class": "high-light",
          on: {
            "click": _this2.goToAdd
          }
        }, ["\u6DFB\u52A0"])]) : h("a-fragment", ["\u6682\u65E0\u6570\u636E"])])])]);
      })])]);
    }
    /**
     * 当选择完数据源之后
     */

  }, {
    key: "onSelect",
    value: function onSelect(val) {
      var id = val[0];
      this.activeNode = this.sourceList.find(function (i) {
        return i.objectId === id;
      }) || null;
    } // 搜索框搜索

  }, {
    key: "search",
    value: function search(val) {}
    /**
     * 目标数据源
     */

  }, {
    key: "targetDatasource",
    get: function get() {
      var _this3 = this;

      var list = this.activeTabKey === "form" ? this.sourceList.filter(function (f) {
        return f.useType !== 100;
      }) : this.sourceList.filter(function (f) {
        return f.useType === 100;
      });
      return this.searchValue ? list.filter(function (i) {
        return i.displayName.indexOf(_this3.searchValue) > -1;
      }) : this.sourceList;
    }
    /**
     * 默认选择的数据源
     */

  }, {
    key: "selectedKeys",
    get: function get() {
      return this.activeNode ? [this.activeNode.objectId] : [];
    }
    /**
     * 默认展开选中的数据源的父级
     */

  }, {
    key: "expandedKeys",
    get: function get() {
      return this.activeNode ? [this.activeNode.parentObjectId] : [];
    }
    /**
     * 获取需要打开的树节点
     */

  }, {
    key: "openKeys",
    get: function get() {
      return this.dataSource ? [this.dataSource.objectId] : [];
    }
    /**
     * old todo delect 获取数据源列表
     */

  }, {
    key: "getSourceList",
    get: function get() {
      var _this4 = this;

      var list = [];

      if (this.sourceList.length) {
        list = this.sourceList.map(function (node) {
          var folder = !node.nodeType; // 如果数据源Id和当前数据源一致

          if (_this4.lastDataSourceNode && node.objectId === _this4.lastDataSourceNode.objectId) {
            _this4.activeNode = node;
          }

          return _extends({}, node, {
            folder: folder
          });
        });
        var sourceIndex = list.findIndex(function (node) {
          return node.useType === 100 && !node.parentObjectId;
        });

        if ((sourceIndex > 0 || sourceIndex === 0) && list[sourceIndex]) {
          list[sourceIndex].displayName = "高级数据源";
        }

        list.unshift(list.splice(sourceIndex, 1)[0]);
      }

      return list;
    }
    /**
     * 表单的应用树形结构
     */

  }, {
    key: "formDataSource",
    get: function get() {
      var list = this.targetDatasource.filter(function (f) {
        return f.useType !== 100;
      });
      return this.getParent(list);
    }
    /**
     * 获取高级数据源数据
     */

  }, {
    key: "advancedDataSource",
    get: function get() {
      var list = this.targetDatasource.filter(function (f) {
        return f.useType === 100;
      });
      return this.getParent(list);
    }
    /**
     * 搜索树
     */

  }, {
    key: "searchTree",
    get: function get() {
      var list = this.showAdvancedDataSource ? [].concat(_toConsumableArray(this.advancedDataSource), _toConsumableArray(this.formDataSource)) : this.formDataSource;
      return list;
    }
  }, {
    key: "renderDatasource",
    get: function get() {
      return this.searchValue ? this.searchTree : this.activeTabKey === "form" ? this.formDataSource : this.advancedDataSource;
    }
    /**
     * 获取tree文件夹
     */

  }, {
    key: "getParent",
    value: function getParent(list) {
      var _this5 = this;

      var rootParent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var folder = list.filter(function (f) {
        return !f.nodeType && !f.parentObjectId;
      }).map(function (item) {
        return {
          key: item.objectId,
          title: item.displayName,
          children: [],
          useType: item.useType,
          selectable: false,
          isLeaf: false,
          scopedSlots: {
            title: "title"
          }
        };
      });

      if (folder && folder.length > 0) {
        folder.forEach(function (parent) {
          parent.children = _this5.getChild(list, parent);
        });
      } else {
        folder = this.getChild(list);
      }

      return folder;
    }
    /**
     * 获取孩子节点
     */

  }, {
    key: "getChild",
    value: function getChild(list, parent) {
      var _this6 = this;

      var l = parent ? list.filter(function (c) {
        return c.parentObjectId === parent.key || c.parentObjectId === parent.objectId;
      }) : list;
      return l.map(function (citem) {
        // 如果数据源Id和当前数据源一致
        if (_this6.lastDataSourceNode && citem.objectId === _this6.lastDataSourceNode.objectId) {
          _this6.activeNode = citem;
        }

        if (citem.nodeType) {
          // 数据源
          return {
            key: citem.objectId,
            title: citem.displayName,
            selectable: !!citem.nodeType,
            isLeaf: !!citem.nodeType,
            scopedSlots: {
              title: "title"
            }
          };
        } else {
          // 文件夹
          var c = _this6.getChild(list, citem);

          return {
            key: citem.objectId,
            title: citem.displayName,
            selectable: !!citem.nodeType,
            isLeaf: !!citem.nodeType,
            children: c,
            scopedSlots: {
              title: "title"
            }
          };
        }
      });
    }
    /**
     * 添加高级数据源
     */

  }, {
    key: "goToAdd",
    value: function goToAdd() {
      this.addDataSource();
      this.$emit("addDataSource");
    }
    /**
     * 确认替换数据源
     */

  }, {
    key: "confirmDateSourceChange",
    value: function confirmDateSourceChange(callback) {
      var _this7 = this;

      var modalConfirm = _modal.default.confirm({
        class: "".concat(this.prefixCls, "__modal"),
        title: "更改数据源",
        content: "更改数据源后，将清空图表所有配置内容，确定需要更改吗？",
        okText: "确定",
        cancelText: "取消",
        width: 433,
        // destroyOnClose: true,
        centered: true,
        // confirmLoading: true,
        iconType: "exclamation-circle-o",
        onOk: function onOk() {
          _this7.updateDateSource(); // 清空图表联动关系


          _this7.clearChartRelation(_this7.activeChart); // 销毁


          modalConfirm.destroy();
          callback(true);
        } // cancel: () => {
        //   callback(false);
        // },

      });
    }
    /**
     * 修改数据源信息
     */

  }, {
    key: "updateDateSource",
    value: function updateDateSource() {
      // 保存上一次点击的数据源ID
      this.setLastDataSource(this.activeNode); // 设置dataSourceId

      this.$set(this.activeChart, "dataSourceId", this.activeNode && this.activeNode.objectId);
      this.$set(this.activeChart, "useType", this.activeNode && this.activeNode.useType); // 清空维度、指标、排序、过滤

      if (this.dataSource) {
        this.activeChart.data.dimension = [];

        if (this.activeChart.data.groupDimension) {
          this.activeChart.data.groupDimension = [];
        }

        this.activeChart.data.metric = [];
        this.activeChart.data.metricGroup = [];
        this.activeChart.data.sort = [];
        this.activeChart.data.filter = [];
      } // 设置激活状态


      this.setActiveChart(this.activeChart);
    }
    /**
     * 提交检查
     */

  }, {
    key: "check",
    value: function check() {
      var _this8 = this;

      return new Promise(function (resolve) {
        // 如果没有选中的节点提示选中数据源
        if (!_this8.activeNode) {
          _options.default.message.error("请选择数据源");

          resolve(false);
        } //如果当前选中的数据源和原始的数据源不一致
        else if (_this8.dataSource && _this8.activeNode.objectId !== _this8.dataSource.objectId) {
            _this8.confirmDateSourceChange(resolve);
          } else {
            _this8.updateDateSource();

            resolve(true);
          }
      });
    }
    /**
     * 滚动到选中的数据源的位置
     */

  }, {
    key: "scrollToTarget",
    value: function scrollToTarget() {
      console.log("scrollToTarget");

      if (this.activeNode) {
        var selected = document.getElementsByClassName("ant-tree-treenode-selected")[0];
        var tree = document.getElementsByClassName("h3-report-data-source-modal__tree")[0];
        var top = selected.offsetTop;
        var listHeight = tree.offsetHeight;
        tree.scrollTop = top - listHeight / 2;
      }
    }
  }, {
    key: "created",
    value: function created() {
      // 设置显示高级数据源
      this.tabOptions[1].display = this.showAdvancedDataSource;
    }
  }, {
    key: "mounted",
    value: function mounted() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _this9 = this;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // 处理大数据量的时候弹窗出现慢的问题
                this.loading = true;
                setTimeout(function () {
                  _this9.getDataSourceList().then(function (sourceList) {
                    _this9.sourceList = sourceList;

                    if (_this9.dataSource) {
                      _this9.setLastDataSource(_this9.dataSource);
                    }

                    _this9.loading = false;

                    _this9.$nextTick(function () {
                      _this9.scrollToTarget();
                    });
                  });
                }, 100);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }]);

  return ReportDataSourceModal;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return null;
  }
})], ReportDataSourceModal.prototype, "dataSource", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return null;
  }
})], ReportDataSourceModal.prototype, "activeChart", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return null;
  }
})], ReportDataSourceModal.prototype, "addDataSource", void 0);

__decorate([ReportPro.State("lastDataSourceNode")], ReportDataSourceModal.prototype, "lastDataSourceNode", void 0);

__decorate([ReportPro.State("showAdvancedDataSource")], ReportDataSourceModal.prototype, "showAdvancedDataSource", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.SETACTIVECHART)], ReportDataSourceModal.prototype, "setActiveChart", void 0);

__decorate([ReportPro.Action(_types.ReportAction.GETDATASOURCELIST)], ReportDataSourceModal.prototype, "getDataSourceList", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.SETLASTDATASOURCE)], ReportDataSourceModal.prototype, "setLastDataSource", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.CLEARCHARTRELATION)], ReportDataSourceModal.prototype, "clearChartRelation", void 0);

ReportDataSourceModal = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-data-source-modal",
  components: {
    AInput: _input.default,
    AIcon: _icon.default,
    H3SearchTree: _searchTree.default,
    H3Loading: _loading.default,
    ATabs: _tabs.default,
    ATabPane: _tabs.default.TabPane,
    ATree: _tree.default,
    H3Tree: _tree2.default,
    AFragment: _vueFragment.Fragment
  }
})], ReportDataSourceModal);
var _default2 = ReportDataSourceModal;
exports.default = _default2;