export declare class ReportDataSourceState implements H3.Report.ReportDataSourceState {
    corpId: string;
    config: any;
    dataSourceId: string;
    groupId: string;
    title: string;
    activeNode: any | null;
    options: any;
    nodes: Array<any>;
    edges: Array<any>;
    models: Array<any>;
    merges: Array<any>;
    relations: Array<any>;
    computes: Array<any>;
    groups: Array<any>;
    originalNodes: Array<any>;
    originalEdges: Array<any>;
    isEdit: boolean;
}
export declare const dataSourceState: {
    namespaced: boolean;
    state: ReportDataSourceState;
    mutations: import("vuex").MutationTree<ReportDataSourceState>;
    actions: import("vuex").ActionTree<ReportDataSourceState, ReportDataSourceState>;
    getters: import("vuex").GetterTree<ReportDataSourceState, ReportDataSourceState>;
};
