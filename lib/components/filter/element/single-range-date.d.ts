import FilterMixins from "../../../mixins/filter-mixins";
import { Moment } from "moment";
declare const ReportElementFilterDate_base: import("vue-class-component/lib/declarations").VueClass<FilterMixins>;
export default class ReportElementFilterDate extends ReportElementFilterDate_base {
    prefixCls: string;
    format: string;
    tiling: boolean;
    isOpenDate: boolean;
    startValue: Moment | Moment[] | null;
    endValue: Moment | Moment[] | null;
    dateValue: Array<string | null> | null | any;
    toggleOpen: boolean;
    timeParams: any;
    render(): any;
    /**
     *  监听值改变，在范围日历和单范围日历切换需要
     */
    changeField(value: any): void;
    /**
     *  开始时间选择参数
     */
    get startTimeParams(): any;
    /**
     *  结束时间选择参数
     */
    get endTimeParams(): any;
    /**
     *  组件是否打开
     */
    get isOpen(): boolean;
    /**
     *  组件是否打开
     *  @bol  点击left/right true/false
     */
    handleSelect(bol: boolean): void;
    /**
     *  弹窗组件当前挂载节点
     */
    getCurrentNode(): Node & ParentNode;
    /**
     *  禁用开始日期
     */
    disabledStartDate(startValue: Moment | null): boolean;
    /**
     *  禁用结束日期
     */
    disabledEndDate(endValue: Moment | null): boolean;
    /**
     *  禁用部分小时
     */
    disabledHours(): any[];
    /**
     *  禁用部分分钟
     */
    disabledMinutes(selectedHour: number): any[];
    /**
     *  精确: 日期 / 日期时间
     */
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
     *  改变开始日期的值处理
     * @param date
     * @param dateString
     */
    changeValue(date: Moment, dateString: string): void;
    clearDate(): void;
}
export {};
