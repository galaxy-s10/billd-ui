import { Vue } from "vue-property-decorator";
export default class ReportModels extends Vue {
    activeChart: H3.Report.Chart;
    dataSources: {
        [dataSourceId: string]: any;
    };
    getDataSource: Function;
    getDataSources: Function;
    addDataSource: Function;
    render(): any;
    prefixCls: string;
    editDataSourceStatus: boolean;
    loading: boolean;
    getShowDataSource: any;
    dataListConfirm: any;
    watchActiveChart(): Promise<void>;
    watchActiveChartDataSourceId(): void;
    /**
     * 改变源编辑状态
     * @param status
     */
    changeDataSourceStatus(status: boolean): void;
    /**
     * 是否显示loading
     */
    showLoading(val: any): void;
    /**
     * 图表改变数据源列表
     * @param dataSourceId
     */
    getDataSourceList(): Promise<void>;
}
