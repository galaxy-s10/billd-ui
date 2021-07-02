/**
 * 计算格式化后的明细表格式
 * @param date
 */
export declare const convertDate: (value: string | Date | Array<string>, options: H3.Report.DateFormat) => string | Array<string>;
/**
 * 处理 2019年 2019年第3季度 2019年5月 2019年第7周 2019年第123日（年 季度 月 周 日）
 * @param date
 * dateCNFormat('2019年第7周');
 */
export declare const dateCNFormat: (date: string) => any[];
/**
 * 时间转换
 * @param date  时间对象
 * @param fmt  YYYY-MM-DD HH:mm:ss q季度
 */
export declare const dateFormat: (date: Date, fmt: string) => string;
declare const _default: {
    dateFormat: (date: Date, fmt: string) => string;
};
export default _default;
