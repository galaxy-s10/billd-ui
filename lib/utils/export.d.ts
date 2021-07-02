/**
 * Table导出Excel
 * @param data
 * 参数所需数据接口： headRows, headColumns, bodyRows, summary, alias, title, colWidth
 */
declare function exportExcel(data: any): void;
/**
 * 转换单元格地址到Excel表示法： 如 {c: 5 列, r: 0 行} 到 A6
 * @param cell
 */
/**
 * 设置区域范围内的单元格样式
 * @param range
 * @param ws
 */
export default exportExcel;
export declare const downloadFile: (url: any, name: any) => void;
