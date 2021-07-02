import Module from "./module";
/**
 * 数据显示设置模块
 */
export default class ReportAxisYSetModule extends Module implements H3.ReportModules.AxisYSet {
    title: string;
    display: boolean;
    default: boolean;
    constructor(def?: H3.Analysis.AxisYSetModule);
    handleChartData(chart: H3.Report.Chart): void;
}
