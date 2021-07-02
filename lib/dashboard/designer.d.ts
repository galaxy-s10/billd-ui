import { CreateElement, VNode } from "vue";
import { Vue } from "vue-property-decorator";
export default class ReportDesign extends Vue {
    value: string;
    corpId: string;
    reportId: string;
    config: any;
    guideConfig: H3.Intro.config;
    showGuide: boolean;
    integrateComponents: Function;
    classification: Function;
    limit: any;
    header: any;
    saveMessageShow: boolean;
    showAdvancedDataSource: boolean;
    title: string;
    objectId: string;
    charts: Array<H3.Report.Chart>;
    global: H3.Report.Global;
    reportTop: number;
    chartsData: {
        [key: string]: any;
    };
    activeChart: H3.Report.Chart;
    getReport: Function;
    saveReport: Function;
    getDataSourceList: Function;
    initReport: Function;
    setReportTop: Function;
    setReportTitle: Function;
    setReportOptions: Function;
    setActiveChart: Function;
    setObjectId: Function;
    setAdvancedDataSource: Function;
    prefixCls: string;
    previewStatus: boolean;
    loading: boolean;
    watchTitle(val: string): void;
    watchCorpId(): Promise<void>;
    watchReportId(val: string): Promise<void>;
    watchConfig(): Promise<void>;
    watchShowAdvancedDataSource(): Promise<void>;
    /**
     * 触发添加高级数据源
     */
    addDataSource(): void;
    /**
     * 报表保存
     */
    reportSave(): Promise<void>;
    /**
     * 关闭方法
     */
    closePreview(): void;
    /**
     * 修改预览状态
     */
    updatePreviewStatus(previewStatus: boolean): void;
    /**
     * 修改标题
     */
    updateTitle(title: string): void;
    /**
     * 设置仪表盘配置项
     */
    setDashboardOptions(): void;
    refreshTop(): void;
    /**
     * 设置报表Id
     * @param reportId
     */
    setReportId(reportId: string): void;
    updated(): void;
    loadReport(): Promise<void>;
    created(): Promise<void>;
    mounted(): void;
    destroyed(): void;
    render(h: CreateElement): VNode;
}
