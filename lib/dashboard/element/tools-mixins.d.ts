import { Vue } from "vue-property-decorator";
import { ToolsBarType } from "../../enum/element-tools";
export default class DashboardElementToolsEventMixin extends Vue {
    element: H3.Report.BaseElement;
    elementIndex: number;
    charts: Array<H3.Report.BaseElement>;
    tableExportData: Object;
    setChartLinkage: Function;
    removeFilterPicker: Function;
    clearActiveChart: Function;
    resizeChartView: Function;
    clearChartRelation: Function;
    toolsEvent: {
        [key: string]: Function;
    };
    sortData: any[];
    /**
     * 全屏
     */
    [ToolsBarType.FULLSCREEN](): void;
    /**
     * 取消全屏
     */
    [ToolsBarType.NARROW](): void;
    /**
     * 取消联动
     */
    [ToolsBarType.LINKAGE](): Promise<void>;
    /**
     * 排序功能
     */
    [ToolsBarType.SORT](): void;
    /**
     * 删除图表
     */
    [ToolsBarType.REMOVE](): void;
    /**
     * 导出Excel
     */
    [ToolsBarType.EXPORT](): Promise<void>;
    /**
     * 编辑
     */
    [ToolsBarType.EDIT](): void;
    /**
     * 图表刷新
     */
    [ToolsBarType.REFRESH](): void;
}
