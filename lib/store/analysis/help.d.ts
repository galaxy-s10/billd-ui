/**
 * 处理返回数据
 * @param report
 */
export declare const handleAnalysisResponse: (report: H3.AnalysisAPI.reportInfo) => {
    objectId: string;
    elements: H3.Report.Chart[];
    reqGlobal: string;
    share: 0 | 1;
    chartsInfo: {
        [key: string]: any;
    };
};
/**
 * 处理数据
 * @param schemaModel 数据模型
 */
export declare const handleSchemaModal: (schemaModel: H3.ReportAPI.SchemaModel) => H3.Report.FieldColumn[];
/**
 * 处理过滤条件
 */
export declare function handleFilters(schemas: Array<H3.Report.FieldColumn>, filters: Array<H3.Yun.Filter>): Array<H3.Report.FilterFieldColumn>;
/**
 * 处理图表字段同步数据源的字段默认值
 * @param elements
 * @param dataSources
 */
export declare function handleChartFieldDefaultValues(elements: H3.Report.Chart[], dataSources: {
    [dataSourceId: string]: H3.Report.DataSource;
}): void;
/**
 * 获取完数据源之后处理全局筛选器
 * @param globalFilter
 * @param dataSources
 */
export declare function handleGlobalFilter(globalFilter: Array<H3.Report.FilterFieldColumn>, dataSources: H3.Report.DataSource): H3.Report.FilterFieldColumn[];
