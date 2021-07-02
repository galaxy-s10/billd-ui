/**
 * 数值转换
 * @param value
 * @param comma
 * @param percent
 * @param fraction
 */
export declare function convertNumber(value: number | string, { fraction, comma, percent }: H3.Report.NumberFormat): string;
/**
 * 大数字转换中文尾缀
 * @param value
 */
export declare function stringNumber(value: number): string | number;
export declare function commaFormat(str: string): string;
declare const _default: {
    convertNumber: typeof convertNumber;
    stringNumber: typeof stringNumber;
};
export default _default;
