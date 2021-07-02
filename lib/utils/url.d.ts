/**
 * 获取url参数值
 * @param key
 * @param url
 * @returns {{}}
 */
declare function getUrlVar(key: string, url?: string): any;
/**
 * 获取url所有的参数值
 * @param url
 * @returns {{}}
 */
declare function getUrlVars(url?: string): any;
/**
 * 特殊url，结构如:https://infrastructure.h3yun.com/home.html?v=20191021110828#/ReportDataSourceDesigner?id=6da9deec
 * 获取指定的参数
 */
export declare function getUrlNodeId(variable?: string): string;
declare const _default: {
    getUrlVars: typeof getUrlVars;
    getUrlVar: typeof getUrlVar;
};
export default _default;
