"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  /**
  * 列表分析用的(暂时)
  */
  axios: null,

  /**
   * 请求时候的头信息
   *  Object | Function
   */
  requestHeader: null,

  /**
   * 错误请求回调
   * Function | null
   */
  interfaceErrorCb: null,

  /**
   * 请求的地址
   */
  baseUrl: null,

  /**
   *  自定义用户配置信息
   *  例如氚云:
   *  {
   *    token: null,
   *    extra: {}
   *  };
   */
  config: {},

  /**
   * 报表关联公司的ID
   */
  corpId: null,

  /**
   * 仪表盘的ID
   */
  reportId: null,

  /**
   *  整合业务组件
   *  Function
   * 处理Component模型  h(Component, {
        props: {
          formula: this.formula,
          field: this.field,
          value: this.value
        },
        on: {
          input: this.handleValue,
        }
      }),
   * @param field
   * formula 枚举如下
   * 字符串类型时的公式枚举 {
   *  Equal = 'Equal', // 等于（等于一个值）
   *  NotEqual = 'NotEqual', // 不等于
   *  StartWith = 'StartWith', // 开头为
   *  In = 'In', // 等于任意一个 （多个值）
   *  NotIn = 'NotIn', // 不等于任意一个 (多个值)
   *  None = 'None', // 为空
   *  NotNone = 'NotNone', // 不为空
   *}
   *  日期类型时的公式枚举 {
   *  Equal = 'Equal', // 等于 （等于一个值）
   *  NotEqual = 'NotEqual', // 不等于
   *  Range = 'Range', // 范围
   *  Above = 'Above', // 大于
   *  NotBelow = 'NotBelow', // 大于等于
   *  Below = 'Below', // 小于
   *  NotAbove = 'NotAbove', // 小于等于
   *  None = 'None', // 为空
   *  NotNone = 'NotNone', // 不为空
   *}
   *  数字类型时的公式枚举 {
   *  Equal = 'Equal', // 等于
   *  NotEqual = 'NotEqual', // 不等于
   *  Range = 'Range', // 范围
   *  Above = 'Above', // 大于
   *  NotBelow = 'NotBelow', // 大于等于
   *  Below = 'Below', // 小于
   *  NotAbove = 'NotAbove', // 小于等于
   *  None = 'None', // 为空
   *  NotNone = 'NotNone', // 不为空
   *}
   * @return Component 支持v-mode  返回Array<string | number | Object({ label, value })>
   */
  integrateComponents: null,

  /**
   * 字段类型分类
   *  Function
   *  param field
   * @return Array<number> 字段分类的组别
   */
  classification: null,

  /**
   * 兼容移动端的消息提示(后期会移除)
   * {
   *   error
   *   info
   *   success
   *   warning
   * }
   */
  message: null,

  /**
   * 图表的指标或者行列最大限制（支持明细表，汇总表）
   */
  charts: {
    list: {
      dimension: 20
    },
    table: {
      dimension: 20,
      groupDimension: 20,
      metric: 20
    }
  },
  download: {
    list: false,
    pivotTable: true
  },
  mobile: {
    filter: true
  },

  /**
   *  字段默认格式设置的配置  例如氚云表格字段的格式设置要带到统计分析来，如千分符,百分号
   *  值的格式
   *  Array<{
   *     schemaCode : string, // 字段schemaCode
   *     field: string, // 字段标识
   *     numberFormat: {
   *          comma?: boolean, // 千分符设置，非必传
                percent?: boolean, // 百分比设置，非必传
                fraction?: boolean | number, // 小数位数 默认0,最大6位，非必传
   *     }
   *  }>
   *  注： 字段schemaCode加上field 为字段唯一标识
   */
  fieldsOptions: []
};
exports.default = _default;