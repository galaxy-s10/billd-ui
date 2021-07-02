import { ReportState } from "../../enum/report-state";
import ChartMixins from "../../mixins/chart-mixins";
import ToolsMixins from "./tools-mixins";
declare const ElementWrap_base: import("vue-class-component/lib/declarations").VueClass<ChartMixins & ToolsMixins>;
export default class ElementWrap extends ElementWrap_base {
    element: H3.Report.BaseElement;
    global: H3.Report.Global;
    corpId: string;
    refresh: boolean;
    status: ReportState;
    fullScreen: boolean;
    elementIndex: number;
    charts: Array<H3.Report.BaseElement>;
    chartsData: Object;
    chartViewStatus: {
        [chartUuid: string]: any;
    };
    clearActiveChart: Function;
    setActiveChart: Function;
    resizeChartView: Function;
    setChartsData: Function;
    setFilterPicker: Function;
    removeFilterPicker: Function;
    setChartLinkage: Function;
    drillDown: Function;
    render(): any;
    prefixCls: string;
    timer: any;
    watchGlobal(val: string, oVal: string): void;
    /**
     * chartHeader修改
     */
    get fixed(): boolean;
    /**
     * 图表是否有数据
     */
    get hasTableData(): any;
    /**
     * 显示元素头部toolbar
     */
    get toolbars(): string[];
    /**
     * 组件背景颜色设置
     */
    get getStyles(): {
        backgroundColor: any;
    };
    /**
     * 更新图表数据
     */
    updateChartsData(data: any): void;
    /**
     * 下钻
     */
    chartDrillDown(data: any): void;
    /**
     * 图表注册刷新事件
     */
    registerRefresh({ data, view, load, refreshViewStyles }: {
        data: any;
        view: any;
        load: any;
        refreshViewStyles: any;
    }): void;
    /**
     * 点击图表
     */
    clickChart(option: {
        filters: Array<H3.Report.FieldColumn>;
        params: any;
    }): void;
    /**
     * 处理图表改变
     */
    changeChart(element: H3.Report.FilterPicker | H3.Report.LongText | H3.Report.Chart): void;
    /**
     * 变更筛选器时做筛选
     */
    setFilter(filter: H3.Report.FilterPicker): void;
    /**
     * 处理头部工具栏事件
     * @param type
     * @param element
     */
    toolsClick({ type, element }: {
        type: any;
        element: any;
    }): void;
    /**
     * 缩略轴变化时事件
     */
    onDatazoomChange(event: any): void;
    mounted(): void;
    destroyed(): void;
}
export {};
