export declare class ReportState implements H3.Report.ReportEasyState {
    schemaCode: string;
    schemas: Array<H3.Report.FieldColumn>;
    globalModules: H3.ReportModules.ChartModules;
    activeChart: H3.Report.Chart | null;
    chartsData: {
        [key: string]: Array<any>;
    };
    chartsAlias: {
        [key: string]: {
            [key: string]: string;
        };
    };
    objectId: string;
    chartViewStatus: {};
    charts: Array<H3.Report.Chart>;
    global: any;
    globalFilters: Array<H3.Report.FilterFieldColumn>;
}
export declare const reportState: {
    namespaced: boolean;
    state: ReportState;
    mutations: import("vuex").MutationTree<ReportState>;
    actions: import("vuex").ActionTree<ReportState, ReportState>;
    getters: import("vuex").GetterTree<ReportState, ReportState>;
};
declare const _default: import("vuex").Store<ReportState>;
export default _default;
