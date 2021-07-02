declare class GlobalModules {
    data: H3.ReportModules.ChartDataModules;
    styles: H3.ReportModules.ChartStylesModules;
    constructor(global: H3.Report.Global);
    initModules(global: H3.Report.Global, type: string, moduleKeys: string[]): void;
    initElementModules(): void;
    /**
     * 处理模块初始化之后数据
     * @param global
     */
    handleModules(global: H3.Report.Global): void;
}
declare const _default: (global?: H3.Report.Global | any) => {
    global: any;
    modules: GlobalModules;
};
/**
 * 初始化全局配置
 */
export default _default;
