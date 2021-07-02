import { Vue } from "vue-property-decorator";
import { ReportState } from "../enum/report-state";
export default class ReportShow extends Vue {
    value: string;
    corpId: string;
    reportId: string;
    limit: any;
    config: any;
    integrateComponents: Function;
    classification: Function;
    header: any;
    title: string;
    setReportTop: Function;
    initReport: Function;
    getReport: Function;
    render(): any;
    setReportOptions: Function;
    prefixCls: string;
    loading: boolean;
    layoutOptions: {
        draggable: boolean;
        showGridLine: boolean;
        editState: boolean;
        mask: boolean;
        resizable: boolean;
    };
    watchCorpId(): Promise<void>;
    watchReportId(): Promise<void>;
    get getReportStateDashboard(): ReportState;
    /**
     * 触发添加高级数据源
     */
    addDataSource(): void;
    /**
     * 触发下钻功能（目前只支持明细表）
     */
    drillDown(data: any): void;
    /**
     * 设置仪表盘配置项
     */
    setDashboardOptions(): void;
    loadReport(): Promise<void>;
    refreshTop(): void;
    created(): Promise<void>;
    updated(): void;
    mounted(): void;
    destroyed(): void;
}
