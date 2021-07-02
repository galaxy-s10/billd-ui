import FilterMixins from "../../../mixins/filter-mixins";
import moment, { Moment } from "moment";
declare const ReportElementFilterDate_base: import("vue-class-component/lib/declarations").VueClass<FilterMixins>;
export default class ReportElementFilterDate extends ReportElementFilterDate_base {
    prefixCls: string;
    format: string;
    tiling: boolean;
    isOpenDate: boolean;
    dateValue: Moment | Array<Moment | null> | null | any;
    render(): any;
    /**
     *  监听值改变
     */
    changeField(value: any): void;
    /**
     *  时间选择参数
     */
    get timeParams(): false | {
        format: string;
        defaultValue: moment.Moment[];
    };
    /**
     *  组件是否打开
     */
    get isOpen(): boolean;
    /**
     *  弹窗组件当前挂载节点
     */
    getCurrentNode(): Node & ParentNode;
    /**
     * 日期选择模型
     */
    get mode(): any;
    get showTimeFlag(): boolean;
    /**
     *  日期格式
     */
    get dateFormat(): string;
    /**
     * 当期日改变了
     */
    handlePanelChange(value: any, mode: any): void;
    /**
     *  处理日期展开关闭
     */
    handleOpenDateChange(open: boolean): void;
    /**
     *  改变日期的值处理
     * @param date
     * @param dateString
     */
    changeValue(date: Moment, dateString: string): void;
    clearDate(): void;
    /**
     * 计算格式化的时间
     */
    getFormatDate(value: any): moment.Moment[];
}
export {};
