import { ElementType } from "../../enum/chart-type";
/**
 * 获取基础图表类型的配置项
 * @param chartType 图表类型
 */
export declare const getBaseModules: (chartType?: ElementType) => H3.Analysis.ChartModules;
/***
 * 获取按照模块分组以后的功能模块模块群
 */
export declare const getChartModulesGroups: (modules: H3.Analysis.ChartModules) => H3.Analysis.ChartModules | {
    [key: string]: H3.Analysis.ModuleGroup;
};
/**
 * 每个功能模块的默认配置值
 */
export declare const defaultOptions: H3.Analysis.ChartModules;
/**
 * 数据限制
 * [[[0],[1]],[[2],[3]]] 表示0维0指标及0维1指标，1维0指标及1维1指标
 */
export declare const chartDMLimit: ElementType[][][];
export declare const role: Array<H3.Licence.Role>;
/**
 * 获取主图表类型
 * @param t 图表类型
 */
export declare const getMainType: (t: any) => any;
export default getBaseModules;
