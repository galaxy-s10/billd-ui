/**
 * 氚云数据特殊处理
 */
/**
 * 处理数据
 * @param schemaModel 数据模型
 */
export declare const handleSchemaModal: (schemaModel: any) => H3.Report.FieldColumn[];
/**
 * 处理过滤条件
 */
export declare function handleFilters(schemas: Array<H3.Report.FieldColumn>, filters: Array<H3.Yun.Filter>): Array<H3.Report.FilterFieldColumn>;
