import FilterMixins from "../../../mixins/filter-mixins";
import moment, { Moment } from "moment";
declare const ReportElementFilterSingleDate_base: import("vue-class-component/lib/declarations").VueClass<FilterMixins>;
export default class ReportElementFilterSingleDate extends ReportElementFilterSingleDate_base {
    prefixCls: string;
    format: string;
    tiling: boolean;
    isOpenDate: boolean;
    dateValue: Moment | Array<Moment | null> | null | any;
    agileValue: string;
    render(): any;
    get selectList(): Array<{
        value: string;
        label: string;
    }>;
    /**
     * 监听格式的变化
     */
    onFormulaChanged(newVal: any, oldVal: any): void;
    /**
     *  监听值改变
     */
    changeField(value: any): void;
    /**
     *  时间选择参数
     */
    get timeParams(): false | {
        format: string;
        defaultValue: moment.Moment;
    };
    /**
     *  组件是否打开
     */
    get isOpen(): boolean;
    /**
     *  弹窗组件当前挂载节点
     */
    getCurrentNode(): Node & ParentNode;
    get showTimeFlag(): boolean;
    /**
     *  日期格式
     */
    get dateFormat(): string;
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
     *  自定义日期改变
     * @param value
     */
    agileTimeChange(value: string): void;
}
export {};
