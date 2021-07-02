import "../loading/style/css";
import "../chart/style/css";
import "../list/style/css";
import "../card/style/css";
import "../pivot-table/style/css";
import ChartMixins from "../../mixins/chart-mixins";
declare const ReportChartWrap_base: import("vue-class-component/lib/declarations").VueClass<ChartMixins>;
export default class ReportChartWrap extends ReportChartWrap_base {
    chart: H3.Report.Chart;
    global: H3.Report.Global;
    dataAlias: {
        [key: string]: string;
    }[];
    data: any;
    source: H3.Report.MapColumn | null;
    delay: number;
    dataTotal: number;
    refresh: boolean;
    api: H3.ReportAPI.Instance;
    render(): any;
    prefixCls: string;
    defaultListPageOption: any;
    refreshListLoading: boolean;
    /**
     * 字体颜色对比
     */
    get fontColorSetting(): {
        titleColor: string;
        fontColor: string;
    };
    /**
     * 获取明细表实例
     */
    get listInstance(): {
        data: any;
        alias: {
            [key: string]: string;
        }[];
        columns: H3.Report.FieldColumn[];
        orderNumber: {};
        freezeHead: H3.Report.FreezeHead;
        columnsSetting: H3.List.columnSetting[];
        uid: string;
        fontColor: string;
    };
    /**
     * 获取图表实例
     * 后续使用时，改用chartOptions
     */
    get chartInstance(): {
        type: H3.Report.ElementType;
        uid: string;
        data: any;
        mapSource: H3.Report.MapColumn;
        dataAlias: {
            [key: string]: string;
        }[];
        dimension: H3.Report.FieldColumn;
        groupDimension: H3.Report.FieldColumn;
        dimensionLimit: number;
        metric: H3.Report.FieldColumn[];
        metricGroup: H3.Report.FieldColumn[][];
        multiMetricType: ("bar" | "area" | "line" | "pileBar")[];
        limit: number;
        linkage: string[];
        colors: string[];
        direction: "right" | "bottom" | "top" | "left";
        metricRange: H3.Report.MetricRange;
        multiRange: H3.Report.MetricRange[];
        dataLabel: boolean;
        multipleDataLabel: H3.Report.MultipleDataLabel;
        legend: H3.Report.Legend;
        axisX: H3.Report.AxisX;
        axisYSet: boolean;
        splitLine: boolean;
        chartSwitch: string;
        warningLine: H3.Report.WarningLine[];
        elementCoat: H3.Report.ElementCoat;
        fontColor: string;
        DataZoom: H3.Report.DataZoom;
        mapDrill: H3.Report.MapDrill;
        mapArea: H3.Report.MapArea;
        mapTheme: H3.Report.MapTheme;
        mapDigitalSet: H3.Report.MapDigitalSet;
    };
    /**
     * 图表加载完
     */
    refreshEnd(): void;
    /**
     * 获取图表实例
     */
    get cardInstance(): {
        data: any;
        dataAlias: {
            [key: string]: string;
        }[];
        dimension: H3.Report.FieldColumn;
        metric: H3.Report.FieldColumn;
        limit: number;
        fontColor: string;
    };
    /**
     * 下钻
     */
    drillDown(data: any): void;
    /**
     * 获取表格实例
     */
    get tableInstance(): {
        data: any;
        alias: {
            [key: string]: string;
        }[];
        columns: H3.Report.FieldColumn[];
        rows: H3.Report.FieldColumn[];
        metric: H3.Report.FieldColumn[];
        orderNumber: {};
        freezeHead: H3.Report.FreezeHead;
        columnsSetting: H3.List.columnSetting[];
        uid: string;
        title: string;
        fontColor: string;
    };
    /**
     * 图表点击
     * @param option  { filters, params }
     */
    clickChart(option: {
        filters: Array<H3.Report.FieldColumn>;
        params: any;
    }): void;
    /**
     * 刷新地图数据
     */
    refreshMapData(params: any): void;
    /**
     * 刷新明细表分页数据
     */
    refreshListData(params: any): void;
    /**
     * 明细表/透视表 列宽更改
     */
    changeColumns(options: any): void;
    /**
     * 刷新图表视图样式
     */
    refreshViewStyles(): void;
    /**
     * 刷新图表视图
     */
    refreshChartView(): void;
}
export {};
