import { Vue } from "vue-property-decorator";
export default class ReportAttributes extends Vue {
    global: H3.Report.Global;
    schemas: Array<H3.Report.FieldColumn>;
    activeChart: H3.Report.Chart;
    render(): any;
    activeModules: H3.ReportModules.ChartModules;
    prefixCls: string;
    activeKey: string;
    tabList: Array<any>;
    showGuideCard: boolean;
    showHelpModal: boolean;
    helpOptions: Array<any>;
    helpTitle: string;
    /**
     * 获取模块数据
     */
    get getModuleData(): {};
    /**
     * 隐藏卡片
     */
    hideGuideCard(): void;
    /**
     * 点击帮助
     */
    onClickHelp(): void;
    /**
     * 获取数据模块
     */
    getDataModules(): {
        chartSwitch: H3.ReportModules.ChartSwitch;
        multiMetricType: H3.ReportModules.MultiMetricType;
        dimension: H3.ReportModules.Dimension;
        groupDimension: H3.ReportModules.GroupDimension;
        metric: H3.ReportModules.Metric;
        metricGroup: H3.ReportModules.MetricGroup;
        filter: H3.ReportModules.Filter;
    };
    /**
     * 获取样式模块
     */
    getStylesModules(): {
        chartTitle: H3.ReportModules.ChartTitle;
        theme: H3.ReportModules.Theme;
        elementCoat: H3.ReportModules.ElementCoat;
        fontSetting: H3.ReportModules.FontSetting;
        limit: H3.ReportModules.Limit;
        dimensionLimit: H3.ReportModules.DimensionLimit;
        metricRange: H3.ReportModules.MetricRange;
        multiRange: H3.ReportModules.MultiRange;
        dataLabel: H3.ReportModules.DataLabel;
        multipleDataLabel: H3.ReportModules.MultipleDataLabel;
        download: H3.ReportModules.Download;
        orderNumber: H3.ReportModules.OrderNumber;
        freezeHead: H3.ReportModules.FreezeHead;
        legend: H3.ReportModules.Legend;
        axisX: H3.ReportModules.AxisX;
        dataZoom: H3.ReportModules.DataZoom;
        linkage: H3.ReportModules.Linkage;
        warningLine: H3.ReportModules.WarningLine;
    };
    /**
     * tab数据选择
     * @param index
     */
    dataSelect(index: number): Object;
    /**
     * 更新滚动条
     */
    refreshScroll(): void;
    /**
     * tab切换
     * @param tabKey
     */
    tabChange(tabKey: string): void;
    mounted(): void;
    updated(): void;
}
