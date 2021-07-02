import { CreateElement, VNode } from "vue";
import chartMixins from "../../mixins/chart-mixins";
declare const ReportChartWrap_base: import("vue-class-component/lib/declarations").VueClass<chartMixins>;
export default class ReportChartWrap extends ReportChartWrap_base {
    chart: H3.Report.Chart;
    errorMsg: string;
    comPrefixCls: string;
    isLoadData: string;
    data: any;
    prefixCls: string;
    get emptyPic(): any;
    /**
     * 标准图表占位图
     */
    chartRender(h: CreateElement): VNode;
    /**
     */
    chartLabelRender(h: CreateElement, text: string): VNode;
    /**
     * 没有图表渲染
     * @param h
     */
    nullChartRender(h: CreateElement): VNode[];
    /**
     * 空图表
     * @param h
     */
    emptyChartRender(h: CreateElement): VNode[];
    /**
     * 错误图表
     * @param h
     */
    errChartRender(h: CreateElement): VNode[];
    /**
     * 空数据图表
     * @param h
     */
    emptyDataChartRender(h: CreateElement): VNode[];
    render(h: CreateElement): VNode;
}
export {};
