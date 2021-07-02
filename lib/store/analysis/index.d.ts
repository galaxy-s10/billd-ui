import { TabState } from "../../enum/module-state";
import { ModuleState } from "../../enum/module-state";
export declare class AnalysisState implements H3.Report.ReportAnalysisState {
    corpId: string;
    config: any;
    ownerId: string;
    dataSourceId: string;
    objectId: string;
    activeTab: TabState;
    chartsInfo: {
        [key: string]: H3.Analysis.ChartInfo;
    };
    charts: Array<H3.Report.Chart>;
    global: H3.Report.Global;
    activeChart: H3.Report.Chart | null;
    backupActiveChart: H3.Report.Chart | null;
    activeViewStatus: ModuleState;
    chartViewStatus: {};
    globalFilters: Array<H3.Report.FilterFieldColumn>;
    originalFilters: Array<H3.Yun.Filter>;
    chartsData: {
        [key: string]: Array<any>;
    };
    dataSources: {
        [dataSourceId: string]: H3.Report.DataSource;
    };
    globalModules: H3.ReportModules.ChartModules;
    chartsAlias: {
        [key: string]: {
            [key: string]: string;
        };
    };
}
export declare const analysisState: {
    namespaced: boolean;
    state: AnalysisState;
    mutations: import("vuex").MutationTree<AnalysisState>;
    actions: import("vuex").ActionTree<AnalysisState, AnalysisState>;
    getters: import("vuex").GetterTree<AnalysisState, AnalysisState>;
};
declare const _default: import("vuex").Store<AnalysisState>;
export default _default;
