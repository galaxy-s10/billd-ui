export declare class ReportProState implements H3.Report.ReportProState {
    corpId: string;
    title: string;
    reportTop: number;
    activeChart: H3.Report.Chart | null;
    activeModules: H3.ReportModules.ChartModules | null;
    chartsAlias: {
        [key: string]: {
            [key: string]: string;
        };
    };
    chartsData: {
        [key: string]: Array<any>;
    };
    objectId: string;
    reports: any;
    charts: Array<H3.Report.BaseElement>;
    global: H3.Report.Global;
    globalModules: H3.ReportModules.GlobalModules;
    globalFilters: Array<H3.Report.FilterFieldColumn>;
    dragChart: H3.Report.Chart | null;
    dragField: H3.Report.FieldColumn | null;
    dataSources: {
        [dataSourceId: string]: H3.Report.DataSource;
    };
    dataSourceList: Array<H3.ReportAPI.DataSourceNode> | null;
    config: any;
    integrateComponent: Function | null;
    linkage: any;
    chartViewStatus: {
        [chartUuid: string]: any;
    };
    lastDataSourceNode: H3.ReportAPI.DataSourceNode | null;
    tableExportData: {
        [chartUuid: string]: any;
    };
    showAdvancedDataSource: boolean;
}
export declare let reportState: {
    namespaced: boolean;
    state: ReportProState;
    mutations: import("vuex").MutationTree<ReportProState>;
    actions: import("vuex").ActionTree<ReportProState, ReportProState>;
    getters: import("vuex").GetterTree<ReportProState, ReportProState>;
};
/**
 * 获取新的状态
 * @param clone 是否需要克隆到reportState
 */
export declare function getNewReportState(clone?: boolean): {
    namespaced: boolean;
    state: ReportProState;
    mutations: import("vuex").MutationTree<ReportProState>;
    actions: import("vuex").ActionTree<ReportProState, ReportProState>;
    getters: import("vuex").GetterTree<ReportProState, ReportProState>;
};
