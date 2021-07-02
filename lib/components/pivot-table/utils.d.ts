/**
 * 获取Object对象子集长度
 * @param obj
 * @param num
 * @param metric
 */
export declare function getObjectChildrenLength(obj: any, num: number, metric?: Array<H3.Report.FieldColumn>): number;
/**
 * 处理行数据
 * @param columns
 * @param tableColumns
 * @param level
 * @param parent
 * @param isRowNo
 */
export declare function handleColumns(columns: any, tableColumns: any, isRowNo?: boolean, multiColumns?: boolean, level?: number, parent?: any): void;
export declare function handleBodyRows(rows: any, tableRows: any, row?: any, level?: number): void;
export declare function handleRows(rows: any, metric?: Array<H3.Report.FieldColumn>, tableRows?: any, multiRows?: boolean, level?: number, multiKeys?: string): void;
export declare function handleTableData(columns: Array<H3.Report.FieldColumn>, rows: Array<H3.Report.FieldColumn>, metrics: Array<H3.Report.FieldColumn>, data: H3.PivotTable.Data, isRowNo?: boolean): {
    columns: any;
    rows: any;
};
