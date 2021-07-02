"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.instance = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _dashboard = require("../../store/dashboard");

var _preview = _interopRequireDefault(require("./preview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var messageInstance;
var store;

var instance = function instance(el) {
  var Instance = new _vue.default({
    store: store,
    destroyed: function destroyed() {
      if (el) {
        el.style.position = '';
        el.removeChild(component.$el);
      } else {
        document.body.removeChild(component.$el);
      }

      messageInstance = null;
    },
    render: function render(h) {
      return h(_preview.default, {
        on: {
          destroy: function destroy() {
            store.unregisterModule('report');
            store.registerModule('report', _dashboard.reportState);
            Instance.$destroy();
          }
        }
      });
    }
  });
  var component = Instance.$mount();

  if (el) {
    el.style.position = 'relative';
    el.appendChild(component.$el);
  } else {
    document.body.appendChild(component.$el);
  }

  return component.$children[0];
};

exports.instance = instance;

function getPreviewInstance(el) {
  messageInstance = messageInstance || instance(el);
  return messageInstance;
}

var _default = {
  /**
   *  预览报表
   * @param charts 图表集合
   * @param charts 图表集合
   * @param global 图表的全局配置
   * @param top 预览的弹窗高度
   * @param objectId 图表标识
   * @param title 图表标题
   */
  show: function show(preStore, _ref) {
    var el = _ref.el,
        charts = _ref.charts,
        global = _ref.global,
        top = _ref.top,
        objectId = _ref.objectId,
        title = _ref.title;
    preStore.unregisterModule('report');
    preStore.registerModule('report', (0, _dashboard.getNewReportState)(false));
    store = preStore;
    getPreviewInstance(el).show({
      charts: charts,
      global: global,
      top: top,
      objectId: objectId,
      title: title
    });
  },
  close: function close() {
    if (messageInstance) {
      messageInstance.close();
    }
  },
  destroy: function destroy() {
    if (messageInstance) {
      messageInstance.$destroy();
      messageInstance = null;
    }
  }
};
exports.default = _default;